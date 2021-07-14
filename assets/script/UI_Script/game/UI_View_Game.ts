/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Btn_Page from "./UI_Btn_Page";

import * as fgui from "fairygui-cc";
export default class UI_View_Game extends fgui.GComponent {

	public m_hand:fgui.GComponent;
	public m_bar:fgui.GProgressBar;
	public m_btn_main:UI_Btn_Page;
	public m_tf_best:fgui.GTextField;
	public m_tf_blood:fgui.GTextField;
	public m_tf_time:fgui.GTextField;
	public m_tf_level:fgui.GTextField;
	public static URL:string = "ui://sotny11wftyd0";

	public static createInstance():UI_View_Game {
		return <UI_View_Game>(fgui.UIPackage.createObject("game", "View_Game"));
	}

	protected onConstruct():void {
		this.m_hand = <fgui.GComponent>(this.getChild("hand"));
		this.m_bar = <fgui.GProgressBar>(this.getChild("bar"));
		this.m_btn_main = <UI_Btn_Page>(this.getChild("btn_main"));
		this.m_tf_best = <fgui.GTextField>(this.getChild("tf_best"));
		this.m_tf_blood = <fgui.GTextField>(this.getChild("tf_blood"));
		this.m_tf_time = <fgui.GTextField>(this.getChild("tf_time"));
		this.m_tf_level = <fgui.GTextField>(this.getChild("tf_level"));
	}
}