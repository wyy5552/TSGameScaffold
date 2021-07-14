/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_Page extends fgui.GButton {

	public m_C_State:fgui.Controller;
	public static URL:string = "ui://sotny11wn5pa9g";

	public static createInstance():UI_Btn_Page {
		return <UI_Btn_Page>(fgui.UIPackage.createObject("game", "Btn_Page"));
	}

	protected onConstruct():void {
		this.m_C_State = this.getController("C_State");
	}
}