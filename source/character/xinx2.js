import { lib, game, ui, get, ai, _status } from '../../../../noname.js';





export let info = {
    name: 'xinx2',
    connect: true,
    connectBanned: [],
    //武将分包
    characterSort: {
        xinx2: {
            'liechexinghe': ['xinx_liuying', 'xinx_ren', 'xinx_qiong', 'xinx_kafuka', 'xinx_sanyueqi', 'xinx_yinglang', 'xinx_danheng', 'xinx_xing', 'xinxnew_liuying'],
            'wengfaluosi': ['xinx_xiadie', 'xinx_tilixibiesi', 'xinx_baie', 'xinx_xilian', 'xinx_fengjin', 'xinx_changyeyue', 'xinx_kelvdela', 'xinx_haiseyin', 'xinx_tenghuang'],
            'xianzhou': ['xinx_jingliu', 'xinx_hanya', 'xinx_yinyuejun', 'xinx_guinaifen', 'xinx_wangguiren', 'xinx_feixiao', 'xinx_fuxuan', 'xinx_luocha'],
            'pinuokangni': ['xinx_zhigengniao', 'xinx_huahuo', 'xinxmeng_liuying', 'xinx_huangquan', 'xinx_xingqiri', 'xinx_luanpo'],
            'xinyiling': [],
            'heita': ['xinx_daheita', 'xinx_ruanmei'],
            'beiluoboge': ['xinx_xier', 'xinx_buluoniya'],
            'yishilvren': ['xinx_sikeke', 'xinx_yeshunguang', 'xinx_laite'],
            'gongsi': ['xinx_tuopa'],
            'xinxxugou': ['xinx_xiao'],




        }
    },
    //武将 'rare', 'epic', 'legend',['legend'] ["forbidai"],['xinxsusheng', 'xinxyuejian', 'xinxmingxi']
    character: {
        xinx_liuying: ["female", "xinx", 4, ['xinxyingshi', 'xinxxinzhui'], ['legend']],
        xinx_jingliu: ["female", "xinx", 4, ['xinxxiaguang', 'xinxshuohua'], ['legend']],
        xinx_ren: ["male", "xinx", 5, ['xinxzhili', 'xinxfandu'], ['legend']],
        //开拓者
        xinx_qiong: ["male", "xinx", 3, ['xinxkaituo'], ['legend']],
        xinx_qiong_shadow1: ["male", "xinx", 4, ['xinxhuanling', 'xinxcilian'], ["unseen", "sex:male_castrated"]],
        xinx_qiong_shadow2: ["male", "xinx", 4, ['xinxjizou', 'xinxmengxing'], ["unseen", "sex:male_castrated"]],
        xinx_qiong_shadow3: ["male", "xinx", 4, ['xinxzhupo', 'xinxyanqiang'], ["unseen", "sex:male_castrated"]],
        xinx_mimi: ["female", "xinx", 3, ['xinxhuoban'], ["unseen", "sex:male_castrated", 'legend']],
        xinx_Pollux: ["female", "xinx", 4, ['xinxhuiyi', 'xinxxsusheng_turn'], ["unseen", "sex:male_castrated", 'legend']],
        xinx_yinglang: ["female", "xinx", 3, ['xinxpojie', 'xinxhairu'], ['epic']],
        xinx_xiadie: ["female", "xinx", 3, ['xinxxsusheng', 'xinxxmingxi'], ['legend']],
        xinx_huangquan: ["female", "xinx", 4, ['xinxleizhi', 'xinxcanmeng', 'xinxjizhen'], ['legend']],
        xinx_luocha: ["male", "xinx", 4, ['xinxyunjiu', 'xinxjiangxing'], ['epic']],
        xinx_fuxuan: ["female", "xinx", 3, ['xinxqiongguan', 'xinxgeze'], ['epic']],
        xinx_yinyuejun: ["male", "xinx", 3, ['xinxkangxin', 'xinxzhuoshi'], ['legend']],
        xinx_daheita: ["female", "xinx", 3, ['xinxjiegou', 'xinxlinggan'], ['legend']],
        xinx_feixiao: ["female", "xinx", 4, ['xinxjueying', 'xinxzhuodeng'], ['legend']],
        xinx_guinaifen: ["female", "xinx", 4, ['xinxduoyi', 'xinxbashi'], ['legend']],
        xinxmeng_liuying: ["female", "xinx", 3, ['xinxyueding'], ['legend']],
        xinx_baie: ["male", "xinx", "4/5", ['xinxzhuhuo', 'xinxfushi'], ['legend']],
        xinx_fengjin: ["female", "xinx", 3, ['xinxtianqi', 'xinxhongzhu'], ['epic']],
        xinx_changyeyue: ["female", "xinx", 3, ['xinxyiyu', 'xinxbuli'], ['epic']],
        xinx_xing: ["female", "xinx", 3, ['xinxzhanshu', 'xinxdashi'], ['legend']],

        // xinx_zhigengniao: ["female", "xinx", 3, [], ['legend']],
        //xinx_huahuo: ["female", "xinx", 3, [], ['epic']],
        xinx_xilian: ["female", "xinx", 3, ['xinxyilian'], ['legend']],
        // xinx_kelvdela: ["female", "xinx", 3, [], ['rare']],
        // xinx_luanpo: ["female", "xinx", 3, [], ['epic']],
        xinx_haiseyin: ["female", "xinx", 3, [], ['epic']],
        // xinx_ruanmei: ["female", "xinx", 3, [], ['epic']],
        xinx_xingqiri: ["male", "xinx", 3, ['xinxangang', 'xinxxunji'], ['epic']],
        // xinx_sanyueqi: ["female", "xinx", 3, [], ['epic']],
        xinx_xier: ["female", "xinx", 4, ['xinxguiren', 'xinxzaixian'], ['epic']],
        xinx_buluoniya: ["female", "xinx", 3, ['xinxxianji', 'xinxkejie'], ['epic']],
        //xinx_tilixibiesi: ["female", "xinx", 3, [], ['legend']],
        xinx_kafuka: ["female", "xinx", 3, ['xinxmosuo', 'xinxbeichan'], ['epic']],
        //xinx_wangguiren: ["female", "xinx", 3, [], ['legend']],
        //xinx_tuopa: ["female", "xinx", 3, [], ['epic']],
        //xinx_hanya: ["female", "xinx", 3, [], ['rare']],
        xinx_sikeke: ["female", "qun", 4, ['xinxzhuiyuan', 'xinxliuduan'], ["border:xinx", 'legend']],
        xinx_yeshunguang: ["female", "qun", 4, ['xinxmingxin', 'xinxguichen', 'xinxlingxiao'], ["border:xinx", 'legend']],//,'xinxlingxiao''xinxmingxin','xinxguichen',
        xinxnew_liuying: ["female", "xinx", 4, ['xinxnewxinzhui', 'xinxnewyingshi'], ['legend']],
        xinx_tenghuang: ["male", "xinx", "4/6", ['xinxzhengrong', 'xinxbahuang'], ['epic']],
        xinx_xiao: ["female", "xing", 4, ['xinxxuanren', 'xinxcuiren'], ['legend']],
        //xinx_laite: ["male", "qun", 4, [], ["border:xinx",'legend']],



    },
    //武将称号
    characterTitle: {
        xinx_baie: '<font color=#FF6557>燔世骄阳</font>',
        xinx_liuying: '<font color=#91B9C5>无梦之境</font>',
        xinx_xiadie: '<font color=#DA7CD2>记忆的入殓师</font>',
        xinx_qiong: '<font color=#57FFFF>开拓者</font>',
        xinx_xing: '<font color=#57FFFF>开拓者</font>',
        xinx_feixiao: '<font color=#58D5CB>天击将军</font>',
        xinx_daheita: '<font color=#9458D5>魔女</font>',
        xinx_ren: '<font color=#DC143C>弃冶为刃</font>',
        xinx_huangquan: '<font color=#A649D4>雷电芽衣</font>',
        xinx_jingliu: '<font color=#75D1EA>此身为剑</font>',
        xinxmeng_liuying: '<font color=#82e0aa>重逢</font><font color=#57FFFF>亦如</font><font color=#57FFFF>初见</font>',
        xinx_fengjin: '<font color=#FAB2DF>疗愈晨昏</font>',
        xinx_xilian: '<font color=#FCACD4>因你而在</font>',
        xinx_sanyueqi: '<font color=#A8CFF0>重返余生</font>',
        xinx_yinglang: '<font color=#7094FA>终极骇客</font>',
        xinx_luocha: '<font color=#8BDFB8>天命之外</font>',
        xinx_guinaifen: '<font color=#FF6E6B>红红火火</font>',
        xinx_yinyuejun: '<font color=#52E0B3>持明龙尊</font>',
        xinx_changyeyue: '<font color=#E68AEA>永夜之帷</font>',
        xinx_fuxuan: '<font color=#F480D9>第三只眼</font>',
        xinx_xier: '<font color=#7A69E2>自绀海渡往彼岸</font>',
        xinx_buluoniya: '<font color=#5495C9>携彼岸渡往绀海</font>',
        xinx_sikeke: '<font color=#73B3E8>虚渊暗星</font>',
        xinx_xingqiri: '<font color=#92CAF2>梦醒后启程</font>',
        xinx_yeshunguang: '<font color=#E15B5B>青溟司命</font>',
        xinx_kafuka: '<font color=#B60C83>听，终末在起舞</font>',
        xinxnew_liuying: '<font color=#91B9C5>无梦之境</font>',
        xinx_tenghuang: '<font color=#F99010>磐岩之脊</font>',
        xinx_xiao: '<font color=#D7D7DB>星辰之翼</font>',
        // 58A7A6
        //65B8B1
        //DA7CD2

    },
    //翻译
    translate: {
        liechexinghe: '列车组&星核猎手',
        xianzhou: '仙舟',
        xinyiling: '忆灵',
        pinuokangni: '匹诺康尼的梦',
        xinxxugou: '虚构',
        yinhe: '银河',
        heita: '空间站「黑塔」',
        beiluoboge: '贝洛伯格',
        wengfaluosi: '翁法罗斯',
        gongsi: '星际和平公司',
        yishilvren: '异世旅人',
        xinx_liuying: "旧杏流萤",
        xinx_liuying_prefix: '旧杏',
        xinxnew_liuying: "杏流萤",
        xinxnew_liuying_prefix: '杏',
        xinx_jingliu: '杏镜流',
        xinx_jingliu_prefix: '杏',
        xinx_ren: '杏刃',
        xinx_ren_prefix: '杏',
        xinx_zhigengniao: '杏知更鸟',
        xinx_zhigengniao_prefix: '杏',
        xinx_huahuo: '杏花火',
        xinx_huahuo_prefix: '杏',
        xinx_qiong: '杏穹',
        xinx_qiong_prefix: '杏',
        xinx_qiong_shadow1: '记忆',
        xinx_qiong_shadow2: '同谐',
        xinx_qiong_shadow3: '存护',
        xinx_mimi: '杏迷迷',
        xinx_mimi_prefix: '杏',
        xinx_luocha: '杏罗刹',
        xinx_luocha_prefix: '杏',
        xinx_ruanmei: '杏阮梅',
        xinx_ruanmei_prefix: '杏',
        xinx_xier: '杏希儿',
        xinx_xier_prefix: '杏',
        xinx_yinglang: '杏银狼',
        xinx_yinglang_prefix: '杏',
        xinx_huangquan: '杏黄泉',
        xinx_huangquan_prefix: '杏',
        xinx_daheita: '杏大黑塔',
        xinx_daheita_prefix: '杏',
        xinx_wangguiren: '杏忘归人',
        xinx_wangguiren_prefix: '杏',
        xinx_xiadie: '杏遐蝶',
        xinx_xiadie_prefix: '杏',
        xinx_Pollux: '玻吕刻斯',
        xinx_tuopa: '杏托帕',
        xinx_tuopa_prefix: '杏',
        xinx_luanpo: '杏乱破',
        xinx_luanpo_prefix: '杏',
        xinx_feixiao: '杏飞霄',
        xinx_feixiao_prefix: '杏',
        xinx_hanya: '杏寒鸦',
        xinx_hanya_prefix: '杏',
        xinx_xingqiri: '杏星期日',
        xinx_xingqiri_prefix: '杏',
        xinx_guinaifen: '杏桂乃芬',
        xinx_guinaifen_prefix: '杏',
        xinx_fuxuan: '杏符玄',
        xinx_fuxuan_prefix: '杏',
        xinx_kafuka: '杏卡芙卡',
        xinx_kafuka_prefix: '杏',
        xinx_buluoniya: '杏布洛妮娅',
        xinx_buluoniya_prefix: '杏',
        xinx_yinyuejun: '杏饮月君',
        xinx_yinyuejun_prefix: '杏',
        xinx_sanyueqi: '杏三月七',
        xinx_sanyueqi_prefix: '杏',
        xinxmeng_liuying: '华流萤',
        xinxmeng_liuying_prefix: '华',
        xinx_tilixibiesi: '杏缇宝',
        xinx_tilixibiesi_prefix: '杏',
        xinx_baie: '杏白厄',
        xinx_baie_prefix: '杏',
        xinx_xilian: '杏昔涟',
        xinx_xilian_prefix: '杏',
        xinx_fengjin: '杏风堇',
        xinx_fengjin_prefix: '杏',
        xinx_changyeyue: '杏长夜月',
        xinx_changyeyue_prefix: '杏',
        xinx_kelvdela: '杏刻律德菈',
        xinx_kelvdela_prefix: '杏',
        xinx_xing: '杏星',
        xinx_xing_prefix: '杏',
        xinx_haiseyin: '杏海瑟音',
        xinx_haiseyin_prefix: '杏',
        xinx_sikeke: '杏丝柯克',
        xinx_sikeke_prefix: '杏',
        xinx_yeshunguang: '杏叶瞬光',
        xinx_yeshunguang_prefix: '杏',
        xinx_laite: '杏莱特',
        xinx_laite_prefix: '杏',
        xinx_tenghuang: '杏腾荒',
        xinx_tenghuang_prefix: '杏',
        xinx_xiao: '杏骁',
        xinx_xiao_prefix: '杏',
















        //技能翻译
        xinxyingshi: "萤誓",
        xinxyingshi_info: "锁定技。当你对一名被你标记的其他角色造成伤害时，你移除此标记并弃置其X张牌（X为其体力上限的一半，向上取整），获得其中的红色牌且可以使用之。否则你标记该角色。",
        xinxyingshix: "萤誓",
        xinxyingshix_info: "锁定技。当你对一名被你标记的其他角色使用牌时，你移除此标记并弃置其X张牌（X为其体力上限的一半，向上取整），获得其中的红色牌且可以使用之。否则你标记该角色。",
        xinxxinzhui: "星坠",
        xinxxinzhui_info: `锁定技。你每使用三张牌，若你未处于“完全燃烧”，你${get.poptip('xinx_tiqianhuihe')}，并进入“完全燃烧”：①使用红色牌无法被响应，且于结算后摸一张牌。②将${get.poptip('xinxyingshi')}的触发条件改为“对一名被你标记的其他角色使用牌时”。当你于此状态下造成3点伤害后，退出“完全燃烧”。`,
        xinxxiaguang: "罅光",
        xinxxiaguang_info: "当一张【杀】或单目标普通锦囊牌结算后，若你为此牌的使用者/目标，且对方未响应/你响应过此牌，你可以将一张牌当本回合使用过的牌使用（每回合每种牌名限一次）/令其将一张牌置于你的武将牌上。",
        xinxshuohua: "朔华",
        xinxshuohua_info: "其他角色的准备阶段，若你的武将牌上有牌，你观看牌堆顶三张牌并可以用武将牌上的牌替换其中任意张牌，若如此做，你选择获得其中一种花色的所有牌。然后你可以将武将牌上的所有牌当一张伤害值与响应牌数为X的冰【杀】使用（X为此牌对应的实体牌数）。",
        xinxzhili: "支离",
        xinxzhili_info: "出牌阶段限一次或你使用伤害牌时，你可以重铸任意张牌并失去1点体力，然后直到你下回合开始，你使用牌造成的伤害值和回复值+1。",
        xinxfandu: "返渡",
        xinxfandu_info: "锁定技。你的体力值每减少4点时，你选择一项并回复1点体力：1.对所有其他角色各造成1点伤害；2.使用一张牌，此牌可指定至多三名角色为目标，且你于结算后获得此牌。",
        xinxkaituo: "开拓",
        xinxkaituo_info: `锁定技。准备阶段或结束阶段，你失去因〖开拓〗获得的技能，选择切换为${get.poptip('mingtu_jiyi')}/${get.poptip('mingtu_tongxie')}/${get.poptip('mingtu_cunhu')}命途，并获得对应命途的技能。`,
        mingtu_tongxie: "同谐",
        mingtu_tongxie_info: "可获得的技能：<br/>「即奏」：当你获得此技能时，你可以观看一名其他角色的手牌，将其中一种花色的牌替换为牌堆中的等量红色牌，然后你获得被替换的牌。你或其失去以此法获得的牌时，从弃牌堆获得方块和红桃牌各一张。<br/>「梦醒」：一名角色的回合开始时，若当前回合为额外回合（发动来源须为本扩展角色），你可以令其的当前手牌不计入手牌上限。",
        mingtu_jiyi: "记忆",
        mingtu_jiyi_info: `可获得的技能：<br/>「唤灵」：当你获得此技能时，你召唤忆灵${get.poptip({
            id: "characterx_xinx_mimi",
            name: "迷迷",
            type: "character",
            dialog: "characterDialog",
        })}至一名角色的下家或为${get.poptip("characterx_xinx_mimi")}回复1点体力（若${get.poptip("characterx_xinx_mimi")}未受伤则增加1点体力上限）。<br/>「磁链」：当你/${get.poptip("characterx_xinx_mimi")}不因本技能获得牌时，${get.poptip("characterx_xinx_mimi")}/你摸一张牌。`,
        mingtu_cunhu: "存护",
        mingtu_cunhu_info: "可获得的技能：<br/>「筑珀」：当你获得此技能时，你与迷迷获得1枚珀石，并可以选择一名角色，直到你的下回合开始，其使用【杀】只能指定你为目标。<br/>「炎枪」：出牌阶段限一次，你可以将一张牌当不计入次数的【火攻】或火【杀】使用。若此牌造成过伤害，你获得1枚珀石。",
        xinxhuanling: "唤灵",
        xinxhuanling_info: `当你获得此技能时，你召唤忆灵${get.poptip("characterx_xinx_mimi")}至一名角色的下家或为${get.poptip("characterx_xinx_mimi")}回复1点体力（若${get.poptip("characterx_xinx_mimi")}未受伤则增加1点体力上限）。`,
        xinxcilian: "磁链",
        xinxcilian_info: `当你/${get.poptip("characterx_xinx_mimi")}不因本技能获得牌时，${get.poptip("characterx_xinx_mimi")}你摸一张牌。`,
        xinxhuoban: "伙伴",
        xinxhuoban_info: `蓄力技（0/4）。当${get.poptip({
            id: "characterx_xinx_qiong",
            name: "穹",
            type: "character",
            dialog: "characterDialog",
        })}的体力值减少1点后，你获得1点蓄力值。一名角色的结束阶段，你可以消耗4点蓄力值令一名其他角色获得一个额外回合，且本回合其造成伤害后，其可以令你对目标角色造成1点伤害。`,
        xinxjizou: "即奏",
        xinxjizou_info: "当你获得此技能时，你可以观看一名其他角色的手牌，将其中一种花色的牌替换为牌堆中的等量红色牌，然后你获得被替换的牌。你或其失去以此法获得的牌时，从弃牌堆获得方块和红桃牌各一张。",
        xinxmengxing: "梦醒",
        xinxmengxing_info: "一名角色的回合开始时，若当前回合为额外回合（发动来源须为本扩展角色），你可以令其的当前手牌不计入手牌上限。",
        xinxmengxing_tag: "梦醒",
        xinxjizou_tag: "即奏 上限",
        xinxzhupo: "筑珀",
        xinxzhupo_info: `当你获得此技能时，你与迷迷获得1枚${get.poptip('xinx_poshi')}，并可以选择一名角色，直到你的下回合开始，其使用【杀】只能指定你为目标。`,
        xinxyanqiang: "炎枪",
        xinxyanqiang_info: `出牌阶段限一次，你可以将一张牌当不计入次数的【火攻】或火【杀】使用。若此牌造成过伤害，你获得1枚${get.poptip('xinx_poshi')}。`,
        xinx_poshi: "珀石",
        xinx_poshi_info: "当你受到伤害后，你移去一枚“珀石”，回复1点体力。",
        xinxpojie: "破解",
        xinxpojie_info: `出牌阶段限一次或结束阶段，你可以令一名其他角色展示所有手牌，根据其区域内缺少的花色数获得对应弱点:<ba>大于1：其获得${get.poptip('xinxpojie_huo')}/${get.poptip('xinxpojie_lei')}/${get.poptip('xinxpojie_feng')}/${get.poptip('xinxpojie_bing')}/${get.poptip('xinxpojie_wuli')}中随机一个未拥有的弱点。<ba>大于2：其获得一个${get.poptip('xinxpojie_xushu')}弱点。<ba>大于3：其获得一个${get.poptip('xinxpojie_liangzi')}弱点。`,
        xinxhairu: "骇入",
        xinxhairu_info: "限定技，每轮开始时，你可以选择一名有弱点的其他角色。你移除其一个弱点，摸X张牌（X为其当前弱点类型数），然后从X个限定技中选择一个替换其武将牌上的一个技能。",
        xinxhuiyi: "晦翼",
        xinxhuiyi_info: "当你使用伤害牌时，你失去1点体力。当你使用的牌被抵消后，你可以失去任意点体力，视为使用等量张同名同属性的牌。",
        xinxxsusheng: "苏生",
        xinxxsusheng_info: `锁定技。当你或你的上下家体力值变化1点后，你获得1点新蕊。当新蕊达到你的体力上限时，你移去所有新蕊，增加1点体力上限并将手牌摸至体力上限，然后将武将牌切换为${get.poptip('xinxxPollux')}，于当前回合结束时获得一个额外回合。`,
        xinxxmingxi: "冥息",
        xinxxmingxi_info: `锁定技。当${get.poptip('xinxxPollux')}死亡时，你将武将牌切换回遐蝶，将体力值调整为切换前的数值，若小于1则调整为1，并依次展示牌堆顶，牌堆底的一张牌，使用之且至多展示等同你体力上限张牌。`,
        xinxxPollux: "玻吕刻斯",
        xinxxPollux_info: `玻吕刻斯的体力值为你的体力上限。拥有技能${get.poptip('xinxhuiyi')}。`,
        xinxsusheng: "苏生",
        xinxsusheng_info: `锁定技。游戏开始时，你获得随从${get.poptip('xinxxPollux')}。当你处于濒死状态时，你令${get.poptip('xinxxPollux')}死亡，然后你将体力回复至1点。`,
        xinxPollux: '玻吕刻斯',
        xinxPollux_info: `玻吕刻斯的体力值为你的体力上限。初始拥有4张手牌，拥有技能${get.poptip('xinxhuiyi')}。`,
        xinxmingxi: "冥息",
        xinxmingxi_info: `每回合限一次。当${get.poptip('xinxPollux')}死亡后，你选择执行一项，然后当前回合角色执行另一项：1.依次按序展示牌堆顶、牌堆底的一张牌，并使用之，直到此牌无法使用；2.依次交给你Y张装备牌，否则受到你造成的Y点伤害（Y为本回合剩余阶段数），其每以此法交给你一张牌，便减少1点所受的伤害。`,
        xinxyuejian: "月茧",
        xinxyuejian_info: `锁定技。当你或你的上下家体力值变化1点后，你获得1点新蕊。当新蕊达到你的体力上限时，你移去所有新蕊。若${get.poptip('xinxPollux')}未死亡，你增加1点体力上限，将手牌摸至体力上限，并将本体切换为随从${get.poptip('xinxPollux')}，于当前回合结束时获得一个额外回合。否则你获得随从${get.poptip('xinxPollux')}。`,
        xinxleizhi: "雷止",
        xinxleizhi_info: "当你使用牌指定其他角色为目标后，你令其明置一张手牌，且此牌结算期间，其无法使用明置的牌。",
        xinxleizhix: "雷止",
        xinxleizhix_info: "锁定技。当你使用牌指定其他角色为目标后，或成为其他角色使用牌的目标后，你令其明置一张手牌，且本回合内，其无法使用明置的牌。",
        visible_xinxleizhi: "明置",
        xinxcanmeng: "残梦",
        xinxcanmeng_info: "锁定技。你可以将一名角色的明置牌如手牌般使用或打出（不计入次数限制）。",
        xinxcanmengx: "残梦",
        xinxcanmengx_info: "锁定技。你可以将一名角色的明置牌如手牌般使用或打出（不计入次数限制且无法被响应）。",
        xinxjizhen: "集真",
        xinxjizhen_info: "一名角色的出牌阶段结束后，若场上至少有一名角色的手牌均明置，你摸两张牌并入幻。",
        xinxliaoduan: "缭断",
        xinxliaoduan_info: "结束阶段，若你本回合未造成过伤害，你令所有其他角色明置一张手牌，然后你摸X张牌并退幻（X为以此法明置的牌数）。",
        xinxyunjiu_tag: "运柩",
        xinxyunjiu: "运柩",
        xinxyunjiu_info: "每轮开始时，你摸体力上限张牌，然后将至多等量张牌标记为“柩”并置入牌堆。当有角色获得“柩”时，你选择一项并清空此牌的“柩”：1.摸X张牌；2.令其将至少X张牌标记为“柩”并置入牌堆（X为这些“柩”的牌名字数之和）。",
        xinxjiangxing: "将行",
        xinxjiangxing_info: "限定技。出牌阶段，你可以复活一名角色。该角色于其准备阶段从牌堆中获得一张“柩”，于结束阶段将所有牌标记为“柩”并置入牌堆，然后其死亡。",
        xinxqiongguan: "穷观",
        xinxqiongguan_info: "每轮每名角色限一次。一名角色体力值减少时，你可以使用X张于本轮进入过处理区的牌（X初始为0，你与其体力值/手牌数/装备区牌数每有一项相同，X便+1）。",
        xinxgeze: "格泽",
        xinxgeze_info: "准备阶段，你可以将体力值/体力上限/手牌数/装备区牌数中的一项调整至与一名其他角色相同，并与其横置。若差值大于2，你将体力值调整为2。",
        xinxkangxin: "亢心",
        xinxkangxin_info: "你不能使用牌名字数大于X的手牌。结束阶段，你摸X张牌（X为你本回合使用的牌数+1，至多为5）。",
        xinxzhuoshi: "濯世",
        xinxzhuoshi_info: `出牌阶段限一次。你可以将至多三张牌当${get.poptip('xinxnilin')}使用，每有一张实体牌，你本回合出杀上限/手牌上限/攻击范围便+1。`,
        xinxzhuhuo: "逐火",
        xinxzhuhuo_info: '锁定技。你不因本技能使用伤害牌的结算方式改为令其中一名目标角色将牌数调整至你的体力值，若其牌数未变化，你与其各受到1点无来源的火焰伤害。否则你可以使用其因此获得或失去的牌。',
        xinxzhuhuox: "逐火",
        xinxzhuhuox_info: '锁定技。你不因本技能使用伤害牌的结算方式改为将其中一名目标角色的牌数调整至0-X（X为你的体力上限）。若其牌数未变化，你对其造成1点火焰伤害。否则你可以使用其因此获得或失去的牌。',
        xinxfushi: "负世",
        xinxfushi_info: '每回合限一次。当其他角色成为一张非伤害牌的目标时，若此牌点数小于等于你的体力值，你可将此牌目标转移给你并视为受到1点无来源的火焰伤害。当你累计受到的伤害数大于存活人数时，你回复1点体力并入幻。',
        xinxyongjie: "永劫",
        xinxyongjie_info: `准备阶段，你从游戏外创造存活人数张【火杀】，你获得其中一张，其余洗入牌堆。你使用这些牌时不计入次数限制且摸一张牌。当你处于濒死状态时，你退幻，重置${get.poptip('xinxfushi')}，然后增加1点体力上限并将体力回复至1点。`,
        xinxjueying: '攫英',
        xinxjueying_info: '锁定技，牌堆顶的[X]张牌始终对你可见，你可以如手牌般使用或打出这些牌（X初始为1，至多为3）。',
        xinxjueyingc: '攫英',
        xinxjueyingc_info: '锁定技，牌堆顶和牌堆底的[X]张牌始终对你可见，你可以如手牌般使用或打出这些牌（X初始为1，至多为3）。',
        xinxjueyingt: '牌堆顶',
        xinxjueyingx: '牌堆底',
        xinxzhuodeng: "擢登",
        xinxzhuodeng_info: `当你第偶数次造成或受到伤害后，你令${get.poptip('xinxjueying')}的X+1。当你令一名角色进入濒死状态时，你将${get.poptip('xinxjueying')}的“牌堆顶”改为“牌堆顶和牌堆底”。`,
        xinxzhanshu: "战术",
        xinxzhanshu_info: `锁定技，你摸牌改为从${get.poptip('xinxzhuanshucardpile')}中摸牌，${get.poptip('xinxzhuanshucardpile')}拥有独立的弃牌堆。当这些牌被其他角色获得时，将其移入专属弃牌堆。`,
        xinxdashi: "大师",
        xinxdashi_info: `准备阶段/结束阶段，你摸一张牌，观看${get.poptip('xinxzhuanshuLibrary')}中随机三张牌，选择获得其中一张。然后你可以删去一张存在于游戏内来自${get.poptip('xinxzhuanshucardpile')}或${get.poptip('xinxzhuanshuLibrary')}的牌。`,
        xinxlinggan: "灵感",
        xinxlinggan_info: "你对自己使用牌结算后，你展示牌堆中随机一张未被记录的牌并记录此牌。你对其他角色使用牌结算后，若此牌的名字数与你记录牌的名字数相同，你移去一张名字数相同的记录牌，摸等同名字数张牌。",
        xinxjiegou: "解构",
        xinxjiegou_info: '当你于出牌阶段对其他角色使用牌结算后，可以令一名目标角色获得此牌。结束阶段，你令所有其他角色弃置于本回合获得的牌，然后你可以将这些张牌当名字数与之相同的基本牌或普通锦囊牌使用（每回合每种牌名限一次）。',
        xinxmingxinzhiyue_tag: "铭心",
        xinxyueding: "约定",
        xinxyueding_info: '准备阶段，你可以选择一名其他角色。直到你下回合开始，你与其可以将对方的手牌如手牌般使用或打出，且每以此法失去一张牌，失去者便摸一张牌。',
        xinxyueding_tag: "约定",
        xinxyishenweiju_tag: "炬",
        xinxtianqi: "天祈",
        xinxtianqi_info: '每轮开始时，你可将一名角色的一张牌当作【闪电】置入其判定区。当有角色因【闪电】受到伤害时，你可以防止此伤害并令其回复1点体力。',
        xinxhongzhu: "虹驻",
        xinxhongzhu_info: '结束阶段，你可用一个区域的牌交换本回合进入弃牌堆的牌。当你令其他角色回复体力后，你可以为此技能增加一个发动时机：当你受到伤害后/当你回复体力后/出牌阶段限一次。',
        xinxduoyi: "多艺",
        xinxduoyi_info: `锁定技。你的装备栏无副类别限制且上限为6。每轮开始时，你观看五张武将牌，选择一张转化为${get.poptip({
            id: "xinxduoyi_equip",
            name: "装备牌",
            type: "character",
            info: "1.此牌不具有花色和点数，且不为武器牌。<br>2.此牌的技能为该武将牌上除“主公技”标签外的技能。<br>3.此牌离开你的装备区时，改为放回武将牌堆。",
        })}置入你的装备区。`,
        xinxbashi: "把式",
        xinxbashi_info: `每回合限一次。当你失去装备区的一张牌时，你可以重铸一张牌，然后你下次发动${get.poptip('xinxduoyi')}时的可选择的武将牌数+1。`,
        xinxyiyu: "呓语",
        xinxyiyu_info: `一名角色的判定牌生效后，若你区域内有与此牌颜色相同的牌，你可以使用此判定牌。`,
        xinxbuli: "不离",
        xinxbuli_info: `锁定技，你的摸牌阶段改为摸3张牌并进行3次判定，若其中一张牌的判定过程中有角色体力值变化，你令${get.poptip('xinxbuli')}的判定次数+1并于结束阶段获得此判定牌。`,
        xinxyilian: "漪涟",
        xinxyilian_info: `每回合限一次。当你需要使用一张未以此法使用过的${get.poptip('xinx_jishipai')}时，你可以将你的一个阶段交给一名其他角色，调整其阶段顺序。然后你复制你的一个剩余阶段，调整你的阶段顺序并视为使用之。`,
        xinxyilian_phase: "漪涟",
        xinxguiren: "归刃",
        xinxguiren_info: `限定技。你可以将任意张牌当无距离次数限制的刺【杀】使用，此【杀】所需弃置牌数/伤害值改为实体牌牌数/描述中的带“伤害”字样的牌数。`,
        xinxzaixian: "再现",
        xinxzaixian_info: `你使用牌结算后，若结算期间有其他角色进入过濒死状态，你获得此期间内离开过区域的牌并于你下回合开始时重置${get.poptip('xinxguiren')}。`,
        xinxxianji: "先机",
        xinxxianji_info: `每回合限一次。当你使用牌结算后，若此牌类型为你本轮首次使用，你令一名角色执行一项：<br>1.将拥有的技能重置至游戏开始状态，并将牌数调整为4；<br>2.使用一张牌，并从三个描述包含“当你使用”的技能中选择一个获得之。`,
        xinxkejie: "克捷",
        xinxkejie_info: `限定技，一名角色的回合结束时，若${get.poptip('xinx_central')}花色数为4，你可以将其中至多4张牌分配给任意名角色。`,
        xinxzhuiyuan: "坠渊",
        xinxzhuiyuan_info: `转换技。阳，你以${get.poptip('xinx_yichushiyong')}牌；阴，你以${get.poptip('xinx_recastuse')}牌。`,
        xinxliuduan: "流断",
        xinxliuduan_info: `弃牌阶段结束时，若${get.poptip('xinx_central')}的牌数为游戏轮数，你删除${get.poptip('xinxzhuiyuan')}的当前项并获得对应移出/重铸过的牌。`,
        xinxqinchen_skill_block: "禁",
        xinxangang: "安港",
        xinxangang_info: `出牌阶段，你可以与一名角色拼点，且可以选择一名角色非手牌区的牌作为你的拼点牌。若其赢，其视为使用一张【桃】，否则你与其各视为使用一张【酒】。若此时${get.poptip('xinx_central')}含有3种花色，此技能本回合失效。`,
        xinxxunji: "循寂",
        xinxxunji_info: `结束阶段，你可令一名其他角色失去X点体力（X为其本回合回复过的体力值），然后你选择获得任意张${get.poptip('xinx_central')}的牌（剩余花色须含有3种）。`,
        xinxchuangshi: "创世",
        xinxchuangshi_info: `蓄力技（0/10）。你的蓄力点增加后，若不小于以下数值，你移出一名其他角色[1]张牌并执行当前最大值效果：<br>2.体力上限+1；<br>4.回复1点体力；<br>6.令可移出的牌数+1；<br>8.视为使用一张移出牌；<br>10.${get.poptip('xinx_ewaimopai')}+1，然后将此项替换为额定摸牌数+1，并清空蓄力点。`,
        xinxmingxin: "明心",
        xinxmingxin_info: `第一轮开始时，你令所有其他角色依次将随机一张手牌及牌堆顶的一张牌置于其武将牌上。`,
        xinxmingxinx: "明心",
        xinxmingxinx_info: `准备阶段，你令所有其他角色依次将随机一张手牌及牌堆顶的一张牌置于其武将牌上。`,
        xinxguichen: "归尘",
        xinxguichen_info: `其他角色不因使用失去除手牌区及判定区外的牌后，你获得之。你可以将其他角色非手牌区的非锦囊牌如手牌般使用或打出。`,
        xinxguichenx: "归尘",
        xinxguichenx_info: `其他角色不因使用失去除手牌区及判定区外的牌后，你获得之，并可对失去此牌的角色造成等量伤害。你可以将其他角色非手牌区的非锦囊牌如手牌般使用或打出。`,
        xinxlingxiao: "凌霄",
        xinxlingxiao_info: `你使用${get.poptip('xinx_jishipai')}指定其他角色为唯一目标后，将此牌置于其武将牌上，若其非手牌区的牌数大于4，你入幻。`,
        xinxlingxiaox: "凌霄",
        xinxlingxiaox_info: `你使用${get.poptip('xinx_jishipai')}指定其他角色为唯一目标后，将此牌置于其武将牌上，若其非手牌区的牌数大于4，你可以弃置其中X张牌并退幻（X为你本局游戏切换形态的次数）。`,
        xinxmosuo: "摩挲",
        xinxmosuo_info: `出牌阶段，你可以与一名其他角色同时重铸一张牌，因此获得的牌替换为【影】，然后本回合你仅能对其发动本技能且重铸牌数递增。若其中一方手牌【影】数不小于非【影】数，此技能本回合失效。你/其他角色的【影】视为雷【杀】/【毒】。`,
        xinxbeichan: "悲颤",
        xinxbeichan_info: `每回合限一次，有角色失去体力或受到伤害后，你声明一种类型或颜色，以观看牌背方式选择获得${get.poptip('xinx_central')}一张牌并使用之。若此牌类型或颜色与你声明的相同，你摸一张牌。`,
        xinxnewxinzhui: "星坠",
        xinxnewxinzhui_info: `限定技，一名角色回合开始时，你可以视为使用一张【火攻】，并将展示改为弃置，弃置同花色改为重铸同颜色。结算后，你分配此期间内区域变动过的牌。`,
        xinxnewyingshi: "萤誓",
        xinxnewyingshi_info: `你体力值变化后，重置${get.poptip('xinxnewxinzhui')}和使用牌的次数。当你需要弃置牌时，可以改为失去1点体力并发动${get.poptip('xinxnewxinzhui')}。`,
        xinxzhengrong: "峥嵘",
        xinxzhengrong_info: `每轮开始时，你可以将超出体力值的X点体力上限与等量张牌交给一名其他角色（X至多为2，你与其称为“同袍”），然后与其各摸等量的牌并令其获得本技能。`,
        xinxbahuang: "八荒",
        xinxbahuang_info: `锁定技。当你/同袍造成伤害后，同袍/你增加等量体力上限。同袍每三次造成伤害后，你对受伤角色造成等量伤害。`,
        xinxxuanren: "旋刃",
        xinxxuanren_info: `你可以打出一张【杀】来抵消【杀】并摸一张牌。若两者：颜色相同，你获得两者。花色相同，此后你失去此花色的牌时，你摸一张牌。`,
        xinxcuiren: "淬刃",
        xinxcuiren_info: `昂扬技，出牌阶段，你可以将一张牌当【杀】对自己使用。<br>${get.poptip("rule_jiang")}：你杀死一名角色后。`,






































    },
    //动态翻译
    dynamicTranslate: {
        xinxleizhi(player) {
            if (player.storage.xinxmeng) return lib.translate.xinxleizhix_info;
            return lib.translate.xinxleizhi_info;
        },
        xinxcanmeng(player) {
            if (player.storage.xinxmeng) return lib.translate.xinxcanmengx_info;
            return lib.translate.xinxcanmeng_info;
        },
        xinxzhuhuo(player) {
            if (player.storage.xinxzhuhuo) return lib.translate.xinxzhuhuox_info;
            return lib.translate.xinxzhuhuo_info;
        },
        xinxyingshi(player) {
            if (player.storage.xinxyingshi) return lib.translate.xinxyingshix_info;
            return lib.translate.xinxyingshi_info;
        },
        xinxmingxin(player) {
            if (player.storage.xinxmingxinx) return lib.translate.xinxmingxinx_info;
            return lib.translate.xinxmingxin_info;
        },
        xinxguichen(player) {
            if (player.storage.xinxmingxinx) return lib.translate.xinxguichenx_info;
            return lib.translate.xinxguichen_info;
        },
        xinxlingxiao(player) {
            if (player.storage.xinxmingxinx) return lib.translate.xinxlingxiaox_info;
            return lib.translate.xinxlingxiao_info;
        },
        xinxhongzhu(player) {
            let da = player.storage.xinxhongzhu_damage;
            let re = player.storage.xinxhongzhu_recover;
            let use = player.hasSkill('xinxhongzhu_use');
            // 基础时机
            let activeTimings = ["结束阶段"];
            // unshift 是加到最前面，push 是加到最后面
            if (use) activeTimings.unshift("出牌阶段限一次"); // 放在最前比较通顺
            if (da) activeTimings.push("当你受到伤害后");
            if (re) activeTimings.push("当你回复体力后");
            // 用 "/" 连接所有时机
            let currentTimingStr = activeTimings.join("/");
            let mainText = `${currentTimingStr}，你可用一个区域的牌交换本回合进入弃牌堆的牌。`;
            // 构建【还能解锁】的时机描述
            let missingTimings = [];
            // 检查哪些还没获得
            if (!da) missingTimings.push("当你受到伤害后");
            if (!re) missingTimings.push("当你回复体力后");
            if (!use) missingTimings.push("出牌阶段限一次");
            // 如果还有没解锁的，就加上后半段提示
            if (missingTimings.length > 0) {
                let missingStr = missingTimings.join("/");
                mainText += `当你令其他角色回复体力后，你可以为此技能增加一个发动时机：${missingStr}。`;
            } else {
            }
            return mainText;
        },
        xinxjueying(player, skill) {
            const num = player.storage[skill] || 1;
            let str;
            if (player.storage.xinxzhuoxiao) {
                str = '锁定技，牌堆顶和牌堆底的[X]张牌始终对你可见，你可以如手牌般使用或打出这些牌。';
            } else {
                str = '锁定技，牌堆顶的[X]张牌始终对你可见，你可以如手牌般使用或打出这些牌。';
            }
            // 3. 将模板中的 [X] 替换为实际数字
            return str.replace('[X]', '<span style="color:#ffee33">' + num + '</span>');
        },
        xinxbuli(player, skill) {
            const num = player.storage[skill] || 3;
            let str;
            str = `锁定技，你的摸牌阶段改为摸3张牌并进行${num}次判定，若其中一张牌的判定过程中有角色体力值变化，你令${get.poptip('xinxbuli')}的判定次数+1并于结束阶段获得此判定牌。`;
            return str;
        },
        xinxzhuiyuan(player) {
            const isYin = Boolean(player.storage.xinxzhuiyuan);
            const removed = player.storage.xinxliuduan_removed || [];
            const yangGone = removed.includes('yang');
            const yinGone = removed.includes('yin');

            if (yangGone && yinGone) return '<span class="greytext">（已失效）</span>';
            let res = '转换技。';
            if (yangGone) {
                // 情况1：阳 (灰色+删除线) 
                res += `<span class="greytext" style="text-decoration:line-through">阳：你以${get.poptip('xinx_yichushiyong')}牌</span>`;
            } else {
                if (!isYin) {
                    // 情况2：当前处于【阳】状态
                    res += `<span class="firetext"><b>阳</b>：你以${get.poptip('xinx_yichushiyong')}牌</span>`;
                } else {
                    // 情况3：当前处于【阴】状态
                    res += `阳：你以${get.poptip('xinx_yichushiyong')}牌`;
                }
            }
            res += '；';
            if (yinGone) {
                // 情况1：阴(灰色+删除线)
                res += `<span class="greytext" style="text-decoration:line-through">阴：你以${get.poptip('xinx_recastuse')}牌</span>`;
            } else {
                if (isYin) {
                    // 情况2：当前处于【阴】状态
                    res += `<span class="bluetext"><b>阴</b>：你以${get.poptip('xinx_recastuse')}牌</span>`;
                } else {
                    // 情况3：当前处于【阳】状态，阴未被删 
                    res += `阴：你以${get.poptip('xinx_recastuse')}牌`;
                }
            }
            return res + '。';
        },
        xinxqinchen(player) {
            const storage = player.storage.xinxqinchen_skill;
            let str = '转换技，你每回合使用的:';
            if (!storage) str += '<span class="bluetext">';
            str += '阳，首张【杀】不可被响应且伤害+1；';
            if (!storage) str += '</span>';
            if (storage) str += '<span class="bluetext">';
            str += '阴，前两张【杀】不计入次数限制。';
            if (storage) str += '</span>';
            return str;
        },
        xinxchuangshi(player) {
            // 获取当前的蓄力点数
            const currentCharge = (player.countCharge()) || 0;
            // 获取移出牌的数量
            const markNum = (player.countMark('xinxchuangshi_yichu'));
            const yichuNum = Math.max(markNum, 1);
            let level10Text;
            if (player.storage.xinxchuangshi_draw) {
                level10Text = "额定摸牌数+1";
            } else {
                level10Text = `${get.poptip('xinx_ewaimopai')}+1，然后将此项替换为额定摸牌数+1`;
            }
            // 组装并返回 HTML 字符串
            // #ffee33 (亮黄) 来高亮动态数字
            return `蓄力技（${currentCharge}/10）。你的蓄力点增加后，若不小于以下数值，你移出一名其他角色<span style="color:#ffee33">[${yichuNum}]</span>张牌并执行当前最大值效果：<br>2.体力上限+1；<br>4.回复1点体力；<br>6.令可移出的牌数+1；<br>8.视为使用一张移出牌；<br>10.${level10Text}，并清空蓄力点。`;
        },





    },

    //武将介绍
    characterIntro: {

    },
    //武将替换
    characterReplace: {
        xinx_liuying: ['xinx_liuying', 'xinxmeng_liuying', 'xinxnew_liuying'],

    },
    characterFilter: {//本体禁将

    },
    characterSubstitute: {//皮肤切换
        xinx_liuying: [
            ['xinx_liuying_shadow', ['ext:永夜之境/image/xinx_liuying_shadow.png']],
        ],
        xinx_qiong: [
            ['xinx_qiong_shadow1', ['ext:永夜之境/image/xinx_qiong_shadow1.png']],
            ['xinx_qiong_shadow2', ['ext:永夜之境/image/xinx_qiong_shadow2.png']],
            ['xinx_qiong_shadow3', ['ext:永夜之境/image/xinx_qiong_shadow3.png']],
        ],
        xinx_feixiao: [
            ['xinx_feixiao_shadow1', ['ext:永夜之境/image/xinx_feixiao_shadow1.png']],
            ['xinx_feixiao_shadow2', ['ext:永夜之境/image/xinx_feixiao_shadow2.png']],
            ['xinx_feixiao_shadow3', ['ext:永夜之境/image/xinx_feixiao_shadow3.png']],
            ['xinx_feixiao_shadow4', ['ext:永夜之境/image/xinx_feixiao_shadow4.png']],
            ['xinx_feixiao_shadow5', ['ext:永夜之境/image/xinx_feixiao_shadow5.png']],
            ['xinx_feixiao_shadow6', ['ext:永夜之境/image/xinx_feixiao_shadow6.png']],
        ],
        xinx_huangquan: [
            ['xinx_huangquan_shadow', ['ext:永夜之境/image/xinx_huangquan_shadow.png']],
        ],
        xinx_baie: [
            ['xinx_baie_shadow', ['ext:永夜之境/image/xinx_baie_shadow.png']],
        ],
        xinx_yeshunguang: [
            ['xinx_yeshunguang_shadow', ['ext:永夜之境/image/xinx_yeshunguang_shadow.png']],
        ],



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
    //技能
    skill: {
        //装备技能
        xinxqinchen_skill: {
            equipSkill: true,
            firstDo: true,
            zhuanhuanji: true,
            mark: true,
            marktext: "☯",
            onremove: true,
            init(player, skill) {
                player.storage.xinxqinchen_skill = false;
            },
            intro: {
                content(storage) {
                    if (storage) return "每回合使用的前两张【杀】不计入次数限制";
                    return "每回合使用的首张【杀】不可被响应且伤害+1";
                },
            },
            trigger: {
                player: "useCard",
            },
            forced: true,
            locked: false,
            filter(event, player) {
                if (player.hasSkill('xinxqinchen_skill_block')) {
                    return false;
                }
                if (event.card.name != "sha") {
                    return false;
                }
                const index = player
                    .getHistory("useCard", (evtx) => {
                        return evtx.card.name == "sha";
                    })
                    .indexOf(event);
                if (player.storage.xinxqinchen_skill) { return index == 0 || index == 1; }
                else { return index == 0; }
            },

            async content(event, trigger, player) {
                const index = player
                    .getHistory("useCard", (evtx) => {
                        return evtx.card.name == "sha";
                    })
                    .indexOf(trigger);
                if (index == 0 && !player.storage.xinxqinchen_skill) {
                    game.playAudio("../extension/永夜之境/audio/", 'xinxzhuhuo_xinx_baie_shadow' + [get.rand(1, 2)] + '.mp3');
                    game.log(trigger.card, "不可被响应");
                    await trigger.directHit.addArray(game.players);
                    game.log(trigger.card, "伤害+1");
                    if (typeof trigger.baseDamage != "number") {
                        trigger.baseDamage = 1;
                    }
                    trigger.baseDamage++;
                    player.addTempSkill("xinxqinchen_skill_block");
                    player.changeZhuanhuanji("xinxqinchen_skill");
                    return;
                }
                if (index >= 0 && player.storage.xinxqinchen_skill) {
                    trigger.addCount = false;
                    const stat = player.getStat().card,
                        name = trigger.card.name;
                    if (typeof stat[name] == "number") {
                        stat[name]--;
                        game.log(trigger.card, "不计入次数");
                    }
                    if (index == 1) {
                        player.changeZhuanhuanji("xinxqinchen_skill");
                        player.addTempSkill("xinxqinchen_skill_block");
                    }
                }
            },
            subSkill: {
                block: {
                    charlotte: true,
                    onremove: true,
                    mark: true,
                    intro: {
                        content: "【侵晨】已失效",
                    },
                }
            }
            /* mod: {
                cardUsable(card, player, num) {
                    if (card.name == "sha") return num += player.maxHp;
                },
            }, */
        },
        xinxjiyibiaoben_skill: {
            equipSkill: true,
            trigger: {
                player: "damageBegin4",
            },
            filter(event, player) {
                if (player.hasSkillTag("unequip2")) {
                    return false;
                }
                if (
                    event.source?.hasSkillTag("unequip", false, {
                        name: event.card ? event.card.name : null,
                        target: player,
                        card: event.card,
                    })
                ) {
                    return false;
                }
                return player.getEquip("xinxjiyibiaoben");
            },
            forced: true,
            async content(event, trigger, player) {
                const card = player.getEquip("xinxjiyibiaoben");
                await player.lose(card, "visible", ui.ordering);
            },
            subSkill: {
                lose: {
                    audio: "xinxjiyibiaoben_skill",
                    forced: true,
                    charlotte: true,
                    equipSkill: true,
                    firstDo: true,
                    trigger: {
                        player: "loseAfter",
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    filter: (event, player, name, card) => {
                        if (!card || card.name != "xinxjiyibiaoben") {
                            return false;
                        }
                        return !player.hasSkillTag("unequip2");
                    },
                    getIndex(event, player) {
                        const evt = event.getl(player);
                        const lostCards = [];
                        evt.es.forEach(card => {
                            const VEquip = evt.vcard_map.get(card);
                            if (VEquip?.name === "xinxjiyibiaoben") {
                                lostCards.add(VEquip);
                            }
                        });
                        return lostCards;
                    },
                    async content(event, trigger, player) {

                        const evt = trigger.getl(player);
                        const cards = evt.cards.filter(c => c.name == "xinxjiyibiaoben");

                        for (let card of cards) {
                            // 2: 清除标记 ===
                            // 这样当后续轮到 xinxzhanshu.guard 执行时，检查 isXinxCard 为 false，就会放过它
                            card.isXinxCard = false;
                            // 标记为已销毁 (配合 recycleCard 中的检查)
                            card.destroyed = true;
                            if (_status.xinxDiscard) _status.xinxDiscard.remove(card);
                            if (_status.xinxPile) _status.xinxPile.remove(card);
                        }
                        game.playAudio("../extension/永夜之境/audio/", 'xinxyuejian' + [get.rand(4, 5)] + '.mp3');
                        await player.gainMaxHp();
                        await player.recover();

                    },
                },
            },
        },
        //锦囊技能
        xinxyuheiyongwen_effect: {
            trigger: {
                player: 'phaseBefore',
            },
            forced: true,
            popup: false,
            firstDo: true,
            silent: true,
            charlotte: true,
            async content(event, trigger, player) {
                await player.draw();
                await player.chooseToDiscard('he', true)
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
            }

        },
        xinxjinshouzhi_restore: {
            trigger: {
                player: 'phaseBefore',
            },
            forced: true,
            popup: false,
            charlimit: true,
            onremove: true,
            async content(event, trigger, player) {
                const list = player.storage.xinxjinshouzhi_restore;
                if (list && Array.isArray(list)) {
                    list.forEach(info => {
                        // 检查目标还在，且技能名有效
                        if (info.target && info.target.isIn() && info.skill) {
                            info.target.addSkill(info.skill);
                            game.log(info.target, '的技能', `【${get.translation(info.skill)}】`, '恢复了');
                        }
                    });
                }
                // 清理数据
                player.storage.xinxjinshouzhi_restore = [];
                player.removeSkill('xinxjinshouzhi_restore');
            }
        },
        xinxxuanshi_effect_buff: {
            onremove: true,
            charlotte: true,
            enable: "chooseToUse",
            filter(event, player) {
                const targets = player.storage.xinxxuanshi_effect_buff;
                if (!targets || !targets.length) return false;
                // 必须至少有一个目标存活且有牌
                const hasValidTarget = targets.some(t => t.isIn() && t.countCards('hej') > 0);
                if (!hasValidTarget) return false;
                if (event.type == "wuxie") {
                    return false;
                }
                for (var name of ["shan"]) {
                    if (event.filterCard({ name: name, isCard: true }, player, event)) {
                        return true;
                    }
                }
                return false;
            },
            chooseButton: {
                dialog(event, player) {
                    var vcards = [];
                    for (var name of ["shan"]) {
                        var card = { name: name, isCard: true };
                        if (event.filterCard(card, player, event)) {
                            vcards.push(["基本", "", name]);
                        }
                    }
                    var dialog = ui.create.dialog("玄蚀", [vcards, "vcard"], "hidden");
                    dialog.direct = true;
                    return dialog;
                },
                backup(links, player) {
                    return {
                        filterCard: () => false,
                        selectCard: -1,
                        viewAs: {
                            name: links[0][2],
                            isCard: true,
                        },
                        popname: true,
                        async precontent(event, trigger, player) {
                            //const target = player.storage.xinxxuanshi_effect_buff;
                            game.playAudio("../extension/永夜之境/audio/", 'xinxxiaguang' + [get.rand(1, 2)] + '.mp3');
                            let targets = player.storage.xinxxuanshi_effect_buff;
                            let validTargets = targets.filter(t => t.isIn() && t.countCards('he') > 0);
                            if (!validTargets.length) return false;
                            let targetToDiscard;
                            if (validTargets.length === 1) {
                                targetToDiscard = validTargets[0];
                            } else {
                                const selResult = await player.chooseTarget(
                                    '【玄蚀】：请选择一名目标，弃置其一张牌并视为使用【闪】',
                                    (card, player, target) => {
                                        return _status.event.validTargets.includes(target);
                                    },
                                    true
                                ).set('validTargets', validTargets)
                                    .set('ai', t => -get.attitude(player, t))
                                    .forResult();
                                if (selResult.bool) {
                                    targetToDiscard = selResult.targets[0];
                                }
                            }

                            if (targetToDiscard) {
                                const cardResult = await player.choosePlayerCard(targetToDiscard, 'he', true)
                                    .set('prompt', `弃置${get.translation(targetToDiscard)}一张牌视为使用【闪】`).forResult();
                                if (cardResult.bool) {
                                    await targetToDiscard.discard(cardResult.cards[0]);
                                }
                            }

                        },
                    };
                },
                prompt(links, player) {
                    return `玄蚀：弃置其一张牌视为使用【闪】`;
                },
            },
            ai: {
                order: 3.4,
                respondShan: true,
                skillTagFilter(player, tag, arg) {
                    if (arg === "respond") {
                        return false;
                    }
                },
                result: {
                    player: 1,
                },
            },
            mark: true,
            intro: {
                content: function (storage) {
                    return '当需要使用【闪】时，可弃置' + get.translation(storage) + '一张牌视为使用之';
                }
            }

        },
        xinxxuanshi_effect_timer: {
            trigger: {
                player: "phaseJieshuBegin",
            },
            forced: true,
            onremove: true,
            charlotte: true,
            silent: true,
            forceDie: true,
            async content(event, trigger, player) {
                const source = player.storage.xinxxuanshi_timer;
                if (source && source.isIn()) {
                    // 只从源头的数组里移除自己
                    if (Array.isArray(source.storage.xinxxuanshi_effect_buff)) {
                        source.storage.xinxxuanshi_effect_buff.remove(player);
                        if (source.storage.xinxxuanshi_effect_buff.length > 0) {
                            source.markSkill('xinxxuanshi_effect_buff');
                        } else {
                            source.removeSkill('xinxxuanshi_effect_buff');
                            delete source.storage.xinxxuanshi_effect_buff;
                        }
                    } else {
                        source.removeSkill('xinxxuanshi_effect_buff');
                        delete source.storage.xinxxuanshi_effect_buff;
                    }

                    game.log(player, '的【玄蚀】效果结束');
                }
                player.removeSkill('xinxxuanshi_effect_timer');
                delete player.storage.xinxxuanshi_timer;
            }
        },
        xinxxuanshi_effect_source_timer: {
            trigger: {
                player: "phaseBegin",
            },
            forced: true,
            silent: true,
            charlotte: true,
            async content(event, trigger, player) {
                const targets = player.storage.xinxxuanshi_effect_buff;
                if (targets && targets.length > 0) {
                    for (let t of targets) {
                        if (t.isIn()) {
                            t.removeSkill('xinxxuanshi_effect_mark');
                            delete t.storage.xinxxuanshi_effect_mark;
                        }
                    }
                    game.log(player, '的【玄蚀】效果结束');
                }
                delete player.storage.xinxxuanshi_effect_buff;
                player.removeSkill('xinxxuanshi_effect_buff');
                player.removeSkill('xinxxuanshi_effect_clear');
                player.removeSkill('xinxxuanshi_effect_source_timer');
            }
        },
        xinxyishenweiju_skill: {
            charlotte: true,
            firstDo: true,
            mod: {
                cardname: function (card) {
                    if (get.itemtype(card) === "card" && card.hasGaintag("xinxyishenweiju_tag")) {
                        return "sha";
                    }
                },
                cardnature: function (card) {
                    if (get.itemtype(card) === "card" && card.hasGaintag("xinxyishenweiju_tag")) {
                        return "fire";
                    }
                },
                cardUsable: function (card, player, num) {
                    if (card.name === "sha" && card.cards && card.cards.length === 1 && card.cards[0].hasGaintag("xinxyishenweiju_tag")) {
                        return Infinity;
                    }
                    if (card.hasGaintag && card.hasGaintag("xinxyishenweiju_tag")) {
                        return Infinity;
                    }
                }
            }
        },
        xinxmingxinzhiyue_timer: {
            charlotte: true,
            onremove(player, skill) {
                const effectSkill = 'xinxmingxinzhiyue_effect';
                const list = player.storage[skill];
                if (list && list.length) {
                    for (let i = 0; i < list.length; i++) {
                        const p = list[i];
                        if (p && p.hasSkill(effectSkill)) {
                            // 移除效果技能
                            p.removeSkill(effectSkill);
                            // 清理关联目标
                            delete p.storage[effectSkill];
                            // 清理生成的虚拟牌
                            const cards = p.getCards('s', card => card.hasGaintag('xinxmingxinzhiyue_tag'));
                            game.deleteFakeCards(cards);
                        }
                    }
                }
                delete player.storage[skill];
            },
        },
        xinxmingxinzhiyue_effect: {
            sub: true,
            group: ["xinxmingxinzhiyue_effect_add", "xinxmingxinzhiyue_effect_remove", "xinxmingxinzhiyue_effect_use", "xinxmingxinzhiyue_effect_draw"],
            init(player, skill) {
                const target = player.storage[skill];
                const tag = "xinxmingxinzhiyue_tag";

                // 清理旧的
                const old = player.getCards("s", c => c.hasGaintag(tag));
                game.deleteFakeCards(old);

                if (target && target.isAlive() && target.countCards('h')) {
                    const fakes = game.createFakeCards(target.getCards("h"));
                    for (let i = 0; i < fakes.length; i++) {
                        // 绑定 ID
                        fakes[i]._cardid = target.getCards("h")[i].cardid;
                    }
                    player.directgains(fakes, null, tag);
                }
            },
            onremove(player, skill) {
                const toRemove = player.getCards("s", c => c.hasGaintag("xinxmingxinzhiyue_tag"));
                game.deleteFakeCards(toRemove);
            },
            mod: {
                aiOrder(player, card, num) {
                    // 判断是否为共享的虚拟牌
                    if (card.hasGaintag && card.hasGaintag('xinxmingxinzhiyue_tag')) {
                        // 基础加成：只要是共享牌，优先级就大幅提高 (+10)
                        let boost = 20;
                        return num + boost;
                    }
                }
            },
            // 3. 辅助技能：同步手牌变化
            subSkill: {
                add: {
                    sub: true,
                    trigger: {
                        global: ["gainEnd", "drawAfter", "cardsGotoOrderingEnd"],
                    },
                    silent: true,
                    filter(event, player) {
                        const target = player.storage['xinxmingxinzhiyue_effect'];
                        // 只有目标获得牌，且 getg 方法存在时才触发
                        // 在 filter 中，event 就是 trigger，所以这里用 event.getg 是对的
                        return target && event.player === target && typeof event.getg === 'function' && event.getg(target).length > 0;
                    },
                    content() {
                        const target = player.storage['xinxmingxinzhiyue_effect'];
                        const tag = "xinxmingxinzhiyue_tag";
                        const myFakes = player.getCards("s", c => c.hasGaintag(tag));
                        const gainedCards = (typeof trigger.getg === 'function') ? trigger.getg(target) : [];
                        // 找出对方新获得的牌（且我这里还没有假牌的）
                        const newCards = gainedCards.filter(real => {
                            return !myFakes.some(fake => fake._cardid == real.cardid);
                        });
                        if (newCards.length) {
                            const fakes = game.createFakeCards(newCards);
                            for (let i = 0; i < fakes.length; i++) {
                                fakes[i]._cardid = newCards[i].cardid;
                            }
                            player.directgains(fakes, null, tag);
                        }
                    }
                },
                remove: {
                    sub: true,
                    trigger: {
                        // 监听所有可能导致牌移动的事件
                        global: ["loseEnd", "equipEnd", "addJudgeEnd", "gainEnd", "loseAsyncEnd", "addToExpansionEnd"],
                    },
                    silent: true,
                    filter(event, player) {
                        const myFakes = player.getCards("s", c => c.hasGaintag("xinxmingxinzhiyue_tag"));
                        if (!myFakes.length) return false;

                        // 检查：是否有涉及到的牌是我的假牌对应的真牌？
                        // event.cards 是变动的牌
                        if (event.cards) {
                            return event.cards.some(real => myFakes.some(fake => fake._cardid == real.cardid));
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const target = player.storage['xinxmingxinzhiyue_effect'];
                        const tag = "xinxmingxinzhiyue_tag";
                        const myFakes = player.getCards("s", c => c.hasGaintag(tag));

                        // 目标当前的真牌ID列表
                        const targetRealIds = (target && target.isAlive()) ? target.getCards("h").map(c => c.cardid) : [];

                        // 找出失效的假牌（即：对方真手牌里已经没有这个ID了）
                        const toRemove = myFakes.filter(fake => !targetRealIds.includes(fake._cardid));

                        if (toRemove.length) {
                            // 借鉴 xinxqiyi 的强制刷新逻辑
                            if (player.isOnline2()) {
                                player.send((cards, p) => {
                                    cards.forEach(i => i.delete());
                                    if (p == game.me) ui.updatehl();
                                }, toRemove, player);
                            }
                            toRemove.forEach(i => i.delete());
                            if (player == game.me) ui.updatehl();
                        }
                    }
                },

                use: {
                    sub: true,
                    trigger: {
                        player: ["useCardBefore", "respondBefore"],
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    filter(event, player) {
                        const fakes = player.getCards("s", c => c.hasGaintag("xinxmingxinzhiyue_tag"));
                        return event.cards && event.cards.some(c => fakes.includes(c));
                    },
                    async content(event, trigger, player) {
                        const target = player.storage['xinxmingxinzhiyue_effect'];
                        if (!target) return;

                        const tag = "xinxmingxinzhiyue_tag";
                        const realCards = target.getCards("h");

                        // 1. 替换逻辑
                        const newCards = []; // 存放找到的真牌
                        const fakeCardsToRemove = []; // 存放用掉的假牌

                        for (let card of trigger.cards) {
                            if (card.hasGaintag(tag)) {
                                const real = realCards.find(c => c.cardid == card._cardid);
                                if (real) {
                                    newCards.push(real);
                                    fakeCardsToRemove.push(card);
                                }
                            } else {
                                newCards.push(card);
                            }
                        }

                        // 如果替换列表数量不对，说明有牌失效了（没找到真牌）
                        if (newCards.length !== trigger.cards.length) {
                            trigger.cancel();
                            trigger.untrigger();
                            player.popup("失效");
                            // 触发一次清理
                            lib.skill.xinxmingxinzhiyue_effect.subSkill.remove.content();
                            return;
                        }
                        trigger.cards = newCards;
                        trigger.card.cards = newCards;
                        trigger.xinxmingxinzhiyue_active = true;
                        game.log(player, "使用了", target, "的手牌");
                        if (fakeCardsToRemove.length) {
                            if (player.isOnline2()) {
                                player.send((cards, p) => {
                                    cards.forEach(i => i.delete());
                                    if (p == game.me) ui.updatehl();
                                }, fakeCardsToRemove, player);
                            }
                            fakeCardsToRemove.forEach(i => i.delete());
                            if (player == game.me) ui.updatehl();
                        }
                    }
                },
                // 摸牌逻辑
                draw: {
                    trigger: {
                        player: "loseAfter",
                    },
                    forced: true,
                    filter(event, player) {
                        const parent = event.getParent();
                        if (!parent || !parent.xinxmingxinzhiyue_active) return false;
                        const lostCards = event.getl(player).cards;
                        if (!lostCards) return false;
                        return lostCards.some(card => get.color(card) == 'red');

                    },
                    async content(event, trigger, player) {
                        let num = 0;
                        const lostCards = trigger.getl(player).cards;
                        for (let i = 0; i < lostCards.length; i++) {
                            if (get.color(lostCards[i]) == 'red') num++;
                        }
                        if (num > 0) {
                            game.log(player, '因失去红色牌，触发【铭心之约】');
                            await player.draw(num);
                        }
                    }
                }
            }
        },
        //人物技能
        xinxyingshix: {
            audio: "ext:永夜之境/audio:3",
            "audioname2": {
                xinx_liuying: "xinxyingshi",
                xinx_liuying_shadow: "xinxyingshi",
            },
        },
        xinxyingshi: {
            audio: "ext:永夜之境/audio:3",
            audioname: ["xinx_liuying_shadow"],
            // logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyingshi" + index + ".mp3"  : "ext:永夜之境/audio/xinxyingshi" + get.rand(1, 2,3) + ".mp3"),
            trigger: {
                player: "useCardToPlayered",
                source: "damageBegin1",
            },
            filter(event, player) {
                const count = player.storage.xinxxinzhuiCount;
                if (event.player === event.target) return false;
                if (count == 0 && event.name == "useCardToPlayered") return false;
                if (count > 0 && event.name == "damage") return false;
                return true;
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
                const target = (trigger.name == "useCardToPlayered" ? trigger.target : trigger.player);
                // player.logSkill("xinxyingshi", target, null, null, [get.rand(1, 3)]);
                player.logSkill("xinxyingshi", target);
                if (target.hasMark("xinxyingshi") && target.countCards("he")) {
                    const num = Math.ceil(target.maxHp / 2);
                    const result =
                        await player.discardPlayerCard(target, "he", true, num).forResult();
                    const cards = result.links
                        .filter(i => get.color(i) == "red");
                    if (cards.length) {
                        await target.clearMark("xinxyingshi", false)
                        await player.gain(cards, "gain2");
                        const list = cards.slice(); // 复制卡牌列表
                        const card = list.filter(card => player.hasUseTarget(card));
                        //list.some(card => player.hasUseTarget(card))&&
                        while (card.length > 0) {
                            const result = await player
                                .chooseToUse(function (card, player, event) {
                                    return cards.includes(card) & lib.filter.filterCard.apply(this, arguments);
                                }, "萤誓：是否使用其中的一张牌？")
                                .set("addCount", false)
                                .set("complexSelect", true)
                                //.set("logSkill", ["xinxyingshi", null, null, null, [get.rand(4, 5)]])
                                .set("logSkill", ["xinxyingshi"])
                                .set("filterTarget", function (card, player, target) {
                                    return lib.filter.targetEnabled.apply(this, arguments);
                                })
                                .forResult();
                            if (result.card) {
                                card.length--;
                            }
                            else break;
                            ;
                        }
                    }
                } else { await target.addMark("xinxyingshi", 1, false); }
                //target.hasMark("xinxyingshi") ? null : await target.addMark("xinxyingshi", 1, false);

            },
            markimage: 'extension/永夜之境/image/mark/xinxyingshi.png',
            intro: {
                "name2": "来自流萤",
                markcount: () => 0,
                content: "已被流萤标记",
            },

        },
        xinxxinzhui: {
            init(player) {
                player.storage.xinxxinzhuiCount = 0;
            },
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxxinzhui" + index + ".mp3" : 2),
            trigger: {
                player: "useCard",
            },
            filter(event, player) {
                const num = player.countMark("xinxxinzhui_length");
                return num % 3 == 0 && player.storage.xinxxinzhuiCount == 0;
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
                ui.background.setBackgroundImage('extension/永夜之境/image/background/liuying.png');
                player.logSkill("xinxxinzhui", null, null, null, [get.rand(1, 2)]);
                player.clearMark("xinxxinzhui_length", false);
                player.storage.xinxxinzhuiCount++;
                player.storage.xinxyingshi = true;
                player.changeSkin({ characterName: "xinx_liuying" }, "xinx_liuying_shadow");
                player.addSkill(event.name + "_mark");
                player.addSkill(event.name + "_da");
                await player.addSkill(event.name + "_draw");
                if (!player.hasSkill('xinxxinzhui_used')) { player.addMark('xinxxinzhui_ins', 1, false); }

            },
            group: ["xinxxinzhui_skip", "xinxxinzhui_ins", "xinxxinzhui_length"],
            subSkill: {
                length: {
                    trigger: {
                        player: "useCard",
                    },
                    filter(event, player) {
                        return player.storage.xinxxinzhuiCount == 0;
                    },
                    firstDo: true,
                    silent: true,
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        player.addMark('xinxxinzhui_length', 1, false);
                    },
                    markimage: 'extension/永夜之境/image/mark/xinxxinzhui_length.png',
                    intro: {
                        "name2": "萤誓",
                        content: "已使用第#张牌",
                    },
                },
                mark: {
                    trigger: {
                        source: "damageSource",
                        player: "dieBegin",
                    },
                    filter(event, player) {
                        return player.storage.xinxxinzhuiCount > 0;
                    },
                    forced: true,
                    popup: false,
                    silent: true,
                    async content(event, trigger, player) {
                        if (trigger.name == "damage") {
                            player.addMark('xinxxinzhui_mark', trigger.num, false);
                            if (player.countMark('xinxxinzhui_mark') >= 3) {
                                ui.background.setBackgroundImage("image/background/" + lib.config.image_background + ".jpg");
                                player.logSkill("xinxxinzhui", null, null, null, [get.rand(3, 4)]);
                                player.storage.xinxxinzhuiCount = 0;
                                delete player.storage.xinxyingshi;
                                player.changeSkin({ characterName: "xinx_liuying" }, "xinx_liuying");
                                player.clearMark('xinxxinzhui_mark', false);
                            }
                        } else { ui.background.setBackgroundImage("image/background/" + lib.config.image_background + ".jpg"); }
                    },
                    markimage: 'extension/永夜之境/image/mark/xinxxinzhui_mark.png',
                    intro: {
                        "name2": "星坠",
                        content: "已造成#点伤害",
                    },
                },
                da: {
                    trigger: {
                        player: "damageEnd",
                    },
                    filter(event, player) {
                        return player.storage.xinxxinzhuiCount > 0;
                    },
                    forced: true,
                    popup: false,
                    supercharlotte: true,
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxxinzhui' + [get.rand(5, 6)] + '.mp3');
                    },
                },
                draw: {
                    forced: true,
                    trigger: {
                        player: "useCard",
                    },
                    filter(event, player) {
                        return get.color(event.card) == "red" && player.storage.xinxxinzhuiCount > 0;
                    },
                    async content(event, trigger, player) {
                        trigger.directHit.addArray(game.players);
                        game.log(trigger.cards, "不可被响应");
                        player.when({ global: 'useCardAfter' })
                            .filter(evt => evt.card === trigger.card)
                            .step(async (event, trigger, player) => {
                                await player.draw();
                            });

                    },
                },
                ins: {
                    trigger: {
                        global: "phaseEnd",
                    },
                    filter(event, player) {
                        return !player.hasSkill('xinxxinzhui_used') && player.countMark('xinxxinzhui_ins');
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    onremove: true,
                    async content(event, trigger, player) {
                        player.insertPhase();
                        player.addSkill('xinxxinzhui_used');
                    },
                    markimage: 'extension/永夜之境/image/mark/xinxxinzhui_ins.png',
                    intro: {
                        markcount: () => 0,
                        content: "跳过下一个回合",
                    },
                },
                used: {
                    charlotte: true,
                    sub: true,
                    sourceSkill: "xinxxinzhui",
                    "_priority": 0,
                },
                skip: {
                    trigger: {
                        player: "phaseBefore",
                    },
                    filter(event, player) {
                        return !player.isTurnedOver() && !_status.event.getParent('phase').skill && player.countMark('xinxxinzhui_ins');
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        if (player.hasSkill('xinxxinzhui_used')) {
                            player.removeSkill('xinxxinzhui_used');
                            player.clearMark('xinxxinzhui_ins', false);
                            trigger.cancel();
                            game.log(player, "跳过了回合");
                        }
                    }
                },
            }
        },
        xinxxiaguang: {
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxxiaguang" + index + ".mp3" : 2),
            trigger: {
                global: "useCardAfter",
            },
            filter(event, player) {
                const { card, targets } = event;
                const info = get.info(card);
                if (get.name(card) === "sha") return true;
                if ((!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1))) return false;
                return player == event.player || targets.includes(player);
            },
            forced: true,
            popup: false,
            logTarget: function (event, player) {
                return player == event.player ? event.target : event.player;
            },
            check: function (event, player) {
                return get.attitude(player, player == event.player ? event.target : event.player) <= 0;
            },
            async content(event, trigger, player) {
                const target = (player == trigger.player ? trigger.targets[0] : trigger.player);

                const list = [];
                trigger.player.getHistory("useCard", function (evt) {
                    if (!player.getStorage("xinxxiaguang_mark").includes(evt.card.name)) return;
                    //if (!player.canUse(evt.card,target, false)) return;
                    // if (evt.card.name != "sha" && get.type(evt.card) != "trick") return;
                    if (evt.card.name == "sha" && evt.card.nature) list.add("sha:" + evt.card.nature);
                    else list.add(evt.card.name);
                });
                for (let i = 0; i < list.length; i++) {
                    if (list[i].indexOf("sha:") == 0) list[i] = ["基本", "", "sha", list[i].slice(4)];
                    else list[i] = [get.type(list[i]), "", list[i]];
                }
                const list2 = list.filter(info => !player.getStorage("xinxxiaguang_count").includes(info[2]));


                if (!target.hasHistory('useCard', evt => evt.respondTo && evt.respondTo[1] === trigger.card) &&
                    !target.hasHistory('respond', evt => evt.respondTo && evt.respondTo[1] === trigger.card)
                    && player == trigger.player && list2.length && player.countCards("hes")) {

                    player.logSkill("xinxxiaguang", [target], null, null, [get.rand(5, 6)]);
                    const result = await player.chooseButton(["罅光：是否将一张牌当做一张本回合使用的牌使用？", [list2, "vcard"]])
                        .set("ai", button => get.player().getUseValue({ name: button.link[2], nature: button.link[3] }, false))
                        .set("filterButton", button => {
                            return player.hasUseTarget({
                                name: button.link[2],
                                nature: button.link[3],
                                isCard: true,
                            });
                        }).forResult();
                    if (!result?.links?.length) return;
                    player.addSkill(event.name + "_add");
                    const card = { name: result.links[0][2], nature: result.links[0][3] };

                    game.broadcastAll(card => {
                        lib.skill.xinxxiaguang_backup.viewAs = card;
                    }, card);
                    await player.markAuto('xinxxiaguang_count', [card.name]);
                    const next = player.chooseToUse();
                    next.set("openskilldialog", "将一张牌当做" + get.translation(card) + "使用");
                    next.set("norestore", true);
                    next.set("addCount", false);
                    next.set("_backupevent", "xinxxiaguang_backup");
                    next.set("logSkill", ["xinxxiaguang", null, null, null, [get.rand(3, 4)]]);
                    next.set("custom", {
                        add: {},
                        replace: { window() { } },
                    });
                    next.backup("xinxxiaguang_backup");
                    await next;

                }

                if (player.hasHistory('useCard', evt => evt.respondTo && evt.respondTo[1] === trigger.card) ||
                    player.hasHistory('respond', evt => evt.respondTo && evt.respondTo[1] === trigger.card) && target.countCards("he")
                ) {
                    player.logSkill("xinxxiaguang", [target], null, null, [get.rand(1, 2)]);
                    const result2 =
                        await target.chooseCard("he", "将一张手牌置于" + get.translation(player) + "的武将牌上", true).forResult();
                    if (result2.bool) player.addToExpansion(result2.cards, target, "give").gaintag.add("xinxxiaguang");
                }

                player.when({ global: "phaseAfter" }).step(async () => {
                    delete player.storage.xinxxiaguang_count;
                });

            },
            markimage: 'extension/永夜之境/image/mark/xinxxiaguang.png',
            intro: {
                content: "expansion",
                markcount: "expansion",
            },
            group: ["xinxxiaguang_backup", "xinxxiaguang_mark"],
            subSkill: {
                backup: {
                    filterCard(card) {
                        return get.itemtype(card) == "card";
                    },
                    position: "hes",
                    filterTarget: function (card, player, target) {
                        return player.canUse(card, target);
                        // return lib.filter.targetEnabled(card, player, target) &&
                        //     lib.filter.targetInRange(card, player, target);
                    },
                    selectCard: 1,
                    check: card => 6 - get.value(card),
                    log: false,
                    sub: true,
                    sourceSkill: "xinxxiaguang",
                    "_priority": 0,
                    viewAs: {
                        name: "sha",
                        nature: undefined,
                    },
                },

                mark: {
                    charlotte: true,
                    trigger: {
                        global: "useCard",
                    },
                    filter(event, player) {
                        return !player.getStorage("xinxxiaguang_mark").includes(event.card.name) && get.type(event.card) != 'equip';
                    },
                    silent: true,
                    forced: true,
                    content() {
                        player.markAuto("xinxxiaguang_mark", [trigger.card.name]);
                        player.when({ global: "phaseAfter" }).step(async () => {
                            delete player.storage.xinxxiaguang_mark;
                        });
                    },
                }
            }


        },
        xinxshuohua: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxshuohua" + index + ".mp3" : 2),
            trigger: {
                global: "phaseZhunbeiBegin",
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                if (event.player == player) return false;
                return player.countCards("xs") > 0;
            },
            check(event, player) {
                return get.attitude(player, event.player) <= 0;
            },
            async content(event, trigger, player) {
                const cardsx = player.getCards("xs", card => !card._cardid);
                const cards = get.cards(3);
                const allCardss = [...cardsx, ...cards];


                // --- AI 预计算开始 ---
                let map = {};
                for (let i of allCardss) {
                    let suit = get.suit(i);
                    if (!map[suit]) map[suit] = [];
                    map[suit].push(i);
                }

                let getSuitValue = (suit) => {
                    let score = map[suit].length * 10;
                    for (let card of map[suit]) {
                        if (card.name == 'shan') score += 8;
                        if (card.name == 'bagua') score += 8;
                        if (card.name == 'wuxie') score += 7;
                        // 重点：如果这张牌目前在武将牌上，且属于目标花色，
                        // 我们依然计分，但 AI 会设法把它换到牌堆顶
                        if (get.value(card, player) > 6) score += 2;
                    }
                    return score;
                };

                let bestSuit = 'spade';
                let maxVal = -1;
                for (let s in map) {
                    let val = getSuitValue(s);
                    if (val > maxVal) {
                        maxVal = val;
                        bestSuit = s;
                    }
                }
                // --- AI 预计算结束 ---
                player.logSkill("xinxshuohua", null, null, null, [get.rand(1, 2)]);
                const next = player.chooseToMove('朔华：替换其中任意张牌', true);
                next.set('list', [['牌堆顶', cards], ['你武将牌上的牌', player.getCards("xs", card => !card._cardid)]]);
                next.set('filterMove', (from, to) => typeof to != 'number');
                next.set('filterOk', moved => moved[1].some(i => !get.event().player.getCards("xs", card => !card._cardid).includes(i)));
                next.set('oldXs', cardsx);
                next.set('bestSuit', bestSuit);
                next.set('processAI', list => {
                    const bestSuit = get.event().bestSuit;
                    let all = [...list[0][1], ...list[1][1]];

                    // 策略：把所有属于 bestSuit 的牌挪到 list[0] (牌堆顶)
                    // 这样稍后 gain 的时候，这些牌会从牌堆消失，而武将牌(list[1])则保留了非目标花色的牌
                    let targetTop = all.filter(c => get.suit(c) == bestSuit);
                    let others = all.filter(c => get.suit(c) != bestSuit);

                    let finalTop = targetTop.slice(0, 3); // 牌堆顶只能放3张
                    let finalXs = targetTop.slice(3).concat(others); // 剩下的放回武将牌

                    // 如果牌堆顶不满3张，用价值最低的牌填补
                    while (finalTop.length < 3 && finalXs.length > 0) {
                        finalTop.push(finalXs.pop());
                    }

                    return [finalTop, finalXs];
                });
                const result = await next.forResult();
                if (result.bool) {
                    event.forceDie = true;
                    const moved = result.moved[0];
                    const hs = player.getCards("xs", card => !card._cardid);
                    let lose = [], gain = cards.slice();
                    for (const i of moved) {
                        if (hs.includes(i)) lose.push(i);
                        else gain.remove(i);
                    }
                    if (lose.length) await player.lose(lose.slice().reverse(), ui.cardPile, 'insert');
                    if (gain.length) {
                        const next = player.addToExpansion(gain);
                        next.gaintag.add("xinxxiaguang");
                        await next;
                    }

                    for (const i of moved.slice().reverse()) {
                        if (!(('hejsdx').includes(get.position(i, true)))) {
                            i.fix();
                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                        }
                    }
                    game.updateRoundNumber();
                }

                const list = [],
                    gainMap = {};
                for (let i of allCardss) {
                    var suit = get.suit(i);
                    if (!gainMap[suit]) gainMap[suit] = [];
                    gainMap[suit].push(i);
                }
                const dialog = ["选择获得一种花色的所有牌"];
                for (let suit of lib.suit) {
                    if (gainMap[suit]) {
                        dialog.push('<div class="text center">' + get.translation(gainMap[suit]) + "</div>");
                        dialog.push(gainMap[suit]);
                        list.push(suit);
                    }
                }
                if (list.length) {
                    const result = await player.chooseControl(list, "cancel2")
                        .set("dialog", dialog)
                        .set("list", list)
                        .set("bestSuit", bestSuit)// 将预选花色传入对话框事件
                        .set("ai", () => {
                            // 使用预计算的最优花色
                            return _status.event.bestSuit;
                        })
                        .forResult();

                    if (result.control != "cancel2") {
                        event.cards2 = allCardss.filter(function (i) {
                            return get.suit(i) == result.control;
                        });
                        await player.gain(event.cards2, "gain2");
                        let num = player.getExpansions("xinxxiaguang").length;
                        if (player.countCards("xs") > 0 && game.hasPlayer(function (target) {
                            return (
                                player.inRange(target)
                            );
                        })) {
                            const result =
                                await player.chooseBool(`朔华：是否将武将牌上的${num}张牌当做一张冰【杀】使用?`)
                                    .set("choice")
                                    .set("ai", () => {
                                        const player = get.player();
                                        return player.getExpansions("xinxxiaguang").length > 2;
                                    }).forResult();
                            if (result.bool) {
                                //await player.loseHp();
                                player.addTempSkill('xinxshuohua_effect');
                                player.logSkill("xinxshuohua", null, null, null, [get.rand(4, 5)]);
                                const next = player.chooseToUse();
                                next.set("openskilldialog", "【朔华】:将武将牌上的所有牌当一张冰【杀】使用");
                                next.set("_backupevent", "xinxshuohua_backup");
                                next.set("oncard", () => {
                                    const evt = get.event();
                                    evt.baseDamage = evt.cards.length;
                                });
                                next.backup("xinxshuohua_backup");
                                next.set("logSkill", ["xinxshuohua", null, null, null, [3]]);
                                await next;
                            }
                        }
                    }
                }
            },
            subSkill: {
                backup: {
                    filterCard: (card) => get.itemtype(card) == "card",
                    selectCard: -1,
                    position: "xs",
                    filterTarget: function (card, player, target) {
                        if (!card) return false;
                        if (!target || !target.isIn()) return false;
                        let event = _status.event,
                            evt = event.getParent("chooseToUse");
                        if (get.itemtype(evt) !== "event") evt = event;
                        if (event._backup && event._backup.filterCard == lib.filter.filterCard && (!lib.filter.cardEnabled(card, player, event) || !lib.filter.cardUsable(card, player, evt))) return false;
                        if (event.addCount_extra) {
                            if (!lib.filter.cardUsable2(card, player) && !game.checkMod(card, player, target, false, "cardUsableTarget", player)) return false;
                        }
                        var info = get.info(card);
                        if (info.singleCard && info.filterAddedTarget && ui.selected.targets.length) return Boolean(info.filterAddedTarget(card, player, target, ui.selected.targets[ui.selected.targets.length - 1]));
                        //    return lib.filter.targetEnabled.apply(this, arguments);
                        return lib.filter.targetEnabledx(card, player, target) && lib.filter.targetInRange(card, player, target);

                    },
                    viewAs: {
                        name: "sha",
                        nature: "ice",
                    },
                    prompt: "将武将牌上的所有牌当一张【杀】使用",
                    check(card) {
                        return 7 - get.value(card);
                    },
                },
                effect: {
                    trigger: {
                        player: "useCardToPlayered",
                    },
                    filter(event, player) {
                        return event.card.name == "sha" && !event.getParent().directHit.includes(event.target);
                    },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    logTarget: "target",
                    async content(event, trigger, player) {
                        const needNum = trigger.cards.length;
                        const id = trigger.target.playerid;
                        const map = trigger.getParent().customArgs;
                        if (!map[id]) map[id] = {};
                        if (typeof map[id].shanRequired == 'number') {
                            map[id].shanRequired = needNum;
                        }
                        else {
                            map[id].shanRequired = needNum;
                        }
                        await player.removeSkill('xinxshuohua_effect');
                    },
                },
                ai: {
                    "directHit_ai": true,
                    skillTagFilter(player, tag, arg) {
                        let needNum = trigger.cards.length;
                        if (arg.card.name != "sha" || arg.target.countCards("h", "shan") > needNum) return false;
                    },
                },
            }
        },
        xinxzhili: {
            init(player) {
                player.storage.xinxzhili = 0;
            },
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzhili" + index + ".mp3" : "ext:永夜之境/audio/xinxzhili" + get.rand(3, 4) + ".mp3"),
            enable: "phaseUse",
            trigger: {
                player: "useCard",
            },
            filter(event, player) {
                if (event.name == "chooseToUse") { return !player.hasSkill('xinxzhili_used') && player.countCards("he") };
                return get.tag(event.card, 'damage') > 0.5 && player.countCards("he");
            },
            check(event, player) {
                if (player.hp < 2 && !player.countCards("h", { name: ["tao", "jiu"] })) {
                    return false;
                }
                return true;
            },
            popup: false,
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseCard(get.prompt("xinxzhili"), "重铸任意张牌", [1, Infinity], "he", lib.filter.cardRecastable)
                    .set("ai", card => {
                        let player = get.player();
                        if (player.hp < 2 && !player.countCards("h", { name: ["tao", "jiu"] })) {
                            return false;
                        }
                        let val = get.value(card);
                        return 6 - val;
                    })
                    .setHiddenSkill("xinxzhili")
                    .forResult();
            },
            async content(event, trigger, player) {
                if (event.getParent(2).name == 'chooseToUse') {
                    const result = await player
                        .chooseCard(get.prompt("xinxzhili"), "重铸任意张牌", [1, Infinity], "he", lib.filter.cardRecastable)
                        .set("ai", card => {
                            let val = get.value(card);
                            return 6 - val;
                        })
                        .setHiddenSkill("xinxzhili")
                        .forResult();
                    if (result.bool) {
                        // player.logSkill("xinxzhili", null, null, null, [get.rand(3, 4)]);
                        player.addTempSkill('xinxzhili_used');
                        await player.recast(result.cards);
                        player.loseHp();
                        player.addMark('xinxzhili', 1, false);
                        player.addTempSkill('xinxzhili_effect', { player: "phaseBegin" });
                    }
                }
                else {
                    player.logSkill("xinxzhili", null, null, null, [get.rand(1, 2)]);
                    await player.recast(event.cards);
                    player.loseHp();
                    player.addMark('xinxzhili', 1, false);
                    player.addTempSkill('xinxzhili_effect', { player: "phaseBegin" });
                }

                player.when({ player: "phaseBegin" }).step(async () => {
                    player.clearMark('xinxzhili', false);
                });
            },
            ai: {
                order: 5,
                result: {
                    player(player) {
                        if (player.needsToDiscard(3) && !player.hasValueTarget({ name: "sha" }, false)) {
                            return -1;
                        }
                        if (player.hp < 3 && !player.countCards("h", { name: ["tao", "jiu"] })) {
                            return -1;
                        }
                        return 1;
                    },
                },
            },
            markimage: 'extension/永夜之境/image/mark/xinxzhili.png',
            mark: true,
            intro: {
                content: "伤害值和回复值+#",
            },
            group: "xinxzhili_effect",
            subSkill: {
                used: {
                    sub: true,
                    charlotte: true,
                    sourceSkill: "xinxzhili",
                    "_priority": 0,
                },
                effect: {
                    audio: ["ext:永夜之境/audio/xinxzhili5.mp3", "ext:永夜之境/audio/xinxzhili6.mp3"],
                    charlotte: true,
                    trigger: {
                        source: ["damageBegin1", "recoverBegin"],
                    },
                    forced: true,
                    logTarget: "player",
                    filter(event, player) {
                        //if (event.name == "damage") return event.card;
                        return player.countMark('xinxzhili') > 0 && event.card;
                    },
                    async content(event, trigger, player) {
                        // player.logSkill("xinxzhili", null, null, null, );
                        const num = player.countMark('xinxzhili');
                        trigger.num += num;
                    },

                    ai: {
                        damageBonus: true,
                    },
                    sub: true,
                    sourceSkill: "xinxzhili",
                    "_priority": 0,
                }
            },
        },

        xinxfandu: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxfandu" + index + ".mp3" : "ext:永夜之境/audio/xinxfandu" + get.rand(4, 5) + ".mp3"),
            trigger: {
                player: ["loseHpBegin", "damageBegin"],
            },
            filter(event, player) {
                return event.num > 0;
                // && player.getHp()<player.maxHp
            },
            forced: true,
            async content(event, trigger, player) {
                player.addMark('xinxfandu', trigger.num, false);

                if (player.countMark('xinxfandu') >= 4) {
                    const result = await player
                        .chooseButton([
                            get.prompt("xinxfandu"),
                            [
                                [
                                    ["damage", "对所有其他角色各造成1点伤害"],
                                    ["use", "使用一张牌，此牌可指定至多三名角色为目标，你于结算后获得此牌。"],
                                ],
                                "textbutton",
                            ],
                        ])
                        .set("filterButton", button => !(button.link === "use" && !player.countCards("hs")))
                        .set("ai", button => {
                            const player = get.player();
                            const hasDamageCard = player.countCards('hs', card => get.tag(card, 'damage') > 0);
                            if (player.getHp() < 3) {
                                return button.link === "damage" ? 1 : 0;
                            } else if (hasDamageCard) {
                                return button.link === "use" ? 1 : 0;
                            }
                            return button.link === "damage" ? 1 : 0;
                        })
                        .forResult();

                    if (result.bool) {
                        await player.recover();
                        player.clearMark('xinxfandu', false);
                        switch (result.links[0]) {
                            case "damage":
                                const targets = game.filterPlayer(current => current != player);
                                player.logSkill("xinxfandu", null, null, null, [1]);
                                if (targets.length) {
                                    player.line(targets);
                                    targets.forEach(target => target.damage());
                                }
                                break;
                            case "use":
                                player.logSkill("xinxfandu", null, null, null, [2]);
                                const result1 = await player
                                    .chooseToUse(function (card, player, event) {
                                        return lib.filter.filterCard.apply(this, arguments);
                                    }, "返渡：是否使用一张牌？")
                                    .set("selectTarget", [1, 3])
                                    .set("complexSelect", true)
                                    .set("logSkill", ["xinxfandu", null, null, null, [3]])
                                    .set("addCount", false)
                                    .forResult();

                                if (result1.bool) {
                                    // const target = result1.targets[0];
                                    const targets = result1.targets;
                                    await player.gain(result1.cards, "gain2");
                                    //  await   player.markAuto('xinxfandu_respond', result1.cards);
                                    // if (targets.length) {
                                    //     player.line(targets);
                                    //    // targets.forEach(target => target.damage());
                                    //     if (targets.hasHistory('respond', (evt) => evt.getParent(4) == event)) {
                                    //         await player.draw(2);
                                    //     }
                                    // }
                                }
                                break;
                        }
                    }

                }

            },
            init(player) {
                player.storage.xinxfandu = 0;
            },
            markimage: 'extension/永夜之境/image/mark/xinxfandu.png',
            mark: true,
            intro: {
                content: "已减少#点体力",
            },
            group: "xinxfandu_respond",
            subSkill: {
                respond: {
                    charlotte: true,
                    trigger: {
                        player: "useCardAfter",
                    },
                    forced: true,
                    popup: false,
                    filter(event, player) {

                        return player.getStorage("xinxfandu_respond").length &&
                            event.cards.filter(function (i) {
                                return player.getStorage("xinxfandu_respond").includes(i);
                            }).length > 0;
                    },
                    content() {
                        player.draw(2);
                        const list = trigger.cards.filter(function (i) {
                            return player.getStorage("xinxfandu_respond").includes(i);
                        });
                        player.unmarkAuto("xinxfandu_respond", list);
                    },
                }
            }
        },
        //开拓
        xinxkaituo: {
            derivation: ["xinxhuanling", "xinxcilian", "xinxjizou", "xinxmengxing", "xinxzhupo", "xinxyanqiang"],
            init(player) {
                game.addGlobalSkill("autoswap");
            },
            onremove(player) {
                for (let i of game.players) {
                    if (i.name === "xinx_mimi") i.die();
                }
            },
            audio: "ext:永夜之境/audio:3",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxkaituo" + index + ".mp3" : 2),
            trigger: {
                player: ["phaseZhunbeiBegin", "phaseJieshuBegin"],
            },
            forced: true,
            unique: true,
            popup: false,
            priority: 10,
            async content(event, trigger, player) {

                const button = [];
                if (!player.hasSkill('xinxhuanling')) {
                    button.push("xinx_qiong_shadow1");
                }
                if (!player.hasSkill('xinxjizou')) {
                    button.push("xinx_qiong_shadow2");
                }
                if (!player.hasSkill('xinxzhupo')) {
                    button.push("xinx_qiong_shadow3");
                }

                const skillsToRemove = ["xinxhuanling", 'xinxcilian', "xinxjizou", "xinxzhupo"];
                for (let skill of skillsToRemove) {
                    await player.removeSkill(skill);
                }



                const result = await player.chooseButton(["请选择切换的命途", [button, "character"]], true).set("ai", function (button) {
                    //return Math.random() - 1;
                    return button.link == "xinx_qiong_shadow1" ? 2 : 1;
                }).forResult();
                //await player.chooseButton(["请选择切换的命途", [button, "character"]], true).set("ai", function (button) {
                //  ["xinx_qiong_shadow1", "xinx_qiong_shadow2", "xinx_qiong_shadow3"]
                if (result.bool) {
                    switch (result.links[0]) {
                        case "xinx_qiong_shadow1":
                            player.logSkill("xinxkaituo", null, null, null, [1]);
                            player.changeSkin({ characterName: "xinx_qiong" }, "xinx_qiong_shadow1");
                            await player.addAdditionalSkills(event.name, ['xinxhuanling', 'xinxcilian']);
                            break;
                        case "xinx_qiong_shadow2":
                            player.logSkill("xinxkaituo", null, null, null, [2]);
                            player.changeSkin({ characterName: "xinx_qiong" }, "xinx_qiong_shadow2");
                            await player.addAdditionalSkills(event.name, ['xinxjizou', 'xinxmengxing']);
                            break;
                        case "xinx_qiong_shadow3":
                            player.logSkill("xinxkaituo", null, null, null, [3]);
                            player.changeSkin({ characterName: "xinx_qiong" }, "xinx_qiong_shadow3");
                            await player.addAdditionalSkills(event.name, ['xinxzhupo', 'xinxyanqiang']);
                            break;
                    }
                }
            },
            ai: {
                viewHandcard: true,
                skillTagFilter: function (player, tag, arg) {
                    const targets = game.filterPlayer();
                    for (const i of targets) {
                        if (!i.hasSkill('xinxkaituo_dead')) {
                            if (i == arg) return false;
                        }
                    }
                    if (player == arg) return false;
                },
            },
            // global: "xinxkaituo_global",
            group: ["xinxkaituo_die"],
            subSkill: {
                die: {
                    charlotte: true,
                    silent: true,
                    trigger: { global: "dieBegin" },
                    async content(event, trigger, player) {
                        if (trigger.player === player) lib.skill.xinxkaituo.onremove(player);
                        else {
                            let chars = game.players.slice();
                            chars.remove(player);
                            chars.remove(trigger.player);
                            chars = chars.map(i => i.name);
                            if (chars.every(i => i === "xinx_mimi") || chars.length === 0) {
                                player.when({ global: "dieAfter" })
                                    .step(async () => {
                                        game.over(true);
                                    });
                            }
                        }
                    },
                },
                dead: {
                    charlotte: true,
                    silent: true,
                    trigger: { player: "dieBegin" },
                    async content(event, trigger, player) {
                        game.removePlayer(player);
                        game.log(player, `被移出游戏`);
                    },
                },
                global: {
                    ai: {
                        effect: {
                            target(card, player, target2) {
                                const target = _status.currentPhase;
                                if (target?.hasSkill("xinxkaituo") && target !== player && get.tag(card, "recover")) return "zeroplayertarget";
                            },
                        },
                    },
                },
            },
        },
        //记忆
        xinxhuanling: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: "changeSkillsAfter",
            },
            forced: true,
            locked: false,
            popup: false,
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxhuanling" + index + ".mp3" : 2),
            filter(event, player) {
                return event.addSkill.includes("xinxhuanling");
            },
            async content(event, trigger, player) {
                var n = 0
                for (var i = 0; i < game.players.length; i++) {
                    if (['xinx_mimi'].includes(game.players[i].name)) {
                        n++
                    }
                }
                if (n > 0) {
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name === 'xinx_mimi') {
                            const target = game.players[i];
                            player.logSkill("xinxhuanling", [target], null, null, [get.rand(3, 4)]);
                            target.isDamaged() ? await target.recover() : await target.gainMaxHp();
                            break;
                        }
                    }
                }
                else {
                    //var fellow = game.addPlayer(player.getSeatNum(), "xinx_mimi").animate('start');
                    player.logSkill("xinxhuanling", null, null, null, [get.rand(1, 2)]);
                    const result = await player.chooseTarget(
                        "请选择召唤【迷迷】的位置",
                        "迷迷将出现在选定角色的下家",
                        true
                    ).set('ai', target => {
                        const player = get.player();
                        const closestEnemy = player.getNext(p => {
                            return get.attitude(player, p) < 0;
                        });
                        // 2. 匹配目标
                        // 如果找到了敌人，且当前 AI 正在评估的这个 target 正是那个最近的敌人
                        if (closestEnemy && target === closestEnemy) {
                            return 100;
                        }
                        if (target === player.next) return 50;
                        if (target == player) return 10;
                        return 2;
                        //return -get.attitude(player, target);
                    }).forResult();
                    let xinxQiong = game.findPlayer(current => current.name === "xinx_qiong");
                    if (result.bool) {
                        const target = result.targets[0];
                        const index = game.players.indexOf(target) + 1;
                        var fellow = game.addPlayer(index, 'xinx_mimi');

                        //var fellow = game.addPlayer(game.players.indexOf(player) + 1, 'xinx_mimi');
                        fellow.getId();
                        fellow.xinx_master = player;
                        fellow.host = player; // 保留原有的 host，以备其他用途

                        // 2. 身份与阵营同步 (修复重点)
                        // 同步身份
                        if (player.identity != 'zhu' || get.mode() === "doudizhu") fellow.identity = player.identity;
                        else fellow.identity = 'zhong';

                        // 同步阵营 (side)。
                        if (typeof player.side !== 'undefined') {
                            fellow.side = player.side;
                        }

                        fellow.node.identity.dataset.color = fellow.identity;
                        fellow.identityShown = true;
                        fellow.setIdentity(fellow.identity);

                        if (typeof player.ai.shown == 'number') fellow.ai.shown = player.ai.shown;

                        fellow.init('xinx_mimi');
                        fellow.draw(4);
                        fellow.addSkill("xinxkaituo_dead");
                        fellow.xinxkaituo = player;

                        // 3. AI 逻辑注入
                        if (!_status.xinx_ai_patch_installed) {
                            _status.xinx_ai_patch_installed = true;

                            // 修改 get.attitude (态度函数)
                            if (typeof get.attitude === 'function') {
                                const origin_attitude = get.attitude;
                                get.attitude = function (from, to) {
                                    if (!from || !to) return 0;
                                    // 情况1：自己人（主人、迷迷自己、或者主人的其他迷迷） -> 绝对喜欢 (10)
                                    if ((from.xinx_master || from) === (to.xinx_master || to)) return 10;
                                    // 情况2：迷迷看外人 -> 态度完全取决于主人看那个人的态度
                                    if (from.xinx_master) {
                                        return get.attitude(from.xinx_master, to);
                                    }
                                    return origin_attitude.apply(this, arguments);
                                };
                            }

                            // 修改 get.rawAttitude (底层态度函数，通常用于检测杀意)
                            if (typeof get.rawAttitude === 'function') {
                                const origin_rawAttitude = get.rawAttitude;
                                get.rawAttitude = function (from, to) {
                                    if (!from || !to) return 0;
                                    // 情况1：自己人 -> 绝对喜欢 (10)
                                    if ((from.xinx_master || from) === (to.xinx_master || to)) return 10;

                                    // 情况2：迷迷看外人 -> 代理给主人判断
                                    if (from.xinx_master) {
                                        return get.rawAttitude(from.xinx_master, to);
                                    }

                                    return origin_rawAttitude.apply(this, arguments);
                                };
                            }

                            // 修改队友判定 (防止南蛮入侵误伤)
                            if (typeof lib.element.player.isFriendOf === 'function') {
                                const origin_isFriendOf = lib.element.player.isFriendOf;
                                lib.element.player.isFriendOf = function (target) {
                                    if (!target) return false;
                                    if ((this.xinx_master || this) === (target.xinx_master || target)) return true;
                                    if (this.xinx_master && this.xinx_master.isFriendOf(target)) return true;
                                    return origin_isFriendOf.apply(this, arguments);
                                };
                                game.players.concat(game.dead).forEach(p => {
                                    p.isFriendOf = lib.element.player.isFriendOf;
                                });
                            }
                        }

                        for (let current of game.players) {
                            current.update();
                        }
                        game.updateRoundNumber();
                    }

                }
            },

        },
        xinxcilian: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                global: "gainEnd",
            },
            forced: true,
            filter: function (event, player) {
                const target = game.findPlayer(current => current.hasSkill("xinxkaituo_dead"));
                return target?.isIn() && event.getParent(2).name != "xinxcilian" && !event.numFixed && (event.player.name == 'xinx_mimi' || event.player == player);
            },
            async content(event, trigger, player) {
                const target = game.findPlayer(current => current.hasSkill("xinxkaituo_dead"));
                player.line(target);
                trigger.player == target ? await player.draw() : await target.draw();
            }
        },

        //迷迷
        xinxhuoban: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxhuoban" + index + ".mp3" : 2),
            trigger: {
                global: "phaseJieshuBegin",
            },
            chargeSkill: 4,
            filter(event, player) {
                return player.countCharge() > 3;
            },
            popup: false,
            async cost(event, trigger, player) {
                event.result = await player.chooseTarget('是否令一名其他角色获得一个额外回合？', lib.filter.notMe)
                    // .set("ai", target => get.attitude(get.player(), target))
                    .set("ai", target => target.name == "xinx_qiong" ? 1 : 0)
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                player.logSkill("xinxhuoban", target, null, null, [get.rand(1, 2)]);
                player.removeMark('charge', 4);
                target.insertPhase();
                target.addSkill("xinxhuoban_damage", { player: "phaseAfter" });
            },
            ai: {
                viewHandcard: true,
                skillTagFilter: function (player, tag, arg) {
                    const targets = game.filterPlayer();
                    for (const i of targets) {
                        if (!i.hasSkill('xinxkaituo')) {
                            if (i == arg) return false;
                        }
                    }
                    if (player == arg) return false;
                },
            },
            group: ["xinxhuoban_charge"],
            subSkill: {
                charge: {
                    trigger: {
                        global: "changeHp",
                    },
                    forced: true,
                    popup: false,
                    filter(event, player, name) {
                        return event.player.name == 'xinx_qiong' && event.num < 0;
                    },
                    content() {
                        player.logSkill("xinxhuoban", null, null, null, [get.rand(3, 4)]);
                        player.addCharge(1);
                    },
                    sub: true,
                    sourceSkill: "xinxhuoban",
                    "_priority": 0,
                },
                damage: {
                    trigger: {
                        source: "damageSource",
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return event.player.isIn();
                    },
                    async content(event, trigger, player) {
                        const
                            result
                                = await player.chooseBool("伙伴：是否令迷迷对" + get.translation(trigger.player) + "造成1点伤害？").set("choice", get.damageEffect(trigger.player, player, player) > 0).forResult();
                        if (result.bool) {
                            const target = game.findPlayer(current => current.hasSkill("xinxkaituo_dead"));
                            player.logSkill("xinxhuoban", null, null, null, [get.rand(1, 2)]);
                            target.line(trigger.player);
                            trigger.player.damage(target);
                        }
                        player.when({ global: "phaseEnd" }).step(async () => {
                            player.removeSkill("xinxhuoban_damage");
                        });
                    }

                }
            }
        },
        //同谐
        xinxjizou: {
            audio: "ext:永夜之境/audio:6",
            trigger: {
                player: "changeSkillsAfter",
            },
            //logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjizou" + index + ".mp3" : 2),
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjizou" + index + ".mp3" : "ext:永夜之境/audio/xinxjizou" + get.rand(1, 2) + ".mp3"),
            filter(event, player) {
                return event.addSkill.includes("xinxjizou");
            },
            async cost(event, trigger, player) {
                event.result = await player.chooseTarget(get.prompt2("xinxjizou"), lib.filter.notMe, (card, player, target) => {
                    return target.countCards('h')
                })
                    .set('ai', target => {
                        const player = get.player();
                        return get.attitude(player, target);
                    }).forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                await Promise.all(event.next);
                event.videoId = lib.status.videoId++;
                if (player.isUnderControl()) game.swapPlayerAuto(player);
                /**
                 * player选择target的一种花色的牌
                 * @param {Player} player
                 * @param {Player} target
                 */
                function chooseOneSuitCard(player, target, force = false, limit, str = "请选择一个花色的牌", ai = { bool: false }) {
                    const { promise, resolve } = Promise.withResolvers();
                    const event = _status.event;
                    event.selectedCards = [];
                    event.selectedButtons = [];
                    //对手牌按花色分类
                    let suitCards = Object.groupBy(target.getCards("h"), c => get.suit(c, target));
                    suitCards.heart ??= [];
                    suitCards.diamond ??= [];
                    suitCards.spade ??= [];
                    suitCards.club ??= [];
                    let dialog = (event.dialog = ui.create.dialog());
                    dialog.classList.add("fullheight");
                    event.control_ok = ui.create.control("ok", link => {
                        _status.imchoosing = false;
                        event.dialog.close();
                        event.control_ok?.close();
                        event.control_cancel?.close();
                        event._result = {
                            bool: true,
                            cards: event.selectedCards,
                        };
                        resolve(event._result);
                        game.resume();
                    });
                    event.control_ok.classList.add("disabled");
                    //如果是非强制的，才创建取消按钮
                    if (!force) {
                        event.control_cancel = ui.create.control("cancel", link => {
                            _status.imchoosing = false;
                            event.dialog.close();
                            event.control_ok?.close();
                            event.control_cancel?.close();
                            event._result = {
                                bool: false,
                            };
                            resolve(event._result);
                            game.resume();
                        });
                    }
                    event.switchToAuto = function () {
                        _status.imchoosing = false;
                        event.dialog?.close();
                        event.control_ok?.close();
                        event.control_cancel?.close();
                        event._result = ai();
                        resolve(event._result);
                        game.resume();
                    };
                    dialog.addNewRow(str);
                    let keys = Object.keys(suitCards).sort((a, b) => {
                        let arr = ["spade", "heart", "club", "diamond", "none"];
                        return arr.indexOf(a) - arr.indexOf(b);
                    });
                    //添加框
                    while (keys.length) {
                        let key1 = keys.shift();
                        let cards1 = suitCards[key1];
                        let key2 = keys.shift();
                        let cards2 = suitCards[key2];
                        //点击容器的回调
                        /**@type {Row_Item_Option['clickItemContainer']} */
                        const clickItemContainer = function (container, item, allContainer) {
                            if (!item?.length || item.some(card => !lib.filter.cardDiscardable(card, player, event.name))) return;
                            if (event.selectedButtons.includes(container)) {
                                container.classList.remove("selected");
                                event.selectedButtons.remove(container);
                                event.selectedCards.removeArray(item);
                            } else {
                                if (event.selectedButtons.length >= limit) {
                                    let precontainer = event.selectedButtons[0];
                                    precontainer.classList.remove("selected");
                                    event.selectedButtons.remove(precontainer);
                                    let suit = get.suit(event.selectedCards[0], target),
                                        cards = target.getCards("h", { suit: suit });
                                    event.selectedCards.removeArray(cards);
                                }
                                container.classList.add("selected");
                                event.selectedButtons.add(container);
                                event.selectedCards.addArray(item);
                            }
                            event.control_ok.classList[event.selectedButtons.length === limit ? "remove" : "add"]("disabled");
                        };
                        //给框加封条，显示xxx牌多少张
                        function createCustom(suit, count) {
                            return function (itemContainer) {
                                function formatStr(str) {
                                    return str.replace(/[♥︎♦︎]/g, '<span style="color: red; ">$&</span>');
                                }
                                let div = ui.create.div(itemContainer);
                                if (count) {
                                    div.innerHTML = formatStr(`${get.translation(suit)}牌${count}张`);
                                } else {
                                    div.innerHTML = formatStr(`没有${get.translation(suit)}牌`);
                                }
                                div.css({
                                    position: "absolute",
                                    width: "100%",
                                    bottom: "1%",
                                    height: "35%",
                                    background: "#352929bf",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "1.2em",
                                    zIndex: "2",
                                });
                            };
                        }
                        //框的样式，不要太宽，高度最小也要100px，防止空框没有高度
                        /**@type {Row_Item_Option['itemContainerCss']} */
                        let itemContainerCss = {
                            border: "solid #c6b3b3 2px",
                            minHeight: "100px",
                        };
                        if (key2) {
                            dialog.addNewRow(
                                {
                                    item: cards1,
                                    ItemNoclick: true, //卡牌不需要被点击
                                    clickItemContainer,
                                    custom: createCustom(key1, cards1.length), //添加封条
                                    itemContainerCss,
                                },
                                {
                                    item: cards2,
                                    ItemNoclick: true, //卡牌不需要被点击
                                    clickItemContainer,
                                    custom: createCustom(key2, cards2.length),
                                    itemContainerCss,
                                }
                            );
                        } else {
                            dialog.addNewRow({
                                item: cards1,
                                ItemNoclick: true, //卡牌不需要被点击
                                clickItemContainer,
                                custom: createCustom(key1, cards1.length),
                                itemContainerCss,
                            });
                        }
                    }
                    game.pause();
                    dialog.open();
                    _status.imchoosing = true;
                    return promise;
                }

                let next2,
                    str2 = `即奏：用牌堆等量的红色牌替换${get.translation(target)}一种花色的所有牌`;
                let ai2 = function () {
                    let list = lib.suits.slice().filter(i => target.hasCard({ suit: i }, "h"));
                    let getv = cards => cards.map(i => get.value(i)).reduce((p, c) => p + c, 0);
                    return {
                        bool: true,
                        cards: target.getCards("h", {
                            suit: list.sort((a, b) => {
                                return getv(target.getCards("h", { suit: b })) - getv(target.getCards("h", { suit: a }));
                            })[0],
                        }),
                    };
                };
                if (event.isMine()) {
                    next2 = chooseOneSuitCard(player, target, true, 1, str2, ai2);
                } else if (player.isOnline()) {
                    let { promise, resolve } = Promise.withResolvers();
                    player.send(chooseOneSuitCard, player, target, true, 1, str2, ai2);
                    player.wait(result => {
                        if (result == "ai") result = ai2();
                        resolve(result);
                    });
                    next2 = promise;
                } else next2 = Promise.resolve(ai2());
                let result3 = await next2;
                const cards22 = result3.cards.slice().filter(card => lib.filter.canBeDiscarded(card, player, target));
                if (cards22.length) {
                    let cards = [];
                    for (let i = 0; i < cards22.length; i++) {
                        let card = get.cardPile2(card => {
                            return get.color(card) == 'red' && !cards.includes(card);
                        });
                        if (card) cards.push(card);
                    }
                    if (cards.length) await target.gain(cards, "draw").gaintag.add("xinxjizou");
                    player.logSkill("xinxjizou", null, null, null, [get.rand(3, 4)]);
                    await player.gain(cards22, "draw").gaintag.add("xinxjizou");
                    player.addSkill("xinxjizou_draw");
                    target.addSkill("xinxjizou_draw");

                }
            },
            subSkill: {
                draw: {
                    trigger: {
                        player: "loseAfter",
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    filter(event, player) {
                        var evt = event.getl(player);
                        if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                        if (event.name == "lose") {
                            for (var i in event.gaintag_map) {
                                if (event.gaintag_map[i].includes("xinxjizou")) return true;
                            }
                            return false;
                        }
                        return player.hasHistory("lose", evt => {
                            if (event != evt.getParent()) return false;
                            for (var i in evt.gaintag_map) {
                                if (evt.gaintag_map[i].includes("xinxjizou")) return true;
                            }
                            return false;
                        });
                    },

                    async content(event, trigger, player) {
                        var heart = get.discardPile(function (card) {
                            return get.suit(card) == 'heart';
                        });
                        var diamond = get.discardPile(function (card) {
                            return get.suit(card) == 'diamond';
                        });
                        const allcards = [heart, diamond];
                        player.logSkill("xinxjizou", null, null, null, [get.rand(5, 6)]);
                        for (let card of allcards) {
                            await player.gain(card, 'gain2')
                            //.gaintag.add("xinxjizou_tag");
                        }

                        /*  var card = get.discardPile(function (card) {
                             return get.color(card) == 'red';
                         });
                         if (card) {
                             await player.gain(card, 'gain2');
                         } */


                    },
                    mod: {
                        ignoredHandcard(card) {
                            if (card.hasGaintag("xinxjizou_tag")) return true;
                        },
                        cardDiscardable(card, _, name) {
                            if (name == "phaseDiscard" && card.hasGaintag("xinxjizou_tag")) return false;
                        },
                    },
                }

            }
        },
        xinxmengxing: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "phaseBegin",
            },
            filter(event, player) {
                const skills = ["xinxhuoban", 'xinxxinzhui_ins', 'xinxxsusheng'];
                return skills.includes(event.skill);
            },
            async cost(event, trigger, player) {
                event.result = await player.chooseBool("梦醒：是否令" + get.translation(trigger.player) + "的当前手牌不计入手牌上限？")
                    .set("choice", get.attitude(player, trigger.player) > 0)
                    .forResult();

            },
            async content(event, trigger, player) {
                player.line(trigger.player);
                const cards = trigger.player.getCards("h");
                trigger.player.addGaintag(cards, 'xinxmengxing_tag');
                trigger.player.addSkill("xinxmengxing_tag");
            },
            subSkill: {
                tag: {
                    mod: {
                        ignoredHandcard(card) {
                            if (card.hasGaintag("xinxmengxing_tag")) return true;
                        },
                        cardDiscardable(card, _, name) {
                            if (name == "phaseDiscard" && card.hasGaintag("xinxmengxing_tag")) return false;
                        },
                    },
                }

            }

        },
        //存护
        xinxzhupo: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzhupo" + index + ".mp3" : 2),
            trigger: {
                player: "changeSkillsAfter",
            },
            filter(event, player) {
                return event.addSkill.includes("xinxzhupo");
            },
            forced: true,
            locked: false,
            popup: false,
            async content(event, trigger, player) {
                const target = game.findPlayer(current => current.hasSkill("xinxkaituo_dead"));
                player.line(target);
                player.addMark("xinxzhupo_effect", 1, false);
                player.addSkill("xinxzhupo_effect");
                if (target) {
                    target.addMark("xinxzhupo_effect", 1, false);
                    target.addSkill("xinxzhupo_effect");
                }

                const result =
                    await player.chooseTarget("筑珀：是否嘲讽一名其他角色（使用【杀】只能指定你为目标）？", 1, lib.filter.notMe).set("ai", target => -get.attitude(player, target)).forResult();
                if (result.bool) {
                    player.line(result.targets, "fire");
                    player.logSkill("xinxzhupo", null, null, null, [get.rand(1, 2)]);
                    const target = result.targets[0];
                    result.targets.forEach(target => {
                        target.addAdditionalSkill("xinxzhupo_" + player.playerid, "xinxzhupo_chaofen");
                        target.markAuto("xinxzhupo_chaofen", [player]);
                    });
                    player.addTempSkill("xinxzhupo_clear", { player: "phaseBegin" });
                    if (!event.isMine() && !event.isOnline()) game.delayx();
                }

            },
            subSkill: {
                effect: {
                    markimage: 'extension/永夜之境/image/mark/xinxzhupo.png',
                    mark: true,
                    intro: {
                        content: "共有#点珀石",
                    },
                    trigger: {
                        player: "damageEnd",
                    },
                    filter(event, player) {
                        return player.hasMark("xinxzhupo_effect");
                    },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    async content(event, trigger, player) {
                        player.logSkill("xinxzhupo", null, null, null, [get.rand(3, 4)]);
                        player.removeMark("xinxzhupo_effect", 1, false);
                        player.recover();
                    }
                },
                chaofen: {
                    charlotte: true,
                    mark: true,
                    markimage: 'extension/永夜之境/image/mark/xinxzhupo_chaofen.png',
                    intro: {
                        name: "筑珀",
                        markcount: () => 0,
                        content: "使用【杀】只能指定$为目标",
                    },
                    mod: {
                        playerEnabled(card, player, target) {
                            // if (player != target &&!player.getStorage("xinxzhupo_chaofen").includes(target)) return false;
                            if ((player.getStorage("xinxzhupo_chaofen").includes(target) && card.name == "sha")) return true;
                            else if (card.name == "sha") return false;
                        },
                    },
                    sub: true,
                    sourceSkill: "xinxzhupo",
                    "_priority": 0,
                },
                clear: {
                    charlotte: true,
                    onremove(player) {
                        game.countPlayer(function (current) {
                            current.removeAdditionalSkill("xinxzhupo_" + player.playerid);
                        });
                    },
                    sub: true,
                    sourceSkill: "xinxzhupo",
                    "_priority": 0,
                },

            }
        },
        xinxyanqiang: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyanqiang" + index + ".mp3" : 2),
            enable: "phaseUse",
            usable: 1,
            filter(event, player) {
                return player.countCards("hes");
            },
            chooseButton: {
                dialog(event, player) {
                    var list = [];
                    // if (event.filterCard({ name: "sha" }, player, event)) list.push(["基本", "", "sha"]);
                    // for (var j of lib.inpile_nature) {
                    //     if (event.filterCard({ name: "sha", nature: j }, player, event)) list.push(["基本", "", "sha", j]);
                    // }
                    if (event.filterCard({ name: "sha", nature: 'fire' }, player, event)) {
                        list.push(["基本", "", "sha", "fire"]);
                    }
                    list.push("huogong");
                    return ui.create.dialog("炎枪", [list, "vcard"]);
                },
                filter(button, player) {
                    var evt = _status.event.getParent();
                    return evt.filterCard(
                        {
                            name: button.link[2],
                        },
                        player, evt
                    );
                },
                check(button) {
                    return (
                        _status.event.player.getUseValue({
                            name: button.link[2],
                        }) * (button.link[2] == "huogong" ? 3 : 1)
                    );
                },
                backup(links) {
                    return {
                        viewAs: { name: links[0][2], nature: links[0][3] },
                        filterCard: true,
                        check(card) {
                            return 6 - get.value(card);
                        },
                        position: "hse",
                        precontent() {
                            event.getParent().addCount = false;
                            player.logSkill("xinxyanqiang", null, null, null, [2]);
                            player.addSkill('xinxyanqiang_effect');

                        },

                    };
                },
                prompt(links) {
                    return "将一张牌当做" + get.translation(links[0][3] || "") + "【" + get.translation(links[0][2]) + "】" + "使用";
                },
            },
            ai: {
                order(item, player) {
                    return Math.max(get.order({ name: "sha", nature: "fire" }), get.order({ name: "huogong" })) + 0.2;
                },
                result: {
                    player: 1,
                },
            },
            subSkill: {
                effect: {
                    trigger: {
                        source: "damageSource",
                    },
                    forced: true,
                    charlotte: true,
                    firstDo: true,
                    silent: true,
                    popup: false,
                    filter(event, player) {
                        var evt = event.getParent("useCard");
                        return event.card && evt && event.card == evt.card && evt.skill == "xinxyanqiang_backup" && evt.player == player;
                    },
                    async content(event, trigger, player) {
                        player.logSkill("xinxyanqiang", [trigger.player], null, null, [get.rand(3, 4)]);
                        player.addMark("xinxzhupo_effect", 1, false);
                    },
                    sub: true,
                    sourceSkill: "xinxyanqiang",
                    "_priority": 1,
                },
            },
        },
        //银狼
        xinxpojie: {
            //derivation: ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing'],
            audio: "ext:永夜之境/audio:9",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxpojie" + index + ".mp3" : "ext:永夜之境/audio/xinxpojie" + get.rand(1, 2) + ".mp3"),
            trigger: {
                player: "phaseJieshuBegin",
            },
            enable: "phaseUse",
            usable: 1,
            filterTarget(card, player, target) {
                return target != player;
                // && target.countCards('he')
            },
            logTarget: "target",
            //popup: false,
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2("xinxpojie"), lib.filter.notMe)
                    .set("ai", target => {
                        const player = get.player(),
                            hs = game.countPlayer();
                        if (get.attitude(player, target) <= 0 && target.hp <= Math.floor(target.maxHp)) return hs * 2;
                        return hs;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                //const target = event.targets[0];
                const target = event.target || event.targets[0];
                if (event.getParent(2).name == "phaseEnd") { player.line(target); }
                //await target.chooseToDiscard(true, "he");
                target.showHandcards();
                await game.delay();
                const suits = ['heart', 'club', 'spade', 'diamond'];
                const cards = target.getCards('hej');
                for (let i = 0; i < cards.length; i++) {
                    if (suits.includes(get.suit(cards[i])))
                        suits.remove(get.suit(cards[i]));
                }
                if (suits.length) {
                    const num = suits.length;
                    if (num > 0) {
                        const list = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli']; // 定义可获得的技能列表
                        const list2 = target.skills || []; // 获取目标玩家已拥有的技能列表

                        // 筛选出目标玩家尚未拥有的技能
                        const alllist = list.filter(skill => !list2.includes(skill));

                        if (alllist.length) {
                            let skill = alllist.randomGet();
                            target.addSkill(skill);
                            target.addMark(skill, 1, false);
                            game.log(target, "获得了技能", "【" + get.translation(skill) + "】");
                        } else {
                            console.log("目标玩家已经拥有所有可用技能");
                        }
                    }
                    if (num > 2) {
                        target.addSkill('xinxpojie_xushu');
                        target.addMark('xinxpojie_xushu', 1, false);
                    }

                    if (num > 3) {
                        target.addSkill('xinxpojie_liangzi');
                        target.addMark('xinxpojie_liangzi', 1, false);
                    }
                }


            },
            ai: {
                order: 10,
                result: {
                    target: -1.5,
                },

            },
            subSkill: {
                huo: {
                    nopop: true,
                    onremove: true,
                    charlotte: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_huo.png',
                    mark: true,
                    intro: {
                        markcount: () => 0,
                        content(event, player) {
                            let num = player.countMark('xinxpojie_huo');
                            if (num > 0) return '回合开始时，你受到1点无来源火焰伤害。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        player: "phaseBegin",
                    },
                    forced: true,
                    priority: 20,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_huo');
                    },
                    async content(event, trigger, player) {
                        player.logSkill("xinxpojie", [player], null, null, [9]);
                        player.damage('fire', "nosource");
                    },
                },
                lei: {
                    nopop: true,
                    onremove: true,
                    charlotte: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_lei.png',
                    mark: true,
                    intro: {
                        markcount: () => 0,
                        content(event, player) {
                            let num = player.countMark('xinxpojie_lei');
                            if (num > 0) return '当你获得黑桃牌后，由银狼获得之。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        player: ["gainAfter", "loseAsyncAfter"],
                    },
                    forced: true,
                    popup: false,
                    priority: 1,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_lei');
                    },
                    async content(event, trigger, player) {
                        const lostCards = trigger.cards || [];
                        const cards = lostCards.filter(card => get.suit(card) == 'spade');
                        const target = game.findPlayer(current => current.name == 'xinx_yinglang');
                        if (cards.length > 0 && target) {
                            target.logSkill("xinxpojie", [player], null, null, [3]);
                            await target.gain(cards, 'gain2', player);
                        }
                    }
                },
                feng: {
                    onremove: true,
                    nopop: true,
                    charlotte: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_feng.png',
                    mark: true,
                    intro: {
                        markcount: () => 0,
                        content(event, player) {
                            let num = player.countMark('xinxpojie_feng');
                            if (num > 0) return '摸牌阶段结束后，你将一种花色的所有牌置于牌堆顶。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        player: "phaseDrawEnd",
                    },
                    forced: true,
                    popup: false,
                    priority: 10,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_feng') && player.countCards("he");
                    },
                    async content(event, trigger, player) {
                        const suits = player
                            .getCards("he")
                            .reduce((list, card) => list.add(get.suit(card)), [])
                            .sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                        const result = await player
                            .chooseControl(suits)
                            .set("prompt", "破解：将一种花色的牌置于牌堆顶")
                            .set("ai", () => {
                                const player = get.event().player;
                                let suits = get.event().controls.slice();
                                suits.sort((a, b) => player.countCards("he", { suit: a }) - player.countCards("he", { suit: b }));
                                return suits[0];
                            })
                            .forResult();
                        if (result.control) {
                            const suit = result.control,
                                cards = player.getCards("he", { suit: suit });
                            if (cards.length) {
                                player.logSkill("xinxpojie", null, null, null, [4]);
                                // await game.cardsGotoPile(cards, 'insert');
                                await player.lose(cards, ui.cardPile, 'insert');
                                player.$throw(cards.length, 1000);
                                const num = cards.length;
                                game.log(player, "将" + get.cnNumber(num) + "张牌置于了牌堆顶");
                            }
                        }
                    },


                },
                bing: {
                    nopop: true,
                    onremove: true,
                    charlotte: true,
                    silent: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_bing.png',
                    mark: true,
                    intro: {
                        markcount: () => 0,
                        content(event, player) {
                            let num = player.maxHp;
                            if (num > 0) return '你于自己的回合内至多使用' + get.cnNumber(num) + '张牌。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        player: "phaseZhunbeiBegin",
                    },
                    forced: true,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_bing');
                    },
                    async content(event, trigger, player) {
                        player.addTempSkill("xinxpojie_debuff");
                        const num = player.maxHp;
                        player.addMark("xinxpojie_debuff", num, false);

                    },
                },
                debuff: {
                    nopop: true,
                    mark: true,
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
                        return player.hasMark("xinxpojie_debuff");
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    content() {
                        player.removeMark("xinxpojie_debuff", 1, false);
                    },
                    mod: {
                        cardEnabled(card, player) {
                            if (player.hasMark("xinxpojie_debuff")) return;
                            if (get.itemtype(card) == "card" && get.position(card) == "h") return false;
                            if (card.cards && (card.cards || []).some(i => get.position(i) == "h")) return false;
                        },
                        cardSavable() {
                            return lib.skill.xinxpojie.subSkill.debuff.mod.cardEnabled.apply(this, arguments);
                        },
                    },
                },
                wuli: {
                    onremove: true,
                    nopop: true,
                    charlotte: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_wuli.png',
                    mark: true,
                    intro: {
                        markcount: () => 0,
                        content(event, player) {
                            let num = player.countMark('xinxpojie_wuli');
                            if (num > 0) return '当你回复体力时，进行一次判定，若为黑色，取消之。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        player: "recoverBegin",
                    },
                    forced: true,
                    popup: false,
                    priority: 10,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_wuli');
                    },
                    async content(event, trigger, player) {

                        const result = await player.judge().forResult();
                        if (result.color === 'black') {
                            player.logSkill("xinxpojie", null, null, null, [5]);
                            trigger.cancel();
                        }
                    },
                },
                xushu: {
                    nopop: true,
                    charlotte: true,
                    onremove: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_xushu.png',
                    mark: true,
                    intro: {
                        markcount: () => 0,
                        content(event, player) {
                            let num = player.countMark('xinxpojie_xushu');
                            if (num > 0) return '当你成为其他角色使用牌的目标时，你须交给银狼一张牌，否则移去此弱点，选择失去一个技能或失去1点体力。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        target: "useCardToTargeted",
                    },
                    forced: true,
                    popup: false,
                    priority: 1,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_xushu') && event.player != player;
                    },
                    async content(event, trigger, player) {
                        const target = game.findPlayer(current => current.name == 'xinx_yinglang');
                        if (target) {
                            const result = await player
                                .chooseToGive(`破解：交给${get.translation(target)}一张牌，否则失去一个技能或失去1点体力`, "he", target)
                                .set("ai", card => {
                                    const { player, target } = get.event();
                                    if (get.attitude(player, target) > 0) {
                                        return 11 - get.value(card);
                                    } else if (player.hp <= 1 && player.countCards("h", "tao") >= 1) {
                                        return 0;
                                    } else {
                                        let num = 12 - player.hp * 2;
                                        return num - get.value(card);
                                    }
                                })
                                .set("logSkill", ["xinxpojie", null, null, null, [7]])
                                .forResult();
                            if (!result?.bool || !result?.cards?.length) {
                                const result = await player
                                    .chooseButton([
                                        '选择一项', [
                                            [["lose", "失去1点体力"], ["skill", "失去一个技能"]],
                                            "textbutton",
                                        ],
                                    ], true)
                                    .set("filterButton", button => {
                                        if (button.link == "skill") {
                                            return player.getStockSkills(false, true).length;
                                        }
                                        return "lose";
                                    })
                                    .set("ai", button => {
                                        const player = get.player();
                                        if (player.hp === 1 && player.countCards("h", "tao") === 0) {
                                            return button.link === "skill" ? 10 : 0;
                                        } else {
                                            return button.link === "lose" ? 10 : 0;
                                        }
                                    })
                                    .forResult();

                                if (result.bool) {
                                    switch (result.links[0]) {
                                        case "lose":
                                            player.logSkill("xinxpojie", null, null, null, [6]);
                                            await player.loseHp();
                                            await player.removeSkill("xinxpojie_xushu");
                                            break;
                                        case "skill":
                                            let skills = player.getSkills(null, false, false).filter(skill => {
                                                let info = get.info(skill);
                                                if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) return false;
                                                return true;
                                            });
                                            if (skills.length === 1) {
                                                player.removeSkills(skills[0]);
                                                await player.removeSkill("xinxpojie_xushu");
                                            } else {

                                                const result = await player
                                                    .chooseControl(skills)
                                                    .set(
                                                        "choiceList",
                                                        skills.map(i => {
                                                            return '<div class="skill">【' + get.translation(lib.translate[i + "_ab"] || get.translation(i).slice(0, 2)) + "】</div><div>" + get.skillInfoTranslation(i, player) + "</div>";
                                                        })
                                                    )
                                                    .set("displayIndex", false)
                                                    .set("prompt", "破解：选择失去一个技能")
                                                    .set("ai", () => {
                                                        var choices = _status.event.controls.slice();
                                                        var negs = choices.filter(i => {
                                                            var info = get.info(i);
                                                            if (!info || !info.ai) return false;
                                                            return info.ai.neg || info.ai.halfneg;
                                                        });
                                                        if (negs.length) return negs.randomGet();
                                                        if (choices.includes("mashu")) return "mashu";
                                                        return choices.randomGet();
                                                    }).forResult();

                                                if (result.control) {
                                                    player.logSkill("xinxpojie", null, null, null, [8]);
                                                    player.removeSkills(result.control);
                                                    await player.removeSkill("xinxpojie_xushu");
                                                }
                                            }
                                            break;
                                    }
                                }
                            }
                        }
                    },
                },
                liangzi: {
                    onremove: true,
                    nopop: true,
                    charlotte: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_liangzi.png',
                    mark: true,
                    intro: {
                        markcount: () => 0,
                        content(event, player) {
                            let num = player.countMark('xinxpojie_liangzi');
                            //if (num > 0) return '当你使用牌指定角色为目标时，若目标为银狼，其对你发动一次【破解】。';
                            if (num > 0) return '当你受到来自银狼的伤害后，其对你发动一次【破解】。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        // player: "useCardToPlayered",
                        player: "damageAfter",
                    },
                    forced: true,
                    popup: false,
                    priority: 1,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_liangzi') && event.source?.name == 'xinx_yinglang' && event.source.hasSkill('xinxpojie');
                    },
                    async content(event, trigger, player) {
                        const target = game.findPlayer(current => current.name == 'xinx_yinglang');
                        if (target) {
                            //await target.useSkill("xinxpojie");
                            //await target.useSkill("xinxpojie",null,player);
                            target.logSkill("xinxpojie", player);
                            await player.chooseToDiscard(true, "he");
                            player.showHandcards();
                            const suits = ['heart', 'club', 'spade', 'diamond'];
                            const cards = player.getCards('hej');
                            for (let i = 0; i < cards.length; i++) {
                                if (suits.includes(get.suit(cards[i])))
                                    suits.remove(get.suit(cards[i]));
                            }
                            if (suits.length) {
                                const num = suits.length;
                                if (num > 0) {
                                    const list = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli']; // 定义可获得的技能列表
                                    const list2 = player.skills || []; // 获取目标玩家已拥有的技能列表

                                    // 筛选出目标玩家尚未拥有的技能
                                    const alllist = list.filter(skill => !list2.includes(skill));

                                    if (alllist.length) {
                                        let skill = alllist.randomGet();
                                        player.addSkill(skill);
                                        player.addMark(skill, 1, false);
                                    } else {
                                        console.log("目标玩家已经拥有所有可用技能");
                                    }
                                }
                                if (num > 2) {
                                    player.addSkill('xinxpojie_xushu');
                                    player.addMark('xinxpojie_xushu', 1, false);
                                }

                                if (num > 3) {
                                    player.addSkill('xinxpojie_liangzi');
                                    player.addMark('xinxpojie_liangzi', 1, false);
                                }
                            }
                        }
                    }
                },

            },
        },
        xinxhairu: {
            initList() {
                // 确保角色列表已初始化
                if (!_status.characterlist) lib.skill.pingjian.initList();
                // 从角色列表中提取所有技能并去重
                const skills = _status.characterlist
                    .map(i => get.character(i, 3)) // 获取角色的所有技能（包括隐藏/限定等）
                    .flat() // 展平嵌套数组
                    .unique(); // 去重
                game.expandSkills(skills);
                const list = skills.filter(skill => {
                    const info = get.info(skill);
                    return info && info.limited; // 仅保留有 `limited` 标记的技能
                });
                // 存储到全局变量
                _status.xinxhairuSkills = list;
            },
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxhairu" + index + ".mp3" : 2),
            trigger: {
                global: 'roundStart',
            },
            popup: false,
            filter(event, player) {
                const marks = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli', 'xinxpojie_xushu', 'xinxpojie_liangzi'];
                const targets = game.filterPlayer(current => marks.some(mark => current.hasMark(mark)));
                return targets.length > 0;
            },
            check(event, player) {
                const marks = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli', 'xinxpojie_xushu', 'xinxpojie_liangzi'];
                // const targets = game.filterPlayer(current => marks.some(mark => current.hasMark(mark)));
                const targets = game.filterPlayer(current => {
                    // 1. 统计当前玩家拥有 marks 列表中标记的个数
                    const count = marks.filter(mark => current.hasMark(mark)).length;
                    // 2. 只有当个数大于 1 时，才选中该玩家
                    return count > 1;
                });
                return targets.length > 0;
            },
            async cost(event, trigger, player) {
                const marks = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli', 'xinxpojie_xushu', 'xinxpojie_liangzi'];
                const validTargets = game.filterPlayer(current => marks.some(mark => current.hasMark(mark)));
                event.result = await player
                    .chooseTarget(get.prompt2("xinxhairu"), function (card, player, target) {
                        return validTargets.includes(target);
                    })
                    .set("ai", target => {
                        const player = get.player();
                        const marks = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli', 'xinxpojie_xushu', 'xinxpojie_liangzi'];
                        if (get.attitude(player, target) > 0) return 0;
                        const markCount = marks.reduce((count, mark) => {
                            return count + (target.hasMark(mark) ? 1 : 0);
                        }, 0);
                        if (markCount < 2) return 0;
                        return markCount * 10;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                player.awakenSkill('xinxhairu');
                const target = event.targets[0];
                const marks = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli', 'xinxpojie_xushu', 'xinxpojie_liangzi'];
                const availableMarks = marks.filter(mark => target.hasMark(mark));
                let map = {
                    "火": "xinxpojie_huo",
                    "雷": "xinxpojie_lei",
                    "风": "xinxpojie_feng",
                    "冰": "xinxpojie_bing",
                    "物理": "xinxpojie_wuli",
                    "虚数": "xinxpojie_xushu",
                    "量子": "xinxpojie_liangzi",
                };

                let choose = [];
                for (let xinxpojie_ of availableMarks) {
                    // 从 map 中获取中文名称
                    let cn = Object.keys(map).find(key => map[key] === xinxpojie_);
                    if (cn) {
                        choose.push(cn);
                    }
                }

                if (availableMarks.length === 0) {
                    player.chat("没有可移除的弱点");
                    return;
                }
                player.logSkill("xinxhairu", null, null, null, [get.rand(1, 2)]);
                const result = await player.chooseButton(['〖' + get.skillTranslation(event.name) + '〗:选择要移除的弱点', [choose, 'tdnodes']], 1, true)
                    .set('ai', (button) => {
                        const player = get.player();
                        const target = event.targets[0];
                        if (target.countMark('xinxpojie_liangzi') > 0 || target.countMark('xinxpojie_xushu') > 0) {
                            if (button.link == '量子') return 2;
                            if (button.link == '虚数') return 3;
                        } else if (button.link == '物理') return 2;
                        else if (["风", "火", "雷", "物理", "冰"].includes(button.link)) {
                            const randomPriority = Math.random() > 0.5 ? 2 : 1;
                            return randomPriority;
                        }
                    }).set('filterButton', (button, player) => {
                        return choose.includes(button.link);
                    }).forResult();
                if (result.bool) {
                    const selectedMark = map[result.links[0]]; // 玩家选择的标记
                    target.removeSkill(selectedMark);
                    game.log(player, "移除了" + get.translation(target) + "一个" + get.translation(selectedMark) + "弱点");
                    const markcount = marks.filter(mark => target.hasMark(mark)).length;//当前的弱点数量
                    player.draw(markcount);
                    const num = markcount;
                    if (num > 0) {
                        if (target.getStockSkills(false, true).length > 0) {
                            // 1. 准备“失去技能”列表
                            const loseList = target.getStockSkills(false, true);
                            if (!loseList.length) return;
                            // 2. 准备“获得技能”列表
                            if (!_status.xinxhairuSkills) lib.skill.xinxhairu.initList();
                            const gainList = _status.xinxhairuSkills.filter(s => !target.hasSkill(s)).randomGets(num);
                            if (!gainList.length) return;
                            // 3. 发起合并后的选择框
                            const result = await player.chooseButton(
                                [
                                    `###${get.prompt('xinxhairu')}###令${get.translation(target)}失去的技能`,
                                    [loseList, "skill"],
                                    `令${get.translation(target)}获得的技能`,
                                    [gainList, "skill"]
                                ]
                            )
                                .set("selectButton", 2) // 强制选 2 个
                                .set("filterButton", button => {
                                    // 获取当前已选中的按钮
                                    const selected = ui.selected.buttons;
                                    const currentLink = button.link;
                                    // 判断当前点击的按钮属于哪一组
                                    const isLoseType = loseList.includes(currentLink);
                                    // const isGainType = gainList.includes(currentLink); // 只要不是lose就是gain
                                    // 如果还没选，随便点
                                    if (selected.length === 0) return true;
                                    // 如果已经选了 1 个
                                    if (selected.length === 1) {
                                        const firstLink = selected[0].link;
                                        const firstIsLoseType = loseList.includes(firstLink);
                                        // 互斥逻辑：
                                        // 如果第一个选的是“失去组”，现在必须点“获得组” (!isLoseType)
                                        // 如果第一个选的是“获得组”，现在必须点“失去组” (isLoseType)
                                        return firstIsLoseType !== isLoseType;
                                    }
                                    // 如果已经选了2个，不能再选
                                    return false;
                                })
                                .set("ai", button => {
                                    return Math.random();
                                })
                                .forResult();
                            if (result.bool && result.links.length === 2) {
                                const link1 = result.links[0];
                                const link2 = result.links[1];
                                let skillToLose, skillToGain;
                                if (loseList.includes(link1)) {
                                    skillToLose = link1;
                                    skillToGain = link2;
                                } else {
                                    skillToLose = link2;
                                    skillToGain = link1;
                                }
                                player.logSkill("xinxhairu", null, null, null, [get.rand(3, 4)]);
                                await target.removeSkill(skillToLose);
                                await target.addSkill(skillToGain);
                                game.log(target, "失去了技能", `#g【${get.translation(skillToLose)}】`);
                                game.log(target, "获得了限定技", `#g【${get.translation(skillToGain)}】`);
                            }
                        }

                    }
                }
            }
        },
        //遐蝶
        xinxsusheng: {
            audio: "ext:永夜之境/audio:3",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxsusheng" + index + ".mp3" : 2),
            trigger: {
                global: "phaseBefore",
                player: "enterGame",
            },
            unique: true,
            locked: true,
            popup: false,
            forced: true,
            filter(event, player) {
                return event.name != "phase" || game.phaseNumber == 0;
            },
            async content(event, trigger, player) {
                player.addSkill("xinxsusheng_audio2");
                player.logSkill("xinxsusheng", null, null, null, [1]);
                player.markSkill("xinxsusheng");
                let num1 = player.hp,
                    num2 = player.maxHp;
                player.storage.xinxsusheng_dist = player.addSubPlayer({
                    name: "xinx_Pollux",
                    skills: ["xinxsusheng_swap", 'xinxhuiyi'],
                    hp: num2,
                    maxHp: num2,
                    sex: "female",
                    image: "ext:永夜之境/image/xinx_Pollux.png",
                    hs: get.cards(4),
                    skill: "xinxsusheng",
                    //intro: "你的本体回合结束后，切换至此随从并进行一个额外的回合。",
                    intro2: "当前回合结束后切换回本体",
                    onremove(player) {
                        delete player.storage.xinxsusheng_dist;
                    },
                });
            },
            onremove(player) {
                player.clearMark('xinxsusheng_add', false);
            },
            markimage: 'extension/永夜之境/image/mark/xinxsusheng_add.png',
            intro: {
                markcount(storage, player) {
                    let num = player.countMark("xinxsusheng_add");
                    if (num == 0) return null;
                    return num;
                },
                mark(dialog, storage, player) {
                    let num = player.countMark("xinxsusheng_add");
                    if (num != 0) dialog.addText(`已拥有新蕊${num > 0 ? ":" : ""}${num}`);
                },
            },
            group: ["xinxsusheng_swap", 'xinxmingxi_lose', 'xinxsusheng_die', 'xinxsusheng_count', 'xinxsusheng_clear', 'xinxsusheng_damage', 'xinxsusheng_audio'],
            // "xinxsusheng_right",
            subSkill: {
                damage: {
                    trigger: {
                        player: "dying",
                    },
                    popup: false,
                    forced: true,
                    filter(event, player) {
                        return player.storage.xinxsusheng_dist;
                    },
                    // prompt(event, player) {
                    //     const target = player.storage.xinxsusheng_dist;
                    //     //const num = Math.ceil(player.storage[target].maxHp / 2);
                    //     const num  = player.storage[target].hp;
                    //     return "是否消耗玻吕刻斯" + num + "点体力，令" + get.translation(event.player) + "回复1点体力";
                    // },
                    // check(event, player) {
                    //     return get.attitude(player, event.player) > 0;
                    // },
                    async content(event, trigger, player) {
                        player.logSkill("xinxsusheng", null, null, null, [get.rand(2, 3)]);
                        const target = player.storage.xinxsusheng_dist;
                        //const num = Math.ceil(player.storage[target].maxHp / 2);
                        // const num = Math.ceil(player.maxHp / 2);
                        const num = player.storage[target].hp;
                        // if (player.storage[target].hp > num) {
                        //     player.storage[target].hp -= num;
                        //     player.changeSkin({ characterName: "xinx_xiadie" }, "xinx_xiadie_shadow");
                        //     await trigger.player.recoverTo(1);
                        //     game.log('#b' + target, '失去了', num + '点体力');
                        // }
                        // else {
                        player.xinx_removeSubPlayer(target);
                        player.addMark('xinxmingxi_lose', 1, false);
                        player.changeSkin({ characterName: "xinx_xiadie" }, "xinx_xiadie_shadow");
                        await trigger.player.recoverTo(1);
                        // }
                        player.when({ global: "phaseAfter" }).step(async () => {
                            player.changeSkin({ characterName: "xinx_xiadie" }, "xinx_xiadie");
                        });
                    },
                },
                audio: {
                    silent: true,
                    supercharlotte: true,
                    trigger: {
                        player: "phaseBegin",
                    },
                    filter: function (event, player) {
                        return event.player.name == "xinx_Pollux";
                        // return event.player.name != "xinx_pollux";
                    },
                    content() {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxyuejian' + [get.rand(1, 2)] + '.mp3');
                    }
                },
                audio2: {
                    silent: true,
                    supercharlotte: true,
                    trigger: {
                        player: "damageEnd",
                    },
                    content() {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxsusheng' + [get.rand(7, 8)] + '.mp3');
                    }
                },
                count: {
                    silent: true,
                    charlotte: true,
                    trigger: {
                        global: ["phaseZhunbeiBefore", "phaseJudgeBefore", "phaseDrawBefore", "phaseUseBefore", "phaseDiscardBefore", "phaseJieshuBefore"],
                    },
                    content() {
                        trigger.player.addMark("xinxsusheng_count", 1, false);
                    },
                },
                clear: {
                    silent: true,
                    charlotte: true,
                    trigger: {
                        global: "phaseEnd",
                    },
                    content() {
                        trigger.player.clearMark("xinxsusheng_count", false);
                    },
                },
                chosen: {
                    sub: true,
                    sourceSkill: "xinxsusheng",
                    "_priority": 0,
                },
                swap: {
                    trigger: {
                        global: "phaseBefore",
                        //global: "phaseAfter",
                    },
                    forced: true,
                    popup: false,
                    filter: function (event, player) {
                        return event.player != player || event.player.name == "xinx_xiadie";
                        // return event.player.name != "xinx_pollux";
                    },
                    priority: 20,
                    content() {
                        if (player.hasSkill('subplayer')) {
                            player.exitSubPlayer();
                        }
                        player.markSkill("xinxsusheng");
                    },
                },
                right: {
                    trigger: {
                        player: ["phaseAfter", "phaseCancelled"],
                    },
                    forced: true,
                    popup: false,
                    priority: -40,
                    filter: function (event, player) {
                        if (player.hasSkill('xinxsusheng_chosen')) return false;
                        if (player.hasSkill('subplayer')) return false;
                        var right = player.storage.xinxsusheng_dist;
                        if (!right) return false;
                        return player.hasSkill(right);
                    },
                    content: function () {
                        player.logSkill("xinxsusheng", null, null, null, [get.rand(2, 3)]);
                        player.callSubPlayer(player.storage.xinxsusheng_dist);
                        player.insertPhase();
                        player.addTempSkill('xinxsusheng_chosen', ['phaseBegin', 'phaseCancelled']);
                    },
                },
            }
        },
        xinxyuejian: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyuejian" + index + ".mp3" : 2),
            trigger: {
                global: "changeHpAfter",
            },
            line: {
                color: [235, 96, 138],
            },
            getIndex: event => Math.abs(event.num),
            priority: -1,
            forced: true,
            popup: false,
            unique: true,
            filter(event, player) {
                if (player.getHp() == 0) {
                    return false;
                }
                return event.player == player.getNext() || event.player == player.getPrevious() || event.player == player;
            },
            async content(event, trigger, player) {

                player.addMark('xinxsusheng_add', 1);
                // if (player.dying.length) return;
                game.log(player, '获得了一枚【新蕊】');
                player.markSkill("xinxsusheng");
                let num = player.maxHp;
                const target = player.storage.xinxsusheng_dist;
                if (player.countMark('xinxsusheng_add') >= num) {
                    await player.clearMark('xinxsusheng_add', false);
                    game.log(player, '移去了所有【新蕊】');
                    if (target) {
                        player.logSkill("xinxyuejian", null, null, null, [get.rand(1, 2, 4, 5)]);
                        // player.storage[target].hp += (player.storage[target].maxHp - player.storage[target].hp);
                        // player.storage[target].maxHp += 1;
                        player.gainMaxHp();
                        player.drawTo(player.maxHp);

                        // player
                        // .when({ global: "phaseAfter" })
                        // .step(async () => {
                        //     player.insertPhase("xinxyuejian");
                        // })
                        // .step(async () => {
                        //     player.callSubPlayer(player.storage.xinxsusheng_dist);
                        //     player.addTempSkill('xinxsusheng_chosen', ['phaseBegin', 'phaseCancelled']);
                        // });


                        player.insertPhase();
                        await player.callSubPlayer(player.storage.xinxsusheng_dist);
                        player.addTempSkill('xinxsusheng_chosen', ['phaseBegin', 'phaseCancelled']);


                        // player.callSubPlayer(player.storage.xinxsusheng_dist);
                        // player.addTempSkill('xinxyuejian_chosen', ['phaseBegin', 'phaseCancelled']);
                    } else {
                        player.logSkill("xinxyuejian", null, null, null, [3]);
                        let num1 = player.hp,
                            num2 = player.maxHp;
                        player.storage.xinxsusheng_dist = player.addSubPlayer({
                            name: "xinx_Pollux",
                            skills: ["xinxsusheng_swap", 'xinxhuiyi'],
                            hp: num2,
                            maxHp: num2,
                            sex: "female",
                            image: "ext:永夜之境/image/xinx_Pollux.png",
                            hs: get.cards(4),
                            skill: "xinxsusheng",
                            // intro: "你的本体回合结束后，切换至此随从并进行一个额外的回合。",
                            intro2: "当前回合结束后切换回本体",
                            onremove(player) {
                                delete player.storage.xinxsusheng_dist;
                            },
                        });
                    }

                }
            },
            ai: {
                combo: "xinxsusheng",
            },
            group: ['xinxyuejian_ins'],
            // ,'xinxyuejian_ins' , 'xinxyuejian_back' ,"xinxyuejian_damage",
            subSkill: {
                damage: {
                    trigger: {
                        global: "dying",
                    },
                    popup: false,
                    filter: function (event, player) {
                        const targets = game
                            .filterPlayer(target => {
                                return player.getStorage("xinxsusheng").includes(target);
                            }).sortBySeat();
                        return targets.includes(event.player) && player.storage.xinxsusheng_dist;
                    },
                    prompt(event, player) {
                        const target = player.storage.xinxsusheng_dist;
                        //const num = Math.ceil(player.storage[target].maxHp / 2);
                        const num = player.storage[target].hp;
                        return "是否消耗玻吕刻斯" + num + "点体力，令" + get.translation(event.player) + "回复1点体力";
                    },
                    check(event, player) {
                        return get.attitude(player, event.player) > 0;
                    },
                    async content(event, trigger, player) {
                        player.logSkill("xinxyuejian", null, null, null, [get.rand(1, 2)]);
                        const target = player.storage.xinxsusheng_dist;
                        const num = Math.ceil(player.storage[target].maxHp / 2);
                        if (player.storage[target].hp > num) {
                            player.storage[target].hp -= num;
                            player.changeSkin({ characterName: "xinx_xiadie" }, "xinx_xiadie_shadow");
                            player.line(trigger.player);
                            //await trigger.player.recoverTo(1);
                            await trigger.player.recover();
                            game.log('#b' + target, '失去了', num + '点体力');
                        }
                        else {
                            player.xinx_removeSubPlayer(target);
                            player.addMark('xinxmingxi_lose', 1, false);
                            player.changeSkin({ characterName: "xinx_xiadie" }, "xinx_xiadie_shadow");
                            player.line(trigger.player);
                            //await trigger.player.recoverTo(1);
                            await trigger.player.recover();
                        }
                        player.when({ global: "phaseAfter" }).step(async () => {
                            player.changeSkin({ characterName: "xinx_xiadie" }, "xinx_xiadie");
                        });
                    },
                },
                chosen: {
                    charlotte: true,
                },
                ins: {
                    trigger: {
                        global: ["phaseUseEnd"],
                    },
                    forced: true,
                    popup: false,
                    priority: -39,
                    filter: function (event, player) {
                        if (player.hasSkill('subplayer')) return false;
                        return player.storage.xinxsusheng_dist && player.hasSkill('xinxyuejian_chosen') && event.player != player;
                    },
                    content: function () {
                        // player.callSubPlayer(player.storage.xinxsusheng_dist);
                        //player.insertPhase();
                        //let next = player.phaseUse();
                        // event.next.remove(next);
                        // trigger.next.push(next);
                        player.removeSkill('xinxyuejian_chosen');
                        //player.addTempSkill('xinxsusheng_chosen', ['phaseBegin', 'phaseCancelled']);
                    },
                },
                back: {
                    trigger: {
                        player: "phaseJieshuBegin",
                    },
                    forced: true,
                    popup: false,
                    filter: function (event, player) {
                        return event.player != player;
                    },
                    priority: 21,
                    content: function () {
                        if (player.hasSkill('subplayer')) {
                            player.exitSubPlayer();
                        }
                        player.markSkill("xinxsusheng");
                    },
                },
            }

        },
        xinxmingxi: {
            group: ["xinxmingxi_die"],
            // "xinxmingxi_lose",
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxmingxi" + index + ".mp3" : 2),
            subSkill: {
                die: {
                    trigger: {
                        player: "subPlayerDie",
                    },
                    forced: true,
                    locked: false,
                    popup: false,
                    usable: 1,
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/xinxmingxi1.mp3");
                        var target = _status.currentPhase;
                        var num = 6 - target.countMark("xinxsusheng_count");
                        const result = await player
                            .chooseButton([
                                `###${get.translation(event.name)}###选择一项执行，并令${get.translation(_status.currentPhase)}执行另一项`,
                                [
                                    [
                                        ["use", "依次按序展示牌堆顶，牌堆底的一张牌，并使用之，直到无法使用。"],
                                        ["dis", "依次交给你" + num + "张装备牌，否则受到你造成的Y点伤害。（Y为" + num + "-其因此交给你的牌数）"],
                                    ],
                                    "textbutton",
                                ],
                            ])
                            .set("ai", button => {
                                const player = get.player();
                                if (button.link == "use") return 1;
                            })
                            .forResult();
                        if (result.bool) {
                            switch (result.links[0]) {
                                case 'use':
                                    player.logSkill("xinxmingxi", null, null, null, [2]);
                                    while (true) {
                                        let card1 = get.cards();
                                        game.cardsGotoOrdering(card1);
                                        player.showCards(card1);
                                        const usecard1 = card1.filter(function (i) {
                                            return player.hasUseTarget(i);
                                        });
                                        if (usecard1.length == 0) break;
                                        await game.delayx();
                                        await player.chooseUseTarget(card1, false, true);
                                        let card2 = get.bottomCards();
                                        game.cardsGotoOrdering(card2);
                                        player.showCards(card2);
                                        const usecard2 = card2.filter(function (i) {
                                            return player.hasUseTarget(i);
                                        });
                                        if (usecard2.length == 0) break;
                                        await game.delayx();
                                        await player.chooseUseTarget(card2, false, true);
                                    }
                                    if (target.isIn()) {
                                        player.logSkill("xinxmingxi", null, null, null, [3]);
                                        while (num > 0) {
                                            num--;
                                            const result2 = await
                                                target
                                                    .chooseToGive(player, "he", { type: "equip" })
                                                    .set("ai", card => {
                                                        if (_status.event.goon && get.suit(card) == "spade") return 8 - get.value(card);
                                                        return 5 - get.value(card);
                                                    })
                                                    .set("prompt", "苏生：是否交给" + get.translation(player) + "一张装备牌？")
                                                    .set("prompt2", "当前将受到" + (num + 1) + "点伤害")
                                                    .forResult();
                                            if (!result2.bool && target) {
                                                target.popup("杯具");
                                                player.logSkill("xinxmingxi", null, null, null, [get.rand(4, 5)]);
                                                player.line(target);
                                                target.damage(num + 1);
                                                break;
                                            }
                                        }
                                    }
                                    break;
                                case 'dis':
                                    player.logSkill("xinxmingxi", null, null, null, [3]);
                                    while (num > 0) {
                                        num--;
                                        const result2 = await
                                            target
                                                .chooseToGive(player, "he", { type: "equip" })
                                                .set("ai", card => {
                                                    if (_status.event.goon && get.suit(card) == "spade") return 8 - get.value(card);
                                                    return 5 - get.value(card);
                                                })
                                                .set("prompt", "苏生：是否交给" + get.translation(player) + "一张装备牌？")
                                                .set("prompt2", "当前将受到" + (num + 1) + "点伤害")
                                                .forResult();
                                        if (!result2.bool && target) {
                                            target.popup("杯具");
                                            player.logSkill("xinxmingxi", null, null, null, [get.rand(4, 5)]);
                                            player.line(target);
                                            target.damage(num + 1);
                                            break;
                                        }
                                    }
                                    if (target.isIn()) {
                                        player.logSkill("xinxmingxi", null, null, null, [2]);
                                        while (true) {
                                            let card1 = get.cards();
                                            game.cardsGotoOrdering(card1);
                                            target.showCards(card1);
                                            const usecard1 = card1.filter(function (i) {
                                                return target.hasUseTarget(i);
                                            });
                                            if (usecard1.length == 0) break;
                                            await target.chooseUseTarget(card1, true);
                                            let card2 = get.bottomCards();
                                            game.cardsGotoOrdering(card2);
                                            target.showCards(card2);
                                            const usecard2 = card2.filter(function (i) {
                                                return target.hasUseTarget(i);
                                            });
                                            if (usecard2.length == 0) break;
                                            await target.chooseUseTarget(card2, true);
                                        }
                                        break;
                                    }
                            }
                        }
                    }
                },
            }
        },
        //黄泉
        xinxcanmengx: {
            audio: "ext:永夜之境/audio:2",
            "audioname2": {
                xinx_huangquan: "xinxcanmeng",
                xinx_huangquan_shadow: "xinxcanmeng",
            },
        },

        xinxcanmeng: {
            audio: "ext:永夜之境/audio:2",
            derivation: "xinxcanmengx",
            forced: true,
            locked: true,
            init: (player, skill) => player.markSkill(skill),
            intro: {
                markcount(storage, player) {
                    let count = 0;
                    game.countPlayer(current => {
                        count += current.countCards('h', card => get.is.shownCard(card));
                    });
                    return count || null;
                },
                mark(dialog, storage, player) {
                    let cards = [];
                    game.countPlayer(current => {
                        cards.push(...current.getCards('h', card => get.is.shownCard(card)));
                    });
                    if (cards.length && player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                        return "场上明置的手牌";
                    }
                    return '共有' + get.cnNumber(cards.length) + '张明置的手牌';
                },
            },
            group: ["xinxcanmeng_handler"],
            subSkill: {
                handler: {
                    mod: {
                        // 提高AI使用这些牌的优先级
                        aiOrder(player, card, num) {
                            if (card?.hasGaintag?.("xinxcanmeng")) {
                                return num + 10;
                            }
                        },
                    },
                    onChooseToUse(event) {
                        if (game.online) return;
                        const player = event.player;

                        // 清理上一轮可能残留的虚拟牌
                        let oldCards = player.getCards("s", card => card.hasGaintag("xinxcanmeng"));
                        if (oldCards.length) {
                            game.deleteFakeCards(oldCards);
                        }

                        // 收集全场所有明置的手牌
                        let shownCards = [];
                        game.countPlayer(current => {
                            shownCards.push(...current.getCards('h', card => get.is.shownCard(card)));
                        });

                        if (shownCards.length) {
                            // 生成虚拟牌并直接给予玩家（带有特定标签）
                            const fakes = game.createFakeCards(shownCards);
                            player.directgains(fakes, null, "xinxcanmeng");
                            // 遍历生成的假牌，将右上角的标签改为原拥有者的名字
                            for (let i = 0; i < fakes.length; i++) {
                                const fake = fakes[i];
                                const real = shownCards[i]; // fakes 和 shownCards 一一对应
                                if (fake.node && fake.node.gaintag && real) {
                                    const owner = get.owner(real);
                                    if (owner) {
                                        fake.node.gaintag.innerHTML = owner.getName();
                                    }
                                }
                            }
                        }
                    },
                    onChooseToRespond(event) {
                        if (game.online) return;
                        const player = event.player;

                        let oldCards = player.getCards("s", card => card.hasGaintag("xinxcanmeng"));
                        if (oldCards.length) {
                            game.deleteFakeCards(oldCards);
                        }

                        let shownCards = [];
                        game.countPlayer(current => {
                            shownCards.push(...current.getCards('h', card => get.is.shownCard(card)));
                        });

                        if (shownCards.length) {
                            const fakes = game.createFakeCards(shownCards);
                            player.directgains(fakes, null, "xinxcanmeng");
                            for (let i = 0; i < fakes.length; i++) {
                                const fake = fakes[i];
                                const real = shownCards[i]; // fakes 和 shownCards 一一对应
                                if (fake.node && fake.node.gaintag && real) {
                                    const owner = get.owner(real);
                                    if (owner) {
                                        fake.node.gaintag.innerHTML = owner.getName();
                                    }
                                }
                            }
                        }
                    },
                    trigger: {
                        player: ["useCardBefore", "respondBefore", "chooseToUseAfter", "chooseToRespondAfter"],
                    },
                    filter(event, player) {
                        // 仅当玩家使用了带有技能标签的虚拟牌（或对应ID的真牌）时触发
                        if (["useCard", "respond"].includes(event.name)) {
                            let shownCards = [];
                            game.countPlayer(current => {
                                shownCards.push(...current.getCards('h', card => get.is.shownCard(card)));
                            });
                            // 检查事件中的牌ID是否存在于当前的明置牌列表中
                            return event.cards?.some(card => shownCards.some(sc => sc.cardid == card._cardid));
                        }
                        return true;
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        if (["useCard", "respond"].includes(trigger.name)) {
                            if (!trigger.skill) {
                                trigger.skill = "xinxcanmeng";
                            } else {
                                await player.logSkill("xinxcanmeng");
                            }

                            if (trigger.name == 'useCard') {
                                trigger.addCount = false; // 关键代码：本次使用不计入次数

                                // 处理 xinxmeng 标记的强中效果
                                if (player.storage.xinxmeng) {
                                    if (!trigger.directHit) trigger.directHit = [];
                                    trigger.directHit.addArray(game.players);
                                }
                            }

                            // 重新获取最新的明置牌对象
                            let shownCards = [];
                            game.countPlayer(current => {
                                shownCards.push(...current.getCards('h', card => get.is.shownCard(card)));
                            });

                            // 将玩家使用的虚拟牌替换为场上真实的明置牌
                            for (let i = 0; i < trigger.cards.length; i++) {
                                const card = trigger.cards[i];
                                const realCard = shownCards.find(sc => sc.cardid == card._cardid);
                                if (realCard) {
                                    trigger.cards[i] = realCard;
                                    if (trigger.card && trigger.card.cards) {
                                        trigger.card.cards[i] = realCard;
                                    }
                                }
                            }
                        }
                        // 清理虚拟牌
                        let cards = player.getCards("s", card => card.hasGaintag("xinxcanmeng"));
                        if (cards.length) {
                            game.deleteFakeCards(cards);
                        }
                    },
                },
            },
        },
        /*xinxcanmeng: {
            audio: "ext:永夜之境/audio:2",
            derivation: "xinxcanmengx",
           // markimage: 'extension/永夜之境/image/mark/xinxcanmeng.png',
            init: (player, skill) => player.markSkill(skill),
            intro: {
                markcount(storage, player) {
                    let cards = [];
                    for (const target of game.players) {
                        const handCards = target.getCards("h");
                        const shownCards = handCards.filter(card => get.is.shownCard(card));
                        cards.push(...shownCards);
                    }
                    let num = cards.length;
                    if (num == 0) return null;
                    return num;
                },
                mark(dialog, storage, player) {
                    let cards = [];
                    for (const target of game.players) {
                        const handCards = target.getCards("h");
                        const shownCards = handCards.filter(card => get.is.shownCard(card));
                        cards.push(...shownCards);
                    }
                    if (cards.length > 0 && player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                        return "场上明置的手牌";
                    }
                    return '共有' + get.cnNumber(cards.length) + '张明置的手牌';
                },
            },
            enable: ["chooseToUse", "chooseToRespond"],
            hiddenCard(player, name) {
                return get.type(name) == "basic" && lib.inpile.includes(name);
            },
            filter(event, player) {
                if (event.type === "wuxie") return false;
                return game.hasPlayer(current => {
                    return current.hasCard(card => get.is.shownCard(card), 'h') && current.countCards('h') > 0;
                });
            },
            delay: false,
            popup: false,
            async content(event, trigger, player) {
                const evt = event.getParent(2);
                const cards = [];
                for (const player of game.players) {
                    const handCards = player.getCards("h");
                    const shownCards = handCards.filter(card => get.is.shownCard(card));
                    cards.push(...shownCards);
                }
                const cardsx = cards.slice().map(card => {
                    const cardx = ui.create.card();
                    cardx.init(get.cardInfo(card));
                    cardx._cardid = card.cardid;
                    return cardx;
                });
                evt.set("xinxcanmeng", true);
                player.directgains(cardsx, null, "xinxcanmeng_hs");
                const result = await player
                    .chooseCard(
                        "残梦：选择要" + (evt.name == "chooseToUse" ? "使用" : "打出") + "的牌",
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
                        if (get.type(card) == "equip") return 0;
                        const evt = get.event().getParent(3),
                            player = get.event().player;
                        if (evt.type == "phase" && !player.hasValueTarget(card, null, true)) return 0;
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
                const cards2 = player.getCards("s", card => card.hasGaintag("xinxcanmeng_hs"));
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
                                lib.skill.xinxcanmeng_backup.viewAs = { name: name, cards: [result], isCard: true };
                            },
                            card,
                            name
                        );
                        evt.set("_backupevent", "xinxcanmeng_backup");
                        evt.set("openskilldialog", "请选择" + get.translation(card) + "的目标");
                        evt.backup("xinxcanmeng_backup");
                        evt.set("addCount", false);
                        if (player.storage.xinxmeng) {
                            evt.set("oncard", () => {
                                _status.event.directHit.addArray(game.players);
                            });
                        }
                    } else {
                        delete evt.result.used;
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
            group: ['xinxcanmeng_backup','xinxcanmeng_wuxie'],
            //   "xinxcanmeng_use","xinxcanmeng_useResult",
            subSkill: {
                backup: {
                    precontent() {
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
                    },
                    filterCard: () => false,
                    selectCard: -1,
                    log: false,
                },
                hs: {
                },
                wuxie: {
                    trigger: {
                        global: ["_wuxieBegin","_wuxieEnd"],
                    },
                    delay: false,
                    direct: true,
                    log: false,
                    async content(event, trigger, player) {
                        let deleteCards = player.getCards('s', (card) => card.hasGaintag('xinxcanmeng_hs'));
                        if (player.isOnline2()) {
                            player.send((cards, player) => {
                                cards.forEach(i => i.delete());
                                if (player == game.me) ui.updatehl();
                            }, deleteCards, player);
                        };
                        deleteCards.forEach(i => i.delete());
                        if (player == game.me) ui.updatehl();
                        if (event.triggername == '_wuxieEnd') return;
                        // let cards = [];
                        // let cards_xs = [], cards_top = [], cards_first = [];
                        // const num = player.hp;
                        const evt = event.getParent(2);
                        let cards = [];
                        for (const player of game.players) {
                            const handCards = player.getCards("h");
                            const shownCards = handCards.filter(card => get.is.shownCard(card));
                            cards.push(...shownCards);
                        }
                        let cardsx = cards.slice().map(card => {
                            const cardx = ui.create.card();
                            cardx.init(get.cardInfo(card));
                            cardx._cardid = card.cardid;
                            return cardx;
                        });
                        evt.set("xinxcanmeng", true);
                       // cards_first = get.cards(num, true);
                     //   cards.addArray(cardx);
                        let copy_cards = cards.map(card => {
                            let cardx = ui.create.card();
                            cardx.init(get.cardInfo(card));
                            cardx._cardid = card.cardid;
                            cardx._infoCard = card;
                            return cardx;
                        });
                        player.directgains(copy_cards);
                        for (let card of copy_cards) {
                            let cardx = cards.find((cardx) => cardx.cardid === card._cardid);
                            if (cardx) card.addGaintag('xinxcanmeng_hs');
                        };
                    },
                    sub: true,
                    "_priority": 0,
                },
            },

        },*/
        xinxleizhix: {
            audio: "ext:永夜之境/audio:5",
            "audioname2": {
                xinx_huangquan: "xinxleizhi",
                xinx_huangquan_shadow: "xinxleizhi",
            },
        },
        xinxleizhi: {
            derivation: "xinxleizhix",
            audio: "ext:永夜之境/audio:5",
            trigger: {
                player: "useCardToPlayer",
                target: "useCardToTarget",
            },
            forced: true,
            locked(skill, player) {
                if (!player || !player.storage.xinxmeng) return false;
                return true;
            },
            filter(event, player) {
                if (event.player == event.target) return false;
                if (!player.storage.xinxmeng && event.name == "useCardToTarget") return false;
                return (player == event.player ? event.target : event.player).countCards('h', card => !get.is.shownCard(card));
            },
            logAudio(event, player) {
                if (event.name == "useCardToPlayer") return ["ext:永夜之境/audio/xinxleizhi1.mp3", "ext:永夜之境/audio/xinxleizhi2.mp3", "ext:永夜之境/audio/xinxleizhi3.mp3"];
                else return ["ext:永夜之境/audio/xinxleizhi4.mp3", "ext:永夜之境/audio/xinxleizhi5.mp3"];
            },
            logTarget: function (event, player) {
                return player == event.player ? event.target : event.player;
            },
            check: function (event, player) {
                return get.attitude(player, player == event.player ? event.target : event.player) <= 0;
            },
            async content(event, trigger, player) {
                const target = (trigger.name == "useCardToPlayer" ? trigger.target : trigger.player);
                //  player.logSkill("xinxleizhi", null, null, null, trigger.name == "useCardToPlayered" ? [get.rand(1,3)] : [get.rand(4, 5)]);
                await target.addTempSkill('xinxleizhi_effect');
                const result = await target.chooseCard('h', card => !get.is.shownCard(card), true,
                )
                    .set('prompt', `请选择明置一张手牌`)
                    .set("ai", card => 6 - get.value(card))
                    .forResult();
                if (result.bool) {
                    await target.addShownCards(result.cards, "visible_xinxleizhi");
                    if (!player.storage.xinxmeng) {
                        await target.addSkill('xinxleizhi_effect');
                        target.when({ global: 'useCardAfter' })
                            .filter(evt => evt === trigger.getParent())
                            .step(async (event, trigger, player) => {
                                await player.removeSkill('xinxleizhi_effect');
                            });
                    } else {
                        await target.addTempSkill('xinxleizhi_effect');
                    }
                }
            },
            subSkill: {
                effect: {
                    charlotte: true,
                    mod: {
                        cardEnabled2(card) {
                            if (get.is.shownCard(card)) return false;
                        },
                    }
                }
            }
        },
        xinxjizhen: {
            derivation: "xinxliaoduan",
            audio: "ext:永夜之境/audio:1",
            trigger: {
                global: "phaseUseEnd",
            },
            forced: true,
            locked: false,
            filter(event, player) {
                if (player.storage.xinxmeng) return false;
                return game.players.some(target => {
                    const handCards = target.getCards("h");
                    return handCards.every(card => get.is.shownCard(card));
                    // handCards.length > 0 &&
                });
            },
            async content(event, trigger, player) {
                //player.drawTo(player.maxHp);
                player.draw(2);
                player.storage.xinxmeng = true;
                player.changeSkin({ characterName: "xinx_huangquan" }, "xinx_huangquan_shadow");
                player.changeSkills(["xinxliaoduan"], ["xinxjizhen"]);
                ui.background.setBackgroundImage('extension/永夜之境/image/background/huangquan.webp');
            }

        },
        xinxliaoduan: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: ["phaseJieshu", 'dieBegin'],
            },
            forced: true,
            locked: false,
            filter(event, player) {
                if (!player.storage.xinxmeng) return false;
                if (event.name == "phaseJieshu") { return !player.getHistory("sourceDamage").length; }
                return true;
            },
            async content(event, trigger, player) {
                //const targets = game.filterPlayer(current => current != player);
                if (trigger.name == "phaseJieshu") {
                    const targets = game.filterPlayer(current => {
                        return current != player && current.hasCard(card => !get.is.shownCard(card), 'h');
                    });
                    player.line(targets);
                    for (const target of targets) {
                        const result = await target.chooseCard('h', card => !get.is.shownCard(card), true,
                        )
                            .set('prompt', `请选择明置一张手牌`)
                            .set("ai", card => 6 - get.value(card))
                            .forResult();
                        if (result.bool && result.cards.length) {
                            await target.addShownCards(result.cards, "visible_xinxleizhi");
                            player.draw();
                        }
                    }
                    // let num = targets.length;
                    // player.draw(num);
                    delete player.storage.xinxmeng;
                    player.changeSkin({ characterName: "xinx_huangquan" }, "xinx_huangquan");
                    ui.background.setBackgroundImage("image/background/" + lib.config.image_background + ".jpg");
                    player.changeSkills(["xinxjizhen"], ["xinxliaoduan"]);
                }
                else {
                    ui.background.setBackgroundImage("image/background/" + lib.config.image_background + ".jpg");
                }
            }

        },
        //罗刹
        xinxyunjiu: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyunjiu" + index + ".mp3" : "ext:永夜之境/audio/xinxyunjiu" + get.rand(1, 2) + ".mp3"),
            trigger: {
                global: "roundStart",
            },
            forced: true,
            locked: false,
            async content(event, trigger, player) {
                let num = player.maxHp;
                player.draw(num);
                //player.drawTo(num);
                const result = await player.chooseCard("he", [1, num], `运柩：选择至多${num}张牌置入牌堆`)
                    .set("ai", card => {
                        if (
                            get.cardNameLength(card) >= 4 && card.name != "zhuge"
                        ) {
                            return 100;
                        } else {
                            return 0;
                        }
                    })
                    .forResult();
                if (result.bool) {
                    player.$throw(result.cards.length, 1000);
                    const cards = result.cards;
                    await player.markAuto("xinxyunjiu", cards);
                    await player.addGaintag(cards, "eternal_xinxyunjiu_tag");
                    player.loseToDiscardpile(cards, ui.cardPile, "blank").set("log", false).insert_index = function () {
                        return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                    };
                    game.log(player, `将${get.translation(cards)}张牌置入了牌堆`);

                    //  await player.draw(cards.length);
                }
            },
            mark: true,
            intro: {
                mark(dialog, storage, player) {
                    if (player.isUnderControl(true)) {
                        if (storage && storage.length > 0) {
                            dialog.addAuto(storage);
                            return '运柩的牌：' + get.translation(storage);
                        }
                        else {
                            return '无卡牌';
                        }
                    }
                },
            },

            group: ['xinxyunjiu_effect'],
            subSkill: {
                tag: {
                },
                effect: {
                    trigger: {
                        // global: ["gainEnd", "loseAsyncEnd"],
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "addToExpansionAfter"],
                    },
                    filter(event, player) {
                        // 检查 event 中是否存在 cards 属性
                        if (!event.cards || !Array.isArray(event.cards)) return false;
                        const reCards = player.storage.xinxyunjiu;
                        if (!reCards || !reCards.length) return false;
                        // 遍历所有卡牌，检查是否属于 storage.xinxyunjiu 记录的牌
                        for (let card of event.cards) {
                            if (reCards.includes(card)) {
                                return true;
                            }
                        }
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        const listcards = player.storage.xinxyunjiu;
                        const cards = trigger.cards.filter(card => listcards.includes(card));
                        const numx = cards.reduce((sum, card) => sum + get.cardNameLength(card), 0);
                        await player.unmarkAuto("xinxyunjiu", cards);
                        await player.removeGaintag("eternal_xinxyunjiu_tag", cards);
                        const target = trigger.player;
                        const result = await player
                            .chooseButton([
                                '选择一项',
                                [
                                    [
                                        ["draw", `摸${numx}张牌`],
                                        ["dis", `令${get.translation(trigger.player)}将${numx}张牌标记为“柩”并置入牌堆`],
                                    ],
                                    "textbutton",
                                ],
                            ], true)
                            .set("filterButton", button => !(button.link === "dis" && !trigger.player.countCards("he")))
                            .set("ai", button => {
                                const player = get.player();
                                if (get.attitude(player, target) < 0 && target.countCards("he") >= numx) {
                                    return button.link === "dis";
                                }
                                return button.link === "draw";
                            })
                            .set("complexCard", true)
                            .set("numx", numx)
                            .forResult();
                        if (result.bool) {
                            player.logSkill("xinxyunjiu", [target], null, null, [get.rand(3, 4)]);
                            if (result.links[0] === "draw") {
                                await player.draw(numx);
                            } else {
                                const count = target.countCards("he");
                                let result2;
                                if (count <= numx) {
                                    result2 = { bool: true, cards: target.getCards("he") };
                                } else {
                                    result2 = await target.chooseCard("he", true, numx, `运柩：选择${numx}张牌置入牌堆`).forResult();
                                }
                                if (result2.bool) {
                                    const targetCards = result2.cards;
                                    target.$throw(targetCards.length, 1000);
                                    // 标记新牌为“柩”
                                    await player.markAuto("xinxyunjiu", targetCards);
                                    await player.addGaintag(targetCards, "eternal_xinxyunjiu_tag");
                                    await target.loseToDiscardpile(targetCards, ui.cardPile, "blank").set("log", false);
                                    targetCards.forEach(card => {
                                        ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                    });
                                    game.log(target, `将${get.cnNumber(targetCards.length)}张牌置入了牌堆并标记为“柩”`);
                                }
                            }
                            /*  switch (result.links[0]) {
                                 case "draw":
                                     player.logSkill("xinxyunjiu", [target], null, null, [get.rand(3, 4)]);
                                     await player.draw(numx);
                                     break;
                                 case "dis":
                                     player.logSkill("xinxyunjiu", [target], null, null, [get.rand(3, 4)]);
                                     const cards1 = target.getCards("he");
                                     let result;
                                     if (target.countCards("he") < numx) {
                                         // 自动选择所有可用牌
                                         result = {
                                             bool: true,
                                             cards: cards1,
                                         };
                                     } else { result = await target.chooseCard("he", true, numx, `运柩：选择${numx}张牌置入牌堆`).forResult(); }
                                     if (result.bool) {
                                         target.$throw(result.cards.length, 1000);
                                         const cards = result.cards;
                                         await player.markAuto("xinxyunjiu", cards);
                                         await player.addGaintag(cards, "eternal_xinxyunjiu_tag");
                                         target.loseToDiscardpile(cards, ui.cardPile, "blank").set("log", false).insert_index = function () {
                                             return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                                         };
                                         game.log(target, `将${get.cnNumber(cards.length)}张牌置入了牌堆`);
                                     }
                                     break;
                             } */
                        }

                    }
                },

            }
        },

        xinxjiangxing: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjiangxing" + index + ".mp3" : "ext:永夜之境/audio/xinxjiangxing" + (1) + ".mp3"),
            enable: "phaseUse",
            usable: 1,
            limited: true,
            skillAnimation: true,
            animationColor: "thunder",
            filter(event, player) {
                return game.dead.length;
            },
            async content(event, trigger, player) {
                const list = [];
                for (let i = 0; i < game.dead.length; i++) {
                    list.push(game.dead[i].name);
                }
                const result = await player.chooseButton(ui.create.dialog('令一名已死亡的角色复活', game.dead.slice(0)))
                    .set("ai", function (button) {
                        return _status.event.player.attitudeTo(button.link);
                    })
                    .forResult();
                if (result.bool) {
                    const target = result.links[0];
                    await game.delayx();
                    player.logSkill("xinxjiangxing", [target], null, null, [2]);
                    target.draw(4);
                    target.revive(target.maxHp);
                    target.addSkill('xinxjiangxing_effect');
                    player.awakenSkill("xinxjiangxing");
                }
            },
            ai: {
                order: 7,
                result: {
                    target(player, target) {
                        return 2;
                    },
                },

            },
            subSkill: {
                effect: {
                    trigger: {
                        player: ["phaseZhunbeiBegin", 'phaseJieshuBegin'],
                    },
                    forced: true,
                    charlotte: true,
                    silent: true,
                    async content(event, trigger, player) {
                        if (event.triggername == "phaseZhunbeiBegin") {
                            const targets = game.players.slice().concat(game.dead);
                            const cards = targets.reduce((list, target) => list.addArray(target.getStorage("xinxyunjiu")), []).randomGets(1);
                            if (cards) {
                                player.logSkill("xinxjiangxing", null, null, null, [get.rand(3, 4)]);
                                player.gain(cards, "gain2");
                            } else {
                                player.chat("无牌可得");
                            }
                        }
                        else {
                            const cards = player.getCards("he");
                            player.$throw(cards.length, 1000);
                            player.logSkill("xinxyunjiu", null, null, null, [3]);
                            await player.markAuto("xinxyunjiu", cards);
                            await player.addGaintag(cards, "eternal_xinxyunjiu_tag");
                            player.loseToDiscardpile(cards, ui.cardPile, "blank").set("log", false).insert_index = function () {
                                return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                            };
                            game.log(player, `将${get.cnNumber(cards.length)}张牌置入了牌堆`);
                            await player.die();
                        }
                    }
                }

            }

        },
        //符玄
        xinxqiongguan: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxqiongguan" + index + ".mp3" : 2),
            trigger: {
                global: "changeHp",
            },
            filter(event, player) {
                if (event.player.hasSkill('xinxqiongguan_add')) return false;
                return event.num < 0;
                //event.player!==player&&
            },
            forced: true,
            locked: false,
            popup: false,
            async content(event, trigger, player) {
                let cards = player.getStorage("xinxqiongguan_mark").slice().filterInD("odchesj");
                // let cards1 = cards.filter(card => player.hasUseTarget(card));
                let num = 0;
                const props = [
                    { key: "hp", get: p => p.hp },
                    //{ key: "maxHp", get: p => p.maxHp },
                    { key: "hand", get: p => p.countCards("h") },
                    { key: "equip", get: p => p.countCards("e") }
                ];
                for (const prop of props) {
                    const triggerVal = prop.get(trigger.player);
                    const playerVal = prop.get(player);
                    if (playerVal === triggerVal) {
                        num++;
                    }
                }
                if (num > 0 && cards.length) {
                    player.logSkill("xinxqiongguan", null, null, null, [get.rand(1, 2)]);
                    let useCount = 0;
                    while (cards.some(card => player.hasUseTarget(card)) && useCount < num) {
                        const result = await player
                            .chooseButton(["穷观：是否使用一张牌？（还可使用" + get.cnNumber(num - useCount) + "张）", cards])
                            .set("filterButton", button => {
                                return get.player().hasUseTarget(button.link);
                            })
                            .set("ai", button => {
                                return get.player().getUseValue(button.link);
                            })
                            .forResult();
                        if (result.bool) {
                            trigger.player.addTempSkill('xinxqiongguan_add', { global: 'roundStart' });
                            const card = result.links[0];
                            cards.remove(card);
                            player.$gain2(card, false);
                            await game.delayx();
                            player.logSkill("xinxqiongguan", null, null, null, [get.rand(3, 4)]);
                            await player.chooseUseTarget(true, card, false);
                            useCount++;
                        }
                        else {
                            break;
                        }
                    }
                }
            },
            group: ['xinxqiongguan_mark'],
            subSkill: {
                add: {
                    charlotte: true,
                },
                mark: {
                    trigger: {
                        global: ["pileChanged"],
                        // global: ["useCard","loseAfter","equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter","cardsDiscardAfter"],
                    },
                    // filter(event, player) {
                    //     return event.player!==player;
                    // },
                    silent: true,
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        if (_status.currentPhase == player) return false;
                        return event.position == "o" && event.addedCards;
                        // &&event.player!==player
                    },
                    async content(event, trigger, player) {
                        var cards = trigger.addedCards;
                        player.markAuto("xinxqiongguan_mark", cards);
                        //player.markAuto("xinxqiongguan_mark", trigger.cards);
                        player.when({ global: "roundStart" }).step(async () => {
                            delete player.storage.xinxqiongguan_mark;
                        });
                    },
                }
            }
        },
        xinxgeze: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: 'phaseBegin',
            },
            async cost(event, trigger, player) {
                const result = await player
                    .chooseButtonTarget({
                        createDialog: [
                            `###${get.prompt(event.skill)}###<div class="text center">将你的以下一项调整至与一名其他角色相同</div>`,
                            [
                                [
                                    ["hp", "体力值"],
                                    ["maxHp", "体力上限"],
                                    ["hand", "手牌数"],
                                    ["equip", "装备数"],
                                ],
                                "tdnodes",
                            ],
                        ],
                        filterButton(button) {
                            const checkList = {
                                "hand": target => target.countCards("h"),
                                "equip": target => target.countCards("e"),
                                "hp": target => target.getHp(),
                                "maxHp": target => target.maxHp
                            };
                            const getVal = checkList[button.link];
                            if (!getVal) return true;
                            const myVal = getVal(player);
                            return game.hasPlayer(target => {
                                return target !== player && getVal(target) !== myVal;
                            });
                        },
                        filterTarget(card, player, target) {
                            return target !== player;
                        },
                        ai1(button) {
                            const player = get.player();
                            let maxScore = 0;
                            let maxPlayer = null;
                            // 找出每种属性最大值  
                            let maxHpMax = 0, hpMax = 0, handMax = 0, equipMax = 0;
                            game.filterPlayer(current => {
                                if (current === player) return false;
                                if (current.maxHp > maxHpMax) maxHpMax = current.maxHp;
                                if (current.hp > hpMax) hpMax = current.hp;
                                if (current.countCards('h') > handMax) handMax = current.countCards('h');
                                if (current.countCards('e') > equipMax) equipMax = current.countCards('e');
                                return true;
                            });

                            // 计算提升差值  
                            const maxHpDiff = maxHpMax > player.maxHp ? maxHpMax - player.maxHp : 0;
                            const hpDiff = hpMax > player.hp ? hpMax - player.hp : 0;
                            const handDiff = handMax > player.countCards('h') ? handMax - player.countCards('h') : 0;
                            const equipDiff = equipMax > player.countCards('e') ? equipMax - player.countCards('e') : 0;

                            // 对不同属性设置不同权重（优先级）  
                            const weights = { 'maxHp': 10, 'hp': 5, 'hand': 5, 'equip': 3 };
                            const scores = {
                                'maxHp': maxHpDiff * weights.maxHp,
                                'hp': hpDiff * weights.hp,
                                'hand': handDiff * weights.hand,
                                'equip': equipDiff * weights.equip
                            };

                            // 如果按钮不可选，返回-1  
                            if (button.link == 'hand' && !game.hasPlayer(target =>
                                target.countDiscardableCards(player, 'h') && target !== player)) {
                                return -1;
                            }
                            if (button.link == 'equip' && !game.hasPlayer(target =>
                                target.countDiscardableCards(player, 'e') && target !== player)) {
                                return -1;
                            }

                            return scores[button.link] || 0;
                        },
                        ai2(target) {
                            const player = get.player();
                            const type = ui.selected.buttons[0].link;

                            // 计算该目标在对应属性上的分数  
                            let score = 0;

                            if (type == 'maxHp') {
                                // 体力上限 - 优先选择体力上限最高的  
                                score = target.maxHp - player.maxHp;
                            } else if (type == 'hp') {
                                // 体力值 - 优先选择体力值最高的  
                                score = target.hp - player.hp;
                            } else if (type == 'hand') {
                                // 手牌数 - 优先选择手牌数最多的  
                                score = target.countCards('h') - player.countCards('h');
                            } else if (type == 'equip') {
                                // 装备数 - 优先选择装备数最多的  
                                score = target.countCards('e') - player.countCards('e');
                            }

                            // 根据敌友关系调整分数  
                            if (get.attitude(player, target) < 0) {
                                // 对敌人的评分可以略微降低，因为有些情况下未必希望敌人成为目标  
                                score *= 0.8;
                            }

                            return score > 0 ? score : 0.1; // 返回非零值使AI至少有选择  
                        }

                    })
                    .forResult();
                if (result.bool) {
                    event.result = {
                        bool: true,
                        cost_data: {
                            links: result.links,
                            targets: result?.targets || [],
                        },
                    };
                }
            },
            async content(event, trigger, player) {
                const link = event.cost_data.links[0],
                    targets = event.cost_data.targets;
                const target = targets[0];
                player.storage.xinxgeze_reload = [player.getHp(), player.maxHp, player.countCards('e'), player.countCards('h')];
                const storage = player.storage.xinxgeze_reload;
                if (link == "hp" && targets.length) {
                    player.line(targets);
                    if (target.hp > player.hp) {
                        await player.recoverTo(target.hp);
                    } else {
                        await player.loseHp(player.hp - target.hp);
                    }
                    let num = player.getHp() - storage[0];
                    if (Math.abs(num) > 2) {
                        player.changeHp(2 - player.getHp(true));
                    }
                }
                if (link == "maxHp" && targets.length) {
                    player.line(targets);
                    if (target.maxHp > player.maxHp) {
                        await player.gainMaxHp(target.maxHp - player.maxHp);
                    } else {
                        await player.loseMaxHp(player.maxHp - target.maxHp);
                    }
                    let num = player.maxHp - storage[1];
                    if (Math.abs(num) > 2) {
                        player.changeHp(2 - player.getHp(true));
                    }
                }
                if (link == "equip" && targets.length) {
                    player.line(targets);
                    if (target.countCards('e') > player.countCards('e')) {
                        let useCount = 0;
                        const num1 = target.countCards('e') - player.countCards('e');
                        // 收集所有空置的装备栏位置（假设最多 5 个装备栏）
                        const emptySlots = [];
                        for (let i = 1; i <= 5; i++) {
                            if (player.hasEmptySlot(i)) {
                                emptySlots.push(i);
                            }
                        }
                        // 按从下往上的顺序处理空置栏位（确保优先使用靠后的栏位）
                        for (let i = emptySlots.length - 1; i >= 0; i--) {
                            const slot = emptySlots[i];
                            let card = get.cardPile((card) => {
                                return get.subtype(card) == 'equip' + slot && player.canUse(card, player);
                            });
                            if (card && useCount < num1) {
                                //card && 
                                await player.chooseUseTarget(card, true, 'nopopup');
                                useCount++;
                            }
                        }
                    }
                    else {
                        let num1 = player.countCards('e') - target.countCards('e');
                        await player.chooseToDiscard('e', true, num1);
                    }
                    let num = player.countCards('e') - storage[2];
                    if (Math.abs(num) > 2) {
                        player.changeHp(2 - player.getHp(true));
                    }
                }
                if (link == "hand" && targets.length) {
                    player.line(targets);
                    if (target.countCards('h') >= player.countCards('h')) {
                        await player.drawTo(target.countCards('h'));
                    } else if (player.countCards('h')) {
                        await player.chooseToDiscard('h', true, player.countCards('h') - target.countCards('h'));
                    };
                    let num = player.countCards('h') - storage[3];
                    if (Math.abs(num) > 2) {
                        player.changeHp(2 - player.getHp(true));
                    }
                }
                //   if (Math.abs(num)<=2&&targets.length){
                player.link(true);
                target.link(true);
                //   }
            }
        },
        xinxkangxin: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxkangxin" + index + ".mp3" : 3),
            init(player) {
                player.storage.xinxkangxin = 1;
            },
            mark: true,
            markimage: 'extension/永夜之境/image/mark/xinxkangxin.png',
            intro: {
                content(storage) {
                    return `不能使用牌名字数大于${get.cnNumber(storage)}的手牌`;
                },
            },
            onremove(player, skill) {
                delete player.storage.xinxkangxin;
            },
            trigger: {
                player: 'useCard',
            },
            filter(event, player) {
                let storage = player.storage.xinxkangxin;
                return storage < 5;
            },
            forced: true,
            async content(event, trigger, player) {
                player.storage.xinxkangxin++;
                player.markSkill('xinxkangxin');
                player.when({ global: "phaseEnd" }).step(async () => {
                    player.storage.xinxkangxin = 1;
                    player.markSkill('xinxkangxin');
                });
            },
            group: ['xinxkangxin_ban', 'xinxkangxin_draw'],
            subSkill: {
                draw: {
                    trigger: {
                        player: "phaseJieshuBegin",
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        player.logSkill("xinxkangxin", null, null, null, [get.rand(3, 4)]);
                        let num = player.storage.xinxkangxin;
                        player.draw(num);
                    }
                },
                ban: {
                    mod: {
                        cardEnabled(card, player) {
                            let num = player.storage.xinxkangxin;
                            if (get.cardNameLength(card) > num) {
                                return false; // 禁用
                            }
                            return true;
                        },
                        cardSavable(card, player) {
                            let num = player.storage.xinxkangxin;
                            if (get.cardNameLength(card) > num) {
                                return false; // 禁用
                            }
                        },

                    },
                },
            }

        },
        xinxzhuoshi: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzhuoshi" + index + ".mp3" : 2),
            enable: "phaseUse",
            usable: 1,
            viewAsFilter(player) {
                return player.countCards("hes") > 0;
            },
            check(card) {
                return 7 - get.value(card);
            },
            selectCard: [1, 3],
            filterCard: (card) => get.itemtype(card) == "card",
            position: "hes",
            viewAs: { name: "xinxnilin" },
            prompt: "将至多三张牌当作【逆鳞】使用",
            onuse(result, player) {
                let num = result.cards.length;
                player.addTempSkill('xinxzhuoshi_add');
                player.storage.xinxzhuoshi_add = num;
            },
            ai: {
                order: 8,
                result: {
                    player: 1,
                },
            },
            subSkill: {
                add: {
                    mark: true,
                    markimage: 'extension/永夜之境/image/mark/xinxnilin.png',
                    intro: {
                        content: "出杀上限、手牌上限、攻击范围+$",
                    },
                    charlotte: true,
                    init(player) {
                        player.storage.xinxzhuoshi_add = 1;
                    },
                    onremove(player, skill) {
                        delete player.storage.xinxzhuoshi_add;
                    },
                    mod: {
                        cardUsable(card, player, num) {
                            if (card.name == "sha") return num += player.storage.xinxzhuoshi_add;
                        },
                        attackRange: (player, num) => num += player.storage.xinxzhuoshi_add,
                        maxHandcard: (player, num) => num += player.storage.xinxzhuoshi_add,
                    },

                },
                effect: {
                    trigger: {
                        source: "damageBegin1",
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        player.logSkill("xinxzhuoshi", null, null, null, [get.rand(3, 4)]);
                        game.setNature(trigger, "xinx_xushu");
                    }
                },
                skip: {
                    mark: true,
                    markimage: 'extension/永夜之境/image/mark/xinxzhuoshi.png',
                    intro: {
                        content: "无法使用或打出伤害牌",
                    },
                    forced: true,
                    charlotte: true,
                    mod: {
                        cardEnabled2(card) {
                            if (get.tag(card, 'damage')) return false;
                        },
                    },

                }
            }
        },
        xinxzhuhuox: {
            audio: "ext:永夜之境/audio:5",
            "audioname2": {
                xinx_baie: "xinxzhuhuo",
                xinx_baie_shadow: "xinxzhuhuo",
            },
        },
        xinxzhuhuo: {

            audio: "ext:永夜之境/audio:5",
            audioname: ["xinx_baie_shadow"],
            // logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzhuhuo" + index + ".mp3" : 2),
            trigger: {
                player: "useCardToPlayer",
            },
            forced: true,
            popup: false,
            filter(event, player) {
                if (player._xinxzhuhuo_lock || event.getParent(2).name == 'qinglong_skill') return false;
                return get.tag(event.card, 'damage') && event.target;
            },
            async content(event, trigger, player) {

                const parent = trigger.getParent();
                if (!parent._xinxzhuhuo_chosenTarget) {
                    parent._xinxzhuhuo_chosenTarget = "checking";
                    const allTargets = parent.targets;
                    let chosen = null;
                    if (allTargets.length === 1) {
                        chosen = allTargets[0];
                    } else {
                        const result = await player.chooseTarget(
                            '逐火：请选择其中一名目标修改对其的结算方式',
                            function (card, player, target) {
                                return _status.event.validTargets.includes(target);
                            }
                        ).set('validTargets', allTargets)
                            .set('forced', true)
                            .set('ai', target => {
                                const player = get.player();
                                if (get.attitude(player, target) > 0) return 0;
                                let hp = player.hp;
                                let count = target.countCards('he');
                                if (count - hp > 4) return 15;
                                if (count - hp == 0) return 10;
                                if (count - hp > 2) return 5;
                                return 1;
                            }).forResult();

                        if (result.bool && result.targets.length) {
                            chosen = result.targets[0];
                        } else {
                            chosen = trigger.target;
                        }
                    }
                    // 将选中的目标存入父事件，供后续触发读取
                    parent._xinxzhuhuo_chosenTarget = chosen;

                    for (let i = 0; i < allTargets.length; i++) {
                        parent.excluded.add(allTargets[i]);
                    }
                }
                if (trigger.target !== parent._xinxzhuhuo_chosenTarget) {
                    return;
                }
                const target = trigger.target;
                //trigger.getParent().excluded.add(target);

                let hp = player.hp;
                if (player.storage.xinxzhuhuo) {
                    const result =
                        await player.chooseNumbers(get.prompt(event.name),
                            [{ prompt: `请选择你要调整${get.translation(target)}的牌数`, min: 0, max: player.maxHp }], true)
                            .set('aiTarget', target)
                            .set("processAI", () => {
                                const player = get.player();
                                const target = _status.event.aiTarget;
                                const maxOpt = player.maxHp;
                                const minOpt = 0;
                                if (!target) return [minOpt];
                                const currentCount = target.countCards('he');
                                if (get.attitude(player, target) > 0) {
                                    return [maxOpt];
                                }
                                if (target.hp <= 2 && currentCount <= 2) {
                                    return [currentCount];
                                }
                                if (currentCount > maxOpt) {
                                    return [minOpt];
                                }
                                const gainFromZero = currentCount;
                                const gainFromMax = maxOpt - currentCount;
                                const maxCardGain = Math.max(gainFromZero, gainFromMax);
                                // 策略：只有当牌差收益超过2（即3张及以上）时，才贪牌
                                // 否则选择 currentCount (让牌数不变)，从而触发火焰伤害
                                if (maxCardGain <= 2) {
                                    return [currentCount];
                                } else {
                                    if (gainFromZero > gainFromMax) {
                                        return [minOpt];
                                    } else {
                                        return [maxOpt];
                                    }
                                }

                            }).forResult();
                    if (result && result.numbers && result.numbers.length) {
                        let number = result.numbers[0];
                        hp = number;
                        game.log(player, '将基准牌数调整为', hp);
                    }
                }
                const count = target.countCards('he');
                let cards_processed = [];
                let changed = false;
                if (count > hp) {
                    let num = count - hp;
                    const resultd = await target.chooseToDiscard(num, 'he', true).forResult();
                    if (resultd?.bool && resultd.cards.length) {
                        cards_processed = resultd.cards;
                        changed = true;
                    }
                } else if (count < hp) {
                    let num = hp - count;
                    const draw = await target.draw(num).forResult();
                    if (draw?.bool && draw.length) {
                        cards_processed = draw.cards;
                        changed = true;
                    }
                }
                if (!changed) {
                    player.line(target, "fire");
                    if (player.storage.xinxzhuhuo) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxzhuhuo_xinx_baie_shadow' + [get.rand(1, 2)] + '.mp3');
                        game.log(target, '牌数未变化，受到1点火焰伤害');
                        target.damage(1, 'fire');
                    }
                    else {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxzhuhuo' + [get.rand(1, 2)] + '.mp3');
                        game.log(target, '牌数未变化，与', player, '各受到1点火焰伤害');
                        await player.damage(1, 'fire', 'nosource');
                        await target.damage(1, 'fire', 'nosource');
                    }

                } else {
                    while (true) {
                        const canUse = cards_processed.filter(card => {
                            return (get.position(card) == "d" || get.position(card) == "h" || get.position(card) == "e"
                                || get.position(card) == "x" || get.position(card) == "s")
                                && player.hasUseTarget(card);
                        });

                        if (!canUse.length) {
                            break;
                        }
                        const result2 = await player.chooseButton(
                            ["逐火：是否使用其中一张牌？", canUse]
                        ).set("ai", button => {
                            return player.getUseValue(button.link);
                        }).forResult();
                        if (result2.bool && result2.links && result2.links.length) {
                            const card = result2.links[0];
                            if (player.hasUseTarget(card)) {
                                cards_processed.remove(card);
                                //await player.chooseUseTarget(card, true, false);

                                player._xinxzhuhuo_lock = true;
                                try {
                                    if (player.storage.xinxzhuhuo) {
                                        game.playAudio("../extension/永夜之境/audio/", 'xinxzhuhuo_xinx_baie_shadow' + [get.rand(3, 5)] + '.mp3');
                                    } else {
                                        game.playAudio("../extension/永夜之境/audio/", 'xinxzhuhuo' + [get.rand(3, 5)] + '.mp3');
                                    }
                                    player.$gain2(card, false);
                                    await game.delayx();
                                    await player.chooseUseTarget(card, true, false);
                                } catch (e) {
                                    console.error(e);
                                } finally {
                                    //解锁：无论使用成功还是取消，必须移除标记
                                    // 这样下一次正常出牌才能再次触发技能
                                    delete player._xinxzhuhuo_lock;
                                }
                            }
                        } else {
                            break;
                        }
                    }
                }
            }


        },

        xinxfushi: {
            derivation: ["xinxzhuhuox", 'xinxyongjie'],
            audio: "ext:永夜之境/audio:3",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxfushi" + index + ".mp3" : 2),
            trigger: {
                global: "useCardToPlayer",
            },
            popup: false,
            usable: 1,
            filter(event, player) {
                if (event.target === player) return false;
                if (get.tag(event.card, 'damage')) return false;
                const cardNum = get.number(event.card) || 0;
                return cardNum <= player.hp && typeof get.number(event.card) == 'number';
            },
            check(event, player) {
                let eff = get.effect(player, event.card, event.player, player);
                return eff >= 0;
            },
            logTarget: "target",
            async content(event, trigger, player) {
                var parent = trigger.getParent();
                parent.targets.length = 0;
                parent.targets.push(player);
                trigger.target = player;
                player.logSkill("xinxfushi", null, null, null, [get.rand(1, 2)]);
                game.log(player, "将", trigger.card, "的所有目标转移给了自己");
                await player.damage('fire', 'nosource', 'unreal');

            },
            mark: true,
            markimage: 'extension/永夜之境/image/mark/xinxfushi.png',
            onremove: true,
            init(player) {
                player.storage.xinxfushi = 0;
            },
            onremove(player) {
                delete player.storage.xinxfushi;
            },
            intro: {
                name: "火种",
                content: "本局累计受到伤害：#点",
            },
            group: ["xinxfushi_record", "xinxfushi_recover"],

            subSkill: {
                record: {
                    trigger: {
                        player: "damageEnd",
                    },
                    forced: true,
                    locked: false,
                    silent: true,
                    async content(event, trigger, player) {
                        player.addMark('xinxfushi', trigger.num);
                        player.markSkill('xinxfushi');
                    },
                },
                recover: {
                    trigger: {
                        player: "damageEnd",
                        global: "dieAfter",
                    },
                    forced: true,
                    locked: false,
                    popup: false,
                    filter(event, player) {
                        const fireCount = player.countMark('xinxfushi');
                        const aliveCount = game.countPlayer();
                        if (fireCount <= aliveCount) return false;
                        if (event.name === 'damage') {
                            return event.player === player;
                        }
                        if (event.name === 'die') {
                            return true;
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        player.logSkill("xinxfushi", null, null, null, [3]);
                        player.changeSkin({ characterName: "xinx_baie" }, "xinx_baie_shadow");
                        await new Promise(resolve => {
                            lib.element.content.xinxplayVideo(
                                "extension/永夜之境/video/baie_begin.mp4",
                                {
                                    pauseGame: true,
                                    skippable: true
                                },
                                resolve
                            );
                        });
                        await player.recover();
                        player.storage.xinxzhuhuo = true;
                        //player.clearMark('xinxfushi',false);
                        await player.changeSkills(["xinxyongjie"], ["xinxfushi"]);
                    },
                    sub: true,
                }
            }
        },
        xinxyongjie: {

            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyongjie" + index + ".mp3" : 2),
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            popup: false,
            locked: false,
            forced: true,
            priority: -1,
            async content(event, trigger, player) {
                // 1. 获取场上所有存活角色
                const targets = game.filterPlayer();
                const num = targets.length;
                player.logSkill("xinxyongjie", targets, null, null, [get.rand(1, 2)]);
                const cardsToPile = [];
                for (let i = 0; i < num; i++) {
                    const card = game.createCard('sha');
                    card.nature = 'fire';
                    card.addGaintag('xinxyongjie');

                    if (i === 0) {
                        // 第一张：玩家自己获得
                        player.gain(card, 'gain2');
                        player.$gain2(card);
                    } else {
                        cardsToPile.push(card);
                    }
                }
                await game.cardsGotoPile(cardsToPile, () => {
                    return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                });
                game.log(player, '将', cardsToPile.length, '张', '#r【火杀】', '洗入牌堆');
            },
            mod: {
                aiOrder(player, card, num) {
                    if (card.hasGaintag && card.hasGaintag('xinxyongjie')) {
                        let boost = 20;
                        return num + boost;
                    }
                }
            },
            group: ["xinxyongjie_quit", 'xinxyongjie_audio2', 'xinxyongjie_addCount'],
            subSkill: {
                quit: {
                    trigger: {
                        player: "dying",
                    },
                    forced: true,
                    locked: false,
                    filter(event, player) {
                        return player.storage.xinxzhuhuo;
                    },
                    async content(event, trigger, player) {
                        player.logSkill("xinxyongjie", null, null, null, [5]);
                        delete player.storage.xinxzhuhuo;
                        await player.refreshSkill("xinxfushi");
                        await new Promise(resolve => {
                            lib.element.content.xinxplayVideo(
                                "extension/永夜之境/video/baie_end.mp4",
                                {
                                    pauseGame: true,
                                    skippable: true
                                },
                                resolve
                            );
                        });
                        player.changeSkin({ characterName: "xinx_baie" }, "xinx_baie");
                        await player.changeSkills(["xinxfushi"], ["xinxyongjie"]);
                        player.gainMaxHp();
                        await player.recoverTo(1);
                    },
                },
                addCount: {
                    trigger: {
                        player: "useCard1",
                    },
                    forced: true,
                    filter(event, player) {
                        return (
                            event.addCount !== false &&
                            player.hasHistory("lose", evt => {
                                return (evt.relatedEvent || evt.getParent()) == event && evt.hs.length && Object.values(evt.gaintag_map).flat().includes("xinxyongjie");
                            })
                        );
                    },
                    async content(event, trigger, player) {
                        player.logSkill("xinxyongjie", null, null, null, [get.rand(3, 4)]);
                        player.draw();
                        trigger.addCount = false;
                        const stat = player.getStat().card,
                            name = trigger.card.name;
                        if (typeof stat[name] == "number") {
                            stat[name]--;
                        }
                        game.log(trigger.card, "不计入次数");
                    },
                },
                audio2: {
                    silent: true,
                    supercharlotte: true,
                    trigger: {
                        player: "damageEnd",
                    },
                    content() {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxyongjie' + [get.rand(6, 8)] + '.mp3');
                    }
                },

            }
        },
        /*xinxjueying: {
            hiddenCard(player, name) {
                if (ui.cardPile.hasChildNodes !== false) {
                    // 获取牌堆顶的3张牌
                    const pile = Array.from(ui.cardPile.childNodes).slice(0, 3);
                    // 【关键】检查这3张牌里是否有名字匹配的牌
                    // 找到了返回 true，找不到返回 false
                    return pile.some(card => card.name === name);
                }
                return false;
            },
            getCards(player) {
                let cards = [];
                // 获取数量 X = 玩家体力值
                const count = Math.max(0, 3);
                if (game.online) {
                    return game.requestSkillData("xinxjueying", "getTopCards", 10000);
                } else {
                    if (ui.cardPile.hasChildNodes !== false) {
                        cards = Array.from(ui.cardPile.childNodes).slice(0, count);
                    }
                }
                game.addCardKnower(cards, player);
                return cards;
            },
            sync: {
                getTopCards(client) {
                    if (ui.cardPile.hasChildNodes !== false) {
                        // 对应修改：获取数量跟随玩家体力
                        const count = Math.max(0, 3);
                        let cards = Array.from(ui.cardPile.childNodes).slice(0, count);
                        game.addCardKnower(cards, player);
                        return cards;
                    }
                    return [];
                },
            },
            mark: true,
            marktext: "英",
            intro: {
                markcount(storage, player) {
                   return 3;
                },
                mark(dialog, storage, player) {
                    if (player.isUnderControl(true) && ui.cardPile.childNodes.length) {
                        let cards = [];
                        let num = ui.cardPile.childElementCount;
                        for (var i = 0; i < 3 && i < num; i++) {
                            cards.push(ui.cardPile.childNodes[i]);
                        }
                        dialog.addAuto(cards);
                        return '牌堆顶的' + get.cnNumber(player.hp) + '张牌';
                    };
                    return '';
                },
               
            },
            group: "xinxjueying_aocai",
            subSkill: {
                aocai: {
                    mod: {
                        // 移除了cardEnabled2限制，现在可以如手牌般使用任何类型的牌（包括装备）
                        aiOrder(player, card, num) {
                            if (card?.hasGaintag?.("xinxjueying")) {
                                return num + 0.1;
                            }
                        },
                    },
                    onChooseToUse(event) {
                        if (game.online) {
                            return;
                        }
                        const player = event.player;
                        let cards = player.getCards("s", card => card.hasGaintag("xinxjueying"));
                        if (cards.length) {
                            game.deleteFakeCards(cards);
                        }
                        if (ui.cardPile.hasChildNodes !== false) {
                            // 对应修改：生成虚拟牌的数量为体力值
                            const count = Math.max(0, 3);
                            cards = Array.from(ui.cardPile.childNodes).slice(0, count);
                            player.directgains(game.createFakeCards(cards), null, "xinxjueying");
                        }
                    },
                    onChooseToRespond(event) {
                        if (game.online) {
                            return;
                        }
                        const player = event.player;
                        let cards = player.getCards("s", card => card.hasGaintag("xinxjueying"));
                        if (cards.length) {
                            game.deleteFakeCards(cards);
                        }
                        if (ui.cardPile.hasChildNodes !== false) {
                            // 对应修改：生成虚拟牌的数量为体力值
                            const count = Math.max(0, 3);
                            cards = Array.from(ui.cardPile.childNodes).slice(0, count);
                            player.directgains(game.createFakeCards(cards), null, "xinxjueying");
                        }
                    },
                    trigger: {
                        player: ["useCardBefore", "respondBefore", "chooseToUseAfter", "chooseToRespondAfter"],
                    },
                    filter(event, player) {
                        if (["useCard", "respond"].includes(event.name)) {
                            // 对应修改：判定使用的牌是否在体力值范围内的牌堆顶
                            const count = Math.max(0, 3);
                            const pile = Array.from(ui.cardPile.childNodes).slice(0, count);
                            return event.cards?.some(card => pile.some(cardx => cardx.cardid == card._cardid));
                        }
                        return true;
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        if (["useCard", "respond"].includes(trigger.name)) {
                            if (!trigger.skill) {
                                trigger.skill = "xinxjueying";
                            } else {
                                await player.logSkill("xinxjueying");
                            }
                            const cards = await get.info("xinxjueying").getCards(player);
                            for (let i = 0; i < trigger.cards.length; i++) {
                                const card = trigger.cards[i];
                                const cardx = cards.find(cardx => cardx.cardid == card._cardid);
                                if (cardx) {
                                    trigger.cards[i] = cardx;
                                    trigger.card.cards[i] = cardx;
                                }
                            }
                        }
                        let cards = player.getCards("s", card => card.hasGaintag("xinxjueying"));
                        if (cards.length) {
                            game.deleteFakeCards(cards);
                        }
                    },
                },
            },
        },*/
        xinxjueying: {
            init(player, skill) {
                if (typeof player.storage[skill] !== "number") {
                    player.storage[skill] = 1;
                }
            },
            mark: true,
            marktext: "英",
            audio: "ext:永夜之境/audio:8",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjueying" + index + ".mp3" : 2),
            intro: {
                markcount(storage, player) {
                    return Math.min(3, storage || 1);
                },
                content(storage, player) {
                    const num = Math.min(3, storage || 1);
                    const count = player.storage.xinxzhuodeng_count || 0;
                    return `当前X为${num}。<br>累计伤害次数：${count}`;
                },
                mark(dialog, storage, player) {
                    const num = Math.min(3, storage || 1);
                    if (player.isUnderControl(true) && ui.cardPile.childNodes.length) {
                        const pile = Array.from(ui.cardPile.childNodes);
                        const hasTop = player.storage.xinxzhuoxiao;

                        /* // 获取牌堆底
                        let bottomCards = pile.slice(-num);
                        // 如果开启了牌堆顶，则获取
                        let topCards = hasTop ? pile.slice(0, num) : [];

                        // 去重显示（防止牌堆极少时重复）
                        if (hasTop) {
                            bottomCards = bottomCards.filter(c => !topCards.includes(c));
                        } */

                        let topCards = pile.slice(0, num);
                        let bottomCards = hasTop ? pile.slice(-num) : [];
                        if (hasTop) {
                            topCards = topCards.filter(c => !bottomCards.includes(c));
                        }


                        if (topCards.length) {
                            dialog.addText("【牌堆顶】");
                            // 兼容UI的创建方式
                            dialog.addAuto(topCards.map(c => {
                                var copy = ui.create.card();
                                copy.init(get.cardInfo(c));
                                return copy;
                            }));
                        }

                        if (hasTop && bottomCards.length) {
                            dialog.addText("【牌堆底】");
                            dialog.addAuto(bottomCards.map(c => {
                                var copy = ui.create.card();
                                copy.init(get.cardInfo(c));
                                return copy;
                            }));
                        }
                        return '牌堆可见卡牌';
                    }
                    return `当前X=${num}`;
                },
            },
            // 核心逻辑：判断是否有牌可用
            hiddenCard(player, name) {
                if (name) {
                    if (ui.cardPile.hasChildNodes !== false) {
                        const num = Math.min(3, player.storage.xinxjueying || 1);
                        const pile = Array.from(ui.cardPile.childNodes);

                        /*     // 始终包含牌堆底
                           let range = pile.slice(-num);

                            // 如果卓效开启，包含牌堆顶
                            if (player.storage.xinxzhuoxiao) {
                                range = range.concat(pile.slice(0, num));
                            } */

                        // 【修改】默认包含牌堆顶
                        let range = pile.slice(0, num);

                        // 【修改】卓效开启，追加牌堆底
                        if (player.storage.xinxzhuoxiao) {
                            range = range.concat(pile.slice(-num));
                        }

                        // 检查范围内是否有该牌
                        return range.some(card => card.name === name);
                    }
                    return false;
                }
                return true;
            },
            //点击查看
            /*clickable(player) {
                if (player.isUnderControl(true)) {
                    const dialog = ui.create.dialog("攫英", "peaceDialog");
                    const num = Math.min(3, player.storage.xinxjueying || 1);

                    if (ui.cardPile.hasChildNodes !== false && ui.cardPile.childNodes.length > 0) {
                        const pile = Array.from(ui.cardPile.childNodes);
                        const hasBottom = player.storage.xinxzhuoxiao; // 【修改】检测是否开启底部
                        // 【修改】默认顶部
                        const topCards = pile.slice(0, num);
                        // 【修改】卓效底部
                        const bottomCards = hasBottom ? pile.slice(-num).filter(c => !topCards.includes(c)) : [];

                        if (hasTop && topCards.length) {
                            dialog.addText(`—— 牌堆顶(${topCards.length}) ——`);
                            dialog.add(topCards.map(c => {
                                var copy = ui.create.card();
                                copy.init(get.cardInfo(c));
                                return copy;
                            }));
                        }
                        if (bottomCards.length) {
                            dialog.addText(`—— 牌堆底(${bottomCards.length}) ——`);
                            dialog.add(bottomCards.map(c => {
                                var copy = ui.create.card();
                                copy.init(get.cardInfo(c));
                                return copy;
                            }));
                        }
                    } else {
                        dialog.addText("牌堆无牌");
                    }

                    const control = ui.create.control("确定", () => dialog.close());
                    dialog._close = dialog.close;
                    dialog.hide = dialog.close = function (...args) {
                        control.close();
                        return dialog._close(...args);
                    };
                    if (_status.xinxjueying_clickable) {
                        _status.xinxjueying_clickable.close();
                    }
                    _status.xinxjueying_clickable = dialog;
                    dialog.open();
                }
            }*/
            // 数据获取（用于AI和同步）
            getCards(player) {
                let cards = [];
                if (game.online) {
                    return game.requestSkillData("xinxjueying", "getTopCards", 10000);
                } else {
                    if (ui.cardPile.hasChildNodes !== false) {
                        const num = Math.min(3, player.storage.xinxjueying || 1);
                        const pile = Array.from(ui.cardPile.childNodes);

                        // const bottomCards = pile.slice(-num);
                        // const topCards = player.storage.xinxzhuoxiao ? pile.slice(0, num) : [];


                        // 顶
                        const topCards = pile.slice(0, num);
                        // 底
                        const bottomCards = player.storage.xinxzhuoxiao ? pile.slice(-num) : [];


                        cards = Array.from(new Set([...topCards, ...bottomCards]));
                    }
                }
                game.addCardKnower(cards, player);
                return cards;
            },
            sync: {
                getTopCards(client) {
                    if (ui.cardPile.hasChildNodes !== false) {
                        const num = Math.min(3, player.storage.xinxjueying || 1);
                        const pile = Array.from(ui.cardPile.childNodes);

                        // const bottomCards = pile.slice(-num);
                        // const topCards = player.storage.xinxzhuoxiao ? pile.slice(0, num) : [];


                        const topCards = pile.slice(0, num);
                        const bottomCards = player.storage.xinxzhuoxiao ? pile.slice(-num) : [];


                        let cards = Array.from(new Set([...topCards, ...bottomCards]));
                        game.addCardKnower(cards, player);
                        return cards;
                    }
                    return [];
                },
            },
            // 
            group: ["xinxjueying_aocai", "xinxjueying_count"],
            subSkill: {
                count: {

                },
                // 虚拟牌逻辑
                aocai: {
                    mod: {
                        aiOrder(player, card, num) {
                            if (card?.hasGaintag?.("xinxjueyingt") || card?.hasGaintag?.("xinxjueyingx")) {
                                return num + 0.1;
                            }
                        },
                    },
                    onChooseToUse(event) {
                        if (game.online) return;
                        const player = event.player;

                        // 1. 清理旧牌 (同时清理 t 和 x)
                        let oldCards = player.getCards("s", card =>
                            card.hasGaintag("xinxjueyingt") || card.hasGaintag("xinxjueyingx")
                        );
                        if (oldCards.length) {
                            game.deleteFakeCards(oldCards);
                        }

                        // 2. 生成新牌
                        if (ui.cardPile.hasChildNodes !== false) {
                            const num = Math.min(3, player.storage.xinxjueying || 1);
                            const pile = Array.from(ui.cardPile.childNodes);

                            // const hasTop = player.storage.xinxzhuoxiao;
                            // // 获取顶部（如有）
                            // const topCards = hasTop ? pile.slice(0, num) : [];
                            // // 获取底部（去重：如果顶部已经有了这张牌，则算作顶部，底部不生成）
                            // const bottomCards = pile.slice(-num).filter(c => !topCards.includes(c));


                            const hasBottom = player.storage.xinxzhuoxiao; // 开关
                            // 生成顶部
                            const topCards = pile.slice(0, num);
                            // 生成底部（去重）
                            const bottomCards = hasBottom ? pile.slice(-num).filter(c => !topCards.includes(c)) : [];


                            // 牌堆顶 -> xinxjueyingt
                            if (topCards.length) {
                                player.directgains(game.createFakeCards(topCards), null, "xinxjueyingt");
                            }
                            // 牌堆底 -> xinxjueyingx
                            if (bottomCards.length) {
                                player.directgains(game.createFakeCards(bottomCards), null, "xinxjueyingx");
                            }
                        }
                    },
                    onChooseToRespond(event) {
                        if (game.online) return;
                        const player = event.player;

                        let oldCards = player.getCards("s", card =>
                            card.hasGaintag("xinxjueyingt") || card.hasGaintag("xinxjueyingx")
                        );
                        if (oldCards.length) {
                            game.deleteFakeCards(oldCards);
                        }

                        if (ui.cardPile.hasChildNodes !== false) {
                            const num = Math.min(3, player.storage.xinxjueying || 1);
                            const pile = Array.from(ui.cardPile.childNodes);

                            // const hasTop = player.storage.xinxzhuoxiao;
                            // const topCards = hasTop ? pile.slice(0, num) : [];
                            // const bottomCards = pile.slice(-num).filter(c => !topCards.includes(c));

                            // 【修改】同上
                            const hasBottom = player.storage.xinxzhuoxiao;
                            const topCards = pile.slice(0, num);
                            const bottomCards = hasBottom ? pile.slice(-num).filter(c => !topCards.includes(c)) : [];



                            if (topCards.length) {
                                player.directgains(game.createFakeCards(topCards), null, "xinxjueyingt");
                            }
                            if (bottomCards.length) {
                                player.directgains(game.createFakeCards(bottomCards), null, "xinxjueyingx");
                            }
                        }
                    },
                    trigger: {
                        player: ["useCardBefore", "respondBefore", "chooseToUseAfter", "chooseToRespondAfter"],
                    },
                    filter(event, player) {
                        if (["useCard", "respond"].includes(event.name)) {
                            // 验证牌是否在合法范围内
                            const num = Math.min(3, player.storage.xinxjueying || 1);
                            const pile = Array.from(ui.cardPile.childNodes);

                            /* let validCards = pile.slice(-num); // 底部
                            if (player.storage.xinxzhuoxiao) {
                                validCards = validCards.concat(pile.slice(0, num)); // 加上顶部
                            } */

                            // 【修改】验证范围：顶 + (可选)底
                            let validCards = pile.slice(0, num);
                            if (player.storage.xinxzhuoxiao) {
                                validCards = validCards.concat(pile.slice(-num));
                            }

                            // 使用卡牌ID匹配
                            return event.cards?.some(card => validCards.some(cardx => cardx.cardid == card._cardid));
                        }
                        return true;
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        if (["useCard", "respond"].includes(trigger.name)) {

                            if (player.storage.xinxzhuoxiao) {
                                await player.logSkill("xinxjueying", null, null, null, [get.rand(5, 8)]);
                            } else {
                                await player.logSkill("xinxjueying", null, null, null, [get.rand(1, 4)]);
                            }


                            const cards = await get.info("xinxjueying").getCards(player);

                            for (let i = 0; i < trigger.cards.length; i++) {
                                const card = trigger.cards[i];
                                const cardx = cards.find(cardx => cardx.cardid == card._cardid);
                                if (cardx) {
                                    trigger.cards[i] = cardx;
                                    trigger.card.cards[i] = cardx;
                                }
                            }
                        }
                        let cards = player.getCards("s", card =>
                            card.hasGaintag("xinxjueyingt") || card.hasGaintag("xinxjueyingx")
                        );
                        if (cards.length) {
                            game.deleteFakeCards(cards);
                        }
                    },
                },
            },
        },
        xinxzhuodeng: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzhuodeng" + index + ".mp3" : 2),
            trigger: {
                source: "damageSource",
                global: "dying",
                player: "damage",
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                if (event.name === 'damage') {
                    return (player.storage.xinxjueying || 1) < 3;
                }
                if (event.name === 'dying') {
                    return event.source === player;
                }
                return false;
            },
            async content(event, trigger, player) {
                /* if (trigger.name === 'damage') {
                    // 如果是第一次触发，初始化为0再+1，即1
                    player.storage.xinxzhuodeng_count = (player.storage.xinxzhuodeng_count || 0) + 1;
                    const count = player.storage.xinxzhuodeng_count;

                    // 2. 判断是否为偶数次 (count % 2 === 0)
                    // 且 X 未达到上限（虽然filter拦过了，双重保险）
                    if (count % 2 === 0) {
                        let currentX = player.storage.xinxjueying || 1;
                        if (currentX < 3) {
                           // player.storage.xinxjueying = currentX + 1;
                           let newX = currentX + 1;
                           player.storage.xinxjueying = newX;
                           if (newX === 2) {
                               player.changeSkin({ characterName: "xinx_feixiao" }, "xinx_feixiao_shadow2");
                               //game.log(player, '进阶！'); 
                           } 
                           else if (newX === 3) {
                               //随机选择 shadow4 或 shadow5
                               const targetSkin = Math.random() < 0.5 ? "xinx_feixiao_shadow4" : "xinx_feixiao_shadow5";
                               player.changeSkin({ characterName: "xinx_feixiao" }, targetSkin);
                              // player.changeSkin({ characterName: "xinx_feixiao" }, "xinx_feixiao_shadow4");
                           }
                game.log(player, '累计第', count, '次造成伤害，', '#g【攫英】', '层数+1'); */

                if (trigger.name === 'damage') {
                    let shouldUpgrade = false; // 标记本次是否需要升级
                    let logType = ""; // 用于日志记录是哪种方式升级
                    let currentCount = 0;
                    // 注意：如果自己对自己造成伤害，会分别触发两次技能（一次作为source，一次作为player），逻辑上是正确的
                    if (trigger.source === player) {
                        player.logSkill("xinxzhuodeng", null, null, null, [get.rand(2, 4)]);
                        player.storage.xinxzhuodeng_count = (player.storage.xinxzhuodeng_count || 0) + 1;
                        currentCount = player.storage.xinxzhuodeng_count;
                        if (currentCount % 2 === 0) {
                            shouldUpgrade = true;
                            logType = "造成";
                        }
                    }
                    if (trigger.player === player) {
                        // 使用独立的计数器：recv_count
                        player.storage.xinxzhuodeng_recv_count = (player.storage.xinxzhuodeng_recv_count || 0) + 1;
                        currentCount = player.storage.xinxzhuodeng_recv_count;
                        if (currentCount % 2 === 0) {
                            shouldUpgrade = true;
                            logType = "受到";
                        }
                    }

                    // 执行升级逻辑
                    if (shouldUpgrade) {
                        let currentX = player.storage.xinxjueying || 1;

                        // 双重检查 X 是否小于 3
                        if (currentX < 3) {
                            let newX = currentX + 1;
                            player.storage.xinxjueying = newX;

                            // ---------------- 换肤逻辑 ----------------
                            if (newX === 2) {
                                player.changeSkin({ characterName: "xinx_feixiao" }, "xinx_feixiao_shadow2");

                            } else if (newX === 3) {
                                const targetSkin = Math.random() < 0.5 ? "xinx_feixiao_shadow4" : "xinx_feixiao_shadow5";
                                player.changeSkin({ characterName: "xinx_feixiao" }, targetSkin);
                            }

                            player.popup('层数+1');
                            game.log(player, `累计第${currentCount}次${logType}伤害，`, '#g【攫英】', '层数+1');

                            // 刷新一技能标记
                            if (player.hasSkill("xinxjueying")) {
                                player.updateMark("xinxjueying");
                            }
                        }
                    }
                }

                else if (trigger.name === 'dying') {
                    player.logSkill("xinxzhuodeng", null, null, null, [1]);
                    if (!player.storage.xinxzhuoxiao) {
                        game.log(player, '触发了', '#g【擢霄】');
                        player.popup('擢霄');
                        await player.changeSkin({ characterName: "xinx_feixiao" }, "xinx_feixiao_shadow3");
                        player.storage.xinxzhuoxiao = true;
                        // 开启后立即刷新一技能标记（更新为顶+底）
                        if (player.hasSkill("xinxjueying")) {
                            player.updateMark("xinxjueying");
                        }
                    }
                }
            },

        },


        xinxzhanshu: {
            // === 1. 技能初始化：注册专属区域与技能 ===
            onremove(player, skill) {
                player.removeSkill("xinxzhanshu_ui");
            },
            init(player, skill) {
                // 定义专属牌堆和弃牌堆的变量名
                const pileName = "xinxPile";
                const discardName = "xinxDiscard";

                // 注册【专属牌堆】区域 (用于逻辑处理和可能的动画)
                if (!lib.commonArea.has(pileName)) {
                    lib.commonArea.set(pileName, {
                        translate: "专属牌堆",
                        areaStatusName: pileName,
                        isUnseen: true, // 牌堆不可见
                        toName: "toXinxPile",
                        fromName: "fromXinxPile",
                        // 监听卡牌移入事件
                        async addHandeler(event, trigger, player) {
                            _status[pileName].addArray(event.cards);
                            lib.skill.xinxzhanshu.update();
                        },
                        // 监听卡牌移出事件
                        async removeHandeler(event, trigger, player) {
                            _status[pileName].removeArray(event.cards);
                            lib.skill.xinxzhanshu.update();
                        }
                    });
                }

                // 注册【专属弃牌堆】区域
                if (!lib.commonArea.has(discardName)) {
                    lib.commonArea.set(discardName, {
                        translate: "专属弃牌堆",
                        areaStatusName: discardName,
                        toName: "toXinxDiscard",
                        fromName: "fromXinxDiscard",
                        async addHandeler(event, trigger, player) {
                            _status[discardName].addArray(event.cards);
                            game.log(event.cards, "被移入专属弃牌堆");
                            lib.skill.xinxzhanshu.update();
                        },
                        async removeHandeler(event, trigger, player) {
                            _status[discardName].removeArray(event.cards);
                            lib.skill.xinxzhanshu.update();
                        }
                    });
                }

                player.addSkill("xinxzhanshu_ui");
                if (!_status[pileName]) {
                    lib.skill.xinxzhanshu.initPile();
                }
            },

            /**
             * 初始化牌堆 (配置初始卡组的地方)
             * @param {boolean} isReshuffle - 是否仅为洗牌过程(不重新生成卡牌)
             */
            initPile(isReshuffle = false) {
                const pileName = "xinxPile";
                const discardName = "xinxDiscard";
                if (isReshuffle) {
                    _status[pileName] ??= [];
                    _status[discardName] ??= [];
                    return;
                }

                // === 自定义初始卡组配置区域 ===
                // 格式: [花色, 点数, 牌名]
                // ================================== ['diamond', 7, 'xinxnilin'],
                const deckConfig = [
                    // --- 基本牌 ---
                    ['heart', 9, 'tao'], ['diamond', 9, 'jiu'],
                    ['spade', 7, 'sha'], ['spade', 8, 'sha'],
                    ['heart', 5, 'shan'], ['diamond', 13, 'xinxkanpo'], ['heart', 2, 'xinxwangshizhiyue'],
                    // --- 锦囊牌 ---
                    ['diamond', 12, 'xinxyishenweiju'], ['club', 12, 'wuxie'], ['heart', 7, 'xinxmingxinzhiyue'], ['spade', 7, 'xinxyuheiyongwen'],
                    ['diamond', 12, 'shunshou'], ['spade', 12, 'guohe'], ['club', 12, 'xinxguiji'], ['heart', 4, 'xinxjiyibiaoben'],
                    ['diamond', 7, 'xinxnilin'],
                    // --- 装备牌 ---
                    ['spade', 2, 'bagua'], ['diamond', 1, 'xinxqinchen'],
                ];

                const cards = [];
                // 使用 for...of 遍历配置生成卡牌
                for (const info of deckConfig) {
                    const card = lib.skill.xinxzhanshu.createSpecialCard(info[0], info[1], info[2]);
                    cards.push(card);
                }

                // 初始打乱
                cards.randomSort();
                // 赋值给全局状态
                _status[pileName] = cards;
                _status[discardName] = [];

                // 将牌移动到"special"场外区域，避免在界面上乱飘
                game.cardsGotoSpecial(cards);

                // 更新显示
                lib.skill.xinxzhanshu.update();
            },

            /**
             * 创建特殊卡牌 (核心逻辑：绑定回收事件)
             * 让这张牌被打出/弃置后，自动回到专属弃牌堆，而不是系统弃牌堆
             */
            createSpecialCard(suit, number, name) {
                const card = game.createCard2(name, suit, number);
                card.isXinxCard = true; // 标记这张牌属于该技能体系

                game.broadcastAll((c) => {
                    // 重写该卡牌的 destroyed 方法
                    // 当卡牌被弃置、使用、打出导致要进入系统弃牌堆(discardPile)时，拦截它
                    c.destroyed = (card, position, player, event) => {
                        if (position == "discardPile") {
                            // 拦截并强制送入专属弃牌堆
                            lib.skill.xinxzhanshu.recycleCard(card, true);
                        }
                        // 返回 false 阻止系统默认行为
                        return false;
                    };
                }, card);

                return card;
            },
            /**
             * 自定义抽牌逻辑
             * @param {number} num - 摸牌数量
             */
            getCards(num = 1) {
                if (num <= 0) return [];
                const list = [];
                const pileName = "xinxPile";
                while (num > 0) {
                    // 如果牌堆空了，触发洗牌(从弃牌堆洗入)
                    if (!_status[pileName]?.length) {
                        lib.skill.xinxzhanshu.washDeck();
                    }
                    // 如果洗完牌还是空的（彻底没牌了），跳出循环
                    if (!_status[pileName]?.length) {
                        break;
                    }

                    // 从牌堆顶拿一张
                    const card = _status[pileName].shift();
                    if (card) {
                        card.original = "s"; // 标记来源
                        list.push(card);
                        num--;
                    }
                }

                // 数量不够时，是否用系统牌堆补牌？
                // 如果想严格限制只能抽专属牌，删除下面这个if块
                /* if (num > 0) {
                    list.addArray(get.cards(num, true));
                } */
                lib.skill.xinxzhanshu.update();
                return list;
            },

            /**
             * 洗牌逻辑 (将专属弃牌堆洗切混入专属牌堆)
             */
            washDeck() {
                const pileName = "xinxPile";
                const discardName = "xinxDiscard";
                // 安全检查
                if (!_status[pileName] || !_status[discardName]) {
                    lib.skill.xinxzhanshu.initPile(true);
                }
                if (!_status[discardName].length) return; // 弃牌堆没牌，洗不了
                // 复制弃牌堆卡牌
                const cards = [..._status[discardName]];
                _status[discardName] = []; // 清空弃牌堆

                // 打乱顺序
                cards.randomSort();

                // 加入牌堆底部 (或直接合并)
                _status[pileName].push(...cards);

                game.log('专属弃牌堆已洗切混入专属牌堆');
                lib.skill.xinxzhanshu.update();
            },

            /**
             * 回收卡牌 (放入专属弃牌堆)
             * @param {Card} card - 卡牌对象
             * @param {boolean} noinsert - 是否不进行物理DOM插入(仅逻辑移动)
             */
            recycleCard(card, noinsert = false) {
                const discardName = "xinxDiscard";
                const pileName = "xinxPile";

                // 双重检查：不是专属卡则按普通流程弃置
                if (!card.isXinxCard) {
                    card.discard(false);
                    return;
                }


                // 如果这张牌已经在专属弃牌堆的数据数组里，直接返回，防止重复添加
                if (_status[discardName] && _status[discardName].includes(card)) {
                    return;
                }
                // 顺便确保它不在抽牌堆里 (防止数据混乱)
                if (_status[pileName]) _status[pileName].remove(card);


                if (noinsert) {
                    // 直接推入数据结构，并告知系统移动到特殊区域
                    game.cardsGotoSpecial(card, "toXinxDiscard");
                } else {
                    // 物理移动DOM节点到场外，防止视觉残留
                    ui.special.appendChild(card);
                    // 推入数组
                    _status[discardName].push(card);
                    lib.skill.xinxzhanshu.update();
                }
            },

            update() {
                const pileName = "xinxPile";
                const discardName = "xinxDiscard";

                // 广播数据以同步联机状态
                game.broadcast((pile, discard) => {
                    _status[pileName] = pile;
                    _status[discardName] = discard;
                }, _status[pileName], _status[discardName]);

                // 刷新拥有标记技能角色的UI
                game.filterPlayer(t => t.hasSkill("xinxzhanshu_ui"))
                    .forEach(t => t.markSkill("xinxzhanshu_ui"));
            },
            audio: "ext:永夜之境/audio:3",
            trigger: {
                player: ["drawBegin"],
                global: ["gameDrawBegin", "replaceHandcardsBegin"],

            },
            forced: true,
            lastDo: true,
            popup: false,
            filter(event, player) {
                return event.name != "draw" || event.num > 0;
            },
            content() {
                // 获取技能定义的函数
                const { getCards, recycleCard } = lib.skill.xinxzhanshu;

                if (trigger.name == "draw") {
                    // 核心：替换摸牌阶段的摸牌函数
                    trigger.set("otherGetCards", getCards);
                } else {
                    // 游戏初始发牌时的替换逻辑
                    trigger.otherPile ??= {};
                    trigger.otherPile[player.playerid] = {
                        getCards: getCards,
                        discard: recycleCard,
                    };
                }
            },
            group: "xinxzhanshu_guard",
            subSkill: {
                guard: {
                    trigger: {
                        global: ["addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter", "equipAfter"],
                        //"equipAfter",

                    },
                    forced: true,
                    popup: false,
                    silent: true,
                    charlotte: true,
                    filter: function (event, player) {
                        // event.getl(player) 获取“在该事件中，player 失去了哪些牌”
                        const evt = event.getl(player);
                        if (!evt || !evt.cards || !evt.cards.length || event.player == player) return false;

                        // 检查失去的牌里有没有专属牌
                        for (let i = 0; i < evt.cards.length; i++) {
                            if (evt.cards[i].isXinxCard) return true;
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const cards = trigger.getl(player).cards;
                        const lostSpecialCards = [];

                        // 筛选出本次失去的专属牌
                        for (let card of cards) {
                            if (card.isXinxCard) lostSpecialCards.push(card);
                        }
                        game.playAudio("../extension/永夜之境/audio/", 'xinxzhanshu' + [get.rand(1, 3)] + '.mp3');
                        // 开始回收
                        for (let card of lostSpecialCards) {
                            // 1. 视觉处理：如果牌在别人手里/装备区/判定区，先扒下来
                            const owner = get.owner(card);
                            if (owner && owner != player) {
                                // 强制失去，移入特殊区域
                                await owner.lose(card, "visible", ui.ordering);
                                card.fix();
                                await owner.lose(card, ui.special);
                                game.log(player, '的专属卡牌被', owner, '获得，已强制回收');
                            }

                            // 2. 逻辑处理：回收入专属弃牌堆
                            // 即使 card 已经在 discardPile（被过河拆桥），recycleCard 也能处理
                            lib.skill.xinxzhanshu.recycleCard(card, false);
                        }
                    }
                }
            }

        },
        xinxzhanshu_ui: {
            mark: true,
            marktext: "🗃️",
            charlotte: true,
            intro: {
                name: "专属卡组",
                markcount(storage, player) {
                    const pile = _status.xinxPile || [];
                    const discard = _status.xinxDiscard || [];
                    return `${pile.length} / ${discard.length}`;
                },
                // 弹窗显示的详细内容
                mark(dialog, storage, player) {
                    const pile = _status.xinxPile || [];
                    const discard = _status.xinxDiscard || [];
                    dialog.addText(`<b>抽牌堆 (${pile.length})</b>`);
                    if (!pile.length) dialog.addText("空");
                    dialog.addText(`<br><b>弃牌堆 (${discard.length})</b>`);
                    if (discard.length) {
                        dialog.addSmall(discard); // 展示弃牌堆的具体卡牌
                    } else {
                        dialog.addText("空");
                    }
                },
            },
        },

        xinxdashi: {
            audio: "ext:永夜之境/audio:8",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxdashi" + index + ".mp3" : 2),
            trigger: {
                player: ["phaseZhunbeiBegin", "phaseJieshuBegin"],
            },
            /*  filter(event, player, name) {
                 if (name == "enterGame") {
                     return true;
                 }
                 if (event.name == "phase") {
                     return game.phaseNumber == 0;
                 }
               return  _status.xinxPile && _status.xinxDiscard;
             }, */
            filter: () => _status.xinxPile && _status.xinxDiscard,
            forced: true,
            locked: false,
            firstDo: true,
            async content(event, trigger, player) {
                await player.draw();
                // if (event.triggername == "phaseZhunbeiBegin") {
                //const pool = lib.skill.xinxdashi.cardPool;
                //if (!pool?.length) return;

                const pool = [
                    //锦囊  ['heart', 13, 'suijiyingbian'],['heart', 4, 'xinxjiyibiaoben'],
                    ['spade', 12, 'xinxxuanshi'], ['heart', 8, 'xinxruwosuoshu'], ['club', 11, 'xinxnalaibani'], ['diamond', 10, 'xinxchenghuihupo'],
                    ['heart', 7, 'juedou'], ['spade', 13, 'xinxjinshouzhi'],
                    //基本
                    ['heart', 9, 'tao'], ['spade', 8, 'sha'],
                    //装备
                    ["heart", 9, "mb_qingnangshu"],
                ];
                const picks = pool.randomGets(Math.min(3, pool.length));
                const dialogCards = [];
                for (let i = 0; i < picks.length; i++) {
                    const info = picks[i];
                    if (!info) continue; // 如果抽到空值直接跳过

                    // 参数顺序：name(info[2]), suit(info[0]), number(info[1])
                    const c = game.createCard(info[2], info[0], info[1]);
                    c._db_info = info;
                    dialogCards.push(c);
                }

                if (dialogCards.length === 0) return;

                const result = await player.chooseButton(
                    ui.create.dialog('【大师】是否获得一张卡牌', dialogCards),
                ).set('ai', (button) => {
                    const player = _status.event.player;
                    const card = button.link;
                    if (!card) return 0;
                    if (card.name === 'xinxnilin') return 100;
                    if (card.name === 'xinxruwosuoshu') return 50;
                    return get.value(card, player);
                }).forResult();
                player.logSkill("xinxdashi", null, null, null, [get.rand(1, 4)]);
                if (result.bool && result.links?.length) {
                    const link = result.links[0];
                    // 确保 _db_info 存在
                    if (link && link._db_info) {
                        const info = link._db_info;
                        // 使用核心技能的方法创建真正的“功能卡”
                        const card = lib.skill.xinxzhanshu.createSpecialCard(info[0], info[1], info[2]);

                        _status.xinxDiscard.push(card);
                        ui.special.appendChild(card);
                        await player.gain(card, 'gain2');
                        //game.log(player, '将', card, '加入专属牌堆');
                    }
                }
                //   } 

                //   else if (event.triggername == "phaseJieshuBegin") {
                /*
                // 1. 获取场外堆叠区的牌
                let candidates = [].concat(_status.xinxPile || [], _status.xinxDiscard || []);
                const onBoardCards = player.getCards('hej').filter(c => c.isXinxCard);
                // 3. 合并所有可选项
                candidates = candidates.concat(onBoardCards);
                if (candidates.length) {
                    // 等待玩家选择要移除的牌
                    const selection = await player.chooseButton(
                        ui.create.dialog('【大师】是否选择一张卡牌永久移除', candidates),
                        
                    ); */
                /* const deckCards = _status.xinxPile || [];
                const discardCards = _status.xinxDiscard || []; */
                // 2. 获取系统抽牌堆
                const systemDiscard = _status.discardPile || [];
                const systemPile = ui.cardPile && ui.cardPile.childNodes
                    ? Array.from(ui.cardPile.childNodes)
                    : [];
                const xcandidates = [].concat(systemDiscard, systemPile).filter(c => c.isXinxCard);

                const candidates = [].concat(_status.xinxPile || [], _status.xinxDiscard || []);
                const handCards = player.getCards('h').filter(c => c.isXinxCard);
                //const fieldCards = player.getCards('ejsx').filter(c => c.isXinxCard);
                const fieldCards = [];
                game.countPlayer(current => {
                    // 收集每个人的装备区和判定区
                    fieldCards.push(...current.getCards('ej').filter(c => c.isXinxCard));
                });


                // 计算总数，如果没有牌则直接跳过
                const totalCards = candidates.length + handCards.length + fieldCards.length;
                if (totalCards > 0) {

                    // 2. 构建分层弹窗
                    const dialog = ui.create.dialog('【大师】是否选择一张卡牌永久移除');

                    if (candidates.length || xcandidates.length) {
                        dialog.addText('<b>▼ 牌堆和弃牌堆</b>');
                        // 使用 add 正常显示，或者 addSmall 缩小显示
                        const allCards = candidates.concat(xcandidates);
                        dialog.add(allCards);
                        //dialog.add(candidates);
                    }
                    if (handCards.length) {
                        dialog.addText('<b>▼ 当前手牌区域</b>');
                        dialog.add(handCards);
                    }
                    if (fieldCards.length) {
                        dialog.addText('<b>▼ 其他区域</b>');
                        dialog.add(fieldCards);
                    }

                    const result1 = await player.chooseButton(dialog)
                        .set('ai', (button) => {
                            const card = button.link;
                            if (!card) return 0;
                            const deletePriority = {
                                'shan': 10,
                                'wuxie': 9,
                                'shunshou': 8,
                                'xinxmingxinzhiyue': 7,
                            };
                            let score = deletePriority[card.name] || 0;
                            if (score === 0) {
                                // 比如一张废牌价值是1，那么得分 8 - 1 = 7 (想删)
                                // 一张桃价值是9，那么得分 8 - 9 = -1 (不想删)
                                score = 6 - get.value(card, player);
                            }
                            // const targetCards = ['tao', 'wuzhong', 'zhuge', 'guohe', 'sha'];
                            // if (targetCards.includes(card.name)) {
                            //     return -100;
                            // }
                            const targetSet = new Set(['xinxqinchen', 'sha',
                                'mb_qingnangshu', 'xinxnilin', 'xinxjinshouzhi', 'xinxwangshizhiyue', 'xinxruwosuoshu', 'xinxjiyibiaoben']);
                            if (targetSet.has(card.name)) {
                                return -100;
                            }
                            // 优先删除牌堆/弃牌堆里的牌，保留手牌(h)和装备(e)以便即时使用
                            const pos = get.position(card);
                            // 如果牌不在手牌区也不在装备区(说明在牌堆或弃牌堆)，稍微加点分，优先清理库存
                            if (pos !== 'h' && pos !== 'e') {
                                score += 0.5;
                            }
                            return score;
                        }).forResult();
                    ;
                    player.logSkill("xinxdashi", null, null, null, [get.rand(5, 8)]);

                    // 处理结果
                    if (result1.bool && result1.links?.length) {

                        const c = result1.links[0];
                        // === CRITICAL: 解除绑定 ===
                        // 在物理移除前，必须先将 isXinxCard 设为 false。
                        // 否则，当执行 player.lose 时，xinxzhanshu 的 guard 子技能会触发，
                        // 或者 createSpecialCard 里的 destroyed 会触发，导致牌被自动回收进弃牌堆。
                        c.isXinxCard = false;
                        if (get.owner(c)) {
                            player.lose(c, ui.special);
                        }
                        // 从数据数组中移除
                        if (_status.xinxPile) _status.xinxPile.remove(c);
                        if (_status.xinxDiscard) _status.xinxDiscard.remove(c);
                        // 销毁卡牌实体
                        await player.lose(c, "visible", ui.ordering);
                        c.fix();
                        c.remove();
                        c.delete();
                        game.log(player, '从牌堆移除了', c);
                    }
                }
                //  }
                // 更新UI计数
                if (lib.skill.xinxzhanshu.update) lib.skill.xinxzhanshu.update();
            }
        },


        xinxxsusheng: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxxsusheng" + index + ".mp3" : 2),
            init(player, skill) {
                if (!player.storage.xinxxsusheng_data) {
                    player.storage.xinxxsusheng_data = {
                        'xinx_xiadie': { hp: player.hp, maxHp: player.maxHp, hujia: player.hujia || 0 },
                        'xinx_Pollux': { hp: 4, maxHp: 4, hujia: 0 }
                    };
                }
                // 监听更新，同步当前状态到 storage
                lib.hooks?.checkUpdate?.add(function _xinxxsusheng_update(player) {
                    const storage = player.storage?.xinxxsusheng_data;
                    if (storage && player.hasSkill('xinxxsusheng')) {
                        const currentName = player.name === 'xinx_Pollux' ? 'xinx_Pollux' : 'xinx_xiadie';
                        if (storage[currentName]) {
                            const { hp, maxHp, hujia } = player;
                            storage[currentName] = { hp, maxHp, hujia };
                        }
                    }
                });
                player.markSkill('xinxxsusheng');
            },
            trigger: {
                global: "changeHpAfter",
            },
            line: {
                color: [235, 96, 138],
            },
            getIndex: event => Math.abs(event.num),
            priority: 1,
            forced: true,
            popup: false,
            unique: true,
            filter(event, player) {
                if (player.name === 'xinx_Pollux' || player.name2 === 'xinx_Pollux') {
                    return false;
                }
                return event.player == player || event.player == player.getNext() || event.player == player.getPrevious();
            },
            async content(event, trigger, player) {
                player.addMark('xinxxsusheng', 1, false);
                game.log(player, '获得了一枚【新蕊】');
                player.markSkill("xinxxsusheng");
                let limit = player.maxHp;
                if (player.countMark('xinxxsusheng') >= limit) {
                    await player.clearMark('xinxxsusheng', false);
                    await player.gainMaxHp();
                    player.drawTo(player.maxHp);
                    const currentName = 'xinx_xiadie';
                    player.storage.xinxxsusheng_data[currentName] = {
                        hp: player.hp,
                        maxHp: player.maxHp,
                        hujia: player.hujia || 0
                    };
                    let polluxData = player.storage.xinxxsusheng_data['xinx_Pollux'];
                    if (!polluxData || polluxData.maxHp < player.maxHp) {
                        polluxData = { hp: player.maxHp, maxHp: player.maxHp, hujia: 0 };
                        player.storage.xinxxsusheng_data['xinx_Pollux'] = polluxData;
                    }

                    game.log(player, '召唤忆灵', '#y玻吕刻斯', '，体力初始为', polluxData.hp);
                    player.logSkill("xinxxsusheng", null, null, null, [2]);
                    await player.reinit(player.name, 'xinx_Pollux', [polluxData.hp, polluxData.maxHp, polluxData.hujia]);
                    await new Promise(resolve => {
                        lib.element.content.xinxplayVideo(
                            "extension/永夜之境/video/xiadie_begin.mp4",
                            {
                                pauseGame: true, // 暂停游戏进程
                                skippable: true  // 是否点击跳过
                            },
                            resolve // 视频结束后调用 resolve，继续 await 后面的代码
                        );
                    });
                    player.addSkill('xinxxsusheng');
                    player.addSkill('xinxxmingxi');
                    player.insertPhase();
                    player.markSkill('xinxxsusheng');
                }
            },
            onremove(player) {
                player.clearMark('xinxxsusheng', false);
            },
            markimage: 'extension/永夜之境/image/mark/xinxsusheng.png',
            intro: {
                markcount(storage, player) {
                    return player.countMark("xinxxsusheng");
                },
                mark(dialog, storage, player) {
                    const data = player.storage.xinxxsusheng_data || {};
                    if (!data) return;
                    dialog.add([
                        Object.keys(data), // 列表：['xinx_xiadie', 'xinx_Pollux']
                        (item, type, position, noclick, node) => {
                            // 临时修改 lib.character 以便显示正确的状态（血量等）
                            let itemcharacter = { ...lib.character[item] };
                            let { hp, maxHp, hujia, ...otheritem } = itemcharacter;
                            lib.character[item] = {
                                ...otheritem,
                                hp: data[item].hp,
                                maxHp: data[item].maxHp,
                                hujia: data[item].hujia,
                            };
                            // 创建预设按钮 (卡牌样式)
                            node = ui.create.buttonPresets.character(item, 'character', position, noclick);
                            // 恢复 lib.character
                            lib.character[item] = itemcharacter;
                            // 额外标注：当前形态
                            if (item === player.name || item === player.name2) {
                                game.createButtonCardsetion(`当前`, node);
                            }
                            return node;
                        }
                    ]);
                    let num = player.countMark("xinxxsusheng");
                    if (num > 0) {
                        dialog.addText(`<div style="text-align:center; margin-top:5px;">新蕊: ${num}</div>`);
                        //dialog.addText(`<div style="text-align:center;">新蕊: ${num}</div>`);
                    }
                },
            },
            group: ['xinxxsusheng_audio', 'xinxxsusheng_audio2'],
            subSkill: {
                audio: {
                    silent: true,
                    supercharlotte: true,
                    trigger: {
                        player: "phaseBegin",
                    },
                    filter(event, player) {
                        return event.player.name == "xinx_Pollux";
                    },
                    content() {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxyuejian' + [get.rand(1, 2)] + '.mp3');
                    }
                },
                audio2: {
                    silent: true,
                    supercharlotte: true,
                    trigger: {
                        player: "damageEnd",
                    },
                    filter(event, player) {
                        return event.player.name == "xinx_xiadie";
                    },
                    content() {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxsusheng' + [get.rand(7, 8)] + '.mp3');
                    }
                },
            }
        },
        xinxxmingxi: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxxmingxi" + index + ".mp3" : 2),
            trigger: { player: "dieBefore" },
            charlotte: true,
            forced: true,
            popup: false,
            filter(event, player) {
                return player.name === 'xinx_Pollux';
            },
            async content(event, trigger, player) {
                player.logSkill("xinxxmingxi", null, null, null, [1]);
                await new Promise(resolve => {
                    lib.element.content.xinxplayVideo(
                        "extension/永夜之境/video/xiadie_end.mp4",
                        {
                            pauseGame: true,
                            skippable: true
                        },
                        resolve
                    );
                });
                trigger.cancel();
                if (player.storage.xinxxsusheng_data) {
                    player.storage.xinxxsusheng_data['xinx_Pollux'] = {
                        hp: player.maxHp,
                        maxHp: player.maxHp,
                        hujia: 0
                    };
                }
                // 读取遐蝶的备份数据
                let xiadieData = player.storage.xinxxsusheng_data['xinx_xiadie'];
                let targetHp = xiadieData.hp;
                let targetMaxHp = xiadieData.maxHp;
                let targetHujia = xiadieData.hujia;
                await player.reinit(player.name, 'xinx_xiadie', [targetHp, targetMaxHp, targetHujia]);
                player.markSkill('xinxxsusheng');
                if (player.hp <= 0) {
                    player.logSkill("xinxxmingxi", null, null, null, [get.rand(2, 3)]);
                    player.hp = 1;
                    player.update();
                }
                game.log(player, '已就绪，状态还原为：', player.hp + '/' + player.maxHp);
                let num = player.maxHp;
                let useCount = 0;
                while (true && useCount < num) {
                    if (useCount == num) break;
                    let card1 = get.cards();
                    game.cardsGotoOrdering(card1);
                    player.showCards(card1);
                    const usecard1 = card1.filter(function (i) {
                        return player.hasUseTarget(i);
                    });
                    player.logSkill("xinxxmingxi", null, null, null, [get.rand(4, 5)]);
                    if (player.hasUseTarget(card1[0], true, false)) {
                        player.$gain2(card1, false);
                        await game.delayx();
                        await player.chooseUseTarget(card1, false, true);
                    }
                    useCount++;
                    if (useCount == num) break;
                    let card2 = get.bottomCards();
                    game.cardsGotoOrdering(card2);
                    player.showCards(card2);
                    const usecard2 = card2.filter(function (i) {
                        return player.hasUseTarget(i);
                    });
                    if (player.hasUseTarget(card2[0], true, false)) {
                        player.$gain2(card2, false);
                        await game.delayx();
                        await player.chooseUseTarget(card2, false, true);
                    }
                    useCount++;
                    if (useCount == num) break;
                }
            }
        },
        xinxhuiyi: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: ["shaMiss", "eventNeutralized"],
            },
            filter: function (event, player) {
                if (event.type != "card" && event.name != "_wuxie") return false;

                if (!player.hasCard(card => lib.filter.cardDiscardable(card, player), "he")) return false;
                var history = game.getGlobalHistory("everything");
                for (var evt of history) {
                    if (evt._neutralized || (evt.responded && (!evt.result || !evt.result.bool))) {
                        var evtx = evt.getParent();
                        return evtx.name == "useCard";
                    }
                }
                return false;
            },
            check(event, player) {
                return player.getHp() >= 2;
            },
            prompt(event, player) {
                return get.prompt2("xinxhuiyi");
            },
            async content(event, trigger, player) {
                const result = await player.chooseNumbers(get.prompt(event.name), [{ prompt: "请选择你要失去的体力值", min: 1, max: player.getHp() }], true)
                    .set("processAI", () => {
                        const player = get.player();
                        let num = 1;
                        if (get.tag(trigger.card, 'damage') >= 0) {
                            num = player.getHp();
                        }
                        return [num];
                    }).forResult();
                const number = result.numbers[0];
                player.storage.reqimou2 = number;
                await player.loseHp(number);
                var card = {
                    name: trigger.card.name,
                    nature: trigger.card.nature,
                    isCard: true,
                };
                event.card = card;
                for (let i = 0; i < number; i++) {
                    if (player.hasUseTarget(card)) await player.chooseUseTarget(card, true, false).set("prompt2", `还可以再使用${number - i}张`);
                    else break;
                }
            },
            group: ['xinxhuiyi_lose'],
            subSkill: {
                lose: {
                    trigger: {
                        player: "useCard",
                    },
                    forced: true,
                    silent: true,
                    filter(event, player) {
                        return get.tag(event.card, "damage") > 0.5;
                    },
                    async content(event, trigger, player) {
                        player.loseHp();
                    }
                }
            }
        },

        xinxjiegou: {
            /*  
             filter(event, player) {
                 // const targets = game.players.slice().concat(game.dead);
                 // return targets.some(target => target.getStorage("xinxjiegou").filterInD("dcehsj").length);
                 return game.players.concat(game.dead).some(target => {
                     return target.getStorage("xinxjiegou").filterInD("dcehsj").length > 0;
                 });
             },
              */
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjiegou" + index + ".mp3" : 2),
            trigger: {
                player: "phaseEnd",
            },
            filter(event, player) {
                return game.players.concat(game.dead).some(target => {
                    // 确保获取到的storage是一个数组再进行判断
                    const storage = target.getStorage("xinxjiegou");
                    return storage && storage.filterInD("dcehsj").length > 0;
                });
            },
            forced: true,
            locked: false,
            popup: false,
            async content(event, trigger, player) {

                let targets = game.players.slice().concat(game.dead);
                let allCards = [];

                for (let target of targets) {
                    let cards = target.getStorage("xinxjiegou").filterInD("dcehsj");
                    if (cards.length) {
                        // 加入总池子
                        allCards.addArray(cards);
                        await target.discard(cards);
                    }
                }
                if (allCards.length === 0) return;
                let usedNames = [];
                // 【循环转化使用】
                while (allCards.length > 0) {
                    // 生成转化牌列表（每次循环重新生成或复用均可，这里复用逻辑）
                    let vcards = get.inpileVCardList(info => {
                        const name = info[2];
                        if (usedNames.includes(name)) return false;
                        return ['basic', 'trick'].includes(get.type(name))
                    }).filter(info => player.hasUseTarget(new lib.element.VCard({ name: info[2], nature: info[3] }), false));

                    // 自动结束检测逻辑
                    // 1. 获取所有合法虚拟牌的字数集合 (例如: {1, 2, 3, 4})
                    // // 2. 获取剩余所有实体牌的字数列表
                    const validVCardLengths = new Set(vcards.map(v => get.cardNameLength(v[2])));
                    const physicalLengths = allCards.map(c => get.cardNameLength(c.name));
                    // 3. 计算实体牌能组合出的所有可能字数和 (Subset Sum)
                    let possibleSums = new Set([0]);
                    for (const len of physicalLengths) {
                        // 遍历当前已有的和，加上新卡牌的长度
                        const currentSums = Array.from(possibleSums);
                        for (const s of currentSums) {
                            possibleSums.add(s + len);
                        }
                    }
                    possibleSums.delete(0); // 排除0字（至少选1张）
                    // 4. 核心判断：是否有交集？
                    // 检查“可能的组合和”中，是否有任何一个值存在于“虚拟牌字数集合”中
                    const canMatch = Array.from(possibleSums).some(sum => validVCardLengths.has(sum));
                    // 如果无法匹配任何虚拟牌，且没有其他逻辑阻挡，直接退出循环
                    if (!canMatch) {
                        break;
                    }
                    // ==========================================


                    let next = await player.chooseButton(
                        [
                            `###${get.prompt("xinxjiegou")}###<div class="text center">请选择一张牌，将其当作一张名字数相同的牌使用</div>`,
                            [allCards],
                            `###<div class="text center">转化牌</div>###`,
                            [vcards, "vcard"]
                        ]
                    )
                        .set("selectButton", [2, Infinity])
                        .set("filterButton", button => {
                            // 获取当前已选按钮
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
                                const currentLen = selectedReal.reduce((sum, b) => sum + get.cardNameLength(b.link.name), 0)
                                const vCardName = button.link[2];
                                const vCardLen = get.cardNameLength(vCardName);
                                if (currentLen !== vCardLen) return false; // 字数不符则不可选
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
                        // 分离出 实体牌 和 转化牌名
                        let realCards = next.links.filter(l => !Array.isArray(l));
                        let vCardInfo = next.links.find(l => Array.isArray(l));
                        // 从池子中移除本次使用的牌，防止下次循环重复使用
                        allCards.removeArray(realCards);
                        //记录已使用的虚拟牌名
                        usedNames.push(vCardInfo[2]);
                        // 发起使用
                        let cardToUse = get.autoViewAs({ name: vCardInfo[2], nature: vCardInfo[3] }, realCards);
                        if (player.hasUseTarget(cardToUse, true, true)) {
                            player.logSkill("xinxjiegou", null, null, null, [get.rand(5, 6)]);
                            await player.chooseUseTarget(cardToUse, true, realCards);
                        }
                    } else {
                        break;
                    }
                }
            },
            group: ['xinxjiegou_count', 'xinxjiegou_effect'],
            subSkill: {
                count: {
                    onremove(player) {
                        player.removeGaintag("xinxjiegou");
                        delete player.storage.xinxjiegou;
                    },
                    trigger: {
                        global: ["gainBegin"],
                    },
                    charlotte: true,
                    forced: true,
                    silent: true,
                    filter(event, player) {
                        return _status.currentPhase == player && event.player !== player;
                    },
                    async content(event, trigger, player) {
                        player.markAuto("xinxjiegou", trigger.cards);
                        for (let card of trigger.cards) {
                            card.addGaintag("xinxjiegou");
                        }
                        player.when({ player: "phaseAfter" })
                            .step(async (event, trigger, player) => {
                                let cards = player.getStorage("xinxjiegou");
                                if (cards && cards.length) {
                                    for (let card of cards) {
                                        card.removeGaintag("xinxjiegou");
                                    }
                                }
                                player.removeGaintag("xinxjiegou");
                                delete player.storage.xinxjiegou;
                            });
                    },
                },
                effect: {
                    trigger: {
                        player: "useCardAfter",
                    },
                    filter(event, player) {
                        if (!player.isPhaseUsing()) return false;
                        return event.targets?.some(i => i !== player && i.isAlive()) && event.cards;
                    },
                    forced: true,
                    popup: false,
                    logTarget: "target",
                    // async cost(event, trigger, player) {
                    //     event.result = await player
                    //         .chooseTarget(get.prompt2("xinxjiegou"), (card, player, target) => {
                    //             return _status.event.targets.includes(target);
                    //         })
                    //         .set("ai", target => {
                    //             return 2 - get.attitude(get.player(), target);
                    //         })
                    //         .set("targets", trigger.targets)
                    //         .forResult();
                    // },
                    // async content(event, trigger, player) {
                    //     const {
                    //         targets: [target],
                    //     } = event;
                    //     await target.gain(trigger.cards, "gain2");

                    // },
                    async content(event, trigger, player) {
                        const result = await player.chooseTarget(get.prompt("xinxjiegou"), `令一名目标角色获得${get.translation(trigger.card)}`, (card, player, target) => {
                            return trigger.targets.includes(target) && player != target;
                        })
                            .set("ai", target => -get.attitude(get.player(), target))
                            .forResult();

                        if (result.bool) {
                            player.logSkill("xinxjiegou", result.targets, null, null, [get.rand(1, 4)]);
                            await result.targets[0].gain(trigger.cards, 'gain2');
                        }
                    },


                },

            },

        },
        xinxlinggan: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxlinggan" + index + ".mp3" : 2),
            mark: true,
            markimage: 'extension/永夜之境/image/mark/xinxlinggan.png',
            onremove(player) {
                delete player.storage.xinxlinggan;
            },
            intro: {
                content: "cards"
            },
            trigger: {
                player: "useCardAfter",
            },
            priority: 2,
            locked: false,
            forced: true,
            popup: false,
            filter(event, player) {
                return event.targets && event.targets.includes(player);
            },
            async content(event, trigger, player) {
                if (!Array.isArray(player.storage.xinxlinggan)) {
                    player.storage.xinxlinggan = [];
                }
                const storage = player.storage.xinxlinggan;
                // let card = get.cardPile(card => {
                //     return !storage.includes(card);
                // });

                const allPileCards = Array.from(ui.cardPile.childNodes);
                // 2. 筛选出所有“未记录”的牌
                // 这里使用 includes 比对对象引用，确保是“这一张”牌没被记录过
                const validCards = allPileCards.filter(card => !storage.includes(card));
                // 3. 从符合条件的牌中随机取一张
                // 如果没有符合条件的牌（validCards为空），card 就是 undefined
                let card = validCards.length > 0 ? validCards.randomGet() : null;


                if (card) {
                    player.logSkill("xinxlinggan", null, null, null, [get.rand(1, 2)]);
                    player.showCards([card], get.translation(player) + "展示了牌堆中一张未记录的牌");
                    storage.push(card);
                    player.markSkill("xinxlinggan");
                    player.syncStorage("xinxlinggan");
                    game.log(player, "记录了", card);
                }
                if (player.storage.xinxlinggan.length > 3 && !player.storage.xinxlingganchange) {
                    player.logSkill("xinxlinggan", null, null, null, [5]);
                    player.storage.xinxlingganchange = true;
                    //player.changeSkin({ characterName: "xinx_daheita" }, "xinx_daheita_shadow");
                }

            },
            group: "xinxlinggan_draw",
            subSkill: {
                draw: {
                    trigger: {
                        player: "useCardAfter",
                    },
                    priority: 1,
                    filter(event, player) {
                        const storage = player.storage.xinxlinggan;
                        if (!storage || !storage.length) return false;
                        // 获取使用牌的字数
                        const usedLen = get.cardNameLength(event.card.name);
                        return storage.some(card => get.cardNameLength(card.name) === usedLen) && event.targets?.some(i => i !== player);

                    },
                    locked: false,
                    forced: true,
                    async content(event, trigger, player) {
                        const storage = player.storage.xinxlinggan;
                        const usedLen = get.cardNameLength(trigger.card.name);
                        // 1. 筛选出所有符合字数的记录
                        //const matches = storage.filter(name => get.translation(name).length === usedLen);
                        const matches = storage.filter(card => get.cardNameLength(card.name) === usedLen);
                        if (matches.length > 0) {
                            // 2. 随机选取一张移除
                            const toRemove = matches.randomGet();
                            player.storage.xinxlinggan.remove(toRemove);
                            player.markSkill("xinxlinggan");
                            player.syncStorage("xinxlinggan");
                            game.log(player, "移去了记录中的", toRemove);
                            player.logSkill("xinxlinggan", null, null, null, [get.rand(3, 4)]);
                            await player.draw(usedLen);
                        }
                    },
                }
            }
        },

        xinxyueding: {
            audio: "ext:永夜之境/audio:2",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyueding" + index + ".mp3" : 2),
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            filter(event, player) {
                return game.hasPlayer(current => current != player);
            },
            popup: false,
            firstDo: true,
            async cost(event, trigger, player) {
                event.result = await player.chooseTarget(get.prompt2("xinxyueding"), 1, (card, player, target) => {
                    return target != player;
                }).set('ai', target => {
                    return get.attitude(player, target);
                }).forResult();
            },
            // 主技能内容：绑定双方并添加技能
            async content(event, trigger, player) {
                const target = event.targets[0];
                player.logSkill("xinxyueding", target, null, null, [get.rand(1, 2)]);
                const timerSkill = 'xinxyueding_timer';
                const effectSkill = 'xinxyueding_effect';
                player.addTempSkill(timerSkill, { player: 'phaseBegin' });
                // 2. 记录关联名单
                if (!player.storage[timerSkill]) player.storage[timerSkill] = [];
                if (!player.storage[timerSkill].includes(player)) player.storage[timerSkill].push(player);
                if (!player.storage[timerSkill].includes(target)) player.storage[timerSkill].push(target);
                // 3. 为双方配置效果技能
                // 互存引用
                player.storage[effectSkill] = target;
                target.storage[effectSkill] = player;
                // 添加技能并手动初始化
                player.addSkill(effectSkill);
                if (lib.skill[effectSkill].init) lib.skill[effectSkill].init(player, effectSkill);
                target.addSkill(effectSkill);
                if (lib.skill[effectSkill].init) lib.skill[effectSkill].init(target, effectSkill);
                game.log(player, '与', target, '缔结了【约定】');
                player.popup('约定', 'fire');
                target.popup('约定', 'fire');
            },
            subSkill: {
                // 1. 计时器：负责清理
                timer: {
                    charlotte: true,
                    sub: true,
                    onremove(player, skill) {
                        const effectSkill = 'xinxyueding_effect';
                        const list = player.storage[skill];
                        if (list && list.length) {
                            for (let i = 0; i < list.length; i++) {
                                const p = list[i];
                                if (p && p.hasSkill(effectSkill)) {
                                    p.removeSkill(effectSkill);
                                    delete p.storage[effectSkill];
                                    const cards = p.getCards('s', card => card.hasGaintag('xinxyueding_tag'));
                                    game.deleteFakeCards(cards);
                                }
                            }
                        }
                        delete player.storage[skill];
                    },
                },
                // 2. 核心效果：虚拟牌生成与使用拦截
                effect: {
                    sub: true,
                    group: ["xinxyueding_add", "xinxyueding_remove", "xinxyueding_use", "xinxyueding_draw"],
                    init(player, skill) {
                        const target = player.storage[skill];
                        const tag = "xinxyueding_tag";

                        // 清理旧的
                        const old = player.getCards("s", c => c.hasGaintag(tag));
                        game.deleteFakeCards(old);

                        if (target && target.isAlive() && target.countCards('h')) {
                            const fakes = game.createFakeCards(target.getCards("h"));
                            for (let i = 0; i < fakes.length; i++) {
                                // 绑定 ID
                                fakes[i]._cardid = target.getCards("h")[i].cardid;
                            }
                            player.directgains(fakes, null, tag);
                        }
                    },
                    onremove(player, skill) {
                        const toRemove = player.getCards("s", c => c.hasGaintag("xinxyueding_tag"));
                        game.deleteFakeCards(toRemove);
                    },
                    mod: {
                        aiOrder(player, card, num) {
                            if (card.hasGaintag && card.hasGaintag('xinxyueding_tag')) {
                                let boost = 20;
                                return num + boost;
                            }
                        }
                    },
                },
                // 3. 辅助技能：同步手牌变化
                add: {
                    sub: true,
                    trigger: {
                        global: ["gainEnd", "drawAfter", "cardsGotoOrderingEnd"],
                    },
                    silent: true,
                    filter(event, player) {
                        const target = player.storage['xinxyueding_effect'];
                        // 只有目标获得牌，且 getg 方法存在时才触发
                        // 在 filter 中，event 就是 trigger，所以这里用 event.getg 是对的
                        return target && event.player === target && typeof event.getg === 'function' && event.getg(target).length > 0;
                    },
                    content() {
                        const target = player.storage['xinxyueding_effect'];
                        const tag = "xinxyueding_tag";
                        const myFakes = player.getCards("s", c => c.hasGaintag(tag));
                        // 【修正点】：这里必须用 trigger.getg，不能用 event.getg
                        // 增加兼容性判断：如果 trigger.getg 不存在则设为空数组
                        const gainedCards = (typeof trigger.getg === 'function') ? trigger.getg(target) : [];
                        // 找出对方新获得的牌（且我这里还没有假牌的）
                        const newCards = gainedCards.filter(real => {
                            return !myFakes.some(fake => fake._cardid == real.cardid);
                        });
                        if (newCards.length) {
                            const fakes = game.createFakeCards(newCards);
                            for (let i = 0; i < fakes.length; i++) {
                                fakes[i]._cardid = newCards[i].cardid;
                            }
                            player.directgains(fakes, null, tag);
                        }
                    }
                },
                remove: {
                    sub: true,
                    trigger: {
                        // 监听所有可能导致牌移动的事件
                        global: ["loseEnd", "equipEnd", "addJudgeEnd", "gainEnd", "loseAsyncEnd", "addToExpansionEnd"],
                    },
                    silent: true,
                    filter(event, player) {
                        const myFakes = player.getCards("s", c => c.hasGaintag("xinxyueding_tag"));
                        if (!myFakes.length) return false;

                        // 检查：是否有涉及到的牌是我的假牌对应的真牌？
                        // event.cards 是变动的牌
                        if (event.cards) {
                            return event.cards.some(real => myFakes.some(fake => fake._cardid == real.cardid));
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const target = player.storage['xinxyueding_effect'];
                        const tag = "xinxyueding_tag";
                        const myFakes = player.getCards("s", c => c.hasGaintag(tag));

                        // 目标当前的真牌ID列表
                        const targetRealIds = (target && target.isAlive()) ? target.getCards("h").map(c => c.cardid) : [];

                        // 找出失效的假牌（即：对方真手牌里已经没有这个ID了）
                        const toRemove = myFakes.filter(fake => !targetRealIds.includes(fake._cardid));

                        if (toRemove.length) {
                            if (player.isOnline2()) {
                                player.send((cards, p) => {
                                    cards.forEach(i => i.delete());
                                    if (p == game.me) ui.updatehl();
                                }, toRemove, player);
                            }
                            toRemove.forEach(i => i.delete());
                            if (player == game.me) ui.updatehl();
                        }
                    }
                },

                use: {
                    sub: true,
                    trigger: {
                        player: ["useCardBefore", "respondBefore"],
                    },
                    forced: true,
                    popup: false,
                    // 必须最先执行，以便替换
                    firstDo: true,
                    filter(event, player) {
                        const fakes = player.getCards("s", c => c.hasGaintag("xinxyueding_tag"));
                        return event.cards && event.cards.some(c => fakes.includes(c));
                    },
                    async content(event, trigger, player) {
                        const target = player.storage['xinxyueding_effect'];
                        if (!target) return;

                        const tag = "xinxyueding_tag";
                        const realCards = target.getCards("h");

                        // 1. 替换逻辑
                        const newCards = []; // 存放找到的真牌
                        const fakeCardsToRemove = []; // 存放用掉的假牌

                        for (let card of trigger.cards) {
                            if (card.hasGaintag(tag)) {
                                const real = realCards.find(c => c.cardid == card._cardid);
                                if (real) {
                                    newCards.push(real);
                                    fakeCardsToRemove.push(card);
                                }
                            } else {
                                newCards.push(card);
                            }
                        }

                        // 如果替换列表数量不对，说明有牌失效了（没找到真牌）
                        if (newCards.length !== trigger.cards.length) {
                            trigger.cancel();
                            trigger.untrigger();
                            player.popup("失效");
                            // 触发一次清理
                            lib.skill.xinxyueding_effect.subSkill.remove.content();
                            return;
                        }
                        trigger.cards = newCards;
                        trigger.card.cards = newCards;
                        trigger.xinxyueding_active = true;
                        game.log(player, "使用了", target, "的手牌");
                        if (fakeCardsToRemove.length) {
                            if (player.isOnline2()) {
                                player.send((cards, p) => {
                                    cards.forEach(i => i.delete());
                                    if (p == game.me) ui.updatehl();
                                }, fakeCardsToRemove, player);
                            }
                            fakeCardsToRemove.forEach(i => i.delete());
                            if (player == game.me) ui.updatehl();
                        }
                    }
                },
                draw: {
                    sub: true,
                    trigger: {
                        player: "loseAfter",
                    },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        const parent = event.getParent();
                        if (!parent || !parent.xinxyueding_active) return false;
                        const lostCards = event.getl(player).cards;
                        if (!lostCards) return false;
                        //return lostCards.some(card => get.color(card) == 'red');
                        return lostCards;

                    },
                    async content(event, trigger, player) {
                        let num = 0;
                        const lostCards = trigger.getl(player).cards;
                        for (let i = 0; i < lostCards.length; i++) {
                            //if (get.color(lostCards[i]) == 'red') num++;
                            num++;
                        }
                        if (num > 0) {
                            game.log(player, '因失去牌，触发【约定】摸牌');
                            await player.draw(num);
                        }
                    }
                }
            }
        },


        xinxtianqi: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxtianqi" + index + ".mp3" : 2),
            trigger: {
                global: "roundStart",
            },
            filter(event, player) {
                return game.hasPlayer(current => {
                    return current.countCards('he') > 0 && !current.hasJudge('shandian');
                });
            },
            popup: false,
            locked: true,
            async cost(event, trigger, player) {
                event.result = await player.chooseTarget(
                    '###天启###<div class="text center">选择一名角色，将其一张牌当做【闪电】置入判定区</div>',
                    (card, player, target) => {
                        return !target.hasJudge('shandian') && target.countCards('he') > 0;
                    }
                ).set('ai', target => {
                    return -get.attitude(get.player(), target);
                }).forResult();
                if (event.result.bool) {
                    const target = event.result.targets[0];
                    const resultCard = await player.choosePlayerCard(
                        target,
                        "he",
                        true
                    ).set('prompt', `选择${get.translation(target)}一张牌当作【闪电】置入其判定区`).forResult();
                    if (resultCard.bool) {
                        event.result.cards = resultCard.links;
                    } else {
                        event.result.bool = false;
                    }
                }
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const card = event.cards[0];
                target.$throw(card);
                player.logSkill('xinxtianqi', target, null, null, [get.rand(1, 3)]);
                await target.addJudge({ name: 'shandian' }, [card]);
                game.log(player, '将', target, '的一张牌转化为', '#g【闪电】', '置入其判定区');

            },
            group: "xinxtianqi_protect",
            subSkill: {
                protect: {
                    trigger: {
                        global: "damageBefore",
                    },
                    filter(event, player) {
                        return event.card &&
                            event.card.name === 'shandian' &&
                            event.player.isIn();
                    },
                    async cost(event, trigger, player) {
                        event.result = await player.chooseBool(
                            `是否发动【天祈】？防止${get.translation(trigger.player)}受到的【闪电】伤害并令其回复1点体力`
                        )
                            .set("choice", get.attitude(player, trigger.player) > 0)
                            .forResult();
                    },
                    async content(event, trigger, player) {
                        const target = trigger.player;
                        player.logSkill('xinxtianqi', target, null, null, [4]);
                        trigger.cancel();
                        await target.recover();
                        game.log(target, '受到的【闪电】伤害被', player, '防止了');
                    }
                }
            }
        },

        xinxhongzhu: {
            audio: "ext:永夜之境/audio:7",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxhongzhu" + index + ".mp3" : 2),
            trigger: {
                player: ["phaseEnd", "damageEnd", 'recoverEnd'],
            },
            popup: false,
            filter(event, player) {
                if (!player.storage.xinxhongzhu_damage && event.name == "damage") return false;
                if (!player.storage.xinxhongzhu_recover && event.name == "recover") return false;
                return player.countCards('hej') > 0;
            },
            async cost(event, trigger, player) {
                const list = [];
                if (player.countCards('j') > 0) list.push("判定区");
                if (player.countCards('e') > 0) list.push("装备区");
                if (player.countCards('h') > 0) list.push("手牌区");
                const { control } = await player
                    .chooseControl(list, "cancel2")
                    .set("prompt", "###" + get.prompt("xinxhongzhu") + '###<div class="text center">是否失去一个区域的所有牌，然后获得本回合进入弃牌堆的牌</div>')
                    .set("choiceList", list)
                    .set("ai", () => {
                        const player = get.player();
                        if (player.countCards("j", { type: "delay" })) {
                            return "判定区";
                        }
                        if (player.countCards("h") <= 2) {
                            return "手牌区";
                        }
                        if (player.countCards("e") <= 1 && player.countCards("h") >= 3 && !player.getEquip("zhuge")) {
                            return "装备区";
                        }
                        if (player.countCards("j")) return "判定区";
                        let available = [];
                        if (player.countCards('j')) available.push("判定区");
                        if (player.countCards('e')) available.push("装备区");
                        if (player.countCards('h')) available.push("手牌区");
                        //return available[0];
                        return 'cancel2' || available[0];
                    }).forResult();
                event.result = { bool: control != "cancel2", cost_data: control };
            },
            async content(event, trigger, player) {
                const cards = get.discarded().filterInD("od");
                const position = { 判定区: "j", 装备区: "e", 手牌区: "h" }[event.cost_data];
                switch (position) {
                    case "j":
                        let cardsj = player.getCards("j");
                        await player.lose(cardsj);
                        break;
                    case "e":
                        let cardse = player.getCards("e");
                        await player.lose(cardse);
                        break;
                    case "h":
                        let cardsh = player.getCards("h");
                        await player.lose(cardsh);
                        break;
                }
                player.logSkill("xinxhongzhu", null, null, null, [get.rand(1, 4)]);
                if (cards && cards.length) await player.gain(cards, "gain2");
            },
            marktext: "🌈",
            mark: true,
            intro: {
                markcount(storage, player) {
                    const cards = get.discarded().filterInD("d");
                    return cards.length;
                },
                mark(dialog, storage, player) {
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }

                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; border-bottom:1px solid rgba(128,128,128,0.3)">📊 额外发动时机</div>');
                    let da = player.storage.xinxhongzhu_damage;
                    let re = player.storage.xinxhongzhu_recover;
                    let use = player.hasSkill('xinxhongzhu_use');
                    let str = '';
                    if (da) {
                        str += "受到伤害后";
                    }
                    if (re) {
                        str += "回复体力后";
                    }
                    if (use) {
                        str += "出牌阶段限一次";
                    }
                    // 如果 str 为空，显示默认文本
                    const statusContent = str ? str : "<li style='opacity:0.6'>暂无可用时机</li>";
                    // --- 构建 infoHtml ---
                    // 使用 ul 列表包裹 li，并添加一些内边距和字体样式
                    const infoHtml = `<ul style="margin:10px 0; padding-left:20px; font-size:16px;">${statusContent}</ul>`;
                    // 将生成好的 HTML 添加到对话框
                    dialog.addText(infoHtml);

                    const centerCards = get.discarded().filterInD("d");
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🀄中央区</div>');
                    if (centerCards.length) {
                        dialog.addAuto(centerCards);
                    } else {
                        dialog.addText('<div class="text center" style="opacity:0.6">暂无卡牌</div>');
                    }
                }
            },
            group: ["xinxhongzhu_record"],
            subSkill: {
                mark: {
                    charlotte: true,
                    intro: {
                        name: "额外可用时机",
                        content(storage, player) {
                            let da = player.storage.xinxhongzhu_damage;
                            let re = player.storage.xinxhongzhu_recover;
                            let use = player.hasSkill('xinxhongzhu_use');
                            let str = '';
                            if (da) {
                                str += "<li>受到伤害后";
                            }
                            if (re) {
                                str += "<li>回复体力后";
                            }
                            if (use) {
                                str += "<li>出牌阶段限一次";
                            }
                            return str ? str : "<li>暂无可用时机";
                        },
                    }
                },
                record: {
                    trigger: {
                        global: "recoverEnd",
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        if (player.storage.xinxhongzhu_damage && player.storage.xinxhongzhu_recover && player.hasSkill("xinxhongzhu_use")) return false;
                        return event.source && event.source == player && event.player != player;
                    },
                    async content(event, trigger, player) {
                        const list = [];
                        if (!player.storage.xinxhongzhu_damage) list.push("受到伤害");
                        if (!player.storage.xinxhongzhu_recover) list.push("回复体力");
                        if (!player.hasSkill("xinxhongzhu_use")) list.push("出牌阶段");
                        const list2 = ["当你受到伤害后", "当你回复体力后", '出牌阶段限一次'];
                        const result
                            = await player
                                .chooseControl(list)
                                .set("prompt", "###" + get.prompt("xinxhongzhu") + '###<div class="text center">选择为【虹驻】增加一个时机</div>')
                                .set("choiceList", list2)
                                .set("ai", () => {
                                    const player = get.player();
                                    if (!player.hasSkill("xinxhongzhu_use")) return "出牌阶段";
                                    if (!player.storage.xinxhongzhu_damage) return "受到伤害";
                                    return "回复体力";
                                }).forResult();
                        switch (result.control) {
                            case "受到伤害":
                                player.storage.xinxhongzhu_damage = true;
                                break;
                            case "回复体力":
                                player.storage.xinxhongzhu_recover = true;
                                break;
                            case "出牌阶段":
                                player.addSkill("xinxhongzhu_use");
                                break;
                        }
                        //player.addSkill('xinxhongzhu_mark');
                        //player.markSkill('xinxhongzhu_mark');
                        player.logSkill("xinxhongzhu", null, null, null, [get.rand(5, 7)]);
                    }
                },
                use: {
                    enable: "phaseUse",
                    usable: 1,
                    popup: false,
                    prompt: "是否发动【虹驻】？选择一个区域的牌与本回合进入弃牌堆的牌交换",
                    filter(event, player) {
                        return player.countCards('hej') > 0 && get.discarded().filterInD("od");
                    },
                    async content(event, trigger, player) {
                        const list = [];
                        if (player.countCards('j') > 0) list.push("判定区");
                        if (player.countCards('e') > 0) list.push("装备区");
                        if (player.countCards('h') > 0) list.push("手牌区");
                        const result = await player
                            .chooseControl(list, "cancel2")
                            .set("prompt", "###" + get.prompt("xinxhongzhu") + '###<div class="text center">失去一个区域的所有牌，然后获得本回合进入弃牌堆的牌</div>')
                            .set("choiceList", list)
                            .set("ai", () => {
                                const player = get.player();
                                if (player.countCards("j", { type: "delay" })) {
                                    return "判定区";
                                }
                                if (player.countCards("h") < 3) {
                                    return "手牌区";
                                }
                                if (player.countCards("e") <= 1 && player.countCards("h") >= 3 && !player.getEquip("zhuge")) {
                                    return "装备区";
                                }
                                if (player.countCards("j")) return "判定区";
                                let available = [];
                                if (player.countCards('j')) available.push("判定区");
                                if (player.countCards('e')) available.push("装备区");
                                if (player.countCards('h')) available.push("手牌区");
                                //return available[0];
                                return 'cancel2' || available[0];
                            }).forResult();
                        if (result.control === "cancel2") {
                            player.getStat().skill[event.name]--;
                            return;
                        } else {
                            const cards = get.discarded().filterInD("od");
                            const positionMap = {
                                "判定区": "j",
                                "装备区": "e",
                                "手牌区": "h"
                            };
                            const zone = positionMap[result.control];
                            let cardsToLose = player.getCards(zone);
                            if (cardsToLose.length) {
                                await player.lose(cardsToLose);
                                player.logSkill("xinxhongzhu", null, null, null, [get.rand(1, 4)]);
                                if (cards && cards.length) {
                                    await player.gain(cards, "gain2");
                                }
                            }

                        }


                    },
                    ai: {
                        basic: {
                            order: 3,
                        },
                        result: {
                            player(player) {
                                if (player.countCards("e") < 1) {
                                    return -1;
                                }
                                return 1;
                            },
                        },
                    },
                },

            },


        },
        xinxduoyi: {
            audio: "ext:永夜之境/audio:6",
            trigger: {
                global: "roundStart",
            },
            filter(event, player) {
                if (player.countDisabledSlot() >= 6) {
                    return false;
                }
                return true;
            },
            forced: true,
            async content(event, trigger, player) {
                if (!_status.characterlist) {
                    game.initCharacterList();
                }
                _status.characterlist.randomSort();
                const xinx1Characters = Object.keys(lib.characterPack['xinx1'] || {});
                const xinx2Characters = Object.keys(lib.characterPack['xinx2'] || {});
                const bannedCharacters = new Set([...xinx1Characters, ...xinx2Characters]);
                const list = [];
                for (const name of _status.characterlist) {
                    if (bannedCharacters.has(name)) {
                        continue;
                    }
                    if (name.endsWith("mrfz")) {
                        continue;
                    }
                    // if (name.startsWith("jlsg")) {
                    //     continue;
                    // }
                    const info = lib.character[name];
                    if (
                        info[3].some(function (skill) {
                            const list = get.skillCategoriesOf(skill, player);
                            return !['主公技'].some(item => list.includes(item));
                        })
                    ) {
                        list.push(name);
                        //const num = Math.min(5,player.storage.xinxbashi ||1);
                        if (list.length >= (5)) {
                            break;
                        }
                    }
                }
                if (!list.length) {
                    return;
                } else {
                    const num = Math.min(5, player.storage.xinxbashi || 1);
                    const result = await player
                        .chooseButton(
                            [
                                "多艺：是否选择" + (num > 1 ? "至多" : "") + get.cnNumber(num) + "张武将置入装备区",
                                [
                                    list,
                                    function (item, type, position, noclick, node) {
                                        return lib.skill.xinxduoyi.$createButton(item, type, position, noclick, node);
                                    },
                                ],
                            ],
                            [1, num],
                            "allowChooseAll"
                        )
                        .set("ai", function (button) {
                            const name = button.link;
                            const info = lib.character[name];
                            const skills = info[3].filter(function (skill) {
                                const list = get.skillCategoriesOf(skill, get.player());
                                return !['主公技'].some(item => list.includes(item));
                            });
                            let eff = 0.2;
                            for (const i of skills) {
                                eff += get.skillRank(i, "in");
                            }
                            return eff;
                        }).forResult();
                    if (result.bool) {
                        if (player.storage.xinxbashi > 1) {
                            player.storage.xinxbashi = 1;
                        }
                        const list = result.links;
                        game.addVideo("skill", player, ["xinxduoyi", [list]]);
                        _status.characterlist.removeArray(list);
                        game.broadcastAll(
                            function (player, list) {
                                player.tempname.addArray(list);
                                for (const name of list) {
                                    lib.skill.xinxduoyi.createCard(name);
                                }
                            },
                            player,
                            list
                        );
                        const cards = list.map(function (name) {
                            const card = game.createCard("xinxduoyi_" + name, "none", "none");
                            return card;
                        });
                        player.$gain2(cards);
                        await game.delayx();
                        for (const card of cards) {
                            await player.equip(card);
                        }
                        player.markSkill('xinxbashi');
                    }
                }
            },
            $createButton(item, type, position, noclick, node) {
                node = ui.create.buttonPresets.character(item, "character", position, noclick);
                const info = lib.character[item];
                const skills = info[3].filter(function (skill) {
                    const list = get.skillCategoriesOf(skill, get.player());
                    return !['主公技'].some(item => list.includes(item));
                });
                if (skills.length) {
                    const skillstr = skills.map(i => `[${get.translation(i)}]`).join("<br>");
                    const skillnode = ui.create.caption(`<div class="text" data-nature=${get.groupnature(info[1], "raw")}m style="font-family: ${lib.config.name_font || "xinwei"},xinwei">${skillstr}</div>`, node);
                    skillnode.style.left = "2px";
                    skillnode.style.bottom = "2px";
                }
                node._customintro = function (uiintro, evt) {
                    const character = node.link,
                        characterInfo = get.character(node.link);
                    let capt = get.translation(character);
                    uiintro.add(capt);
                    if (lib.characterTitle[node.link]) {
                        uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
                    }
                    for (let i = 0; i < skills.length; i++) {
                        if (lib.translate[skills[i] + "_info"]) {
                            let translation = lib.translate[skills[i] + "_ab"] || get.translation(skills[i]).slice(0, 2);
                            if (lib.skill[skills[i]] && lib.skill[skills[i]].nobracket) {
                                uiintro.add('<div><div class="skilln">' + get.translation(skills[i]) + "</div><div>" + get.skillInfoTranslation(skills[i], null, false) + "</div></div>");
                            } else {
                                uiintro.add('<div><div class="skill">【' + translation + "】</div><div>" + get.skillInfoTranslation(skills[i], null, false) + "</div></div>");
                            }
                            if (lib.translate[skills[i] + "_append"]) {
                                uiintro._place_text = uiintro.add('<div class="text">' + lib.translate[skills[i] + "_append"] + "</div>");
                            }
                        }
                    }
                };
                return node;
            },
            video(player, info) {
                for (const name of info[0]) {
                    lib.skill.xinxduoyi.createCard(name);
                }
            },
            createCard(name) {
                if (!_status.postReconnect.xinxduoyi) {
                    _status.postReconnect.xinxduoyi = [
                        function (list) {
                            for (const name of list) {
                                lib.skill.xinxduoyi.createCard(name);
                            }
                        },
                        [],
                    ];
                }
                _status.postReconnect.xinxduoyi[1].add(name);
                if (!lib.card["xinxduoyi_" + name]) {
                    if (lib.translate[name + "_ab"]) {
                        lib.translate["xinxduoyi_" + name] = lib.translate[name + "_ab"];
                    } else {
                        lib.translate["xinxduoyi_" + name] = lib.translate[name];
                    }
                    const info = lib.character[name];
                    const card = {
                        fullimage: true,
                        image: "character:" + name,
                        type: "equip",
                        subtype: ["equip2", "equip3", "equip4", "equip5"].randomGet(),
                        enable: true,
                        selectTarget: -1,
                        filterTarget(card, player, target) {
                            if (player != target) {
                                return false;
                            }
                            return target.canEquip(card, true);
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content: lib.element.content.equipCard,
                        toself: true,
                        ai: {},
                        skills: ["xinxduoyi_destroy"],
                    };
                    const skills = info[3].filter(function (skill) {
                        const list = get.skillCategoriesOf(skill, get.player());
                        return !['主公技'].some(item => list.includes(item));
                    });
                    let str = "锁定技。";
                    if (skills.length) {
                        card.skills.addArray(skills);
                        str += "你视为拥有以下技能：<br>";
                        for (const skill of skills) {
                            // 格式：〖技能名〗：技能描述<换行>
                            str += "<b>〖" + get.translation(skill) + "〗</b>：" + get.skillInfoTranslation(skill) + "<br>";
                        }
                        card.ai.equipValue = function (card, player) {
                            return skills.length;
                        };
                    }
                    str += "此牌离开你的装备区后，改为置入剩余武将牌牌堆。";
                    lib.translate["xinxduoyi_" + name + "_info"] = str;
                    let append = "";
                    if (skills.length) {
                        for (const skill of skills) {
                            if (lib.skill[skill].nobracket) {
                                append += '<div class="skilln">' + get.translation(skill) + '</div><div><span style="font-family: yuanli">' + get.skillInfoTranslation(skill) + "</span></div><br><br>";
                            } else {
                                const translation = lib.translate[skill + "_ab"] || get.translation(skill).slice(0, 2);
                                append += '<div class="skill">【' + translation + '】</div><div><span style="font-family: yuanli">' + get.skillInfoTranslation(skill) + "</span></div><br><br>";
                            }
                        }
                        str = str.slice(0, str.length - 8);
                    }
                    lib.translate["xinxduoyi_" + name + "_append"] = append;
                    lib.card["xinxduoyi_" + name] = card;
                    game.finishCard("xinxduoyi_" + name);
                }
            },
            subSkill: {
                destroy: {
                    trigger: {
                        player: "loseBegin",
                    },
                    equipSkill: true,
                    forceDie: true,
                    charlotte: true,
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        return event.cards.some(card => card.name.indexOf("xinxduoyi_") == 0);
                    },
                    content() {
                        for (var card of trigger.cards) {
                            if (card.name.indexOf("xinxduoyi_") == 0) {
                                card._destroy = true;
                                game.log(card, "被放回武将牌堆");
                                var name = card.name.slice(7);
                                if (player.tempname && player.tempname.includes(name)) {
                                    game.broadcastAll(
                                        (player, name) => {
                                            player.tempname.remove(name);
                                        },
                                        player,
                                        name
                                    );
                                }
                                if (lib.character[name]) {
                                    _status.characterlist.add(name);
                                }
                            }
                        }
                    },
                    sub: true,
                    "_priority": -25,
                },
            },
        },
        xinxbashi: {
            audio: "ext:永夜之境/audio:4",
            mark: true,
            init(player) {
                player.storage.xinxbashi = 1;
            },
            onremove(player, skill) {
                delete player.storage.xinxbashi;
            },
            intro: {
                content(storage) {
                    return `可选择武将牌数:${get.cnNumber(storage)}张`;
                },
            },
            trigger: {
                player: "loseAfter",
                global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
            },
            popup: false,
            usable: 1,
            getIndex(event, player) {
                const evt = event.getl(player);
                if (player.countCards("he") < 1) { return false; }
                if (evt && evt.player === player && evt.es) {
                    return evt.es.length;
                }
                return false;
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseCard(get.prompt2("xinxbashi"), [1], "he", lib.filter.cardRecastable)
                    .set("ai", card => {
                        let player = get.player();
                        if (get.type2(card) === "equip") {
                            return 0;
                        }
                        let val = get.value(card);
                        return 6 - val;
                    })
                    .setHiddenSkill("xinxbashi")
                    .forResult();
            },
            async content(event, trigger, player) {
                player.logSkill("xinxbashi", null, null, null, [get.rand(1, 4)]);
                await player.recast(event.cards);
                if (player.storage.xinxbashi < 5) {
                    player.storage.xinxbashi++;
                }
                player.markSkill('xinxbashi');
            }

        },
        xinxyiyu: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyiyu" + index + ".mp3" : 2),
            trigger: {
                global: "judgeEnd",
            },
            filter(event, player, name) {
                return player.hasUseTarget(event.result.card) && player.hasCard(card => get.color(card) == get.color(event.result.card), "hes");
            },
            forced: true,
            locked: false,
            popup: false,
            async content(event, trigger, player) {
                player.logSkill("xinxyiyu", null, null, null, [get.rand(1, 4)]);
                await player.chooseUseTarget(trigger.result.card, false);
            },
        },
        xinxbuli: {
            audio: "ext:永夜之境/audio:7",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxbuli" + index + ".mp3" : 2),
            mark: true,
            markimage: 'extension/永夜之境/image/mark/xinxbuli.png',
            init(player) {
                player.storage.xinxbuli = 3;
            },
            onremove(player, skill) {
                delete player.storage.xinxbuli;
            },
            intro: {
                content(storage) {
                    return "当前判定次数：" + (storage || 3);
                }
            },
            trigger: {
                //player: "phaseUseBegin",
                player: "phaseDrawBegin",
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
                player.logSkill("xinxbuli", null, null, null, [get.rand(1, 2)]);
                await player.draw(3);
                player.addSkill('xinxbuli_gain');
                let judgeCount = 0;
                //let maxJudges = 3;
                //while (judgeCount < maxJudges) {
                while (judgeCount < player.storage.xinxbuli) {
                    judgeCount++;
                    //获取判定前的“体力变化事件”总数
                    const startHistoryLength = game.getGlobalHistory('changeHp').length;
                    const result = await player.judge(function (card) {
                        return 0;
                    }).forResult();
                    const card = result.card;
                    // 获取判定后的总数并对比
                    const endHistoryLength = game.getGlobalHistory('changeHp').length;
                    if (card && endHistoryLength > startHistoryLength) {
                        //maxJudges++; // 次数+1
                        player.storage.xinxbuli++;
                        player.logSkill("xinxbuli", null, null, null, [get.rand(3, 5)]);
                        player.markSkill('xinxbuli');
                        player.popup('判定+1');
                        game.log(player, '因判定期间有角色体力变化，判定次数+1');
                        player.markAuto("xinxbuli_gian", [card]);
                    }
                    await game.delayx();
                }
                trigger.cancel();
            },
            //group: ["xinxbuli_gain"],
            subSkill: {
                gain: {
                    trigger: {
                        player: "phaseJieshuBegin",
                    },
                    forced: true,
                    filter(event, player) {
                        //return player.storage.xinxbuli_gain_cards && player.storage.xinxbuli_gain_cards.length > 0;
                        return player.getStorage("xinxbuli_gian").someInD("do");
                    },
                    async content(event, trigger, player) {
                        const cardsToGain = player.getStorage("xinxbuli_gian");
                        if (cardsToGain.length) {
                            player.logSkill("xinxbuli", null, null, null, [get.rand(6, 7)]);
                            game.log(player, '获得了记录的判定牌', cardsToGain);
                            player.gain(cardsToGain, 'gain2');
                        }
                        delete player.storage.xinxbuli_gian;
                    }
                },
            }
        },
        xinxyilian_phase: {
            trigger: {
                player: "phaseBefore",
            },
            mark: true,
            markimage: 'extension/永夜之境/image/mark/xinxyilian_phase.png',
            intro: {
                content(storage, player) {
                    const phaseMap = {
                        phaseZhunbei: '准备',
                        phaseJudge: '判定',
                        phaseDraw: '摸牌',
                        phaseUse: '出牌',
                        phaseDiscard: '弃牌',
                        phaseJieshu: '结束',
                    };
                    // 获取当前的阶段列表
                    let list = player.storage.xinxyilian_phaseList;
                    if (!list || list.length === 0) return "标准阶段顺序";
                    // 转换为中文并用箭头连接
                    let str = list.map(name => {
                        let nameStr = phaseMap[name] || get.translation(name);
                        if (name === 'phaseUse') return '<span style="color:#ff6666">' + nameStr + '</span>';//FCACD4
                        if (name === 'phaseDraw') return '<span style="color:#66ccff">' + nameStr + '</span>';//57FFFF
                        return nameStr;
                    }).join(" → ");

                    return "当前阶段顺序：<br>" + str;
                }
            },
            charlotte: true,
            superCharlotte: true,
            forced: true,
            silent: true,
            filter(event, player) {
                return player.storage.xinxyilian_phaseList && player.storage.xinxyilian_phaseList.length > 0;
            },
            async content(event, trigger, player) {
                trigger.phaseList = player.storage.xinxyilian_phaseList.slice();
            },
        },
        xinxyilian: {
            audio: "ext:永夜之境/audio:17",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyilian" + index + ".mp3" : 2),
            init(player) {
                player.addSkill("xinxyilian_phase");
                if (!player.storage.xinxyilian_phaseList) {
                    player.storage.xinxyilian_phaseList = ["phaseZhunbei", "phaseJudge", "phaseDraw", "phaseUse", "phaseDiscard", "phaseJieshu"];
                }
            },
            hiddenCard(player, name) {
                if ((player.getStat("skill")?.xinxyilian ?? 0) > 0) {
                    return false;
                }
                return ["basic", "trick"].includes(get.type(name)) && !player.getStorage("xinxyilian_used").includes(name);
            },
            popup: false,
            enable: "chooseToUse",
            filter(event, player) {
                return get
                    .inpileVCardList(info => {
                        const name = info[2];
                        if (!["basic", "trick"].includes(get.type(name))) {
                            return false;
                        }
                        return !player.getStorage("xinxyilian_used").includes(name);
                    })
                    .some(card => event.filterCard(new lib.element.VCard({ name: card[2], nature: card[3], isCard: true }), player, event));
            },
            usable: 1,
            chooseButton: {
                dialog(event, player) {
                    return ui.create.dialog("漪涟", [get.inpileVCardList(info => ["basic", "trick"].includes(get.type(info[2]))), "vcard"]);
                },
                filter(button, player) {
                    const event = get.event().getParent();
                    if (player.getStorage("xinxyilian_used").includes(button.link[2])) {
                        return false;
                    }
                    return event.filterCard(new lib.element.VCard({ name: button.link[2], nature: button.link[3], isCard: true }), player, event);
                },
                check(button) {
                    const event = get.event().getParent();
                    if (event.type !== "phase") {
                        return 1;
                    }
                    return get.player().getUseValue(new lib.element.VCard({ name: button.link[2], nature: button.link[3], isCard: true }));
                },
                prompt(links) {
                    return '###漪涟###<div class="text center">视为使用' + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】</div>";
                },
                backup(links) {
                    return {
                        filterCard: () => false,
                        selectCard: -1,
                        log: false,
                        viewAs: { name: links[0][2], nature: links[0][3], isCard: true },
                        async precontent(event, trigger, player) {

                            player.addSkill("xinxyilian_used");
                            player.markAuto("xinxyilian_used", [event.result.card.name]);
                            // 获取当前玩家的阶段列表
                            if (!player.storage.xinxyilian_phaseList) {
                                player.storage.xinxyilian_phaseList = ["phaseZhunbei", "phaseJudge", "phaseDraw", "phaseUse", "phaseDiscard", "phaseJieshu"];
                            }
                            let myPhases = player.storage.xinxyilian_phaseList.slice();

                            player.logSkill("xinxyilian", null, null, null, [get.rand(1, 4)]);
                            //game.playAudio("../extension/永夜之境/audio/",'xinxyilian'+[get.rand(1,4)]+'.mp3');
                            const result = await player.chooseButtonTarget({
                                createDialog: [
                                    `###漪涟###是否选择将一个阶段交给一名其他角色`,
                                    [myPhases.map(i => ["", "", i]), "vcard"],
                                ],
                                selectButton: 1,
                                selectTarget: 1,
                                filterTarget(card, player, target) {
                                    return target !== player;
                                },
                                ai1(button) {
                                    const player = get.player();
                                    const phase = button.link[2];
                                    const isEnemyTarget = _status.event.controls && _status.event.controls.target && get.attitude(player, _status.event.controls.target) < 0;
                                    // 核心优先级逻辑
                                    const enemyBadPhases = ["phaseDiscard", "phaseJudge", "phaseZhunbei", "phaseJieshu"];
                                    if (enemyBadPhases.includes(phase)) {
                                        // 返回权值为 10 - (在数组中的索引)，即 弃牌(10) > 判定(9) > 准备(8) > 结束(7)
                                        return 10 - enemyBadPhases.indexOf(phase);
                                    }
                                    if (phase == "phaseDraw") return 1; // 摸牌优先级最低
                                    return 0;

                                },
                                ai2(target) {
                                    const player = get.player();
                                    const myPhases = player.storage.xinxyilian_phaseList || [];
                                    const att = get.attitude(player, target);
                                    // 有“坏阶段”想给出去，优先选敌人
                                    const hasBadPhase = myPhases.some(p => ["phaseDiscard", "phaseJudge", "phaseZhunbei", "phaseJieshu"].includes(p));
                                    if (hasBadPhase) return -att;
                                    // 只有摸牌出牌，优先给队友
                                    return att;
                                }
                            }).forResult();

                            if (result.bool) {
                                const target = result.targets[0];
                                const handedPhase = result.links[0][2];

                                // 从自己列表中移除该阶段
                                myPhases.splice(myPhases.indexOf(handedPhase), 1);
                                game.log(player, '将', '#y' + get.translation(handedPhase), '交给', target);

                                if (['phaseUse', 'phaseDraw'].includes(handedPhase)) {
                                    player.logSkill("xinxyilian", [target], null, null, [get.rand(9, 11)]);
                                }
                                else {
                                    player.logSkill("xinxyilian", [target], null, null, [get.rand(5, 6)]);
                                }
                                /* else if (['phaseZhunbei', 'phaseJieshu'].includes(handedPhase)) {
        
                                } 
                                else if (['phaseDiscard', 'phaseJudge'].includes(handedPhase)) {
                                    
                                } */

                                // 2. 目标获得阶段，玩家调整其顺序
                                target.addSkill('xinxyilian_phase');
                                if (!target.storage.xinxyilian_phaseList) {
                                    target.storage.xinxyilian_phaseList = ["phaseZhunbei", "phaseJudge", "phaseDraw", "phaseUse", "phaseDiscard", "phaseJieshu"];
                                }
                                let targetPhases = target.storage.xinxyilian_phaseList.slice();
                                targetPhases.push(handedPhase);


                                const moveResultTarget = await player.chooseToMove(`漪涟：调整${get.translation(target)}阶段顺序`, true)
                                    .set('list', [['新阶段顺序', [targetPhases.map(i => ['', '', i]), 'vcard']]])
                                    .set('target', target)
                                    .set('processAI', () => {
                                        let list = targetPhases.slice();
                                        const isFriend = get.attitude(player, target) >= 0;
                                        if (!isFriend) {
                                            // 敌人的排序
                                            let order = ["phaseJudge", "phaseDraw", "phaseDiscard", "phaseUse"];
                                            let sorted = [];
                                            for (let p of order) {
                                                if (list.includes(p)) {
                                                    sorted.push(p);
                                                    list.splice(list.indexOf(p), 1);
                                                }
                                            }
                                            return [sorted.concat(list).map(i => ['', '', i])];
                                        } else {
                                            // 队友的排序
                                            let order = ["phaseDraw", "phaseUse", "phaseDiscard", "phaseJudge"];
                                            let sorted = [];
                                            for (let p of order) {
                                                if (list.includes(p)) {
                                                    sorted.push(p);
                                                    list.splice(list.indexOf(p), 1);
                                                }
                                            }
                                            return [sorted.concat(list).map(i => ['', '', i])];
                                        }
                                    })
                                    .forResult();

                                if (moveResultTarget.bool) {
                                    target.storage.xinxyilian_phaseList = moveResultTarget.moved[0].map(i => i[2]);
                                } else {
                                    target.storage.xinxyilian_phaseList = targetPhases;
                                }

                                // game.playAudio("../extension/永夜之境/audio/", 'xinxyilian' + [7,8,16,17].randomGet() + '.mp3');

                                let copyPool = [];
                                let seen = new Set();
                                myPhases.forEach(p => {
                                    if (!seen.has(p)) {
                                        seen.add(p);
                                        copyPool.push(['', '', p]);
                                    }
                                });


                                game.playAudio("../extension/永夜之境/audio/", 'xinxyilian' + [12, 13, 14, 15].randomGet() + '.mp3');

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
                                        let toCopy = 'phaseDraw'; // 默认复制摸牌
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

                                // 3. 如果是给别人调整了阶段，且是别人的回合
                                if (target && target.storage.xinxyilian_phaseList) {
                                    let targetTurn = _status.event.getParent('phase');
                                    if (targetTurn && targetTurn.player == target) {
                                        targetTurn.phaseList = target.storage.xinxyilian_phaseList.slice();
                                    }
                                }


                            }
                        }
                    }
                },
            },
            ai: {
                fireAttack: true,
                respondSha: true,
                respondShan: true,
                skillTagFilter(player, tag, arg) {
                    if (arg === "respond") {
                        return false;
                    }
                    return (() => {
                        switch (tag) {
                            case "fireAttack":
                                return ["sha", "huogong"];
                            default:
                                return [tag.slice("respond".length).toLowerCase()];
                        }
                    })().some(name => get.info("xinxyilian").hiddenCard(player, name));
                },
                order(item, player) {
                    if (player && _status.event.type === "phase") {
                        let max = 0,
                            names = get.inpileVCardList(info => {
                                const name = info[2];
                                if (!["basic", "trick"].includes(get.type(name))) {
                                    return false;
                                }
                                return !player.getStorage("xinxyilian_used").includes(name);
                            });
                        names = names.map(namex => new lib.element.VCard({ name: namex[2], nature: namex[3] }));
                        names.forEach(card => {
                            if (player.getUseValue(card) > 0) {
                                let temp = get.order(card);
                                if (temp > max) {
                                    max = temp;
                                }
                            }
                        });
                        return max + (max > 0 ? 0.2 : 0);
                    }
                    return 10;
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
            subSkill: {
                backup: {
                    "skill_id": "xinxyilian_backup",
                    sub: true,
                    sourceSkill: "xinxyilian",
                    "_priority": 0,
                },
                used: {
                    markimage: 'extension/永夜之境/image/mark/xinxyilian_used.png',
                    charlotte: true,
                    onremove: true,
                    intro: {
                        content: "已使用牌名：$",
                    },
                    "skill_id": "xinxyilian_used",
                    sub: true,
                    sourceSkill: "xinxyilian",
                    "_priority": 0,
                },
            },
            "skill_id": "xinxyilian",
            "_priority": 0,

        },
        xinxguiren: {
            audio: "ext:永夜之境/audio:2",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxguiren" + index + ".mp3" : 2),
            enable: "chooseToUse",
            onChooseToUse(event) {
                if (!game.online && !event.xinxguiren_cards) {
                    event.set(
                        "xinxguiren_cards",
                        event.player.getCards("hes", card => {
                            const str = get.cardDescription(card, event.player);
                            return str.includes("伤害");
                        })
                    );
                }
            },
            xiandingji: true,
            popup: false,
            filterCard: true,
            selectCard: [1, Infinity],
            // selectCard: function () {
            //     var player = _status.event.player;
            //     
            //     return [1, (player.hp)];
            // },
            position: "hes",
            viewAs: {
                name: "sha",
                nature: "stab",
                storage: {
                    guiren: true,
                },
            },
            complexCard: true,
            filter(event, player) {
                return player.countCards("hes") >= 1;
            },
            prompt: "将任意张牌当刺【杀】使用或打出",
            async precontent(event, trigger, player) {
                player.awakenSkill("xinxguiren");
                player.logSkill("xinxguiren", null, null, null, [1]);
                player.addSkill('xinxguiren_effect');
                player.addSkill('xinxguiren_use');
            },
            check(card) {
                let player = _status.event.player;
                let val = get.value(card);
                let base = 8;
                let hasTarget = game.hasPlayer(function (current) {
                    return player.canUse('sha', current) &&
                        get.attitude(player, current) < 0 &&
                        (current.hp <= 2 || current.countCards('h') <= 1);
                });
                if (hasTarget) {
                    base += 5;
                }
                if (player.countCards('h') > 2) {
                    base += (player.countCards('h') - 2) * 1.5;
                }
                return base - val;
                /* let player = _status.event.player;
                let handCards = player.getCards('h');
                let damageCards = handCards.filter(c => {
                    let str = get.cardDescription(c);
                    return str && str.includes("伤害");
                });
                let maxDamage = damageCards.length;
                let hasLethalTarget = game.hasPlayer(function (target) {
                    return get.attitude(player, target) < 0 &&
                        player.canUse('sha', target) &&
                        target.hp > 0 &&
                        target.hp <= maxDamage;
                });
                if (hasLethalTarget) {
                    let str = get.cardDescription(card);
                    if (str && str.includes("伤害")) {
                        return 100;
                    }
                    return 90;
                }
                if (maxDamage >= 2) {
                    return 6 - get.value(card);
                }
                return 0; */
            },
            ai: {
                order(item, player, target) {
                    let handCards = player.getCards('h');
                    let damageCards = handCards.filter(c => {
                        let str = get.cardDescription(c);
                        return str && str.includes("伤害");
                    });
                    let maxDamage = damageCards.length;
                    let hasLethalTarget = game.hasPlayer((target) => {
                        return get.attitude(player, target) < 0 &&
                            target.hp <= maxDamage;
                    });
                    if (hasLethalTarget) {
                        return 10;
                    }
                    if (maxDamage >= 4) {
                        return 1;
                    }
                    return 0;
                },
                result: {
                    target(player, target, card, isLink) {
                        let handCards = player.getCards('h');
                        let damageCards = handCards.filter(c => {
                            let str = get.cardDescription(c);
                            return str && str.includes("伤害");
                        });
                        let maxDamage = damageCards.length;
                        let hasLethalTarget = game.hasPlayer((target) => {
                            return get.attitude(player, target) < 0 &&
                                target.hp <= maxDamage;
                        });
                        if (hasLethalTarget) {
                            return -3;
                        }
                        if (maxDamage >= 4) {
                            return -1;
                        }
                        return 0;
                    }
                },
            },

            subSkill: {
                effect: {
                    trigger: {
                        global: "damageBegin1",
                    },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    filter(event, player) {
                        return event.card?.storage?.guiren;
                    },
                    async content(event, trigger, player) {
                        let cards = trigger.cards;
                        const damageCount = cards.filter(card => {
                            return get.cardDescription(card, player)?.includes("伤害");
                        }).length;
                        player.logSkill("xinxguiren", null, null, null, [2]);
                        trigger.num = damageCount || 1;
                        /* for (const card of cards) {
                            const str = get.cardDescription(card);
                            if (str.includes("伤害")) {
                                player.markAuto('xinxguiren_effect', card);
                            }
                        }
                        trigger.num = player.getStorage('xinxguiren_effect').length||1;
                        await player.unmarkAuto('xinxguiren_effect', cards); */
                    },
                    sub: true,
                },
                use: {
                    charlotte: true,
                    onremove: true,
                    trigger: {
                        player: "useCardToBegin",
                    },
                    filter(event, player) {
                        return event.card?.storage?.guiren;
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    async content(event, trigger, player) {
                        trigger.setContent(lib.card.xinxguirensha.content);
                    },
                    sub: true,
                }
            },
            locked: false,
            mod: {
                targetInRange(card) {
                    if (card?.storage?.guiren) {
                        return true;
                    }
                },
                cardUsable(card, player, num) {
                    if (card?.storage?.guiren) {
                        return Infinity;
                    }
                },
            },
            "skill_id": "xinxguiren",
            "_priority": 0,
        },
        xinxzaixian: {
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzaixian" + index + ".mp3" : 2),
            trigger: {
                player: "useCardAfter",
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                const history = game.getGlobalHistory('everything');
                let hasDying = false;
                let hasCards = false;
                for (let evt of history) {
                    if (evt.name !== 'dying' && evt.name !== 'lose' && evt.name !== 'loseAsync' && evt.name !== 'cardsDiscard') {
                        continue;
                    }
                    let isChild = false;
                    let parent = evt.getParent();
                    while (parent && typeof parent.getParent === 'function') {
                        if (parent == event) {
                            isChild = true;
                            break;
                        }
                        parent = parent.getParent();
                    }
                    if (!isChild) continue;
                    if (evt.name == 'dying' && evt.player != player) {
                        hasDying = true;
                    }
                    else if (evt.cards && evt.cards.length) {
                        hasCards = true;
                    }
                    if (hasDying && hasCards) return true;
                }
                return false;
            },
            async content(event, trigger, player) {
                // let cards = player.getStorage("xinxzaixian").slice().filterInD("od");
                // await player.gain(cards);
                const history = game.getGlobalHistory('everything');
                let cardsToGain = [];
                for (let evt of history) {
                    if (evt.name !== 'lose' && evt.name !== 'loseAsync' && evt.name !== 'cardsDiscard') continue;
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
                        cardsToGain.addArray(evt.cards);
                    }
                }
                if (cardsToGain.length > 0) {
                    let finalCards = cardsToGain.filter(c => get.position(c));
                    if (finalCards.length) {
                        player.logSkill("xinxzaixian", null, null, null, [get.rand(1, 4)]);
                        await player.gain(finalCards, 'gain2');
                        player
                            .when("phaseBegin")
                            .step(async (event, trigger, player) => {
                                game.playAudio("../extension/永夜之境/audio/", 'xinxzaixian' + [get.rand(5, 6)] + '.mp3');
                                game.log(player, '重置了技能', '#g【归刃】');
                                player.restoreSkill('xinxguiren');
                            });


                    }
                }
            },

        },
        xinxxianji: {
            audio: "ext:永夜之境/audio:8",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxxianji" + index + ".mp3" : 2),
            initList() {
                //先用许劭评鉴那个函数初始化一下角色列表
                if (!_status.characterlist) {
                    game.initCharacterList();
                }
                //获取各个角色的技能并去重
                const skills = _status.characterlist
                    .map(i => get.character(i, 3))
                    .flat()
                    .unique();
                //展开技能
                game.expandSkills(skills, true);
                const list = [];
                //筛选技能
                for (let skill of skills) {
                    let info = get.info(skill);
                    //获取技能的内容，后者是一些主动技会用到的内容
                    info = info.content || info.chooseButton?.backup;
                    skill = get.sourceSkillFor(skill);
                    info = get.info(skill);
                    //双重检测，如果技能描述中
                    if (!skill || !get.skillInfoTranslation(skill).includes("当你使用")) {//当你使用牌
                        continue;
                    }
                    //去除觉醒技、隐匿技、势力技、主公技
                    if (!info || info.silent || info.juexingji || info.hiddenSkill || info.groupSkill || info.zhuSkill) {
                        continue;
                    }
                    //去除有联动的技能和负面技能
                    if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) {
                        continue;
                    }
                    list.add(skill);

                }
                _status.xinxxianjiSkills = list;
            },
            trigger: {
                player: ["useCardAfter"],
            },
            usable: 1,
            popup: false,
            filter(event, player) {
                // player.getRoundHistory("useCard", evt => {
                //     return evt != event && get.type2(evt.card) == type;
                // }).length;
                const type = get.type2(event.card);
                const history = player.getRoundHistory("useCard", evt => {
                    return evt != event && get.type2(evt.card) == type;
                });
                return history.length == 0;
            },
            async cost(event, trigger, player) {
                game.playAudio("../extension/永夜之境/audio/", 'xinxxianji' + [get.rand(1, 2)] + '.mp3');
                let result = await player
                    .chooseButtonTarget({
                        createDialog: [
                            `###${get.prompt(event.skill)}###<div class="text center">令一名角色执行一项：<li>将拥有的技能重置至游戏开始状态，将牌数调整为4；<li>使用一张牌，并从三个描述包含“当你使用”的技能中选择一个获得之。</div>`,
                            [
                                [
                                    ["fuyuan", "重置技能"],
                                    ["use", "使用一张牌"],
                                ],
                                "tdnodes",
                            ],
                        ],
                        filterButton(button) {
                            if (button.link == "use") {
                                return game.hasPlayer(target => target.countCards("hs"));
                            }
                            return true;
                        },
                        filterTarget(card, player, target) {
                            return true;
                        },
                        ai1(button) {
                            const player = get.player();
                            if (button.link === "use") {
                                const att = game.hasPlayer(target => get.attitude(player, target) >= 0 && target.countCards("h") >= 1
                                    && target.hasCard(card => target.hasUseTarget(card, false, false), "hs")
                                );
                                return att ? 10 : 1;
                            }
                            if (button.link === "fuyuan") {
                                const datt = game.hasPlayer(target =>
                                    get.attitude(player, target) >= 0 && target.countCards("he") < 2 && !target == player
                                );
                                return datt ? 12 : 0;
                            }
                            return 1;
                        },
                        ai2(target) {
                            const player = get.player();
                            if (ui.selected.buttons[0].link == "fuyuan") {
                                //return get.effect(target, { name: "guohe_copy" }, get.player(), get.player());
                                return get.attitude(player, target) && !target == player;
                            }
                            return get.attitude(player, target);
                        },
                    })
                    .forResult();
                if (result.bool) {
                    event.result = {
                        bool: true,
                        cost_data: {
                            links: result.links,
                            targets: result?.targets,
                        },
                    };
                }
            },
            async content(event, trigger, player) {
                const link = event.cost_data.links[0],
                    targets = event.cost_data.targets;
                const target = targets[0];
                player.line(target);
                if (link == "use" && targets[0].hasCard(card => target.hasUseTarget(card, false, false), "hs")) {
                    if (!_status.xinxxianjiSkills) lib.skill.xinxxianji.initList();
                    const gainList = _status.xinxxianjiSkills.filter(s => !target.hasSkill(s)).randomGets(3);
                    if (!gainList.length) return;
                    const result = await target.chooseButton(['请选择获得一个技能', [gainList, 'skill']])
                        .set('ai', button => get.priority(button.link))
                        .set('forced', true)
                        .forResult();

                    if (result.links && result.links.length) {
                        const chosenSkill = result.links[0];
                        //target.addTempSkill(chosenSkill);
                        target.addSkill(chosenSkill);
                        target.popup(chosenSkill);
                        game.log(target, '获得了技能', `【${get.translation(chosenSkill)}】`);
                    }
                    await targets[0].chooseToUse({
                        filterCard(card) {
                            if (get.itemtype(card) != "card" || !["h", "s"].includes(get.position(card))) {
                                return false;
                            }
                            return lib.filter.filterCard.apply(this, arguments);
                        },
                        filterTarget(card, player, target) {
                            return lib.filter.targetEnabled.apply(this, arguments);
                        },
                        prompt: "先机：使用一张牌（无距离限制）",
                        addCount: false,
                        //forced: true,
                    }).set("logSkill", ["xinxxianji", null, null, null, [get.rand(3, 6)]]);;
                }
                if (link == "fuyuan") {
                    const target = targets[0];
                    const removeSkills = target.getSkills(null, false, false).filter(i => {
                        const info = get.info(i);
                        return !info || !info.charlotte;
                    });
                    if (removeSkills.length) {
                        target.removeSkill(removeSkills);
                    }
                    const gainSkills = target.getStockSkills(true, true).filter(i => {
                        const info = get.info(i);
                        return info && !info.charlotte && (!info.zhuSkill || target.isZhu2());
                    });
                    if (gainSkills.length) {
                        Object.keys(target.storage)
                            .filter(i => gainSkills.some(skill => i.startsWith(skill)))
                            .forEach(storage => delete target.storage[storage]);
                        target.addSkill(gainSkills);
                        const suffixs = ["used", "round", "block", "blocker"];
                        for (const skill of gainSkills) {
                            const info = get.info(skill);
                            if (info.usable !== undefined) {
                                if (typeof target.getStat("triggerSkill")[skill] == "number" && target.getStat("triggerSkill")[skill] >= 1) {
                                    delete target.getStat("triggerSkill")[skill];
                                }
                                if (typeof target.getStat("skill")[skill] == "number" && target.getStat("skill")[skill] >= 1) {
                                    delete target.getStat("skill")[skill];
                                }
                            }
                            if (info.round && target.storage[skill + "_roundcount"]) {
                                delete target.storage[skill + "_roundcount"];
                            }
                            if (target.storage[`temp_ban_${skill}`]) {
                                delete target.storage[`temp_ban_${skill}`];
                            }
                            if (target.awakenedSkills.includes(skill)) {
                                target.restoreSkill(skill);
                            }
                            for (const suffix of suffixs) {
                                if (target.hasSkill(skill + "_" + suffix)) {
                                    target.removeSkill(skill + "_" + suffix);
                                }
                            }
                        }
                    }
                    player.logSkill("xinxxianji", null, null, null, [get.rand(7, 8)]);
                    const num = target.countCards("he") - 4;
                    if (num == 0) {
                        return;
                    }
                    if (num > 0) {
                        await target.chooseToDiscard("he", num, true, "allowChooseAll");
                    } else {
                        await target.draw(-num);
                    }
                }

            }
        },
        xinxkejie: {
            audio: "ext:永夜之境/audio:2",
            //logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxkejie" + index + ".mp3" : 2),
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxsukan" + index + ".mp3" : "ext:永夜之境/audio/xinxkejie1.mp3"),
            trigger: {
                global: "phaseEnd",
            },
            limited: true,
            skillAnimation: true,
            animationColor: "thunder",
            filter(event, player) {
                /* const allCards = [];
                game.countPlayer(current => {
                    const history = current.getHistory('lose');
                    for (const evt of history) {
                        if (evt.cards) {
                            const validCards = evt.cards.filter(card => get.position(card) === 'd');
                            allCards.addArray(validCards);
                        }
                    }
                });
                const suits = [];
                for (const card of allCards) {
                    const suit = get.suit(card);
                    if (suit && suit !== 'none' && !suits.includes(suit)) {
                        suits.push(suit);
                    }
                }
                return suits.length == 4; */
                const cards = get.discarded().filterInD("d");
                const suits = new Set();
                for (const card of cards) {
                    const suit = get.suit(card);
                    if (suit && suit !== 'none') {
                        suits.add(suit);
                    }
                }
                return suits.size == 4;
            },
            prompt2(event, player) {
                const cards = get.discarded().filterInD("d");
                return "将" + get.translation(cards) + "中的至多四张牌分配给任意名角色";
            },
            async content(event, trigger, player) {
                await player.awakenSkill(event.name);
                const cards = get.discarded().filterInD("d");
                if (!cards.length) {
                    return;
                }
                let count = 0;
                const maxLimit = 4;
                game.playAudio("../extension/永夜之境/audio/xinxkejie2.mp3");
                do {
                    // 计算当前还能分配几张
                    const remainingQuota = maxLimit - count;
                    if (remainingQuota <= 0) break;
                    const result =
                        cards.length > 1
                            ? await player.chooseButtonTarget({
                                createDialog: [`克捷：请选择要分配的牌和目标（还可分配${remainingQuota}张）`, cards],
                                forced: true,
                                allowChooseAll: true,
                                complexSelect: true,
                                selectButton: [1, remainingQuota],
                                cardsx: cards,
                                /* filterSelect: (buttons) => { ... }, */
                                ai1(button) {
                                    return get.value(button.link);
                                },
                                ai2(target) {
                                    const player = get.player();
                                    const card = ui.selected.buttons[0].link;
                                    if (card) {
                                        return get.value(card, target) * get.attitude(player, target);
                                    }
                                    return 1;
                                },
                            }).forResult()
                            : await player
                                .chooseTarget("选择一名角色获得" + get.translation(cards), true)
                                .set("ai", target => {
                                    const att = get.attitude(_status.event.player, target);
                                    if (_status.event.enemy) {
                                        return -att;
                                    } else if (att > 0) {
                                        return att / (1 + target.countCards("h"));
                                    } else {
                                        return att / 100;
                                    }
                                })
                                .set("enemy", get.value(cards[0], player, "raw") < 0)
                                .forResult();

                    if (result?.bool) {
                        if (!result.links?.length) {
                            result.links = cards.slice(0);
                        }
                        // 4. 累加已分配的数量
                        count += result.links.length;
                        cards.removeArray(result.links);
                        player.line(result.targets, "green");

                        const gainEvent = result.targets[0].gain(result.links, "draw");
                        gainEvent.giver = player;
                        await gainEvent;
                    }
                } while (cards.length > 0 && count < maxLimit);

            },
            ai: {
                order: 6,
                result: {
                    player: 1,
                },
            },
        },
        xinxzhuiyuan: {
            audio: "ext:永夜之境/audio:8",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzhuiyuan" + index + ".mp3" : 2),
            mark: true,
            marktext: "☯",
            zhuanhuanji: true,
            intro: {
                content(storage, player) {
                    let str = (storage ? `阴：你以${get.poptip('xinx_recastuse')}牌` : `阳:你以${get.poptip('xinx_yichushiyong')}牌`);
                    const removed = player.storage.xinxliuduan_removed || [];
                    if (removed.length) {
                        str += '<br>已删除状态：' + removed.map(item => item === 'yang' ? '阳' : '阴').join('、');
                    }
                    const recastCards = player.getStorage('xinxzhuiyuan_recast');
                    if (recastCards && recastCards.length) {
                        str += '<br>重铸记录：' + recastCards.length + '张';
                    }
                    return str;
                },
            },
            trigger: {
                player: "useCard",
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                if (player.hasSkill('xinxzhuiyuan_disabled')) return false;
                const removed = player.storage.xinxliuduan_removed || [];
                if (removed.includes('yang') && removed.includes('yin')) return false;
                return event.card;
            },
            async content(event, trigger, player) {
                const removed = player.storage.xinxliuduan_removed || [];
                // 获取当前实际存储的状态 (false=阳, true=阴)
                const currentIsYin = Boolean(player.storage.xinxzhuiyuan);
                let performYinEffect = false;
                let shouldChange = false; // 是否需要翻面
                if (removed.includes('yang')) {
                    // 如果阳没了，强制执行阴的效果，且不翻面
                    performYinEffect = true;
                    shouldChange = false;
                } else if (removed.includes('yin')) {
                    // 如果阴没了，强制执行阳的效果，且不翻面
                    performYinEffect = false;
                    shouldChange = false;
                } else {
                    // 如果都还在，根据当前状态决定
                    // 当前是阴 -> 执行阴效果
                    // 当前是阳 -> 执行阳效果
                    performYinEffect = currentIsYin;
                    // 正常转换技，执行完后需要翻面
                    shouldChange = true;
                }
                const cards = trigger.cards;

                if (performYinEffect) {
                    if (removed.includes('yang')) {
                        player.logSkill("xinxzhuiyuan", null, null, null, [get.rand(6, 8)]);
                    } else {
                        player.logSkill("xinxzhuiyuan", null, null, null, [get.rand(1, 5)]);
                    }
                    await player.recast(cards);
                    await player.markAuto("xinxzhuiyuan_recast", cards);
                } else {
                    const type = get.type(cards[0]);
                    if (type === 'basic' || type === 'trick') {
                        await player.addToExpansion(cards, "gain2").set("gaintag", ["xinxzhuiyuan"]);
                    }
                }
                if (shouldChange) {
                    player.changeZhuanhuanji(event.name);
                }
                player.syncStorage('xinxliuduan');
                player.updateMark('xinxliuduan');
            },
            subSkill: {
                disabled: {
                    charlotte: true
                },
            }
        },
        xinxliuduan: {
            audio: "ext:永夜之境/audio:1",
            trigger: {
                player: "phaseDiscardEnd",
            },
            forced: true,
            locked: false,
            filter(event, player) {
                const cards = get.discarded().filterInD("d");
                return cards.length === game.roundNumber && player.hasSkill('xinxzhuiyuan') && !player.hasSkill('xinxzhuiyuan_disabled');
            },
            async content(event, trigger, player) {
                const isYin = Boolean(player.storage.xinxzhuiyuan);
                if (!player.storage.xinxliuduan_removed) {
                    player.storage.xinxliuduan_removed = [];
                }
                if (!isYin) {
                    // --- 当前是【阳】 ---
                    const expCards = player.getExpansions("xinxzhuiyuan");
                    if (expCards.length) { await player.gain(expCards, 'gain2'); }
                    player.storage.xinxliuduan_removed.push('yang');
                    game.log(player, '删除了', '#g【坠渊·阳】');
                    // 删除阳后，必须确保状态变为阴 (true)
                    // 如果本来就是 false (阳)，调用一次 change 变成 true (阴)
                    // 之后 xinxzhuiyuan 的 content 会检测到 removed 包含 yang，从而锁定在 true
                    player.changeZhuanhuanji('xinxzhuiyuan');

                } else {
                    // --- 当前是【阴】 ---
                    const recastCards = player.getStorage('xinxzhuiyuan_recast');
                    if (recastCards && recastCards.length) {
                        await player.gain(recastCards, 'gain2');
                        player.storage.xinxzhuiyuan_recast = [];
                        player.syncStorage('xinxzhuiyuan_recast');
                        player.unmarkAuto('xinxzhuiyuan_recast', recastCards);
                    }
                    player.storage.xinxliuduan_removed.push('yin');
                    game.log(player, '删除了', '#g【坠渊·阴】');
                    // 删除阴后，必须确保状态变为阳 (false)
                    // 如果本来就是 true (阴)，调用一次 change 变成 false (阳)
                    player.changeZhuanhuanji('xinxzhuiyuan');
                }
                const removed = player.storage.xinxliuduan_removed;
                if (removed.includes('yang') && removed.includes('yin')) {
                    player.addSkill('xinxzhuiyuan_disabled');
                    game.log(player, '的', '#y【坠渊】', '已完全失效');
                }
            },
            /* mark: true,
            marktext: "流",
            intro: {
                markcount(storage, player) {
                    const centerCount = get.discarded().filterInD("d").length;
                    return  centerCount;
                },
                mark(dialog, content, player) {
                    let cards = get.discarded().filterInD("d");
                    if (cards.length) {
                        dialog.addText("中央区的牌");
                        dialog.addAuto(cards);
                    } else return "中央区无牌";
                },
            }, */
            marktext: "流",
            mark: true,
            intro: {
                markcount(storage, player) {
                    const centerCount = get.discarded().filterInD("d").length;
                    return centerCount;
                },
                mark(dialog, storage, player) {
                    // 设置弹窗宽度，大框显示
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }
                    const expCards = player.getExpansions("xinxzhuiyuan");
                    const centerCards = get.discarded().filterInD("d");
                    // === 移出游戏区===
                    // 添加一个居中的标题，加粗，稍微调大字号
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; border-bottom:1px solid rgba(128,128,128,0.3)">🧊移出游戏区</div>');

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
            //group: "xinxliuduan_mark",
            subSkill: {
                mark: {
                    mark: true,
                    marktext: "流",
                    init: (player, skill) => player.markSkill(skill),
                    intro: {
                        mark(dialog, storage, player) {
                            if (storage && storage.length > 0) {
                                dialog.addText("你回合中央区的牌");
                                dialog.addAuto(storage);
                            } else {
                                return '中央区暂无卡牌';
                            }
                        },
                    },
                    trigger: {
                        global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter", "equipAfter"],
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    priority: -100,
                    filter(event, player) {
                        if (player !== _status.currentPhase) {
                            return false;
                        }
                        return event.getd()?.someInD("od");
                    },
                    async content(event, trigger, player) {
                        if (!player.storage.xinxliuduan_mark) {
                            player.storage.xinxliuduan_mark = [];
                        }
                        /* const newCards = [];
                        if (trigger.cards) {
                            for (const card of trigger.cards) {
                                if (get.position(card) == 'd'||get.position(card) == 'o') {
                                    newCards.push(card);
                                }
                            }
                        }
                        if (newCards.length > 0) {
                            player.storage.xinxliuduan_mark.addArray(newCards);
                            player.syncStorage('xinxliuduan_mark');
                        } */
                        player.storage.xinxliuduan_mark.addArray(trigger.cards);
                        player.syncStorage('xinxliuduan_mark');

                        player.when("phaseAfter").step(async () => {
                            player.storage.xinxliuduan_mark = [];
                            player.markSkill("xinxliuduan_mark");
                            player.syncStorage('xinxliuduan_mark');
                        });
                    }
                }
            }


        },
        xinxangang: {
            audio: "ext:永夜之境/audio:4",
            enable: "phaseUse",
            filter(event, player) {
                return !player.hasSkillTag("noCompareSource");
            },
            filterTarget(card, player, target) {
                return player.canCompare(target);
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                let realCards = [];
                game.countPlayer(function (current) {
                    realCards.addArray(current.getCards("xsej", card => !card._cardid));
                });
                let fakeCards = [];
                if (realCards.length > 0) {
                    // 创建假牌
                    fakeCards = game.createFakeCards(realCards);
                    for (let i = 0; i < fakeCards.length; i++) {
                        fakeCards[i].link = realCards[i]; // 绑定真牌
                        fakeCards[i].isFake = true;       // 标记为假牌
                    }
                    // 添加 gaintag
                    player.directgains(fakeCards, null, "xinxangang");
                    // 遍历假牌，修改标签文字为拥有者的名字
                    for (let i = 0; i < fakeCards.length; i++) {
                        const fake = fakeCards[i];
                        const real = fake.link; // 获取关联的真牌
                        // 确保UI节点存在 (fake.node) 且有角标 (fake.node.gaintag)
                        if (real && fake.node && fake.node.gaintag) {
                            const owner = get.owner(real); // 获取真牌拥有者
                            if (owner) {
                                fake.node.gaintag.innerHTML = owner.getName();
                                //get.translation(owner);

                            }
                        }
                    }
                }

                // 添加技能 (用于在拼点亮牌前把假牌换成真牌)
                player.addTempSkill("xinxangang_swap");
                const result = await player.chooseToCompare(target)
                    .set("xinxangang", true) // 标记事件
                    .set("position", "hs")
                    .set("filterCard", (card) => {
                        return get.position(card) == "h" || card.hasGaintag("xinxangang");
                    })
                    .set("ai", (card) => {
                        const player = _status.event.player;
                        let value = 0;
                        if (card.hasGaintag("xinxangang")) {
                            const realCard = card.link || card;
                            const owner = get.owner(realCard);
                            if (owner && owner !== player && get.attitude(player, owner) <= 0) {
                                value += 100;
                            }
                        }
                        return value - get.value(card) / 10;
                    })
                    .forResult();

                player.removeSkill("xinxangang_swap");
                player.removeGaintag("xinxangang");
                if (fakeCards.length > 0) {
                    // 过滤掉已经在拼点过程中被销毁的牌
                    const cardsToDelete = fakeCards.filter(c => c && c.parentNode);
                    if (game.deleteFakeCards) {
                        game.deleteFakeCards(cardsToDelete);
                    } else {
                        for (let i = 0; i < cardsToDelete.length; i++) {
                            cardsToDelete[i].delete();
                        }
                    }
                }
                if (result?.winner == target) {
                    await target.chooseUseTarget({ name: 'tao', isCard: true }, true, 'noTargetDelay', 'nodelayx');
                } else {
                    for (const current of [player, target].sortBySeat()) {
                        if (current.hasUseTarget({ name: 'jiu', isCard: true }, true)) await current.chooseUseTarget({ name: 'jiu', isCard: true }, true);
                    }
                }
                const cards = get.discarded().filterInD("d");
                const suits = new Set();
                for (const card of cards) {
                    const suit = get.suit(card);
                    if (suit && suit !== 'none') {
                        suits.add(suit);
                    }
                }
                if (suits.size >= 3) {
                    player.tempBanSkill("xinxangang");
                }


            },
            ai: {
                expose: 0.4,
                order: 10,
                result: {
                    target(player, target) {
                        var stolenCards = player.getCards("s", c => c.hasGaintag("xinxangang"));
                        var hasStolen = stolenCards.length > 0;
                        if (hasStolen && get.attitude(player, target) < 0) {
                            return -1;
                        }
                        var hs = player.getCards("h").sort((a, b) => b.number - a.number);
                        var ts = target.getCards("h");
                        if (!hs.length || !ts.length) return 0;
                        if (target.isDamaged()) {
                            if (hs[hs.length - 1].number < 6) {
                                return -1;
                            }
                        }
                        else {
                            if (hs[0].number > 10) {
                                return -1;
                            }
                        }
                        return -1;
                    }
                }
            },
            group: 'xinxangang_add',
            subSkill: {
                swap: {
                    trigger: { global: "compareCardShowBefore" },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        return event.player === player && event.card1 && event.card1.link;
                    },
                    async content(event, trigger, player) {
                        const fake = trigger.card1;
                        const real = fake.link;
                        // 将拼点事件记录的牌由“假牌”改为“真牌”
                        trigger.card1 = real;
                        const owner = get.owner(real);
                        if (owner) {
                            // 如果牌有拥有者，令其失去该牌并移入处理区
                            await owner.lose(real, ui.ordering).set("relatedEvent", trigger);
                        } else {
                            game.cardsGotoOrdering(real).relatedEvent = trigger;
                        }
                        fake.delete();
                        game.log(player, "使用了", real, "进行拼点");
                    }
                },
                add: {
                    trigger: { global: ["loseAfter", "cardsDiscardAfter", "loseAsyncAfter", "equipAfter"] },
                    forced: true,
                    filter(event, player) {
                        if (player != _status.currentPhase) {
                            return false;
                        }
                        var cards = event.getd();
                        if (!cards.length) {
                            return false;
                        }
                        var list = [];
                        var num = cards.length;
                        for (var i = 0; i < cards.length; i++) {
                            var card = cards[i];
                            list.add(get.suit(card, false));
                        }
                        game.getGlobalHistory("cardMove", function (evt) {
                            if (evt.name != "lose" && evt.name != "cardsDiscard") {
                                return false;
                            }
                            if (evt.name == "lose" && evt.position != ui.discardPile) {
                                return false;
                            }
                            if (evt == event || evt.getParent() == event) {
                                return false;
                            }
                            num += evt.cards.length;
                            for (var i = 0; i < evt.cards.length; i++) {
                                var card = evt.cards[i];
                                list.remove(get.suit(card, evt.cards2 && evt.cards2.includes(card) ? evt.player : false));
                            }
                        });
                        player.storage.xinxangang_mark2 = num;
                        return list.length > 0;
                    },
                    content() {
                        var list = [];
                        var list2 = [];
                        var cards = trigger.getd();
                        for (var i = 0; i < cards.length; i++) {
                            var card = cards[i];
                            var suit = get.suit(card, false);
                            list.add(suit);
                            list2.add(suit);
                        }
                        game.getGlobalHistory("cardMove", function (evt) {
                            if (evt.name != "lose" && evt.name != "cardsDiscard") {
                                return false;
                            }
                            if (evt.name == "lose" && evt.position != ui.discardPile) {
                                return false;
                            }
                            if (evt == trigger || evt.getParent() == trigger) {
                                return false;
                            }
                            for (var i = 0; i < evt.cards.length; i++) {
                                var card = evt.cards[i];
                                var suit = get.suit(card, false);
                                list.remove(suit);
                                list2.add(suit);
                            }
                        });
                        list2.sort();
                        player.storage.xinxangang_mark = list2;
                        player.addTempSkill("xinxangang_mark");
                        player.markSkill("xinxangang_mark");
                    },
                },
                mark: {
                    markimage: 'extension/永夜之境/image/mark/xinxangang_mark.png',
                    charlotte: true,
                    onremove(player) {
                        delete player.storage.xinxangang_mark;
                        delete player.storage.xinxangang_mark2;
                    },
                    intro: {
                        name: "中央区",
                        content(s, p) {
                            var str = "本回合已经进入过弃牌堆的卡牌的花色：";
                            for (var i = 0; i < s.length; i++) {
                                str += get.translation(s[i]);
                            }
                            str += "<br>本回合进入过弃牌堆的牌数：";
                            str += p.storage.xinxangang_mark2;
                            return str;
                        },
                    },
                },
                put: {
                    charlotte: true,
                    trigger: {
                        global: "compareCardShowBefore",
                    },
                    filter(event, player) {
                        if (!event?.xinxangang) {
                            return false;
                        }
                        const evt = event.getParent();
                        if (!(evt?.name === "xinxangang")) {
                            return false;
                        }
                        //其实不用看fixedResult吧，这会看card1，card2应该就可以了
                        return [event.card1, event.card2].includes(evt.cards[0]);
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    async content(event, trigger, player) {
                        const card = trigger.getParent().cards[0];
                        if (get.position(card) !== "o") {
                            const owner = get.owner(card);
                            if (owner) {
                                await owner.lose([card], ui.ordering, false).set("log", false);
                            } else {
                                await game.cardsGotoOrdering([card]);
                            }
                        }
                    },
                    sub: true,
                },
            },

        },
        xinxxunji: {
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxxunji" + index + ".mp3" : 2),
            trigger: {
                player: "phaseEnd",
            },
            filter(event, player) {
                const cards = get.discarded().filterInD("d");
                const suits = new Set();
                for (const card of cards) {
                    const suit = get.suit(card);
                    if (suit && suit !== 'none') {
                        suits.add(suit);
                    }
                }
                return game.hasGlobalHistory("changeHp", evt => {
                    return evt.getParent().name == "recover";
                }) || suits.size >= 3;
            },
            popup: false,
            async cost(event, trigger, player) {
                game.playAudio("../extension/永夜之境/audio/", 'xinxxunji' + [get.rand(1, 2)] + '.mp3');
                const map = new Map();
                game.countPlayer(current => {
                    if (current == player || current == trigger.player) {
                        return false;
                    }
                    const num = game.getGlobalHistory("changeHp",
                        evt => evt.getParent().name == "recover" && evt.player == current)
                        .reduce((p, c) => p + c.num, 0);
                    if (num > 0) {
                        map.set(current, num);
                    }
                });
                const next = player.chooseTarget(
                    get.prompt(event.name.replace('_cost', '')),
                    `<div class="text center">令一名其他角色失去体力（数值等于其本回合回复值），然后你获得任意张${get.poptip('xinx_central')}的牌</div> `,
                    (card, player, target) => {
                        return target != player;
                    }
                ).set("map", map);
                next.set("ai", target => {
                    const player = get.player();
                    if (get.attitude(player, target) >= 0) return 0;
                    const num = get.event().map.get(target);
                    return 1 + num;
                });
                next.set(
                    "targetprompt2",
                    next.targetprompt2.concat([
                        target => {
                            if (!target.isIn() || !get.event().map.has(target)) {
                                return "失去0";
                            }
                            return `失去${get.event().map.get(target)}`;
                        },
                    ])
                );
                event.result = await next.forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const num = game
                    .getGlobalHistory("changeHp", evt => {
                        return evt.getParent().name == "recover" && evt.player == target;
                    })
                    .map(evt => evt.num)
                    .reduce((p, c) => p + c, 0);
                if (num > 0) {
                    player.logSkill("xinxxunji", [target], null, null, [3]);
                    game.log(target, `本回合累计回复了${num}点体力`);
                    await target.loseHp(num);
                } else {
                    game.log(target, "本回合未回复体力");
                }
                const cards = get.discarded().filterInD("d");
                const suits = new Set();
                for (const card of cards) {
                    const suit = get.suit(card);
                    if (suit && suit !== 'none') {
                        suits.add(suit);
                    }
                }
                if (suits.size >= 3 && cards.length > 3) {
                    const result = await player.chooseButton([`请选择获得任意张牌（需确保剩余花色至少3种）`, cards], true)
                        .set('selectButton', [1, cards.length])
                        .set('list', [null, cards])
                        .set('filterButton', function (button) {
                            const allCards = _status.event.list[1];
                            //获取当前已选的牌
                            const selected = ui.selected.buttons.map(b => b.link);
                            //当前正在判断的牌
                            const current = button.link;
                            // 模拟剩余的牌堆
                            const remaining = allCards.filter(card => {
                                return card !== current && !selected.includes(card);
                            });
                            // 统计花色的 Set 对象引用不变
                            const remainingSuits = new Set();
                            for (const card of remaining) {
                                const s = get.suit(card);
                                if (s && s !== 'none') remainingSuits.add(s);
                            }
                            return remainingSuits.size >= 3;
                        })
                        .set('ai', button => {
                            return get.value(button.link, get.event().player);
                        }).forResult();

                    if (result.bool && result.links && result.links.length) {
                        player.logSkill("xinxxunji", null, null, null, [get.rand(4, 6)]);
                        await player.gain(result.links, 'gain2');
                    }
                }
            },
        },
        xinxchuangshi: {
            init(player) {
                if (!player.storage.xinxchuangshi) {
                    player.storage.xinxchuangshi = [];
                }
                player.addMark('xinxchuangshi_yichu', 1, false);
                player.addCharge = async function (num, log) {
                    if (typeof num != "number" || !num) num = 1;
                    let maxCharge = player.getMaxCharge();
                    num = Math.min(num, maxCharge - player.countMark("charge"));
                    var next = game.createEvent("addCharge", false);
                    next.player = this;
                    next.num = num;
                    next.log = log;
                    next.setContent("addCharge");
                    return next;
                };
                lib.element.content.addCharge = async function (event, trigger, player) {
                    await event.trigger("addChargeBegin");
                    if (event.num > 0) {
                        player.addMark("charge", event.num, event.log);
                        await event.trigger("addChargeAfter");
                    }
                };
            },
            beginMarkCount: 0,
            chargeSkill: 10,
            trigger: {
                player: "addChargeAfter",
            },
            filter(event, player) {
                /* const current = player.countCharge();
                const thresholds = [2, 4, 6, 8, 10];
                return thresholds.some(t => current >= t && !player.storage.xinxchuangshi.includes(t)); */
                return event.num > 0 && player.countCharge() >= 2;
            },
            forced: true,
            charlotte: true,
            silent: true,
            async content(event, trigger, player) {
                const current = player.countCharge();
                /* const thresholds = [2, 4, 6, 8, 10];
                for (let point of thresholds) {
                    if (current >= point && !player.storage.xinxchuangshi.includes(point)) {
                        player.storage.xinxchuangshi.push(point); */
                const point = [10, 8, 6, 4, 2].find(t => current >= t);
                if (!point) return;
                game.log(player, `蓄力点达到${point}，触发效果`);
                if (game.hasPlayer(current => current.countCards("he") && current !== player)) {
                    const result = await player
                        .chooseTarget(get.prompt2('xinxchuangshi'), 1)
                        .set("filterTarget", (card, player, target) => {
                            return target.countCards("he") && target !== player;
                        })
                        .set("ai", target => {
                            const player = get.player();
                            return get.effect(target, { name: "guohe_copy2" }, player, player);
                        })
                        .forResult();
                    if (result?.bool && result.targets?.length) {
                        let num = Math.max(player.countMark("xinxchuangshi_yichu"), 1);
                        const target = result.targets[0];
                        player.line(target);
                        const result1 = await player
                            .choosePlayerCard(target, true, "he", [1, num])
                            .set("prompt",
                                `###创世###<div class="text center">将${get.translation(target)}至多${get.cnNumber(num)}张牌移出游戏</div>`
                            )
                            .forResult();
                        if (result1?.bool && result1.cards?.length) {
                            game.playAudio("../extension/永夜之境/audio/", 'xinxyilian' + [1, 2, 3, 4].randomGet() + '.mp3');
                            await player.addToExpansion(result1.cards, "gain2").set("gaintag", ["xinxchuangshi"]);
                        }
                    }
                }
                switch (point) {
                    case 2:
                        await player.gainMaxHp();
                        break;
                    case 4:
                        await player.recover();
                        break;
                    case 6:
                        player.addMark('xinxchuangshi_yichu', 1, false);
                        break;
                    case 8:
                        const sourceList = [];
                        game.countPlayer(function (current) {
                            sourceList.addArray(current.getCards("xs", card => !card._cardid));
                        });
                        const vCardList = sourceList
                            //.filter(card =>["trick", "basic"].includes(get.type(card)) 
                            .map(card => {
                                return [get.type(card), card.number || 0, card.name, card.nature || ""];
                            });
                        //检测是否可用
                        const useableList = vCardList.filter(info => {
                            return player.hasUseTarget({
                                name: info[2],
                                nature: info[3],
                                isCard: true
                            });
                        });
                        //去重
                        const distinctList = [];
                        const seen = new Set();
                        for (const info of useableList) {
                            const name = info[2];
                            const nature = info[3] || '';
                            const key = `${name}_${nature}`;
                            if (!seen.has(key)) {
                                seen.add(key);
                                distinctList.push(info);
                            }
                        }
                        if (distinctList.length) {
                            const next = player.chooseButton(["是否视为使用一张移出游戏的牌？", [distinctList, "vcard"]]);
                            next.set("ai", button => {
                                const card = {
                                    name: button.link[2],
                                    nature: button.link[3],
                                    isCard: true,
                                };
                                return player.getUseValue(card);
                            });
                            const result = await next.forResult();
                            if (result?.links && result.links.length) {
                                const selected = result.links[0];
                                const cardToUse = {
                                    name: selected[2],
                                    nature: selected[3],
                                    isCard: true
                                };
                                game.playAudio("../extension/永夜之境/audio/", 'xinxyilian' + [5, 6].randomGet() + '.mp3');
                                await game.delayx();
                                await player.chooseUseTarget(cardToUse, true, false);
                            }
                        }
                        break;
                    case 10:
                        game.playAudio("../extension/永夜之境/audio/", 'xinxyilian' + [7, 8].randomGet() + '.mp3');
                        if (player.storage?.xinxchuangshi_draw) {
                            player.addSkill('xinxchuangshi_draw');
                            player.addMark('xinxchuangshi_draw', 1, false);
                        } else {
                            player.storage.xinxchuangshi_draw = true;
                            player.addSkill('xinxchuangshi_gain');
                            player.addMark('xinxchuangshi_gain', 1, false);
                        }
                        await player.removeCharge(current);
                        player.storage.xinxchuangshi = [];
                        break;
                }

                // }
                //}
            },
            mark: true,
            markimage: 'extension/永夜之境/image/mark/xinxchuangshi.png',
            intro: {
                markcount: "expansion",
                mark(dialog, storage, player) {
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }
                    const drawNum = player.countMark("xinxchuangshi_draw");
                    const gainNum = player.countMark("xinxchuangshi_gain");
                    const yichuNum = player.countMark("xinxchuangshi_yichu");

                    const expCards = player.getExpansions("xinxchuangshi");
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; border-bottom:1px solid rgba(128,128,128,0.3)">📊 技能层数状态</div>');
                    const infoHtml =
                        // 增加了 "text center" 类让其居中
                        // font-size 改为 20px 
                        // font-weight: bold 全局加粗
                        '<div class="text center" style="margin: 15px 0; font-size: 20px; line-height: 2.2; font-weight: bold;">' +
                        // 用 div 包裹每一行，居中
                        // 给数字加了颜色（span style）
                        '<div>额外摸牌数：<span style="color:#FFFF00">' + gainNum + '</span></div>' +
                        '<div>额定摸牌数：<span style="color:#00FF00">' + (drawNum + 2) + '</span></div>' +
                        '<div>可移出牌数：<span style="color:#00BFFF">' + Math.max(yichuNum, 1) + '</span></div>' +
                        '</div>';

                    dialog.addText(infoHtml);
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🌌 移出游戏区</div>');
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

            subSkill: {
                gain: {
                    trigger: {
                        player: "drawBegin",
                    },
                    forced: true,
                    charlotte: true,
                    silent: true,
                    filter(event, player) {
                        return event.num > 0 && player.countMark("xinxchuangshi_gain");
                    },
                    async content(event, trigger, player) {
                        trigger.num += player.countMark("xinxchuangshi_gain");
                    }
                },
                draw: {
                    trigger: {
                        player: "phaseDrawBegin2",
                    },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        return !event.numFixed && player.countMark("xinxchuangshi_draw");
                    },
                    async content(event, trigger, player) {
                        trigger.num += player.countMark("xinxchuangshi_draw");
                    },
                }
            }
        },
        xinxmingxin: {
            audio: "ext:永夜之境/audio:3",
            audioname: ["xinx_yeshunguang_shadow"],
            derivation: "xinxmingxinx",
            trigger: {
                global: "roundStart",
                player: ["phaseZhunbeiBegin"],
            },
            forced: true,
            locked: false,
            lastDo: true,
            filter(event, player, name) {
                if (name == "roundStart" && game.phaseNumber > 1) return false;
                if (!player.storage.xinxmingxinx && event.name == "phaseZhunbei") return false;
                return game.hasPlayer(target => target !== player);

            },
            async content(event, trigger, player) {
                //game.addGlobalSkill('xinxmingxin_effect');
                const targets = game.filterPlayer(target => target !== player).sortBySeat();
                player.line(targets);
                for (const target of targets) {
                    /* if (target.countCards('h') > 0) {
                        const card = target.getCards('h').randomGet();
                        await target.lose(card, ui.special);
                        const subtype = Array.from({ length: 5 }).map((_, i) => `equip${i + 1}`).filter(subtype => {
                            const card2 = get.autoViewAs(card);
                            card2.subtypes = [subtype];
                            return target.canEquip(card2);
                        }).randomGet();
                        const card2 = get.autoViewAs(card);
                        card2.subtypes = [subtype]; 
                        await target.equip(card2);
                    }
                const pileCards = get.cards(1);
                if (pileCards.length) {
                    const pileCard = pileCards[0];
                    const subtype = Array.from({ length: 5 }).map((_, i) => `equip${i + 1}`).filter(subtype => {
                        const tempCard = get.autoViewAs(pileCard);
                        tempCard.subtypes = [subtype];
                        return target.canEquip(tempCard);
                    }).randomGet();
                    const card2 = get.autoViewAs(pileCard);
                    card2.subtypes = [subtype];
                    await target.equip(card2);
                } */

                    const cardsToProcess = [];
                    if (target.countCards('h') > 0) {
                        cardsToProcess.push(target.getCards('h').randomGet());
                    }
                    const pileCards = get.cards(1);
                    if (pileCards.length) {
                        cardsToProcess.push(pileCards[0]);
                    }


                    await target.addToExpansion(cardsToProcess, "gain2").gaintag.add("xinxmingxin");

                    //for (const card of cardsToProcess) {
                    /*  const subtype = Array.from({ length: 5 }).map((_, i) => `equip${i + 1}`).filter(subtype => {
                         const card2 = get.autoViewAs(card);
                         card2.subtypes = [subtype];
                         return target.canEquip(card2);
                     }).randomGet();
                     const card2 = get.autoViewAs(card);
                     card2.subtypes = [subtype]; 
                     await target.equip(card2); */
                    //await  target.addToExpansion(card, "gain2").gaintag.add("xinxmingxin");

                    // }
                }

            },
            marktext: "🗡️",
            intro: {
                mark(dialog, storage, player) {
                    const cards = player.getExpansions("xinxmingxin");
                    dialog.addAuto(cards);
                },
                markcount: "expansion",
            },
            subSkill: {
                effect: {
                    charlotte: true,
                    mod: {
                        cardEnabled2(card, player) {
                            if (player.hasSkill('xinxmingxin')) return;
                            if (get.type(card) == 'equip') {
                                const subtype = get.subtype(card);
                                if (player.getVEquips(subtype).length > 0) {
                                    return false;
                                }
                            }
                        },
                    },

                }
            }
        },
        xinxmingxinx: {
            audio: "ext:永夜之境/audio:3",
            "audioname2": {
                xinx_yeshunguang: "xinxmingxin",
                xinx_yeshunguang_shadow: "xinxmingxin",
            },
        },
        xinxguichenx: {
            audio: "ext:永夜之境/audio:5",
            "audioname2": {
                xinx_yeshunguang: "xinxguichen",
                xinx_yeshunguang_shadow: "xinxguichen",
            },
        },
        xinxguichen: {
            derivation: "xinxguichenx",
            audio: "ext:永夜之境/audio:6",
            audioname: ["xinx_yeshunguang_shadow"],
            init: (player, skill) => player.markSkill(skill),
            getCards(player) {
                let cards = [];
                game.countPlayer(current => {
                    if (current !== player) {
                        cards.addArray(current.getCards("xesj", card => !card._cardid));
                    }
                });
                return cards;
            },
            onremove(player, skill) {
                player.clearMark(skill);
            },
            hiddenCard(player, name) {
                if (get.type2(name) == 'trick') { return false; }
                const cards = get.info("xinxguichen").getCards(player);
                return cards.some(card => card.name === name);
            },
            mod: {
                cardEnabled2(card, player) {
                    if (card?.hasGaintag?.("xinxguichen")) {
                        if (get.type2(card) == "trick") { return false; }
                    }
                },
            },
            intro: {
                markcount(storage, player) {
                    let count = player.countMark('xinxguichen');
                    return count || null;
                },
                mark(dialog, storage, player) {
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }

                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; border-bottom:1px solid rgba(128,128,128,0.3)">🥋次数统计</div>');
                    let num = player.countMark("xinxguichen");
                    let str = '';
                    if (num) {
                        str += `本局已切换形态${num}次`;
                    }
                    const statusContent = str ? str : "<li style='opacity:0.6'>暂未切换形态</li>";
                    // --- 构建 infoHtml ---
                    // 使用 ul 列表包裹 li，并添加一些内边距和字体样式
                    const infoHtml = `<ul style="margin:10px 0; padding-left:20px; font-size:16px;">${statusContent}</ul>`;
                    // 将生成好的 HTML 添加到对话框
                    dialog.addText(infoHtml);

                    let cards = get.info("xinxguichen").getCards(player);
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🎴非手牌区的牌</div>');
                    if (cards.length && player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        dialog.addText('<div class="text center" style="opacity:0.6">暂无卡牌</div>');
                    }

                },
            },
            forced: true,
            mark: true,
            marktext: "尘",
            group: ["xinxguichen_handler", 'xinxguichen_gain'],
            subSkill: {
                gain: {
                    trigger: {
                        global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    forced: true,
                    filter(event, player, name, target) {
                        if (target === player) { return false; }
                        if (event.name === "lose" && event.getParent().name === "useCard") {
                            return false;
                        }
                        const evt = event.getl(target);
                        //return evt?.es?.length;
                        return evt && ((evt.es && evt.es.length) || (evt.xs && evt.xs.length));
                    },
                    getIndex(event, player) {
                        return game.filterPlayer(target => {
                            const evt = event.getl(target);
                            //return evt?.es?.length;
                            return evt && ((evt.es && evt.es.length) || (evt.xs && evt.xs.length));
                        });
                    },
                    logTarget: (_1, _2, _3, target) => target,
                    async content(event, trigger, player) {
                        const target = event.indexedData;
                        const lostInfo = trigger.getl(target);
                        //const equipCardsLost = lostInfo ? lostInfo.es : [];
                        let equipCardsLost = [];
                        if (lostInfo) {
                            if (lostInfo.es) equipCardsLost.addArray(lostInfo.es);
                            //if (lostInfo.js) equipCardsLost.addArray(lostInfo.js); 
                            if (lostInfo.xs) equipCardsLost.addArray(lostInfo.xs);
                        }
                        const num = equipCardsLost.length;
                        await player.gain(equipCardsLost, 'gian2');
                        if (player.storage?.xinxmingxinx) {
                            const result = await player.chooseBool(`归尘：是否对${get.translation(target)}造成${num}点伤害？`)
                                .set("choice", get.damageEffect(target, player, player) > 0).forResult();
                            if (result?.bool) {
                                player.line(target);
                                game.playAudio("../extension/永夜之境/audio/", 'xinxlingxiao_xinx_yeshunguang_shadow' + [get.rand(4, 6)] + '.mp3');
                                await new Promise(resolve => {
                                    lib.element.content.xinxplayVideo(
                                        "extension/永夜之境/video/yeshunguang_end.mp4",
                                        {
                                            pauseGame: true,
                                            skippable: true
                                        },
                                        resolve
                                    );
                                });
                                await target.damage(num);
                            }
                        }
                    },
                },
                handler: {
                    onChooseToUse(event) {
                        if (game.online) return;
                        const player = event.player;

                        // 清理上一轮可能残留的虚拟牌
                        let oldCards = player.getCards("s", card => card.hasGaintag("xinxguichen"));
                        if (oldCards.length) {
                            game.deleteFakeCards(oldCards);
                        }
                        let shownCards = get.info("xinxguichen").getCards(player);
                        if (shownCards.length) {
                            // 生成虚拟牌并直接给予玩家（带有特定标签）
                            const fakes = game.createFakeCards(shownCards);
                            player.directgains(fakes, null, "xinxguichen");
                            // 遍历生成的假牌，将右上角的标签改为原拥有者的名字
                            for (let i = 0; i < fakes.length; i++) {
                                const fake = fakes[i];
                                const real = shownCards[i]; // fakes 和 shownCards 一一对应
                                if (fake.node && fake.node.gaintag && real) {
                                    const owner = get.owner(real);
                                    if (owner) {
                                        fake.node.gaintag.innerHTML = owner.getName();
                                    }
                                }
                            }
                        }
                    },
                    onChooseToRespond(event) {
                        if (game.online) return;
                        const player = event.player;

                        let oldCards = player.getCards("s", card => card.hasGaintag("xinxguichen"));
                        if (oldCards.length) {
                            game.deleteFakeCards(oldCards);
                        }

                        let shownCards = get.info("xinxguichen").getCards(player);

                        if (shownCards.length) {
                            const fakes = game.createFakeCards(shownCards);
                            player.directgains(fakes, null, "xinxguichen");
                            for (let i = 0; i < fakes.length; i++) {
                                const fake = fakes[i];
                                const real = shownCards[i]; // fakes 和 shownCards 一一对应
                                if (fake.node && fake.node.gaintag && real) {
                                    const owner = get.owner(real);
                                    if (owner) {
                                        fake.node.gaintag.innerHTML = owner.getName();
                                    }
                                }
                            }
                        }
                    },
                    trigger: {
                        player: ["useCardBefore", "respondBefore", "chooseToUseAfter", "chooseToRespondAfter"],
                    },
                    filter(event, player) {
                        // 仅当玩家使用了带有技能标签的虚拟牌（或对应ID的真牌）时触发
                        if (["useCard", "respond"].includes(event.name)) {
                            let shownCards = get.info("xinxguichen").getCards(player);
                            // 检查事件中的牌ID是否存在于当前列表中
                            return event.cards?.some(card => shownCards.some(sc => sc.cardid == card._cardid));
                        }
                        return true;
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        if (["useCard", "respond"].includes(trigger.name)) {
                            if (!trigger.skill) {
                                trigger.skill = "xinxguichen";
                            } else {
                                await player.logSkill("xinxguichen");
                            }
                            // 重新获取最新的对象
                            let shownCards = get.info("xinxguichen").getCards(player);

                            // 将玩家使用的虚拟牌替换为场上真实的牌
                            for (let i = 0; i < trigger.cards.length; i++) {
                                const card = trigger.cards[i];
                                const realCard = shownCards.find(sc => sc.cardid == card._cardid);
                                if (realCard) {
                                    trigger.cards[i] = realCard;
                                    if (trigger.card && trigger.card.cards) {
                                        trigger.card.cards[i] = realCard;
                                    }
                                }
                            }
                        }
                        // 清理虚拟牌
                        let cards = player.getCards("s", card => card.hasGaintag("xinxguichen"));
                        if (cards.length) {
                            game.deleteFakeCards(cards);
                        }
                    },
                    sub: true,
                },
            },
        },
        xinxlingxiaox: {
            audio: "ext:永夜之境/audio:6",
            "audioname2": {
                xinx_yeshunguang: "xinxlingxiao",
                xinx_yeshunguang_shadow: "xinxlingxiao",
            },
        },
        xinxlingxiao: {
            derivation: "xinxlingxiaox",
            audio: "ext:永夜之境/audio:6",
            audioname: ["xinx_yeshunguang_shadow"],
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxlingxiao" + index + ".mp3" : 2),
            trigger: {
                player: "useCardToPlayered",
            },
            filter(event, player) {
                if (event.target === player) return false;
                return event.targets?.length == 1 && event.cards && ['basic', 'trick'].includes(get.type(event.card));
            },
            forced: true,
            locked: false,
            popup: false,
            async content(event, trigger, player) {
                const cards = trigger.cards;
                const target = trigger.target;
                if (!player.storage.xinxmingxinx) {
                    player.logSkill("xinxlingxiao", null, null, null, [get.rand(1, 3)]);
                } else {
                    game.playAudio("../extension/永夜之境/audio/", 'xinxlingxiao_xinx_yeshunguang_shadow' + [get.rand(1, 3)] + '.mp3');
                }
                /* const subtype = Array.from({ length: 5 }).map((_, i) => `equip${i + 1}`).filter(subtype => {
                    const card2 = get.autoViewAs(card);
                    card2.subtypes = [subtype];
                    return target.canEquip(card2);
                }).randomGet();
                const card2 = get.autoViewAs(card);
                card2.subtypes = [subtype];
                await target.equip(card2); 
                 const num = Array.from({ length: 5 }).map((_, i) => i + 1).reduce((sum, num) => sum + target.hasEmptySlot(num), 0);
                 */
                await target.addToExpansion(cards, "gain2").gaintag.add("xinxmingxin");

                const xcards = target.getCards("xsej", card => !card._cardid);
                if (xcards.length >= 4) {
                    if (!player.storage.xinxmingxinx) {
                        player.logSkill("xinxlingxiao", null, null, null, [get.rand(4, 6)]);
                        player.changeSkin({ characterName: "xinx_yeshunguang" }, "xinx_yeshunguang_shadow");
                        player.addMark('xinxguichen', 1, false);
                        await new Promise(resolve => {
                            lib.element.content.xinxplayVideo(
                                "extension/永夜之境/video/yeshunguang_begin.mp4",
                                {
                                    pauseGame: true,
                                    skippable: true
                                },
                                resolve
                            );
                        });
                        player.storage.xinxmingxinx = true;
                    } else {
                        //let num = target.hp;
                        // let num = Math.ceil(target.maxHp / 2);
                        let num = Math.max(player.countMark('xinxguichen'), 1);
                        const result = await player.chooseCardButton(target, xcards, [1, num], `凌霄：你可以弃置${get.translation(target)}非手牌区至多${num}张牌并退幻`)
                            .set("ai", button => {
                                return get.value(button.link);
                            })
                            .forResult();
                        if (result?.bool && result?.links) {
                            await target.discard(result.links);
                            player.changeSkin({ characterName: "xinx_yeshunguang" }, "xinx_yeshunguang");
                            player.addMark('xinxguichen', 1, false);
                            delete player.storage.xinxmingxinx;
                        }

                    }
                }
            }

        },
        xinxmosuo: {
            audio: "ext:永夜之境/audio:8",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxmosuo" + index + ".mp3" : 2),
            init: () => {
                game.addGlobalSkill("yjdumou_du");
                game.addGlobalSkill("g_du");
            },
            onremove: () => {
                if (!game.hasPlayer(i => i.hasSkill("yjdumou", null, null, false), true)) {
                    game.removeGlobalSkill("yjdumou_du");
                }
            },
            enable: "phaseUse",
            popup: false,
            filter(event, player, name) {
                return player.hasCard(lib.filter.cardRecastable, "he") && game.hasPlayer(current => get.info("xinxmosuo").filterTarget(null, player, current));
            },
            filterTarget(card, player, target) {
                if (target == player || !target.countCards("he")) return false;
                const locked = player.getStorage("xinxmosuo_ones");
                if (locked && locked.length) {
                    return target === locked[0];
                }
                return true;
            },
            async content(event, trigger, player) {
                const target = event.targets[0];

                if (typeof player.storage.xinxmosuo_num !== "number") { player.storage.xinxmosuo_num = 0; }
                player.storage.xinxmosuo_num++;
                const num = player.storage.xinxmosuo_num;
                const pNeed = Math.min(num, player.countCards("he"));
                const tNeed = Math.min(num, target.countCards("he"));


                const list = [player, target];
                if (!event.isMine() && !event.isOnline()) await game.delayx();
                player.addTempSkill("xinxmosuo_ones");
                player.markAuto("xinxmosuo_ones", [target]);
                const result = await player
                    .chooseCardOL(
                        list,
                        "he",
                        true,
                        //1,
                        [pNeed, pNeed],
                        [tNeed, tNeed],
                        `${get.translation(event.name)}：你与其同时重铸${get.translation(pNeed)}张牌，因此获得的牌替换为【影】`,
                        (card, player, target) => {
                            return lib.filter.cardRecastable(card, player, "xinxmosuo");
                        })
                    .set("ai", (card, player) => {
                        const chooser = get.player();
                        const evt = get.event().getParent(2);
                        const source = evt.player;
                        // 发动者：优先丢影/低价值
                        if (chooser == source) {
                            if (card.name === "ying") return 100;
                            return 5 - get.value(card);
                        }
                        // 对方：优先丢非影；非影越稀缺越强制丢非影；保证不丢影
                        const hasNonYing = chooser.countCards("he", c => c.name !== "ying") > 0;
                        if (hasNonYing) {
                            if (card.name === "ying") return -100;
                            return 100 - get.value(card);
                        }
                        if (card.name !== "ying") return 8 - get.value(card);
                        return 100 - get.value(card);
                    }).forResult();

                if (!result || !result.length) return;
                player.logSkill("xinxmosuo", target, null, null, [get.rand(4, 8)]);

                const pCards = result[0]?.cards || [];
                const tCards = result[1]?.cards || [];
                /* 一个通用的“重铸获得替代：摸到的牌直接弃置，然后获得影”
                const gainAsYing = async (pl, n) => {
                    if (n <= 0) return;
                    // 先“摸n张”（走引擎正常摸牌链路、洗牌、触发等）
                    const drawEvt = pl.draw(n);
                    drawEvt.log = false;
                    await drawEvt;
                    // 把刚摸到的牌全部丢进弃牌堆
                    // 用最近摸到的牌来取：这里用 hs 里最后n张做近似，避免抓错牌
                    const drawn = pl.getCards("h").slice(-n);
                    if (drawn.length) {
                        const loseEvt = pl.loseToDiscardpile(drawn);
                        loseEvt.log = false;
                        await loseEvt;
                    }
                    await pl.gain(lib.card.ying.getYing(n), "gain2");
                }; */
                const gainAsYing = async (pl, n) => {
                    if (n <= 0) return;
                    const top = get.cards(n);
                    if (top && top.length) {
                        if (game.cardsDiscard) {
                            game.cardsDiscard(top);
                        } else {
                            const evt = game.loseAsync({ lose_list: [[pl, top]] }).setContent("discardMultiple");
                            await evt;
                        }
                    }
                    // 获得等量影
                    await pl.gain(lib.card.ying.getYing(n), "gain2");
                };
                // 分别对双方进行“重铸，但摸牌改为影”
                if (pCards.length) {
                    await player.recast(
                        pCards,
                        undefined,
                        (pl, cards2) => gainAsYing(pl, cards2.length)
                    );
                }
                if (tCards.length) {
                    await target.recast(
                        tCards,
                        undefined,
                        (pl, cards2) => gainAsYing(pl, cards2.length)
                    );
                }
                const yingMoreThanNonYing = pl => {
                    const total = pl.countCards("h");
                    if (total <= 0) return false;
                    const ying = pl.countCards("h", c => c.name === "ying");
                    const non = total - ying;
                    return ying >= non; // 影不小于非影
                };
                const allYingInHand = pl =>
                    pl.countCards("h") > 0 && pl.countCards("h", c => c.name !== "ying") === 0;// 均为影
                //if (allYingInHand(player) || allYingInHand(target)) {
                if (yingMoreThanNonYing(player) || yingMoreThanNonYing(target)) {
                    game.playAudio("../extension/永夜之境/audio/", 'xinxmosuo' + [get.rand(1, 3)] + '.mp3');
                    player.tempBanSkill("xinxmosuo");
                }
                /* if (player.countCards("h") > 0 && player.countCards("h", c => c.name !== "ying") === 0) {
                    player.tempBanSkill("xinxmosuo");
                } */
                player.when("phaseAfter")
                    .step(async (event, trigger, player) => {
                        delete player.storage.xinxmosuo_num;
                    });

            },
            ai: {
                order: 8,
                result: {
                    target: -1,
                },
            },
            global: "xinxmosuo_ying",
            subSkill: {
                ones: {
                    charlotte: true,
                    onremove: true,
                },
                ying: {
                    mod: {
                        cardname(card, player) {
                            if (card.name !== "ying") return;
                            if (player.hasSkill("xinxbeichan")) return "sha";
                            return "du";
                        },
                        cardnature(card, player) {
                            if (card.name !== "ying") return;
                            if (player.hasSkill("xinxbeichan")) return "thunder";
                        },
                    }

                }
            },
        },
        xinxbeichan: {
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxbeichan" + index + ".mp3" : 2),
            trigger: {
                global: ["loseHpAfter", "damageAfter"],//, 
            },
            popup: false,
            forced: true,
            filter(event, player) {
                const cards = get.discarded().filterInD("d");
                return cards.length && !player.hasSkill("xinxbeichan_locked");
            },
            async content(event, trigger, player) {
                const types = ["basic", "trick", "equip", 'red', 'black'];
                const cards = get.discarded().filterInD("d");
                const dialog = [
                    `###${get.prompt("xinxbeichan")}###` +
                    `<div class="text center">声明一种类型或颜色，然后背面选择获得中央区一张牌并使用之；若该牌的类型或颜色与你声明相同，你摸一张牌</div>`]
                //dialog.push([types.map(i => get.translation(i)), "tdnodes"]);
                const buttons = types.map(t => [t, get.translation(t)]);
                dialog.push([buttons, "tdnodes"]);
                dialog.push([cards, "blank"]);

                player.logSkill("xinxbeichan", null, null, null, [get.rand(1, 3)]);

                const result = await player
                    .chooseButton(dialog, 2)
                    .set("filterButton", button => {
                        const type = typeof button.link;
                        if (ui.selected.buttons.length && type == typeof ui.selected.buttons[0].link) {
                            return false;
                        }
                        return true;
                    })
                    .set("ai", button => {
                        const link = button.link;
                        const player = _status.event.player;
                        const cards = get.discarded().filterInD("d");
                        if (typeof link === "string") {
                            let count = cards.filter(c => get.color(c) == link).length;
                            if (link == 'red' || link == 'black') {
                                return count + 5;
                            }
                            if (link == 'basic') {
                                return 5;
                            }
                        }
                        return 5;
                    })
                    .forResult();
                if (result.bool && result.links.length === 2) {
                    const declared = result.links.find(link => typeof link === 'string');
                    // const gainedCard = result.links.find(link => typeof link === 'object');
                    const gainedCard = result.links.find(x => x && typeof x === "object" && get.itemtype(x) === "card");
                    if (declared && gainedCard) {
                        game.log(player, "声明了", "#y" + get.translation(declared), "并获得了", gainedCard);
                        player.addTempSkill("xinxbeichan_locked");
                        await player.gain(gainedCard);
                        if (player.hasUseTarget(gainedCard)) {
                            game.playAudio("../extension/永夜之境/audio/", 'xinxbeichan' + [4] + '.mp3');
                            await player.chooseUseTarget(gainedCard, false, true);
                        }
                        if ((get.type2(gainedCard) == declared) || (get.color(gainedCard) == declared)) {
                            game.playAudio("../extension/永夜之境/audio/", 'xinxbeichan' + [5] + '.mp3');
                            await player.draw();
                            //player.removeSkill("xinxbeichan_locked");
                            //delete player.getStat("skill")["xinxbeichan"];
                            //game.log(player, '重置了', "#g【悲颤】");
                            player.chat("猎物落网啰^_^");
                        } else {
                            game.playAudio("../extension/永夜之境/audio/", 'xinxbeichan' + [6] + '.mp3');
                            player.chat("有点意思…");
                        }
                    }
                }
            },
            marktext: "🕸️",
            mark: true,
            intro: {
                markcount(storage, player) {
                    const cards = get.discarded().filterInD("d");
                    return cards.length;
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
            subSkill: {
                locked: {
                    charlotte: true,
                }
            }
        },
        xinxnewxinzhui: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                global: "phaseBegin",
            },
            filter(event, player) {
                return game.hasPlayer(current => current.countCards("he") && current !== player);
            },
            xiandingji: true,
            check(event, player) {
                return player.hasCard(card => get.color(card) === 'red', 'h') &&
                    player.hasCard(card => get.color(card) === 'black', 'h') && game.hasPlayer(current => get.attitude(player, current) <= 0);
            },
            async content(event, trigger, player) {
                await player.chooseUseTarget({ name: 'huogong', storage: { xinxnewxinzhui: true } }, true);
                if (event.triggername == "phaseBegin") {
                    player.awakenSkill("xinxnewxinzhui");
                }
            },
            group: ["xinxnewxinzhui_huogong", "xinxnewxinzhui_gather"],
            subSkill: {
                huogong
                    : {
                    trigger: { player: "huogongBegin" },
                    forced: true,
                    locked: false,
                    popup: false,
                    filter(event, player) {
                        return event.card?.storage.xinxnewxinzhui === true;
                    },
                    async content(event, trigger, player) {
                        trigger.setContent(async function (event) {
                            const target = event.targets[0];
                            const player = event.player;
                            if (target.countCards("h") == 0) return;
                            const res1 = await target.chooseToDiscard("h", true, "请选择【火攻】要弃置的牌")
                                .set("ai", card => {
                                    return 6 - get.value(card);
                                })
                                .forResult();
                            if (res1.bool && res1.cards && res1.cards.length) {
                                const cardA = res1.cards[0];
                                const colorA = get.color(cardA);
                                const promptStr = `是否重铸一张${get.translation(colorA)}的手牌，令【火攻】对${get.translation(target)}造成伤害？`;
                                const res2 = await player.chooseCard("h", promptStr, (card) => {
                                    return get.color(card) == colorA;
                                }).set("ai", card => {
                                    return 7 - get.value(card);
                                }).forResult();
                                if (res2.bool && res2.cards && res2.cards.length) {
                                    await player.recast(res2.cards);
                                    await target.damage("fire");
                                }
                            }
                        });
                    },
                },
                gather: {
                    trigger: { player: "useCardAfter" },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        return event.card?.storage?.xinxnewxinzhui === true;
                    },
                    async content(event, trigger, player) {
                        const history = game.getGlobalHistory('everything');
                        let cardsToGain = [];
                        for (let evt of history) {
                            if (!['lose', 'loseAsync', 'cardsDiscard', 'gain', 'draw'].includes(evt.name)) continue;
                            let isChild = false;
                            let parent = evt.getParent();
                            // 向上回溯父事件，检查是否源于本次火攻(trigger)
                            while (parent && typeof parent.getParent === 'function') {
                                if (parent == trigger) {
                                    isChild = true;
                                    break;
                                }
                                parent = parent.getParent();
                            }
                            if (!isChild) continue;
                            if (evt.cards && evt.cards.length) {
                                cardsToGain.addArray(evt.cards);
                            }
                        }
                        if (cardsToGain.length > 0) {
                            let finalCards = cardsToGain.filter(c => get.position(c));
                            if (finalCards.length) {
                                game.log(player, "获得了【火攻】结算期间涉及的", finalCards);
                                await player.gain(finalCards, 'gain2');
                                finalCards = finalCards.filter(i => get.owner(i) == player && get.position(i) == "h");
                                if (!finalCards.length) {
                                    return;
                                }
                                if (_status.connectMode) {
                                    game.broadcastAll(() => (_status.noclearcountdown = true));
                                }
                                let given_map = [];
                                while (
                                    player.hasCard(card => finalCards.includes(card) && !card.hasGaintag("xinxnewxinzhui_given"), "h") &&
                                    game.hasPlayer(current => player !== current)
                                ) {
                                    const { bool, cards, targets } = await player
                                        .chooseCardTarget({
                                            filterCard(card, player) {
                                                return get.event().cards.includes(card) && !card.hasGaintag("xinxnewxinzhui_given");
                                            },
                                            selectCard: [1, Infinity],
                                            position: "h",
                                            filterTarget: lib.filter.notMe,
                                            prompt: "星坠：请选择要分配的卡牌和目标",
                                            allowChooseAll: true,
                                            ai1(card) {
                                                return !ui.selected.cards.length && card.name == "du" ? 1 : 0;
                                            },
                                            ai2(target) {
                                                const player = get.event().player;
                                                const card = ui.selected.cards[0];
                                                if (card) {
                                                    return get.value(card, target) * get.attitude(player, target);
                                                }
                                                return 0;
                                            },
                                        })
                                        .set("cards", finalCards)
                                        .forResult();
                                    if (bool) {
                                        const target = targets[0];
                                        if (given_map.some(i => i[0] == target)) {
                                            given_map[given_map.indexOf(given_map.find(i => i[0] == target))][1].addArray(cards);
                                        } else {
                                            given_map.push([target, cards]);
                                        }
                                        player.addGaintag(cards, "xinxnewxinzhui_given");
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
                                if (given_map.length) {
                                    await game
                                        .loseAsync({
                                            gain_list: given_map,
                                            player: player,
                                            cards: given_map.slice().flatMap(list => list[1]),
                                            giver: player,
                                            animate: "giveAuto",
                                        })
                                        .setContent("gaincardMultiple");
                                }
                            }
                        }
                    }
                },
                given: {

                },
            }
        },
        xinxnewyingshi: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxnewyingshi" + index + ".mp3" : 2),
            trigger: {
                player: ["discardBefore"],
            },
            popup: false,
            filter(event, player) {
                return event.cards.length && event.cards.someInD("he");
            },
            prompt2(event, player) {
                return `即将弃置${get.translation(event.cards.filterInD("he"))}，失去1点体力防止之并发动${get.poptip('xinxnewxinzhui')}`;
            },
            check(event, player) {
                //return event.cards.filterInD("he").reduce((sum, card) => sum + player.getUseValue(card), -10) > 0 && player.hp > 1;
                return player.hp > 1;
            },
            async content(event, trigger, player) {
                player.logSkill("xinxnewyingshi", null, null, null, [get.rand(1, 2)]);
                trigger.cancel();
                await player.loseHp();
                const next = game.createEvent("xinxnewxinzhui" + event.name);
                next.player = player;
                next.setContent(lib.skill.xinxnewxinzhui.content);
                await next;
            },
            group: ["xinxnewyingshi_reset"],
            subSkill: {
                reset: {
                    trigger: {
                        player: ["changeHpAfter"],
                    },
                    filter(event, player) {
                        return true;
                    },
                    forced: true,
                    locked: false,
                    async content(event, trigger, player) {
                        if (trigger.num > 0) {
                            game.playAudio("../extension/永夜之境/audio/", 'xinxnewyingshi' + [get.rand(3, 4)] + '.mp3');
                        }
                        player.restoreSkill("xinxnewxinzhui");
                        var stat = player.getStat();
                        if (stat && stat.card) {
                            stat.card = {};
                        }
                    },
                }
            }

        },
        xinxzhengrong: {
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzhengrong" + index + ".mp3" : 2),
            trigger: {
                global: ["roundStart"],
            },
            filter(event, player) {
                return player.maxHp - player.getHp() > 0;
            },
            onremove(player, skill) {
                player.clearMark("xinxzhengrong");
            },
            popup: false,
            async cost(event, trigger, player) {
                const num = Math.min(2, player.maxHp - player.getHp());
                event.result = await player
                    .chooseCardTarget({
                        prompt: get.prompt2(event.skill),
                        filterCard: true,
                        position: "he",
                        selectCard: [1, num],
                        filterTarget: lib.filter.notMe,
                        ai1(card) {
                            const player = get.event().player;
                            if (player.maxHp < 5) { return 8 - get.value(card); }
                            return 15 - get.value(card);
                        },
                        ai2(target) {
                            const player = get.event().player,
                                att = get.attitude(player, target);
                            if (target.hasSkillTag("nogain")) {
                                att /= 6;
                            }
                            return att;
                        },
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const cards = event.cards;
                if (cards.length == 0) return;
                if (player.name === 'xinx_tenghuang') {
                    player.logSkill("xinxzhengrong", [target], null, null, [get.rand(1, 3)]);
                } else {
                    player.logSkill("xinxzhengrong", [target], null, null, [get.rand(4, 6)]);
                }
                let num = cards.length;
                await target.gain(cards, "gain2");
                await player.loseMaxHp(num);
                await target.gainMaxHp(num);
                await target.addMark("xinxzhengrong", 1, false);
                await player.addMark("xinxzhengrong", 1, false);
                await game.asyncDraw([target, player].sortBySeat(), num);
                //await game.asyncDraw([target, player]);
                if (!target.hasSkill("xinxzhengrong")) {
                    target.addSkill("xinxzhengrong");
                }
            },
            markimage: 'extension/永夜之境/image/mark/xinxzhengrong.png',
            intro: {
                name: "同袍",
                mark(dialog, player) {
                    return '彼此守望';
                },
                markcount(storage, player) {
                    return null;
                },
            },
        },
        xinxbahuang: {
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxbahuang" + index + ".mp3" : 2),
            onremove(player, skill) {
                player.clearMark("xinxbahuang");
            },
            markimage: 'extension/永夜之境/image/mark/xinxbahuang.png',
            intro: {
                mark(dialog, storage, player) {
                    let num = player.countMark("xinxbahuang");
                    if (num != 0) dialog.addText(`当前同袍造成伤害次数:${num}`);
                },
                markcount(storage, player) {
                    let num = player.countMark("xinxbahuang");
                    if (num == 0) return null;
                    return num;
                },
            },
            trigger: {
                global: "damageEnd",
            },
            priority: 1,
            forced: true,
            popup: false,
            filter(event, player) {
                const targets = game
                    .filterPlayer(target => {
                        return target.hasMark("xinxzhengrong");
                    }).sortBySeat();
                return targets.includes(event.source);
            },
            async content(event, trigger, player) {
                player.addMark("xinxbahuang", 1, false);
                if (trigger.source == player) {
                    const targets = game
                        .filterPlayer(target => {
                            return target.hasMark("xinxzhengrong")
                        }).sortBySeat();
                    if (player.countMark("xinxbahuang") < 3) {
                        player.logSkill("xinxbahuang", null, null, null, [get.rand(1, 4)]);
                    }
                    for (let target of targets) {
                        await target.gainMaxHp(trigger.num);
                    }
                } else {
                    if (player.countMark("xinxbahuang") < 3) {
                        player.logSkill("xinxbahuang", null, null, null, [get.rand(2, 3)]);
                    }
                    await player.gainMaxHp(trigger.num);
                    //await trigger.player.damage(trigger.num,'player', "unreal");
                }
                if (player.countMark("xinxbahuang") >= 3) {
                    player.clearMark("xinxbahuang");
                    if (trigger.player?.isIn()) {
                        player.logSkill("xinxbahuang", [trigger.player], null, null, [get.rand(5, 6)]);
                        await trigger.player.damage(trigger.num, player);
                    }
                }
            },
            ai: {
                combo: "xinxzhengrong",
            }

        },
        xinxxuanren: {
            audio: "ext:永夜之境/audio:8",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/xinxxuanren${index}.mp3` : 2),
            trigger: {
                global: "useCard",
            },
            popup: false,
            filter(event, player) {
                return event.card.name == 'sha' && event.targets.includes(player)
                    && player.countCards("hs", 'sha');
                //&& player.countCards("hs");
            },
            check(event, player) {
                let enemyCards = event.cards,
                    mycards = player.getCards('h', 'sha');
                return mycards.some(card => {
                    return get.suit(card) === get.suit(enemyCards[0]);
                });
            },
            async cost(event, trigger, player) {
                event.result =
                    await player.chooseToRespond(({ name: 'sha' }))
                        //({ name: 'sha' })("hs")(({ name: 'sha' }))(({ type: 'basic' }))
                        .set('prompt', get.prompt2('xinxxuanren'))
                        .set('ai', (card) => {
                            const player = get.player();
                            let score = 0;
                            if (trigger?.cards && trigger.cards?.length) {
                                const enemyCard = trigger.cards[0];
                                if (get.suit(card) === get.suit(enemyCard)) {
                                    score += 80;
                                }
                            }
                            return score;
                        }).forResult();
            },
            async content(event, trigger, player) {
                player.logSkill("xinxxuanren", null, null, null,[get.rand(1, 3)]);
                trigger.cancel();
                await player.draw();
                const enemyCards = trigger.cards || [];
                const myCards = event.cards || [];
                let isSameColor = false;
                let isSameSuit = false;
                let matchedSuits = [];
                for (const myC of myCards) {
                    for (const enemyC of enemyCards) {
                        if (get.color(myC) === get.color(enemyC)) {
                            isSameColor = true;
                        }
                        if (get.suit(myC) === get.suit(enemyC)) {
                            isSameSuit = true;
                            matchedSuits.add(get.suit(myC));
                        }
                    }
                }
                if (isSameColor) {
                    const allCards = enemyCards.concat(myCards);
                    await player.gain(allCards, 'gain2');
                }
                if (isSameSuit && matchedSuits.length > 0) {
                    player.addSkill('xinxxuanren_effect');
                    player.markAuto('xinxxuanren_effect', matchedSuits);
                    game.log(player, "记录了花色：", get.translation(matchedSuits));
                }
            },
            mod: {
                aiUseful(player, card, num) {
                    if (card.name === "sha") {
                        return 16;
                    }
                    if (get.name(card, player) === "shan") {
                        if (
                            player.countCards("hs", i => {
                                if (card === i || (card.cards && card.cards.includes(i))) {
                                    return false;
                                }
                                return get.name(i, player) === "shan";
                            })
                        ) {
                            return -1;
                        }
                        return num / Math.pow(Math.max(1, player.hp), 2);
                    }
                },
            },
            subSkill: {
                effect: {
                    mark: true,
                    onremove: true,
                    marktext: "刃",
                    intro: {
                        markcount(storage, player) {
                            let num = player.getStorage("xinxxuanren_effect").length;
                            if (num == 0) return null;
                            return num;
                        },
                        content: storage =>
                            `失去<span class=thundertext>${storage.reduce((str, suit) => str + get.translation(suit), "")}</span>牌后摸一张牌`,
                    },
                    trigger: {
                        player: "loseAfter",
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    forced: true,
                    silent: true,
                    charlotte: true,
                    filter(event, player) {
                        /* if (!event.cards || !event.cards.length) return false;
                        const suits = player.getStorage('xinxxuanren_effect');
                        if (!suits || !suits.length) return false;
                        for (let i = 0; i < event.cards.length; i++) {
                            if (suits.includes(get.suit(event.cards[i]))) {
                                return true;
                            }
                        }
                        return false; */
                        const suits = player.getStorage('xinxxuanren_effect')
                        if (!suits || !suits.length) return false;
                        const evt = event.getl(player);
                        if (!evt || !evt.cards2 || !evt.cards2.length) {
                            return false;
                        }
                        return evt.cards2.some(card => {
                            return suits.includes(get.suit(card, player));
                        });
                    },
                    async content(event, trigger, player) {
                        const suits = player.getStorage('xinxxuanren_effect')
                        const num = trigger.getl(player).cards2.filter(card => {
                            return suits.includes(get.suit(card, player));
                        }).length;
                        game.playAudio("../extension/永夜之境/audio/",'xinxxuanren'+[get.rand(4,8)]+'.mp3');
                        await player.draw(num);
                    }
                }
            }
        },
        xinxcuiren: {
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/xinxxuanren${index}.mp3` : 2),
            enable: "phaseUse",
            prompt: "将一张牌当【杀】对自己使用",
            filterCard: true,
            position: "he",
            sunbenSkill: true,
            popup: false,
            selectCard: 1,
            check(card) {
                const player = _status.event.player;
                const suit = get.suit(card);
                const recorded = player.getStorage('xinxxuanren_effect') || [];
                if (recorded.includes(suit)) return 0;
                const hasSameSuitSha = player.hasCard(c => {
                    return c != card && get.name(c) == 'sha' && get.suit(c) == suit;
                }, 'h');
                if (!hasSameSuitSha) return 0;
                return get.name(card) === 'sha' ? 1 : 10;
            },
            filter(event, player) {
                if (player.hasSkill('xinxcuiren_sunben')) return false;
                return player.countCards("he");
            },
            async content(event, trigger, player) {
                player.useCard({
                    name: 'sha',
                    cards: event.cards,
                    isCard: true,
                    filterTarget(card, player, target) {
                        return target == player;
                    }
                }, event.cards, player);
                player.logSkill("xinxcuiren", null, null, null, [get.rand(4,6)]);
                player.addSkill('xinxcuiren_sunben');
            },
            subSkill: {
                sunben: {
                    charlotte: true,
                    trigger: {
                        source: "dieAfter",
                    },
                    forced: true,
                    nopop: true,
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/",'xinxcuiren'+[get.rand(1, 3)]+'.mp3');
                        player.removeSkill('xinxcuiren_sunben');
                        game.log(player, "恢复了技能", "#g【淬刃】");
                    },
                },
            },
            ai: {
                order: 10,
                result: {
                    player(player) {
                        const recorded = player.getStorage('xinxxuanren_effect') || [];
                        const missingSuits = ['heart', 'diamond', 'spade', 'club'].filter(s => !recorded.includes(s));
                        if (!missingSuits.length) return 0;
                        for (const suit of missingSuits) {
                            const cards = player.getCards('h', c => get.suit(c) == suit);
                            if (cards.length >= 2 && cards.some(c => get.name(c) == 'sha')) {
                                return 1; 
                            }
                        }
                        return -1;
                    }
                },
                threaten: 1.5,
            },

        },



















    },


};
