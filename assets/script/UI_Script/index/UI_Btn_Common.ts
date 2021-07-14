/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_Common extends fgui.GButton {

	public m_C_Color:fgui.Controller;
	public static URL:string = "ui://srduhovmnd81h";

	public static createInstance():UI_Btn_Common {
		return <UI_Btn_Common>(fgui.UIPackage.createObject("index", "Btn_Common"));
	}

	protected onConstruct():void {
		this.m_C_Color = this.getController("C_Color");
	}
}