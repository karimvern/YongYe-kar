import {lib,game,ui,get,ai,_status} from '../../noname.js'
import {content} from './source/content.js'
import {precontent} from './source/precontent.js'
import config from './source/config.js'
import help from './source/help.js'
import character from './source/packages/main/character.js'
import skill from './source/packages/main/skill.js'
import card from './source/packages/main/card.js'
import basic from './source/basic.js'
import { refreshBackgroundItem, clearStartupBackground } from './source/background.js'
import modePrepare from './source/mode/prepare.js'
import { applyLegacyAssets } from './source/mode/yeyeSkin/yeyeSkin.js' // [旧样式层]
export let type = 'extension';
lib.init.css(lib.assetURL + 'extension/永夜之境', 'extension');
lib.init.css(lib.assetURL + 'extension/永夜之境', 'card');
//无尽模式·永夜 的样式
lib.init.css(lib.assetURL + 'extension/永夜之境/source/mode', 'style');
// [旧样式层] 可选：样式全部带 body.yeye-legacy 前缀，默认不生效（默认走 style.css 的永夜新样式）
lib.init.css(lib.assetURL + 'extension/永夜之境/source/mode/yeyeSkin', 'skin');
export default async function(){
    const extensionInfo = await lib.init.promises.json(`${basic.extensionDirectoryPath}info.json`);
    // 扫描 image/newbackground 文件夹，填充设置页中的背景列表
    await refreshBackgroundItem();
    // 扩展被关闭时本体的 precontent 不会执行，这里主动清掉之前写入的启动背景，
    // 否则重开一局时加载界面还会显示扩展背景
    if (!lib.config['extension_永夜之境_enable']) clearStartupBackground();
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
    // [旧样式层] 启动时按模式设置同步一次
    applyLegacyAssets();
    return extension;
}
