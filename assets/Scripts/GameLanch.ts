
import { _decorator, Component, Node, TextAsset, Prefab } from 'cc';
import { EventMgr } from './Framework/Managers/EventMgr';
import { NetMgr } from './Framework/Managers/Net/NetMgr';
import { ProtoMgr } from './Framework/Managers/Net/ProtoMgr';
import { ResMgr } from './Framework/Managers/ResMgr';
import { SoundMgr } from './Framework/Managers/SoundMgr';
import { TimerMgr } from './Framework/Managers/TimerMgr';
import { UIMgr } from './Framework/Managers/UIMgr';
import { GameApp } from './Game/GameApp';
const { ccclass, property } = _decorator;

@ccclass('GameLanch')
export class GameLanch extends Component {
    public static Instance: GameLanch = null as unknown as GameLanch; 

    @property
    public isNetMode: boolean = false;

    @property
    private wsUrl: string = "ws://127.0.0.1:6081/ws"; 

    @property(TextAsset)
    private pbTexAsset: TextAsset | null = null;

    @property(Prefab)
    public UILoading: Prefab = null as unknown as Prefab; 


    onLoad(): void {
        if(GameLanch.Instance === null) {
            GameLanch.Instance = this;
        }
        else {
            this.destroy();
            return;
        }

        console.log("Game Lanching......");
        // 初始化框架逻辑: 资源管理，声音管理，网络管理
        this.node.addComponent(ResMgr);
        this.node.addComponent(SoundMgr);
        this.node.addComponent(TimerMgr);
        this.node.addComponent(EventMgr);
        this.node.addComponent(UIMgr);

        // 是否使用网络模块
        if(this.isNetMode) {
            this.node.addComponent(ProtoMgr).Init(this.pbTexAsset);
            this.node.addComponent(NetMgr).Init(this.wsUrl);
        }
        
        // end

        this.node.addComponent(GameApp);
        // end 

        // 检查更新我们的资源
        // end

        // 进入游戏里面去
        GameApp.Instance.EnterGame();
        // end
    }
}


