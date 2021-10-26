
import { _decorator, Component, Node } from 'cc';
import { EventMgr } from '../EventMgr';

enum State {
    Disconnected = 0, // 断开连接
    Connecting = 1, // 正在连接
    Connected = 2, // 已经连接;
};

export class NetMgr extends Component {
    public static Instance: NetMgr = null as unknown as NetMgr;
    private url: string = "ws://127.0.0.1:6081/ws";

    private state: number = State.Disconnected;
    private sock: WebSocket|null = null;

    onLoad(): void {
        if(NetMgr.Instance === null) {
            NetMgr.Instance = this;
        }
        else {
            this.destroy();
            return;
        }

        this.state = State.Disconnected;
    }

    public Init(url: string): void {
        
        this.url = url;
        this.state = State.Disconnected;
    }

    public send_data(data_arraybuf: ArrayBuffer) {
        if (this.state === State.Connected && this.sock) {
            this.sock.send(data_arraybuf);
        }
    }

    private connect_to_server(): void {
        if (this.state !== State.Disconnected) {
            return;
        }

        // 抛出一个正在重新连接的事件;
        EventMgr.Instance.Emit("net_connecting", null);

        this.state = State.Connecting;
        this.sock = new WebSocket(this.url); // H5标准，底层做好了;
        this.sock.binaryType = "arraybuffer"; // blob, 二进制;

        this.sock.onopen = this._on_opened.bind(this);
        this.sock.onmessage = this._on_recv_data.bind(this);
        this.sock.onclose = this._on_socket_close.bind(this);
        this.sock.onerror = this._on_socket_err.bind(this);
    }

    private _on_recv_data(event: any) {
        EventMgr.Instance.Emit("net_message", event.data);
    }

    private _on_socket_close(event: any) {
        this.close_socket();
    }

    private _on_socket_err(event: any) {
        this.close_socket();
    }

    public close_socket() {
        if (this.state === State.Connected) {
            if (this.sock !== null) {
                this.sock.close();
                this.sock = null;
            }
        }
        EventMgr.Instance.Emit("net_disconnect", null);
        this.state = State.Disconnected;
    }

    // 连接成功了
    private _on_opened(event: any) {
        this.state = State.Connected;
        console.log("connect to server: " + this.url + " sucess!");
        EventMgr.Instance.Emit("net_connect", null);
    }

    update (dt: number) {
        if (this.state !== State.Disconnected) {
            return;
        }

        this.connect_to_server();
    }
}
