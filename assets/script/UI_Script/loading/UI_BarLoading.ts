/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_BarLoading extends fgui.GProgressBar {

	public m_t0:fgui.Transition;
	public static URL:string = "ui://6sd2b4omkb41s";

	public static createInstance():UI_BarLoading {
		return <UI_BarLoading>(fgui.UIPackage.createObject("loading", "BarLoading"));
	}

	protected onConstruct():void {
		this.m_t0 = this.getTransition("t0");
	}
}