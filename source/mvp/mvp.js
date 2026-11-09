import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import { openCardsDialog } from './openCardsDialog.js';

/**
 * MVP结算（移植自《点绛唇》）
 * 入口：lib.onover → game.xinxmvp.show(bool)
 * 开关：扩展设置 → MVP结算（默认关闭）
 * 资源：source/mvp/{image,audio,level,identity}
 */
const MVP_DIR = 'extension/永夜之境/source/mvp';
lib.init.css(lib.assetURL + MVP_DIR, 'mvp');

const mvpEnabled = () => Boolean(lib.config['extension_永夜之境_mvp']);

/* ============================ 展示数据 ============================ */
//昵称/头像/官阶：没有就随机生成并缓存在storage里，保证同一局内多次打开一致
function getNickName(player) {
    if (player.storage.xinxmvp_nickname) return player.storage.xinxmvp_nickname;
    const fallback = player == game.me ? lib.config.connect_nickname : `小杀00${Math.floor(Math.random() * 900 + 100)}`;
    const name = player.nickname || fallback || '玩家';
    player.storage.xinxmvp_nickname = name;
    return name;
}
function getAvatar(player) {
    if (player.storage.xinxmvp_avatar) return player.storage.xinxmvp_avatar;
    let avatar = player == game.me ? lib.config.connect_avatar : null;
    if (!avatar) {
        const list = Object.keys(lib.character).filter(key => !lib.filter.characterDisabled(key));
        avatar = list.randomGet() || player.name1 || game.me?.name1;
    }
    player.storage.xinxmvp_avatar = avatar;
    return avatar;
}
function getGuanjie(player) {
    if (!player.storage.xinxmvp_guanjie) player.storage.xinxmvp_guanjie = Math.floor(Math.random() * 13) + 1;
    return player.storage.xinxmvp_guanjie;
}
//MVP页面播放一段该武将的技能语音
function playMvpVoice(player) {
    try {
        const skills = (lib.character[player.name1]?.skills || []).filter(skill => lib.skill[skill] && !lib.skill[skill].charlotte);
        const skill = skills.randomGet();
        if (!skill) return;
        const audio = (game.parseSkillAudio(skill, player) || []).filter(Boolean).randomGet();
        if (!audio) return;
        game.playAudio(audio.startsWith('ext:') ? audio : `../audio/${audio}`);
    } catch (e) {
        console.warn('MVP语音播放失败', e);
    }
}
//武将立绘：优先千幻聆音皮肤，没有就用本体/扩展立绘
function loadPortrait(bg, player) {
    const skin = (typeof game.qhly_getSkin == 'function' && game.qhly_getSkin(player.name1)) || `${player.name1}.jpg`;
    const apply = img => {
        bg.style.backgroundSize = 'cover';
        bg.style.backgroundRepeat = 'no-repeat';
        bg.style.backgroundPosition = 'center center';
        if (img.width > img.height) {
            bg.style.width = '667px';
            bg.style.left = '45%';
        }
        bg.style.backgroundImage = `url(${img.src})`;
    };
    const tryLoad = (url, onFail) => {
        const img = new Image();
        img.onload = () => apply(img);
        img.onerror = () => {
            img.onload = null;
            img.onerror = null;
            if (typeof onFail == 'function') onFail();
        };
        img.src = url;
    };
    tryLoad(`${lib.assetURL}extension/千幻聆音/sanguoyuanhua/${player.name1}/${skin}`, () =>
        tryLoad(`${lib.assetURL}extension/千幻聆音/sanguoskin/${player.name1}/${skin}`, () => bg.setBackground(player.name1, 'character')),
    );
}
//查看手牌（自带弹窗，层级高于MVP页面；不用game.openCardsDialog以免层级低于本页）
function openHandCards(player) {
    openCardsDialog(player);
}

