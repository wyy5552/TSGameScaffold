import * as fgui from 'fairygui-cc';

import { INotification, Mediator } from '../../libs/PureMVC';
import { BaseMediator } from '../../mvc/base/BaseMediator';
import UI_BarLoading from '../../UI_Script/loading/UI_BarLoading';
import UI_View_Loading from '../../UI_Script/loading/UI_View_Loading';
/*
 * @Author: yourName
 * @since: 2021-07-14 14:49:05
 * @lastTime: 2021-07-15 00:09:32
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/game/loading/LoadingMediator.ts
 */
export class LoadingMediator extends BaseMediator<UI_View_Loading> {
    public static NAME = 'LoadingMediator';
    public constructor(viewComponent: UI_View_Loading) {
        super(LoadingMediator.NAME, viewComponent);
    }

    public setProgress(finished: number, total: number): void {
        (this.viewComponent.m_bar_loading as UI_BarLoading).max = total;
        (this.viewComponent.m_bar_loading as UI_BarLoading).max = finished;
    }
    public listNotificationInterests(): Array<any> {
        return [];
    }

    public handleNotification(notification: INotification): void {
        // switch (notification.getName()) {
        // }
    }
}
