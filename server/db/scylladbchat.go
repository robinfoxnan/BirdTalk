package db

import (
	"birdtalk/server/model"
	"fmt"
	"github.com/gocql/gocql"
	"github.com/scylladb/gocqlx/v2/qb"
	"github.com/scylladb/gocqlx/v2/table"
)

// 定义表的元数据
var metaPrivateChatData = table.Metadata{
	Name:    "pchat",
	Columns: []string{"pk", "uid1", "uid2", "id", "usid", "tm", "tm1", "tm2", "io", "st", "ct", "mt", "pr", "ref", "draf"},
	PartKey: []string{"pk"},
	SortKey: []string{"uid1", "tm", "id"},
}

var metaGroupChatData = table.Metadata{
	Name:    "gchat",
	Columns: []string{"pk", "gid", "uid", "id", "usid", "tm", "res", "st", "ct", "mt", "pr", "ref", "draf"},
	PartKey: []string{"pk"},
	SortKey: []string{"gid", "tm", "id"},
}

// 写2次，首先是发方A，然后是收方B
func (me *Scylla) SavePChatData(msg *model.PChatDataStore, pk2 int) error {
	// 同时加入粉丝表
	// 创建 Batch
	batch := me.session.Session.NewBatch(gocql.LoggedBatch)
	batch.Cons = gocql.LocalOne

	// 发方的IO = 0:OUT
	insertFirst := qb.Insert(PrivateChatTableName).Columns(metaPrivateChatData.Columns...).Query(me.session).Consistency(gocql.One)
	defer insertFirst.Release()
	batch.Query(insertFirst.Statement(), msg.Pk, msg.Uid1, msg.Uid2,
		msg.Id, msg.Usid, msg.Tm, msg.Tm1, msg.Tm2,
		model.ChatDataIOOut, msg.St, msg.Ct, msg.Mt,
		msg.Print, msg.Ref, msg.Draf)

	// 收方的IO = 1:IN
	insertSecond := qb.Insert(PrivateChatTableName).Columns(metaPrivateChatData.Columns...).Query(me.session).Consistency(gocql.One)
	defer insertSecond.Release()
	batch.Query(insertSecond.Statement(), pk2, msg.Uid2, msg.Uid1,
		msg.Id, msg.Usid, msg.Tm, msg.Tm1, msg.Tm2,
		model.ChatDataIOIn, msg.St, msg.Ct, msg.Mt,
		msg.Print, msg.Ref, msg.Draf)

	if err := me.session.ExecuteBatch(batch); err != nil {
		return err
	}
	return nil
}

// 对发送方设置回执，收方不需要设置
func (me *Scylla) SetPChatRecvReply(pk1, pk2, uid1, uid2, tm, msgId, tm1 int64) error {
	builder := qb.Update(PrivateChatTableName)

	builder.Set("tm1")

	builder.Where(qb.Eq("pk"), qb.Eq("uid1"), qb.Eq("tm"), qb.Eq("id"))

	query := builder.Query(me.session)
	defer query.Release()

	query.Consistency(gocql.One)
	query.Bind(tm1, pk1, uid1, tm, msgId)

	err := query.Exec()
	return err
}

func (me *Scylla) SetPChatReadReply(pk1, pk2, uid1, uid2, tm, msgId, tm2 int64) error {
	builder := qb.Update(PrivateChatTableName)

	builder.Set("tm2")

	builder.Where(qb.Eq("pk"), qb.Eq("uid1"), qb.Eq("tm"), qb.Eq("id"))

	query := builder.Query(me.session)
	defer query.Release()

	query.Consistency(gocql.One)
	query.Bind(tm2, pk1, uid1, tm, msgId)

	err := query.Exec()
	return err
}

func (me *Scylla) SetPChatRecvReadReply(pk1, pk2, uid1, uid2, tm, msgId, tm1, tm2 int64) error {
	builder := qb.Update(PrivateChatTableName)

	builder.Set("tm1", "tm2")

	builder.Where(qb.Eq("pk"), qb.Eq("uid1"), qb.Eq("tm"), qb.Eq("id"))

	query := builder.Query(me.session)
	defer query.Release()

	query.Consistency(gocql.One)
	query.Bind(tm1, tm2, pk1, uid1, tm, msgId)

	err := query.Exec()
	return err
}

