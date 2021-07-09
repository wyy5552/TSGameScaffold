/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Button from "./UI_Button";

import * as fgui from "fairygui-cc";
export default class UI_Main extends fgui.GComponent {

	public m_n3:fgui.GGraph;
	public m_n1:UI_Button;
	public m_n2:UI_Button;
	public m_n4:UI_Button;
	public m_n5:UI_Button;
	public m_n6:UI_Button;
	public m_n7:UI_Button;
	public m_n8:UI_Button;
	public m_n9:UI_Button;
	public m_n10:UI_Button;
	public m_n11:UI_Button;
	public m_n12:UI_Button;
	public m_n13:UI_Button;
	public m_n14:UI_Button;
	public m_n15:UI_Button;
	public m_n16:UI_Button;
	public static URL:string = "ui://8zew8oltrftu0";

	public static createInstance():UI_Main {
		return <UI_Main>(fgui.UIPackage.createObject("MainUI", "Main"));
	}

	protected onConstruct():void {
		this.m_n3 = <fgui.GGraph>(this.getChildAt(0));
		this.m_n1 = <UI_Button>(this.getChildAt(1));
		this.m_n2 = <UI_Button>(this.getChildAt(2));
		this.m_n4 = <UI_Button>(this.getChildAt(3));
		this.m_n5 = <UI_Button>(this.getChildAt(4));
		this.m_n6 = <UI_Button>(this.getChildAt(5));
		this.m_n7 = <UI_Button>(this.getChildAt(6));
		this.m_n8 = <UI_Button>(this.getChildAt(7));
		this.m_n9 = <UI_Button>(this.getChildAt(8));
		this.m_n10 = <UI_Button>(this.getChildAt(9));
		this.m_n11 = <UI_Button>(this.getChildAt(10));
		this.m_n12 = <UI_Button>(this.getChildAt(11));
		this.m_n13 = <UI_Button>(this.getChildAt(12));
		this.m_n14 = <UI_Button>(this.getChildAt(13));
		this.m_n15 = <UI_Button>(this.getChildAt(14));
		this.m_n16 = <UI_Button>(this.getChildAt(15));
	}
}