/*
 * @Author: yourName
 * @since: 2021-07-09 10:26:14
 * @lastTime: 2021-10-26 23:08:10
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/App.ts
 */
import { _decorator, Component } from 'cc';
import { DEBUG } from 'cc/env';
import * as fgui from 'fairygui-cc';

import { AppContainer } from './game/AppContainer';
import { LoadGroup } from './game/utils/LoadGroup';
import { AppFacade } from './mvc/core/AppFacade';

const { ccclass } = _decorator;
if (DEBUG && window.vConsole) {
    setTimeout(() => {
        vConsole.destroy();
    }, 100);
}

@ccclass
export default class App extends Component {
    onLoad() {
        AppContainer.inst.init(this.node.parent!);
        this.loadBase();
    }
    private loadBase(): void {
        let num = 0;
        let pArr = [];
        let p = new Promise((resolve, reject) => {
            fgui.UIPackage.loadPackage(
                'FUI/loading',
                (f, t, item) => {
                    console.log(++num);
                },
                () => {
                    resolve(null);
                }
            );
        });
        pArr.push(p);
        p = new Promise((resolve, reject) => {
            fgui.UIPackage.loadPackage(
                'FUI/common',
                (f, t, item) => {
                    console.log(++num);
                },
                () => {
                    resolve(null);
                }
            );
        });
        pArr.push(p);

        Promise.all(pArr).then(() => {
            AppFacade.getInstance().startup(this.node);
        });
        // LoadGroup.loadFuiList(
        //     ['FUI/common', 'FUI/loading'],
        //     9,
        //     (percent: number) => {
        //         console.log(percent);
        //     },
        //     (err: Error) => {
        //         console.log(err);
        //         AppFacade.getInstance().startup(this.node);
        //     }
        // );
    }
}
