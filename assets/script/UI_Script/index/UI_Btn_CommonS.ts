/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_CommonS extends fgui.GButton {

	public m_C_Color:fgui.Controller;
	public static URL:string = "ui://srduhovmdnhdc13";

	public static createInstance():UI_Btn_CommonS {
		return <UI_Btn_CommonS>(fgui.UIPackage.createObject("index", "Btn_CommonS"));
	}

	protected onConstruct():void {
		this.m_C_Color = this.getController("C_Color");
	}
}