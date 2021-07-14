/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_circle from "./UI_circle";

import * as fgui from "fairygui-cc";
export default class UI_Main extends fgui.GComponent {

	public m_joystick:UI_circle;
	public m_joystick_center:fgui.GImage;
	public m_joystick_touch:fgui.GGraph;
	public static URL:string = "ui://rbw1tvvviitt1";

	public static createInstance():UI_Main {
		return <UI_Main>(fgui.UIPackage.createObject("Joystick", "Main"));
	}

	protected onConstruct():void {
		this.m_joystick = <UI_circle>(this.getChild("joystick"));
		this.m_joystick_center = <fgui.GImage>(this.getChild("joystick_center"));
		this.m_joystick_touch = <fgui.GGraph>(this.getChild("joystick_touch"));
	}
}