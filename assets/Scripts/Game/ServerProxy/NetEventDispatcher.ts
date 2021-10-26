
import { _decorator, Component, Node, Game } from 'cc';
import { EventMgr } from '../../Framework/Managers/EventMgr';
import { NetMgr } from '../../Framework/Managers/Net/NetMgr';
import { ProtoMgr } from '../../Framework/Managers/Net/ProtoMgr';
import { Cmd } from './Cmd';
import { Stype } from './Stype';


export class NetEventDispatcher extends Component {
    public static Instance: NetEventDispatcher = null as unknown as NetEventDispatcher;

    public onLoad(): void {
        if(NetEventDispatcher.Instance === null) {
            NetEventDispatcher.Instance = this;
        }
        else {
            this.destroy();
            return;
        }

        
    }

    public Init(): void {
        EventMgr.Instance.AddEventListener("net_message", this, this.onRecvMsg);
    }

    // 事件名字---》事件订阅传过来的 net_message
    // udata: 网络收到数据;
    private onRecvMsg(uname: string, udata: ArrayBuffer): void {
        // 获取服务号，命令号;
        var dataView = new DataView(udata);
        var stype = dataView.getInt16(0, true);
        var ctype = dataView.getInt16(2, true);

        // 获取我们的序列化后的二进制数据;
        var uint8Buf: Uint8Array = new Uint8Array(udata);
        var msgBuf = uint8Buf.subarray(4 + 4);
        // end

        // 反序列化二进制数据body 为一个对象
        var msgBody = ProtoMgr.Instance.DeserializeMsg(Cmd[ctype], msgBuf);
        // end

        EventMgr.Instance.Emit(Stype[stype], {ctype: ctype, body: msgBody});
    }

    public sendMsg(stype: number, ctype: number, msg: any) {
        // step1: 序列化一个msg--->buf;
        // enum Cmd --->  {1: "eGuestLoginReq", "eGuestLoginReq": 1}
        let msgBuf = ProtoMgr.Instance.SerializeMsg(Cmd[ctype], msg);
        // end

        // step2: 按照协议，封装号我们的二进制数据包;
        var total_len = msgBuf.length + 2 + 2 + 4;
        var buf = new ArrayBuffer(total_len); // 内存;
        // DataView, 工具，buffer里面来写东西;
        var dataview = new DataView(buf);
        // [stype, ctype, 4, body Buf]
        dataview.setInt16(0, stype, true); // offset, stype
        dataview.setInt16(2, ctype, true); // offset = 2, ctype;
        dataview.setInt32(4, 0, true);
        // end
        var uint8Buf = new Uint8Array(buf);
        uint8Buf.set(msgBuf, 8);

        // step3: WebSocket发送出去
        NetMgr.Instance.send_data(buf);
        // end
    }
}

