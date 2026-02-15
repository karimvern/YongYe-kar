import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import { voices } from './voices.js';
import { poptip } from './poptip.js';
import { characterIntro } from './characterIntro.js';
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
        translate: '<span style=\'color:#03f7fe\'>怀旧武将</span>',
    },
    xinxfenyu: {
        translate: '<span style=\'color:#03f7fe\'>风雨如晦</span>',
    },
};
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
        const xinxCombinition = ['杏', '新杀谋', '势', '谋'];
        for (let n of xinxCombinition) {
            lib.namePrefix.set(`旧${n}`, {
                getSpan: (prefix, name) => `${get.prefixSpan('旧')}${get.prefixSpan(n)}`
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
    // Object.assign(lib.characterIntro, characterIntro);
    game.import('character', function () {
        return {
            name: "永夜之境_intro", 
            characterIntro: characterIntro
        };
    });
    // 导入 poptip
    Object.assign(lib.poptip, poptip);
   
    
    //虚无卡牌
    lib.skill["_xinx_ethereal"] = {
        ruleSkill: true,
        charlotte: true,
        silent: true,
        lastDo: true,
        trigger: { player: "phaseJieshuBegin" },
        forced: true,
        filter(event, player) {
            const targetCards = ['xinxguiji','xinxmingxinzhiyue']; 
            return player.hasCard(card => targetCards.includes(card.name), 'h');
            //return player.hasCard(card => card.name === 'xinxguiji', 'h');
        },
        async content(event, trigger, player) {
            const targetCards = ['xinxguiji','xinxmingxinzhiyue']; 
            const cards = player.getCards('h', card => targetCards.includes(card.name));
               // card.name === 'xinxguiji');
            if (cards.length) {
                // 2. 移入场外(special)并视觉提示
                player.lose(cards, ui.special);
                game.log(player, '的手牌', cards, '因【虚无】效果被销毁');
                // 3. 销毁
                game.delay(0, function () {
                    for (let i = 0; i < cards.length; i++) {
                        cards[i].delete();
                    }
                });
            }
        }
    };
    //记忆卡牌
    lib.skill["_xinx_jiyi"] = {
        ruleSkill: true,
        charlotte: true,
        silent: true,
        firstDo: true,
        trigger: {
            player: "loseAfter",
            global: "loseAsyncAfter",
            //global: ["loseAsyncAfter","equipAfter","addJudgeAfter","gainAfter","addToExpansionAfter"],
        },
        forced: true,
        filter(event, player) {
            if (event.getParent().name == "useCard") {
                return false;
            }
            const targetNames = ['xinxruwosuoshu','xinxwangshizhiyue'];
            //return event.getl(player)?.cards?.some(card => !get.owner(card)&& targetNames.includes(get.name(card)));
            if (event.type != "discard") {
                return false;
            }
            const data = event.getl && event.getl(player);
            if (!data || !data.cards || !data.cards.length) return false;
            return data.cards.some(card => {
                return targetNames.includes(get.name(card));
            });
        },
        async content(event, trigger, player) {
            const targetCards = ['xinxruwosuoshu','xinxwangshizhiyue'];
            /* const cards = trigger.getl(player).cards.filter(card => 
                !get.owner(card)&&targetCards.includes(get.name(card))); */
            const cards = trigger.getl(player).cards.filter(card => {
                return targetCards.includes(get.name(card));
            });
            if (cards.length) {
                game.log(player, '的', cards, '触发了【记忆】效果');
                player.storage.xinx_jiyi_unlock = true;
                for (let card of cards) {
                    await player.chooseUseTarget(card, true, false);
                }
                delete player.storage.xinx_jiyi_unlock;
            }
        },
        mod: {
            cardEnabled(card, player) {
                const targetCards = ['xinxruwosuoshu', 'xinxwangshizhiyue'];
                if (targetCards.includes(get.name(card))) {
                    if (!player.storage.xinx_jiyi_unlock) {
                        return false;
                    }
                }
            }
        },
    };
    //毁灭卡牌
    lib.skill["_xinx_huimie"] = {
        ruleSkill: true,
        charlotte: true,
        silent: true,
        firstDo: true,
        trigger: {
            player: "useCard",
        },
        forced: true,
        filter(event, player) {
            const targetNames = ['xinxqinchen','xinxyishenweiju']; 
            return targetNames.includes(get.name(event.card));
        },
        async content(event, trigger, player) {
            await player.damage(1,'fire','nosource');
        }
    };
    //【勘破】卡牌
    lib.skill["_xinxkanpo_effect"] = {
        trigger: {
            target: "useCardToTarget",
        },
        charlotte: true,
        forced: true,
        silent: true,
        ruleSkill: true,
        filter(event, player) {
            return get.tag(event.card, 'damage') &&
                player.hasCard(card => card.name === 'xinxkanpo', 'h');
        },
        async content(event, trigger, player) {
            const result = await player.chooseToUse({
                filterCard: { name: 'xinxkanpo' }, 
                prompt: `是否使用【勘破】取消 ${get.translation(trigger.card)}的所有目标？`,
                prompt2: "取消目标后，你可以对来源使用一张伤害牌",
                ai1(card) {
                    const hasCounter = player.hasCard(c => get.tag(c, 'damage') > 0, 'h');
                    // 如果有伤害牌优先使用 (返回较大数值)
                    if (hasCounter) return 15;
                    // 2. 如果没有伤害牌，进入防御判断
                    // 规则：如果是杀，且有闪，则保留勘破 
                    if (trigger.card.name.includes('sha') && player.hasCard('shan')) {
                        return 0;
                    }
                    // 3. 其他情况（如南蛮入侵、决斗，或者没有闪面对杀）
                    // 使用默认防御价值计算，如果对自己有负面效果则使用
                    if (get.effect(player, trigger.card, trigger.player, player) < 0) {
                        return 10;
                    }
                    return 0;
                }
            })
            .forResult();
    
            if (result.bool) {
                game.playAudio("../extension/永夜之境/audio/card/xinxkanpo.mp3");
                trigger.targets.length = 0;
                trigger.all_excluded = true;
                 game.log(player, '使用了', result.cards[0], '取消了', trigger.card,'的所有目标');
                const target = trigger.player; 
                let cards = player.getCards('hs', card => get.tag(card, 'damage'));
                let damages = cards.filter(card => player.canUse(card, target, false));
                if (target && target.isIn() && damages.length) {
                    await player.chooseToUse(function(card, player) {
                        return get.tag(card, 'damage');
                    }, target)
                    .set('prompt', '【勘破】生效：是否对 ' + get.translation(target) + ' 使用一张伤害牌')
                    .set('addCount', false) 
                    .set('noplay', true) 
                    .set('nodistance', true) 
                }
            }
        }
    };
    //【玄蚀】卡牌
    lib.skill["_xinxxuanshi_effect"] = {
        trigger: {
            player: "gainAfter",
            global: "loseAsyncAfter",
        },
        charlotte: true,
        forced: true,
        silent: true,
        ruleSkill: true,
        filter(event, player) {
            return event.getg && event.getg(player)?.some(c => c.name === 'xinxxuanshi') && 
            game.hasPlayer(current => current !== player && current.countCards('h') > 0); 
        },
        async content(event, trigger, player) {
            const targetResult = await player.chooseTarget(
                '###【玄蚀】###<div class="text center">请与一名角色拼点</div>',
                (card, player, target) => player.canCompare(target),
                true
            )
            .set("ai", target => {
                return -get.attitude(get.player(), target);
            })
            .forResult();
            if (targetResult.bool) {
                game.playAudio("../extension/永夜之境/audio/",'xinxshuohua'+[get.rand(4,5)]+'.mp3');
                const target = targetResult.targets[0];
                const cardInHand = player.getCards('h').find(c => c.name === 'xinxxuanshi');
                let pindianEvent = player.chooseToCompare(target);
                // 使用 fixedResult 强制指定你的拼点牌
                if (cardInHand) {
                    // 写法：{ [玩家ID]: 卡牌对象 }
                    // 这样系统到“请选择拼点牌”步骤时，发现你有fixedResult，就会直接用这张牌跳过选择
                    pindianEvent.set("fixedResult", {
                        [player.playerid]: cardInHand
                    });
                }
                const result = await pindianEvent.forResult();
                if (cardInHand) {
                    await player.lose(cardInHand, "visible", ui.ordering);
                    cardInHand.isXinxCard = false;
                    cardInHand.destroyed = true;
                    if (_status.xinxDiscard) _status.xinxDiscard.remove(cardInHand);
                    if (_status.xinxPile) _status.xinxPile.remove(cardInHand);
                    game.log(player, '将', cardInHand, '销毁');
                    cardInHand.remove();
                    cardInHand.delete(); 
                }
                if (result.bool) {
                    if (result.winner !== target) {
                        game.log(target, '拼点失败');
                        player.addSkill('xinxxuanshi_effect_buff');
                        //player.addSkill('xinxxuanshi_effect_source_timer');
                        if (!Array.isArray(player.storage.xinxxuanshi_effect_buff)) {
                            player.storage.xinxxuanshi_effect_buff = [];
                        }
                        player.storage.xinxxuanshi_effect_buff.add(target);
                        target.addSkill('xinxxuanshi_effect_timer');
                        target.storage.xinxxuanshi_timer = player;
                    }
                }
            }
        },
    };
    //装备区无副类别，by《名将杀》暴暴龙
    const xorigin_player_canEquip = lib.element.player.canEquip;
    lib.element.player.canEquip = function(name, replace) {
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
            //设置config默认值
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
            // 如果全局开关是“开启”的，并且技能代码里没传参，则默认为 true
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



    //来自《奇思妙想》，检测处理区
    cardPileObsever();
    discardPileObsever();
    orderingObsever();
    specialObsever();

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
        lib.translate._xinx_xushu_skill='虚数',
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
                const list=['限制使用','重铸牌'];
                let result;
                if (target.hasSkill('xinxzhuoshi_skip')) result = { index: 1 };
                else
                    result = await player.chooseControl(list)
                        .set('prompt',get.skillTranslation(event.name)+':请选择一项')
                        .set("choiceList", [`令${get.translation(trigger.player)}无法使用或打出伤害牌直到其下回合结束`, "重铸一张牌"])
                        .set("ai", () => {
                            const player = get.player();
                            const attitude = get.attitude(player, target);
                            if (attitude >= 0||target.hp<=2||target.countCards('he')<=4) {
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
                  const  result  = await player.chooseToDiscard("he", true, "chooseonly").set("filterCard", lib.filter.cardRecastable)
                  .set("prompt", "请重铸一张牌").forResult();
                  await player.recast(result.cards);
                }
            } 
        }

        //添加势力
        //game.addGroup('xing', '杏', '杏', { color: '#8abcd1' },)    // #f7cdbc #c6e6e8 #126e82  59f0f4 346c9c 1fb1b5   {nature: 'watermm',}
        //game.addGroup('xinx', '穹', '穹', { color: '#54BCD9' },) 

        game.addGroup('xinx', '穹', '穹', { color: '#54BCD9', image: 'ext:永夜之境/image/author/xinx_qiong.png' });
        game.addGroup('xing', '杏', '杏', { color: '#8abcd1', image: 'ext:永夜之境/image/author/xinx_xing.png' });
       


        //扩展武将品质
        lib.arenaReady.push(function () {
            for (var pack of ["xinx1", 'xinx2', 'xinxhuaijiu','xinxfenyu']) {
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