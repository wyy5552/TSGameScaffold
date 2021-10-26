import * as fgui from 'fairygui-cc';

import { ICommand, INotification, SimpleCommand } from '../../libs/PureMVC';
import { BaseMediator } from '../../mvc/base/BaseMediator';
import { LoadingMediator } from '../loading/LoadingMediator';

/*
 * @Author: yourName
 * @since: 2021-07-14 16:47:05
 * @lastTime: 2021-07-19 15:07:11
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/game/cmd/ShowViewCmd.ts
 */
export class ShowViewCmd extends SimpleCommand implements ICommand {
    public execute(notification: INotification): void {
        let MdrCls = notification.getBody() as typeof BaseMediator;
        let mdrName = MdrCls.NAME;
        let mdr = this.facade.retrieveMediator(mdrName) as BaseMediator<unknown>;
        if (mdr === null) {
            let loadingMdr = this.facade.retrieveMediator(LoadingMediator.NAME) as LoadingMediator;
            fgui.UIPackage.loadPackage(
                MdrCls.package,
                (finish: number, total: number, item?: AssetManager.RequestItem) => {
                    loadingMdr.setProgress(finish, total);
                },
                (err) => {
                    MdrCls.bindUI();
                    loadingMdr.hide();
                    mdr = new MdrCls(MdrCls.NAME, MdrCls.UIClass.createInstance());
                    mdr.show();
                }
            );
        } else {
            mdr.show();
        }
    }
}
