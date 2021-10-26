
import { _decorator, Component, Node } from 'cc';

export class EventMgr extends Component {

    public static Instance: EventMgr = null as unknown as EventMgr;

    // xxxx事件名字 ----》 【监听者1(caller, func)，监听者2...】
    private events_map: any = {};

    onLoad(): void {
        if(EventMgr.Instance === null) {
            EventMgr.Instance = this;
        }
        else {
            this.destroy();
            return;
        }


    }

    // func(event_name: string, udata: any)
    public AddEventListener(eventName: string, caller: any, func: Function) {
        if (!this.events_map[eventName]) {
            this.events_map[eventName] = [];
        }

        var event_queue = this.events_map[eventName];
        event_queue.push({
            caller: caller,
            func: func
        });
    }

    public RemoveListenner(eventName: string, caller: any, func: Function) {
        if (!this.events_map[eventName]) {
            return;
        }

        var event_queue = this.events_map[eventName];
        for(var i = 0; i < event_queue.length; i ++) {
            var obj = event_queue[i];
            if (obj.caller == caller && obj.func == func) {
                event_queue.splice(i, 1);
                break;
            }
        }

        if (event_queue.length <= 0) {
            this.events_map[eventName] = null;
        }
    }
    
    public Emit(eventName: string, udata: any) {
        if (!this.events_map[eventName]) {
            return;
        }

        var event_queue = this.events_map[eventName];
        for(var i = 0; i < event_queue.length; i ++) {
            var obj = event_queue[i];
            obj.func.call(obj.caller, eventName, udata);
        }
    }
}


