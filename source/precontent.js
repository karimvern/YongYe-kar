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

    for (let packName in charPack) {
        let result = await import(`./character/${packName}.js`).catch(e => alert(`在导入武将包“${charPack[packName] && charPack[packName].translate || packName}”时出现错误:\n${e.stack}`));
        let info = result.info;
        if (!info) continue;
        for (let name in info.character) {
            let char = info.character[name];
            if (!char[4]) char[4] = [];
            char[4].push(((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/' + name + '.png');
            //char[4].push('die:ext:永夜之境/audio/die/'+name+'.mp3');
            //char[4].push('die:ext:永夜之境/audio/die:true');


            //武将介绍
            const prefixes = ['xinx', 'fyrh'];
            if (prefixes.some(prefix => name.startsWith(prefix)) && name.includes('_')) {
                let suffix = name.substring(name.indexOf('_') + 1);
                if (suffixIntroDict[suffix] && !lib.characterIntro[name]) {
                    // ib.characterIntro['xinxmeng_liuying'] = "..."
                    lib.characterIntro[name] = suffixIntroDict[suffix];
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
        const xinxCombinition = ['杏', '新杀谋', '势', '谋', '新杀', '汉', '星','骥'];
        for (let n of xinxCombinition) {
            lib.namePrefix.set(`旧${n}`, {
                getSpan: (prefix, name) => `${get.prefixSpan('旧')}${get.prefixSpan(n)}`
            })
            lib.namePrefix.set(`改${n}`, {
                getSpan: (prefix, name) => `${get.prefixSpan('改')}${get.prefixSpan(n)}`
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

    if (lib.config.extension_永夜之境_changelog !== lib.extensionPack.永夜之境.version) {
        lib.game.showChangeLog = function () {
            //更新内容

            let str = [
                '<span style="color:#4682B4; font-weight:bold;">永夜之始:</span> 爱弥斯、知更鸟、花火、仪玄。',
                '<span style="color:#4682B4; font-weight:bold;">风雨如晦:</span> 廷赵云、廷许攸、廷陈群、边让、蝶祖逖、蝶吕雉、岸边、蝶虞姬、蝶卫青霍去病、蝶彭越、蝶陈汤。',
                '<span style="color:#4682B4; font-weight:bold;">杏雅三国:</span> 杏钟会（重做）。',
                '<span style="color:#4682B4; font-weight:bold;">怀旧武将:</span> 改为武将修改。',
                '<span style="color:#32CD32; font-weight:bold;">武将调整:</span> 流萤、叶瞬光、穹、黄泉、符玄、逐曹操、蝶王莽、蝶伍员、旧杏钟会等。',
                '<span style="color:#DAA520; font-weight:bold;">问题修复:</span> 修复已知bug。',
                '<span style="color:#9370DB; font-weight:bold;">视听优化:</span> 部分武将增加牌面css特效及bgm、为钟会、郭嘉添加出牌语音、武将语音补充。'
            ];
            let ul = document.createElement('ul'),
                players = ['xinx_aimisi', 'xinx_zhigengniao', 'xinx_huahuo','xinx_yixuan', 'xinxnew_zhonghui',
                    'fyrh_zhaoyun', 'fyrh_xuyou', 'fyrh_chenqun', 'fyrh_zuti', 'fyrh_lvzhi',
                    'fyrh_yuji', 'fyrh_bianrang', 'fyrh_weiqinghuoqubing', 'fyrh_anbian', 'fyrh_pengyue', 'fyrh_chentang'],
                cards = [];
            ul.style.textAlign = 'left';
            for (let i = 0; i < str.length; i++) {
                let li = document.createElement('li');
                li.innerHTML = str[i];
                ul.appendChild(li);
            }
            game.saveExtensionConfig('永夜之境', 'changelog', lib.extensionPack.永夜之境.version);
            let dialog = ui.create.dialog('永夜之境 ' + lib.extensionPack.永夜之境.version + ' 更新内容：', 'hidden');

            dialog.style.width = '800px';       // 设置更宽的尺寸以容纳10个武将
            dialog.style.maxWidth = '95%';      // 手机端
            dialog.style.left = '0px';          // 强制清除原有的左侧偏移
            dialog.style.right = '0px';         // 强制清除原有的右侧偏移
            dialog.style.margin = '0 auto';

            let lic = ui.create.div(dialog.content);
            lic.style.display = 'block';
            ul.style.display = 'inline-block';
            ul.style.marginLeft = '-40px';
            lic.appendChild(ul);
            if (players.length) {
                dialog.addSmall([players, 'character']);
                dialog.classList.add('forcebutton');
                dialog.classList.add('withbg');
            }
            if (cards.length) {
                for (let i = 0; i < cards.length; i++) {
                    cards[i] = [get.translation(get.type(cards[i])), '', cards[i]];
                }
                dialog.addSmall([cards, 'vcard']);
                dialog.classList.add('forcebutton');
                dialog.classList.add('withbg');
            }
            dialog.open();
            let hidden = false;
            if (!ui.auto.classList.contains('hidden')) {
                ui.auto.hide();
                hidden = true;
            }
            game.pause();
            let control = ui.create.control('确定', () => {
                dialog.close();
                control.close();
                if (hidden) ui.auto.show();
                game.resume();
            });
            lib.init.onfree();
        };
    }


    //阵亡语音播放    
    lib.skill._xinx_die = {
        charlotte: true,
        ruleSkill: true,
        trigger: { player: 'dieBegin' },
        filter(event, player) {
            return lib.config.background_speak && event.player.name;
        },
        firstDo: true,
        direct: true,
        priority: -Infinity,
        lasrDo: true,
        content() {
            game.broadcastAll(function (name) {
                game.playAudio('..', 'extension', '永夜之境/audio/die', name);
            }, trigger.player.name);
        },
    };



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
    lib.skill["_xinxchangeToEquip"] = {
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

    };
    Object.assign(lib.skill, {
        xinxequip: {
            mod: {
                maxEquipBase(player, num) {
                    const info = player.storage?.xinxequip;
                    if (typeof info != "number") return;
                    return num + info;
                },
            },
            mark: true,
            marktext: "装",
            intro: {
                content(num, player) {
                    var str = "<li>装备上限";
                    if (num >= 0) {
                        str += "+";
                    }
                    str += num;
                    str += "<br><li>当前装备上限：";
                    str += player.xinxgetEquipLimit();
                    return str;
                },
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


    //视频播放，参考《无名美化》
    Object.assign(lib.element.content, {
        /**
         * 播放视频通用函数 (ES6 Modern Version)
         * @param {string} src 视频路径
         * @param {object} config 配置对象
         * @param {function} onEnd 播放结束后的回调
         */
        xinxplayVideo(src, config = {}, onEnd) {
            // 获取全局开关设置 (如果没有设置过，默认为 true)
            let globalEnable = lib.config['extension_永夜之境_video_enable'];
            if (globalEnable === undefined) globalEnable = true; // 默认值
            // 2. 如果开关关闭，直接结束
            if (!globalEnable) {
                if (typeof onEnd === "function") {
                    onEnd(); // 立即执行回调，保证 await promise 能解除
                }
                return null; // 不返回 video 元素
            }

            //获取跳过设置
            const globalSkipSetting = lib.config['extension_永夜之境_video_skippable'];
            // 1. 定义默认配置
            const defaults = {
                zIndex: 5000,
                opacity: 1,
                pauseGame: true,
                skippable: false,
                style: {},
                objectFit: "cover",
                muted: false,
                volume: 1.0
            };

            // 2. 合并配置 (使用展开运算符，finalConfig 将包含最终设置)
            const finalConfig = { ...defaults, ...config };

            // 开关检查
            if (!globalSkipSetting) {
                finalConfig.skippable = false;
            }
            // 如果全局开关是“开启”的，并且技能代码里没传参，默认为可跳过
            else if (config.skippable === undefined) {
                finalConfig.skippable = true;
            }

            // 3. 处理路径 (使用 startsWith 判断)
            const videoSrc = (src.startsWith('http') || src.startsWith('file'))
                ? src
                : lib.assetURL + src;

            // 4. 创建视频元素 
            const video = document.createElement("video");
            video.src = videoSrc;
            video.preload = "auto";

            // 使用模板字符串设置样式
            video.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: none;
                z-index: ${finalConfig.zIndex};
                object-fit: ${finalConfig.objectFit};
                opacity: ${finalConfig.opacity};
            `;

            video.muted = finalConfig.muted;
            video.volume = finalConfig.volume;

            // 应用自定义样式覆盖
            if (finalConfig.style) {
                for (const key in finalConfig.style) {
                    video.style[key] = finalConfig.style[key];
                }
            }

            document.body.appendChild(video);

            // 5. 定义结束与清理逻辑 
            const finish = () => {
                if (video._finished) return;
                video._finished = true;

                // 淡出效果
                video.style.transition = "opacity 0.5s";
                video.style.opacity = 0;

                setTimeout(() => {
                    if (video.parentNode) document.body.removeChild(video);
                    // 恢复游戏
                    if (finalConfig.pauseGame) {
                        game.resume();
                    }

                    if (typeof onEnd === "function") {
                        onEnd();
                    }
                }, 500);
            };

            // 事件监听
            video.onended = finish;

            video.onerror = () => {
                console.error(`视频加载失败: ${videoSrc}`);
                finish();
            };

            // 点击跳过
            if (finalConfig.skippable) {
                video.onclick = finish;
                video.ontouchend = finish;
            }

            // 6. 定义播放逻辑
            const startPlay = () => {
                if (finalConfig.pauseGame) {
                    game.pause();
                }
                video.style.display = "block";

                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.warn("自动播放被拦截，尝试静音播放", error);
                        video.muted = true;
                        video.play();
                    });
                }
            };

            // 7. 触发播放
            video.oncanplay = () => {
                if (!video._loaded) {
                    video._loaded = true;
                    startPlay();
                }
            };

            // 处理缓存已加载的情况
            if (video.readyState >= 3) {
                video._loaded = true;
                startPlay();
            }

            return video;
        }
    });


    Object.assign(lib.element.content, {
        /**
         * 通用智能音乐播放函数 (支持随机/顺序/去重/广播)
         * @param {string|string[]} musicList 音乐文件名数组
         * @param {string} folderPath 文件夹路径
         * @param {object} config 配置: { auto: bool(自动续播), sequence: bool(顺序播放), tag: string(记录标识) }
         */
        xinxplayMusic(musicList, folderPath, config = {}) {
            // 1. 参数标准化
            const list = Array.isArray(musicList) ? musicList : [musicList];
            const isSingle = list.length === 1;

            // 默认配置
            const settings = {
                auto: false,      // 是否自动播放下一首
                sequence: false,  // 是否按顺序播放 (false=随机, true=顺序)
                tag: 'global',    // 历史记录标识
                volume: null,     // 音量 (0-1)
                ...config
            };

            // 2. 初始化主机端的历史记录
            if (!_status.xinxMusicHistory) _status.xinxMusicHistory = {};
            if (!_status.xinxMusicHistory[settings.tag]) {
                _status.xinxMusicHistory[settings.tag] = { last: null, played: [] };
            }

            const history = _status.xinxMusicHistory[settings.tag];
            let selection;

            // 3. 选曲核心逻辑
            if (isSingle) {
                selection = list[0];
            } else {
                // --- 顺序播放逻辑 ---
                if (settings.sequence) {
                    // 查找上一首在列表中的位置
                    const lastIndex = list.indexOf(history.last);
                    // 计算下一首 (如果没有上一首，lastIndex为-1，结果为0，即第一首)
                    // 使用取模 (%) 实现循环：最后一首的下一首变回第一首
                    const nextIndex = (lastIndex + 1) % list.length;
                    selection = list[nextIndex];
                }
                // --- 随机播放逻辑---
                else {
                    let candidates = list.filter(name => name !== history.last);
                    if (candidates.length === 0) candidates = list;

                    const unplayed = candidates.filter(name => !history.played.includes(name));

                    if (unplayed.length > 0) {
                        selection = unplayed.randomGet();
                    } else {
                        history.played = []; // 重置循环
                        selection = candidates.randomGet();
                    }
                }
            }

            // 4. 更新主机记录
            history.last = selection;
            if (!settings.sequence) history.played.push(selection); // 顺序模式不需要记录played列表

            // 5. 构建路径
            const cleanPath = folderPath.endsWith('/') ? folderPath : folderPath + '/';
            const fullUrl = lib.assetURL + cleanPath + selection + ".mp3";

            // 6. 全场广播
            // 注意：传入 selection 是为了让客户端也能更新自己的历史记录，保证下次自动切歌时顺序正确
            game.broadcastAll(function (url, selection, isSingle, settings, originalArgs) {
                // --- A. 更新客户端本地历史记录 ---
                // 这步至关重要：联机时，客户端需要知道当前播的是啥，才能算出下一首是啥
                if (!_status.xinxMusicHistory) _status.xinxMusicHistory = {};
                if (!_status.xinxMusicHistory[settings.tag]) {
                    _status.xinxMusicHistory[settings.tag] = { last: null, played: [] };
                }
                const localHistory = _status.xinxMusicHistory[settings.tag];
                localHistory.last = selection;
                if (!settings.sequence && !localHistory.played.includes(selection)) {
                    localHistory.played.push(selection);
                }

                // --- B. 播放音频 ---
                const audio = ui.backgroundMusic;
                if (settings.volume !== null) audio.volume = settings.volume;
                audio.src = url;

                // 清理旧监听
                if (audio._xinx_onend_handler) {
                    audio.removeEventListener('ended', audio._xinx_onend_handler);
                    delete audio._xinx_onend_handler;
                }

                // --- C. 自动续播处理 ---
                if (settings.auto) {
                    if (isSingle) {
                        audio.loop = true; // 单曲直接loop
                    } else {
                        audio.loop = false;
                        // 定义结束后的回调
                        audio._xinx_onend_handler = function () {
                            // 递归调用：使用相同的参数，再次进入函数
                            // 因为 update 了 localHistory.last，下次进来时会基于当前这首计算下一首
                            lib.element.content.xinxplayMusic(
                                originalArgs[0], // list
                                originalArgs[1], // path
                                originalArgs[2]  // config
                            );
                        };
                        audio.addEventListener('ended', audio._xinx_onend_handler);
                    }
                } else {
                    audio.loop = false;
                }

                audio.play().catch(e => console.log('BGM Play prevented', e));

            }, fullUrl, selection, isSingle, settings, [list, folderPath, config]);

            return selection;
        }
    });



    // ==========================================
    // 角色出牌语音注入模块
    // ==========================================
    const myExtension = "永夜之境";
    const charSuffixes = ["zhonghui", "guojia"];
    // 改用对象来分类存放不同角色的语音
    // { "zhonghui": ["sha", "nanman"], "xxxx": ["sha", "wuzhong"] }
    let customVoices = {};
    // ==========================================
    // 自动化读取所有角色的文件夹
    // ==========================================
    if (typeof require !== 'undefined') {
        try {
            const fs = require('fs');
            // 循环遍历每一个后缀
            for (let suffix of charSuffixes) {
                const audioDir = `${__dirname}/extension/${myExtension}/audio/${suffix}`;

                if (fs.existsSync(audioDir)) {
                    // 读取该角色文件夹下的 mp3
                    customVoices[suffix] = fs.readdirSync(audioDir)
                        .filter(file => file.toLowerCase().endsWith('.mp3'))
                        .map(file => file.slice(0, -4));

                    console.log(`[${myExtension}] 成功自动加载 ${suffix} 的专属语音：`, customVoices[suffix]);
                } else {
                    // 如果文件夹不存在，给个空数组防报错
                    customVoices[suffix] = [];
                }
            }
        } catch (err) {
            console.error(`[${myExtension}] 自动读取语音文件夹失败：`, err);
        }
    }

    // 兜底机制：如果没读取到任何东西（比如在手机端），启用手动配置的字典
    if (Object.keys(customVoices).length === 0) {
        // 手机端的兜底数组也按角色分开写
        customVoices = {
            "zhonghui": [
                "bingliang", "chiling", "diaohulishan", "guohe",
                "gz_guguoanbang", "gz_haolingtianxia", "gz_kefuzhongyuan",
                "huogong", "huoshaolianying", "jiedao", "jiu",
                "juedou", "lebu", "lianjunshengyan", "lulitongxin",
                "nanman", "sha", "shan", "shandian", "sha_fire",
                "sha_thunder", "shuiyanqijun", "shunshou", "tao",
                "taoyuan", "tiesuo", "wanjian", "wenhe", "wugu",
                "wuxie", "wuzhong", "yiyi", "yuanjiao", "zhibi"
            ],
            "guojia": [
                "bingliang", "diaohulishan", "guohe", "huogong", "jiedao",
                "jiu", "juedou", "lebu", "lianjunshengyan", "lulitongxin",
                "nanman", "sha", "shan", "shandian", "sha_fire", "sha_thunder",
                "shuiyanqijun", "shunshou", "tao", "taoyuan", "tiesuo", "wanjian",
                "wugu", "wuxie", "wuzhong", "yuanjiao", "zhibi",
            ]
        };
        console.log(`[${myExtension}] 已启用兜底语音字典。`);
    }

    // ==========================================
    // 角色匹配函数：返回匹配到的具体【后缀名】
    // ==========================================
    const getMatchSuffix = function (name) {
        if (!name) return null;
        // 遍历所有配置的后缀，看看当前武将名是以哪个结尾的
        for (let suffix of charSuffixes) {
            if (name.endsWith(suffix)) {
                return suffix; // 返回匹配到的名字，比如 "zhonghui"
            }
        }
        return null;
    };

    // ==========================================
    // 拦截：动态替换出牌语音
    // ==========================================
    const originPlayAudio = game.playAudio;
    game.playAudio = function (...args) {
        // 【检查】：如果设置里关闭了开关，直接执行原版语音逻辑
        if (lib.config && lib.config.extension_永夜之境_custom_voice_switch === false) {
            return originPlayAudio.apply(this, args);
        }

        if (args[0] === 'card' && _status.event && _status.event.player) {
            const player = _status.event.player;

            // 获取到底是哪个后缀匹配上了（优先主将，其次副将1、2）
            const matchedSuffix = getMatchSuffix(player.name) || getMatchSuffix(player.name1) || getMatchSuffix(player.name2);

            // 如果匹配到了某个配置的后缀
            if (matchedSuffix) {
                const cardName = args.length >= 3 ? args[2] : args[1];
                // 去对应角色的专属语音列表里找，有没有这张牌
                if (customVoices[matchedSuffix] && customVoices[matchedSuffix].includes(cardName)) {
                    // 自动拼装路径：ext:永夜之境/audio/匹配到的名字/卡牌名.mp3
                    return originPlayAudio.call(this, `ext:${myExtension}/audio/${matchedSuffix}/${cardName}.mp3`);
                }
            }
        }
        // 条件不满足，走原版逻辑
        return originPlayAudio.apply(this, args);
    };
    // ==========================================
    //附加功能：在技能中手动触发
    // ==========================================
    Object.assign(lib.element.content, {
        // step.playMyAudio('zhonghui', 'nanman')
        playMyAudio: function (suffixName, cardName) {
            if (customVoices[suffixName] && customVoices[suffixName].includes(cardName)) {
                game.playAudio(`ext:${myExtension}/audio/${suffixName}/${cardName}.mp3`);
            }
        }
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