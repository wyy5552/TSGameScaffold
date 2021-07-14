/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_ani_QuanJuJiaZaiZhuanQuan extends fgui.GComponent {

	public m_t0:fgui.Transition;
	public static URL:string = "ui://6be7cpotyj651i";

	public static createInstance():UI_ani_QuanJuJiaZaiZhuanQuan {
		return <UI_ani_QuanJuJiaZaiZhuanQuan>(fgui.UIPackage.createObject("common", "ani_全局加载转圈"));
	}

	protected onConstruct():void {
		this.m_t0 = this.getTransition("t0");
	}
}