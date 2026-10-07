'use strict';
import { lib, game, ui, get, ai, _status } from "../../../../noname.js";
import { YEYE_RULES } from "./yeyeConst.js";

/**
 * 永夜将临 专用界面
 * 1. 进入模式时选择敌人将池
 * 2. 开局选择玩家武将（沿用本体的选将界面，不消耗玉璧）
 */

export const YEYE_PACKS = [
    { key: 'default', name: '默认将池', packs: null },
    { key: 'xinx1', name: '杏雅三国', packs: ['xinx1'] },
    { key: 'xinx2', name: '永夜之始', packs: ['xinx2'] },
    { key: 'xinxfenyu', name: '风雨如晦', packs: ['xinxfenyu'] },
    { key: 'xinxhuaijiu', name: '武将修改', packs: ['xinxhuaijiu'] },
    { key: 'all', name: '永夜之境', packs: ['xinx1', 'xinx2', 'xinxfenyu', 'xinxhuaijiu'] },
];

export const YEYE_INTRO = `参考了《无尽模式》、《太虚幻境》的代码。\n胜利条件：闯过 ${YEYE_RULES.totalStages} 关；第 ${YEYE_RULES.bossStages.join('/')} 关为永夜化身（BOSS），击败最后的 BOSS 即通关。\n每关在「战斗 / 精英 / 奇遇 / 休整」中选一，敌人将池作为敌人来源。`;

function hideDecadeUI() {
    if (!window.decadeUI) return;
    [
        '#system2',
        '.lbtn-paixu',
        '.lbtn-controls',
        '.latn-jilu',
        'img[src="extension/十周年UI/ui/assets/lbtn/uibutton/liaotian.png"]',
        'img[src="extension/十周年UI/shoushaUI/lbtn/images/uibutton/liaotian.png"]'
    ].forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.style.setProperty('display', 'none', 'important');
    });
}

/**
 * 取得指定武将包内可作为敌人的武将（随机且一次性消耗）
 * 注意：敌人将池不受禁将影响（若一个包被全部禁用，也不应该导致将池为空），仅排除隐藏武将。
 */
export function getPackCharacters(packs) {
    const list = [];
    if (!Array.isArray(packs)) return list;
    for (const pack of packs) {
        const packInfo = lib.characterPack[pack];
        if (!packInfo) continue;
        for (const name in packInfo) {
            if (!lib.character[name]) continue;
            const tags = lib.character[name][4] || [];
            if (tags.includes('minskin') || tags.includes('unseen') || tags.includes('hiddenboss') || tags.includes('boss')) continue;
            list.add(name);
        }
    }
    return list;
}

/**
 * 默认将池：本体将池，保留玩家的禁将数据。
 * 优先按【对决模式 - 欢乐成双】的将池构造（lib.characterReplace + lib.character，
 * 并用 characterDisabled 过滤禁将），禁将数据优先取对决模式(versus_banned)，
 * 没有记录时退回当前模式的禁将表。隐藏武将 / 隐藏皮肤不出现在敌人将池里。
 */
export function getDefaultCharacters() {
    const versusBanned = lib.config.versus_banned;
    const banned = (Array.isArray(versusBanned) && versusBanned.length)
        ? versusBanned
        : (lib.config.banned || []);
    const backup = lib.config.banned;
    //临时替换禁将表，复用本体的 characterDisabled 判定
    lib.config.banned = banned;
    try {
        //与「对决模式-欢乐成双」相同的将池构造方式
        const charList = [];
        const fullList = [];
        for (const base in lib.characterReplace) {
            const replaced = (lib.characterReplace[base] || []).filter(name => {
                return lib.character[name] && !lib.filter.characterDisabled(name) && !yeyeHiddenCharacter(name);
            });
            if (replaced.length) {
                charList.push(base);
                fullList.addArray(replaced);
            }
        }
        for (const name in lib.character) {
            if (!fullList.includes(name) && !lib.filter.characterDisabled(name) && !yeyeHiddenCharacter(name)) {
                fullList.push(name);
            }
        }
        return fullList;
    } finally {
        lib.config.banned = backup;
    }
}

