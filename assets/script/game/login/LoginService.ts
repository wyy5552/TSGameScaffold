import { IProxy, Proxy } from '../../libs/PureMVC';

/*
 * @Author: yourName
 * @since: 2021-07-14 14:37:25
 * @lastTime: 2021-07-14 17:14:21
 * @LastAuthor: your name
 * @message:
 * @文件相对于项目的路径: /TSGameScaffold/assets/script/game/login/LoginService.ts
 */
export class LoginService extends Proxy implements IProxy {
    static NAME = 'LoginService';
    constructor() {
        super(LoginService.NAME);
    }
    public login() {
        return {
            userName: '张三',
            pwd: 'sdfsxdfsdfsd',
        };
    }
}
