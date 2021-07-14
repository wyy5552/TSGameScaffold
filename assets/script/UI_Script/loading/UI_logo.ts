/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_logo extends fgui.GComponent {

	public m_t0:fgui.Transition;
	public static URL:string = "ui://6sd2b4omhk0mcab";

	public static createInstance():UI_logo {
		return <UI_logo>(fgui.UIPackage.createObject("loading", "logo"));
	}

	protected onConstruct():void {
		this.m_t0 = this.getTransition("t0");
	}
}