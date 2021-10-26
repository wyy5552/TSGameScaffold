import { Node } from 'cc';

import { fgui } from '../fgui';

/*
 * @Author: yourName
 * @since: 2021-07-19 15:14:56
 * @lastTime: 2021-07-19 17:21:16
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/game/AppContainer.ts
 */
export class AppContainer extends Node {
    private static _inst: AppContainer;

    public static get inst(): AppContainer {
        if (!AppContainer._inst) {
            AppContainer._inst = new AppContainer();
        }
        return AppContainer._inst;
    }

    private bgLayer: Node;
    private roleLayer: Node;
    public init(root: Node): void {
        this.bgLayer = new Node('bgLayer');
        this.roleLayer = new Node('roleLayer');

        root.addChild(this.bgLayer);
        root.addChild(this.roleLayer);
        let groot = fgui.GRoot.create();
        root.addChild(groot.node);
        groot.onWinResize();
    }
}
