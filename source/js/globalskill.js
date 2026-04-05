import { lib, game, ui, get, ai, _status } from "noname";


lib.skill["_yyzjbaoliu"] = {
    ruleSkill: true,
    trigger: { global: ["phaseEnd", "roundStart"] },
    silent: true,
    firstDo: true,
    charlotte: true,
    async content(event, trigger, player) {
        let dict = player.getStorage("yyzjbaoliu") || {};
        let newDict = {};
        let isRound = event.triggername === "roundStart";
        let hs = player.getCards("h");
        for (let card of hs) {
            let baseKey = player.playerid + "_" + get.position(card) + "_" + card.cardid;
            let roundKey = baseKey + "_round";
            let oldTurnAge = dict[baseKey] || 0;
            let oldRoundAge = dict[roundKey] || 0;
            newDict[baseKey] = isRound ? oldTurnAge : oldTurnAge + 1;
            newDict[roundKey] = isRound ? oldRoundAge + 1 : oldRoundAge;
        }
        player.setStorage("yyzjbaoliu", newDict);
    }
};
//虚无卡牌
lib.skill["_xinx_ethereal"] = {
    ruleSkill: true,
    charlotte: true,
    silent: true,
    lastDo: true,
    trigger: { player: "phaseJieshuBegin" },
    forced: true,
    filter(event, player) {
        const targetCards = ['xinxguiji', 'xinxmingxinzhiyue'];
        return player.hasCard(card => targetCards.includes(card.name), 'h');
        //return player.hasCard(card => card.name === 'xinxguiji', 'h');
    },
    async content(event, trigger, player) {
        const targetCards = ['xinxguiji', 'xinxmingxinzhiyue'];
        const cards = player.getCards('h', card => targetCards.includes(card.name));
        // card.name === 'xinxguiji');
        if (cards.length) {
            //移入场外(special)并视觉提示
            player.lose(cards, ui.special);
            game.log(player, '的手牌', cards, '因【虚无】效果被销毁');
            // 销毁
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
        const targetNames = ['xinxruwosuoshu', 'xinxwangshizhiyue'];
        //return event.getl(player)?.cards?.some(card => !get.owner(card)&& targetNames.includes(get.name(card)));
        if (event.type != "discard") {
            return false;
        }
        /* const data = event.getl && event.getl(player);
        if (!data || !data.cards || !data.cards.length) return false;
        return data.cards.some(card => {
            return targetNames.includes(get.name(card));
        }); */
        const evt = event.getl?.(player);
        if (!evt || !evt.cards || !evt.cards.length) return false;
        return evt.cards.some(card => {
            if (get.info(card)?.xinx_jiyi || card.xinx_jiyi) return true;
            return evt.gaintag_map?.[card.cardid]?.includes("eternal_xinx_jiyi_tag");
        });
    },
    async content(event, trigger, player) {
        const targetCards = ['xinxruwosuoshu', 'xinxwangshizhiyue'];
        /* const cards = trigger.getl(player).cards.filter(card => 
            targetCards.includes(get.name(card))); */
        /* const cards = trigger.getl(player).cards.filter(card => {
            return targetCards.includes(get.name(card));
        }); */

        const evt = trigger.getl?.(player);
        const cards = evt.cards.filter(card => {
            if (get.info(card)?.xinx_jiyi || card.xinx_jiyi) return true;
            return evt.gaintag_map?.[card.cardid]?.includes("eternal_xinx_jiyi_tag");
        });

        if (cards.length) {
            game.log(player, '的', cards, '触发了【记忆】效果');
            player.storage.xinx_jiyi_unlock = true;
            for (let card of cards) {
                await player.chooseUseTarget(card, true, false, 'nodistance');
            }
            delete player.storage.xinx_jiyi_unlock;
        }
    },
    mod: {
        cardEnabled(card, player) {
            /*  const targetCards = ['xinxruwosuoshu', 'xinxwangshizhiyue'];
             if (targetCards.includes(get.name(card))) {
                 if (!player.storage.xinx_jiyi_unlock) {
                     return false;
                 }
             } */
            const isJiyi = get.info(card)?.xinx_jiyi;
            // || card.xinx_jiyi || card.hasGaintag?.('eternal_xinx_jiyi_tag')
            if (isJiyi) {
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
        const targetNames = ['xinxqinchen', 'xinxyishenweiju'];
        return targetNames.includes(get.name(event.card));
    },
    async content(event, trigger, player) {
        await player.damage(1, 'fire', 'nosource');
    }
};
//【勘破】卡牌
lib.skill["_xinxkanpo_effect"] = {
    trigger: {
        target: "useCardToTarget",
    },
    charlotte: true,
    ruleSkill: true,
    filter(event, player) {
        return get.is.damageCard(event.card) &&
            player.hasCard(card => card.name === 'xinxkanpo', 'h');
    },
    async cost(event, trigger, player) {
        const result = await player.chooseToUse({
            filterCard: { name: 'xinxkanpo' },
            prompt: `是否使用【勘破】取消 ${get.translation(trigger.card)}的所有目标？`,
            prompt2: "取消目标后，你可以对来源使用一张伤害牌",
            ai1(card) {
                const hasCounter = player.hasCard(c => get.is.damageCard(c), 'h');
                if (hasCounter) return 15;
                if (trigger.card.name.includes('sha') && player.hasCard('shan')) {
                    return 0;
                }
                if (get.effect(player, trigger.card, trigger.player, player) < 0) {
                    return 10;
                }
                return 0;
            }
        })
            .forResult();
        event.result = {
            bool: result?.bool,
            cards: result?.cards,
        };
    },
    async content(event, trigger, player) {
        game.playAudio("../extension/永夜之境/audio/card/xinxkanpo.mp3");
        trigger.targets.length = 0;
        trigger.all_excluded = true;
        game.log(player, '使用了', event.cards[0], '取消了', trigger.card, '的所有目标');
        const target = trigger.player;
        let cards = player.getCards('hs', card => get.tag(card, 'damage'));
        let damages = cards.filter(card => player.canUse(card, target, false));
        if (target && target.isIn() && damages.length) {
            await player.chooseToUse(function (card, player) {
                return get.tag(card, 'damage');
            }, target)
                .set('prompt', '【勘破】生效：是否对 ' + get.translation(target) + ' 使用一张伤害牌')
                .set('addCount', false)
                .set('nodistance', true)
        }

    }
};
// 【消耗】
lib.skill["_xinx_xiaohao_system"] = {
    ruleSkill: true,
    silent: true,
    trigger: {
        global: "useCardAfter",
    },
    filter(event, player) {
        if (player !== event.player) { return false; }
        if (!event.cards || event.cards.length === 0) return false;
        if (get.info(event.card)?.xinx_xiaohao || event.card.xinx_xiaohao) return true;
        return event.player.hasHistory("lose", evt => {
            if ((evt.relatedEvent || evt.getParent()) != event) return false;
            return Object.values(evt.gaintag_map || {}).flat().includes("xinx_xiaohao_tag");
        });
    },
    async content(event, trigger, player) {
        let targetCards = [];
        // 如果是逻辑判定（整张牌天生消耗），全清
        if (get.info(trigger.card)?.xinx_xiaohao || trigger.card.xinx_xiaohao) {
            targetCards.addArray(trigger.cards);
        } else {
            // 如果是后天贴标签，捞出带有销毁快照的实体牌
            const loseEvts = trigger.player.getHistory("lose", evt => (evt.relatedEvent || evt.getParent()) == trigger);
            for (const evt of loseEvts) {
                for (const c of evt.cards) {
                    if (evt.gaintag_map?.[c.cardid]?.includes("xinx_xiaohao_tag") || c.xinx_xiaohao) {
                        targetCards.add(c);
                    }
                }
            }
        }
        if (targetCards.length) {
            targetCards.forEach(card => {
                card.fix();
                card.remove();
                card.destroyed = true;
                if (card.delete) card.delete();
            });
            game.log(targetCards, "被销毁了");
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
            game.playAudio("../extension/永夜之境/audio/", 'xinxshuohua' + [get.rand(4, 5)] + '.mp3');
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


