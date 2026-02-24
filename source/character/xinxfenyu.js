import { lib, game, ui, get, ai, _status } from '../../../../noname.js';



export let info = {
    name: 'xinxfenyu',
    connect: true,
    connectBanned: [],
    //武将分包
    characterSort: {
        xinxfenyu: {
            // 分包: ["武将ID","武将ID"],
            'xuandiesheji': ['xinx_hanzhuo', 'xinx_zhuowenjun', 'xinx_limu', 'xinx_xunguan', 'xinx_wuqi', 'xinx_wangmang', 'xinx_wuyuan',
                'fyrh_zuti', 'fyrh_lvzhi', 'fyrh_yuji'],
            'xinx_xiaoyezisheji': ['xinx_lingfeng', 'xinx_zhugejing', 'xinx_lizhaoyi', 'fyrh_yuanchen', 'fyrh_bianrang'],
            'xinx_xiulisheji': ['fyrh_leisai', 'fyrh_dianci', 'fyrh_zaochuanqiu', 'fyrh_jiye', 'fyrh_anbian'],
            'xinx_tingyusheji': ['fyrh_duyu', 'fyrh_caocao', 'fyrh_jiangwei', 'fyrh_zhaoyun', 'fyrh_xuyou', 'fyrh_chenqun'],
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
        xinx_wangmang: ["male", "qun", 4, ['xinxqingding'], ['rare']],
        xinx_wuyuan: ["male", "qun", 4, ['xinxyuanyuan'], ['rare']],
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
        fyrh_leisai: ["female", "qun", 4, ['fyrhlihua', 'fyrhhuohuan'], ['border:xinx', 'epic']],
        fyrh_dianci: ["male", "qun", 4, ['fyrhzaoju', 'fyrhchongsheng'], ['border:xinx', 'legend']],
        fyrh_zaochuanqiu: ["male", "qun", 4, ['fyrhkeng'], ['border:xinx', 'legend']],
        fyrh_yuanchen: ["male", "shu", 4, ['fyrhzhansui', 'fyrhxiaoxian'], ['legend']],
        fyrh_jiye: ["female", "qun", 4, ['fyrhyouling', 'fyrhxianji'], ['border:xinx', 'rare']],
        fyrh_duyu: ["male", "jin", 4, ['fyrhzhenzhan', 'fyrhpozhu'], ['legend']],
        fyrh_caocao: ["male", "qun", 4, ['fyrhyulie', 'fyrhwenjue'], ['legend']],
        fyrh_jiangwei: ["male", "shu", 4, ['fyrhjizhi', 'fyrhzhiji'], ['legend']],
        fyrh_xuyou: ["male", "qun", 3, ['fyrhchenglue', 'fyrhshicai'], ['epic']],
        fyrh_zhaoyun: {
            sex: "male",
            group: "shu",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_zhaoyun.png",
            trashBin: ['rare'],
            skills: ['fyrhlongdan', 'fyrhyajiao'],
            dieAudios: ["jsrg_zhaoyun"],
        },
        fyrh_chenqun: ["male", "wei", 4, ['fyrhyinzhi', 'fyrhquanxin'], ['legend']],
        fyrh_bianrang: ["male", "qun", 4, ['fyrhzhanghua', 'fyrhyanfeng'], ['legend']],
        fyrh_zuti: {
            sex: "male",
            group: "jin",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_zuti.png",
            trashBin: ['legend'],
            skills: ['fyrhjiji'],
            dieAudios: ["litong"],
        },
        fyrh_lvzhi: ["female", "qun", 3, ['fyrhjunce'], ['epic']],
        fyrh_anbian: ["male", "qun", 4, ['fyrhruiqi'], ['border:xinx', 'legend']],
        fyrh_yuji: ["female", "qun", 3, ['fyrhquxing'], ['legend']],



    },
    //武将称号
    characterTitle: {
        //武将ID:" ",
        xinx_lingfeng: "<font color=#52E0B3>设计：小叶子</font>",
        fyrh_caocao: "<font color=#70ADDC>胎出龙鳞</font>",
        fyrh_duyu: "<font color=#9160A4>万断其锋</font>",
        fyrh_jiangwei: "<font color=#F96C5D>七星危坠</font>",

    },
    characterSubstitute: {//皮肤切换
        fyrh_caocao: [
            ['fyrh_caocao_shadow', ['ext:永夜之境/image/fyrh_caocao_shadow.png']],
        ],
    },
    //翻译
    translate: {
        xuandiesheji: '玄蝶',
        xinx_xiaoyezisheji: '小叶子',
        xinx_xiulisheji: '秀丽',
        xinx_tingyusheji: '廷玉',
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
        fyrh_zaochuanqiu: '早川秋',
        fyrh_yuanchen: '袁綝',
        fyrh_jiye: '姬野',
        fyrh_duyu: '廷杜预',
        fyrh_duyu_prefix: '廷',
        fyrh_caocao: '廷曹操',
        fyrh_caocao_prefix: '廷',
        fyrh_jiangwei: '廷姜维',
        fyrh_jiangwei_prefix: '廷',
        fyrh_zhaoyun: '廷赵云',
        fyrh_zhaoyun_prefix: '廷',
        fyrh_xuyou: '廷许攸',
        fyrh_xuyou_prefix: '廷',
        fyrh_chenqun: '廷陈群',
        fyrh_chenqun_prefix: '廷',
        fyrh_bianrang: '边让',
        fyrh_zuti: '玄蝶祖逖',
        fyrh_zuti_prefix: '玄蝶',
        fyrh_lvzhi: '玄蝶吕雉',
        fyrh_lvzhi_prefix: '玄蝶',
        fyrh_anbian: '岸边',
        fyrh_yuji: '玄蝶虞姬',
        fyrh_yuji_prefix: '玄蝶',








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
        xinxqingding_info: `锁定技，每回合限一次，当你摸牌、回复体力、造成伤害时，若你本轮执行过：仅此一项，多执行两次；
        <br>另外两项，防止之；所有项，删除本行。`,
        xinxqingding_append: `<span style="font-family: yuanli">向使当初身便死，一生真伪复谁知？</span>`,
        xinxyuanyuan: '冤冤',
        xinxyuanyuan_info: `锁定技，弃牌阶段开始时，你跳过本阶段、移出任意张牌令任意名其他角色视为对你使用【杀】。当你或你以此法指定过的角色使用牌后，你移去一张同类牌以与其各摸一张牌，若因此移去了所有牌，此回合中，其视为拥有本技能且你对其造成的伤害值改为其体力值。`,
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
        fyrhhuohuan_info: `出牌阶段限一次，你可以与一名角色拼点: 若你赢，重置${get.poptip('fyrhlihua')}；若你没赢，重置${get.poptip('fyrhhuohuan')}。`,
        fyrhzaoju: '躁锯',
        fyrhzaoju_info: `出牌阶段，你可以重铸两张牌，然后将因此法获得的一张牌当一张不计入次数且无距离限制的雷【杀】使用，结算后，若${get.poptip('xinx_central')}含有四种花色，本回合本技能失效，然后你摸两张牌。`,
        fyrhchongsheng: '重生',
        fyrhchongsheng_info: `每回合限一次，你使用牌仅指定自己为目标后，可以回复1点体力或将${get.poptip('xinx_central')}两张牌洗入牌堆。`,
        fyrhkeng: '吭',
        fyrhkeng_info: `出牌阶段限一次，你可以亮出牌堆顶三张牌，然后你可以将其中一张牌发起拼点：若你赢，你可以将另外一张亮出牌当【杀】使用，否则你恢复一个装备栏。若造成伤害，你获得仅剩的亮出牌并从牌堆随机使用一张装备牌。结束阶段，你可以废除一个有牌的装备栏发动本技能。`,
        fyrhzhansui: '战随',
        fyrhzhansui_info: `每有三张伤害牌结算后，若其中有你使用的牌，你摸四张牌，否则你可以使用一张牌。`,
        fyrhxiaoxian: '骁险',
        fyrhxiaoxian_info: `你每回合首次使用伤害牌无距离限制，若此牌目标唯一，你可以令之不可响应，然后本回合结束时，目标角色视为对你使用【杀】。`,
        fyrhyouling: '幽灵',
        fyrhyouling_info: `每回合限一次，你可以将【杀】、【闪】当【顺手牵羊】或【无中生有】使用，因此获得另一种基本牌时，展示之，然后重置本技能次数。你可以废除一个有牌的装备栏，视为使用上述任意一种牌名（不受回合限制）。`,
        fyrhxianji: '献祭',
        fyrhxianji_info: `回合结束时，你可以减1点体力上限执行一个额外回合，并恢复所有装备栏。若如此做，本技能改为强制发动。`,
        fyrhzhenzhan: '枕战',
        fyrhzhenzhan_info: `你可以明置一张【杀】来跳过判定/弃牌阶段。当你需要使用基本牌时，若你的暗置牌中有，则你可以重铸所有暗置牌视为使用之。`,
        fyrhpozhu: '破竹',
        fyrhpozhu_info: `每回合限一次，你造成或受到伤害后，可以令受伤角色翻面你三张手牌，然后你依次使用明置牌（无距离限制、不可响应且于使用后摸一张牌）。`,
        visible_fyrhzhenzhan: '明置',
        fyrhyulie: '欲烈',
        fyrhyulie_info: `转换技，你可以：<br>①使用【杀】后，视为使用一张【火攻】；<br>②弃牌后，视为使用一张明牌【洞烛先机】；<br>③出牌阶段，获得${get.poptip('xinx_central')}任意张【杀】并摸等量张牌。<br>上述流程出现【闪】后，你移除该项。`,
        fyrhyuliex: '欲烈',
        fyrhyuliex_info: `转换技，你可以：<br>①使用【杀】后，${get.poptip('yulieqice')}；<br>②弃牌后，${get.poptip('yuliezaiqi')}；<br>出牌阶段，你可以${get.poptip('yuliezhiheng')}。`,
        yulieqice: '奇策',
        yulieqice_info: `视为使用一张普通锦囊牌。`,
        yuliezaiqi: '再起',
        yuliezaiqi_info: `可以令至多X名角色各选择一项（X为你本回合弃置的牌数）: 1.你摸一张牌: 2.弃置一张牌，然后你回复1点体力。`,
        yuliezhiheng: '制衡',
        yuliezhiheng_info: `弃置任意张牌，然后摸弃置牌数+1张牌。`,
        fyrhwenjue: '问绝',
        fyrhwenjue_info: `觉醒技，你删尽${get.poptip('fyrhyulie')}所有选项后，将${get.poptip('yulieqice')}，${get.poptip('yuliezaiqi')}，${get.poptip('yuliezhiheng')}依次填入。`,
        fyrhjizhi: '急峙',
        fyrhjizhi_info: `一名其他角色的回合开始时，若其上轮对你使用过【杀】，你可以将手牌数调整至与其相同，其本回合使用牌后，弃置你一张牌。`,
        fyrhzhiji: '志继',
        fyrhzhiji_info: `限定技，有角色失去其最后一张手牌后，你可以回复1点体力并获得${get.poptip('fyrhzhiji_guanxing')}；若为你，再获得${get.poptip('fyrhzhiji_aocai')}，若在你的回合内，再令上述技能可以同时机发动。`,
        fyrhzhiji_guanxing: '观星',
        fyrhzhiji_guanxing_info: `准备阶段和结束阶段，你卜算5。`,
        fyrhzhiji_guanxing_append: `<span style="font-family: yuanli">准备阶段和结束阶段，你卜算5，然后你观看牌堆顶四张牌并可以使用其中任意张基本牌。</span>`,
        fyrhzhiji_guanxingx: '观星',
        fyrhzhiji_guanxingx_info: `准备阶段和结束阶段，你卜算5，然后你观看牌堆顶四张牌并可以使用其中任意张基本牌。`,
        fyrhzhiji_aocai: '傲才',
        fyrhzhiji_aocai_info: `当你需要在回合外使用或打出基本牌时，你可以观看牌堆顶两张牌，若有此牌，你可以使用或打出之（若你没有手牌则改为四张）。`,
        fyrhzhiji_aocai_append: `<span style="font-family: yuanli">当你需要在回合外使用或打出基本牌时，你卜算5，然后你可以观看牌堆顶两张牌，若有此牌，你可以使用或打出之（若你没有手牌则改为四张）。</span>`,
        fyrhzhiji_aocaix: '傲才',
        fyrhzhiji_aocaix_info: `当你需要在回合外使用或打出基本牌时，你卜算5，然后你可以观看牌堆顶两张牌，若有此牌，你可以使用或打出之（若你没有手牌则改为四张）。`,
        fyrhlongdan: '龙胆',
        fyrhlongdan_info: `若你上一张失去的牌为伤害牌，你可以将基本牌当做【闪】使用然后视为使用此伤害牌；若你上一张失去的牌为红色牌，你可以将基本牌当做【杀】使用并摸两张牌。`,
        fyrhyajiao: '涯角',
        fyrhyajiao_info: `锁定技，对你造成过伤害的其他角色的回合开始时，其视为对你使用一张【杀】。`,
        fyrhchenglue: '成略',
        fyrhchenglue_info: `出牌阶段开始时，你可以弃置所有手牌并摸四张牌。此阶段内其他角色失去某种花色的牌后，你将此时机加入${get.poptip('fyrhchenglue')}。`,
        fyrhshicai: '恃才',
        fyrhshicai_info: `你可以将本回合内你获得过的最多的一种花色的所有牌当做一张【趁火打劫】使用。`,
        fyrhyinzhi: '引治',
        fyrhyinzhi_info: `每回合各限一次，当一名角色因摸牌/弃牌手牌数超过手牌上限后，你可以令其弃置/摸两张牌。`,
        fyrhquanxin: '全心',
        fyrhquanxin_info: `当所有角色均弃置过牌的轮次结束时，你可以进行一个额外回合。`,
        fyrhzhanghua: '章华',
        fyrhzhanghua_info: `你每三次失去手牌后你可以重铸所有手牌，若失去牌的方式均不同改为可以摸三张牌。`,
        fyrhyanfeng: '言锋',
        fyrhyanfeng_info: `你使用普通锦囊牌时，可以打出一张【杀】令此牌无法被响应；你使用【杀】时可以打出一张非伤害牌令此牌目标+1。`,
        fyrhjiji: '击楫',
        fyrhjiji_info: `当${get.poptip('xinx_jishipai')}进入弃牌堆后，你可以移出或移去一张同名牌。你一回合使用X张牌后可以摸X张牌（X为移出牌数）。<br>若你发动本行的次数最少，你可以视为使用一张移出牌并摸两张牌。`,
        fyrhjiji_append: `<span style="font-family: yuanli">曾记否，到中流击水，浪遏飞舟？</span>`,
        fyrhjunce: '君侧',
        fyrhjunce_info: `你可以将【杀/酒/铁索连环】、【闪/桃/过河拆桥】当另一侧一张牌使用并将两者移至同侧。任意侧唯一需要使用的牌名改为额外结算一次的【无中生有】。`,
        fyrhjunce_append: `<span style="font-family: yuanli">儿妇人口不可用，顾君与我何如耳。</span>`,
        fyrhruiqi: '锐器',
        fyrhruiqi_info: `以下阶段开始时，你可以——
        <li>摸牌阶段：令摸牌数改为3，然后令一名角色本回合的装备牌失效；<li>出牌阶段：令使用牌数改为2，然后本回合你下次造成伤害时摸两张牌；<li>弃牌阶段：令所须弃牌数改为1，然后你可以将一张牌当【出其不意】使用。`,
        fyrhquxing:'曲兴',
        fyrhquxing_info: `出牌阶段，你可以将多张同名牌置于一名其他角色武将牌上并与其各摸等量张牌。直到你或其下次发动技能，你获得或其使用「曲兴」同名牌后重铸之。`,










    },
    //动态翻译
    dynamicTranslate: {
        fyrhzhiji_guanxing(player) {
            if (player.storage.fyrhzhiji_re) return lib.translate.fyrhzhiji_guanxing_append;
            return lib.translate.fyrhzhiji_guanxing_info;
        },
        fyrhzhiji_aocai(player) {
            if (player.storage.fyrhzhiji_re) return lib.translate.fyrhzhiji_aocai_append;
            return lib.translate.fyrhzhiji_aocai_info;
        },
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
        },
        fyrhyulie(player) {
            const s = player.storage.fyrhyulie || [];
            const isWenjue = Boolean(player.storage.fyrhwenjue);
            const contentMap = isWenjue ? {
                // --- 觉醒后 (问绝) ---
                1: `① 使用【杀】后，${get.poptip('yulieqice')}`,
                2: `② 弃牌后，${get.poptip('yuliezaiqi')}`,
                3: `③ 出牌阶段，你可以${get.poptip('yuliezhiheng')}`
            } : {
                // --- 觉醒前 (欲烈) ---
                1: "① 使用【杀】后，视为使用一张【火攻】",
                2: "② 弃牌后，视为使用一张明牌【洞烛先机】",
                3: `③ 出牌阶段，获得${get.poptip('xinx_central')}任意张【杀】并摸等量张牌`
            };

            let res = '转换技，你可以：<br>';
            //遍历 1, 2, 3 生成动态文本
            for (let i = 1; i <= 3; i++) {
                const text = contentMap[i];
                if (s.includes(i)) {
                    if (s[0] === i) {
                        // 当前生效 (蓝色/高亮)
                        res += `<span class="bluetext"><b>${text}</b></span>`;
                    } else {
                        res += text;
                    }
                } else {
                    res += `<span class="greytext" style="text-decoration:line-through">${text}</span>`;
                }
                if (i < 3) res += '；<br>';
            }
            res += '。<br>';
            if (!isWenjue) {
                res += '<span class="text distinct" style="font-size:0.9em">上述流程出现【闪】后，你移除该项。</span>';
            }
            /* else {
                 res += '<span class="text distinct" style="font-size:0.9em">出现【闪】后移除该项。</span>';
            } */
            return res;

        },
        fyrhjunce(player) {
            const storage = player.storage.fyrhjunce;
            let leftStr = "【杀 / 酒 / 铁索连环】";
            let rightStr = "【闪 / 桃 / 过河拆桥】";
            // 如果游戏已经开始且技能已初始化，则动态渲染当前牌名
            if (storage && storage.left && storage.right) {
                // 遍历数组，将代码牌名（如'sha'）翻译为中文（如'杀'），并用 '/' 拼接
                const leftNames = storage.left.map(name => get.translation(name)).join(' / ');
                const rightNames = storage.right.map(name => get.translation(name)).join(' / ');

                // 加上蓝字，动态变化后的当前状态
                leftStr = `<span class="bluetext">【${leftNames}】</span>`;
                rightStr = `<span class="bluetext">【${rightNames}】</span>`;
            }
            // 拼接并返回最终的技能描述
            return `你可以将${leftStr}与${rightStr}当另一侧一张牌使用并将两者移至同侧。任意侧唯一需要使用的牌名改为额外结算一次的【无中生有】。`;

        },

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
                    player.getHistory("lose", (evt) => {
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
                if (result?.bool) {
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
                        filterCard: () => false,//表示无法选择任何卡
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
            audio: "ext:永夜之境/audio:6",
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
            popup: false,
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
                            player.logSkill("xinxsijiao", null, null, null, [6]);
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
                        player.logSkill("xinxsijiao", null, null, null, [5]);
                        await player.addShownCards(result.cards, "visible_xinxsijiao");
                    }

                }
                else if (storage[2] > handCount) {
                    player.logSkill("xinxsijiao", null, null, null, [get.rand(1, 2)]);
                    await player.drawTo(storage[2]);
                }
                else {
                    storage[0]++;
                    storage[1]++;
                    storage[2]++;
                    get.info(event.name).updateMark(player, event.name);
                    player.logSkill("xinxsijiao", null, null, null, [get.rand(3, 4)]);
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
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/xinxyuwei${index}.mp3` : 2),
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
                            player.logSkill("xinxyuwei", null, null, null, [get.rand(1, 2)]);
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
                            game.playAudio("../extension/永夜之境/audio/", 'xinxyuwei' + [get.rand(3, 4)] + '.mp3');
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
                    trigger.num += trigger.num * 2;
                    game.log(player, '发动', '#g【倾鼎】', '将摸牌数改为' + trigger.num);
                }
                if (trigger.name == "recover" && !hasDraw && !hasDamage) {
                    trigger.num += trigger.num * 2;
                    game.log(player, '发动', '#g【倾鼎】', '将回复值改为' + trigger.num);
                }
                if (trigger.name == "damage" && !hasDraw && !hasRecover) {
                    trigger.num += trigger.num * 2;
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
                trigger.cancel();
                const result = await player.chooseCardTarget({
                    forced: true,
                    allowChooseAll: true,
                    prompt: get.prompt("xinxyuanyuan"),
                    prompt2: `<div class="text center">移出任意张牌，令至少一名其他角色视为对你使用【杀】</div>`,
                    position: "he",
                    selectCard: [0, Infinity],
                    selectTarget: [1, Infinity],
                    filterTarget(player, target) {
                        return player !== target;
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
                            return 6 - get.value(card, player);
                        }
                        return 0;
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
                        /* const att = get.attitude(player, target);
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
                        player.markSkill("xinxyuanyuan");
                        for (const target of targets) {
                            if (target.isIn()) {
                                await target.useCard({ name: "sha", isCard: true }, player, false);
                            }
                        }
                        //await targets.forEach(target =>  target.useCard({ name: "sha", isCard: true }, player, false));
                    }

                }
            },
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
                                `冤冤：移去一张${get.translation(useType)}牌，与${get.translation(target)}各摸一张牌`,
                                matches
                            ],
                            true
                        ).forResult();

                        if (result.bool) {
                            const lose = result.links[0];
                            await player.loseToDiscardpile(lose);
                            //await player.gain(lose, "gain2");
                            game.log(player, "移去了", lose);
                            player.updateMark("xinxyuanyuan");
                            await game.asyncDraw([player, target]);
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
                        return get.value(card);
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
            audio: "ext:永夜之境/audio:3",
            enable: "phaseUse",
            usable: 1,
            position: "he",
            lose: false,
            discard: false,
            delay: false,
            filter(event, player) {
                return player.countCards("he");
            },
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
                    val = 5 + ["shan"].includes(get.name(card)) * 1.5;
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
        fyrhhuohuan: {
            audio: "ext:永夜之境/audio:2",
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
                    game.log(player, '重置了', "#g【礼花】");
                } else {
                    delete player.getStat().skill.fyrhhuohuan;
                    game.log(player, '重置了', "#g【火环】");
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
        fyrhzaoju: {
            enable: "phaseUse",
            position: "he",
            selectCard: 2,
            lose: false,
            discard: false,
            delay: false,
            filter(event, player) {
                return player.countCards("he");
            },
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
                return 6 - get.value(card);
            },
            async content(event, trigger, player) {
                const { cards } = event;
                let drawEvent;
                await player.recast(cards, null, (player, cardsToRecast) => {
                    drawEvent = player.draw(cardsToRecast.length);
                    drawEvent.log = false;
                    return drawEvent;
                }).forResult();
                const gainedCards = (drawEvent && drawEvent.result && drawEvent.result.cards) ? drawEvent.result.cards : [];
                if (gainedCards.length > 0) {
                    /*  const result1 = await player.chooseButton(
                         ["是否将一张牌当作雷杀使用？（不计次数）", gainedCards]
                     ).set("ai", button => {
                         return 6 - get.value(button.link);
                     }).forResult(); */
                    const result1 = await player.chooseCardButton(`是否将一张牌当作雷【杀】使用？（不计次数且无距离限制）`, gainedCards)
                        .set("ai", button => 6 - get.value(button.link))
                        .forResult();
                    if (result1?.bool && result1?.links) {
                        const cards = result1.links;
                        let useresult =
                            await player.chooseUseTarget({
                                name: 'sha',
                                nature: 'thunder',
                                isCard: true,
                            }, cards, false)
                                .set('nodistance', true)
                                .forResult();
                        if (useresult.bool) {
                            await game.delayx();
                            const cards = get.discarded().filterInD("d");
                            const suits = new Set();
                            for (const card of cards) {
                                const suit = get.suit(card);
                                if (suit && suit !== 'none') {
                                    suits.add(suit);
                                }
                            }
                            if (suits.size >= 4) {
                                player.tempBanSkill("fyrhzaoju");
                                player.draw(2);
                            }
                        }
                    }
                }
            },
            ai: {
                order: 10,
                result: {
                    player: 1,
                },
            },
            marktext: "🪚",
            mark: true,
            intro: {
                markcount(storage, player) {
                    const cards = get.discarded().filterInD("d");
                    const suits = new Set();
                    for (const card of cards) {
                        const suit = get.suit(card);
                        if (suit && suit !== 'none') {
                            suits.add(suit);
                        }
                    }
                    return suits.size;
                },
                mark(dialog, storage, player) {
                    // 设置弹窗宽度，大框显示
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight"); // 手机端全屏高度
                    }
                    const centerCards = get.discarded().filterInD("d");
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🀄中央区</div>');

                    if (centerCards.length) {
                        dialog.addAuto(centerCards);
                    } else {
                        dialog.addText('<div class="text center" style="opacity:0.6">暂无卡牌</div>');
                    }
                }
            },
            //group: 'xinxangang_add',
            subSkill: {

            }
        },
        fyrhchongsheng: {
            trigger: {
                player: "useCardToPlayered",
            },
            filter(event, player) {
                if (event.target !== player || !event.isFirstTarget || event.targets.length !== 1) return false;
                const cards = get.discarded().filterInD("d");
                return cards.length >= 2 || player.isDamaged();
            },
            usable: 1,
            async cost(event, trigger, player) {
                let list = [];
                let choiceList = [];
                const cards = get.discarded().filterInD("d");
                if (player.isDamaged()) {
                    list.push('回复');
                    choiceList.push(`回复1点体力`);
                }
                if (cards.length >= 2) {
                    list.push('洗入');
                    choiceList.push(`将${get.poptip('xinx_central')}两张牌洗入牌堆`);
                }
                list.push("cancel2");
                const { control } = await player.chooseControl(list)
                    .set('prompt', get.prompt(event.skill) + ':请选择一项')
                    .set("choiceList", choiceList)
                    .set("ai", () => {
                        const player = get.player();
                        if (player.hp <= 3 && list.includes('回复')) {
                            return list.indexOf('回复');
                        }
                        if (list.includes('洗入')) {
                            return list.indexOf('洗入');
                        }
                        return 0;
                    })
                    .forResult();
                event.result = {
                    bool: control != "cancel2",
                    cost_data: control,
                };
            },
            async content(event, trigger, player) {
                const control = event.cost_data;
                if (control === '回复') {
                    player.recover();
                } else if (control === '洗入') {
                    let discards = get.discarded().filterInD("d");
                    const result = await player.chooseButton(
                        ["是否将中央区两张牌洗入牌堆", discards], 2
                    ).set("ai", button => {
                        return 6 - get.value(button.link);
                    }).forResult();
                    if (result?.bool && result?.links) {
                        let cards = result.links;
                        game.log(player, "将", cards, "洗入牌堆");
                        await game.cardsGotoPile(cards, () => {
                            return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                        });
                        player.markSkill('fyrhzaoju');
                    }
                }
            },
            ai: {
                order: 7,
                result: {
                    player: 1,
                },
            },
        },
        fyrhkeng: {
            audio: "ext:永夜之境/audio:2",
            enable: "phaseUse",
            usable: 1,
            delay: false,
            lose: false,
            discard: false,
            filter(event, player) {
                return game.hasPlayer(target => player.canCompare(target, true));
            },
            async content(event, trigger, player) {
                let cards = get.cards(3);
                await game.cardsGotoOrdering(cards);
                let result = await player
                    .chooseButtonTarget({
                        createDialog: [
                            `###${get.prompt('fyrhkeng')}###<div class="text center">选择一张牌，并与一名角色拼点</div>`,
                            cards], cards: cards,
                        filterButton(button) {
                            return true;
                        },
                        filterTarget(card, player, target) {
                            return player.canCompare(target, true);
                        },
                        ai1(button) {
                            return get.number(button.link);
                        },
                        ai2(target) {
                            return -get.attitude(get.player(), target) * target.countCards("h");
                        },
                    })
                    .forResult();
                if (result?.bool && result.links && result.targets) {
                    const target = result.targets[0];
                    const cardInHand = result.links[0];
                    cards.remove(cardInHand);
                    let next = player.chooseToCompare(target);
                    if (!next.fixedResult) {
                        next.fixedResult = {};
                    }
                    next.fixedResult[player.playerid] = cardInHand;
                    const result1 = await next.forResult();
                    if (result1?.bool) {
                        if (result1.winner === player) {
                            const result2 = await player.chooseCardButton(`是否将一张牌当作【杀】使用？`, cards)
                                .set("ai", button => { return 6 - get.value(button.link) })
                                .forResult();
                            if (result2?.bool && result2?.links) {
                                const scards = result2.links;
                                cards.remove(scards[0]);
                                player.$gain2(scards, false);
                                await game.delayx();
                                if (player.hasUseTarget({ name: 'sha' }, true, false)) {
                                    await player.chooseUseTarget({
                                        name: 'sha',
                                        isCard: true,
                                    }, scards, true)
                                }
                                if (player.hasHistory('sourceDamage', (evt) => evt.getParent(4) == event)) {
                                    await player.gain(cards, "gain2");
                                    /* delete player.getStat().skill.fyrhkeng;
                                    game.log(player, '重置了', "#g【吭】"); */
                                    const findEquipCard = slot => {
                                        const find = card => get.type(card, null, false) == "equip" && (!slot || get.subtype(card) == slot);
                                        return get.cardPile2(find, "random");
                                    };
                                    const emptySlots = Array.from({ length: 5 }, (_, i) => i + 1)
                                        .filter(i => player.hasEmptySlot(i))
                                        .map(i => "equip" + i);

                                    let card = null;
                                    if (emptySlots.length > 0) {
                                        for (const slot of emptySlots) {
                                            card = findEquipCard(slot);
                                            if (card) break;
                                        }
                                    }
                                    if (!card) {
                                        card = findEquipCard();
                                    }
                                    if (!card) {
                                        return;
                                    }
                                    if (player.hasUseTarget(card)) {
                                        await player.chooseUseTarget(card, true);
                                    }
                                    if (!player.hasDisabledSlot()) {
                                        return;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if (player.hasDisabledSlot()) {
                            const list = [1, 2, 3, 4, 5].filter(num => player.hasDisabledSlot(num)).map(num => "equip" + num);
                            const result = await player
                                .chooseControl(list)
                                .set("prompt", `吭：恢复一个装备栏`)
                                .set("ai", () => {
                                    const player = get.player();
                                    const val = slot => {
                                        if (
                                            player.hasCard(function (card) {
                                                return get.subtype(card) == slot;
                                            }, "hs")
                                        ) {
                                            return 15;
                                        }
                                        return 10;
                                    };
                                    return get.event().list.sort((a, b) => val(b) - val(a))[0];
                                })
                                .set("list", list)
                                .forResult();
                            if (result?.control) {
                                await player.enableEquip(result.control);
                            }
                        }
                    }
                }
            },
            ai: {
                order: 7,
                result: {
                    player: 1,
                },
            },
            group: 'fyrhkeng_use',
            subSkill: {
                use: {
                    trigger: {
                        player: "phaseEnd",
                    },
                    filter(event, player) {
                        return player.countCards("e") > 0 && game.hasPlayer(target => player.canCompare(target, true));
                    },
                    async cost(event, trigger, player) {
                        let list = [];
                        for (let i = 1; i <= 5; i++) {
                            if (player.getEquips(i).length > 0) {
                                list.push("equip" + i);
                            }
                        }
                        list.push("cancel2");
                        let bool = "cancel2";
                        const card = new lib.element.VCard({ name: "sha", isCard: true });
                        if (get.effect(trigger.player, card, player, player) > 0) {
                            bool = list.filter(i => i != "cancel2").randomGet();
                        }
                        const result = await player
                            .chooseControl(list)
                            //.set("prompt", get.prompt2('fyrhkeng'))
                            .set("prompt", `是否废除一个有牌的装备区，发动${get.poptip('fyrhkeng')}`)
                            .set("ai", () => get.event().bool)
                            .set("bool", bool)
                            .forResult();
                        event.result = {
                            bool: result.control != "cancel2",
                            targets: [trigger.player],
                            cost_data: result.control,
                        };

                    },
                    async content(event, trigger, player) {
                        const slot = event.cost_data;
                        await player.disableEquip([slot]);
                        const next = game.createEvent("fyrhkeng" + event.name);
                        next.player = player;
                        next.setContent(lib.skill.fyrhkeng.content);
                        await next;
                    },


                },

            }
        },
        fyrhzhansui: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/fyrhzhansui" + index + ".mp3" : 2),
            trigger: {
                global: "useCardAfter",
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                return get.tag(event.card, 'damage');
            },
            async content(event, trigger, player) {
                if (!player.storage.fyrhzhansui) player.storage.fyrhzhansui = [];
                const usedByMe = (trigger.player === player);
                player.storage.fyrhzhansui.push(usedByMe);
                player.markSkill('fyrhzhansui');
                player.syncStorage('fyrhzhansui');
                if (player.storage.fyrhzhansui.length >= 3) {
                    const hasMine = player.storage.fyrhzhansui.includes(true);
                    player.storage.fyrhzhansui = [];
                    player.unmarkSkill('fyrhzhansui');
                    player.syncStorage('fyrhzhansui');
                    if (hasMine) {
                        player.logSkill('fyrhzhansui', null, null, null, [get.rand(1, 2)]);
                        await player.draw(4);
                    } else {
                        await player
                            .chooseToUse(function (card, player, event) {
                                return lib.filter.filterCard.apply(this, arguments);
                            }, "战随：是否使用一张牌？")
                            .set("logSkill", ["fyrhzhansui", null, null, null, [get.rand(3, 4)]])
                            .set("addCount", false)
                            .forResult();
                    }
                }
            },
            mark: true,
            marktext: "随",
            intro: {
                content(storage, player) {
                    let len = storage ? storage.length : 0;
                    return '已累计结算伤害牌：' + len + ' 张';
                }
            },
        },
        fyrhxiaoxian: {
            audio: "ext:永夜之境/audio:2",
            mod: {
                targetInRange(card, player, target, now) {
                    /* if (get.tag(card, 'damage') && !player.hasSkill('fyrhxiaoxian_lock')) {
                        return true;
                    } */
                    if (get.is.damageCard(card)) {
                        let history = player.getHistory('useCard', (evt) => {
                            return get.tag(evt.card, 'damage');
                        });
                        if (history.length === 0) return true;
                    }
                },
            },
            trigger: {
                player: "useCard",
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                return get.is.damageCard(event.card) && !player.hasHistory('useCard', evt => get.is.damageCard(event.card) && evt != event);
            },
            async content(event, trigger, player) {
                player.addTempSkill('fyrhxiaoxian_lock');
                if (trigger.targets.length == 1) {
                    const target = trigger.targets[0];
                    const result = await player.chooseBool(`是否令${get.translation(trigger.card)}不可被响应？`).forResult();
                    if (result?.bool) {
                        player.logSkill('fyrhxiaoxian');
                        trigger.directHit.addArray(game.players);
                        game.log(player, `令${get.translation(trigger.card)}不可被响应`);
                        player
                            .when({ global: "phaseEnd" })
                            .step(async (event, trigger, player) => {
                                if (target.canUse("sha", player, true, false) && target.isIn()) {
                                    await target.useCard({ name: "sha", isCard: true }, player, false, "noai");
                                }
                            })
                    }
                }
            },
            subSkill: {
                lock: {
                    charlotte: true,
                },
            }
        },
        fyrhyouling: {
            enable: "chooseToUse",
            filter(event, player) {
                const isHandUsed = player.hasSkill('fyrhyouling_limit');
                let canUseHand = false;
                if (!isHandUsed) {
                    canUseHand = ["shunshou", "wuzhong"].some(name => {
                        const info = { name: name };
                        return (
                            get.info(info) &&
                            player.hasCard(card => {
                                return (get.name(card) == 'sha' || get.name(card) == 'shan') && event.filterCard({ name: name, cards: [card] }, player, event);
                            }, "hs")
                        );
                    });
                }
                const canAbolish = player.countCards('e') > 0;

                return canUseHand || canAbolish;
            },
            chooseButton: {
                dialog(event, player) {
                    const list = [];
                    const isHandUsed = player.hasSkill('fyrhyouling_limit');
                    if (!isHandUsed) {
                        ["shunshou", "wuzhong"].forEach(name => {
                            const info = { name: name };
                            if (get.info(info) && player.hasCard(card => {
                                return (get.name(card) == 'sha' || get.name(card) == 'shan') && event.filterCard({ name: name, cards: [card] }, player, event);
                            }, "hs")) {
                                list.push(["基本转化", "", name, "hand"]);
                            }
                        });
                    }
                    if (player.countCards('e') > 0) {
                        const checkValid = (name, nature) => {
                            const vcard = { name: name, isCard: true };
                            if (nature) vcard.nature = nature;
                            if (!event.filterCard(vcard, player, event)) return false;
                            if (name == 'shunshou' || name == 'sha') {
                                if (!player.hasValueTarget(vcard, null, true)) return false;
                            }
                            return true;
                        };
                        ["shunshou", "wuzhong", "shan", "sha"].forEach(name => {
                            if (checkValid(name)) {
                                list.push(["废除装备", "", name, "equip"]);
                            }
                        });

                        /* ['', 'fire', 'thunder'].forEach(nature => {
                            if (checkValid('sha', nature)) {
                                const natureCn = nature ? get.translation(nature) : "";
                                list.push(["废除装备 ",natureCn,"sha","", "equip"]);
                            }
                        }); */

                    }

                    return ui.create.dialog("幽灵", [list, "vcard"]);
                },
                filter(button, player) {
                    return true;
                },
                check(button) {
                    if (_status.event.getParent().type != "phase") return 1;
                    const player = get.event().player;
                    const name = button.link[2];
                    if (button.link[3] == "equip") return 10;
                    let value = player.getUseValue({ name: name });
                    if (value > 0) {
                        if (name == "wuzhong") {
                            value += 50;
                        }
                        else if (name == "sha") {
                            value += 30;
                        }
                    }
                    return value;
                },
                backup(links, player) {
                    const cardName = links[0][2];
                    const cardNature = links[0][1];
                    const mode = links[0][3];
                    if (mode === "equip") {
                        return {
                            filterCard: () => false,
                            selectCard: -1,
                            viewAs: {
                                name: cardName,
                                nature: cardNature,
                            },
                            log: false,
                            async precontent(event, trigger, player) {
                                let list = [];
                                for (let i = 1; i <= 5; i++) {
                                    if (player.getEquips(i).length > 0) {
                                        list.push("equip" + i);
                                    }
                                }
                                const result = await player.chooseControl(list)
                                    .set("prompt", "选择废除一个有牌的装备栏以发动【幽灵】")
                                    .set("ai", () => {
                                        return list.sort((a, b) => {
                                            return get.value(player.getEquip(a)) - get.value(player.getEquip(b));
                                        })[0];
                                    })
                                    .forResult();
                                if (result.control) {
                                    player.storage.fyrhyouling_hand = true;
                                    await player.disableEquip(result.control);
                                    game.log(player, "#g【幽灵】", "废除了", get.translation(result.control));
                                    player.logSkill('fyrhyouling');
                                }
                            }
                        };
                    }
                    // === 手牌转化 (限一次) ===
                    return {
                        filterCard(card, player) {
                            return get.name(card) == 'sha' || get.name(card) == 'shan';
                        },
                        selectCard: 1,
                        popname: true,
                        check(card) {
                            return 5 - get.value(card);
                        },
                        position: "hs",
                        viewAs: {
                            name: cardName,
                            storage: { fyrhyoulingx: true },
                        },
                        log: false,
                        async precontent(event, trigger, player) {
                            const cardName = event.result.cards[0].name;
                            player.storage.fyrhyouling_hand = false;
                            player.storage.fyrhyouling_used = cardName;
                            player.addTempSkill('fyrhyouling_limit');
                            game.log(player, "#g【幽灵】的底牌为", cardName);
                            player.logSkill('fyrhyouling');
                        }
                    };
                },
                prompt(links, player) {
                    const nameStr = get.translation(links[0][2]);
                    const natureStr = links[0][1] ? get.translation(links[0][1]) : "";
                    if (links[0][3] == "equip") {
                        return "废除一个有牌装备栏，视为使用【" + natureStr + nameStr + "】";
                    }
                    return "将一张【杀】或【闪】当作【" + nameStr + "】使用";
                },
            },
            hiddenCard(player, name) {
                if (["sha", "shan"].includes(name) && !player.countCards("e")) {
                    return false
                }
                return ["shunshou", "wuzhong"].includes(name) && player.countCards("hes");
            },
            locked: false,
            ai: {
                expose: 0.4,
                skillTagFilter(player) {
                    if (!player.countCards("hes") && !player.countCards('e')) return false;
                },
                order(item, player) {
                    if (!player || _status.event.type != "phase") {
                        return 0.001;
                    }
                    return 6;
                },
                result: {
                    player: 1,
                },
                tag: {
                    respondSha: true,
                    respondShan: true,
                },
            },
            group: ["fyrhyouling_gain"],
            subSkill: {
                limit: {
                    mark: true,
                    marktext: "幽",
                    charlotte: true,
                    intro: { content: "本回合已发动过【幽灵】的手牌转化效果" }
                },
                backup: { sub: true },
                gain: {
                    silent: true,
                    trigger: {
                        player: ["gainAfter", "drawAfter"]
                    },
                    filter(event, player) {
                        const usedName = player.storage.fyrhyouling_used;
                        if (!usedName || player.storage.fyrhyouling_hand) return false;
                        const need = (usedName == 'sha') ? 'shan' : 'sha';
                        var evt = event.getParent("useCard");
                        if (event.name == 'gain') {
                            return event.cards.some(card => get.name(card) == need) && evt.skill == "fyrhyouling_backup";
                        } else {
                            return event.cards?.some(card => get.name(card) == need) && evt.skill == "fyrhyouling_backup";
                        }
                    },
                    async content(event, trigger, player) {
                        const usedName = player.storage.fyrhyouling_used;
                        const need = (usedName == 'sha') ? 'shan' : 'sha';
                        const cardsToShow = trigger.cards.filter(card => get.name(card) == need);
                        if (cardsToShow.length > 0) {
                            player.showCards(cardsToShow);
                            player.removeSkill('fyrhyouling_limit');
                            game.log(player, "重置了", "#g【幽灵】");
                        }
                        delete player.storage.fyrhyouling_used;
                    },
                }
            },
        },
        fyrhxianji: {
            trigger: {
                player: "phaseAfter",
            },
            filter(event, player) {
                return player.maxHp > 0;
            },
            popup: false,
            forced: true,
            async content(event, trigger, player) {
                if (!player.storage?.fyrhxianji_used) {
                    const result = await player.chooseBool()
                        .set("choice", true)
                        /* .set("ai", () => {
                            const hp = player.maxHp;
                            return hp > 1;
                        }) */
                        .set("prompt", get.prompt2('fyrhxianji'))
                        .forResult();
                    if (result?.bool) {
                        let list = [];
                        for (let i = 1; i < 6; i++) {
                            for (let j = 0; j < player.countDisabledSlot(i); j++) {
                                list.push(i);
                            }
                        }
                        if (list.length) { await player.enableEquip(list); }
                        player.logSkill('fyrhxianji');
                        player.storage.fyrhxianji_used = true;
                        player.loseMaxHp();
                        player.insertPhase();
                    }
                } else {
                    let list = [];
                    for (let i = 1; i < 6; i++) {
                        for (let j = 0; j < player.countDisabledSlot(i); j++) {
                            list.push(i);
                        }
                    }
                    if (list.length) { await player.enableEquip(list); }
                    player.logSkill('fyrhxianji');
                    player.loseMaxHp();
                    player.insertPhase();
                }
            },
        },
        fyrhzhenzhan: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/fyrhzhenzhan" + index + ".mp3" : 2),
            enable: "chooseToUse",
            popup: false,
            filter(event, player) {
                if (event.type === "wuxie") {
                    return false;
                }
                const hiddenCards = player.getCards("h", card => !get.is.shownCard(card));
                if (!hiddenCards.length) return false;
                return hiddenCards.some(card => {
                    return get.type(card) == "basic" && event.filterCard(card, player, event);
                });
                /* return get
                    .inpileVCardList(info => get.type(info[2]) == "basic")
                    .some(card => {
                        return event.filterCard({ name: card[2], nature: card[3] }, player, event);
                    }); */
            },
            chooseButton: {
                dialog(event, player) {
                    /* const list = get
                        .inpileVCardList(info => get.type(info[2]) == "basic")
                        .filter(card => {
                            return event.filterCard({ name: card[2], nature: card[3] }, player, event);
                        }); */
                    const hiddenCards = player.getCards("h", card => !get.is.shownCard(card));
                    const list = hiddenCards.filter(card => {
                        return get.type(card) == "basic" && event.filterCard(card, player, event);
                    });

                    return ui.create.dialog("枕战", [list, "vcard"], "hidden");
                },
                check(button) {
                    const event = get.event().getParent();
                    if (event.type !== "phase") {
                        return 1;
                    }
                    return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
                },
                prompt(links) {
                    return "重铸所有暗置牌，视为使用【" + get.translation(links[0]) + "】";
                },
                backup(links, player) {
                    return {
                        selectCard: -1,
                        filterCard: () => false,
                        viewAs: {
                            name: links[0].name,
                            nature: links[0].nature,
                            isCard: true,
                        },
                        log: false,
                        async precontent(event, trigger, player) {
                            player.logSkill("fyrhzhenzhan", null, null, null, [get.rand(1, 2)]);
                            const hiddenCards = player.getCards("h", card => !get.is.shownCard(card));
                            if (hiddenCards.length > 0) {
                                await player.recast(hiddenCards);
                            }

                        },
                    };
                },
            },
            hiddenCard(player, name) {
                if (player.getStat("skill").fyrhzhenzhan) {
                    return false;
                }
                if (get.type(name) !== "basic") return false;
                return player.hasCard(card => {
                    return !get.is.shownCard(card) && get.name(card) == name;
                }, "h");
            },
            ai: {
                order: 10,
                respondShan: true,
                respondSha: true,
                skillTagFilter(player, tag, arg) {
                    if (arg == 'respond') return false;
                    return true;
                },
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 1;
                    },
                },
            },
            group: ["fyrhzhenzhan_cancel"],
            subSkill: {
                cancel: {
                    trigger: {
                        player: ["phaseJudgeBegin", "phaseDiscardBegin"]
                    },
                    filter(event, player) {
                        const hiddenCards = player.getCards("h", card => !get.is.shownCard(card));
                        if (!hiddenCards.length) return false;
                        return hiddenCards.some(card => {
                            return get.name(card) == "sha";
                        });
                    },
                    check(event, player) {
                        if (event.triggername === "phaseJudge" && player.countCards("j") > 0) {
                            return true;
                        } else if (event.triggername === "phaseDiscard" && player.countCards("h") - player.hp > 2) {
                            return true;
                        }
                        return false;
                    },
                    async cost(event, trigger, player) {
                        event.result = await player.chooseCard(get.prompt('fyrhzhenzhan'),
                            `明置一张【杀】以跳过${get.translation(trigger.name)}`, card => {
                                return !get.is.shownCard(card) && get.name(card) == 'sha'
                            })
                            .forResult();
                    },
                    async content(event, trigger, player) {
                        player.logSkill("fyrhzhenzhan", null, null, null, [get.rand(3, 4)]);
                        await player.addShownCards(event.cards, "visible_fyrhzhenzhan");
                        trigger.cancel();
                        game.log(player, "跳过了", trigger.name);
                    },
                }
            }
        },
        fyrhpozhu: {
            audio: "ext:永夜之境/audio:7",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/fyrhpozhu" + index + ".mp3" : 2),
            trigger: {
                source: "damageSource",
                player: "damageEnd",
            },
            filter(event, player) {
                //if (event.player === player) return false;
                return event.player.isIn() && player.countCards("h");
            },
            // check(event, player) {
            //     const cards = player.hasCard(card => {
            //         return player.hasUseTarget(card);
            //     }, "h");
            //     return cards.length > 0;
            // },
            prompt2(event, player) {
                return `令${get.translation(event.player)}翻面你三张牌，然后你依次使用明置牌（无距离限制、不可响应且于使用后摸一张牌）`;
            },
            usable: 1,
            popup: false,
            async content(event, trigger, player) {
                const target = trigger.player;
                const num = Math.min(3, player.countCards("h"));
                player.logSkill("fyrhpozhu", [target], null, null, [get.rand(1, 7)]);
                const result = await target
                    .choosePlayerCard(player, true, "h", num)
                    .set("prompt", (() => {
                        return (`###破竹###<div class="text center">翻面${get.translation(player)}三张手牌，然后其依次使用明置牌</div>`);
                    })()
                    )
                    .set("ai", card => {
                        const chooser = _status.event.player;
                        const owner = card.owner;
                        if (get.attitude(chooser, owner) <= 0) {
                            if (get.is.shownCard(card)) {
                                return 20 + get.value(card);
                            }
                            return 1;
                        }
                        else {
                            if (!get.is.shownCard(card)) {
                                return 1;
                            }
                            return get.useful(card);
                        }
                    })
                    .forResult();
                if (result?.bool && result.cards?.length) {
                    const selectedCards = result.cards;
                    const toShow = [];
                    const toHide = [];
                    selectedCards.forEach(card => {
                        if (get.is.shownCard(card)) {
                            toHide.push(card);
                        } else {
                            // 如果本来是暗置的，加入变明列表
                            toShow.push(card);
                        }
                    });

                    if (toShow.length) { await player.addShownCards(toShow, "visible_fyrhzhenzhan"); }
                    if (toHide.length) {
                        /* const tagsToRemove = new Set();
                        toHide.forEach(card => {
                            if (card.gaintag) {
                                card.gaintag.forEach(tag => {
                                    if (typeof tag === 'string' && tag.startsWith("visible_")) {
                                        tagsToRemove.add(tag);
                                    }
                                });
                            }
                        });
                        await player.hideShownCards(toHide, ...tagsToRemove); */
                        await player.hideShownCards(toHide);
                    }
                    const usecards = player.getCards("h", card => get.is.shownCard(card));
                    if (usecards.length > 0) {
                        for (const card of usecards) {
                            if (player.hasUseTarget(card, false)) {
                                let result1 = await player.chooseUseTarget(card, false, 'nodistance')
                                    .set("oncard", card => {
                                        game.log(_status.event.card, "不可被响应");
                                        _status.event.directHit.addArray(game.players);
                                    }).forResult();
                                if (result1?.bool) {
                                    await player.draw();
                                }
                            }
                        }
                    }
                }
            },
        },
        fyrhyulie: {
            mark: true,
            marktext: "烈",
            init(player) {
                if (!player.storage.fyrhyulie) {
                    player.storage.fyrhyulie = [1, 2, 3];
                }
            },
            intro: {
                markcount(storage, player) {
                    if (!storage || !storage.length) return "";
                    const map = { 1: "①", 2: "②", 3: "③" };
                    return map[storage[0]];
                },
                content(storage, player) {
                    if (!storage || !storage.length) return "技能失效";
                    const s = player.storage.fyrhyulie;
                    const isWenjue = player.storage.fyrhwenjue;
                    let map;
                    if (!isWenjue) {
                        map = {
                            1: "① 使用【杀】后，视为使用【火攻】",
                            2: "② 弃牌后，视为使用明牌【洞烛先机】",
                            3: `③ 出牌阶段，获得${get.poptip("xinx_central")}任意张【杀】并摸等量张牌`
                        };
                    } else {
                        map = {
                            1: `① 使用【杀】后，${get.poptip("yulieqice")}`,
                            2: `② 弃牌后，${get.poptip("yuliezaiqi")}`,
                            3: `③ 出牌阶段，你可以${get.poptip("yuliezhiheng")}`
                        };
                    }
                    let str = " 当前生效：<br>" + map[s[0]];
                    if (!isWenjue) {
                        str += "<br><br><span class='text distinct'>流程出现【闪】后移除当前项</span>";
                    }
                    return str;
                    /* const map = {
                        1: "① 使用【杀】后，视为使用【火攻】",
                        2: "② 弃牌后，视为使用【洞烛先机】",
                        3: "③ 出牌阶段，将中央区的任意张【杀】洗入牌堆并摸等量张牌"
                    };
                    let str = "当前生效：<br>" + map[storage[0]];
                    str += "<br><br><span class='text distinct'>流程出现【闪】后移除当前项</span>";
                    return str; */
                }
            },
            audio: "ext:永夜之境/audio:7",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/fyrhyulie" + index + ".mp3" : 2),
            enable: "phaseUse",
            filter(event, player) {
                const s = player.storage.fyrhyulie;
                const cards = get.discarded().filterInD("d").filter(card => get.name(card, false) == "sha")
                if (!Array.isArray(s) || !s.length || s[0] !== 3) return false;
                if (!player.storage.fyrhwenjue) {
                    return cards.length > 0;
                } else {
                    return true;
                }
            },
            popup: false,
            async content(event, trigger, player) {
                const s = player.storage.fyrhyulie;
                if (!player.storage.fyrhwenjue) {
                    const discards = get.discarded().filterInD("d").filter(card => get.name(card, false) == "sha");
                    const result = await player.chooseButton(
                        ["是否获得中央区任意张【杀】，并摸等量张牌", discards], [1, Infinity]
                    ).set("ai", button => {
                        return get.value(button.link);
                    }).forResult();
                    if (result?.bool && result?.links) {
                        player.logSkill("fyrhyulie", null, null, null, [get.rand(6, 7)]);
                        let cards = result.links;
                        await player.gain(cards, 'gain2');
                        const draw = await player.draw(cards.length).forResult();
                        if (draw?.bool && draw.cards.some(c => get.name(c) == 'shan')) {
                            const removed = await s.shift();
                            game.log(player, "获得了【闪】，", "#g【欲烈】", "的选项", removed, "被移除");
                        }
                        else {
                            s.push(s.shift());
                        }
                    }
                } else {
                    let hs = player.countCards("he");
                    const result = await player
                        .chooseCard("he")
                        .set("prompt", get.prompt("fyrhyulie"))
                        .set("prompt2", `你可以弃置任意张牌，并摸弃置牌数+1张牌`)
                        .set("selectCard", () => {
                            return [1, hs];
                        })
                        .set("ai", card => {
                            return 8 - get.value(card);
                        })
                        .forResult();
                    if (result?.bool && result.cards?.length) {
                        game.playAudio("../extension/永夜之境/audio/", 'fyrhwenjue' + [get.rand(7, 8)] + '.mp3');
                        const currentItem = s.shift();
                        let hasShan = false;
                        if (result.cards.some(c => get.name(c) == 'shan')) {
                            hasShan = true;
                        }
                        await player.discard(result.cards);
                        const draw = await player.draw(result.cards.length + 1).forResult();
                        if (draw?.bool && draw.cards.some(c => get.name(c) == 'shan')) {
                            hasShan = true;
                        }

                        //if (hasShan) {
                        //     game.log(player, "制衡过程中涉及了【闪】，", "#g【欲烈】", "的选项", currentItem, "被移除");
                        // } else {
                        s.push(currentItem);
                        // }
                        player.markSkill('fyrhyulie');
                        player.syncStorage("fyrhyulie");
                    }
                }
                if (!player.storage.fyrhwenjue && s.length === 0) {
                    player.storage.fyrhwenjue = true;
                    player.storage.fyrhyulie = [1, 2, 3];
                    await game.delayx();
                    player.$fullscreenpop("魏武君临", "thunder");
                    game.playAudio("../extension/永夜之境/audio/", 'fyrhwenjue' + [1] + '.mp3');
                    player.awakenSkill("fyrhwenjue");
                    player.changeSkin({ characterName: "fyrh_caocao" }, "fyrh_caocao_shadow");
                    game.log(player, "已扫六合，魏武君临");
                }
                player.markSkill('fyrhyulie');
                player.syncStorage("fyrhyulie");
            },
            ai: {
                order(item, player) {
                    return 5;
                },
                result: {
                    player: 1,
                }
            },
            group: ["fyrhyulie_trigger", 'fyrhyulie_dongzhu', "fyrhyulie_shan"],//
            subSkill: {
                trigger: {
                    trigger: {
                        player: ['useCard', 'discardAfter'],
                    },
                    filter(event, player) {
                        const s = player.storage.fyrhyulie;
                        if (!s || !s.length) return false;
                        if (event.name === "useCard" && event.card.name === "sha") {
                            return s[0] === 1;
                        }
                        if (event.name === "discard") {
                            return s[0] === 2;
                        }
                        return false;
                    },
                    prompt2(event, player) {
                        const s = player.storage.fyrhyulie;
                        if (!player.storage.fyrhwenjue) {
                            return s[0] === 1 ? `是否使用一张【火攻】` : `是否使用一张【洞烛先机】`;
                        } else {
                            return s[0] === 1 ? `<div class="text center">是否${get.poptip("yulieqice")}</div>` : `<div class="text center">是否${get.poptip("yuliezaiqi")}</div>`;
                        }
                    },
                    async content(event, trigger, player) {
                        const s = player.storage.fyrhyulie;
                        if (trigger.name === "useCard") {
                            if (!player.storage.fyrhwenjue) {
                                await s.push(s.shift());
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhyulie' + [get.rand(1, 2)] + '.mp3');
                                await player.chooseUseTarget({ name: 'huogong', storage: { fyrhyulieuse: true, fyrhyulie_mode: 1 } }, true);
                                player.markSkill("fyrhyulie");
                                player.syncStorage("fyrhyulie");
                            }
                            else {
                                const cards = get.inpileVCardList(info => {
                                    return info[0] == "trick" && player.hasUseTarget(info[2]);
                                });
                                if (!cards?.length) {
                                    return;
                                }
                                await s.push(s.shift());
                                const result = await player
                                    .chooseButton(["欲烈：选择要视为使用的牌", [cards, "vcard"]], true)
                                    .set("ai", button => {
                                        return get.player().getUseValue(button.link[2]);
                                    })
                                    .forResult();
                                if (result?.bool) {
                                    game.playAudio("../extension/永夜之境/audio/", 'fyrhwenjue' + [get.rand(1, 4)] + '.mp3');
                                    const card = new lib.element.VCard({
                                        name: result.links[0][2], isCard: true,
                                        // storage: { fyrhyulieuse: true, fyrhyulie_mode: 1 } 
                                    });
                                    if (player.hasUseTarget(card)) {
                                        await player.chooseUseTarget(card, true);
                                    }
                                }
                            }
                        }
                        else {
                            if (!player.storage.fyrhwenjue) {
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhyulie' + [get.rand(3, 5)] + '.mp3');
                                await player.useCard({ name: 'dongzhuxianji', storage: { fyrhyulieuse: true, fyrhyulie_mode: 2 } }, player, false);
                                if (player.hasSkill('fyrhyulie_remove')) {
                                    player.removeSkill('fyrhyulie_remove');
                                } else {
                                    await s.push(s.shift());
                                }
                            } else {
                                const num = player.getHistory("lose", evt => evt.type == "discard").reduce((num, evt) => num + evt.cards2.length, 0);
                                const result = await player
                                    .chooseTarget(get.prompt2("yuliezaiqi"), [1, num])
                                    .set("ai", target => {
                                        const player = get.player();
                                        const att = get.attitude(player, target);
                                        return 3 - get.sgn(att) + Math.abs(att / 1000);
                                    })
                                    .forResult();

                                if (result?.bool && result.targets?.length) {
                                    //s.push(s.shift());
                                    game.playAudio("../extension/永夜之境/audio/", 'fyrhwenjue' + [get.rand(5, 6)] + '.mp3');
                                    const currentItem = s.shift();
                                    let hasShan = false;
                                    const targets = result.targets.sortBySeat();
                                    while (targets.length) {
                                        const target = targets.shift();
                                        const discardResult = await target
                                            .chooseToDiscard(get.translation(player) + "对你发动了【再起】", "是否弃置一张牌令其回复1点体力？或者点击“取消”，令该角色摸一张牌。", "he")
                                            .set("ai", card => {
                                                const eff = _status.event.eff;
                                                const att = _status.event.att;
                                                if ((eff > 0 && att > 0) || (eff <= 0 && att < 0)) {
                                                    return 5.5 - get.value(card);
                                                }
                                                return 0;
                                            })
                                            .set("eff", get.recoverEffect(player, player, target))
                                            .set("att", get.attitude(target, player))
                                            .forResult();
                                        target.line(player);
                                        if (discardResult.bool && discardResult.cards && discardResult.cards.length) {
                                            if (discardResult.cards.some(c => get.name(c) == 'shan')) {
                                                hasShan = true;
                                            }
                                            await player.recover(target);
                                        } else {
                                            const gained = await player.draw().forResult();
                                            if (gained?.bool && gained.cards.some(c => get.name(c) == 'shan')) {
                                                hasShan = true;
                                            }
                                        }
                                    }
                                    // if (hasShan) {
                                    //    game.log(player, "结算期间出现了【闪】，", "#g【欲烈】", "的选项", currentItem, "被移除");
                                    // } else {
                                    s.push(currentItem);
                                    //  }
                                }
                            }
                        }
                        player.markSkill('fyrhyulie');
                        player.syncStorage("fyrhyulie");
                    }

                },
                dongzhu: {
                    trigger: { player: "dongzhuxianjiBegin" },
                    silent: true,
                    charlotte: true,
                    filter(event, player) {
                        return event.card.name === 'dongzhuxianji' && event.card.storage.fyrhyulieuse;
                    },
                    async content(event, trigger, player) {
                        trigger.setContent(async function (event) {
                            const player = event.player;
                            const cards = get.cards(2);
                            game.cardsGotoOrdering(cards);
                            const next = player.chooseToMove("allowChooseAll");
                            next.set("list", [["牌堆顶", cards.reverse()], ["牌堆底"]]);
                            next.set("prompt", "欲烈：点击或拖动将牌移动到牌堆顶或牌堆底");
                            next.processAI = list => {
                                const cards = list[0][1],
                                    player = _status.event.player;
                                const top = [];
                                const judges = player.getCards("j");
                                let stopped = false;
                                if (!player.hasWuxie()) {
                                    for (let i = 0; i < judges.length; i++) {
                                        const judge = get.judge(judges[i]);
                                        cards.sort((a, b) => judge(b) - judge(a));
                                        if (judge(cards[0]) < 0) {
                                            stopped = true;
                                            break;
                                        } else {
                                            top.unshift(cards.shift());
                                        }
                                    }
                                }
                                let bottom;
                                if (!stopped) {
                                    cards.sort((a, b) => get.value(b, player) - get.value(a, player));
                                    while (cards.length) {
                                        if (get.value(cards[0], player) <= 5) {
                                            break;
                                        }
                                        top.unshift(cards.shift());
                                    }
                                }
                                bottom = cards;
                                return [top, bottom];
                            };
                            const { moved } = await next.forResult();
                            const top = moved[0];
                            const bottom = moved[1];
                            top.reverse();
                            game.cardsGotoPile(top.concat(bottom), ["top_cards", top], (event, card) => {
                                if (event.top_cards.includes(card)) {
                                    return ui.cardPile.firstChild;
                                }
                                return null;
                            });
                            player.popup(get.cnNumber(top.length) + "上" + get.cnNumber(bottom.length) + "下");
                            top.length ? game.log(player, "将" + get.translation(top) + "置于牌堆顶") : null;
                            bottom.length ? game.log(player, "将" + get.translation(bottom) + "置于牌堆底") : null;
                            await game.delayx();
                            const gained = await player.draw(2);
                        });
                    }

                },
                remove: {
                    charlotte: true,
                },
                shan: {
                    trigger: { player: "useCardAfter" },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return event.card.storage.fyrhyulieuse;
                    },
                    async content(event, trigger, player) {
                        const mode = trigger.card.storage.fyrhyulie_mode;
                        const history = game.getGlobalHistory('everything');
                        let hasShan = false;
                        for (let evt of history) {
                            if (!['lose', 'loseAsync', 'cardsDiscard', 'gain', 'draw', 'cardsGotoOrdering', 'move', 'respond', 'showCards'].includes(evt.name)) continue;
                            //检查这个事件是不是本次 (trigger) 的子事件
                            let isChild = false;
                            let parent = evt.getParent();
                            while (parent && typeof parent.getParent === 'function') {
                                if (parent == trigger) {
                                    isChild = true;
                                    break;
                                }
                                parent = parent.getParent();
                            }
                            if (!isChild) continue;
                            if (evt.cards && evt.cards.length) {
                                if (evt.cards.some(c => get.name(c) == 'shan')) {
                                    hasShan = true;
                                    break;
                                }
                            }
                        }
                        // 如果发现了闪，执行移除逻辑
                        if (hasShan) {
                            const s = player.storage.fyrhyulie;
                            if (s && s.length) {
                                const index = s.indexOf(mode);
                                if (index !== -1) {
                                    const removed = await s.splice(index, 1)[0];
                                    game.log("结算期间出现了【闪】，", "#g【欲烈】", "的选项", removed, "被移除");
                                    player.addTempSkill('fyrhyulie_remove');
                                    if (!player.storage.fyrhwenjue && s.length === 0) {
                                        player.storage.fyrhwenjue = true;
                                        player.storage.fyrhyulie = [1, 2, 3];
                                        await game.delayx();
                                        player.$fullscreenpop("魏武君临", "thunder");
                                        game.playAudio("../extension/永夜之境/audio/", 'fyrhwenjue' + [1] + '.mp3');
                                        player.awakenSkill("fyrhwenjue");
                                        player.changeSkin({ characterName: "fyrh_caocao" }, "fyrh_caocao_shadow");
                                        game.log(player, "已扫六合，魏武君临");
                                    }
                                    player.markSkill("fyrhyulie");
                                    player.syncStorage("fyrhyulie");
                                }
                            }
                        }
                    }
                }


            }
        },
        fyrhwenjue: {
            audio: "ext:永夜之境/audio:8",
            juexingji: true,
            ai: {
                combo: "fyrhyuelie",
            }
        },
        fyrhyuliex: {

        },
        fyrhjizhi: {
            audio: "ext:永夜之境/audio:3",
            trigger: {
                global: "phaseBegin",
            },
            filter(event, player) {
                if (game.roundNumber <= 1) return false;
                if (event.player === player) return false;
                let history = event.player.getRoundHistory('useCard', (evt) => {
                    return evt.card.name == 'sha' && evt.targets && evt.targets.includes(player);
                }, 1);
                return history.length > 0;
            },
            async cost(event, trigger, player) {
                const target = trigger.player,
                    num = target.countCards("h"),
                    hs = player.countCards("h"),
                    prompt = get.prompt(event.skill, target);
                if (hs > num) {
                    event.result = await player
                        .chooseToDiscard(prompt, player.countCards("h") - num, "allowChooseAll")
                        .set("ai", card => {
                            const { player, selectCard } = get.event();
                            let cards = player.getDiscardableCards(player, "h");
                            const select = selectCard?.[1] ?? 1;
                            if (cards.length < select) {
                                return 0;
                            }
                            cards.sort((a, b) => get.value(a) - get.value(b));
                            return cards.slice(0, select).reduce((s, c) => s + get.value(c), 0) && cards.includes(card) ? 1 : 0;
                        })
                        .set("prompt2", "将手牌数弃至" + get.cnNumber(num) + "张，且本回合" + get.translation(target) + "使用牌后弃置你一张牌")
                        .set("chooseonly", true)
                        .forResult();
                } else {
                    let str = `本回合${get.translation(target)}使用牌后弃置你一张牌`;
                    if (hs < num) {
                        str = `将手牌摸至${get.cnNumber(num)}张，且${str}`;
                    }
                    event.result = await player
                        .chooseBool(prompt, str)
                        .set(
                            "choice",
                            (() => {
                                const count = Math.max(0, num - hs);
                                return count;
                            })()
                        )
                        .forResult();
                }
            },
            async content(event, trigger, player) {
                const target = trigger.player;
                if (event.cards?.length) {
                    await player.discard(event.cards);
                } else {
                    await player.drawTo((target.countCards("h")));
                }
                player.addTempSkill("fyrhjizhi_dis");
            },
            subSkill: {
                dis: {
                    trigger: {
                        global: "useCardAfter",
                    },
                    silent: true,
                    charlotte: true,
                    filter(event, player) {
                        return event.player === _status.currentPhase && player.countCards("he") > 0;
                    },
                    async content(event, trigger, player) {
                        await trigger.player.discardPlayerCard(player, "he", true);
                    }
                }
            }
        },
        fyrhzhiji: {
            audio: "ext:永夜之境/audio:2",
            derivation: ["fyrhzhiji_guanxing", "fyrhzhiji_aocai"],
            skillAnimation: true,
            animationColor: "fire",
            //juexingji: true,
            xiandingji: true,
            trigger: {
                global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
            },
            filter(event, player) {
                const target = event.player;
                if (!target || !target.isIn()) {
                    return false;
                }
                const evt = event.getl(target);
                return evt && evt.hs && evt.hs.length > 0 && !target.countCards('h');
            },
            check(event, player) {
                const target = _status.currentPhase;
                return player == target && !player.countCards('h') && player == event.player;
            },
            async content(event, trigger, player) {
                const target = _status.currentPhase;
                player.awakenSkill('fyrhzhiji');
                await player.recover();
                player.addSkills('fyrhzhiji_guanxing');
                if (player == trigger.player) {
                    player.addSkills('fyrhzhiji_aocai')
                    if (player === target && !player.storage.fyrhzhiji_re) {
                        player.storage.fyrhzhiji_re = true;
                    }
                }
            },
            ai: {
                order: 10,
                threaten: 1.5,
                result: {
                    player(player) {
                        return 1;
                    },
                },
            },
            subSkill: {
                guanxing: {
                    audio: "ext:永夜之境/audio:6",
                    logAudio: index => "ext:永夜之境/audio/fyrhzhiji_guanxing" + [1, 3].randomGet() + ".mp3",
                    trigger: {
                        player: ["phaseZhunbeiBegin", "phaseJieshuBegin"],
                    },
                    frequent: true,
                    preHidden: true,
                    async content(event, trigger, player) {
                        const result = await player.chooseToGuanxing(5)
                            .set("prompt", "观星：点击或拖动将牌移动到牌堆顶或牌堆底")
                            .set("processAI", list => {
                                let cards = list[0][1],
                                    player = _status.event.player,
                                    target = _status.currentPhase || player,
                                    name = _status.event.getTrigger().name;
                                let top = [],
                                    bottom = [];
                                if (player.storage?.fyrhzhiji_re) {
                                    const getScore = (card) => {
                                        let score = 0;
                                        const type = get.type(card);
                                        score += get.value(card, player);
                                        if (type === 'basic') {
                                            score += 10;
                                            if (player.hasUseTarget(card)) {
                                                score += 20;
                                                if (card.name === 'tao' && player.hp < player.maxHp) {
                                                    score += 50;
                                                }
                                                if (card.name === 'sha') {
                                                    score += 15;
                                                }
                                            }
                                        }
                                        return score;
                                    };
                                    cards.sort((a, b) => getScore(b) - getScore(a));
                                    while (cards.length) {
                                        const card = cards.shift();
                                        const score = getScore(card);
                                        if (score > 10) {
                                            top.push(card);
                                        } else {
                                            bottom.push(card);
                                        }
                                    }
                                    return [top, bottom];
                                }
                                cards.sort((a, b) => get.value(b, player) - get.value(a, player));
                                while (cards.length) {
                                    if (get.value(cards[0], player) > 5) {
                                        top.push(cards.shift());
                                    } else {
                                        bottom.push(cards.shift());
                                    }
                                }
                                return [top, bottom];
                            })
                            .forResult();
                        if (result?.bool && player.storage?.fyrhzhiji_re) {
                            const cards = get.cards(4);
                            if (cards.length > 0) {
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhzhiji_guanxing' + [get.rand(4, 6)] + '.mp3');
                                while (cards.some(card => get.type(card) === 'basic' && player.hasUseTarget(card))) {
                                    const result1 = await player.chooseCardButton(`傲才：是否使用其中任意张基本牌`, cards)
                                        .set('filterButton', button => {
                                            if (get.type(button.link) !== 'basic') return false;
                                            return get.player().hasUseTarget(button.link);
                                        })
                                        .set("ai", button => {
                                            return get.player().getUseValue(button.link);
                                        }).forResult();
                                    if (result1?.bool && result1.links?.length > 0) {
                                        const card = result1.links[0];
                                        cards.remove(card);
                                        player.$gain2(card, false);
                                        await game.delayx();
                                        await player.chooseUseTarget(card, true, false);
                                    }
                                    else {
                                        break;
                                    }
                                }
                                if (cards.length) {
                                    await game.cardsGotoPile(cards.reverse(), "insert");
                                    game.log(player, "将", get.cnNumber(cards.length), "张牌置于了牌堆顶");
                                }
                            }
                        }
                    },
                },
            },
        },
        fyrhzhiji_aocai: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhzhiji_aocai${index}.mp3` : 2),
            enable: ["chooseToUse", "chooseToRespond"],
            hiddenCard(player, name) {
                if (player != _status.currentPhase && get.type(name) == "basic" && lib.inpile.includes(name)) {
                    return true;
                }
                return false;
            },
            filter(event, player) {
                if (event.responded || player == _status.currentPhase || event.fyrhzhiji_aocai) {
                    return false;
                }
                return lib.inpile.some(i => get.type(i) == "basic" && event.filterCard(get.autoViewAs({ name: i }, "unsure"), player, event));
            },
            delay: false,
            popup: false,
            async content(event, trigger, player) {
                if (player.storage?.fyrhzhiji_re) {
                    game.playAudio("../extension/永夜之境/audio/", 'fyrhzhiji_aocai' + [get.rand(1, 2)] + '.mp3');
                    await player.chooseToGuanxing(5)
                        .set("prompt", "观星：点击或拖动将牌移动到牌堆顶或牌堆底");
                }

                const evt = event.getParent(2);
                const cards = get.cards(get.mode() != "guozhan" && player.countCards("h") == 0 ? 4 : 2, true);
                const cardsx = cards.slice().map(card => {
                    const cardx = ui.create.card();
                    cardx.init(get.cardInfo(card));
                    cardx._cardid = card.cardid;
                    return cardx;
                });
                evt.set("fyrhzhiji_aocai", true);
                player.directgains(cardsx, null, "fyrhzhiji_aocai_hs");
                const result = await player
                    .chooseCard(
                        "傲才：选择要" + (evt.name == "chooseToUse" ? "使用" : "打出") + "的牌",
                        (card, player) => {
                            return get.event().cards.includes(card);
                        },
                        "s"
                    )
                    .set(
                        "cards",
                        cardsx.filter(card => {
                            if (player.hasSkill("aozhan") && card.name == "tao") {
                                return (
                                    evt.filterCard(
                                        {
                                            name: "sha",
                                            isCard: true,
                                            cards: [card],
                                        },
                                        evt.player,
                                        evt
                                    ) ||
                                    evt.filterCard(
                                        {
                                            name: "shan",
                                            isCard: true,
                                            cards: [card],
                                        },
                                        evt.player,
                                        evt
                                    )
                                );
                            }
                            return evt.filterCard(card, evt.player, evt);
                        })
                    )
                    .set("ai", card => {
                        if (get.type(card) == "equip") {
                            return 0;
                        }
                        const evt = get.event().getParent(3),
                            player = get.event().player;
                        if (evt.type == "phase" && !player.hasValueTarget(card, null, true)) {
                            return 0;
                        }
                        if (evt && evt.ai) {
                            const tmp = _status.event;
                            _status.event = evt;
                            const result = (evt.ai || event.ai1)(card, player, evt);
                            _status.event = tmp;
                            return result;
                        }
                        return 1;
                    })
                    .forResult();
                let card;
                if (result.bool) {
                    card = cards.find(card => card.cardid === result.cards[0]._cardid);
                }
                const cards2 = player.getCards("s", card => card.hasGaintag("fyrhzhiji_aocai_hs"));
                if (player.isOnline2()) {
                    player.send(
                        (cards, player) => {
                            cards.forEach(i => i.delete());
                            if (player == game.me) {
                                ui.updatehl();
                            }
                        },
                        cards2,
                        player
                    );
                }
                cards2.forEach(i => i.delete());
                if (player == game.me) {
                    ui.updatehl();
                }
                if (card) {
                    let name = card.name,
                        aozhan = player.hasSkill("aozhan") && name == "tao";
                    if (aozhan) {
                        name = evt.filterCard(
                            {
                                name: "sha",
                                isCard: true,
                                cards: [card],
                            },
                            evt.player,
                            evt
                        )
                            ? "sha"
                            : "shan";
                    }
                    if (evt.name == "chooseToUse") {
                        game.broadcastAll(
                            (result, name) => {
                                lib.skill.fyrhzhiji_aocai_backup.viewAs = { name: name, cards: [result], isCard: true };
                            },
                            card,
                            name
                        );
                        evt.set("_backupevent", "fyrhzhiji_aocai_backup");
                        evt.set("openskilldialog", "请选择" + get.translation(card) + "的目标");
                        evt.backup("fyrhzhiji_aocai_backup");
                    } else {
                        delete evt.result.used;
                        delete evt.result.skill;
                        evt.result.card = get.autoViewAs(card);
                        if (aozhan) {
                            evt.result.card.name = name;
                        }
                        evt.result.cards = [card];
                        evt.redo();
                        return;
                    }
                }
                evt.goto(0);
            },
            ai: {
                effect: {
                    target(card, player, target, effect) {
                        if (get.tag(card, "respondShan")) {
                            return 0.7;
                        }
                        if (get.tag(card, "respondSha")) {
                            return 0.7;
                        }
                    },
                },
                order: 11,
                respondShan: true,
                respondSha: true,
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 1;
                    },
                },
            },
            subSkill: {
                backup: {
                    precontent() {
                        player.logSkill("fyrhzhiji_aocai", null, null, null, [get.rand(3, 5)]);
                        var name = event.result.card.name,
                            cards = event.result.card.cards.slice(0);
                        event.result.cards = cards;
                        var rcard = cards[0],
                            card;
                        if (rcard.name == name) {
                            card = get.autoViewAs(rcard);
                        } else {
                            card = get.autoViewAs({ name, isCard: true });
                        }
                        event.result.card = card;
                        event.result._apply_args = { addSkillCount: false };
                    },
                    filterCard: () => false,
                    selectCard: -1,
                    log: false,
                    "skill_id": "fyrhzhiji_aocai_backup",
                    sub: true,
                    sourceSkill: "fyrhzhiji_aocai",
                },
                hs: {

                }
            },

        },
        fyrhlongdan: {
            audio: "jsrglonglin",
            getLastLost(player) {
                let history = player.getAllHistory("lose");
                let allLostCards = [];
                history.forEach(evt => {
                    if (evt.cards && evt.cards.length) allLostCards.push(...evt.cards);
                    else if (evt.card) allLostCards.push(evt.card);
                });
                if (allLostCards.length > 0) {
                    return allLostCards[allLostCards.length - 1];
                }
                return null;
            },
            enable: ["chooseToUse"],
            filter(event, player) {
                const last = lib.skill.fyrhlongdan.getLastLost(player);
                if (!last) return false;
                /* if (get.is.damageCard(last)) {
                    if (event.filterCard({ name: 'shan' }, player, event) &&
                        player.countCards('hs', { type: 'basic' }) > 0) {
                        return true;
                    }
                }
                if (get.color(last) == 'red') {
                    if (event.filterCard({ name: 'sha' }, player, event) &&
                        player.countCards('hs', (card) => {
                            return get.type(card) != 'basic';
                        }) > 0) {
                        return true;
                    }
                } */
                if (player.countCards('hs', { type: 'basic' }) == 0) return false;
                if (get.is.damageCard(last)) {
                    if (event.filterCard({ name: 'shan' }, player, event)) return true;
                }
                if (get.color(last) == 'red') {
                    if (event.filterCard({ name: 'sha' }, player, event)) return true;
                }
                return false;
            },
            chooseButton: {
                dialog(event, player) {
                    const list = [];
                    const last = lib.skill.fyrhlongdan.getLastLost(player);
                    const hasBasic = player.countCards('hs', { type: 'basic' }) > 0;
                    if (last && hasBasic) {
                        if (get.is.damageCard(last)) {
                            //if (get.color(last) == 'black') {
                            if (event.filterCard({ name: 'shan' }, player, event)) {
                                list.push(['基本', '伤', 'shan']);
                            }
                        }
                        if (get.color(last) == 'red') {
                            if (event.filterCard({ name: 'sha' }, player, event)) {
                                list.push(['基本', '摸', 'sha']);
                            }
                        }
                    }
                    return ui.create.dialog("龙胆", [list, "vcard"], "hidden");
                },
                check(button) {
                    const player = get.event().player,
                        value = player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    return value;
                },
                backup(links, player) {
                    var targetName = links[0][2];
                    return {
                        viewAs: {
                            name: targetName,
                        },
                        filterCard: (card) => {
                            return get.type(card) == 'basic';
                        },
                        audio: "jsrglonglin",
                        position: "hs",
                        popname: true,
                        selectCard: 1,
                        async precontent(event, trigger, player) {
                            const last = lib.skill.fyrhlongdan.getLastLost(player);
                            const usedName = event.result.card.name;
                            if (last) {
                                if (usedName == 'shan' && get.is.damageCard(last)) {
                                    player.storage.fyrhlongdan_trigger = last.name;
                                    player.addSkill('fyrhlongdan_effect');
                                }
                                else if (usedName == 'sha' && get.color(last) == 'red') {
                                    player.draw(2);
                                }
                            }
                        },
                    };
                },
                prompt(links, player) {
                    const name = links[0][2];
                    if (name == 'shan') return "将一张基本牌当【闪】使用，并视为使用上一张伤害牌";
                    if (name == 'sha') return "将一张基本牌当【杀】使用，并摸两张牌";
                    return "龙胆";
                },
            },
            ai: {
                order: 10,
                respondSha: true,
                respondShan: true,
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 1;
                    },
                },
            },
            mod: {
                aiUseful(player, card, num) {
                    if (card.type2 === "basic") {
                        return 16;
                    }
                },
            },
            group: ["fyrhlongdan_tip"],
            subSkill: {
                tip: {
                    trigger: {
                        player: "loseAfter",
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    charlotte: true,
                    silent: true,
                    firstDo: true,
                    filter(event, player) {
                        const evt = event.getl(player);
                        return evt?.cards2?.length;
                    },
                    async content(event, trigger, player) {
                        player.removeTip("fyrhlongdan_tip");
                        const last = lib.skill.fyrhlongdan.getLastLost(player);
                        if (last) {
                            let info = "龙胆: ";
                            const tags = [];
                            if (get.is.damageCard(last)) tags.push("伤");
                            if (get.color(last) == 'red') tags.push("红");
                            if (tags.length) {
                                info += " (" + tags.join("/") + ")";
                            }
                            player.addTip("fyrhlongdan_tip", info);
                        }
                    },
                    onremove(player, skill) {
                        delete player.storage[skill];
                        player.removeTip(skill);
                    },
                },
                effect: {
                    charlotte: true,
                    trigger: { player: ["useCardAfter", "respondAfter"] },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        return player.storage.fyrhlongdan_trigger;
                    },
                    async content(event, trigger, player) {
                        const cardName = player.storage.fyrhlongdan_trigger;
                        delete player.storage.fyrhlongdan_trigger;
                        player.removeSkill('fyrhlongdan_effect');
                        if (cardName) {
                            await player.chooseUseTarget({ name: cardName, isCard: true }, false);
                        }
                    }
                },

            }
        },
        fyrhyajiao: {
            audio: "jsrgzhendan",
            trigger: {
                global: ["phaseBegin"],
            },
            filter(event, player) {
                return event.player.hasAllHistory("sourceDamage", evt => evt.player == player) && event.player.canUse("sha", player, false);
            },
            forced: true,
            async content(event, trigger, player) {
                await trigger.player.useCard({ name: "sha", isCard: true }, player, false, "noai");
            },
            ai: {
                combo: 'fyrhlongdan',
            }
        },
        fyrhchenglue: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhchenglue${index}.mp3` : 2),
            trigger: {
                player: ["phaseUseBegin"],
            },
            filter(event, player) {
                return player.countCards('h');
            },
            prompt2(event, player) {
                return `是否弃置所有手牌，摸四张牌？`;
            },
            check(event, player) {
                return player.countCards('h') < 4;
            },
            popup: false,
            async content(event, trigger, player) {
                player.logSkill("fyrhchenglue", null, null, null, [get.rand(1, 2)]);
                const hs = player.getCards('h');
                await player.discard(hs);
                await player.draw(4);
            },
            group: ["fyrhchenglue_add"],
            subSkill: {
                add: {
                    mark: true,
                    onremove(player, skill) {
                        delete player.storage[skill];
                        player.removeTip(skill);
                    },
                    marktext: "略",
                    intro: {
                        markcount(storage, player) {
                            let num = player.getStorage("fyrhchenglue_add").length;
                            if (num == 0) return null;
                            return num;
                        },
                        content: storage =>
                            `已记录<span class=thundertext>${storage.reduce((str, suit) => str + get.translation(suit), "")}</span>`,
                    },
                    trigger: {
                        global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    filter(event, player, name, target) {
                        if (!player.isPhaseUsing()) return false;
                        return game.hasPlayer(current => {
                            if (current == player) {
                                return false;
                            }
                            const evt = event.getl(current);
                            return evt && evt.cards2.length;
                        });
                    },
                    popup: false,
                    forced: true,
                    async content(event, trigger, player) {
                        const cards = trigger.cards;
                        const newSuits = [];
                        for (const card of cards) {
                            const suit = get.suit(card);
                            if (suit !== 'none') {
                                newSuits.push(suit);
                            }
                        }

                        if (newSuits.length > 0) {
                            if (player.countCards('h') > 0 && newSuits.some((s) => player.getStorage("fyrhchenglue_add").includes(s))) {
                                const result = await player.chooseBool(`是否弃置所有手牌，摸四张牌？`)
                                    .set("ai", () => {
                                        return get.player().countCards('h') < 4;
                                    })
                                    .forResult();
                                if (result?.bool) {
                                    player.logSkill("fyrhchenglue", null, null, null, [get.rand(1, 2)]);
                                    const hs = player.getCards('h');
                                    await player.discard(hs);
                                    await player.draw(4);
                                }
                            } else {
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhchenglue' + [get.rand(3, 4)] + '.mp3');
                                await player.markAuto("fyrhchenglue_add", newSuits);
                                player.addTip(
                                    "fyrhchenglue_add",
                                    get.translation("fyrhchenglue") + player.getStorage("fyrhchenglue_add").reduce((str, suit) => str + get.translation(suit), "")
                                );
                            }
                        }
                    },

                }
            }
        },
        fyrhshicai: {
            audio: "ext:永夜之境/audio:4",
            enable: "phaseUse",
            filter(event, player) {
                if (!player.countCards('h')) return false;
                if (!game.hasPlayer(current => current.countCards("h") && current !== player)) return false;
                const history = player.getHistory('gain');
                if (!history || history.length == 0) return false;
                const suits = {};
                let max = 0;
                for (const evt of history) {
                    if (!evt.cards) continue;
                    for (const c of evt.cards) {
                        const suit = get.suit(c);
                        if (suit === 'none') continue;
                        suits[suit] = (suits[suit] || 0) + 1;
                        if (suits[suit] > max) max = suits[suit];
                    }
                }
                if (max === 0) return false;
                for (const s in suits) {
                    if (suits[s] === max && player.countCards('h', { suit: s }) > 0) {
                        return true;
                    }
                }
                return false;
            },
            async content(event, trigger, player) {
                const history = player.getHistory('gain');
                const suits = {};
                let max = 0;
                for (const evt of history) {
                    if (!evt.cards) continue;
                    for (const c of evt.cards) {
                        const suit = get.suit(c);
                        if (suit === 'none') continue;
                        suits[suit] = (suits[suit] || 0) + 1;
                        if (suits[suit] > max) max = suits[suit];
                    }
                }
                const candidateSuits = [];
                for (const s in suits) {
                    if (suits[s] === max) candidateSuits.push(s);
                }
                const rawList = get.addNewRowList(player.getCards("h"), "suit", player);
                const filteredButtons = rawList
                    .flat() // 防止 addNewRowList 返回嵌套数组
                    .filter(item => {
                        return candidateSuits.includes(item.suit) && item.count > 0;
                    })
                    .map(item => {
                        // 转换为 chooseButton 需要的格式: [[item], "addNewRow"]
                        return [Array.isArray(item) ? item : [item], "addNewRow"];
                    });

                if (filteredButtons.length === 0) return;
                const result = await player.chooseButton([
                    [
                        [[`恃才：将一种花色的所有手牌当【趁火打劫】使用`], "addNewRow"],
                        [
                            dialog => {
                                dialog.classList.add("fullheight");
                                dialog.forcebutton = false;
                                dialog._scrollset = false;
                            },
                            "handle",
                        ],
                        ...filteredButtons
                    ]
                ])
                    .set("filterButton", button => {
                        return button.links.length > 0;
                    })
                    .set("ai", button => {
                        const player = get.player();
                        const suit = button.link;
                        if (!suit) return 0;
                        const count = player.countCards('h', { suit: suit });
                        return Math.max(0.1, 10 - count * 2);
                    })
                    .forResult();
                if (result?.links && result.links?.length) {
                    const selectedSuit = result.links[0];
                    const cardsToUse = player.getCards('h', { suit: selectedSuit });
                    if (cardsToUse.length) {
                        await player.chooseUseTarget({
                            name: 'chenghuodajie',
                            isCard: true,
                        }, cardsToUse, true);
                    }
                }
            },
            ai: {
                order: 8,
                result: {
                    player: 1,
                }
            }
        },
        fyrhyinzhi: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhyinzhi${index}.mp3` : 2),
            trigger: {
                global: ["drawAfter", "discardAfter"],
            },
            filter(event, player) {
                if (player.getStorage("fyrhyinzhi_used").includes(event.name)) {
                    return false;
                }
                return event.player.countCards('h') > event.player.getHandcardLimit();
            },
            popup: false,
            async cost(event, trigger, player) {
                const target = trigger.player,
                    prompt = get.prompt(event.skill, target);
                let str = `是否令${get.translation(target)}`;
                if (trigger.name == "draw") {
                    str += `弃置两张牌`;
                } else {
                    str += `摸两张牌`;
                }
                event.result = await player
                    .chooseBool(prompt, str)
                    .set("ai", () => {
                        if (trigger.name == "draw" && get.attitude(get.player(), target) > 0) {
                            return false;
                        }
                        if (trigger.name == "discard" && get.attitude(get.player(), target) <= 0) {
                            return false;
                        }
                        return true;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = trigger.player;
                player.addTempSkill("fyrhyinzhi_used");
                if (trigger.name == "draw") {
                    player.logSkill("fyrhyinzhi", [target], null, null, [get.rand(3, 4)]);
                    await target.chooseToDiscard("he", 2, true);
                    await player.markAuto("fyrhyinzhi_used", trigger.name);
                } else {
                    player.logSkill("fyrhyinzhi", [target], null, null, [get.rand(1, 2)]);
                    await target.draw(2);
                    await player.markAuto("fyrhyinzhi_used", trigger.name);
                }
            },
            subSkill: {
                used: {
                    charlotte: true,
                    onremove: true,
                    marktext: "治",
                    intro: {
                        content(storage) {
                            const map = {
                                draw: "摸牌",
                                discard: "弃牌",
                            };
                            const str = storage.map(name => map[name]).join("、");
                            return "本回合已使用时机：" + str;
                        }
                    }
                },
            }

        },
        fyrhquanxin: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: ["roundEnd"],
            },
            filter(event, player) {
                return game.filterPlayer().every(target => {
                    const history = target.getRoundHistory('lose', (evt) => {
                        return evt.type == 'discard';
                    });
                    return history.length > 0;
                });
            },
            prompt2(event, player) {
                return `是否进行一个额外回合？`;
            },
            async content(event, trigger, player) {
                player.insertPhase();
            }
        },
        fyrhzhanghua: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhzhanghua${index}.mp3` : 2),
            trigger: {
                player: ["loseAfter"],
                global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter", "cardsGotoSpecialAfter"],
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                // const evt = event.getl(player);
                // return evt && evt.hs && evt.hs.length > 0;
                if (typeof event.getl === 'function') {
                    const evt = event.getl(player);
                    return evt && evt.hs && evt.hs.length > 0;
                }
                if (event.name === "addToExpansion" || event.name === "addToExpansionMultiple") {
                    return event.source === player && event.cards && event.cards.length > 0;
                }
                return false;
            },
            async content(event, trigger, player) {
                let reason = 'other';
                let e = trigger;
                while (e) {
                    if (e.name === 'useCard') { reason = 'use'; break; }
                    if (e.name === 'respond') { reason = 'respond'; break; }
                    if (e.name === 'recast') { reason = 'recast'; break; }
                    if (e.name === 'gain') { reason = 'gain'; break; }
                    if (e.name === 'equip') { reason = 'equip'; break; }
                    if (e.name === 'addToExpansion' || e.name === 'addToExpansionMultiple') { reason = 'addToExpansion'; break; }
                    if (e.name === 'discard' || e.type === 'discard') { reason = 'discard'; break; }
                    e = e.parent || (typeof e.getParent === 'function' ? e.getParent() : null);
                    //e = e.getParent();
                }
                // 读取并更新 Storage 记录本
                let reasons = player.getStorage('fyrhzhanghua_reasons');
                if (!Array.isArray(reasons)) reasons = [];
                reasons.push(reason); // 把本次的方式加进去

                if (reasons.length < 3) {
                    // 还没满 3 次，只存入记录，直接结束
                    player.storage.fyrhzhanghua_reasons = reasons;
                    return;
                }
                //  满 3 次了，立刻清空记录本
                player.storage.fyrhzhanghua_reasons = [];
                // 判断这 3 次的方式是否“均不相同”
                // Set 数据结构自动去重，如果去重后长度还是 3，说明完全没重复
                const isAllDifferent = new Set(reasons).size === 3;

                if (isAllDifferent) {
                    const result = await player.chooseBool('彰华：你连续三次失去手牌的方式均不同，是否摸三张牌？')
                        .set('ai', () => true)
                        .forResult();
                    if (result?.bool) {
                        player.logSkill("fyrhzhanghua", null, null, null, [get.rand(1, 2)]);
                        await player.draw(3);
                    }
                } else {
                    if (player.countCards('h') > 0) {
                        const result = await player.chooseBool('彰华：你已累计三次失去手牌，是否重铸所有手牌？')
                            .set('ai', () => true)
                            .forResult();
                        if (result?.bool) {
                            player.logSkill("fyrhzhanghua", null, null, null, [get.rand(3, 4)]);
                            const hs = player.getCards('h');
                            await player.recast(hs);
                        }
                    }
                }
            }
        },
        fyrhyanfeng: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: ["useCard2"],
            },
            filter(event, player) {
                if (get.type(event.card) == 'trick') {
                    return player.getCards("hs").some(card => {
                        return get.name(card) == "sha";
                    });
                };
                if (get.name(event.card) == 'sha') {
                    return player.getCards("hs").some(card => {
                        return !get.is.damageCard(card);
                    });
                }
                return false;
            },
            async cost(event, trigger, player) {
                let result;
                if (get.type(trigger.card) == 'trick') {
                    result = await player.chooseToRespond(({ name: 'sha' }))
                        .set('ai', () => true)
                        .set('prompt', get.prompt(event.skill))
                        .set('prompt2', `打出一张【杀】令${get.translation(trigger.card)}不可响应？`)
                        .forResult();
                } else {
                    result = await player
                        .chooseCardTarget({
                            prompt: get.prompt(event.skill),
                            prompt2: `<div class="text center">打出一张非伤害牌为${get.translation(trigger.card)}增加一个目标？</div>`,
                            filterCard(card, player) {
                                return !get.is.damageCard(card);
                            },
                            filterTarget(card, player, target) {
                                let trigger = _status.event.getTrigger();
                                return !trigger.targets.includes(target)
                                //&& lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                            },
                            position: 'hs',
                            ai1(card) {
                                return 8 - get.value(card);
                            },
                            ai2(target) {
                                const evt = get.event().getTrigger(), eff = get.effect(target, evt.card, evt.player, evt.player);
                                return eff;
                            },
                        })
                        .forResult();
                }
                event.result = {
                    bool: result?.bool,
                    cards: result?.cards,
                    targets: result?.targets,
                };
            },
            async content(event, trigger, player) {
                const targets = event.targets;
                const cards = event.cards;
                if (get.type(trigger.card) == 'trick') {
                    trigger.directHit.addArray(game.filterPlayer());
                    game.log(player, '令', get.translation(trigger.card), '不可响应');
                }
                else {
                    await player.respond(cards);
                    player.line(targets[0]);
                    trigger.targets.add(targets[0]);
                    game.log(player, '为', get.translation(trigger.card), '增加了', get.translation(targets[0]), '为目标');
                }
            }
        },
        fyrhjiji: {
            audio: "ext:永夜之境/audio:3",
            trigger: {
                global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter"],
            },
            filter(event, player) {
                //return event.getd().some(i => get.name(i, false) == "ying");
                //return event.getd()?.someInD("od");
                const cards = event.getd()?.filterInD("od") || [];
                return cards.some(card => ['basic', 'trick'].includes(get.type(card)));
            },
            popup: false,
            async cost(event, trigger, player) {
                const triggerCards = trigger.getd().filterInD("od").filter(card => ['basic', 'trick'].includes(get.type(card)));
                const names = triggerCards.map(card => card.name);
                const hecards = player.getCards('he').filter(card => names.includes(card.name));
                const xcards = player.getCards("xs", card => !card._cardid).filter(card => names.includes(card.name));
                if (!hecards.length && !xcards.length) return false;
                let actions = [];
                if (hecards.length) actions.push("移出");
                if (xcards.length) actions.push("移去");
                let promptStr = `【击楫】是否${actions.join("或")}一张同名牌？`;
                const dialog = ui.create.dialog(promptStr);
                if (hecards.length) {
                    dialog.addText('<b>可移出牌</b>（置于武将牌上）');
                    dialog.add(hecards);
                }
                if (xcards.length) {
                    dialog.addText('<b>可移去牌</b>（置入弃牌堆）');
                    dialog.add(xcards);
                }
                const result = await player.chooseButton(dialog).set('ai', button => {
                    const player = _status.event.player;
                    const xsCount = player.getCards("xs", card => !card._cardid).length;
                    const isHeCard = player.getCards('he').includes(button.link);
                    if (xsCount >= 4) {
                        return isHeCard ? 1 : 2;
                    } else {
                        return isHeCard ? 2 : 1;
                    }
                }).forResult();
                if (result.bool) {
                    event.result = {
                        bool: true,
                        cost_data: result.links[0],
                    };
                }
            },
            async content(event, trigger, player) {
                const cards = event.cost_data;
                if (cards) {
                    game.log(player, '发动了', '#g【击楫】');
                    if (player.getCards('he').includes(cards)) {
                        await player.addToExpansion(cards, player, "gain2").set("gaintag", ["fyrhjiji"]);
                    } else {
                        await player.loseToDiscardpile(cards);
                        //player.draw();
                    }
                    await player.addMark("fyrhjiji", 1, false);
                }
            },
            marktext: "⚔️",
            intro: {
                markcount: "expansion",
                mark(dialog, storage, player) {
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }
                    const count1 = player.countMark("fyrhjiji");
                    const count2 = player.countMark("fyrhjiji_draw");
                    const count3 = player.countMark("fyrhjiji_use");
                    const expCards = player.getExpansions("fyrhjiji");
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; border-bottom:1px solid rgba(128,128,128,0.3)">📔技能次数</div>');
                    const infoHtml =
                        // font-size 改为 20px 
                        // font-weight: bold 全局加粗
                        '<div class="text center" style="margin: 15px 0; font-size: 20px; line-height: 2.2; font-weight: bold;">' +
                        // 给数字加了颜色（span style）
                        '<div>移出/移去次数：<span style="color:#FFFF00">' + count1 + '</span></div>' +
                        '<div>摸牌次数：<span style="color:#00FF00">' + count2 + '</span></div>' +
                        '<div>视为使用次数：<span style="color:#00BFFF">' + count3 + '</span></div>' +
                        '</div>';
                    dialog.addText(infoHtml);
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">⛵移出游戏区</div>');
                    if (expCards.length) {
                        if (player.isUnderControl(true)) {
                            dialog.addAuto(expCards);
                        }
                        else {
                            dialog.addText('<div class="text center" style="padding:10px;">共有' + get.cnNumber(expCards.length) + '张牌</div>');
                        }
                    } else {
                        dialog.addText('<div class="text center" style="opacity:0.6; padding:10px;">暂无卡牌</div>');
                    }
                },
            },
            group: ["fyrhjiji_draw", "fyrhjiji_use"],
            subSkill: {
                draw: {
                    trigger: {
                        player: "useCardAfter",
                    },
                    filter(event, player) {
                        const x = player.getCards("xs", card => !card._cardid).length;
                        if (x === 0) return false;
                        const historyCount = player.getHistory("useCard").length;
                        return historyCount === x;
                    },
                    prompt2(event, player) {
                        const x = player.getCards("xs", card => !card._cardid).length;
                        return `你本回合已使用${x}张牌，是否摸${x}张牌？`;
                    },
                    async content(event, trigger, player) {
                        const x = player.getCards("xs", card => !card._cardid).length;
                        //await player.drawTo(x);
                        game.playAudio("../extension/永夜之境/audio/", 'fyrhjiji' + [get.rand(1, 3)] + '.mp3');
                        await player.draw(x);
                        await player.addMark("fyrhjiji_draw", 1, false);

                    }
                },
                use: {
                    enable: ["chooseToUse", "phaseUse"],
                    filter(event, player) {
                        const xcards = player.getCards("xs", card => !card._cardid);
                        if (!xcards.length) return false;
                        const count1 = player.countMark("fyrhjiji");
                        const count2 = player.countMark("fyrhjiji_draw");
                        const count3 = player.countMark("fyrhjiji_use");
                        const minCount = Math.min(count1, count2, count3);
                        if (count3 > minCount) return false;
                        return xcards.some(card => {
                            if (event.filterCard) return event.filterCard(card, player, event);
                            return player.hasUseTarget(card, false, false);
                        });
                    },
                    chooseButton: {
                        dialog(event, player) {
                            return ui.create.dialog('【击楫】视为使用一张移出牌', player.getCards("xs", card => !card._cardid));
                        },
                        filter(button, player) {
                            const evt = _status.event.getParent();
                            if (evt && evt.filterCard) {
                                return evt.filterCard(button.link, player, evt);
                            }
                            return player.hasUseTarget(button.link);
                        },
                        check(button) {
                            return 1;
                        },
                        backup(links, player) {
                            return {
                                filterCard() { return false; },
                                selectCard: -1,
                                viewAs: links[0],
                                cards: links,
                                popname: true,
                                async precontent(event, trigger, player) {
                                    game.playAudio("../extension/永夜之境/audio/", 'fyrhjiji' + [get.rand(1, 3)] + '.mp3');
                                    player.addMark("fyrhjiji_use", 1, false);
                                    event.getParent().addCount = false;
                                    player.draw(2);
                                },
                            };
                        },
                        prompt(links, player) {
                            return '视为使用 ' + get.translation(links[0]);
                        }
                    },
                    hiddenCard(player, name) {
                        return player.getCards("xs", card => !card._cardid).some(card => card.name === name);
                    }
                }
            }
        },
        fyrhjunce: {
            audio: "ext:永夜之境/audio:2",
            init(player) {
                if (!player.storage.fyrhjunce) {
                    player.storage.fyrhjunce = {
                        left: ['sha', 'jiu', 'tiesuo'],
                        right: ['shan', 'tao', 'guohe']
                    };
                    player.markSkill('fyrhjunce');
                }
            },
            marktext: "君",
            intro: {
                content(storage, player) {
                    const getStr = arr => arr.length === 1 ? `【无中生有(原${get.translation(arr[0])})】` : arr.map(name => `【${get.translation(name)}】`).join('');
                    return `左侧：</b>${getStr(storage.left)}<br><b>右侧：</b>${getStr(storage.right)}`;

                }
            },
            popup: false,
            enable: ["chooseToUse", "chooseToRespond"],
            filter(event, player) {
                const storage = player.storage.fyrhjunce;
                if (!storage || !storage.left || !storage.right) return false;
                // 双向检测：手里有没有左边或右边的牌
                const hasLeft = player.hasCard(card => storage.left.includes(card.name), 'he');
                const hasRight = player.hasCard(card => storage.right.includes(card.name), 'he');

                if (!hasLeft && !hasRight) return false;
                // 收集可变虚拟牌
                const possibleTargets = new Set();
                if (hasLeft) {
                    if (storage.right.length === 1) possibleTargets.add('wuzhong');
                    else storage.right.forEach(name => possibleTargets.add(name));
                }
                if (hasRight) {
                    if (storage.left.length === 1) possibleTargets.add('wuzhong');
                    else storage.left.forEach(name => possibleTargets.add(name));
                }

                for (const name of possibleTargets) {
                    const vcard = { name: name, isCard: true };
                    if (event.filterCard) {
                        if (event.filterCard(vcard, player, event)) return true;
                    } else {
                        if (player.hasUseTarget(vcard)) return true;
                    }
                }
                return false;
            },
            chooseButton: {
                dialog(event, player) {
                    const storage = player.storage.fyrhjunce;
                    const distinctList = [];

                    const hasLeft = player.hasCard(card => storage.left.includes(card.name), 'he');
                    const hasRight = player.hasCard(card => storage.right.includes(card.name), 'he');

                    const possibleTargets = new Set();
                    if (hasLeft) {
                        // 如果另一边只剩1张，目标只能是'wuzhong'，隐藏它的真名
                        if (storage.right.length === 1) possibleTargets.add('wuzhong');
                        else storage.right.forEach(name => possibleTargets.add(name));
                    }
                    if (hasRight) {
                        if (storage.left.length === 1) possibleTargets.add('wuzhong');
                        else storage.left.forEach(name => possibleTargets.add(name));
                    }

                    for (const name of possibleTargets) {
                        const vcard = { name: name, isCard: true };
                        let canUse = false;
                        if (event.filterCard) {
                            canUse = event.filterCard(vcard, player, event);
                        } else {
                            canUse = player.hasUseTarget(vcard);
                        }
                        //[花色, 点数, 牌名, 属性]
                        if (canUse) distinctList.push(['', 0, name, '']);
                    }
                    return ui.create.dialog("【君侧】选择要转化的牌", [distinctList, "vcard"], "hidden");
                },
                filter(button, player) { return true; },
                check(button) {
                    const player = get.event().player;
                    const targetName = button.link[2]; //虚拟牌牌名
                    const vcard = { name: targetName, isCard: true };
                    let val = player.getUseValue(vcard);
                    if (targetName === 'wuzhong') {
                        val += 5;
                    }
                    return val;
                },
                backup(links, player) {
                    const targetName = links[0][2]; // 虚拟牌名
                    return {
                        filterCard(card, player) {
                            const storage = player.storage.fyrhjunce;
                            if (!storage) return false;
                            // 如果是无中生有，确认其来源
                            if (targetName === 'wuzhong') {
                                if (storage.left.length === 1 && storage.right.includes(card.name)) return true;
                                if (storage.right.length === 1 && storage.left.includes(card.name)) return true;
                                return false;
                            }
                            // 双向限制：变左必须付右，变右必须付左
                            if (storage.right.includes(targetName) && storage.left.includes(card.name)) return true;
                            if (storage.left.includes(targetName) && storage.right.includes(card.name)) return true;
                            return false;
                        },
                        selectCard: 1,
                        position: 'he',
                        viewAs: {
                            name: targetName,
                            isCard: true,
                            storage: { fyrhjuncex: true }
                        },
                        popname: true,
                        async precontent(event, trigger, player) {
                            player.logSkill("fyrhjunce");
                            const realName = event.result.cards[0].name; // 实体牌
                            const virtualName = targetName;       // 虚拟牌
                            const storage = player.storage.fyrhjunce;
                            if (!storage || !storage.left || !storage.right) return;
                            let left = storage.left.slice(0);
                            let right = storage.right.slice(0);
                            //找出真正被移动的牌
                            let actualVirtualName = virtualName;
                            if (virtualName === 'wuzhong') {
                                if (left.includes(realName)) actualVirtualName = right[0];
                                else if (right.includes(realName)) actualVirtualName = left[0];
                            }
                            const getStr = arr => arr.length === 1
                                ? `【无中生有(原${get.translation(arr[0])})】` : arr.map(name => `【${get.translation(name)}】`).join('');
                            const leftStr = getStr(left);
                            const rightStr = getStr(right);

                            const result = await player.chooseControl(["移至左侧", "移至右侧"])
                                .set('prompt', `【君侧】将【${get.translation(realName)}】与【${get.translation(actualVirtualName)}】移至同一侧`)
                                .set('choiceList', [
                                    `移至左侧（${leftStr}）`,
                                    `移至右侧（${rightStr}）`
                                ])
                                .set('ai', () => {
                                    // 左右两侧原本的牌名数量
                                    const l = left.length;
                                    const r = right.length;
                                    // 如果某一侧只剩 1 张（已经是无中生有），必须把牌移给它补充，让它回到 2
                                    if (l === 1) return "移至左侧";
                                    if (r === 1) return "移至右侧";
                                    // 制造无中：如果两边都大于 1，那就把牌移给【数量多】的那边，把少的那边抽干变成 1
                                    if (l > r) return "移至左侧";
                                    if (r > l) return "移至右侧";
                                    //（3对3）：随便挑一边
                                    return Math.random() > 0.5 ? "移至左侧" : "移至右侧";
                                })
                                .forResult();
                            if (result && result?.control) {
                                left = left.filter(name => name !== realName && name !== actualVirtualName);
                                right = right.filter(name => name !== realName && name !== actualVirtualName);

                                if (result.control === "移至左侧") {
                                    left.push(realName, actualVirtualName);
                                } else {
                                    right.push(realName, actualVirtualName);
                                }

                                left = Array.from(new Set(left));
                                right = Array.from(new Set(right));

                                player.storage.fyrhjunce = { left, right };
                                player.syncStorage('fyrhjunce');
                                player.markSkill('fyrhjunce');
                            }
                        }
                    };
                },
                prompt(links, player) {
                    return `选择一张牌，当做【${get.translation(links[0][2])}】使用，并移至同一侧`;
                }
            },
            hiddenCard(player, name) {
                const storage = player.storage.fyrhjunce;
                if (!storage || !storage.left || !storage.right) return false;

                const hasLeft = player.hasCard(card => storage.left.includes(card.name), 'he');
                const hasRight = player.hasCard(card => storage.right.includes(card.name), 'he');
                let targetLeft = storage.left.includes(name);
                let targetRight = storage.right.includes(name);
                if (name === 'wuzhong') {
                    if (storage.left.length === 1) { targetLeft = true; }
                    if (storage.right.length === 1) { targetRight = true; }
                } else {
                    // 如果只有1个，原名被隐藏，无法直接响应原名
                    if (storage.left.length === 1 && storage.left.includes(name)) { targetLeft = false; }
                    if (storage.right.length === 1 && storage.right.includes(name)) { targetRight = false; }
                }
                if (hasLeft && storage.right.includes(name)) return true;
                if (hasRight && storage.left.includes(name)) return true;
                return false;
            },
            ai: {
                order: 10,
                skillTagFilter(player) {
                    if (!player.countCards("hes")) {
                        return false;
                    }
                },
                result: {
                    player(player) {
                        return 1;
                    },
                },
            },
            group: ["fyrhjunce_effect"],
            subSkill: {
                effect: {
                    trigger: {
                        player: "useCard",
                    },
                    silent: true,
                    filter(event, player) {
                        return event.card?.storage.fyrhjuncex === true && event.card.name == "wuzhong";
                    },
                    async content(event, trigger, player) {
                        trigger.effectCount++;
                        game.log(trigger.card, '额外结算一次');
                    }
                }
            }
        },
        fyrhruiqi: {
            trigger: {
                player: ["phaseDrawBegin1", "phaseUseBegin", "phaseDiscardBegin",]
            },
            filter(event, player) {
                return true;
            },
            check(event, player) {
                return true;
            },
            async cost(event, trigger, player) {
                let result;
                if (trigger.name == "phaseDraw") {
                    result = await player
                        .chooseBool(get.prompt(event.skill), `<div class="text center">将摸牌数改为3，然后令一名角色本回合的装备牌失效</div>`)
                        .set('ai', () => true)
                        .forResult();
                }
                if (trigger.name == "phaseUse") {
                    result =
                        await player
                            .chooseBool(get.prompt(event.skill), `<div class="text center">将出牌数改为2，然后本回合你下次造成伤害时摸两张牌</div>`)
                            .set('ai', () => true)
                            .forResult();
                }
                if (trigger.name == "phaseDiscard") {
                    result =
                        await player
                            .chooseBool(get.prompt(event.skill), `<div class="text center">将弃牌数改为1，然后你可以将一张牌当【出其不意】使用</div>`)
                            .set('ai', () => true)
                            .forResult();
                }
                event.result = {
                    bool: result?.bool,
                };
            },
            async content(event, trigger, player) {
                if (trigger.name == "phaseDraw") {
                    trigger.num = 3;
                    if (game.hasPlayer(p => { return p.countCards("e") && p != player; })) {
                        const result = await player
                            .chooseTarget(true, '令一名角色本回合装备牌失效',
                                (card, player, target) => {
                                    return target != player && target.countCards("e") > 0;
                                })
                            .set('ai', (target) => {
                                const player = get.player(),
                                    att = get.attitude(player, target);
                                if (att > 0) return 0;
                                const ep = target.countCards("e");
                                return -att * ep;
                            })
                            .forResult();
                        if (result?.bool) {
                            const target = result.targets[0];
                            player.line(target);
                            target.addTempSkill("fyrhruiqi_equip");
                        }
                    }
                }
                if (trigger.name == "phaseUse") {
                    player.addTempSkill("fyrhruiqi_debuff");
                    player.addTempSkill("fyrhruiqi_effect");
                    player.addMark("fyrhruiqi_debuff", 2, false);
                }
                if (trigger.name == "phaseDiscard") {
                    trigger.cancel();
                    if (player.countCards("h")) {
                        await player.chooseToDiscard('h', true);

                        const next = player.chooseToUse();
                        next.set("openskilldialog", `锐器：将一张牌当作【出其不意】使用`);
                        next.set("norestore", true);
                        next.set("_backupevent", "fyrhruiqi_backup");
                        next.set("custom", {
                            add: {},
                            replace: { window() { } },
                        });
                        next.backup("fyrhruiqi_backup");
                        next.set("targetRequired", true);
                        next.set("complexSelect", true);
                        next.set("filterTarget", (card, player, target) => target != player && target.countCards("hs"));
                        next.set("logSkill", event.name);
                        await next;
                    }
                }
            },
            getSkills(player) {
                return player.getCards("e").reduce((list, card) => {
                    const info = get.info(card);
                    if (info && info.skills) {
                        return list.addArray(info.skills);
                    }
                    return list;
                }, []);
            },
            subSkill: {
                backup: {
                    filterCard: (card, player) => get.itemtype(card) == "card",
                    viewAsFilter(player) {
                        return player.countCards("hs") > 0;
                    },
                    viewAs: {
                        name: "chuqibuyi",
                    },
                    position: "he",
                    ai1(card) {
                        return 6 - get.value(card);
                    },
                    log: false,
                    sub: true,
                },
                effect: {
                    trigger: {
                        source: "damageSource",
                    },
                    forced: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        player.draw(2);
                        await player.removeSkill("fyrhruiqi_effect");
                    }
                },
                equip: {
                    trigger: {
                        player: ["equipAfter"],
                    },
                    filter(event, player) {
                        return true;
                    },
                    silent: true,
                    forced: true,
                    charlotte: true,
                    init(player, skill) {
                        player.disableSkill(skill, lib.skill.fyrhruiqi.getSkills(player));
                    },
                    async content(event, trigger, player) {
                        player.disableSkill("fyrhruiqi_equip", lib.skill.fyrhruiqi.getSkills(player));
                    },
                    onremove(player, skill) {
                        player.enableSkill(skill);
                    },
                    mark: true,
                    marktext: "※",
                    intro: {
                        content: "装备牌失效",
                    },
                    mod: {
                        attackRangeBase(player, num) {
                            return 1;
                        },
                        globalFrom(from, to, distance) {
                            let num = 0;
                            for (let i of from.getVCards("e")) {
                                const info = get.info(i).distance;
                                if (!info) {
                                    continue;
                                }
                                if (info.globalFrom) {
                                    num += info.globalFrom;
                                }
                            }
                            return distance - num;
                        },
                        globalTo(from, to, distance) {
                            let num = 0;
                            for (let i of to.getVCards("e")) {
                                const info = get.info(i).distance;
                                if (!info) {
                                    continue;
                                }
                                if (info.globalTo) {
                                    num += info.globalTo;
                                }
                                if (info.attackTo) {
                                    num += info.attackTo;
                                }
                            }
                            return distance - num;
                        },
                    },
                },
                debuff: {
                    mark: true,
                    marktext: "🚬",
                    intro: {
                        markcount(storage) {
                            return (storage || 0).toString();
                        },
                        content(storage) {
                            return "还可使用" + (storage || 0).toString() + "张牌";
                        },
                    },
                    charlotte: true,
                    onremove: true,
                    trigger: {
                        player: "useCard0",
                    },
                    filter(event, player) {
                        return player.hasMark("fyrhruiqi_debuff");
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    async content(event, trigger, player) {
                        player.removeMark("fyrhruiqi_debuff", 1, false);
                    },
                    mod: {
                        cardEnabled(card, player) {
                            if (player.hasMark("fyrhruiqi_debuff") || !player.isPhaseUsing()) {
                                return;
                            }
                            if (get.itemtype(card) == "card" && get.position(card) == "h") {
                                return false;
                            }
                            if (card.cards && (card.cards || []).some(i => get.position(i) == "h")) {
                                return false;
                            }
                        },
                        cardSavable() {
                            return lib.skill.fyrhruiqi.subSkill.debuff.mod.cardEnabled.apply(this, arguments);
                        },
                    },
                }
            }

        },
        fyrhquxing: {
            enable: "phaseUse",
            usable: 1,
            lose: false,
            discard: false,
            delay: false,
            filter(event, player) {
                return player.hasCard(card => get.info('fyrhquxing').filterCard(card, player), 'he');
            },
            filterCard(card, player) {
                // if (!['basic', 'trick'].includes(get.type(card))) return false;
                if (ui.selected.cards.length && ui.selected.cards[0].name != card.name) return false;
                const cards = player.getCards('he');
                return cards.includes(card) && cards.filter(i => i.name == card.name).length > 1;
            },
            filterTarget(card, player, target) {
                return target !== player;
            },
            selectCard: [2, Infinity],
            position: "he",
            complexCard: true,
            check(card) {
                const player = get.event().player;
                return 6 - player.getUseValue(card);
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const cards = event.cards;
                await target.addToExpansion(cards, "gain2").set("gaintag", ["fyrhquxing"]);
                await game.asyncDraw([target, player].sortBySeat(), event.cards.length);
                player.addSkill('fyrhquxing_remove');
                player.addMark("fyrhquxing_remove", 1, false);
                target.addSkill('fyrhquxing_remove');
                await player.addSkill('fyrhquxing_effect');
                await target.addSkill('fyrhquxing_effect');
                player.setStorage("fyrhquxing_effect", target);
               // player.markSkillCharacter("fyrhquxing_effect", target, "", `${get.translation(target)}`);
                
            },
            marktext: "曲",
            intro: {
                mark(dialog, storage, player) {
                    const cards = player.getExpansions("fyrhquxing");
                    dialog.addAuto(cards);
                },
                markcount: "expansion",
            },
            ai: {
                order(item, player) {
                    let cards = player.getCards('he', card => get.info('fyrhquxing').filterCard(card, player) && player.getUseValue(card) > 0);
                    cards = cards.filter(card => cards.filter(i => i.name == card.name).length > 1);
                    if (!cards.length) return 1;
                    cards.sort((a, b) => get.order(b) - get.order(a));
                    return get.order(cards[0]) + 1;
                },
                result: {
                    player: 1,
                },
            },
            subSkill: {
                effect:{
                    trigger: {
                        player: ["gainAfter",'useCard'],
                    },
                    filter(event, player) {
                        const isInitiator = player.hasMark('fyrhquxing_remove');
                        const target = isInitiator ? player.storage.fyrhquxing_effect : player;
                        if (!target) return false;
                        const expansions = target.getExpansions("fyrhquxing"); 
                        if (expansions.length <= 0) return false;
                        // 提取出所有同名的牌名
                        const names = expansions.map(i => i.name);
                        if (event.name === 'gain') {
                            if (!isInitiator) return false;
                            return event.cards.some(card => names.includes(card.name)&& player.getCards('h').includes(card));
                        }
                        if (event.name === 'useCard') {
                            if (isInitiator) return false;
                            return names.includes(event.card.name);
                        }
                        return false;
                    },
                    forced: true,
                    onremove: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        const isInitiator = player.hasMark('fyrhquxing_remove');
                        const target = isInitiator ? player.storage.fyrhquxing_effect : player;
                        const expansions = target.getExpansions("fyrhquxing");
                        const names = expansions.map(i => i.name);
                        if (trigger.name === 'gain') {
                            const mCards = trigger.cards.filter(card => names.includes(card.name) && player.getCards('h').includes(card));
                            if (mCards.length > 0) {
                                await player.recast(mCards);
                            }
                        } 
                        else if (trigger.name === 'useCard') {
                            await player.recast(trigger.cards);
                        }
                    },
                },
                remove: {
                    trigger: {
                        player: ["useSkill","logSkillBegin","useCard","respond"],
                    },
                    filter(event, player) {
                        if (["global", "equip"].includes(event.type)) {
                            return false;
                        }
                        if ((get.info(event.skill) || {}).charlotte) {
                            return false;
                        }
                        if (event.skill =='fyrhquxing_effect'){
                            return false;
                        }
                        const skill = get.sourceSkillFor(event);
                        const info = get.info(skill);
                        return info && !info.charlotte && !info.equipSkill;
                    },
                    forced: true,
                    onremove: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        player.removeSkill(event.name);
                        player.removeSkill('fyrhquxing_effect');
                        player.clearMark(event.name);
                    },
                    marktext: "🎵",
                    mark:true,
                    intro: {
                        markcount(storage, player) {
                            return null;
                        },
                        mark(dialog, storage, player) {
                            dialog.addText(player.hasMark('fyrhquxing_remove')?"获得「曲兴」同名牌后重铸之":"使用「曲兴」同名牌后重铸之");
                        }
                    },
                },

            }
        },
        fyrhwulan:{
            trigger: {
                player: ["phaseDrawAfter", "phaseUseAfter"]
            },
            filter(event, player) {
                return true;
            },
            check(event, player) {
                return false;
            },
            async cost(event, trigger, player) {
                let result;
                if (trigger.name == "phaseDraw") {
                    result = await player
                        .chooseBool(get.prompt(event.skill), `<div class="text center">将摸牌数改为3，然后令一名角色本回合的装备牌失效</div>`)
                        .set('ai', () => true)
                        .forResult();
                }
                if (trigger.name == "phaseUse") {
                    result =
                        await player
                            .chooseBool(get.prompt(event.skill), `<div class="text center">将出牌数改为2，然后本回合你下次造成伤害时摸两张牌</div>`)
                            .set('ai', () => true)
                            .forResult();
                }
                if (trigger.name == "phaseDiscard") {
                    result =
                        await player
                            .chooseBool(get.prompt(event.skill), `<div class="text center">将弃牌数改为1，然后你可以将一张牌当【出其不意】使用</div>`)
                            .set('ai', () => true)
                            .forResult();
                }
                event.result = {
                    bool: result?.bool,
                };
            },

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
