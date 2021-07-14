/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_TopTipContainer extends fgui.GComponent {

	public m_list:fgui.GList;
	public static URL:string = "ui://6be7cpotyj651k";

	public static createInstance():UI_TopTipContainer {
		return <UI_TopTipContainer>(fgui.UIPackage.createObject("common", "TopTipContainer"));
	}

	protected onConstruct():void {
		this.m_list = <fgui.GList>(this.getChild("list"));
	}
}