/** 隐藏武将 / 隐藏皮肤不进入敌人将池 */
function yeyeHiddenCharacter(name) {
    const info = lib.character[name];
    if (!info) return true;
    const tags = info[4] || [];
    return tags.includes('minskin') || tags.includes('stonehidden') || tags.includes('unseen') || tags.includes('hiddenboss') || tags.includes('boss');
}

/**
 * 为「对决模式（欢乐）」挑一名队友武将。
 * 与玩家共用同一个将池（getDefaultCharacters），排除玩家自己与本关敌人，避免同关重名。
 */
export function yeyePickAlly(exclude) {
    const used = Array.isArray(exclude) ? exclude : [];
    const pool = getDefaultCharacters().filter(name => !used.includes(name));
    return pool.randomGet() || null;
}

/** 进入模式时的敌人将池选择界面（沿用无尽模式的按钮元素） */
export function yeyeChooseEnemyPool() {
    const data = lib.config.wujinYongyeData;
    const home = ui.create.div('.yeye_Home');
    document.body.appendChild(home);
    const homeBody = ui.create.div('.yeye_HomeBody', home);
    game.yyHomeButton(home);
    game.yyUIupdata(homeBody, true);
    hideDecadeUI();

    const body = ui.create.div('.yeye_HomeBodyBackground1', homeBody);
    body.style.backgroundImage = 'none';
    ui.create.div('.yeye_PackTitle', '选择敌人将池', body);

    const listBody = ui.create.div('.yeye_PackBody', body);
    lib.setScroll(listBody);

    YEYE_PACKS.forEach(pack => {
        let characters = pack.packs ? getPackCharacters(pack.packs) : getDefaultCharacters();
        //开启了「敌人将池上限70」时，随机截取最多70名角色
        /* if (lib.config.extension_永夜之境_yeyeEnemyPoolLimit === true && characters.length > 70) {
            characters = characters.randomGets(70);
        } */
        const button = ui.create.div('.yeye_PackButton', '', listBody);
        ui.create.div('.yeye_PackName', pack.name, button);
        button.addEventListener('click', function (event) {
            if (characters.length === 0) {
                game.messagePopup_yy('该武将包暂无可用武将');
                event.stopPropagation();
                event.preventDefault();
                return false;
            }
            game.txhj_playAudioCall_yy('WinButton', null, true);
            data.pack = pack.key;
            data.packName = pack.name;
            data.enemyPool = characters.slice(0);
            //保存完整名单：将池打空后用它重洗补满，不再是通关条件
            data.enemyPoolAll = characters.slice(0);
            game.saveConfig('wujinYongyeData', data);
            home.delete();
            game.yyUIupdata(homeBody, false);
            game.wujinYongyeHome();
            event.stopPropagation();
            event.preventDefault();
            return false;
        });
    });

    if (lib.config.extension_永夜之境_yeyeTextSizeOn === true) {
        game.applyandroidSize_yy(homeBody);
    }
}

/** 完成点将：写入存档并进入商店界面 */
function applyPlayerCharacter(name, home, homeBody) {
    const data = lib.config.wujinYongyeData;
    if (!data.use) data.use = {};
    data.point = name;
    data.name = name;
    data.skill = lib.character[name]?.skills;
    data.maxHp = lib.character[name]?.maxHp;
    data.hp = lib.character[name]?.hp;
    data.use[name] = (data.use[name] || 0) + 1;
    //记录到本模式的「最近使用」武将（自由选将界面“最近”页读的就是它）
    try {
        if (typeof game.addRecentCharacter === 'function') game.addRecentCharacter(name);
    } catch (e) {
        console.warn('记录最近武将失败:', e);
    }
    // 玩家自己的武将不会出现在敌人将池中
    if (Array.isArray(data.enemyPool) && data.enemyPool.includes(name)) {
        data.enemyPool.remove(name);
    }
    game.saveConfig('wujinYongyeData', data);
    _status.choiceCharacter = name;
    if (home) home.delete();
    if (homeBody) game.yyUIupdata(homeBody, false);
    //进入商店前再清一次，避免有残留的选将界面盖在后面
    yeyeClearChooseUI();
    //选完武将后先插入「选择获得侍从」，再进入商店
    if (typeof game.yeyeStartServantSelect === 'function') {
        game.yeyeStartServantSelect(() => game.wujinYongyeData());
    } else {
        game.wujinYongyeData();
    }
}

