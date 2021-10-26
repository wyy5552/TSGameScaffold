'use strict';
const _0x6347 = [
    'ZicmX',
    'split',
    'how',
    'exports',
    'IuzEf',
    'Ixvqg',
    'file://',
    'join',
    'parse',
    'index.html',
    '4pgPHXz',
    'ector\x20v',
    'setMenu',
    'closed',
    'Selection',
    'ToEyH',
    'node',
    'v.switchMo',
    '?port=',
    'electron',
    'broadcast',
    'UiVQc',
    '132463VMUTqA',
    'versions',
    '../cocos-i',
    'mnxgH',
    'process',
    'json',
    'request',
    'd.js',
    'kRuaa',
    'ch-asset',
    'getSelecte',
    'index_low_',
    'MzMLF',
    'readFileSy',
    'isteners',
    'asset',
    'cuvSd',
    'ZgRlR',
    'eMACq',
    'de(',
    'unselect',
    'show',
    ':focusNode',
    'existsSync',
    '&mode=',
    'version',
    '225553rUgYDJ',
    'TYcGK',
    'query-port',
    'config.jso',
    'ui-kit:tou',
    'uqAnz',
    'YPtLL',
    'OuIcs',
    'server',
    'select',
    '#2e2c29',
    'electron.h',
    'onfig.json',
    'executeJav',
    'name',
    '290497vqlkJb',
    'webContent',
    'aScript',
    'WgOQR',
    'tml',
    'OJgUH',
    './package.',
    'disableWeb',
    ':focusAsse',
    '125294KOTDwm',
    '14938pmttUP',
    'nspector-c',
    'Message',
    '17NcxCOz',
    '6906IOAUOQ',
    'Sec',
    '519435zbzRFJ',
    'removeAllL',
    'path',
    'ready-to-s',
    'error',
    'zcYTK',
    'loadURL',
    'mainPreloa',
    'Cocos\x20Insp',
    'utf-8',
    'viDaw'
];
const _0x2f5295 = _0x5090;
function _0x5090(_0x14e233, _0x5bdb61) {
    _0x14e233 = _0x14e233 - (-0x1bca + -0x2 * 0x827 + 0xe * 0x32e);
    let _0x43983d = _0x6347[_0x14e233];
    return _0x43983d;
}
(function (_0x4232f9, _0x3489b9) {
    const _0x104b2e = _0x5090;
    while (!![]) {
        try {
            const _0x218373 = -parseInt(_0x104b2e(0xb4)) + parseInt(_0x104b2e(0x7b)) + -parseInt(_0x104b2e(0xae)) * -parseInt(_0x104b2e(0xb1)) + -parseInt(_0x104b2e(0xad)) + -parseInt(_0x104b2e(0xa4)) + parseInt(_0x104b2e(0xb2)) + parseInt(_0x104b2e(0x95)) * parseInt(_0x104b2e(0x6f));
            if (_0x218373 === _0x3489b9)
                break;
            else
                _0x4232f9['push'](_0x4232f9['shift']());
        } catch (_0x51ae3b) {
            _0x4232f9['push'](_0x4232f9['shift']());
        }
    }
}(_0x6347, 0x5 * -0x86d7 + 0x83840 + -0x16a0));
const {BrowserWindow, app, remote, ipcMain} = require(_0x2f5295(0x78)), path = require(_0x2f5295(0xb6)), pcs = require(_0x2f5295(0x7f)), folder = '', devTools = ![];
let win, mode = 0x2 * 0xd67 + -0xa29 + -0x10a5 * 0x1, unloaded = ![];
const PKG_NAME = require(_0x2f5295(0xaa) + _0x2f5295(0x80))[_0x2f5295(0xa3)], PKG_VERSION = require(_0x2f5295(0xaa) + _0x2f5295(0x80))[_0x2f5295(0x94)];
let fs = require('fs'), _configPath = path[_0x2f5295(0x6c)](__dirname, _0x2f5295(0x98) + 'n'), __parentConfig = path[_0x2f5295(0x6c)](__dirname, _0x2f5295(0x7d) + _0x2f5295(0xaf) + _0x2f5295(0xa1));
function readConfig() {
    const _0x3588ce = _0x2f5295, _0x475275 = { 'YPtLL': _0x3588ce(0xbd) };
    let _0x5e8e1c = '';
    return fs[_0x3588ce(0x92)](__parentConfig) ? _0x5e8e1c = fs[_0x3588ce(0x88) + 'nc'](__parentConfig, { 'encoding': _0x475275[_0x3588ce(0x9b)] }) : _0x5e8e1c = fs[_0x3588ce(0x88) + 'nc'](_configPath, { 'encoding': _0x475275[_0x3588ce(0x9b)] }), JSON[_0x3588ce(0x6d)](_0x5e8e1c);
}
let disableWebSec = Boolean(readConfig()[_0x2f5295(0xab) + _0x2f5295(0xb3)]);
module[_0x2f5295(0xc2)] = {
    async 'load'() {
        const _0x68bcac = _0x2f5295;
        ipcMain['on'](PKG_NAME + _0x68bcac(0x91), focusNode), ipcMain['on'](PKG_NAME + (_0x68bcac(0xac) + 't'), focusAsset);
    },
    'unload'() {
        const _0x2bd262 = _0x2f5295;
        unloaded = !![], ipcMain[_0x2bd262(0xb5) + _0x2bd262(0x89)](PKG_NAME + _0x2bd262(0x91)), ipcMain[_0x2bd262(0xb5) + _0x2bd262(0x89)](PKG_NAME + (_0x2bd262(0xac) + 't'));
    },
    'methods': {
        'previewMode'() {
            const _0x491a98 = _0x2f5295, _0x555c2d = {
                    'IuzEf': function (_0x4e7110, _0x226469) {
                        return _0x4e7110(_0x226469);
                    }
                };
            if (unloaded)
                return;
            _0x555c2d[_0x491a98(0xc3)](tryShowWindow, -0x1ffd + 0x207f + 0xd * -0xa);
        },
        'buildMobileMode'() {
            const _0x1554a9 = _0x2f5295, _0x1beef7 = {
                    'Ixvqg': function (_0x3d6642, _0x4b3c3a) {
                        return _0x3d6642(_0x4b3c3a);
                    }
                };
            if (unloaded)
                return;
            _0x1beef7[_0x1554a9(0xc4)](tryShowWindow, 0x1 * 0x1c72 + -0x1 * -0xa21 + -0x2692);
        },
        'buildDesktopMode'() {
            const _0x2b499a = _0x2f5295, _0x4be1d0 = {
                    'mnxgH': function (_0x340a24, _0x146888) {
                        return _0x340a24(_0x146888);
                    }
                };
            if (unloaded)
                return;
            _0x4be1d0[_0x2b499a(0x7e)](tryShowWindow, -0x2609 * 0x1 + 0xc * -0x1f + 0x2780);
        },
        'openCustomPage'() {
            const _0x34750b = _0x2f5295, _0x481136 = {
                    'uqAnz': function (_0x21252e, _0x16be3d) {
                        return _0x21252e(_0x16be3d);
                    }
                };
            if (unloaded)
                return;
            _0x481136[_0x34750b(0x9a)](tryShowWindow, -0x18f0 + -0x3 * -0xb06 + -0x820);
        }
    }
};
function focusNode(_0x2c6720, _0x9c884d) {
    const _0x1f4121 = _0x2f5295, _0x3284e8 = { 'viDaw': _0x1f4121(0x75) };
    let _0x150a90 = Editor[_0x1f4121(0x73)][_0x1f4121(0x85) + 'd'](_0x3284e8[_0x1f4121(0xbe)]);
    Editor[_0x1f4121(0x73)][_0x1f4121(0x8f)](_0x3284e8[_0x1f4121(0xbe)], _0x150a90), Editor[_0x1f4121(0x73)][_0x1f4121(0x9e)](_0x3284e8[_0x1f4121(0xbe)], _0x9c884d);
}
function focusAsset(_0x13098d, _0x36207b) {
    const _0x366301 = _0x2f5295, _0x160bcf = {
            'ZicmX': _0x366301(0x99) + _0x366301(0x84),
            'TYcGK': _0x366301(0x8a)
        };
    Editor[_0x366301(0xb0)][_0x366301(0x79)](_0x160bcf[_0x366301(0xbf)], _0x36207b);
    let _0x59a877 = Editor[_0x366301(0x73)][_0x366301(0x85) + 'd'](_0x160bcf[_0x366301(0x96)]);
    Editor[_0x366301(0x73)][_0x366301(0x8f)](_0x160bcf[_0x366301(0x96)], _0x59a877), Editor[_0x366301(0x73)][_0x366301(0x9e)](_0x160bcf[_0x366301(0x96)], _0x36207b);
}
async function showWindow() {
    const _0x200ecf = _0x2f5295, _0x45884e = {
            'ZgRlR': function (_0x32a57a, _0x2f3810) {
                return _0x32a57a + _0x2f3810;
            },
            'OJgUH': _0x200ecf(0xbc) + _0x200ecf(0x70),
            'eMACq': _0x200ecf(0x9f),
            'UiVQc': _0x200ecf(0xb7) + _0x200ecf(0xc1),
            'zcYTK': _0x200ecf(0x72),
            'ToEyH': function (_0x3e9e23, _0x32cd2b) {
                return _0x3e9e23 >= _0x32cd2b;
            },
            'cuvSd': _0x200ecf(0x9d),
            'WgOQR': _0x200ecf(0x97),
            'OuIcs': _0x200ecf(0x77),
            'kRuaa': _0x200ecf(0x93)
        };
    if (win) {
        win[_0x200ecf(0x90)](), win[_0x200ecf(0xa5) + 's'][_0x200ecf(0xa2) + _0x200ecf(0xa6)](_0x200ecf(0x76) + _0x200ecf(0x8e) + mode + ')');
        return;
    }
    win = new BrowserWindow({
        'minWidth': 0x36e,
        'minHeight': 0x258,
        'width': 0x36e,
        'height': 0x258,
        'title': _0x45884e[_0x200ecf(0x8c)](_0x45884e[_0x200ecf(0xa9)], PKG_VERSION),
        'backgroundColor': _0x45884e[_0x200ecf(0x8d)],
        'useContentSize': ![],
        'webPreferences': {
            'enablePreferredSizeMode': !![],
            'preferredSizeMode': !![],
            'webviewTag': !![],
            'nodeIntegration': !![],
            'nodeIntegrationInSubFrames': !![],
            'enableRemoteModule': !![],
            'sandbox': ![],
            'devTools': devTools,
            'contextIsolation': ![],
            'webSecurity': !disableWebSec,
            'preload': path[_0x200ecf(0x6c)](__dirname, folder + (_0x200ecf(0xbb) + _0x200ecf(0x82)))
        }
    }), win[_0x200ecf(0x71)](null), win['on'](_0x45884e[_0x200ecf(0x7a)], () => win[_0x200ecf(0x90)]()), win['on'](_0x45884e[_0x200ecf(0xb9)], () => {
        win = null;
    });
    let _0x588a6e = folder + (_0x200ecf(0x86) + _0x200ecf(0xa0) + _0x200ecf(0xa8));
    _0x45884e[_0x200ecf(0x74)](process[_0x200ecf(0x7c)][_0x200ecf(0x78)][_0x200ecf(0xc0)]('.')[0x1e5 * -0x4 + -0x2263 * -0x1 + -0x1 * 0x1acf], 0xc0f + -0x1094 + 0x48a) && (_0x588a6e = folder + _0x200ecf(0x6e));
    let _0x17c6bc = await Editor[_0x200ecf(0xb0)][_0x200ecf(0x81)](_0x45884e[_0x200ecf(0x8b)], _0x45884e[_0x200ecf(0xa7)]), _0x246aba = path[_0x200ecf(0x6c)](__dirname, _0x45884e[_0x200ecf(0x8c)](_0x45884e[_0x200ecf(0x8c)](_0x45884e[_0x200ecf(0x8c)](_0x45884e[_0x200ecf(0x8c)](_0x588a6e, _0x45884e[_0x200ecf(0x9c)]), _0x17c6bc), _0x45884e[_0x200ecf(0x83)]), mode));
    win[_0x200ecf(0xba)](_0x200ecf(0xc5) + _0x246aba);
}
function tryShowWindow(_0xf6ec1d) {
    const _0xd080b9 = _0x2f5295, _0x5312c9 = {
            'MzMLF': function (_0x41ec10) {
                return _0x41ec10();
            }
        };
    mode = _0xf6ec1d;
    try {
        _0x5312c9[_0xd080b9(0x87)](showWindow);
    } catch (_0x4e0d48) {
        console[_0xd080b9(0xb8)](_0x4e0d48);
    }
}