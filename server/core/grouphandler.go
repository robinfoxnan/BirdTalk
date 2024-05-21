package core

import (
	"birdtalk/server/db"
	"birdtalk/server/model"
	"birdtalk/server/pbmodel"
	"birdtalk/server/utils"
	"errors"
	"go.uber.org/zap"
	"strconv"
	"strings"
)

// 群组相关的基本操作
func handleGroupOp(msg *pbmodel.Msg, session *Session) {
	groupOpMsg := msg.GetPlainMsg().GetGroupOp()
	if groupOpMsg == nil {
		Globals.Logger.Debug("receive wrong group op msg",
			zap.Int64("sid", session.Sid),
			zap.Int64("uid", session.UserID))
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group op  is null", nil, session)
		return
	}

	// 都需要验证是否登录与权限
	ok := checkUserLogin(session)
	if !ok {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTNotLogin), "should login first.", nil, session)
		return
	}

	opCode := groupOpMsg.Operation
	switch opCode {
	case pbmodel.GroupOperationType_GroupCreate: // 创建
		handleGroupCreateOp(msg, session)
		break
	case pbmodel.GroupOperationType_GroupDissolve: // 解散
		handleGroupDissolveOp(msg, session)
		break
	case pbmodel.GroupOperationType_GroupSetInfo: // 设置信息
		handleGroupSetBasicInfo(msg, session)
		break
	case pbmodel.GroupOperationType_GroupKickMember: // 踢人
		handleGroupKickOut(msg, session)
		break
	case pbmodel.GroupOperationType_GroupInviteRequest: // 邀请
		handleInviteSomeone(msg, session)
		break
	case pbmodel.GroupOperationType_GroupInviteAnswer: // 邀请的应答
		handleInviteAnswer(msg, session)
		break // 邀请后处理结果
	case pbmodel.GroupOperationType_GroupJoinRequest:
		handleGroupJoinReq(msg, session)
		break // 加入请求
	case pbmodel.GroupOperationType_GroupJoinAnswer:
		handleGroupJoinAnswer(msg, session)
		break // 加入请求的处理，同意、拒绝、问题
	case pbmodel.GroupOperationType_GroupQuit:
		handleGroupMemberQuit(msg, session)
		break // 退出群组
	case pbmodel.GroupOperationType_GroupAddAdmin:
		handleGroupSetSomeoneAsAdmin(msg, session)
		break // 增加管理员
	case pbmodel.GroupOperationType_GroupDelAdmin:
		handleGroupRemoveSomeoneFromAdmin(msg, session)
		break // 删除管理员
	case pbmodel.GroupOperationType_GroupTransferOwner:
		handleGroupTransferOwner(msg, session)
		break // 转让群主
		// 可以根据需要添加其他群组操作
	case pbmodel.GroupOperationType_GroupSetMemberInfo:
		handleSetMemberInfo(msg, session)
		break
		// 设置自己在群中的信息
	case pbmodel.GroupOperationType_GroupSearch:
		handleGroupSearch(msg, session)
		break // 搜素群组
	case pbmodel.GroupOperationType_GroupSearchMember:
		handleGroupSearchMember(msg, session)
		break // 人员
	}

	return
}

// 用户会应答邀请，管理员会应答申请操作，这里需要处理并转发
func handleGroupOpRet(msg *pbmodel.Msg, session *Session) {

	groupOpMsgRet := msg.GetPlainMsg().GetGroupOpRet()
	if groupOpMsgRet == nil {
		Globals.Logger.Debug("receive wrong group op msg",
			zap.Int64("sid", session.Sid),
			zap.Int64("uid", session.UserID))
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group op  is null", nil, session)
		return
	}

	// 都需要验证是否登录与权限
	ok := checkUserLogin(session)
	if !ok {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTNotLogin), "should login first.", nil, session)
		return
	}

	opCode := groupOpMsgRet.Operation
	switch opCode {
	case pbmodel.GroupOperationType_GroupInviteAnswer:
		break
	case pbmodel.GroupOperationType_GroupJoinAnswer:
		break
	default:
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTWrongCode), "group op ret has a wrong opcode", nil, session)
	}
	return
}

