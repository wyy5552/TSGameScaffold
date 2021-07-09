/*
 * @Author: yourName
 * @since: 2021-07-09 10:26:14
 * @lastTime: 2021-07-09 17:44:24
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/App.ts
 */
import { _decorator, Component } from 'cc';
import * as fgui from 'fairygui-cc';

import MainUI from './MainUI';

const { ccclass } = _decorator;

@ccclass
export default class App extends Component {
    onLoad() {
        fgui.GRoot.create();
        let ui = new MainUI();
        ui.init();
    }
}
