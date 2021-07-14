/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_View_Gameover extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_qudao:fgui.Controller;
	public m_btn_close:fgui.GButton;
	public m_btn_share:fgui.GButton;
	public m_btn_play_next:fgui.GButton;
	public m_btn_restart:fgui.GButton;
	public static URL:string = "ui://wypcxr9rsyyn0";

	public static createInstance():UI_View_Gameover {
		return <UI_View_Gameover>(fgui.UIPackage.createObject("gameover", "View_Gameover"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_qudao = this.getController("qudao");
		this.m_btn_close = <fgui.GButton>(this.getChild("btn_close"));
		this.m_btn_share = <fgui.GButton>(this.getChild("btn_share"));
		this.m_btn_play_next = <fgui.GButton>(this.getChild("btn_play_next"));
		this.m_btn_restart = <fgui.GButton>(this.getChild("btn_restart"));
	}
}