/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BarLoading from "./UI_BarLoading";

import * as fgui from "fairygui-cc";
export default class UI_View_Loading extends fgui.GComponent {

	public m_bg:fgui.GLoader;
	public m_bar_loading:UI_BarLoading;
	public m_tf_version:fgui.GTextField;
	public m_loading_group:fgui.GGroup;
	public static URL:string = "ui://6sd2b4omf4jw0";

	public static createInstance():UI_View_Loading {
		return <UI_View_Loading>(fgui.UIPackage.createObject("loading", "View_Loading"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GLoader>(this.getChild("bg"));
		this.m_bar_loading = <UI_BarLoading>(this.getChild("bar_loading"));
		this.m_tf_version = <fgui.GTextField>(this.getChild("tf_version"));
		this.m_loading_group = <fgui.GGroup>(this.getChild("loading_group"));
	}
}