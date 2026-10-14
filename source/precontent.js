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
import { installBackgroundWatcher } from './background.js';

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


    // 让开始界面也能应用扩展设置里选中的游戏背景
    installBackgroundWatcher();

    await initExtraContent(config, pack);


    const dieWordsDict = {
        //"xinx_liuying": "",
    };

    //皮肤多形态兜底用：形态名 -> 原皮形态图路径（extension/...）
    const skinOriginMap = {};

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
                    //收集形态名→原皮形态图路径，供皮肤多形态兜底使用
                    const originSrc = form[1]?.[0];
                    if (typeof form[0] == "string" && typeof originSrc == "string" && originSrc.startsWith("ext:")) {
                        skinOriginMap[form[0]] = originSrc.replace(/^ext:/, "extension/");
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
        lib.namePrefix.set('ka', {
            color: '#97C3ED',
            nature: 'watermm',
            showName: 'ka',
        });

        const xinxCombinition = ['杏', '新杀谋', '势', '谋', '新杀', '汉', '星', '骥', '闪', '族', 'SP', '界','手杀界','神','夏','手杀',
            '乐', '华', 'OL谋', 'OL', '廷', '玄蝶', 'OL界', '手杀神', '夏', '手杀界', '族', '☆', '友', '雁翎','新杀|神','嗔','武'];
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
            lib.namePrefix.set(`谋${n}`, {
                getSpan: (prefix, name) => `${get.prefixSpan('谋')}${get.prefixSpan(n)}`
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

    //十周年UI手杀（移动版）样式专属兜底：group为空/未知/不在有效列表时，手杀UI默认用 name2_qun.png
    if (lib.config.extension_十周年UI_newDecadeStyle !== "off") {
        // 非手杀样式：直接跳过
    } else if (lib.config.extensions && !lib.config.extensions.includes("十周年UI")) {
        // 十周年UI未启用：直接跳过
    } else {
        try {
            const validGroups = ["wei", "shu", "wu", "qun", "ye", "jin", "daqin", "western", "shen", "key", "Han", "qin",'xinx','xing'];
            //自定义势力框图（永夜之境），key为势力名，value为图片路径
            const customGroupImages = {
                xinx: lib.assetURL + "extension/永夜之境/image/UI/name2_xinx.png",
                xing: lib.assetURL + "extension/永夜之境/image/UI/name2_xing.png",
            };
            let pluginPatched = false;
            let setterPatched = false;
            const timer = setInterval(() => {
                if (pluginPatched && setterPatched) {
                    clearInterval(timer);
                    return;
                }
                //等待十周年UI就绪：window.app 在其precontent创建，window.decadeUI与group setter在其content创建
                if (!window.app || !Array.isArray(window.app.plugins)) return;
                if (window.decadeUI?.config?.newDecadeStyle !== "off") return;

                //character 皮肤插件：详情弹窗/露头面板的势力框
                if (!pluginPatched) {
                    const plugin = window.app.plugins.find(p => p && typeof p.getGroupBackgroundImage == "function");
                    if (plugin) {
                        const orig = plugin.getGroupBackgroundImage;
                        plugin.getGroupBackgroundImage = function (group) {
                            //自定义势力（xinx/xing）：使用永夜之境自定义势力框图
                            const customImage = customGroupImages[group];
                            if (customImage) {
                                return customImage;
                            }
                            if (!group || group === "unknown" || !validGroups.includes(group)) {
                                group = "qun";
                            }
                            return orig.call(this, group);
                        };
                        pluginPatched = true;
                    }
                }

                //玩家头像旁的势力框：覆写 player.group 的 setter（内部走 handleGroupStyleV2）
                if (!setterPatched) {
                    const desc = Object.getOwnPropertyDescriptor(lib.element.player, "group");
                    if (desc && typeof desc.set == "function") {
                        const origSet = desc.set;
                        Object.defineProperty(lib.element.player, "group", {
                            configurable: true,
                            enumerable: desc.enumerable,
                            get() {
                                return this._group;
                            },
                            set(group) {
                                const real = group;
                                //自定义势力（如xinx/xing）：直接用永夜之境自定义势力框图，不走十周年UI默认路径
                                const customImage = customGroupImages[real];
                                if (customImage) {
                                    this._group = real;
                                    this.node.campWrap.dataset.camp = get.character(this.name)?.groupBorder || real;
                                    const campName = this.node.campWrap?.node?.campName;
                                    if (campName) {
                                        campName.innerHTML = "";
                                        campName.style.backgroundImage = `url("${customImage}")`;
                                    }
                                    return;
                                }
                                //手杀样式：非法势力渲染兜底qun图，但不改真实势力
                                if (group && !validGroups.includes(group)) {
                                    group = "qun";
                                }
                                origSet.call(this, group);
                                //恢复真实势力（防止内部把 _group / dataset.camp 改成qun）
                                if (real && real !== group) {
                                    this._group = real;
                                    this.node.campWrap.dataset.camp = get.character(this.name)?.groupBorder || real;
                                }
                            },
                        });
                        setterPatched = true;
                    }
                }
            }, 1000);
            setTimeout(() => clearInterval(timer), 30000);
        } catch (e) {
            console.warn("十周年UI势力框兜底补丁失败：", e);
        }
    }


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
        //获得一个勾玉：体力上限与体力同时+1（独立事件，可与本体loseHp等事件一样被await/触发时机）
        addxGouyu(num) {
            var next = game.createEvent("addxGouyu");
            next.player = this;
            next.num = (typeof num === "number") ? num : 1;
            next.setContent("addxGouyu");
            return next;
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
        //获得勾玉
        async addxGouyu(event, trigger, player) {
            const { num } = event;
            if (num <= 0) {
                event._triggered = null;
                return;
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
            player.$damagepop(num, "wood");
            game.log(player, `获得了${get.cnNumber(num)}个勾玉`);
            event.originalHp = player.getHp();
            event.originalMaxHp = player.maxHp;
            player.maxHp += num;
            event.changedMaxHp = player.maxHp - event.originalMaxHp;
            event.changedHp = 0;
            player.update();
            player.changeHp(num, false);
        },
    });

    //叠置牌机制的封装函数（触发逻辑在 globalskill.js 的 _xinxqp_diezhi 全局技能）。
    //叠置数据：牌 storage.xinxqp_stack（叠置列表）、storage.xinxqp_master（叠置归属）；
    //壳牌 gaintag 中 "xinxqp:" 前缀载荷为断线重连的数据通道。
    //授予叠置能力的技能：init 中调用 lib.skill._xinxqp_diezhi.install()，效果里调用 game.xinxqp.stackOn(player, base, tops)
    game.xinxqp = {
        //读取壳牌（底牌）上的叠置列表（从下到上的叠置顺序；自动初始化空数组）
        getStack(card) {
            if (!card?.storage) return [];
            if (!Array.isArray(card.storage.xinxqp_stack)) card.storage.xinxqp_stack = [];
            return card.storage.xinxqp_stack;
        },
        //============查询接口（技能与结算统一从这里读叠置数据，勿直接摸 storage）============
        //是否为带叠置的壳牌（底牌）
        isShell(card) {
            return card?.storage?.xinxqp_stack?.length > 0;
        },
        //叠置数量（card非壳牌时为0）
        countStack(card) {
            return card?.storage?.xinxqp_stack?.length || 0;
        },
        //最上方（最后叠置）的一张叠置牌；无叠置时返回null
        getTopCard(card) {
            const stack = this.getStack(card);
            return stack[stack.length - 1] || null;
        },
        //最下方底牌：card本身是壳牌时返回自身；card是叠置牌（或任意牌）时反查其所属壳牌（含装备区），找不到返回null
        getBase(card) {
            if (!card) return null;
            if (this.isShell(card)) return card;
            for (const player of game.players) {
                for (const hand of player.getCards("he")) {
                    if (this.getStack(hand).includes(card)) return hand;
                }
            }
            return null;
        },
        //获取叠置整体中的实体牌：
        //默认返回 [最下方底牌, ...叠置牌]（叠置牌按从下到上的叠置顺序）；
        //options.includeBase为false时只返回叠置牌；card可为壳牌或其叠置牌（内部自动定位底牌）；非有效叠置返回[]
        getAllCards(card, options) {
            const base = this.getBase(card);
            if (!base) return [];
            const stack = this.getStack(base).slice();
            if (options?.includeBase === false) return stack;
            return [base, ...stack];
        },
        //============事件取数（失去叠置牌时从lose/loseAsync事件中取数据）============
        //解析壳牌gaintag中的"xinxqp:"载荷 → [suit, number, name, nature, cardid] 列表（非载荷返回[]）
        parsePayload(payload) {
            if (typeof payload != "string" || !payload.startsWith("xinxqp:")) return [];
            //"xinxqp:"前缀长度为7，slice(7)去除前缀（此前slice(6)会把冒号带进花色字段）
            return payload.slice(7).split("|").map(seg => seg.split(",")).filter(info => info.length >= 5);
        },
        //按cardid反查实体牌（lib.cardOL为引擎的cardid→牌对象映射，牌在任何区域都能查到）
        getCardsByIds(ids) {
            return (ids || []).map(id => lib.cardOL[id]).filter(card => card);
        },
        //获取一次失去事件中，所失去壳牌上的叠置实体牌（默认不含底牌）：
        //①storage未清（收回机制未先执行）：直接读壳牌storage；
        //②已被收回机制清理：读lose结算存档gaintag_map中的载荷，按cardid经lib.cardOL反查实体牌（无论牌被收回手牌还是留在ui.special）；
        //③使用/打出壳牌：沿事件祖先链读useCard/respond的xinxqp_stash暂存（仅当失去的牌就是该壳牌本体时计入）
        //覆盖手牌与装备区（hs+es）；options.includeBase为true时，每张底牌插在其叠置牌之前返回（[底牌,...叠置牌,底牌2,...]）
        getLostStackCards(event, player, options) {
            const evt = event.name == "loseAsync" ? event.getl?.(player) : event;
            const hs = (evt?.hs || []).concat(evt?.es || []);
            const gaintag_map = evt?.gaintag_map || {};
            const cards = [];
            for (const shell of hs) {
                let stack = null;
                if (this.isShell(shell)) {
                    stack = this.getStack(shell);
                } else {
                    const payload = (gaintag_map[shell.cardid] || []).find(
                        tag => typeof tag == "string" && tag.startsWith("xinxqp:")
                    );
                    if (payload) stack = this.getCardsByIds(this.parsePayload(payload).map(info => info[4]));
                }
                if (stack?.length) {
                    if (options?.includeBase) cards.push(shell);
                    cards.addArray(stack);
                }
            }
            let anc = event;
            while (anc) {
                if (anc.xinxqp_stash?.length) {
                    if ((anc.cards || []).some(c => hs.includes(c))) {
                        if (options?.includeBase) cards.addArray(anc.cards.filter(c => hs.includes(c)));
                        cards.addArray(anc.xinxqp_stash);
                    }
                    break;
                }
                anc = anc.parent;
            }
            return cards;
        },
        //向上偏移的实色阴影，模拟卡牌层叠
        stackShadows: [
            "0 -3px 0 #bdbdbd",
            "0 -3px 0 #bdbdbd, 0 -6px 0 #9e9e9e",
            "0 -3px 0 #bdbdbd, 0 -6px 0 #9e9e9e, 0 -9px 0 #7f7f7f",
            "0 -3px 0 #bdbdbd, 0 -6px 0 #9e9e9e, 0 -9px 0 #7f7f7f, 0 -12px 0 #606060",
        ],
        //重写壳牌gaintag标签：隐藏"xinxqp:"载荷，显示"叠置×N"与原有标签
        refreshGaintag(card, num) {
            if (!card?.node?.gaintag) return;
            const list = (card.gaintag || []).filter(tag => !String(tag).startsWith("xinxqp:"));
            let str = "";
            for (let i = 0; i < list.length; i++) {
                const tag = list[i];
                let trans = get.translation(tag);
                if (trans == tag && tag.startsWith("eternal_")) trans = get.translation(tag.slice(8));
                if (trans != "invisible") str += trans + (i < list.length - 1 ? " " : "");
            }
            if (num > 0) str += (str ? " " : "") + "叠置×" + num;
            card.node.gaintag.innerHTML = str;
        },
        //显示层兜底（幂等安装）：包装Card.addGaintag，重渲染时隐藏"xinxqp:"载荷并显示"叠置×N"
        installUI() {
            const proto = lib.element.Card?.prototype || lib.element.card?.prototype;
            if (!proto || proto._xinxqp_addGaintag) return;
            proto._xinxqp_addGaintag = proto.addGaintag;
            proto.addGaintag = function (gaintag) {
                const result = proto._xinxqp_addGaintag.apply(this, arguments);
                const tags = this.gaintag || [];
                const payload = tags.find(tag => typeof tag == "string" && tag.startsWith("xinxqp:"));
                //仅按storage实时叠置数显示；载荷只负责被隐藏，不据此补标签（引擎lose结算会剥离并暂存载荷，
                //若按载荷补标签，叠置收回后残留的"叠置×N"会跟着牌进入获得者手牌区）
                if (payload || this.storage?.xinxqp_stack?.length) {
                    game.xinxqp.refreshGaintag(this, this.storage?.xinxqp_stack?.length || 0);
                }
                return result;
            };
        },
        //刷新一名角色手牌/装备区的叠置显示（堆叠阴影、标签、右键简介）
        refreshVisual(player) {
            if (!player?.node?.handcards1) return;
            //简介适配挂在卡的父容器上（get/index.js按parentNode.cardMod读取），手牌与装备区都要注册
            const introMod = node => {
                const card = node.link || node;
                const stack = card.storage?.xinxqp_stack;
                if (!stack?.length) return;
                const list = stack.map(cardx => `${get.translation(cardx)}`).join("、");
                return ["叠置", `此牌叠置有${stack.length}张牌：${list}。你失去叠置牌后，收回此牌剩余的实体牌，若为使用或打出而失去，则可以使用这些牌，然后收回未使用的牌。`];
            };
            for (const hand of [player.node.handcards1, player.node.handcards2]) {
                if (!hand) continue;
                hand.cardMod ??= {};
                hand.cardMod._xinxqp_diezhi ??= introMod;
            }
            if (player.node.equips) {
                player.node.equips.cardMod ??= {};
                player.node.equips.cardMod._xinxqp_diezhi ??= introMod;
            }
            for (const card of player.getCards("he")) {
                const num = card.storage?.xinxqp_stack?.length || 0;
                this.refreshGaintag(card, num);
                card.style.boxShadow = num ? this.stackShadows[Math.min(num, this.stackShadows.length) - 1] : "";
            }
        },
        //清除一枚壳牌的全部叠置痕迹（storage、载荷gaintag、视觉）
        clearShell(shell) {
            if (!shell) return;
            if (shell.storage) delete shell.storage.xinxqp_stack;
            if (Array.isArray(shell.gaintag)) {
                const rest = shell.gaintag.filter(tag => !String(tag).startsWith("xinxqp:"));
                //无条件重写显示：引擎lose结算会先剥离载荷gaintag（数组前后长度相等），
                //若因此短路跳过addGaintag，此前被包装重新写回的"叠置×N"将残留在显示层
                shell.addGaintag(rest);
            } else if (shell.node?.gaintag) {
                shell.node.gaintag.innerHTML = "";
            }
            if (shell.style?.boxShadow) shell.style.boxShadow = "";
        },
        //叠置变动后：录像记录+宿主载荷维护+联机同步+本地刷新
        syncShell(player, shell) {
            const stack = this.getStack(shell);
            game.addVideo("skill", player, ["_xinxqp_diezhi", [shell.cardid, get.cardsInfo(stack)]]);
            if (!game.online) {
                //宿主侧将叠置编码进壳牌gaintag：手牌gaintag随getState序列化，是断线重连的数据通道
                const gts = (shell.gaintag || []).filter(tag => !String(tag).startsWith("xinxqp:"));
                if (stack.length) {
                    gts.push("xinxqp:" + stack.map(card => [card.suit, card.number, card.name, card.nature || "", card.cardid].join(",")).join("|"));
                }
                shell.addGaintag(gts);
            }
            game.broadcastAll(function (player, shell, stack) {
                shell.storage.xinxqp_stack = stack;
                game.xinxqp.refreshVisual(player);
            }, player, shell, stack);
        },
        //清除壳牌并同步所有客户端
        broadcastClear(player, shells) {
            for (const shell of shells) {
                game.addVideo("skill", player, ["_xinxqp_diezhi", [shell.cardid, []]]);
            }
            game.broadcastAll(function (player, shells) {
                for (const shell of shells) {
                    game.xinxqp.clearShell(shell);
                }
                game.xinxqp.refreshVisual(player);
            }, player, shells);
        },
        //整体并入：将壳牌top连同其叠置一起叠加到base上（不分解、不收回）
        mergeShell(player, base, top) {
            const topStack = this.getStack(top);
            if (!topStack.length) return;
            this.getStack(base).push(top, ...topStack.splice(0));
            this.clearShell(top);
            game.addVideo("skill", player, ["_xinxqp_diezhi", [top.cardid, []]]);
            this.syncShell(player, base);
            game.broadcastAll(function (player, top) {
                game.xinxqp.clearShell(top);
                game.xinxqp.refreshVisual(player);
            }, player, top);
        },
        //核心操作：将tops按选择顺序叠置于base上（并入壳牌原有叠置→移入ui.special暂存→标记归属→登记→同步）
        async stackOn(player, base, tops) {
            //先整体并入所选壳牌自带的叠置（不分解收回，避免lose分支按离手处理）
            for (const top of tops) {
                if (Array.isArray(top.storage?.xinxqp_stack) && top.storage.xinxqp_stack.length) {
                    this.mergeShell(player, base, top);
                }
            }
            //牌可能来自任意角色的手牌/装备/判定区：按当前拥有者分组移入ui.special
            const groups = new Map();
            for (const top of tops) {
                const owner = get.owner(top) || player;
                if (!groups.has(owner)) groups.set(owner, []);
                groups.get(owner).push(top);
            }
            for (const [owner, cards] of groups.entries()) {
                owner.$give(cards, player, false);
                await owner.lose(cards, ui.special, "visible");
            }
            for (const top of tops) {
                if (!game.online) top.storage.xinxqp_master = player;
                if (!this.getStack(base).includes(top)) this.getStack(base).push(top);
                game.log(player, "将", top, "叠置于", base, "上");
            }
            this.syncShell(player, base);
        },
        //录像回放：按cardid恢复叠置
        video(player, info) {
            const shell = lib.cardOL[info?.[0]];
            if (!shell) return;
            shell.storage.xinxqp_stack = get.infoCards(info[1] || []);
            game.xinxqp.refreshVisual(player);
        },
        //断线重连：在玩家与手牌区重建完成后，依据壳牌gaintag载荷恢复叠置数据与显示
        rebuildAll() {
            for (const player of game.players) {
                for (const card of player.getCards("he")) {
                    const payload = (card.gaintag || []).find(tag => typeof tag == "string" && tag.startsWith("xinxqp:"));
                    if (!payload) continue;
                    const stack = [];
                    for (const info of this.parsePayload(payload)) {
                        const item = get.infoCard([info[0], parseInt(info[1]) || 0, info[2], info[3] || "", info[4]]);
                        if (get.itemtype(item) == "card") {
                            if (item.parentNode !== ui.special) item.goto(ui.special);
                            stack.push(item);
                        }
                    }
                    card.storage.xinxqp_stack = stack;
                }
                this.refreshVisual(player);
            }
        },
        //清除一名角色的全部叠置：壳牌（手牌/装备区）叠置与ui.special遗留牌收回手牌（授予技能被移除时调用）
        clearAll(player) {
            const shells = player.getCards("he").filter(card => card.storage?.xinxqp_stack?.length);
            const spare = Array.from(ui.special.childNodes).filter(card => card.storage?.xinxqp_master === player);
            for (const card of spare) delete card.storage.xinxqp_master;
            for (const shell of shells) {
                for (const card of shell.storage.xinxqp_stack) delete card.storage?.xinxqp_master;
                player.gain(shell.storage.xinxqp_stack, "gain2");
            }
            if (spare.length) player.gain(spare, "gain2");
            if (shells.length || spare.length) this.broadcastClear(player, shells);
        },
    };



    //皮肤多形态渲染兜底：凡是渲染"skin/武将/皮肤名/形态名.png"这类路径（预览按钮或头像数组），
    //缺文件时改为显示原皮形态图；存在性检查按路径缓存，首次检查后即为同步
    try {
        const _skinFileCache = {};
        const _resolveSkinPath = path => {
            if (typeof path != "string" || !path.includes("/skin/")) return null;
            const formName = path.slice(path.lastIndexOf("/") + 1).replace(/\.[^.]+$/, "");
            const origin = skinOriginMap[formName];
            if (!origin || path === origin) return null;
            return { path, origin };
        };
        const _origSetBackgroundImage = HTMLDivElement.prototype.setBackgroundImage;
        HTMLDivElement.prototype.setBackgroundImage = function (img) {
            const node = this;
            const fixPath = path => {
                const r = _resolveSkinPath(path);
                if (!r) return { fixed: false, path };
                const cached = _skinFileCache[r.path];
                if (cached !== undefined) return { fixed: true, path: cached === 1 ? r.path : r.origin };
                return { fixed: false, needCheck: r };
            };
            if (Array.isArray(img)) {
                const result = img.map(fixPath);
                const pending = result.filter(item => item.needCheck);
                if (!pending.length) {
                    return _origSetBackgroundImage.call(node, result.map(item => item.path));
                }
                if (!game.promises?.checkFile) {
                    return _origSetBackgroundImage.call(node, img);
                }
                Promise.all(pending.map(item => {
                    return game.promises?.checkFile?.(item.needCheck.path).then(exists => {
                        _skinFileCache[item.needCheck.path] = exists;
                    }).catch(() => {
                        _skinFileCache[item.needCheck.path] = -1;
                    });
                })).then(() => {
                    _origSetBackgroundImage.call(node, img.map(item => fixPath(item).path));
                });
                return node;
            }
            const single = fixPath(img);
            if (!single.needCheck) {
                return _origSetBackgroundImage.call(node, single.fixed ? single.path : img);
            }
            if (!game.promises?.checkFile) {
                return _origSetBackgroundImage.call(node, img);
            }
            game.promises?.checkFile?.(single.needCheck.path).then(exists => {
                _skinFileCache[single.needCheck.path] = exists;
                _origSetBackgroundImage.call(node, exists === 1 ? single.needCheck.path : single.needCheck.origin);
            }).catch(() => {
                _skinFileCache[single.needCheck.path] = -1;
                _origSetBackgroundImage.call(node, single.needCheck.origin);
            });
            return node;
        };
    } catch (e) {
        console.warn("皮肤多形态渲染兜底补丁失败：", e);
    }


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
