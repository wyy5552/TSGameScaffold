/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_View_QuanJuBeiJing extends fgui.GComponent {

	public m_back_img:fgui.GLoader;
	public static URL:string = "ui://6be7cpotyj651l";

	public static createInstance():UI_View_QuanJuBeiJing {
		return <UI_View_QuanJuBeiJing>(fgui.UIPackage.createObject("common", "View_全局背景"));
	}

	protected onConstruct():void {
		this.m_back_img = <fgui.GLoader>(this.getChild("back_img"));
	}
}