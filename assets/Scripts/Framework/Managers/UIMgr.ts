
import { _decorator, Component, Node, find, instantiate, Prefab } from 'cc';
import { ResMgr } from './ResMgr';

export class UIMgr extends Component {
    public static Instance: UIMgr = null as unknown as UIMgr;

    private canvas: Node = null as unknown as Node;
    private uiMap: any = {};

    onLoad(): void {
        if(UIMgr.Instance === null) {
            UIMgr.Instance = this;
        }
        else {
            this.destroy();
            return;
        }

        // 挂我们的UI视图的一个根节点;
        this.canvas = find("Canvas") as Node;

        // 特殊的挂载点, ....
        // end 
    }

    public ShowUIPrefab(uiPrefab: Prefab, parent?: Node): void {
        var uiView: Node = instantiate(uiPrefab) as Node;
        parent = (!parent)? this.canvas : parent;
        parent.addChild(uiView);

        //往根节点上挂下UI视图脚本;
        console.log(uiPrefab, uiPrefab.data.name);
        uiView.addComponent(uiPrefab.data.name + "_Ctrl");
        this.uiMap[uiPrefab.data.name] = uiView;
    }

    // 显示一个UI到我们的视图上面;
    public ShowUIView(viewName: string, parent?: Node): void {
        // 实例化UI视图出来; 
        var uiPrefab = ResMgr.Instance.getAsset("GUI", "UIPrefabs/" + viewName);
        if(!uiPrefab) {
            console.log("cannot find ui Prefab: ", viewName);
            return;
        }

        var uiView: Node = instantiate(uiPrefab) as Node;
        parent = (!parent)? this.canvas : parent;
        parent.addChild(uiView);
        this.uiMap[viewName] = uiView;
        // console.log(uiView);

        //往根节点上挂下UI视图脚本;
        uiView.addComponent(uiPrefab.data.name + "_Ctrl");

        
    }

    public RemoveUI(ui_name: string) {
        if (this.uiMap[ui_name]) {
            this.uiMap[ui_name].destroy();
            this.uiMap[ui_name] = null;
        }
    }

    public ClearAll() {
        for (var key in this.uiMap) {
            if (this.uiMap[key]) {
                this.uiMap[key].destroy();
                this.uiMap[key] = null;
            }
        }
    }
}

