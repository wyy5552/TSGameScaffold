/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Btn_Sound extends fgui.GButton {

	public m_C_State:fgui.Controller;
	public static URL:string = "ui://srduhovm11arcj";

	public static createInstance():UI_Btn_Sound {
		return <UI_Btn_Sound>(fgui.UIPackage.createObject("index", "Btn_Sound"));
	}

	protected onConstruct():void {
		this.m_C_State = this.getController("C_State");
	}
}