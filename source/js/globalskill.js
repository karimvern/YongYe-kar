import { lib, game, ui, get, ai, _status } from "noname";

Object.assign(lib.skill, {
    //淬心
    _xinxcuixinmod:{
        mod: {
            ignoredHandcard(card, player) {
              if (get.name(card) == "xinxcuixin_card") {
                return true;
              }
            },
            cardDiscardable(card, player, name) {
              if (name === "phaseDiscard" && get.name(card) == "xinxcuixin_card") {
                return false;
              }
            },
        },
        nopop: true,
        charlotte: true,
        forced: true,
        silent: true,
        popup: true,
    },
    //保留（全局存储版：所有玩家的保留数据统一存放在 _status.xinx_baoliu_dict，key 自带 playerid；其他技能统一通过 getDict/getCardAge 读写）
    _yyzjbaoliu: {
        ruleSkill: true,
        trigger: { global: ["phaseEnd", "roundStart"] },
        silent: true,
        firstDo: true,
        charlotte: true,
        // 获取全局保留数据表
        getDict() {
            if (!_status.xinx_baoliu_dict) _status.xinx_baoliu_dict = {};
            return _status.xinx_baoliu_dict;
        },
        // 统一读取接口：某张牌的保留回合数（age）与保留轮数（roundAge）；position 可传 "h" 等覆盖（默认按牌的当前位置，s 视为 h）
        getCardAge(player, card, position) {
            const dict = get.info("_yyzjbaoliu").getDict();
            let pos = position || get.position(card) || "h";
            if (pos === "s") pos = "h";
            const cid = card._cardid || card.cardid;
            const baseKey = player.playerid + "_" + pos + "_" + cid;
            return { age: dict[baseKey] || 0, roundAge: dict[baseKey + "_round"] || 0 };
        },
        async content(event, trigger, player) {
            const dict = get.info("_yyzjbaoliu").getDict();
            let isRound = event.triggername === "roundStart";
            let hs = player.getCards("he");
            let validKeys = new Set();
            for (let card of hs) {
                let baseKey = player.playerid + "_" + get.position(card) + "_" + card.cardid;
                let roundKey = baseKey + "_round";
                validKeys.add(baseKey);
                validKeys.add(roundKey);
                let oldTurnAge = dict[baseKey] || 0;
                let oldRoundAge = dict[roundKey] || 0;
                dict[baseKey] = isRound ? oldTurnAge : oldTurnAge + 1;
                dict[roundKey] = isRound ? oldRoundAge + 1 : oldRoundAge;
            }
            // 清理该玩家已不在手牌/装备区中的旧条目（不影响其他玩家）
            let prefix = player.playerid + "_";
            for (let key of Object.keys(dict)) {
                if (key.startsWith(prefix) && !validKeys.has(key)) delete dict[key];
            }
        }
    },
    //虚无卡牌
    _xinx_ethereal: {
        ruleSkill: true,
        charlotte: true,
        silent: true,
        lastDo: true,
        trigger: { player: "phaseEnd" },
        forced: true,
        filter(event, player) {
            const targetCards = ['xinxguiji', 'xinxmingxinzhiyue'];
            return player.hasCard(card => targetCards.includes(card.name), 'h');
            //return player.hasCard(card => card.name === 'xinxguiji', 'h');
        },
        async content(event, trigger, player) {
            const targetCards = ['xinxguiji', 'xinxmingxinzhiyue'];
            const cards = player.getCards('h', card => targetCards.includes(card.name));
            if (cards.length) {
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
    },

    //记忆卡牌
    _xinx_jiyi: {
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
                    if (player.hasUseTarget(card)) {
                        await player.chooseUseTarget(card, true, false);
                    }
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
    },

    //毁灭卡牌
    _xinx_huimie:{
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
    },
    //【勘破】卡牌
    _xinxkanpo_effect:{
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
    },
    // 【消耗】
    _xinx_xiaohao_system:{
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
    },
    //【玄蚀】卡牌
    _xinxxuanshi_effect:{
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
    },
    //搬运《自用插件》
    _xinxastral_draw: {
        filter: function () {
            return !_status.connectMode && lib.config.extension_永夜之境_AIcheat;
        },
        enable: "phaseUse",
        content: function () {
            player.draw(7);
        },
        ai: {
            order: -1,
            result: {
                player: 1,
            },
        },
    },
    _xinxastral_recover: {
        enable: "phaseUse",
        filter: function () {
            return !_status.connectMode && lib.config.extension_永夜之境_AIcheat;
        },
        chooseButton: {
            dialog: function (event, player) {
                return ui.create.dialog("体力", [["回血", "伤害"], "vcard"], "hidden");
            },
            backup: function (links, player) {
                if (links[0][2] == "回血") {
                    return {
                        content: function () {
                            player.recover(player.maxHp - player.hp);
                        },
                    };
                } else {
                    return {
                        filterTarget: true,
                        content: function () {
                            var num = target.hp + target.hujia;
                            if (num > 1) target.damage(num - 1);
                            else target.damage();
                        },
                    };
                }
            },
            prompt: function (links) {
                return "对一名角色造成伤害";
            },
        },
        subSkill: {
            backup: {},
        },
    },
    _xinxastral_action: {
        enable: "phaseUse",
        filter: function () {
            return !_status.connectMode && lib.config.extension_永夜之境_AIcheat;
        },
        chooseButton: {
            dialog: function (event, player) {
                return ui.create.dialog("行动", [["翻面", "额外"], "vcard"], "hidden");
            },
            backup: function (links, player) {
                if (links[0][2] == "翻面") {
                    return {
                        content: function () {
                            for (var i of game.players) {
                                if (i != player) i.turnOver(true);
                            }
                        },
                    };
                } else {
                    return {
                        content: function () {
                            player.insertPhase();
                        },
                    };
                }
            },
        },
        subSkill: {
            backup: {},
        },
    },
    _xinxastral_gain: {
        enable: "phaseUse",
        filter: function () {
            return !_status.connectMode && lib.config.extension_永夜之境_AIcheat;
        },
        chooseButton: {
            dialog: function (event, player) {
                var list = lib.inpile.map(i => ["", "", i]);
                for (var i of lib.inpile_nature) {
                    list.push(["", "", "sha", i]);
                }
                return ui.create.dialog("获得指定牌", [list, "vcard"], "hidden");
            },
            select: [1, Infinity],
            complexSelect: false,
            backup: function (links, player) {
                return {
                    cards: links,
                    content: function () {
                        var cards = lib.skill._xinxastral_gain_backup.cards,
                            cardx = [];
                        for (var i of cards) {
                            var cardz = game.createCard2(i[2], lib.suit.randomGet(), Math.ceil(13 * Math.random()), i[3]);
                            cardx.push(cardz);
                        }
                        if (cardx) player.gain(cardx, "gain2");
                    },
                };
            },
        },
        subSkill: {
            backup: {},
        },
    },
    //叠置牌机制（权袍等技能共用）：任意角色使用/打出叠置牌时均触发，不依赖授予技能。
    //叠置数据与封装函数见 precontent.js 的 game.xinxqp；授予叠置能力的技能应在 init 中
    //调用 lib.skill._xinxqp_diezhi.install()，效果中调用 game.xinxqp.stackOn(player, base, tops)
    _xinxqp_diezhi: {
        ruleSkill: true,
        charlotte: true,
        silent: true,
        //录像回放：game.addVideo("skill", player, ["_xinxqp_diezhi", info]) 由此恢复
        video(player, info) {
            game.xinxqp.video(player, info);
        },
        //机制安装（幂等）：包装addGaintag作显示层兜底 + 断线重连后按壳牌gaintag载荷重建叠置
        install() {
            game.xinxqp.installUI();
            if (!_status.postReconnect._xinxqp_diezhi) {
                _status.postReconnect._xinxqp_diezhi = [
                    function () {
                        const origin = ui.create.me;
                        ui.create.me = function () {
                            ui.create.me = origin;
                            const result = origin.apply(this, arguments);
                            game.xinxqp.rebuildAll();
                            return result;
                        };
                    },
                    [],
                ];
            }
        },
        subSkill: {
            //使用/打出结算开始前（先于lose发生），将壳牌叠置转移至事件暂存，杜绝lose分支误收回
            stash: {
                trigger: { player: ["useCardBegin", "respondBegin"] },
                charlotte:true,
                forced: true,
                silent: true,
                popup: false,
                filter(event, player) {
                    //useCard/respond创建时next.card被get.autoViewAs包装成VCard（player.js:7481/8074），实体牌本体在event.cards[0]；
                    //cardid一致即壳牌作为牌名本体被使用/打出（VCard构造器拷贝cardid），视为技材料不触发，由lose分支收回
                    const card = event.cards?.[0];
                    return game.xinxqp.isShell(card) && event.card?.cardid === card.cardid;
                },
                async content(event, trigger, player) {
                    const shell = trigger.cards[0];
                    trigger.xinxqp_stash = game.xinxqp.getStack(shell).slice();
                    //使用时刻的完整牌组快照：[底牌, ...剩余实体牌]，供useCardAfter等处读取
                    //（勿直接改trigger.cards：那会让叠置牌被useCard的lose一并带走，_loop将无牌可用）
                    trigger.xinxqp_used_all = [shell, ...trigger.xinxqp_stash];
                    game.xinxqp.broadcastClear(player, [shell]);
                },
            },
            //底牌使用/打出结算后，依次选择使用剩余的叠置实体牌
            loop: {
                trigger: { player: ["useCardAfter", "respondAfter"] },
                forced: true,
                charlotte:true,
                filter(event, player) {
                    //叠置列表由stash分支在使用/打出开始时转移至事件暂存
                    return event.xinxqp_stash?.length > 0;
                },
                async content(event, trigger, player) {
                    //事件card是VCard包装（player.js:7481/8074），实体壳牌本体在cards[0]
                    const shell = trigger.cards?.[0] ?? trigger.card;
                    const stack = trigger.xinxqp_stash;
                    delete trigger.xinxqp_stash;
                    //使用被取消（底牌回到手牌）时，将叠置重新挂回壳牌
                    if (player.getCards("h").includes(shell)) {
                        game.xinxqp.getStack(shell).push(...stack);
                        game.xinxqp.syncShell(player, shell);
                        return;
                    }
                    const rest = stack.slice();
                    while (rest.some(card => player.hasUseTarget(card))) {
                        if (player.isDead() || _status.over) break;
                        const result = await player
                            .chooseButton([`###叠置###<div class="text center">选择使用一张叠置牌（剩余${rest.length}张，未使用则收回之）</div>`, rest])
                            .set('filterButton', button => {
                                return get.player().hasUseTarget(button.link);
                            })
                            .set("ai", button => (player.hasUseTarget(button.link) ? get.order(button.link) : -1))
                            .forResult();
                        if (!result?.bool || !result?.links?.length) break;
                        const chosen = result.links[0];
                        if (!player.hasUseTarget(chosen)) {
                            //不可主动使用（如闪/无懈）：收回该牌后继续选择
                            rest.remove(chosen);
                            delete chosen.storage?.xinxqp_master;
                            const next = player.gain(chosen, "gain2");
                            next.xinxqp_recoup = true; //标记：本次gain为收回叠置实体牌，供技能（如重铸）识别
                            await next;
                            //game.log(player, "收回了暂无法使用的", chosen);
                            continue;
                        }
                        //addCount:false绕过次数限制（如已用过杀）
                        await player.chooseUseTarget(chosen, true, false);
                        if (chosen.parentNode !== ui.special) {
                            rest.remove(chosen); //已使用出去
                        }
                        //否则（使用被取消）留在剩余列表重新选择
                    }
                    for (const card of rest) delete card.storage?.xinxqp_master;
                    if (rest.length) {
                        if (player.isDead() || _status.over) {
                           await game.cardsDiscard(rest);
                        } else {
                            const next = player.gain(rest, "gain2");
                            next.xinxqp_recoup = true; //标记：本次gain为收回叠置实体牌，供技能（如重铸）识别
                            await next;
                        }
                    }
                },
            },
            //壳牌以非"作为自身被使用/打出"的方式离手（被弃置/偷取/作为材料等）时，叠置牌收回手牌
            lose: {
                trigger: { player: "loseAfter" },
                forced: true,
                charlotte:true,
                silent: true,
                popup: false,
                filter(event, player) {
                    //手牌（hs）与装备区（es）离手的壳牌都要收回叠置
                    return (event.hs || []).concat(event.es || []).some(card => game.xinxqp.isShell(card));
                },
                async content(event, trigger, player) {
                    const handled = [];
                    for (const card of trigger.hs.slice().concat(trigger.es?.slice() || [])) {
                        if (!game.xinxqp.isShell(card)) continue;
                        const stack = game.xinxqp.getStack(card);
                        //作为自身被使用/打出：由loop分支接管（沿祖先链检查useCard/respond的本身牌，避免误判）
                        let evt = trigger;
                        let inUse = false;
                        while (evt) {
                            //事件card被autoViewAs包装成VCard（player.js:7481/8074），需cardid比对实体牌本体
                            if ((evt.name == "useCard" || evt.name == "respond") && (evt.card === card || evt.card?.cardid === card.cardid)) {
                                inUse = true;
                                break;
                            }
                            evt = evt.parent;
                        }
                        if (inUse) continue;
                        handled.push(card);
                        for (const cardx of stack) delete cardx.storage?.xinxqp_master;
                        if (player.isDead() || _status.over) {
                            await game.cardsDiscard(stack);
                        } else {
                            const next = player.gain(stack, "gain2");
                            next.xinxqp_recoup = true; //标记：本次gain为收回叠置实体牌，供技能（如重铸）识别
                            await next;
                            //game.log(player, "收回了", card, "上的叠置牌");
                        }
                    }
                    if (handled.length) game.xinxqp.broadcastClear(player, handled);
                },
            },
            //角色死亡后，遗留于ui.special的叠置牌置入弃牌堆（死亡流程不走lose，需按归属标记清扫）
            die: {
                trigger: { player: "dieAfter" },
                forced: true,
                charlotte: true,
                silent: true,
                popup: false,
                filter(event, player) {
                    return Array.from(ui.special.childNodes).some(card => card.storage?.xinxqp_master === player);
                },
                async content(event, trigger, player) {
                    const cards = Array.from(ui.special.childNodes).filter(card => card.storage?.xinxqp_master === player);
                    for (const card of cards) delete card.storage.xinxqp_master;
                    if (cards.length) {
                        await game.cardsDiscard(cards);
                        game.log(player, "的叠置牌被置入弃牌堆");
                    }
                },
            },
        },
    },
});


