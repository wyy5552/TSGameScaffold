/**
 * Created by jsroads on 2020/6/11.2:39 下午
 * Note:创建Mediator，并把它注册到View.
 */

import { LoadingMediator } from '../../game/loading/LoadingMediator';
import { INotification, SimpleCommand } from '../../libs/PureMVC';
import loadingBinder from '../../UI_Script/loading/loadingBinder';
import UI_View_Loading from '../../UI_Script/loading/UI_View_Loading';

export default class ViewPrepCmd extends SimpleCommand {
    public constructor() {
        super();
    }

    public execute(message: INotification): void {
        // //游戏主舞台
        loadingBinder.bindAll();
        UI_View_Loading.createInstance();
        this.facade.registerMediator(new LoadingMediator(UI_View_Loading.createInstance()));
    }
}