// 创建群
func handleGroupCreateOp(msg *pbmodel.Msg, session *Session) {
	groupInfo := msg.GetPlainMsg().GetGroupOp().GetGroup()
	if groupInfo == nil {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group create operation group info is null", nil, session)
		return
	}

	if len(groupInfo.GroupType) == 0 {
		groupInfo.GroupType = "chat"
	} else {
		str := strings.ToLower(groupInfo.GroupType)
		if str != "chat" && str != "channel" {
			sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "groupInfo.groupType is wrong, must be chat or channel",
				map[string]string{
					"groupinfo.grouptype": str,
				}, session)
			return
		}
	}

	var err error
	groupInfo.GroupId, err = Globals.redisCli.GetNextGroupId()
	if len(groupInfo.GroupName) == 0 {
		groupInfo.GroupName = "group" + strconv.FormatInt(groupInfo.GroupId, 10)
	}

	params := groupInfo.GetParams()
	if params != nil {
		v, ok := params["visibility"]
		if ok {

			temp := strings.ToLower(v)
			if temp != "private" && temp != "public" {
				params["visibility"] = "public"
			}
		}

		v, ok = params["brief"]
		if !ok {
			params["brief"] = ""
		}

		v, ok = params["brief"]
		if !ok {
			params["brief"] = ""
		}

	} else {
		params = map[string]string{
			"visibility": "public",
			"brief":      "",
			"icon":       "",
		}
		groupInfo.Params = params
	}

	// 保存到数据库
	group, err := saveNewGroup(groupInfo, session)
	if group == nil || err != nil {

		return
	}

	// 如果设置了初始用户，则需要
	groupMems := msg.GetPlainMsg().GetGroupOp().GetMembers()
	if groupMems == nil || len(groupMems) == 0 {
		return
	}

	//members := make([]model.GroupMemberStore, len(groupMems))

	for _, mem := range groupMems {

		memUser, b, _ := findUserInfo(mem.UserId)
		if memUser == nil || b == false {
			continue
		}

		member := model.GroupMemberStore{
			Pk:   db.ComputePk(groupInfo.GroupId),
			Gid:  groupInfo.GroupId,
			Uid:  session.UserID,
			Tm:   utils.GetTimeStamp(),
			Role: model.RoleGroupMember,
			Nick: memUser.NickName,
		}

		item := model.UserInGStore{
			Pk:  db.ComputePk(session.UserID),
			Uid: session.UserID,
			Gid: groupInfo.GroupId,
		}

		// 保存数据库
		Globals.scyllaCli.InsertGroupMember(&member, &item)

		// redis, 用户所在群
		Globals.redisCli.SetUserJoinGroup(session.UserID, groupInfo.GroupId)

		// 添加到内存
		group.AddMember(memUser.UserId, memUser.NickName)
	}

	// todo:保存操作记录

	// 通知相关用户，建立了新群
	sendBackGroupOpRet(pbmodel.GroupOperationType_GroupCreate,
		groupInfo,
		msg.GetPlainMsg().GetGroupOp().ReqMem,
		msg.GetPlainMsg().GetGroupOp().Members,
		"ok", "", session)

	return
}

