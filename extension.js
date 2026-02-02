import {lib,game,ui,get,ai,_status} from '../../noname.js'
import {content} from './source/content.js'
import {precontent} from './source/precontent.js'
import config from './source/config.js'
import help from './source/help.js'
import character from './source/packages/main/character.js'
import skill from './source/packages/main/skill.js'
import card from './source/packages/main/card.js'
import basic from './source/basic.js'
export let type = 'extension';
lib.init.css(lib.assetURL + 'extension/永夜之境', 'extension');
export default async function(){
    const extensionInfo = await lib.init.promises.json(`${basic.extensionDirectoryPath}info.json`);
    let extension = {
        name:extensionInfo.name,
        editable:false,
        content,
        precontent,
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



