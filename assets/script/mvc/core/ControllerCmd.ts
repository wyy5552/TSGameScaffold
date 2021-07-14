/**
 * Created by jsroads on 2020/6/11.2:39 下午
 * Note:注册Command ，建立 Command 与Notification 之间的映射
 */

import { LoginCmd } from '../../game/cmd/LoginCmd';
import { OpenLoadCmd } from '../../game/cmd/OpenLoadCmd';
import { ShowViewCmd } from '../../game/cmd/ShowViewCmd';
import { INotification, SimpleCommand } from '../../libs/PureMVC';
import { MsgConst } from '../notification/MsgConst';

export default class ControllerCmd extends SimpleCommand {
    public execute(note: INotification): void {
        super.execute(note);
        /** 登录游戏 */
        this.facade.registerCommand(MsgConst.LOGIN_CMD, LoginCmd);
        this.facade.registerCommand(MsgConst.SHOW_LOADING, OpenLoadCmd);
        this.facade.registerCommand(MsgConst.SHOW_VIEW, ShowViewCmd);
    }
}
