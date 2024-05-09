package model

import (
	"birdtalk/server/pbmodel"
	"birdtalk/server/utils"
	"strconv"
	"sync"
)

// 最多支持32个状态
const (
	UserStatusNone       = 0         // 等待 HELLO 包
	UserStatusExchange   = 1 << iota // 等待秘钥交换1
	UserWaitLogin                    // 可以继续
	UserStatusRegister               // 收到了注册申请，等待验证码2,不需要验证则继续UserReady
	UserStatusLogin                  // 收到了登录申请，需要等待验证码4,不需要验证则继续UserReady
	UserStatusOk                     // 登录完成8
	UserStatusValidate               // 验证状态16，
	UserStatusChangeInfo             // 32
)

// 使用uint16表示针对某个人的权限设置，每1位都是设置1允许，0禁止
const (
	PermissionMP2PNone     = 0
	PermissionMaskFriend   = 1 << iota // 1是否关注 1
	PermissionMaskChat                 // 2是否可以发消息
	PermissionMaskViewInfo             // 3是否查看敏感信息，手机，邮件
	PermissionMaskViewArt              // 4是否可以查看帖子
	PermissionMaskAdd                  // 5加好友，默认是开放的, 不开放就是拉黑
	PermissionMaskViewLoc              // 6是否可以查看位置
	PermissionMask7
	PermissionMask8
	PermissionMask9
	PermissionMask10
	PermissionMask11
	PermissionMask12
	PermissionMask13
	PermissionMask14
	PermissionMaskExist
	PermissionMask16

	// 陌生人也是如此，左移16位
)

// 如果你是对方好友，即对方关注你了，你得到的权限是除了看位置信息，其他都可以！
const DefaultPermissionP2P = PermissionMaskExist | PermissionMaskAdd | PermissionMaskChat | PermissionMaskViewInfo | PermissionMaskViewArt

// 如果你是陌生人，那么默认可以添加好友，可以看帖子
const DefaultPermissionStranger = PermissionMaskExist | ((PermissionMaskAdd | PermissionMaskViewArt) << 16)

// 默认朋友权限的设置
const DefaultPermission = DefaultPermissionP2P | DefaultPermissionStranger

// 用户加载数据的掩码
const (
	UserLoadStatusInfo       = 1 << iota // 1
	UserLoadStatusPermission             // 2
	UserLoadStatusFollow                 // 4
	UserLoadStatusFans                   // 8
	UserLoadStatusGroups                 // 16
)

// 所有的掩码一起设置
const UserLoadStatusAll = UserLoadStatusInfo | UserLoadStatusPermission | UserLoadStatusFollow | UserLoadStatusFans | UserLoadStatusGroups

// 相关redis表
// 1：用户基础信息表，bsui_
// 2：用户好友权限表，bsufb_
// 4：用户关注表，bsufo_
// 8：用户粉丝表，bsufa_
// 16：用户的指纹表，bsut_ 这个存储在session 中
// 32：用户所属群组，bsuing_
// 64：用户session 分布表  30分钟 bsud_

// 内存缓存使用的用户模型
type User struct {
	pbmodel.UserInfo
	SessionId []int64 // 多用户会话ID
	Status    uint32
	MaskLoad  uint32 // 目前的加载状态
	//ParamsList map[string]string // 某些状态下的附加信息都放在这里，比如验证码

	Block      map[int64]uint64 // 权限控制列表，高位是对方给自己的权限，低32位是自己向对方的权限
	Following  map[int64]bool   // 关注列表
	Fans       map[int64]bool   // 粉丝列表
	Groups     map[int64]bool   // 群组
	SessionDis map[int64]int32  // 会话分布表

	NumFans   int64
	NumFollow int64

	LastActiveTm int64

	Mu sync.Mutex
}

// New 函数用于创建一个 User 实例
func NewUser() *User {
	userInfo := pbmodel.UserInfo{}
	return NewUserFromInfo(&userInfo)
}

// New 函数用于创建一个 User 实例
func NewUserFromInfo(userInfo *pbmodel.UserInfo) *User {
	return &User{
		UserInfo:  *userInfo,        // 使用传入的 *pbmodel.UserInfo 参数
		SessionId: make([]int64, 0), // 初始化 sessionId 切片
		Status:    UserStatusNone,
		Mu:        sync.Mutex{}, // 初始化互斥锁

		//ParamsList: make(map[string]string),

		Following: make(map[int64]bool),
		Fans:      make(map[int64]bool),
		Block:     make(map[int64]uint64),

		Groups:       make(map[int64]bool),
		SessionDis:   make(map[int64]int32),
		LastActiveTm: utils.GetTimeStamp(),
	}
}

func (u *User) SetDeleted() {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	if u.UserInfo.Params == nil {
		u.UserInfo.Params = map[string]string{
			"status": "deleted",
		}
	} else {
		u.UserInfo.Params["status"] = "deleted"
	}
}

func (u *User) SetDisabled(reason string) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	if u.UserInfo.Params == nil {
		u.UserInfo.Params = map[string]string{
			"status": "disabled",
			"reason": reason,
		}
	} else {
		u.UserInfo.Params["status"] = "disabled"
		u.UserInfo.Params["reason"] = reason
	}
}

