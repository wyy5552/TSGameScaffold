
import { _decorator, Component, Node, Button } from 'cc';

export class UICtrl extends Component {

    protected view: any = {}; // 路径--->节点; this.view["路径"] --->获得节点;

    private loadAllNodeInView(root: any, path: string) {
        for(let i = 0; i < root.children.length; i ++) {
            this.view[path + root.children[i].name] = root.children[i];
            this.loadAllNodeInView(root.children[i], path + root.children[i].name + "/");
        }
    }

    onLoad(): void {
        // 遍历它下面所有的孩子，然后将所有的节点路径---》节点对象生成到view表里面;
        this.loadAllNodeInView(this.node, "");
    }

    // 按钮事件
    public AddButtonListener(viewName: string, caller: any, func: any) {
        var view_node = this.view[viewName];
        if (!view_node) {
            return;
        }
        
        var button = view_node.getComponent(Button);
        if (!button) {
            return;
        }

        view_node.on("click", func, caller);
    }

    // 其他UI事件, ....
}


