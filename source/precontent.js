import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import { voices } from './voices.js';
import { poptip } from './poptip.js';
import { characterIntro } from './characterIntro.js';
import { } from "./js/correct.js";
import { } from "./js/globalskill.js";
import {
    cardPileObsever,
    discardPileObsever,
    orderingObsever,
    specialObsever,
} from "./MatationObsever/PileObsever.js";
import { initExtraContent } from './js/index.js';

export let charPack = {
    xinx1: {
        translate: '<span style=\'color:#03f7fe\'>杏雅三国</span>',
    },
    xinx2: {
        translate: '<span style=\'color:#03f7fe\'>永夜之始</span>',
    },
    xinxhuaijiu: {
        translate: '<span style=\'color:#03f7fe\'>武将修改</span>',
    },
    xinxfenyu: {
        translate: '<span style=\'color:#03f7fe\'>风雨如晦</span>',
    },
};


const suffixIntroDict = {};
for (let key in characterIntro) {
    // 统一提取出纯后缀作为私有键名
    let suffix = key.includes('_') ? key.substring(key.indexOf('_') + 1) : key;
    suffixIntroDict[suffix] = characterIntro[key];
}


export async function precontent(config, pack) {

    await initExtraContent(config, pack);


    const dieWordsDict = {
        //"xinx_liuying": "",
    };

    for (let packName in charPack) {
        let result = await import(`./character/${packName}.js`).catch(e => alert(`在导入武将包“${charPack[packName] && charPack[packName].translate || packName}”时出现错误:\n${e.stack}`));
        let info = result.info;
        if (!info) continue;
        for (let name in info.character) {
            let char = info.character[name];
            const imagePath = ((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/' + name + '.png';
            const objectImagePath = 'extension/永夜之境/image/' + name + '.png';
            if (!char[4]) char[4] = [];
            char[4].push('die:ext:永夜之境/audio/die/' + name);
            const dieAudio = 'die:ext:永夜之境/audio/die/' + name;
            if (Array.isArray(char)) {
                /*  if (!char[4]) char[4] = [];
                 if (!char[4].includes(dieAudio)) char[4].push(dieAudio); */
                if (!char[4].includes(imagePath)) char[4].push(imagePath);
            }
            else if (char && typeof char == 'object') {
                if (!char.img) char.img = objectImagePath;
            }
            /* if (!char[4]) char[4] = [];
            char[4].push(((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/' + name + '.png');
            char[4].push('die:ext:永夜之境/audio/die/' + name); */
            //阵亡台词接口
            lib.translate[`#ext:永夜之境/audio/die/${name}:die`] = dieWordsDict[name] || '点击播放阵亡配音';


            //武将介绍
            /* const prefixes = ['xinx', 'fyrh'];
            if (prefixes.some(prefix => name.startsWith(prefix)) && name.includes('_')) {
                let suffix = name.substring(name.indexOf('_') + 1);
                if (suffixIntroDict[suffix] && !lib.characterIntro[name]) {
                    // ib.characterIntro['xinxmeng_liuying'] = "..."
                    lib.characterIntro[name] = suffixIntroDict[suffix];
                }
            } */

            if (!lib.characterIntro[name]) {
                // 全名匹配
                if (characterIntro[name]) {
                    lib.characterIntro[name] = characterIntro[name];
                }
                //后缀通用匹配
                else if (name.includes('_')) {
                    let suffix = name.substring(name.indexOf('_') + 1);
                    if (characterIntro[suffix]) {
                        lib.characterIntro[name] = characterIntro[suffix];
                    }
                }
            }
        }


        if (info.characterSubstitute) {
            // 遍历每一个拥有形态的武将 (baseName 就是 'xinx_qiong' 等)
            for (let baseName in info.characterSubstitute) {
                let forms = info.characterSubstitute[baseName];
                for (let form of forms) {
                    // form[0] 是形态名，如 'xinx_qiong_shadow1'
                    // form[1] 是配置数组，如 ['ext:永夜之境/image/xinx_qiong_shadow1.png']
                    if (!form[1]) form[1] = [];
                    // 检查这个形态是否已经手动写过 'die:'。如果没有，自动把原武将的语音塞进去
                    let hasDieAudio = form[1].some(str => typeof str === 'string' && str.startsWith('die:'));
                    if (!hasDieAudio) {
                        form[1].push('die:ext:永夜之境/audio/die/' + baseName);
                    }
                }
            }
        }

        game.import('character', () => info);


        lib.namePrefix.set('杏', {
            color: '#03f7fe',  //#6affe2 #29b7cb #98F5FF     
            nature: 'watermm',
            showName: '杏',
        });
        lib.namePrefix.set('影', {
            color: '#7947ab',
            nature: 'keymm',
            showName: '影',
        });
        lib.namePrefix.set('初', {
            color: '#00ffc1',
            nature: 'watermm',
            showName: '初',
        });
        lib.namePrefix.set('逐', {
            color: '#ff7461',
            nature: 'thundermm',
            showName: '逐',
        });
        lib.namePrefix.set('华', {
            color: '#82e0aa',
            nature: 'watermm',
            showName: '华',
        });
        lib.namePrefix.set('玄蝶', {
            color: '#DE3F6C',
            nature: 'watermm',
            showName: '蝶',
        });
        lib.namePrefix.set('廷', {
            color: '#696AB5',
            nature: "thundermm",
            showName: '廷',
        });
        lib.namePrefix.set('改', {
            color: '#BCE1DF',
            nature: 'thundermm',
            showName: '改',
        });
        lib.namePrefix.set('白', {
            color: '#D2DADA',
            nature: 'watermm',
            showName: '白',
        });
        lib.namePrefix.set('叶', {
            color: '#FFD700',//FFDE38 4ED09E FFD700
            nature: 'watermm',
            showName: '叶',
        });
        lib.namePrefix.set('秀', {
            color: '#B3B0DE',
            nature: 'thundermm',
            showName: '秀',
        });
        lib.namePrefix.set('雨', {
            color: '#B6C6EC',
            nature: 'watermm',
            showName: '雨',
        });
        lib.namePrefix.set('正', {
            color: '#C482CE',
            nature: 'thundermm',
            showName: '正',
        });
        lib.namePrefix.set('夏', {
            color: '#9FD1CE',
            nature: 'watermm',
            showName: '夏',
        });
        lib.namePrefix.set('U', {
            color: '#59ACD9',//59ACD9 A0A0B5
            nature: 'woodmm', //woodmm  metalmm
            showName: 'U',
        });
        lib.namePrefix.set('Y', {
            color: '#44DA67',
            nature: 'watermm',
            showName: 'Y',
        });
        lib.namePrefix.set('屑', {
            color: '#EB9395',//EB9395 ACBDD8
            nature: 'soilmm',
            showName: '屑',
        });
        lib.namePrefix.set('糖', {
            color: '#FAFAFA',
            nature: 'soilmm',
            showName: '糖',
        });
        lib.namePrefix.set('欢', {
            color: '#BF80DB',
            nature: 'soilmm',
            showName: '欢',
        });
        lib.namePrefix.set('袍', {
            color: '#FBA2E2',
            nature: 'soilmm',
            showName: '袍',
        });





        const xinxCombinition = ['杏', '新杀谋', '势', '谋', '新杀', '汉', '星', '骥', '闪', '族', '乐', '华', 'OL谋', 'OL', '廷', '玄蝶', 'OL界', '手杀神', '夏', '手杀界', '族', '☆', '友', '雁翎'];
        for (let n of xinxCombinition) {
            lib.namePrefix.set(`旧${n}`, {
                getSpan: (prefix, name) => `${get.prefixSpan('旧')}${get.prefixSpan(n)}`
            })
            lib.namePrefix.set(`改${n}`, {
                getSpan: (prefix, name) => `${get.prefixSpan('改')}${get.prefixSpan(n)}`
            })
            lib.namePrefix.set(`U${n}`, {
                getSpan: (prefix, name) => `${get.prefixSpan('U')}${get.prefixSpan(n)}`
            })
        };


        // 首次导入开启将包
        if (!lib.config[packName + '_character_pack_open']) {
            lib.config.characters.add(packName);
            game.saveConfig('characters', lib.config.characters);
            game.saveConfig(packName + '_character_pack_open', true);
        };
        //lib.config.all.characters.push(packName);
        if (!lib.config.characters.includes(packName)) lib.config.characters.remove(packName);
        lib.translate[packName + '_character_config'] = charPack[packName].translate || '永夜之境';
    };


    // 导入台词
    Object.assign(lib.translate, voices);
    // 导入武将介绍
    //Object.assign(lib.characterIntro, characterIntro);
    /* game.import('character', function () {
        return {
            name: "永夜之境_intro",
            characterIntro: characterIntro
        };
    }); */
    // 导入 poptip
    Object.assign(lib.poptip, poptip);

    //lib.config.all.cards.push("永夜之境");



    //装备区无副类别，by《名将杀》暴暴龙
    const xorigin_player_canEquip = lib.element.player.canEquip;
    lib.element.player.canEquip = function (name, replace) {
        if (this.xinxhasEquipType()) {
            if (get.itemtype(name) == "card") {
                const owner = get.owner(name, "judge");
                if (owner && !lib.filter.canBeGained(name, this, owner)) {
                    return false;
                }
            }
            let num = this.xinxgetEquipLimit();
            let num2 = this.getVCards("e").length;
            if (!replace) {
                num += this.getVCards("e").filter(card => lib.filter.canBeReplaced(card, this)).length;
            }
            if (num <= 0) {
                return false;
            }
            return true;
        }
        return xorigin_player_canEquip.apply(this, arguments);
    };
    Object.assign(lib.skill, {
        _xinxchangeToEquip: {
            trigger: {
                player: "equipBegin",
            },
            forced: true,
            silent: true,
            charlotte: true,
            ruleSkill: true,
            filter(event, player) {
                return player.hasSkill('xinxduoyi');
            },
            async content(event, trigger, player) {
                trigger.setContent(lib.skill._xinxchangeToEquip.equipContent);
            },
            async equipContent(event, trigger, player) {
                event.visible = true;
                //先确定这次的cards是什么成分也防止有人在equipBegin之类的时机往里面塞垃圾
                if (event.cards.length > 1 && event.cards.some(cardx => cardx.isViewAsCard)) {
                    //实体牌数大于1且里面有虚拟假牌，终止此事件
                    event.untrigger();
                    return;
                }
                //进行第一轮先行判断，让所有装备牌的原主失去装备牌
                let loseCards = [];
                //判断card是不是假牌，如果是改为失去假牌
                if (event.card.isViewAsCard) {
                    loseCards.add(event.card);
                } else {
                    loseCards.addArray(event.cards);
                }
                if (loseCards.length) {
                    const map = {};
                    for (const i of loseCards) {
                        var owner = get.owner(i, "judge");
                        if (owner && (owner != player || get.position(i) != "e")) {
                            var id = owner.playerid;
                            if (!map[id]) {
                                map[id] = [[], [], []];
                            }
                            map[id][0].push(i);
                            var position = get.position(i);
                            if (position == "h") {
                                map[id][1].push(i);
                            } else {
                                map[id][2].push(i);
                            }
                        } else if (!event.updatePile && get.position(i) == "c") {
                            event.updatePile = true;
                        }
                        if (event.visible) {
                            i.addKnower("everyone");
                        }
                    }
                    event.losing_map = map;
                    for (const i in map) {
                        const owner = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                        const next = owner.lose(map[i][0], ui.special).set("type", "equip").set("forceDie", true).set("getlx", false);
                        if (event.visible == true) {
                            // @ts-expect-error ignore
                            next.visible = true;
                        }
                        await next;
                        event.relatedLose = next;
                    }
                }
                player.equiping = true;
                const handleEquip = async card => {
                    let cards = [];
                    // @ts-expect-error ignore
                    if (get.itemtype(card) === "card" && !card.isViewAsCard) {
                        cards = [card];
                        card = card.cardSymbol ? card[card.cardSymbol] : get.autoViewAs(card, void 0, false);
                        event.vcards.push(card);
                    } else {
                        if (get.itemtype(card) === "card" && card.isViewAsCard) {
                            event.vcards.push(card[card.cardSymbol]);
                        } else {
                            event.vcards.push(card);
                        }
                        cards = event.cards ?? [];
                    }
                    let cardInfo = get.info(card, false);
                    if (player.isMin() || !player.canEquip(card)) {
                        await game.cardsDiscard(cards);
                        delete player.equiping;
                        return;
                    }
                    let audioSubtype = get.subtype(card);
                    if (audioSubtype == "equip6") {
                        audioSubtype = "equip3";
                    }
                    // @ts-expect-error ignore
                    game.broadcastAll(type => {
                        if (lib.config.background_audio) {
                            // @ts-expect-error ignore
                            game.playAudio("effect", type);
                        }
                    }, audioSubtype);
                    player.addVirtualEquip(card, cards);
                    //player.$equip(card);
                    //game.addVideo("equip", player, get.cardInfo(card));
                    if (event.log != false) {
                        const isViewAsCard = cards.length !== 1 || cards[0].name !== card.name;
                        if (isViewAsCard && cards.length) {
                            game.log(player, '装备了<span class="yellowtext">' + get.translation(card) + "</span>（", cards, "）");
                        } else {
                            game.log(player, "装备了", card);
                        }
                    }
                    if (cardInfo.onEquip && (!cardInfo.filterEquip || cardInfo.filterEquip(card, player))) {
                        if (Array.isArray(cardInfo.onEquip)) {
                            for (var i = 0; i < cardInfo.onEquip.length; i++) {
                                var next = game.createEvent("equip_" + card.name);
                                next.setContent(cardInfo.onEquip[i]);
                                next.player = player;
                                next.card = event.vcards[0];
                                await next;
                            }
                        } else {
                            var next = game.createEvent("equip_" + card.name);
                            next.setContent(cardInfo.onEquip);
                            next.player = player;
                            next.card = event.vcards[0];
                            await next;
                        }
                        if (cardInfo.equipDelay != false) {
                            await game.delayx();
                        }
                    }
                    delete player.equiping;
                    if (event.delay) {
                        await game.delayx();
                    }
                };
                //检查实体牌会不会被销毁
                let stop = false;
                const list = [];
                for (const cardx of event.cards) {
                    if (cardx.willBeDestroyed("equip", player, event)) {
                        cardx.selfDestroy(event);
                        stop = true;
                    } else if ("hejx".includes(get.position(cardx, true))) {
                        stop = true;
                    } else {
                        list.add(cardx);
                    }
                }
                if (stop) {
                    if (list.length) {
                        await game.cardsDiscard(list);
                    }
                    return;
                }
                //同时播放所有装备牌的装备动画
                if (event.cards.length) {
                    if (event.draw) {
                        player.$draw(event.cards);
                        await game.delay(0, 300);
                    } else {
                        // @ts-expect-error ignore
                        game.broadcast(
                            function (cards, player) {
                                cards.forEach(card => {
                                    if (card.clone) {
                                        card.clone.moveDelete(player);
                                    }
                                });
                            },
                            event.cards,
                            player
                        );
                        event.cards.forEach(card => {
                            if (card.clone) {
                                card.clone.moveDelete(player);
                                game.addVideo("gain2", player, get.cardsInfo([card.clone]));
                            }
                        });
                    }
                }
                //将多张装备牌的牌替换事件合并为一个，废弃卡牌的replaceEquip自定义事件属性（反正没人用）
                const replaceEquipEvent = game.createEvent("replaceEquip");
                replaceEquipEvent.player = player;
                // @ts-expect-error ignore
                replaceEquipEvent.card = event.card;
                replaceEquipEvent.setContent(lib.skill._xinxchangeToEquip.replaceEquipContent);
                const result = await replaceEquipEvent.forResult();
                // @ts-expect-error ignore
                if (get.itemtype(result?.cards) == "cards") {
                    // @ts-expect-error ignore
                    event.swapped = true;
                    const loseEvent = player.lose(result.cards, "visible").set("type", "equip").set("getlx", false);
                    loseEvent.swapEquip = true;
                    if (get.info(event.card, true)?.loseThrow) {
                        player.$throw(result.cards, 1000);
                    }
                    await loseEvent;
                    // @ts-expect-error ignore
                    for (let card of result.cards) {
                        if (card.willBeDestroyed("discardPile", player, event)) {
                            card.selfDestroy(event);
                        }
                    }
                }
                //就算是vcard也应该用lose处理
                /*
                result?.vcards?.forEach(card => {
                    player.removeVirtualEquip(card);
                });
                */
                //然后处理每一张装备牌的装备
                event.vcards = [];
                await handleEquip(event.card);
                //如果event.card是实体牌，改为虚拟牌
                if (get.itemtype(event.card) == "card") {
                    event.card = event.card[event.card.cardSymbol];
                }
                if (event.updatePile) {
                    game.updateRoundNumber();
                }
            },
            async replaceEquipContent(event, trigger, player) {
                let vcards = [];
                vcards.push(event.card[event.card.cardSymbol] ? event.card[event.card.cardSymbol] : get.autoViewAs(event.card, void 0, false));
                const specializedVCards = [],
                    normalVCards = [];
                const replacedCards = [];
                vcards.forEach(card => {
                    const info = get.info(card, false);
                    (info?.customSwap ? specializedVCards : normalVCards).push(card);
                });
                specializedVCards.forEach(card => {
                    const info = get.info(card, false);
                    replacedCards.addArray(player.getVCards("e", card => info.customSwap(card)));
                });
                const types = normalVCards.reduce((types, card) => {
                    return types.concat(get.subtypes(card, false));
                }, []);
                if (types.length > 0) {
                    const slots = types,
                        slotsx = [];
                    if (get.is.mountCombined()) {
                        slots.forEach(type => {
                            if (type == "equip3" || type == "equip4") {
                                slotsx.add("equip3_4");
                            } else {
                                slotsx.add(type);
                            }
                        });
                    } else {
                        slotsx.addArray(slots);
                    }
                    slotsx.sort();
                    for (const slot of slotsx) {
                        let left = player.xinxgetEquipLimit(),
                            lose = Math.min(left, normalVCards.length);
                        let result;
                        if (lose <= 0) {
                            continue;
                        } else {
                            const cards = player.getVCards("e").filter(card => {
                                return !replacedCards.includes(card) && lib.filter.canBeReplaced(card, player);
                            });
                            if (cards.length > 0) {
                                if (lose >= left) {
                                    result = { bool: true, links: cards };
                                } else if (cards.length > left - lose) {
                                    var source = event.source,
                                        num = cards.length - (left - lose);
                                    if (!source || !source.isIn()) {
                                        source = player;
                                    }
                                    const chooseEvent = source
                                        .chooseButton(["选择替换掉" + get.cnNumber(num) + "张装备牌", [cards, "vcard"]], true, [1, num]);
                                    result = await chooseEvent.forResult();
                                }
                            }
                        }
                        if (result?.links) {
                            replacedCards.addArray(result.links);
                        }
                    }
                }
                event.result = {
                    vcards: replacedCards,
                    cards: player.getCards("e", i => replacedCards.includes(i[i.cardSymbol])),
                };
            },
            ai: {
                effect: {
                    target(card, player, target) {
                        if (!target.xinxhasEquipType()) return;
                        if (player == target && get.type(card) == "equip") {
                            const cards = target.getVCards("e").filter(card => {
                                return lib.filter.canBeReplaced(card, target);
                            });
                            if (target.xinxgetEquipLimit() >= cards.length + 1) return;
                            if (cards.some(cardx => cardx.name == card.name)) {
                                return 0;
                            }
                            if (cards.every(cardx => get.equipValue(card) <= get.equipValue(cardx))) {
                                return 0;
                            }
                        }
                    },
                },
            }
        },
        xinxequip: {
            mod: {
                maxEquipBase(player, num) {
                    const info = player.storage?.xinxequip;
                    if (typeof info != "number") return;
                    return num + info;
                },
            },
        },
        _xinx_autoswap: {
            firstDo: true,
            trigger: {
                player: [
                    /* "phaseBegin", */
                    "playercontrol",
                    "chooseToUseBegin",
                    "chooseToRespondBegin",
                    "chooseToDiscardBegin",
                    "chooseToCompareBegin",
                    "chooseButtonBegin",
                    "chooseButtonTargetBegin",
                    "chooseCardBegin",
                    "chooseTargetBegin",
                    "chooseCardTargetBegin",
                    "chooseControlBegin",
                    "chooseBoolBegin",
                    "choosePlayerCardBegin",
                    "discardPlayerCardBegin",
                    "gainPlayerCardBegin",
                    "chooseToMoveBegin",
                    "chooseToMove_newBegin",
                    "chooseToPlayBeatmapBegin",
                    "chooseToGiveBegin",
                ],
            },
            forced: true,
            priority: 100,
            forceDie: true,
            popup: false,
            filter: function (event, player) {
                if (!game.getExtensionConfig("永夜之境", "autoSwap"))
                    return false;
                if (event.autochoose && event.autochoose()) return false;
                if (lib.filter.wuxieSwap(event)) return false;
                if (_status.auto || player.isUnderControl(true))
                    return false;
                if (game.getExtensionConfig("永夜之境", "autoSwapSetting") == "all") {
                    return true;
                }
                if ((game.getExtensionConfig("永夜之境", "autoSwapSetting") == "onlyRealFriend" && player.isFriendsOf(game.me))) {
                    return true;
                }
                if (game.getExtensionConfig("永夜之境", "autoSwapSetting") == "onlyFriend" && get.attitude(game.me, player) > 0) {
                    return true;
                }
            },
            content: function () {
                game.swapPlayerAuto(player);
            },
        },

    });

    Object.assign(lib.element.player, {
        xinxgetEquipLimit() {
            var num = 6;
            num = game.checkMod(this, num, "maxEquipBase", this);
            num = game.checkMod(this, num, "maxEquip", this);
            num = game.checkMod(this, num, "maxEquipFinal", this);
            return Math.max(0, num);
        },
        xinxexpandEquip() {
            var next = game.createEvent("xinxexpandEquip");
            next.player = this;
            next.num = 1;
            for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] === "number") {
                    next.num = arguments[i];
                }
            }
            next.setContent("xinxexpandEquip");
            return next;
        },
        xinxcontractEquip() {
            var next = game.createEvent("xinxcontractEquip");
            next.player = this;
            next.num = 1;
            for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] === "number") {
                    next.num = arguments[i];
                }
            }
            next.setContent("xinxcontractEquip");
            return next;
        },
        xinxhasEquipType() {
            return this.hasSkill("xinxduoyi") || this.hasSkill("xinxequip");
        },
    });
    Object.assign(lib.element.content, {
        async xinxexpandEquip(event, trigger, player) {
            const num = event.num;
            player.addSkill("xinxequip");
            var info = player.storage;
            if (typeof info.xinxequip != "number") {
                info.xinxequip = 0;
            }
            info.xinxequip += num;
            game.log(player, "的装备上限", "#y+" + num);
            player.update();
        },
        async xinxcontractEquip(event, trigger, player) {
            const num = event.num;
            player.addSkill("xinxequip");
            var info = player.storage;
            if (typeof info.xinxequip != "number") {
                info.xinxequip = 0;
            }
            info.xinxequip -= num;
            game.log(player, "的装备上限", "#y-" + num);
            player.update();
            let cards = player.getCards("e");
            let replacedCards = [];
            let left = player.xinxgetEquipLimit(),
                lose = cards.length - left;
            if (left == 0) {
                const next = game.createEvent("xinxcontractEquipAll");
                next.player = player;
                next.setContent("emptyEvent");
                await next;
            }
            if (lose <= 0) {
                return;
            }
            else if (lose > 0 && cards.length == 1) {
                replacedCards.addArray(cards);
            } else if (lose > 0) {
                const result = await player
                    .chooseButton(["选择" + get.cnNumber(num) + "张装备牌置入弃牌堆", cards], lose, true)
                    .forResult();
                if (result?.bool) {
                    replacedCards.addArray(result.links);
                }
            }
            if (replacedCards.length > 0) {
                await player.loseToDiscardpile(replacedCards);
            }
        },
    });



    



    //来自《奇思妙想》，检测处理区
    cardPileObsever();
    discardPileObsever();
    orderingObsever();
    specialObsever();

    //牺牲随从，来自《拉拉》
    lib.element.player.xinx_removeSubPlayer = function (name) {
        if (this.hasSkill('subplayer') && this.name == name) {
            this.exitSubPlayer(true);
        }
        else {
            if (this.storage[name].onremove) {
                this.storage[name].onremove(this);
            }
            this.removeSkill(name);
            delete this.storage[name];
            game.log(this, '牺牲了随从', '#g' + name);
            _status.event.trigger('removeSubPlayer');
        }
    };

    //搬运《奇妙工具》，按钮
    lib.arenaReady.push(() => {
        let button = ui.create.system("AI控制", function () {
            var bool = this.classList.toggle("glow");
            game.saveConfig("extension_永夜之境_autoSwap", bool);
        }, true);
        button.classList.toggle("glow", Boolean(game.getExtensionConfig("永夜之境", "autoSwap")));
    });

    lib.announce.subscribe("Noname.Game.Event.GameStart", function () {
        if (game.getExtensionConfig("永夜之境", "replaceCharacter")) {
            var next = game.createEvent("replaceCharacter", false);
            next.player = game.me;
            next.setContent(async function (event, trigger, player) {
                while (true) {
                    var result = await player
                        .chooseTarget("请选择一名角色替换其武将牌")
                        .set("ai", function () {
                            return false;
                        })
                        .forResult();
                    if (result.bool) {
                        var dialog =
                            ui.create.characterDialog("heightset");
                        var select = [1, 2];
                        var result2 = await player
                            .chooseButton(dialog, select)
                            .forResult();
                        if (result2.bool) {
                            lib.element.player.uninit.apply(
                                result.targets[0]
                            );
                            lib.element.player.init.apply(
                                result.targets[0],
                                [result2.links[0], result2.links[1]]
                            );
                        }
                    } else {
                        break;
                    }
                }
            });
        }
    });


    //虚数属性
    game.addNature('xinx_xushu', '虚数', {
        linked: true,
        order: 27,
        lineColor: '#f8d976',
        color: '#f8d976',
        background: '',
    })
    lib.translate._xinx_xushu_skill = '虚数',
        lib.translate._xinx_xushu_skill_info = '当你对目标角色造成虚数伤害时，你选择一项：1.令其无法使用或打出伤害牌直到其下回合结束；2.重铸一张牌。';
    lib.skill._xinx_xushu_skill = {
        trigger: { source: 'damageBegin1' },
        forced: true,
        ruleSkill: true,
        filter(event, player) {
            return event.hasNature('xinx_xushu');
        },
        async content(event, trigger, player) {
            const target = trigger.player;
            const list = ['限制使用', '重铸牌'];
            let result;
            if (target.hasSkill('xinxzhuoshi_skip')) result = { index: 1 };
            else
                result = await player.chooseControl(list)
                    .set('prompt', get.skillTranslation(event.name) + ':请选择一项')
                    .set("choiceList", [`令${get.translation(trigger.player)}无法使用或打出伤害牌直到其下回合结束`, "重铸一张牌"])
                    .set("ai", () => {
                        const player = get.player();
                        const attitude = get.attitude(player, target);
                        if (attitude >= 0 || target.hp <= 2 || target.countCards('he') <= 4) {
                            return 1;
                        }
                        return 0;
                    })
                    .forResult();
            if (result.index == 0) {
                player.line(target);
                target.addTempSkill("xinxzhuoshi_skip", {
                    player: "phaseEnd",
                });
            } else {
                const result = await player.chooseToDiscard("he", true, "chooseonly").set("filterCard", lib.filter.cardRecastable)
                    .set("prompt", "请重铸一张牌").forResult();
                await player.recast(result.cards);
            }
        }
    };
    Object.assign(lib.translate, {
        //自用插件
        _xinxastral_draw: "摸牌",
        _xinxastral_draw_info: "出牌阶段，你可以摸七张牌。",
        _xinxastral_recover: "体力",
        _xinxastral_recover_info: "出牌阶段，你可以回复全部体力或受到体力值-1点伤害。",
        _xinxastral_action: "行动",
        _xinxastral_action_info: "出牌阶段，你可以令其他角色翻面或执行一个额外回合。",
        _xinxastral_gain: "定向",
        _xinxastral_gain_info: "出牌阶段，你可以获得指定牌各一张。",
        _xinxastral_change: "换将",
        _xinxastral_change_info: "游戏开始时，你可以更换一名角色的武将。",
    });



    //添加势力
    //game.addGroup('xing', '杏', '杏', { color: '#8abcd1' },)    // #f7cdbc #c6e6e8 #126e82  59f0f4 346c9c 1fb1b5   {nature: 'watermm',}
    //game.addGroup('xinx', '穹', '穹', { color: '#54BCD9' },) 

    game.addGroup('xinx', '穹', '穹', { color: '#54BCD9', image: 'ext:永夜之境/image/author/xinx_qiong.png' });
    game.addGroup('xing', '杏', '杏', { color: '#8abcd1', image: 'ext:永夜之境/image/author/xinx_xing.png' });



    //扩展武将品质
    lib.arenaReady.push(function () {
        for (var pack of ["xinx1", 'xinx2', 'xinxhuaijiu', 'xinxfenyu']) {
            for (var name in lib.characterPack[pack]) {
                // var rarity=lib.characterPack[pack][name][5];
                // if(['junk','common','rare','epic','legend'].includes(rarity)) lib.rank.rarity[rarity].add(name);
                for (var rarity of ['junk', 'common', 'rare', 'epic', 'legend']) {//废材，普通，精品，史诗，传说
                    if (lib.characterPack[pack][name][4].includes(rarity)) {
                        lib.rank.rarity[rarity].add(name);
                        break;
                    }
                }
            }
        }
    });







}
