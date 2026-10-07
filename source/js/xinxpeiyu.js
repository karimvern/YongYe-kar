import { lib, game, ui, get, ai, _status } from '../../../../noname.js';

/**
 * 阮梅〖培育〗
 * 每轮开始时，从场上角色技能描述中提取时机与效果各一个（不能与选择过的重复），
 * 组合成一个技能并令一名角色获得之（组合技能每回合限一次）。
 *
 * 词条池手动维护，匹配机制（时机与效果共用）：
 * - match：短语数组，双方均经 normalizeText 归一化（HTML剔除/中文数字转阿拉伯/剔"来自××的"插入语）后做包含判断，
 *   写"受到1点伤害"即可命中"受到来自你的一点伤害"等变体；
 * - numMatch（数值型效果专用）：正则（第1捕获组为数值），在归一化后的全场描述中提取所有出现过的数值，
 *   每个数值各生成一个独立选项（如场上有人写"摸三张牌"→出现"你可以摸3张牌"，写"摸两张牌"→"你可以摸2张牌"），
 *   key 形如 draw_3，与静态 key 一样参与"不能重复"记录。
 * - 引擎级时机提取（与描述匹配取并集）：直接读取场上技能实际注册的 trigger 声明——引擎 filterTrigger
 *   按"位置(player/source/target/global)+事件名"精确派发，故声明经 triggerAlias 等价表可无损映射为
 *   时机词条，比描述文本匹配更准确（描述措辞不规范也能提取到，如"当你使用一张牌后"类变体）。
 *
 * numMatch 生成模板（模块顶层，词条定义处直接调用，产出 RegExp 填入 numMatch 字段）：
 *
 * 【前置数式】numMatchBefore(动词, 锚点, 量词?) —— 动词 + ≤6字修饰语 + 数字 + 可选量词 + 锚点，
 *   用于"数字在效果对象前"的句式：
 *   numMatchBefore("摸", "张牌")                      → /摸[^，。；]{0,6}([0-9]+)张牌/
 *     命例："摸3张牌"、"摸至多3张牌"（"至多"被 [^，。；]{0,6} 弹性吞掉）
 *   numMatchBefore(["获得","选择"], "本回合弃牌堆")     → /(?:获得|选择)[^，。；]{0,6}([0-9]+)张?本回合弃牌堆/
 *     命例："获得至多X张本回合弃牌堆"（X 先被归一化为 1）、"获得2本回合弃牌堆的牌"（量词可省）
 *   numMatchBefore("回复", "点体力", "点")            → /回复[^，。；]{0,6}([0-9]+)点?点体力/
 *     命例："回复2点体力"、"回复至多两点体力"（中文数字先转阿拉伯）
 *
 * 【后置数式】numMatchAfter(锚点, 量词?) —— 锚点 + ≤4字修饰语 + 数字 + 可选量词，
 *   用于"数字在效果对象后"的句式（无动词参数）：
 *   numMatchAfter("本回合弃牌堆")                    → /本回合弃牌堆[^，。；]{0,4}([0-9]+)张?/
 *     命例："使用本回合弃牌堆一张牌"（"一"转 1）
 *
 * 【动作数式】numMatchAny(动词, {unit, flex}?) —— 动作词 + ≤flex字修饰语 + 数字 + 量词，自带纯锚点保底，
 *   用于"效果对象就是动作本身"的句式（重铸/横置/亮出等，数字紧跟动作词）：
 *   numMatchAny("重铸")                             → [/重铸[^，。；、]{0,6}([0-9]+)张/, /重铸/]
 *     命例："重铸2张牌"、"重铸至多两张牌"；全场无数字时（"你可以重铸【酒】"）纯锚点命中
 *     并由 getEffects 保底落为 num=1。新数值词条若动作词即锚点，优先用本模板。
 *
 * 【条件变体式】numMatchChange(动词, {unit, flex}?) —— 动词 + 同句内 ≤flex 字 + "改为N(张/点)"，
 *   用于"关键词……数值……数值"的条件变体句式（壤壤型："你可以摸一张牌，若……，改为三张"——
 *   第二个数字前是"改为"而非动词，主式提不到，靠该式在同句内兜出变体量；
 *   与主式的数值合并去重后各生成一个选项，"摸1张牌""摸3张牌"同时出现）：
 *   numMatchChange("摸")                     → /摸[^。；]{0,24}改为([0-9]+)张/
 *     命例："摸1张牌，若与上一次时机不同，改为3张"→提取3（主式已提取1）
 *   numMatchChange("回复", {unit: "点"})      → /回复[^。；]{0,24}改为([0-9]+)点/
 *     命例："回复1点体力，若……，改为2点"→提取2
 *   槽位排除句号/分号（同句约束、天然不跨技能拼接），允许逗号与括号（条件从句必含）；
 *   动词可为数组（同前置式），也可直接传正则源串（如 "令[^，。；]{0,10}摸" 限定"令××摸"句式）；
 *   插入语较长时调大 flex（傲才"观看牌堆顶两张牌……（若你没有手牌则改为四张）"需 flex: 32）。
 *
 * 填空三问：①动词（多个用数组；后置式无）②锚点（效果对象的标志词，如"本回合弃牌堆""张牌"）
 * ③量词（张/点/名/次，默认"张"；锚点已含该字时自动去重，不会产出"张?张牌"）。
 * 注意：修饰语上限（前置6字/后置4字）不可过大，否则跨短语误匹配；模板匹配的是归一化后文本。
 */
//numMatchBefore(["获得","选择"], "本回合弃牌堆") 展开：/(?:获得|选择)[^，。；]{0,6}([0-9]+)张?本回合弃牌堆/
const numMatchBefore = (verbs, anchor, unit = "张") => {
    const v = Array.isArray(verbs) ? `(?:${verbs.join("|")})` : verbs;
    const u = anchor.startsWith(unit) ? "" : unit + "?";
    return new RegExp(`${v}[^，。；]{0,6}([0-9]+)${u}${anchor}`);
};
//numMatchAfter("本回合弃牌堆") 展开：/本回合弃牌堆[^，。；]{0,4}([0-9]+)张?/
const numMatchAfter = (anchor, unit = "张") =>
    new RegExp(`${anchor}[^，。；]{0,4}([0-9]+)${unit}?`);
//numMatchAny("重铸") 展开：[/重铸[^，。；、]{0,6}([0-9]+)张/, /重铸/] —— 动作词数式（自带锚点保底）
//用于"动作词 + ≤6字修饰语 + 数字 + 量词"句式（数字紧跟动作词，效果对象就是动作本身）：
//  命例："重铸2张牌""重铸至多两张牌""重铸一张手牌"；描述完全无数字时（"你可以重铸【酒】"），
//  第 2 条纯锚点由 getEffects 的保底机制落为 num=1。槽位额外排除顿号、防止并列动作误串。
//also：附加锚点（RegExp 或 字符串数组）——追加等价的纯锚点式，用于同义描述变体。
//  命例：numMatchAny("移出", {also: [/置于[^，。；]{0,6}武将牌/]})
//  "将一张牌置于武将牌上"（不含"移出"字样）也命中该词条并保底 num=1。
//参数：{unit 量词默认"张"; flex 修饰语上限默认6; also 附加锚点数组}
const numMatchAny = (verb, { unit = "张", flex = 6, also = [] } = {}) => [
    new RegExp(`${verb}[^，。；、]{0,${flex}}([0-9]+)${unit}`),
    new RegExp(verb),
    ...also.map(a => (a instanceof RegExp ? a : new RegExp(a))),
];
//numMatchChange("摸") 展开：/摸[^。；]{0,24}改为([0-9]+)张/ —— 条件变体式（"改为N张/点"兜底）
//用于"关键词……数值……数值"句式：第二个数字前是"改为"而非动词，主式提不到，靠该式在同句内兜出变体量。
//槽位排除句号/分号（同句约束、天然不跨技能拼接），允许逗号与括号（条件从句必含，故默认 flex 为 24）；
//动词可为数组，也可直接传正则源串（如 "令[^，。；]{0,10}摸" 限定"令××摸"句式）。
const numMatchChange = (verb, { unit = "张", flex = 24 } = {}) => {
    const v = Array.isArray(verb) ? `(?:${verb.join("|")})` : verb;
    return new RegExp(`${v}[^。；]{0,${flex}}改为([0-9]+)${unit}`);
};
//牌名属性前缀映射（"火【杀】"→nature:fire；同名虚拟牌靠nature区分属性）
const pyNatureMap = { 火: "fire", 雷: "thunder", 冰: "ice" };
//cardMatchView() —— 牌名型匹配（动态牌名词条专用）：从"视为/当作……使用(一张/任意)(火/雷/冰)【XXX】"句式中
//提取具体牌名。捕获组：1 = 属性前缀（火/雷/冰，可省），2 = 【】内的中文牌名（由 getCardId 反查为牌名id）。
//每个提取到的牌名由 getEffects 生成一个独立选项，key 形如 viewsome_sha、viewsome_sha_fire。
//槽位排除顿号与【：前者防止并列短语误串，后者防止"使用【A】或【B】"时把两个牌名并成一个；
//"使用"与"【"之间放宽到10字，覆盖"或打出一张""一张无距离限制的"等长插入语；
//槽位同时排除属性字（火雷冰），否则贪婪槽会把属性前缀吞掉导致 nature 丢失（"一张火【杀】"须捕获到fire）；
//属性字后的"属性的/属性的"由可选组容纳（"一张火属性的【杀】"）。
const cardMatchView = () => [
    /(?:视为|当作|当做)[^，。；、]{0,6}使用[^，。；、【火雷冰]{0,10}(火|雷|冰)?(?:属性)?(?:的)?【([^】]+)】/,
];


//tdnodes 两列网格样式：按钮容器改为flex换行，每个按钮占半宽（预留tdnode左右margin共12px），
//克服 tdnode 默认 inline-block + width:auto!important 导致的宽度不可控、回落单列问题
const gridHandle = dialog => {
    const container = dialog.buttons[0]?.parentNode;
    if (container) {
        container.style.setProperty("display", "flex", "important");
        container.style.setProperty("flex-wrap", "wrap", "important");
    }
    dialog.buttons.forEach(i => {
        i.style.setProperty("width", "calc(50% - 12px)", "important");
        i.style.setProperty("box-sizing", "border-box", "important");
        i.style.setProperty("text-align", "left", "important");
    });
}

//========== 培育选择框：自带卡片皮肤 + 词条类别配色 ==========
//卡片外观（两列网格/卡片底/左侧竖条/右侧箭头/悬停与选中态）是 extension.css 里的一套通用规则，
//本体 textbutton/tdnodes 由 precontent.js 的覆写挂类名（受扩展设置"选项按钮卡片皮肤"开关控制），
//培育的选择框则由下面的 pySkin 自己挂类名——所以关掉那个开关，培育依旧是卡片样式、且保留类别色。
//注意 tdnode 的 width/margin/padding/font-size 均带 !important（layout/default/layout.css:3866），
//内联样式同样带 important 会反过来压住皮肤，故布局一律交给 CSS 选择器覆盖。
const pyTagColors = {
    phase: "#d8b26a", use: "#7fb3d5", target: "#7fb3d5", hp: "#5fc4b2",
    damage: "#d4675a", gain: "#8fbf6f", lose: "#b39ddb", die: "#9c9c9c",
    turn: "#9c9c9c", discard: "#c2a27a", other: "#9c9c9c",
};
//timingPool 词条自带 tags，effectPool 词条没有，故按 key 前缀补一张对照表（数值型 key 形如 draw_3/drawOthers_2）
const pyKeyTags = [
    [/^(draw|gain|give|viewTop|moveCard|compare)/, "gain"],
    [/^(recover|drawToMaxHp|gainMaxHp)/, "hp"],
    [/^(damage|attackRange|shaNoRange|shaUsable|gainDamageCard)/, "damage"],
    [/^(discard|mediscard|lose|banskill|disableEquip|handcard)/, "lose"],
    [/^(turnOver|link|changeHujia|extraTurn)/, "turn"],
    [/^(cardsDiscard)/, "discard"],
    [/^(dieAfter)/, "die"],
];
//link（词条 key）→ 词条 → 类别 → 色值；数值型 key 先按 "基础key_" 前缀回落到基础词条
const pyTagOf = (link, pool) => {
    const item = pool.find(i => i.key == link) || pool.find(i => String(link).startsWith(i.key + "_"));
    if (!item) return "other";
    return (
        (item.tags || []).find(tag => pyTagColors[tag]) ||
        (pyKeyTags.find(([re]) => re.test(item.key)) || [])[1] ||
        "other"
    );
};
//培育自带的卡片皮肤：不跟随扩展设置里的全局开关（那个开关只管本体 textbutton/tdnodes），
//故这里把皮肤类名直接挂在培育自己的对话框上——关掉全局开关，培育依旧是卡片样式。
const pySkin = dialog => {
    dialog.classList.add("xinx-peiyu");
    dialog.buttons.forEach(button => {
        button.classList.add("xinx-cardbtn");
        //tdnodes 的网格与卡片规则挂在行容器上（本体 Dialog.add 新建的 .buttons）
        if (button.classList.contains("tdnodes")) button.parentNode?.classList?.add("xinx-cardui");
    });
};
//pool：按钮 link 对应的词条池（时机传 timingPool、效果传 effectPool）
const pyHandle = pool => dialog => {
    pySkin(dialog);
    //dialog.buttons.forEach(button => button.style.setProperty("--py-c", pyTagColors[pyTagOf(button.link, pool)]));
    //【中性色（暂不使用）】注释掉上面这行即为无色版：不写 --py-c 时左侧竖条自动回落 extension.css 里的中性色
};

