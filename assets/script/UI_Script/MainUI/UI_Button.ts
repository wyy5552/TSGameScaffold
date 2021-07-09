/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_Button extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n1:fgui.GImage;
	public m_n2:fgui.GImage;
	public m_n3:fgui.GImage;
	public m_title:fgui.GTextField;
	public static URL:string = "ui://8zew8oltrftu4";

	public static createInstance():UI_Button {
		return <UI_Button>(fgui.UIPackage.createObject("MainUI", "Button"));
	}

	protected onConstruct():void {
		this.m_button = this.getControllerAt(0);
		this.m_n1 = <fgui.GImage>(this.getChildAt(0));
		this.m_n2 = <fgui.GImage>(this.getChildAt(1));
		this.m_n3 = <fgui.GImage>(this.getChildAt(2));
		this.m_title = <fgui.GTextField>(this.getChildAt(3));
	}
}