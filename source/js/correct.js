import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
//import { lib, game, ui, get, ai, _status } from "noname";

//本体技能AI修正

export async function correctContent(config, pack) {
/* lib.skill.dcsbtaozhou = {
    inherit: "dcsbtaozhou",
} */
lib.skill.tiqi = {
    audio: 2,
    trigger: { global: ["phaseDrawEnd", "phaseDrawSkipped", "phaseDrawCancelled"] },
    filter(event, player) {
        if (player === event.player) {
            return false;
        }
        const num = event.player
            .getHistory("gain", evt => evt.getParent().name === "draw" && evt.getParent("phaseDraw") === event)
            .map(evt => evt.cards.length)
            .reduce((a, b) => a + b, 0);
        return num !== 2;
    },
    frequent: true,
    logTarget: "player",
    async content(event, trigger, player) {
        let num = trigger.player
            .getHistory("gain", evt => evt.getParent().name === "draw" && evt.getParent("phaseDraw") === trigger)
            .map(evt => evt.cards.length)
            .reduce((a, b) => a + b, 0);
        num = Math.abs(num - 2);
        event.num = num;
        await player.draw(num);
        if (!trigger.player.isIn()) {
            return;
        }
        const result = await player
            .chooseControl({
                controls: [` +${num} `, ` -${num} `, "cancel2"],
                prompt: `是否改变${get.translation(trigger.player)}本回合的手牌上限？`,
                ai: () => {
                    const sgn = get.sgn(get.attitude(player, trigger.player));
                    if (sgn === 0) {
                        return 2;
                    }
                    if (sgn === 1) {
                        return 0;
                    }
                    return 1;
                },
            })
            .forResult();
        if (result.index < 2) {
            const target = trigger.player;
            player.line(target);
            if (!target.storage.tiqi_effect) {
                target.storage.tiqi_effect = 0;
            }
            target.storage.tiqi_effect += num * get.sgn(0.5 - result.index);
            target.addTempSkill("tiqi_effect");
            target.markSkill("tiqi_effect");
        }
    },
    subSkill: {
        effect: {
            mod: {
                maxHandcard(player, num) {
                    if (typeof player.storage.tiqi_effect === "number") {
                        return num + player.storage.tiqi_effect;
                    }
                },
            },
            charlotte: true,
            onremove: true,
            mark: true,
            intro: {
                content: num => `手牌上限${num < 0 ? "" : "+"}${num}`,
            },
        },
    },
}
lib.skill.olzongluan = {
    audio: 2,
    trigger: { player: "phaseZhunbeiBegin" },
    filter(event, player) {
        return game.hasPlayer(t => t.hasUseTarget(new lib.element.VCard({ name: "sha", storage: { olzongluan: true }, isCard: true })));
    },
    async cost(event, trigger, player) {
        event.result = await player
            .chooseTarget(get.prompt2(event.skill), (card, player, target) => {
                return target.hasUseTarget(new lib.element.VCard({ name: "sha", storage: { olzongluan: true }, isCard: true }));
            })
            .set("ai", target => {
                const player = get.player();
                return get.attitude(player, target);
            })
            .forResult();
    },
    async content(event, trigger, player) {
        const target = event.targets[0];
        const next = target.chooseUseTarget(new lib.element.VCard({ name: "sha", storage: { olzongluan: true }, isCard: true }), true, false).set("selectTarget", [1, Infinity]);
        await next;
        const num = game.countPlayer2(current => current.hasHistory("damage", evt => evt.getParent(3) == next), true);
        if (num > 0) {
            await player.chooseToDiscard(num, true, "he", "allowChooseAll");
        }
    },
    init(player, skill) {
        game.addGlobalSkill(`${skill}_effect`);
    },
    subSkill: {
        effect: {
            mod: {
                playerEnabled(card, player, target) {
                    if (card.storage?.olzongluan && !player.inRange(target)) {
                        return false;
                    }
                },
            },
        },
    },
}
//防止梁燕让队友弃牌
    Object.assign(lib.skill.starliangyan, {
        ai: {
            order(item, player) {
                if (
                    !game.hasPlayer(current => current !== player && get.attitude(player, current) > 0) &&
                    game.hasPlayer(current => get.attitude(player, current) <= 0)
                ) {
                    return 10;
                }
                if (
                    game.hasPlayer(current => {
                        const del = player.countCards("h") - current.countCards("h"),
                            toFind = [2, 4].find(num => Math.abs(del) === num);
                        if (toFind === 4 && del < 0 && get.attitude(player, current) <= 0) {
                            return true;
                        }
                        return false;
                    })
                ) {
                    return 10;
                }
                return 1;
            },
            result: {
                target(player, target) {
                    return -1;
                },
            },
        },
    });

Object.assign(lib.skill.starchengfeng, {
        filter(event, player) {
            for (const name of ["shan", "wuxie"]) {
                if (name == "wuxie") {
                    let info = event.info_map;
                    if (info && player != info.target) {
                        continue;
                    }
                } else if (!event.respondTo) {
                    continue;
                }
                const color = name == "shan" ? "red" : "black";
                if (!event.filterCard(get.autoViewAs({ name: name }, "unsure"), player, event)) {
                    continue;
                }
                if (player.getExpansions("starchengfeng").some(card => get.color(card) == color)) {
                    return true;
                }
            }
            return false;
        },
        hiddenCard(player, name) {
            const color = name == "shan" ? "red" : "black";
            if (name == "wuxie") {
                let evt = _status.event;
                let wuxieEvt = evt.name === '_wuxie' ? evt : evt.getParent('_wuxie');
                if (wuxieEvt && wuxieEvt._info_map && wuxieEvt._info_map.target !== player) {
                    return false;
                }
            }
            if (player.getExpansions("starchengfeng").some(card => get.color(card) == color)) {
                return true;
            }
        },
    });



/* ============================================================================
 * 【过河拆桥】【顺手牵羊】AI 修正
 * 注意：卡牌信息保存在 lib.card[牌名] 中（lib.skill 只保存技能），
 * 所以覆写 lib.skill.guohe / lib.skill.shunshou 对卡牌 AI 无效，
 * 反而会让 get.info("guohe") 取到空对象，必须改为覆写 lib.card。
 *
 * 修改点：
 *   ① result.target：队友判定区有【乐不思蜀】/【兵粮寸断】时，大幅提高对该目标的评分
 *   ② basic.order  ：手里有拆/顺且队友判定区有上述牌时，提前使用
 *   ③ ai.button    ：结算时必定优先拆/顺判定区的那张【乐不思蜀】/【兵粮寸断】
 *   ④ 视为使用类虚拟牌 guohe_copy / shunshou_copy 的 result 同步覆写，
 *      使技能 AI 在“视为拆/顺”时也优先选择该队友
 * ==========================================================================*/

/** 判定区中“对持有者不利、需要帮队友拆掉”的延时锦囊 */
const _yeyeBadJudge = ["lebu", "bingliang"];

/** 取判定区牌的实际牌名（视为牌的名字保存在 viewAs 中） */
function _yeyeJudgeName(card) {
    const viewAs = card.viewAs;
    if (typeof viewAs === "string") {
        return viewAs;
    }
    if (viewAs && typeof viewAs === "object" && viewAs.name) {
        return viewAs.name;
    }
    return card.name;
}

/**
 * 目标判定区是否有需要帮忙拆掉的【乐不思蜀】/【兵粮寸断】
 * @param {Player} target 判定区的主人
 * @param {Player} viewer 评估者（拆/顺的使用者）
 * @param {(card: Card) => boolean} [filter] 额外的可选性判断（如能否被弃置/获得）
 */
function _yeyeHasBadJudge(target, viewer, filter) {
    return target.getCards("j").some(card => {
        const name = _yeyeJudgeName(card);
        if (!_yeyeBadJudge.includes(name)) {
            return false;
        }
        if (filter && !filter(card)) {
            return false;
        }
        // 用这张牌对目标的实际收益来判断，避免把“无效果的乐不思蜀”也当成负面牌
        return get.effect(target, { name: name }, target, viewer) < 0;
    });
}

/** 场上是否存在判定区有待拆除的乐/兵粮的队友 */
function _yeyeHasTeammateWithBadJudge(player) {
    return game.hasPlayer(current => {
        if (current === player || get.attitude(player, current) <= 0) {
            return false;
        }
        return _yeyeHasBadJudge(current, player);
    });
}

// ============================== 过河拆桥 ==============================
if (lib.card.guohe && !lib.card.guohe.ai._yeyePatched) {
    const guoheAi = lib.card.guohe.ai;
    guoheAi._yeyePatched = true;

    // ① 目标收益：队友判定区有乐/兵粮时，显著提升拆该队友的分数
    const _guoheTarget = guoheAi.result.target;
    guoheAi.result.target = function (player, target) {
        const result = _guoheTarget.apply(this, arguments);
        if (
            !get.is.single() &&
            get.attitude(player, target) > 0 &&
            _yeyeHasBadJudge(target, player, card => lib.filter.canBeDiscarded(card, player, target))
        ) {
            return result + 6;
        }
        return result;
    };

    // ② 出牌顺序：条件满足时提前使用【过河拆桥】（原 order 为 9）
    const _guoheOrder = guoheAi.basic.order;
    guoheAi.basic.order = function (card, player) {
        if (player && !get.is.single() && _yeyeHasTeammateWithBadJudge(player)) {
            return 11;
        }
        return typeof _guoheOrder === "function" ? _guoheOrder(card, player) : _guoheOrder;
    };

    // ③ 拆牌选择：队友判定区的乐/兵粮必定最优先
    const _guoheButton = guoheAi.button;
    guoheAi.button = function (button) {
        const result = _guoheButton.apply(this, arguments);
        const player = _status.event.player;
        const target = _status.event.target;
        if (!player || !target || get.attitude(player, target) <= 0) {
            return result;
        }
        if (get.position(button.link) !== "j") {
            return result;
        }
        if (!_yeyeBadJudge.includes(_yeyeJudgeName(button.link))) {
            return result;
        }
        if (!lib.filter.canBeDiscarded(button.link, player, target)) {
            return result;
        }
        return result + 20;
    };
}

// ============================== 顺手牵羊 ==============================
if (lib.card.shunshou && !lib.card.shunshou.ai._yeyePatched) {
    const shunshouAi = lib.card.shunshou.ai;
    shunshouAi._yeyePatched = true;

    // ai.result.target + 6	队友判定区有乐 / 兵粮时，把“拆 / 顺该队友”的评分从原来的 3 / 1.5 提到 9 / 7.5
    // （因为 effect_use 对 3 张以上手牌的目标会乘 0.5，所以刻意给足分）
    // ai.basic.order → 过河 11、顺手 10	手上有拆 / 顺且存在目标时，提前在出牌阶段使用（原为 9 / 7.5）
    // ai.button + 20结算选牌时必定优先选中判定区那张乐 / 兵粮，而不是手牌或装备；并保留 canBeDiscarded / canBeGained 校验，避免给不可操作的牌加分

    // ① 目标收益
    const _shunshouTarget = shunshouAi.result.target;
    shunshouAi.result.target = function (player, target) {
        const result = _shunshouTarget.apply(this, arguments);
        if (
            !get.is.single() &&
            get.attitude(player, target) > 0 &&
            _yeyeHasBadJudge(target, player, card => lib.filter.canBeGained(card, player, target))
        ) {
            return result + 6;
        }
        return result;
    };

    // ①-2 使用者收益（原有分支要求 att > 1，队友常见 att 只有 1，这里补齐）
    const _shunshouPlayer = shunshouAi.result.player;
    shunshouAi.result.player = function (player, target) {
        const result = _shunshouPlayer.apply(this, arguments);
        if (!get.is.single() && get.attitude(player, target) > 0 && _yeyeHasBadJudge(target, player)) {
            return result + 2;
        }
        return result;
    };

    // ② 出牌顺序（原 order 为 7.5）
    const _shunshouOrder = shunshouAi.basic.order;
    shunshouAi.basic.order = function (card, player) {
        if (player && !get.is.single() && _yeyeHasTeammateWithBadJudge(player)) {
            return 10;
        }
        return typeof _shunshouOrder === "function" ? _shunshouOrder(card, player) : _shunshouOrder;
    };

    // ③ 顺牌选择：队友判定区的乐/兵粮必定最优先
    const _shunshouButton = shunshouAi.button;
    shunshouAi.button = function (button) {
        const result = _shunshouButton.apply(this, arguments);
        const player = _status.event.player;
        const target = _status.event.target;
        if (!player || !target || get.attitude(player, target) <= 0) {
            return result;
        }
        if (get.position(button.link) !== "j") {
            return result;
        }
        if (!_yeyeBadJudge.includes(_yeyeJudgeName(button.link))) {
            return result;
        }
        if (!lib.filter.canBeGained(button.link, player, target)) {
            return result;
        }
        return result + 20;
    };
}

// =================== 视为使用类的虚拟牌（guohe_copy / shunshou_copy） ===================
// 很多技能用 get.effect(target, { name: "guohe_copy", position: "hej" }, player, player)
// 来评估“视为拆/顺”的收益，这里同步覆写。
// 注：guohe_copy2 / shunshou_copy2 内部实时调用 _copy 的 result，无需单独处理；
// 它们的 position 固定为 "he"，不含判定区，因此不会误加成分。
/**
 * @param {string} name 虚拟牌名
 * @param {"discard"|"gain"} mode 判定区那张牌需要“被弃置”还是“被获得”
 */
function _yeyePatchCopyCard(name, mode) {
    const info = lib.card[name];
    if (!info || !info.ai || !info.ai.result || info.ai._yeyePatched) {
        return;
    }
    const ai = info.ai;
    ai._yeyePatched = true;
    const canOperate = (card, player, target) =>
        mode === "gain" ? lib.filter.canBeGained(card, player, target) : lib.filter.canBeDiscarded(card, player, target);

    /** 该虚拟牌能否拆/顺到队友判定区的乐/兵粮 */
    const check = (player, target, card) => {
        if (get.is.single() || !player || !target || get.attitude(player, target) <= 0) {
            return false;
        }
        // 该虚拟牌允许操作的区域，缺省为 hej；不含 j 时不可能碰到判定区
        const position = String((card && card.position) || "hej");
        if (!position.includes("j")) {
            return false;
        }
        return _yeyeHasBadJudge(target, player, cardj => canOperate(cardj, player, target));
    };

    if (typeof ai.result.target === "function") {
        const originTarget = ai.result.target;
        ai.result.target = function (player, target, card) {
            const result = originTarget.apply(this, arguments);
            return check(player, target, card) ? result + 6 : result;
        };
    }
    if (typeof ai.result.player === "function") {
        const originPlayer = ai.result.player;
        ai.result.player = function (player, target, card) {
            const result = originPlayer.apply(this, arguments);
            return check(player, target, card) ? result + 2 : result;
        };
    }
}

_yeyePatchCopyCard("guohe_copy", "discard");
_yeyePatchCopyCard("shunshou_copy", "gain");

// ==================== 【南蛮入侵】【万箭齐发】AI 修正 ====================
// 1血的真人队友是这两张牌的高危目标，但“桃+卖血”这种二选一太粗糙。
// 改为逐项评估实际风险：
//   ① 有【藤甲】/ 护甲扛得住 / 稳定能打出【杀】【闪】 → 完全无风险，正常使用
//   ② 会进濒死，但自己能救（桃、酒、急救类技能）     → 小幅惩罚；
//      有卖血技能或救命牌≥2张时惩罚更小（吃了伤害基本是白赚）
//   ③ 会进濒死，自己救不了，但其他队友能出桃         → 中等惩罚，收益够大才用
//   ④ 会进濒死且没人救得回来                        → 硬禁这张牌
// ②③ 的具体分值在 _YEYE_AOE_PENALTY 里调整，越负越保守。

const _YEYE_AOE_PENALTY = {
    /** 自救 + 卖血，或手里有 2 张以上救命牌 */
    selfSaveGood: -1,
    /** 只有 1 张救命牌且没卖血：会白亏一张桃 */
    selfSave: -3,
    /** 要队友出桃，但自己有卖血收益 */
    allySaveMaixie: -5,
    /** 要队友出桃，自己没收益 */
    allySave: -8,
    /** 没人救得回来（同时会硬禁这张牌） */
    fatal: -99,
};

/** 是否为“真人”玩家（本地人类或联机真人） */
function _yeyeIsHumanPlayer(target) {
    return target === game.me || target.isOnline() || target.isOnline2();
}

/** 这张牌对目标的预计伤害（【酒】等 damageBonus 会使伤害+1） */
function _yeyeAoeDamage(user, target, cardName) {
    return user.hasSkillTag("damageBonus", true, { target, card: { name: cardName } }) ? 2 : 1;
}

/** 护甲是否能生效（绝情/刚直会让护甲失效） */
function _yeyeHujiaWorks(user, target) {
    return !user.hasSkillTag("jueqing", false, target) && !target.hasSkill("gangzhi");
}

/**
 * 能否“稳定”打出【杀】/【闪】：只认已知牌和转化类技能，概率估计不在此列
 * 想更激进的话，可以在这里补一条 mayHaveSha / mayHaveShan 概率 ≥ 0.85 也算安全
 */
function _yeyeCanRespondForSure(target, cardName, viewer) {
    const isNanman = cardName === "nanman";
    if (target.hasSkillTag(isNanman ? "respondSha" : "respondShan", true, "respond", true)) {
        return true;
    }
    const name = isNanman ? "sha" : "shan";
    return target.getKnownCards(viewer).some(card => get.name(card, target) === name && lib.filter.cardRespondable(card, target));
}

/** 可用于自救的手牌数（【桃】【酒】等带 save 标签且当前可救自己的牌） */
function _yeyeSaveCards(target) {
    return target.countCards("h", card => get.tag(card, "save") > 0 && lib.filter.cardSavable(card, target, target));
}

/** 除目标外，使用者一方一共能凑出多少张能救他的牌（包含使用者自己） */
function _yeyeAllySaveCount(user, target) {
    let num = 0;
    for (const current of game.players) {
        if (current === target) {
            continue;
        }
        if (current !== user && get.attitude(user, current) <= 0) {
            continue;
        }
        num += current.countCards("h", card => get.tag(card, "save") > 0 && lib.filter.cardSavable(card, current, target));
    }
    return num;
}

/**
 * 评估这张 AOE 对某个 1 血真人队友的风险
 * @returns {{ penalty: number, fatal: boolean }} penalty 为对目标收益的修正分（0 表示无风险）
 */
function _yeyeAoeAllyRisk(user, target, cardName) {
    const safe = { penalty: 0, fatal: false };
    if (!target || target === user || target.hp > 1) {
        return safe;
    }
    if (get.attitude(user, target) <= 0 || !_yeyeIsHumanPlayer(target)) {
        return safe;
    }

    // ① 【藤甲】对这两张牌完全免疫（除非使用者有无视防具类技能）
    if (target.hasSkill("tengjia1") && !user.hasSkillTag("unequip", false, { name: cardName, target, card: { name: cardName } })) {
        return safe;
    }

    // ② 护甲能扛住这一下
    const damage = _yeyeAoeDamage(user, target, cardName);
    if (damage > 0 && _yeyeHujiaWorks(user, target) && target.hujia >= damage) {
        return safe;
    }
    // ③ 稳定能打出杀/闪 → 根本不会掉血
    if (_yeyeCanRespondForSure(target, cardName, user)) {
        return safe;
    }

    // ④ 必然进濒死，评估自救与被救成本
    //    需要几张救命牌才能救回：打掉 1 点体力只需 1 张，伤害+1 时则要 2 张
    const need = Math.max(1, damage - target.hp + 1);
    const maixie = target.hasSkillTag("maixie") || target.hasSkillTag("maixie_hp");
    const selfSave = _yeyeSaveCards(target) + (target.hasSkillTag("save", true) ? 1 : 0);
    if (selfSave >= need) {
        // 自己就能救：手里还有余量时更从容
        return {
            penalty: maixie || selfSave >= need + 1 ? _YEYE_AOE_PENALTY.selfSaveGood : _YEYE_AOE_PENALTY.selfSave,
            fatal: false,
        };
    }
    if (_yeyeAllySaveCount(user, target) >= need) {
        return {
            penalty: maixie ? _YEYE_AOE_PENALTY.allySaveMaixie : _YEYE_AOE_PENALTY.allySave,
            fatal: false,
        };
    }
    // ⑤ 谁也救不回来
    return { penalty: _YEYE_AOE_PENALTY.fatal, fatal: true };
}

for (const name of ["nanman", "wanjian"]) {
    if (!lib.card[name] || !lib.card[name].ai || !lib.card[name].ai.result || lib.card[name].ai._yeyePatched) {
        continue;
    }
    const ai = lib.card[name].ai;
    ai._yeyePatched = true;

    // ① 存在“救不回来”的1血真人队友时，本回合不主动使用这张牌
    const originOrder = ai.basic.order;
    ai.basic.order = function (card, player) {
        player = player || get.player();
        if (player && game.hasPlayer(current => _yeyeAoeAllyRisk(player, current, name).fatal)) {
            return -1;
        }
        return typeof originOrder === "function" ? originOrder(card, player) : originOrder;
    };

    // ② 把“有代价但不会死”的风险折算进目标收益，让原版 AI 自己权衡
    const originTarget = ai.result.target;
    ai.result.target = function (player, target) {
        const result = originTarget.apply(this, arguments);
        const { penalty } = _yeyeAoeAllyRisk(player, target, name);
        return penalty ? result + penalty : result;
    };
}

}