/* ============================ MVP页面 ============================ */
function openMvp(player, callback) {
    //ext: 前缀会解析为 extension/...，直接传目录路径会被拼上 audio/ 前缀
    game.playAudio('ext:永夜之境/source/mvp/audio/mvp.mp3');
    playMvpVoice(player);
    const bg = ui.create.div(document.body, '.mvpBg', function () {
        bg.delete();
        if (typeof callback == 'function') callback();
    });
    ui.create.div('.closeText', bg);

    const portrait = ui.create.div('.mvpPlayerBg', bg);
    loadPortrait(portrait, player);

    //稀有度角标
    const rarity = (typeof game.getRarity == 'function' && game.getRarity(player.name1)) || 'junk';
    const level = ui.create.div('.skinLevel', portrait);
    level.style.backgroundImage = `url("${lib.assetURL}${MVP_DIR}/level/dc_${rarity}.png")`;

    //皮肤名*武将名
    const skinName = (lib.config.skin?.[player.name1]?.[0] || '').replace(/\.[^.]+$/, '') || '经典形象';
    ui.create.div('.name', `${skinName}*${get.slimName(player.name1)}`, portrait);
    ui.create.div('.bestBg', portrait); //全场最佳

    //玩家信息条
    const playBg = ui.create.div('.playBg', portrait);
    ui.create.div('.playHead', playBg).setBackground(getAvatar(player), 'character');
    ui.create.div('.playName', getNickName(player), playBg);
    const guanjie = ui.create.div('.playGuanjie', playBg);
    guanjie.style.backgroundImage = `url("${lib.assetURL}${MVP_DIR}/level/guanjie_${getGuanjie(player)}.png")`;
}

/* ============================ 对局记录页面 ============================ */
function openOverDialog(winners, losers) {
    const bg = ui.create.div(document.body, '.mvpBg');
    ui.create.div('.closeButton', '返回', bg, function () {
        bg.delete();
    });
    ui.create.div('.top', bg);
    ui.create.div('.bottom', bg, function () {
        if (modeName.innerHTML == '对局数据详情') showFirst();
        else showSecond();
    });
    const modeName = ui.create.div('.topBg', bg);

    let winnersBg = null;
    let losersBg = null;
    let dataBg = null;

    function clearBackgrounds() {
        for (const node of [winnersBg, losersBg, dataBg]) {
            if (node) node.delete();
        }
        winnersBg = losersBg = dataBg = null;
    }

    //单个玩家条目
    function createPlayerEntry(container, player, isWin, showData) {
        const node = ui.create.div('.mvpCharBg', container);
        if (player == game.me) node.setBackgroundImage(`${MVP_DIR}/image/meBg.png`);
        if (isWin) ui.create.div('.win', node);
        if (game.xinxmvp.mvpPlayer && game.xinxmvp.mvpPlayer == player) ui.create.div('.bestPlay', node);

        const identity = ui.create.div('.identityBg', node);
        identity.style.backgroundImage = `url("${lib.assetURL}${MVP_DIR}/identity/${player.identity}.png")`;

        ui.create.div('.mvpTouxiang', node).setBackground(player.name1, 'character');
        if (player.name2) ui.create.div('.mvpTouxiang2', node).setBackground(player.name2, 'character');

        const name = get.slimName(player.name1);
        const name2 = player.name2 ? get.slimName(player.name2) : '';
        ui.create.div('.name', name + (name2 ? '/' + name2 : ''), node);
        ui.create.div('.playName', getNickName(player), node);

        const guanjie = ui.create.div('.guanjie', node);
        guanjie.style.backgroundImage = `url("${lib.assetURL}${MVP_DIR}/level/guanjie_icon_${getGuanjie(player)}.png")`;

        const handCardsBg = ui.create.div('.handCardsBg', node);
        ui.create.div('.handCard', handCardsBg, function (e) {
            e.stopPropagation();
            openHandCards(player);
        });

        if (!showData) return;
        const dataNode = ui.create.div('.dataData', node);
        let kills = 0;
        for (const evt of player.stat) {
            if (evt.kill) kills += evt.kill;
        }
        let gains = 0;
        player.getAllHistory('gain', evt => {
            gains += evt.cards.length;
        });
        const useCards = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
        let damages = 0;
        let recovers = 0;
        game.getAllGlobalHistory('changeHp', evt => {
            const parent = evt.getParent();
            if (parent?.source && parent.source === player) {
                if (parent.name == 'recover') recovers += parent.num;
                else if (parent.name == 'damage') damages += parent.num;
            }
        });
        for (const text of [
            `击杀数:${kills}`,
            `摸牌数:${gains}`,
            `用牌数:${useCards}`,
            `造成伤害:${damages}`,
            `治疗量:${recovers}`,
        ]) {
            ui.create.div('.dataText', text, dataNode);
        }
    }

    function showFirst() {
        clearBackgrounds();
        const modeType = lib.config.all.mode.find(mode => lib.configOL[mode + '_mode'] || (mode !== 'connect' && lib.config.mode === mode));
        modeName.innerHTML = lib.translate[modeType] || '未知模式';
        winnersBg = ui.create.div('.winnersBg', bg);
        losersBg = ui.create.div('.losersBg', bg);
        winners.forEach(player => createPlayerEntry(winnersBg, player, true));
        losers.forEach(player => createPlayerEntry(losersBg, player));
    }

    function showSecond() {
        clearBackgrounds();
        modeName.innerHTML = '对局数据详情';
        dataBg = ui.create.div('.dataBg', bg);
        winners.forEach(player => createPlayerEntry(dataBg, player, true, true));
        losers.forEach(player => createPlayerEntry(dataBg, player, null, true));
    }

    showFirst();
}

