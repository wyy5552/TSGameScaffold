/**
 * Created by jsroads on 2020/6/11.2:39 下午
 * Note:注册Command ，建立 Command 与Notification 之间的映射
 */

import { INotification, SimpleCommand } from '../libs/PureMVC';

export default class ControllerCmd extends SimpleCommand {
    public execute(notification: INotification): void {
        /** 登录游戏 */
        this.facade.registerCommand(MsgConst.LOGIN_CMD, LoginCmd);
    }
}
