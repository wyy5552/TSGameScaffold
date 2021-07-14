/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_View_tip extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public static URL:string = "ui://6be7cpotjb4e8m";

	public static createInstance():UI_View_tip {
		return <UI_View_tip>(fgui.UIPackage.createObject("common", "View_tip"));
	}

	protected onConstruct():void {
		this.m_title = <fgui.GTextField>(this.getChild("title"));
	}
}