export let xinxpeiyuSkill = {
    //audio 不能写字符串 'xinxpeiyu'：引擎对无"/"无"."的字符串按技能名引用（audio.js:194 getReferenceAudio），
    //技能名恰为 xinxpeiyu 会自引用自身 audio 造成无限递归栈溢出；实际音效全部由 logAudio 返回完整路径
    audio: "ext:永夜之境/audio:15",
    //培育本身触发确认时播1-3（引擎无cost触发技在createTrigger中自动logSkill）
    logAudio: () => "ext:永夜之境/audio/xinxpeiyu" + get.rand(1, 3) + ".mp3",
    trigger: { global: ["roundStart", 'roundEnd'] },
    filter(event, player) {
        return lib.skill.xinxpeiyu.getTimings(player).some(timing => lib.skill.xinxpeiyu.getEffects(player, timing).length);
    },
    frequent: true,
    async content(event, trigger, player) {
        const info = lib.skill.xinxpeiyu;
        //① 选时机（已用过的、场上技能描述中未出现的均不展示）
        const timings = info.getTimings(player).filter(timing => info.getEffects(player, timing).length);
        if (!timings.length) return;
        const timingResult = await player
            .chooseButton([
                "###培育###请选择要组合的时机",
                //两列卡片皮肤（见 pyHandle / extension.css 的 .xinx-peiyu）
                [timings.map(timing => [timing.key, timing.name]), "tdnodes"],
                //[pyHandle(info.timingPool), "handle"],
                [gridHandle, "handle"],
            ])
            .set("ai", () => Math.random())
            .forResult();
        if (!timingResult?.bool || !timingResult.links?.length) return;
        const timing = timings.find(item => item.key == timingResult.links[0]);
        if (!timing) return;
        //② 一次性选择效果与获得技能的角色（chooseButtonTarget合并原"选效果"+"选角色"两步）
        const effects = info.getEffects(player, timing);
        //效果按钮副标题：补上原先展示在chooseTarget提示里的组合技能限制（时机与次数），避免信息丢失
        const getLimit = effect => (effect.passive ? "" : timing.effect.enable ? "出牌阶段限一次" : `${timing.name} · 每回合限一次`);
        const combinedResult = await player
            .chooseButtonTarget({
                createDialog: [
                    `###培育###请为「${timing.name}」组合选择一个效果，并令一名角色获得该技能`,
                    //两列卡片皮肤（见 pyHandle / extension.css 的 .xinx-peiyu）
                    [effects.map(effect => [effect.key, effect.name]), "tdnodes"],
                    //[pyHandle(info.effectPool), "handle"],
                    [gridHandle, "handle"],
                ],
                filterTarget(card, player, target) {
                    return target.isIn();
                },
                ai1() {
                    return Math.random();
                },
                ai2(target) {
                    return get.attitude(get.player(), target);
                },
            })
            .forResult();
        if (!combinedResult?.bool || !combinedResult.links?.length || !combinedResult.targets?.length) return;
        const effect = effects.find(item => item.key == combinedResult.links[0]);
        if (!effect) return;
        const target = combinedResult.targets[0];
        //④ 生成随机后缀的组合技能并注册（参照 olhedao 天书）
        let skill;
        while (true) {
            skill = "xinxpeiyu_zuhe_" + Math.random().toString(36).slice(-8);
            if (!lib.skill[skill]) break;
        }
        game.broadcastAll((skill, timing, effect) => {
            const { filter: filterFrom, ...otherFrom } = timing.effect;
            const { filter: filterTo, cost, content, ...otherTo } = effect.effect;
            //enable型时机：引擎点击技能按钮后不执行cost（ui.click.skill仅backup，useSkill直接跑content，
            //cost仅在trigger型的createTrigger结算中被调用），故将cost包装为content的前置步骤——
            //模仿createTrigger的cost事件包装，效果词条的cost原样复用、零改动
            const wrapEnable = !!timing.effect.enable && typeof cost == "function" && typeof content == "function";
            lib.skill[skill] = {
                //造物触发时按效果key选音效：Others系（令一名角色XX）播11-15，其余播4-10；
                //trigger型由createTrigger的logSkill自动播（content.js:3666），enable型由useSkill自动播（content.js:9699），无需在各content手动调用；
                //闭包捕获effect.key（数值型形如"drawOthers_2"，故用includes判断），logAudio的links参数用不到
                logAudio: () =>
                    effect.key.includes("Others")
                        ? "ext:永夜之境/audio/xinxpeiyu" + get.rand(11, 15) + ".mp3"
                        : "ext:永夜之境/audio/xinxpeiyu" + get.rand(4, 10) + ".mp3",
                charlotte: true,
                mark: true,
                ...(effect.passive ? {} : { usable: 1 }),
                filter(...args) {
                    return (filterFrom ? filterFrom(...args) : true) && (filterTo ? filterTo(...args) : true);
                },
                ...otherFrom,
                ...otherTo,
                //trigger型：cost/content 原样注册（引擎在createTrigger中先cost后content）
                ...(cost && !wrapEnable ? { cost } : {}),
                ...(content && !wrapEnable ? { content } : {}),
            };
            if (wrapEnable) {
                lib.skill[skill].content = async function (event, trigger, player) {
                    const next = game.createEvent(`${skill}_cost`);
                    next.player = player;
                    next.skill = skill;
                    next.forceDie = true;
                    next.includeOut = true;
                    next.setContent(cost);
                    const result = await next.forResult();
                    if (result?.bool === false) {
                        //cost中取消：回滚本次使用计数（useSkill已计入stat.skill），不消耗"限一次"
                        const stat = player.stat[player.stat.length - 1];
                        if (stat.skill?.[skill]) stat.skill[skill]--;
                        if (stat.allSkills) stat.allSkills--;
                        return;
                    }
                    //cost选定的目标/牌挂到技能事件（useSkill流程不传递cost结果，对照createTrigger的传参：targets/cards/cost_data）
                    if (result?.targets?.length) event.targets = result.targets;
                    if (result?.cards?.length) event.cards = result.cards;
                    if ("cost_data" in result) event.cost_data = result.cost_data;
                    await content(event, trigger, player);
                };
            }
            lib.translate[skill] = "造物";
            lib.translate[skill + "_info"] = effect.passive
                ? effect.name
                : timing.effect.enable
                    ? `${effect.name}。（出牌阶段限一次）`
                    : `${timing.name}，${effect.name}。（每回合限一次）`;
            game.finishSkill(skill);
        }, skill, timing, effect);
        target.addSkill(skill);
        player.markAuto("xinxpeiyu", [timing.key, effect.key]);
        game.log(player, "组合出了", "#g【造物】", "令", target, "获得之");
    },
    /* mark: true,
    marktext: "培",
    intro: {
        content(storage, player) {
            const info = lib.skill.xinxpeiyu;
            const list = storage || [];
            return `已选择的词条：${list.map(key => info.getEntryLabel(key)).join("、") || "无"}`;
        },
    }, */
    //已选择过的词条（时机与效果的 key 混存于同一 storage 数组，数值型 key 形如 draw_3）
    getUsed(player) {
        return player.getStorage("xinxpeiyu");
    },
    //由 key 反查显示名（供武将牌标记的 intro 使用）
    getEntryLabel(key) {
        const info = lib.skill.xinxpeiyu;
        const m = key.match(/^(.+?)_(\d+)$/);
        if (m) {
            const base = info.effectPool.find(i => i.key == m[1]);
            if (base && base.numMatch) return base.name(parseInt(m[2]));
        }
        //牌名型：key 形如 viewsome_sha、viewsome_sha_fire，先从 key 还原 {name, nature} 再拼显示名
        for (const item of info.effectPool) {
            if (!item.cardMatch || !key.startsWith(item.key + "_")) continue;
            const rest = key.slice(item.key.length + 1);
            for (const [label, nature] of Object.entries(pyNatureMap)) {
                if (rest.endsWith("_" + nature)) {
                    return item.name({ name: rest.slice(0, rest.length - nature.length - 1), nature });
                }
            }
            return item.name({ name: rest, nature: "" });
        }
        for (const pool of [info.effectPool, info.timingPool]) {
            const entry = pool.find(i => i.key == key);
            if (entry) return typeof entry.name == "function" ? entry.name(1) : entry.name;
        }
        return key;
    },
    //汇总场上所有存活角色武将牌上技能的描述文本（排除本技能自身，防止自我匹配；含组合出的〖造物〗）
    getFieldDescriptions() {
        let str = "";
        for (const current of game.players.concat(game.dead)) {
            const skills = current.getSkills();
            game.expandSkills(skills);
            for (const skill of skills) {
                if (!skill || skill == "xinxpeiyu") continue;
                const text = lib.translate[skill + "_info"];
                //拼接处加句号分隔：normalizeText 会剔除 <br>，若上一条描述结尾无标点，
                //会与下一条描述无缝相连造成"锚点跨技能串到别人的数字"（如"你可以重铸"+"获得2张牌"→误提取2）；
                //句号在所有 numMatch 弹性槽的排除集内，天然阻断跨描述匹配
                if (text) str += text + "。<br>";
            }
        }
        return lib.skill.xinxpeiyu.normalizeText(str);
    },
    //文本归一化：剔除HTML标签与"来自××的"等插入语、中文数字统一为阿拉伯数字、去空白。
    //使 match 写"受到1点伤害"即可命中"受到来自你的一点伤害"、"受到来自一名角色造成的1点伤害"等变体
    normalizeText(str) {
        if (!str) return "";
        return String(str)
            //还原poptip名词标签（get.poptip产出空标签，名词只在运行时由createdCallback注入；
            //如xinxhjjiusi描述里的"即时牌"实际是<noname-poptip poptip = xinx_jishipai>，须先还原再剔标签）
            .replace(/<noname-poptip[^>]*poptip\s*=\s*["']?([\w-]+)["']?[^>]*>/gi, (m, id) => lib.translate[id] || "")
            //剔除HTML标签（描述中常含<br>、<font>等，会切断短语连续性）
            .replace(/<[^>]+>/g, "")
            //剔除"来自××的"插入语（如"受到来自你的一点伤害"→"受到1点伤害"）
            .replace(/来自[^，。；、]{0,8}的/g, "")
            //剔除不带"的"的常见来源短语
            .replace(/来自(你|其|一名角色|一名其他角色|任意角色|伤害来源|使用者)/g, "")
            //剔除伤害属性词（"造成火焰伤害后"→"造成伤害后"、"受到雷属性伤害时"→"受到伤害时"）
            .replace(/(?:火焰|雷电|冰霜|烈焰|火|冰|雷|神|风|属性)+伤害/g, "伤害")
            //十位数中文数字转阿拉伯（二十→20、十五→15、十→10）
            .replace(/([一二两三四五六七八九])?十([一二两三四五六七八九])?/g, (m, a, b) => {
                const dig = { 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
                return String((a ? dig[a] : 1) * 10 + (b ? dig[b] : 0));
            })
            //个位数中文数字转阿拉伯（一点→1点、两张→2张）
            .replace(/[一二两三四五六七八九]/g, ch => ({ 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 })[ch])
            //X占位符按默认值1处理（"摸X张牌"→"摸1张牌"、"手牌上限+X"→"手牌上限+1"）；
            //仅处理量词前/加号后的X，"（X为你的体力上限）"等说明文字中的X保持原样
            .replace(/[XＸ]\s*(?=[张点名次倍个轮回])/g, "1")
            .replace(/[+＋]\s*[XＸ]/g, "+1")
            //点数比较语境的X（其后紧跟"的手牌"）按默认值1处理："弃置点数大于X的手牌"→"点数大于1的手牌"
            .replace(/[XＸ](?=的手牌)/g, "1")
            //等量同X占位符按默认值1处理："摸等量张牌/摸等量的牌"→"摸1张牌"、"回复等量体力"→"回复1点体力"、
            //"造成等量伤害"→"造成1点伤害"；后跟体力/伤害补"点"、后跟牌补"张"，其余场合一律作1
            .replace(/等量(的)?(?=张|点)/g, "1")
            .replace(/等量(的)?(?=体力|伤害)/g, "1点")
            .replace(/等量(的)?(?=牌)/g, "1张")
            .replace(/等量/g, "1")
            //去空白
            .replace(/\s+/g, "");
    },
    //词条是否被场上技能描述命中（match 短语同样归一化后做包含判断；
    //reMatch 正则针对带限定词的变体："使用杀时"/"使用锦囊牌时"→使用牌时、"受到1点伤害后"→受到伤害后）
    isMatched(entry, descriptions) {
        if (entry.match.some(text => descriptions.includes(lib.skill.xinxpeiyu.normalizeText(text)))) return true;
        if (entry.reMatch) return entry.reMatch.some(re => re.test(descriptions));
        return false;
    },
    //收集场上所有存活角色技能实际注册的触发声明（技能来源与 getFieldDescriptions 一致；
    //排除本技能自身，防止自身的 roundStart/roundEnd 自我供给）：
    //declared 为 "位置_事件名" 字符串集合；enablePhaseUse 表示场上存在出牌阶段主动技（enable: "phaseUse"）
    getFieldTriggers() {
        const declared = new Set();
        let enablePhaseUse = false;
        for (const current of game.players) {
            const skills = current.getSkills();
            game.expandSkills(skills);
            for (const skill of skills) {
                if (!skill || skill == "xinxpeiyu") continue;
                const info = get.info(skill);
                if (!info) continue;
                if (info.enable) {
                    if ((Array.isArray(info.enable) ? info.enable : [info.enable]).includes("phaseUse")) enablePhaseUse = true;
                }
                if (!info.trigger) continue;
                for (const role in info.trigger) {
                    const evts = Array.isArray(info.trigger[role]) ? info.trigger[role] : [info.trigger[role]];
                    for (const evt of evts) {
                        if (evt) declared.add(`${role}_${evt}`);
                    }
                }
            }
        }
        return { declared, enablePhaseUse };
    },
    //时机词条是否被场上技能的触发声明命中（引擎 filterTrigger 即按"位置+事件名"精确派发，故声明可直接判定时机；
    //phaseUseEnable 为 enable 型时机，单独以场上是否存在出牌阶段主动技判定）
    isTriggerMatched(item, fieldTriggers) {
        if (item.key == "phaseUseEnable") return fieldTriggers.enablePhaseUse;
        const alias = lib.skill.xinxpeiyu.triggerAlias[item.key];
        if (!alias) return false;
        return alias.some(pair => fieldTriggers.declared.has(pair.join("_")));
    },
    getTimings(player) {
        const info = lib.skill.xinxpeiyu;
        const used = info.getUsed(player);
        //描述匹配与触发声明匹配取并集：描述措辞不规范但引擎声明明确的时机同样可提取
        const descriptions = info.getFieldDescriptions();
        const fieldTriggers = info.getFieldTriggers();
        return info.timingPool.filter(item => !used.includes(item.key) && (info.isMatched(item, descriptions) || info.isTriggerMatched(item, fieldTriggers)));
    },
    /* getTimings(player) {
        const used = lib.skill.xinxpeiyu.getUsed(player);
        const descriptions = lib.skill.xinxpeiyu.getFieldDescriptions();
        return lib.skill.xinxpeiyu.timingPool.filter(item => !used.includes(item.key) && lib.skill.xinxpeiyu.isMatched(item, descriptions));
    }, */
    getEffects(player, timing) {
        const info = lib.skill.xinxpeiyu;
        const used = info.getUsed(player);
        const descriptions = info.getFieldDescriptions();
        const list = [];
        for (const item of info.effectPool) {
            if (item.fits && !item.fits(timing)) continue;
            //被动型效果（mod常驻）无发动语义，不可配enable型时机（点按钮时cost/content均无意义）
            if (item.passive && timing.effect.enable) continue;
            //数值型：提取全场描述中出现过的所有数值，每个数值生成一个独立选项
            if (item.numMatch) {
                const nums = new Set();
                //numMatch 可能是嵌套数组（如 numMatchAny/numMatchAfter 返回的本身就是数组），
                //必须递归展平，否则内层数组元素 .source 为 undefined，new RegExp(undefined) 会生成
                //空模式 /(?:)/g 匹配每个空串位置 → while 死循环卡死
                const regexes = (Array.isArray(item.numMatch) ? item.numMatch : [item.numMatch]).flat(Infinity).filter(re => re instanceof RegExp);
                let anyMatch = false;
                for (const re0 of regexes) {
                    const re = new RegExp(re0.source, "g");
                    let m;
                    while ((m = re.exec(descriptions))) {
                        anyMatch = true;
                        if (m[1] != null) {
                            const n = parseInt(m[1]);
                            if (!isNaN(n) && n > 0) nums.add(n);
                        }
                    }
                }
                //保底：全部正则都没捕获到数字（如纯锚点 /重铸/ 命中"可以重铸"），按默认值 1
                if (anyMatch && nums.size == 0) nums.add(1);
                for (const num of nums) {
                    const key = `${item.key}_${num}`;
                    if (used.includes(key)) continue;
                    list.push({ key, name: item.name(num), effect: item.makeEffect(num), passive: !!item.passive });
                }
            }
            //牌名型（动态牌名词条）：提取全场描述中"视为使用一张【XXX】"的具体牌名，每个牌名生成一个独立选项
            else if (item.cardMatch) {
                const cards = new Map(); //"牌名|属性" -> {name, nature}，用Map对同一牌名去重
                const regexes = (Array.isArray(item.cardMatch) ? item.cardMatch : [item.cardMatch]).flat(Infinity).filter(re => re instanceof RegExp);
                for (const re0 of regexes) {
                    const re = new RegExp(re0.source, "g");
                    let m;
                    while ((m = re.exec(descriptions))) {
                        const name = info.getCardId(m[2]);
                        //排除闪/无懈可击等无目标响应牌（防误提取，filter的hasUseTarget再兜底）
                        if (!name || ['shan','wuxie'].includes(name)) continue;
                        const nature = pyNatureMap[m[1]] || "";
                        cards.set(`${name}|${nature}`, { name, nature });
                    }
                }
                for (const { name, nature } of cards.values()) {
                    const key = `${item.key}_${name}${nature ? "_" + nature : ""}`;
                    if (used.includes(key)) continue;
                    list.push({ key, name: item.name({ name, nature }), effect: item.makeEffect({ name, nature }), passive: !!item.passive });
                }
            }
            //静态型
            else {
                if (used.includes(item.key) || !info.isMatched(item, descriptions)) continue;
                list.push({ key: item.key, name: item.name, effect: item.effect, passive: !!item.passive });
            }
        }
        return list;
    },
    //将描述中的【中文牌名】反查为牌名id（"杀"→"sha"、"过河拆桥"→"guohe"）；无效牌名返回空串
    getCardId(label) {
        if (!label) return "";
        return lib.inpile.find(name => get.translation(name) === label) || "";
    },
    //供"视为使用"类效果取可用牌名列表（info 为 [类别, '', 牌名, 属性]）
    getVCardList(player, types) {
        return get.inpileVCardList(info => {
            if (!types.includes(info[0])) return false;
            return player.hasUseTarget(get.autoViewAs({ name: info[2], nature: info[3], isCard: true }));
        });
    },
    //转化型两段式（参考本体圆融）：
    //convertSelect（cost阶段）：chooseButton 同时选定材料牌与目标虚拟牌（白名单事件，filterButton 联动校验，取消返回null即不发动）；
    //convertApply（content阶段）：get.autoViewAs 第二参挂材料牌，chooseUseTarget 第三参传入使其被消耗
    async convertSelect(player, types, prompt) {
        const hands = player.getCards("h");
        if (!hands.length) return null;
        const vcards = get.inpileVCardList(info => {
            if (!types.includes(info[0])) return false;
            return hands.some(card => player.hasUseTarget(get.autoViewAs({ name: info[2], nature: info[3] }, [card]), true, true));
        });
        if (!vcards.length) return null;
        const result = await player
            .chooseButton([prompt || "请选择要转化的牌与目标牌", hands, "###可转化牌###", [vcards, "vcard"]], 2)
            .set("filterButton", button => {
                if (!Array.isArray(button.link)) return ui.selected.buttons.length == 0;
                if (ui.selected.buttons.length != 1) return false;
                const cardx = get.autoViewAs({ name: button.link[2], nature: button.link[3] }, ui.selected.buttons.map(i => i.link));
                return get.player().hasUseTarget(cardx, true, true);
            })
            .set("complexSelect", true)
            .set("ai", button => {
                if (ui.selected.buttons.length == 0) return -get.value(button.link);
                if (!Array.isArray(button.link)) return 0;
                return get.player().getUseValue(get.autoViewAs({ name: button.link[2], nature: button.link[3] }), true, true);
            })
            .forResult();
        if (!result?.bool) return null;
        return result.links;
    },
    async convertApply(player, links) {
        const material = [links[0]];
        await player.chooseUseTarget(get.autoViewAs({ name: links[1][2], nature: links[1][3] }, material), true, material);
    },
    //时机池（match：场上技能描述含有任一短语时，此时机才可被选择；匹配同样走归一化管道）
    timingPool: [
        { key: "roundStart", name: "每轮开始时", match: ["每轮开始时"], tags: ["phase"], effect: { trigger: { global: "roundStart" } } },
        { key: "roundEnd", name: "每轮结束时", match: ["每轮结束时"], tags: ["phase"], effect: { trigger: { global: "roundEnd" } } },
        { key: "phaseBegin", name: "回合开始时", match: ["回合开始时"], tags: ["phase"], effect: { trigger: { player: "phaseBegin" } } },
        { key: "phaseEnd", name: "回合结束时", match: ["回合结束时"], tags: ["phase"], effect: { trigger: { player: "phaseEnd" } } },
        { key: "phaseZhunbeiBegin", name: "准备阶段", match: ["准备阶段"], tags: ["phase"], effect: { trigger: { player: "phaseZhunbeiBegin" } } },
        { key: "phaseJudgeBegin", name: "判定阶段开始时", match: ["判定阶段"], tags: ["phase"], effect: { trigger: { player: "phaseJudgeBegin" } } },
        { key: "phaseDrawBegin", name: "摸牌阶段开始时", match: ["摸牌阶段开始时"], tags: ["phase"], effect: { trigger: { player: "phaseDrawBegin" } } },
        { key: "phaseDrawEnd", name: "摸牌阶段结束时", match: ["摸牌阶段结束时"], tags: ["phase"], effect: { trigger: { player: "phaseDrawEnd" } } },
        { key: "phaseUseBegin", name: "出牌阶段开始时", match: ["出牌阶段开始时"], tags: ["phase"], effect: { trigger: { player: "phaseUseBegin" } } },
        //enable型时机：合并后技能为出牌阶段按钮技，配合 usable:1 实现"出牌阶段限一次"
        { key: "phaseUseEnable", name: "出牌阶段限一次", match: ["出牌阶段限一次"], tags: ["phase"], effect: { enable: "phaseUse" } },
        { key: "phaseJieshuBegin", name: "结束阶段", match: ["结束阶段"], tags: ["phase"], effect: { trigger: { player: "phaseJieshuBegin" } } },
        { key: "loseHpGlobal", name: "一名角色失去体力时", match: ["失去体力时", "失去体力后"], tags: ["hp"], effect: { trigger: { global: "loseHp" } } },
        //reMatch：限定词槽位正则（对归一化文本匹配），"受到1点伤害时"“受到2点伤害后”等数值型变体亦可命中
        { key: "damageBegin4", name: "一名角色受到伤害时", match: ["受到伤害时"], reMatch: [/受到[^，。；、]{0,6}伤害时/], tags: ["damage"], effect: { trigger: { global: "damageBegin4" } } },
        { key: "damageEnd", name: "你受到伤害后", match: ["受到伤害后"], reMatch: [/受到[^，。；、]{0,6}伤害后/], tags: ["damage"], effect: { trigger: { player: "damageEnd" } } },
        { key: "damageBegin1", name: "你造成伤害时", match: ["造成伤害时"], reMatch: [/造成[^，。；、]{0,6}伤害时/], tags: ["damage"], effect: { trigger: { source: "damageBegin1" } } },
        { key: "damageSource", name: "你造成伤害后", match: ["造成伤害后"], reMatch: [/造成[^，。；、]{0,6}伤害后/], tags: ["damage"], effect: { trigger: { source: "damageAfter" } } },
        { key: "loseAfter", name: "你失去牌后", match: ["失去牌后", "失去一张牌后"], reMatch: [/失去[^，。；、]{0,6}牌后/], tags: ["lose"], effect: { trigger: { player: "loseAfter" } } },
        //使用X牌时/后：X可为牌名（杀、【杀】）、类别（锦囊牌/伤害牌/基本牌）、颜色数量（红色牌/2张杀）等
        { key: "useCard", name: "你使用牌时", match: ["使用牌时", "使用一张牌时",], reMatch: [/使用[^，。；、]{0,6}时/], tags: ["use"], effect: { trigger: { player: "useCard" } } },
        { key: "useCardAfter", name: "你使用牌后", match: ["使用牌后", "使用一张牌后",], reMatch: [/使用[^，。；、]{0,6}后/], tags: ["use"], effect: { trigger: { player: "useCardAfter" } } },
        {
            key: "useCardToPlayered",
            name: "你使用牌指定目标后",
            match: ["指定一名角色为目标后", "指定其他角色为目标后", "指定目标后"],
            tags: ["use", "target"],
            effect: {
                trigger: { player: "useCardToPlayered" },
                filter(event, player) {
                    return event.targets?.length > 0;
                },
            },
        },
        //引擎按目标逐个派发 useCardToTargeted（event.target 为本次成为目标的角色）：
        //target 位置仅在持有者自己是目标时触发；global 位置任意角色成为目标均触发
        {
            key: "useCardToTargetedSelf",
            name: "你成为牌的目标后",
            match: ["你成为牌的目标后", '目标含你'],
            reMatch: [/你成为[^，。；、]{0,8}的目标/],
            tags: ["use", "target"],
            effect: {
                trigger: { target: "useCardToTargeted" },
            },
        },
        {
            key: "useCardToTargetedGlobal",
            name: "一名角色成为牌的目标后",
            match: ["角色成为牌的目标后"],
            //reMatch: [/[^你]角色成为[^，。；、]{0,8}的目标/],
            tags: ["use", "target"],
            effect: {
                trigger: { global: "useCardToTargeted" },
            },
        },
        {
            key: "useCardToPlayeredGlobal",
            name: "一名角色使用牌指定目标后",
            match: ["一名角色使用牌指定目标后"],
            //reMatch: [/[^你]角色成为[^，。；、]{0,8}的目标/],
            //match: ["指定一名角色为目标后", "指定其他角色为目标后", "指定目标后"],
            tags: ["use", "target"],
            effect: {
                trigger: { global: "useCardToPlayered" },
                filter(event, player) {
                    return event.targets?.length > 0;
                },
            },
        },
        //========== 以下时机按本体技能描述出现频率批量扩充（事件名与触发位置均经本体用法验证） ==========
        { key: "phaseBeginGlobal", name: "一名角色的回合开始时", match: ["角色的回合开始时"], tags: ["phase"], effect: { trigger: { global: "phaseBegin" } } },
        { key: "phaseUseEnd", name: "出牌阶段结束时", match: ["出牌阶段结束时"], tags: ["phase"], effect: { trigger: { player: "phaseUseEnd" } } },
        { key: "phaseDiscardBegin", name: "弃牌阶段开始时", match: ["弃牌阶段开始时"], tags: ["phase"], effect: { trigger: { player: "phaseDiscardBegin" } } },
        { key: "phaseDiscardEnd", name: "弃牌阶段结束时", match: ["弃牌阶段结束时"], tags: ["phase"], effect: { trigger: { player: "phaseDiscardEnd" } } },
        //摸牌在引擎内部亦产生 gain 事件（draw 内容调用 player.gain），故"摸牌后"并入获得牌后
        {
            key: "gainAfterSelf",
            name: "你获得牌后",
            match: ["获得牌后", "摸牌后"],
            reMatch: [/获得[^，。；、]{0,6}牌后/, /摸[^，。；、]{0,4}牌后/],
            tags: ["gain"],
            effect: { trigger: { player: "gainAfter" } },
        },
        { key: "recoverAfterSelf", name: "你回复体力后", match: ["回复体力后"], reMatch: [/回复[^，。；、]{0,6}体力后/], tags: ["hp"], effect: { trigger: { player: "recoverAfter" } } },
        { key: "loseHpAfterSelf", name: "你失去体力后", match: ["你失去体力后"], tags: ["hp"], effect: { trigger: { player: "loseHpAfter" } } },
        { key: "changeHpAfterSelf", name: "你的体力值变化后", match: ["体力值变化后", "体力变化后"], tags: ["hp"], effect: { trigger: { player: "changeHpAfter" } } },
        { key: "damageBegin4Self", name: "你受到伤害时", match: ["你受到伤害时"], tags: ["damage"], effect: { trigger: { player: "damageBegin4" } } },
        { key: "damageEndGlobal", name: "一名角色受到伤害后", match: ["角色受到伤害后"], tags: ["damage"], effect: { trigger: { global: "damageEnd" } } },
        //{ key: "dyingSelf", name: "你濒死时", match: ["你濒死时"], reMatch: [/你[^，。；、]{0,2}濒死/], tags: ["hp"], effect: { trigger: { player: "dying" } } },
        { key: "dyingGlobal", name: "一名角色濒死时", match: ["角色濒死"], reMatch: [/[^你，。；、]濒死/], tags: ["hp"], effect: { trigger: { global: "dying" } } },
        { key: "dieAfterGlobal", name: "一名角色死亡后", match: ["死亡后"], tags: [], effect: { trigger: { global: "dieAfter" } } },
        { key: "turnOverAfterSelf", name: "一名角色翻面后", match: ["翻面后"], tags: [], effect: { trigger: { global: "turnOverAfter" } } },
        { key: "cardsDiscardAfterGlobal", name: "有牌因使用进入弃牌堆后", match: ["进入弃牌堆"], tags: [], effect: { trigger: { global: "cardsDiscardAfter" } } },
        //【杀】被【闪】抵消：按目标逐个派发（card/standard.js），player=使用者，target=抵消者
        { key: "shaMissSelf", name: "你使用的【杀】被抵消后", match: ["【杀】被抵消", "杀被抵消"], reMatch: [/【杀】[^，。；、]{0,10}被/], tags: ["use"], effect: { trigger: { player: "shaMiss" } } },
        { key: "shaMissTarget", name: "你抵消【杀】后", match: ["抵消【杀】", "抵消杀", "使用【闪】抵消", "使用闪抵消"], tags: ["use"], effect: { trigger: { target: "shaMiss" } } },
        //使用牌被无懈可击抵消（event.respondWuxie 时在被抵消的使用牌事件上派发）
        { key: "eventNeutralizedSelf", name: "你使用的牌被抵消后", match: ["牌被抵消", "被无懈可击抵消"], reMatch: [/牌[^，。；、]{0,4}被[^，。；、]{0,4}抵消/], tags: ["use"], effect: { trigger: { player: "eventNeutralized" } } },
    ],
    //时机触发声明等价表（引擎级提取）：key 对应 timingPool 的 key，值为技能 trigger 声明的 [位置, 事件名] 等价组合。
    //引擎按 (位置, 事件名) 精确派发（filterTrigger：非 global 位置需技能持有者 === event[位置]），故声明可直接映射为时机。
    //damageBegin 与 damageBegin1~4 为伤害事件同点位的多次派发（本体 damage 内容显式 trigger），互为等价；
    //End/After 为事件循环先后两个收尾派发、useCard0~2 为使用牌过程的分段派发，语义相近均予承认；
    //各 Before 变体（damageBefore/useCardBefore 等）语义偏"前"，不纳入
    triggerAlias: {
        roundStart: [["global", "roundStart"]],
        roundEnd: [["global", "roundEnd"]],
        phaseBegin: [["player", "phaseBegin"]],
        phaseEnd: [["player", "phaseEnd"], ["player", "phaseAfter"]],
        phaseZhunbeiBegin: [["player", "phaseZhunbeiBegin"]],
        phaseJudgeBegin: [["player", "phaseJudgeBegin"]],
        phaseDrawBegin: [["player", "phaseDrawBegin"], ["player", "phaseDrawBegin1"], ["player", "phaseDrawBegin2"]],
        phaseDrawEnd: [["player", "phaseDrawEnd"]],
        phaseUseBegin: [["player", "phaseUseBegin"]],
        //phaseUseEnable 为 enable 型，由 getFieldTriggers 的 enablePhaseUse 单独判定
        phaseJieshuBegin: [["player", "phaseJieshuBegin"]],
        loseHpGlobal: [["global", "loseHp"], ["global", "loseHpEnd"], ["global", "loseHpAfter"]],
        damageBegin4: [["global", "damageBegin"], ["global", "damageBegin1"], ["global", "damageBegin2"], ["global", "damageBegin3"], ["global", "damageBegin4"]],
        damageBegin4Self: [["player", "damageBegin"], ["player", "damageBegin1"], ["player", "damageBegin2"], ["player", "damageBegin3"], ["player", "damageBegin4"]],
        damageBegin1: [["source", "damageBegin"], ["source", "damageBegin1"], ["source", "damageBegin2"], ["source", "damageBegin3"], ["source", "damageBegin4"]],
        damageEnd: [["player", "damageEnd"]],
        damageEndGlobal: [["global", "damageEnd"]],
        damageSource: [["source", "damageAfter"], ["source", "damageSource"], ["source", "damageEnd"]],
        loseAfter: [["player", "loseAfter"]],
        useCard: [["player", "useCard"], ["player", "useCardBegin"], ["player", "useCard0"], ["player", "useCard1"], ["player", "useCard2"]],
        useCardAfter: [["player", "useCardAfter"], ["player", "useCardEnd"]],
        useCardToPlayered: [["player", "useCardToPlayered"], ["player", "useCardToPlayer"], ["player", "useCardToTargeted"], ["player", "useCardToTarget"]],
        useCardToTargetedSelf: [["target", "useCardToTargeted"], ["target", "useCardToTarget"]],
        useCardToTargetedGlobal: [["global", "useCardToTargeted"], ["global", "useCardToTarget"]],
        useCardToPlayeredGlobal: [["global", "useCardToPlayered"], ["global", "useCardToPlayer"]],
        phaseBeginGlobal: [["global", "phaseBegin"]],
        phaseUseEnd: [["player", "phaseUseEnd"], ["player", "phaseUseAfter"]],
        phaseDiscardBegin: [["player", "phaseDiscardBegin"]],
        phaseDiscardEnd: [["player", "phaseDiscardEnd"]],
        gainAfterSelf: [["player", "gainAfter"], ["global", "gainAfter"]],
        recoverAfterSelf: [["player", "recoverAfter"], ["player", "recoverEnd"]],
        //loseHp/changeHp 的"时"型声明（事件中段显式派发，本体常用）并入"后"型词条
        loseHpAfterSelf: [["player", "loseHpAfter"], ["player", "loseHpEnd"], ["player", "loseHp"]],
        changeHpAfterSelf: [["player", "changeHpAfter"], ["player", "changeHpEnd"], ["player", "changeHp"]],
        dyingSelf: [["player", "dying"]],
        dyingGlobal: [["global", "dying"]],
        dieAfterGlobal: [["global", "dieAfter"]],
        turnOverAfterSelf: [["player", "turnOverAfter"], ["player", "turnOverEnd"]],
        cardsDiscardAfterGlobal: [["global", "cardsDiscardAfter"], ["global", "cardsDiscardEnd"]],
        shaMissSelf: [["player", "shaMiss"]],
        shaMissTarget: [["target", "shaMiss"]],
        eventNeutralizedSelf: [["player", "eventNeutralized"]],
    },
    //效果池
    //数值型：numMatch 提取数值，makeEffect(num) 生成效果对象；场上"摸三张牌"与"摸两张牌"会分别出现"摸3张牌""摸2张牌"选项
    //静态型：match 短语匹配 + reMatch 槽位正则（[^，。；、]{0,N} 容纳"无距离限制的""或打出"等插入语）；passive: true 表示无触发结算的持久被动（mod 随组合技能常驻，不弹发动询问）
    effectPool: [
        {
            key: "draw",
            //负向后行断言排除"令××摸X张牌"句式（该形式由 drawOthers 词条承接）
            //第二条条件变体式：壤壤型（"你可以摸一张牌，若与上一次时机不同，改为三张"——
            //数字3前面是"改为"而非"摸"、且"张"后无"牌"字，主式提不到，靠该式兜出变体量）
            numMatch: [/(?<!令[^，。；]{0,10})摸([0-9]+)张牌/, numMatchChange("摸")],
            name: num => `你可以摸${num}张牌`,
            makeEffect: num => ({
                frequent: true,
                async content(event, trigger, player) {
                    await player.draw(num);
                },
            }),
        },
        {
            key: "drawOthers",
            //"令其摸两张牌""令一名角色摸一张牌"等；条件变体式兜"令××摸一张牌，若……，改为三张"
            numMatch: [/令[^，。；]{0,10}摸([0-9]+)张牌/, numMatchChange("令[^，。；]{0,10}摸")],
            name: num => `你可以令一名角色摸${num}张牌`,
            makeEffect: num => ({
                filter(event, player) {
                    return game.hasPlayer(target => target.isIn());
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => target.isIn())
                        .set("ai", target => get.attitude(get.player(), target))
                        .forResult();
                },
                async content(event, trigger, player) {
                    await event.targets[0].draw(num);
                },
            }),
        },
        {
            key: "disableEquipOthers",
            numMatch: [
                //数字式："废除两个装备栏/装备区""废除一名角色的两个装备区"（贪婪槽位越过"1名角色的"取到紧邻后缀的数字）
                /废除[^，。；、]{0,12}([0-9]+)个?(?:装备栏|装备区|栏)/,
                //保底锚点：无数字句式"废除其装备区""废除武器栏"（武器等栏名在槽位内）→ num=1
                /废除[^，。；、]{0,8}(?:装备栏|装备区|栏)/,
            ],
            name: num => `你可以废除一名角色${get.cnNumber(num)}个装备栏，并摸其已废除装备栏数张牌`,
            makeEffect: num => ({
                filter(event, player) {
                    return game.hasPlayer(target => target.hasEnabledSlot());
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => target.hasEnabledSlot())
                        .set("ai", target => -get.attitude(get.player(), target))
                        .forResult();
                },
                async content(event, trigger, player) {
                    await event.targets[0].chooseToDisable({ source: player, selectButton: num });
                    await player.draw(
                       event.targets[0].countDisabledSlot()
                    );
                },
            }),
        },
        {
            key: "giveOthers",
            numMatch: /令[^，。；]{0,10}交给你([0-9]+)张牌/,
            name: num => `你可以令一名其他角色交给你${num}张牌`,
            makeEffect: num => ({
                filter(event, player) {
                    return game.hasPlayer(target => target != player && target.countCards("he"));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => target != player && target.countCards("he"))
                        .set("ai", target => -get.attitude(get.player(), target) * (114514 - target.countCards("he")))
                        .forResult();
                },
                async content(event, trigger, player) {
                    //await event.targets[0].draw(num);
                    const target = event.targets[0];
                    await target
                        .chooseToGive({
                            prompt: `造物：交给${get.translation(player)}${num}张牌`,
                            forced: true,
                            position: "he",
                            selectCard: num,
                            target: player,
                            ai(card) {
                                return 6 - get.value(card);
                            },
                        });
                },
            }),
        },
        {
            key: "discardOthers",
            numMatch: [
                //常规式："其弃置2张牌/其弃置一张手牌"
                /其弃置[^，。；]{0,12}([0-9]+)张(?:手)?牌/,
                //点数筛选式（释悲型）："其弃置点数大于X的手牌"（X 归一化为 1，弃置数量即取该值）
                /其弃置点数(?:大于|小于|不超过|不小于|为)([0-9]+)/,
            ],
            name: num => `你可以令一名其他角色弃置${num}张牌`,
            makeEffect: num => ({
                filter(event, player) {
                    return game.hasPlayer(target => target != player && target.countCards("he"));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => target != player && target.countCards("he"))
                        .set("ai", target => -get.attitude(get.player(), target) * (114514 - target.countCards("he")))
                        .forResult();
                },
                async content(event, trigger, player) {
                    //await event.targets[0].draw(num);
                    const target = event.targets[0];
                    await target.chooseToDiscard("he", num, true);
                },
            }),
        },
        {
            key: "banskillOthers",
            name: "令一名角色非锁定技于本回合失效",
            match: ["非锁定技失效"],
            reMatch: [/非锁定技[^，。；]{0,4}失效/, /本回合[^，。；]{0,2}非锁定技[^，。；]{0,4}失效/],
            effect: {
                filter(event, player) {
                    return game.hasPlayer(target => !target.hasSkill("fengyin"));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget((card, player, target) => {
                            return !target.hasSkill("fengyin");
                        })
                        .set("prompt", get.prompt(event.skill))
                        .set("prompt2", "令一名角色的非锁定技于本回合失效")
                        .set("ai", target => {
                            const player = get.event().player;
                            return (
                                -get.sgn(get.attitude(player, target)) *
                                (target.getSkills(null, false, false).filter(skill => {
                                    return !get.is.locked(skill);
                                }).length +
                                    1) *
                                (target === _status.currentPhase ? 10 : 1)
                            );
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    await event.targets[0].addTempSkill("fengyin");
                },
            }
        },
        {
            key: "recover",
            //负向后行断言排除"令××回复X点体力"句式（该形式由 recoverOthers 词条承接）
            numMatch: /(?<!令[^，。；]{0,10})回复([0-9]+)点体力/,
            name: num => `你可以回复${num}点体力`,
            makeEffect: num => ({
                filter(event, player) {
                    return player.isDamaged();
                },
                frequent: true,
                async content(event, trigger, player) {
                    await player.recover(num);
                },
            }),
        },
        {
            key: "recoverOthers",
            //"令其回复一点体力""令一名角色回复1点体力"等；条件变体式兜"令其回复一点体力，若……，改为两点"
            numMatch: [/令[^，。；]{0,10}回复([0-9]+)点体力/, numMatchChange("令[^，。；]{0,10}回复", { unit: "点" })],
            name: num => `你可以令一名角色回复${num}点体力`,
            makeEffect: num => ({
                filter(event, player) {
                    return game.hasPlayer(target => target.isDamaged());
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => target.isDamaged())
                        .set("ai", target => get.attitude(get.player(), target))
                        .forResult();
                },
                async content(event, trigger, player) {
                    await event.targets[0].recover(num);
                },
            }),
        },
        {
            key: "recoverAll",
            name: "你可以回复所有体力",
            match: ["回复所有体力", "回复全部体力"],
            //"回复所有已损体力""将体力回复至体力上限"等变体
            reMatch: [/回复所有[^，。；]{0,4}体力/, /体力[^，。；]{0,2}回复至[^，。；]{0,4}上限/],
            effect: {
                filter(event, player) {
                    return player.isDamaged();
                },
                frequent: true,
                async content(event, trigger, player) {
                    await player.recover(player.maxHp - player.hp);
                },
            },
        },
        {
            key: "damageOthers",
            //条件变体式兜"造成1点伤害，若……，改为2点"
            numMatch: [/造成([0-9]+)点伤害/, /分配([0-9]+)点伤害/, /令[^，。；]{0,10}受到([0-9]+)点伤害/, numMatchChange(["造成", "受到", "分配"], { unit: "点" })],
            name: num => `你可以对一名角色造成${num}点伤害`,
            makeEffect: num => ({
                filter(event, player) {
                    return game.hasPlayer(target => target != player);
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => true)
                        .set("ai", target => get.damageEffect(target, get.player(), get.player()))
                        .forResult();
                },
                async content(event, trigger, player) {
                    player.line(event.targets[0]);
                    await event.targets[0].damage(num, player);
                },
            }),
        },
        {
            key: "judgeOthers",
            name: "你可以令一名角色进行一次判定，若为黑桃，其受到2点雷电伤害，否则你获得判定牌",
            match: ["判定"],
            effect: {
                filter(event, player) {
                    return game.hasPlayer(target => target != player);
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => target != player)
                        .set("ai", target => get.damageEffect(target, get.player(), get.player(), "thunder"))
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.line(event.targets[0]);
                    const next = target.judge(function (card) {
                        const suit = get.suit(card);
                        if (suit == "spade") {
                            return -4;
                        }
                        if (suit == "club") {
                            return -2;
                        }
                        return 0;
                    });
                    next.judge2 = function (result) {
                        return result.bool == false;
                    };
                    const { suit, card } = await next.forResult();
                    if (suit == "spade") {
                        await target.damage(2, "thunder");
                    }else if (card) {
                        await player.gain(card, "gain2");
                    }
                },
            }
        },
        {
            key: "loseHpOthers",
            //主式要求带数字（"失去1点体力"）；纯锚点保底无数字句式（"你可以失去体力"→按1生成），
            //两式均以(?!上限)排除"失去1点体力上限"（那是体力上限词条的语义）
            numMatch: [/失去([0-9]+)点体力(?!上限)/, /失去[^，。；]{0,4}体力(?!上限)/],
            name: num => `你可以令一名角色失去${num}点体力`,
            makeEffect: num => ({
                filter(event, player) {
                    return true;
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => true)
                        .set("ai", target => get.damageEffect(target, get.player(), get.player()))
                        .forResult();
                },
                async content(event, trigger, player) {
                    await event.targets[0].loseHp(num);
                },
            }),
        },
        {
            key: "mediscardOthers",
            //"弃置一名角色区域内的两张牌"→2、"弃置两张手牌"→2、"弃置其一张牌"→1
            //条件变体式兜"弃置一张牌，若……，改为两张"
            numMatch: [/弃置[^，。；]{0,12}([0-9]+)张(?:手)?牌/, numMatchChange("弃置")],
            name: num => `你可以弃置一名角色区域内的${num}张牌`,
            makeEffect: num => ({
                filter(event, player) {
                    return game.hasPlayer(target => target.countCards("hej"));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => target.countCards("hej"))
                        .set("ai", target => get.effect(target, { name: "guohe" }, get.player(), get.player()))
                        .forResult();
                },
                async content(event, trigger, player) {
                    await player.discardPlayerCard(event.targets[0], "hej", num, true);
                },
            }),
        },
        {
            key: "gainOthers",
            //双向断言排除"从牌堆获得""获得牌堆顶的"句式（那是从牌堆而非角色区域拿牌，与 gainSha/gainTrick 的牌堆语义不同）
            numMatch: [/(?<!牌堆[^，。；]{0,4})获得(?!牌堆)[^，。；]{0,12}([0-9]+)张牌/,numMatchAfter("获得其中")],
            name: num => `你可以获得一名角色区域内的${num}张牌`,
            makeEffect: num => ({
                filter(event, player) {
                    return game.hasPlayer(target => target.countCards("hej"));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => target.countCards('hej'))
                        .set("ai", target => get.effect(target, { name: "shunshou" }, get.player(), get.player()))
                        .forResult();
                },
                async content(event, trigger, player) {
                    await player.gainPlayerCard(event.targets[0], "hej", num, true);
                },
            }),
        },
        {
            key: "gainMaxHp",
            //"增加X点体力上限"（X→1）、"体力上限+2"、"体力上限和手牌上限+X"（并列属性插入语）均可提取
            numMatch: [/(?:增加|加)([0-9]+)点体力上限/, /体力上限[^，。；]{0,10}\+([0-9]+)/],
            name: num => `你可以增加${num}点体力上限`,
            makeEffect: num => ({
                frequent: true,
                async content(event, trigger, player) {
                    await player.gainMaxHp(num);
                },
            }),
        },
        {
            key: "changeHujia",
            numMatch: [/(?:获得|增加)([0-9]+)点护甲/, /护甲[^，。；]{0,10}\+([0-9]+)/],
            name: num => `你可以获得${num}护甲`,
            makeEffect: num => ({
                frequent: true,
                async content(event, trigger, player) {
                    await player.changeHujia(num);
                },
            }),
        },
        {
            key: "loseToSpecial",
            numMatch: numMatchAny("移出", { also: [/置于[^，。；]{0,6}武将牌/] }),
            name: num => `你可以移出${num}张牌，并于失去这些移出牌后摸两倍数量张牌`,
            makeEffect: num => ({
                filter(event, player) {
                    return player.countCards("he");
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCard(`###培育###是否移出${num}张牌，并于失去这些移出牌后摸两倍数量张牌`, num, (card, player) => true)
                        .set("ai", card => 6 - get.value(card))
                        .forResult();
                },
                async content(event, trigger, player) {
                    game.log(player, '将', event.cards, '放到了武将牌上');
                    player.addSkill('xinxpeiyu_hs');
                    const next = player.loseToSpecial(event.cards, 'xinxpeiyu');
                    next.visible = true;
                    await next;
                    player.markSkill('xinxpeiyu_hs');
                },
            }),
        },
        {
            key: "discarded",
            //示范：前置式模板调用，展开为 /(?:获得|选择)[^，。；]{0,6}([0-9]+)张?本回合弃牌堆/
            //命中"获得至多X张本回合弃牌堆"（X归一化为1）、"获得2本回合弃牌堆的牌"（量词可省）
            //前置式（数字在锚点前）："获得至多X张本回合弃牌堆"（X归一化为1）、"获得2本回合弃牌堆的牌"
            //后置式（数字在锚点后）："获得本回合弃牌堆两张牌"（→获得本回合弃牌堆2张牌）
            /* numMatch: [
                numMatchBefore(["获得", "选择"], "本回合弃牌堆"),
                numMatchAfter("本回合弃牌堆"),
                /获得中央区[^，。；]{0,10}\+([0-9]+)/,
            ], */
            numMatch: [
                /(?:获得|选择)[^，。；]{0,6}([0-9]+)张?本回合弃牌堆/,
                /本回合弃牌堆[^，。；]{0,4}([0-9]+)张?/,
                /获得中央区[^，。；]{0,10}\+([0-9]+)/,
                /进入弃牌堆[^，。；]{0,10}\+([0-9]+)/,
            ],
            name: num => `获得本回合弃牌堆${num}张牌`,
            makeEffect: num => ({
                filter(event, player) {
                    return get.discarded().filterInD("d").length > 0;
                },
                async cost(event, trigger, player) {
                    const cards = get.discarded().filterInD("d");
                    const result = await player.chooseButton(
                        [`###培育###获得本回合弃牌堆${num}张牌`, cards], [1, num],
                    ).set("ai", button => {
                        return get.value(button.link);
                    }).forResult();
                    event.result = { bool: true, cards: result.links };
                },
                async content(event, trigger, player) {
                    const cards1 = event.cards;
                    await player.gain(cards1, "gain2");
                },
            }),
        },
        {
            key: "loseMaxHpOthers",
            //"令一名角色减X点体力上限""减1点体力上限"等
            numMatch: /减([0-9]+)点体力上限/,
            name: num => `你可以令一名角色减${num}点体力上限`,
            makeEffect: num => ({
                filter(event, player) {
                    return game.hasPlayer(target => target.isIn());
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => target.isIn())
                        .set("ai", target => -get.attitude(get.player(), target))
                        .forResult();
                },
                async content(event, trigger, player) {
                    await event.targets[0].loseMaxHp(num);
                },
            }),
        },
        {
            key: "drawToMaxHp",
            name: "你可以将手牌摸至体力上限",
            match: ["摸至体力上限"],
            reMatch: [/摸[^，。；]{0,3}至体力上限/],
            effect: {
                filter(event, player) {
                    return player.countCards("h") < player.maxHp;
                },
                frequent: true,
                async content(event, trigger, player) {
                    const num = player.maxHp - player.countCards("h");
                    if (num > 0) {
                        await player.draw(num);
                    }
                },
            },
        },
        {
            key: "viewsome",
            //牌名型：从场上描述中提取"视为使用一张【XXX】"的具体牌名，每个牌名生成一个独立选项
            //（如场上有"视为使用一张【过河拆桥】"，则出现"你可以视为使用一张【过河拆桥】"）
            name: ({ name, nature }) =>
                `你可以视为使用一张${nature ? Object.keys(pyNatureMap).find(k => pyNatureMap[k] === nature) : ""}【${get.translation(name)}】`,
            cardMatch: cardMatchView(),
            makeEffect({ name, nature }) {
                //每次调用新建虚拟牌，避免引擎结算时给牌对象挂storage等字段后影响后续判定
                const vcard = () => get.autoViewAs({ name, nature: nature || null, isCard: true });
                return {
                    //固定牌名无可选对象，走白名单chooseBool确认；取消则不发动、不消耗"限一次"
                    async cost(event, trigger, player) {
                        if (!player.hasUseTarget(vcard())) return;
                        event.result = await player
                            .chooseBool(get.prompt2(event.skill))
                            .set("ai", () => get.player().getUseValue(vcard()) > 0)
                            .forResult();
                    },
                    filter(event, player) {
                        return player.hasUseTarget(vcard());
                    },
                    async content(event, trigger, player) {
                        if (player.hasUseTarget(vcard())) {
                            await player.chooseUseTarget(vcard(), true, false);
                        }
                    },
                };
            },
        },
        {
            key: "viewSha",
            name: "你可以视为使用一张任意属性的【杀】",
            match: ["视为使用一张【杀】", "视为使用一张杀", "视为使用或打出一张【杀】", "视为使用或打出一张杀", "视为对其使用一张【杀】", '使用一张【杀】',],
            //槽位正则容纳插入语："视为使用一张无距离限制的【杀】""视为使用【杀】""视为使用一张普通【杀】"等
            //（"杀"不带括号可同时命中【杀】——【杀】以杀结尾）；"当……杀……使用"覆盖"将一张牌当【杀】使用"倒装句式
            reMatch: [/视为[^，。；、]{0,4}使用[^，。；、]{0,15}杀/, /当[^，。；、]{0,8}杀[^，。；、]{0,4}使用/],
            effect: {
                //从普通【杀】、火【杀】、雷【杀】中选择一张视为使用
                async cost(event, trigger, player) {
                    const list = get.inpileVCardList(info => {
                        //普通杀无nature、火/雷杀由inpileVCardList对"sha"的nature枚举带入
                        if (info[2] != "sha") {
                            return false;
                        }
                        return player.hasUseTarget({ name: info[2], nature: info[3] }, false);
                    });
                    if (!list.length) return;
                    const result = await player
                        .chooseButton([get.prompt2(event.skill), "请选择视为使用的牌", [list, "vcard"]])
                        .set("ai", button => get.player().getUseValue(get.autoViewAs({ name: button.link[2], nature: button.link[3], isCard: true })))
                        .forResult();
                    if (result?.bool && result?.links?.length) {
                        event.result = { bool: true, cost_data: result.links[0] };
                    }
                },
                filter(event, player) {
                    return get.inpileVCardList(info => {
                        if (info[2] != "sha") {
                            return false;
                        }
                        return player.hasUseTarget({ name: info[2], nature: info[3] }, false);
                    }).length > 0;
                },
                async content(event, trigger, player) {
                    const vcard = get.autoViewAs({ name: event.cost_data[2], nature: event.cost_data[3] || null, isCard: true });
                    if (player.hasUseTarget(vcard)) {
                        await player.chooseUseTarget(vcard, true, false);
                    }
                },
            },
        },
        {
            key: "viewBasic",
            name: "你可以视为使用一张基本牌",
            //注：不放"视为使用一张"这类过宽短语（会误命中"视为使用一张锦囊牌"），插入语变体由 reMatch 槽位承接
            match: ["视为使用一张基本牌", "视为使用任意基本牌", '视为使用一张同名'],//, '视为使用一张'
            //倒装正则加可变长后行断言 (?<!将…)：排除"将一张牌/将之/将两张手牌当…基本牌使用"等转化句式（归 convertBasic）
            reMatch: [/视为[^，。；、]{0,4}使用[^，。；、]{0,12}基本牌/, /(?<!将[^，。；、]{0,8})当[^，。；、]{0,8}基本牌[^，。；、]{0,4}使用/],
            effect: {
                //选牌即确认发动（白名单事件chooseButton）：取消则不发动、不消耗"限一次"；牌名经cost_data传入content
                async cost(event, trigger, player) {
                    const list = lib.skill.xinxpeiyu.getVCardList(player, ["basic"]);
                    if (!list.length) return;
                    const result = await player
                        .chooseButton([get.prompt2(event.skill), "请选择视为使用的牌", [list, "vcard"]])
                        .set("ai", button => get.player().getUseValue(get.autoViewAs({ name: button.link[2], nature: button.link[3], isCard: true })))
                        .forResult();
                    if (result?.bool && result?.links?.length) {
                        event.result = { bool: true, cost_data: result.links[0] };
                    }
                },
                filter(event, player) {
                    return lib.skill.xinxpeiyu.getVCardList(player, ["basic"]).length > 0;
                },
                async content(event, trigger, player) {
                    const vcard = get.autoViewAs({ name: event.cost_data[2], nature: event.cost_data[3] || null, isCard: true });
                    if (player.hasUseTarget(vcard)) {
                        await player.chooseUseTarget(vcard, true, false);
                    }
                },
            },
        },
        {
            key: "viewtrick",
            name: "你可以视为使用一张普通锦囊牌",
            match: ["视为使用一张普通锦囊牌"],
            reMatch: [/视为[^，。；、]{0,4}使用[^，。；、]{0,12}普通锦囊牌/, /(?<!将[^，。；、]{0,8})当[^，。；、]{0,8}普通锦囊牌[^，。；、]{0,4}使用/],
            effect: {
                //选牌即确认发动（白名单事件chooseButton）：取消则不发动、不消耗"限一次"；牌名经cost_data传入content
                async cost(event, trigger, player) {
                    const list = lib.skill.xinxpeiyu.getVCardList(player, ["trick"]);
                    if (!list.length) return;
                    const result = await player
                        .chooseButton([get.prompt2(event.skill), "请选择视为使用的牌", [list, "vcard"]])
                        .set("ai", button => get.player().getUseValue(get.autoViewAs({ name: button.link[2], nature: button.link[3], isCard: true })))
                        .forResult();
                    if (result?.bool && result?.links?.length) {
                        event.result = { bool: true, cost_data: result.links[0] };
                    }
                },
                filter(event, player) {
                    return lib.skill.xinxpeiyu.getVCardList(player, ["trick"]).length > 0;
                },
                async content(event, trigger, player) {
                    const vcard = get.autoViewAs({ name: event.cost_data[2], nature: event.cost_data[3] || null, isCard: true });
                    if (player.hasUseTarget(vcard)) {
                        await player.chooseUseTarget(vcard, true, false);
                    }
                },
            },
        },
        {
            key: "viewInstant",
            name: "你可以视为使用一张即时牌",
            match: ["视为使用一张即时牌", "视为使用一张基本牌或普通锦囊牌"],
            //"视为使用一张普通锦囊牌""视为使用一张锦囊牌"等（即时牌为其超集：基本牌或普通锦囊牌）；
            //不放"普通锦囊牌使用"短语（会被"将一张牌当任意普通锦囊牌使用"包含命中，归 convertTrick）
            reMatch: [/视为[^，。；、]{0,4}使用[^，。；、]{0,12}(?:即时牌|锦囊牌)/, /(?<!将[^，。；、]{0,8})当[^，。；、]{0,8}(?:即时牌|锦囊牌)[^，。；、]{0,4}使用/],
            effect: {
                //选牌即确认发动（白名单事件chooseButton）：取消则不发动、不消耗"限一次"；牌名经cost_data传入content
                async cost(event, trigger, player) {
                    const list = lib.skill.xinxpeiyu.getVCardList(player, ["basic", "trick"]);
                    if (!list.length) return;
                    const result = await player
                        .chooseButton([get.prompt2(event.skill), "请选择视为使用的牌", [list, "vcard"]])
                        .set("ai", button => get.player().getUseValue(get.autoViewAs({ name: button.link[2], nature: button.link[3], isCard: true })))
                        .forResult();
                    if (result?.bool && result?.links?.length) {
                        event.result = { bool: true, cost_data: result.links[0] };
                    }
                },
                filter(event, player) {
                    return lib.skill.xinxpeiyu.getVCardList(player, ["basic", "trick"]).length > 0;
                },
                async content(event, trigger, player) {
                    const vcard = get.autoViewAs({ name: event.cost_data[2], nature: event.cost_data[3] || null, isCard: true });
                    if (player.hasUseTarget(vcard)) {
                        await player.chooseUseTarget(vcard, true, false);
                    }
                },
            },
        },
        //========== 转化型（消耗一张手牌，区别于"视为使用"的无中生有；实现参考本体圆融） ==========
        {
            key: "convertBasic",
            name: "你可以将一张牌当任意基本牌使用",
            match: ["将一张牌当任意基本牌使用", "将一张牌当基本牌使用", "将一张手牌当作任意基本牌使用"],
            //宽松匹配（宁滥勿缺）：材料槽容"将之/将两张手牌/将一张背置的牌"等；类型前槽容"任意/任意一张/一张名字数与选择牌数相同的"等
            //(?!或(?:普通)?锦囊牌) 排除"基本牌或锦囊牌"（归 convertBoth）；"基本牌或延时锦囊牌"仍命中（convertTrick 亦会命中，均属合理近似）
            reMatch: [/将[^，。；、]{0,8}当[做作]?[^，。；、]{0,14}基本牌(?!或(?:普通)?锦囊牌)[^，。；、]{0,8}使用/],
            effect: {
                //选材料牌与目标牌即确认发动（chooseButton，取消则不发动、不消耗"限一次"）
                async cost(event, trigger, player) {
                    const links = await lib.skill.xinxpeiyu.convertSelect(player, ["basic"], get.prompt2(event.skill));
                    if (links) {
                        event.result = { bool: true, cards: [links[0]], cost_data: links };
                    }
                },
                filter(event, player) {
                    return player.countCards("h") > 0 && lib.skill.xinxpeiyu.getVCardList(player, ["basic"]).length > 0;
                },
                async content(event, trigger, player) {
                    await lib.skill.xinxpeiyu.convertApply(player, event.cost_data);
                },
            },
        },
        {
            key: "convertTrick",
            name: "你可以将一张牌当任意普通锦囊牌使用",
            match: ["当任意普通锦囊牌使用", "当普通锦囊牌使用", "当任意锦囊牌使用"],
            //可变长后行断言排除"基本牌或(普通)锦囊牌"（归 convertBoth）；"延时锦囊牌"等非普通锦囊变体仍命中（宁滥勿缺）
            reMatch: [/将[^，。；、]{0,8}当[做作]?[^，。；、]{0,14}(?<!基本牌或(?:普通)?)(?:普通)?锦囊牌[^，。；、]{0,8}使用/],
            effect: {
                //选材料牌与目标牌即确认发动（chooseButton，取消则不发动、不消耗"限一次"）
                async cost(event, trigger, player) {
                    const links = await lib.skill.xinxpeiyu.convertSelect(player, ["trick"], get.prompt2(event.skill));
                    if (links) {
                        event.result = { bool: true, cards: [links[0]], cost_data: links };
                    }
                },
                filter(event, player) {
                    return player.countCards("h") > 0 && lib.skill.xinxpeiyu.getVCardList(player, ["trick"]).length > 0;
                },
                async content(event, trigger, player) {
                    await lib.skill.xinxpeiyu.convertApply(player, event.cost_data);
                },
            },
        },
        {
            key: "convertBoth",
            name: "你可以将一张牌当任意基本牌或普通锦囊牌使用",
            match: ["当任意基本牌或普通锦囊牌使用", "当基本牌或普通锦囊牌使用", "当作任意基本牌或普通锦囊牌使用或打出", `当作任意${get.poptip('xinx_jishipai')}`],
            //"当任意即时牌使用"同义（即时牌=基本牌或普通锦囊牌）；覆盖"当作任意一张即时牌"（抚会）"将之当作一张名字数与选择牌数相同的基本牌或普通锦囊牌"（解说）等变体
            reMatch: [/将[^，。；、]{0,8}当[做作]?[^，。；、]{0,14}(?:基本牌或(?:普通)?锦囊牌|即时牌)[^，。；、]{0,8}使用/],
            effect: {
                //选材料牌与目标牌即确认发动（chooseButton，取消则不发动、不消耗"限一次"）
                async cost(event, trigger, player) {
                    const links = await lib.skill.xinxpeiyu.convertSelect(player, ["basic", "trick"], get.prompt2(event.skill));
                    if (links) {
                        event.result = { bool: true, cards: [links[0]], cost_data: links };
                    }
                },
                filter(event, player) {
                    return player.countCards("h") > 0 && lib.skill.xinxpeiyu.getVCardList(player, ["basic", "trick"]).length > 0;
                },
                async content(event, trigger, player) {
                    await lib.skill.xinxpeiyu.convertApply(player, event.cost_data);
                },
            },
        },
        {
            key: "useAnyCard",
            name: "你可以使用一张牌",
            //match 必须留空：子串"使用一张牌"会被"当你使用一张牌时"（时机句）包含命中
            match: [],
            //"使用一张基本牌""使用一张红色牌""使用一张【杀】"等均归此效果；
            //后行断言排除"视为(对其)使用一张"（viewSha/viewBasic 系）；先行断言排除"使用一张XX牌时/后"（时机语义）
            reMatch: [/(?<!视为[^，。；、]{0,6})使用1张(?!【?[^，。；、]{0,8}[时后])(?:[^，。；、]{0,6}牌|【[^】]+】)/],
            effect: {
                //chooseToUse 不在cost白名单（选择本身即完成主要效果），故不写cost：
                //trigger型组合技能由引擎默认确认框询问发动，enable型点击按钮直接进入使用流程
                filter(event, player) {
                    return player.hasCard(card => player.hasUseTarget(card), "h");
                },
                async content(event, trigger, player) {
                    await player.chooseToUse("造物：请使用一张牌").set("addCount", false);
                },
            },
        },
        {
            key: "gainSha",
            name: "你可以获得一张【杀】",
            match: ["获得一张【杀】", "获得一张杀"],
            //槽位容纳"普通【杀】""【杀】或【闪】"等变体；先行断言排除"获得其/一名角色的【杀】"（从角色区域获得，与牌堆语义不同；"一名"归一化后为"1名"故两种都要列）
            reMatch: [/获得(?!其|其他|任意|[0-9一][名个])[^，。；、]{0,10}杀/],
            //从牌堆/弃牌堆中找牌（get.cardPile2），非从角色区域获得
            effect: {
                frequent: true,
                filter(event, player) {
                    return !!get.cardPile2("sha");
                },
                async content(event, trigger, player) {
                    const card = get.cardPile2("sha");
                    if (card) {
                        await player.gain(card, "gain2");
                    }
                },
            },
        },
        {
            key: "gainTrick",
            name: "你可以获得一张普通锦囊牌",
            match: ["获得一张普通锦囊牌", "获得一张锦囊牌"],
            reMatch: [/获得(?!其|其他|任意|[0-9一][名个])[^，。；、]{0,10}锦囊牌/],
            effect: {
                frequent: true,
                filter(event, player) {
                    return !!get.cardPile2(card => get.type(card) == "trick");
                },
                async content(event, trigger, player) {
                    const card = get.cardPile2(card => get.type(card) == "trick");
                    if (card) {
                        await player.gain(card, "gain2");
                    }
                },
            },
        },
        {
            key: "recast",
            numMatch: numMatchAny("重铸"),
            name: num => `你可以重铸${num}张牌，然后使用其中一张重铸牌`,
            makeEffect: num => ({
                filter(event, player) {
                    return player.getCards("he").filter(card => lib.filter.cardRecastable(card, player)).length >= num;
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCard(`是否重铸${num}张牌`, num, (card, player) => lib.filter.cardRecastable(card, player))
                        .set("ai", card => 6 - get.value(card))
                        .forResult();
                },
                async content(event, trigger, player) {
                    await player.recast(event.cards);
                    const list = event.cards.slice();
                    const result = await player.chooseButton(['###培育###是否使用其中的一张牌？', list])
                    .set('filterButton', button => {
                        return get.player().hasUseTarget(button.link);
                    }).set('ai', button => {
                        return get.player().getUseValue(button.link);
                    }).forResult();
                    if (result.bool && result.links?.length) {
                        const card = result.links[0];
                        list.remove(card);
                        player.$gain2(card, false);
                        await game.delayx();
                        await player.chooseUseTarget(true, card, false);
                    }
                },
            }),
        },
        {
            key: "moveCard",
            name: "你可以移动场上一张牌（顶替原装备）",
            match: ["移动一名角色区域内的一张牌", "移动一名角色区域内", "移动场上"],
            //两种语序："移动……的一张牌"与"将……的一张牌移动至……"
            reMatch: [/移动[^，。；、]{0,14}牌/, /牌[^，。；、]{0,4}移动/],
            effect: {
                filter(event, player) {
                    return player.canMoveCard(null, false, "canReplace");
                },
                async cost(event, trigger, player) {
                    event.result = await player.moveCard(get.prompt2(event.skill), "canReplace").forResult();
                },
                async content(event, trigger, player) {
                    const targets = event.targets[0];
                    player.line(targets[0]);
                },
            },
        },
        {
            key: "compareOthers",
            name: "你可以与一名其他角色拼点，若你赢，你回复1点体力或摸两张牌",
            match: ["拼点"],
            effect: {
                filter(event, player) {
                    return player.countCards("h") > 0 && game.hasPlayer(target => target != player && target.countCards("h") > 0);
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt('xinxpeiyu'), `与一名其他角色拼点，若你赢，你回复1点体力或摸两张牌`, (card, player, target) => player.canCompare(target))
                        .set("ai", target => -get.attitude(get.player(), target))
                        .forResult();
                },
                async content(event, trigger, player) {
                    let result = await player.chooseToCompare(event.targets[0]).forResult();
                     if (result?.bool) {
                        await player.chooseDrawRecover(2, true);
                     }
                },
            },
        },
        {
            key: "gainDamageCard",
            name: "你可以获得造成伤害的牌",
            match: ["获得造成伤害的牌"],
            fits: timing => timing.tags.includes("damage"),
            effect: {
                frequent: true,
                filter(event, player) {
                    return event.cards?.some(card => get.position(card) == "d");
                },
                async content(event, trigger, player) {
                    const cards = trigger.cards.filter(card => get.position(card) == "d");
                    if (cards.length) {
                        await player.gain(cards, "gain2");
                    }
                },
            },
        },
        //========== 以下效果按本体技能描述出现频率批量扩充 ==========
        {
            key: "give",
            //"将两张牌交给一名其他角色""交给其一张牌"等；槽位容纳"张手牌"（"将两张手牌交给""交给其两张手牌"）
            numMatch: [/将([0-9]+)张[^，。；]{0,2}牌交给/, /交给[^，。；]{0,8}([0-9]+)张[^，。；]{0,2}牌/],
            name: num => `你可以将${num}张牌交给一名其他角色并摸等量张牌`,
            makeEffect: num => ({
                filter(event, player) {
                    return player.countCards("he") && game.hasPlayer(target => target != player);
                },
                async cost(event, trigger, player) {
                    event.result =
                        await player
                            .chooseCardTarget({
                                prompt: get.prompt(event.skill),
                                prompt2: `<div class="text center">将${num}张牌交给一名其他角色`,
                                filterCard: true,
                                filterTarget: lib.filter.notMe,
                                selectTarget: 1,
                                selectCard: num,
                                position: 'h',
                                ai1(card) {
                                    return 6 - get.value(card);
                                },
                                ai2(target) {
                                    const player = get.player();
                                    let eff = get.effect(player, event.card, event.player, player);
                                    if (eff > 0) {
                                        return 0;
                                    }
                                    let att = get.attitude(player, target);
                                    if (target.hasSkillTag("nogain")) {
                                        att /= 9;
                                    }
                                    return att;
                                },
                            })
                            .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    const cards = event.cards;
                    await player.give(cards, target);
                    await player.draw(cards.length);
                },
            }),
        },
        {
            key: "viewTop",
            //"观看牌堆顶的两张牌""观看牌堆顶三张牌""观看牌堆顶的至多三张牌"等
            //条件变体式（flex 调大至32）：傲才"观看牌堆顶两张牌……（若你没有手牌则改为四张）"——
            //括号插入语较长，主式已提取2，该式兜出变体量4
            numMatch: [/观看牌堆顶[^，。；]{0,4}([0-9]+)张牌/, numMatchChange("观看", { flex: 32 }), numMatchAny("亮出牌堆")],
            name: num => `你可以观看牌堆顶${num}张牌并使用其中一张牌`,
            makeEffect: num => ({
                frequent: true,
                filter(event, player) {
                    return ui.cardPile?.childNodes?.length > 0;
                },
                async cost(event, trigger, player) {
                    const cards = get.cards(num, true);
                    if (!cards.length) return;
                    //await player.viewCards(`牌堆顶的${num}张牌`, cards);
                    const result = await player
                        .chooseButton(["###造物###是否使用其中的一张牌？", cards])
                        .set("filterButton", button => {
                            return get.player().hasUseTarget(button.link);
                        })
                        .set("ai", button => {
                            return get.event().player.getUseValue(button.link);
                        })
                        .forResult();
                    if (!result.links) {
                        return;
                    }
                    event.result = { bool: true, cards: result.links };
                },
                async content(event, trigger, player) {
                    const cards = get.cards(num, true);
                    const card = event.cards[0];
                    cards.remove(card);
                    player.$gain2(card, false);
                    await game.delayx();
                    await player.chooseUseTarget(true, card, false);
                    //按原顺序放回牌堆顶（get.cards 取走顺序的逆序插回）
                    /* if (cards.length) {
                        cards.reverse();
                        for (const card of cards) {
                            ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                        }
                    } */
                },
            }),
        },
        {
            key: "turnOverOthers",
            name: "你可以令一名角色翻面",
            //仅匹配"令/将××翻面"的效果句式；裸"翻面"会误命中时机句式（"当你翻面后……"）及自身翻面描述（据守类）
            match: ["令其翻面", "令一名角色翻面"],
            reMatch: [/(?:令|将)[^，。；]{0,8}翻面/],
            effect: {
                filter(event, player) {
                    return game.hasPlayer(target => target.isIn());
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), (card, player, target) => target.isIn())
                        .set("ai", target => -get.attitude(get.player(), target))
                        .forResult();
                },
                async content(event, trigger, player) {
                    await event.targets[0].turnOver();
                },
            },
        },
        {
            key: "linkOthers",
            name: "你可以横置至多两名角色",
            //仅匹配"令/将××横置"的效果句式；裸"横置"会误命中"横置的角色受到属性伤害"等语境
            match: ["令其横置", "将其横置", "令一名角色横置", '横置至多', '横置一名'],
            reMatch: [/(?:令|将)[^，。；]{0,8}横置/],
            effect: {
                filter(event, player) {
                    return game.hasPlayer(target => !target.isLinked());
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt2(event.skill), [1, 2], (card, player, target) => !target.isLinked())
                        .set("ai", target => -get.attitude(get.player(), target))
                        .forResult();
                },
                async content(event, trigger, player) {
                    await event.targets[0].link(true);
                },
            },
        },
        /* {
            key: "extraTurn",
            name: "你可以进行一个额外回合",
            match: ["额外回合", "额外的回合", "额外的一个回合"],
            effect: {
                async content(event, trigger, player) {
                    player.insertPhase();
                },
            },
        }, */
        {
            key: "shaUsable",
            //"你使用【杀】的次数上限+1"等；槽位必须含"次数"——避免误提取"【杀】伤害+1"这类增伤描述（"杀"不带括号可同时命中【杀】）
            //先行式（横野型枚举）："+1（至多+5）：…2.出牌阶段使用【杀】的次数…"，锚点取"杀…次数"
            numMatch: [
                /杀[^，。；]{0,8}次数[^，。；]{0,6}\+([0-9]+)/,
                /杀[^，。；]{0,8}上限[^，。；]{0,6}\+([0-9]+)/,
                /\+([0-9]+)[^。：]{0,12}[:：][^。]{0,90}?杀[^。；，]{0,8}次数/,
                //上限式（横野型）："以下一项数值+1（至多+5）"——主值+1之外，括号里的上限值+5也提取，两个数值词条都出现
                /至多\+([0-9]+)/,
            ],
            name: num => `令你使用【杀】的次数上限+${num}`,
            makeEffect: num => ({
                frequent: true,
                async content(event, trigger, player) {
                    await player.addSkill('xinxpeiyu_shaUsable');
                    player.addMark('xinxpeiyu_shaUsable', num, false);
                },
                mod: {
                    cardUsable(card, player, current) {
                        const num1 = player.countMark('xinxpeiyu_shaUsable');
                        if (card.name == "sha") return current + num1;
                    },
                },
            }),
        },
        {
            key: "drawBegin",
            //统一写法："摸牌阶段的摸牌数/摸牌阶段摸牌数/摸牌阶段的额定摸牌数/额定摸牌数/摸牌数" + ≤10字 + +N
            //（"的""额定"均设为可选，五种变体一条覆盖；+X 归一化后即 +1）
            //先行式（横野型枚举）：数值+N 出现在锚点之前的"以下一项数值+1（至多+5）：1.摸牌阶段摸牌数…"，
            //+N 与冒号间隔 ≤12 字，枚举段 ≤90 字（不跨句号）内命中锚点
            numMatch: [
                /(?:摸牌阶段(?:的)?(?:额定)?摸牌数|额定摸牌数|摸牌数)[^，。；]{0,10}\+([0-9]+)/,
                /\+([0-9]+)[^。：]{0,12}[:：][^。]{0,90}?摸牌阶段(?:的)?(?:额定)?摸牌数/,
                //动词式："摸牌阶段你多摸2张牌/摸牌阶段额外摸1张/摸牌阶段，你多摸1张牌"（"开始时，"等插入语由槽位吞掉）
                /摸牌阶段[^。；]{0,8}?(?:多|额外)摸([0-9]+)张/
            ],
            name: num => `令你摸牌阶段的摸牌数+${num}`,
            makeEffect: num => ({
                frequent: true,
                async content(event, trigger, player) {
                    await player.addSkill('xinxpeiyu_draw');
                    player.addMark('xinxpeiyu_draw', num, false);
                },
            }),
        },
        {
            key: "handcard",
            //"手牌上限+2"、"手牌上限+X"（X→1）、"手牌上限和攻击范围+X"（并列属性插入语）均可提取
            //先行式（横野型枚举）："+1（至多+5）：…3.手牌上限，4.攻击范围。"
            numMatch: [
                /手牌上限[^，。；]{0,10}\+([0-9]+)/,
                /\+([0-9]+)[^。：]{0,12}[:：][^。]{0,90}?手牌上限/,
            ],
            name: num => `令你的手牌上限+${num}`,
            makeEffect: num => ({
                frequent: true,
                async content(event, trigger, player) {
                    await player.addSkill('xinxpeiyu_effect');
                    player.addMark('xinxpeiyu_effect', num, false);
                },
                mod: {
                    maxHandcard(player, current) {
                        const num1 = player.countMark('xinxpeiyu_effect');
                        return current + num1;
                    },
                },
                filter() {
                    return true;
                },
            }),
        },
        {
            key: "attackRange",
            //"攻击范围+1""攻击范围和手牌上限+X"等；先行断言排除"攻击范围内……"（如"攻击范围内造成的伤害+1"）
            //先行式（横野型枚举）："+1（至多+5）：…4.攻击范围。"（枚举段的攻击范围后接句号/逗号，非"内"）
            numMatch: [
                /攻击范围(?!内)[^，。；]{0,8}\+([0-9]+)/,
                /\+([0-9]+)[^。：]{0,12}[:：][^。]{0,90}?攻击范围(?!内)/,
                //上限式（横野型）："以下一项数值+1（至多+5）"——括号里的上限值+5也提取
                /至多\+([0-9]+)/,
            ],
            name: num => `令你的攻击范围+${num}`,
            makeEffect: num => ({
                frequent: true,
                async content(event, trigger, player) {
                    await player.addSkill('xinxpeiyu_attackRange');
                    player.addMark('xinxpeiyu_attackRange', num, false);
                },
                mod: {
                    attackRange(player, num) {
                        return num + player.countMark("xinxpeiyu_attackRange");
                    },
                },
                markimage: "image/card/attackRange.png",
                intro: {
                    content(num, player) {
                        const num1 = player.countMark('xinxpeiyu_attackRange');
                        let str = "<li>攻击范围+";
                        str += num1;
                        str += "<br><li>当前攻击范围：";
                        str += player.getAttackRange(false);
                        return str;
                    },
                },
            }),
        },
        {
            key: "shaNoRange",
            name: "你使用【杀】无距离限制",
            match: ["【杀】无距离限制", "使用【杀】无距离"],
            //两种语序："使用【杀】无距离限制"与"无距离限制(地)使用(一张)【杀】"（槽位两侧容纳【】与量词）
            reMatch: [/杀[^，。；、]{0,8}无距离限制/, /无距离限制[^，。；、]{0,8}杀/],
            passive: true,
            effect: {
                mod: {
                    targetInRange(card) {
                        if (card.name == "sha") return true;
                    },
                },
                filter() {
                    return false;
                },
            },
        },
    ],
    ai: { threaten: 1.6 },
    subSkill: {
        draw: {
            charlotte: true,
            onremove: true,
            intro: {
                content: "摸牌阶段额定摸牌数+#",
            },
            trigger: {
                player: "phaseDrawBegin2",
            },
            filter(event, player) {
                return !event.numFixed && player.hasMark('xinxpeiyu_draw');
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
                trigger.num += player.countMark(event.name);
            },
        },
        hs: {
            trigger: {
                player: "loseAfter",
            },
            forced: true,
            filter(event, player) {
                if (!event.ss || !event.ss.length) {
                    return false;
                }
                for (const i in event.gaintag_map) {
                    if (event.gaintag_map[i].includes("xinxpeiyu")) {
                        return true;
                    }
                    return false;
                }
            },
            async content(event, trigger, player) {
                let num1 = 0;
                for (const i of trigger.ss) {
                    if (!trigger.gaintag_map[i.cardid] || !trigger.gaintag_map[i.cardid].includes("xinxpeiyu")) {
                        continue;
                    }
                    num1++;
                }
                await player.draw(num1 * 2);
                const num = player.countCards("s", card => card.hasGaintag("xinxpeiyu"));
                if (num) {
                    player.markSkill("xinxpeiyu_hs");
                } else {
                    player.unmarkSkill("xinxpeiyu_hs");
                }
            },
            marktext: "育",
            intro: {
                name: "培育",
                mark(dialog, storage, player) {
                    const cards = player.getCards("s", card => {
                        return card.hasGaintag("xinxpeiyu");
                    });
                    if (cards.length) {
                        dialog.addAuto(cards);
                    } else {
                        dialog.addText("暂无卡牌");
                    }
                },
                markcount(storage, player) {
                    return player.countCards("s", card => {
                        return card.hasGaintag("xinxpeiyu");
                    });
                },
                onunmark(storage, player) {
                    const cards = player.getCards("s", card => {
                        return card.hasGaintag("xinxpeiyu");
                    });
                    if (cards.length) {
                        player.loseToDiscardpile({ cards });
                    }
                },
            },
        }
    },
};
/**
 * 阮梅〖新培育〗（引擎级提取版，与〖培育〗并存，时机沿用 getFieldTriggers/triggerAlias 引擎级提取）
 * 效果不再手写词条，而是直接读取场上技能的实际定义，按技能形态分四类处理：
 * - trigger 型（触发技）：玩家自选新时机（事件类别亲和过滤——原技能声明的时机类别与新时机须有交集，
 *   防止原 content 读 trigger.num/source 等字段时错位），组合技能通过 game.createTrigger +
 *   uncheckHasSkill 偷跑原技能的完整结算（cost 询问/content/storage/subSkill 引用全兼容）；
 * - active 型（phaseUse 主动技，如镇围）：玩家自选新时机（content 不依赖事件字段，全时机可选），
 *   触发时还原原发动流程——chooseCardTarget 按原 filterCard/filterTarget 选牌选目标，
 *   再 player.useSkill 执行完整结算（日志/动画/统计/contentBefore/逐目标 content；
 *   content 中 get.info(event.name)/getStorage(event.name) 以发动技能名自引用、读写自洽）；
 * - viewAs 型（印牌技）：enable/viewAs/filterCard/check/position 等整套属性搬运，注册为出牌阶段按钮技；
 * - backup 型（响应印卡技）：enable 为 chooseToUse/chooseToRespond（含数组）且声明 backup(links, player) 的动态印卡技
 *   （backup 函数含平级与 chooseButton.backup 嵌套两种形式，纯触发技如 xing_sizhu 不入此类），依赖响应语境不可
 *   移植——效果近似并搭配玩家自选的新时机：印卡类别按源码类别限定（getBackupTypes，如 dcjiusi 只印基本牌），
 *   消耗牌数按 backup 返回的 selectCard/filterCard（getBackupCardNum，如 dcfuhui 的 selectCard: 2 →
 *   "将两张牌当任意即时牌使用"；dcjiusi 的 filterCard: false → "视为使用"不耗牌）。
 * 已提取的技能效果（fx_技能名）与时机（时机 key）均限一次，记录于 newxinxpeiyu 独立 storage。
 */
