
import { _decorator, Component, Node, AudioClip, AudioSource, Prefab } from 'cc';
import { EventMgr } from '../Framework/Managers/EventMgr';
import { ProtoMgr } from '../Framework/Managers/Net/ProtoMgr';
import { ResMgr } from '../Framework/Managers/ResMgr';
import { SoundMgr } from '../Framework/Managers/SoundMgr';
import { TimerMgr } from '../Framework/Managers/TimerMgr';
import { UIMgr } from '../Framework/Managers/UIMgr';
import { GameLanch } from '../GameLanch';
import { AuthProxy } from './ServerProxy/AuthProxy';
import { NetEventDispatcher } from './ServerProxy/NetEventDispatcher';

var resPkg = {
    "Sounds": [
        { assetType: AudioClip, urls: 
            ["CK_attack1", 
            "Qinbing_die"
        ]},
    ],

    "GUI": [
        {
            assetType: Prefab, 
            urls: [
                "UIPrefabs/LoginUI",
            ],
        },
    ],
    // "Sounds": AudioClip,
}

export class GameApp extends Component {
    
    public static Instance: GameApp = null as unknown as GameApp

    onLoad(): void {
        if(GameApp.Instance === null) {
            GameApp.Instance = this;
        }
        else {
            this.destroy();
            return;
        }

        // 实例化游戏网络事件模块
        if(GameLanch.Instance.isNetMode) {
            this.node.addComponent(NetEventDispatcher).Init();
            AuthProxy.Insance.Init();
        }
        // end 
    }

    // 游戏逻辑入口
    public EnterGame(): void {
        UIMgr.Instance.ShowUIPrefab(GameLanch.Instance.UILoading);

        ResMgr.Instance.preloadResPkg(resPkg, (now: any, total: any)=>{
            EventMgr.Instance.Emit("loadProgress", Math.floor(now * 100 / total));
        }, ()=>{
            this.EnterLoadingScene();
        });
    }

    public EnterLoadingScene(): void {
        console.log("EnterLoadingScene");
        
        /*
        // 释放测试
        ResMgr.Instance.releaseResPkg(resPkg);

        this.scheduleOnce(()=>{
            console.log(ResMgr.Instance.getAsset("Sounds", "CK_attack1"));
        }, 3)*/
        
        // 释放游戏地图
        // end

        // 释放游戏角色
        // end

        // 释放我们的游戏UI
        // end

        // 播放声音
        /*var as = this.node.addComponent(AudioSource);
        as.clip = ResMgr.Instance.getAsset("Sounds", "CK_attack1");
        as.loop = true;
        as.play();*/

        // var clip = ResMgr.Instance.getAsset("Sounds", "CK_attack1");
        // SoundMgr.Instance.playSound(clip);
        // SoundMgr.Instance.setMusicMute(false);
        // SoundMgr.Instance.playBgMusic(clip, true);
        // end

        // timer 测试
        /*
        var timerId = TimerMgr.Instance.ScheduleWithParams((data: any)=>{
            console.log("timer test", data);
        }, "bycw", 0, 0.5, 3);


        TimerMgr.Instance.Once(()=>{
            TimerMgr.Instance.Unschedule(timerId);
        }, 10);
        */

        // 释放我们的UI视图了
        UIMgr.Instance.ClearAll();
        UIMgr.Instance.ShowUIView("LoginUI");
        // end


        // 监听事件
        EventMgr.Instance.AddEventListener("TestEvent", this, this.onEventCall);
            
        EventMgr.Instance.Emit("TestEvent", "BYCW");

        EventMgr.Instance.RemoveListenner("TestEvent", this, this.onEventCall);
        // end

        // 测试Probuf
        if(GameLanch.Instance.isNetMode) {
            var buf = ProtoMgr.Instance.SerializeMsg("UnameLoginReq", {uname: "blake", upwd: "123456"});
            console.log(buf);

            // 解码
            var msg = ProtoMgr.Instance.DeserializeMsg("UnameLoginReq", buf);
            console.log(msg);
            // end
        }
    }

    private onEventCall(eventName: string, udata: any): void {
        console.log(udata);
    }
    
}
