/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "fairygui-cc";

export default class UI_ComRedPacket extends fgui.GComponent {

	public m_C_State:fgui.Controller;
	public m_tf_tips:fgui.GTextField;
	public m_tf_total:fgui.GTextField;
	public m_tf_money:fgui.GTextField;
	public m_group_j:fgui.GGroup;
	public m_group_0:fgui.GGroup;
	public m_tf_total1:fgui.GTextField;
	public m_tf_tips1:fgui.GTextField;
	public m_group_1:fgui.GGroup;
	public static URL:string = "ui://srduhovm11arcx";

	public static createInstance():UI_ComRedPacket {
		return <UI_ComRedPacket>(fgui.UIPackage.createObject("index", "ComRedPacket"));
	}

	protected onConstruct():void {
		this.m_C_State = this.getController("C_State");
		this.m_tf_tips = <fgui.GTextField>(this.getChild("tf_tips"));
		this.m_tf_total = <fgui.GTextField>(this.getChild("tf_total"));
		this.m_tf_money = <fgui.GTextField>(this.getChild("tf_money"));
		this.m_group_j = <fgui.GGroup>(this.getChild("group_j"));
		this.m_group_0 = <fgui.GGroup>(this.getChild("group_0"));
		this.m_tf_total1 = <fgui.GTextField>(this.getChild("tf_total1"));
		this.m_tf_tips1 = <fgui.GTextField>(this.getChild("tf_tips1"));
		this.m_group_1 = <fgui.GGroup>(this.getChild("group_1"));
	}
}