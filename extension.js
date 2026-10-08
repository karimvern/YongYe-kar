import {lib,game,ui,get,ai,_status} from '../../noname.js'
import {content} from './source/content.js'
import {precontent} from './source/precontent.js'
import config from './source/config.js'
import help from './source/help.js'
import character from './source/packages/main/character.js'
import skill from './source/packages/main/skill.js'
import card from './source/packages/main/card.js'
import basic from './source/basic.js'
import { refreshBackgroundItem, installDisableCleanupHook } from './source/background.js'
import modePrepare from './source/mode/prepare.js'
export let type = 'extension';
lib.init.css(lib.assetURL + 'extension/永夜之境', 'extension');
lib.init.css(lib.assetURL + 'extension/永夜之境', 'card');
//无尽模式·永夜 的样式
lib.init.css(lib.assetURL + 'extension/永夜之境/source/mode', 'style');
export default async function(){
    const extensionInfo = await lib.init.promises.json(`${basic.extensionDirectoryPath}info.json`);
    // 扫描 image/newbackground 文件夹，填充设置页中的背景列表
    await refreshBackgroundItem();
    // 扩展被关闭后本体不会加载扩展代码（importExtension 用空扩展顶替），
    // 所以“关闭时清理启动背景”只能在还开着的时候接管：见 background.js
    installDisableCleanupHook();
    let extension = {
        name:extensionInfo.name,
        editable:false,
        content,
        precontent,
        prepare: modePrepare,
        config,
        help,
        package:{
        intro: `<li>扩展版本：${extensionInfo.version}`,
		author:extensionInfo.author,
        character,
        card,
        skill},
        files:{'character':[],'card':[],'skill':[],'audio':[]}
    };
    Object.keys(extensionInfo).filter(key=>key!='name').forEach(key=>extension.package[key]=extensionInfo[key]);
    return extension;
}