// 设置删除，不可逆
func (me *Scylla) SetPChatMsgDeleted(pk1, pk2, uid1, uid2, tm, msgId int64) error {
	batch := me.session.Session.NewBatch(gocql.LoggedBatch)
	batch.Cons = gocql.LocalOne

	// 发方的DrafStateDel
	builder1 := qb.Update(PrivateChatTableName)
	builder1.Set("st").Where(qb.Eq("pk"), qb.Eq("uid1"), qb.Eq("tm"), qb.Eq("id"))
	query1 := builder1.Query(me.session)
	defer query1.Release()
	batch.Query(query1.Statement(), model.DrafStateDel, pk1, uid1, tm, msgId)

	// 收方DrafStateDel
	//builder2 := qb.Update(PrivateChatTableName).Set("st").Where(qb.Eq("pk"), qb.Eq("uid1"), qb.Eq("id"))
	query2 := builder1.Query(me.session)
	defer query2.Release()
	batch.Query(query2.Statement(), model.DrafStateDel, pk2, uid2, tm, msgId)

	if err := me.session.ExecuteBatch(batch); err != nil {
		return err
	}
	return nil
}

// 查找
func (me *Scylla) FindPChatMsg(pk, uid, fromTm int64, pageSize uint) ([]model.PChatDataStore, error) {

	builder := qb.Select(PrivateChatTableName).Columns(metaPrivateChatData.Columns...)
	builder.Where(qb.Eq("pk"), qb.Eq("uid1"), qb.Gt("tm"))

	builder.OrderBy("uid1", qb.ASC)
	builder.OrderBy("tm", qb.ASC)

	builder.AllowFiltering()
	builder.Limit(pageSize)

	q := builder.Query(me.session)
	defer q.Release()

	q.Consistency(gocql.One)

	q.Bind(pk, uid, fromTm)

	var lst []model.PChatDataStore

	err := q.Select(&lst)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	return lst, nil
}

// ///////////////////////////////////////////
// 写1次，
func (me *Scylla) SaveGChatData(msg *model.GChatDataStore) error {
	insertChat := qb.Insert(GroupChatTableName).Columns(metaGroupChatData.Columns...).Query(me.session).Consistency(gocql.One)
	insertChat.BindStruct(msg)
	if err := insertChat.ExecRelease(); err != nil {
		//fmt.Println(err)
		return err
	}
	return nil
}

// 设置删除，不可逆
func (me *Scylla) SetGChatMsgDeleted(pk, gid, tm, msgId int64) error {

	builder := qb.Update(GroupChatTableName)
	builder.Set("st").Where(qb.Eq("pk"), qb.Eq("gid"), qb.Eq("tm"), qb.Eq("id"))
	query := builder.Query(me.session)
	defer query.Release()

	query.Consistency(gocql.One)
	query.Bind(model.DrafStateDel, pk, gid, tm, msgId)
	err := query.Exec()
	return err
}

// 查找
func (me *Scylla) FindGChatMsg(pk, gid, fromTm int64, pageSize uint) ([]model.GChatDataStore, error) {
	builder := qb.Select(GroupChatTableName).Columns(metaGroupChatData.Columns...)
	builder.Where(qb.Eq("pk"), qb.Eq("gid"), qb.Gt("tm"))

	builder.OrderBy("gid", qb.ASC)
	builder.OrderBy("tm", qb.ASC)

	builder.AllowFiltering()
	builder.Limit(pageSize)

	q := builder.Query(me.session)
	defer q.Release()

	q.Consistency(gocql.One)

	q.Bind(pk, gid, fromTm)

	var lst []model.GChatDataStore

	err := q.Select(&lst)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	return lst, nil
}

// todo: 是否需要添加批量写入多条消息，暂时不做，因为得知写入出错的条目，就需要逐条处理；
// 在集群模式下可以尝试，从消息队列读取后批量处理；
