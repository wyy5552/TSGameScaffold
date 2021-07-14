import { AssetManager, resources } from 'cc';
import * as fgui from 'fairygui-cc';
/*
 * @Author: yourName
 * @since: 2021-07-14 15:12:01
 * @lastTime: 2021-07-14 23:44:01
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/game/utils/LoadGroup.ts
 */
export class LoadGroup {
    static loadFuiList(
        url: string[],
        assetsNum: number, // cocos会生成一个描述文件.json,一个本体
        onProgress?: (percent: number) => void,
        onComplete?: (error: Error) => void
    ): void {
        assetsNum *= 2;
        const assetPercent: { [p: string]: number } = {};
        const onProgressCb = () => {
            let totalPercent = 0;
            for (const key in assetPercent) {
                if (Object.prototype.hasOwnProperty.call(assetPercent, key)) {
                    totalPercent += assetPercent[key];
                }
            }
            onProgress && onProgress(totalPercent);
        };
        const progressHandler = (finish: number, total: number, item: AssetManager.RequestItem) => {
            let itemPath = (resources.getAssetInfo(item.uuid) as unknown as { path: string }).path;
            if (assetPercent[itemPath] === undefined) {
                assetPercent[itemPath] = 0;
            }
            assetPercent[itemPath] = Math.floor((finish / assetsNum) * 100) / 100;
            onProgressCb();
        };
        let completeNum = 0;
        const completeHandler = (error: Error) => {
            if (error) {
                onComplete && onComplete(error);
            } else {
                completeNum += 1;
                if (completeNum === url.length) {
                    onComplete && onComplete(error);
                }
            }
        };
        for (let i = 0; i < url.length; i++) {
            fgui.UIPackage.loadPackage(url[i], progressHandler, completeHandler);
        }
    }
}