func (u *User) SetRecover() {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	if u.UserInfo.Params == nil {
		u.UserInfo.Params = map[string]string{
			"status": "ok",
		}
	} else {
		u.UserInfo.Params["status"] = "ok"
	}
}

// 是否删除了，或者禁用了
func (u *User) IsDeletedOrDisabled() (string, bool) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	if u.UserInfo.Params == nil {
		return "", false
	}

	data, ok := u.UserInfo.Params["status"]
	return data, ok
}

// 每次活动有需要更新，系统定时检查超时的结构体
func (u *User) UpdateActive() {
	u.LastActiveTm = utils.GetTimeStamp()
}

func (u *User) SetLoadMask(mask uint32) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.MaskLoad |= mask
}

// 如果长度为0，则说明是目前没有中断在线
func (u *User) GetSessionCount() int {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	return len(u.SessionId)
}

// 自己给对方的权限
func (u *User) SetSelfMaskNoLock(fid int64, mask uint32) {
	//u.Mu.Lock()
	//defer u.Mu.Unlock()

	data, ok := u.Block[fid]
	if ok {
		// 如果好友ID已存在于屏蔽列表中，则更新其屏蔽掩码
		u.Block[fid] = (data & 0xffffffff00000000) | uint64(mask)
	} else {
		// 如果好友ID不存在于屏蔽列表中，则向列表中添加新的条目
		u.Block[fid] = uint64(mask)
	}
}

func (u *User) RemoveSelfMask(fid int64, mask uint32) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	data, ok := u.Block[fid]
	if ok {
		// 如果好友ID存在于屏蔽列表中，则从屏蔽掩码中移除指定的掩码
		u.Block[fid] = data &^ uint64(mask)
	}
	// 如果好友ID不存在于屏蔽列表中，则不执行任何操作
}

// 对方给自己的权限，对高32位设置
func (u *User) SetFriendToMeMask(fid int64, mask uint32) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	data, ok := u.Block[fid]
	if ok {
		// 如果好友ID已存在于屏蔽列表中，则更新其屏蔽掩码
		u.Block[fid] = data | (uint64(mask) << 32) | PermissionMaskExist
	} else {
		// 如果好友ID不存在于屏蔽列表中，则向列表中添加新的条目
		u.Block[fid] = uint64(mask) << 32
	}
}

// GetP2PMask 用于获取用户结构体中指定好友的 P2P 屏蔽掩码
func (u *User) GetFriendToMeMask(fid int64) (uint32, bool) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	// 尝试从屏蔽列表中获取指定好友的屏蔽掩码
	data, ok := u.Block[fid]
	if ok {
		// 如果好友ID已存在于屏蔽列表中，则返回其屏蔽掩码的高32位
		return uint32(data >> 32), true
	}
	// 如果好友ID不存在于屏蔽列表中，则返回0
	return 0, false
}

// 检查某个权限
func (u *User) CheckFriendMask(fid int64, isFan bool, bits uint32) (bool, bool) {
	data, ok := u.GetFriendToMeMask(fid)
	if !ok {
		return false, false
	}

	strangerMask := data >> 16

	// 还未设置
	if (data & PermissionMaskExist) == 0 {
		return false, false
	}

	if isFan == false {
		// 对方未关注你！陌生人
		return (strangerMask & bits) > 0, true
	}

	// 好友，但是也不一定能发
	return (data & bits) > 0, true
}

// 更新时候直接将新的数据合并过来，这个比较繁琐
func (u *User) MergeUser(newUser *User) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	// session
	u.UserInfo = newUser.UserInfo
	u.addSessionIDListNoLock(newUser.SessionId)
	u.Status = newUser.Status
	u.MaskLoad |= newUser.MaskLoad
	// 合并几个map
	utils.MergeMap(u.Params, newUser.Params)

	utils.MergeMap(u.Following, newUser.Following)
	utils.MergeMap(u.Fans, newUser.Fans)
	utils.MergeMapMask(u.Block, newUser.Block)

	utils.MergeMap(u.Groups, newUser.Groups)
	utils.MergeMap(u.SessionDis, newUser.SessionDis)
}

// 从redis中加载当前的所在组列表
func (u *User) SetInGroup(gList []int64) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	u.Groups = make(map[int64]bool)
	for _, k := range gList {
		u.Groups[k] = true
	}
}

// 从redis查询的权限列表一次性添加到内存
func (u *User) AddPermission(perMap map[int64]uint32) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	for k, v := range perMap {
		u.SetSelfMaskNoLock(k, v)
	}
}

// 这个是自己给对方的权限
func (u *User) AddPermissionFromDb(perList []BlockStore) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	for _, item := range perList {
		u.SetSelfMaskNoLock(item.Uid2, uint32(item.Perm))
	}
}

// 添加会话ID
func (u *User) AddSessionID(newSid int64) int {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	for _, id := range u.SessionId {
		if id == newSid {
			return len(u.SessionId)
		}
	}
	u.SessionId = append(u.SessionId, newSid)
	return len(u.SessionId)
}

