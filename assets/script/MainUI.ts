/*
 * @Author: yourName
 * @since: 2021-07-09 15:36:38
 * @lastTime: 2021-07-09 17:07:05
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/MainUI.ts
 */
import * as fgui from 'fairygui-cc';

export default class MainUI {
    private _view: fgui.GComponent = null!;

    public init(): void {
        fgui.UIPackage.loadPackage('FUI/MainMenu', this.onUILoaded.bind(this));
    }

    onUILoaded() {
        // this._view = fgui.UIPackage.createObject('MainUI', 'Main').asCom;
        this._view = fgui.UIPackage.createObject('FUI/MainMenu', 'Main').asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
    }

    onDestroy() {
        this._view.dispose();
        fgui.UIPackage.removePackage('FUI/MainMenu');
    }
}
