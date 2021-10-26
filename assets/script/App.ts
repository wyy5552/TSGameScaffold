/*
 * @Author: yourName
 * @since: 2021-07-09 10:26:14
 * @lastTime: 2021-07-19 17:21:37
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/App.ts
 */
import { _decorator, Component } from 'cc';

import { AppContainer } from './game/AppContainer';
import { LoadGroup } from './game/utils/LoadGroup';
import { AppFacade } from './mvc/core/AppFacade';

const { ccclass } = _decorator;

@ccclass
export default class App extends Component {
    onLoad() {
        AppContainer.inst.init(this.node.parent!);
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
                AppFacade.getInstance().startup(this.node);
            }
        );
    }
}