// 解散群
func handleGroupDissolveOp(msg *pbmodel.Msg, session *Session) {
	groupInfo := msg.GetPlainMsg().GetGroupOp().GetGroup()
	if groupInfo == nil {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group dissolve operation group info is null", nil, session)
		return
	}

	group, _ := findGroup(groupInfo.GroupId)
	if group == nil {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group dissolve operation group info id is wrong", nil, session)
		return
	}
	if !group.IsOwner(session.UserID) {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group dissolve operation, you are not owner", nil, session)
		return
	}

	// 解散群： 在基础信息中设置标记
	_, err := Globals.mongoCli.UpdateGroupInfoPart(groupInfo.GroupId, map[string]interface{}{"params.status": "deleted"}, nil)
	if err != nil {

	}
	err = Globals.redisCli.SetGroupInfoPart(groupInfo.GroupId, "Params.status", "deleted")
	group.SetDeleted()

	// 删除群内的所有用户
	err = Globals.scyllaCli.DissolveGroupAllMember(db.ComputePk(groupInfo.GroupId), groupInfo.GroupId)
	err = Globals.redisCli.RemoveAllUserOfGroup(groupInfo.GroupId)

	// 群内还需要通知用户解散
	reqMem := msg.GetPlainMsg().GetGroupOp().GetReqMem()
	if reqMem == nil {
		reqMem = &pbmodel.GroupMember{
			UserId:  session.UserID,
			Nick:    "",
			Icon:    "",
			Role:    "",
			GroupId: groupInfo.GroupId,
			Params:  nil,
		}
	}
	msgRet := createGroupOpRetMsg(pbmodel.GroupOperationType_GroupDissolve, groupInfo,
		reqMem,
		nil,
		"ok",
		"", session)

	// 通知所有用户
	notifyGroupMembers(groupInfo.GroupId, msgRet)

	// todo:
	// 如果是集群模式，通知其他的服务器同步内存中的信息
	if Globals.Config.Server.ClusterMode {

	}

	// 清理内存
	group.ClearMember()

	// 各个用户所在群，删除一个
	membersId := group.GetMembers()
	for _, mId := range membersId {
		err = Globals.scyllaCli.DeleteUserInG(db.ComputePk(mId), mId, groupInfo.GroupId)
		Globals.redisCli.SetUserLeaveGroup(mId, groupInfo.GroupId)
		user, ok := Globals.uc.GetUser(mId)
		if user != nil && ok {
			user.SetLeaveGroup(groupInfo.GroupId)
		}
	}

	// redis中群组用户分布情况
	Globals.redisCli.RemoveActiveGroupRelated(groupInfo.GroupId)

	return
}

// 设置基础信息，这个也是只有管理员才可以设置，不同于微信的
func handleGroupSetBasicInfo(msg *pbmodel.Msg, session *Session) {
	groupInfo := msg.GetPlainMsg().GetGroupOp().GetGroup()
	if groupInfo == nil {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group set info operation group info is null", nil, session)
		return
	}

	group, _ := findGroup(groupInfo.GroupId)
	if group == nil {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group set info operation group info id is wrong", nil, session)
		return
	}

	isAdmin := group.IsAdmin(session.UserID)
	if !isAdmin {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group set info operation, you are not admin", nil, session)
		return
	}
	// 先合并到内存，更新到数据库和redis
	group.MergeGroupInfo(groupInfo)
	_, err := Globals.mongoCli.UpdateGroupInfo(group.GetGroupInfo())
	if err != nil {

	}

	err = Globals.redisCli.SetGroupInfo(group.GetGroupInfo())
	if err != nil {

	}
	// 通知所有的用户
	reqMem := msg.GetPlainMsg().GetGroupOp().GetReqMem()
	if reqMem == nil {
		reqMem = &pbmodel.GroupMember{
			UserId:  session.UserID,
			Nick:    "",
			Icon:    "",
			Role:    "",
			GroupId: groupInfo.GroupId,
			Params:  nil,
		}
	}
	msgRet := createGroupOpRetMsg(pbmodel.GroupOperationType_GroupSetInfo,
		group.GetGroupInfo(),
		reqMem,
		nil,
		"ok",
		"", session)

	// 通知所有用户
	notifyGroupMembers(groupInfo.GroupId, msgRet)

	// todo:
	// 如果是集群模式，通知其他的服务器同步内存中的信息
	if Globals.Config.Server.ClusterMode {

	}

}

