/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Btn_Common from "./UI_Btn_Common";
import UI_Btn_Sound from "./UI_Btn_Sound";

import * as fgui from "fairygui-cc";
export default class UI_View_Index extends fgui.GComponent {

	public m_qudao:fgui.Controller;
	public m_btn_start:UI_Btn_Common;
	public m_btn_share:fgui.GButton;
	public m_tf_best:fgui.GTextField;
	public m_btn_rank:fgui.GButton;
	public m_btn_sound:UI_Btn_Sound;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://srduhovmczdz0";

	public static createInstance():UI_View_Index {
		return <UI_View_Index>(fgui.UIPackage.createObject("index", "View_Index"));
	}

	protected onConstruct():void {
		this.m_qudao = this.getController("qudao");
		this.m_btn_start = <UI_Btn_Common>(this.getChild("btn_start"));
		this.m_btn_share = <fgui.GButton>(this.getChild("btn_share"));
		this.m_tf_best = <fgui.GTextField>(this.getChild("tf_best"));
		this.m_btn_rank = <fgui.GButton>(this.getChild("btn_rank"));
		this.m_btn_sound = <UI_Btn_Sound>(this.getChild("btn_sound"));
		this.m_t0 = this.getTransition("t0");
	}
}