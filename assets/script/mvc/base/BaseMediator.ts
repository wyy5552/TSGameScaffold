import * as fgui from 'fairygui-cc';

import { INotification, Mediator } from '../../libs/PureMVC';
/*
 * @Author: yourName
 * @since: 2021-07-14 23:59:06
 * @lastTime: 2021-07-15 01:43:02
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/mvc/base/BaseMediator.ts
 */

export class BaseMediator<T = any> extends Mediator<T> {
    public static NAME: string;
    public static package = '';
    public static UIClass: { createInstance: () => any };
    public static bindUI(): void {}

    public constructor(name: string, viewComponent: T) {
        super(name, viewComponent);
    }
    public listNotificationInterests(): Array<any> {
        return [];
    }

    public show = () => {
        fgui.GRoot.inst.addChild(this.viewComponent as unknown as fgui.GObject);
    };
    public hide = () => {
        fgui.GRoot.inst.removeChild(this.viewComponent as unknown as fgui.GObject);
    };

    public handleNotification(notification: INotification): void {
        // switch (notification.getName()) {
        // }
    }
}
