/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_circle extends fgui.GButton {

	public m_thumb:fgui.GImage;
	public static URL:string = "ui://rbw1tvvvq9do18";

	public static createInstance():UI_circle {
		return <UI_circle>(fgui.UIPackage.createObject("Joystick", "circle"));
	}

	protected onConstruct():void {
		this.m_thumb = <fgui.GImage>(this.getChild("thumb"));
	}
}