// 踢人
func handleGroupKickOut(msg *pbmodel.Msg, session *Session) {
	groupInfo := msg.GetPlainMsg().GetGroupOp().GetGroup()
	if groupInfo == nil {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group kick operation group info is null", nil, session)
		return
	}

	group, _ := findGroup(groupInfo.GroupId)
	if group == nil {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group kick operation group info id is wrong", nil, session)
		return
	}

	isAdmin := group.IsAdmin(session.UserID)
	if !isAdmin {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group kick operation, you are not admin", nil, session)
		return
	}

	opMsg := msg.GetPlainMsg().GetGroupOp()
	uid := int64(0)
	str, ok := opMsg.Params["uid"]
	if !ok || str == "" {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group kick operation, params.uid is wrong", nil, session)
		return
	}

	uid, err := strconv.ParseInt(str, 10, 64)
	if err != nil {
		sendBackErrorMsg(int(pbmodel.ErrorMsgType_ErrTMsgContent), "group kick operation, params.uid is not an id", nil, session)
		return
	}

	// 同时操作2个表
	Globals.scyllaCli.DeleteGroupMember(db.ComputePk(groupInfo.GroupId), db.ComputePk(uid), groupInfo.GroupId, uid)

	// 从成员表中删除
	Globals.redisCli.RemoveGroupMembers(groupInfo.GroupId, []int64{uid})
	// 从分布表中删除
	index := int64(Globals.Config.Server.HostIndex)
	Globals.redisCli.RemoveActiveGroupMembersLua(groupInfo.GroupId, index, []int64{uid})
	// 标记用户的所属群
	Globals.redisCli.SetUserLeaveGroup(uid, groupInfo.GroupId)

	// 内存中删除成员
	group.RemoveMember(uid)

	// 内存中，用户退出组，
	user, ok := Globals.uc.GetUser(uid)
	if user != nil {
		user.SetLeaveGroup(groupInfo.GroupId)
	}

	// 通知所有的用户
	reqMem := msg.GetPlainMsg().GetGroupOp().GetReqMem()
	if reqMem == nil {
		reqMem = &pbmodel.GroupMember{
			UserId:  session.UserID,
			Nick:    "",
			Icon:    "",
			Role:    "",
			GroupId: groupInfo.GroupId,
			Params:  nil,
		}
	}

	kickMember := &pbmodel.GroupMember{
		UserId:  uid,
		Nick:    "",
		Icon:    "",
		Role:    "",
		GroupId: groupInfo.GroupId,
		Params:  nil,
	}
	msgRet := createGroupOpRetMsg(pbmodel.GroupOperationType_GroupKickMember,
		group.GetGroupInfo(),
		reqMem,
		[]*pbmodel.GroupMember{
			kickMember,
		},
		"ok",
		"", session)

	// 通知所有用户
	notifyGroupMembers(groupInfo.GroupId, msgRet)

	// todo:
	// 如果是集群模式，通知其他的服务器同步内存中的信息
	// 通知该用户所在的机器更改user
	if Globals.Config.Server.ClusterMode {

	}

}

// 邀请某人
func handleInviteSomeone(msg *pbmodel.Msg, session *Session) {

}

// 邀请的回答
func handleInviteAnswer(msg *pbmodel.Msg, session *Session) {

}

// 加入申请
func handleGroupJoinReq(msg *pbmodel.Msg, session *Session) {

}

// 某个管理员对加入申请的应答
func handleGroupJoinAnswer(msg *pbmodel.Msg, session *Session) {

}

// 退群申请
func handleGroupMemberQuit(msg *pbmodel.Msg, session *Session) {

}

// 设置某人为群管理员
func handleGroupSetSomeoneAsAdmin(msg *pbmodel.Msg, session *Session) {

}

// 删除管理员权限
func handleGroupRemoveSomeoneFromAdmin(msg *pbmodel.Msg, session *Session) {

}

// 转让群主
func handleGroupTransferOwner(msg *pbmodel.Msg, session *Session) {

}

// 设置自己的在群内的信息
func handleSetMemberInfo(msg *pbmodel.Msg, session *Session) {

}

// 搜群
func handleGroupSearch(msg *pbmodel.Msg, session *Session) {

}

// 搜群内的成员
func handleGroupSearchMember(msg *pbmodel.Msg, session *Session) {

}

