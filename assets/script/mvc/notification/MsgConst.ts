/**
 * Created by jsroads on 2020/6/11.2:39 下午
 * Note: 游戏消息集合
 */

export enum MsgConst {
    /**
     * 游戏框架启动
     */
    START_UP = 'start_up',
    /** 显示加载场景 */
    SHOW_LOADING = 'SHOW_LOADING',
    /** HTTP 登录游戏 */
    LOGIN_CMD = 'login_cmd',
    /** HTTP登录游戏成功 */
    LOGIN_SUCCESS = 'login_success',
    /** 登录游戏失败 */
    LOGIN_FAIL = 'login_fail',

    SHOW_VIEW = 'SHOW_VIEW',
}
