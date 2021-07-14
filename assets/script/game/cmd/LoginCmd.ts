import { ICommand, INotification, SimpleCommand } from '../../libs/PureMVC';
import { MsgConst } from '../../mvc/notification/MsgConst';
import { LoginService } from '../login/LoginService';
import { IndexMediator } from '../mainUI/IndexMediator';

/*
 * @Author: yourName
 * @since: 2021-07-14 16:47:05
 * @lastTime: 2021-07-15 01:22:50
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/game/cmd/LoginCmd.ts
 */
export class LoginCmd extends SimpleCommand implements ICommand {
    public execute(notification: INotification): void {
        let service = this.facade.retrieveProxy(LoginService.NAME) as LoginService;
        service.login();
        this.sendNotification(MsgConst.SHOW_LOADING, true);
        this.sendNotification(MsgConst.SHOW_VIEW, IndexMediator);
    }
}