func (u *User) addSessionIDListNoLock(sidList []int64) int {

	for _, newSid := range sidList {
		bFound := false
		for _, id := range u.SessionId {
			if id == newSid {
				bFound = true
				break
			}
		}
		if !bFound {
			u.SessionId = append(u.SessionId, newSid)
		}
	}

	return len(u.SessionId)
}

// 删除会话ID
func (u *User) RemoveSessionID(sessionID int64) int {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	for i, id := range u.SessionId {
		if id == sessionID {
			// 将要删除的会话ID与最后一个元素交换位置，然后缩减切片长度
			u.SessionId[i] = u.SessionId[len(u.SessionId)-1]
			u.SessionId = u.SessionId[:len(u.SessionId)-1]
			return len(u.SessionId)
		}
	}
	return len(u.SessionId)
}

// SetStatus 设置指定状态，同时存在的一个状态
func (u *User) SetStatus(newStatus uint32) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.Status |= newStatus
}

// ClearStatus 清除指定状态，取消某个同时存在的状态
func (u *User) ClearStatus(statusToClear uint32) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.Status &= ^statusToClear
}

// 切换到某个状态
func (u *User) ChangeToStatus(newStatus uint32) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.Status = newStatus
}

// HasStatus 检查是否包含指定状态
func (u *User) HasStatus(checkStatus uint32) bool {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	return u.Status&checkStatus == checkStatus
}

func (u *User) SetFollow(fid int64, b bool) int {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.Following[fid] = b
	return len(u.Following)
}

func (u *User) DelFollow(fid int64) int {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	delete(u.Following, fid)
	return len(u.Following)
}

func (u *User) SetFan(fid int64, b bool) int {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	u.Fans[fid] = b
	return len(u.Fans)
}

// 检查是否设置了粉丝标记
func (u *User) CheckFun(fid int64) (bool, bool) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	isFan, ok := u.Fans[fid]
	if !ok {
		return false, false
	}

	return isFan, true
}

func (u *User) DelFan(fid int64) int {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	delete(u.Fans, fid)
	return len(u.Fans)

}

//func (u *User) SetExtraKeyValue(key, value string) {
//	u.Mu.Lock()
//	defer u.Mu.Unlock()
//
//	u.ParamsList[key] = value
//}
//
//func (u *User) GetExtraKeyValue(key string) (string, bool) {
//	u.Mu.Lock()
//	defer u.Mu.Unlock()
//
//	ret, b := u.ParamsList[key]
//	return ret, b
//}
//
//func (u *User) DelExtraKeyValue(key string) {
//	u.Mu.Lock()
//	defer u.Mu.Unlock()
//
//	delete(u.ParamsList, key)
//}

func (u *User) SetEmail(str string) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.UserInfo.Email = str
}

func (u *User) SetPhone(str string) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.UserInfo.Phone = str
}

func (u *User) SetUserName(str string) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.UserInfo.UserName = str
}

func (u *User) SetNickName(str string) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.UserInfo.NickName = str
}

func (u *User) SetGender(str string) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.Gender = str
}

func (u *User) SetRegion(str string) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.Region = str
}

func (u *User) SetAge(str string) {
	n, _ := strconv.Atoi(str)
	u.Age = int32(n)
}

func (u *User) SetIcon(str string) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	u.Icon = str
}

// 更新信息后，设置基本信息
func (u *User) SetBaseValue(userInfo *pbmodel.UserInfo) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	if u.UserInfo.UserName != userInfo.UserName {
		u.UserInfo.UserName = userInfo.UserName
	}

	if u.UserInfo.NickName != userInfo.NickName {
		u.UserInfo.NickName = userInfo.NickName
	}

	if u.UserInfo.Gender != userInfo.Gender {
		u.UserInfo.Gender = userInfo.Gender
	}

	if u.UserInfo.Age != userInfo.Age {
		u.UserInfo.Age = userInfo.Age
	}

	if u.UserInfo.Region != userInfo.Region {
		u.UserInfo.Region = userInfo.Region
	}

	if u.UserInfo.Icon != userInfo.Icon {
		u.UserInfo.Icon = userInfo.Icon
	}

	if u.UserInfo.Params == nil {
		u.UserInfo.Params = make(map[string]string)
	}

	// 这里设置其他的数据
	for key, value := range userInfo.Params {
		u.UserInfo.Params[key] = value
	}
}

// 设置用户禁用，删除等信息
func (u *User) SetBaseKeyValue(key, value string) {
	u.Mu.Lock()
	defer u.Mu.Unlock()
	if u.UserInfo.Params == nil {
		u.UserInfo.Params = make(map[string]string)
	}

	u.UserInfo.Params[key] = value
}

func (u *User) GetBaseKeyValue(key string) (string, bool) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	if u.UserInfo.Params == nil {
		return "", false
	}
	ret, b := u.UserInfo.Params[key]
	return ret, b
}

func (u *User) DelBaseKeyValue(key string) {
	u.Mu.Lock()
	defer u.Mu.Unlock()

	if u.UserInfo.Params == nil {
		return
	}

	delete(u.UserInfo.Params, key)
}
