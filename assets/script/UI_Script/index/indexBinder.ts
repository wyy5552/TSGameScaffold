/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Btn_Sound from "./UI_Btn_Sound";
import UI_ComRedPacket from "./UI_ComRedPacket";
import UI_View_Index from "./UI_View_Index";
import UI_Btn_CommonS from "./UI_Btn_CommonS";
import UI_Btn_Common from "./UI_Btn_Common";
import * as fgui from "fairygui-cc";


export default class indexBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_Btn_Sound.URL, UI_Btn_Sound);
		fgui.UIObjectFactory.setExtension(UI_ComRedPacket.URL, UI_ComRedPacket);
		fgui.UIObjectFactory.setExtension(UI_View_Index.URL, UI_View_Index);
		fgui.UIObjectFactory.setExtension(UI_Btn_CommonS.URL, UI_Btn_CommonS);
		fgui.UIObjectFactory.setExtension(UI_Btn_Common.URL, UI_Btn_Common);
	}
}