/**
 * 本体「自由选将」界面
 * 直接复用本体的 ui.create.characterDialog（武将包/势力/拼音筛选、搜索、全部武将），
 * 因为模式的选择界面处于暂停状态，所以移除按钮本体的事件绑定，改由本界面接管点击。
 */
/** 清理自由选将界面的残留（重复点击点将、或进入关卡前调用） */
export function yeyeClearChooseUI() {
    _status.yeyeChoosing = false;
    document.querySelectorAll('.yeye_ChooseDialog').forEach(el => el.remove());
    document.querySelectorAll('.yeye_ChooseBtnRowFixed').forEach(el => el.remove());
    if (Array.isArray(ui.dialogs)) {
        for (let i = ui.dialogs.length - 1; i >= 0; i--) {
            const item = ui.dialogs[i];
            if (item && item.classList && item.classList.contains('yeye_ChooseDialog')) {
                ui.dialogs.splice(i, 1);
            }
        }
    }
}

export function yeyeChooseCharacter(home, homeBody) {
    //防止重复点击“点将”开出多个界面
    if (_status.yeyeChoosing) return Promise.resolve(false);
    _status.yeyeChoosing = true;
    //先清掉可能残留的旧界面
    document.querySelectorAll('.yeye_ChooseDialog').forEach(el => el.remove());
    document.querySelectorAll('.yeye_ChooseBtnRowFixed').forEach(el => el.remove());
    return new Promise(resolve => {
        const data = lib.config.wujinYongyeData;
        let selected = data.point || null;
        let finished = false;
        function finish(result) {
            if (finished) return;
            finished = true;
            resolve(result);
        }

        const dialog = ui.create.characterDialog('heightset');
        dialog.classList.add('yeye_ChooseDialog');
        const evt = lib.config.touchscreen ? 'touchend' : 'click';

        function mark(button) {
            dialog.buttons.forEach(btn => btn.classList.remove('selected'));
            if (button) button.classList.add('selected');
        }

        dialog.buttons.forEach(button => {
            if (selected && button.link === selected) button.classList.add('selected');
            button.removeEventListener(evt, ui.click.button);
            button.addEventListener(evt, function (event) {
                if (_status.dragged || _status.justdragged) return;
                game.txhj_playAudioCall_yy('WinButton', null, true);
                selected = button.link;
                mark(button);
                event.stopPropagation();
                event.preventDefault();
                return false;
            });
        });

        dialog.open();

        const btnRow = ui.create.div('.yeye_ChooseBtnRowFixed');
        document.body.appendChild(btnRow);

        function closeChoose() {
            _status.yeyeChoosing = false;
            try {
                dialog.close();
            } catch (e) {
                dialog.delete();
            }
            btnRow.delete();
        }

        const cancelButton = ui.create.div('.yeye_ChooseButton', '取消', btnRow);
        cancelButton.addEventListener('click', function (event) {
            game.txhj_playAudioCall_yy('off', null, true);
            closeChoose();
            finish(false);
            event.stopPropagation();
            event.preventDefault();
            return false;
        });

        const okButton = ui.create.div('.yeye_ChooseButton.yeye_ChooseOk', '确认选择', btnRow);
        okButton.addEventListener('click', function (event) {
            if (!selected) {
                game.messagePopup_yy('请选择使用的武将');
                event.stopPropagation();
                event.preventDefault();
                return false;
            }
            game.txhj_playAudioCall_yy('off', null, true);
            closeChoose();
            applyPlayerCharacter(selected, home, homeBody);
            finish(true);
            event.stopPropagation();
            event.preventDefault();
            return false;
        });
    });
}
