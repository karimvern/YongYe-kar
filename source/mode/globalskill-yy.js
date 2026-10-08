import { lib, game, ui, get, ai, _status } from "../../../../noname.js";
import { YEYE_RULES, YEYE_MARKS } from "./yeyeConst.js";

/**
 * 本体的 GameEvent 编译器（StepCompiler）会把「普通函数」形态的 content / filter
 * 反编译成源码后用 new Function 重新构造，只注入 _status / lib / game / ui / get / ai
 * 六个全局量（见 StepParser.topVars），本模块作用域里的变量在技能里是取不到的。
 * 所以技能要用到的工具全部挂到全局 game 上，技能里统一用 game.yeyeXxx 调用；
 * 注意：以 async function 写的内容不会被编译，但仍然统一走 game.* 以免踩坑。
 */
game.yeyeRules = YEYE_RULES;
game.yeyeMarks = YEYE_MARKS;
game.yeyeTurnKey = function () {
    return game.roundNumber + ':' + (_status.currentPhase ? _status.currentPhase.playerid : '');
};
game.yeyeStageKey = function () {
    const data = lib.config && lib.config.wujinYongyeData;
    return 'stage_' + ((data && data.barrier) || 0);
};
/** 读出战侍灵的阶数（1~3） */
game.yeyeServantLevelOf = function (id) {
    const data = lib.config && lib.config.wujinYongyeData;
    if (!data || !Array.isArray(data.servants)) return 1;
    const entry = data.servants.find(item => item.id === id);
    return entry ? (entry.level || 1) : 1;
};
/** 侍灵主动技：每关限一次 */
game.yeyeStageUsed = function (player, skill) {
    if (!player.yeyeStageUsed) player.yeyeStageUsed = {};
    return player.yeyeStageUsed[skill] === game.yeyeStageKey();
};
game.yeyeMarkStageUsed = function (player, skill) {
    if (!player.yeyeStageUsed) player.yeyeStageUsed = {};
    player.yeyeStageUsed[skill] = game.yeyeStageKey();
};
const globalSkill = {
    yeye_mark_exten: {
        mark: true,
        marktext: '刻印',
        //标记用图：取本扩展 image/mark 下的素材
        markimage: 'extension/永夜之境/image/mark/xinxbuli.png',
        charlotte: true,
        ruleSkill: true,
        mode: ["wujin_yongye"],
        intro: {
            name: "无尽强化",
            content(storage, player) {
                const countMap = {};
                let list = Array.isArray(player.exten) ? player.exten.toSorted((a, b) => a.length - b.length) : [];
                list.forEach(item => {
                    if (!countMap[item]) {
                        countMap[item] = 0;
                    }
                    countMap[item] += 1;
                });
                const result = [];
                Object.keys(countMap).forEach(item => {
                    switch (item) {
                        case '随机获得1个技能':
                            result.push(`随机获得${countMap[item]}个技能`);
                            break;
                        case '体力上限+1':
                            result.push(`体力上限+${countMap[item]}`);
                            break;
                        case '摸牌数+1':
                            result.push(`摸牌数+${countMap[item]}`);
                            break;
                        case '起始手牌额外获得2张临时牌':
                            result.push(`起始手牌额外获得${countMap[item] * 2}张临时牌`);
                            break;
                        default:
                            //夜之刻印：文本以刻印持有者（敌人）为主视角
                            {
                                const mark = game.yeyeMarks.find(one => one.name === item);
                                if (mark) result.push(`夜之刻印·${item}：${mark.info}`);
                            }
                            break;
                    }
                });
                return result.join('<br>');
            },
            markcount(storage, player) {
                return player.exten.length;
            },
        },
    },
    _yeye_skill_mod: {
        charlotte: true,
        ruleSkill: true,
        mode: ["wujin_yongye"],
        mod: {
            cardUsable(card, player, num) {
                if (player != game.me) return num;
                if (card.name == "sha") {
                    let count = lib.config.wujinYongyeData?.buff?.filter(i => i.name == '强攻')?.length || 0;
                    return num + count;
                }
            },
            globalFrom(from, to, distance) {
                if (from != game.me) return;
                let count = lib.config.wujinYongyeData?.buff?.filter(i => i.name == '迅捷')?.length || 0;
                return distance - count;
            },
            globalTo(from, to, distance) {
                if (to != game.me) return;
                let count = lib.config.wujinYongyeData?.buff?.filter(i => i.name == '避战')?.length || 0;
                return distance + count;
            },
            maxHandcard(player, num) {
                if (player != game.me) return num;
                let count = lib.config.wujinYongyeData?.buff?.filter(i => i.name == '凝神')?.length || 0;
                return num + count * 2;
            }
        },
    },
    _yeye_buff_draw: {
        trigger: {
            player: "phaseDrawBegin2",
        },
        forced: true,
        charlotte: true,
        ruleSkill: true,
        firstDo: true,
        mode: ["wujin_yongye"],
        filter(event, player) {
            if (event.numFixed) return false;
            if (player == game.me && lib.config.wujinYongyeData?.buff?.filter(i => i.name == '丰收').length > 0) return true;
            if (player != game.me && player.exten?.filter(i => i == '摸牌数+1').length > 0) return true;
            return false;
        },
        content() {
            let num;
            if (player == game.me) {
                num = lib.config.wujinYongyeData?.buff?.filter(i => i.name == '丰收')?.length;
            } else {
                num = player.exten.filter(i => i == '摸牌数+1')?.length;
            }
            if (num) trigger.num += num;
        },
    },
    _yeye_buff_damage: {
        trigger: {
            source: "damageBegin1",
        },
        forced: true,
        charlotte: true,
        ruleSkill: true,
        firstDo: true,
        mode: ["wujin_yongye"],
        filter(event, player) {
            if (player != game.me || !event.card || !event.notLink()) return false;
            if (get.name(event.card) == "sha" && lib.config.wujinYongyeData?.buff?.filter(i => i.name == '蛮力').length > 0) return true;
            if (get.type2(event.card) == 'trick' && lib.config.wujinYongyeData?.buff?.filter(i => i.name == '智识').length > 0) return true;
            return false;
        },
        content() {
            let num;
            if (get.name(trigger.card) == "sha") {
                num = lib.config.wujinYongyeData?.buff?.filter(i => i.name == '蛮力')?.length;
            } else {
                num = lib.config.wujinYongyeData?.buff?.filter(i => i.name == '智识')?.length;
            }
            if (num) {
                trigger.num += num;
                game.log(`${get.name(trigger.card) == "sha" ? '蛮力' : '智识'}效果触发，造成伤害+${num}点`);
            }
        },
    },
    _yeye_buff_recover: {
        trigger: {
            player: ["taoBegin", "gainMaxHpBegin"]
        },
        forced: true,
        charlotte: true,
        ruleSkill: true,
        firstDo: true,
        mode: ["wujin_yongye"],
        filter(event, player, name) {
            if (player != game.me) return false;
            if (name == "taoBegin" && lib.config.wujinYongyeData?.buff?.filter(i => i.name == '回复').length > 0) return true;
            if (name == "gainMaxHpBegin" && lib.config.wujinYongyeData?.buff?.filter(i => i.name == '延寿').length > 0) return true;
            return false;
        },
        content() {
            if (event.triggername == "taoBegin") {
                let num = lib.config.wujinYongyeData?.buff?.filter(i => i.name == '回复')?.length;
                if (num) {
                    trigger.baseDamage += num;
                    game.log(`回复效果触发，回复体力+${num}点`);
                }
            } else if (event.triggername == "gainMaxHpBegin") {
                let num = lib.config.wujinYongyeData?.buff?.filter(i => i.name == '延寿')?.length;
                if (num) {
                    trigger.num += num;
                    game.log(`延寿效果触发，获得体力上限+${num}点`);
                }
            }
        },
    },
    //===================== 夜之刻印（敌人词条） =====================
    yeye_mk_kuangbao: {
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { source: "damageBegin1" },
        filter(event, player) {
            return event.player && event.player != player;
        },
        content() {
            trigger.num += 1;
            game.log(player, "夜之刻印·狂暴");
        },
    },
    yeye_mk_tiebi: {
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { player: "damageBegin3" },
        filter(event, player) {
            return player._yeyeTiebiTurn !== game.yeyeTurnKey();
        },
        content() {
            player._yeyeTiebiTurn = game.yeyeTurnKey();
            trigger.num = Math.max(0, trigger.num - 1);
            game.log(player, "夜之刻印·铁壁");
        },
    },
    yeye_mk_wangyu: {
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { player: "dieBegin" },
        filter(event, player) {
            if (_status.gameStart === false) return false;
            if (!game.me || game.me.hp <= 1) return false;
            return game.players.some(current => current != game.me && current.identity === 'fan');
        },
        async content(event, trigger, player) {
            game.log(player, "夜之刻印·亡语");
            await game.me.loseHp(2);
        },
    },
    yeye_mk_leifa: {
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { player: "phaseBegin" },
        async content(event, trigger, player) {
            game.log(player, "夜之刻印·雷罚");
            player.line(game.me);
            await game.me.damage(1, 'thunder', player);
        },
    },
    yeye_mk_tanlan: {
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { player: "phaseEnd" },
        filter(event, player) {
            if (_status.gameStart === false) return false;
            return game.me && !game.me.isDead() && game.me.countCards('h') > 0;
        },
        async content(event, trigger, player) {
            game.log(player, "夜之刻印·贪婪");
            await game.me.chooseToDiscard('he', 2, true);
        },
    },
    yeye_mk_zhoufu: {
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { global: "useCardAfter" },
        filter(event, player) {
            return event.player && event.player == game.me && event.card && get.type(event.card) == 'basic';
        },
        async content(event, trigger, player) {
            game.log(player, "夜之刻印·咒缚");
            await player.draw();
        },
    },
    //===================== 夜之刻印·扩充 =====================
    yeye_mk_shixue: {
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { source: "damage" },
        filter(event, player) {
            return event.player && event.player != player;
        },
        async content(event, trigger, player) {
            game.log(player, "夜之刻印·嗜血");
            await player.gainMaxHp();
            await player.recover();
        },
    },
    yeye_mk_zhongjia: {
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { player: "damageBegin2" },
        filter(event, player) {
            return !!(event.card && get.name(event.card) == 'sha');
        },
        usable: 1,
        content() {
            trigger.num = Math.max(0, trigger.num - 1);
            game.log(player, "夜之刻印·重甲");
        },
    },
    yeye_mk_jijia: {
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { player: "damage" },
        usable: 1,
        filter(event, player) {
            return !!(event.source && event.source != player && !event.source.isDead());
        },
        async content(event, trigger, player) {
            game.log(player, "夜之刻印·棘甲");
            await trigger.source.damage(1, player);
        },
    },
    yeye_mk_shigu: {
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { player: "damage" },
        usable: 1,
        filter(event, player) {
            return event.source == game.me && game.me && !game.me.isDead() && game.me.hp > 1;
        },
        async content(event, trigger, player) {
            game.log(player, "夜之刻印·蚀骨");
            await game.me.loseHp();
        },
    },
    //===================== BOSS：永夜化身（阶段复生一次） =====================
    yeye_mk_bossRevive: {
        charlotte: true,
        forced: true,
        priority: -10,
        mode: ["wujin_yongye"],
        trigger: { player: "dieBefore" },
        filter(event, player) {
            return _status.gameStart !== false && !player._yeyeBossRevived;
        },
        async content(event, trigger, player) {
            player._yeyeBossRevived = true;
            trigger.cancel();
            const damage = trigger.getParent("damage");
            if (damage && damage.player == player && typeof damage.untrigger === 'function') {
                damage.untrigger(false, player);
            }
            if (lib.config.background_audio) {
                game.playAudio("effect", "recover");
            }
            game.broadcast(() => {
                if (lib.config.background_audio) {
                    game.playAudio("effect", "recover");
                }
            });
            game.broadcastAll(player2 => {
                if (lib.config.animation && !lib.config.low_performance) {
                    player2.$recover();
                }
            }, player);
            player.hp = player._yeyeReviveHp || game.yeyeRules.bossReviveHp;
            player.update();
            player.$fullscreenpop("永夜化身", "thunder");
            game.log(player, (player._yeyeReviveLabel || '永夜化身') + "重生");
            /* if (typeof game.txhj_playAudioCall_yy === 'function') {
                game.txhj_playAudioCall_yy('PopUp', null, true);
            } */
        },
    },
    //===================== 侍灵：长夜月 =====================
    yeye_sl_changyeyue_p: {
        audio: "fyrhmenglong",
        logAudio: index => "ext:永夜之境/audio/fyrhmenglong" + (typeof index === "number" ? index : get.rand(1, 6)) + ".mp3",
        charlotte: true,
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { player: "phaseEnd" },
        filter(event, player) {
            return player == game.me;
        },
        async content(event, trigger, player) {
            await player.recover();
            if (game.yeyeServantLevelOf('changyeyue') >= 3) await player.draw(2);
        },
    },
    yeye_sl_changyeyue_a: {
        audio: "fyrhmenglong",
        logAudio: index => "ext:永夜之境/audio/fyrhmenglong" + (typeof index === "number" ? index : get.rand(7, 10)) + ".mp3",
        charlotte: true,
        forced: true,
        mode: ["wujin_yongye"],
        trigger: {
            source: "damageBegin2",
        },
        filter(event, player) {
            return event.player.hp <= 2;
        },
        async content(event, trigger, player) {
            trigger.cancel();
            const target = trigger.player;
            target.die().source = player;
        },
    },
    //===================== 侍灵：叶瞬光 =====================
    yeye_sl_yeshunguang_p: {
        audio: "xinxlingxiao",
        charlotte: true,
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { source: "damageEnd" },
        filter(event, player) {
            return player == game.me;
        },
        usable: 1,
        async content(event, trigger, player) {
            await player.draw(game.yeyeServantLevelOf('yeshunguang') >= 3 ? 3 : 2);
        },
    },
    yeye_sl_yeshunguang_a: {
        audio: "xinxmingxin",
        mode: ["wujin_yongye"],
        enable: 'phaseUse',
        manualConfirm: true,
        limited: true,
        skillAnimation: false,
        filter(event, player) {
            return player == game.me;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.addSkill('yeye_sl_yeshunguang_e');
        },
    },
    yeye_sl_yeshunguang_e: {
        charlotte: true,
        mode: ["wujin_yongye"],
        mod: {
            globalFrom(from, to) {
                return -Infinity;
            },
            cardUsable(card, player, num) {
                if (player == game.me && card && get.name(card) == 'sha') return num + 1;
            },
        },
    },
    //===================== 侍灵：流萤 =====================
    yeye_sl_liuying_p: {
        audio: "xinxnewyingshi",
        charlotte: true,
        forced: true,
        mode: ["wujin_yongye"],
        trigger: {
            player: ["changeHpAfter"],
        },
        async content(event, trigger, player) {
            const source = trigger.source;
            let num = 1
            await player.draw(num);
            await player.chooseUseTarget({
                card: get.autoViewAs({ name: "sha", nature: "fire", isCard: true }),
                //nodistance: true,
                addCount: false,
                forced: true,
            });
        },
    },
    yeye_sl_liuying_a: {
        audio: "xinxnewxinzhui",
        mode: ["wujin_yongye"],
        enable: 'phaseUse',
        limited: true,
        skillAnimation: false,
        filter(event, player) {
            return player == game.me;
        },
        filterTarget: lib.filter.notMe,
        selectTarget: 1,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const target = event.targets[0];
            let num = 2;
            if (game.yeyeServantLevelOf('liuying') >= 3) {
                num = 3;
            }
            await target.damage(num, 'fire', player);
        },
    },
    //===================== 侍灵：阮梅 =====================
    yeye_sl_ruanmei_p: {
        audio: "xinxpeiyu",
        charlotte: true,
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { player: "phaseBegin" },
        filter(event, player) {
            return player == game.me;
        },
        async content(event, trigger, player) {
            if (game.yeyeServantLevelOf('ruanmei') >= 2) {
                await player.draw(2);
            } else {
                await player.draw();
            }
        },
    },
    yeye_sl_ruanmei_a: {
        audio: "xinxpeiyu",
        mode: ["wujin_yongye"],
        enable: 'phaseUse',
        limited: true,
        skillAnimation: false,
        manualConfirm: true,
        filter(event, player) {
            return player == game.me;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            await player.gainMaxHp();
            await player.recover();
            /* const next = game.createEvent("xinxpeiyu", false);
            next.player = player;
            next.setContent(lib.skill.xinxpeiyu.content);
            await next; */
        },
    },
    //===================== 侍灵：大黑塔 =====================
    yeye_sl_daheita_p: {
        audio: "xinxduyi",
        charlotte: true,
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { source: "damageBegin1" },
        filter(event, player) {
            return event.player && event.player != player && event.player.hp <= player.hp;
        },
        async content(event, trigger, player) {
            trigger.num += 1;
            if (!game.yeyeServantLevelOf('daheita') >= 3) {
                return;
            }
            const list = get.inpileVCardList((info) => {
                if (["equip", "delay"].includes(info[0])) {
                    return false;
                }
                const card = get.autoViewAs({ name: info[2], nature: info[3], isCard: true }, "unsure");
                if (get.is.damageCard(card)) {
                    return false;
                }
                return player.hasUseTarget(card);
            });
            const result = await player.chooseButton({
                createDialog: [`解构：视为使用一张非伤害牌`, [list, "vcard"]],
                filterButton(button) {
                    const card = get.autoViewAs({ name: button.link[2], nature: button.link[3], isCard: true }, "unsure");
                    return get.event().player.hasUseTarget(card);
                },
                ai(button) {
                    const card = get.autoViewAs({ name: button.link[2], nature: button.link[3], isCard: true }, "unsure");
                    return get.event().player.getUseValue(card);
                },
                forced: true
            }).forResult();
            if (result?.bool && result.links?.length) {
                const card = get.autoViewAs({ name: result.links[0][2], nature: result.links[0][3], isCard: true }, "unsure");
                if (player.hasUseTarget(card)) {
                    await player.chooseUseTarget(card, true);
                }
            }
        },
    },
    yeye_sl_daheita_a: {
        audio: "xinxjiegou",
        mode: ["wujin_yongye"],
        limited: true,
        skillAnimation: false,
        enable: 'phaseUse',
        manualConfirm: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.draw(2);
            player.addTempSkill('yeye_sl_daheita_e');
        },
    },
    yeye_sl_daheita_e: {
        charlotte: true,
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { source: "damageBegin1" },
        filter(event, player) {
            return event.player && event.player != player;
        },
        content() {
            trigger.num += 1;
        },
    },
    //===================== 侍灵：三月七 =====================
    yeye_sl_sanyueqi_p: {
        audio: "xinxxiexing",
        charlotte: true,
        forced: true,
        mode: ["wujin_yongye"],
        trigger: { player: "phaseEnd" },
        filter(event, player) {
            return get.discarded().filterInD("od").length;
        },
        async content(event, trigger, player) {
            let num = 1;
            if (game.yeyeServantLevelOf('sanyueqi') >= 3) num = 2;
            let cards = get.discarded().filterInD("od");
            if (cards.length > 0) {
                let useCount = 0;
                while (cards.some(card => player.hasUseTarget(card)) && useCount < num) {
                    const result = await player
                        .chooseButton([`留念：是否使用其中的一张牌？（还可使用${get.cnNumber(num - useCount)}张）`, cards])
                        .set("filterButton", button => {
                            return get.player().hasUseTarget(button.link);
                        })
                        .set("ai", button => {
                            return get.event().player.getUseValue(button.link);
                        }).forResult();
                    if (result?.bool) {
                        const card = result.links[0];
                        cards.remove(card);
                        player.$gain2(card, false);
                        await game.delayx();
                        await player.chooseUseTarget(true, card, false);
                        useCount++;
                    }
                }
            }
        },
    },
    yeye_sl_sanyueqi_a: {
        audio: "xinxmiqiong",
        mode: ["wujin_yongye"],
        enable: 'phaseUse',
        limited: true,
        skillAnimation: false,
        filter(event, player) {
            return player == game.me;
        },
        filterTarget: lib.filter.notMe,
        selectTarget: 1,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const target = event.targets[0];
            await target.turnOver();
        },
    },
    //===================== 侍灵：白厄 =====================
    //负世：每回合限一次，成为伤害牌目标时改为【火攻】
    yeye_sl_baie_p: {
        audio: "xinxfushi",
        charlotte: true,
        mode: ["wujin_yongye"],
        trigger: { global: "useCard" },
        filter(event, player) {
            if (event.player == player) return false;
            if (!event.targets || !event.targets.includes(player)) return false;
            return get.is.damageCard(event.card);
        },
        usable: 1,
        async content(event, trigger, player) {
            const source = trigger.player;
            const { card, cards: cards2 } = trigger;
            trigger.card.name = "huogong";
            if (game.yeyeServantLevelOf('baie') >= 3) {
                trigger.player = player;
                trigger.targets = [source];
                player.line(trigger.targets);
            } 
        },
    },
    //逐火：每关限一次，视为使用X张火【杀】
    yeye_sl_baie_a: {
        audio: "xinxzhuhuo",
        mode: ["wujin_yongye"],
        enable: 'phaseUse',
        group: ["yeye_sl_baie_c"],
        limited: true,
        skillAnimation: false,
        filter(event, player) {
            if (player != game.me) return false;
            let num = player.getAllHistory('damage').length;
            return num > 0;
        },
        manualConfirm: true,
        prompt(event, player) {
            const num = player.getAllHistory('damage').length;
            return `视为使用${num}张火【杀】`;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const num = player.getAllHistory('damage').length;
            for (let i = 0; i < num; i++) {
                const result = await player
                    .chooseUseTarget(
                        {
                            name: "sha",
                            nature: "fire",
                            nodistance: true,
                            addCount: false,
                            isCard: true,
                        },
                        `逐火：请选择火【杀】的目标（第${i + 1}/${num}张）`,
                        false
                    )
                    .forResult();

                if (!result?.bool) {
                    break;
                }
            }
        },
    },
}

export default globalSkill;
