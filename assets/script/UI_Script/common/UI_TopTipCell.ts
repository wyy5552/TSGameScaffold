/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_TopTipCell extends fgui.GButton {

	public m_Ani_show:fgui.Transition;
	public static URL:string = "ui://6be7cpotyj651j";

	public static createInstance():UI_TopTipCell {
		return <UI_TopTipCell>(fgui.UIPackage.createObject("common", "TopTipCell"));
	}

	protected onConstruct():void {
		this.m_Ani_show = this.getTransition("Ani_show");
	}
}