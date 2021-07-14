/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_View_QuanJuJiaZai extends fgui.GComponent {

	public m_back_img:fgui.GGraph;
	public m_info_txt:fgui.GTextField;
	public static URL:string = "ui://6be7cpotyj651h";

	public static createInstance():UI_View_QuanJuJiaZai {
		return <UI_View_QuanJuJiaZai>(fgui.UIPackage.createObject("common", "View_全局加载"));
	}

	protected onConstruct():void {
		this.m_back_img = <fgui.GGraph>(this.getChild("back_img"));
		this.m_info_txt = <fgui.GTextField>(this.getChild("info_txt"));
	}
}