import { ICommand, INotification, SimpleCommand } from '../../libs/PureMVC';
import { LoadingMediator } from '../loading/LoadingMediator';

/*
 * @Author: yourName
 * @since: 2021-07-14 14:55:05
 * @lastTime: 2021-07-14 17:03:40
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/game/cmd/OpenLoadCmd.ts
 */
export class OpenLoadCmd extends SimpleCommand implements ICommand {
    public execute(notification: INotification): void {
        let mdr = this.facade.retrieveMediator(LoadingMediator.NAME) as LoadingMediator;
        if (notification.getBody() === true) {
            mdr.show();
        } else {
            mdr.hide();
        }
    }
}
