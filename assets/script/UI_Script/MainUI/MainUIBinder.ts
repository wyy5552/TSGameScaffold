/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Main from "./UI_Main";
import UI_CloseButton from "./UI_CloseButton";
import UI_Button from "./UI_Button";

export default class MainUIBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_Main.URL, UI_Main);
		fgui.UIObjectFactory.setExtension(UI_CloseButton.URL, UI_CloseButton);
		fgui.UIObjectFactory.setExtension(UI_Button.URL, UI_Button);
	}
}