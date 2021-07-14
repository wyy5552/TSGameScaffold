/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_View_Game from "./UI_View_Game";
import UI_Btn_Page from "./UI_Btn_Page";
import * as fgui from "fairygui-cc";


export default class gameBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_View_Game.URL, UI_View_Game);
		fgui.UIObjectFactory.setExtension(UI_Btn_Page.URL, UI_Btn_Page);
	}
}