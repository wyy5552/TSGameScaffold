export enum Cmd {
	INVALID_CMD = 0,
	
	GuestLoginReq = 1,
	GuestLoginRes = 2,
	Relogin = 3,
	UserLostConn = 4,
	EditProfileReq = 5,
	EditProfileRes = 6,

	AccountUpgradeReq = 7,
	AccountUpgradeRes = 8,

	UnameLoginReq = 9,
	UnameLoginRes = 10,

	LoginOutReq = 11,
	LoginOutRes = 12,

	GetUgameInfoReq = 13,
	GetUgameInfoRes = 14,

	RecvLoginBonuesReq = 15,
	RecvLoginBonuesRes = 16,

	GetWorldRankUchipReq = 17,
	GetWorldRankUchipRes = 18,

	GetSysMsgReq = 19,
	GetSysMsgRes = 20,

	LoginLogicReq = 21,
	LoginLogicRes = 22,

	EnterZoneReq = 23,
	EnterZoneRes = 24,

	EnterMatch = 25,
	UserArrived = 26,

	ExitMatchReq = 27,
	ExitMatchRes = 28,
	UserExitMatch = 29,

	GameStart = 30,
	UdpTest = 31,
	LogicFrame = 32,
	NextFrameOpts = 33,
}
