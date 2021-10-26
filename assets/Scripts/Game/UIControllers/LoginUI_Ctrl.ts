import { _decorator, Component, Node, Label } from 'cc';
import { AuthProxy } from '../ServerProxy/AuthProxy';
const { ccclass, property } = _decorator;

import { UICtrl } from "./../../Framework/Managers/UICtrl";

@ccclass('LoginUI_Ctrl')
export class LoginUI_Ctrl extends UICtrl {
    private Version: Label = null as unknown as Label;

    onLoad(): void {
        super.onLoad();

        this.Version = this.view["Version"].getComponent(Label);

        this.Version.string = "2.0.0";

        this.AddButtonListener("Start", this, this.onGameStartClick);
    }

    private onGameStartClick(): void {
        AuthProxy.Insance.UserNameLogin("bycw", "blake123456");
    }
}
