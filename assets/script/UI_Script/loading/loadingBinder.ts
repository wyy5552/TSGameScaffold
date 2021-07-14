/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_View_Loading from "./UI_View_Loading";
import UI_logo from "./UI_logo";
import UI_BarLoading from "./UI_BarLoading";
import * as fgui from "fairygui-cc";


export default class loadingBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_View_Loading.URL, UI_View_Loading);
		fgui.UIObjectFactory.setExtension(UI_logo.URL, UI_logo);
		fgui.UIObjectFactory.setExtension(UI_BarLoading.URL, UI_BarLoading);
	}
}