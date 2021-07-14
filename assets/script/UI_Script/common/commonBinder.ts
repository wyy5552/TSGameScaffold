/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_View_tip from "./UI_View_tip";
import UI_View_QuanJuJiaZai from "./UI_View_QuanJuJiaZai";
import UI_ani_QuanJuJiaZaiZhuanQuan from "./UI_ani_QuanJuJiaZaiZhuanQuan";
import UI_TopTipCell from "./UI_TopTipCell";
import UI_TopTipContainer from "./UI_TopTipContainer";
import UI_View_QuanJuBeiJing from "./UI_View_QuanJuBeiJing";
import * as fgui from "fairygui-cc";


export default class commonBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_View_tip.URL, UI_View_tip);
		fgui.UIObjectFactory.setExtension(UI_View_QuanJuJiaZai.URL, UI_View_QuanJuJiaZai);
		fgui.UIObjectFactory.setExtension(UI_ani_QuanJuJiaZaiZhuanQuan.URL, UI_ani_QuanJuJiaZaiZhuanQuan);
		fgui.UIObjectFactory.setExtension(UI_TopTipCell.URL, UI_TopTipCell);
		fgui.UIObjectFactory.setExtension(UI_TopTipContainer.URL, UI_TopTipContainer);
		fgui.UIObjectFactory.setExtension(UI_View_QuanJuBeiJing.URL, UI_View_QuanJuBeiJing);
	}
}