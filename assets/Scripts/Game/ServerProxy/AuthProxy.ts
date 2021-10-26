import { EventMgr } from "../../Framework/Managers/EventMgr";
import { Cmd } from "./Cmd";
import { NetEventDispatcher } from "./NetEventDispatcher";
import { Stype } from "./Stype";



export class AuthProxy {
    public static Insance: AuthProxy = new AuthProxy();
    
    public Init(): void {
        EventMgr.Instance.AddEventListener(Stype[Stype.Auth], this, this.onAuthServerReturn);
    }

    private onAuthServerReturn(eventName: string, msg: any): void {
        console.log(msg);
    }

    public UserNameLogin(uname: string, upwd: string): void {
        // var md5Pwd = hex_md5(upwd);
        NetEventDispatcher.Instance.sendMsg(Stype.Auth, Cmd.UnameLoginReq, {uname: uname, upwd: upwd});
    }
}