// 保存新建立的群的基础信息
func saveNewGroup(groupInfo *pbmodel.GroupInfo, session *Session) (*model.Group, error) {

	// 保存基础信息
	err := Globals.mongoCli.CreateNewGroup(groupInfo)
	if err != nil {
		return nil, err
	}

	err = Globals.redisCli.SetGroupInfo(groupInfo)
	if err != nil {
		return nil, err
	}

	// 保存群主
	nick := ""
	user := session.GetUser()
	if user != nil {
		nick = user.GetNickName()
	}

	mem := model.GroupMemberStore{
		Pk:   db.ComputePk(groupInfo.GroupId),
		Gid:  groupInfo.GroupId,
		Uid:  session.UserID,
		Tm:   utils.GetTimeStamp(),
		Role: model.RoleGroupOwner,
		Nick: nick,
	}

	item := model.UserInGStore{
		Pk:  db.ComputePk(session.UserID),
		Uid: session.UserID,
		Gid: groupInfo.GroupId,
	}
	// 数据库
	err = Globals.scyllaCli.InsertGroupMember(&mem, &item)

	// redis中
	Globals.redisCli.SetUserJoinGroup(session.UserID, groupInfo.GroupId)

	// 将群信息添加到内存
	g := model.NewGroupFromInfo(groupInfo)
	Globals.grc.InsertGroup(groupInfo.GroupId, g)
	// 设置群主
	g.SetOwner(user.UserId, user.GetNickName())

	// 设置用户在群中
	user.SetInGroup([]int64{groupInfo.GroupId})

	return g, err
}

func createGroupOpRetMsg(opCode pbmodel.GroupOperationType,
	groupInfo *pbmodel.GroupInfo,
	reqMem *pbmodel.GroupMember,
	members []*pbmodel.GroupMember,
	ret string, detail string, session *Session) *pbmodel.Msg {
	msgGroupOpRet := pbmodel.GroupOpResult{
		ReqMem:    reqMem,
		Operation: opCode,
		Result:    ret,
		Detail:    detail,
		Group:     groupInfo,
		Members:   members,
		Params:    nil,
	}

	msgPlain := pbmodel.MsgPlain{
		Message: &pbmodel.MsgPlain_GroupOpRet{
			GroupOpRet: &msgGroupOpRet,
		},
	}

	msg := pbmodel.Msg{
		Version:  int32(ProtocolVersion),
		KeyPrint: 0,
		Tm:       utils.GetTimeStamp(),
		MsgType:  pbmodel.ComMsgType_MsgTGroupOpRet,
		SubType:  0,
		Message: &pbmodel.Msg_PlainMsg{
			PlainMsg: &msgPlain,
		},
	}
	return &msg
}

// 应答群组操作结果
func sendBackGroupOpRet(opCode pbmodel.GroupOperationType,
	groupInfo *pbmodel.GroupInfo,
	reqMem *pbmodel.GroupMember,
	members []*pbmodel.GroupMember,
	ret string, detail string, session *Session) {

	msg := createGroupOpRetMsg(opCode, groupInfo, reqMem, members, ret, detail, session)
	notifyGroupMembers(groupInfo.GroupId, msg)

}

// 从数据库中加载Group基础信息
func findGroup(gid int64) (*model.Group, error) {
	group, ok := Globals.grc.GetGroup(gid)
	if ok && group != nil {
		return group, nil
	}

	// 从redis中查找群
	groupInfo, err := Globals.redisCli.GetGroupInfoById(gid)
	if groupInfo != nil {
		group = model.NewGroupFromInfo(groupInfo)
		Globals.grc.InsertGroup(gid, group)
		return group, nil
	}

	lst, err := Globals.mongoCli.FindGroupById(gid)
	if lst == nil || len(lst) == 0 {
		return nil, err
	}

	if len(lst) > 1 {
		Globals.Logger.Fatal("find more than one group by id", zap.Int64("gid", gid))
		return nil, errors.New("find more than one group by id")
	}

	groupInfo = &lst[0]

	// 保存到当前的群基础信息到redis中
	Globals.redisCli.SetGroupInfo(groupInfo)

	// 保存到内存
	group = model.NewGroupFromInfo(groupInfo)
	Globals.grc.InsertGroup(gid, group)

	return group, nil

}