export let newxinxpeiyuSkill = {
    trigger: { global: ["roundStart", "roundEnd"] },
    filter(event, player) {
        return lib.skill.newxinxpeiyu.getEffectSources(player).some(source => !["trigger", "active", "backup"].includes(source.type) || lib.skill.newxinxpeiyu.getTimingsFor(player, source).length);
    },
    check() {
        return true;
    },
    async content(event, trigger, player) {
        const info = lib.skill.newxinxpeiyu;
        //① 收集效果源（trigger/active/backup 型需有可选时机才展示）
        const available = info.getEffectSources(player).filter(source => !["trigger", "active", "backup"].includes(source.type) || info.getTimingsFor(player, source).length);
        if (!available.length) return;
        //按角色分组展示（显示样式参考 potyinhui：按钮带技能翻译与描述，link 为技能名）
        const dialog = ui.create.dialog();
        dialog.add("培育：请选择要提取效果的技能");
        const sourceMap = {};
        for (const current of game.players) {
            const list = available.filter(source => source.player == current);
            if (!list.length) continue;
            dialog.add('<div class="text center" style="width:100%; font-weight:bold;">' + get.translation(current) + "</div>");
            dialog.add([list.map(source => {
                sourceMap[source.skill] = source;
                return [
                    source.skill,
                    `<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【`
                    + get.translation(source.skill) + `】${source.typeLabel}</div><div>`
                    + (lib.translate[source.skill + "_info"] || "")
                    + "</div></div>",
                ];
            }), "textbutton"]);
        }
        //培育自带皮肤：这个对话框是手工 ui.create.dialog 建的，不经过 pyHandle，需自行挂类名
        //（关掉扩展设置里的全局皮肤开关时，培育的这一屏仍然是卡片样式）
        pySkin(dialog);
        const sourceResult = await player.chooseButton(dialog).set("ai", () => Math.random()).forResult();
        if (!sourceResult?.bool || !sourceResult?.links?.length) return;
        const source = sourceMap[sourceResult.links[0]];
        if (!source) return;
        //② trigger/active/backup 型选新时机（trigger 型事件类别亲和已过滤；active/backup 型效果不依赖事件字段，全时机可选）
        let timing = null;
        if (source.type != "viewAs") {
            const timings = info.getTimingsFor(player, source);
            const timingResult = await player
                .chooseButton([
                    `培育：请为〖${get.translation(source.skill)}〗选择新时机`,
                    //样式与①②的时机/效果选择保持一致
                    [timings.map(item => [item.key, item.name]), "tdnodes"],
                    [pyHandle(lib.skill.xinxpeiyu.timingPool), "handle"],
                ], true)
                .set("ai", () => Math.random())
                .forResult();
            if (!timingResult?.bool || !timingResult?.links?.length) return;
            timing = timings.find(item => item.key == timingResult.links[0]);
            if (!timing) return;
        }
        //③ 选获得技能的角色
        const targetResult = await player
            .chooseTarget("培育：令一名角色获得〖造物〗", (card, player, target) => target.isIn())
            .set("ai", target => get.attitude(get.player(), target) + (target == get.player() ? 1 : 0))
            .forResult();
        if (!targetResult?.bool || !targetResult?.targets?.length) return;
        const target = targetResult.targets[0];
        //④ 生成随机后缀的组合技能并注册（backup 型先行判定词条）
        let skill;
        while (true) {
            skill = "newxinxpeiyu_zuhe_" + Math.random().toString(36).slice(-8);
            if (!lib.skill[skill]) break;
        }
        game.broadcastAll((skill, sourceSkill, timing, kind, sourceType) => {
            const base = { charlotte: true, mark: true };
            if (timing && sourceType == "active") {
                //active 型（phaseUse 主动技）：新时机触发时还原原发动流程——先按原 filterCard/filterTarget
                //chooseCardTarget 选牌选目标（对象型 filter 引擎自动包装，AI 用默认启发），
                //再 useSkill 执行完整结算（日志/动画/统计/contentBefore/逐目标 content；
                //content 中 get.info(event.name)/getStorage(event.name) 以发动技能名自引用、读写自洽）
                const { filter, trigger: trig, ...other } = timing.effect;
                lib.skill[skill] = {
                    ...base,
                    direct: true,
                    usable: 1,
                    trigger: trig,
                    ...(filter ? { filter } : {}),
                    ...other,
                    async content(event, trigger, player) {
                        const srcInfo = get.info(sourceSkill);
                        const needCard = !!srcInfo.filterCard;
                        const needTarget = !!srcInfo.filterTarget;
                        if (needCard || needTarget) {
                            const result = await player
                                .chooseCardTarget({
                                    prompt: `发动【${get.translation(sourceSkill)}】`,
                                    ...(needCard
                                        ? {
                                            filterCard: srcInfo.filterCard,
                                            ...(srcInfo.selectCard ? { selectCard: srcInfo.selectCard } : {}),
                                            ...(srcInfo.position ? { position: srcInfo.position } : {}),
                                        }
                                        : { filterCard: true, selectCard: 0 }),
                                    ...(needTarget
                                        ? {
                                            filterTarget: srcInfo.filterTarget,
                                            ...(srcInfo.selectTarget ? { selectTarget: srcInfo.selectTarget } : {}),
                                        }
                                        : { filterTarget: true, selectTarget: 0 }),
                                })
                                .forResult();
                            if (!result?.bool) return;
                            await player.useSkill(sourceSkill, result.cards || [], result.targets || []).forResult();
                        } else {
                            const result = await player
                                .chooseBool(`是否发动【${get.translation(sourceSkill)}】？`)
                                .set("ai", () => true)
                                .forResult();
                            if (!result?.bool) return;
                            await player.useSkill(sourceSkill, [], []).forResult();
                        }
                    },
                };
                lib.translate[skill + "_info"] = `${timing.name}，你可以发动〖${get.translation(sourceSkill)}〗的效果。（每回合限一次）`;
            } else if (sourceType == "backup" && timing) {
                //backup 型：按原技能实际印卡的类别（getBackupTypes 扫描源码类别限定）与消耗牌数
                //（getBackupCardNum 扫描 backup 返回的 selectCard/filterCard，如 dcfuhui 的 selectCard: 2
                //→ 将两张牌当任意即时牌使用；dcjiusi 的 filterCard: false → 视为使用不耗牌）近似
                const types = lib.skill.newxinxpeiyu.getBackupTypes(sourceSkill);
                const num = lib.skill.newxinxpeiyu.getBackupCardNum(sourceSkill);
                const effectName = num > 0 ? lib.skill.newxinxpeiyu.convertEffectName(types, num) : lib.skill.newxinxpeiyu.viewEffectName(types);
                const effect = num > 0 ? lib.skill.newxinxpeiyu.makeConvertEffect(types, num) : lib.skill.newxinxpeiyu.makeViewEffect(types);
                const { filter, trigger: trig, ...other } = timing.effect;
                lib.skill[skill] = {
                    ...base,
                    direct: true,
                    usable: 1,
                    trigger: trig,
                    ...(filter ? { filter } : {}),
                    ...other,
                    async content(event, trigger, player) {
                        await effect.content(event, trigger, player);
                    },
                };
                lib.translate[skill + "_info"] = `${timing.name}，${effectName}。（每回合限一次）`;
            } else if (timing) {
                //trigger 型：偷跑原技能完整结算（direct 跳过外层询问，由内层原技能 cost 询问）
                const { filter, trigger: trig, ...other } = timing.effect;
                lib.skill[skill] = {
                    ...base,
                    direct: true,
                    usable: 1,
                    trigger: trig,
                    ...(filter ? { filter } : {}),
                    ...other,
                    async content(event, trigger, player) {
                        const next = game.createTrigger(event.triggername, sourceSkill, player, trigger);
                        next.uncheckHasSkill = true;
                        await next.forResult();
                    },
                };
                lib.translate[skill + "_info"] = `${timing.name}，视为拥有〖${get.translation(sourceSkill)}〗的效果。（每回合限一次）`;
            } else {
                //viewAs 型：整套印牌属性搬运
                const src = get.info(sourceSkill);
                lib.skill[skill] = {
                    ...base,
                    enable: "phaseUse",
                    usable: 1,
                    viewAs: src.viewAs,
                    ...(src.filterCard ? { filterCard: src.filterCard } : {}),
                    ...(src.selectCard ? { selectCard: src.selectCard } : {}),
                    ...(typeof src.check == "function" ? { check: src.check } : {}),
                    ...(src.position ? { position: src.position } : {}),
                    ...(src.complexCard ? { complexCard: src.complexCard } : {}),
                    ...(src.viewAsFilter ? { viewAsFilter: src.viewAsFilter } : {}),
                    ...(src.discard !== undefined ? { discard: src.discard } : {}),
                    ...(src.lose !== undefined ? { lose: src.lose } : {}),
                    ...(src.prepare ? { prepare: src.prepare } : {}),
                    ...(src.onUse ? { onUse: src.onUse } : {}),
                    ...(src.ai ? { ai: { ...src.ai } } : {}),
                };
                lib.translate[skill + "_info"] = `出牌阶段限一次，你可以如〖${get.translation(sourceSkill)}〗般印牌使用。`;
            }
            lib.translate[skill] = "造物";
            game.finishSkill(skill);
        }, skill, source.skill, timing, null, source.type);
        target.addSkill(skill);
        player.markAuto("newxinxpeiyu", [`fx_${source.skill}`, ...(timing ? [timing.key] : [])]);
        game.log(player, "提取了", `#g【${get.translation(source.skill)}】`, "组合出了", "#g【造物】", "令", target, "获得之");
    },
    mark: true,
    marktext: "育",
    intro: {
        content(storage, player) {
            const list = storage || [];
            const labels = list.map(key => key.startsWith("fx_")
                ? get.translation(key.slice(3)) || key.slice(3)
                : lib.skill.xinxpeiyu.getEntryLabel(key));
            return `已提取：${labels.join("、") || "无"}`;
        },
    },
    //已记录的记录项（fx_技能名 与 时机 key 混存，独立于 xinxpeiyu 的 storage）
    getUsed(player) {
        return player.getStorage("newxinxpeiyu");
    },
    //收集场上可提取的效果源技能（技能来源与 xinxpeiyu.getFieldDescriptions 一致，排除两版培育自身防套娃；
    //无翻译的引擎内部子技不展示；charlotte 临时技排除）
    getEffectSources(player) {
        const info = lib.skill.newxinxpeiyu;
        const used = info.getUsed(player);
        const sources = [];
        for (const current of game.players) {
            const skills = current.getSkills();
            game.expandSkills(skills);
            for (const skill of skills) {
                if (!skill || skill == "newxinxpeiyu" || skill == "xinxpeiyu") continue;
                if (used.includes(`fx_${skill}`)) continue;
                if (!lib.translate[skill]) continue;
                const skillInfo = get.info(skill);
                if (!skillInfo || skillInfo.charlotte) continue;
                const enables = skillInfo.enable ? (Array.isArray(skillInfo.enable) ? skillInfo.enable : [skillInfo.enable]) : [];
                const hasContent = typeof skillInfo.content == "function" || typeof skillInfo.content == "string";
                //backup 型仅限：enable 为 chooseToUse/chooseToRespond（含数组）且声明 backup(links, player) 的动态印卡技；
                //backup 函数有平级 skillInfo.backup 与嵌套 skillInfo.chooseButton.backup（引擎 content.ts 的
                //chooseToUse/chooseToRespond 均读取后者，如 dcjiusi）两种形式，纯触发技（如 xing_sizhu）无 enable 不入此类
                const hasBackup = typeof skillInfo.backup == "function" || typeof skillInfo.chooseButton?.backup == "function";
                if (enables.some(e => e == "chooseToUse" || e == "chooseToRespond") && hasBackup) {
                    sources.push({ skill, type: "backup", player: current, typeLabel: "（印卡）" });
                    continue;
                }
                if (enables.includes("phaseUse")) {
                    if (skillInfo.viewAs) {
                        sources.push({ skill, type: "viewAs", player: current, typeLabel: "（印牌）" });
                        continue;
                    }
                    if (hasContent) {
                        sources.push({ skill, type: "active", player: current, typeLabel: "（主动）" });
                        continue;
                    }
                }
                if (skillInfo.trigger && hasContent) {
                    const tags = info.getTimingTags(skillInfo);
                    if (tags.size) sources.push({ skill, type: "trigger", player: current, typeLabel: "（触发）", tags });
                }
            }
        }
        return sources;
    },
    //tags 补全：原版 timingPool 中无 tags 的词条按事件类别补齐，使同类别亲和匹配生效
    tagOverrides: {
        dieAfterGlobal: ["die"],
        turnOverAfterSelf: ["turn"],
        cardsDiscardAfterGlobal: ["discard"],
    },
    //源技能 trigger 声明反查时机类别（借 triggerAlias 逆映射：声明命中哪些时机词条，取其 tags 并集）
    getTimingTags(skillInfo) {
        const info = lib.skill.newxinxpeiyu;
        const pool = lib.skill.xinxpeiyu.timingPool;
        const alias = lib.skill.xinxpeiyu.triggerAlias;
        const tags = new Set();
        for (const role in skillInfo.trigger) {
            const evts = Array.isArray(skillInfo.trigger[role]) ? skillInfo.trigger[role] : [skillInfo.trigger[role]];
            for (const evt of evts) {
                for (const key in alias) {
                    if (alias[key].some(pair => pair[0] === role && pair[1] === evt)) {
                        const entry = pool.find(item => item.key === key);
                        (info.tagOverrides[key] || entry?.tags || []).forEach(tag => tags.add(tag));
                    }
                }
            }
        }
        return tags;
    },
    //指定效果源的可用时机：引擎级提取 + 未用 + 非 enable 型；
    //trigger 型做事件类别亲和（tags 交集非空，防 content 读 trigger.num/source 字段错位）；
    //active/backup 型效果不依赖事件字段，全时机可选
    getTimingsFor(player, source) {
        const info = lib.skill.newxinxpeiyu;
        const used = info.getUsed(player);
        const fieldTriggers = lib.skill.xinxpeiyu.getFieldTriggers();
        return lib.skill.xinxpeiyu.timingPool.filter(item =>
            !used.includes(item.key)
            && !!item.effect.trigger
            && lib.skill.xinxpeiyu.isTriggerMatched(item, fieldTriggers)
            && (source.type != "trigger" || (info.tagOverrides[item.key] || item.tags).some(tag => source.tags.has(tag)))
        );
    },
    //backup 型印卡类别判定：扫描技能各函数源码中的类别限定写法（get.type(info[2]) == "basic"、
    //["basic","trick"].includes(get.type(...))、info[0] == "trick" 等），原技能印啥类别就印啥
    //（如 dcjiusi 只印基本牌）；扫描不到明确限定时默认即时牌（基本牌+普通锦囊牌）
    getBackupTypes(skill) {
        const info = get.info(skill);
        const fns = [];
        const push = fn => { if (typeof fn == "function") fns.push(fn.toString()); };
        push(info.filter);
        push(info.hiddenCard);
        push(info.viewAsFilter);
        push(info.backup);
        if (info.chooseButton) {
            push(info.chooseButton.dialog);
            push(info.chooseButton.backup);
            push(info.chooseButton.check);
            push(info.chooseButton.filter);
        }
        const text = fns.join("\n");
        const bothIncludes = /\[\s*["']basic["']\s*,\s*["']trick["']\s*\]\s*\.includes\(/.test(text);
        const trickDelay = /\[\s*["']trick["']\s*,\s*["']delay["']\s*\]\s*\.includes\(/.test(text);
        //比较符含 ==/===/!=/!==（dcfuhui 用 get.type(name) != "basic" && ... != "trick" 限定即时牌）
        const basic = bothIncludes || /get\.type\([^)]*\)\s*[!=]==?\s*["']basic["']/.test(text) || /info\[0\]\s*[!=]==?\s*["']basic["']/.test(text);
        const trick = bothIncludes || trickDelay || /get\.type\([^)]*\)\s*[!=]==?\s*["']trick["']/.test(text) || /info\[0\]\s*[!=]==?\s*["']trick["']/.test(text);
        const delay = trickDelay || /get\.type\([^)]*\)\s*[!=]==?\s*["']delay["']/.test(text) || /info\[0\]\s*[!=]==?\s*["']delay["']/.test(text);
        const types = [];
        if (basic) types.push("basic");
        if (trick) types.push("trick");
        if (delay) types.push("delay");
        return types.length ? types : ["basic", "trick"];
    },
    //backup 型消耗牌数判定：扫描 backup 函数源码中的 selectCard/filterCard 声明——
    //selectCard: n（n≥1）→ 转化消耗 n 张牌；selectCard: -1 或 filterCard: false → 视为使用不耗牌；
    //无 selectCard 且 filterCard 非 false → 默认消耗 1 张
    getBackupCardNum(skill) {
        const info = get.info(skill);
        const fns = [];
        const push = fn => { if (typeof fn == "function") fns.push(fn.toString()); };
        push(info.backup);
        if (info.chooseButton) push(info.chooseButton.backup);
        const text = fns.join("\n");
        const match = text.match(/selectCard\s*[:=]\s*(-?\d+)/);
        if (match) return Math.max(0, parseInt(match[1]));
        return /filterCard\s*:\s*(false|\(\)\s*=>\s*false)/.test(text) ? 0 : 1;
    },
    //转化使用描述：将 n 张牌当任意类别牌使用
    convertEffectName(types, num) {
        const n = num > 1 ? `${get.cnNumber(num)}张牌` : "一张牌";
        let t;
        if (types.includes("delay") && types.includes("basic")) t = "牌（基本牌或锦囊牌）";
        else if (types.includes("delay")) t = "锦囊牌（含延时锦囊牌）";
        else if (types.includes("basic") && types.includes("trick")) t = "基本牌或普通锦囊牌";
        else if (types.includes("basic")) t = "基本牌";
        else t = "普通锦囊牌";
        return `你可以将${n}当任意${t}使用`;
    },
    //转化使用（convertBasic 系方法，参考本体圆融）：材料牌与目标牌同对话框选择（complexSelect），
    //消耗 num 张手牌当目标类别牌使用；与 xinxpeiyu 同源方法参数化 num 后改挂自身名字空间
    makeConvertEffect(types, num) {
        return {
            frequent: true,
            filter(event, player) {
                return player.countCards("h") >= num && lib.skill.newxinxpeiyu.getVCardList(player, types).length > 0;
            },
            async content(event, trigger, player) {
                await lib.skill.newxinxpeiyu.convertUse(player, types, num);
            },
        };
    },
    async convertUse(player, types, num) {
        const hands = player.getCards("h");
        if (hands.length < num) return false;
        const vcards = get.inpileVCardList(info => {
            if (!types.includes(info[0])) return false;
            return hands.some(card => player.hasUseTarget(get.autoViewAs({ name: info[2], nature: info[3] }, [card]), true, true));
        });
        if (!vcards.length) return false;
        const result = await player
            .chooseButton(["请选择要转化的牌与目标牌", hands, "###可转化牌###", [vcards, "vcard"]], num + 1)
            .set("filterButton", button => {
                const selected = ui.selected.buttons;
                const selCards = selected.filter(i => !Array.isArray(i.link)).length;
                if (!Array.isArray(button.link)) {
                    //材料牌：已选材料未满 num 张且未选目标牌时可选
                    return selCards < num && !selected.some(i => Array.isArray(i.link));
                }
                //目标牌：材料选满 num 张后才可选，且当前材料组合需有使用目标
                if (selCards != num) return false;
                const cardx = get.autoViewAs({ name: button.link[2], nature: button.link[3] }, selected.filter(i => !Array.isArray(i.link)).map(i => i.link));
                return get.player().hasUseTarget(cardx, true, true);
            })
            .set("complexSelect", true)
            .set("ai", button => {
                if (!Array.isArray(button.link)) return -get.value(button.link);
                return get.player().getUseValue(get.autoViewAs({ name: button.link[2], nature: button.link[3] }), true, true);
            })
            .forResult();
        if (!result?.bool) return false;
        const material = result.links.filter(link => !Array.isArray(link));
        const vlink = result.links.find(link => Array.isArray(link));
        if (!vlink || material.length != num) return false;
        await player.chooseUseTarget(get.autoViewAs({ name: vlink[2], nature: vlink[3] }, material), true, material);
        return true;
    },
    viewEffectName(types) {
        if (types.includes("delay")) {
            if (types.includes("basic")) return "你可以视为使用一张牌（基本牌或锦囊牌）";
            return "你可以视为使用一张锦囊牌（含延时锦囊牌）";
        }
        if (types.includes("basic") && types.includes("trick")) return "你可以视为使用一张即时牌（基本牌或普通锦囊牌）";
        if (types.includes("basic")) return "你可以视为使用一张基本牌";
        return "你可以视为使用一张普通锦囊牌";
    },
    //视为使用（viewBasic 系方法）：枚举牌堆可用虚拟牌 → chooseButton 选定 → chooseUseTarget
    makeViewEffect(types) {
        return {
            frequent: true,
            filter(event, player) {
                return lib.skill.newxinxpeiyu.getVCardList(player, types).length > 0;
            },
            async content(event, trigger, player) {
                const list = lib.skill.newxinxpeiyu.getVCardList(player, types);
                if (!list.length) return;
                const result = await player
                    .chooseButton([get.prompt("newxinxpeiyu"), "请选择视为使用的牌", [list, "vcard"]], true)
                    .set("ai", button => get.player().getUseValue(get.autoViewAs({ name: button.link[2], nature: button.link[3], isCard: true })))
                    .forResult();
                if (!result?.links?.length) return;
                const vcard = get.autoViewAs({ name: result.links[0][2], nature: result.links[0][3] || null, isCard: true });
                if (player.hasUseTarget(vcard)) {
                    await player.chooseUseTarget(vcard, true, false);
                }
            },
        };
    },
    //以下工具方法与 xinxpeiyu 同源（getVCardList），改挂自身名字空间保持独立
    getVCardList(player, types) {
        return get.inpileVCardList(info => {
            if (!types.includes(info[0])) return false;
            return player.hasUseTarget(get.autoViewAs({ name: info[2], nature: info[3], isCard: true }));
        });
    },
    ai: { threaten: 1.6 },
};
