/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_CloseButton extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n1:fgui.GImage;
	public m_n2:fgui.GImage;
	public static URL:string = "ui://8zew8oltrftu3";

	public static createInstance():UI_CloseButton {
		return <UI_CloseButton>(fgui.UIPackage.createObject("MainUI", "CloseButton"));
	}

	protected onConstruct():void {
		this.m_button = this.getControllerAt(0);
		this.m_n1 = <fgui.GImage>(this.getChildAt(0));
		this.m_n2 = <fgui.GImage>(this.getChildAt(1));
	}
}