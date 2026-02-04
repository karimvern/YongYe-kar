import { lib, game, ui, get, ai, _status } from '../../../../noname.js';


export let info = {
    name: 'xinxfenyu',
    connect: true,
    connectBanned: [],
    //武将分包
    characterSort: {
        xinxfenyu: {
            // 分包: ["武将ID","武将ID"],
            'xuandiesheji': ['xinx_hanzhuo', 'xinx_zhuowenjun', 'xinx_limu', 'xinx_xunguan', 'xinx_wuqi', 'xinx_wangmang', 'xinx_wuyuan'],
            'xinx_xiaoyezisheji': ['xinx_lingfeng', 'xinx_zhugejing', 'xinx_lizhaoyi'],
            'xinx_xiulisheji': ['fyrh_leisai','fyrh_dianci'],
            'xinx_qitasheji': [],


        }
    },
    //武将 'rare', 'epic', 'legend',['legend']
    character: {
        xinx_hanzhuo: ["male", "qun", 6, ['xinxfenjiao'], ['epic']],
        xinx_zhuowenjun: ["female", "shu", 3, ['xinxxiangfu', 'xinxyixin'], ['legend']],
        xinx_limu: ["male", "qun", 4, ['xinxsijiao'], ['epic']],
        xinx_xunguan: ["female", "jin", 4, ['xinxyuwei'], ['legend']],
        xinx_wuqi: ["male", "qun", 4, ['xinxcongzu', 'xinxyibian', 'xinxbailian'], ['legend']],
        xinx_wangmang: ["male", "qun", 4, ['xinxqingding'], ['legend']],
        xinx_wuyuan: ["male", "qun", 4, ['xinxyuanyuan'], ['legend']],
        xinx_lingfeng: ["male", "wu", 4, ['xinxjilang'], ['epic']],
        xinx_zhugejing: ["male", "wu", 3, ['xinxsian', 'xinxsizhan', 'xinxsitui'], ['legend']],
        xinx_lizhaoyi: {
            sex: "female",
            group: "shu",
            hp: 3,
            img: "extension/永夜之境/image/xinx_lizhaoyi.png",
            trashBin: ['legend'],
            skills: ['fyrhzhiwen', 'fyrhminnian', 'fyrhfenjue'],
            dieAudios: ["clan_xuncai"],
        },
        fyrh_leisai: ["female", "qun", 4, ['fyrhlihua','fyrhhuohuan'], ['epic']],
        fyrh_dianci: ["male", "qun", 4, [''], ['legend']],
    },
    //武将称号
    characterTitle: {
        //武将ID:" ",
        xinx_lingfeng: "<font color=#52E0B3>设计：小叶子</font>",

    },
    //翻译
    translate: {
        xuandiesheji: '玄蝶设计',
        xinx_xiaoyezisheji: '小叶子设计',
        xinx_xiulisheji: '秀丽设计',
        xinx_qitasheji: '其他设计',
        xinx_zhuowenjun: '玄蝶卓文君',
        xinx_zhuowenjun_prefix: '玄蝶',
        xinx_hanzhuo: '玄蝶寒浞',
        xinx_hanzhuo_prefix: '玄蝶',
        xinx_limu: '玄蝶李牧',
        xinx_limu_prefix: '玄蝶',
        xinx_xunguan: '玄蝶荀灌',
        xinx_xunguan_prefix: '玄蝶',
        xinx_wuqi: '玄蝶吴起',
        xinx_wuqi_prefix: '玄蝶',
        xinx_wangmang: '玄蝶王莽',
        xinx_wangmang_prefix: '玄蝶',
        xinx_wuyuan: '玄蝶伍员',
        xinx_wuyuan_prefix: '玄蝶',
        xinx_lingfeng: '凌封',
        xinx_zhugejing: '诸葛靓',
        xinx_lizhaoyi: '李昭仪',
        fyrh_leisai: '蕾塞',
        fyrh_dianci: '电次',



        //技能翻译
        xinxfenjiao: '偾骄',
        xinxfenjiao_info: "锁定技，当你一回合失去共至少X张牌后（X为你体力上限与额定摸牌数之差），你调整额定摸牌数（X须为正），体力上限+1，本回合不能使用牌。",
        xinxfenjiao_append: `<span style="font-family: yuanli">野树滴残龙战血，曦车碾下朝霞屑。</span>`,
        xinxxiangfu: '相赴',
        pre_xinxxiangfu: '相赴',
        xinxxiangfu_append: `<span style="font-family: yuanli">每轮各限一次，你可以与一名其他角色将手牌向彼此调整一张，
        按${get.poptip("xinx_shoupaichazhi")}变化视为使用牌:
        <br>相思·正负性不变，[杀]；相逢·变为 0，[酒]；
        <br>相失·变为相反数，[闪]；相守·未变化，[桃]。
        </span>`,
        xinxxiangfu_info: `每轮每种牌名限一次。当你需要使用一张基本牌时，若存在与此牌对应${get.poptip({
            id: "xinx_shoupaichazhi",
            name: "差值",
            info: "你与该角色手牌数之差",
        })}的其他角色，你可以选择一名并记录之，
        若你与其手牌数不同，手牌数多者弃一张牌，少者摸一张牌。然后按记录前你与其手牌数之差，你视为使用此牌：
        <br>相思·差值不小于±3，【杀】；
        <br>相逢·差值为±2，【酒】；
        <br>相失·差值为±1，【闪】；
        <br>相守·差值为0，【桃】。
        `,
        xinxyixin: '一心',
        xinxyixin_info: `锁定技，若你记录的角色为唯一一名被记录的角色，且其未对除你外的角色发动过${get.poptip('xinxxiangfu')}，其视为拥有${get.poptip('xinxxiangfu')}。`,
        xinxyixin_append: `<span style="font-family: yuanli">锁定技，唯一参与${get.poptip('xinxxiangfu')}的其他角色视为拥有之。
        <br><br>愿得一人心，白头不相离。</span>`,
        xinxsijiao: '饲骄',
        xinxsijiao_append: `<span style="font-family: yuanli">重铸0张牌、明置已明置的牌、摸牌至小于等于当前手牌数的牌，皆是不可执行的行为。
         <br><br>却秦守代著威名，大厦全凭一木撑。</span>`,
        xxinxsijiao_info: `锁定技，你使用牌时执行下列首个可执行项：
        <br>1.若你有明置的基本牌 ，重铸［0］张，否则执行下一项；
        <br>2.明置［1］张暗置的牌，否则执行下一项；
        <br>3.若你的手牌数小于［2］，则摸牌至［2］张，否则执行下一项；
        <br>4.以上所有［］的数字+1。`,
        xinxsijiao_info: `锁定技，你使用牌时执行首个可执行项:
        <br>1.重铸[0]张明置基本牌；
        <br>2.明置[1]张牌；
        <br>3.摸牌至[2]张；
        <br>4.以上数值+1。`,
        visible_xinxsijiao: "明置",
        xinxyuwei: '逾围',
        xinxyuwei_info: `你可以以${get.poptip({
            id: "xinx_yichushiyong",
            name: "移出方式使用",
            info: "将此牌置于你武将牌上，结算这张牌。若是装备牌或延时锦囊，则回到应有的位置。",
        })}牌并摸牌至X张，令本技能于你使用X张牌前失效、失效X回合后失去。(X为上一张移出牌点数)`,
        xinxyuwei_append: `<span style="font-family: yuanli">借问骁将谁，发覆青虫簪。</span>`,
        xinxcongzu: '从卒',
        xinxcongzu_info: `锁定技，转换技，阳:你以${get.poptip({
            id: "xinx_recastuse",
            name: "重铸方式使用",
            info: "使用此牌时，重铸之。若是装备牌或延时锦囊，则回到应有的位置。",
        })}基本牌；阴:你的出杀上限+X。`,
        xinxyibian: '亦变',
        xinxyibian_info: `锁定技，转换技，阳:你以${get.poptip('xinx_recastuse')}锦囊牌；阴:你的额定摸牌数+X。`,
        xinxbailian: '百炼',
        xinxbailian_info: `锁定技，当你使用牌指定不为其他角色的目标后（X为本句触发次数），将本句移至你另一技能当前项。`,
        xinxbailian_append: `<span style="font-family: yuanli">吾示子吾用兵也。</span>`,
        xinxqingding: '倾鼎',
        xinxqingding_info: `锁定技，每回合限一次，当你摸牌、回复体力、造成伤害时，若你本轮执行过：仅此一项，多执行一次；
        <br>另外两项，防止之；所有项，删除本行。`,
        xinxqingding_append: `<span style="font-family: yuanli">向使当初身便死，一生真伪复谁知？</span>`,
        xinxyuanyuan: '冤冤',
        xinxyuanyuan_info: `锁定技，弃牌阶段开始时，你移出任意张牌令任意名其他角色视为对你使用【杀】。当你或你以此法指定过的角色使用牌后，你移去一张同类牌以与其各摸一张牌，若因此移去了所有牌，此回合中，其视为拥有本技能且你对其造成的伤害值改为其体力值。`,
        xinxyuanyuan_append: `<span style="font-family: yuanli">一声长在耳，万恨重经心。</span>`,
        xinxjilang: '击浪',
        xinxjilang_info: `每回合你使用第二张牌后摸两张牌，第三张牌后视为未使用过牌。`,
        xinxsian: '思安',
        xinxsian_info: `限定技，当你受到伤害时，你可以令此伤害-1，然后你此后额定摸牌数+X（X为你武将牌上发动过的技能数）。`,
        xinxsizhan: '思战',
        xinxsizhan_info: `限定技，当你造成伤害时，你可以令此伤害+1，然后你此后出杀上限+X（X为你武将牌上发动过的技能数）。`,
        xinxsitui: '思退',
        xinxsitui_info: `限定技，出牌阶段，你可以选择获得牌堆或弃牌堆中的X张普通锦囊牌。此后每回合结束时，你从弃牌堆中获得这些牌（X为你武将牌上发动过的技能数）。`,
        fyrhzhiwen: '鸷刎',
        fyrhzhiwen_info: `你可以将三张牌或最后一张手牌当作无次数限制的【杀】或【决斗】使用，然后你选择一项:<br>1.下次仅能以另一种方式转化；<br>2.下次仅能转化为另一种牌名；<br>${get.poptip('rule_beishui')}:此牌伤害+1。`,
        fyrhminnian: '泯念',
        fyrhminnian_info: `你进入濒死状态时，你可以将手牌摸至体力上限并横置两名角色，若其中包含你，你回复1点体力。`,
        fyrhfenjue: '焚玦',
        fyrhfenjue_info: `限定技，出牌阶段，若你没有手牌，你可以对自己造成1点火焰伤害，然后获得所有本回合进入弃牌堆的牌。`,
        fyrhlihua: '礼花',
        fyrhlihua_info: `出牌阶段限一次，你可以重铸一张牌，然后你可以将手牌区和${get.poptip('xinx_central')}合计三张类别各不同或花色均相同的牌移出游戏直到本回合结束。若如此做，你对一名角色造成1点火焰伤害。`,
        fyrhhuohuan: '火环',
        fyrhhuohuan_info: `出牌阶段限一次，你可以与一名角色拼点: 若你赢，重置${get.poptip('fyrhlihua')}的使用次数；若你没赢，重置${get.poptip('fyrhhuohuan')}的使用次数。`,


    },
    //动态翻译
    dynamicTranslate: {
        xinxsijiao(player) {
            const storage = player.storage.xinxsijiao;
            const str = lib.translate.xinxsijiao_info;
            if (!storage) return str;
            // 2. 正则表达式替换
            // /\[(\d+)\]/g 的意思是：
            // \[ \]  : 匹配左右方括号
            // (\d+)  : 捕获中间的数字 (例如 0, 1, 2)，把它作为 key
            return str.replace(/\[(\d+)\]/g, (match, key) => {
                // key 就是正则抓到的 "0", "1", "2"
                const val = storage[key];
                // 如果取到了值，就替换成 "[数值]"，否则保持原样
                return val !== undefined ? `[${val}]` : match;
            });
        },
        xinxcongzu(player) {
            const storage = player.storage.xinxcongzu; // 当前：true(阴)
            const location = player.storage.xinxbailian_location || '';
            const xVal = player.storage.xinxbailian_count || 0;
            const bailianText = `当你使用牌指定不为其他角色的目标后（当前X为${xVal}），将本句移至你另一技能当前项。`;
            let str = '锁定技，转换技，';
            // --- 阳状态 ---
            if (!storage) str += '<span class="bluetext">';
            str += '阳：当你使用基本牌时，重铸此牌；';
            // 如果核心句被困在阳状态 (xinxcongzu_yang)
            if (location === 'xinxcongzu_yang') {
                str += bailianText;
                // 如果当前技能是阴，说明陷阱触发，加个提示
                if (storage) str += '<br><span style="color:gray;font-size:0.8em">（注意：当前为阴状态，此句无法触发）</span>';
            }
            if (!storage) str += '</span>';
            str += '<br>';
            // --- 阴状态 ---
            if (storage) str += '<span class="bluetext">';
            str += '阴：';
            if (location === 'xinxcongzu_yin') str += bailianText;
            const isHere = location.startsWith('xinxcongzu');
            str += `你的出杀上限+${isHere ? xVal : 'X'}；`;
            if (storage) str += '</span>';
            return str;
        },
        xinxyibian(player) {
            const storage = player.storage.xinxyibian; // true(阴)
            const location = player.storage.xinxbailian_location || '';
            const xVal = player.storage.xinxbailian_count || 0;
            const bailianText = `当你使用牌指定不为其他角色的目标后（当前X为${xVal}），将本句移至你另一技能当前项。`;
            let str = '锁定技，转换技，';
            // --- 阳状态 ---
            if (!storage) str += '<span class="bluetext">';
            str += '阳：当你使用锦囊牌时，重铸此牌；';
            // 如果核心句卡在阳状态
            if (location === 'xinxyibian_yang') {
                str += bailianText;
                if (storage) str += '<br><span style="color:gray;font-size:0.8em">（注意：当前为阴状态，此句无法触发）</span>';
            }
            if (!storage) str += '</span>';
            str += '<br>';
            // --- 阴状态 ---
            if (storage) str += '<span class="bluetext">';
            str += '阴：';
            if (location === 'xinxyibian_yin') str += bailianText;
            const isHere = location.startsWith('xinxyibian');
            str += `你的额定摸牌数+${isHere ? xVal : 'X'}；`;
            if (storage) str += '</span>';
            return str;
        },
        xinxbailian(player) {
            const location = player.storage.xinxbailian_location || 'xinxbailian';
            const xVal = player.storage.xinxbailian_count || 0;
            if (location === 'xinxbailian') {
                return `锁定技，当你使用牌指定不为其他角色的目标后（当前X为${xVal}），将本句移至你另一技能当前项。`;
            } else {
                //return `<span style="opacity:0.6">暂无描述 （当前位于: ${get.translation(location)}）</span>`;
                let showName = get.translation(location.replace(/_(yin|yang)$/, ''));
                return `<span style="opacity:0.6">暂无描述（当前位于: ${showName}）</span>`;
            }
        }

    },
    //技能
    skill: {
        //寒浞
        xinxfenjiao: {
            audio: "ext:永夜之境/audio:4",
            init(player) {
                player.storage.xinxfenjiao_draw = 2;
            },
            mark: true,
            intro: {
                content(storage, player) {
                    let drawNum = player.storage.xinxfenjiao_draw || 2;
                    let lostNum = 0;
                    player.getHistory("lose", function (evt) {
                        if (evt.cards2) {
                            lostNum += evt.cards2.length;
                        }
                    });
                    let X = player.maxHp - drawNum;
                    let conditionStr = (X > 0) ? ("需失去 " + X + " 张") : "不可触发(X<=0)";
                    return "<li>额定摸牌数：" + drawNum +
                        "<li>本回合失牌：" + lostNum +
                        "<li>触发条件：" + conditionStr;
                },
                markcount(storage, player) {
                    //return player.getHistory("lose").reduce((sum, evt) => sum + (evt.cards2||[]).length, 0);
                    let drawNum = player.storage.xinxfenjiao_draw || 2;
                    let lostNum = player.getHistory("lose").reduce((sum, evt) => sum + (evt.cards2 || []).length, 0);
                    let targetNum = player.maxHp - drawNum;
                    return lostNum + "/" + targetNum;
                },
            },
            trigger: {
                player: "loseAfter",
                global: ["loseAsyncAfter", "gainAfter", "addJudgeAfter", "equipAfter", "addToExpansionAfter"],
            },
            logAudio: () => ["ext:永夜之境/audio/xinxfenjiao3.mp3", "ext:永夜之境/audio/xinxfenjiao4.mp3"],
            forced: true,
            filter(event, player) {
                if (!event.getl?.(player)?.cards2?.length) {
                    return false;
                }
                if (player.hasSkill('xinxfenjiao_block')) return false;
                const baseDraw = player.storage.xinxfenjiao_draw || 2;
                const X = player.maxHp - baseDraw;
                if (X <= 0) return false;
                let totalLost = 0;
                player.getHistory("lose", function (evt) {
                    if (evt.cards2) {
                        totalLost += evt.cards2.length;
                    }
                });
                return totalLost >= X;
            },
            async content(event, trigger, player) {
                player.addTempSkill('xinxfenjiao_block');
                const currentDraw = player.storage.xinxfenjiao_draw || 2;
                const promptStr = "偾骄：调整额定摸牌数（当前为 " + currentDraw + "，需失去 " + (player.maxHp - currentDraw) + " 张牌触发）";
                const result = await player.chooseNumbers(promptStr, [{
                    prompt: "设置新的额定摸牌数",
                    min: 1,
                    max: player.maxHp
                }], true).set("processAI", () => {
                    const player = get.player();
                    let target = player.maxHp - 3;
                    return [target];
                }).forResult();
                if (result.bool) {
                    const num = result.numbers[0];
                    player.storage.xinxfenjiao_draw = num;
                    game.log(player, "将额定摸牌数调整为", num);
                    await player.gainMaxHp();
                }
            },
            group: ['xinxfenjiao_effect'],
            subSkill: {
                effect: {
                    trigger: { player: "phaseDrawBegin2" },
                    forced: true,
                    filter(event, player) {
                        return !event.numFixed && typeof player.storage.xinxfenjiao_draw === 'number';
                    },
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxfenjiao' + [get.rand(1, 2)] + '.mp3');
                        trigger.num = player.storage.xinxfenjiao_draw;
                    },
                },
                block: {
                    mark: true,
                    charlotte: true,
                    marktext: "封",
                    intro: { content: "本回合不能使用牌" },
                    mod: {
                        cardEnabled(card, player) {
                            return false;
                        },
                    },
                    sub: true,
                }
            }


        },
        xinxxiangfu: {
            audio: 2,
            enable: "chooseToUse",
            filter(event, player) {
                const used = player.getStorage("xinxxiangfu_used");
                const list = ["sha", "shan", "jiu", "tao"];
                return list.some(name => {
                    if (used.includes(name)) return false;
                    const vcard = new lib.element.VCard({ name: name, isCard: true });
                    if (!event.filterCard(vcard, player, event)) return false;
                    // 检查是否有符合差值的目标
                    return game.hasPlayer(target => {
                        if (target === player) return false;
                        const diff = Math.abs(player.countCards("h") - target.countCards("h"));
                        if (name === "sha") {
                            return diff >= 3 && player.canUse(vcard, target);
                        }
                        if (name === "jiu") return diff === 2;
                        if (name === "shan") return diff === 1;
                        if (name === "tao") return diff === 0;
                        return false;
                    });
                });
            },
            chooseButton: {
                dialog(event, player) {
                    return ui.create.dialog('###相赴###<div class="text center">选择视为使用的牌', [get.inpileVCardList(info => get.type(info[2]) === "basic"), "vcard"]);
                },
                filter(button, player) {
                    const name = button.link[2];
                    const used = player.getStorage("xinxxiangfu_used");
                    if (used.includes(name)) return false;
                    const event = get.event().getParent();
                    const vcard = new lib.element.VCard(new lib.element.VCard({ name: button.link[2], nature: button.link[3], isCard: true }), player, event);
                    if (!event.filterCard(vcard, player, event)) return false;
                    return game.hasPlayer(target => {
                        if (target === player) return false;
                        const diff = Math.abs(player.countCards("h") - target.countCards("h"));
                        if (name === "sha") {
                            return diff >= 3 && player.canUse(vcard, target);
                        }
                        if (name === "jiu") return diff === 2;
                        if (name === "shan") return diff === 1;
                        if (name === "tao") return diff === 0;
                        return false;
                    });
                },
                check(button) {
                    return get.player().getUseValue(new lib.element.VCard({ name: button.link[2], nature: button.link[3], isCard: true }));
                },
                backup(links, player) {
                    const cardName = links[0][2];
                    return {
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],
                            isCard: true,
                        },
                        selectTarget: 1,
                        filterCard: () => false,//表示该技能无法选择任何卡
                        selectCard: -1,
                        log: false,
                        filterTarget(card, player, target) {
                            if (target === player) return false;
                            const diff = Math.abs(player.countCards("h") - target.countCards("h"));
                            if (cardName === "sha") return diff >= 3;
                            if (cardName === "jiu") return diff === 2;
                            if (cardName === "shan") return diff === 1;
                            if (cardName === "tao") return diff === 0;
                            return false;
                        },
                        async precontent(event, trigger, player) {
                            const target = event.result.targets[0];
                            const realCard = event.result.card;
                            player.logSkill("xinxxiangfu", target);
                            if (player.hasSkill("xinxyixin")) {
                                player.markAuto("xinxxiangfu", [target]);
                                player.markSkill("xinxxiangfu");
                                const targets = game
                                    .filterPlayer(target => {
                                        return player.getStorage("xinxxiangfu").includes(target) && target.hasSkill("xinxxiangfu");
                                    }).sortBySeat();
                                if (player.getStorage("xinxxiangfu").length > 1) {
                                    for (const target of targets) {
                                        target.removeSkill("xinxxiangfu");
                                        game.log(target, "失去了技能", `#g【${get.translation("xinxxiangfu")}】`);
                                    }
                                } else {
                                    target.addSkill("xinxxiangfu");
                                    game.log(target, "获得了技能", `#g【${get.translation("xinxxiangfu")}】`);
                                }
                            } else {
                                if (!player.hasSkill("xinxyixin")) {
                                    player.removeSkill("xinxxiangfu");
                                    game.log(player, "失去了技能", `#g【${get.translation("xinxxiangfu")}】`);
                                }
                            }


                            const n1 = player.countCards("h");
                            const n2 = target.countCards("h");
                            if (n1 !== n2) {
                                const winner = n1 > n2 ? player : target;
                                const loser = n1 > n2 ? target : player;
                                if (winner.countCards("h") > 0) {
                                    await winner.chooseToDiscard("h", true);
                                }
                                await loser.draw();
                            }
                            player.addTempSkill("xinxxiangfu_used", "roundStart");
                            player.markAuto("xinxxiangfu_used", [event.result.card.name]);


                            if (realCard.name === "sha") {
                                const vSha = { name: 'sha', nature: realCard.nature, isCard: true };
                                const result = await player.chooseTarget(
                                    "相赴：请选择【杀】的目标",
                                    true,
                                    (card, player, target) => {
                                        return player.canUse(vSha, target);
                                    },
                                    (target) => {
                                        return -get.attitude(player, target);
                                    }
                                ).forResult();
                                if (result.bool) {
                                    //把目标换成刚才新选的
                                    event.result.targets = result.targets;
                                    event.targets = result.targets;
                                    game.log(player, "对", result.targets, "使用了", realCard);
                                }
                                else {
                                    // 如果没得选或者强制卡住，视为空杀（目标为空）
                                    event.result.targets = [];
                                    event.targets = [];
                                }
                            }
                            // --- 针对【桃】 ---
                            else if (realCard.name === "tao") {
                                const dyingPlayer = _status.event.dying || (_status.event.getParent() && _status.event.getParent().dying);
                                if (dyingPlayer) {
                                    event.result.targets = [dyingPlayer];
                                    event.targets = [dyingPlayer];
                                } else {
                                    event.result.targets = [player];
                                    event.targets = [player];
                                }
                            }

                            // --- 针对【酒】 ---
                            else if (realCard.name === "jiu") {
                                event.result.targets = [player];
                                event.targets = [player];
                            }

                            // --- 针对【闪】 ---
                            else if (realCard.name === "shan") {
                                event.result.targets = [];
                                event.targets = [];
                            }
                        }
                    };
                },
                hiddenCard(player, name) {
                    return get.type(name) === "basic" && !player.getStorage("xinxxiangfu_used").includes(name);
                },
                prompt(links, player) {
                    const name = links[0][2];
                    let condition = "";
                    if (name === "sha") condition = "手牌差 ≥ 3";
                    else if (name === "jiu") condition = "手牌差 = 2";
                    else if (name === "shan") condition = "手牌差 = 1";
                    else if (name === "tao") condition = "手牌差 = 0";
                    return "〖相赴〗：请选择一名手牌差值为【" + condition + "】的角色，" +
                        "与其相赴（视为使用【" + get.translation(name) + "】）";
                },
            },
            intro: {
                mark(dialog, storage, player) {
                    if (storage) dialog.addSmall([storage.map(key => key.name), "character"]);
                },
            },
            ai: {
                order: 10,
                respondShan: true,
                respondSha: true,
                respondTao: true,
                order(item, player) {
                    return 10;
                },
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 5;
                    },
                },
            },
            subSkill: {
                used: {
                    charlotte: true,
                    onremove: true,
                    marktext: "已用",
                    intro: {
                        content: "本轮已使用牌名：$",
                    },
                    "skill_id": "xinxxiangfu_used",
                    sub: true,
                    sourceSkill: "xinxxiangfu",
                    "_priority": 0,
                },
            }
        },
        xinxyixin: {
            forced: true,
            /* trigger: {
                global: "dieAfter",
            },
            filter(event, player) {
                if (!player.isIn() && event.player != player) {
                    return false;
                }
                if (!player.getStorage("xinxxiangfu").includes(event.player)) {
                    return false;
                }
                return game.hasPlayer(current => current.isIn() && player.getStorage("xinxxiangfu").includes(current));
            },
            async content(event, trigger, player) {
                await player.unmarkAuto("xinxxiangfu", trigger.player);
                const targets = game
                    .filterPlayer(target => {
                        return player.getStorage("xinxxiangfu").includes(target);
                    }).sortBySeat();
                if (player.getStorage("xinxxiangfu").length == 1) {
                    if (targets.length > 0) {
                        targets[0].addSkill('xinxxiangfu');
                        targets[0].popup('xinxxiangfu');
                        game.log(targets[0], "获得了技能", `#g【${get.translation("xinxxiangfu")}】`);
                    }
                }
            } */
        },
        xinxsijiao: {
            init(player, skill) {
                player.storage[skill] = [0, 1, 2, false];
                get.info(skill).updateMark(player, skill);
            },
            onremove(player, skill) {
                player.removeTip(skill);
                delete player.storage[skill];
            },
            updateMark(player, skill) {
                player.markSkill(skill);
                player.addTip(skill, [get.translation(skill), ...player.storage[skill].slice(0, 3)].join(" "));
            },
            intro: {
                markcount: storage =>
                    storage
                        .slice(0, 3)
                        .map(i => i.toString())
                        .join(""),
                content: storage => "当前选项数值为：" + storage.slice(0, 3),
            },
            trigger: {
                player: "useCard",
            },
            filter(event, player) {
                return true;
            },
            forced: true,
            async content(event, trigger, player) {
                const storage = player.storage[event.name];
                const shownBasicCount = player.countCards("h", card => get.type(card) == "basic" && get.is.shownCard(card));
                const unshownCount = player.countCards("h", card => !get.is.shownCard(card));
                const handCount = player.countCards("h");
                if (shownBasicCount > 0 && shownBasicCount >= storage[0] && storage[0] > 0) {
                    let cards = player.getCards('h', card => get.type(card) == 'basic' && player.canRecast(card) && get.is.shownCard(card))
                    if (storage[0] == cards.length) {
                        await player.recast(cards);
                    }
                    else {
                        const result = await player.chooseCard('h', storage[0], "请重铸" + get.cnNumber(storage[0]) + "张明置基本牌")
                            .set('filterCard', card => get.type(card) == 'basic' && player.canRecast(card) && get.is.shownCard(card))
                            .set('ai', card => 6 - get.value(card))
                            .forResult();

                        if (result.bool) {
                            await player.recast(result.cards);
                        }
                    }
                }
                else if (unshownCount >= storage[1]) {
                    //let cards = player.getCards('h', card => !get.is.shownCard(card))
                    const result = await player.chooseCard('h', storage[1], true)
                        .set('filterCard', card => !get.is.shownCard(card))
                        .set('prompt', '请选择明置' + get.cnNumber(storage[1]) + '张手牌')
                        .set("ai", card => 6 - get.value(card))
                        .forResult();
                    if (result.bool) {
                        await player.addShownCards(result.cards, "visible_xinxsijiao");
                    }

                }
                else if (storage[2] > handCount) {
                    await player.drawTo(storage[2]);
                }
                else {
                    storage[0]++;
                    storage[1]++;
                    storage[2]++;
                    get.info(event.name).updateMark(player, event.name);
                    game.log(player, "的", "#g【" + get.translation(event.name) + "】", "数值均+1");
                    player.popup("数值+1");
                }
            },
            mod: {
                aiOrder(player, card, num) {  //保证手里有两张明置锦囊，且手里没有明置基本，即可实现摸至4，
                    // 优先使用【明置的基本牌】
                    if (get.type(card) == "basic" && get.is.shownCard(card)) {
                        return num + 100;
                    }
                    // 其次优先使用【暗置牌】 只有当明置非基本牌大于1时，才会令数值+1
                    if (!get.is.shownCard(card)) {
                        return num + 50;
                    }
                    return num;
                },
            }
        },
        xinxyuwei: {
            /* enable: "chooseToUse",
            selectCard: 1,
            position: "he",
            iscard: false,
            lose: false,
            prompt: "将一张牌移出游戏并使用之",
                 filter(event, player) {
                return get
                    .inpileVCardList(info => {
                        const name = info[2];
                        // 筛选虚拟牌堆列表：只保留那些“玩家手牌里有的牌名”
                        return player.hasCard(card => get.name(card) === name, 'h');
                    })
                    .some(card => event.filterCard(new lib.element.VCard({
                        name: card[2],
                        nature: card[3],
                        isCard: true
                    }), player, event));
            },
            filterCard(card, player) {
                // return lib.filter.filterCard(card, player, _status.event.getParent());
                const matchType = lib.filter.filterCard(card, player, _status.event.getParent());
                return matchType && player.hasUseTarget(card) && lib.filter.cardEnabled(card, player);
            },
            check(card) {
                return get.value(card);
            },
            async content(event, trigger, player) {
                const cards = event.cards;
                const type = get.type(cards[0]);
                await player.chooseUseTarget(cards, true);
                if (type == 'basic' || type == 'trick') {
                    await player.addToExpansion(cards, "gain2").set("gaintag", ["xinxyuwei"]);
                }
            },
            marktext: "围",
            intro: {
                mark(dialog, storage, player) {
                    const cards = player.getExpansions("xinxyuwei");
                    if (player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        return "共有" + get.cnNumber(cards.length) + "张牌";
                    }
                },
                markcount: "expansion",
            }, */

            /*  hiddenCard(player, name) {
                 if ((player.getStat("skill")?.xinxyuwei ?? 0) > 0) {
                     return false;
                 }
                 return player.hasCard(card => get.name(card) === name, 'h');
             },
             popup: false,
             enable: "chooseToUse",
             filter(event, player) {
                 return get
                     .inpileVCardList(info => {
                         const name = info[2];
                         return player.hasCard(card => get.name(card) === name, 'h');
                     })
                     .some(card => event.filterCard(new lib.element.VCard({
                         name: card[2],
                         nature: card[3],
                         isCard: true
                     }), player, event));
             },
             usable: 1,
             chooseButton: {
                 dialog(event, player) {
                     const list = get.inpileVCardList(info => {
                         const name = info[2];
                         return player.hasCard(card => get.name(card) === name, 'h');
                     });
                     return ui.create.dialog("逾围", [list, "vcard"]);
                 },
                 filter(button, player) {
                     const event = get.event().getParent();
                     const name = button.link[2];
                     const nature = button.link[3];
                     if (!player.hasCard(c => get.name(c) === name, 'h')) {
                         return false;
                     }
                     return event.filterCard(new lib.element.VCard({
                         name: name,
                         nature: nature,
                         isCard: true
                     }), player, event);
                 },
 
                 check(button) {
                     const event = get.event().getParent();
                     if (event.type !== "phase") {
                         return 1;
                     }
                     return get.player().getUseValue(new lib.element.VCard({
                         name: button.link[2],
                         nature: button.link[3],
                         isCard: true
                     }));
                 },
 
                 prompt(links) {
                     return '###逾围###<div class="text center">视为使用' + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】</div>";
                 },
                 backup(links) {
                     return {
                         filterCard: () => false,
                         selectCard: -1,
                         viewAs: {
                             name: links[0][2],
                             nature: links[0][3],
                             isCard: true
                         },
                         async precontent(event, trigger, player) {
                             
                     }
                 }
             }
         }, */
            audio: "ext:永夜之境/audio:2",
            marktext: "围",
            intro: {
                mark(dialog, storage, player) {
                    const cards = player.getExpansions("xinxyuwei");
                    if (player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        return "共有" + get.cnNumber(cards.length) + "张牌";
                    }
                },
                markcount: "expansion",
            },
            hiddenCard(player, name) {
                if ((player.getStat("skill")?.xinxyuwei ?? 0) > 0) {
                    return false;
                }
                return player.hasCard(card => get.name(card) === name, 'h');
            },
            popup: false,
            enable: "chooseToUse",
            filter(event, player) {
                return get.inpileVCardList(info => {
                    const name = info[2];
                    const nature = info[3];
                    // 只有当手牌里有名称且属性一致的牌时
                    return player.hasCard(card => {
                        return get.name(card) === name && (get.nature(card) || null) === (nature || null);
                    }, 'h');
                }).some(card => event.filterCard(new lib.element.VCard({
                    name: card[2],
                    nature: card[3],
                    isCard: true,
                }), player, event));
            },
            chooseButton: {
                dialog(event, player) {
                    const list = get.inpileVCardList(info => {
                        const name = info[2];
                        const nature = info[3];
                        // 名字相同 且 (属性均为null 或 属性相同)
                        return player.hasCard(card => {
                            return get.name(card) === name && (get.nature(card) || null) === (nature || null);
                        }, 'h');
                    });
                    return ui.create.dialog(`###逾围###<div class="text center">以${get.poptip("xinx_yichushiyong",)}`, [list, "vcard"]);
                },
                filter(button, player) {
                    const event = get.event().getParent();
                    const name = button.link[2];
                    const nature = button.link[3];
                    if (!player.hasCard(c => get.name(c) === name && (get.nature(c) || null) === (nature || null), 'h')) {
                        return false;
                    }
                    return event.filterCard(new lib.element.VCard({
                        name: name,
                        nature: nature,
                        isCard: true
                    }), player, event);
                },
                check(button) {
                    const event = get.event().getParent();
                    if (event.type !== "phase") {
                        return 1;
                    }
                    // return get.player().getUseValue(new lib.element.VCard({
                    //     name: button.link[2],
                    //     nature: button.link[3],
                    //     isCard: true
                    // }));
                    const player = _status.event.player;
                    const name = button.link[2];
                    const nature = button.link[3];
                    const cards = player.getCards('h', c =>
                        get.name(c) === name && (get.nature(c) || null) === (nature || null)
                    );
                    if (!cards.length) return 0;
                    let maxNum = 0;
                    for (const card of cards) {
                        const num = get.number(card);
                        if (num > maxNum) maxNum = num;
                    }
                    if (maxNum < 10) {
                        return 0;
                    }
                    return maxNum + 20;

                },
                prompt(links) {
                    return '###逾围###<div class="text center">使用' + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】并将其置于武将牌上";
                },
                backup(links, player) {
                    return {
                        selectCard: 1,
                        position: 'h',
                        filterCard: function (card) {
                            const reqName = links[0][2];
                            const reqNature = links[0][3];
                            // 名字相同，且属性相同
                            return get.name(card) === reqName && (get.nature(card) || null) === (reqNature || null);

                        },
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],
                            isCard: true
                        },
                        onuse(result, player) {
                            if (result.cards && result.cards.length) {
                                const type = get.type(result.cards[0]);
                                if (type == 'basic' || type == 'trick') {
                                    player.addToExpansion(result.cards, "gain2").set("gaintag", ["xinxyuwei"]);
                                    result.cards = [];
                                }
                            }
                        },
                        async precontent(event, trigger, player) {
                            const num = get.number(event.result.card);
                            player.logSkill('xinxyuwei');
                            await player.drawTo(num);
                            player.addSkill('xinxyuwei_gain');
                            if (!player.storage.xinxyuwei_gain) {
                                player.storage.xinxyuwei_gain = 0;
                            }
                            player.storage.xinxyuwei_gain += num;
                            player.addSkill('xinxyuwei_lose');
                            player.clearMark("xinxyuwei_lose");
                            player.addMark("xinxyuwei_lose", num, false);
                            player.markSkill('xinxyuwei_gain');
                            player.tempBanSkill("xinxyuwei", "forever");
                        }
                    }
                }
            },
            ai: {
                order: 10,
                result: {
                    player(player) {
                        if (player.countCards("h") > 7) return -1;
                        if (player.countCards("h") < 3) return 5;
                        return 2;
                    },

                },
            },
            subSkill: {
                gain: {
                    marktext: "失效",
                    intro: {
                        content(storage) {
                            return `使用${get.cnNumber(storage)}张牌后恢复${get.poptip('xinxyuwei')}`;
                        },
                    },
                    charlotte: true,
                    onremove: true,
                    trigger: { player: "useCardBegin" },
                    filter(event, player) {
                        return player.storage.xinxyuwei_gain > 0;
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        player.storage.xinxyuwei_gain--;
                        player.markSkill('xinxyuwei_gain');
                        if (player.storage.xinxyuwei_gain == 0) {
                            delete player.storage[`temp_ban_xinxyuwei`];
                            player.popup("逾围");
                            game.log(player, "恢复了技能", "#g【逾围】");
                            player.removeSkill("xinxyuwei_lose");
                            player.removeSkill("xinxyuwei_gain");
                        }
                    },

                },
                lose: {
                    marktext: "失去",
                    intro: {
                        content: `还剩#个回合失去${get.poptip('xinxyuwei')}`,
                    },
                    charlotte: true,
                    onremove: true,
                    trigger: { global: "phaseAfter" },
                    filter(event, player) {
                        return player.storage[`temp_ban_xinxyuwei`] && player.countMark("xinxyuwei_lose") > 0;
                    },
                    forced: true,
                    popup: false,
                    lastDo: true,
                    async content(event, trigger, player) {
                        await player.removeMark("xinxyuwei_lose", 1, false);
                        if (player.storage[`temp_ban_xinxyuwei`] && player.countMark("xinxyuwei_lose") == 0) {
                            player.removeSkill("xinxyuwei");
                            player.removeSkill("xinxyuwei_gain");
                        }
                        if (player.countMark("xinxyuwei_lose") == 0) {
                            player.removeSkill("xinxyuwei_lose");
                        }
                    },
                },
            },
        },
        xinxcongzu: {
            audio: "ext:永夜之境/audio:2",
            mark: true,
            zhuanhuanji: true,
            marktext: "☯",
            intro: {
                content(storage, player) {
                    let str = (storage ? '阴' : '阳') + '状态。';
                    if (!storage) str += '当你使用基本牌时，重铸此牌，然后转换为阴。';
                    else str += '你的出杀上限+X（X为“百炼”句触发次数）。';
                    if (player.storage.xinxbailian_location === 'xinxcongzu') {
                        str += '当你使用牌指定不为其他角色的目标后，将此句移走。';
                    }
                    return str;
                },
            },
            trigger: { player: "useCard" },
            filter(event, player) {
                return !player.storage.xinxcongzu && get.type(event.card) === 'basic';
            },
            forced: true,
            async content(event, trigger, player) {
                player.changeZhuanhuanji('xinxcongzu');
                await player.recast(trigger.card);
            },
            mod: {
                cardUsable(card, player, num) {
                    // 只要核心句在从卒上，当前是阴状态，就加成
                    // 使用 startsWith 来忽略 _yin 或 _yang 后缀
                    if (player.storage.xinxcongzu &&
                        (player.storage.xinxbailian_location || '').startsWith('xinxcongzu') &&
                        card.name === 'sha') {
                        return num + (player.storage.xinxbailian_count || 0);
                    }
                }
            },
        },
        xinxbailian: {
            audio: "ext:永夜之境/audio:4",
            init(player) {
                if (!player.storage.xinxbailian_location) {
                    player.storage.xinxbailian_location = 'xinxbailian';
                    player.storage.xinxbailian_count = 0;
                }
            },
            mark: true,
            intro: {
                content(storage, player) {
                    const loc = player.storage.xinxbailian_location || 'xinxbailian';
                    const count = player.storage.xinxbailian_count || 0;
                    if (loc === 'xinxbailian') {
                        return `当前拥有描述：当你使用牌指定不为其他角色的目标后，将本句移至你另一技能当前项。<br>当前X为：${count}`;
                    }
                    // 1. 去掉 _yin 或 _yang 后缀，得到纯技能名 (如 xinxyibian)
                    const rawName = loc.replace(/_(yin|yang)$/, '');
                    const cnName = get.translation(rawName);
                    let stateText = '';
                    if (loc.endsWith('_yin')) stateText = '(阴)';
                    if (loc.endsWith('_yang')) stateText = '(阳)';
                    return `当前描述位于技能：${cnName}${stateText}<br>当前X为：${count}`;
                }
            },
            trigger: { player: "useCardToPlayered" },
            filter(event, player) {
                if (event.target !== player || !event.isFirstTarget || event.targets.length !== 1) return false;
                const loc = player.storage.xinxbailian_location || 'xinxbailian';
                if (loc === 'xinxbailian') return true;
                // 解析后缀
                let requiredState = false; // 默认为阳
                let skillName = loc;
                if (loc.endsWith('_yin')) {
                    requiredState = true;
                    skillName = loc.replace('_yin', '');
                } else if (loc.endsWith('_yang')) {
                    requiredState = false;
                    skillName = loc.replace('_yang', '');
                }
                // 获取当前技能实际状态
                let actualState = player.storage[skillName];
                // 只有 实际状态 == 记录状态，才能触发移动
                return actualState === requiredState;
            },
            forced: true,
            popup: false,
            priority: 2,
            async content(event, trigger, player) {
                if (typeof player.storage.xinxbailian_count !== 'number') player.storage.xinxbailian_count = 0;
                player.storage.xinxbailian_count++;

                let currentRawLoc = (player.storage.xinxbailian_location || 'xinxbailian').replace(/_(yin|yang)$/, '');

                const list = player.getStockSkills(false, true).filter(s => s !== currentRawLoc);

                if (list.length > 0) {
                    const result = await player.chooseButton([
                        `百炼：请将描述从【${get.translation(currentRawLoc)}】移动至以下一个技能`,
                        [list, 'skill']
                    ])
                        .set('ai', button => {
                            const p = _status.event.player;
                            const target = button.link;
                            const shaCount = p.countCards('h', 'sha');
                            if (target === 'xinxcongzu') {
                                if (!p.storage.xinxcongzu) return 0;
                                if (shaCount > 2) return 20;
                                return 4;
                            }
                            if (target === 'xinxyibian') {
                                if (!p.storage.xinxyibian) return 0;
                                if (shaCount <= 2) return 15;
                                return 6;
                            }
                            if (target === 'xinxbailian') return 5;
                            return 1;
                        })
                        .set('forced', true)
                        .forResult();
                    if (result.links && result.links.length) {
                        player.logSkill("xinxbailian");
                        let targetSkill = result.links[0];
                        let suffix = '_yang'; // 默认标记为阳
                        // 移动时，记录目标当前的阴阳状态，检查新家的状态，决定给核心句贴什么标签
                        // 如果目标是 xinxcongzu 且它现在是阴状态，则后缀设为 _yin
                        if (targetSkill === 'xinxcongzu' && player.storage.xinxcongzu) suffix = '_yin';
                        if (targetSkill === 'xinxyibian' && player.storage.xinxyibian) suffix = '_yin';
                        if (targetSkill === 'xinxbailian') suffix = '';
                        player.storage.xinxbailian_location = targetSkill + suffix;
                        player.popup(get.translation(targetSkill), 'wood');
                        game.log(player, '将百炼描述移动到了', `#g【${get.translation(targetSkill)}】`);
                        player.updateMarks(['xinxcongzu', 'xinxbailian', 'xinxyibian']);
                    }
                }

                // 联动回转
                if (currentRawLoc === 'xinxcongzu' && player.storage.xinxcongzu) {
                    player.changeZhuanhuanji('xinxcongzu');
                    game.log(player, '的', '#g【从卒】', '重置为了阳状态');
                }
                else if (currentRawLoc === 'xinxyibian' && player.storage.xinxyibian) {
                    player.changeZhuanhuanji('xinxyibian');
                    game.log(player, '的', '#g【亦变】', '重置为了阳状态');
                }
            }
        },
        xinxyibian: {
            audio: "ext:永夜之境/audio:2",
            mark: true,
            zhuanhuanji: true,
            marktext: "☯",
            intro: {
                content(storage, player) {
                    let str = (storage ? '阴' : '阳') + '状态。';
                    if (!storage) str += '当你使用锦囊牌时，重铸此牌，然后转换为阴。';
                    else str += '你的额定摸牌数+X（X为“百炼”句触发次数）。';

                    if (player.storage.xinxbailian_location === 'xinxyibian') {
                        str += '当你使用牌指定不为其他角色的目标后，将此句移走。';
                    }
                    return str;
                },
            },
            trigger: { player: "useCard" },
            filter(event, player) {
                return !player.storage.xinxyibian && get.type2(event.card) === 'trick';
            },
            forced: true,
            async content(event, trigger, player) {
                player.changeZhuanhuanji('xinxyibian');
                await player.recast(trigger.card);
            },
            group: ["xinxyibian_effect"],
            subSkill: {
                effect: {
                    trigger: { player: "phaseDrawBegin2" },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        // 只要在亦变上，且当前是阴状态，就生效
                        return player.storage.xinxyibian &&
                            (player.storage.xinxbailian_location || '').startsWith('xinxyibian') &&
                            !event.numFixed;
                    },
                    async content(event, trigger, player) {
                        const xVal = player.storage.xinxbailian_count || 0;
                        if (xVal > 0) {
                            game.playAudio("../extension/永夜之境/audio/", 'xinxbailian' + [get.rand(1, 4)] + '.mp3');
                            trigger.num += xVal;
                            game.log(player, '的', '#g【亦变】', '令摸牌数 +' + xVal);
                        }
                    }
                }
            }
        },
        xinxqingding: {
            trigger: {
                player: ["drawBegin", "recoverBegin"],
                source: "damageBegin1",
            },
            forced: true,
            usable: 1,
            filter(event, player) {
                return event.num > 0;
            },
            async content(event, trigger, player) {
                const hasDraw =
                    player.getRoundHistory("gain", evt => {
                        return evt.getParent().name == "draw";
                    }).length;
                /*  const hasRecover = game.getRoundGlobalHistory("changeHp", evt => {
                    return evt.getParent().name == "recover" && [player].some(p => p == evt.player);
                }); */
                const hasRecover = player.storage.xinxqingding_recover;
                const hasDamage = player.getRoundHistory("sourceDamage").length;
                if (trigger.name == "draw" && !hasRecover && !hasDamage) {
                    trigger.num += trigger.num;
                    game.log(player, '发动', '#g【倾鼎】', '将摸牌数改为' + trigger.num);
                }
                if (trigger.name == "recover" && !hasDraw && !hasDamage) {
                    trigger.num += trigger.num;
                    game.log(player, '发动', '#g【倾鼎】', '将回复值改为' + trigger.num);
                }
                if (trigger.name == "damage" && !hasDraw && !hasRecover) {
                    trigger.num += trigger.num;
                    game.log(player, '发动', '#g【倾鼎】', '将伤害值改为' + trigger.num);
                }
                if (trigger.name == "draw" && hasDraw && hasRecover && hasDamage && !player.storage.xinxqingding) {
                    player.storage.xinxqingding = true;
                    game.log(player, '发动', '#g【倾鼎】', '，已成功得其三足');
                }
                if (trigger.name == "recover" && hasDraw && hasRecover && hasDamage && !player.storage.xinxqingding) {
                    player.storage.xinxqingding = true;
                    game.log(player, '发动', '#g【倾鼎】', '，已成功得其三足');
                }
                if (trigger.name == "damage" && hasDraw && hasRecover && hasDamage && !player.storage.xinxqingding) {
                    player.storage.xinxqingding = true;
                    game.log(player, '发动', '#g【倾鼎】', '，已成功得其三足');
                }
                if (trigger.name == "draw" && hasRecover && hasDamage && !player.storage.xinxqingding) {
                    trigger.cancel();
                    game.log(player, '发动', '#g【倾鼎】', '，取消了本次摸牌');
                }
                if (trigger.name == "recover" && hasDraw && hasDamage && !player.storage.xinxqingding) {
                    trigger.cancel();
                    game.log(player, '发动', '#g【倾鼎】', '，取消了本次回复');
                }
                if (trigger.name == "damage" && hasDraw && hasRecover && !player.storage.xinxqingding) {
                    trigger.cancel();
                    game.log(player, '发动', '#g【倾鼎】', '，取消了本次伤害');
                }

            },
            group: ["xinxqingding_recover", 'xinxqingding_draw'],
            subSkill: {
                recover: {
                    init(player) {
                        player.storage.xinxqingding_recover = false;
                    },
                    trigger: { player: "recoverAfter" },
                    forced: true,
                    charlotte: true,
                    silent: true,
                    filter(event, player) {
                        return event.num > 0;
                    },
                    async content(event, trigger, player) {
                        player.storage.xinxqingding_recover = true;
                        player.when({ global: "roundEnd" }).step(async () => {
                            delete player.storage.xinxqingding_recover;
                        });
                    }
                },
            }
        },
        xinxyuanyuan: {
            trigger: {
                player: "phaseDiscardBegin",
            },
            forced: true,
            filter(event, player) {
                return player.countCards("he") > 0;
            },
            async content(event, trigger, player) {
                const result = await player.chooseCardTarget({
                    forced: true,
                    prompt: get.prompt("xinxyuanyuan"),
                    prompt2: `<div class="text center">移出任意张牌，令至少一名其他角色视为对你使用【杀】</div>`,
                    position: "he",
                    selectCard: [0, Infinity],
                    selectTarget: [1, Infinity],
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    ai1(card) {
                        const player = get.player();
                        const num = Math.floor(player.countCards('h') / 2);
                        if (num <= 0) return 0;
                        const allCards = player.getCards("he");
                        allCards.sort((a, b) => {
                            const typeA = get.type(a);
                            const typeB = get.type(b);
                            const isBasicA = (typeA === 'basic');
                            const isBasicB = (typeB === 'basic');
                            if (isBasicA && !isBasicB) return -1;
                            if (!isBasicA && isBasicB) return 1;
                            return get.value(a, player) - get.value(b, player);
                        });
                        if (allCards.indexOf(card) < num) {
                            return 10 - get.value(card, player);
                        }
                        return 0;
                        //return -get.value(card);
                        /* const player = _status.event.player;
                        const handCount = player.countCards('h');
                        const hp = player.hp;
                        const num = handCount - hp; 
                        if (num <= 0) return 0;
                        const allCards = player.getCards("he");
                        allCards.sort((a, b) => get.value(a, player) - get.value(b, player));
                        if (allCards.indexOf(card) < num) {
                            return  5- get.value(card, player);
                        }
                        return 0; */
                    },
                    ai2(target) {
                        const player = get.player();
                        /* const att = get.attitude(_status.event.player, target);
                        if (player.name == 'xinx_wuyuan') {
                            if (att > 0) return 10;
                        } else {
                            if (att < 0) return 10;
                        }
                        return 0; */
                        const isWuyuan = (player.name === 'xinx_wuyuan');
                        const att = get.attitude(player, target);
                        if (isWuyuan) {
                            if (att < 0) return 0;
                        } else {
                            if (att > 0) return 0;
                        }
                        const candidates = game.filterPlayer(current => {
                            if (current === player) return false;
                            const currentAtt = get.attitude(player, current);
                            return isWuyuan ? (currentAtt >= 0) : (currentAtt <= 0);
                        });
                        if (candidates.length > 0) {
                            candidates.sort((a, b) => {
                                const attA = get.attitude(player, a);
                                const attB = get.attitude(player, b);
                                if (isWuyuan) {
                                    if (attA !== attB) return attB - attA;
                                } else {
                                    if (attA !== attB) return attA - attB;
                                }
                                return a.hp - b.hp;
                            });
                            if (target === candidates[0]) {
                                return 10;
                            }
                        }
                        return 0;
                    },
                })
                    .set('complexCard', true)
                    .forResult();

                if (result.bool) {
                    const targets = result.targets;
                    const cards = result.cards;
                    const tag = "xinxyuanyuan_" + player.name;
                    lib.translate[tag] = "" + lib.translate[player.name].slice(0, 4);
                    await player.addToExpansion(cards, "gain2").set("gaintag", [tag]);
                    player.updateMark("xinxyuanyuan");
                    if (targets.length) {
                        player.line(targets);
                        player.markAuto("xinxyuanyuan", targets);
                        for (const target of targets) {
                            if (target.isIn()) {
                                await target.useCard({ name: "sha", isCard: true }, player, false);
                            }
                        }
                        //await targets.forEach(target =>  target.useCard({ name: "sha", isCard: true }, player, false));
                    }

                }
            },
            mark: true,
            marktext: "冤",
            intro: {
                mark(dialog, storage, player) {
                    const tag = "xinxyuanyuan_" + player.name;
                    const cards = player.getExpansions(tag);
                    if (player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        return "共有" + get.cnNumber(cards.length) + "张牌";
                    }
                },
                markcount(storage, player) {
                    const tag = "xinxyuanyuan_" + player.name;
                    if (player.getExpansions) {
                        return player.getExpansions(tag).length;
                    }
                    return 0;
                },
            },
            group: ["xinxyuanyuan_kill", 'xinxyuanyuan_draw'],
            subSkill: {
                draw: {
                    trigger: { global: "useCardEnd" },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        const tag = "xinxyuanyuan_" + player.name;
                        const expansions = player.getExpansions(tag);
                        if (expansions.length <= 0) return false;
                        const targets = game
                            .filterPlayer(target => {
                                return player.getStorage("xinxyuanyuan").includes(target);
                            }).sortBySeat();
                        if (event.player != player && !targets.includes(event.player)) return false;
                        const useType = get.type2(event.card);
                        return expansions.some(card => get.type2(card) == useType);
                    },
                    async content(event, trigger, player) {
                        const useType = get.type2(trigger.card);
                        const target = trigger.player;
                        const tag = "xinxyuanyuan_" + player.name;
                        const expansions = player.getExpansions(tag);
                        const matches = expansions.filter(card => get.type2(card) == useType);
                        const result = await player.chooseButton(
                            [
                                `冤冤：移去一张【${get.translation(useType)}】牌，与${get.translation(target)}各摸一张牌`,
                                matches
                            ],
                            true
                        ).forResult();

                        if (result.bool) {
                            const lose = result.links[0];
                            await player.loseToDiscardpile(lose);
                            game.log(player, "移去了", lose);
                            player.updateMark("xinxyuanyuan");
                            await game.asyncDraw([player, target]);
                            // 再次获取当前剩余的牌，检查是否为空
                            const remaining = player.getExpansions(tag);
                            if (remaining.length == 0) {
                                game.log(player, "移去了所有“冤”牌");

                                const targets = game
                                    .filterPlayer(target => {
                                        return player.getStorage("xinxyuanyuan").includes(target);
                                    }).sortBySeat();
                                for (const target of targets) {
                                    target.addTempSkill("xinxyuanyuan");
                                    player.storage.xinxyuanyuan_kill_target = target;
                                }
                                /* target.addTempSkill("xinxyuanyuan");
                                player.storage.xinxyuanyuan_kill_target = target; */
                                player.addTempSkill("xinxyuanyuan_kill");
                                game.log("冤冤相报何时了？");
                            }
                        }
                    }
                },
                kill: {
                    trigger: {
                        source: "damageBegin3",
                    },
                    forced: true,
                    charlotte: true,
                    onremove: true,
                    filter(event, player) {
                        return event.player == player.storage.xinxyuanyuan_kill_target;
                    },
                    async content(event, trigger, player) {
                        const targetHp = Math.max(1, trigger.player.hp);
                        trigger.num = targetHp;
                        game.log(player, "对", trigger.player, "造成的伤害改为", targetHp);
                    }
                }

            }

        },
        xinxjilang: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjilang" + index + ".mp3" : 2),
            trigger: {
                player: "useCardEnd",
            },
            filter(event, player) {
                const index = player.getHistory("useCard").indexOf(event);
                return index == 1 || index == 2;
                //return player.getHistory("useCard").indexOf(event) == 1;
            },
            forced: true,
            locked: false,
            popup: false,
            async content(event, trigger, player) {
                const index = player.getHistory("useCard").indexOf(trigger);
                if (index == 1) {
                    player.logSkill("xinxjilang", null, null, null, [get.rand(1, 2)]);
                    await player.draw(2);
                } else if (index == 2) {
                    player.logSkill("xinxjilang", null, null, null, [get.rand(3, 4)]);
                    if (player.getHistory("useCard")) {
                        player.getHistory("useCard").length = 0;
                    }
                    var stat = player.getStat();
                    if (stat && stat.card) {
                        stat.card = {};
                    }
                }
                player.markSkill("xinxjilang");

            },
            mark: true,
            marktext: "浪",
            intro: {
                content(storage, player) {
                    return "本回合已使用 " + player.getHistory("useCard").length + " 张牌";
                },
                markcount(storage, player) {
                    let useNum = player.getHistory("useCard").length || 0;
                    return useNum;
                },
            },
        },
        xinxsian: {
            audio: "ext:永夜之境/audio:3",
            trigger: {
                player: "damageBegin4",
            },
            filter(event, player) {
                return event.num > 0;
            },
            limited: true,
            skillAnimation: true,
            animationColor: "thunder",
            "prompt2": "令即将受到的伤害-1",
            /* check(event, player) {
                const list = [];
                const skills = player.getOriginalSkills();
                for (let skill of skills) {
                    if (lib.skill[skill].limited && player.awakenedSkills.includes(skill)) {
                        list.push(skill);
                    }
                }
                const num = list.length;
                if (num < 1) { return false; }
                return true;
            }, */
            async content(event, trigger, player) {
                await player.awakenSkill(event.name);
                trigger.num--;
                const list = [];
                const skills = player.getOriginalSkills();
                for (let skill of skills) {
                    if (lib.skill[skill].limited && player.awakenedSkills.includes(skill)) {
                        list.push(skill);
                    }
                }
                if (!list.length) return;
                const num = list.length;
                player.addSkill('xinxsian_draw');
                player.addMark('xinxsian_draw', num, false);
            },

            subSkill: {
                draw: {
                    mark: true,
                    charlotte: true,
                    onremove: true,
                    marktext: "安",
                    intro: {
                        content(storage, player) {
                            return "额定摸牌数+" + storage;
                        },
                    },
                    trigger: {
                        player: "phaseDrawBegin2",
                    },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        return !event.numFixed && player.hasMark('xinxsian_draw');
                    },
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxsian' + [get.rand(1, 3)] + '.mp3');
                        trigger.num += player.countMark(event.name);
                    },
                }
            },
        },
        xinxsizhan: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                source: "damageBegin1",
            },
            logTarget: "player",
            limited: true,
            skillAnimation: true,
            animationColor: "fire",
            filter(event, player) {
                return true;
            },
            "prompt2": "令即将对其造成的伤害+1",
            check(event, player) {
                return (
                    get.attitude(player, event.player) < 0 &&
                    !event.player.hasSkillTag("filterDamage", null, {
                        player: player,
                        card: event.card,
                    })
                );
            },
            async content(event, trigger, player) {
                await player.awakenSkill(event.name);
                trigger.num++;
                const list = [];
                const skills = player.getOriginalSkills();
                for (let skill of skills) {
                    if (lib.skill[skill].limited && player.awakenedSkills.includes(skill)) {
                        list.push(skill);
                    }
                }
                if (!list.length) return;
                const num = list.length;
                player.addSkill('xinxsizhan_sha');
                player.storage.xinxsizhan_sha = num;
                player.markSkill("xinxsizhan_sha");
            },
            subSkill: {
                sha: {
                    init(player) {
                        player.storage.xinxsizhan_sha = 0;
                    },
                    mark: true,
                    onremove: true,
                    charlotte: true,
                    marktext: "战",
                    intro: {
                        content(storage, player) {
                            return `出杀上限+${(storage)}`;
                        },
                        markcount(storage) {
                            return `${(storage)}`;
                        },
                    },
                    mod: {
                        cardUsable(card, player, num) {
                            if (card.name == "sha") return num += player.storage.xinxsizhan_sha;
                        },
                    }
                }
            }
        },
        xinxsitui: {
            audio: "ext:永夜之境/audio:2",
            enable: "phaseUse",
            limited: true,
            skillAnimation: true,
            animationColor: "metal",
            discard: false,
            lose: false,
            delay: false,
            getNum(player) {
                let list = [];
                const skills = player.getOriginalSkills();
                for (let skill of skills) {
                    if (lib.skill[skill].limited && player.awakenedSkills.includes(skill)) {
                        list.push(skill);
                    }
                }
                return list.length;
            },
            prompt2(event, player) {
                const num = lib.skill.xinxsitui.getNum(player) + 1;
                return `是否选择获得牌堆或弃牌堆中的${num}张普通锦囊牌？`;
            },
            async content(event, trigger, player) {
                await player.awakenSkill(event.name);
                const num = lib.skill.xinxsitui.getNum(player);
                const cards = [];
                // 遍历牌堆 (ui.cardPile)
                for (let i = 0; i < ui.cardPile.childNodes.length; i++) {
                    let card = ui.cardPile.childNodes[i];
                    if (get.type(card) === 'trick') cards.push(card);
                }
                // 遍历弃牌堆 (ui.discardPile)
                for (let i = 0; i < ui.discardPile.childNodes.length; i++) {
                    let card = ui.discardPile.childNodes[i];
                    if (get.type(card) === 'trick') cards.push(card);
                }

                if (cards.length === 0) {
                    player.popup('无锦囊可取');
                    return;
                }
                const result = await player.chooseCardButton(
                    cards,
                    `请选择获得${num}张普通锦囊牌`,
                    [1, num]
                ).set('filterButton', (button) => {
                    return get.type(button.link) === 'trick';
                }).
                    set("ai", (button) => {
                        const player = get.player(),
                            card = button.link;
                        const allWuxies = cards.filter(c => c.name == 'wuxie');
                        if (card.name == "wuxie") {
                            if (allWuxies.length > 0 && card === allWuxies[0]) {
                                return 50;
                            }
                            return 5;
                        }
                        if (card.name == "huogong") {
                            return 40;
                        }
                        return player.getUseValue(card);
                    }).
                    forResult();
                if (result.bool && result.links && result.links.length) {
                    player.addSkill('xinxsitui_gain');
                    await player.gain(result.links, 'gain2');
                    player.addGaintag(result.links, "eternal_xinxsitui_tag");
                }
            },
            ai: {
                order: 10,
                result: {
                    player(player) {
                        if (lib.skill.xinxsitui.getNum(player) > 0) {
                            return 2;
                        }
                        return 0;
                    },
                },
            },
            subSkill: {
                tag: {
                    "skill_id": "xinxsitui_tag",
                    sub: true,
                    sourceSkill: "xinxsitui",
                },
                gain: {
                    trigger: {
                        global: "phaseJieshuBegin",
                    },
                    filter(event, player) {
                        return Array.from(ui.discardPile.childNodes).some(card => card.hasGaintag("eternal_xinxsitui_tag"));
                    },
                    charlotte: true,
                    popup: false,
                    forced: true,
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxsitui' + [get.rand(1, 2)] + '.mp3');
                        const cards = Array.from(ui.discardPile.childNodes).filter(card => card.hasGaintag("eternal_xinxsitui_tag"));
                        player.gain(cards, "gain2");
                    },
                    sub: true,

                },
            }

        },
        fyrhzhiwen: {
            audio: "ext:永夜之境/audio:2",
            enable: "chooseToUse",
            filter(event, player) {
                const handCount = player.countCards("h");
                const totalCount = player.countCards("hes");
                const banName = player.getStorage("fyrhzhiwen_used");
                const banNum = player.getStorage("fyrhzhiwen_num");
                let canMode1 = (handCount === 1) && (!banNum.includes(1));
                let canMode3 = (totalCount >= 3) && (!banNum.includes(3));
                if (!canMode1 && !canMode3) { return false; }
                return ["sha", "juedou"].some(name => {
                    if (banName.includes(name)) return false;
                    if (!event.filterCard({
                        name: name,
                        nature: null,
                        isCard: true,
                        storage: { zhiwenss: true }
                    }, player, event)) {
                        return false;
                    }
                    return true;
                });
                /* return get
                   .inpileVCardList(info => {
                       const name = info[2];
                       if (info[3]) {
                           return false;
                       }
                       if (name != "sha" && name != "juedou") {
                           return false;
                       }
                       return !banName.includes(name);
                   })
                   .some(card => {
                       return event.filterCard({
                           name: card[2] , 
                           nature: card[3],
                           isCard: true,   
                           storage: { zhiwenss: true }   
                       }, player, event);
                   }); */
            },
            chooseButton: {
                dialog(event, player) {
                    const list = get
                        .inpileVCardList(info => {
                            const name = info[2];
                            if (info[3]) {
                                return false;
                            }
                            if (name != "sha" && name != "juedou") {
                                return false;
                            }
                            return !player.getStorage("fyrhzhiwen_used").includes(name);
                        })
                        .filter(card => player.hasCard(event.filterCard({ name: card[2], nature: card[3] }, player, event), "hes"));
                    return ui.create.dialog("鸷刎", [list, "vcard"]);
                },
                filter(button, player) {
                    return true;
                },
                check(button) {
                    if (_status.event.getParent().type != "phase") {
                        return 1;
                    }
                    const player = get.event().player,
                        value = player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    return value;
                },
                backup(links, player) {
                    return {
                        filterCard(card, player) {
                            const banNum = player.getStorage("fyrhzhiwen_num");
                            const handCount = player.countCards("h");
                            const isHand = get.position(card) === "h";
                            let allowMode1 = (handCount === 1 && !banNum.includes(1) && isHand);
                            let allowMode3 = (!banNum.includes(3));
                            return allowMode1 || allowMode3;
                        },
                        selectCard() {
                            const player = get.player();
                            const banNum = player.getStorage("fyrhzhiwen_num");
                            const handCount = player.countCards("h");
                            const totalCount = player.countCards("hes");
                            // 使用 includes，数组判断
                            let canMode1 = (handCount === 1 && !banNum.includes(1));
                            let canMode3 = (totalCount >= 3 && !banNum.includes(3));
                            if (canMode1 && canMode3) return [1, 3];
                            if (canMode1) return [1, 1];
                            if (canMode3) return [3, 3];
                            return -1;
                        },
                        complexCard: true,
                        popname: true,
                        check(card) {
                            const player = get.player();
                            if (player.countCards("h") === 1) {
                                if (get.position(card) === "h") {
                                    return 20;
                                }
                                return -10;
                            }
                            //return 6 - get.value(card);
                            //return 1 / (get.value(card) || 0.5);
                            return 20 - player.getUseValue(card);
                        },
                        position: "hse",
                        viewAs: {
                            name: links[0][2], nature: links[0][3], storage: {
                                zhiwenss: true,
                            },
                        },
                        async precontent(event, trigger, player) {
                            const realCards = event.result.cards;
                            const useNum = realCards.length;
                            const cardName = event.result.card.name;
                            player.removeSkill("fyrhzhiwen_damage");
                            player.unmarkAuto("fyrhzhiwen_num", [1, 3]);
                            player.unmarkAuto("fyrhzhiwen_used", ["sha", "juedou"]);
                            const controlList = ["选项一", "选项二", "背水！"];
                            const choiceInfo = [
                                `下次仅能以${useNum === 1 ? "三张牌" : "一张牌"}方式转化`,
                                `下次仅能转化为${cardName === "sha" ? "【决斗】" : "【杀】"}`,
                                "背水！(伤害+1，且同时触发上述两项限制)"
                            ];
                            const result = await player
                                .chooseControl(controlList)
                                .set("choiceList", choiceInfo)
                                .set("prompt", get.prompt('fyrhzhiwen'))
                                .set("ai", () => {
                                    const player = _status.event.player;
                                    const h = player.countCards("h");
                                    if (h === 4 || h === 1) {
                                        return "背水！";
                                    }
                                    return "选项二";
                                })
                                .forResult();
                            player.logSkill("fyrhzhiwen");
                            if (["选项一", "背水！"].includes(result.control)) {
                                player.markAuto("fyrhzhiwen_num", [useNum]);
                            }
                            if (["选项二", "背水！"].includes(result.control)) {
                                player.markAuto("fyrhzhiwen_used", [cardName]);
                            }
                            if (result.control == "背水！") {
                                player.addTempSkill("fyrhzhiwen_damage");
                            }
                        }
                    };
                },
                prompt(links, player) {
                    const banNum = player.getStorage("fyrhzhiwen_num");
                    let numText = "最后一张手牌或三张牌";
                    if (banNum.includes(1)) {
                        numText = "三张牌";
                    }
                    else if (banNum.includes(3)) {
                        numText = "一张牌";
                    }
                    return "将" + numText + "当作" + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】使用或打出";
                },
            },
            hiddenCard(player, name) {
                return ["sha", "juedou"].includes(name) && player.countCards("hes");
            },
            mark: true,
            intro: {
                content(storage, player) {
                    let str = "";
                    const banNum = player.getStorage("fyrhzhiwen_num");
                    const banName = player.getStorage("fyrhzhiwen_used");
                    if (banNum.length) str += `<li>不可使用${banNum.join("/")}张牌转化\n`;
                    if (banName.length) str += `<li>不可转化为${banName.map(n => get.translation(n)).join("/")}`;
                    return str || "无限制";
                }
            },
            locked: false,
            mod: {
                cardUsable(card, player, num) {
                    if (card?.storage?.zhiwenss) {
                        return Infinity;
                    }
                },
                /* aiOrder(player, card, num) {
                    if (get.name(card) === "juedou") return num + 100;
                }, */
            },
            ai: {
                expose: 0.4,
                skillTagFilter(player) {
                    if (!player.countCards("hes")) {
                        return false;
                    }
                },
                order(item, player) {
                    const h = player.countCards("h");
                    if (h === 1) {
                        return 30;
                    }
                    if (h === 3) {
                        return 0.1;
                    }
                    return 6;
                },
                result: {
                    player(player) {
                        const h = player.countCards("h");
                        if (h === 1) return 15;
                        if (h === 3) return 0.1;
                        return 1;
                    },
                },
                tag: {
                    respondSha: true,
                    damage: 1,
                    nokeep: true,
                },
            },
            subSkill: {
                backup: {
                    "skill_id": "fyrhzhiwen_backup",
                    sub: true,
                    sourceSkill: "fyrhzhiwen",
                    "_priority": 0,
                },
                used: {
                    sub: true,
                },
                damage: {
                    trigger: {
                        global: "damageBegin1",
                    },
                    filter(event, player) {
                        var targets = event.getParent(2).targets;
                        if (!targets || targets.length != 1) {
                            return false;
                        }
                        if (!event.card || !event.card.storage || !event.card.storage.zhiwenss) {
                            return false;
                        }
                        var target = event.player,
                            card = event.cards[0];
                        if (!target.isIn()) {
                            return false;
                        }
                        return true;
                    },
                    forced: true,
                    charlotte: true,
                    content() {
                        trigger.num++;
                        game.log(player, "选择了背水令", "【" + get.translation(trigger.card.name) + "】", "伤害+1");
                        player.removeSkill("fyrhzhiwen_damage");
                    },

                },
            },


        },
        fyrhminnian: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "dying",
            },
            forced: true,
            locked: false,
            check: () => true,
            filter(event) {
                return game.hasPlayer(current => !current.isLinked());
            },
            async content(event, trigger, player) {
                player.drawTo(player.maxHp);
                const count = game.countPlayer(current => !current.isLinked());
                const num = Math.min(2, count);
                const result = await player
                    .chooseTarget(`请选择横置${get.cnNumber(num)}名角色`, [num, num], true, (card, player, target) => {
                        return !target.isLinked();
                    })
                    .set('ai', (target) => {
                        const player = _status.event.player;
                        if (target == player) {
                            return 10;
                        }
                        return -get.attitude(player, target);
                    })
                    .forResult();
                if (result.bool) {
                    const targets = result.targets;
                    player.line(targets);
                    for (let i of targets.sortBySeat()) {
                        await i.link(true);
                    }
                    if (targets.includes(player)) {
                        await player.recover();
                    }
                }
            },

        },
        fyrhfenjue: {
            audio: "ext:永夜之境/audio:1",
            enable: "phaseUse",
            limited: true,
            skillAnimation: true,
            animationColor: "fire",
            filter(event, player) {
                const cards = get.discarded().filterInD("d");
                return !player.countCards("h") && cards.length > 0;
            },
            async content(event, trigger, player) {
                player.awakenSkill(event.name);
                const cards = get.discarded().filterInD("d");
                await player.damage(1, 'fire');
                await player.gain(cards, "gain2");
            },
            ai: {
                order: 1,
                result: {
                    player(player) {
                        const cards = get.discarded().filterInD("d");
                        if (cards.length > 4) {
                            return 2;
                        }
                        return -0.5;
                    }
                },
            },
        },
        fyrhlihua: {
            enable: "phaseUse",
            usable: 1,
            position: "he",
            lose: false,
            discard: false,
            delay: false,
            filterCard: (card, player = get.owner(card), source, strict) => {
                if (!player) {
                    if (player === null) {
                        console.trace(`cardRecastable的player参数不应传入null,可以用void 0或undefined占位`);
                    }
                    player = get.owner(card);
                }
                const mod = game.checkMod(card, player, source, "unchanged", "cardRecastable", player);
                if (!mod) {
                    return false;
                }
                if (strict && mod == "unchanged") {
                    if (get.position(card) != "h") {
                        return false;
                    }
                    const info = get.info(card), recastable = info.recastable || info.chongzhu;
                    return Boolean(typeof recastable == "function" ? recastable(_status.event, player) : recastable);
                }
                return true;
            },
            check(card) {
                var player = _status.event.player,
                    val = 5 + ["shan", "tao"].includes(get.name(card)) * 1.5;
                if (player.needsToDiscard() > 2 && get.name(card) == "sha" && player.countCards("hs", "sha") > 1) {
                    val += 0.5;
                }
                return val - get.value(card);
            },
            async content(event, trigger, player) {
                const { cards, name } = event;
                await player.recast(cards);
                const cecards = get.discarded().filterInD("d");
                const hscards = player.getCards("h");
                const alllength = cecards.length + hscards.length;
                const checkHasValidCombo = () => {
                    const allCards = [...cecards, ...hscards];
                    if (allCards.length < 3) return false;
                    const suitCounts = {};
                    for (const card of allCards) {
                        const suit = get.suit(card);
                        suitCounts[suit] = (suitCounts[suit] || 0) + 1;
                        if (suitCounts[suit] >= 3) return true;
                    }
                    const types = new Set();
                    for (const card of allCards) {
                        types.add(get.type2(card));
                    }
                    if (types.size >= 3) return true;

                    return false;
                };
                if (alllength >= 3 && checkHasValidCombo()) {
                    const result = await player.chooseButton([
                        `###${get.prompt("fyrhlihua")}###<div class="text center">将三张类别各不同或花色均相同的牌移出游戏，对一名角色造成一点火焰伤害</div>`,
                        `###<div class="text center">中央区</div>###`,
                        [cecards],
                        `###<div class="text center">手牌区</div>###`,
                        [hscards]
                    ])
                        .set("selectButton", 3)
                        .set('filterButton', button => {
                            const selected = ui.selected.buttons;
                            if (!selected || selected.length === 0) return true;
                            const nextList = [...selected, button];
                            const types = nextList.map(but => get.type2(but.link));
                            const isSameSuit = nextList.every(but => get.suit(but.link) === get.suit(nextList[0].link));
                            const isDiffType = new Set(types).size === nextList.length;
                            return !ui.selected.buttons?.some(but => get.suit(but.link) !== get.suit(button.link))
                                || isDiffType;

                        })
                        .set("complexButton", true)
                        .set('ai', (button) => {
                            const player = _status.event.player;
                            const card = button.link;
                            if (!_status.event.ai_plan) {
                                const allCards = [...cecards, ...hscards];
                                const getDiscardCost = (c) => {
                                    let val = get.value(c, player);
                                    if (cecards.includes(c)) {
                                        val -= 1000;
                                    }
                                    return val;
                                };
                                let bestPlan = null;
                                let minCost = Infinity; 
                                // === 策略 A：花色均相同 ===
                                const suits = {};
                                for (const c of allCards) {
                                    const s = get.suit(c);
                                    if (!suits[s]) suits[s] = [];
                                    suits[s].push(c);
                                }
                                for (const s in suits) {
                                    if (suits[s].length >= 3) {
                                        // 按"代价"从小到大排序
                                        // 因为中央区代价是负数，所以中央区牌会排在最前面
                                        suits[s].sort((a, b) => getDiscardCost(a) - getDiscardCost(b));
                                        const pick = suits[s].slice(0, 3);
                                        const cost = pick.reduce((sum, c) => sum + getDiscardCost(c), 0);

                                        if (cost < minCost) {
                                            minCost = cost;
                                            bestPlan = pick;
                                        }
                                    }
                                }
                                // === 策略 B：类别各不同 ===
                                const typesMap = { basic: [], trick: [], equip: [] };
                                for (const c of allCards) {
                                    let type = get.type2(c);
                                    if (typesMap[type]) {
                                        typesMap[type].push(c);
                                    }
                                }
                                if (typesMap.basic.length > 0 && typesMap.trick.length > 0 && typesMap.equip.length > 0) {
                                    const pick = [];
                                    let currentCost = 0;
                                    ['basic', 'trick', 'equip'].forEach(type => {
                                        typesMap[type].sort((a, b) => getDiscardCost(a) - getDiscardCost(b));
                                        const bestCard = typesMap[type][0];
                                        pick.push(bestCard);
                                        currentCost += getDiscardCost(bestCard);
                                    });

                                    if (currentCost < minCost) {
                                        minCost = currentCost;
                                        bestPlan = pick;
                                    }
                                }
                                _status.event.ai_plan = bestPlan || [];
                            }

                            if (_status.event.ai_plan.includes(card)) {
                                return 1;
                            }
                            return 0;
                        })
                        .forResult();
                    if (result.bool && result.links?.length) {
                        await player.addToExpansion(result.links, "gain2").set("gaintag", ["fyrhlihua"]);
                        player.markSkill("fyrhlihua_mark");
                        const result1 = await player.chooseTarget('对一名角色造成一点火焰伤害').set('ai', target => {
                            return get.damageEffect(target, _status.event.player, _status.event.player);
                        }).forResult();
                        if (result1.bool) {
                            player.line(result1.targets[0])
                            result1.targets[0].damage('fire');
                        }
                    }
                    player.when('phaseAfter')
                        .step(async (event, trigger, player) => {
                            const cards = player.getExpansions("fyrhlihua");
                            if (cards.length) {
                                player.gain(cards, "draw");
                                game.log(player, "收回了" + get.cnNumber(cards.length) + "张“礼花”牌");
                            }
                        });
                }
                

            },
            marktext: "花", 
            mark: true,
            intro: {
                markcount(storage, player) {
                    const expCount = player.getExpansions("fyrhlihua").length;
                    const centerCount = get.discarded().filterInD("d").length;
                    return centerCount;
                },
                mark(dialog, storage, player) {
                    // 设置弹窗宽度，大框显示
                    dialog.css({ width: "50%" }); 
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight"); // 手机端全屏高度
                    }
                    const expCards = player.getExpansions("fyrhlihua");
                    const centerCards = get.discarded().filterInD("d"); 
                    // === 移出游戏区===
                    // 添加一个居中的标题，加粗，稍微调大字号
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; border-bottom:1px solid rgba(128,128,128,0.3)">🌸移出游戏区</div>');
                    
                    if (expCards.length) {
                        if (player.isUnderControl(true)) {
                            dialog.addAuto(expCards);
                        } else {
                            dialog.addText('<div class="text center">共有' + get.cnNumber(expCards.length) + '张牌</div>');
                        }
                    } else {
                        dialog.addText('<div class="text center" style="opacity:0.6">暂无卡牌</div>');
                    }
            
                    // === 中央区 (中) ===
                    // 添加标题，margin-top 用于拉开与上面卡牌的距离
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🀄中央区</div>');
                    
                    if (centerCards.length) {
                        dialog.addAuto(centerCards);
                    } else {
                        dialog.addText('<div class="text center" style="opacity:0.6">暂无卡牌</div>');
                    }
                }
            },
            ai: {
                order: 6,
                result: {
                    player(player, target) {
                        const cecards = get.discarded().filterInD("d");
                        const hscards = player.getCards("h");
                        const checkHasValidCombo = () => {
                            const allCards = [...cecards, ...hscards];
                            if (allCards.length < 3) return false;
                            const suitCounts = {};
                            for (const card of allCards) {
                                const suit = get.suit(card);
                                suitCounts[suit] = (suitCounts[suit] || 0) + 1;
                                if (suitCounts[suit] >= 3) return true;
                            }
                            const types = new Set();
                            for (const card of allCards) {
                                types.add(get.type2(card));
                            }
                            if (types.size >= 3) return true;
                            return false;
                        };
                        if (checkHasValidCombo()) {
                            return 5;
                        }
                        return 1;
                    },
                },

            },
        },
        fyrhhuohuan:{
            enable: "phaseUse",
            usable: 1,
            filter(event, player) {
                return !player.hasSkillTag("noCompareSource");
            },
            filterTarget(card, player, target) {
                return player.canCompare(target);
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const result = await player.chooseToCompare(target).forResult();
                if (result?.winner == player) {
                    delete player.getStat().skill.fyrhlihua;
                    game.log(player,'重置了',"#g【礼花】");
                } else {
                    delete player.getStat().skill.fyrhhuohuan;
                    game.log(player,'重置了',"#g【火环】");
                }
            },
            ai: {
                order: 6,
                result: {
                    target(player, target) {
                        const cecards = get.discarded().filterInD("d");
                        const hscards = player.getCards("h");
                        const checkHasValidCombo = () => {
                            const allCards = [...cecards, ...hscards];
                            if (allCards.length < 3) return false;
                            const suitCounts = {};
                            for (const card of allCards) {
                                const suit = get.suit(card);
                                suitCounts[suit] = (suitCounts[suit] || 0) + 1;
                                if (suitCounts[suit] >= 3) return true;
                            }
                            const types = new Set();
                            for (const card of allCards) {
                                types.add(get.type2(card));
                            }
                            if (types.size >= 3) return true;
                            return false;
                        };
                        if (checkHasValidCombo()) {
                            return -2;
                        }
                        return 0;
                    },
                },
            },

        },
        fyrhzaoju:{


        },







    },
    //武将介绍
    characterIntro: {
    },
    //武将替换
    characterReplace: {
    },
    characterFilter: {//本体禁将
    },
    characterSubstitute: {//皮肤切换
    },
    //武将姓名
    pinyins: {

    },

    //珠联璧合
    perfectPair: {

    },
    //衍生卡牌
    card: {

    },


};
