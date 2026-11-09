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
import { initRightLayout, applyRightLayout } from './source/right/rightLayout.js'
import { initMenuStyle } from './source/menuStyle.js'
export let type = 'extension';
lib.init.css(lib.assetURL + 'extension/永夜之境', 'extension');
lib.init.css(lib.assetURL + 'extension/永夜之境', 'card');

lib.init.css(lib.assetURL + 'extension/永夜之境/source/mode', 'style');
// 本体UI右手布局：样式表（带时间戳防 service-worker/磁盘缓存）+ data 标记 + 镜像补丁
const rightLayoutCssLink = document.createElement('link');
rightLayoutCssLink.rel = 'stylesheet';
rightLayoutCssLink.href = `${lib.assetURL}extension/永夜之境/source/right/right-layout.css?t=${Date.now()}`;
document.head.appendChild(rightLayoutCssLink);
export default async function(){
    const extensionInfo = await lib.init.promises.json(`${basic.extensionDirectoryPath}info.json`);
    // 扫描 image/newbackground 文件夹，填充设置页中的背景列表
    await refreshBackgroundItem();
    // 扩展被关闭后本体不会加载扩展代码（importExtension 用空扩展顶替），
    // 所以“关闭时清理启动背景”只能在还开着的时候接管：见 background.js
    installDisableCleanupHook();
    // 本体UI右手布局：安装 updatec 镜像补丁并按配置打 data 标记
    initRightLayout();
    let extension = {
        name:extensionInfo.name,
        editable:false,
        content,
        precontent,
        prepare: modePrepare,
        // 本体在 ui.create.arena() 完成后调用 lib.arenaReady 队列；
        // 注意扩展的 content 运行于 arena 创建之前，不能在那里设置 #arena 的 data 标记
        //arenaReady: applyRightLayout,
        arenaReady() {
            applyRightLayout();
            // 菜单美化同样要等 arena 创建后再挂样式，避免影响开始菜单
            initMenuStyle();
        },
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
