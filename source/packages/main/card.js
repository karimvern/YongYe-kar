import { lib, game, ui, get, ai, _status } from '../../../../../noname.js'

export default {
    card: {
        jinhuanren: {
            derivation: 'xinx_jiangzhuo',
            fullskin: true,
            type: "equip",
            subtype: "equip1",
            skills: ["jinhuanren"],

            image: 'ext:永夜之境/image/card/jinhuanren.png',
            cardcolor: "heart",
            destroy: true,
            distance: {
                attackFrom: -1,
            },
            ai: {
                basic: {
                    equipValue: 6,
                    order: (card, player) => {
                        const equipValue = get.equipValue(card, player) / 20;
                        return player && player.hasSkillTag("reverseEquip") ? 8.5 - equipValue : 8 + equipValue;
                    },
                    useful: 2,
                    value: (card, player, index, method) => {
                        if (!player.getCards("e").includes(card) && !player.canEquip(card, true)) return 0.01;
                        const info = get.info(card),
                            current = player.getEquip(info.subtype),
                            value = current && card != current && get.value(current, player);
                        let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                        if (typeof equipValue == "function") {
                            if (method == "raw") return equipValue(card, player);
                            if (method == "raw2") return equipValue(card, player) - value;
                            return Math.max(0.1, equipValue(card, player) - value);
                        }
                        if (typeof equipValue != "number") equipValue = 0;
                        if (method == "raw") return equipValue;
                        if (method == "raw2") return equipValue - value;
                        return Math.max(0.1, equipValue - value);
                    },
                },
                result: {
                    target: (player, target, card) => get.equipResult(player, target, card),
                },
            },

            enable: true,
            selectTarget: -1,
            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
            modTarget: true,
            allowMultiple: false,
            content: function () {
                if (
                    !card?.cards.some(card => {
                        return get.position(card, true) !== "o";
                    })
                ) {
                    target.equip(card);
                }

            },
            toself: true,
        },
        qianjungongjin: {
            enable: true,
            type: "trick",
            derivation: "xinxzhu_caocao",
            audio: true,
            fullskin: true,
            image: 'ext:永夜之境/image/card/qianjungongjin.png',
            filterTarget: function (card, player, target) {
                return player != target;
            },
            content() {
                "step 0";
                if (!player.isIn() || !target.isIn()) {
                    event.finish();
                    return;
                }
                event.showCards = get.cards(5);
                game.cardsGotoOrdering(event.showCards);
                player.showCards(event.showCards);
                var nodamages = event.showCards.filter(card => !get.tag(card, "damage"));
                "step 1";
                if (player.isIn() && target.isIn() && event.showCards.length) {
                    for (var i of event.showCards) {
                        if (player.canUse(i, target, false)) {
                            player.useCard(i, target, false);
                            event.showCards.remove(i);
                            event.redo();
                            break;
                        }
                    }
                }
                "step 2";
                if (event.showCards.length) {
                    player.addToExpansion(event.showCards, "gain2").gaintag.add("xinxqianjun_card");
                    player.addSkill('xinxqianjun_card');
                    // await game.cardsGotoPile(cards,'insert');
                };
                player.addTempSkill("xinxqianjun_eff");
            },
            ai: {
                basic: {
                    useful: 4,
                    value: 3,
                },
                order: 4,
                result: {
                    target(player, target, card, isLink) {
                        if (get.effect(target, { name: "sha" }, player, target) == 0) return 0;
                        return -2.5;
                    },
                },
                tag: {
                    respond: 1,
                    respondShan: 1,
                    damage: 1,
                },
            },
            selectTarget: 1,
        },
        xinxnilin: {
            image: 'ext:永夜之境/image/card/xinxnilin.png',
            audio: true,
            fullskin: true,
            type: "trick",
            enable: true,
            selectTarget: -1,
            toself: true,
            filterTarget(card, player, target) {
                return target == player;
            },
            modTarget: true,
            async content(event, trigger, player) {
                const target = event.target;
                const cards = event.cards;
                game.playAudio("../extension/永夜之境/audio/card/xinxnilin.mp3");
                const num = target.storage.xinxzhuoshi_add;
                if (num) {
                    await target.draw(2 + num);
                }
                else {
                    await target.draw(2 + cards.length);
                }
                await target.addTempSkill("xinxzhuoshi_effect");
                cards.forEach(card => {
                    card.fix();
                    card.remove();
                    card.destroyed = true;
                    game.log(card, "被销毁了");
                });
            },
            ai: {
                wuxie(target, card, player, viewer) {
                    if (get.mode() == "guozhan") {
                        if (!_status._aozhan) {
                            if (!player.isMajor()) {
                                if (!viewer.isMajor()) {
                                    return 0;
                                }
                            }
                        }
                    }
                    if (target.countCards("h") * Math.max(target.hp, 5) > 6) {
                        return 0;
                    }
                },
                basic: {
                    order: 7,
                    useful: 8,
                    value: 10,
                },
                result: {
                    target: 2,
                },
                tag: {
                    draw: 3,
                },
            },
        },
        xinxguiji: {
            image: 'ext:永夜之境/image/card/xinxguiji.png',
            audio: true,
            fullskin: true,
            type: "trick",
            enable: true,
            selectTarget: 1,
            tags: {
                xinx_ethereal: true
            },
            filterTarget: function (card, player, target) {
                return player != target && target.countCards('h') > 0;
            },
            async content(event, trigger, player) {
                game.playAudio("../extension/永夜之境/audio/xinxleizhi3.mp3");
                const target = event.target;
                player.line(target, "green");
                const allHandCards = target.getCards('h');
                // 使用 visible_xinxguiji 标记，确保是明置状态
                // 目标添加所有手牌的明置标记
                if (allHandCards.length) {
                    await target.addShownCards(allHandCards, "visible_xinxguiji");
                }
                const damageNames = ["sha", "juedou", "huogong", "nanman", "wanjian", "shandian"];
                const shanNames = ["shan", "jiu", 'tao'];
                const nonDamageCards = allHandCards.filter(card => {
                    if (get.tag(card, 'damage')) return false;
                    if (damageNames.includes(card.name)) return false;
                    if (card.hasNature && card.hasNature('damage')) return false;
                    return get.type(card) == 'basic';
                });
                let gainedCards = [];
                if (nonDamageCards.length) {
                    await player.gain(nonDamageCards, target, "give");
                    // 记录下具体获得了哪些牌对象
                    gainedCards = nonDamageCards;
                } else {
                    game.log(target, "没有任何非伤害基本牌");
                    return;
                }

                let num = gainedCards.length;
                // 辅助函数：检查玩家手里是否还有“本次获得且未分配”的牌
                const hasDistributableCards = () => {
                    return gainedCards.some(c =>
                        get.owner(c) == player && // 牌还在玩家手里
                        get.position(c) == 'h' && // 必须在手牌区(gain进来通常在h)
                        !c.hasGaintag("xinxguiji_given") // 还没被列入分配计划
                    );
                };

                if (num > 0 && hasDistributableCards() && game.hasPlayer(current => current != player)) {

                    if (_status.connectMode) {
                        game.broadcastAll(() => (_status.noclearcountdown = true));
                    }

                    let given_map = [];

                    // 循环条件修改：检查剩余分配次数 && 检查是否还有特定的那些牌
                    while (num > 0 && hasDistributableCards()) {

                        const result = await player.chooseCardTarget({
                            filterCard(card, player) {
                                // 1. 必须是本次获得的牌 (gainedCards.includes)
                                // 2. 必须未被选过 (!hasGaintag)
                                return gainedCards.includes(card) && !card.hasGaintag("xinxguiji_given");
                            },
                            selectCard: [1, num],
                            position: "h",
                            filterTarget: lib.filter.notMe,
                            prompt: "归寂：请选择要分配的卡牌和目标",
                            prompt2: "（还可分配" + num + "张）",
                            ai1(card) {
                                return !ui.selected.cards.length ? 1 : 0;
                            },
                            ai2(target) {
                                const player = get.event().player;
                                const card = ui.selected.cards[0];
                                return get.value(card, target) * get.attitude(player, target);
                            },
                            allowChooseAll: true,
                        }).forResult();

                        if (result?.cards?.length && result.targets?.length) {
                            const { cards, targets: [target] } = result;
                            num -= cards.length;

                            if (given_map.some(i => i[0] == target)) {
                                given_map[given_map.indexOf(given_map.find(i => i[0] == target))][1].addArray(cards);
                            } else {
                                given_map.push([target, cards]);
                            }
                            // 临时打标，防止在下一次循环中重复选择同一张牌
                            player.addGaintag(cards, "xinxguiji_given");
                        } else {
                            break;
                        }
                    }

                    if (_status.connectMode) {
                        game.broadcastAll(() => {
                            delete _status.noclearcountdown;
                            game.stopCountChoose();
                        });
                    }
                    player.removeGaintag("xinxguiji_given");

                    // 执行分配
                    if (given_map.length) {
                        await game.loseAsync({
                            gain_list: given_map,
                            player: player,
                            cards: given_map.slice().flatMap(list => list[1]),
                            giver: player,
                            animate: "giveAuto",
                        }).setContent("gaincardMultiple");
                    }
                }
            },
            ai: {
                wuxie(target, card, player, viewer) {
                    if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) < 0) return 0;
                },
                basic: {
                    order: 8,
                    value: 5,
                    useful: 5,
                },
                result: {
                    target: -3,
                },
                tag: {
                    loseCard: 1,
                    gain: 2,
                    multitarget: 1,
                }
            }
        },

        xinxjiyibiaoben: {
            image: 'ext:永夜之境/image/card/xinxjiyibiaoben.png',
            audio: true,
            fullskin: true,
            type: "trick", 
            enable: true,  
            toself: true,
            selectTarget: -1, 
            filterTarget(card, player, target) {
                return player == target;
            },
            async content(event, trigger, player) {
                const target = event.target;
                if (player.storage.xinxjiyibiaoben_gain){
                game.playAudio("../extension/永夜之境/audio/card/", 'xinxjiyibiaoben' + [get.rand(1, 4)] + '.mp3');
                 await player.draw(2);
                 await player.chooseToDiscard('he',true)
                 .set("ai", card => {
                    if (ui.selected.cards.length >= _status.event.max) {
                        return 0;
                    }
                    const name = get.name(card);
                    if (name === 'xinxruwosuoshu' || name === 'xinxwangshizhiyue') {
                        return 20;
                    }
                    if (_status.event.goon) {
                        return 4.5 - get.value(card);
                    }
                    return 0;
                });
                }else{
                    game.playAudio("../extension/永夜之境/audio/", 'xinxyuejian' + [get.rand(4, 5)] + '.mp3');
                    player.storage.xinxjiyibiaoben_gain = true;
                    await target.gainMaxHp();
                    await target.recover();
                }
                
            },
            ai: {
                basic: {
                    order: 8,
                    useful: 6,
                    value: 6,
                },
                result: {
                    player(player) {
                        return 2;
                    }
                }
            }
            /* fullskin: true,
            destroy: true,
            type: "equip",
            subtype: "equip5",
            skills: ['xinxjiyibiaoben_skill'],
            onLose() {
                player.addTempSkill("xinxjiyibiaoben_skill_lose");
                //if (event.getParent(2)?.name == "xinxjiyibiaoben_skill") {
                cards.forEach(card => {
                    card.fix();
                    card.remove();
                    card.destroyed = true;
                    game.log(card, "被销毁了");
                });
                //}
            },
            ai: {
                order: 9.5,
                equipValue: 7,
                basic: {
                    equipValue: 7,
                },
            }, */
        },

        xinxmingxinzhiyue: {
            image: 'ext:永夜之境/image/card/xinxmingxinzhiyue.png',
            audio: true,
            fullskin: true,
            type: "trick",
            enable: true,
            filterTarget (card, player, target) {
                return target != player;
            },
            async content(event, trigger, player) {
                game.playAudio("../extension/永夜之境/audio/card/",'xinxmingxinzhiyue'+[get.rand(1, 2)]+'.mp3');
                const target = event.target;
                const timerSkill = 'xinxmingxinzhiyue_timer';
                const effectSkill = 'xinxmingxinzhiyue_effect';
                player.addTempSkill(timerSkill, { player: 'phaseBegin' });
                // 3. 记录需要清理的角色列表
                // 放入数组前先判断是否存在，防止重复添加
                if (!player.storage[timerSkill]) player.storage[timerSkill] = [];
                if (!player.storage[timerSkill].includes(player)) player.storage[timerSkill].push(player);
                if (!player.storage[timerSkill].includes(target)) player.storage[timerSkill].push(target);

                // 4. 为使用者配置共享技能 (指向目标)
                player.storage[effectSkill] = target;
                player.addSkill(effectSkill);
                // 建议手动调用一次 init 以便立即生成虚拟牌显示
                if (lib.skill[effectSkill].init) lib.skill[effectSkill].init(player, effectSkill);

                // 5. 为目标配置共享技能 (指向使用者)
                target.storage[effectSkill] = player;
                target.addSkill(effectSkill);
                if (lib.skill[effectSkill].init) lib.skill[effectSkill].init(target, effectSkill);

                // 6. 视觉效果与日志
                game.log(player, '与', target, '立下了约定');
                await game.delayx(); 
                player.popup('约定', 'wood');
                target.popup('约定', 'wood');
                let cards = event.cards;
                cards.forEach(card => {
                    card.fix();
                    card.remove();
                    card.destroyed = true;
                    game.log(card, "被销毁了");
                });
            },
            ai: {
                order: 1,
                value: 6,
                result: {
                    // AI逻辑：通常对队友使用，因为可以共享手牌
                    target(player, target) {
                        return (get.attitude(player, target) > 0 && target.countCards('h') > 2) ? 1 : 0;
                    }
                }
            }
        },

        xinxkanpo:{
            image: 'ext:永夜之境/image/card/xinxkanpo.png',
            audio: true,
            fullskin: true,
            type: "basic",
            enable: false, 
            notarget: true,
            nodelay: true,
            content() {

            },
            ai: {
                basic: {
                    order: 4,
                    useful: [5, 4, 3],
                    value: [5, 4, 3],
                },
                result: {
                    player: 1,
                }
            }
        },
        xinxyishenweiju:{
            image: 'ext:永夜之境/image/card/xinxyishenweiju.png',
            audio: true,
            fullskin: true,
            type: "trick",
            enable: true,
            filterTarget (card, player, target) {
                return target != player;
            },
            async content(event, trigger, player) {
                game.playAudio("../extension/永夜之境/audio/",'xinxzhuhuo'+[get.rand(1, 2)]+'.mp3');
                const target = event.target;
                if (target.isIn()) {
                    await target.damage(1, 'fire', player);
                }
                if (player.isDead() || target.isDead() || !player.isIn() || !target.isIn()) return;

                const myCards = player.getCards('h');
                const targetCards = target.getCards('h');
                if (!myCards.length && !targetCards.length) return;


                let selectNum = 1;
                if (myCards.length > 0 && targetCards.length > 0) {
                    selectNum = 2;
                }
        
                // 3. 构建单窗口 ChooseButton
                // 格式：[提示文字, 数组1, 分割线文字, 数组2]
                const dialog = [
                    '###以身为炬###<div class="text center">请选择你与其各一张手牌</div>',
                    myCards, 
                    '<div class="text center">对方的手牌</div>', 
                    targetCards
                ];
        
                const result = await player.chooseButton(dialog, [selectNum, selectNum], true)
                    .set('filterButton', button => {
                        const card = button.link;
                        const selected = ui.selected.buttons;
                        // 如果还没选，只要牌在两人的列表里就是合法的
                        if (!selected.length) {
                            return myCards.includes(card) || targetCards.includes(card);
                        }
                        // 如果已经选了一张，第二张必须是另一方的
                        if (selected.length === 1) {
                            const firstCard = selected[0].link;
                            // 判断第一张是谁的
                            const firstIsMine = myCards.includes(firstCard);
                            if (firstIsMine) {
                                return targetCards.includes(card);
                            } else {
                                return myCards.includes(card);
                            }
                        }
                        return false;
                    })
                    .set('ai', button => {
                        const card = button.link;
                        // 如果是自己的牌，优先选价值低的
                        if (myCards.includes(card)) return 10 - get.value(card);
                        return get.value(card) + 5;
                    }).forResult();
        
                if (result.bool && result.links && result.links.length) {
                    const cards = result.links;
                    player.addSkill('xinxyishenweiju_skill');
                    target.addSkill('xinxyishenweiju_skill');
                    player.addGaintag(cards, 'xinxyishenweiju_tag');
                    target.addGaintag(cards, 'xinxyishenweiju_tag');
                    
                    game.log(cards, '视为无次数限制的【火杀】');
                    player.$throw(cards, 1000, 'fire');
                }
            },
            ai: {
                order: 2,
                useful: [4],
                value: [5, 1],
                tag: {
                    damage: 1,
                    nature: "fire",
                },
                result: {
                    target(player, target) {
                        if (player.hp > 2 || player.hasSkillTag('maixie')) return -1.5;
                        return 0;
                    }
                }
            },
        },
  
        xinxqinchen:{
            image: 'ext:永夜之境/image/card/xinxqinchen.png',
            fullskin: true,
            type: "equip",
            subtype: "equip1",
            distance: {
                attackFrom: -2,
            },
            ai: {
                basic: {
                    equipValue: 5,
                    order: (card, player) => {
                        if (player.hp <= 2) { return 0; }
                      const equipValue = get.equipValue(card, player) / 20;
                      return player && player.hasSkillTag("reverseEquip") ? 8.5 - equipValue : 8 + equipValue;
                    },
                    useful: 2,
                    value: (card, player, index, method) => {
                      if (!player.getCards("e").includes(card) && !player.canEquip(card, true)) {
                        return 0.01;
                      }
                      const info = get.info(card), current = player.getEquip(info.subtype), value = current && card != current && get.value(current, player);
                      let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
                      if (typeof equipValue == "function") {
                        if (method == "raw") {
                          return equipValue(card, player);
                        }
                        if (method == "raw2") {
                          return equipValue(card, player) - value;
                        }
                        return Math.max(0.1, equipValue(card, player) - value);
                      }
                      if (typeof equipValue != "number") {
                        equipValue = 0;
                      }
                      if (method == "raw") {
                        return equipValue;
                      }
                      if (method == "raw2") {
                        return equipValue - value;
                      }
                      return Math.max(0.1, equipValue - value);
                    },
                },
                result: {
                    target: (player, target, card) => get.equipResult(player, target, card),
                },
            },
            skills: ["xinxqinchen_skill"],
            enable: true,
            selectTarget: -1,
            filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
            modTarget: true,
            allowMultiple: false,
            content() {
                if (
                    !card?.cards.some(card => {
                        return get.position(card, true) !== "o";
                    })
                ) {
                    game.playAudio("../extension/永夜之境/audio/card/", 'xinxqinchen' + [get.rand(1, 2)] + '.mp3');
                    target.equip(card);
                }
            },
            toself: true,

        },
        xinxxuanshi:{
            image: 'ext:永夜之境/image/card/xinxxuanshi.png',
            fullskin: true,
            type: "trick",
            ai: {
                basic: {
                    order: 3,
                    useful: 3,
                    value: 3,
                },
            },
        },
        xinxjinshouzhi: {
            image: 'ext:永夜之境/image/card/xinxjinshouzhi.png',
            fullskin: true,
            type: "trick",
            enable: true,
            selectTarget: -1,
            toself: true,
            filterTarget(card, player, target) {
                return target == player;
            },
            modTarget: true,
            async content(event, trigger, player) {
                const cards = event.cards;
                const target = event.target;
                const list = [];
                let victim = null;
                let victimSkill = null;
                // // 筛选场上有技能的其他角色
                 //const others = game.players.filter(current => current !== target && current.getSkills().length > 0);
                const allChars = game.players.concat(game.dead);
                const others = allChars.filter(current => current !== target && current.getSkills().length > 0);
                if (others.length > 0) {
                    let tryFind = 5;
                    while (tryFind > 0 && !victimSkill) {
                        tryFind--;
                        const potentialVictim = others.randomGet();
                        const vSkills = potentialVictim.getSkills(null, false, false).filter(s => {
                            if (target.getSkills().includes(s)) return false;
                            const info = lib.skill[s];
                            return info && !info.zhuSkill && !info.hiddenSkill && !info.charlotte;
                        });
                        
                        if (vSkills.length > 0) {
                            victim = potentialVictim;
                            victimSkill = vSkills.randomGet();
                            list.push(victimSkill);
                        }
                    }
                }

                /* if (!_status.xinxjinshouzhiSkills) {
                    if (!_status.characterlist) {
                        lib.skill.pingjian.initList();
                    }
                    // 从角色列表中提取所有技能并去重
                    const skills = _status.characterlist
                        .map(i => get.character(i, 3)) // 获取角色的所有技能
                        .flat() // 展平
                        .unique(); // 去重
                    game.expandSkills(skills);
                    // 过滤逻辑
                    const validSkills = skills.filter(skill => {
                        const info = get.info(skill);
                        if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) {
                            return false;
                        }
                        return info && !info.zhuSkill && !info.hiddenSkill && !info.silent && !info.groupSkill && !info.juexingji && !info.charlotte;
                    });
                    _status.xinxjinshouzhiSkills = validSkills;
                } */
                // 目标数量：如果偷到了是3个，没偷到是2个 (逻辑保持原样)
                /* const targetCount = victimSkill ? 3 : 2;
                const needed = targetCount - list.length;
                if (needed > 0 && _status.xinxjinshouzhiSkills.length > 0) {
                    const randomSkills = _status.xinxjinshouzhiSkills.randomGets(needed);
                    list.push(...randomSkills);
                } */
                const validSkills = get.gainableSkills().filter(skill => {
                    if (target.getSkills().includes(skill)) return false;
                    let info = get.info(skill);
                    if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) {
                        return false;
                    }
                    return info && !info.zhuSkill && !info.hiddenSkill && !info.silent && !info.groupSkill && !info.juexingji && !info.charlotte;
                });
                const randomSkills = validSkills.randomGets(2);
                    list.push(...randomSkills);
                game.playAudio("../extension/永夜之境/audio/", 'xinxhairu' + [1, 4].randomGet() + '.mp3');
                const result = await target.chooseButton(['请选择获得一个技能', [list, 'skill']])
                    .set('ai', button => get.priority(button.link))
                    .set('forced', true)
                    .forResult();

                if (result.links && result.links.length) {
                    const chosenSkill = result.links[0];
                    target.addSkill(chosenSkill);
                    target.popup(chosenSkill);
                    game.log(target, '获得了技能', `【${get.translation(chosenSkill)}】`);

                    // --- 3. 判断是否为场上角色的技能并处理失效 ---
                    if (victim && victim.isIn() && victimSkill && chosenSkill === victimSkill) {
                        const doDisable = await target.chooseBool(
                            `是否令${get.translation(victim)}失去技能【${get.translation(chosenSkill)}】直到你的下回合开始。`,
                        ).set("choice", get.attitude(target, victim) <= 0).forResult();
                        if (doDisable.bool) {
                            game.playAudio("../extension/永夜之境/audio/", 'xinxhairu' + [3] + '.mp3');
                            target.line(victim);
                             victim.removeSkill(chosenSkill);
                             game.log(target, '令', victim, '失去了技能', `【${get.translation(chosenSkill)}】`);
                            target.addSkill('xinxjinshouzhi_restore');
                            if (!target.storage.xinxjinshouzhi_restore) {
                                target.storage.xinxjinshouzhi_restore = [];
                            }
                            target.storage.xinxjinshouzhi_restore.push({
                                target: victim,
                                skill: chosenSkill
                            });
                        }
                    }
                }

                cards.forEach(card => {
                    card.fix();
                    card.remove();
                    card.destroyed = true;
                    game.log(card, "被销毁了");
                });
            },
            ai: {
                basic: {
                    order: 5,
                    useful: 5,
                    value: 5,
                },
                result: {
                    target: 2,
                },

            },
        },
        xinxguirensha:{
            audio: true,
            fullskin: true,
            type: "basic",
            enable: true,
            updateUsable: "phaseUse",
            range(card, player, target) {
                return player.inRange(target);
            },
            selectTarget: 1,
            cardPrompt(card) {
                var natures = get.natureList(Array.isArray(card) ? card[3] : card);
                if (lib.translate["sha_nature_" + natures[0] + "_info"]) {
                    return lib.translate["sha_nature_" + natures[0] + "_info"];
                }
                var str = "出牌阶段，对你攻击范围内的一名角色使用。其须使用一张【闪】，";
                    str += `且在此之后需弃置此牌对应实体牌数张手牌（没有则不弃），`;
                
                str += "否则你对其造成1点";
                str += "伤害。";
                return str;
            },
            defaultYingbianEffect: "add",
            filterTarget(card, player, target) {
                return player !== target;
            },
            async content(event, trigger, player) {
                const target = event.target;
                let shanRequired = event.shanRequired || 1;
                if (typeof shanRequired !== "number" || shanRequired < 0) shanRequired = 1;
                let baseDamage = typeof event.baseDamage === "number" ? event.baseDamage : 1;
                let extraDamage = typeof event.extraDamage === "number" ? event.extraDamage : 0;
                let directHit = event.directHit || event.directHit2 || 
                    (!_status.connectMode && lib.config.skip_shan && !target.hasShan());
                let shaned = false; 
                if (!directHit) {
                    if (event.skipShan) {
                        shaned = true;
                    } else {
                        while (shanRequired > 0) {
                            let next = target.chooseToUse("请使用一张闪响应杀");
                            next.set("type", "respondShan");
                            next.set("filterCard", function (card, player) {
                                if (get.name(card) !== "shan") return false;
                                return lib.filter.cardEnabled(card, player, "forceEnable");
                            });
                            let discardNum = event.cards ? event.cards.length : 1; 
                            if (shanRequired > 1) {
                                next.set("prompt2", "（共需使用" + shanRequired + "张闪）");
                            } else {
                                next.set("prompt2", "（在此之后仍需弃置" + get.cnNumber(discardNum) + "张牌）");
                            }
            
                            next.set("shanRequired", shanRequired);
                            next.set("respondTo", [player, event.card]);
            
                            next.set("ai1", function (card) {
                                if (get.event().toUse) return get.order(card);
                                return 0;
                            });
            
                            next.set("toUse", function() {
                                var target = _status.event.player;
                                var player = _status.event.getParent().player;
                                var event = _status.event.getParent(); 
                                
                                if (target.hasSkillTag("noShan", null, "use")) return false;
                                if (target.hasSkillTag("useShan", null, "use")) return true;
                                if (target.isLinked() && game.hasNature(event.card) &&
                                    game.hasPlayer(cur => cur !== target && cur.isLinked())) {
                                    if (get.attitude(target, player._trueMe || player) > 0) return false;
                                }
                                if (event.baseDamage + event.extraDamage <= 0 && !game.hasNature(event.card, "ice")) return false;
                                if (!game.hasNature(event.card, "ice") && !player.hasSkillTag("jueqing", false, target) && 
                                    !target.hasSkill("gangzhi") && get.damageEffect(target, player, target, get.nature(event.card)) >= 0) {
                                    return false;
                                }
                                if (event.baseDamage + event.extraDamage >= target.hp + 
                                   (player.hasSkillTag("jueqing", false, target) || target.hasSkill("gangzhi") ? 0 : target.hujia)) {
                                    return true;
                                }
                                if (event.shanRequired > 1 &&
                                    !target.hasSkillTag("freeShan", null, { player: player, card: event.card, type: "use" }) &&
                                    target.mayHaveShan(target, "use", true, "count") < event.shanRequired - (event.shanIgnored || 0)) {
                                    return false;
                                }
                                return true;
                            });
            
                            let result = await next.forResult();
                            if (result.bool) {
                                shanRequired--;
                            } else {
                                break; 
                            }
                        }
                        if (shanRequired <= 0) shaned = true;
                    }
                }
                if (shaned) { 
                    if (game.hasNature(event.card, "stab") || true) { 
                        if (target.countCards("h") > 0) {
                            let cards = event.cards;
                            let num = cards.length;
                            let nextDiscard = 
                             target.chooseToDiscard(
                                `刺杀：请弃置${get.cnNumber(num)}张手牌，否则此【杀】依然造成伤害`, 
                                num, 
                                "h"
                            ).set("ai", function (card) {
                                var target = _status.event.player;
                                var evt = _status.event.getParent();
                                var bool = true;
                                if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) {
                                    bool = false;
                                }
                                if (bool) {
                                    return 5 - get.useful(card);
                                }
                                return 5 - get.useful(card);
                            });
                            let resultDiscard = await nextDiscard.forResult();
                            if (!resultDiscard.bool) {
                                shaned = false; 
                            }
                        } else {
                            shaned = false; 
                        }
                    }
                }
                // 5. 结算结果
                if (!shaned) {
                    // --- 命中分支 ---
                    event.trigger("shaHit");
                    if (!event.unhurt) {
                        if (!directHit && !event.directHit2 && 
                            lib.filter.cardEnabled({name:"shan"}, target, "forceEnable") && 
                            target.countCards("hs") > 0 && 
                            get.damageEffect(target, player, target) < 0) {
                            target.addGaintag(target.getCards("hs"), "sha_notshan");
                        }
            
                        target.damage(get.nature(event.card));
                        event.result = { bool: true };
                        event.trigger("shaDamage");
                    } else {
                        event.result = { bool: false };
                        event.trigger("shaUnhirt");
                    }
                } else {
                    event.trigger("shaMiss");
                    event.result = { bool: false, result: "shaned" };
                }
            },
        },
        xinxruwosuoshu:{
            image: 'ext:永夜之境/image/card/xinxruwosuoshu.png',
            fullskin: true,
            type: "trick",
            enable: true,
            selectTarget: -1,
            toself: true,
            filterTarget(card, player, target) {
                return target == player;
            },
            modTarget: true,
            async content(event, trigger, player) {
                var player = event.target;
                const cards = event.cards;
                game.playAudio("../extension/永夜之境/audio/", 'xinxyilian' + [12, 13, 14, 15].randomGet() + '.mp3');
                if(player.storage.xinxruwosuoshu_use){
                   player.draw(2);
                }
                else{
                    player.storage.xinxruwosuoshu_use = true;
                    player.addSkill('xinxyilian_phase');
                    if (!player.storage.xinxyilian_phaseList) {
                        player.storage.xinxyilian_phaseList = ["phaseZhunbei", "phaseJudge", "phaseDraw", "phaseUse", "phaseDiscard", "phaseJieshu"];
                    }
                    let myPhases = player.storage.xinxyilian_phaseList.slice();
                    //let copyPhases = myPhases.slice(1,5);
                    let copyPhases = [ "phaseJudge", "phaseDraw", "phaseUse", "phaseDiscard"];
                    let copyPool = [];
                    let seen = new Set();
                    copyPhases.forEach(p => {
                        if (!seen.has(p)) {
                            seen.add(p);
                            copyPool.push(['', '', p]);
                        }
                    });

                    const moveResultMe = await player.chooseToMove('漪涟：从上方拖入一个阶段至下方区域并重排顺序', true)
                        .set('list', [
                            ['可复制阶段 (拖动或点击其移动)', [copyPool, 'vcard']],
                            ['你的阶段顺序 (拖动可调整)', [myPhases.map(i => ['', '', i]), 'vcard']]
                        ])
                        .set('filterMove', (from, to) => {
                            // 限制：只能从区域 0 移到 区域 1，或者在 区域 1 内部调整
                            // 禁止将下方阶段移回上方池子
                            if (from == 1 && to == 0) return false;
                            return true;
                        })
                        .set('filterOk', (moved) => {
                            // 判定条件：下方区域的阶段数量必须比原来多一个（即完成了一次复制）
                            return moved[1].length == myPhases.length + 1;
                        })
                        .set('processAI', function () {
                            let pool = copyPool.map(i => i[2]);
                            let current = myPhases.slice();
                            // 1. AI 决定复制哪一个
                            let drawCount = current.filter(p => p == 'phaseDraw').length;
                            let useCount = current.filter(p => p == 'phaseUse').length;
                            let toCopy = 'phaseDraw';
                            if (drawCount > 2 && useCount < 2 && pool.includes('phaseUse')) {
                                toCopy = 'phaseUse';
                            } else if (!pool.includes('phaseDraw')) {
                                toCopy = pool[0];
                            }
                            current.push(toCopy);
                            // 2. AI 决定重排顺序 (双摸一出)
                            let draws = current.filter(p => p == "phaseDraw");
                            let uses = current.filter(p => p == "phaseUse");
                            let others = current.filter(p => p != "phaseDraw" && p != "phaseUse");
                            let final = [];
                            while (draws.length > 0 || uses.length > 0) {
                                for (let i = 0; i < 2; i++) { if (draws.length > 0) final.push(draws.shift()); }
                                if (uses.length > 0) final.push(uses.shift());
                            }
                            let resultList = final.concat(others);
                            // 返回结果格式：[ [区域0剩余内容], [区域1新排布内容] ]
                            return [[], resultList.map(i => ['', '', i])];
                        })
                        .forResult();

                    if (moveResultMe.bool) {
                        player.storage.xinxyilian_phaseList = moveResultMe.moved[1].map(i => i[2]);
                        game.log(player, '重排了阶段序列，当前为：', '#y' + player.storage.xinxyilian_phaseList.map(p => get.translation(p)).join(' → '));
                    } else {
                        player.storage.xinxyilian_phaseList = myPhases;
                    }
                    // 实时更新当前回合的阶段列表
                    if (_status.event.name == 'phase' && _status.event.player == player) {
                        _status.event.phaseList = player.storage.xinxyilian_phaseList.slice();
                    }

                    let turnEvent = _status.event.getParent('phase');
                    // 2. 如果找到了当前玩家的回合事件（说明技能是在自己回合内发动的）
                    if (turnEvent && turnEvent.player == player) {
                        // 强行覆盖当前回合剩下的阶段列表
                        turnEvent.phaseList = player.storage.xinxyilian_phaseList.slice();
                        game.log(player, '已即时更新本回合阶段顺序');
                    }
                }
            },
            ai: {
                basic: {
                    order: 1,
                    useful: 1,
                    value: 10,
                },
                result: {
					player: 1,
				},
            },
        },
        xinxnalaibani:{
            image: 'ext:永夜之境/image/card/xinxnalaibani.png',
            fullskin: true,
            type: "trick",
            enable: true,
            filterTarget (card, player, target) {
                return target != player && target.countCards('hej') > 0;
            },
            async content(event, trigger, player) {
                const cards = event.cards;
                game.playAudio("../extension/永夜之境/audio/card",'xinxnalaibani'+[get.rand(1, 2)]+'.mp3');
                const target = event.target;
                let allCards = target.getCards('hej');
                if (allCards.length === 0) return;
                let vcards = get.inpileVCardList(info => {
                    const name = info[2];
                    return ['basic', 'trick'].includes(get.type(name))
                }).filter(info => player.hasUseTarget(new lib.element.VCard({ name: info[2], nature: info[3] }), false));

                const validVCardLengths = new Set(vcards.map(v => get.cardNameLength(v[2])));
                const physicalLengths = allCards.map(c => get.cardNameLength(c.name));
                let possibleSums = new Set([0]);
                for (const len of physicalLengths) {
                    const currentSums = Array.from(possibleSums);
                    for (const s of currentSums) {
                        possibleSums.add(s + len);
                    }
                }
                possibleSums.delete(0); 

                let next = await player.chooseButton(
                    [
                        `###${get.prompt("xinxnalaibani")}###<div class="text center">请选择一张牌，将其当作【杀】或名字数相同的牌使用</div>`,
                        [allCards],
                        `###<div class="text center">转化牌</div>###`,
                        [vcards, "vcard"]
                    ]
                )
                    .set("selectButton", [2, Infinity])
                    .set("filterButton", button => {
                        if (!Array.isArray(button.link)) {
                            return ui.selected.buttons.length == 0;
                        }
                        if (ui.selected.buttons.length != 1) {
                            return false;
                        }
                        const selected = ui.selected.buttons;
                        const selectedReal = selected.filter(b => !Array.isArray(b.link));
                        const selectedVCard = selected.filter(b => Array.isArray(b.link));
                        const isClickingVCard = Array.isArray(button.link);
                        if (isClickingVCard) {
                            // --- 点击转化牌逻辑 ---
                            if (selectedReal.length === 0) return false; // 必须先选实体牌
                            if (selectedVCard.length > 0 && selectedVCard[0] !== button) return false; // 转化牌单选
                            // 计算字数匹配
                            const currentLen = selectedReal.reduce((sum, b) => sum + get.cardNameLength(b.link.name), 0)
                            const vCardName = button.link[2];
                            const vCardLen = get.cardNameLength(vCardName);
                            if (vCardName !== 'sha' &&currentLen !== vCardLen) return false; // 字数不符则不可选
                            // 检查是否有合法目标
                            const vCardObj = get.autoViewAs({ name: vCardName, nature: button.link[3] }, selectedReal.map(b => b.link));
                            return _status.event.player.hasUseTarget(vCardObj, true, true);
                        } else {
                            // --- 点击实体牌逻辑 ---
                            // 如果已经选了转化牌，锁死实体牌选择，防止字数变动
                            if (selectedVCard.length > 0) return false;
                            return true;
                        }
                    })
                    .set("complexButton", true)
                    .set("ai", button => {
                        if (ui.selected.buttons.length <= 100) {
                            return Math.random();
                        }
                        const cardx = get.autoViewAs({ name: button.link[2] });
                        return get.player().getUseValue(cardx, true, true);
                    })
                    .forResult();
                if (next.bool) {
                    let realCards = next.links.filter(l => !Array.isArray(l));
                    let vCardInfo = next.links.find(l => Array.isArray(l));
                    allCards.removeArray(realCards);
                    let cardToUse = get.autoViewAs({ name: vCardInfo[2], nature: vCardInfo[3] }, realCards);
                    if (player.hasUseTarget(cardToUse, true, true)) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxjiegou' + [get.rand(5, 6)] + '.mp3');
                        await player.chooseUseTarget(cardToUse, true, realCards);
                    }
                } 
                cards.forEach(card => {
                    card.fix();
                    card.remove();
                    card.destroyed = true;
                    game.log(card, "被销毁了");
                });
            },
            ai: {
                wuxie(target, card, player, viewer) {
                    if (!target.countCards("hej") || get.attitude(viewer, player._trueMe || player) > 0) {
                        return 0;
                    }
                },
                basic: {
                    order: 7,
                    useful: 8,
                    value: 8,
                },
                result: {
					target: -1,
				},
            },

        },

        xinxchenghuihupo:{
            image: 'ext:永夜之境/image/card/xinxchenghuihupo.png',
            fullskin: true,
            type: "trick",
            enable: true,
            selectTarget: -1,
            toself: true,
            filterTarget(card, player, target) {
                return target == player;
            },
            modTarget: true,
            async content(event, trigger, player) {
                const target = event.target;
                game.playAudio("../extension/永夜之境/audio/", 'xinxhongzhu' + [3, 4].randomGet() + '.mp3');
                const result = await target
                    .chooseToDiscard(get.prompt2('xinxchenghuihupo'), [1, 3], "he")
                    .set("allowChooseAll", true)
                    .set("ai", card => {
                        if (ui.selected.cards.length >= _status.event.max) {
                            return 0;
                        }
                        const name = get.name(card);
                        if (name === 'xinxruwosuoshu' || name === 'xinxwangshizhiyue') {
                            return 20;
                        }
                        if (_status.event.goon) {
                            return 4.5 - get.value(card);
                        }
                        return 0;
                    })
                    .forResult();
                if (result?.bool && result.cards?.length) {
                    if (player.hasSkill('xinxzhanshu')) {
                        await lib.skill.xinxzhanshu.washDeck();
                    }
                    await target.draw(result.cards.length);
                }

                
            },
            ai: {
                wuxie(target, card, player, viewer) {
                    if (get.mode() == "guozhan") {
                        if (!_status._aozhan) {
                            if (!player.isMajor()) {
                                if (!viewer.isMajor()) {
                                    return 0;
                                }
                            }
                        }
                    }
                    if (target.countCards("h") * Math.max(target.hp, 5) > 6) {
                        return 0;
                    }
                },
                basic: {
                    order: (card, player) => {
                        let jiyi = player.getCards('hs', (card) => {
                            return get.name(card) === 'xinxruwosuoshu'||get.name(card) === 'xinxwangshizhiyue';
                        });
                        if (jiyi.length > 0) {
                            return get.order(jiyi[0]) + 0.3;
                        }
                        return 1;
                    },
                    useful: 7,
                    value: 8,
                },
                result: {
                    target: 1,
                },
                tag: {
                    draw: 3,
                },
            },

        },
        xinxyuheiyongwen:{
            image: 'ext:永夜之境/image/card/xinxyuheiyongwen.png',
            fullskin: true,
            type: "trick",
            enable: true,
            selectTarget: -1,
            toself: true,
            filterTarget(card, player, target) {
                return target == player;
            },
            modTarget: true,
            async content(event, trigger, player) {
                const target = event.target;
                const cards = event.cards;
                player.$fullscreenpop("后会有期", "thunder");
                game.playAudio("../extension/永夜之境/audio/", 'xinxyiyu' + [1, 3].randomGet() + '.mp3');
                await target.addSkill('xinxyuheiyongwen_effect');
                cards.forEach(card => {
                    card.fix();
                    card.remove();
                    card.destroyed = true;
                    game.log(card, "被销毁了");
                });

            },
            ai: {
                wuxie(target, card, player, viewer) {
                    if (get.mode() == "guozhan") {
                        if (!_status._aozhan) {
                            if (!player.isMajor()) {
                                if (!viewer.isMajor()) {
                                    return 0;
                                }
                            }
                        }
                    }
                    if (target.countCards("h") * Math.max(target.hp, 5) > 6) {
                        return 0;
                    }
                },
                basic: {
                    order: (card, player) => {
                        return 8;
                    },
                    useful: 5,
                    value: 5,
                },
                result: {
                    target: 1,
                }
            },
        },
        xinxwangshizhiyue:{
            image: 'ext:永夜之境/image/card/xinxwangshizhiyue.png',
            fullskin: true,
            type: "basic",
            enable: true,
            selectTarget: -1,
            toself: true,
            filterTarget(card, player, target) {
                return target == player;
            },
            modTarget: true,
            async content(event, trigger, player) {
                game.playAudio("../extension/永夜之境/audio/", 'xinxyilian' + [9,10,11].randomGet() + '.mp3');
                const target = event.target;
                if (target.storage?.xinxwangshizhiyue_add){
                    player.addCharge(2);
                }else{
                    target.storage.xinxwangshizhiyue_add = true;
                    target.addSkill('xinxchuangshi');
                }
        },
        basic: {
            order: (card, player) => {
                return 2;
            },
            useful: 1,
            value: 10,
        },
        result: {
            target: 1,
        }
    },

    


    },
    translate: {
        jinhuanren: '金焕刃',
        jinhuanren_info: "①每轮开始时，你视为使用一张无距离限制的【杀】。②当此牌离开你的装备区时，销毁之。",
        qianjungongjin: '千军共进',
        qianjungongjin_info: "出牌阶段，对一名其他角色使用。你亮出牌堆顶的五张牌，依次对其使用其中的牌，然后将剩余的牌置于武将牌上，称为“军”。此牌结算后，你本回合无法使用伤害牌。",
        xinxnilin: '逆鳞',
        xinxnilin_info: `${get.poptip('xinx_consume')}。出牌阶段，对自己使用，摸X+2张牌（X为此牌对应的实体牌数），且本回合造成的伤害均视为${get.poptip('xinx_xushu')}属性。`,
        xinx_xushu: '虚数',
        xinx_xushu_info: "当你对目标角色造成虚数伤害时，你选择一项：1.令其无法使用或打出伤害牌直到其下回合结束；2.重铸一张牌。",
        xinxpannanyaoyue: '盘拏耀跃',
        xinxguiji: '归寂',
        xinxguiji_info: `${get.poptip('xinx_xuwu')}。出牌阶段，对一名其他角色使用。目标角色明置所有手牌，然后你可以分配其中的非伤害基本牌。`,
        visible_xinxguiji: '明置',
        xinxguiji_given: '归寂',
        xinxjiyibiaoben: '记忆标本',
        xinxjiyibiaoben_info: `出牌阶段，对自己使用。若为你本局游戏首次使用，增加1点体力上限并回复1点体力。否则摸两张牌并弃置一张牌。`,
        xinxmingxinzhiyue: '铭心之约',
        xinxmingxinzhiyue_info: `${get.poptip('xinx_consume')}，${get.poptip('xinx_xuwu')}。出牌阶段，对一名其他角色使用。直到你下回合开始，你与其可以将对方的手牌如手牌般使用或打出，且每以此法失去一张红色牌，失去者便摸一张牌。`,
        xinxkanpo: '勘破',
        xinxkanpo_info: `当你成为伤害牌的目标时，取消此牌所有目标，然后你可以对此牌来源使用一张伤害牌（无距离限制）。`,
        xinxyishenweiju: '以身为炬',
        xinxyishenweiju_info: `${get.poptip('xinx_huimie')}。出牌阶段，对一名其他角色使用。你对其造成1点火焰伤害，然后观看其手牌并选择你与其各一张手牌，这些牌视为无次数限制的【火杀】。`,
        xinxqinchen: '侵晨',
        xinxqinchen_info: `${get.poptip('xinx_huimie')}。转换技，你每回合使用的：阳，首张【杀】不可被响应且伤害+1；阴，前两张【杀】不计入次数限制。`,
        xinxxuanshi: '玄蚀',
        xinxxuanshi_info: `${get.poptip('xinx_consume')}。当你获得此牌时，须用此牌与一名其他角色拼点。若其没赢：直到其下回合结束，当你需要使用【闪】时，你可以弃置其一张牌视为使用之。`,
        xinxxuanshi_effect_buff: '玄蚀',
        xinxxuanshi_effect: '玄蚀',
        xinxjinshouzhi: '金手指',
        xinxjinshouzhi_info: `${get.poptip('xinx_consume')}。出牌阶段，对自己使用。从三个技能中选择一个获得（场上随机一名其他角色的一个技能+随机两个技能）。若你选择的为场上角色的技能，你可令其失去该技能直到你下回合开始。`,
        xinxguirensha: '刺杀',
        xinxruwosuoshu: '如我所书',
        xinxruwosuoshu_info: `${get.poptip('xinx_jiyi')}。若为你本局游戏首次使用，你复制一个${get.poptip('xinx_zyjd')}，并调整阶段顺序。否则你摸两张牌。`,
        xinxnalaibani: '拿来吧你',
        xinxnalaibani_info: `${get.poptip('xinx_consume')}。出牌阶段，对一名其他角色使用。你可将其区域内一张牌当作【杀】或与此牌名字数相同的${get.poptip('xinx_jishipai')}使用。`,
        xinxceshicard: '测试卡牌',
        xinxceshicard_info: `测试用卡牌。`,
        xinxwangshizhiyue: '往世之约',
        xinxwangshizhiyue_info: `${get.poptip('xinx_jiyi')}。若为你本局游戏首次使用，你获得${get.poptip('xinxchuangshi')}，否则获得2点蓄力点。`,
        xinxchenghuihupo: '橙晖琥珀',
        xinxchenghuihupo_info: `出牌阶段，对自己使用。弃置至多三张牌，将专属弃牌堆洗入专属牌堆，然后你摸等量的牌。`,
        xinxyuheiyongwen: '与黑拥吻',
        xinxyuheiyongwen_info: `${get.poptip('xinx_consume')}。出牌阶段，对自己使用。此后你的回合开始前，你摸一张牌并弃置一张牌。`,


    },
    //负责添加卡牌进入牌堆，格式为["花色","数字","牌名"]
    list: [],
}