'use strict';
import { lib, game, ui, get, ai, _status } from "../../../../noname.js";
import { CacheContext } from "../../../../noname/library/cache/cacheContext.js";
import mode from "./mode.js";
import modePrecontent from "./precontent-yy.js";
import { yeyeChooseCharacter, yeyeChooseEnemyPool, yeyeClearChooseUI } from "./yeyeUI.js";
import {
    YEYE_RULES,
    YEYE_NODES,
    YEYE_MARKS,
    yeyeEnemyCount,
    yeyeNodeCandidates,
    yeyeNodeInfo,
    yeyeEnemyBonus,
    yeyeRandomBuff,
    yeyeAddBuff,
    yeyeActiveSkills,
    yeyeScaled,
    yeyeResetStageShop,
    yeyeOpenPanel,
    yeyePanelCard,
} from "./yeyeConst.js";
import { yeyePickEvent, yeyeRunEvent, yeyeGetEvent } from "./yeyeEvent.js";
import { yeyePickServantId, yeyeGainServant, yeyeServantResultText, yeyeOpenServantSelect } from "./yeyeServant.js";
// 【新增节点】锻造 / 祭坛 / 挑战；整体停用见 yeyeConst.js 的 YEYE_RULES.enableNewNodes
import { yeyeRunForge, yeyeRunAltar, yeyeRunChallenge } from "./yeyeNode.js";
const prepare = function () {
    //注册永夜将临专用的音频/图片工具函数
    modePrecontent();
    window.yeyeGlobal = window.yeyeGlobal || {};
    yeyeGlobal.isInitCardPileYeye = ![];
    if (!lib.config.yeyeGlobalJade) lib.config.yeyeGlobalJade = 0;
    game.applyandroidSize_yy = function (element) {
        // if (!game.isAndroid_yy()) return;
        if (!element) return;
        game.androidSize_yy(element);
        if (element.children && element.children.length > 0) {
            Array.from(element.children).forEach(child => {
                game.applyandroidSize_yy(child);
            });
        }
    };
    game.yyUIupdata = function (homeBody, bool) {
        if (!homeBody) return;
        let resizeTimer = null;
        const debounce = (fn, delay) => {
            return () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(fn, delay);
            };
        };
        let setWuJinHomeSize = function () {
            const screenWidth = ui.window.offsetWidth || window.innerWidth;
            const screenHeight = ui.window.offsetHeight || window.innerHeight;
            let whr = 1920 / 1080;
            let width, height;
            if (screenWidth / whr > screenHeight) {
                height = screenHeight;
                width = height * whr;
            } else {
                width = screenWidth;
                height = screenWidth / whr;
            }
            homeBody.style.cssText += `
            width: ${Math.round(width)}px;
            height: ${Math.round(height)}px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.9);
            transform-origin: center center;
            box-sizing: border-box;
        `;
        };
        const reWuJinHomesize = debounce(setWuJinHomeSize, 500);
        if (bool) {
            setWuJinHomeSize();
            lib.onresize = lib.onresize.filter(fn => fn !== reWuJinHomesize);
            lib.onresize.push(reWuJinHomesize);
            window.addEventListener('resize', reWuJinHomesize);
        } else {
            lib.onresize = lib.onresize.filter(fn => fn !== reWuJinHomesize);
            window.removeEventListener('resize', reWuJinHomesize);
            clearTimeout(resizeTimer);
            homeBody.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    };
    game.isAndroid_yy = function () {//检查是否是安卓
        return navigator.userAgent.match(/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i);
    };
    game.androidSize_yy = function (body) {
        if (!body || body?.dataset?.fontScaled === 'true') return;

        if (body.dataset.fontScaling === 'true') return;
        body.dataset.fontScaling = 'true';

        function getFontSizeWithRetry(el, count = 0) {
            const computedStyle = window.getComputedStyle(el);
            const fontSizeStr = computedStyle.fontSize;
            if (fontSizeStr && fontSizeStr !== '16px' && count < 3) {
                return fontSizeStr;
            }
            if (count < 3) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        resolve(getFontSizeWithRetry(el, count + 1));
                    }, 50);
                });
            }
            return '1.5vw';
        }

        async function scaleElementFont(el) {
            if (el.dataset.fontScaled === 'true') return;

            if (!el.parentNode) {
                document.body.appendChild(el);
                el.dataset.tempMount = 'true';
            }

            const fontSizeStr = await getFontSizeWithRetry(el);
            const matchResult = fontSizeStr.match(/^(\d+(\.\d+)?)+(vw|px|rem|em)$/i);
            if (!matchResult) return;

            const [, numStr, , unit] = matchResult;
            const originalSize = parseFloat(numStr);
            if (isNaN(originalSize)) return;

            const screenWidth = ui.window?.offsetWidth || window.innerWidth;
            const screenHeight = ui.window?.offsetHeight || window.innerHeight;
            const screenRatio = screenWidth / screenHeight * 0.8;
            const uiZoomStr = lib.config?.ui_zoom || '100%';
            const zoomMatch = uiZoomStr.match(/^(\d+(\.\d+)?)%$/);
            const uiZoom = zoomMatch ? parseFloat(zoomMatch[1]) / 100 : 1;
            let newSize = originalSize * screenRatio * uiZoom;
            if (!!lib.config.extension_永夜之境_yeyeTextSize) newSize = newSize * Number(lib.config.extension_永夜之境_yeyeTextSize);
            const newSizeFixed = Number(newSize.toFixed(1));

            el.style.fontSize = `${newSizeFixed}${unit}`;
            el.dataset.fontScaled = 'true';
        }

        scaleElementFont(body).then(() => {
            body.dataset.fontScaled = 'true';
            if (body.dataset.fontScaling) {
                delete body.dataset.fontScaling;
            }
        });

        return body;
    };
    game.yyHomeButton = function (view) {//菜单按钮
        var homeButton = ui.create.div('.yeye_consoledeskHomeButton', view);
        homeButton.onclick = function (event) {
            game.txhj_playAudioCall_yy('WinButton', null, true);
            homeButton.innerHTML = '';
            var homeButtonBox = ui.create.div('.yeye_consoledeskHomeButtonBox', homeButton);
            homeButtonBox.onclick = function (event) {
                game.txhj_playAudioCall_yy('off', null, true);
                homeButton.innerHTML = '';
                event.stopPropagation();
                event.preventDefault();
                return false;
            };
            var homeButtonMenu = ui.create.div('.yeye_consoledeskHomeButtonMenu', homeButtonBox);
            homeButtonMenu.onclick = function (event) {
                game.txhj_playAudioCall_yy('WinButton', null, true);
                homeButton.innerHTML = '';
                if (!ui.click.configMenu) return;
                game.closePopped();
                game.pause2();
                ui.click.configMenu();
                ui.system1.classList.remove('shown');
                ui.system2.classList.remove('shown');
                event.stopPropagation();
                event.preventDefault();
                return false;
            };
            var homeButtonOut = ui.create.div('.yeye_consoledeskHomeButtonOut', homeButtonBox);
            homeButtonOut.onclick = function (event) {
                game.txhj_playAudioCall_yy('off', null, true);
                homeButton.innerHTML = '';
                window.location.reload();
                event.stopPropagation();
                event.preventDefault();
                return false;
            };
            event.stopPropagation();
            event.preventDefault();
            return false;
        }
        view.onclick = function (event) {
            homeButton.innerHTML = '';
            event.stopPropagation();
            event.preventDefault();
            return false;
        };
    };
    game.isInitCardPileYeye = function () {//创建牌库
        if (!yeyeGlobal.isInitCardPileYeye) {
            lib.card.list = [...lib.card.list, ...lib.card.list];
            yeyeGlobal.isInitCardPileYeye = true;
        } else {
            lib.card.list.randomSort();
        }
        return lib.card.list;
    };
    game.yyclearArena = function () {
        game.clearConnect()
        if (ui?.auto?.classList && !ui.auto.classList.contains("hidden")) {
            ui.auto.classList.remove("hidden");
        }
        if (typeof lib.hook === 'object' && lib.hook !== null) {
            Object.getOwnPropertyNames(lib.hook).forEach(key => {
                if (key !== 'globalskill') {
                    delete lib.hook[key];
                } else {
                    if (typeof lib.hook.globalskill === 'object') {
                        Object.keys(lib.hook.globalskill).forEach(subKey => {
                            if (lib.hook.globalskill[subKey]?.node) {
                                delete lib.hook.globalskill[subKey].node;
                            }
                        });
                    }
                }
            });
        }
        if (_status) {
            _status.renku = [];
            _status.firstAct = null;
            _status.gameStart = undefined;
            _status.modeNode = null;
            _status.roundSkipped = false;
            _status.isRoundFilter = null;
            _status.lastPhasedPlayer = null;
            _status.seatNumSettled = false;
        }
        if (_status?.renku) _status.renku = [];
        [
            ui.control,
            ui.special,
            ui.ordering,
            ui.arenalog,
            ui.historybar,
            ui.cardPile,
            ui.discardPile,
            ui.sidebar,
            ui.sidebar3
        ].forEach(container => {
            if (container) container.innerHTML = '';
        });
        [
            ui.playerids, ui.mebg, ui.me, ui.handcards1Container, ui.handcards2Container,
            window.decadeUI ? ui.equipSolts : undefined
        ].filter(element => element && element.parentNode).forEach(element => {
            try {
                element.parentNode.removeChild(element);
            } catch (e) {
                console.warn('移除元素失败:', element, e);
            }
        });

        if (Array.isArray(ui.thrown)) {
            ui.thrown.forEach(item => {
                if (item && item.parentNode) {
                    try {
                        item.parentNode.removeChild(item);
                    } catch (e) {
                        console.warn('移除thrown元素失败:', item, e);
                    }
                }
            });
            ui.thrown.length = 0;
        }
        document.querySelectorAll('.skill-dialog').forEach(el => {
            if (el && el.parentNode) {
                try {
                    el.parentNode.removeChild(el);
                } catch (e) {
                    console.warn('移除技能弹窗失败:', el, e);
                }
            }
        });
        if (lib.skill?._changeJudges) {
            const skillControl = document.querySelector(".skill-control");
            const judgesNode = game.me?.node?.judges;
            if (skillControl && judgesNode) {
                if (skillControl.contains(judgesNode)) {
                    try {
                        skillControl.removeChild(judgesNode);
                    } catch (e) {
                        console.warn('移除判定区节点失败:', judgesNode, e);
                    }
                }
            }
        }
        if (typeof ui.clear === 'function') {
            try {
                ui.clear();
            } catch (e) {
                console.warn('执行ui.clear失败:', e);
            }
        }
        document.querySelectorAll(".SLBuffDesc").forEach(ele => {
            if (ele && ele.parentNode) {
                try {
                    ele.parentNode.removeChild(ele);
                } catch (e) {
                    console.warn('移除SLBuffDesc失败:', ele, e);
                }
            }
        });
        const skillControl = document.querySelector(".skill-control");
        if (skillControl) {
            skillControl.style.display = 'none';
        }

        const alivePlayers = Array.isArray(game.players) ? game.players : [];
        const deadPlayers = Array.isArray(game.dead) ? game.dead : [];
        const allPlayers = [...alivePlayers, ...deadPlayers].filter(player => player);
        allPlayers.forEach(player => {
            if (player.hasOwnProperty('stopDynamic')) {
                player.stopDynamic();
            }
            if (player?.node) {
                if (player.node.parentNode) {
                    try {
                        player.node.parentNode.removeChild(player.node);
                    } catch (e) {
                        console.warn('移除玩家节点失败:', player, e);
                    }
                }
                delete player.node;
            }
            if (typeof game.removePlayerOL === 'function') {
                game.yeyeSafeRemovePlayer(player);
            }
        });
        if (Array.isArray(game.players)) game.players.length = 0;
        if (Array.isArray(game.dead)) game.dead.length = 0;
        game.me = null;
        game.zhu = null;
        if (CacheContext && typeof CacheContext.removeCacheContext === 'function') {
            try {
                CacheContext.removeCacheContext();
            } catch (e) {
                console.warn('清理缓存失败:', e);
            }
        }

    };
    //安全移除角色：本体 removePlayerOL 在“场上只剩玩家自己”时会 swapPlayer(undefined) 报错，
    //这里统一捕获，避免打完一关后弹出报错。
    game.yeyeRemovePlayerFallback = function (player) {
        if (!player) return;
        try {
            //注意：不要 delete player.node，否则十周年UI等扩展的MutationObserver会读不到node而报错
            if (player.node && player.node.parentNode) {
                player.node.parentNode.removeChild(player.node);
            }
            game.players.remove(player);
            game.dead.remove(player);
            if (game.me == player) game.me = game.players[0] || null;
        } catch (e) {
            console.warn('兜底清理角色失败:', e);
        }
    };
    game.yeyeSafeRemovePlayer = function (player) {
        if (!player) return;
        try {
            const result = game.removePlayerOL(player, { animate: false });
            if (result && typeof result.catch === 'function') {
                result.catch(e => {
                    console.warn('移除角色失败（已忽略）:', e);
                    game.yeyeRemovePlayerFallback(player);
                });
            }
        } catch (e) {
            console.warn('移除角色失败（已忽略）:', e);
            game.yeyeRemovePlayerFallback(player);
        }
    };
    //安全调用对局清理，避免异步异常直接弹报错
    game.yeyeRunState = function (type, mode) {
        try {
            const result = game.yyState(type, mode);
            if (result && typeof result.catch === 'function') {
                result.catch(e => console.warn('对局清理出错（已忽略）:', e));
            }
        } catch (e) {
            console.warn('对局清理出错（已忽略）:', e);
        }
    };
    //只有玩家击败本关，本关出现的敌人才从敌人将池里消耗
    game.yeyeConsumeEnemyPool = function () {
        try {
            //BOSS 由当前将池临时化身而成，不消耗将池；身旁的随从正常消耗
            const bossName = _status.yeyeGame && _status.yeyeGame.bossName;
            let used = (_status.yeyeGame && _status.yeyeGame.enemy) || [];
            if (bossName) used = used.filter(name => name && name !== bossName);
            const pool = lib.config.wujinYongyeData && lib.config.wujinYongyeData.enemyPool;
            if (!Array.isArray(pool) || !Array.isArray(used)) return;
            for (const name of used) {
                if (name) pool.remove(name);
            }
        } catch (e) {
            console.warn('消耗敌人将池失败:', e);
        }
    };
    //清理本关新增的全局技能，避免残留到后面的关卡
    //（例如技能里调用 game.addGlobalSkill('xinxliaopan_limit')）
    //原理：以开局时的 lib.skill.global 为基线，关卡结束时移除本关新增的部分。
    game.yeyeClearGlobalSkills = function () {
        try {
            const base = _status.yeyeGlobalSkillBase;
            const globals = lib.skill && lib.skill.global;
            if (!Array.isArray(base) || !Array.isArray(globals)) return;
            const extras = [];
            for (const skill of globals) {
                if (!base.includes(skill)) extras.push(skill);
            }
            for (const skill of extras) {
                try {
                    game.removeGlobalSkill(skill);
                } catch (e) {
                    console.warn('移除全局技能失败:', skill, e);
                }
            }
        } catch (e) {
            console.warn('清理全局技能失败:', e);
        }
    };
    //把本体结算界面上的“重新开始”改成指定文案
    game.yeyeRenameRestart = function (label) {
        try {
            if (ui.restart && ui.restart.firstChild) {
                ui.restart.firstChild.innerHTML = label || '继续前进';
            }
        } catch (e) { }
    };

    /**
     * 功勋收支统一入口：顺手记一笔来源，供商店界面的「记录」查看。
     * amount 为正表示获得（记入记录），为负表示消耗（不记入获取记录）。
     */
    game.yeyeCoin = function (amount, source, data) {
        amount = Number(amount) || 0;
        if (!amount) return 0;
        data = data || lib.config.wujinYongyeData;
        if (!data) return 0;
        data.coin = (data.coin || 0) + amount;
        if (amount > 0) {
            if (!Array.isArray(data.coinLog)) data.coinLog = [];
            data.coinLog.push({
                stage: data.barrier || 1,
                source: source || '其他',
                amount: amount,
            });
        }
        return amount;
    };

    /** 本局功勋获取记录：按关卡分组，新的一关排在最前 */
    game.yeyeOpenCoinLog = function (host, data) {
        const api = yeyeOpenPanel(host, '功勋获取记录', 'yeye_CoinLogBody');
        const log = Array.isArray(data.coinLog) ? data.coinLog.slice(0) : [];
        const total = log.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
        ui.create.div(
            '.yeye_EventDesc',
            `本局共获得 ${total} 功勋`,//当前持有 ${data.coin || 0} 功勋　· 进行到第 ${data.barrier || 1} 关
            api.body
        );
        if (!log.length) {
            ui.create.div('.yeye_PanelEmpty', '本局还没有获得功勋。<br>通过战斗、精英、BOSS 和奇遇获得功勋。', api.body);
            return api;
        }
        const stages = [];
        log.forEach(item => {
            const stage = item.stage || 1;
            let group = stages.find(one => one.stage === stage);
            if (!group) {
                group = { stage: stage, items: [], sum: 0 };
                stages.push(group);
            }
            group.items.push(item);
            group.sum += Number(item.amount) || 0;
        });
        stages.sort((a, b) => b.stage - a.stage);
        stages.forEach(group => {
            ui.create.div('.yeye_EventSubTitle', `第 ${group.stage} 关　·　+${group.sum}`, api.body);
            group.items.forEach(item => {
                const row = ui.create.div('.yeye_LogRow');
                row.innerHTML = `<span class="yeye_LogText">${item.source}</span><span class="yeye_LogAmount">+${item.amount}</span>`;
                api.body.appendChild(row);
            });
        });
        return api;
    };
    /* ===================== 肉鸽化：节点选择与结算 ===================== */

    /** 弹出本关的三个节点候选；返回选中的节点 key，玩家关闭则返回 null */
    game.yeyeChooseNode = function (host, data) {
        return new Promise(resolve => {
            if (!Array.isArray(data.nodeCandidates) || !data.nodeCandidates.length) {
                data.nodeCandidates = yeyeNodeCandidates(data.barrier || 1);
                game.saveConfig('wujinYongyeData', data);
            }
            let settled = false;
            const api = yeyeOpenPanel(host, `第 ${data.barrier} 关 · 选择节点`, 'yeye_NodeBody');
            const finish = node => {
                if (settled) return;
                settled = true;
                api.close();
                resolve(node);
            };
            const closeBtn = api.panel.querySelector('.yeye_PanelClose');
            if (closeBtn) closeBtn.addEventListener('click', function () {
                finish(null);
            });
            ui.create.div('.yeye_EventDesc', '选择本关要走的路线。不同节点的收益与风险不同。', api.body);
            data.nodeCandidates.forEach(key => {
                const node = YEYE_NODES[key];
                if (!node) return;
                yeyePanelCard(api.body, {
                    title: `【${node.name}】`,
                    info: yeyeNodeInfo(key, data.barrier || 1),
                    accent: node.accent,
                    extraClass: 'yeye_NodeCard',
                    onClick() {
                        game.txhj_playAudioCall_yy('WinButton', null, true);
                        finish(key);
                    },
                });
            });
        });
    };

    /** 按节点类型组装本关敌人，并写回 _status.yeyeGame */
    game.yeyeBuildEnemyList = function (nodeKey, data) {
        const stage = data.barrier || 1;
        const isBoss = nodeKey === 'boss';
        //BOSS 关：1 个永夜化身 + 若干随从（随从数与强化数值一样随关卡放大）
        let need = isBoss ? 1 + yeyeScaled('bossSideEnemies', stage) : yeyeEnemyCount(stage);
        if (nodeKey === 'elite') need = Math.max(1, need - 1);
        const delta = data.pendingEnemyDelta || 0;
        if (delta) {
            need = Math.max(1, need + delta);
            delete data.pendingEnemyDelta;
        }
        const all = Array.isArray(data.enemyPoolAll) ? data.enemyPoolAll : [];
        if (!Array.isArray(data.enemyPool)) data.enemyPool = [];
        //将池剩余不够本关用时，用本局完整名单重洗补满（同一关内不会重复出将）
        if (data.enemyPool.length < need && all.length) {
            data.enemyPool = all.slice(0);
        }
        const pool = data.enemyPool;
        if (!pool.length) return [];
        const enemies = pool.randomGets(Math.min(need, pool.length));
        //夜之刻印：精英每个敌人 1 个，BOSS 自带多个（只挂在 BOSS 身上），奇遇可以追加
        const marks = [];
        const bossMarks = [];
        if (isBoss) {
            //尽量给 BOSS 抽不重复的刻印（数量随关卡放大）
            const bossMarkCount = yeyeScaled('markPerBoss', stage);
            YEYE_MARKS.randomGets(Math.min(bossMarkCount, YEYE_MARKS.length))
                .forEach(mark => bossMarks.push(mark.key));
            while (bossMarks.length < bossMarkCount) {
                bossMarks.push(YEYE_MARKS.randomGet().key);
            }
        } else if (nodeKey === 'elite') {
            const eliteMarkCount = yeyeScaled('markPerElite', stage);
            for (let i = 0; i < enemies.length * eliteMarkCount; i++) marks.push(YEYE_MARKS.randomGet().key);
        }
        const extraMarks = data.pendingMarkBonus || 0;
        if (extraMarks) {
            for (let i = 0; i < extraMarks * Math.max(1, enemies.length); i++) marks.push(YEYE_MARKS.randomGet().key);
            delete data.pendingMarkBonus;
        }
        _status.yeyeGame.enemy = enemies;
        _status.yeyeGame.number = enemies.length;
        _status.yeyeGame.enemyBuffs = marks;
        //BOSS 用名字标记，关卡内敌人不会重名，结算时据此区分化身与随从
        _status.yeyeGame.bossName = isBoss ? enemies[0] : null;
        _status.yeyeGame.bossMarks = bossMarks;
        _status.yeyeGame.buffs = data.buff;
        //只把前 skillLimit 个技能带进对局，超出的在面板里标红、本关不生效
        _status.yeyeGame.skills = yeyeActiveSkills(data.skill);
        _status.yeyeGame.node = nodeKey;
        game.saveConfig('wujinYongyeData', data);
        return enemies;
    };

    /** 进入本关节点：战斗类进入对局，奇遇/休整直接结算并推进关卡 */
    game.yeyeStartNode = async function (nodeKey, home, homeBody) {
        const data = lib.config.wujinYongyeData;
        const node = YEYE_NODES[nodeKey];
        if (!node) return false;
        data.node = nodeKey;
        game.saveConfig('wujinYongyeData', data);
        if (nodeKey === 'event') {
            //同一关固定同一个奇遇：抽到后存档，关闭再进不会刷新（换关时才清空）
            let event = data.pendingEvent ? yeyeGetEvent(data.pendingEvent) : null;
            if (!event) {
                event = yeyePickEvent(data);
                data.pendingEvent = event.id;
                game.saveConfig('wujinYongyeData', data);
            }
            const done = await yeyeRunEvent(event, homeBody, data);
            if (!done) {
                //玩家放弃奇遇：退回商店，可以重新选节点
                data.node = null;
                game.saveConfig('wujinYongyeData', data);
                return false;
            }
            data.pendingEvent = null;
            game.yeyeAdvanceStage(YEYE_RULES.eventCoin, '奇遇结算');
            return true;
        }
        if (nodeKey === 'rest') {
            const missing = Math.max(0, (data.maxHp || 0) - (data.hp || 0));
            let gain;
            if (missing > 0) {
                const heal = Math.ceil(missing * YEYE_RULES.restHealRatio);
                data.hp = Math.min(data.maxHp, (data.hp || 0) + heal);
                gain = YEYE_RULES.restCoin;
                game.messagePopup_yy(`回复 ${heal} 点体力，获得 ${YEYE_RULES.restCoin} 功勋`);
            } else {
                gain = YEYE_RULES.restFullCoin;
                game.messagePopup_yy(`体力已满，改为获得 ${YEYE_RULES.restFullCoin} 功勋`);
            }
            game.yeyeAdvanceStage(gain, '休整');
            return true;
        }
        // ===== 【新增节点】锻造 / 祭坛 / 挑战 =====
        // 想在测试时临时关掉：把 yeyeConst.js 的 YEYE_RULES.enableNewNodes 改成 false。
        // 想彻底删除本功能：删掉下面这一整段即可（三选一池也要同步改 yeyeConst.js）。
        if (nodeKey === 'forge' || nodeKey === 'altar') {
            const run = nodeKey === 'forge' ? yeyeRunForge : yeyeRunAltar;
            const done = await run(homeBody, data);
            if (!done) {
                //玩家放弃：退回商店，可以重新选节点
                data.node = null;
                game.saveConfig('wujinYongyeData', data);
                return false;
            }
            game.yeyeAdvanceStage(YEYE_RULES.eventCoin, nodeKey === 'forge' ? '锻造' : '祭坛');
            return true;
        }
        if (nodeKey === 'challenge') {
            const mods = await yeyeRunChallenge(homeBody, data);
            if (!mods) {
                //玩家放弃挑战：退回商店，可以重新选节点
                data.node = null;
                game.saveConfig('wujinYongyeData', data);
                return false;
            }
            //加码立即写入既有的临时字段，由 yeyeBuildEnemyList 消费
            //幅度数值见 yeyeConst.js 的 YEYE_RULES.challengeEnemyDelta / challengeMarkBonus
            if (mods.enemy) data.pendingEnemyDelta = (data.pendingEnemyDelta || 0) + (YEYE_RULES.challengeEnemyDelta || 0);
            if (mods.mark) data.pendingMarkBonus = (data.pendingMarkBonus || 0) + (YEYE_RULES.challengeMarkBonus || 0);
            //胜利奖励记在本场战斗状态上（结算时读取）
            if (_status.yeyeGame) {
                _status.yeyeGame.challenge = {
                    bonus:
                        (mods.enemy ? YEYE_RULES.challengeCoinBonus : 0) +
                        (mods.mark ? YEYE_RULES.challengeCoinBonus : 0),
                };
            }
            game.saveConfig('wujinYongyeData', data);
        }
        //战斗 / 精英 / BOSS
        const enemies = game.yeyeBuildEnemyList(nodeKey, data);
        if (!enemies.length) {
            game.messagePopup_yy('敌人将池为空，无法开战');
            // 【新增节点】挑战加码已经写进临时字段，这里回滚，避免泄漏到下一场战斗
            if (nodeKey === 'challenge') {
                delete data.pendingEnemyDelta;
                delete data.pendingMarkBonus;
                if (_status.yeyeGame) delete _status.yeyeGame.challenge;
            }
            data.node = null;
            game.saveConfig('wujinYongyeData', data);
            return false;
        }
        if (home) home.delete();
        if (homeBody) game.yyUIupdata(homeBody, false);
        _status.gameStart = undefined;
        //对局主循环已在 mode.start 里创建，这里只需 resume 继续下一关
        game.resume();
        return true;
    };

    /**
     * 非战斗节点的关卡推进：加功勋、关卡 +1、刷新商店或进入通关结算。
     * coin/label 由节点决定——只有战斗类节点才给通关基础功勋。
     */
    game.yeyeAdvanceStage = function (coin, label) {
        const data = lib.config.wujinYongyeData;
        if (coin) game.yeyeCoin(coin, label || '关卡结算', data);
        if (data.nextStageBonus > 0) {
            game.yeyeCoin(YEYE_RULES.nextStageBonusCoin, '永夜之赐', data);
            data.nextStageBonus -= 1;
        }
        data.barrier = (data.barrier || 1) + 1;
        data.shop.buff = [];
        data.shop.skill = [];
        data.node = null;
        data.pendingEvent = null;
        data.nodeCandidates = [];
        yeyeResetStageShop(data); // 【新增】进入下一关，商店限购计数归零
        data.hp = Math.max(1, Math.min(data.hp || 1, data.maxHp || 1));
        game.saveConfig('wujinYongyeData', data);
        return game.yeyeAfterStage();
    };

    /** 关卡推进后的界面切换 */
    game.yeyeAfterStage = function () {
        const data = lib.config.wujinYongyeData;
        const oldBody = document.querySelector('.yeye_HomeBody');
        if (oldBody) game.yyUIupdata(oldBody, false);
        document.querySelectorAll('.yeye_Home').forEach(el => el.remove());
        if ((data.barrier || 1) > YEYE_RULES.totalStages) {
            return game.yeyeVictory();
        }
        game.wujinYongyeData();
        return true;
    };

    /** 战斗胜利的统一结算：功勋、跨关体力、将池消耗、关卡推进 */
    game.yeyeSettleStage = function () {
        const data = lib.config.wujinYongyeData;
        const node = (_status.yeyeGame && _status.yeyeGame.node) || 'battle';
        //只有击败本关，本关出现的敌人才从将池消耗（BOSS 不消耗）
        game.yeyeConsumeEnemyPool();
        const winBonus = data.pendingWinBonus || 0;
        if (winBonus) delete data.pendingWinBonus;
        //逐项记账，方便在「记录」里看清每笔功勋的来源
        //敌人越多功勋越多：第一个不算，之后每多 1 个 +coinPerExtraEnemy
        const enemyCount = ((_status.yeyeGame && _status.yeyeGame.enemy) || []).length;
        const enemyBonus = yeyeEnemyBonus(enemyCount);
        if (node === 'boss') {
            game.yeyeCoin(YEYE_RULES.bossCoin, 'BOSS 胜利', data);
        } else if (node === 'elite') {
            game.yeyeCoin(YEYE_RULES.stageCoin, '精英胜利', data);
            game.yeyeCoin(YEYE_RULES.eliteCoin, '精英额外奖励', data);
        } else if (node === 'challenge') {
            // 【新增节点】挑战：基础战斗奖励 + 已选加码的额外功勋
            game.yeyeCoin(YEYE_RULES.stageCoin, '挑战胜利', data);
            const challenge = _status.yeyeGame && _status.yeyeGame.challenge;
            if (challenge && challenge.bonus) game.yeyeCoin(challenge.bonus, '挑战加码奖励', data);
        } else {
            game.yeyeCoin(YEYE_RULES.stageCoin, '战斗胜利', data);
        }
        if (enemyBonus) game.yeyeCoin(enemyBonus, `敌人数量奖励（${enemyCount} 名）`, data);
        if (winBonus) game.yeyeCoin(winBonus, '夜之低语', data);
        //体力跨关保留：写回战斗中剩余的体力
        if (game.me && !game.me.isDead()) {
            const cap = data.maxHp || game.me.hp;
            data.hp = Math.max(1, Math.min(game.me.hp, cap));
        }
        data.barrier = (data.barrier || 1) + 1;
        data.shop.buff = [];
        data.shop.skill = [];
        data.node = null;
        data.pendingEvent = null;
        data.nodeCandidates = [];
        yeyeResetStageShop(data); // 【新增】进入下一关，商店限购计数归零
        if (data.nextStageBonus > 0) {
            game.yeyeCoin(YEYE_RULES.nextStageBonusCoin, '永夜之赐', data);
            data.nextStageBonus -= 1;
        }
        //BOSS 奖励：必给 1 个随机强化，并给 1 只侍灵（已有则升阶）
        if (node === 'boss') {
            const buff = yeyeRandomBuff(1);
            if (buff) yeyeAddBuff(data, buff);
            //BOSS：还没有侍灵时给 1 只，否则给已有侍灵升阶
            const servantResult = yeyeGainServant(data, yeyePickServantId(data, true));
            const parts = [];
            if (buff) parts.push(`强化【${buff.name}】`);
            if (servantResult) parts.push(yeyeServantResultText(servantResult));
            const str = `BOSS 奖励：${parts.join('　')}`;
            game.log(str);
            if (typeof game.messagePopup_yy === 'function') game.messagePopup_yy(str);
        }
        if (_status.yeyeGame) _status.yeyeGame.enemy = [];
        game.saveConfig('wujinYongyeData', data);
        return data;
    };

    //本关胜利：结算数据后走本体的“战斗胜利”界面
    //（界面上的“重新开始”会被改成“继续前进”，重载后回到下一关的商店）
    game.yeyeWinStage = function () {
        try {
            game.yeyeSettleStage();
            delete _status.modeNode;
            _status.gameStart = false;
            //本体的胜利结算（包含完整清理：角色、卡牌、技能等）
            game.over(true);
            //把“重新开始”改为“继续前进”，点击后重载并进入下一关
            game.yeyeRenameRestart('继续前进');
        } catch (e) {
            console.warn('关卡胜利结算出错:', e);
        }
    };
    //本关失败（还有复活次数）：走本体的“战斗失败”界面，
    //关卡数不增加，重载后回到本关商店重新挑战
    game.yeyeLoseStage = function () {
        try {
            delete _status.modeNode;
            game.saveConfig('wujinYongyeData', lib.config.wujinYongyeData);
            _status.gameStart = false;
            game.over(false);
            //失败结算的“重新开始”同样改为“继续前进”
            game.yeyeRenameRestart('继续前进');
        } catch (e) {
            console.warn('关卡失败结算出错:', e);
        }
    };
    game.yyState1 = async function (type, mode) {//对局清除
        if (_status.modeNode && mode == 'wujin_yongye') {
            _status.modeNode.score.round += game.roundNumber;
            _status.modeNode.score.fight += 1;
            lib.config.wujinYongyeData = _status.modeNode;
            delete _status.modeNode;
        }
        game.yyclearArena();
        _status.gameStart = false;
        game.resume();
        if (mode == 'wujin_yongye') {
            if (type === true) {
                game.yeyeSettleStage();
            }
            game.saveConfig('wujinYongyeData', lib.config.wujinYongyeData);
            game.delay();
            game.wujinYongyeData();
        }
    };
    game.yyState = async function (type, mode) {//对局清除
        if (_status.modeNode && mode == 'wujin_yongye') {
            _status.modeNode.score.round += game.roundNumber;
            _status.modeNode.score.fight += 1;
            lib.config.wujinYongyeData = _status.modeNode;
            delete _status.modeNode;
        }
        _status.gameStart = false;
        game.resume();
        if (ui.thrown && ui.thrown.length > 0) {
            for (var i = 0; i < ui.thrown.length; i++) {
                ui.thrown[i].remove();
            }
        }
        //先移除本关所有角色：本体会在这步把角色的牌置入弃牌堆，必须等它做完再清界面，
        //否则牌会被重新放进弃牌堆、残留在选关界面上。
        let players = game.players.concat(game.dead);
        for (const player of players) {
            if (!player) continue;
            try {
                player.clearSkills();
            } catch (e) { }
            try {
                await game.removePlayerOL(player, { animate: false });
            } catch (e) {
                console.warn('移除角色失败（已忽略）:', e);
                game.yeyeRemovePlayerFallback(player);
            }
        }
        //再统一清理界面残留
        if (ui.auto.classList.contains("hidden")) ui.auto.classList.remove("hidden")
        ui.arenalog.innerHTML = '';/*清除历史记录*/
        ui.historybar.innerHTML = '';/*清除出牌记录*/
        if (ui.cardPile) ui.cardPile.innerHTML = '';
        if (ui.discardPile) ui.discardPile.innerHTML = '';
        ui.sidebar.innerHTML = '';/*清除暂停记录*/
        ui.sidebar3.innerHTML = '';/*清除暂停记录*/
        if (_status?.renku) _status.renku = [];
        //不知道会不会出其他bug
        if (lib.skill._changeJudges) {
            const skillControl = document.querySelector(".skill-control");
            if (skillControl && game.me && game.me.node && game.me.node.judges) {
                try {
                    skillControl.removeChild(game.me.node.judges);
                } catch (e) { }
            }
        };
        if (typeof ui.clear === 'function') {
            try {
                ui.clear();
            } catch (e) { }
        }
        if (ui.mebg) ui.mebg.remove();
        if (ui.me) ui.me.remove();
        if (ui.handcards1Container) ui.handcards1Container.remove();
        if (ui.handcards2Container) ui.handcards2Container.remove();
        document.querySelectorAll('.dialog').forEach(el => {
            if (!el.classList.contains('menu')) {
                el.remove();
            }
        });
        if (window.decadeUI) {
            if (ui.equipSolts) ui.equipSolts.remove();
            const handtip = document.querySelector(".hand-tip");
            if (handtip) {
                handtip.dataset.text = '';
                handtip.style.display = 'none';
            }
            ['.skill-control'].forEach(el => {
                const element = document.querySelector(el);
                if (element) {
                    element.style.display = 'none';
                }
            });
            const element = document.getElementById('dui-controls');
            if (element) {
                element.style.display = 'none';
            }
        }
        //重置对局状态，保证下一关“游戏开始/每轮开始”等时机正常触发
        _status.roundStart = null;
        _status.lastPhasedPlayer = null;
        _status.firstAct = null;
        _status.roundSkipped = false;
        _status.isRoundFilter = null;
        _status.seatNumSettled = false;
        //清理本关新增的全局技能，避免残留到后面的关卡
        game.yeyeClearGlobalSkills();
        _status.globalHistory = [{
            cardMove: [],
            custom: [],
            useCard: [],
            changeHp: [],
            everything: [],
        }];
        if (CacheContext && typeof CacheContext.removeCacheContext === 'function') {
            try {
                CacheContext.removeCacheContext();
            } catch (e) {
                console.warn('清理缓存失败:', e);
            }
        }
        game.delay();
        game.pause();
        if (mode == 'wujin_yongye') {
            if (type === true) {
                game.yeyeSettleStage();
            }
            game.saveConfig('wujinYongyeData', lib.config.wujinYongyeData);
            game.wujinYongyeData();
        }
    };
    game.messagePopup_yy = function (info) {//冒泡
        var home = document.getElementById('yeye_messagePopupHome');
        if (!home) {
            home = ui.create.div('#yeye_messagePopupHome');
            document.body.appendChild(home);
        }
        game.yyUIupdata(home, true);
        var div = ui.create.div('.yeye_messagePopupDiv', home);
        var bg = ui.create.div('.yeye_messagePopupDivBg', div);
        var text = ui.create.div('.yeye_messagePopupDivText', info + '', div);
        setTimeout(function () {
            home.removeChild(div);
        }, 1600);
    };
    game.purchasePrompt_yy = function (value, info, view, onDown) {//确认ui
        if (lib.config.mode_config.wujin_yongye?.inquired) {
            if (typeof onDown === 'function') {
                onDown(true);
            }
            return;
        }
        // 创建弹窗的主容器
        const popup = ui.create.div('.yeye_purchasePromptPopup', view);
        // 创建弹窗的内容容器
        const body = ui.create.div('.yeye_purchasePromptBody', popup);

        // 阻止事件冒泡
        body.addEventListener('click', function (event) {
            event.stopPropagation();
            event.preventDefault();
        });

        /**
         * 创建并返回一个按钮
         * 
         * 此函数用于创建确认和取消按钮，并为它们添加点击事件监听器
         * 
         * @param {string} className - 按钮的CSS类名
         * @param {string} text - 按钮上显示的文本
         * @param {boolean|Function} callback - 点击按钮时的回调，通常是一个函数或表示操作结果的布尔值
         * @returns {HTMLElement} - 返回创建的按钮元素
         */
        const createButton = (className, text, callback) => {
            const button = ui.create.div(className, text);
            button.addEventListener('click', function (event) {
                if (typeof onDown === 'function') {
                    onDown(callback);
                }
                if (view.contains(popup)) {
                    view.removeChild(popup);
                }
                event.stopPropagation();
                event.preventDefault();
            });
            return button;
        };
        const comps = {
            title: ui.create.div('.yeye_purchasePromptTitle', value),
            okButton: createButton('.yeye_purchasePromptButton1', '确认', true),
            cancelButton: createButton('.yeye_purchasePromptButton2', '取消', false),
            text: ui.create.div('.yeye_purchasePromptText', info + ''),
        };
        // 将组件添加到弹窗内容容器中
        for (const key in comps) {
            body.appendChild(comps[key]);
        }
        if (lib.config.extension_永夜之境_yeyeTextSizeOn === true) {
            game.applyandroidSize_yy(body);
        }
        // 处理弹窗外部点击关闭
        popup.addEventListener('click', function (event) {
            if (event.target === popup) {
                if (view.contains(popup)) {
                    view.removeChild(popup);
                }
                event.stopPropagation();
                event.preventDefault();
            }
        });
        // 返回弹窗内容容器
        return body;
    };
    //本体风格的选将（不消耗玉璧）
    game.yeyeChooseCharacter = yeyeChooseCharacter;
    //选完武将后的「选择获得侍从」界面
    game.yeyeStartServantSelect = yeyeOpenServantSelect;
    //进入模式时选择敌人将池（与无尽模式按钮元素相匹配）
    game.yeyeChooseEnemyPool = yeyeChooseEnemyPool;
    //清理自由选将界面残留
    game.yeyeClearChooseUI = yeyeClearChooseUI;
    mode();
}

export default prepare;