/* ============================ 胜负计算 & 入口 ============================ */
function show(bool) {
    if (!mvpEnabled()) return;
    if (_status.video) return;
    //防止重复弹出
    if (document.querySelector('.mvpBg')) return;
    if (ui.dialogs[0]) ui.dialogs[0].hide();

    const winners = [];
    const addWinner = character => {
        if (!winners.includes(character)) winners.push(character);
    };
    const addFriends = characters => {
        for (const character of characters || []) addWinner(character);
    };

    const zhu = game.zhu;
    if (zhu) {
        if (zhu.isAlive()) {
            addWinner(zhu);
            addFriends(zhu.getFriends(null, true));
        } else {
            const nei = game.filterPlayer2(p => !p.getFriends(null, true).length);
            const hasOther = game.filterPlayer(p => !nei.includes(p) && p !== zhu).length;
            if (nei.length) {
                if (!hasOther) addFriends(nei.filter(p => p.isAlive()));
                else addFriends(zhu.getEnemies(null, true).filter(p => !nei.includes(p)));
            } else {
                addFriends(zhu.getEnemies(null, true));
            }
        }
    } else if (bool === true) {
        addWinner(game.me);
        addFriends(game.me.getFriends(null, true));
    } else if (bool === false) {
        const alive = game.filterPlayer();
        const target = alive.length === 1 ? alive[0] : alive[0].getEnemies(null, false).length ? game.me : alive[0];
        addWinner(target);
        addFriends(target.getFriends(null, true));
    }

    const losers = game.filterPlayer2(current => !winners.includes(current));

    //MVP评分：伤害/治疗×2 + 击杀×10 + (摸牌+用牌+响应)/2 + 胜利方额外按敌方数量加权
    let mvpPlayer = game.me;
    let maxScore = -Infinity;
    game.filterPlayer2(current => {
        let damages = 0;
        let recovers = 0;
        game.getAllGlobalHistory('changeHp', evt => {
            const parent = evt.getParent();
            if (parent?.source && parent.source === current) {
                if (parent.name == 'recover') recovers += parent.num;
                else if (parent.name == 'damage') damages += parent.num;
            }
        });
        let kills = 0;
        for (const evt of current.stat) {
            if (evt.kill) kills += evt.kill;
        }
        let gains = 0;
        current.getAllHistory('gain', evt => {
            gains += evt.cards.length;
        });
        const useCards = current.getAllHistory('useCard').length;
        const responds = current.getAllHistory('respond').length;
        let score = (damages + recovers) * 2 + kills * 10 + Math.floor((gains + useCards + responds) / 2);
        if (winners.includes(current)) score += Math.floor(Math.pow(current.getEnemies(null, true).length, 2) * 1.5);
        current.storage.xinxmvp_count = score;
        if (score > maxScore) {
            maxScore = score;
            mvpPlayer = current;
        }
    });

    setTimeout(() => {
        game.broadcastAll(
            (winners, losers, mvpPlayer) => {
                game.xinxmvp.mvpPlayer = mvpPlayer;
                game.xinxmvp.open(mvpPlayer, () => {
                    game.xinxmvp.overDialog(winners, losers);
                    ui.create.control('查看MVP', function () {
                        game.xinxmvp.open(mvpPlayer);
                    });
                    ui.create.control('对局记录', function () {
                        game.xinxmvp.overDialog(winners, losers);
                    });
                });
            },
            winners,
            losers,
            mvpPlayer,
        );
    }, 500);
}

game.xinxmvp = {
    mvpPlayer: null,
    enabled: mvpEnabled,
    open: openMvp,
    overDialog: openOverDialog,
    openCardsDialog,
    show,
};

lib.onover.push(function (bool) {
    try {
        show(bool);
    } catch (e) {
        console.error('MVP结算显示失败', e);
    }
});
