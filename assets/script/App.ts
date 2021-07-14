/*
 * @Author: yourName
 * @since: 2021-07-09 10:26:14
 * @lastTime: 2021-07-15 01:47:40
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/App.ts
 */
import { _decorator, Component } from 'cc';
import * as fgui from 'fairygui-cc';

import { LoadGroup } from './game/utils/LoadGroup';
import { AppFacade } from './mvc/core/AppFacade';

export { fgui };

const { ccclass } = _decorator;

@ccclass
export default class App extends Component {
    onLoad() {
        this.loadBase();
    }
    private loadBase(): void {
        LoadGroup.loadFuiList(
            ['FUI/common', 'FUI/loading'],
            9,
            (percent: number) => {
                console.log(percent);
            },
            (err: Error) => {
                console.log(err);
                fgui.GRoot.create();
                AppFacade.getInstance().startup(this.node);
            }
        );
    }
}
