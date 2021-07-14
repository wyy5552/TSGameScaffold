/*
 * @Author: yourName
 * @since: 2021-07-14 23:53:58
 * @lastTime: 2021-07-15 01:36:30
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/game/mainUI/IndexMediator.ts
 */
import * as fgui from 'fairygui-cc';

import { INotification } from '../../libs/PureMVC';
import { BaseMediator } from '../../mvc/base/BaseMediator';
import indexBinder from '../../UI_Script/index/indexBinder';
import UI_View_Index from '../../UI_Script/index/UI_View_Index';

export class IndexMediator extends BaseMediator {
    public static package = 'FUI/index';
    public static NAME = 'IndexMediator';
    public static UIClass = UI_View_Index;

    public constructor(name: string, viewComponent: UI_View_Index) {
        super(IndexMediator.NAME, viewComponent);
    }
    public static bindUI(): void {
        indexBinder.bindAll();
    }
    public getUIClass(): typeof UI_View_Index {
        return UI_View_Index;
    }

    public listNotificationInterests(): Array<any> {
        return [];
    }

    public handleNotification(notification: INotification): void {
        // switch (notification.getName()) {
        // }
    }
}
