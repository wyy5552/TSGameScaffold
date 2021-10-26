import { _decorator, Component, Node, Label } from 'cc';
import { EventMgr } from '../../Framework/Managers/EventMgr';
const { ccclass, property } = _decorator;

import { UICtrl } from "./../../Framework/Managers/UICtrl";

@ccclass('UILoading_Ctrl')
export class UILoading_Ctrl extends UICtrl {
    private progressValue: Label = null as unknown as Label;
    
    onLoad(): void {
        super.onLoad();
        this.progressValue = this.view["Progress"].getComponent(Label);
        this.progressValue.string = "0%";
        EventMgr.Instance.AddEventListener("loadProgress", this, this.onProgressUpdate);
    }

    private onProgressUpdate(name: string, per: number): void {
        this.progressValue.string = per + "%";
    }

    onDestroy(): void {
        EventMgr.Instance.RemoveListenner("loadProgress", this, this.onProgressUpdate)
    }
}
