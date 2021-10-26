
import { _decorator, Component, Node, TextAsset } from 'cc';

declare const protobuf: any;

export class ProtoMgr extends Component {
    public static Instance: ProtoMgr = null as unknown as ProtoMgr;
    
    // 协议描述文件的文本对象
    private pbTexAsset: TextAsset|null = null;

    // 根据协议描述文本对象，我们生成一个动态解析的对象;
    private pb: any = null;

    public Init(pbTex: TextAsset|null): void {
        this.pbTexAsset = pbTex;
        this.pb = protobuf.parse(this.pbTexAsset);
    }

    onLoad(): void {
        if(ProtoMgr.Instance === null) {
            ProtoMgr.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
    }

    public SerializeMsg(msgName: string, msgBody: any): Uint8Array {
        let rs = this.pb.root.lookupType(msgName);
        let msg = rs.create(msgBody);
        let buf = rs.encode(msg).finish();

        return buf;
    }

    public DeserializeMsg(msgName: string, msgBuf: Uint8Array): Object {
        let rs = this.pb.root.lookupType(msgName);
        let msg = rs.decode(msgBuf)

        return msg;
    }
}


