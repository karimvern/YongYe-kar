//import {lib,game,ui,get,ai,_status} from '../../../noname.js'
import { lib, game, ui, get, ai, _status } from "noname";

//本体技能AI修正

lib.skill.starchengfeng = {
    marktext: "匡",
    intro: {
        name: "匡祚",
        markcount: "expansion",
        content: "expansion",
    },
    audio: 2,
    usable: 1,
    enable: "chooseToUse",
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
    chooseButton: {
        dialog(event, player) {
            return ui.create.dialog("承奉", player.getExpansions("starchengfeng"), "hidden");
        },
        filter(button, player) {
            const card = button.link;
            if (!game.checkMod(card, player, "unchanged", "cardEnabled2", player)) {
                return false;
            }
            const evt = _status.event.getParent();
            const name = get.color(card) == "red" ? "shan" : "wuxie";
            return evt.filterCard(get.autoViewAs({ name: name }, [card]), player, evt);
        },
        check(button) {
            if (_status.event.getParent().type != "phase") {
                return 1;
            }
            var player = _status.event.player;
            return player.getUseValue({
                name: button.link[2],
                nature: button.link[3],
            });
        },
        backup(links, player) {
            return {
                audio: "starchengfeng",
                selectCard: -1,
                position: "x",
                filterCard: card => card == lib.skill.starchengfeng_backup.card,
                viewAs(cards, player) {
                    const name = get.color(cards[0]) == "red" ? "shan" : "wuxie";
                    return { name: name };
                },
                card: links[0],
            };
        },
        prompt(links, player) {
            return "将一张基本牌当做" + get.translation(links[0][2]) + "使用";
        },
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
    ai: {
        respondShan: true,
        skillTagFilter(player, tag) {
            if (player.getExpansions("starchengfeng").some(card => get.color(card) == "red")) {
                return true;
            }
        },
        order: 1,
        result: {
            player(player) {
                if (_status.event.dying) {
                    return get.attitude(player, _status.event.dying);
                }
                return 1;
            },
        },
    },
    group: "starchengfeng_use",
    subSkill: {
        backup: {},
        use: {
            audio: "starchengfeng",
            trigger: { player: "useCardAfter" },
            filter(event, player) {
                let colors = [];
                for (let card of player.getExpansions("starchengfeng")) {
                    colors.add(get.color(card));
                }
                return event.skill == "starchengfeng_backup" && colors.length < 2;
            },
            prompt2: "将牌堆顶一张牌置入“匡祚”",
            content() {
                player.addToExpansion(get.cards(1), "gain2").gaintag.add("starchengfeng");
            },
        },
    },
},


    lib.translate.starliangyan_info =
    "出牌阶段限一次。你可以选择一名其他角色，你摸/弃置至多两张牌，令其弃置/摸等量的牌。然后若你与其手牌数相同，以此法摸牌的角色跳过其下一个弃牌阶段。";
//防止梁燕让队友弃牌
lib.skill.starliangyan = {
    audio: 2,
    enable: "phaseUse",
    usable: 1,
    filterTarget: lib.filter.notMe,
    chooseButton: {
        dialog(event, player) {
            const name = get.translation(event.result.targets[0]);
            const list = ["你摸一张牌，其弃置一张牌", "你弃置一张牌，其摸一张牌", "你摸两张牌，其弃置两张牌", "你弃置两张牌，其摸两张牌"].map(
                (item, i) => [i, item]
            );
            const dialog = ui.create.dialog(
                `梁燕：请选择你与${name}要执行的选项`,
                [list.slice(0, 2), "tdnodes"],
                [list.slice(2, 4), "tdnodes"],
                "hidden"
            );
            return dialog;
        },
        filter(button, player) {
            const link = button.link;
            if (link % 2 === 0) {
                return true;
            }
            return player.countDiscardableCards(player, "he") >= (link + 1) / 2;
        },
        check(button) {
            const player = get.player(),
                target = get.event().getParent().result.targets[0];
            const link = button.link;
            if (get.attitude(player, target) <= 0 && link === 2) {
                return 100;
            }
            const ph = player.countCards("h"),
                th = target.countCards("h");
            if (link % 2 === 0) {
                const num = link / 2 + 1;
                if (ph + num === th - num) {
                    return 10;
                }
            } else {
                const num = (link + 1) / 2;
                if (ph - num === th + num) {
                    return 10;
                }
            }
            return 5;
        },
        backup(links) {
            return {
                audio: "starliangyan",
                target: get.event().result.targets[0],
                link: links[0],
                filterTarget(card, player, target) {
                    return target === lib.skill.starliangyan_backup.target;
                },
                selectTarget: -1,
                async content(content, trigger, player) {
                    const target = lib.skill.starliangyan_backup.target;
                    const link = lib.skill.starliangyan_backup.link;
                    const num = link <= 1 ? 1 : 2;
                    const fn = ["draw", "chooseToDiscard"];
                    if (link % 2 === 1) {
                        fn.reverse();
                    }
                    await player[fn[0]](num, true, "he");
                    await target[fn[1]](num, true, "he");
                    if (player.countCards("h") === target.countCards("h")) {
                        const skipper = [player, target][link % 2];
                        skipper.skip("phaseDiscard");
                        game.log(skipper, "跳过了下一个", "#y弃牌阶段");
                    }
                },
            };
        },
        prompt(links) {
            return "点击“确定”以执行效果";
        },
    },
    subSkill: {
        backup: {},
    },
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
}


lib.translate._guohe_info = "出牌阶段，对区域里有牌的一名其他角色使用。你弃置其区域里的一张牌。",
    lib.skill.guohe = {
        audio: true,
        fullskin: true,
        type: "trick",
        enable: true,
        selectTarget: 1,
        postAi(targets) {
            return targets.length === 1 && targets[0].countCards("j");
        },
        filterTarget(card, player, target) {
            if (player === target) {
                return false;
            }
            return target.hasCard(card => lib.filter.canBeDiscarded(card, player, target), get.is.single() ? "he" : "hej");
        },
        defaultYingbianEffect: "add",
        content() {
            "step 0";
            if (get.is.single()) {
                let bool1 = target.countDiscardableCards(player, "h"),
                    bool2 = target.countDiscardableCards(player, "e");
                if (bool1 && bool2) {
                    player
                        .chooseControl("手牌区", "装备区")
                        .set("ai", function () {
                            return Math.random() < 0.5 ? 1 : 0;
                        })
                        .set("prompt", "弃置" + get.translation(target) + "装备区的一张牌，或观看其手牌并弃置其中的一张牌。");
                } else {
                    event._result = { control: bool1 ? "手牌区" : "装备区" };
                }
            } else {
                event._result = { control: "所有区域" };
            }
            "step 1";
            let pos,
                vis = "visible";
            if (result.control === "手牌区") {
                pos = "h";
            } else if (result.control === "装备区") {
                pos = "e";
            } else {
                pos = "hej";
                vis = undefined;
            }
            if (target.countDiscardableCards(player, pos)) {
                player.discardPlayerCard(pos, target, true, vis).set("target", target).set("complexSelect", false).set("ai", lib.card.guohe.ai.button);
            }
        },
        ai: {
            wuxie: (target, card, player, viewer, status) => {
                if (
                    !target.countCards("hej") ||
                    status * get.attitude(viewer, player._trueMe || player) > 0 ||
                    (target.hp > 2 &&
                        !target.hasCard(i => {
                            let val = get.value(i, target),
                                subtypes = get.subtypes(i);
                            if (val < 8 && target.hp < 2 && !subtypes.includes("equip2") && !subtypes.includes("equip5")) {
                                return false;
                            }
                            return val > 3 + Math.min(5, target.hp);
                        }, "e") &&
                        target.countCards("h") * _status.event.getRand("guohe_wuxie") > 1.57)
                ) {
                    return 0;
                }
            },
            basic: {
                order: 9,
                useful: (card, i) => 10 / (3 + i),
                value: (card, player) => {
                    let max = 0;
                    game.countPlayer(cur => {
                        max = Math.max(max, lib.card.guohe.ai.result.target(player, cur) * get.attitude(player, cur));
                    });
                    if (max <= 0) {
                        return 5;
                    }
                    return 0.42 * max;
                },
            },
            yingbian(card, player, targets, viewer) {
                if (get.attitude(viewer, player) <= 0) {
                    return 0;
                }
                if (
                    game.hasPlayer(function (current) {
                        return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                    })
                ) {
                    return 6;
                }
                return 0;
            },
            button: button => {
                let player = _status.event.player,
                    target = _status.event.target;
                if (!lib.filter.canBeDiscarded(button.link, player, target)) {
                    return 0;
                }
                let att = get.attitude(player, target),
                    val = get.buttonValue(button),
                    pos = get.position(button.link),
                    viewAs = button.link.viewAs,
                    name = get.name(button.link);
                    if (att > 0 && pos === "j") {
                        if (viewAs === "lebu"  || name === "lebu") {
                            return 100 + btv;
                        }
                        if (viewAs === "bingliang"  || name === "bingliang") {
                            return 50 + btv;
                        }
                    }
                if (pos === "j") {
                    let viewAs = button.link.viewAs;
                    if (viewAs === "lebu") {
                        let needs = target.needsToDiscard(2);
                        val *= 1.08 + 0.2 * needs;
                    } else if (viewAs === "shandian" || viewAs === "fulei") {
                        val /= 2;
                    }
                }
                if (att > 0) {
                    val = -val;
                }
                if (pos !== "e") {
                    return val;
                }
                let sub = get.subtypes(button.link);
                if (sub.includes("equip1")) {
                    return (val * Math.min(3.6, target.hp)) / 3;
                }
                if (sub.includes("equip2")) {
                    if (name === "baiyin" && pos === "e" && target.isDamaged()) {
                        let by = 3 - 0.6 * Math.min(5, target.hp);
                        return get.sgn(get.recoverEffect(target, player, player)) * by;
                    }
                    return 1.57 * val;
                }
                if (att <= 0 && (sub.includes("equip3") || sub.includes("equip4")) && (player.hasSkill("shouli") || player.hasSkill("psshouli"))) {
                    return 0;
                }
                if (sub.includes("equip6")) {
                    return val;
                }
                if (sub.includes("equip4")) {
                    return val / 2;
                }
                if (
                    sub.includes("equip3") &&
                    !game.hasPlayer(cur => {
                        return !cur.inRange(target) && get.attitude(cur, target) < 0;
                    })
                ) {
                    return 0.4 * val;
                }
                return val;
            },
            result: {
                target(player, target) {
                    const att = get.attitude(player, target);
                    const hs = target.getDiscardableCards(player, "h");
                    const es = target.getDiscardableCards(player, "e");
                    const js = target.getDiscardableCards(player, "j");
                    if (!hs.length && !es.length && !js.length) {
                        return 0;
                    }
                    if (att > 0) {
                        if (
                            js.some(card => {
                                const cardj = card.viewAs ? { name: card.viewAs } : card;
                                if (cardj.name === "xumou_jsrg") {
                                    return false;
                                }
                                return get.effect(target, cardj, target, player) < 0;
                            })
                        ) {
                            return 3;
                        }
                        if (target.isDamaged() && es.some(card => card.name === "baiyin") && get.recoverEffect(target, player, player) > 0) {
                            if (target.hp === 1 && !target.hujia) {
                                return 1.6;
                            }
                        }
                        if (
                            es.some(card => {
                                return get.value(card, target) < 0;
                            })
                        ) {
                            return 1;
                        }
                        return -1.5;
                    } else {
                        const noh = hs.length === 0 || target.hasSkillTag("noh");
                        const noe = es.length === 0 || target.hasSkillTag("noe");
                        const noe2 =
                            noe ||
                            !es.some(card => {
                                return get.value(card, target) > 0;
                            });
                        const noj =
                            js.length === 0 ||
                            !js.some(card => {
                                const cardj = card.viewAs ? { name: card.viewAs } : card;
                                if (cardj.name === "xumou_jsrg") {
                                    return true;
                                }
                                return get.effect(target, cardj, target, player) < 0;
                            });
                        if (noh && noe2 && noj) {
                            return 1.5;
                        }
                        return -1.5;
                    }
                },
            },
            tag: {
                loseCard: 1,
                discard: 1,
            },
        },
    }
lib.translate._guohe_info = "出牌阶段，对距离为1且区域里有牌的一名其他角色使用。你获得其区域里的一张牌。",
    lib.skill.shunshou = {
        audio: true,
        fullskin: true,
        type: "trick",
        enable: true,
        range: { global: 1 },
        selectTarget: 1,
        postAi(targets) {
            return targets.length === 1 && targets[0].countCards("j");
        },
        filterTarget(card, player, target) {
            if (player === target) {
                return false;
            }
            return target.hasCard(card => lib.filter.canBeGained(card, player, target), get.is.single() ? "he" : "hej");
        },
        async content(event, trigger, player) {
            const target = event.target;
            let pos = get.is.single() ? "he" : "hej";
            if (target.countGainableCards(player, pos)) {
                await player.gainPlayerCard(pos, target, true).set("target", target).set("complexSelect", false).set("ai", lib.card.shunshou.ai.button);
            }
        },
        ai: {
            wuxie(target, card, player, viewer) {
                if (!target.countCards("hej") || get.attitude(viewer, player._trueMe || player) > 0) {
                    return 0;
                }
            },
            basic: {
                order: 7.5,
                useful: (card, i) => 8 / (3 + i),
                value: (card, player) => {
                    let max = 0;
                    game.countPlayer(cur => {
                        max = Math.max(max, lib.card.shunshou.ai.result.target(player, cur) * get.attitude(player, cur));
                    });
                    if (max <= 0) {
                        return 2;
                    }
                    return 0.53 * max;
                },
            },
            button: button => {
                let player = _status.event.player,
                    target = _status.event.target;
                if (!lib.filter.canBeGained(button.link, player, target)) {
                    return 0;
                }
                let att = get.attitude(player, target),
                    val = get.value(button.link, player) / 60,
                    btv = get.buttonValue(button),
                    pos = get.position(button.link),
                    viewAs = button.link.viewAs,
                    name = get.name(button.link);
                    if (att > 0 && pos === "j") {
                        if (viewAs === "lebu"  || name === "lebu") {
                            return 100 + btv;
                        }
                        if (viewAs === "bingliang"  || name === "bingliang") {
                            return 50 + btv;
                        }
                    }
                if (pos === "j") {
                    let viewAs = button.link.viewAs;
                    if (viewAs === "lebu") {
                        let needs = target.needsToDiscard(2);
                        btv *= 1.08 + 0.2 * needs;
                    } else if (viewAs === "shandian" || viewAs === "fulei") {
                        btv /= 2;
                    }
                }
                if (att > 0) {
                    btv = -btv;
                }
                if (pos !== "e") {
                    if (pos === "h" && !player.hasSkillTag("viewHandcard", null, target, true)) {
                        return btv + 0.1;
                    }
                    return btv + val;
                }
                let sub = get.subtype(button.link);
                if (sub === "equip1") {
                    return (btv * Math.min(3.6, target.hp)) / 3;
                }
                if (sub === "equip2") {
                    if (name === "baiyin" && pos === "e" && target.isDamaged()) {
                        let by = 3 - 0.6 * Math.min(5, target.hp);
                        return get.sgn(get.recoverEffect(target, player, player)) * by;
                    }
                    return 1.57 * btv + val;
                }
                if (att <= 0 && (sub === "equip3" || sub === "equip4") && (player.hasSkill("shouli") || player.hasSkill("psshouli"))) {
                    return 0;
                }
                if (sub === "equip3" && !game.hasPlayer(cur => !cur.inRange(target) && get.attitude(cur, target) < 0)) {
                    return 0.4 * btv + val;
                }
                if (sub === "equip4") {
                    return btv / 2 + val;
                }
                return btv + val;
            },
            result: {
                player(player, target) {
                    const hs = target.getGainableCards(player, "h");
                    const es = target.getGainableCards(player, "e");
                    const js = target.getGainableCards(player, "j");
                    const att = get.attitude(player, target);
                    if (att < 0) {
                        if (
                            !hs.length &&
                            !es.some(card => {
                                return get.value(card, target) > 0 && card !== target.getEquip("jinhe");
                            }) &&
                            !js.some(card => {
                                var cardj = card.viewAs ? { name: card.viewAs } : card;
                                if (cardj.name === "xumou_jsrg") {
                                    return true;
                                }
                                return get.effect(target, cardj, target, player) < 0;
                            })
                        ) {
                            return 0;
                        }
                    } else if (att > 1) {
                        return es.some(card => {
                            return get.value(card, target) <= 0;
                        }) ||
                            js.some(card => {
                                var cardj = card.viewAs ? { name: card.viewAs } : card;
                                if (cardj.name === "xumou_jsrg") {
                                    return false;
                                }
                                return get.effect(target, cardj, target, player) < 0;
                            })
                            ? 1.5
                            : 0;
                    }
                    return 1;
                },
                target(player, target) {
                    const hs = target.getGainableCards(player, "h");
                    const es = target.getGainableCards(player, "e");
                    const js = target.getGainableCards(player, "j");

                    if (get.attitude(player, target) <= 0) {
                        if (hs.length > 0) {
                            return -1.5;
                        }
                        return es.some(card => {
                            return get.value(card, target) > 0 && card !== target.getEquip("jinhe");
                        }) ||
                            js.some(card => {
                                var cardj = card.viewAs ? { name: card.viewAs } : card;
                                if (cardj.name === "xumou_jsrg") {
                                    return true;
                                }
                                return get.effect(target, cardj, target, player) < 0;
                            })
                            ? -1.5
                            : 1.5;
                    }
                    return es.some(card => {
                        return get.value(card, target) <= 0;
                    }) ||
                        js.some(card => {
                            var cardj = card.viewAs ? { name: card.viewAs } : card;
                            if (cardj.name === "xumou_jsrg") {
                                return false;
                            }
                            return get.effect(target, cardj, target, player) < 0;
                        })
                        ? 1.5
                        : -1.5;
                },
            },
            tag: {
                loseCard: 1,
                gain: 1,
            },
        }
    }






