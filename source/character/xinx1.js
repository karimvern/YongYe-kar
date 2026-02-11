import { lib, game, ui, get, ai, _status } from '../../../../noname.js';


export let info = {
    name: 'xinx1',
    connect: true,
    connectBanned: [],//联机禁用，里面填武将ID会导致联机该武将被隐藏。
    //武将分包
    characterSort: {
        xinx1: {
            // 分包: ["武将ID","武将ID"],
            'xinxwanxi': ["xinx_zhenfu", "xinx_caoxian", "xinx_lingju", "xinx_diaochan", 'xinx_liutan', 'xinx_huangwudie', 'xinx_lvlingqi', 'xinx_yanghuiyu', 'xinx_sunshangxiang', 'xinx_zhangchunhua', 'xinx_moqiongshu', 'xinx_bailingyun'],
            'xinxyuhui': ["xinx_jiangwei", "xinshu_jiangwei", "xinx_zhaoxiang", "xinx_caoying", "xinx_simashi", 'xinx_zhonghui', 'xinxyin_simashi', 'xinxying_jiangwei', 'xinx_dengai', 'xinxying_zhonghui', 'xinx_simazhao', 'xinx_zhugedan', 'xinx_caoshuang', 'xinxzhu_simashi'],
            'qiangu': ["xinx_zhangliao", "xinx_zhaoyun", "xinx_zhouyu", "xinwei_zhangliao", "xxin_luxun", "xinx_caocao", 'xinx_guanyu', 'xinx_zhugeliang', 'xinxshu_zhugeliang', 'xinx_simayi', 'xinx_lvmeng', 'xinxzhu_zhouyu', 'xinxying_simayi'],
            'qunxiong': ["xinx_xushao", "xinxqun_jiaxu", "xinx_guojia", 'xinx_jiaxu', 'xinx_lvbu', 'xinx_dongxie', 'xinxzhu_zhangliao', 'xinxzhu_caocao', 'xinxzhu_zhaoyun', 'xinx_dongzhuo', 'xinx_wangyun', 'xinx_xurong', 'xinx_zoushi', 'xinx_yuanshao', 'xinx_chengong'],
            'zigou': ['xinx_jiangzhuo', "xxyuexi", 'xinx_zengao', 'xinx_qinxi', 'xinx_qinlian'],
            //'xuandiesheji': ['xinx_hanzhuo', 'xinxzhuowenjun'],


        }
    },
    //武将 'rare', 'epic', 'legend',['legend']
    character: {
        xxyuexi: ["female", "xing", 3, ["dz_xing_yinxi", "dz_xing_jiangchun"], ['rare']],
        xxin_luxun: ["male", "wu", 3, ['xinxlianyin', 'xinxfenkui'], ["border:xing", 'rare']],
        xinx_zhaoxiang: ["female", "shu", 3, ["xing_xingyu", "xing_ningshuang", 'xing_hanming'], ['legend']],
        xinx_zhangliao: ["male", "xing", 4, ["xxxhuanren", "xxxzhenxi"], ['legend']],
        xinx_lingju: ["female", "qun", 3, ['xinxcangren', 'xinxfenglu'], ['epic']],
        xinx_caoxian: ["female", "wei", 3, ['xing_sizhu', 'xing_mengran'], ['legend']],
        xinx_zhenfu: ["female", "wei", 3, ["xinxsongqu", "xinxfushen", "xinxguizi"], ['epic']],
        xinx_zhaoyun: ["male", "shu", 4, ["xinxchiyu", "xinxshuangmang"], ['rare']],
        xinx_xushao: ["male", "qun", 4, ["xinxshiren", "xinxqianqiu"], ['legend']],
        //xinx_zhouyu: ["male", "wu", 3, ["xinxcangyan", 'xinxzhuoshao'], ["border:xing", 'rare']],
        xinx_jiangwei: ["male", "shu", 3, ["xinxpanzhi", "xinxlinyou", "xinxfuhan"], ['epic']],
        xinshu_jiangwei: ["male", "shu", 4, ['xinxbeifa', 'xinxlianbing', 'xinxbugui'], ['rare']],
        xinxqun_jiaxu: ["male", "qun", 3, ['xinxyice', 'xinxwansha'], ['rare']],
        xinwei_zhangliao: ["male", "wei", 4, ['dz_K_huanren', 'dz_K_wuqian'], ['rare']],
        xinx_caoying: ["female", "wei", 4, ['xinxyingfu', 'xinxshixi'], ['epic']],
        xinx_simashi: ["male", "wei", 3, ['xinxqianlong', 'xinxyini', 'xinxchenlan'], ["border:qun", 'legend']],
        xinx_diaochan: ["female", "qun", 3, ['xinxqingchen', 'xinxyiyue', 'xinxjuewu'], ['epic']],
        xinx_caocao: ["male", "wei", 4, ['xinxxieling', 'xinxjianxiong'], ['epic']],
        xinx_guojia: ["male", "wei", 3, ['xinxtianzhi', 'xinxshisheng'], ['epic']],
        xinx_zhonghui: ["male", "wei", 3, ['xinxquanmou', 'xinxwugui'], ["border:qun", 'epic']],
        xinx_jiaxu: ["male", "qun", 3, ['xinxhuoji', 'xinxcanjing', 'xinxsanku'], ['epic']],
        xinx_liutan: ["female", "shu", 3, ['xinxduanzhi', 'xinxjinshu'], ['epic']],
        xinx_huangwudie: ["female", "shu", 4, ['xinxluexin', 'xinxyangjian'], ['epic']],
        xinx_guanyu: ["male", "shu", 4, ['xinxjinbi', 'xinxwusheng'], ['legend']],
        xinx_zhugeliang: ["male", "shu", 2, ['xinxqizhen', 'xinxshiyu', 'xinxlihuo'], ['legend']],
        xinxshu_zhugeliang: ["male", "shu", "4/7", ['xinxxzhaohan', 'xinxrenshi', 'xinxchushi'], ['legend']],
        xinxyin_simashi: ["male", "wei", 3, ['xinxyinshi', 'xinxruilue', 'xinxbainei'], ["border:jin", 'epic']],
        xinx_simayi: ["male", "wei", 3, ['xinxqianyi', 'xinxquanbian'], ['epic']],
        xinx_jiangzhuo: ["female", "xing", 3, ['xinxzengren', 'xinxshunhua'], ['epic']],
        xinx_lvmeng: ["male", "wu", 4, ['xinxbaiyi', 'xinxtaoyin'], ["border:xing", 'epic']],
        xinx_lvlingqi: ["female", "qun", 3, ['xinxfeiyan', 'xinxciyou'], ['legend']],
        xinx_zengao: ["male", "xing", 3, ['xinxjishi', 'xinxxinlue'], ['epic']],
        xinxying_jiangwei: ["male", "shu", 3, ['xinxhemou', 'xinxweixi'], ["border:wei", 'legend']],
        //xinx_yanghuiyu: ["female", "jin", 3, ['xinxshanjiao', 'xinxhuiyan'], ['epic']],
        xinx_sunshangxiang: ["female", "wu", 3, ['xinxqiansi', 'xinxxiaoling'], ["border:xing", 'legend']],
        //xinx_dengai: ["male", "wei", 4, ['xinxduanwan', 'xinxjingong'], ['epic']],
        xinxying_zhonghui: ["male", "wei", 3, ['xinxquanpao', 'xinxqingqiang'], ["border:qun", 'legend']],
        xinx_lvbu: ["male", "qun", 4, ['xinxxuanxiao', 'xinxshiji'], ['epic']],
        xinx_dongxie: ["female", "qun", 3, ['xinxjiaojue', 'xinxfengyao'], ['legend']],
        xinx_zhangchunhua: ["female", "wei", '2/3', ['xinxzhenying', 'xinxzhebian'], ['hiddenSkill', 'epic']],
        xinx_qinlian: ["female", "xing", 3, ['xinxzhiyi', 'xinxshenai'], ['legend']],
        xinxzhu_zhangliao: ["male", "qun", 4, ['xinxyingqi', 'xinxyanhui'], ['legend']],
        xinx_simazhao: ["male", "wei", 3, ['xinxqueyi', 'xinxshexin', 'xinxjinmian'], ['legend']],
        xinxzhu_caocao: ["male", "qun", 4, ['xinxxishuo', 'xinxhaopo'], ['legend']],
        xinxzhu_zhouyu: ["male", "wu", 3, ['xinxqiyi', 'xinxfanjian'], ['legend']],
        xinxying_simayi: ["male", "wei", 3, ['xinxyuanyan', 'xinxchengshu'], ['legend']],
        xinxzhu_zhaoyun: ["male", "qun", 4, ['xinxlongxiang', 'xinxcangnuo'], ['legend']],
        xinx_dongzhuo: ["male", "qun", "3/4", ['xinxlujing', 'xinxzisui'], ['epic']],
        xinx_wangyun: ["male", "qun", 3, ['xinxjinjie', 'xinxyunjue'], ['epic']],
        xinx_xurong: ["male", "qun", 4, ['xinxjieshuo', 'xinxhuolu'], ['legend']],
        xinx_zhugedan: ["male", "wei", 4, ['xinxkejing', 'xinxjuyi'], ['epic']],
        //xinx_moqiongshu: ["female", "wei", 3, ['xinxchanyi'], ['epic']],
        xinxzhu_simashi: ["male", "wei", 4, ['xinxsanshi', 'xinxchenlue'], ['legend']],

        //xinx_qinxi: ["female", "xing", 3, ['xinxxiangfu'], ['legend']],
        // xinx_zoushi: ["female", "qun", 3, [], ['epic'],["forbidai"]],
        // xinx_yuanshao: ["male", "qun", 4, [], ['epic'],["forbidai"]],
        // xinx_chengong: ["male", "qun", 3, [], ['epic'],["forbidai"]],
        // xinx_caoshuang: ["male", "wei", 4, [], ['epic'],["forbidai"]],
        // xinx_bailingyun: ["female", "wei", 3, [], ['epic'],["forbidai"]],


    },
    //翻译
    translate: {
        xinxwanxi: '婉如清扬',
        xinxyuhui: '三分余晖',
        qiangu: '千古风流',
        qunxiong: '汉鹿争镞',
        xuandiesheji: '玄蝶设计',
        zigou: '金焕刃',
        xinx_zhuowenjun: '玄蝶卓文君',
        xinx_zhuowenjun_prefix: '玄蝶',
        xinx_hanzhuo: '玄蝶寒浞',
        xinx_hanzhuo_prefix: '玄蝶',
        xxyuexi: "杏悦溪",
        xxyuexi_prefix: '杏',
        xxin_luxun: "杏陆逊",
        xxin_luxun_prefix: '杏',
        xinx_zhaoxiang: "杏赵襄",
        xinx_zhaoxiang_prefix: '杏',
        xinx_zhangliao: "杏张辽",
        xinx_zhangliao_prefix: '杏',
        xinx_lingju: "杏灵睢",
        xinx_lingju_prefix: '杏',
        xinx_caoxian: "杏曹宪",
        xinx_caoxian_prefix: '杏',
        xinx_zhenfu: "杏甄宓",
        xinx_zhenfu_prefix: '杏',
        xinx_zhaoyun: "杏赵云",
        xinx_zhaoyun_prefix: '杏',
        xinx_xushao: "杏许劭",
        xinx_xushao_prefix: '杏',
        xinx_zhouyu: "杏周瑜",
        xinx_zhouyu_prefix: '杏',
        xinx_jiangwei: "杏姜维",
        xinx_jiangwei_prefix: '杏',
        xinshu_jiangwei: "初姜维",
        xinshu_jiangwei_prefix: '初',
        xinxqun_jiaxu: '初贾诩',
        xinxqun_jiaxu_prefix: '初',
        xinwei_zhangliao: '初张辽',
        xinwei_zhangliao_prefix: '初',
        xinx_caoying: '杏曹婴',
        xinx_caoying_prefix: '杏',
        xinx_simashi: '杏司马师',
        xinx_simashi_prefix: '杏',
        xinx_diaochan: '杏貂蝉',
        xinx_diaochan_prefix: '杏',
        xinx_caocao: '杏曹操',
        xinx_caocao_prefix: '杏',
        xinx_guojia: '杏郭嘉',
        xinx_guojia_prefix: '杏',
        xinx_zhonghui: '杏钟会',
        xinx_zhonghui_prefix: '杏',
        xinx_jiaxu: '影贾诩',
        xinx_jiaxu_prefix: '影',
        xinx_liutan: '杏柳婒',
        xinx_liutan_prefix: '杏',
        xinx_huangwudie: '杏黄舞蝶',
        xinx_huangwudie_prefix: '杏',
        xinx_guanyu: '杏关羽',
        xinx_guanyu_prefix: '杏',
        xinx_zhugeliang: '杏卧龙',
        xinx_zhugeliang_prefix: '杏',
        xinxshu_zhugeliang: '杏诸葛亮',
        xinxshu_zhugeliang_prefix: '杏',
        xinxyin_simashi: '影司马师',
        xinxyin_simashi_prefix: '影',
        xinx_simayi: '杏司马懿',
        xinx_simayi_prefix: '杏',
        xinx_jiangzhuo: '杏姜灼',
        xinx_jiangzhuo_prefix: '杏',
        xinx_lvmeng: '杏吕蒙',
        xinx_lvmeng_prefix: '杏',
        xinx_lvlingqi: '杏吕玲绮',
        xinx_lvlingqi_prefix: '杏',
        xinx_zengao: '杏曾敖',
        xinx_zengao_prefix: '杏',
        xinxying_jiangwei: '影姜维',
        xinxying_jiangwei_prefix: '影',
        xinx_yanghuiyu: '杏羊徽瑜',
        xinx_yanghuiyu_prefix: '杏',
        xinx_sunshangxiang: '杏孙尚香',
        xinx_sunshangxiang_prefix: '杏',
        xinx_dengai: '杏邓艾',
        xinx_dengai_prefix: '杏',
        xinxying_zhonghui: '影钟会',
        xinxying_zhonghui_prefix: '影',
        xinx_lvbu: '杏吕布',
        xinx_lvbu_prefix: '杏',
        xinx_dongxie: '杏董翓',
        xinx_dongxie_prefix: '杏',
        xinx_zhangchunhua: '杏张春华',
        xinx_zhangchunhua_prefix: '杏',
        xinx_qinxi: '杏秦汐',
        xinx_qinxi_prefix: '杏',
        xinx_qinlian: '杏秦潋',
        xinx_qinlian_prefix: '杏',
        xinxzhu_zhangliao: '逐张辽',
        xinxzhu_zhangliao_prefix: '逐',
        xinx_simazhao: '杏司马昭',
        xinx_simazhao_prefix: '杏',
        xinxzhu_caocao: '逐曹操',
        xinxzhu_caocao_prefix: '逐',
        xinxzhu_zhouyu: '逐周瑜',
        xinxzhu_zhouyu_prefix: '逐',
        xinxying_simayi: '影司马懿',
        xinxying_simayi_prefix: '影',
        xinxzhu_zhaoyun: '逐赵云',
        xinxzhu_zhaoyun_prefix: '逐',
        xinx_dongzhuo: '杏董卓',
        xinx_dongzhuo_prefix: '杏',
        xinx_wangyun: '杏王允',
        xinx_wangyun_prefix: '杏',
        xinx_xurong: '杏徐荣',
        xinx_xurong_prefix: '杏',
        xinx_zoushi: '杏邹氏',
        xinx_zoushi_prefix: '杏',
        xinx_zhugedan: '杏诸葛诞',
        xinx_zhugedan_prefix: '杏',
        xinx_yuanshao: '杏袁绍',
        xinx_yuanshao_prefix: '杏',
        xinx_chengong: '杏陈宫',
        xinx_chengong_prefix: '杏',
        xinx_caoshuang: '杏曹爽',
        xinx_caoshuang_prefix: '杏',
        xinx_moqiongshu: '杏莫琼树',
        xinx_moqiongshu_prefix: '杏',
        xinx_bailingyun: '杏柏灵筠',
        xinx_bailingyun_prefix: '杏',
        xinxzhu_simashi: '逐司马师',
        xinxzhu_simashi_prefix: '逐',










        //技能翻译
        dz_xing_yinxi: "吟兮",
        dz_xing_yinxi_info: "锁定技。准备阶段，你可以令一名其他角色获得一枚“吟”标记。有“吟”的角色使用牌时，你可令此牌无效或无法被响应，然后你获得此牌对应的实体牌，其移去一枚“吟”。",
        dz_xing_jiangchun: "绛唇",
        dz_xing_jiangchun_info: "锁定技，当你受到其他角色造成的伤害后，你令伤害来源获得一枚“吟”标记。然后场上有“吟”的角色选择一项：1.交给你一张牌。2.获得一枚“吟”标记。",
        dz_xing_duanmou: "断谋",
        dz_xing_duanmou_info: "其他角色的回合开始时，若其体力值大于手牌数，你可为其指定两张任意牌名。若如此做，该角色摸牌阶段，改为从牌堆／弃牌堆获得你指定的牌（若没有指定的牌，则改为获得一张【杀】）。",
        xing_dengbei: "登北",
        xing_dengbei_info: "每轮限一次。其他角色的回合内，当你使用牌指定其他角色为目标后或成为其他角色使用牌的目标后，你可与一名其他角色交换手牌或装备区里的牌。",
        xing_xingyu: "星雨",
        xing_xingyu_xingluo: "星落",
        xing_xingyu_info: "锁定技。①准备阶段，你将牌堆顶X张牌（X为场上存活其他角色数）标记为“星落”，并令所有其他角色随机以一张非“星落”手牌交换。②“星落”仅你可使用或打出。当你获得牌时，将其标记为“星落”。",
        xing_ningshuang: "凝霜",
        xing_ningshuang_info: `转换技。一名角色的回合结束时，若你本回合使用过基本牌，则你可以：阳，观看一名角色的手牌并获得其区域一张牌，然后将其随机一张非“星落”手牌标记为“星落”；阴，令${get.poptip('xinx_ewaidepai')}+1且获得${get.poptip('xing_zhupo')}直到再次发动此技能。`,
        xing_zhupo: "铸魄",
        xing_zhupo_info: "锁定技。每回合限一次，你可将一张牌当做任意基本牌使用或打出。",
        xing_hanming: '汉明',
        xing_hanming_info: '限定技。当你进入濒死状态时，你可以弃置所有牌，令所有其他角色弃置所有非“星落”手牌。',
        xxxhuanren: "焕刃",
        xxxhuanren_info: "每回合限一次，当你使用牌指定一名其他角色为唯一目标后，你可以令一名其他角色重铸其区域的所有牌，然后若其重铸的牌中有：基本牌，你获得之；锦囊牌，你可以使用其中的一张牌；装备牌，你令此牌额外结算一次。",
        xxxzhenxi: "震袭",
        xxxzhenxi_info: "锁定技，每回合限一次。当你对其他角色造成伤害时，你可以获得其武将牌上的一个技能，然后其失去此技能。当其对你造成伤害后，你为其恢复一个以此法失去的技能。",
        xxxzhenxi1: "金焕刃",
        xxxzhenxi_append: '<span style="font-family: yuanli">金焕刃。以至亲之血，哺其锐锋。此刃出鞘，无人不惧。</span>',
        xinxsongqu: "送曲",
        xinxsongqu_info: "出牌阶段限一次。你可以秘密指定一种类型和颜色，并将一张牌称为“送曲”交给一名其他角色。直到你下回合开始：①当其使用牌时，若与你指定的类型和颜色均相同，你选择至多两项本轮未选择过的：1.令其对自己造成1点伤害； 2.令此牌无效；3.令其回复1点体力；4.令其获得此牌。",
        xinxfushen: "浮生",
        xinxfushen_info: "锁定技。当一名角色造成1点伤害后，你令其获得1枚“生”；一名角色的结束阶段，你移除场上所有的“生”并摸等量的牌。",
        xinxguizi: "瑰姿",
        xinxguizi_info: "锁定技。每回合限一次，当你受到伤害时，若伤害来源有“生”，你防止此伤害。",
        xinxchiyu: "赤羽",
        xinxchiyu_tag: "羽",
        xinxchiyu_info: "锁定技。当你使用或打出红色牌时，你将牌堆顶的一张牌置于你的武将牌上，称为“羽”。你可以将“羽”如手牌般使用或打出（无使用次数和距离限制）。",
        xinxshuangmang: "霜芒",
        xinxshuangmang_info: "当你将“羽”置于武将牌上时，若此“羽”可以使用，你可立即使用“羽”。每回合限一次，你可将一张“羽”当作任意基本牌或锦囊牌使用。",
        xinxshiren: "识人",
        xinxshiren_info: "锁定技。每回合限两次。每轮开始时或当你造成伤害后，若你以此法获得的技能数不大于3，你从五张武将牌中选择一个技能获得之。回合结束时，你可以失去任意个以此法获得的技能，然后摸等量的牌。",
        xinxqianqiu: "千秋",
        xinxqianqiu_info: "锁定技，你不能成为延时锦囊的目标。当你受到不为实体牌造成的伤害时，防止此伤害。",
        xinxzhuoshao: "灼灭",
        xinxzhuoshao_info: "①一名的角色准备阶段开始前，若其有“灼”，你移去其一枚“灼”并选择一项：1.令其受到1点火焰伤害。2.令其摸一张牌。②有“灼”的角色受到伤害后，你摸一张牌。",
        xinxcangyan: "苍焱",
        xinxcangyan_info: "锁定技。当你获得或失去牌后，若此牌花色:<br>为♦️，你随机令一名其他角色获得一枚“灼”；<br>为♥️，你回复1点体力；<br>为♠️，你随机令一名其他角色弃置一张手牌；<br>为♣️，你随机获得一名其他角色场上一张牌。",
        xing_sizhu: '思助',
        xing_sizhu_info: '锁定技，每回合每种牌字数限一次。当你不因本技能使用或打出牌结算完毕后，你视为使用一张与此牌字数相同的基本牌或普通锦囊牌（无距离和次数限制），然后你可将此牌对应的所有实体牌交给一名其他角色。',
        xing_mengran: '梦染',
        xing_mengran_info: '每轮限一次。当你需要使用或打出基本牌时，你可视为使用或打出之。',
        xinxyice: '遗策',
        xinxyice_info: '锁定技。当你使用/打出/弃置的牌进入弃牌堆后，你将这些牌以任意顺序置于你的武将牌上，称为“策”。若这些“策”中有点数相同的牌，则你获得这两张牌中间的所有牌，将这两张牌置于牌堆两端，然后摸两张牌。若场上没有处于濒死状态的角色，则你对一名角色造成1点伤害。',
        dz_xing_beifa: "北伐",
        dz_xing_beifa_info: "锁定技。①当你对一名其他角色造成伤害时，你令其将一张牌置于其武将牌上，称为“伐”，然后其获得技能〖悖逆〗。②当你使用牌指定其他角色为目标时，若其有“伐”，你摸一张牌。",
        dz_xing_beini: "悖逆",
        dz_xing_beini_info: "锁定技。一名角色的结束阶段，若你本回合造成过伤害，你选择一名拥有技能【北伐】的其他角色。你交给其一张手牌并令其摸一张牌。否则你失去1点体力。",
        dz_xing_quanxiang: "劝降",
        dz_xing_quanxiang_info: "出牌阶段限一次。你可以选择一名其他角色，其移去所有“伐”并受到等量的伤害（至少为1）。当有“伐”因你移除而进入弃牌堆时，你获得之。",
        dz_xing_bugui: "不归",
        dz_xing_bugui_info: "结束阶段，若场内有“伐”的角色数大于1，你加1点体力上限并回复1点体力，移去场内所有的“伐”，并对因此而移去“伐”的角色造成等同于移除数的伤害。",
        xinxpanzhi: '磐志',
        xinxpanzhi_info: '锁定技。准备阶段，你观看牌堆顶X张牌（X为你的体力值且至多为5），使用其中任意张牌，然后你获得剩余的牌并失去1点体力。',
        xinxlinyou: '麟佑',
        xinxlinyou_info: '锁定技。 每回合每项限一次。你使用或打出以下牌时，获得附加效果。<li>「杀」：可将此【杀】改为任意属性。<li>「闪/无懈可击/装备牌/延时类锦囊牌」：摸一张牌并对一名其他角色造成1点伤害。<li>「桃/酒」：增加1点体力上限/回复1点体力。<li>「具有唯一目标且非伤害类的普通锦囊牌」：令此牌额外结算一次。<li>「伤害类普通锦囊牌」：可令此牌伤害值+1。<li>「五谷丰登/桃源结义」：可令此牌对任意目标无效。',
        xinxfuhan: '复汉',
        xinxfuhan_info: `觉醒技。当你进入濒死状态时，你将体力回复至1点，并修改${get.poptip('xinxpanzhi')}。`,
        xinxpanzhi_re: '磐志·改',
        xinxpanzhi_re_info: '锁定技。准备阶段，你观看牌堆顶3张牌，使用其中任意张牌，然后你获得剩余的牌。',
        xinxyice: '遗策',
        xinxyice_info: '锁定技。当你使用/打出/弃置的牌进入弃牌堆后，你将这些牌以任意顺序置于你的武将牌上，称为“策”。若这些“策”中有点数相同的牌，则你获得这两张牌中间的所有牌，将这两张牌置于牌堆两端，然后摸两张牌。若场上没有处于濒死状态的角色，则你对一名角色造成1点伤害。',
        xinxwansha: '完杀',
        xinxwansha_info: '锁定技。你的回合内，只有你能使用基本牌。',
        xinxshixi: '噬袭',
        xinxshixi_info: '锁定技。每轮限一次。当你使用牌指定其他角色为唯一目标后，或成为其他角色使用牌的唯一目标后，你可观看对方的手牌，然后可获取其区域一张牌。',
        xinxyingfu: '影伏',
        xinxyingfu_info: '锁定技。①每回合限一次。当你造成1点伤害后，你将一名角色的一张牌置于你的武将牌上，称为“伏”。②其他角色的准备阶段，你可移去任意张“伏”对其造成无来源的X点伤害（X为移去“伏”数的一半，向上取整）。③结束阶段，若你的“伏”大于3，你摸三张牌，并可用任意张手牌替换等量的“伏”。',
        xinxqianlong: '潜龙',
        xinxqianlong_tag: '死士',
        xinxqianlong_info: '锁定技。①游戏开始/当你使用牌后，若此牌与你使用的上一张牌的类型不同，你将牌堆一张方块牌置于你的武将牌上，称为“死士”。你可以将“死士”如手牌般使用或打出。②你使用“死士”牌无距离限制、无法被响应且数值+1。',
        xinxyini: '夷逆',
        xinxyini_info: '每名角色限一次。当你造成伤害后，你可令受伤角色失去X点体力上限，然后你增加X点体力上限（X为伤害值）。其进入濒死状态时，恢复以此法失去的体力上限。',
        xinxchenlan: '沉澜',
        xinxchenlan_info: '锁定技。结束阶段，若你本回合造成或受到的伤害数之和小于2：你失去1点体力；大于2：你回复1点体力；大于3：你从牌堆获得一张【杀】并置入“死士”中。',
        xinxyiyue: '倚月',
        xinxyiyue_info: '锁定技。每回合限一次，当你成为【杀】或伤害类锦囊牌的目标时，你可选择一名不为此牌使用者的角色。该角色视为对此牌使用者使用一张【决斗】。若其因此【决斗】造成了伤害，你令此牌无效，并与其各摸一张牌。',
        xinxjuewu: '绝舞',
        xinxjuewu_info: "结束阶段，你可令所有其他角色依次对你使用一张牌（无距离限制），否则你获得其一张牌。当你因此受到伤害时，防止之。结算完成后，你获得“绝舞”过程中进入弃牌堆的牌。",
        xinxqingchen: '倾城',
        xinxqingchen_info: '蓄力技（1/7）。①出牌阶段限一次，你可消耗7点蓄力值，令一名其他角色的下回合改为由你操控。该回合结束时，其可将一张牌当【决斗】使用。②当你造成1点伤害后，你获得1点蓄力值。',
        xinxqingchen2: '倾城',
        xinxxieling: "挟令",
        xinxxieling_info: '①出牌阶段限一次。你可以令一名其他角色获得一枚“敕”，并交给你X张牌（因此获得的牌不计入你的手牌上限，且无次数限制）。②有“敕”的角色受到伤害时，令此伤害+X，然后移去所有“敕”。（X为其“敕”数）',
        xinxxieling3: "敕令",
        xinxxieling3_info: "锁定技，你受到的伤害+X（X为“敕”数）。当你受到伤害后，你获得一枚“敕”。",
        xinxxieling_keep1: "令",
        xinxjianxiong: "奸雄",
        xinxjianxiong_info: "锁定技。每局游戏限一次。当你受到伤害时，你可对伤害来源造成Y点伤害（Y为本回合进入弃牌堆的伤害牌数）。若其因此死亡，则〖奸雄〗的发动次数+1。",
        dz_K_huanren: "焕刃",
        dz_K_huanren_info: "锁定技。每回合限一次，当你使用牌指定其他角色为唯一目标后，或成为其他角色使用牌的唯一目标后，你令对方摸三张牌，然后其受到来自你的1点伤害。当前回合弃牌阶段，你观看其手牌，获得其X张牌。（X为其手牌数一半且向下取整，X至少为一）。",
        dz_K_wuqian: "无前",
        dz_K_wuqian_info: `锁定技。当你杀死一名角色后，你令你本局游戏${get.poptip('dz_K_huanren')}的X的数值+1。`,
        xinxcangren: "藏刃",
        xinxcangren_info: "锁定技。①一名角色的准备阶段或有角色死亡时，若场上没有“藏”，你令一名角色获得“藏”。有“藏”的角色于弃牌阶段外因使用或弃置而失去非装备牌后，你获得此牌。②当你杀死一名有“藏”的角色后，你加1点体力上限。",
        xinxfenglu: "锋露",
        xinxfenglu_info: "锁定技。一名角色的结束阶段，若其有“藏”且体力值小于你，你视为对其使用一张刺【杀】。",
        xinxfenglu_tag: '锋',
        xinxtianzhi: "天智",
        xinxtianzhi_info: "锁定技。①当你使用基本牌或普通锦囊牌时，你记录此牌名。②每回合限一次，当一名其他角色使用已被本技能记录的牌结算后，你可视为使用一张与此牌同名同元素的牌。③结束阶段，你从牌堆中获得一张基本牌。若已记录牌名数不小于10，则改为两张。",
        xinxshisheng: '十胜',
        xinxshisheng_info: "锁定技。每回合限一次。你可以视为使用一张〖天智〗记录过的牌（无次数限制）。",
        xinxquanmou: "权谋",
        xinxquanmou_info: "锁定技。①每轮限一次。其他角色的结束阶段，若其本回合于摸牌阶段外获得的牌大于其体力值，你加1点体力上限，获得一个额外回合，并令手牌上限和额定摸牌数+1。②弃牌阶段结束时，你可视为使用一张你于本回合使用过的基本牌或普通锦囊牌。",
        xinxwugui: "无归",
        xinxwugui_info: `觉醒技。当你令一名其他角色进入濒死状态时，你减1点体力上限，获得技能${get.poptip('xinxwuyi')}。`,
        xinxwuyi: "诬异",
        xinxwuyi_info: "锁定技。每回合限一次。其他角色于摸牌阶段外获得牌时，你可对其造成1点雷电伤害，且直到本回合结束，其下次回复体力时，取消之。",
        xinxwuyi_norecover: "诬异",
        xinxwuyi_norecover_info: "",
        xinxhuoji: "祸济",
        xinxhuoji_info: "每轮每项限一次。①当你使用非伤害牌指定目标后，你令一名角色视为对令另一名角色A使用一张火【杀】，并令A的手牌上限视为0直到其下个回合结束。②其他角色于出牌阶段使用伤害牌指定除你外的唯一目标后，你可令使用者摸一张牌，然后取消此牌的所有目标。",
        xinxhuoji_handcard: "祸济",
        xinxhuoji_handcard_info: "",
        xinxcanjing: "残旌",
        xinxcanjing_info: "锁定技。当你使用牌被抵消时，或有牌被你抵消时，你摸一张牌，然后可使用一张牌（无距离和次数限制）。",
        xxinxsanku: '逝影',
        xxinxsanku_info: "觉醒技。当你进入濒死状态时，你可以令伤害来源失去1点体力，然后你将体力回复至X点（X为其手牌数且至少为1），获得技能〖〗。",
        xinxsanku: '三窟',
        xinxsanku_info: "锁定技。①每轮开始时，你获得一张【影】。你的【影】不计入手牌上限。②你可将一张【影】当【闪】使用或打出。③当你处于濒死状态时，你可弃置两张【影】将体力回复至1点。",
        xinxluexin: '掠星',
        xinxluexin_info: "一名角色的结束阶段，若本回合你的牌因弃置而进入过弃牌堆，你可以依次使用之。",
        xinxyangjian: '佯箭',
        xinxyangjian_info: `锁定技。当你不因${get.poptip('xinxluexin')}而使用或打出基本牌时，你弃置手牌数一半的牌（向上取整），然后将手牌摸至体力上限。`,
        xinxjinbi: "矜愎",
        xinxjinbi_info: "锁定技。①当你每回合首次受到伤害时，你防止此伤害并将伤害来源的一张牌置于你的武将牌上，称为“愎”；当你造成1点伤害后，你获得一张“愎”。②结束阶段，你弃置所有“愎”，然后失去等量体力上限。",
        xinxwusheng: '武圣',
        xinxwusheng_info: "锁定技。①当你造成或受到伤害时，你令此伤害+X（X为游戏轮数-1）。②每回合限一次。当你使用牌指定其他角色为唯一目标后，你令其展示所有手牌，其选择一种颜色，你获得该颜色的所有手牌，然后其摸因此失去牌数的牌。你以此法或通过“愎”获得的牌不计入本回合手牌上限。",
        '#ext:永夜之境/audio/xinxwusheng1': '此战，某必胜！',
        '#ext:永夜之境/audio/xinxwusheng2': '尔等不降，便纳命来！',
        '#ext:永夜之境/audio/xinxwusheng3': '不日，将北定中原！',
        '#ext:永夜之境/audio/xinxwusheng4': '北取中原，某势在必得！',
        xinxwusheng_tag: '武',
        xinxwusheng2: '武圣',
        xinxmingshi: '明势',
        xinxmingshi_info: "每回合限X次（X为你的体力值）。一名角色的判定牌生效前，你摸一张牌，然后可将判定结果改为任意花色且点数为2。",
        xinxqizhen_tag: '奇',
        xinxqizhen: "奇阵",
        xinxqizhen_info: "锁定技。①当你获得牌时，你将所有手牌置于武将牌上，称为“奇”。你可以如手牌般使用或打出“奇”。②准备阶段，你可以获得一名其他角色一张牌，然后你失去1点体力。③当你的体力值减少时，你摸一张牌。④每回合限一次。当你失去“奇”时，你回复1点体力。",
        xinxshiyu: '识愚',
        xinxshiyu_info: "锁定技。每轮限一次。当其他角色使用【无懈可击】时，你可弃置两张“奇”取消此牌的所有目标，然后你获得此牌并可使用之。",
        xinxlihuo: '离火',
        xinxlihuo_info: "结束阶段，你可弃置两张“奇”对一名其他角色造成1点火焰伤害。",
        xinxzhaohan: '昭汉',
        xinxzhaohan_info: "锁定技。一名角色的回合开始时，你观看牌堆顶X张牌（X为你的体力值），并可使用其中一张牌（无距离限制）。若此时在你的回合内，你可用任意手牌替换这些牌。",
        xinxrenshi: '任势',
        xinxrenshi_info: "锁定技。每回合限一次。当你使用牌指定其他角色为唯一目标后，你观看其手牌，使用其中一张牌。若未使用牌，你弃置一张基本牌。",
        xinxchushi: '出师',
        xinxchushi_info: `限定技。出牌阶段，你可以选择一名角色。你减1点体力上限，从${get.poptip('xinxchushid')}/${get.poptip('xinxchushi_draw')}/${get.poptip('xinxchushi_lose')}中选择未选择过的一项，然后其获得此技能。`,
        'xinxchushi_damage': '北定',
        'xinxchushi_damage_info': '当你每回合首次造成伤害时，此伤害+1。',
        'xinxchushi_draw': '整驽',
        'xinxchushi_draw_info': '准备阶段或结束阶段，你摸一张牌，然后重铸一张牌。',
        'xinxchushi_lose': '攘奸',
        'xinxchushi_lose_info': '每轮开始时，你失去1点体力。若为偶数次发动此技能，则减少1点体力上限。',
        'xinxchushid': '北定',
        'xinxchushid_info': '当你每回合首次造成伤害时，此伤害+1。当你受到大于1的伤害时，此伤害改为1。',
        xinxxzhaohan: '昭汉',
        xinxxzhaohan_info: "锁定技。牌堆顶的X张牌始终对你可见（X为你的体力值）。每轮限X次，你可以将牌堆顶的X张牌如手牌般使用或打出。",
        xinxyinshi_tag: '死士',
        xinxruilue_tag: '对方的牌',
        xinxruilue: '睿略',
        xinxruilue_info: "出牌阶段限一次。你可观看一名其他角色的手牌，然后可用任意张牌替换其任意张牌。",
        '#ext:永夜之境/audio/xinxruilue1': '天下诸事，现在由我定夺！',
        '#ext:永夜之境/audio/xinxruilue2': '趁此良宵，待吾一探朝中虚实。',
        xinxyinshi: '阴士',
        xinxyinshi_info: '锁定技。①每回合限一次。当你使用或打出基本牌和普通锦囊牌时，你可获得一张此牌的复制和一张【影】。②你以此获得的牌不计入手牌上限。当其离开你的手牌区时，将其移出游戏。',
        '#ext:永夜之境/audio/xinxyinshi1': '吾尽用间之谋，亦极用人之要。',
        '#ext:永夜之境/audio/xinxyinshi2': '尔等暂且不麾不动，来日必有奇用。',
        xinxbainei: '败馁',
        xinxbainei_info: `持恒技。①一名角色的回合结束后，你失去所有${get.poptip('xinx_Charlotte')}。②当你受到伤害后，你可以使用对你造成伤害的实体牌。若此牌造成过伤害，此技能本回合失效。`,
        '#ext:永夜之境/audio/xinxbainei1': '败而不馁，围骄兵以敌之。',
        '#ext:永夜之境/audio/xinxbainei2': '此吾之过也，望诸君勿复言之。',
        xinxlianyin_tag: '夷',
        xinxlianyin: '连营',
        xinxlianyin_info: '每轮开始时，你令一名其他角色将其随机一张牌置于其武将牌上，称为“营”。其对自己使用牌时，将一张牌置于其武将牌上。其死亡时，你获得其武将牌上的“营”。',
        '#ext:永夜之境/audio/xinxlianyin1': '先观大势，然后方可成形。',
        '#ext:永夜之境/audio/xinxlianyin2': '小不忍则乱大谋。',
        xinxfenkui: '焚溃',
        xinxfenkui_info: "锁定技。有“营”的角色使用与“营”花色相同的牌时，你选择一项：<br>1.横置至多两名角色；<br>2.对一名其他角色造成X点火焰伤害（X为你上次选择选项1的次数）。",
        '#ext:永夜之境/audio/xinxfenkui1': '不灭之火！',
        '#ext:永夜之境/audio/xinxfenkui2': '感受一下火的力量吧！',
        xinxqianyi: '潜翼',
        xinxqianyi_info: "锁定技。一名角色的回合结束时，你可以选择获得至多X张本回合进入弃牌堆的牌（X为你本回合使用的非伤害牌数，至少为1且至多为3）。",
        '#ext:永夜之境/audio/xinxqianyi1': '洛水为誓，皇天为证，吾意不在刀兵。',
        '#ext:永夜之境/audio/xinxqianyi2': '以谋代战，攻形不以力，攻心不以勇。',
        '#ext:永夜之境/audio/xinxqianyi3': '率土之滨皆为王臣，辽土亦居普天之下。',
        '#ext:永夜之境/audio/xinxqianyi4': '青云远上，寒锋试刃，北雁当寄红翎。',
        xinxqianyi_tag: '潜翼',
        xinxquanbian: '权变',
        xinxquanbian_info: "限定技，其他角色的回合开始时，若你手牌中因〖潜翼〗获得的牌不小于3张，你可以执行一个额外的出牌阶段，并获得场上一张牌。本局游戏你使用“潜翼”牌指定其他角色为目标后，其弃置一张红色手牌。",
        '#ext:永夜之境/audio/xinxquanbian1': '鸿门之宴虽歇，会稽之胆尚悬，孤岂姬、项之辈。',
        '#ext:永夜之境/audio/xinxquanbian2': '昔藏青锋于沧海，今潮落，可现兵！',
        '#ext:永夜之境/audio/xinxquanbian3': '烽烟起大荒，戎军远役，问不臣者谁？',
        '#ext:永夜之境/audio/xinxquanbian4': '挥斥千军之贲，长驱万里之远。',
        xinxzengren: '赠刃',
        xinxzengren_info: `锁定技。①游戏开始时，你选择一项：1.令一名其他角色获得${get.poptip('xinxzengren_lose')}，然后你失去之；2.将${get.poptip('jinhuanren')}置入装备区。②当你失去装备区的武器牌时，若你的武器栏为空，你将一张${get.poptip('jinhuanren')}置入装备区。`,
        xinxzengren_lose: '赠刃',
        xinxzengren_lose_info: `锁定技。①游戏开始时，你将${get.poptip('jinhuanren')}置入装备区。②当你失去装备区的武器牌时，若你的武器栏为空，你将一张${get.poptip('jinhuanren')}置入装备区。`,
        '#ext:永夜之境/audio/xinxzengren1': '君携此焕刃，可解燃眉之危。',
        '#ext:永夜之境/audio/xinxzengren2': '灯火灼烁酒微映，与君同醉，此情可寄夜雨时。',
        xinxshunhua: '舜华',
        xinxshunhua_info: "每回合限一次。当有角色使用虚拟牌时，你可以选择一名其他角色，并从牌堆或弃牌堆中获得3-X张类型各不相同的牌（X为本局游戏此技能的已发动次数，至多为2），然后你选择一项：<br>1.令其执行与你同样的操作；<br>2.令其弃置一种类型的所有手牌。",
        //'#ext:永夜之境/audio/xinxshunhua1':'有女同车，颜如舜华。',
        //'#ext:永夜之境/audio/xinxshunhua2':'彼美孟姜，德音不忘。',
        '#ext:永夜之境/audio/xinxshunhua1': '我心悦君，愿为卿而死，愿为君刀俎。',
        '#ext:永夜之境/audio/xinxshunhua2': '我之私君者，爱也，君之私我者，情也。',
        xinxbaiyi: '白衣',
        xinxbaiyi_info: "出牌阶段每项限一次，你可选择一项：<br>1.将一名角色区域内的一半牌置于其武将牌上，你于其回合结束时可获得其中一张牌；<br>2.获得一名角色武将牌上的牌。",
        '#ext:永夜之境/audio/xinxbaiyi1': '该是谁的，就是谁的！',
        '#ext:永夜之境/audio/xinxbaiyi2': '来！给你看点好东西！',
        xinxtaoyin: '韬隐',
        xinxtaoyin_info: "锁定技。①当你累计失去三张♠牌时，你获得一枚“学”。你的手牌上限+X（X为你的“学”数）。②当你造成或受到伤害时，你可移去任意枚“学”（至多为5），观看牌堆顶五张牌，然后获得等量的牌。",
        '#ext:永夜之境/audio/xinxtaoyin1': '多读书，总是有好处。',
        '#ext:永夜之境/audio/xinxtaoyin2': '落后并不可怕，可怕的是甘于落后。',
        xinxpixing: '披星',
        xinxpixing_info: "准备阶段，你可以观看牌堆底X+2张牌，获得其中X张牌（X为你杀死过的角色数+1），然后将其中任意数量的牌以任意顺序置于牌堆顶，其余以任意顺序置于牌堆底。",
        '#ext:永夜之境/audio/xinxpixing1': '观今夜天象，议丞相遗志。',
        '#ext:永夜之境/audio/xinxpixing2': '知天意，逆天安不可为？',
        xinxbeifa: '北伐',
        xinxbeifa_info: "锁定技。①当你使用牌指定唯一目标或成为唯一牌的目标时，若此牌不为转化牌且对应的实体牌牌数为1且不为装备牌且此时在一名角色的出牌阶段，则你将此牌置于目标角色的武将牌上，称为“伐”。②一名角色的回合开始时，你可以依次使用其武将牌上的“伐”。",
        '#ext:永夜之境/audio/xinxbeifa1': '潜麟虽困，其志犹宏！',
        '#ext:永夜之境/audio/xinxbeifa2': '困守非良策，奋战突险围！',
        xinxlianbing: '敛兵',
        xinxlianbing_info: "每回合限一次。当你于出牌阶段外使用牌指定其他角色为唯一目标后，你可以摸一张牌并与目标角色拼点。若你赢，你获得对方的拼点牌，然后重复此流程直到其手牌数不大于你。",
        '#ext:永夜之境/audio/xinxlianbing1': '撤营百步，汝敢来追？',
        '#ext:永夜之境/audio/xinxlianbing2': '藏头露尾，可是大丈夫所为？',
        xinxbugui: '不归',
        xinxbugui_info: `觉醒技。结束阶段，若场上有“伐”的角色数大于1，你减1点体力上限，获得技能${get.poptip('xinxpixing')}。`,
        '#ext:永夜之境/audio/xinxbugui1': '臣誓讨贼，以报国恩。',
        '#ext:永夜之境/audio/xinxbugui2': '继丞相遗略，以攻代守，伺图中原。',
        xinxfeiyan: '飞燕',
        xinxfeiyan_info: "锁定技，你的判定阶段改为出牌阶段，此阶段开始时，你观看五张武将牌，将你的武将牌改为其中一名角色。此阶段结束后把武将牌替换回吕玲绮。当你因此技能变更武将牌时，你摸一张牌。",
        '#ext:永夜之境/audio/xinxfeiyan1': '可听说过飞将军大名？',
        '#ext:永夜之境/audio/xinxfeiyan2': '尝尝这个！',
        '#ext:永夜之境/audio/xinxfeiyan3': '我会保护大家。',
        '#ext:永夜之境/audio/xinxfeiyan4': '我从不后悔拿起兵刃。',
        xinxciyou_tag: '刺幽',
        xinxciyou: '刺幽',
        xinxciyou_info: "锁定技。①出牌阶段开始时，你获得一张伤害牌。结束阶段，你获得位于弃牌堆的此牌。②当你使用此牌造成伤害时，受伤角色失去1点体力，你回复1点体力并跳过下个弃牌阶段。",
        '#ext:永夜之境/audio/xinxciyou1': '这世上，最可靠的人，只有自己。',
        '#ext:永夜之境/audio/xinxciyou2': '我，不会放弃！',
        '#ext:永夜之境/audio/xinxciyou3': '可不要小看小姑娘！',
        '#ext:永夜之境/audio/xinxciyou4': '父亲的失败，我铭记在心。',
        xinxjishi: '犄势',
        xinxjishi_info: "锁定技。当一名角色不因〖犄势〗使用不为其手牌区的牌时，你视为使用一张牌名和元素相同的牌（无距离限制）。",
        '#ext:永夜之境/audio/xinxjishi1': '筹谋部划，知天机，行人事。',
        '#ext:永夜之境/audio/xinxjishi2': '兵法谙熟于胸，今乃施为之时。',
        xinxxinlue: '心略',
        xinxxinlue_info: "每回合限一次，一名角色使用牌指定你为目标时，你观看当前回合角色手牌并可以重铸其一张牌，然后你可以使用此牌（无距离限制）。",
        '#ext:永夜之境/audio/xinxxinlue1': '读兵书千卷，今到用时，可左右施为。',
        '#ext:永夜之境/audio/xinxxinlue2': '我军待时而动，以有备击不备。',
        xinxhemou: '合谋',
        xinxhemou_info: "准备阶段，你可以选择一名其他角色并展示牌堆底X张牌（X为场上存活人数，至多为5），其依次使用其中的伤害牌。若其以此法使用的牌造成过伤害，你摸X张牌，否则其失去1点体力并交给你一张♠牌。",
        '#ext:永夜之境/audio/xinxhemou1': '蜀中自成天地，士季何必俯首称臣？',
        '#ext:永夜之境/audio/xinxhemou2': '司马氏篡曹，大逆之贼也，君何不复义于天下？',
        '#ext:永夜之境/audio/xinxhemou3': '益州千里，高祖以为龙兴之地，将军亦可图之。',
        xinxweixi: '未息',
        xinxweixi_info: "锁定技。①回合开始前，你获得一张【影】，然后将至多X张牌置于牌堆底并摸等量的牌。②每回合限一次。你可以展示手牌中的【影】，视为使用一张基本牌。",
        '#ext:永夜之境/audio/xinxweixi1': '秋风卷孤灯，七星并落，愿以我身饲五丈原之烛。',
        '#ext:永夜之境/audio/xinxweixi2': '大河将竭，桃园霜落，夸父岂存畏死之心。',
        '#ext:永夜之境/audio/xinxweixi3': '光始于薪，众人皆承光之惠，我独续光之源。',
        '#ext:永夜之境/audio/xinxweixi4': '哀兵多艰，犹被甲带戈，诚非束手之时。',
        xinxquanpao_tag: '权',
        xinxquanpao: '权袍',
        xinxquanpao_info: "摸牌阶段结束时，你从游戏外创造X张【影】并置于牌堆顶（X为你的手牌上限），从牌堆或弃牌堆中获得X张牌名各不相同的牌，将其标记为“权”，然后获得位于弃牌堆/牌堆/一名角色区域内的所有“权”。",
        '#ext:永夜之境/audio/xinxquanpao1': '风水轮流转，轮到我钟某问鼎重几何了。',
        '#ext:永夜之境/audio/xinxquanpao2': '今长缨在手，欲问鼎九州。',
        '#ext:永夜之境/audio/xinxquanpao3': '空将宝地赠他人，某怎会心甘情愿？',
        '#ext:永夜之境/audio/xinxquanpao4': '心怀屠龙之术，何患手无长缨？',
        xinxqingqiang: '倾戕',
        xinxqingqiang_info: "锁定技。每回合限一次。当你成为其他角色使用牌的目标后，其展示所有手牌，若其手牌中有【影】，你无法响应此牌，且本回合结束后，你的手牌上限+1，否则其视为对一名由你指定的你与其以外的角色使用一张不计入次数的【杀】。",
        '#ext:永夜之境/audio/xinxqingqiang1': '既已功高盖主，何妨冕服加身？',
        '#ext:永夜之境/audio/xinxqingqiang2': '天下大势无常，钟某亦可为王！',
        '#ext:永夜之境/audio/xinxqingqiang3': '我若束手无策，诸位又有何施为？',
        '#ext:永夜之境/audio/xinxqingqiang4': '我既搏一世之功，亦求万世之名！',
        xinxduanwan: '断腕',
        xinxduanwan_info: '锁定技。每回合限一次。一名角色的体力值变化时，若其体力值不大于2，你可以弃置装备区所有牌，选择一项：<br>1.获得一名角色X张牌（X为其体力值，至少为1）；<br>2.令一名角色弃置所有基本牌。<br>然后你与其距离视为1直到下轮开始。',
        '#ext:永夜之境/audio/xinxduanwan1': '取成都者，必过此崖。',
        '#ext:永夜之境/audio/xinxduanwan2': '兵法之奇，莫过于险。',
        xinxjingong: '矜功',
        xinxjingong_info: "锁定技。当你受到伤害时，你展示对方一张牌，若此牌名字数不小于你的体力值，此伤害+1。",
        '#ext:永夜之境/audio/xinxjingong1': '此战功成，当列云台。',
        '#ext:永夜之境/audio/xinxjingong2': '淮北劲旅，岂是蜀人可挡。',
        xinxshanjiao: '善教',
        xinxshanjiao_info: '锁定技。一名角色使用牌时，若其手牌中没有与此牌花色相同的牌，你进行一次判定，若为红色，你摸X张牌（X为你手牌中花色数的一半，至少为1）；若为黑色，你令一名其他角色无法使用或打出与此判定牌类型相同的牌，直到本回合结束。',
        '#ext:永夜之境/audio/xinxshanjiao1': '清风透碧，彩线轻缠。',
        '#ext:永夜之境/audio/xinxshanjiao2': '书香彩慧，香囊幽沁。',
        xinxhuiyan: '蕙言',
        xinxhuiyan_info: "其他角色/你的判定牌生效后，若你手牌中有与此牌花色/颜色相同的牌，你可以使用此判定牌。",
        '#ext:永夜之境/audio/xinxhuiyan1': '婵媛优姿，美好之时。',
        '#ext:永夜之境/audio/xinxhuiyan2': '端清才德，仙媛捧瓣。',
        '#ext:永夜之境/audio/xinxhuiyan3': '袭龟筮之良辰，启幽房之潜邃。',
        '#ext:永夜之境/audio/xinxhuiyan4': '整武驾之隆牡，结龙辀之缟驷。',
        xinxzhenying: '砧影',
        xinxzhenying_info: "隐匿技。你于其他角色的回合登场时，你可对当前回合的角色造成1点伤害。若如此做，你下次受到来自其造成的伤害时，其摸两张牌。",
        '#ext:永夜之境/audio/xinxzhenying1': '佳燕并头语，不恋雕梁而归于万里。',
        '#ext:永夜之境/audio/xinxzhenying2': '灵禽非醴泉不饮，非积善之家不栖。',
        xinxzhebian: '蛰变',
        xinxzhebian_info: "锁定技。回合结束时，你进入隐匿状态。当你的武将牌状态变化时，你可以对一名角色造成1点伤害，然后其摸一张牌。",
        '#ext:永夜之境/audio/xinxzhebian1': '大智若愚，女子之锦绣常隐于华服。',
        '#ext:永夜之境/audio/xinxzhebian2': '知者不惑，心有明镜以照人。',
        '#ext:永夜之境/audio/xinxzhebian3': '若与君之情可绝，此间天地又何存焉？',
        '#ext:永夜之境/audio/xinxzhebian4': '昔年之颜可化为泥，唯与君之情不可逝。',
        '#ext:永夜之境/audio/xinxzhebian5': '此身着无当硬铠，唯一软肋即恋君之心。',
        xinxxuanxiao: '旋枭',
        xinxxuanxiao_info: "出牌阶段限一次。你可以与一名其他角色议事。若你与其意见：相同，你将势力变更为与其相同，从牌堆获得一张坐骑牌；不同，你从牌堆获得一张【杀】，本回合你对其使用牌无次数和距离限制，其无法响应你的牌。",
        '#ext:永夜之境/audio/xinxxuanxiao1': '天予不取，反受其咎。时至不行，反受其殃。',
        '#ext:永夜之境/audio/xinxxuanxiao2': '人不为己，天诛地灭。',
        xinxbenhuai: '崩坏',
        xinxshiji: '弑戟',
        xinxshiji_info: "每回合限一次。当你造成伤害时，你可以弃置场上一张牌。若被弃置牌的角色与你势力相同，此伤害+1;若因此弃置的牌为装备牌，你获得〖无双〗直到本回合结束。",
        '#ext:永夜之境/audio/xinxshiji1': '蚍蜉撼树，不自量力。',
        '#ext:永夜之境/audio/xinxshiji2': '让你见识一下，什么才是天下无双。',
        xinxwushuang: '无双',
        xinxwushuang_info: "锁定技。每回合限一次。你的回合内，当有角色进入濒死状态时，你加1点体力上限并回复1点体力，并可弃置相邻角色的一张牌。",
        '#ext:永夜之境/audio/xinxwushuang1': '汝等纵有万军，也难挡我吕布一人。',
        '#ext:永夜之境/audio/xinxwushuang2': '斩你何须费力，区区小卒弹指可灭。',
        xinxjiaojue: '狡谲',
        xinxjiaojue_info: "锁定技。当你使用黑色牌指定其他角色为唯一目标后，你选择一项：<br>1.你摸[1]张牌；<br>2.你重铸[1]张牌；<br>3.你弃置目标角色[1]张牌。<br>然后你将所选选项[ ]中的数值-1，其余选项[ ]中的数值+1（每项数值至多为3）。",
        '#ext:永夜之境/audio/xinxjiaojue1': '巾帼若动起心思，哪还有男人什么事？',
        '#ext:永夜之境/audio/xinxjiaojue2': '没想到本将军还有这一招吧？',
        '#ext:永夜之境/audio/xinxjiaojue3': '巾帼之师不鸣则已，鸣则一鸣惊人。',
        '#ext:永夜之境/audio/xinxjiaojue4': '这纵横捭阖之道，岂能专属你等男儿？',
        xinxfengyao: '凤瑶',
        xinxfengyao_info: "锁定技。准备阶段或当你造成伤害/结束阶段或当你受到伤害时，你令下个摸牌阶段的摸牌数、攻击范围/出杀次数、体力上限+1。",
        '#ext:永夜之境/audio/xinxfengyao1': '尔等看好了，我便是凤瑶军统帅！',
        '#ext:永夜之境/audio/xinxfengyao2': '青丝为刀剑，弑尽敌血点绛唇！',
        '#ext:永夜之境/audio/xinxfengyao3': '不挨几鞭子，你还出不了力了？',
        '#ext:永夜之境/audio/xinxfengyao4': '给我向前冲，把敌人杀光！',
        '#ext:永夜之境/audio/xinxfengyao5': '凤瑶名震四方之日，便是尔等这膝裙下之时！',
        xinxyingqi: '影骑',
        xinxyingqi_info: "每轮开始时，你令一名其他角色跳过其下回合的一个阶段（不能与选择过的阶段相同），然后你执行一个相同的额外阶段。若如此做，其下个回合结束后，你执行一个没有摸牌阶段的额外回合。",
        '#ext:永夜之境/audio/xinxyingqi1': '无胆匹夫，汝欲着红装做女儿姿态乎？',
        '#ext:永夜之境/audio/xinxyingqi2': '尔等免战龟缩，何不剃发去髯，谋常侍之职？',
        xinxyanhui: '雁徊',
        xinxyanhui_info: "锁定技。出牌阶段开始时，你可以重铸至多两张牌。若这些牌的牌名均不相同，你可以使用其中任意张牌。",
        '#ext:永夜之境/audio/xinxyanhui1': '为将广智，观象知理，料敌于未动之时。',
        '#ext:永夜之境/audio/xinxyanhui2': '将者见微知著，一法通而万法破。',
        '#ext:永夜之境/audio/xinxyanhui3': '劲风折竹，春风起时竹复生。',
        '#ext:永夜之境/audio/xinxyanhui4': '歧路多艰，何妨一往无前。',
        xinxduanzhi: '断织',
        xinxduanzhi_info: "其他角色的结束阶段，你可以令一名角色使用当前回合角色本回合使用的且进入弃牌堆的牌（至多使用2张），然后其选择获得剩余的一张牌。",
        '#ext:永夜之境/audio/xinxduanzhi1': '春庭落花坠，遇卿心弦动。',
        '#ext:永夜之境/audio/xinxduanzhi2': '桃夭芳菲浓，浅池双影照。',
        '#ext:永夜之境/audio/xinxduanzhi3': '佩玖清响，见君羞颜。',
        '#ext:永夜之境/audio/xinxduanzhi4': '玉佩琼琚挂桃李，兰溪粉蝶翻花枝。',
        xinxjinshu: '锦书',
        xinxjinshu_info: `锁定技。当你受到伤害后，你获得“念”。结束阶段，你可以移去“念”并发动${get.poptip('xinxduanzhi')}。`,
        '#ext:永夜之境/audio/xinxjinshu1': '赠君摇佩，佑君安好。',
        '#ext:永夜之境/audio/xinxjinshu2': '共护边关，蜀汉可安。',
        xinxqueyi: '阙弈',
        xinxqueyi_info: "锁定技。当你成为其他角色使用实体牌的目标时，你将此牌扣置于武将牌上并与其各摸一张牌。若其本回合因此获得的牌数大于2，你观看其手牌，获得其一张牌。",
        xinxshexin: '摄衅',
        xinxshexin_info: "判定阶段开始时，你可以展示武将牌上任意张牌，然后令一名其他角色选择一项：<br>1.将展示的牌置入牌堆，然后交给你所有手牌；<br>2.令你弃置其等量张牌，并使用展示的牌。<br>执行完毕后，你将未展示的牌置入弃牌堆。",
        xinxjinmian: '晋冕',
        xinxjinmian_info: `出牌阶段开始时，若你本回合使用的牌数大于体力值或造成过伤害，你变更势力为晋，获得技能${get.poptip('xinxsukan')}和${get.poptip('xinxbingjun')}直到回合结束。`,
        xinxsukan: '肃戡',
        xinxsukan_info: "出牌阶段限一次。你可选择一名其他角色：当你本回合使用牌指定其为目标时，你进行一次判定，<br>若为红色，你选择一项效果直到回合结束：<br>1.获得其武将牌上的一个技能；<br>2.从三张魏或晋势力武将牌中获得一个技能。<br>若为黑色，其受到1点无来源的雷电伤害。",
        xinxbingjun: '秉钧',
        xinxbingjun_info: "你的回合内，当有角色死亡后，你摸两张牌，并令〖肃戡〗视为未发动过。",
        xinxzhiyi: '知懿',
        xinxzhiyi_info: "游戏开始时，你摸两张牌。当你失去牌时，若你的手牌区没有因本技能获得的牌，你摸两张牌。",
        '#ext:永夜之境/audio/xinxzhiyi1': '书中学问万千，女子可为博士。',
        '#ext:永夜之境/audio/xinxzhiyi2': '女子不可无德，亦不可无才。',
        xinxzhiyi_tag: '知懿',
        xinxshenai: '蜃霭',
        xinxshenai_info: "转换技。当你受到伤害后，你须：阳，重铸一张牌；阴，交给一名其他角色一张牌，然后你获得其一张牌。",
        '#ext:永夜之境/audio/xinxshenai1': '秋菊容曜，春松华茂，四时之灵也。',
        '#ext:永夜之境/audio/xinxshenai2': '皎若金乌之霞，灿若芙蕖之渌。',
        '#ext:永夜之境/audio/xinxshenai3': '一帘诗意千寻瀑，今夕人间四月天。',
        '#ext:永夜之境/audio/xinxshenai4': '野陌离人空自守，杏雨梧桐晚箫声。',
        xinxxishuo: '西槊',
        xinxxishuo_info: `准备阶段，你可以重铸所有非伤害手牌，令所有角色选择是否将手牌中的一张【杀】置于牌堆顶，然后你视为使用一张${get.poptip('qianjungongjin')}（不可被【无懈可击】响应）。`,
        '#ext:永夜之境/audio/xinxxishuo1': '挥剑断浮云，诸君共西向！',
        '#ext:永夜之境/audio/xinxxishuo2': '西望故都，何忍君父辱于匹夫之手！',
        xinxxishuo_re: '西槊·改',
        xinxxishuo_re_info: `准备阶段，你可以将所有非伤害手牌置于武将牌上，称为“青州”，令所有角色选择是否将手牌中的一张【杀】置于牌堆顶，然后你视为使用一张${get.poptip('qianjungongjin')}（不可被【无懈可击】响应）。`,
        xinxhaopo: '蒿魄',
        xinxhaopo_info: `觉醒技。当你体力值变为1或更低时，你令一名其他角色将手牌摸至体力上限，然后你将体力回复至1点，修改${get.poptip('xinxxishuo')}并获得${get.poptip('xinxjuyan')}。`,
        '#ext:永夜之境/audio/xinxhaopo1': '奈何力不齐，踌躇而雁行。',
        '#ext:永夜之境/audio/xinxhaopo2': '生民百遗一，念之断人肠。',
        xinxjuyan: '踞兖',
        xinxjuyan_info: "每回合限一次。当你使用【杀】指定其他角色为目标后，你令其将两张非伤害牌置于你的武将牌上，称为“青州”。结束阶段或当你进入濒死状态时，你可以选择获得武将牌上的至多X张牌（X为你的体力上限）。",
        '#ext:永夜之境/audio/xinxjuyan1': '虎踞青兖，欲补薄暮苍天。',
        '#ext:永夜之境/audio/xinxjuyan2': '欲止戈，必先执戈！',
        xinxqianjun_card: '千军',
        xinxqianjun_eff: '千军',
        xinxqiansi_tag: 'invisible',
        xinxqiansi: '潜嗣',
        xinxqiansi_info: "每轮开始时，你可以观看一名其他角色的手牌，将其中一张牌标记为“嗣”，其他角色使用“嗣”指定唯一目标时，你可以将此牌目标转移给一名角色，并清除此牌对应的“嗣”记录。一名角色的回合结束后，你获得位于弃牌堆中的“嗣”并清除此牌记录。",
        xinxxiaoling: '枭翎',
        xinxxiaoling_info: "锁定技。当你需要使用或打出【杀】或【闪】时，你可以获得场上一张牌，视为使用或打出之。若此牌不为防具牌或当你造成伤害后，此技能本回合失效；若为防具牌，你下次受到的伤害+1。",
        xinxyuanyan: '渊偃',
        xinxyuanyan_info: "锁定技。一张牌结算后，若你为此牌的使用者或目标，且你因此造成或受到伤害，你可以使用一张本回合进入弃牌堆的牌。若此牌为基本牌或普通锦囊牌，你将其置于武将牌上，称为“渊”，然后对方获得两张【影】。",
        '#ext:永夜之境/audio/xinxyuanyan1': '横眉养红莲，此花开时，诸侯尽膝行！',
        '#ext:永夜之境/audio/xinxyuanyan2': '俯首效淮阴，圯下取履，吾不得拜天子？',
        '#ext:永夜之境/audio/xinxyuanyan3': '袖中藏莫邪，志高位卑，犹思屠犬豕。',
        '#ext:永夜之境/audio/xinxyuanyan4': '膝下生金，身不屈，以何掘？',
        xinxchengshu: '承枢',
        xinxchengshu_info: "锁定技。其他角色失去【影】后，你摸一张牌并可用任意张手牌替换等量的“渊”，然后你可以使用一张“渊”（无距离限制），若此时你的“渊”颜色均相同，你摸一张牌。",
        '#ext:永夜之境/audio/xinxchengshu1': '金杯共君饮，极目江山，天下士在我！',
        '#ext:永夜之境/audio/xinxchengshu2': '受天命永昌，此时身立，此生不再屈！',
        '#ext:永夜之境/audio/xinxchengshu3': '乾坤得正，手摘十万星辰，不妨高声语。',
        '#ext:永夜之境/audio/xinxchengshu4': '掌中舞干将，再祭红刹三千，将相皆作古。',
        xinxlongxiang: '龙骧',
        xinxlongxiang_info: "锁定技。当你失去最后的手牌时，你摸一张牌，然后声明一种基本牌或普通锦囊牌，从牌堆或弃牌堆中获得此牌并移除此牌名。若所有基本牌均被移除，你视为使用一张基本牌。",
        '#ext:永夜之境/audio/xinxlongxiang1': '龙鳞佑我，无伤分毫!',
        '#ext:永夜之境/audio/xinxlongxiang2': '凭此八门金锁，何以阻我？',
        '#ext:永夜之境/audio/xinxlongxiang3': '八方风雨，天涯何归。',
        '#ext:永夜之境/audio/xinxlongxiang4': '滴水不漏，稳若泰山。',
        xinxcangnuo: '沧诺',
        xinxcangnuo_info: "当你于回合外成为伤害牌的目标后，你可以将至多X张牌当作无距离限制的【杀】使用（X为本回合此技能的触发次数），此【杀】结算后，你弃置目标角色对应实体牌数张牌。",
        '#ext:永夜之境/audio/xinxcangnuo1': '待敌须有略，孤勇岂可为？',
        '#ext:永夜之境/audio/xinxcangnuo2': '天崩可寻路，海角誓相随！',
        '#ext:永夜之境/audio/xinxcangnuo3': '银枪所至，前夫不敌！',
        '#ext:永夜之境/audio/xinxcangnuo4': '抽身而退，万军难挡！',
        xinxlujing: '掳京',
        xinxlujing_info: "每回合限一次。当你使用牌指定其他角色为目标后，你可以选择其中一个目标，直到你下回合开始，当其获得牌/回复体力时，你获得其中一半的牌（向下取整）/改为你增加等量体力上限。",
        xinxzisui: '恣睢',
        xinxzisui_info: "锁定技。结束阶段，你选择一名其他角色并选择一项：<br>1.令其摸X张牌；<br>2.令其回复X点体力；<br>3.令其将X张手牌当【决斗】对你使用，否则你与其各失去1点体力。<br>然后你移除此选项。当所有选项移除后，你减4点体力上限（X为场上牌数）。",
        xinxqiyi: '契翊',
        xinxqiyi_info: `准备阶段，你可以与一名其他角色${get.poptip('xinx_gongxiang')}直到你下回合开始。回合结束时，你摸X张牌，然后可以令其摸X张牌（X为其本回合失去的牌数）。`,
        '#ext:永夜之境/audio/xinxqiyi1': '既遇知己之明主，当福祸共之，荣辱共之。',
        '#ext:永夜之境/audio/xinxqiyi2': '年少立志三千里，会当击水，屈指问东风！',
        '#ext:永夜之境/audio/xinxqiyi3': '君子行陌路，振翅破樊笼，何妨天涯万里！',
        xinxfanjian_tag: 'invisible',
        xinxfanjian: '反间',
        xinxfanjian_info: "出牌阶段开始时，你选择一张手牌，然后从牌堆中记录一张与此牌花色相同的牌。当有角色使用你记录的牌时，你可以对一名其他角色A造成1点火焰伤害，此牌结算后，若A未响应此牌，则A不能使用或打出非手牌区的牌直到其下回合开始。",
        '#ext:永夜之境/audio/xinxfanjian1': '若生铸剑为犁之心，须有纵钺止戈之力。',
        '#ext:永夜之境/audio/xinxfanjian2': '将者，贵在知敌虚实，而后避实而击虚。',
        '#ext:永夜之境/audio/xinxfanjian3': '红莲生碧波，水火相融之际、吴钩刈将之时！',
        '#ext:永夜之境/audio/xinxfanjian4': '千帆载丹鼎，万军为薪，一焚可引振翼之金乌！',
        xinxjinjie: '劲节',
        xinxjinjie_info: "锁定技。一名其他角色不因摸牌而获得牌时，你可将一张牌当本轮使用过的非装备牌对其使用。",
        xinxyunjue: '韫决',
        xinxyunjue_info: `锁定技。①你无法响应其他角色使用的牌。②其他角色A对你使用牌时，你可以选择一名不为A的角色的一张牌并令A获得之，然后你摸一张牌。若此效果的发动次数大于3次，你修改本技能。`,
        xinxyunjue_re: '韫决·改',
        xinxyunjue_re_info: "锁定技。其他角色A对你使用牌时，你可以选择一名角色的一张牌，若此牌为装备牌，则你获得之，否则A获得之。然后你摸一张牌，并可以将一张牌当作一张本轮未使用过的基本牌或普通锦囊牌使用。",
        xinxjieshuo: '截槊',
        xinxjieshuo_info: "锁定技。每回合限一次。当你成为其他角色使用伤害牌的目标后，你选择其非手牌区的4-X张牌，否则改为观看牌堆顶4-X张牌，选择其中任意张牌，然后你将之当作一张名字数与选择牌数相同的基本牌或普通锦囊牌使用（无距离限制）。若你选择了牌堆顶的牌，你获得剩余与使用牌名字数不同的牌（X为此技能本轮的发动次数）。",
        xinxhuolu: '镬戮',
        xinxhuolu_info: "锁定技。①其他角色使用伤害牌结算后，若其区域的牌数于结算过程发生过变化，你将此牌置于你的武将牌上，称为“镬”。②当你使用伤害牌结算后，若此牌未造成伤害，你可以选择一项：1.使用武将牌上的一张牌；2.弃置武将牌上的任意张牌，然后摸等量的牌。",
        xinxkejing: '恪旌',
        xinxkejing_info: "每轮开始时，你记录一名角色A直到下轮开始。其他角色的出牌阶段结束后，若A本回合未受到伤害，当前回合角色需交给你两张牌，然后你交给其等量的牌，若这些牌中有伤害牌，你将其中的伤害牌交给A，令A对其使用手牌中所有的非装备牌。若A未使用牌，你视为对A使用一张伤害牌。",
        xinxjuyi: '举义',
        xinxjuyi_info: `觉醒技。一名角色的回合开始前，若〖恪旌〗记录的角色于本局游戏造成的伤害值不小于存活人数，你获得技能${get.poptip('xinxgushu')}。`,
        xinxgushu: '孤戍',
        xinxgushu_info: "锁定技。①每回合限一次，当你受到或造成来自牌的伤害后，你将体力上限调整为此牌点数，然后摸X张牌（X为你因此变化的体力上限）。②结束阶段，若你本回合的体力上限发生过变化，你减1点体力上限。",
        xinxchanyi: '蝉翼',
        xinxchanyi_info: "一名角色的出牌阶段限一次。其可以交给你一张牌（若其为你改为重铸一张牌），并与你各摸一张牌，然后你可以令其选择获得一个额外装备栏。若其因此获得了3个装备栏，改为其回复1点体力，否则增加1点体力上限。",
        xinxzejuan: '泽眷',
        xinxzejuan_info: "锁定技。",
        xinxsanshi: '散士',
        xinxsanshi_info: "当你不因使用而失去牌后，你将其移出游戏。否则你可以获得一张已移出游戏的牌。",
        xinxsanshi_tag: '死士',
        xinxchenlue: '沉略',
        xinxchenlue_info: "每轮开始时，你可以选择一名其他角色，你/其同时重铸/弃置一种类型的所有牌，若这些牌类型相同，你与其依次对彼此使用一张牌并重复之，未使用牌的角色受到对方造成的1点伤害并结束此流程。",






    },
    //动态翻译
    dynamicTranslate: {
        xing_ningshuang(player) {
            const storage = player.storage.xing_ningshuang;
            let str = '转换技，一名角色的回合结束时，若你本回合使用过基本牌，则你可以：';
            if (!storage) str += '<span class="bluetext">';
            str += '阳，观看一名角色的手牌并获得其区域一张牌，将其随机一张非“星落”手牌标记为“星落”；';
            if (!storage) str += '</span>';
            if (storage) str += '<span class="bluetext">';
            str += `阴，令${get.poptip('xinx_ewaidepai')}+1且获得〖铸魄〗直到再次发动此技能。`;
            if (storage) str += '</span>';
            return str;
        },
        xinxshenai(player) {
            const storage = player.storage.xinxshenai;
            let str = '转换技，当你受到伤害后，你须：';
            if (!storage) str += '<span class="bluetext">';
            str += '阳，重铸一张牌；';
            if (!storage) str += '</span>';
            if (storage) str += '<span class="bluetext">';
            str += '阴，交给一名其他角色一张牌，然后你获得其一张牌。';
            if (storage) str += '</span>';
            return str;
        },
        xinxpanzhi(player) {
            if (player.storage.xinxfuhan) return "锁定技。准备阶段，你观看牌堆顶3张牌，使用其中任意张牌，然后你获得剩余的牌。";
            return "锁定技。准备阶段，你观看牌堆顶X张牌（X为你的体力值且至多为5），使用其中任意张牌，然后你获得剩余的牌并失去1点体力。";
        },
        xinxxishuo(player) {
            if (player.storage.xinxhaopo) return `准备阶段，你可以将所有非伤害手牌置于武将牌上，称为“青州”，并摸两张牌，令所有角色选择是否将手牌中的一张【杀】置于牌堆顶，然后你视为使用一张${get.poptip('qianjungongjin')}（不可被【无懈可击】响应）。`;
            return `准备阶段，你可以重铸所有非伤害手牌，令所有角色选择是否将手牌中的一张【杀】置于牌堆顶，然后你视为使用一张${get.poptip('qianjungongjin')}（不可被【无懈可击】响应）。`;
        },
        xinxyunjue(player) {
            if (player.storage.xinxyunjue_count >= 3) return "锁定技。其他角色A对你使用牌时，你可以选择一名角色的一张牌，若此牌为装备牌，则你获得之，否则令A获得之。然后你摸一张牌，并可以将一张牌当作一张本轮未使用过的基本牌或普通锦囊牌使用。";
            return "锁定技。①你无法响应其他角色使用的牌。②其他角色A对你使用牌时，你可以选择一名不为A的角色一张牌并令A获得之，然后你摸一张牌。若此效果的发动次数大于3次，你修改〖韫决〗。";
        },
        xinxjiaojue(player, skill) {
            let storage = player.storage[skill];
            let str = lib.translate[skill + "_info"];
            if (!storage) return str;
            let regex = /\[\d+\]/g;
            let index = 0;
            let result = str.replace(regex, (match, offset, string) => {
                if (index < storage.length - 1) {
                    const resultx = `[${storage[index]}]`;
                    index++;
                    return resultx;
                }
                return match;
            });
            if (storage[3]) {
                result = result.replace("").replace("");
            }
            return result;
        },

        xinxfengyao(player) {
            const storage = player.storage.xinxfengyao;
            const str = lib.translate.xinxfengyao_info;
            if (!storage) return str;
            const regex = /\[\d+\]/g;
            let match,
                result = str,
                index = 0;
            while ((match = regex.exec(str)) !== null) {
                if (index < storage.length) {
                    result = result.replace(match[0], `[${storage[index]}]`);
                }
                index++;
            }
            return result;
        },
        xinxzisui: function (player) {
            let str = [
                "锁定技。结束阶段，你选择一名其他角色并选择一项：",
                "1.令其摸X张牌；",
                "2.令其回复X点体力；",
                "3.令其将X张手牌当【决斗】对你使用，否则你与其各失去1点体力。",
                "然后你移除此选项。当所有选项移除后，你减4点体力上限（X为场上牌数）。"
            ]
            let stroage = player.getStorage("xinxzisui");
            if (stroage.includes("摸牌")) str[1] = `<s>${str[1]}</s>`;
            if (stroage.includes("回复")) str[2] = `<s>${str[2]}</s>`;
            if (stroage.includes("决斗")) str[3] = `<s>${str[3]}</s>`;
            return str.join('<br>')

        },
        xinxbaiyi: function (player) {
            let str = [
                "出牌阶段每项限一次，你可选择一项：",
                "1.将一名角色区域内的一半牌置于其武将牌上，你于其回合结束时可获得其中一张牌；",
                "2.获得一名角色武将牌上的牌。",
            ]
            let stroage = player.getStorage("xinxbaiyi_used");
            if (stroage.includes("draw")) str[1] = `<s>${str[1]}</s>`;
            if (stroage.includes("gain")) str[2] = `<s>${str[2]}</s>`;
            return str.join('<br>')

        },
    },
    //武将介绍
    characterIntro: {

    },
    //武将替换
    characterReplace: {
        xinx_jiangwei: ['xinx_jiangwei', 'xinshu_jiangwei', 'xinxying_jiangwei'],
        xinx_zhonghui: ['xinx_zhonghui', 'xinxying_zhonghui'],
        xinx_simayi: ['xinx_simayi', 'xinxying_simayi'],
        xinx_simashi: ['xinx_simashi', 'xinxyin_simashi'],
        xinx_zhangliao: ['xinx_zhangliao', 'xinwei_zhangliao', 'xinxzhu_zhangliao'],
        xinx_zhugeliang: ['xinx_zhugeliang', 'xinxshu_zhugeliang'],
        xinx_caocao: ['xinx_caocao', 'xinxzhu_caocao'],
        xinx_zhaoyun: ['xinx_zhaoyun', 'xinxzhu_zhaoyun'],


    },
    characterFilter: {//本体禁将

    },
    characterSubstitute: {//皮肤切换

        xinx_zhaoxiang: [
            ['xinx_zhaoxiang_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_zhaoxiang_shadow.png']],
        ],
        xinx_diaochan: [
            ['xinx_diaochan_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_diaochan_shadow.png']],
        ],
        xinx_zhonghui: [
            ['xinx_zhonghui_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_zhonghui_shadow.png']],
        ],
        xinx_jiangwei: [
            ['xinx_jiangwei_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_jiangwei_shadow.png']],
        ],
        xinx_simayi: [
            ['xinx_simayi_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_simayi_shadow.png']],
        ],
        xinx_simazhao: [
            ['xinx_simazhao_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_simazhao_shadow.png']],
        ],
        xinxzhu_caocao: [
            ['xinxzhu_caocao_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinxzhu_caocao_shadow.png']],
            //['xinxzhu_caocao_shadow',['ext:永夜之境/image/'+karimcop+'/xinxzhu_caocao_shadow.png']],
        ],
        xinx_caoxian: [
            ['xinx_caoxian_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_caoxian_shadow.png']],
        ],
        xinx_moqiongshu: [
            ['xinx_moqiongshu_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_moqiongshu_shadow.png']],
        ],
    },
    //武将姓名
    pinyins: {

    },
    //武将称号
    characterTitle: {
        xinxqun_jiaxu: '<font color=#d2b4de>线下★贾诩改</font>',
        xinxying_jiangwei: '<font color=#bb8fce>困麟求生</font>',

    },
    //珠联璧合
    perfectPair: {

    },
    //衍生卡牌，编写时记得在卡牌里加上derivation
    card: {

    },
    //技能，包括卡牌技能啊，武将技能啊，都在这里写了
    skill: {
        jinhuanren: {
            trigger: {
                global: "roundStart",
            },
            forced: true,
            priority: 100,
            popup: false,
            async content(event, trigger, player) {
                const card = new lib.element.VCard({
                    name: "sha",
                });
                const result = await player
                    .chooseUseTarget(`###${get.prompt("jinhuanren")}###视为使用一张无距离限制的【杀】`, card, false, "nodistance", true)
                    .set("logSkill", "jinhuanren")
                    .forResult();
                // if (result.bool) logged = true;
            }

        },
        xinxzengren: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "phaseBefore",
                player: "enterGame",
            },
            filter: function (event, player) {
                return (
                    (event.name != "phase" || game.phaseNumber == 0) &&
                    game.hasPlayer(current => {
                        return !current.hasSkill("xinxzengren");
                    })
                );
            },
            popup: false,
            forced: true,
            priority: 1000,
            content: function () {
                "step 0";
                player
                    .chooseTarget(get.prompt("xinxzengren"), "失去〖赠刃〗并令一名其他角色获得此技能", (card, player, target) => {
                        return !target.hasSkill("xinxzengren_lose");
                    })
                    .set("ai", target => get.attitude(player, target) - 2);
                "step 1";
                if (result.bool) {
                    var target = result.targets[0];
                    player.logSkill("xinxzengren", target);
                    target.addSkills("xinxzengren_lose");
                    target.addSkills("xinxzengren_give");
                    player.removeSkills("xinxzengren");
                    if (target != player) player.addExpose(0.25);
                }
            },
            group: ['xinxzengren_lose', 'xinxzengren_give'],
            subSkill: {
                lose: {
                    audio: "ext:永夜之境/audio:2",
                    trigger: {

                        player: ["loseAfter"],
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    filter(event, player) {
                        const evt = event.getl(player);
                        return evt && (evt.es.length && evt.cards2.some(i => get.subtype(i) == "equip1"));
                    },

                    forced: true,

                    async content(event, trigger, player) {
                        if (player.getEquip(1)) return false;

                        const card = get.cardPile("jinhuanren", "field") || game.createCard2("jinhuanren", "heart", 7);
                        if (get.owner(card)) get.owner(card).$give(card, player, false);
                        else {
                            player.$gain2(card, false);
                            await game.delayx();
                        }
                        player.equip(card);
                    },
                    sub: true,
                    sourceSkill: "xinxzengren",
                    "_priority": 0,
                },
                give: {

                    audio: "ext:永夜之境/audio:2",

                    trigger: {
                        global: "roundStart",
                    },
                    filter: function (event, player, name) {
                        return game.roundNumber < 2;
                    },
                    priority: 1000,
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        if (player.getEquip(1)) return false;
                        const card = get.cardPile("jinhuanren", "field") || game.createCard2("jinhuanren", "heart", 7);
                        if (get.owner(card)) get.owner(card).$give(card, player, false);
                        else {
                            player.$gain2(card, false);
                            await game.delayx();
                        }
                        player.equip(card);

                    }
                }
            }
        },




        //曹宪
        xing_sizhu: {
            audio: "ext:永夜之境/audio:2",
            audioname: ["xinx_caoxian_shadow"],
            trigger: { player: ['useCardAfter', 'respondAfter'] },
            locked: true,
            unique: true,
            init(player) {
                player.storage.xing_sizhu_used_lengths = [];
            },
            onremove(player) {
                delete player.storage.xing_sizhu_used_lengths;
            },
            filter(event, player) {
                if (event.getParent(2).name === 'xing_sizhu_cost') return false;

                const currentCardNameLength = get.cardNameLength(event.card);

                // Check if this card name length has already been used this turn for xing_sizhu
                if (player.storage.xing_sizhu_used_lengths.includes(currentCardNameLength)) {
                    return false; // Already used this length this turn
                }

                return get.inpileVCardList(info => {
                    const name = info[2];
                    if (get.cardNameLength(event.card) !== get.cardNameLength(name)) return false;
                    return ['basic', 'trick'].includes(get.type(name));
                }).some(info => player.hasUseTarget(new lib.element.VCard({ name: info[2], nature: info[3] }), false));
            },
            async cost(event, trigger, player) {

                const currentCardNameLength = get.cardNameLength(trigger.card);
                if (!player.storage.xing_sizhu_used_lengths.includes(currentCardNameLength)) {
                    player.storage.xing_sizhu_used_lengths.push(currentCardNameLength);
                }


                const list = get.inpileVCardList(info => {
                    const name = info[2];
                    if (get.cardNameLength(trigger.card) !== get.cardNameLength(name)) return false;
                    return ['basic', 'trick'].includes(get.type(name));
                }).filter(info => player.hasUseTarget(new lib.element.VCard({ name: info[2], nature: info[3] }), false));
                const choice = list.length > 1 ? await player.chooseButton([
                    '###思助###<div class="text center">视为使用一张牌名字数为' + get.cardNameLength(trigger.card) + '的牌</div>',
                    [list, 'vcard'],
                ], true).set('ai', button => {
                    const player = get.player();
                    return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                }).forResult() : { bool: true, links: list };
                if (choice?.bool && choice.links?.length) {
                    const card = new lib.element.VCard({ name: choice.links[0][2], nature: choice.links[0][3] });
                    event.result = await player.chooseUseTarget(card, true, false, 'nodistance').set('prompt', '思助：请选择' + get.translation(card) + '的目标').set('logSkill', 'xing_sizhu').forResult();
                }

                // if (event.result.bool) {
                //     const currentCardNameLength = get.cardNameLength(trigger.card);
                //     if (!player.storage.xing_sizhu_used_lengths.includes(currentCardNameLength)) {
                //         player.storage.xing_sizhu_used_lengths.push(currentCardNameLength);
                //     }
                // }

                else event.result = { bool: false };

                player.when({ global: "phaseEnd" }).step(async () => {
                    player.storage.xing_sizhu_used_lengths = [];
                });

            },
            popup: false,
            async content(event, trigger, player) {
                const cards = trigger.cards.filterInD('ode');
                if (cards.length) {
                    const result = await player.chooseTarget('思助：是否令一名其他角色获得' + get.translation(cards) + '？', lib.filter.notMe).set('ai', target => {
                        const player = get.player(), cards = get.event().getTrigger().cards.filterInD('ode');
                        return cards.reduce((sum, card) => sum + get.value(card, target) * get.attitude(player, target), 0);
                    }).forResult();
                    if (result?.bool && result.targets?.length) {
                        const [target] = result.targets;
                        player.line(target);
                        await target.gain(cards, 'gain2');
                    }
                }
            },
            mark: true,
            marktext: '思',
            intro: {
                content(storage, player) {
                    if (player.storage.xing_sizhu_used_lengths && player.storage.xing_sizhu_used_lengths.length) {
                        return '本回合已通过思助记录的牌字数：' + player.storage.xing_sizhu_used_lengths.join('字、') + '字';
                    }
                    return '本回合尚未通过思助记录牌字数';
                },
            },
        },
        xing_mengran: {
            audio: "ext:永夜之境/audio:2",
            audioname: ["xinx_caoxian_shadow"],
            locked: true,
            enable: ["chooseToUse", "chooseToRespond"],
            filter(event, player) {
                if (event.type === "wuxie") return false;
                return get
                    .inpileVCardList(info => get.type(info[2]) == "basic")
                    .some(card => {
                        return event.filterCard({ name: card[2], nature: card[3] }, player, event);
                    });
            },
            //usable: 1,
            round: 1,
            chooseButton: {
                dialog: function (event, player) {
                    //只剩一个牌名时直接跳过选择
                    /* var list = [];
                    for (var name of lib.inpile) {
                        if (name == "sha") {
                            if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", "sha"]);
                            for (var nature of lib.inpile_nature) {
                                if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) list.push(["基本", "", "sha", nature]);
                            }
                        } else if (get.type(name) == "basic" && event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", name]);
                        //else if (get.type(name) == "trick" && event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["锦囊", "", name]);
                    }
                    var dialog = ui.create.dialog("梦染", [list, "vcard"]);
                    dialog.direct = true;
                    return dialog; */
                    const list = get
                        .inpileVCardList(info => get.type(info[2]) == "basic")
                        .filter(card => {
                            return event.filterCard({ name: card[2], nature: card[3] }, player, event);
                        });
                    return ui.create.dialog("梦染", [list, "vcard"], "hidden");
                },
                check(button) {
                    const event = get.event().getParent();
                    if (event.type !== "phase") {
                        return 1;
                    }
                    return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
                },
                prompt(links) {
                    return "视为使用" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]);
                },
                backup(links, player) {
                    return {
                        selectCard: -1,
                        filterCard: () => false,
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],
                            isCard: true,
                        },
                        log: false,
                        precontent() {
                            player.logSkill("xing_mengran");
                            player.storage['xing_mengran'] = !player.storage['xing_mengran'];
                            player.changeSkin({ characterName: "xinx_caoxian" }, "xinx_caoxian" + (player.storage['xing_mengran'] ? "_shadow" : ""));
                        },
                    };
                },
            },
            hiddenCard(player, name) {
                if (player.getStat("skill").xing_mengran) return false;
                return get.type(name) == "basic" && lib.inpile.includes(name);
            },

            ai: {
                order: function (item, player) {
                    if (player && _status.event.type == 'phase') {
                        var max = 0, add = false;
                        var list = lib.inpile.filter(name => get.type(name) == 'basic');
                        if (list.includes('sha')) add = true;
                        list = list.map(namex => { return { name: namex, isCard: true } });
                        if (add) {
                            lib.inpile_nature.forEach(naturex => list.push({ name: 'sha', nature: naturex, isCard: true }));
                        }
                        for (var card of list) {
                            if (player.getUseValue(card) > 0) {
                                var temp = get.order(card);
                                if (temp > max) max = temp;
                            }
                        }
                        if (max > 0) max += 0.3;
                        return max;
                    }
                    return 10;
                },
                respondShan: true,
                respondSha: true,
                skillTagFilter: function (player, tag, arg) {
                    if (arg == 'respond') return false;
                    return !player.hasSkill('xing_mengran_used');
                },
                result: {
                    player: function (player) {
                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                        return 1;
                    },
                },
            },
        },
        dz_xing_yinxi: {
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/dz_xing_yinxi" + index + ".mp3" : 2),
            direct: true,
            locked: true,
            priority: 10,
            async content(event, trigger, player) {
                const result = await player.chooseTarget(get.prompt("dz_xing_yinxi"), "令一名其他角色获得一枚“吟”标记", lib.filter.notMe)
                    .set("ai", function (target) {
                        return Math.max(0.1, -get.attitude(_status.event.player, target));
                    })
                    .forResult();
                if (result.bool) {
                    const target = result.targets[0];
                    player.logSkill("dz_xing_yinxi", [target], null, null, [get.rand(1, 2)]);
                    target.addMark("dz_xing_yinxi", 1);
                }
            },
            marktext: "吟",
            intro: {
                "name2": "吟",
                content: "mark",
            },
            group: "dz_xing_yinxi_card",
            subSkill: {
                card: {
                    audio: "dz_xing_yinxi",
                    logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/dz_xing_yinxi" + index + ".mp3" : 2),
                    trigger: {
                        global: "useCard",
                    },
                    filter: function (event, player) {
                        return event.player.hasMark("dz_xing_yinxi");
                    },
                    direct: true,
                    async content(event, trigger, player) {
                        var result = await player
                            .chooseControl("选项一", "选项二", "cancel2")
                            .set('choiceList', ['令' + get.translation(trigger.card) + '无效', '令' + get.translation(trigger.card) + '不可被响应'])
                            .set('ai', () => {
                                var evt = _status.event.getParent();
                                var trigger = _status.event.getTrigger();
                                var eff = 0;
                                for (var i of trigger.targets) {
                                    eff += get.effect(i, trigger.card, trigger.player, evt.player);
                                };
                                if (eff <= 0) return '选项一';
                                if (eff > 0 && get.type(trigger.card) != "equip") return "选项二";
                                return "cancel2";
                            })
                            .forResult();
                        if (result.control != "cancel2") {
                            var cards = trigger.cards.filterInD('od');
                            player.logSkill("dz_xing_yinxi", [trigger.player], null, null, [get.rand(3, 4)]);
                            if (result.control == "选项一") {
                                game.log(player, "选择了", "#g【选项一】", trigger.card, "无效了");
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                            }
                            if (result.control == "选项二") {
                                game.log(player, "选择了", "#g【选项二】", trigger.card, "不可被响应");
                                trigger.directHit.addArray(game.filterPlayer2());
                            }
                            if (cards.length) player.gain(cards, "gain2");
                            trigger.player.removeMark("dz_xing_yinxi");
                        }
                    },
                    sub: true,
                    sourceSkill: "dz_xing_yinxi",
                },
            },
        },
        dz_xing_jiangchun: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "damageEnd",
            },
            filter: function (event, player) {
                return event.source && event.source != player;
            },
            forced: true,
            multiline: true,
            logTarget: "source",
            async content(event, trigger, player) {
                const target = trigger.source;
                target.addMark("dz_xing_yinxi", 1);
                const targets = game.filterPlayer(current => current.hasMark("dz_xing_yinxi")).sortBySeat(_status.currentPhase);
                for (const current of targets) {
                    if (current.isIn()) {
                        await player.line(current);
                        const list = ['交牌', '获得标记']
                        const result = await current.chooseControl(list).set('prompt', get.skillTranslation(event.name) + ':请选择一项').set('ai', () => {
                            if (get.attitude(current, player) <= 0) {
                                return '交牌';
                            } else {
                                return '获得标记';
                            }
                        }).set('choiceList', ["交给" + get.translation(player) + "一张牌", "获得一枚“吟”"]).forResult();
                        switch (result.control) {
                            case '交牌':
                                const result1 = await current.chooseCard("交给" + get.translation(player) + "一张牌", "he", true).forResult();
                                if (result1.bool) {
                                    await player.gain(result1.cards, "giveAuto", current);
                                    //await player.addMark("dz_xing_jiangchun_handcard", 1, false);
                                }

                                break;
                            case '获得标记':
                                current.addMark("dz_xing_yinxi");
                                break;


                        }

                    }


                }


            },
            group: "dz_xing_jiangchun_handcard",
            subSkill: {
                handcard: {
                    markimage: "image/card/handcard.png",
                    intro: {
                        content: function (storage, player) {
                            return "手牌上限+" + storage;
                        },
                    },
                    mod: {
                        maxHandcard: function (player, num) {
                            return num + player.countMark("dz_xing_jiangchun_handcard");
                        },
                    },
                    sub: true,
                    sourceSkill: "dz_xing_jiangchun",
                    "_priority": 0,
                }
            }
        },
        dz_xing_duanmou: {
            trigger: {
                global: "phaseBegin",
            },
            filter: function (event, player) {
                if (event.player == player) return false;
                return event.player.hp > event.player.countCards("h");
            },
            audio: "ext:永夜之境/audio:2",
            logTarget: "player",
            direct: true,
            content: function () {
                "step 0"
                var list = [];
                for (var i = 0; i < lib.inpile.length; i++) {
                    var name = lib.inpile[i];
                    var type = get.type(name, 'trick');
                    list.push([type, '', name]);
                }
                player.chooseButton([get.prompt("dz_xing_duanmou", trigger.player), [list, 'vcard']], 2).set('ai', function (button) {
                    var target = _status.event.getTrigger().player;
                    var card = { name: button.link[2] };
                    if (get.type(card) == 'basic' || !target.hasUseTarget(card)) return false;
                    return get.attitude(_status.event.player, target) * (target.getUseValue(card) - 0.1);
                });
                "step 1"
                if (result.bool) {
                    var id = trigger.player.playerid;
                    var names = [];
                    for (var i of result.links) names.add(i[2])
                    player.logSkill("dz_xing_duanmou", trigger.player);
                    if (!player.storage.dz_xing_duanmou) player.storage.dz_xing_duanmou = {};
                    if (!player.storage.dz_xing_duanmou[id]) player.storage.dz_xing_duanmou[id] = [];
                    player.storage.dz_xing_duanmou[id].addArray(result.links.slice(0));
                    game.log(player, "选择了", get.translation(names))
                };
            },
            group: "dz_xing_duanmou_gain",
            subSkill: {
                gain: {
                    trigger: {
                        global: "phaseDrawBegin1",
                    },
                    filter: function (event, player) {
                        var storage = player.storage.dz_xing_duanmou;
                        var id = event.player.playerid;
                        return storage && storage[id] && storage[id].length > 0 && !event.numFixed;
                    },
                    logTarget: "player",
                    forced: true,
                    content: function () {
                        "step 0"
                        trigger.changeToZero();
                        "step 1"
                        var cards = [];
                        var id = trigger.player.playerid;
                        var storage = player.storage.dz_xing_duanmou[id];
                        for (var i of storage) {
                            var card = get.cardPile(function (card) {
                                return i[2] == card.name && !cards.contains(card);
                            });
                            if (!card) {
                                var card = get.cardPile(function (card) {
                                    return "sha" == card.name && !cards.contains(card);
                                });
                            };
                            if (card) cards.add(card);
                        };
                        delete player.storage.dz_xing_duanmou[id];
                        trigger.player.gain(cards, "gain2");
                    },
                    sub: true,
                    sourceSkill: "dz_xing_duanmou",
                },
            },
        },
        xing_dengbei: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                // player: "useCardToPlayered",
                target: "useCardToTargeted",
            },
            filter(event, player) {
                if (event.player === event.target) return false;
                return ['h', 'e'].some(pos => game.hasPlayer(target => {
                    if (target === player) return false;

                    return player != _status.currentPhase && player.countCards(pos) || target.countCards(pos);
                }));
            },
            usable: 1,

            async cost(event, trigger, player) {
                event.result = await player.chooseTarget(get.prompt2('xing_dengbei'), (card, player, target) => {
                    if (target === player) return false;
                    return ['h', 'e'].some(pos => player.countCards(pos) || target.countCards(pos));
                }).set('ai', target => {
                    const player = get.player(), att = get.sgn(get.sgn(get.attitude(player, target)) - 0.5);
                    return Math.max(...['h', 'e'].filter(pos => player.countCards(pos) || target.countCards(pos)).map(pos => target.countCards(pos) - player.countCards(pos)));
                }).forResult();
            },
            async content(event, trigger, player) {
                const [target] = event.targets;
                const position = ['h', 'e'].filter(pos => player.countCards(pos) || target.countCards(pos));
                const result = position.length > 1 ? await player.chooseButton([
                    '选择一个区域和' + get.translation(target) + '交换',
                    [position.slice().map(pos => [pos, { 'h': '交换手牌', 'e': '交换装备' }[pos]]), 'tdnodes'],
                ], true).set('ai', button => {
                    const player = get.player(), [target] = get.event().getParent().targets;
                    return target.countCards(button.link) - player.countCards(button.link);
                }).forResult() : { bool: true, links: position };
                if (result.bool) {
                    const [pos] = result.links;
                    await player[pos === 'h' ? 'swapHandcards' : 'swapEquip'](target);
                }
            },

        },
        //赵襄
        xing_hanming: {
            audio: "ext:永夜之境/audio:4",
            //enable: 'phaseUse',
            trigger: {
                player: "dying",
            },
            filter(event, player) {
                return player.getHp() !== 1;
            },
            unique: true,
            limited: true,
            skillAnimation: true,
            animationColor: 'fire',
            prompt(event, player) {
                return get.prompt2("xing_hanming");
            },
            check(event, player) {
                if (event.player.getCards("h", "tao") == 0 && event.player.getCards("h", "jiu") == 0) return 2;
                return 0;
            },
            async content(event, trigger, player) {
                player.awakenSkill(event.name);
                player.discard(player.getCards("he"));
                // await player[player.hp > 1 ? 'loseHp' : 'recover'](Math.abs(player.hp - 1));    // 体力调整至一点
                game.addGlobalSkill('xing_xingyu_xingluo');
                const cards = game.filterPlayer(target => target !== player).reduce((sum, target) => {
                    return sum.addArray(target.getGainableCards(player, 'h', card => !card.hasGaintag('xing_xingyu_xingluo')));
                }, []);
                let targets = game.filterPlayer(current => current != player).sortBySeat();
                if (cards.length) {
                    player.line(targets);
                    for (const target of targets) {
                        await target.discard(cards);
                    }
                }

                //         await 
                // player.loseToDiscardpile(cards);

                //player.discard(cards);
                // player.gain(cards, 'give');
                // const marks = Array.from(ui.cardPile.childNodes).filter(card => get.suit(card) === 'diamond');
                // if (marks.length) player.markAuto('xing_xingyu', marks);
                // game.log(player, '标记了牌堆中的所有', '#y♦', '牌');
            },
        },

        xing_xingyu: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            filter(event, player) {
                return game.hasPlayer(target => target !== player);
            },
            locked: true,
            forced: true,
            async content(event, trigger, player) {
                game.addGlobalSkill('xing_xingyu_xingluo');
                const targets = game.filterPlayer(target => target !== player).sortBySeat();
                const cards = get.cards(targets.length, true);
                player.markAuto('xing_xingyu', cards);
                player.line(targets);
                for (const target of targets) {
                    let cards = target.getCards('h', card => !game.hasPlayer2(target => target.getStorage('xing_xingyu').includes(card)));
                    if (cards.length) {
                        cards = cards.randomGets(1);
                        target.$throw(cards.length);
                        await target.lose(cards, ui.cardPile, 'insert');
                        const card = get.cardPile2(card => game.hasPlayer2(target => target.getStorage('xing_xingyu').includes(card)));
                        if (card) await target.gain(card, 'gain2');
                    }
                    //else await target.loseHp();

                }

            },
            priority: 100,
            group: ["xing_xingyu_gain", 'xing_xingyu_biao'],
            subSkill: {
                gain: {
                    trigger: {
                        player: "gainEnd",
                    },
                    filter(event, player) {
                        return event.getg?.(player)?.some(card => !player.getStorage('xing_xingyu').includes(card));
                    },
                    popup: false,
                    forced: true,
                    content() {
                        game.addGlobalSkill('xing_xingyu_xingluo');
                        const cards = trigger.getg(player).filter(card => !player.getStorage('xing_xingyu').includes(card));
                        player.markAuto('xing_xingyu', cards);
                    },
                    sub: true,
                    sourceSkill: "xing_xingyu",
                },
                biao: {
                    trigger: {
                        global: "phaseBefore",
                        player: "enterGame",
                    },
                    filter: function (event, player) {
                        return event.name != "phase" || game.phaseNumber == 0;
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        game.addGlobalSkill('xing_xingyu_xingluo');
                        let cards = player.getCards("h");
                        await player.addGaintag(cards, "xing_xingyu_xingluo");
                        player.markAuto("xing_xingyu", cards);
                    },

                },
                xingluo: {
                    trigger: {
                        player: "gainAfter",
                        global: "loseAsyncAfter",
                    },
                    filter(event, player) {
                        return event.getg?.(player)?.some(card => game.hasPlayer2(target => target.getStorage('xing_xingyu').includes(card)));
                    },

                    forced: true,
                    popup: false,
                    content() {
                        player.addGaintag(trigger.getg(player).filter(card => game.hasPlayer2(target => target.getStorage('xing_xingyu').includes(card))), event.name);
                    },
                    mod: {
                        cardEnabled2(card, player) {
                            if (get.itemtype(card) === 'card') {
                                if (card.hasGaintag('xing_xingyu_xingluo') && game.hasPlayer2(target => {
                                    return target !== player && target.getStorage('xing_xingyu').includes(card);
                                })) return false;
                            }
                            else if (card.cards?.some(cardx => {
                                return cardx.hasGaintag('xing_xingyu_xingluo') && game.hasPlayer2(target => {
                                    return target !== player && target.getStorage('xing_xingyu').includes(cardx);
                                });
                            })) return false;
                        },
                    },
                    sub: true,
                    sourceSkill: "xing_xingyu",
                },
            },
        },
        xing_ningshuang: {
            mark: true,
            marktext: "☯",
            zhuanhuanji(player, skill) {
                player.storage[skill] = !player.storage[skill];
                player.changeSkin({ characterName: "xinx_zhaoxiang" }, "xinx_zhaoxiang" + (player.storage[skill] ? "_shadow" : ""));
            },
            intro: {
                content: function (storage) {
                    if (!storage) return "观看一名角色的手牌并获得其区域一张牌，然后将其随机一张非“星落”手牌标记为“星落”";
                    return "令额外摸牌数+1，并获得【铸魄】直到再次发动此技能";
                },
            },
            audio: "ext:永夜之境/audio:2",

            trigger: {
                global: "phaseEnd",
            },
            locked: true,
            priority: 20,
            filter(event, player) {
                // const targets = [];
                // game.getGlobalHistory("useCard", evt => {
                //     if (evt.targets?.length) {
                //         targets.addArray(evt.targets);
                //     }
                // });
                // return targets.includes(player); 成为过牌的目标
                let bool = false;
                const history = player.getHistory("useCard");
                let count = 0; // 统计基本牌的使用次数

                for (const evt of history) {
                    if (get.type2(evt.card) == "basic") { // 检查是否为基本牌
                        count++;
                        if (count >= 1) {
                            bool = true;
                            break;
                        }
                    }
                }
                return bool;
                //player.getHistory('useCard').length >0||    使用过牌
                // if (!player.hasHistory('lose', evt => evt.cards2?.length)) return false;
                //return player.storage.xing_ningshuang || game.hasPlayer(target => target !== player && target.countCards('h'));  失去过牌
            },
            async cost(event, trigger, player) {
                if (player.storage.xing_ningshuang) {
                    event.result = await player.chooseBool(get.prompt('xing_ningshuang'), '令额外摸牌数+1且获得〖铸魄〗直到再次发动此技能。').forResult();
                }
                else {
                    event.result = await player.chooseTarget(get.prompt('xing_ningshuang'), '观看一名角色的手牌并获得其区域一张牌，将其随机一张手牌标记为“星落"牌', (card, player, target) => {
                        return target => target !== player && target.countCards('h');
                    }).set('ai', target => {
                        const player = get.player();
                        return get.effect(target, { name: 'shunshou' }, player, player);
                    }).forResult();
                }
            },
            async content(event, trigger, player) {
                await player.addAdditionalSkills(event.name, []);
                player.changeZhuanhuanji(event.name);
                if (player.storage[event.name]) {
                    const [target] = event.targets;
                    await player.gainPlayerCard(target, 'hej', true, 'visible');
                    if (target.countCards('h')) {
                        game.addGlobalSkill('xing_xingyu_xingluo');
                        // const cards = target.getCards('h').randomGets(2);
                        let cards = target.getCards('h', card => !game.hasPlayer2(target => target.getStorage('xing_xingyu').includes(card))).randomGets(1);
                        // target.getCards('h');  所有手牌
                        player.markAuto('xing_xingyu', cards);
                        target.addGaintag(cards, 'xing_xingyu_xingluo');

                        await player.removeSkill('xing_ningshuang_draw');
                    }

                }
                else {

                    // var tao = get.cardPile2(function (card) {
                    // return get.suit(card) == 'heart' && get.type(card) == 'basic';
                    //  });
                    // if (tao) player.gain(tao, 'gain2');


                    await player.addAdditionalSkills(event.name, ['xing_zhupo']);
                    await player.addSkill('xing_ningshuang_draw');
                    if (player.countMark("xing_ningshuang_draw") < 1) {
                        player.addMark("xing_ningshuang_draw", 1, false)
                    };

                }
            },
            derivation: ["xing_zhupo", 'xing_ewaimopai'],
            subSkill:
            {
                draw: {
                    markimage: "image/card/handcard.png",
                    intro: {
                        content: "额外摸牌数+#",
                    },
                    onremove: function (player) {
                        player.clearMark('xing_ningshuang_draw');
                    },
                    trigger: {
                        player: "gainBegin",
                    },
                    popup: false,
                    forced: true,
                    charlotte: true,
                    onremove: true,
                    silent: true,
                    audio: "ext:永夜之境/audio:2",
                    filter: function (event, player) {

                        if (event.getg(player).length == 0) return false;
                        return event.getParent(2).name != "xing_ningshuang_draw" && !event.numFixed && player.countMark("xing_ningshuang_draw");
                    },
                    content: function () {
                        // player.draw(player.countMark("xing_ningshuang_draw"));
                        player.draw();

                    },
                }
            },

        },
        'xing_ewaimopai': {},
        xing_zhupo: {

            audio: "ext:永夜之境/audio:2",
            usable: 1,

            // usable(skill, player) {
            //   return player.hp;
            //  },

            locked: true,
            enable: ["chooseToUse", "chooseToRespond"],
            filter: function (event, player) {
                if (event.type == 'wuxie') return false;
                if (!player.countCards("hes")) return false;
                for (var name of lib.inpile) {
                    if (get.type2(name) != "basic") continue;
                    var card = { name: name };
                    if (event.filterCard(get.autoViewAs(card, "unsure"), player, event)) return true;
                    if (name == "sha") {
                        for (var nature of lib.inpile_nature) {
                            card.nature = nature;
                            if (event.filterCard(get.autoViewAs(card, "unsure"), player, event)) return true;
                        }
                    }
                }
                return false;
            },
            init: function (player) {
                if (!player.storage.xing_zhupo) player.storage.xing_zhupo = [];
            },
            chooseButton: {
                dialog: function (event, player) {
                    var list = [];
                    for (var name of lib.inpile) {
                        if (name == "sha") {
                            if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", "sha"]);
                            for (var nature of lib.inpile_nature) {
                                if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) list.push(["基本", "", "sha", nature]);
                            }
                        } else if (get.type(name) == "basic" && event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", name]);
                    }
                    var dialog = ui.create.dialog("铸魄", [list, "vcard"]);
                    dialog.direct = true;
                    return dialog;
                },
                filter: function (button, player) {
                    return _status.event.getParent().filterCard(get.autoViewAs({ name: button.link[2], nature: button.link[3] }, "unsure"), player, _status.event.getParent());
                },
                check: function (button) {
                    if (_status.event.getParent().type != "phase") return 1;
                    var player = _status.event.player;
                    if (["wugu", "zhulu_card", "yiyi", "lulitongxin", "lianjunshengyan", "diaohulishan"].includes(button.link[2])) return 0;
                    return player.getUseValue({
                        name: button.link[2],
                        nature: button.link[3],
                    });
                },
                backup: function (links, player) {
                    return {
                        filterCard: true,
                        selectCard: 1,
                        popname: true,
                        check: function (card) {
                            return 6 - get.value(card);
                        },
                        position: 'hse',
                        viewAs: { name: links[0][2], nature: links[0][3] },
                        onuse: function (result, player) {
                            game.log(player, '发动了【铸魄】');
                            player.logSkill('xing_zhupo');
                            player.storage.xing_zhupo.add(result.card.name);
                        },
                    }
                },
                prompt: function (links, player) {
                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';

                },
            },
            hiddenCard: function (player, name) {
                if (!lib.inpile.includes(name)) return false;
                var type = get.type2(name);
                return type == "basic" && player.countCards("hes") > 0 && !player.isTempBanned("xing_zhupo");
            },
            ai: {
                fireAttack: true,
                respondSha: true,
                respondShan: true,
                skillTagFilter: function (player) {
                    if (!player.countCards("hes") || player.isTempBanned("xing_zhupo")) return false;
                },
                order: 1,
                result: {
                    player: function (player) {
                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                        return 1;
                    },
                },
            },


        },
        xxxhuanren: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "useCardToPlayered",
            },
            filter(event, player) {
                return event.target != player && event.targets.length == 1 && game.hasPlayer(target => target != player && target.hasCard(card => target.canRecast(card), 'hej'));
            },
            async cost(event, trigger, player) {
                event.result = await player.chooseTarget(get.prompt2('xxxhuanren'), (card, player, target) => {
                    //return target.hasCard(card => target.canRecast(card), 'hej');
                    return target != player && target.hasCard(card => target.canRecast(card), 'hej');
                }).set('ai', () => {
                    const player = get.event().player;
                    // return -get.sgn(get.attitude(player, target)) * target.countCards('hej', card => target.canRecast(card));
                }).forResult();
            },
            usable: 1,
            async content(event, trigger, player) {
                const target = event.targets[0];
                const cards = target.getCards('hej', card => target.canRecast(card));
                if (cards.length) {
                    await target.recast(cards);
                    if (cards.some(i => get.type2(i) == 'basic')) {
                        await player.gain(cards.slice().filter(i => get.type2(i) == 'basic'), 'gain2');
                    }
                    if (cards.some(i => get.type2(i) == 'trick')) {
                        const result = await player.chooseButton(['是否使用其中的牌？', cards.slice().filter(i => get.type2(i) == 'trick')]).set('filterButton', button => {
                            return get.event().player.hasUseTarget(button.link);
                        }).set('ai', button => {
                            return get.event().player.getUseValue(button.link);
                        }).forResult();
                        if (result.bool) {
                            const card = result.links[0];
                            player.$gain2(card, false);
                            await game.delayx();
                            await player.chooseUseTarget(true, card, false);
                        }
                    }
                    if (cards.some(i => get.type2(i) == 'equip')) {
                        //trigger.getParent().directHit.addArray(game.players);
                        trigger.getParent().effectCount++;
                        //game.log(trigger.card, '不能被响应');
                        game.log(trigger.card, '额外结算一次');
                    }
                    await game.delayx();;
                }
            },
        },
        xxxzhenxi: {
            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xxxzhenxi1.mp3", "ext:永夜之境/audio/xxxzhenxi2.mp3"],
            trigger: {
                //source: "damageSource",
                source: "damageBegin1",
            },
            locked: true,
            priority: 100,
            usable: 1,
            filter(event, player) {
                return event.player.isIn() && event.player != player && event.player.getStockSkills(false, true).length;
                /* && game.getGlobalHistory('everything', evt => {
                    return evt.name == 'damage' && evt.source == player;
                }, event).indexOf(event) == 0; */
                // get.skillInfoTranslation(skill)
            },
            async cost(event, trigger, player) {
                const skills = trigger.player.getStockSkills(false, true);//定义技能
                const result = await player.chooseControl(trigger.player.getStockSkills(false, true), 'cancel2')
                    .set('prompt', get.prompt2('xxxzhenxi', trigger.player))
                    .set('choiceList', skills.map(i => {
                        return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                    })).set('displayIndex', false)//技能文本显示
                    .set('ai', () => {
                        const player = get.event().player, target = get.event().getTrigger().player;
                        if (get.attitude(player, target) > 0) return 'cancel2';
                        return get.event().controls.slice().sort((a, b) => get.skillRank(b, 'in') - get.skillRank(a, 'in'))[0];
                    }).forResult();
                event.result = { bool: (result.control != 'cancel2'), cost_data: result.control };
            },
            logTarget: "player",
            async content(event, trigger, player) {
                player.$fullscreenpop("找到你了", "thunder");
                //  const skill = event.cost_data;
                //  await player.addSkills(skill);
                // await trigger.player.removeSkills(skill);

                const skillToDisable = event.cost_data;
                // 禁用目标角色的技能
                trigger.player.removeSkills(skillToDisable, 'phase');
                if (!player.hasSkill(skillToDisable)) {
                    await player.addSkills(skillToDisable)
                };

                // 将禁用的技能存储到 target 和 player 的 storage 中
                if (!trigger.player.storage.xxxzhenxi) trigger.player.storage.xxxzhenxi = [];
                trigger.player.storage.xxxzhenxi.push(skillToDisable);

                // 记录是此技能禁用了对方的技能
                trigger.player.storage.skillDisabledBy = player.name;
                trigger.player.addSkill("xxxzhenxi1");

            },
            group: 'xxxzhenxi_re',
            subSkill: {
                re: {
                    audio: "xxxzhenxi",
                    logAudio: () => ["ext:永夜之境/audio/xxxzhenxi3.mp3", "ext:永夜之境/audio/xxxzhenxi4.mp3"],
                    trigger: {
                        player: "damageEnd",
                    },
                    forced: true,
                    filter(event, player) {
                        return event.source && event.source.storage.skillDisabledBy === player.name && event.source.hasSkill("xxxzhenxi1");
                    },
                    async content(event, trigger, player) {
                        const target = trigger.source;
                        if (!target || !target.storage.xxxzhenxi || target.storage.xxxzhenxi.length === 0) return;

                        // 获取禁用的技能列表
                        const disabledSkills = target.storage.xxxzhenxi.filter(skill => !!skill);
                        if (disabledSkills.length === 0) return;
                        // 让玩家选择要恢复的技能
                        const result = await player.chooseControl(...disabledSkills, true)
                            .set('prompt', '选择要为' + get.translation(target) + '恢复的技能：')
                            .set('choiceList', disabledSkills.map(i => {
                                return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                            })).set('displayIndex', false)//技能文本显示
                            .set('ai', () => {
                                return disabledSkills[Math.floor(Math.random() * disabledSkills.length)];
                            }).forResult();
                        const chosenSkill = result.control === 'cancel2' ? null : result.control;

                        if (chosenSkill) {
                            target.addSkill(chosenSkill);
                            await game.delayx();
                            game.log(target, "恢复了技能【", chosenSkill, "】");
                            // 从禁用技能列表中移除已恢复的技能
                            const index = target.storage.xxxzhenxi.indexOf(chosenSkill);
                            if (index !== -1) {
                                target.storage.xxxzhenxi.splice(index, 1);
                            }

                            // 检查禁用技能是否全部恢复
                            if (target.storage.xxxzhenxi.length === 0) {
                                target.removeSkill("xxxzhenxi1");
                            }
                        }
                        // 更新目标角色的界面显示，移除标记
                        target.update();
                    }
                },
            },

        },
        xxxzhenxi1: {
            init(player, skill) {
                // player.disableSkill(skill, player.storage.xxxzhenxi);
                if (player.getStorage('skillDisabledBy') === game.me.name) {
                    const disabledSkills = player.storage.xxxzhenxi || [];
                    for (const s of disabledSkills) {
                        player.storage.disabledSkills = player.storage.disabledSkills || {};
                        player.storage.disabledSkills[s] = true;
                    }
                }
            },
            onremove(player, skill) {
                //player.enableSkill(skill);
                // 恢复被禁用的技能
                if (player.getStorage('skillDisabledBy') === game.me.name) {
                    const disabledSkills = player.storage.xxxzhenxi || [];
                    for (const s of disabledSkills) {
                        player.addSkill(s);
                    }
                }
            },
            locked: true,
            mark: true,
            charlotte: true,
            marktext: "焕",
            intro: {
                content(storage, player, skill) {
                    const disabledSkills = player.storage.xxxzhenxi || [];
                    if (disabledSkills.length === 0) return;
                    let str = "已失去技能：";
                    for (let i = 0; i < disabledSkills.length; i++) {
                        str += get.translation(disabledSkills[i]) + "、";
                    }
                    return str.slice(0, -1);
                },
            },
        },
        dz_K_huanren: {
            trigger: {
                player: "useCardToPlayered",
                target: "useCardToTargeted",
            },
            audio: "ext:永夜之境/audio:2",
            filter(event, player, name) {
                if (event.player == event.target || event.targets.length != 1) return false;
                return (player == event.player ? event.target : event.player);
            },
            forced: true,
            usable: 1,
            logTarget(event, player) {
                return player == event.player ? event.target : event.player;
            },
            async content(event, trigger, player) {
                const target = (player == trigger.player ? trigger.target : trigger.player);
                target.draw(3);
                await target.damage('nocard');
                player.addTempSkill("dz_K_huanren_buff");
                player.markAuto(event.name + "_buff", [target]);
            },
            subSkill: {
                1: {
                    charlotte: true,
                },
                buff: {
                    trigger: {
                        global: "phaseDiscard",
                    },
                    forced: true,
                    charlotte: true,
                    onremove: true,
                    audio: "dz_K_huanren",
                    filter(event, player) {
                        return game.hasPlayer(current => current.isIn() && current.countGainableCards("h")
                            && player.getStorage("dz_K_huanren_buff").includes(current));
                    },
                    logTarget(trigger, player) {
                        return player.getStorage("dz_K_huanren_buff").filter(target =>
                            target.isIn()&& target.countGainableCards(player, "he") 
                        );
                    },
                    async content(event, trigger, player) {
                        const targets = game
                            .filterPlayer(target => {
                                return target.isIn() && target.countGainableCards("h") && player.getStorage("dz_K_huanren_buff").includes(target);
                            }).sortBySeat();
                        for (const target of targets) {
                            let num = Math.max(1, Math.floor(target.countGainableCards("h") / 2));
                            if (typeof player.storage.dz_K_wuqian == "number") { num += player.storage.dz_K_wuqian; }
                            num = Math.min(target.countGainableCards("h"), num);
                            player.line(target, "green");
                            await player.gainPlayerCard(target, "he", num, "visible", true);
                        }
                        /* for (const target of player.getStorage(event.name)) {
                            if (!target.isIn()) {
                                continue;
                            }
                            let num = Math.max(1, Math.floor(target.countGainableCards("h") / 2));
                            if (typeof player.storage.dz_K_wuqian == "number") {num += player.storage.dz_K_wuqian;}
                            num = Math.min(target.countGainableCards("h"), num);
                            player.line(target, "green");
                           await player.gainPlayerCard(target, "he", num, "visible", true);
                        } */
                    },
                    sub: true,
                    "_priority": 0,
                    sourceSkill: "dz_K_huanren",
                },
            },
            "_priority": 0,
        },
        dz_K_wuqian: {
            trigger: {
                source: "dieAfter",
            },
            audio: "ext:永夜之境/audio:2",
            forced: true,
            content: function () {
                if (typeof player.storage.dz_K_wuqian != "number") player.storage.dz_K_wuqian = 0;
                player.storage.dz_K_wuqian++;
                player.markSkill("dz_K_wuqian");
            },
            intro: {
                content: "发动【焕刃】时描述中的X在计算完毕后+#",
            },

        },

        xinxsongqu: {
            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxsongqu1.mp3", "ext:永夜之境/audio/xinxsongqu2.mp3"],
            enable: "phaseUse",
            usable: 1,
            chooseButton: {
                dialog(event, player) {
                    return ui.create.dialog("###送曲###选择一种类型与花色", [["basic", "trick", "equip"].map(type => [type, get.translation(type)]), "tdnodes"], [["red", "black"].map(color => [color, get.translation(color)]), "tdnodes"]);
                },
                check(button) {
                    if (button.link === "basic" || button.link === "red") return 20;
                    return 5 + Math.random();
                },
                filter(button, player) {
                    if (!ui.selected.buttons.length) return true;
                    return ui.selected.buttons[0].parentNode != button.parentNode;
                },
                select: 2,
                backup(links, player) {
                    if (links[0].includes("牌堆")) links.reverse();
                    return {
                        audio: "xinxsongqu",
                        logAudio: () => ["ext:永夜之境/audio/xinxsongqu1.mp3", "ext:永夜之境/audio/xinxsongqu2.mp3"],
                        type: links[0],
                        color: links[1],
                        filterCard: () => false,
                        selectCard: -1,
                        async content(event, trigger, player) {
                            const { type, color } = lib.skill.xinxsongqu_backup;
                            player.markAuto('xinxsongqu', [type, color]);
                            //   player.popup([type, color]);
                            //  game.log(player, '记录了', '#y' + get.translation(type) + get.translation(color));
                            const result = await player.chooseCardTarget({
                                position: "he", filterCard: true, selectCard: 1,
                                filterTarget(card, player, target) {
                                    return player != target;
                                },
                                ai1(card) {
                                    if (card.name === 'shan') return 10;
                                    return -get.value(card);
                                },
                                ai2(target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (att <= 0) return 10;
                                    return 2;
                                },
                                prompt: "选择一张牌，交给一名其他角色。",
                                forced: true,
                            }).forResult();
                            if (result.bool) {
                                var target = result.targets[0];
                                const num = result.cards.length;
                                await player.give(result.cards, target).gaintag.add("xinxsongqu");
                                player.markAuto('xinxsongqu_tag', result.cards);
                                player.markAuto('xinxsongqu', target);
                                //    await  player.draw(num);
                                // target.addSkill("xinxsongqu_debuff");
                                player.addSkill("xinxsongqu_draw");
                                // await target.addSkill("xinxsongqu_used");
                                // target.markSkill("xinxsongqu_used");
                            }

                            player.when({ player: "phaseBegin" }).step(async (event, trigger, player) => {
                                player.unmarkAuto("xinxsongqu", player.getStorage("xinxsongqu"));
                                await target.removeSkill("xinxsongqu_used");
                            });
                        },
                    }
                },
            },

            ai: {
                order: 10,
                result: {
                    player: 2,
                },
            },
            intro: {

                content(event, player) {
                    if (game.me == player) {
                        return `指定的内容：${get.translation(
                            player.storage.xinxsongqu
                        )}`;
                    } else
                        return `有${player.storage.xinxsongqu.length}个记录的内容`;
                },
            },

            subSkill: {
                used: {
                    marktext: "送曲",
                    intro: {
                        markcount: () => 0,
                        content: "使用“送曲”牌后才能使用其他牌",
                    },
                    charlotte: true,
                    mod: {
                        cardEnabled(card, player) {
                            if ([card].concat(card.cards || []).some(c => get.itemtype(c) === "card" && !c.hasGaintag("xinxsongqu"))) return false;
                        },
                        cardSavable(card, player) {
                            if ([card].concat(card.cards || []).some(c => get.itemtype(c) === "card" && !c.hasGaintag("xinxsongqu"))) return false;
                        }
                    }
                },
                backup: {
                    sub: true,
                    sourceSkill: "xinxsongqu",
                    "_priority": 0,
                },
                draw: {
                    audio: "xinxsongqu",
                    logAudio: () => ["ext:永夜之境/audio/xinxsongqu3.mp3", "ext:永夜之境/audio/xinxsongqu4.mp3"],
                    trigger: {
                        global: ["useCard"],
                    },
                    forced: true,
                    logTarget: "player",
                    priority: 10,
                    filter(event, player) {
                        let storage = player.getStorage('xinxsongqu'),
                            card = event.card;
                        if (player.getStorage("xinxsongqu_draw").length > 3) { return false; }
                        if (player == event.player) return false;
                        if (!player.getStorage("xinxsongqu").includes(event.player)) { return false; }
                        // if (event.cards && !event.cards.some(card => player.getStorage("xinxsongqu_tag").includes(card))) return false;
                        if (storage.includes(get.color(card, event.player)) && storage.includes(get.type(card, event.player))) return true;

                    },
                    // .filter(i => !player.getStorage("xinxzisui").includes(i))
                    async content(event, trigger, player) {
                        let choiceList = ["1.令其对自己造成1点伤害", "2.令此牌无效", "3.令其回复1点体力", "4.令其获得此牌"];
                        const result =
                            await player
                                .chooseButton([get.prompt2("xinxsongqu"), [choiceList.slice(0, 2), "tdnodes"], [choiceList.slice(2, 4), "tdnodes"]])
                                .set("selectButton", [1, 2])
                                .set("filterButton", button => {
                                    const player = get.player();
                                    return !player.getStorage("xinxsongqu_draw").includes(button.link);
                                })
                                .set("ai", button => {
                                    // 优先选择1和2选项
                                    const player = get.player();
                                    const target = trigger.player;
                                    const attitude = get.attitude(player, target);
                                    if (button.link === "1.令其对自己造成1点伤害" && attitude < 0) return 3; // 最高优先级
                                    if (button.link === "2.令此牌无效") return 2; // 次高优先级
                                    if (button.link === "3.令其回复1点体力" && attitude >= 0 && target.hp <= 2) return 3;
                                    if (button.link === "4.令其获得此牌" && attitude >= 0) return 3;
                                    return 0; // 其他选项较低优先级
                                })
                                .forResult();

                        if (result?.links?.length) {
                            const cards = trigger.cards.filterInD('od');
                            for (const choice of result.links) {
                                switch (choice) {
                                    case "1.令其对自己造成1点伤害":
                                        trigger.player.damage(trigger.player, 1);
                                        break;
                                    case "2.令此牌无效":
                                        game.log(trigger.card, "无效了");
                                        trigger.targets.length = 0;
                                        trigger.all_excluded = true;
                                        break;
                                    case "3.令其回复1点体力":
                                        trigger.player.recover();
                                        break;
                                    case "4.令其获得此牌":
                                        trigger.player.gain(cards);
                                        break;
                                }
                                await player.markAuto("xinxsongqu_draw", [choice]);
                            }

                        }
                        player.when({ global: "roundStart" }).step(async () => {
                            player.unmarkAuto("xinxsongqu_draw", player.getStorage("xinxsongqu_draw"));
                        });
                    },
                    sub: true,
                    sourceSkill: "xinxsongqu",
                    "_priority": 0,
                },
                debuff: {
                    charlotte: true,
                    trigger: {
                        player: ["useCard"],
                    },
                    // filter(event, player) {
                    //     return player == _status.currentPhase;
                    // },
                    filter(event, player) {
                        return event.cards.length;
                    },
                    forced: true,
                    popup: false,
                    priority: -100,
                    content() {
                        player.removeSkill("xinxsongqu_used");
                    },
                    mod: {
                        aiValue(player, card, num) {
                            if (get.itemtype(card) == "card" && card.hasGaintag("xinxsongqu")) return -1;
                        },
                        aiUseful() {
                            return lib.skill.xinxsongqu.subSkill.debuff.mod.aiValue.apply(this, arguments);
                        },
                        aiOrder(player, card, num) {
                            if (get.itemtype(card) == "card" && card.hasGaintag("xinxsongqu") && !player.hasSkill("xinxsongqu_used")) {
                                const cards = player.getCards("h", card => card.hasGaintag("xinxsongqu"));
                                //if (cards.length == 1) return num + 10;
                                return num - 10;
                            }
                        },
                    },
                    sub: true,
                    sourceSkill: "xinxsongqu",
                    "_priority": 0,
                },
            },
        },
        xinxfushen: {
            audio: "ext:永夜之境/audio:2",
            marktext: "生",
            intro: {
                name: "浮生",
                "name2": "生",
                content: "mark",
            },
            trigger: {
                global: "damageSource",
            },
            filter: function (event) {
                return event.source && event.num > 0;
            },
            logTarget: "source",
            locked: true,
            forced: true,
            popup: false,
            content: function () {
                trigger.source.addMark("xinxfushen", trigger.num);
            },
            group: "xinxfushen_draw",
            subSkill: {
                draw: {
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        global: "phaseJieshuBegin",
                    },
                    priority: -100,
                    forced: true,
                    filter: function (event, player) {
                        return game.hasPlayer(function (i) {
                            return i.hasMark("xinxfushen");
                        }) && event.player.isAlive();
                    },
                    content: function () {
                        var count = 0;
                        game.hasPlayer(function (i) {
                            var num = i.countMark("xinxfushen");
                            if (num > 0) {
                                count += num;
                                i.removeMark("xinxfushen", num);
                            };
                        });
                        if (count > 0) player.draw(count);
                    },
                    sub: true,
                    sourceSkill: "xinxfushen",
                },
            },
        },
        xinxguizi: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "damageBegin4",
            },
            forced: true,
            usable: 1,
            filter: function (event, player) {
                return event.source && event.source.hasMark("xinxfushen");
            },
            content: function () {
                trigger.cancel();
            },
            ai: {
                nodamage: true,
                nofire: true,
                nothunder: true,
                effect: {
                    target: function (card, player, target, current) {
                        if (get.tag(card, 'damage') && player.hasMark("xinxfushen")) return 'zerotarget';
                    },
                },
            },
        },

        xinxshuangmang: {
            audio: "ext:永夜之境/audio:2",
            trigger: {

                player: ["loseAsyncEnd"],
            },
            filter: function (event, player) {
                return event.tag && event.tag == "xinxchiyu_tag" && player.hasUseTarget(event.cards[0]);
            },
            locked: true,

            direct: true,
            content: function () {
                //  player.draw();
                player.chooseUseTarget(trigger.cards[0]).set("logSkill", "xinxshuangmang");
            },
            group: "xinxshuangmang_use",
            subSkill: {
                backup: {
                    charlotte: true,
                    sub: true,
                    sourceSkill: "xinxshuangmang_use",
                    "_priority": 0,
                },
                use: {
                    audio: "ext:永夜之境/audio:2",
                    enable: ["chooseToUse", "chooseToRespond"],
                    usable: 1,
                    filter: function (event, player) {
                        if (!player.hasCard((card) => card.hasGaintag("xinxchiyu_tag"), "s")) return false;
                        var cards = [];
                        cards.addArray(lib.inpile.filter(function (i) {
                            return get.type(i) == "basic" || get.type(i) == "trick";
                        }));
                        return cards.filter(function (i) {
                            return lib.filter.filterCard({ name: i }, player, _status.event.getParent());
                        }).length > 0;
                    },
                    chooseButton: {
                        // dialog(event, player) {
                        //var list = get.inpileVCardList(info => info[0] != 'equip').filter(info => event.filterCard({ name: info[2], nature: info[3] }, player, event));

                        dialog: function (event, player) {
                            var list = [];
                            for (var i = 0; i < lib.inpile.length; i++) {
                                var name = lib.inpile[i];
                                if (name == "sha") {
                                    if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", "sha"]);
                                    for (var nature of lib.inpile_nature) {
                                        if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) list.push(["基本", "", "sha", nature]);
                                    }
                                } else if (get.type2(name) == "trick" && event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["锦囊", "", name]);
                                else if (get.type(name) == "basic" && event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", name]);
                            }
                            return ui.create.dialog('霜芒', [list, 'vcard']);
                        },
                        filter(button, player) {
                            return get.event().getParent().filterCard({ name: button.link[2] }, player, _status.event.getParent());
                        },
                        check(button) {
                            if (get.event().getParent().type != 'phase') return 1;
                            const player = get.event().player;
                            return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                        },
                        backup(links, player) {
                            return {
                                charlotte: true,
                                filterCard: function (card) {
                                    return card.hasGaintag("xinxchiyu_tag");
                                },
                                audio: "ext:永夜之境/audio:2",
                                popname: true,
                                check: function (card) {
                                    return 6 - get.value(card);
                                },
                                position: 'hes',
                                viewAs: { name: links[0][2], nature: links[0][3] },
                                precontent: function () {

                                    // player.addTempSkill("xinxshuangmang_les");
                                },

                            };
                        },
                        prompt(links, player) {
                            return '将一张【羽】当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
                        },
                    },
                    hiddenCard: function (player, name) {
                        var type = get.type2(name);
                        return (type == "basic" || type == "trick") && player.getCards('s', function (card) {
                            return card.hasGaintag('xinxchiyu_tag')
                        }).length > 0 && !player.hasSkill('xinxshuangmang_les');
                    },

                    sub: true,
                    "_priority": 0,
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    order: 1,
                    result: {
                        player: function (player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            "_priority": 0,
        },
        xinxshuangmang_les: {
            trigger: {
                player: ["loseAsyncEnd"],
            },
            forced: true,
            charlotte: true,
            popup: false,
            content: function () {

            },
        },




        xinxchiyu: {
            trigger: {
                player: ["useCard", "respond"],
                //target: "useCardToTargeted",
            },
            audio: "ext:永夜之境/audio:4",
            filter: function (event, player) {
                //   if (event.name == "useCardToTargeted" && event.player == player) return false;
                return get.color(event.card) == "red";
            },
            locked: true,

            forced: true,
            content: function () {
                player.loseToSpecial(get.cards(), 'xinxchiyu_tag');
                player.markSkill("xinxchiyu");
            },
            mod: {
                targetInRange: function (card, player, target) {
                    if (!card.cards) return;
                    for (var i of card.cards) {
                        if (i.hasGaintag("xinxchiyu_tag")) return true;
                    };
                },
                cardUsable: function (card, player, num) {
                    if (!card.cards) return;
                    for (var i of card.cards) {
                        if (i.hasGaintag("xinxchiyu_tag")) return Infinity;

                    };
                },
            },
            marktext: "羽",
            intro: {
                mark: function (dialog, storage, player) {
                    if (player.hasCard((card) => card.hasGaintag("xinxchiyu_tag"), "s")) {
                        dialog.addAuto(player.getCards('s', function (card) {
                            return card.hasGaintag('xinxchiyu_tag');
                        }));
                    } else dialog.addText("暂无卡牌");
                },
                markcount: function (storage, player) {
                    return player.getCards('s', function (card) {
                        return card.hasGaintag('xinxchiyu_tag');
                    }).length;
                },
                onunmark: function (storage, player) {
                    var cards = player.getCards('s', function (card) {
                        return card.hasGaintag('xinxchiyu_tag');
                    });
                    if (cards.length) {
                        player.lose(cards, ui.discardPile);
                        player.$throw(cards, 1000);
                        game.log(cards, '进入了弃牌堆');
                    }
                },
            },
            "_priority": 0,
        },

        xinxshiren: {
            audio: "ext:永夜之境/audio:6",
            logAudio: () => ["ext:永夜之境/audio/xinxshiren1.mp3", "ext:永夜之境/audio/xinxshiren2.mp3",
                "ext:永夜之境/audio/xinxshiren3.mp3", "ext:永夜之境/audio/xinxshiren4.mp3"],
            trigger: {
                global: "roundStart",
                //player: ["phaseZhunbeiBegin"],
                source: "damageEnd",
            },
            filter: function (event, player) {
                var skillList = player.storage.xinxshiren_skillList || [];
                if (skillList.length >= 3) return false;
                return true;
            },
            forced: true,
            "_priority": 100,
            usable: 2,
            async content(event, trigger, player) {

                const _removeSkill = player.removeSkill;

                // 修正：只移除 xinxshiren_skillList 中的技能，不删除属性
                player.removeSkill = function (skill, ...args) {
                    // 仅当 xinxshiren_skillList 存在时才操作
                    if (this.storage.xinxshiren_skillList) {
                        // 从数组中移除该技能（如果存在）
                        this.storage.xinxshiren_skillList.remove(skill);
                    }
                    // 调用原版 removeSkill
                    return _removeSkill.apply(this, [skill, ...args]);
                };

                let list = [];
                if (_status.characterlist) {
                    list = _status.characterlist.slice();
                } else if (_status.connectMode) {
                    list = game.charactersOL();
                } else {
                    list = game.getCharacters(true).map(info => info[0]);
                }

                const xinx1Characters = Object.keys(lib.characterPack['xinx1'] || {});
                const xinx2Characters = Object.keys(lib.characterPack['xinx2'] || {});
                const excludedCharacters = new Set([...xinx1Characters, ...xinx2Characters]);// 合并两个包中的武将列表
                const players = game.players.concat(game.dead);
                for (var i = 0; i < players.length; i++) {
                    list.remove(players[i].name);
                    list.remove(players[i].name1);
                    list.remove(players[i].name2);
                }

                list = list.filter(name => !xinx1Characters.includes(name) && !xinx2Characters.includes(name)); //排除杏武将
                const filter = skill => {
                    const translation = get.skillInfoTranslation(skill, player);
                    if (!translation) return false;
                    const info = get.info(skill);
                    return info && !info.zhuSkill && !info.hiddenSkill && !info.charlotte;

                    // if (info && (info.zhuSkill || info.hiddenSkill || info.charlotte)) {
                    //     return false;
                    // }
                    // // **过滤条件：排除技能描述中含有“失去〖”的技能**
                    // // 使用 get.plainText 获取纯文本描述，以避免HTML标签干扰
                    // const skillDescription = get.plainText(translation);
                    // if (skillDescription.includes("失去〖火计〗") || skillDescription.includes("失去〖令法〗") || skillDescription.includes("失去〖观火〗")) {
                    //     //return false;
                    //     return true;
                    // }
                    // //return true;
                    // return false;
                };
                list = list.filter(name => (lib.character[name][3] || []).some(filter));
                if (!list.length) return;
                const skillList = {};
                for (const name of list.randomGets(5)) skillList[name] = (lib.character[name][3] || []).filter(filter);
                if (Object.keys(skillList).length) {
                    const next = player.chooseButton(3, ["识人：获得其中一个技能", [Object.keys(skillList), "character"]], true, [1, 1]);
                    next.set("skillList", skillList);
                    next.set("processAI", function () {
                        const map = get.event().skillList;
                        return {
                            links: Object.values(map).flat().randomGets(2),
                            bool: true,
                        };
                    });
                    next.set("custom", {
                        replace: {
                            button(button) {
                                if (!_status.event.isMine()) return;
                                if (button.classList.contains("selectable") == false) return;
                                const dialog = get.event().dialog;
                                const nodes = Array.from(dialog.content.childNodes[1].childNodes);
                                if (nodes.includes(button)) {
                                    if (button.classList.contains("selected")) {
                                        button.classList.remove("selected");
                                        while (dialog.content.childElementCount > 2) dialog.content.removeChild(dialog.content.lastChild);
                                        dialog.buttons.splice(nodes.length);
                                        ui.update();
                                    } else {
                                        const node = nodes.find(node => node.classList.contains("selected"));
                                        if (node) {
                                            node.classList.remove("selected");
                                            while (dialog.content.childElementCount > 2) dialog.content.removeChild(dialog.content.lastChild);
                                            dialog.buttons.splice(nodes.length);
                                            ui.update();
                                        }
                                        button.classList.add("selected");
                                        dialog.add([get.event().skillList[button.link].map(value => [value, get.translation(value)]), "tdnodes"]);
                                        dialog.buttons.forEach(function (button) {
                                            if (ui.selected.buttons.some(value => value.link == button.link)) button.classList.add("selected");
                                        });
                                        game.check();
                                    }
                                } else {
                                    if (button.classList.contains("selected")) {
                                        ui.selected.buttons.remove(button);
                                        button.classList.remove("selected");
                                        if (_status.multitarget || _status.event.complexSelect) {
                                            game.uncheck();
                                            game.check();
                                        }
                                    } else {
                                        button.classList.add("selected");
                                        ui.selected.buttons.add(button);
                                    }
                                    const custom = get.event().custom;
                                    if (custom && custom.add && custom.add.button) custom.add.button();
                                }
                                game.check();
                                nodes.forEach(button => button.classList.add("selectable"));
                            },
                            window() {
                                const dialog = get.event().dialog;
                                const node = dialog.content.childNodes[1];
                                const selected = Array.from(node.childNodes).find(node => node.classList.contains("selected"));
                                if (selected) {
                                    selected.classList.remove("selected");
                                    while (dialog.content.lastChild != node) dialog.content.removeChild(dialog.content.lastChild);
                                    dialog.buttons.splice(node.childElementCount);
                                }
                                game.uncheck();
                                game.check();
                                ui.update();
                            },
                        },
                        add: next.custom.add,
                    });
                    const { links } = await next.forResult();
                    await player.addSkills(links);
                    for (const link of links) {
                        player.flashAvatar('xinxshiren', link);
                    }

                    // 存储获得的技能到 storage 中
                    if (!player.storage.xinxshiren_skillList) player.storage.xinxshiren_skillList = [];
                    player.storage.xinxshiren_skillList = player.storage.xinxshiren_skillList.concat(links);



                }
            },
            group: ["xinxshiren_lose", "xinxshiren_ch"],
            subSkill: {
                lose: {
                    audio: "xinxshiren",
                    logAudio: () => ["ext:永夜之境/audio/xinxshiren5.mp3", "ext:永夜之境/audio/xinxshiren6.mp3",],
                    trigger: {
                        player: "phaseEnd"
                    },
                    "_priority": -10,
                    filter: function (event, player) {
                        var skillList = player.storage.xinxshiren_skillList || [];
                        return skillList.length > 0;
                    },
                    async cost(event, trigger, player) {
                        const skills = player.storage.xinxshiren_skillList || [];
                        if (skills.length === 0) {
                            event.result = { bool: false, cost_data: [] };
                            return;
                        }
                        const list = [];
                        for (const skill of skills) {
                            list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + "】</div><div>" + lib.translate[skill + "_info"] + "</div></div>"]);
                        }
                        const next = player.chooseButton(["识人：你可以失去任意个技能", [list, "textbutton"]], [1, Infinity]);
                        next.set("ai", button => {
                            const skill = button.link;
                            let skillsCopy = skills.slice(0);
                            const prioritySkills = get.info("xinxshiren").prioritySkills || [];
                            skillsCopy.removeArray(prioritySkills);
                            if (skillsCopy.length < 6) return 0;
                            if (skillsCopy.includes(skill)) return 2;
                            return Math.random();
                        })
                        next.set("skills", skills);
                        //const { result } = await next;
                        const result = await next.forResult();
                        console.log("Cost method result:", result); // 添加日志记录
                        if (result && result.bool && result.links) {
                            event.result = {
                                bool: result.bool,
                                cost_data: result.links,
                            };
                        } else {
                            event.result = { bool: false, cost_data: [] };
                        }
                    },
                    async content(event, trigger, player) {

                        // if (!player.storage.xinxshiren_skillList) {
                        //     player.storage.xinxshiren_skillList = [];
                        // }

                        player.changeSkills([], event.cost_data).set("$handle", (player, addSkills, removeSkills) => {
                            game.log(
                                player,
                                "失去了技能",
                                ...removeSkills.map(i => {
                                    return "#g【" + get.translation(i) + "】";
                                })
                            );
                            player.removeSkill(removeSkills);
                            player.draw(removeSkills.length);
                            const additionalSkills = player.storage.xinxshiren_skillList;
                            additionalSkills.removeArray(removeSkills);
                            if (!additionalSkills.length) { delete player.storage.xinxshiren_skillList; }
                        });
                    }
                },
                ch: {
                    trigger: {
                        player: "changeSkillsAfter", // 监听玩家失去技能的时机
                    },
                    forced: true, // 强制触发
                    silent: true, // 不显示在技能提示中
                    popup: false, // 不显示弹窗
                    filter: function (event, player) {
                        // 确保 event.removeSkills 存在且玩家有 xinxshiren 的记录
                        return event.removeSkills && event.removeSkills.length > 0 && player.storage.xinxshiren_skillList;
                    },
                    async content(event, trigger, player) {
                        const storageSkills = player.storage.xinxshiren_skillList;
                        const removedSkills = trigger.removeSkills; // trigger.removeSkills 包含了即将失去的技能列表

                        let hasChanged = false;
                        for (const skill of removedSkills) {
                            if (storageSkills.includes(skill)) {
                                storageSkills.remove(skill); // 从记录中移除该技能
                                hasChanged = true;
                                game.log(player, '的识人记录中移除了技能', '#g【' + get.translation(skill) + '】');
                            }
                        }

                        if (hasChanged && storageSkills.length === 0) {
                            delete player.storage.xinxshiren_skillList; // 如果记录为空，则删除整个 storage 属性
                        }
                    },
                },
            }


        },

        xinxqianqiu:
        {

            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "damageBegin4",
            },
            locked: true,
            forced: true,
            filter: function (event) {
                return !event.card || !event.cards || !event.cards.length;
            },
            content: function () {
                trigger.cancel();
            },
            mod: {
                targetEnabled: function (card, player, target) {
                    if (get.type(card) == 'delay') {
                        return false;
                    }
                },
            }
        },
        xinxzhuoshao: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "phaseZhunbeiBefore",
            },
            direct: true,
            filter: function (event, player) {
                return event.player.countMark("xinxzhuoshao") > 0;
            },
            async content(event, trigger, player) {
                const target = trigger.player;
                await target.removeMark(("xinxzhuoshao"), 1);
                //  if (!target.countMark("xinxzhuoshao")) await target.removeSkill("xinxzhuoshao");

                const attitude = get.attitude(player, target);

                // 根据态度选择不同的选项
                let choiceIndex;
                if (attitude > 0) {
                    choiceIndex = 1;
                } else {
                    choiceIndex = 0;
                }
                const list = ['令其受伤', '令其摸牌']
                const result = await player.chooseControl(list).set('prompt', get.skillTranslation(event.name) + ':请选择一项')
                    .set('ai', () => choiceIndex)
                    .set('choiceList', ["令" + get.translation(target.name) + "受到1点火焰伤害", "令" + get.translation(target.name) + "摸一张牌"])
                    .forResult();
                switch (result.control) {
                    case '令其受伤':
                        player.logSkill("xinxzhuoshao", target);
                        await target.damage("fire", 1, "nosource");
                        break;
                    case '令其摸牌':
                        player.logSkill("xinxzhuoshao", target);
                        await target.draw();
                        break;
                }
            },
            group: "xinxzhuoshao_add",
            subSkill: {
                add: {
                    trigger: {
                        global: "damageEnd",
                    },
                    audio: "ext:永夜之境/audio:2",
                    forced: true,
                    filter: function (event, player) {
                        return event.player.countMark("xinxzhuoshao") > 0;
                    },
                    // usable:1,
                    content: function () {
                        trigger.player.addMark("xinxzhuoshao", trigger.num);
                        player.draw();
                        // trigger.source.draw(trigger.num);
                    },
                    sub: true,
                },
            },
            onremove: true,
            marktext: "灼",
            intro: {
                "name2": "灼",
                content: "mark",
            },

        },





        xinxcangyan:
        {
            trigger: {
                player: ["gainEnd", "loseEnd"],
            },
            direct: true,
            locked: true,
            init(player, skill) {
                player.storage[skill] = [];
            },
            intro: {
                content(event, player) {
                    let storage = player.storage.xinxcangyan;
                    return `·本回合已使用的花色：${get.translation(storage)}`;
                },
            },
            filterx: function (suit, player) {

                switch (suit) {
                    case 'spade': return game.hasPlayer(function (current) {
                        return current != player && current.countCards("h");
                    });
                    case 'club': return game.hasPlayer(function (current) {
                        return current != player && current.countGainableCards(player, "ej");
                    });
                    case 'heart': return player.isDamaged();
                    case 'diamond': return game.hasPlayer(function (current) {
                        return current != player;
                    });
                };
                return false;
            },
            filter: function (event, player) {

                var filterx = lib.skill.xinxcangyan.filterx;
                if (event.name == "useCard") {
                    return filterx(event.card.suit, player);
                } else {
                    if (event.cards && event.cards.length > 0) {
                        for (var i of event.cards) {
                            var suit = get.suit(i);
                            var bool = filterx(suit, player);
                            if (bool) return true;
                        };
                    };
                };

                return false;
            },
            audio: "ext:永夜之境/audio:6",
            content: function () {
                "step 0"
                if (!player.storage.xinxcangyan) {
                    player.storage.xinxcangyan = [];
                }
                event.suit_spade = 0;
                event.suit_club = 0;
                event.suit_heart = 0;
                event.suit_diamond = 0;
                if (trigger.name == "useCard") event["suit_" + get.suit(trigger.card)]++;
                else {
                    for (var i of trigger.cards) {
                        event["suit_" + get.suit(i)]++;
                    };
                };
                "step 1"
                if (event.suit_diamond > 0) {
                    event.suit_diamond--;
                    player.storage.xinxcangyan.push(get.suit(trigger.card));
                    var target = game.filterPlayer(function (current) {
                        return current != player;
                    }).randomGet();
                    if (target) {
                        player.logSkill("xinxcangyan", target);
                        target.addMark("xinxzhuoshao");

                        if (event.suit_diamond) event.redo();
                    };
                };

                "step 2"
                if (event.suit_heart) {
                    event.suit_heart--;
                    if (player.isDamaged()) {
                        player.logSkill("xinxcangyan");
                        player.recover();
                        player.storage.xinxcangyan.push(get.suit(trigger.card));
                        if (event.suit_heart) event.redo();
                    };
                };
                "step 3"
                if (event.suit_spade) {
                    event.suit_spade--;

                    var target = game.filterPlayer(function (current) {
                        return current != player && current.countCards("h");
                    }).randomGet();
                    if (target) {
                        player.logSkill("xinxcangyan", target);
                        target.chooseToDiscard("h", true);
                        player.storage.xinxcangyan.push(get.suit(trigger.card));
                        if (event.suit_spade) event.redo();
                    };
                };
                "step 4"
                if (event.suit_club) {
                    event.suit_club--;
                    var target = game.filterPlayer(function (current) {
                        return current != player && current.countGainableCards(player, "je");
                    }).randomGet();
                    if (target) {
                        player.logSkill("xinxcangyan", target);
                        var card = target.getCards("je", function (card) {
                            return lib.filter.canBeGained(card, player, target);
                        }).randomGet();
                        if (card) player.gain(card, target, 'giveAuto', 'bySelf');
                        player.storage.xinxcangyan.push(get.suit(trigger.card));
                        if (event.suit_club) event.redo();
                    };
                };
            },

            group: "xinxcangyan_remove",
            subSkill: {

                remove: {
                    audio: false,
                    charlotte: true,
                    silent: true,
                    trigger: {
                        player: "phaseAfter",
                    },
                    lastDo: true,
                    async content(event, trigger, player) {
                        if (!player.storage.xinxcangyan) {
                            player.storage.xinxcangyan = [];
                        } else {
                            delete player.storage.xinxcangyan
                        };
                    },
                    sub: true,
                    sourceSkill: "xinxcangyan",
                    forced: true,
                    popup: false,
                    "_priority": 1,




                },

            }


        },

        xinxtianzhi: {
            audio: "ext:永夜之境/audio:2",
            trigger: {

                player: "phaseJieshuBegin",
            },

            forced: true,
            locked: true,
            content: function () {
                'step 0'

                var dialog = [get.prompt('xinxtianzhi')]; list1 = player.getStorage('xinxtianzhi'), list2 = lib.inpile.filter(function (i) {
                    return ["trick", "basic"].contains(get.type(i, false)) && !list1.contains(i);
                });
                if (list1.length) {
                    dialog.push('<div class="text center">已记录</div>');
                    dialog.push([list1, 'vcard']);
                }
                if (list2.length) {
                    dialog.push('<div class="text center">未记录</div>');
                    dialog.push([list2, 'vcard']);
                };
                if (list1.length < 10) {
                    var list = [];
                    for (var i = 0; i < 1; i++) {
                        var cardx = get.cardPile2(function (card) {
                            return get.type(card) == 'basic' && !list.includes(card)
                        });
                        if (cardx) list.push(cardx);
                    }
                    if (list.length) player.gain(list, 'draw');
                }
                else {
                    var list = [];
                    for (var i = 0; i < 2; i++) {
                        var cardx = get.cardPile2(function (card) {
                            return get.type(card) == 'basic' && !list.includes(card)
                        });
                        if (cardx) list.push(cardx);
                    }
                    if (list.length) player.gain(list, 'draw')
                };
                'step 1'
                if (result.bool) {
                    player.logSkill('xinxtianzhi');
                    var name = result.links[0][2];
                    player.markAuto('xinxtianzhi', [name]);
                    game.log(player, '向“天智”记录中添加了', '#y' + get.translation(name));
                    game.delayx();
                };
            },
            onremove: true,
            intro: {
                content: "已记录牌名：$",
            },
            group: ["xinxtianzhi_use", "xinxtianzhi_count"],
            subSkill: {
                use: {
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        global: "useCardAfter",
                    },
                    filter: function (event, player) {
                        return player.hasUseTarget(event.card.name) && player.getStorage('xinxtianzhi').contains(event.card.name) && event.player != player;
                    },
                    forced: true,
                    usable: 1,
                    content: function () {
                        "step 0"
                        player.chooseUseTarget(get.prompt('xinxtianzhi'), "视为使用一张【" + get.translation(trigger.card.name) + "】", { name: trigger.card.name, nature: trigger.card.nature, isCard: true }, false, 'nodistance');
                        //.set("logSkill","xinxtianzhi")
                        "step 1"
                        if (!result.bool) player.storage.counttrigger.xinxtianzhi_use--;
                    },
                    sub: true,
                    "_priority": 0,
                },
                count: {
                    trigger: {
                        player: "useCard1",
                    },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    firstDo: true,
                    filter: function (event, player) {
                        //  return!player.getStorage('xinxtianzhi').contains(event.card.name);
                        return get.type(event.card) != 'equip' && get.type(event.card) != 'delay' && !player.getStorage('xinxtianzhi').contains(event.card.name);
                    },
                    content: function () {
                        trigger.xinxtianzhi_counted = true;
                        player.markAuto('xinxtianzhi', [trigger.card.name]);
                    },
                    sub: true,
                    "_priority": 0,
                },
            },
        },

        xinxshisheng: {
            audio: "ext:永夜之境/audio:2",
            usable: 1,
            enable: "chooseToUse",
            locked: true,
            filter: function (event, player) {
                var storage = player.getStorage("xinxtianzhi");
                if (!storage.length) return false;
                var storage2 = player.getStorage("xinxtianzhi_used");
                return storage.some(name => {
                    return !storage2.includes(name) && event.filterCard(get.autoViewAs({ name }, "unsure"), player, event);
                });
            },
            hiddenCard: function (player, name) {
                var list = player.getStorage("xinxtianzhi");
                if (player.getStorage("xinxtianzhi_used").includes(name)) return false;
                return list.includes(name) && !player.hasSkill("xinxshisheng2");
                //  if (!lib.inpile.includes(name)) return false;
                // var type = get.type2(name);
                // return (type == "basic" || type == "trick") && player.countCards("he") > 0  && !player.hasSkill("xinxshisheng2");
            },
            chooseButton: {
                dialog: function (event, player) {
                    var list = [];
                    for (var name of player.storage.xinxtianzhi) {
                        if (name == "sha") {
                            if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", "sha"]);
                            for (var nature of lib.inpile_nature) {
                                if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) list.push(["基本", "", "sha", nature]);
                            }
                        } else if (get.type2(name) == "trick" && event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["锦囊", "", name]);
                        else if (get.type(name) == "basic" && event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", name]);
                    }
                    return ui.create.dialog("十胜", [list, "vcard"]);


                },
                filter: function (button, player) {
                    var card = { name: button.link[2], storage: { xinxtianzhi: true } };

                    // if (player.getStorage("xinxtianzhi_used").includes(card.name)) return false;

                    return _status.event.getParent().filterCard(get.autoViewAs(card, "unsure"), player, _status.event.getParent());
                },

                check: function (button) {
                    if (_status.event.getParent().type != "phase") return 1;
                    var player = _status.event.player;
                    if (["wugu", "zhulu_card", "yiyi", "lulitongxin", "lianjunshengyan", "diaohulishan"].includes(button.link[2])) return 0;
                    return player.getUseValue({
                        name: button.link[2],
                        nature: button.link[3],
                    });
                },
                backup: function (links, player) {
                    return {
                        selectCard: -1,
                        filterCard: () => false,
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],
                            isCard: true,
                        },
                        position: "hse",
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],

                        },
                        precontent: function () {
                            player.logSkill("xinxshisheng");

                            event.getParent().addCount = false;
                            delete event.result.skill;
                            player.addTempSkill("xinxshisheng2");
                            player.tempBanSkill("xinxshisheng");
                        },
                    };
                },
                prompt: function (links, player) {
                    return '视为使用' + (get.translation(links[0][3]) || "") + get.translation(links[0][2]);
                },
            },
            mod: {
                targetInRange: function (card) {
                    if (card.storage && card.storage.xinxtianzhi) return true;
                },
                cardUsable: function (card, player) {
                    if (card.storage && card.storage.xinxtianzhi) return Infinity;
                },
            },
            ai: {
                order: 4,
                result: {
                    player: function (player) {
                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                        return 1;
                    },
                },
                threaten: 2,

            },
            subSkill: {

                used: {
                    charlotte: true,
                    onremove: true,
                    intro: {
                        content: "已使用过$",
                    },
                    sub: true,
                    sourceSkill: "xinxtianzhi",
                    "_priority": 0,
                },
            },
            "_priority": 0,
        },
        xinxshisheng2: {
            forced: true,
            charlotte: true,
            popup: false,
        },

        dz_xing_bugui: {
            trigger: {
                player: "phaseJieshuBegin",
            },
            audio: "ext:永夜之境/audio:2",

            filter: function () {
                return game.countPlayer(function (current) {
                    return current.getExpansions('dz_xing_beifa_mark').length > 0;
                }) > 1;
            },
            // juexingji:true,
            locked: true,
            forced: true,
            // skillAnimation:true,
            //  animationColor:"fire",
            logTarget: function () {
                return game.filterPlayer(function (current) {
                    return current.getExpansions('dz_xing_beifa_mark').length > 0;
                });
            },
            content: function () {
                "step 0"
                // player.awakenSkill('dz_xing_bugui');
                player.$fullscreenpop("不归", "orange");
                event.map = {};
                "step 1"

                player.gainMaxHp();
                player.recover();
                var targets = game.filterPlayer(function (current) {
                    return current.getExpansions('dz_xing_beifa_mark').length > 0;
                });
                event.targets = targets;
                for (var i of targets) {
                    var id = i.playerid;
                    var cards = i.getExpansions('dz_xing_beifa_mark');
                    event.map[id] = cards.length;
                    i.loseToDiscardpile(cards);
                    player.$gain2(card);
                    player.gain(cards);
                };
                "step 2"
                game.delay();
                for (var i of targets) {
                    var id = i.playerid;
                    i.damage(event.map[id], "nocard");
                };
            },
            "audioname2": {
                "key_shiki": "xqianqiu",
            },
            "_priority": 100,
        },
        dz_xing_beifa: {
            trigger: {
                source: "damageBegin1",
            },
            audio: "ext:永夜之境/audio:2",
            locked: true,
            forced: true,
            derivation: "dz_xing_beini",
            filter: function (event, player) {
                return event.player != player && event.player.countCards("he");
            },
            logTarget: "player",
            content: function () {
                "step 0"
                trigger.player.chooseCard("北伐：选择一张牌置于武将牌上称为“伐”", "he", true);
                "step 1"
                if (result.cards) {
                    trigger.player.addToExpansion(result.cards, trigger.player, 'give').gaintag.add('dz_xing_beifa_mark');
                };
                trigger.player.addSkill("dz_xing_beini");
            },
            group: "dz_xing_beifa_gain",
            subSkill: {
                gain: {
                    trigger: {
                        player: "useCardToPlayer",
                    },
                    direct: true,
                    filter: function (trigger, player) {

                        return trigger.target.getExpansions('dz_xing_beifa_mark').length > 0;

                    },
                    content: function () {

                        player.draw();



                    },
                    sub: true,
                    "_priority": 0,
                    sourceSkill: "dz_xing_beifa",
                },
                mark: {
                    marktext: "伐",
                    intro: {
                        name: "伐",
                        content: "expansion",
                        markcount: "expansion",
                    },
                    charlotte: true,
                    onremove: function (player, skill) {
                        var cards = player.getExpansions(skill);
                        if (cards.length) player.loseToDiscardpile(cards);
                    },
                    sub: true,
                    "_priority": 0,
                    sourceSkill: "dz_xing_beifa",
                },
            },
            "_priority": 0,
        },
        dz_xing_quanxiang: {
            enable: "phaseUse",
            audio: "ext:永夜之境/audio:2",
            usable: 1,
            locked: true,
            filterTarget: function (card, player, target) {
                return target != player;
            },
            content: function () {
                "step 0"
                var cards = target.getExpansions('dz_xing_beifa_mark');
                var num = cards.length;
                if (cards.length) {
                    target.chooseCardButton('将所有“伐”置入弃牌堆', num, cards, true);
                    player.$gain2(card);
                    player.gain(cards);
                } else {
                    target.damage("nocard");
                    event.finish();
                };
                "step 1"
                target.loseToDiscardpile("nocard");
                target.damage(result.links.length, "nocard");
                // result.links
            },
            ai: {
                damage: true,
                order: 8,
                result: {
                    target: function (player, target) {
                        if (!ui.selected.cards.length) {
                            if (player.hp < 2) return 0;
                            if (player.hp == 2 && target.hp >= 2) return 0;
                            if (target.hp > player.hp) return 0;
                        };
                        return get.damageEffect(target, player);
                    },
                },
            },
        },
        dz_xing_beini: {
            trigger: {
                global: "phaseJieshuBegin",
            },
            audio: "ext:永夜之境/audio:2",
            filter: function (event, player) {
                var targets = game.filterPlayer(function (current) {
                    return current != player && current.hasSkill('dz_xing_beifa');
                });
                return player.hasHistory("sourceDamage", () => true) && targets.length > 0;
            },
            locked: true,
            forced: true,
            content: function () {
                "step 0"
                var targets = game.filterPlayer(function (current) {
                    return current != player && current.hasSkill('dz_xing_beifa');
                });
                if (targets.length == 1) {
                    event.target = targets[0];
                    player.chooseCard('h', '悖逆：将一张手牌交给' + get.translation(targets) + '否则失去一点体力');
                }
                else player.chooseCardTarget({
                    prompt: '悖逆：将一张手牌交给' + get.translation(targets) + '中的一名角色' + '否则失去一点体力',
                    filterCard: true,
                    position: 'h',
                    targets: targets,
                    filterTarget: function (card, player, target) {
                        return _status.event.targets.contains(target);
                    },
                });
                "step 1"
                event.count = 1;
                if (target.hp < target.maxHp) {
                    trigger.player.line(player, 'green');
                } else {
                    trigger.player.line(player, 'green');
                }
                if (result.bool) {
                    if (!target) target = result.targets[0];
                    player.line(target);
                    target.gain(result.cards, player, 'giveAuto');
                    target.draw();
                } else player.loseHp();
            },
            "_priority": 0,
        },



        xinxyice:
        {

            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "loseAfter",
                global: ["cardsDiscardAfter", "loseAsyncAfter"],
            },
            filter: function (event, player) {
                if (event.name != 'cardsDiscard') {
                    if (event.type != 'discard') return false;
                    var evt = event.getl(player);
                    return evt.cards2 && evt.cards2.filterInD('d').length > 0;
                }
                else {
                    var evt = event.getParent();
                    if (evt.name != 'orderingDiscard' || !evt.relatedEvent || evt.relatedEvent.player != player || !['useCard', 'respond'].contains(evt.relatedEvent.name)) return false;
                    return event.cards.filterInD('d').length > 0;
                }
            },
            locked: true,
            forced: true,
            content: function () {
                'step 0'
                var evt = trigger.getParent().relatedEvent;
                if ((trigger.name == 'discard' && !trigger.delay) || evt && evt.name == 'respond') game.delayx();
                'step 1'
                var cards;
                if (trigger.getl) cards = trigger.getl(player).cards2.filterInD('d');
                else cards = trigger.cards.filterInD('d');
                if (cards.length == 1) event._result = { bool: true, links: cards };
                else {
                    var dialog = ['遗策：选择要放置的卡牌', '<div class="text center">（从左到右为从旧到新，后选择的后置入）</div>', cards];
                    var cards2 = player.getExpansions('nsyice');
                    cards2.reverse();
                    if (cards2.length) {
                        dialog.push('<div class="text center">原有“策”</div>');
                        dialog.push(cards2);
                    }
                    player.chooseButton(dialog, true, cards.length).set('filterButton', function (button) {
                        return _status.event.cards.contains(button.link);
                    }).set('cards', cards);
                }
                'step 2'
                player.addToExpansion(result.links, 'gain2').gaintag.add('nsyice');
                'step 3'
                var storage = player.getExpansions('nsyice');
                var bool = false;
                for (var i = 0; i < storage.length; i++) {
                    for (var j = storage.length - 1; j > i; j--) {
                        if (get.number(storage[i]) == get.number(storage[j])) {
                            bool = true;
                            break;
                        }
                    }
                    if (bool) break;
                }
                if (bool) {
                    event.cards = storage.splice(i, j - i + 1);
                }
                else event.finish();
                'step 4'
                var cardsx = [];
                cardsx.push(cards.shift());
                cardsx.push(cards.pop());
                if (cards.length) player.gain(cards, 'gain2');
                event.cards = cardsx;
                'step 5'
                player.chooseButton(['将一张牌置于牌堆顶，将另一张牌置于牌堆底', cards], true);
                'step 6'
                player.draw(2)
                ui.cardPile.insertBefore(result.links[0].fix(), ui.cardPile.firstChild);
                cards.remove(result.links[0]);
                ui.cardPile.appendChild(cards[0].fix());
                game.updateRoundNumber();
                if (_status.dying.length) event.finish();
                'step 7'
                player.chooseTarget('对一名角色造成1点伤害', true).set('ai', function (target) {
                    var player = _status.event.player;
                    return get.damageEffect(target, player, player);
                });
                'step 8'
                if (result.bool) {
                    var target = result.targets[0];
                    player.line(target);
                    target.damage('nocard');
                }
            },
            onremove: function (player, skill) {
                var cards = player.getExpansions(skill);
                if (cards.length) player.loseToDiscardpile(cards);
            },
            marktext: "策",
            intro: {
                content: "expansion",
                markcount: "expansion",
            },
            "_priority": 0,
        },
        xinxwansha: {
            audio: "ext:永夜之境/audio:2",
            global: "xinxwansha2",
            trigger: {

                global: "dying",
            },
            forced: true,
            preHidden: true,
            filter: function (event, player, name) {
                return _status.currentPhase == player && event.player != player;
            },
            content: function () { },
            "_priority": 0,
        },
        xinxwansha2: {
            mod: {
                cardSavable(card, player) {
                    const target = _status.currentPhase;
                    if (!target?.isIn()) return;
                    if ((target.hasSkill('xinxwansha') || target.hasSkill('xinxwansha')) && target != player) {
                        if (get.type(card) == "basic") return false;
                    }
                },
                cardEnabled(card, player) {
                    return lib.skill.xinxwansha2.mod.cardSavable.apply(this, arguments);
                },
            },
        },
        xinxpanzhi: {
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            audio: "ext:永夜之境/audio:2",
            forced: true,
            locked: true,
            async content(event, trigger, player) {
                let cards = [];
                if (!player.storage.xinxfuhan) {
                    const num = Math.min(5, player.hp);
                    // getHp()
                    cards = get.cards(num);
                } else {
                    cards = get.cards(3);
                }
                game.cardsGotoOrdering(cards);
                while (cards.length > 0) {
                    const result = await player.chooseButton([
                        `使用其中一张牌`,
                        cards
                    ]).set('filterButton', button => {
                        return player.hasUseTarget(button.link);
                    })
                        .set("ai", button => {
                            return get.event().player.getUseValue(button.link);
                        }).forResult();
                    if (result.bool) {
                        const selectedCard = result.links[0];
                        player.$gain2(selectedCard, false);
                        await game.delayx();
                        player.chooseUseTarget(selectedCard, true, false);
                        cards.remove(selectedCard);
                    } else {
                        break;
                    }
                }
                // 获得剩余的牌
                if (cards.length > 0) {
                    player.gain(cards, 'gain2');
                }
                if (!player.storage.xinxfuhan) {
                    player.loseHp();
                }


            },
            priority: 10,
        },

        xinxlinyou: {
            audio: "ext:永夜之境/audio:12",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxlinyou" + index + ".mp3" : 2),
            trigger: {
                player: ["useCard", "respond"],
            },
            usable: 1,
            popup: false,
            filter: function (event) {
                return event.card.name == 'shan' || event.card.name == 'wuxie' || get.type(event.card) == 'equip' || get.type(event.card) == 'delay';
            },
            async cost(event, trigger, player) {
                event.result = await player.chooseTarget('麟佑：是否对一名其他角色造成1点伤害', function (card, player, target) {
                    return player != target;
                })
                    .set("ai", target => {
                        const player = get.player();
                        return get.damageEffect(target, player, player);
                    }).forResult();

            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                player.$fullscreenpop("麟佑", "fire");
                player.draw();
                player.logSkill("xinxlinyou", target, null, null, [get.rand(1, 2)]);
                await target.damage();
            },
            group: ["xinxlinyou_tao", "xinxlinyou_sha", "xinxlinyou_sg", "xinxlinyou_da", "xinxlinyou_wt"],
            subSkill: {
                tao: {
                    audio: "xinxlinyou",
                    logAudio: () => ["ext:永夜之境/audio/xinxlinyou3.mp3", "ext:永夜之境/audio/xinxlinyou4.mp3"],
                    trigger: {
                        player: "useCard",
                    },
                    usable: 1,
                    forced: true,
                    filter(event) {
                        return event.card.name == 'tao' || event.card.name == 'jiu';
                    },
                    content() {
                        trigger.card.name == 'tao' ? player.gainMaxHp() : player.recover();
                    },
                    sub: true,
                    "_priority": 1,
                    sourceSkill: "xinxlinyou",
                },
                sha: {
                    audio: "xinxlinyou",
                    trigger: {
                        player: "useCard",
                    },
                    usable: 1,
                    popup: false,
                    filter: function (event) {
                        return event.card.name == 'sha';
                    },
                    async cost(event, trigger, player) {
                        let natures = lib.linked.slice(0);
                        let choose = [];
                        let map = {};
                        for (let n of natures) {
                            let cn = get.translation(n) + '属性';
                            map[cn] = n; // 建立映射 {"火属性": "fire"}
                            choose.push(cn);
                        }

                        // 3. 弹出按钮选择框
                        const result = await player.chooseButton([
                            '〖' + get.skillTranslation('xinxlinyou') + '〗:选择杀的属性',
                            [choose, 'tdnodes']
                        ], 1).set('ai', (button) => {
                            return 1;
                        }).forResult();
                        if (result.bool) {
                            // 【修改点1】：将选中的属性名存入 trigger 对象中，而不是 event
                            // 建议加个下划线前缀防止和系统变量冲突
                            trigger._xinxlinyou_nature = map[result.links[0]];
                            event.result = { bool: true };
                        } else {
                            event.result = { bool: false };
                        }


                    },
                    async content(event, trigger, player) {
                        const nature = trigger._xinxlinyou_nature;
                        delete trigger._xinxlinyou_nature;
                        if (nature) {
                            player.logSkill("xinxlinyou", null, null, null, [get.rand(5, 6)]);
                            trigger.nature = nature;
                            if (trigger.card) {
                                trigger.card.nature = nature;
                            }

                            // 弹出气泡提示和日志
                            player.popup(get.translation(nature) + '杀', nature);
                            game.log(trigger.card, '被转为了', '#y' + get.translation(nature), '属性');
                        }
                    },
                    sub: true,
                    "_priority": 1,
                    sourceSkill: "xinxlinyou",
                },
                sg: {
                    audio: "xinxlinyou",
                    logAudio: () => ["ext:永夜之境/audio/xinxlinyou9.mp3", "ext:永夜之境/audio/xinxlinyou10.mp3"],
                    trigger: {
                        player: "useCardToTargeted",
                    },
                    usable: 1,
                    filter(event) {
                        const card = event.card;
                        if (get.type(card) != 'trick') return false;
                        if (get.tag(card, 'damage')) return false;
                        if (!event.targets || event.targets.length != 1) return false;
                        return true;
                    },
                    async cost(event, trigger, player) {
                        event.result = await player.chooseBool("麟佑：是否令" + get.translation(trigger.card) + "额外结算一次").set("choice")
                            .set("ai", () => {
                                let evt = _status.event.getParent();
                                return get.attitude(evt.player, evt.target) <= 0;
                            }).forResult();
                    },
                    async content(event, trigger, player) {
                        trigger.getParent().effectCount++;
                        game.log(player, '令', trigger.card, '额外结算一次');
                    },
                    sub: true,
                    "_priority": 0,
                    sourceSkill: "xinxlinyou",
                },
                da: {
                    audio: "xinxlinyou",
                    logAudio: () => ["ext:永夜之境/audio/xinxlinyou7.mp3", "ext:永夜之境/audio/xinxlinyou8.mp3"],
                    trigger: {
                        player: "useCard",
                    },
                    usable: 1,
                    filter: function (event) {
                        return event.card && get.type(event.card) == 'trick' && get.tag(event.card, 'damage');
                    },
                    async cost(event, trigger, player) {
                        event.result = await player.chooseBool("麟佑：是否令" + get.translation(trigger.card) + "造成的伤害+1").set("choice")
                            .set("ai", () => {
                                let evt = _status.event.getParent();
                                return get.attitude(evt.player, evt.target) <= 0;
                            }).forResult();
                    },
                    async content(event, trigger, player) {
                        trigger.baseDamage++;
                        game.log(trigger.card, '造成的伤害+1');
                    }

                },
                wt: {
                    trigger: {
                        target: "useCardToTarget",
                    },
                    usable: 1,
                    forced: true,
                    popup: false,
                    filter: function (event) {
                        if (!event.player.hasSkill('xinxlinyou')) return false;
                        return event.card.name == 'wugu' || event.card.name == 'taoyuan';
                    },
                    content: function () {
                        "step 0"
                        player.chooseTarget(get.prompt('xinxlinyou'), "令" + get.translation(trigger.card) + "对任意目标无效",
                            [1, trigger.targets.length], function (card, player, target) {
                                return _status.event.targets.includes(target);
                            }).set('ai', function (target) {
                                var trigger = _status.event.getTrigger();
                                return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                            }).set('targets', trigger.targets);
                        "step 1"
                        if (result.bool) {
                            player.logSkill("xinxlinyou", result.targets, null, null, [get.rand(11, 12)]);
                            trigger.getParent().excluded.addArray(result.targets);
                            game.delay();
                            game.log(player, '令', trigger.card, '对', result.targets, '无效');
                        }
                        else { player.storage.counttrigger.xinxlinyou_wt--; }
                    },
                    sub: true,
                    "_priority": 0,
                    sourceSkill: "xinxlinyou",
                },
            },
            "_priority": 0,
        },
        xinxfuhan: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "dying",
            },
            derivation: "xinxpanzhi_re",
            juexingji: true,
            forced: true,
            skillAnimation: true,
            animationColor: "fire",
            async content(event, trigger, player) {
                player.changeSkin({ characterName: "xinx_jiangwei" }, "xinx_jiangwei_shadow");
                player.awakenSkill(event.name);
                // var num = (Math.ceil(player.maxHp / 2));                                    
                await player.recoverTo(1);
            },
            "_priority": 0,
        },
        xinxyingfu: {
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyingfu" + index + ".mp3" : 2),
            trigger: {
                source: "damageSource",
            },
            locked: true,
            popup: false,
            usable: 1,
            filterTarget(card, player, target) {
                return target.countGainableCards(player, 'hej');
            },
            filter(event) {
                return event.num > 0;
            },
            getIndex(event, player, triggername) {
                return event.num;
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt("xinxyingfu"), '将一名角色的一张牌置于武将牌上', function (card, player, target) {
                        return target.countCards('hej') > 0;
                    })
                    .set("ai", target => {
                        const player = get.player(),
                            hs = game.countPlayer();
                        if (get.attitude(player, target) <= 0) return hs * 2;
                        return hs;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const result1 = await player.choosePlayerCard(target, "he", true).forResult();
                if (result1.bool) {
                    player.logSkill("xinxyingfu", [target], null, null, [get.rand(1, 2)]);
                    await player.addToExpansion(result1.links, target, "give").gaintag.add('xinxyingfu');
                }
            },
            marktext: "伏",
            onremove: function (player, skill) {
                var cards = player.getExpansions(skill);
                if (cards.length) player.loseToDiscardpile(cards);
            },
            intro: {
                content: "expansion",
                markcount: "expansion",
            },
            ai: {
                maixie: true,
                expose: 0.2,
            },

            group: ["xinxyingfu_push", "xinxyingfu_gain"],
            subSkill: {
                push: {
                    trigger: {

                        global: "phaseZhunbeiBegin",
                    },
                    forced: true,
                    popup: false,
                    filter: function (event, player) {
                        if (event.player == player || event.player.isDead()) return false;
                        if (!player.getExpansions("xinxyingfu").length) return false;
                        return player.getExpansions("xinxyingfu").length > 0;
                    },
                    check(event, player) {
                        return get.attitude(player, event.player) <= 0;
                    },
                    content: function () {
                        "step 0";
                        player
                            .chooseCardButton(get.prompt("xinxyingfu_push", trigger.player), player.getExpansions("xinxyingfu"), [1, Infinity])
                            .set("ai", function () {
                                const player = get.player();
                                if (player.getExpansions("xinxyingfu").length > 4) return 5;
                                return 0;
                            })
                        "step 1";
                        if (result.bool) {
                            player.logSkill("xinxyingfu", [trigger.player], null, null, [get.rand(3, 4)]);
                            player.loseToDiscardpile(result.links);
                            const num = (Math.ceil(result.links.length / 2));
                            trigger.player.damage("nosource", num, "nocard");

                        }


                    },
                    sub: true,
                    sourceSkill: "xinxyingfu",
                    "_priority": 0,
                },
                gain: {
                    audio: "xinxyingfu",
                    logAudio: () => ["ext:永夜之境/audio/xinxyingfu5.mp3", "ext:永夜之境/audio/xinxyingfu6.mp3"],
                    trigger: {
                        player: "phaseEnd",
                    },
                    filter: function (event, player) {
                        return player.getExpansions("xinxyingfu").length > 3;
                    },

                    forced: true,
                    content: function () {
                        'step 0'
                        player.draw(3);
                        'step 1'
                        if (player.countCards('h') == 0) event.finish();
                        else {
                            var next = player.chooseToMove("影伏：是否交换“伏”和牌？");
                            next.set('list', [
                                [get.translation(player) + '（你）的“伏”', player.getExpansions('xinxyingfu'), 'xinxyingfu'],
                                ['手牌区', player.getCards('h')],
                            ]);
                            next.set('filterMove', (from, to) => typeof to != 'number');
                            next.set('processAI', function (list) {
                                var player = _status.event.player, cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                    return player.getUseValue(a) - player.getUseValue(b);
                                }), cards2 = cards.splice(0, player.getExpansions('xinxyingfu').length);
                                return [cards2, cards];
                            });
                        }
                        'step 2'
                        if (result.bool) {
                            var pushs = result.moved[0], gains = result.moved[1];
                            pushs.removeArray(player.getExpansions('xinxyingfu'));
                            gains.removeArray(player.getCards('h'));
                            if (!pushs.length || pushs.length != gains.length) return;
                            player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('xinxyingfu');
                            game.log(player, '将', pushs, '作为“伏”置于武将牌上');
                            player.gain(gains, 'gain2');

                        }
                    },
                    sub: true,
                    sourceSkill: "xinxyingfu",
                    "_priority": 0,

                },
            },
        },
        xinxqianlong: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                global: "gameDrawAfter",
                player: ["useCardAfter", "enterGame"],
            },
            filter(event, player) {
                if (!["respond", "useCard"].includes(event.name)) return event.name !== "phase" || game.phaseNumber === 0;
                if (event.name === "useCard") {
                    let history = player.getAllHistory("useCard");
                    if (history.length <= 1) return false;
                    const evt = history[history.length - 2];
                    if (!evt || !evt.card) return false;
                    return get.type2(evt.card) != get.type2(event.card);
                }

            },
            mod: {
                aiOrder(player, card, num) {
                    if (typeof card == "object" && player == _status.currentPhase) {
                        var evt = player.getLastUsed();
                        if (evt && evt.card && get.type2(evt.card) != get.type2(card)) {
                            return num + 10;
                        }
                    }
                },
            },
            forced: true,
            content: function () {
                "step 0";
                var cards = [];
                for (var i = 1; i <= 1; i++) {
                    var card = get.cardPile2(function (card) {
                        return !cards.includes(card) && get.suit(card) == "diamond";
                    });
                    if (card) cards.push(card);
                }
                if (cards.length) {
                    player.$gain2(cards, false);
                    game.log(player, "将", cards, "作为“死士”置于了武将牌上");
                    player.loseToSpecial(cards, "xinxqianlong_tag").visible = true;
                } else event.finish();
                "step 1";
                //player.loseToSpecial(get.cards(3),'xinxqianlong_tag');
                player.markSkill("xinxqianlong");
                game.delayx();
            },
            ai: {

                result: {
                    player: 7,
                },
            },
            "_priority": 20,
            marktext: "死士",
            intro: {
                mark: function (dialog, storage, player) {
                    if (player == game.me || player.isUnderControl()) {
                        var cards = player.getCards("s", function (card) {
                            return card.hasGaintag("xinxqianlong_tag");
                        });
                        if (!cards || !cards.length) return;
                        dialog.addAuto(cards);
                    }
                },
                markcount: function (storage, player) {
                    return player.getCards('s', function (card) {
                        return card.hasGaintag('xinxqianlong_tag');
                    }).length;
                },
                onunmark: function (storage, player) {
                    var cards = player.getCards('s', function (card) {
                        return card.hasGaintag('xinxqianlong_tag');
                    });
                    if (cards.length) {
                        player.lose(cards, ui.discardPile);
                        player.$throw(cards, 1000);
                        game.log(cards, '进入了弃牌堆');
                    }
                },
            },

            init: function (player) {
                var history = player.getAllHistory("useCard");
                if (history.length) {
                    var trigger = history[history.length - 1];
                    if (get.type(trigger.card, player) == "none") return;
                    player.storage.xinxqianlong_mark = trigger.card;
                    player.markSkill("xinxqianlong_mark");
                    game.broadcastAll(
                        function (player, type) {
                            if (player.marks.xinxqianlong_mark) player.marks.xinxqianlong_mark.firstChild.innerHTML = get.translation(type);
                        },
                        player,
                        get.type(trigger.card, player)
                    );
                }
            },
            onremove: function (player) {
                player.unmarkSkill("xinxqianlong_mark");
                delete player.storage.xinxqianlong_mark;
                player.removeTip("xinxqianlong");
            },
            group: ["xinxqianlong_da", 'xinxqianlong_mark'],
            subSkill: {
                mark: {
                    charlotte: true,
                    trigger: {
                        player: ["useCard1"],
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    content: function () {
                        if (get.type(trigger.card, player) == "none") player.unmarkSkill("xinxqianlong_mark");
                        else {
                            player.storage.xinxqianlong_mark = trigger.card;
                            player.markSkill("xinxqianlong_mark");
                            game.broadcastAll(
                                function (player, type) {
                                    if (player.marks.xinxqianlong_mark) player.marks.xinxqianlong_mark.firstChild.innerHTML = get.translation(type);
                                },
                                player,
                                get.type(trigger.card, player)
                            );
                        }
                    },
                    intro: {
                        content: function (card, player) {
                            var type = get.type(card, player);
                            var str = "<li>上一张牌的类型：" + get.translation(type);
                            return str;
                        },
                    },
                    sub: true,
                    sourceSkill: "xinxqianlong",
                    "_priority": 0,

                },
                da: {
                    mod: {
                        targetInRange: function (card, _player, _target) {
                            if (!card.cards) return;
                            for (var i of card.cards) {
                                if (i.hasGaintag("xinxqianlong_tag")) return true;
                            };
                        },
                    },
                    trigger: {
                        player: "useCard",
                    },
                    filter: function (event, player) {
                        player.addTip("xinxqianlong", '潜龙 ' + get.translation(get.type2(event.card, player)));
                        return (
                            player.getHistory("lose", function (evt) {
                                if (evt.getParent() != event) return false;
                                for (var i in evt.gaintag_map) {
                                    if (evt.gaintag_map[i].includes("xinxqianlong_tag")) return true;
                                }
                                return false;
                            }).length > 0
                        );
                    },
                    forced: true,
                    charlotte: true,
                    content: function () {
                        trigger.baseDamage++;
                        trigger.directHit.addArray(game.filterPlayer());
                        game.log(trigger.card, "不可被响应");
                    },
                    ai: {
                        combo: "xinxqianlong",
                        halfneg: true,
                    },
                    sub: true,
                    sourceSkill: "xinxqianlong",
                    "_priority": 0,
                },
            }
        },

        xinxyini: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                source: "damageSource",
            },
            // locked:true,
            //forced: true,
            // usable: 1,
            filter: function (event, player) {

                return !player.getAllHistory('useSkill', evt => evt.skill == 'xinxyini' && evt.targets[0] == event.player).length;
            },
            logTarget: "player",
            check(event, player) {
                return get.attitude(player, event.player) <= 0;
            },
            content: function () {
                trigger.player.addSkill('xinxyini_add');
                if (!player.storage.xinxyini_add) player.storage.xinxyini_add = 0;
                var num = trigger.num;
                if (num > 0) {
                    trigger.player.storage.xinxyini_add = num;
                    trigger.player.loseMaxHp(trigger.num);
                }
                player.gainMaxHp(trigger.num);
                if (!player.storage.xinxyini) player.storage.xinxyini = [];
                player.storage.xinxyini.push(trigger.player);
                // player.markSkill('xinxyini');

            },

            intro: {
                content: "已对$发动过",
            },
            "_priority": 0,
            subSkill: {

                add: {
                    trigger: {
                        player: "dying",
                    },
                    charlotte: true,
                    forced: true,
                    onremove: true,
                    sourceSkill: "xinxyini",
                    content() {
                        var map = player.storage.xinxyini_add;
                        if (map > 0) player.gainMaxHp(map);
                        player.removeSkill('xinxyini_add');
                    }
                }
            }
        },

        xinxchenlan: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxchenlan" + index + ".mp3" : 2),
            trigger: {
                player: "phaseEnd",
            },
            forced: true,
            popup: false,
            // filter(event, player) {
            //     return player.countMark('xinxchenlan') > 2;
            // },
            async content(event, trigger, player) {

                if (player.countMark('xinxchenlan') < 2) {
                    player.logSkill("xinxchenlan", null, null, null, [5]);
                    await player.loseHp();

                }

                if (player.isDamaged() && player.countMark('xinxchenlan') > 2) {
                    player.logSkill("xinxchenlan", null, null, null, [get.rand(1, 4)]);
                    await player.recover();
                }
                if (player.countMark('xinxchenlan') > 3) {
                    var cards = [];
                    for (var i = 1; i <= 1; i++) {
                        var card = get.cardPile2(function (card) {
                            return !cards.includes(card) && get.name(card) == "sha";
                        });
                        if (card) cards.push(card);
                    }
                    if (cards.length) {
                        player.$gain2(cards, false);
                        game.log(player, "将", cards, "作为“死士”置于了武将牌上");
                        await player.loseToSpecial(cards, "xinxqianlong_tag").visible == true;
                        //player.loseToSpecial(get.cards(3),'xinxqianlong_tag');
                        player.markSkill("xinxqianlong");
                        await game.delayx();
                    }
                }

            },
            group: "xinxchenlan_mark",
            subSkill: {

                mark: {
                    charlotte: true,
                    trigger: {
                        global: "phaseBefore",
                        player: "damageEnd",
                        source: "damageSource",
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    content: function () {
                        if (trigger.name == 'phase') delete player.storage.xinxchenlan;
                        else player.addMark('xinxchenlan', trigger.num, false);
                    },
                    sub: true,
                    sourceSkill: "xinxchenlan",
                    "_priority": 0,
                }

            }

        },


        xinxshixi: {
            audio: "ext:永夜之境/audio:2",
            round: 1,
            locked: true,
            trigger: {
                player: "useCardToPlayered",
                target: "useCardToTargeted",
            },
            filter: function (event, player) {
                if (event.player == event.target || event.targets.length != 1) return false;
                return (player == event.player ? event.target : event.player).countCards('h');
            },
            logTarget: function (event, player) {
                return player == event.player ? event.target : event.player;
            },
            check: function (event, player) {
                return get.attitude(player, player == event.player ? event.target : event.player) <= 0;
            },
            content: function () {

                'step 0'
                var target = (player == trigger.player ? trigger.target : trigger.player);
                event.target = target;
                event.videoId = lib.status.videoId++;
                'step 1'
                if (target.countCards("hej") > 0) player.gainPlayerCard(target, "hej", "visible");
            },
            ai: {
                expose: 0.25,
            },
        },

        xinxyiyue: {

            audio: "ext:永夜之境/audio:2",
            trigger: {
                target: "useCardToTarget",
            },
            locked: true,

            filter: function (event, player) {
                return event.card.name == "sha" || (get.type(event.card) == "trick" && get.tag(event.card, "damage"))
            },
            usable: 1,
            content: function () {
                "step 0"
                player.chooseTarget(get.prompt("xinxyiyue"), function (card, player, target) {
                    return target != _status.event.getTrigger().player;
                    // return target!=player&&target!=_status.event.getTrigger().player;
                }).set('ai', function (target) {
                    return target.canUse("juedou", source);
                }).set("ai", function (target) {
                    var source = _status.event.getTrigger().player;
                    return get.effect(source, { name: "juedou" }, target, player);
                });
                "step 1"
                if (result.bool) {
                    var target = result.targets[0];
                    event.target = target;
                    player.logSkill("xinxyiyue", target);
                    if (target.canUse("juedou", trigger.player)) {
                        event.useCardx = target.useCard({ name: "juedou" }, trigger.player, "noai");
                    } else event.finish();
                } else event.finish();
                "step 2"
                if (target.hasHistory("sourceDamage", function (evt) {
                    return evt.card == event.useCardx.card;
                })) {
                    game.asyncDraw([player, target]);
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;

                };
            },
            "_priority": 0,
        },

        xinxjuewu: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "phaseEnd",
            },
            //locked: true,
            filter: function (event, player) {
                return game.hasPlayer(function (target) {
                    return player != target && target.countCards('he');

                });
            },
            logTarget: function (event, player) {
                return game.filterPlayer(current => {
                    return current != player && current.countCards("he");
                });

            },



            content: function () {

                "step 0"
                player.storage[skill] = !player.storage[skill];
                player.changeSkin({ characterName: "xinx_diaochan" }, "xinx_diaochan" + (player.storage[skill] ? "_shadow" : ""));
                event.targetsx = targets.slice(0);
                player.addTempSkill("xinxjuewu_record", "phaseUseEnd");
                "step 1"
                if (event.targetsx.length > 0) {
                    var target = event.targetsx.shift();
                    event.target = target;
                    target.chooseToUse('绝舞：请对' + get.translation(player) + '使用一张牌(无距离限制)，否则其获得你一张牌').set('complexSelect', true).set('filterTarget', function (card, player, target) {
                        if (target != _status.event.sourcex && !ui.selected.targets.contains(_status.event.sourcex)) return false;
                        return lib.filter.targetEnabled.apply(this, arguments);
                    }).set('sourcex', player)
                } else event.goto(3);


                "step 2"
                if (!result.bool && target.countGainableCards(player, "he")) player.gainPlayerCard("he", target, true);

                if (event.targetsx.length > 0) event.goto(1);
                "step 3"
                player.removeSkill("xinxjuewu_record");
            },

            group: "xinxjuewu_dying",
            subSkill: {

                dying: {
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        player: "damageBefore",
                    },
                    forced: true,
                    filter: function (event, player) {
                        return event.getParent(4).name == "xinxjuewu";
                        // return player == _status.currentPhase;
                    },
                    content: function () {
                        trigger.cancel();

                    },

                    sub: true,
                    "_priority": 0,
                    sourceSkill: "xinxjuewu",
                },
                record: {
                    trigger: {
                        global: ["loseAfter", "cardsDiscardAfter"],
                    },
                    direct: true,
                    priority: -1,
                    onremove: function (player) {
                        if (player.storage.xinxjuewu_record && player.storage.xinxjuewu_record.length > 0) {
                            if (player.isAlive()) player.gain(player.storage.xinxjuewu_record.filterInD('d'), "gain2");
                            player.storage.xinxjuewu_record = [];
                        };
                    },
                    charlotte: true,
                    filter: function (event, player) {
                        if (event.name == 'lose' && event.position != ui.discardPile) return false;
                        return event.cards && event.cards.length > 0;
                    },
                    content: function () {
                        if (!player.storage.xinxjuewu_record) player.storage.xinxjuewu_record = [];
                        player.storage.xinxjuewu_record.addArray(trigger.cards);
                    },
                    sub: true,
                    "_priority": -100,
                    sourceSkill: "xinxjuewu",
                },
            },
            "_priority": 0,
        },
        xinxqingchen: {

            group: ["xinxqingchen_control", "xinxqingchen_draw", "xinxqingchen_charge", "xinxqingchen_init"],
            audio: "ext:永夜之境/audio:6",
            logAudio: () => ["ext:永夜之境/audio/xinxqingchen1.mp3", "ext:永夜之境/audio/xinxqingchen2.mp3"],
            enable: "phaseUse",
            filter: function (event, player, name) {
                return player.countCharge() > 6;
            },
            usable: 1,
            chargeSkill: 7,
            locked: true,
            filterTarget: function (card, player, target) {
                return target != player;
                // && player.countCards("h") > 0
            },
            content: function () {
                "step 0"
                player.removeMark('charge', 7);
                "step 1"
                target.addSkill("xinxqingchen2");
            },
            ai: {
                order: 1,
                result: {
                    target: function (player, target) {
                        return -1;
                    },
                },
            },

            subSkill: {
                charge: {
                    trigger: {
                        source: "damageSource",
                        //player: "enterGame",
                    },
                    forced: true,
                    popup: false,
                    filter(event, player, name) {
                        if (event.name == "damage") return true;
                        return event.name != "phase" || game.phaseNumber == 0;
                    },
                    content() {
                        player.addCharge(trigger.num);
                    },
                    sub: true,
                    sourceSkill: "xinxqingchen",
                    "_priority": 0,
                },
                init: {
                    trigger: {
                        global: "phaseBefore",
                        player: "enterGame",
                    },
                    forced: true,

                    popup: false,
                    filter: function (event, player) {
                        return (event.name != "phase" || game.phaseNumber == 0) && player.countCharge(true);
                    },
                    content: function () {
                        player.addCharge(1);
                    },
                    sub: true,
                    sourceSkill: "xinxqingchen",
                    "_priority": 0,
                },
                control: {
                    audio: "xinxqingchen",
                    logAudio: () => ["ext:永夜之境/audio/xinxqingchen3.mp3", "ext:永夜之境/audio/xinxqingchen4.mp3", "ext:永夜之境/audio/xinxqingchen5.mp3", "ext:永夜之境/audio/xinxqingchen6.mp3"],
                    forced: true,
                    trigger: {
                        global: "phaseBeginStart",
                    },
                    filter: function (event, player) {
                        return player != event.player && !event.player._trueMe && event.player.hasSkill("xinxqingchen2");
                    },
                    content: function () {
                        player.$fullscreenpop("倾城", "orange");
                        trigger.player._trueMe = player;
                        game.addGlobalSkill('autoswap');
                        if (trigger.player == game.me) {
                            game.notMe = true;
                            if (!_status.auto) ui.click.auto();
                        }
                        trigger.player.addTempSkill("xinxqingchen_buff");
                        trigger.player.addSkill('huoxin2');
                    },
                    sub: true,
                    sourceSkill: "xinxqingchen",
                    "_priority": 0,
                },

                buff: {
                    trigger: {
                        player: "phaseJieshuBegin",
                    },
                    filter: function (event, player) {
                        return player.countCards("hes");
                    },
                    direct: true,
                    charlotte: true,
                    content: function () {
                        var next = player.chooseToUse();
                        next.set('openskilldialog', '倾城：你可以将一张牌当【决斗】使用');
                        next.set('norestore', true);
                        next.set('_backupevent', 'xinxqingchen_viewAs');
                        next.set('custom', {
                            add: {},
                            replace: { window: function () { } }
                        });
                        next.backup('xinxqingchen_viewAs');

                    },
                    sub: true,
                    "_priority": 20,
                },
                viewAs: {
                    filterCard: function (card) {
                        return get.itemtype(card) == 'card';
                    },
                    viewAs: {
                        name: "juedou",
                    },
                    selectCard: 1,
                    position: "hes",
                    popname: true,
                    sub: true,
                    ai: {
                        wuxie: function (target, card, player, viewer) {
                            if (player == game.me && get.attitude(viewer, player) > 0) {
                                return 0;
                            }
                        },
                        basic: {
                            order: 5,
                            useful: 1,
                            value: 5.5,
                        },
                        result: {
                            target: -1.5,
                            player: function (player, target, card) {
                                if (player.hasSkillTag('directHit_ai', true, {
                                    target: target,
                                    card: card,
                                }, true)) {
                                    return 0;
                                }
                                if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                    return 0;
                                }
                                var hs1 = target.getCards('h', 'sha');
                                var hs2 = player.getCards('h', 'sha');
                                if (hs1.length > hs2.length + 1) {
                                    return -2;
                                }
                                var hsx = target.getCards('h');
                                if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                    return -2;
                                }
                                if (hsx.length > 3 && hs2.length == 0) {
                                    return -2;
                                }
                                if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                    return -2;
                                }
                                return -0.5;
                            },
                        },
                        tag: {
                            respond: 2,
                            respondSha: 2,
                            damage: 1,
                        },
                    },
                    "_priority": 0,
                },


            },
        },

        xinxqingchen2:
        {
            charlotte: true,
            forceDie: true,
            mark: true,
            marktext: "倾城",
            intro: {
                markcount: () => 0,
                content: function (storage, player) {
                    return "已被倾倒，由貂蝉控制";
                },
            },
            popup: false,
            forced: true,
            trigger: {
                player: ["phaseEnd", "dieAfter"],
            },
            content: function () {
                player.removeSkill("xinxqingchen2");
            },
            "_priority": -100,
        },


        xinxxieling: {
            enable: "phaseUse",
            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxxieling1.mp3", "ext:永夜之境/audio/xinxxieling2.mp3"],
            usable: 1,
            onremove: true,
            filterTarget: function (card, player, target) {
                return player != target;
            },
            content: function () {
                'step 0'
                target.addMark('xinxxieling_mark', 1, false);
                var num = target.countMark("xinxxieling_mark");
                target.chooseCard('he', num, '挟令：交给' + get.translation(player) + num + '张牌', true).set('ai', function (card) {
                    if (get.attitude(_status.event.player, _status.event.getParent().player) > 0) {
                        return 7 - get.value(card);
                    }
                    return -get.value(card);
                });
                // target.addSkill('xinxxieling_mark');
                'step 1'
                if (result.bool) {
                    player.gain(result.cards, target, 'giveAuto').gaintag.add('xinxxieling_keep1');
                }
            },
            ai: {
                order: 8,
                threaten: 4,
                expose: 0.6,
                result: {
                    target: -1,
                },
            },
            mod: {
                targetInRange: function (card, player, target) {
                    if (!card.cards) return;
                    for (var i of card.cards) {
                        if (!i.hasGaintag('xinxxieling_keep1') || get.color(i) != 'red' || 'black') return;
                    }
                    return true;
                },
                cardUsable: function (card, player, target) {
                    if (!card.cards) return;
                    for (var i of card.cards) {
                        if (i.hasGaintag('xinxxieling_keep1')) return Infinity;
                    }
                },
                ignoredHandcard: function (card, player) {
                    if (card.hasGaintag('xinxxieling_keep1')) return true;
                },
                cardDiscardable: function (card, player, name) {
                    if (name == 'phaseDiscard' && card.hasGaintag('xinxxieling_keep1')) return false;
                }
            },

            group: 'xinxxieling_mark',
            subSkill: {
                mark: {
                    markimage: "image/card/identity_enemy.jpg",
                    intro: {
                        content: "受到的伤害+#",
                    },
                    audio: "xinxxieling",
                    logAudio: () => ["ext:永夜之境/audio/xinxxieling3.mp3", "ext:永夜之境/audio/xinxxieling4.mp3"],
                    trigger: {
                        global: "damageBegin1",
                    },
                    priority: 20,
                    charlotte: true,
                    forced: true,
                    onremove: true,
                    logTarget: "player",
                    filter(event, player) {
                        return event.player.hasMark("xinxxieling_mark");
                    },
                    content() {
                        trigger.num += trigger.player.countMark('xinxxieling_mark');
                        game.log(trigger.player, '受到的伤害+' + trigger.player.countMark('xinxxieling_mark'));
                        trigger.player.clearMark('xinxxieling_mark', false);
                    },

                },
            }
        },


        xinxxieling3: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "damageBegin3",
            },
            charlotte: true,
            forced: true,
            onremove: true,
            content: function () {

                trigger.num += player.countMark('xinxxieling3');
                game.log(player, '受到的伤害+' + player.countMark('xinxxieling3'));
                player.addMark('xinxxieling3', 1, false);
            },

            markimage: "image/card/identity_enemy.jpg",
            intro: {
                content: "受到的伤害+#",
            },
            "_priority": 0,
        },



        xinxxieling_keep1: {

            onremove: function (player) {
                player.removeGaintag('xinxxieling_keep1');

            },
            mod: {
                targetInRange: function (card, player, target) {
                    if (!card.cards) return;
                    for (var i of card.cards) {
                        if (!i.hasGaintag('xinxxieling_keep1') || get.color(i) != 'red' || 'black') return;
                    }
                    return true;
                },
                cardUsable: function (card, player, target) {
                    if (!card.cards) return;
                    for (var i of card.cards) {
                        if (i.hasGaintag('xinxxieling_keep1')) return Infinity;
                    }

                },
                ignoredHandcard: function (card, player) {
                    if (card.hasGaintag('xinxxieling_keep1')) return true;
                },
                cardDiscardable: function (card, player, name) {
                    if (name == 'phaseDiscard' && card.hasGaintag('xinxxieling_keep1')) return false;
                },

            },
        },

        //奸雄 
        xinxjianxiong: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjianxiong" + index + ".mp3" : 2),
            trigger: {
                player: "damageBefore",

            },
            locked: true,
            popup: false,
            mark: true,
            intro: {
                content(storage, player) {
                    return `剩余可发动次数为${1 - player.countMark("xinxjianxiong")}`;
                },
            },
            filter(event, player) {
                return player.countMark("xinxjianxiong") <= 0;
            },
            filterTarget: function (card, player, target) {
                return target != player && lib.skill.xinxjianxiong.getNum(event).length;

            },
            check(event, player) {
                if (get.attitude(player, event.target) >= 0) { return false; }
                let target = event.source;
                if (target.hp <= 2 && target.countMark("xinxxieling_mark") > 0) return 2;
                if (player.hp <= 1) return 1;
                return 0;
            },
            async content(event, trigger, player) {
                // Math.max(1,player.countMark('xinxqianyi'))
                // const result = await trigger.source.damage (lib.skill.xinxjianxiong.getNum(trigger).length).forResult();  
                player.addMark('xinxjianxiong');
                // var num = Math.max(1, (lib.skill.xinxjianxiong.getNum(trigger).length))
                var num = lib.skill.xinxjianxiong.getNum(trigger).length;
                player.logSkill("xinxjianxiong", trigger.source, null, null, [get.rand(1, 2)]);
                await trigger.source.damage(num);
                // if (
                //     trigger.source.getHistory("damage", function (evt) {
                //         return evt.getParent("xinxjianxiong") == event && evt._dyinged;
                //     }).length
                // ) 
                if (
                    game.getGlobalHistory("everything", evt => {
                        if (evt.name != "die" || evt.player != trigger.source) return false;
                        return evt.reason?.getParent() == event;
                    }).length > 0
                ) {
                    player.logSkill("xinxjianxiong", null, null, null, [get.rand(3, 4)]);
                    player.removeMark('xinxjianxiong')
                }
            },
            getNum(event) {
                return game
                    .getGlobalHistory("everything", evt => {
                        return evt.name == "cardsDiscard" || (evt.name == "lose" && evt.position == ui.discardPile);  //进入弃牌堆的
                        //  return evt.name == "cardsDiscard" || evt.name == "useCard"||evt.name == "lose"; 
                    })
                    .reduce((list, evt) => list.addArray(evt.cards.filter(i => get.tag(i, "damage"))), []);
            },
            subSkill: {
                die: {
                    audio: "xinxjianxiong",
                    logAudio: () => ["ext:永夜之境/audio/xinxjianxiong3.mp3", "ext:永夜之境/audio/xinxjianxiong4.mp3"],
                    trigger: {
                        global: "die",
                    },
                    filter: function (event, player) {
                        return (
                            event.player.hasMark("xinxxieling_mark") && event.player.getStockSkills("仲村由理", "天下第一").filter(function (skill) {
                                var info = get.info(skill);
                                return info && !info.hiddenSkill && !info.zhuSkill && !info.charlotte;
                            }).length > 0
                        );
                    },
                    logTarget: "player",
                    locked: true,
                    content: function () {
                        "step 0";
                        var list = trigger.player.getStockSkills("仲村由理", "天下第一").filter(function (skill) {
                            var info = get.info(skill);
                            return info && !info.hiddenSkill && !info.zhuSkill && !info.charlotte;
                        });
                        if (list.length == 1) event._result = { control: list[0] };
                        else
                            player
                                .chooseControl(list)
                                .set("prompt", "选择获得" + get.translation(trigger.player) + "的一个技能")
                                .set("forceDie", true)
                                .set("ai", function () {
                                    return list.randomGet();
                                });
                        "step 1";
                        player.addSkills(result.control);
                        game.broadcastAll(function (skill) {
                            var list = [skill];
                            game.expandSkills(list);
                            for (var i of list) {
                                var info = lib.skill[i];
                                if (!info) continue;
                                if (!info.audioname2) info.audioname2 = {};

                            }
                        }, result.control);
                    }
                }
            }
        },
        xinxcangren: {
            audio: "ext:永夜之境/audio:6",
            logAudio: () => ["ext:永夜之境/audio/xinxcangren1.mp3", "ext:永夜之境/audio/xinxcangren2.mp3"],
            trigger: {
                global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter"],
            },
            popup: false,
            forced: true,
            filter: function (event, player) {
                const evt1 = event.getParent();
                const evt = event.getParent("phaseDiscard");
                if (evt && evt.name == "phaseDiscard") return false;
                if (evt1.name != "useCard" && evt1.name != "discard" || !event.player.hasMark("xinxcangren")) return false;
                for (let i = 0; i < event.cards2.length; i++) {
                    if (get.type(event.cards2[i], null, event.hs.includes(event.cards2[i]) ? event.player : false) !== 'equip') {
                        return true;
                    }
                }
            },
            async content(event, trigger, player) {
                let cards;
                if (trigger.name == 'cardsDiscard') cards = trigger.cards.filterInD('d');
                else {
                    let players = game.players.slice().concat(game.dead);
                    players.remove(player);
                    cards = players.reduce((list, target) => {
                        const evt = trigger.getl(target);
                        if (evt && evt.cards2 && evt.cards2.length) {
                            return list.addArray(evt.cards2);
                        }
                        return list;
                    }, []).filterInD('d');
                }
                player.gain(trigger.cards, "gain2");
            },

            group: ['xinxcangren_init', 'xinxcangren_da'],
            marktext: '藏',
            onremove: true,
            intro: {
                markcount: () => 0,
                content: '已被灵雎标记',
            },

            subSkill: {
                init: {
                    audio: "xinxcangren",
                    logAudio: () => ["ext:永夜之境/audio/xinxcangren3.mp3", "ext:永夜之境/audio/xinxcangren4.mp3"],
                    trigger:
                    {
                        global: ['phaseBefore', 'die'],

                    },
                    filter(event, player) {
                        if (
                            !game.hasPlayer(function (current) {
                                return current.hasMark('xinxcangren');
                            })
                        )
                            return true;
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        const result = await player.chooseTarget('藏刃：令一名其他角色获得“藏”标记', (card, player, target) => {
                            return target != player && !target.hasMark("xinxcangren");
                        }, true).set('ai', target => {
                            const self = get.player();
                            const attitude = get.attitude(self, target);
                            return attitude * (target === self ? 1 : -5);
                        }).forResult();
                        if (result?.bool && result.targets?.length) {
                            const [target] = result.targets;
                            player.line(target);
                            target.addMark('xinxcangren', 1);
                        }
                    },
                    sub: true,
                    sourceSkill: "xinxcangren",
                    "_priority": 0,

                },
                da: {
                    audio: "xinxcangren",
                    logAudio: () => ["ext:永夜之境/audio/xinxcangren5.mp3", "ext:永夜之境/audio/xinxcangren6.mp3"],
                    trigger: {
                        source: "dieAfter",
                    },
                    forced: true,
                    filter: function (event, player) {
                        return event.player.hasMark("xinxcangren");
                    },
                    async content(event, trigger, player) {
                        await player.gainMaxHp();
                        //player.recover();
                    }
                },
            },

            ai: {
                order: 1,
                result: {
                    target: function (player, target) {
                        if (get.attitude(player, target) > 0) {
                            return Math.sqrt(target.countCards('he'));
                        }
                        if (target.hasMark('xinxcangren')) {
                            return -Math.sqrt(target.countCards('he'));
                        }
                        return 0;
                    },
                    player: 1,
                }
            }
        },


        xinxfenglu: {
            mod: {
                // {       targetInRange:function(card,player,target){
                //    if(!card.cards) return;
                //   for(var i of card.cards){
                //   if(!i.hasGaintag('xinxfenglu_tag')) return;
                //   }
                //   return true;
                //    },  
                cardUsable: function (card, player, target) {
                    if (!card.cards) return;
                    for (var i of card.cards) {
                        if (i.hasGaintag('xinxfenglu_tag')) return Infinity;
                    }
                },
                // ignoredHandcard:function(card,player){
                //  if(card.hasGaintag('xinxfenglu_tag')) return true;
                //  },
                // cardDiscardable:function(card,player,name){
                // if(name=='phaseDiscard'&&card.hasGaintag('xinxfenglu_tag')) return false;
                //  }
            },
            audio: "ext:永夜之境/audio:2",
            trigger:
            {
                global: "phaseEnd",
            },

            filter(event, player) {
                return event.player.hasMark("xinxcangren") && event.player.hp < player.hp;
            },
            forced: true,
            locked: true,
            logTarget: "player",
            async content(event, trigger, player) {
                const card = new lib.element.VCard({ name: "sha", nature: 'stab' });
                await player.useCard(card, trigger.player, false);
            },
            //group: ['xinxfenglu_da'],
            //  ,'xinxfenglu_ch'
            subSkill: {
                da: { //你于回合外获得的牌无次数限制。
                    trigger:
                    {
                        player: "gainAfter",
                    },
                    forced: true,
                    filter: function (event, player) {

                        return player !== _status.currentPhase;
                    },
                    async content(event, trigger, player) {
                        var hs = player.getCards("h"),
                            cards = trigger.getg(player);
                        cards = cards.filter(card => hs.includes(card));
                        player.addGaintag(cards, "xinxfenglu_tag");
                    }

                },
                ch: {
                    trigger: {
                        player: "useCardToPlayered",
                    },
                    forced: true,
                    usable: 1,
                    logTarget: "target",
                    filter: function (event, player) {
                        return event.target.hasMark("xinxcangren") && event.targets.length == 1
                    },
                    async content(event, trigger, player) {

                        trigger.getParent().effectCount++;

                    },
                },
            }
        },


        xinxquanmou: {
            audio: "ext:永夜之境/audio:6",
            logAudio: () => ["ext:永夜之境/audio/xinxquanmou1.mp3", "ext:永夜之境/audio/xinxquanmou2.mp3"],
            trigger: {
                player: "phaseDiscardEnd",
            },
            forced: true,
            filter: function (event, player) {
                return event.player.getHistory('useCard', function (evt) {
                    return evt.isPhaseUsing() && ['trick', 'basic'].contains(get.type(evt.card)) && player.hasUseTarget({
                        name: evt.card.name,
                        nature: evt.card.nature,
                        isCard: true,

                    });
                }).length > 0;
            },
            content: function () {
                'step 0'
                var list = [];
                trigger.player.getHistory('useCard', function (evt) {
                    if (!evt.isPhaseUsing() || !['trick', 'basic'].contains(get.type(evt.card)) && game.hasPlayer(target => {
                        return player.canUse(evt.card, target, false);
                    })) return;
                    var name = evt.card.name;
                    if (name == "sha") {
                        var nature = evt.card.nature;
                        switch (nature) {
                            case "fire":
                                name = "huosha";
                                break;
                            case "thunder":
                                name = "leisha";
                                break;
                            case "kami":
                                name = "kamisha";
                                break;
                            case "ice":
                                name = "icesha";
                                break;
                            case "stab":
                                name = "cisha";
                                break;
                        }
                    }
                    list.add(name);
                });
                for (var i = 0; i < list.length; i++) {
                    list[i] = [get.type(list[i]), '', list[i]];
                }
                player.chooseButton([get.prompt('xinxquanmou'), [list, 'vcard']]).set('ai', function (button) {
                    return player.getUseValue({ name: button.link[2], nature: button.link[3], isCard: true });
                })
                    .set("filterButton", function (button) {
                        return player.hasUseTarget({
                            name: button.link[2],
                            nature: button.link[3],
                            isCard: true,
                        });
                    })
                    ;
                'step 1'
                if (result.bool) {
                    player.chooseUseTarget(true, false, 'nodistance', { name: result.links[0][2], nature: result.links[0][3], isCard: true });
                }

            },
            "_priority": 0,
            group: ["xinxquanmou_Draw", "xinxquanmou_jie"],
            subSkill: {
                jie: {
                    trigger: {
                        global: "phaseEnd",
                    },
                    audio: "xinxquanmou",
                    logAudio: () => ["ext:永夜之境/audio/xinxquanmou3.mp3", "ext:永夜之境/audio/xinxquanmou4.mp3", "ext:永夜之境/audio/xinxquanmou5.mp3", "ext:永夜之境/audio/xinxquanmou6.mp3"],
                    forced: true,
                    round: 1,
                    filter(event, player) {
                        const gainedOutsideDraw = event.player.getHistory('gain').filter(record => record.phase !== 'phaseDraw').length;
                        return event.player !== player && gainedOutsideDraw > event.player.getHp();
                    },
                    async content(event, trigger, player) {
                        player.addMark("xinxquanmou_Draw", 1, false);
                        player.gainMaxHp();
                        player.insertPhase();

                    },
                    sub: true,
                    "_priority": 0,
                    sourceSkill: "xinxquanmou",
                },

                Draw: {
                    markimage: "image/card/handcard.png",
                    intro: {
                        content: "手牌上限、额定摸牌数+#",
                    },
                    trigger: {
                        player: "phaseDrawBegin2",
                    },
                    mark: true,
                    forced: true,
                    charlotte: true,
                    audio: "ext:永夜之境/audio:2",
                    filter: function (event, player) {
                        return !event.numFixed && player.countMark("xinxquanmou_Draw");
                    },
                    content: function () {
                        trigger.num += player.countMark("xinxquanmou_Draw");
                    },
                    mod: {
                        maxHandcard: function (player, num) {
                            return num + player.countMark("xinxquanmou_Draw");
                        },
                    },

                },
            },
            "_priority": 0,
        },

        xinxwugui: {

            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "dying",
            },
            filter: function (event, player) {
                return event.source === player && event.player != player;
            },
            derivation: "xinxwuyi",
            juexingji: true,
            forced: true,
            skillAnimation: true,
            animationColor: "thunder",
            async content(event, trigger, player) {
                player.changeSkin({ characterName: "xinx_zhonghui" }, "xinx_zhonghui_shadow");
                player.awakenSkill(event.name);
                player.loseMaxHp();
                player.addSkill('xinxwuyi');

            }
        },

        xinxwuyi: {

            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxwuyi1.mp3", "ext:永夜之境/audio/xinxwuyi2.mp3"],
            trigger: {
                global: "gainAfter",
            },
            locked: true,
            usable: 1,
            filter: function (event, player) {
                if (event.parent.parent.name == 'phaseDraw') return false;
                if (event.player == player) return false;
                return event.cards && event.cards.length > 0;
            },
            check(event, player) {
                return get.attitude(player, event.player) <= 0;
            },
            async content(event, trigger, player) {
                trigger.player.damage("thunder");
                trigger.player.addTempSkill("xinxwuyi_norecover");

            },
            subSkill: {
                norecover: {
                    mark: true,
                    markimage: "image/card/tao.png",
                    intro: {
                        content: "不能回复体力",
                    },
                    audio: "xinxwuyi",
                    logAudio: () => ["ext:永夜之境/audio/xinxwuyi3.mp3", "ext:永夜之境/audio/xinxwuyi4.mp3"],
                    trigger: {
                        player: "recoverBefore",
                    },
                    charlotte: true,
                    forced: true,
                    firstDo: true,
                    async content(event, trigger, player) {
                        trigger.cancel();
                        await trigger.player.removeSkill('xinxwuyi_norecover');
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target: -1.5,
                    },

                }


            }



        },

        xinxhuoji: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxhuoji" + index + ".mp3" : 2),
            trigger: {
                player: "useCardToPlayered",
            },
            filter(event, player) {
                // if (!event.targets || event.targets.length != 1) return false;
                return !get.tag(event.card, 'damage') && !player.hasSkill('xinxhuoji_used');
            },
            forced: true,
            direct: true,
            async content(event, trigger, player) {
                if (game.countPlayer() < 2) {
                    event.finish();
                    return;
                }
                var result = await player
                    .chooseTarget("祸济：请选择两名角色", "前者视为对后者使用一张火【杀】", true, 2, (card, player, target) => {
                        var sha = new lib.element.VCard({ name: "sha", isCard: true });
                        if (ui.selected.targets.length) {
                            var targetx = ui.selected.targets[0];
                            return targetx.canUse(sha, target, false);
                        }
                        return lib.filter.cardEnabled(sha, target);
                    })
                    .set("targetprompt", ["打人", "被打"])
                    .set("multitarget", true)
                    .set("ai", target => {
                        var aiTargets = get.event().aiTargets;
                        if (aiTargets) {
                            return aiTargets[ui.selected.targets.length] == target ? 10 : 0;
                        }
                        return 0;
                    })
                    .set(
                        "aiTargets",
                        (() => {
                            var targets = [],
                                eff = 0;
                            var sha = new lib.element.VCard({ name: "sha", isCard: true });
                            for (var user of game.filterPlayer()) {
                                for (var target of game.filterPlayer()) {
                                    if (user == target) continue;
                                    var targetsx = [user, target];
                                    var effx = get.effect(target, sha, user, player);
                                    if (user == player) effx += 1;
                                    if (get.attitude(player, user) > 0) effx -= 0.1;
                                    if (effx > eff) {
                                        eff = effx;
                                        targets = targetsx;
                                    }
                                }
                            }
                            if (targets.length) return targets;
                            return null;
                        })()
                    ).forResult();

                if (result.bool) {
                    var user = result.targets[0],
                        target = result.targets[1];
                    player.logSkill("xinxhuoji", [target], null, null, [get.rand(1, 2)]);
                    var sha = new lib.element.VCard({ name: "sha", nature: "fire", isCard: true });
                    if (user.canUse(sha, target, false)) user.useCard(sha, target, false, "noai");
                    // player.gainPlayerCard(target, "hej", 1);
                    target.addMark("xinxhuoji_zero", 1, false);
                    target.addTempSkill('xinxhuoji_zero', { player: 'phaseEnd' });
                    player.addTempSkill('xinxhuoji_used', "roundStart");
                    target.addMark("xinxhuoji", 1, false);
                    //  if(target.countMark('xinxhuoji')>1)
                    //    player.gainPlayerCard(target, "hej", 1);
                }
            },

            group: ['xinxhuoji_gian'],
            subSkill: {
                gianused: {
                    charlotte: true,
                    onremove: true,
                },
                used: {
                    charlotte: true,
                    onremove: true,
                },
                gian: {
                    audio: "xinxhuoji",
                    logAudio: () => ["ext:永夜之境/audio/xinxhuoji3.mp3", "ext:永夜之境/audio/xinxhuoji4.mp3"],
                    trigger: {
                        global: "useCardToPlayered",
                    },
                    filter: function (event, player) {
                        if (player == event.player || event.targets.length != 1 || event.target == player || player.hasSkill('xinxhuoji_gianused')) return false;
                        //if (player == _status.currentPhase) return false;
                        var bool = function (card) {
                            // return (card.name == "sha" || get.type(event.card) == "trick" && get.tag(event.card, "damage"));
                            return get.tag(event.card, 'damage');
                        };
                        if (!bool(event.card)) return false;
                        var evt = event.getParent("phaseUse");
                        if (evt.player != event.player) return false;
                        return true;
                    },
                    logTarget: "player",
                    check: function (event, player) {
                        return get.attitude(player, event.target) > 0;
                    },
                    async content(event, trigger, player) {
                        player.addTempSkill("xinxhuoji_gianused", "roundStart");
                        trigger.player.draw();
                        trigger.targets.length = 0;
                        trigger.all_excluded = true;
                        // var evt = event.getParent("phaseUse");
                        // if (evt) evt.skipped = true;
                    }
                },
                zero: {
                    charlotte: true,
                    markimage: "image/card/group_ye.png",
                    intro: {
                        markcount: () => 0,
                        content: "手牌上限视为0",
                    },
                    mod: {
                        maxHandcard: function (player, num) {
                            return num - 1000;
                        },
                    },
                }
            }
        },


        xinxhuoji_handcard: {

            markimage: "image/card/group_ye.png",
            intro: {
                content: "手牌上限、额定摸牌数-#",
            },
            trigger: {
                player: "phaseDrawBegin2",
            },
            locked: true,
            forced: true,
            audio: "ext:永夜之境/audio:2",
            filter: function (event, player) {
                return !event.numFixed && player.countMark("xinxhuoji_handcard");
            },
            content: function () {
                trigger.num -= player.countMark("xinxhuoji_handcard");
            },
            mod: {
                maxHandcard: function (player, num) {
                    return num - player.countMark("xinxhuoji_handcard");
                },
            },
        },

        xinxcanjing: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: ["shaMiss", "eventNeutralized"],
            },
            filter: function (event, player) {
                if (event.type != "card") return false;
                var responder;
                if (event.name == "sha") {
                    responder = event.target;
                } else {
                    responder = event._neutralize_event.player;
                }
                return player == responder;

            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
                player.draw();
                await player
                    .chooseToUse(function (card, player, event) {
                        return lib.filter.filterCard.apply(this, arguments);
                    }, "残旌：是否使用一张牌？")
                    .set("targetRequired", true)
                    .set("complexSelect", true)
                    .set("logSkill", ["xinxcanjing"])
                    .set("filterTarget", function (card, player, target) {
                        return lib.filter.targetEnabled.apply(this, arguments);
                    })
                    .set("addCount", false);
            },

            group: 'xinxcanjing_dixiao',
            subSkill: {
                dixiao: {
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        player: ["shaMiss", "eventNeutralized"],
                    },
                    forced: true,
                    popup: false,
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
                    async content(event, trigger, player) {
                        player.draw();
                        await player
                            .chooseToUse(function (card, player, event) {
                                return lib.filter.filterCard.apply(this, arguments);
                            }, "残旌：是否使用一张牌？")
                            .set("targetRequired", true)
                            .set("complexSelect", true)
                            .set("logSkill", ["xinxcanjing"])
                            .set("filterTarget", function (card, player, target) {
                                return lib.filter.targetEnabled.apply(this, arguments);
                            })
                            .set("addCount", false);
                    },
                }
            }

        },


        xinxsanku: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxsanku" + index + ".mp3" : 2),
            trigger: {
                global: "roundStart",
            },
            popup: false,
            forced: true,
            content: function () {
                "step 0";
                player.logSkill("xinxsanku", null, null, null, [get.rand(1, 3)]);
                player.gain(lib.card.ying.getYing(1), "gain2");
            },
            mod: {
                cardDiscardable(card, player, name) {
                    if (name == "phaseDiscard" && (get.name(card) == "ying")) return false;
                },
                ignoredHandcard(card, player) {
                    if (get.name(card) == "ying") return true;
                },
            },
            group: ['xinxsanku_huo', 'xinxsanku_re'],

            subSkill: {

                huo: {
                    enable: ["chooseToUse", "chooseToRespond"],

                    filterCard: {
                        name: "ying",
                    },
                    position: "hs",
                    locked: true,
                    viewAs: {
                        name: "shan",
                        storage: {
                            xinxsanku_huo: true,
                        },
                    },
                    viewAsFilter(player) {
                        if (!player.countCards("hs", "ying")) return false;
                    },
                    prompt: "将一张【影】当【闪】使用",
                    check(card) {
                        const val = get.value(card);
                        return 5 - val;
                    },
                    mod: {
                        targetInRange: function (card, player, target) {
                            if (card.storage && card.storage.xinxsanku_huo) return true;
                        },
                        cardUsable: function (card) {
                            if (card.storage && card.storage.xinxsanku_huo) return Infinity;
                        },
                    },
                },
                re:
                {
                    audio: "xinxsanku",
                    logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxsanku" + index + ".mp3" : 2),
                    trigger: {
                        player: "dying",
                    },
                    forced: true,
                    popup: false,
                    filter: function (event, player) {
                        return player.countCards("h", "ying") > 1;
                    },
                    filterCard: {
                        name: "ying",
                    },
                    content: function () {
                        "step 0";
                        var next = player.chooseToDiscard("三窟：是否弃置两张影将体力回复至一点？", { name: "ying" }, 2);
                        next.set("ai", function (card) {
                            return 9 - get.value(card);
                        });
                        "step 1";
                        if (result.bool) {
                            player.logSkill("xinxsanku", null, null, null, [get.rand(3, 4)]);
                            player.recoverTo(1);
                        }

                    },

                }

            }
        },

        xinxluexin: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                global: "phaseEnd",
            },
            forced: true,
            priority: -100,
            filter(event, player) {
                return player.hasHistory("lose", function (evt) {
                    if (evt.type != "discard") return false;
                    for (var i of evt.cards2) {
                        if (get.position(i, true) == "d" && player.hasUseTarget(i)) return true;

                    }
                    return false;
                });
            },
            getCards(event, player) {
                const cards = [];
                player.getHistory("lose", evt => {
                    if (evt.type == "discard") cards.addArray(evt.cards2.filterInD("d"));
                });
                return cards;
            },
            mark: true,
            init: (player, skill) => player.markSkill(skill),
            intro: {
                mark(dialog, storage, player) {
                    if (storage && storage.length > 0) {
                        dialog.addAuto(storage);
                        return '已弃置的牌：' + get.translation(storage);
                    } else {
                        return '没有可使用的牌';
                    }
                },
            },
            async content(event, trigger, player) {
                const usedCards = get.info("xinxluexin").getCards(trigger, player);
                const cards = usedCards.filter(function (i) {
                    return get.position(i, true) == "d" && player.hasUseTarget(i);
                });

                let list = cards.slice();
                while (list.length > 0) {
                    const useResult = await player.chooseButton([
                        '掠星：是否使用其中一张牌？',
                        list
                    ]).set('filterButton', button => {
                        return get.player().hasUseTarget(button.link);
                    }).set('ai', button => {
                        if (button.link.name == 'jiu') return 10;
                        return get.player().getUseValue(button.link);
                    }).forResult();
                    if (useResult.bool) {
                        const card = useResult.links[0];
                        list.remove(card);
                        player.$gain2(card, false);
                        await game.delayx();
                        await player.chooseUseTarget(true, card, false);
                    } else {
                        break;
                    }
                }
                player.storage.xinxluexin = [];
                player.syncStorage('xinxluexin');
                // player.updateMarks();
            },
            group: 'xinxluexin_when',
            subSkill: {
                when: {
                    trigger: {
                        global: 'loseAfter',
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return event.type === 'discard' && event.player === player;
                    },
                    content(event, trigger, player) {
                        const cards = [];
                        player.getHistory("lose", evt => {
                            if (evt.type === "discard") cards.addArray(evt.cards2.filterInD("d"));
                        });
                        // 过滤出可以被使用的卡牌
                        const usableCards = cards.filter(card => player.hasUseTarget(card));
                        // 存储到 player.storage.xinxluexin
                        if (!player.storage.xinxluexin) {
                            player.storage.xinxluexin = [];
                        }
                        player.storage.xinxluexin.addArray(usableCards);
                        //player.updateMarks();
                        player.syncStorage('xinxluexin');
                    }
                }
            }


        },

        xinxyangjian: {

            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: ["useCard", "respond"],
                //player: "loseEnd",

            },
            forced: true,
            locked: true,
            priority: 100,
            filter: function (event, player) {

                //return player.countCards("h") % 2 == 0;
                //return ["trick","basic",'equip'].contains(get.type2(event.card));
                return get.type(event.card) == 'basic' && event.getParent(2).name != "xinxluexin";

            },

            async content(event, trigger, player) {
                if (player.countCards("h")) {
                    await player.chooseToDiscard("he", true, Math.ceil(player.countCards("h") / 2));
                    player.drawTo(player.maxHp);
                }
                else { player.drawTo(player.maxHp); }
            },


            //group:'xinxyangjian_ga', //②每回合限一次。当你于回合外不因使用而失去牌时，你摸等同体力上限的牌。
            subSkill: {
                ga: {
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        player: "loseAfter",
                        //global: "gainAfter",
                        //global: ["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
                    },
                    usable: 1,
                    forced: true,
                    locked: true,

                    filter: function (event, player) {
                        if (player == _status.currentPhase) return false;
                        if (event.name == "lose") {
                            var evt = event.getParent();
                            return evt.name != "useCard";

                        }
                    },

                    async content(event, trigger, player) {
                        const num = player.maxHp;
                        await player.draw(num);

                    }
                }


            },
            /*mod: {
                attackRange(player, num) {
                    return num + 5;
                },
            },
            ai: {
                unequip: true,
                skillTagFilter: function (player) {
                    //return player == _status.currentPhase;
                },
            },*/
        },


        xinxjinbi: {

            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxjinbi1.mp3", "ext:永夜之境/audio/xinxjinbi2.mp3"],
            trigger: {
                player: "phaseEnd",
            },
            forced: true,
            filter: function (event, player) {
                return player.getExpansions('xinxjinbi').length > 0;
            },
            async content(event, trigger, player) {
                var cards = player.getExpansions("xinxjinbi");
                var count = cards.length;
                if (cards.length) player.loseToDiscardpile(cards);
                //  if (cards.length) player.gain(cards).gaintag = ['xinxwusheng_tag']; 获得所有
                player.loseMaxHp(count);
            },
            marktext: "愎",
            mark: true,
            markimage: "image/card/sha.png",
            intro: {
                name: "愎",
                content: "expansion",
                markcount: "expansion",

            },

            group: ["xinxjinbi_damageCancle", "xinxjinbi_gain"],
            subSkill: {
                gain: {
                    audio: "xinxjinbi",
                    logAudio: () => ["ext:永夜之境/audio/xinxjinbi3.mp3", "ext:永夜之境/audio/xinxjinbi4.mp3"],
                    trigger: {
                        source: "damageSource",
                    },
                    forced: true,
                    filter: function (event, player) {
                        return player.getExpansions('xinxjinbi').length > 0;
                    },
                    content() {
                        "step 0";
                        var num = trigger.num, player;
                        var cards = player.getExpansions("xinxjinbi");
                        if (cards.length > 0) {
                            if (cards.length == 1)
                                event._result = {
                                    bool: true,
                                    links: cards,
                                };
                            else player.chooseButton(["请选择获得的“愎”", cards], [1, num], true);

                        } else event.finish();
                        "step 1";
                        if (result.bool) player.gain(result.links, "gain2").gaintag = ['xinxwusheng_tag'];

                    },
                    sub: true,
                    "_priority": 0,
                },
                damageCancle: {
                    audio: "xinxjinbi",
                    logAudio: () => ["ext:永夜之境/audio/xinxjinbi1.mp3", "ext:永夜之境/audio/xinxjinbi2.mp3"],
                    trigger: {
                        player: "damageBegin4",
                    },
                    forced: true,
                    usable: 1,
                    logTarget: "source",
                    filter: function (event, player) {
                        // return event.source ;
                        return event.source != undefined && event.num > 0 && event.source.countGainableCards(player, event.source != player ? "he" : "e");
                    },
                    content: function () {
                        "step 0"
                        trigger.cancel();
                        "step 1"
                        if (trigger.source && trigger.source.countCards("he")) {
                            player.choosePlayerCard(trigger.source, "he", true);
                        } else event.finish();
                        "step 2"
                        if (result.links) {
                            player.addToExpansion(result.links, trigger.source, 'give').gaintag.add('xinxjinbi');
                        };
                    },
                },
            },
            "_priority": 100,
        },

        xinxwusheng: {
            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxwusheng1.mp3", "ext:永夜之境/audio/xinxwusheng2.mp3"],
            trigger: {
                player: "damageBegin4",
                source: "damageBegin2",
            },
            forced: true,
            async content(event, trigger, player) {
                trigger.num += (game.roundNumber - 1);
            },

            mod: {
                cardname: function (card, player, name) {
                    //if (card.name == "shan") return "shuiyanqijunx";
                },
            },
            group: "xinxwusheng_draw",
            subSkill: {
                draw: {
                    audio: "xinxwusheng",
                    logAudio: () => ["ext:永夜之境/audio/xinxwusheng3.mp3", "ext:永夜之境/audio/xinxwusheng4.mp3"],
                    trigger: {
                        player: "useCardToPlayered",
                    },
                    logTarget: "target",
                    usable: 1,
                    filter(event, player) {
                        return event.target != player && event.targets.length == 1 && event.target.countCards("h") > 0;

                    },
                    locked: true,
                    content() {
                        "step 0";
                        trigger.target.showHandcards();
                        game.delayx();
                        "step 1";
                        var cards = trigger.target.getCards("h");
                        var list = [];
                        for (var i = 0; i < cards.length; i++) {
                            list.add(get.color(cards[i]));
                        }
                        if (list.length == 1) event._result = { control: list[0] };
                        else {
                            list.sort();
                            trigger.target
                                .chooseControl(list)
                                .set("prompt", "选择一种颜色")
                                .set("ai", function () {
                                    var player = _status.event.player;
                                    if (get.value(player.getCards("h", { color: "red" })) >= get.value(player.getCards("h", { color: "black" }))) return "black";
                                    return "red";
                                });
                        }
                        "step 2";
                        var cards = trigger.target.getCards("h", { color: result.control });
                        if (cards.length) {
                            player.gain(cards, trigger.target, "giveAuto", "bySelf").gaintag = ['xinxwusheng_tag'];
                            trigger.target.draw(cards.length);
                        }
                        player.addTempSkill('xinxwusheng2');
                    },
                    sub: true,
                    "_priority": 0,
                },
            },
            "_priority": -20,
        },

        xinxwusheng2: {
            charlotte: true,
            onremove(player) {
                player.removeGaintag('xinxwusheng_tag');
            },
            mod: {
                ignoredHandcard: function (card, player) {
                    if (card.hasGaintag('xinxwusheng_tag')) return true;
                },
                cardDiscardable: function (card, player, name) {
                    if (name == 'phaseDiscard' && card.hasGaintag('xinxwusheng_tag')) return false;
                },
            },
        },
        xinxmingshi: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "judge",
            },
            forced: true,
            usable(skill, player) {
                return player.hp;
            },
            content: function () {
                "step 0";
                player.draw();
                var str = get.translation(trigger.player) + "的" + (trigger.judgestr || "") + "判定为" + get.translation(trigger.player.judging[0]) + "，是否发动【明势】修改判定结果？";
                player
                    .chooseControl("spade", "heart", "diamond", "club", "cancel2")
                    .set("prompt", str)
                    .set("ai", function () {
                        //return '取消';
                        var judging = _status.event.judging;
                        var trigger = _status.event.getTrigger();
                        var res1 = trigger.judge(judging);
                        var list = lib.suit.slice(0);
                        var attitude = get.attitude(player, trigger.player);
                        if (attitude == 0) return 0;
                        var getj = function (suit) {
                            return trigger.judge({
                                name: get.name(judging),
                                nature: get.nature(judging),
                                suit: suit,
                                number: 5,
                            });
                        };
                        list.sort(function (a, b) {
                            return (getj(b) - getj(a)) * get.sgn(attitude);
                        });
                        if ((getj(list[0]) - res1) * attitude > 0) return list[0];
                        return "cancel2";
                    })
                    .set("judging", trigger.player.judging[0]);
                "step 1";
                if (result.control != "cancel2") {
                    player.addExpose(0.25);
                    //player.logSkill("xinfu_zhenyi", trigger.player);
                    player.popup(result.control);
                    game.log(player, "将判定结果改为了", "#y" + get.translation(result.control + 2) + 2);
                    trigger.fixedResult = {
                        suit: result.control,
                        color: get.color({ suit: result.control }),
                        number: 2,
                    };
                }
            },
            ai: {
                rejudge: true,
                tag: {
                    rejudge: 1,
                },
                expose: 0.5,
            },
            "_priority": 20,

        },
        xinxqizhen: {
            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxqizhen1.mp3", "ext:永夜之境/audio/xinxqizhen2.mp3"],
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            locked: true,
            priority: 20,
            popup: false,
            filter: function (event, player) {
                return game.hasPlayer(function (current) {
                    return current != player && current.countCards('he');
                });
            },
            check(event, player) {
                return player.hp > 1;
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt("xinxqizhen"), `<div class="text center">获得一名其他角色一张牌</div>`, lib.filter.notMe, function (card, player, target) {
                        return target.countCards('he');
                    })
                    .set("ai", target => get.effect(target, { name: "guohe_copy2" }, get.player(), get.player()))
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                player.logSkill('xinxqizhen', target);
                await player.gainPlayerCard(target, "he", 1, true);
                await player.loseHp();
            },
            ai: {
                order: 10,
                result: {
                    player: function (player, target) {
                        if (player.hp <= 2) return 0;
                    },
                },
            },
            marktext: "奇",
            intro: {
                mark: function (dialog, storage, player) {
                    if (player == game.me || player.isUnderControl()) {
                        var cards = player.getCards("s", function (card) {
                            return card.hasGaintag("xinxqizhen_tag");
                        });
                        if (!cards || !cards.length) return;
                        dialog.addAuto(cards);
                    }
                },
                markcount: function (storage, player) {
                    return player.countCards("s", function (card) {
                        return card.hasGaintag("xinxqizhen_tag");
                    });
                },
                onunmark: function (storage, player) {
                    var cards = player.getCards("s", function (card) {
                        return card.hasGaintag("xinxqizhen_tag");
                    });
                    if (cards.length) {
                        player.loseToDiscardpile(cards);
                    }
                },
            },
            mod: {
                aiOrder: function (player, card, num) {
                    if (get.itemtype(card) == "card" && card.hasGaintag("xinxqizhen_tag"))
                        return (
                            num +
                            (player.countCards("s", function (card) {
                                return card.hasGaintag("xinxqizhen_tag");
                            }) > player.maxHp
                                ? 0.5
                                : -0.5)
                        );
                },
            },
            group: ['xinxqizhen_hp', 'xinxqizhen_ls', 'xinxqizhen_be', 'xinxqizhen_damage'],

            subSkill: {
                hp: {
                    audio: "xinxqizhen",
                    logAudio: () => ["ext:永夜之境/audio/xinxqizhen3.mp3", "ext:永夜之境/audio/xinxqizhen4.mp3"],
                    trigger: {
                        player: "changeHp",
                    },
                    forced: true,
                    // line: {
                    //     color: [235, 96, 138],
                    // },
                    // getIndex: event => Math.abs(event.num),
                    filter(event, player) {
                        return event.num < 0;
                    },
                    async content(event, trigger, player) {
                        //player.loseToSpecial(get.cards(),'xinxqizhen_tag');
                        await player.draw();
                    },
                    priority: 20,
                    sourceSkill: "xinxqizhen",
                },
                ls: {
                    trigger: {
                        player: "loseEnd",
                    },
                    usable: 1,
                    forced: true,
                    sourceSkill: "xinxqizhen",
                    filter: function (event, player) {
                        if (!event.ss || !event.ss.length) return false;
                        for (var i in event.gaintag_map) {
                            if (event.gaintag_map[i].includes("xinxqizhen_tag")) return true;
                            return false;
                        }
                        return player.isDamaged();
                    },
                    async content(event, trigger, player) {
                        await player.recover();
                        //     if (player.maxHp < 5&&player !== _status.currentPhase)
                        //    { player.gainMaxHp();}
                    },
                    priority: 20,
                },
                be: {
                    trigger: {
                        global: ["gameDrawAfter"],
                        player: "gainAfter",
                    },
                    forced: true,
                    popup: false,
                    priority: 20,
                    filter: function (event, player) {
                        if (event.name == 'gain') return event.cards && event.cards.length;
                        return player.countCards('h');
                    },
                    async content(event, trigger, player) {
                        var cards = player.getCards('h');
                        if (cards.length) {
                            player.$give(cards, player, false);
                            game.log(player, "将", cards, "置于了武将牌上");
                            await player.loseToSpecial(cards, "xinxqizhen_tag").visible == true;
                            player.markSkill('xinxqizhen');
                        } else event.finish();
                    }

                }
            }
        },
        xinxshiyu: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                global: "useCard",
            },
            locked: true,
            filter(event, player) {
                if (event.all_excluded || event.player == player) return false;
                //return event.card.name == "tao"|| event.card.name == "jiu";
                return player.getCards('s', function (card) {
                    return card.hasGaintag('xinxqizhen_tag');
                }).length > 0 && event.card.name == "wuxie";
            },
            round: 1,
            async cost(event, trigger, player) {
                let str = "弃置两张“奇”取消" + get.translation(trigger.card) + "的所有目标";
                if (get.type(trigger.card) == "tao") str += "，然后你获得此牌且你可以使用之";
                event.result = await player
                    .chooseToDiscard('s', 2, get.prompt('xinxshiyu', trigger.player), str)
                    .set("ai", card => {
                        return _status.event.goon / 1.4 - get.value(card);
                    })
                    .set(
                        "goon",
                        (function () {
                            if (!trigger.targets.length) return -get.attitude(player, trigger.player);
                            var num = 0;
                            for (var i of trigger.targets) {
                                num -= get.effect(i, trigger.card, trigger.player, player);
                            }
                            return num;
                        })()
                    )
                    .setHiddenSkill("xinxshiyu")
                    .set("logSkill", ["xinxshiyu", trigger.player])
                    .forResult();

            },
            preHidden: true,
            popup: false,
            async content(event, trigger, player) {
                trigger.targets.length = 0;
                trigger.all_excluded = true;
                const cards = trigger.cards.filterInD();
                if (cards.length) {

                    await player.gain(cards, "gain2");
                    for (let i of cards) {
                        //if (player.getCards("h").includes(i) && player.hasUseTarget(i)) {
                        if (player.hasUseTarget(i)) {
                            await player.chooseUseTarget(i);
                        }
                    }
                }
            },
            // group:'xinxshiyu_clear',
            subSkill: {

                clear: {//②当你受到大于1点的伤害时，你可弃置一张“奇”令此伤害减半（向下取整）。

                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        player: "damageBegin4",
                    },

                    forced: true,
                    round: 1,
                    filter: function (event, player) {
                        return event.num > 1 && player.getCards('s', function (card) {
                            return card.hasGaintag('xinxqizhen_tag');
                        }).length > 0;
                    },
                    content: function () {
                        "step 0"
                        player.chooseToDiscard('s', get.prompt('xinxshiyu'), '弃置一张“奇”令此伤害减半', 1, function (card, player) {
                            if (!card.hasGaintag('xinxqizhen_tag')) return false;
                            return true;
                        }).set('complexCard', true).logSkill = 'xinxshiyu';
                        "step 1"
                        if (result.bool) {
                            //event.num=Math.floor(result.cards.length);
                            event.num = Math.floor(result.cards.length);
                        }
                        else {
                            player.storage.counttrigger.xinxshiyu_clear--;
                            event.finish();
                        }
                        "step 2"
                        //var num = (Math.ceil(trigger.num / 2)); //向上取整

                        var num = (Math.floor(trigger.num / 2));//向下取整
                        trigger.num = num;

                    },
                }

            }

        },
        xinxlihuo: {
            trigger: {

                player: "phaseJieshuBegin",
            },
            audio: "ext:永夜之境/audio:4",
            popup: false,
            filter: function (event, player) {
                return player.getCards('s', function (card) {
                    return card.hasGaintag('xinxqizhen_tag');
                }).length > 1;
            },
            check(event, player) {
                return player.getCards('s', function (card) {
                    return card.hasGaintag('xinxqizhen_tag');
                }).length > 5;
            },
            async cost(event, trigger, player) {
                event.result = await player.chooseCardTarget({
                    prompt: get.prompt("xinxlihuo"),
                    prompt2: `<div class="text center">弃置两张“奇”，并对一名其他角色造成一点火焰伤害。</div>`,
                    position: "s",
                    filterCard(card, player) {
                        return card.hasGaintag('xinxqizhen_tag');
                    },
                    selectCard: 2,
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    ai1(card) {
                        return -get.value(card);
                    },
                    ai2(target) {
                        let att = get.attitude(_status.event.player, target);
                        if (att <= 0) return 10;
                        return 2;
                    },
                }).
                    set('complexCard', true).forResult();

            },
            async content(event, trigger, player) {
                await player.discard(event.cards);
                player.logSkill('xinxlihuo', event.targets[0]);
                await event.targets[0].damage('fire', player);
            },
        },
        xinxzhaohan: {
            audio: "ext:永夜之境/audio:4",

            trigger: {
                global: "phaseBegin",

            },
            locked: true,
            forced: true,
            preHidden: true,
            priority: 20,
            async content(event, trigger, player) {
                // var num = player.hp
                // await player.chooseToDiscard(true, 'he',num);
                // player.draw();
                let cards = get.cards(player.hp);
                await game.cardsGotoOrdering(cards);

                const {
                    result: { bool, links },
                } = await player
                    .chooseButton(["昭汉：是否使用其中的一张牌？", cards])
                    .set("filterButton", button => {
                        return get.player().hasUseTarget(button.link);
                    })
                    .set("ai", button => {
                        return get.event().player.getUseValue(button.link);
                    });
                if (bool) {
                    const card = links[0];
                    cards.remove(card);
                    // player.$gain2(card, false);
                    await game.delayx();
                    await player.chooseUseTarget(true, card, false, 'nodistance');
                    cards = cards.filterInD();
                }
                if (cards.length) {
                    cards.reverse();
                    game.cardsGotoPile(cards.filterInD(), "insert");
                    game.log(player, "将", get.cnNumber(cards.length), "张牌置于了牌堆顶");
                }

                if (_status.currentPhase !== player) return false;
                const next = player.chooseToMove('昭汉：替换其中任意张牌');
                next.set('list', [['牌堆顶', cards], ['你的手牌', player.getCards('h')]]);
                next.set('filterMove', (from, to) => typeof to != 'number');
                next.set('filterOk', moved => moved[1].some(i => !get.event().player.getCards('h').includes(i)));
                next.set('processAI', list => {
                    const player = get.event().player;
                    let allcards = list[0][1].slice(0), cards = [];
                    if (list.length > 1) allcards = allcards.concat(list[1][1]);
                    let canchoose = allcards.slice();
                    const getv = button => {
                        if (button.name == 'sha' && allcards.filter(card => {
                            return card.name == 'sha' && !cards.filter(() => button == card).length;
                        }).length > player.getCardUsable({ name: 'sha' })) return 10;
                        return -player.getUseValue(button, player);
                    };
                    while (cards.length < 100) {
                        canchoose.sort((a, b) => getv(b) - getv(a));
                        cards.push(canchoose.shift());
                    }
                    return [cards, canchoose];
                });

                const result = await next.forResult();
                if (result.bool) {
                    event.forceDie = true;
                    const moved = result.moved[0];
                    const hs = player.getCards('h');
                    let lose = [], gain = cards.slice();
                    for (const i of moved) {
                        if (hs.includes(i)) lose.push(i);
                        else gain.remove(i);
                    }
                    if (lose.length) await player.lose(lose.slice().reverse(), ui.cardPile, 'insert');
                    if (gain.length) await player.gain(gain, 'draw');
                    for (const i of moved.slice().reverse()) {
                        if (!(('hejsdx').includes(get.position(i, true)))) {
                            i.fix();
                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                        }
                    }
                    game.updateRoundNumber();
                }
            },
        },
        xinxrenshi: {

            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: "useCardToPlayered",
            },
            usable: 1,
            forced: true,
            filter: function (event, player) {
                // if (player.isPhaseUsing()) return false;
                if (event.player == event.target || event.targets.length != 1) return false;
                return (player == event.player ? event.target : event.player).countCards('h');
            },
            logTarget: function (event, player) {
                return player == event.player ? event.target : event.player;
            },
            check: function (event, player) {
                return get.attitude(player, player == event.player ? event.target : event.player) <= 0;
            },
            content: function () {
                "step 0";
                const target = event.targets[0];
                player
                    .choosePlayerCard(target, "h", "visible", "使用其中一张牌")
                    .set("filterButton", button => {
                        return _status.event.player.hasUseTarget(button.link);
                    })
                    .set("ai", button => {
                        return _status.event.player.getUseValue(button.link);
                    });
                "step 1";
                if (result.bool) {
                    var card = result.links[0];
                    event.card = card;
                    player.$gain2(card, false);
                    game.delayx();
                    player.chooseUseTarget(card, true, false, 'nodistance');
                    event.finish();
                } else event.goto(2);
                "step 2";
                //event.targets[0].chooseToDiscard("he", true, { type: "basic" });
                player.chooseToDiscard("he", true, { type: "basic" });
            },
            priority: 20,
            // group:"xinxrenshi_tar",
            subSkill: {
                tar: {
                    audio: "ext:永夜之境/audio:4",
                    trigger: {
                        target: "useCardToTargeted",
                    },
                    usable: 1,
                    forced: true,
                    filter: function (event, player) {
                        if (event.player == event.target || event.targets.length != 1) return false;
                        return (player == event.player ? event.target : event.player).countCards('h');
                    },
                    logTarget: function (event, player) {
                        return player == event.player ? event.target : event.player;
                    },
                    check: function (event, player) {
                        return get.attitude(player, player == event.player ? event.target : event.player) <= 0;
                    },
                    content: function () {
                        "step 0";
                        const target = event.targets[0];
                        var forced = target.hasCard(i => player.hasUseTarget(i), "h");
                        player
                            .choosePlayerCard(target, "h", "visible", "使用其中一张牌")
                            .set("filterButton", button => {
                                return _status.event.player.hasUseTarget(button.link);
                            })
                            .set("ai", button => {
                                return _status.event.player.getUseValue(button.link);
                            });
                        "step 1";

                        if (result.bool) {
                            var card = result.links[0];
                            event.card = card;
                            player.chooseUseTarget(card, true, false, 'nodistance');
                            event.finish();
                        } else event.goto(2);
                        "step 2";
                        var cards = target.getCards("h", function (card) {
                            return get.type2(card) == "basic" && lib.filter.cardDiscardable(card, player, event);
                        });
                        if (cards.length) target.discard(cards, 1, true);
                        // event.targets[0].chooseToDiscard("he", true,{ type: "basic" }); 
                    },
                }
            }
        },
        xinxchushi: {
            derivation: ["xinxchushid", "xinxchushi_draw", "xinxchushi_lose"],
            audio: "ext:永夜之境/audio:2",
            limited: true,
            skillAnimation: true,
            animationColor: "fire",
            enable: "phaseUse",
            usable: 1,
            filterTarget: true,
            filter(event, player) {
                const storage = player.getStorage("xinxchushi");
                return storage.length < 3;
            },
            async content(event, trigger, player) {
                player.awakenSkill('xinxchushi');
                const target = event.target || player;
                player.loseMaxHp();
                //  const allDerivations = lib.skill.xinxchushi.derivation;
                //  const storage = player.getStorage("xinxchushi");
                //const list = allDerivations.filter(option => !storage.includes(option));

                //const list = ["xinxchushid", "xinxchushi_draw", "xinxchushi_lose"].filter(i => !player.getStorage("xinxchushi").includes(i));
                const list = ["xinxchushid", "xinxchushi_draw", "xinxchushi_lose"];
                let choice;
                if (list.length == 1) choice = { control: list[0] };  //只有一个选项时自动选择
                else
                    choice = await player.chooseControl(list).set('choiceList', (() => {
                        return list.map(i => '<div class="skill">【' + lib.translate[i] + '】</div><div>' + lib.translate[i + '_info'] + '</div>');
                    })())
                        .set("ai", () => {
                            return get.event().choice;
                        })
                        .set("choice", get.attitude(player, target) > 0 ? "xinxchushid" : "xinxchushi_lose")
                        .set("filterButton", button => {
                            const name = button.link[2];
                            return !player.getStorage("xinxchushi").includes(name);
                        })
                        .set("prompt", "选择令" + get.translation(target.name) + "获得一种效果")
                        .set('displayIndex', false).forResult();
                if (choice.control) {
                    const control = choice.control;
                    player.popup(control);
                    target.addSkills(control);
                    //player.markAuto("xinxchushi", [control]);
                    await game.delayx();
                }

            },
            ai: {
                order: 10,
                result: {
                    player: function (target) {
                        const player = _status.event.player;
                        const usedOptions = player.storage.xinxchushi || [];
                        if (usedOptions.length === 1) return -30;
                        if (player == target) {
                            if (!usedOptions.includes("xinxchushid")) {
                                return 20;
                            } else if (!usedOptions.includes("xinxchushi_draw")) {
                                return 15;
                            }
                        }
                        if (player.isEnemyOf(target)) {
                            if (usedOptions.includes("xinxchushid") && usedOptions.includes("xinxchushi_draw")) {
                                return -10;
                            }
                        }
                        return -10;
                    }
                },
            },
            subSkill: {

                damage: {
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        source: "damageBegin2",
                    },
                    forced: true,
                    charlotte: true,
                    //nopop: true,
                    usable: 1,
                    async content(event, trigger, player) {
                        trigger.num++;
                    },
                    mark: true,
                    marktext: "北定",
                    intro: {
                        content: "<li>来自$杏诸葛亮<br><li>当你每回合首次造成伤害时，此伤害+1。当你受到大于1的伤害时，此伤害改为1。",
                    },
                },
                draw: {
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        player: ["phaseZhunbeiBegin", "phaseEnd"],
                    },
                    charlotte: true,
                    forced: true,
                    //nopop: true,
                    async content(event, trigger, player) {
                        await player.draw();
                        const result =
                            await player.
                                chooseCard("请重铸一张牌", 'he', 1, true)
                                .forResult();
                        if (result?.bool && result.cards?.length) {
                            await player.recast(result.cards);
                        }
                    },
                    mark: true,
                    marktext: "整驽",
                    intro: {
                        content: "<li>来自$杏诸葛亮<br><li>准备阶段或结束阶段，你摸一张牌，然后重铸一张牌。",
                    },
                    "_priority": 10,
                },

                lose: {
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        global: "roundStart",
                    },
                    priority: 100,
                    charlotte: true,
                    forced: true,
                    //nopop: true,
                    async content(event, trigger, player) {

                        if (game.getAllGlobalHistory('everything', evt => {
                            return evt.name == 'xinxchushi_lose' && evt.player == player;
                        }).indexOf(event) % 2 == 1) {
                            await
                                player.loseMaxHp();
                            return false;
                        }
                        else player.loseHp();
                    },
                    mark: true,
                    marktext: "攘奸",
                    intro: {
                        content: "<li>来自$杏诸葛亮<br><li>每轮开始时，你失去1点体力。若为偶数次发动技能，则减少1点体力上限。",
                    },
                }
            }
        },
        xinxchushid: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                source: "damageBegin2",
            },
            forced: true,
            charlotte: true,
            //nopop: true,
            usable: 1,
            async content(event, trigger, player) {
                trigger.num++;
            },
            mark: true,
            marktext: "北定",
            intro: {
                content: "<li>来自$杏诸葛亮<br><li>当你每回合首次造成伤害时，此伤害+1。当你受到大于1的伤害时，此伤害改为1。",
            },
            group: 'xinxchushid_cl',
            subSkill: {
                cl: {
                    audio: "ext:永夜之境/audio:1",
                    trigger: {
                        player: "damageBegin4"
                    },
                    forced: true,
                    filter: function (event, player) {
                        return event.num > 1;
                    },
                    async content(event, trigger, player) {
                        trigger.num = 1;
                    },
                }
            }
        },

        xinxyinshi: {

            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: ["useCard", "respond"],
            },
            //chargeSkill: 1,
            usable: 1,
            locked: true,
            // forced: true,
            filter(event, player, name) {
                //  if ((!event.cards) || !player.countCharge()) return false;
                if ((!event.cards)) return false;
                return get.type(event.card) == 'basic' || get.type(event.card) == 'trick';
            },
            async content(event, trigger, player) {
                // await  player.removeMark('charge', 1);
                //   player.gain(game.createCard(trigger.card), "gain2").gaintag = ['xinxyinshi_tag'];
                const card = game.createCard(trigger.card);
                card.classList.add('glow');
                await player.gain(card, "gain2");
                player.addGaintag(card, 'xinxyinshi_tag');
                player.gain(lib.card.ying.getYing(1), "gain2").gaintag = ['xinxyinshi_tag'];

            },
            mod: {
                ignoredHandcard: function (card, player) {
                    if (card.hasGaintag('xinxyinshi_tag')) return true;

                },
                cardDiscardable: function (card, player, name) {
                    if (name == 'phaseDiscard' && card.hasGaintag('xinxyinshi_tag')) return false;

                },

            },
            group: ['xinxyinshi_lose', 'xinxyinshi_charge'],
            subSkill: {
                charge: {

                    trigger: {
                        global: "phaseBefore",
                        player: "enterGame",
                    },
                    forced: true,
                    popup: false,
                    // filter(event, player, name) {
                    //  if (!player.countCharge(true)) return false;
                    // return (name != 'phaseBefore' || game.phaseNumber == 0);
                    // },
                    content() {
                        player.addCharge(3);
                    },
                    sub: true,
                    sourceSkill: "xinxyinshi",
                    "_priority": 120,
                },
                add: {
                    charlotte: true,
                    mod: {
                        ignoredHandcard(card, player) {
                            if (get.name(card) == "ying") return true;
                        },

                        cardDiscardable(card, player, name) {
                            if (name == "phaseDiscard" && (get.name(card) == "ying")) return false;
                        },
                    },

                    sub: true,
                    sourceSkill: "xinxyinshi",
                    "_priority": 0,
                },

                lose: {
                    charlotte: true,
                    trigger: {
                        player: ["loseAfter"],
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    filter: function (event, player) {
                        var evt = event.getl(player);
                        if (!evt || !evt.cards || !evt.cards.length) return false;
                        if (event.name == 'lose') {
                            for (var i in event.gaintag_map) {
                                if (event.gaintag_map[i].includes('xinxyinshi_tag')) return true;
                            }
                            return false;
                        }
                        return player.hasHistory('lose', function (evt) {
                            if (event != evt.getParent()) return false;
                            for (var i in evt.gaintag_map) {
                                if (evt.gaintag_map[i].includes('xinxyinshi_tag')) return true;
                            }
                            return false;
                        });
                    },
                    direct: true,
                    popup: false,
                    priority: 70,
                    content: function () {
                        'step 0'
                        var cardx = []
                        var cards = trigger.getl(player).cards, ids = [];
                        if (trigger.name == 'lose') {
                            for (var i in trigger.gaintag_map) {
                                if (trigger.gaintag_map[i].includes('xinxyinshi_tag')) ids.push(i);
                            }
                        }
                        else player.getHistory('lose', function (evt) {
                            if (trigger != evt.getParent()) return false;
                            for (var i in evt.gaintag_map) {
                                if (evt.gaintag_map[i].includes('xinxyinshi_tag')) ids.push(i);
                            }
                        });
                        for (var card of cards) {
                            if (ids.includes(card.cardid)) cardx.push(card);
                        }
                        game.cardsGotoSpecial(cardx);
                        game.log(cardx, '已移出游戏');
                        'step 1'
                        if (!player.countCards('s', function (card) {
                            return card.hasGaintag('xinxyinshi_tag');
                        })) player.unmarkSkill('xinxyinshi');
                    },
                    sub: true,
                    sourceSkill: "xinxyinshi",
                    "_priority": 100,
                },

            },

        },




        xinxruilue: {
            audio: "ext:永夜之境/audio:2",
            enable: "phaseUse",

            usable: 1,
            filterTarget: function (card, player, target) {
                return target != player && target.countCards("he");
            },
            content() {

                "step 0";
                var ts = target.getCards("he");
                if (ts.length < 1) event.finish();
                else {
                    var hs = player.getCards("he");

                    if (!hs.length) {
                        player.viewCards(get.translation(target) + "的牌");
                        event.finish();
                        return;
                    }
                    var next = player.chooseToMove("睿略：交换任意张牌");
                    next.set("list", [
                        [get.translation(target) + "的牌", ts, "xinxruilue_tag"],
                        ["你的牌", hs],
                    ]);
                    next.set("filterMove", function (from, to, moved) {
                        if (typeof to == "number") return false;
                        var player = _status.event.player;
                        var hs = player.getCards("he");
                        var changed = hs.filter(function (card) {
                            return !moved[1].includes(card);
                        });
                        var changed2 = moved[1].filter(function (card) {
                            return !hs.includes(card);
                        });
                        if (changed.length < 100) return true;
                        var pos1 = moved[0].includes(from.link) ? 0 : 1,
                            pos2 = moved[0].includes(to.link) ? 0 : 1;
                        if (pos1 == pos2) return true;
                        if (pos1 == 0) {
                            if (changed.includes(from.link)) return true;
                            return changed2.includes(to.link);
                        }
                        if (changed2.includes(from.link)) return true;
                        return changed.includes(to.link);
                    });
                    next.set("max", Math.min(hs.length, ts.length, Infinity));
                    next.set('processAI', list => {
                        if (_status.event.max) {
                            let gain = list[0][1].sort((a, b) => {
                                return player.getUseValue(b, null, true) - player.getUseValue(a, null, true);
                            }).slice(0, _status.event.max), give = list[1][1].sort((a, b) => {
                                return get.value(a, player) - get.value(b, player);
                            }).slice(0, _status.event.max);
                            for (let i of gain) {
                                if (get.value(i, player) < get.value(give[0], player)) continue;
                                let j = give.shift();
                                list[0][1].remove(i);
                                list[0][1].push(j);
                                list[1][1].remove(j);
                                list[1][1].push(i);
                                if (!give.length) break;
                            }
                        }
                        return [list[0][1], list[1][1]];
                    });
                }
                "step 1";
                var hs = player.getCards("he"),
                    ts = target.getCards("he");
                var cards1 = [],
                    cards2 = [];
                for (var i of result.moved[0]) {
                    if (!ts.includes(i)) cards1.push(i);
                }
                for (var i of result.moved[1]) {
                    if (!hs.includes(i)) cards2.push(i);
                }
                if (cards1.length) {
                    player.swapHandcards(target, cards1, cards2);
                }
            },
            ai: {
                order: 12,
                result: {
                    target: -1,
                },
            },
            group: 'xinxruilue_tar',
            subSkill: {
                tar: {

                }
            }

        },

        xinxbainei: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "damageEnd",
            },
            persevereSkill: true,
            forced: true,
            filter(event, player) {
                return event.card;
            },
            async content(event, trigger, player) {
                // let cards = [],
                //     num = player.getDamagedHp();
                // while (cards.length < num) {
                //     const card = get.cardPile(card => {
                //         if (get.type(card) != "basic") return false;
                //         if (!cards.length) return true;
                //         return cards.every(cardx => cardx.name != card.name);
                //     });
                //     if (card) cards.add(card);
                //     else break;
                // }
                // if (cards.length) await player.gain(cards, "gain2"); 从牌堆或弃牌堆中获得X张牌名各不相同的基本牌（X为你已损失的体力值）
                if (get.itemtype(trigger.cards) == "cards" && get.position(trigger.cards[0], true) == "o") {
                    await player.chooseUseTarget(trigger.cards, false);
                    if (player.hasHistory('sourceDamage', (evt) => evt.getParent(4) == event)) {
                        await player.tempBanSkill("xinxbainei");
                    }
                }
            },
            group: 'xinxbainei_chong',
            subSkill: {
                chong: {
                    trigger: {
                        global: "phaseAfter",
                    },
                    forced: true,
                    popup: false,
                    logTarget: "player",
                    lastDo: true,
                    async content(event, trigger, player) {
                        const skills = player.getSkills(null, false, false).filter(skill => {
                            var info = get.info(skill);
                            if (info && info.charlotte) {
                                return true;
                            }
                        });
                        if (skills.length) await player.removeSkills(skills);

                    },
                    ai: {
                        expose: 0.5,
                        threaten: 3,
                    },

                },
            }

        },


        xinxlianyin: {

            audio: "ext:永夜之境/audio:2",

            trigger: {
                global: "roundStart",

            },
            filter: function (event, player) {
                return game.hasPlayer(function (target) {
                    return player != target && target.countCards('he');


                });
            },

            forced: true,
            popup: false,
            content: function () {

                'step 0'

                player.chooseTarget(get.prompt2('xinxlianyin'), function (card, player, target) {
                    return player != target && target.countCards('he');
                }).set('ai', function (target) {
                    var player = _status.event.player;
                    return -get.sgn(get.attitude(player, target)) * target.countCards('he');

                });



                'step 1'

                if (result.bool) {
                    var target = result.targets[0];


                    player.logSkill("xinxlianyin", target);
                    target.addToExpansion(target.getCards('he').randomGets(1), 'giveAuto', target).gaintag.add('xinxlianyin');
                    target.addSkill('xinxlianyin_add');

                    // target.chooseCard("北伐：选择一张牌置于武将牌上称为“伐”","he",true);
                    //player.addToExpansion(result.cards,target, "give").gaintag.add("xinxlianyin");

                }


            },
            ai: {
                order: 9,
                result: {
                    target: function (player, target) {
                        if (player.inRange(target)) return -1.3;
                        return -1;
                    },
                },
            },
            //marktext: "营",
            markimage: "image/card/huogong.png",
            onremove: function (player, skill) {
                var cards = player.getExpansions(skill);
                if (cards.length) player.loseToDiscardpile(cards);
            },
            intro: {
                content: "expansion",
                markcount: "expansion",
            },

            group: 'xinxlianyin_gain',
            subSkill: {


                gain: {
                    charlotte: true,
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        //global: "phaseEnd",
                        global: "die",
                        // global: "roundStart",
                    },
                    filter: function (event, player) {
                        return event.player.getExpansions('xinxlianyin').length;
                    },
                    priority: 100,
                    logTarget: "player",

                    forced: true,

                    content: function () {
                        player.gain(trigger.player.getExpansions('xinxlianyin'), trigger.player, 'give');

                    },
                    sub: true,
                    sourceSkill: "xinxlianyin",

                },

                add: {
                    audio: "ext:永夜之境/audio:2",

                    trigger: {
                        //player: ["phaseZhunbeiBegin","phaseJieshuBegin"],
                        player: "useCardToPlayered",

                    },
                    filter: function (event, player) {

                        return player.countCards('he') && player == event.target;


                    },
                    charlotte: true,
                    forced: true,

                    content: function () {

                        'step 0'


                        player.chooseCard("选择一张牌置于武将牌上称为“营”", "he", true);
                        'step 1'

                        if (result.cards) {
                            player.addToExpansion(result.cards, trigger.player, 'give').gaintag.add('xinxlianyin');
                        };



                    },

                }

            },

        },


        xinxfenkui: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "useCard",
            },

            locked: true,
            forced: true,
            filter: function (event, player) {

                var cards = event.player.getExpansions('xinxlianyin');
                if (!cards.filter(function (cardx) {
                    return get.suit(cardx) == get.suit(event.card);
                }).length) return false;

                return event.player.getHistory('useCard', function (evt) {
                    return get.suit(evt.card) == get.suit(event.card);
                })

            },
            logTarget: "player",
            async content(event, trigger, player) {
                var num = player.countMark("xinxfenkui");
                const list = ['横置角色', '造成伤害']
                const enemies = game.filterPlayer(current => current != player && !current.isLinked() && -get.attitude(player, current));
                const result = await player.chooseControl(list).set('prompt', get.skillTranslation(event.name) + ':请选择一项').set('ai', () => {
                    if (enemies.length > 0) {
                        return '横置角色';
                    } else {
                        return '造成伤害';
                    }
                }).set('choiceList', ["横置至多两名角色", "对一名其他角色造成" + (num) + "点火焰伤害"])
                    .forResult();
                switch (result.control) {
                    case '横置角色':
                        const result = await player
                            .chooseTarget("横置至多两名角色", [1, 2], (card, player, target) => {
                                return !target.isLinked();
                            })
                            .set('ai', function (target) {
                                return -get.attitude(_status.event.player, target);
                            })
                            .forResult();
                        if (result.bool) {
                            const targets = result.targets;
                            player.line(targets);
                            player.addMark("xinxfenkui", 1);
                            targets.forEach(i => i.link(true));
                        }
                        break;
                    case '造成伤害':
                        const result1 = await player
                            .chooseTarget("选择一名其他角色，对其造成" + (num) + "点伤害", (card, player, target) => {
                                return target !== player;
                            })
                            .set("ai", target => -get.attitude(_status.event.player, target))
                            .forResult();
                        if (result1.bool) {
                            const target = result1.targets[0];
                            player.line(target);
                            await target.damage('fire', player, num);
                            await player.removeMark(("xinxfenkui"), player.countMark("xinxfenkui"));
                        }
                        break;
                }

            },
            onremove: true,
            marktext: "焚",
            intro: {
                content: "焚溃造成的火焰伤害+#",
            },

        },


        xinxqianyi: {

            audio: "ext:永夜之境/audio:4",
            trigger: {
                global: "phaseJieshuBegin",
            },
            filter(event, player) {
                return lib.skill.xinxqianyi.getCards().length;
            },
            forced: true,
            prompt(event, player) {
                return get.prompt("xinxqianyi") + "（可获得" + get.translation(lib.skill.xinxqianyi.getCards()) + "）";
            },
            async content(event, trigger, player) {
                player.changeSkin({ characterName: "xinx_simayi" }, "xinx_simayi");
                //let cards = lib.skill.xinxqianyi.getCards();
                let cards = get.discarded();
                var num = Math.max(1, player.countMark('xinxqianyi'));
                //var num = player.countMark('xinxqianyi');
                const result = await player.chooseButton(['潜翼：选择获得至多' + get.cnNumber(num) + '张牌', cards], [1, num], true).set('ai', button => {
                    return get.value(button.link, get.event().player);
                }).forResult();
                if (result.bool) {
                    await player.gain(result.links, 'gain2');
                    player.addGaintag(result.links, "xinxqianyi_tag");
                }

                player.when({ global: 'phaseEnd' }).step(async () => {
                    player.unmarkSkill('xinxqianyi');
                    player.removeMark('xinxqianyi', player.countMark('xinxqianyi'));
                });

            },
            getCards() {
                let cards = [],
                    targets = game.players.slice().concat(game.dead.slice());
                for (const target of targets) {
                    const history = target.getHistory("lose", evt => evt.position == ui.discardPile);
                    if (history.length) {
                        for (const evt of history) cards.addArray(evt.cards2.filterInD("d"));
                    }
                }
                const historyx = game.getGlobalHistory("cardMove", evt => evt.name == "cardsDiscard");
                if (historyx.length) {
                    for (const evtx of historyx) cards.addArray(evtx.cards.filterInD("d"));
                }
                return cards.filter(card => get.tag(card, "damage") || !get.tag(card, "damage"));
            },
            "_priority": -10,
            onremove: true,
            marktext: "潜翼",
            intro: {
                content: "本回合已至少使用#张非伤害牌",
            },
            group: ['xinxqianyi_add'],
            //, 'xinxqianyi_clear'
            subSkill: {
                add: {
                    trigger: {
                        player: "useCard",
                    },
                    forced: true,
                    popup: false,
                    "_priority": -10,
                    filter: function (event, player) {
                        return !get.tag(event.card, "damage") && player.countMark("xinxqianyi") < 3;
                    },
                    async content(event, trigger, player) {
                        player.addMark('xinxqianyi', 1, false);
                    },
                },
                clear: {
                    trigger: {
                        global: "phaseEnd",
                        // global: "roundStart",
                    },
                    forced: true,
                    popup: false,
                    nopop: true,
                    charlotte: true,
                    priority: -10,
                    async content(event, trigger, player) {
                        player.removeMark(("xinxqianyi"), player.countMark("xinxqianyi"), false);
                    },
                },

            }
        },

        xinxquanbian: {
            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxquanbian1.mp3", "ext:永夜之境/audio/xinxquanbian2.mp3"],
            trigger: {
                global: "phaseBegin",
            },
            limited: true,
            skillAnimation: true,
            animationColor: "thunder",
            filter: function (event, player) {
                return player.countCards("h", card => card.hasGaintag("xinxqianyi_tag")) >= 3 && event.player != player;
            },
            //async content(event, trigger, player) {
            content: function () {
                "step 0";
                player.awakenSkill(event.name);
                //player.addTempSkill('xinxquanbian_buff', { player: 'phaseUseAfter' });
                player.addSkill('xinxquanbian_buff');
                player.$fullscreenpop("权变", "thunder");
                player.changeSkin({ characterName: "xinx_simayi" }, "xinx_simayi_shadow");
                var next = player.phaseUse();
                event.next.remove(next);
                trigger.next.push(next);


                "step 1";
                var targets = game.filterPlayer(current => {
                    return current.countGainableCards(player, "ej");
                });
                if (targets.length == 0) event._result = { bool: false };
                else if (targets.length == 1) event._result = { bool: true, targets: targets };
                else
                    player
                        .chooseTarget("权变：获得场上的一张牌", true, (card, player, target) => {
                            return target.countGainableCards(player, "ej");
                        })
                        .set("ai", target => {
                            if (target == _status.event.player) return 10;
                            if (get.attitude(_status.event.player, target) < 0) {
                                if (
                                    target.hasCard(card => {
                                        return get.value(card, player) >= 6;
                                    })
                                )
                                    return 12;
                                return 8;
                            }
                            return 0;
                        });
                "step 2";
                if (result.bool) {
                    var target = result.targets[0];
                    event.target = target;
                    player.gainPlayerCard("ej", target, true);
                }
            },

            subSkill: {
                buff: {
                    audio: "xinxquanbian",
                    logAudio: () => ["ext:永夜之境/audio/xinxquanbian3.mp3", "ext:永夜之境/audio/xinxquanbian4.mp3"],
                    trigger: {
                        player: "useCardToPlayer",
                    },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        if (event.target == player || !event.target.countCards("h")) return false;
                        if (event.cards && event.cards.some(c => c.hasGaintag('xinxqianyi_tag'))) return true;
                        // 3. 【核心修复】检查失去牌的历史
                        // 获取当前"使用结算"的父事件（通常是 useCard）
                        var parent = event.getParent();
                        // 在玩家的历史记录中，找到由同一个父事件触发的“失去牌(lose)”事件
                        var history = player.getHistory('lose', function (evt) {
                            return evt.getParent() === parent;
                        });
                        // 遍历找到的失去事件
                        for (var i = 0; i < history.length; i++) {
                            var evt = history[i];
                            // 检查 gaintag_map (这是无名杀专门用来备份丢失牌标签的属性)
                            if (evt.gaintag_map) {
                                for (var key in evt.gaintag_map) {
                                    if (evt.gaintag_map[key].includes("xinxqianyi_tag")) {
                                        return true;
                                    }
                                }
                            }
                            if (evt.cards && evt.cards.some(c => c.hasGaintag('xinxqianyi_tag'))) {
                                return true;
                            }
                        }
                        return false;
                    },
                    logTarget: "target",
                    async content(event, trigger, player) {
                        const target = trigger.target;
                        target.chooseToDiscard(1, "h", true, { color: "red" })
                            .set('prompt', "权变：弃置一张红色手牌");
                    },
                }
            }
        },
        //当有角色使用虚拟牌或点数为7的牌时，你可以选择一名其他角色，并从牌堆或弃牌堆中获得三张类型各不相同的牌，然后你选择一项：1.令其执行与你同样的操作；2.令其弃置一种类型的所有手牌。
        xinxshunhua: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "useCard",
            },
            filter(event, player) {
                // if (event.getParent(2).name === 'xinxshunhua') return false;
                // return (get.is.convertedCard(event.card) || get.is.virtualCard(event.card));
                return (get.is.virtualCard(event.card));

            },
            usable: 1,
            frequent: true,
            init(player) {
                player.storage.xinxshunhuaCount = 0;
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2("xinxshunhua"), function (card, player, target) {
                        return target != player;
                    })         // , function (card, player, target) {  return target != player ; }
                    .set("ai", target => {
                        const player = get.player();
                        const attitude = get.attitude(player, target);
                        // 检查是否存在队友
                        const hasAlly = game.hasPlayer(current => get.attitude(player, current) > 0 && current !== target);
                        // 存在队友：优先选择队友
                        if (hasAlly && attitude >= 1) {
                            return 3; // 更高的评分表示更高的优先级
                        }
                        // 不存在队友：选择敌人
                        if (hasAlly && attitude <= 0) {
                            return 1; // 确保敌人也能被选择
                        }
                    })
                    .forResult();
            },

            async content(event, trigger, player) {
                const num = Math.max(1, 3 - player.storage.xinxshunhuaCount);
                const target = event.targets[0];
                var cards = [];
                for (var i = 0; i < num; i++) {
                    var card = get.cardPile(cardx => {
                        return cards.filter(cardxx => get.type2(cardxx) == get.type2(cardx)).length == 0;
                    }, "random");
                    if (card) cards.push(card);
                }
                if (cards.length) player.gain(cards, "gain2");

                const attitude = get.attitude(player, target);

                // 根据态度选择不同的选项
                let choiceIndex;
                if (attitude > 0) { // 目标是队友
                    choiceIndex = 0; // 选项一：令其执行相同操作
                } else { // 目标是敌人
                    choiceIndex = 1; // 选项二：令其弃置手牌
                }
                const list = ['令其摸牌', '令其弃牌']
                const result = await player.chooseControl(list).set('prompt', get.skillTranslation(event.name) + ':请选择一项').set('ai', () => choiceIndex)
                    .set('choiceList', ["令其从牌堆或弃牌堆中获得" + num + "张类型各不相同的牌", "令其弃置一种类型的所有手牌"])
                    .forResult();
                switch (result.control) {
                    case '令其摸牌':
                        var cards = [];
                        for (var i = 0; i < num; i++) {
                            var card = get.cardPile(cardx => {
                                return cards.filter(cardxx => get.type2(cardxx) == get.type2(cardx)).length == 0;
                            }, "random");
                            if (card) cards.push(card);
                        }
                        if (cards.length) target.gain(cards, "gain2");
                        break;
                    case '令其弃牌':
                        const getNum = type => {
                            let num = ["basic", "trick", "equip"].indexOf(type);
                            if (num === -1) num = 3;
                            return num;
                        };
                        const types = target
                            .getDiscardableCards(target, "h")
                            .reduce((list, card) => {
                                return list.add(get.type2(card));
                            }, [])
                            .sort((a, b) => getNum(a) - getNum(b));
                        if (types.length) {
                            const {
                                control
                            } = await target
                                .chooseControl(types)
                                .set("ai", () => {
                                    const target = get.event().player,
                                        types = get.event().controls.slice();
                                    const getNum = type => {
                                        const cards = target.getDiscardableCards(target, "h").filter(card => get.type2(card) == type);
                                        const countCards = (target, player, cards) => {
                                            return target.countCards("h") - (target == player ? cards.length : 0);
                                        };
                                        const max = game
                                            .findPlayer(target => {
                                                return !game.hasPlayer(target2 => {
                                                    return countCards(target2, player, cards) > countCards(target, player, cards);
                                                });
                                            })
                                            .countCards("h");
                                        return (
                                            Math.min(
                                                max,
                                                cards.reduce((sum, card) => sum + get.cardNameLength(card), 0)
                                            ) / cards.length
                                        );
                                    };
                                    return types.sort((a, b) => {
                                        return getNum(b) - getNum(a);
                                    })[0];
                                })
                                .set("prompt", "弃置一种类别的所有手牌").forResult();
                            if (control) {
                                const cards = target.getDiscardableCards(target, "h").filter(card => get.type2(card) == control);
                                await target.discard(cards);
                            }
                        }
                        break;
                }
                player.storage.xinxshunhuaCount++;



            }

        },

        xinxbaiyi: {
            audio: "ext:永夜之境/audio:2",
            enable: "phaseUse",

            // usable: 1,
            filter(event, player, name) {
                return player.getStorage("xinxbaiyi_used").length < 2;
            },
            filterTarget: function (card, player, target) {
                if
                    (player.getStorage("xinxbaiyi_used").length >= 2) {
                    return false;
                }

                return target.countCards("hej") > 0 || target.countCards("xs") > 0;
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const name = get.translation(target.name);
                const dialog = ["请选择一项", [[["draw", `将${name}区域内的一半牌置于其武将牌上`],
                ["gain", `获得${name}武将牌上所有的牌`],], "textbutton",],
                ];
                const next = player.chooseButton(dialog, true);
                next.set("targetx", target);
                next.set("filterButton", function (button) {
                    const evt = _status.event;
                    const { targetx } = evt;
                    if (player.getStorage("xinxbaiyi_used").includes(button.link)) return false;
                    if (button.link == "gain") {
                        return targetx.countCards("xs", card => !card._cardid) > 0; //&&!player.getStorage("xinxbaiyi_used").includes(button.link)
                    }
                    if (button.link === "draw") {
                        return targetx.countCards("hej") > 0;
                    }
                    return true;
                })
                next.set("ai", function (button) {
                    if (button.link === "gain" && target.countCards("xs", card => !card._cardid) > 0) {
                        return "gain";
                    }
                    if (button.link === "draw" && target.countCards("xs", card => !card._cardid) < 0) {
                        return 'draw';
                    }
                    //return (!player.getStorage("xinxbaiyi_used").includes(button.link));
                });
                ;
                const result = await next.forResult();
                if (result.bool) {
                    switch (result.links[0]) {
                        case "gain":
                            await player.gain(target.getCards("xs", card => !card._cardid), "draw");
                            //target.loseHp();
                            break;
                        case "draw":
                            var num = Math.ceil(target.countCards("hej") / 2);
                            const {
                                cards
                            } = await //   target.chooseCard("he", num, "将一半牌置于武将牌上");
                                    player.choosePlayerCard(target, "hej", num, "将一半牌置于其武将牌上", true).forResult();
                            if (result.cards) {
                                target.addToExpansion(cards, "giveAuto", target).gaintag.add("xinxbaiyi_gain");
                                player.addSkill("xinxbaiyi_gain");
                            }
                            break;
                    }
                    player.addTempSkill("xinxbaiyi_used", "phaseEnd");
                    player.markAuto("xinxbaiyi_used", [result.links[0]]);
                }
            },

            ai: {
                order: 8,
                expose: 0.2,
                result: {
                    target: -1,
                },
            },
            "_priority": 0,
            subSkill: {
                used: {
                    charlotte: true,
                    onremove: true,
                    sub: true,
                    sourceSkill: "xinxbaiyi",
                    "_priority": 0,
                },
                gain: {
                    trigger: {
                        // global: "dying",
                        global: "phaseEnd",
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return event.player.getExpansions('xinxbaiyi_gain').length > 0;
                    },
                    // async content(event, trigger, player) {
                    content: function () {
                        "step 0";

                        var cards = trigger.player.getExpansions("xinxbaiyi_gain");
                        player.chooseButton(["请选择获得的“白衣”", cards], 1);


                        "step 1";
                        if (result.bool) player.gain(result.links, "gain2");

                    },
                    intro: {
                        markcount: "expansion",
                        mark(dialog, storage, player) {
                            var cards = player.getExpansions('xinxbaiyi_gain');
                            if (player.isUnderControl(true)) dialog.addAuto(cards);
                            else return '共有' + get.cnNumber(cards.length) + '张牌';
                        },
                    },
                    sub: true,
                    sourceSkill: "xinxbaiyi",
                    "_priority": 0,
                },

            },

        },
        //锁定技。①当你使用黑色牌时，你获得一枚“学”。你的手牌上限+X（X为你的“学”数）。②当你造成或受到伤害时，你可移去任意枚“学”，摸等量的牌并观看牌堆顶五张牌，然后获得等量的牌。
        xinxtaoyin: {

            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "loseAfter",
                global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
            },
            forced: true,
            popup: false,
            filter: function (event, player) {
                const suits = 'spade';
                const evt = event.getl(player);
                if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                return evt.cards2.some(card => {
                    return suits.includes(get.suit(card, player));
                });
            },
            async content(event, trigger, player) {
                const suits = 'spade';
                const num = trigger.getl(player).cards2.filter(card => {
                    return suits.includes(get.suit(card, player));
                }).length;
                //player.addMark('xinxtaoyin_buff', num, false);
                if (!player._xinxtaoyin_count) player._xinxtaoyin_count = 0;
                player._xinxtaoyin_count += num;
                // 检查累计是否 ≥ 2
                while (player._xinxtaoyin_count >= 3) {
                    player.logSkill("xinxtaoyin");
                    player.addMark('xinxtaoyin_buff', 1, false);
                    player._xinxtaoyin_count -= 3;
                }
            },

            group: ['xinxtaoyin_buff', 'xinxtaoyin_damage'],
            subSkill: {
                buff: {

                    markimage: "image/card/handcard.png",
                    intro: {
                        name: "学",
                        content: function (storage, player) {
                            return "手牌上限+" + storage;
                        },
                    },
                    mod: {
                        maxHandcard: function (player, num) {
                            return num + player.countMark("xinxtaoyin_buff");
                        },
                    },
                    sub: true,
                    sourceSkill: "xinxtaoyin",
                    "_priority": 0,
                },
                damage: {

                    audio: "ext:永夜之境/audio:3",
                    trigger: {
                        source: "damageBegin1",
                        player: "damageBefore",
                    },
                    // usable:1,
                    filter: function (event, player) {
                        return player.hasMark('xinxtaoyin_buff');
                    },
                    async content(event, trigger, player) {
                        const target = trigger.target;
                        // player.countMark("xinxtaoyin_buff")
                        const list = Array.from({ length: Math.min(5, player.countMark("xinxtaoyin_buff")) }, (_, i) => {
                            return get.cnNumber(i + 1, true);
                        });
                        const result = await player
                            .chooseControl(list, "cancel2")
                            .set("prompt", "韬隐：是否移去任意枚“学”？")
                            .set("prompt2", `若如此做，你摸等量的牌并观看牌堆顶五张牌获得等量的牌`)
                            .set("ai", () => get.event().choice)
                            .forResult();
                        if (result.control === "cancel2") return;
                        const toRemoveCount = result.index + 1;

                        player.popup(get.cnNumber(toRemoveCount) + "张");
                        player.removeMark("xinxtaoyin_buff", toRemoveCount);
                        // player.changeHujia(toRemoveCount);
                        var num = toRemoveCount
                        // player.draw(toRemoveCount);
                        let cards = game.cardsGotoOrdering(get.cards(5)).cards;
                        const result1 = await player
                            .chooseButton([`获得${num}张牌`, cards], num, true)
                            .set("ai", function (button) {
                                var player = _status.event.player,
                                    card = button.link;
                                var getn = function (card) {
                                    return player.countCards("h", card.name) + ui.selected.buttons.filter(button => button.link.name == card.name).length;
                                };
                                var val = player.getUseValue(card);
                                if (card.name == "tao" && getn(card) >= player.getDamagedHp()) return 0;
                                if (card.name == "sha" && getn(card) >= player.getCardUsable("sha")) return 0;
                                if (get.suit(card) === 'spade') {
                                    val += 50; // 为黑桃牌增加50的价值
                                }
                                return val;
                            })
                            .forResult();
                        if (result1.bool) {
                            await player.gain(result1.links, "gain2");
                            cards.removeArray(result1.links);
                        }
                        cards.reverse();
                        for (var i = 0; i < cards.length; i++) {
                            ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
                        }

                    },



                }

            }

        },

        xinxpixing: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            frequent: true,
            async content(event, trigger, player) {

                //get.cards
                // bottomCards
                var num = Math.min(5, 1 + player.countMark("xinxpixing"));
                let cards = game.cardsGotoOrdering(get.bottomCards(num + 2)).cards;
                const result1 = await player
                    .chooseButton([`是否获得${num}张牌？`, cards], num)
                    .set("ai", function (button) {
                        if (ui.selected.buttons.length + 1 >= _status.event.maxNum) return 0;
                        return get.value(button.link);
                    })
                    .set("maxNum", num)
                    .forResult();
                if (result1.bool) {
                    await player.gain(result1.links, "gain2");
                    cards.removeArray(result1.links);
                }
                cards.reverse();


                const next = player.chooseToMove();
                next.set("list", [["牌堆顶", cards.filterInD()], ["牌堆底"]]);
                next.set("prompt", "披星：点击或拖动将牌移动到牌堆顶或牌堆底");
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
                            if (get.value(cards[0], player) <= 5) break;
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
                    if (event.top_cards.includes(card)) return ui.cardPile.firstChild;
                    return null;
                });
                player.popup(get.cnNumber(top.length) + "上" + get.cnNumber(bottom.length) + "下");
                game.log(player, "将" + get.cnNumber(top.length) + "张牌置于牌堆顶");
                await game.delayx();


            },
            //  marktext: "披星",
            // mark: true,
            intro: {
                content: "〖披星〗可获得的牌+#",
            },
            "_priority": 1000,
            group: 'xinxpixing_kill',
            subSkill: {
                kill: {
                    trigger: {
                        source: "dieAfter",
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        player.addMark('xinxpixing');
                        player.markSkill("xinxpixing");
                    }

                },
            }
        },
        xinxbeifa: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "useCardToPlayer",
                target: "useCardToTarget",
            },

            forced: true,
            filter: function (event, player) {

                const phaseUse = event.getParent("phaseUse");
                if (!phaseUse || phaseUse.name !== "phaseUse") return false;
                //|| phaseUse.player === player
                return event.card.isCard && event.cards.length == 1 && event.targets.length == 1 && get.type2(event.card) != 'equip' && get.position(event.cards[0], true) == "o" && event.card.name == event.cards[0].name;
                //event.targets.length == 1     && get.position(event.cards[0], true) == "o" && event.card.name == event.cards[0].name
            },
            logTarget: function (event, player) {
                return player == event.player ? event.target : event.player;
            },
            check: function (event, player) {
                return get.attitude(player, player == event.player ? event.target : event.player) <= 0;
            },
            content: function () {
                var target = trigger.target;

                target.addToExpansion(trigger.cards, 'gain2').gaintag.add('xinxbeifa');


            },
            marktext: "伐",
            intro: {
                name: "伐",
                content: "expansion",
                markcount: "expansion",
            },

            group: "xinxbeifa_jieshu",
            subSkill: {
                jieshu: {
                    trigger: {
                        global: "phaseBegin",
                    },
                    forced: true,
                    filter(event, player) {
                        return event.player.getExpansions("xinxbeifa").length;
                    },
                    "prompt2": "依次使用或打出你所有的“伐”",
                    async content(event, trigger, player) {
                        player.addTempSkill("xinxbeifa_use");
                        while (trigger.player.getExpansions("xinxbeifa").length) {
                            const card = trigger.player.getExpansions("xinxbeifa")[0];
                            if (player.hasUseTarget(card)) {
                                const result = await player.chooseUseTarget(card, false, 'nodistance').forResult();
                                if (!result.bool) break;
                            } else break;
                        }
                        player.removeSkill("xinxbeifa_use");
                    },
                    sub: true,
                    sourceSkill: "xinxbeifa",
                    "_priority": 100,
                },
                use: {
                    enable: ["chooseToUse", "chooseToRespond"],
                    filter(event, player) {
                        if (!event.xinxbeifa) return false;
                        let card = event.xinxbeifa;
                        return event.filterCard(card, player, event);
                    },
                    onChooseToUse(event) {
                        if (game.online) return;
                        var player = event.player;
                        if (!player.getExpansions("xinxbeifa").length) event.set("xinxbeifa", false);
                        else event.set("xinxbeifa", player.getExpansions("xinxbeifa")[0]);
                    },
                    onChooseToRespond(event) {
                        if (game.online) return;
                        var player = event.player;
                        if (!player.getExpansions("xinxbeifa").length) event.set("xinxbeifa", false);
                        else event.set("xinxbeifa", player.getExpansions("xinxbeifa")[0]);
                    },
                    filterCard(card, player) {
                        return card == _status.event.xinxbeifa;
                    },
                    selectCard: -1,
                    position: "x",
                    viewAs(cards, player) {
                        let card = _status.event.xinxbeifa;
                        if (card) return card;
                        return null;
                    },
                    prompt(event, player) {
                        let card = _status.event.xinxbeifa;
                        return `是否使用${get.translation(card)}？`;
                    },
                    precontent() {
                        event.result.card = event.result.cards[0];
                    },
                    hiddenCard(player, name) {
                        if (!player.getExpansions("xinxbeifa").length) return false;
                        return get.name(player.getExpansions("xinxbeifa")[0], false) == name;
                    },
                    ai: {
                        respondSha: true,
                        respondShan: true,
                        skillTagFilter(player, tag) {
                            let name = tag.slice(7).toLowerCase();
                            if (!player.getExpansions("xinxbeifa").length) return false;
                            return get.name(player.getExpansions("xinxbeifa")[0], false) == name;
                        },
                    },
                    sub: true,
                    sourceSkill: "xinxbeifa",
                    "_priority": 0,
                },
            },
        },

        xinxlianbing: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "useCardToPlayered",
            },
            usable: 1,
            check: function (event, player) {
                return get.attitude(player, event.target) < 0;
            },
            filter: function (event, player) {
                if (player.isPhaseUsing()) return false;
                return event.targets.length == 1 && event.target !== player;
                // && player.canCompare(event.target)
            },
            logTarget: "target",
            content: function () {
                "step 0";
                player.draw();
                "step 1";
                if (player.canCompare(trigger.target))
                    player.chooseToCompare(trigger.target);
                else event.finish();
                "step 2";
                if (result.bool) {
                    var card2 = result.target;
                    if (get.position(card2) == "d") player.gain(card2, "gain2");

                } else
                    event.finish();
                "step 3";
                if (result.bool && trigger.target.countCards('h') >= player.countCards('h')) event.goto(0);
            },
            "_priority": 100,

        },

        xinxbugui: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "phaseJieshuBegin",
            },

            filter: function () {
                return game.countPlayer(function (current) {
                    return current.getExpansions('xinxbeifa').length > 0;
                }) > 1;
            },
            forced: true,
            animationColor: "thunder",
            skillAnimation: true,
            juexingji: true,
            logTarget: function () {
                return game.filterPlayer(function (current) {
                    return current.getExpansions('xinxbeifa').length > 0;
                });
            },
            derivation: "xinxpixing",
            content() {
                "step 0"
                player.awakenSkill('xinxbugui');
                "step 1"
                player.loseMaxHp();
                player.addSkill('xinxpixing');
            }

        },

        xinxfeiyan: {
            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxfeiyan1.mp3", "ext:永夜之境/audio/xinxfeiyan2.mp3"],
            trigger: {
                player: "phaseChange",

            },
            filter: function (event, player) {
                if (event.phaseList[event.num].startsWith("phaseJudge")) return true;
                // phaseJudge
                // phaseZhunbei
                return false;
            },
            unique: true,
            forced: true,
            "_priority": 1000,
            async content(event, trigger, player) {

                var list;
                var grouplist;

                if (_status.characterlist) {
                    list = [];
                    grouplist = [];
                    for (var i = 0; i < _status.characterlist.length; i++) {
                        var name = _status.characterlist[i];
                        list.push(name);
                    }
                }

                var players = game.players.concat(game.dead);
                for (var i = 0; i < players.length; i++) {
                    list.remove(players[i].name);
                    list.remove(players[i].name1);
                    list.remove(players[i].name2);
                }
                list.remove(name);


                trigger.phaseList[trigger.num] = "phaseUse|xinxfeiyan";
                const newPair = [];
                for (const i of [player.name1, player.name2]) {
                    if (!i) continue;
                    if (i == "xinx_lvlingqi") {

                        const next = player.chooseButton(["请选择变身对象", [list.randomGets(5), "character"]], true);
                        next.set("ai", function (button) {
                            return Math.random() - 1;
                        });
                        //const { result } = await next;
                        const result = await next.forResult();
                        if (result.bool) {
                            newPair.push(result.links[0]);
                        }
                    } else {
                        newPair.push(i);
                    }
                }
                await player.changeCharacter(newPair);
                player.draw();
                player.addSkill("xinxfeiyan_back");


            },
            subSkill: {
                back: {
                    audio: "xinxfeiyan",
                    logAudio: () => ["ext:永夜之境/audio/xinxfeiyan3.mp3", "ext:永夜之境/audio/xinxfeiyan4.mp3"],
                    trigger: {
                        player: "phaseUseAfter",
                        // player:"phaseEnd",
                    },
                    // silent: true,
                    charlotte: true,
                    async content(event, trigger, player) {


                        const newPair = [];
                        for (const i of [player.name1, player.name2]) {
                            if (!i) continue;

                            newPair.push("xinx_lvlingqi");

                        }
                        await player.changeCharacter(newPair);
                        await player.draw();
                        player.removeSkill("xinxfeiyan_back");
                    },
                    sub: true,
                    sourceSkill: "xinxfeiyan",
                    forced: true,
                    "_priority": 100,
                },
            },

        },

        xinxciyou: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: "phaseUseBegin",
            },
            popup: false,
            forced: true,
            content: function () {
                "step 0"

                var card = get.cardPile2(card => {
                    return get.tag(card, "damage");
                });
                if (card) {
                    event.card = card;
                    player.gain(card, "gain2").gaintag.add("xinxciyou_tag");
                    player.markAuto("xinxciyou", card);

                }
            },

            group: ["xinxciyou_gain", "xinxciyou_effect", 'xinxciyou_cancel'],
            subSkill: {
                gain: {

                    audio: "xinxciyou",
                    logAudio: () => ["ext:永夜之境/audio/xinxciyou3.mp3", "ext:永夜之境/audio/xinxciyou4.mp3"],

                    trigger: {
                        player: "phaseJieshuBegin",
                    },
                    filter: function (event, player) {
                        const targets = game.players.slice().concat(game.dead);
                        return targets.some(target => target.getStorage("xinxciyou").filterInD("d").length);
                    },
                    forced: true,
                    content: function () {
                        const targets = game.players.slice().concat(game.dead);
                        const cards = targets.reduce((list, target) => list.addArray(target.getStorage("xinxciyou").filterInD("d")), []);
                        player.gain(cards, "gain2").gaintag.add("xinxciyou_tag");
                    },
                    sub: true,
                    sourceSkill: "xinxciyou",
                    "_priority": 100,

                },

                effect: {
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        source: "damageBegin1",
                    },
                    filter: function (event, player) {
                        return event.cards && event.cards.some(card => player.getStorage("xinxciyou").includes(card));
                    },
                    forced: true,
                    charlotte: true,
                    direct: true,
                    content: function () {
                        "step 0";
                        player.logSkill("xinxciyou_effect", trigger.player);
                        trigger.player.loseHp();
                        player.recover();
                        player.addMark('xinxciyou_cancel');
                        player.markSkill("xinxciyou");
                    },
                    sub: true,
                    sourceSkill: "xinxciyou",
                    "_priority": 100,
                },
                cancel: {
                    trigger: {
                        player: "phaseDiscardBefore",
                    },
                    charlotte: true,
                    forced: true,
                    popup: false,
                    filter: function (event, player) {
                        return player.countMark("xinxciyou_cancel") > 0;
                    },
                    content: function () {
                        trigger.cancel();
                        player.removeMark(("xinxciyou_cancel"), player.countMark("xinxciyou_cancel"));
                    },

                    intro: {
                        markcount: () => 0,
                        content: "跳过下个弃牌阶段",
                    },

                },

            }
        },

        xinxjishi: {          //犄势：锁定技。当一名角色使用不为其手牌区的牌时，你视为使用一张牌名和元素相同牌。

            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "useCard",
            },
            filter(event, player) {
                if (event.getParent(2).name === 'xinxjishi') return false;

                // return (get.is.virtualCard(event.card)) ;
                if (get.type(event.card) == "equip" || get.type(event.card) == 'delay') return false;

                // return (get.is.convertedCard(event.card) || get.is.virtualCard(event.card));
                return !game.hasPlayer2(current => {
                    if (current != event.player) return false;
                    return current.hasHistory("lose", evt => {
                        return evt.getParent() == event && evt.hs.length > 0;
                    });
                });

            },
            forced: true,

            async content(event, trigger, player) {

                var card = {
                    name: trigger.card.name,
                    nature: trigger.card.nature,
                    isCard: true,
                };
                event.card = card;
                player.$gain2(card, false);
                await game.delayx();
                await player.chooseUseTarget(card, false, 'nodistance');
            },
        },


        xinxxinlue: {   //心略：每回合限一次，当一名角色使用牌时，你观看当前回合角色手牌并可以重铸其一张牌，然后你可以使用此牌。
            audio: "ext:永夜之境/audio:2",
            trigger: {
                target: "useCardToTargeted",
            },
            logTarget: "player",
            filter: function (event, player) {
                return _status.currentPhase;
            },
            frequent: true,
            usable: 1,
            async content(event, trigger, player) {
                const target = _status.currentPhase;

                var forced = target.hasCard(i => player.hasUseTarget(i), "h");
                const result = await player
                    .choosePlayerCard(target, "he", "visible", 1, "是否重铸" + get.translation(target) + "一张牌？")
                    .set("filterButton", button => {
                        const player = get.event().getParent().target;
                        return lib.filter.cardRecastable(button.link, player);
                    })
                    .set("ai", button => {
                        const card = button.link;
                        if (card.name === "sha") return 6;
                        if (get.type(event.card) === 'trick' && get.tag(event.card, 'damage')) return 4;
                        if (card.name === "tao") return 3;
                        return lib.skill.zhiheng.check(card);
                    })
                    .forResult();
                if (result?.bool && result.cards?.length) {

                    await target.recast(result.cards);

                    if (get.type(event.card) == 'delay') return false;
                    player.$gain2(result.cards, false);
                    await game.delayx();
                    await player.chooseUseTarget(result.cards, false, 'nodistance');

                }

            },

        },


        xinxhemou: {//合谋：准备阶段，你可以选择一名其他角色并展示牌堆底X张牌（X为场上存活人数，至多为5），其依次使用其中的伤害牌。若其以此法使用的牌造成过伤害，你摸X张牌，否则其失去2点体力。
            audio: "ext:永夜之境/audio:3",
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            filter(event, player) {
                return game.hasPlayer(current => current != player);
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2("xinxhemou"), function (card, player, target) {
                        return target != player;
                    })         // , function (card, player, target) {  return target != player ; }
                    .set("ai", target => {
                        const player = get.player(),
                            hs = game.countPlayer();
                        if (get.attitude(player, target) <= 0 && target.hp <= Math.floor(target.maxHp)) return hs * 2;
                        return hs;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];

                let cards = game.cardsGotoOrdering(get.bottomCards(Math.min(5, game.countPlayer()))).cards;
                await player.showCards(cards, get.translation(player) + "发动了〖合谋〗");
                let damages = cards.filter(card => get.tag(card, "damage") && player.canUse(card, target, false)),
                    nodamages = cards.filter(card => !get.tag(card, "damage"));

                let card;
                if (damages.length == 1) card = damages[0];

                for (let i = 0; i < cards.length; i++) {
                    let result = { bool: false };
                    const card = cards[i];
                    if (get.tag(card, 'damage') >= 1 && target.hasUseTarget(card)) {
                        result = await target.chooseUseTarget(card, true).forResult();
                    };
                    if (result.bool) cards.splice(i--, 1);
                };
                if (cards.length) {
                    //  await game.cardsGotoPile(cards,'insert');
                    await game.cardsGotoPile(cards, 'bottom');

                };

                if (target.hasHistory('sourceDamage', (evt) => evt.getParent(4) == event)) {
                    await player.draw(game.countPlayer());

                }
                else {
                    target.loseHp(1);
                    const cards2 = target.getCards("he", function (card) {
                        return get.suit(card) == "spade" && lib.filter.cardDiscardable(card, player, event);

                    });
                    // if(cards2.length) target.discard(cards2);

                    // if(cards2.length) player.gain(cards2, target,'giveAuto');

                    if (cards2.length) {

                        const result1 = await target.chooseButton(["选择交给" + get.translation(player) + "一张♠牌", cards2], true).forResult();
                        if (result1.bool) {
                            player.gain(result1.links, target, 'giveAuto');
                        }
                    }
                }

            },

            priority: 100,

        },


        xinxweixi: {
            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxweixi1.mp3", "ext:永夜之境/audio/xinxweixi2.mp3"],

            trigger: {
                // player: ["phaseBefore", "changeHp"],
                player: "phaseBefore",
                //  "damageBegin","loseHpBegin"
            },

            logTarget: "player",
            forced: true,

            async content(event, trigger, player) {
                const num = game.countPlayer();
                await player.gain(lib.card.ying.getYing(1), "gain2");
                const result = await player.chooseCard("he", true, [1, num], "将至多" + num + "张牌置于牌堆底").set('ai', (card) => {
                    if (card.name == "ying" && player.countCards("h", card => card.name == "ying") <= 1) return -5;
                    return 6 - get.value(card);
                }).forResult();
                if (result?.bool && result.cards?.length) {
                    game.log(player, "将 " + result.cards.length + "张牌置于了牌堆底");
                    player.lose(result.cards, ui.cardPile, 'bottom');
                    await player.$throw(result.cards.length, 1000);

                }
                await player.draw(result.cards.length);
                await game.delayx();
            },
            group: ['xinxweixi_use'],

            subSkill: {

                use: {
                    audio: "ext:永夜之境/audio:2",
                    enable: "chooseToUse",
                    hiddenCard(player, name) {
                        return get.type(name) == 'basic' && player.hasCard(function (card) {
                            return get.name(card) == "ying";
                        });
                    },
                    filter(event, player) {
                        for (var i of lib.inpile) {
                            if (get.type(i) != 'basic') continue;
                            if (event.filterCard({ name: i }, player, event)) {
                                return player.hasCard(function (card) {
                                    return get.name(card) == "ying";
                                });
                            }
                        }
                        return false;
                    },
                    usable: 1,
                    chooseButton: {
                        dialog: function (event, player) {
                            var list = [];
                            for (var name of lib.inpile) {
                                if (name == "sha") {
                                    if (event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", "sha"]);
                                    for (var nature of lib.inpile_nature) {
                                        if (event.filterCard(get.autoViewAs({ name, nature }, "unsure"), player, event)) list.push(["基本", "", "sha", nature]);
                                    }
                                } else if (get.type(name) == "basic" && event.filterCard(get.autoViewAs({ name }, "unsure"), player, event)) list.push(["基本", "", name]);
                            }
                            var dialog = ui.create.dialog("未息", [list, "vcard"]);
                            dialog.direct = true;
                            return dialog;
                        },
                        filter: function (button, player) {
                            return _status.event.getParent().filterCard(get.autoViewAs({ name: button.link[2], nature: button.link[3] }, "unsure"), player, _status.event.getParent());
                        },
                        check: function (button) {
                            if (_status.event.getParent().type != "phase") return 1;
                            var player = _status.event.player;
                            if (["wugu", "zhulu_card", "yiyi", "lulitongxin", "lianjunshengyan", "diaohulishan"].includes(button.link[2])) return 0;
                            return player.getUseValue({
                                name: button.link[2],
                                nature: button.link[3],
                            });
                        },
                        backup(links, player) {
                            return {
                                check: function (card) {
                                    return 6 - get.value(card);
                                },
                                //  filterCard(card) {
                                //      return  get.name(card) == "ying";
                                //  },
                                filterCard: () => false,
                                selectCard: -1,
                                viewAs: {
                                    name: links[0][2],
                                    nature: links[0][3],
                                    suit: 'none',
                                    number: null,
                                    isCard: true,
                                },
                                position: 'he',
                                popname: true,
                                ignoreMod: true,
                                async precontent(event, trigger, player) {
                                    player.logSkill('xinxweixi_use');
                                    await player.showCards(
                                        player.getCards("h", card => get.name(card) == "ying"),
                                    );
                                    // const result = await player.chooseCardTarget({
                                    //     position: "he", filterCard: { name: "ying" }, selectCard: 1,
                                    //     filterTarget(card, player, target) {
                                    //         return player != target;
                                    //     },
                                    //     prompt: "选择一张【影】，交给一名其他角色。",
                                    //     forced: true,
                                    // }).forResult();
                                    // if (result.bool) {
                                    //     var target = result.targets[0];
                                    //     player.line(target);
                                    //     await player.give(result.cards, target);
                                    // }

                                    // await  game.delayx();
                                },
                            }
                        },
                        prompt(links, player) {
                            return '展示手牌中的【影】并视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
                        },
                    },
                    ai: {
                        order: function (item, player) {
                            if (player && _status.event.type == 'phase') {
                                var max = 0, add = false;
                                var list = lib.inpile.filter(name => get.type(name) == 'basic');
                                if (list.includes('sha')) add = true;
                                list = list.map(namex => { return { name: namex, isCard: true } });
                                if (add) {
                                    lib.inpile_nature.forEach(naturex => list.push({ name: 'sha', nature: naturex, isCard: true }));
                                }
                                for (var card of list) {
                                    if (player.getUseValue(card) > 0) {
                                        var temp = get.order(card);
                                        if (temp > max) max = temp;
                                    }
                                }
                                if (max > 0) max += 0.3;
                                return max;
                            }
                            return 10;
                        },
                        respondShan: true,
                        respondSha: true,
                        skillTagFilter: function (player, tag, arg) {
                            if (arg == 'respond') return false;
                            return !player.hasSkill('xing_mengran_used');
                        },
                        result: {
                            player: function (player) {
                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                return 1;
                            },
                        },
                    }
                },
                draw: {

                    trigger: {
                        player: ["loseAfter", "loseAsyncAfter"],
                    },
                    filter(event, player) {
                        return game.hasPlayer2(current => {
                            var evt = event.getl(current);
                            return evt?.cards2?.some(card => card.name == 'ying');

                        });
                    },
                    forced: true,
                    popup: false,
                    content() {
                        var num = 0;
                        game.countPlayer2(current => {
                            var evt = trigger.getl(current);
                            if (evt?.cards2) num += evt.cards2.filter(card => card.name == 'ying').length;
                        });
                        if (num) player.draw(num);
                    },
                }
            }


        },

        xinxquanpao: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: "phaseDrawAfter",

            },
            locked: false,
            forced: true,
            async content(event, trigger, player) {


                //await player.gain(lib.card.ying.getYing(player.getHandcardLimit()), "gain2");
                // const cards1 =
                //     player.getCards("h", function (card) {
                //         return get.name(card) == "ying" && lib.filter.cardDiscardable(card, player, event);

                //     });

                let num = player.getHandcardLimit();
                const cards1 = [];
                for (let i = 0; i < num; i++) {
                    const card = game.createCard('ying');
                    cards1.push(card);
                }

                if (cards1.length) {
                    player.$throw(cards1.length, 1000);
                    await game.cardsGotoPile(cards1, 'insert');
                    game.log(player, "将 " + cards1.length + "张【影】置于牌堆顶");
                }
                await game.delayx();
                let cards = [];

                while (cards.length < num) {
                    const card = get.cardPile(card => {
                        if (get.name(card) == "ying") return false;
                        if (!cards.length) return true;
                        return cards.every(cardx => cardx.name != card.name);
                    });
                    if (card) cards.add(card);
                    else { break; }
                }
                if (cards.length) {
                    await player.gain(cards, "gain2").gaintag.add("xinxquanpao_tag");
                    await player.markAuto("xinxquanpao", cards);
                }
            },
            "_priority": 1000,
            group: ['xinxquanpao_gain'],
            subSkill: {
                gain: {
                    trigger: {
                        player: "phaseDrawAfter",
                        // player: "phaseJieshuBegin",
                    },
                    filter: function (event, player) {
                        const targets = game.players.slice().concat(game.dead);
                        return targets.some(target => target.getStorage("xinxquanpao").filterInD("dcehsj").length);
                    },
                    forced: true,
                    content: function () {
                        const targets = game.players.slice().concat(game.dead);
                        const cards = targets.reduce((list, target) => list.addArray(target.getStorage("xinxquanpao").filterInD("dcehsj")), []);
                        player.gain(cards, "gain2").gaintag.add("xinxquanpao_tag");
                    },
                    sub: true,
                    sourceSkill: "xinxquanpao",
                    "_priority": 100,
                },
                jie: {
                    trigger: {

                        player: "phaseJieshuBegin",
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        let num = player.countCards('h');
                        let cards = get.cards(num);
                        game.cardsGotoOrdering(cards);
                        let hs = player.getCards("h");

                        game.log(player, '将', '#y' + get.cnNumber(hs.length) + '张手牌', '置于了牌堆顶');
                        await player.lose(hs, ui.cardPile).set('insert_card', true);
                        await player.gain(cards, 'draw');
                    },

                }


            }
        },

        xinxqingqiang: {

            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxqingqiang1.mp3", "ext:永夜之境/audio/xinxqingqiang2.mp3"],

            trigger: {
                target: "useCardToTargeted",
            },
            filter(event, player) {
                return event.player != player && event.player.countCards("h") > 0;
            },
            forced: true,
            usable: 1,
            async content(event, trigger, player) {
                //var hs = target.getCards("h", "ying");
                await trigger.player.showHandcards();
                await game.delayx();
                var cards = trigger.player.getCards("h", function (card) {
                    return get.name(card) == "ying" && lib.filter.cardDiscardable(card, player, event);

                });
                if (cards.length) {
                    trigger.getParent().directHit.add(player)
                    player.addTempSkill("xinxqingqiang_effect")
                }
                else {
                    //await player.gainPlayerCard(trigger.player, "h", true)
                    const target = trigger.player;
                    const result = await player
                        .chooseTarget("选择" + get.translation(target) + "使用【杀】的目标", function (card, player, target) {
                            return target != trigger.player && target != player;
                        },
                        )
                        .set("ai", function (target) {
                            return get.damageEffect(target, _status.event.source, player);
                        })
                        .set("source", target)
                        .forResult();
                    if (result.bool) {
                        target.line(result.targets[0], "green");
                        await target.useCard({ name: "sha", isCard: true }, result.targets[0], false);
                    }
                };
            },


            subSkill: {
                effect: {
                    audio: "xinxqingqiang",
                    logAudio: () => ["ext:永夜之境/audio/xinxqingqiang3.mp3", "ext:永夜之境/audio/xinxqingqiang4.mp3"],
                    charlotte: true,
                    onremove: true,
                    trigger: {

                        global: "phaseEnd",
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        player.addMark("xinxqingqiang_handcard", 1, false);
                        player.addSkill("xinxqingqiang_handcard");
                        game.log(player, "的手牌上限", "#y+1");
                    }

                },

                handcard: {
                    markimage: "image/card/handcard.png",
                    intro: {
                        content: function (storage, player) {
                            return "手牌上限+" + storage;
                        },
                    },
                    charlotte: true,
                    mod: {
                        maxHandcard: function (player, num) {
                            return num + player.countMark("xinxqingqiang_handcard");
                        },
                    },
                }

            }
        },

        xinxxzhaohan: {
            audio: "ext:永夜之境/audio:4",
            // 检查是否有查看权限（基于体力值）
            hiddenCard(player, name) {
                if (player.hp <= 0) return false;
                const info = lib.skill.xinxxzhaohan.getLimitInfo(player);
                if (info.used >= info.limit) return false;
                if (name && ui.cardPile.hasChildNodes !== false) {
                    const pile = Array.from(ui.cardPile.childNodes).slice(0, info.limit);
                    return pile.some(card => card.name === name);
                }
                return true;
            },
            // 点击技能按钮查看牌堆顶
            /* clickable(player) {
                if (player.isUnderControl(true)) {
                    const cards = lib.skill.xinxxzhaohan.getCards(player);
                    function createDialogWithControl(result) {
                        const dialog = ui.create.dialog("昭汉", "peaceDialog");
                        result.length > 0 ? dialog.add(result, true) : dialog.addText("牌堆顶无牌");
                        const control = ui.create.control("确定", () => dialog.close());
                        dialog._close = dialog.close;
                        dialog.hide = dialog.close = function (...args) {
                            control.close();
                            return dialog._close(...args);
                        };
                        if (_status.xinxxzhaohan_clickable) {
                            _status.xinxxzhaohan_clickable.close();
                        }
                        _status.xinxxzhaohan_clickable = dialog;
                        dialog.open();
                    }
                    if (cards instanceof Promise) {
                        cards.then(([ok, result]) => createDialogWithControl(result));
                    } else {
                        createDialogWithControl(cards);
                    }
                }
            }, */
            // 获取牌堆顶 X 张牌 (X=体力值)
            getCards(player) {
                let cards = [];
                const count = Math.max(0, player.hp);
                if (count === 0) return [];

                if (game.online) {
                    return game.requestSkillData("xinxxzhaohan", "getTopCards", 10000);
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
                    const count = Math.max(0, player.hp);
                    if (ui.cardPile.hasChildNodes !== false && count > 0) {
                        let cards = Array.from(ui.cardPile.childNodes).slice(0, count);
                        game.addCardKnower(cards, player);
                        return cards;
                    }
                    return [];
                },
            },
            // 标记与提示
            mark: true,
            marktext: "昭汉",
            intro: {
                // 显示本轮剩余可用次数
                markcount(storage, player) {
                    const info = lib.skill.xinxxzhaohan.getLimitInfo(player);
                    return info.limit - info.used;
                },
                content(storage, player) {
                    const info = lib.skill.xinxxzhaohan.getLimitInfo(player);
                    return `牌堆顶的${info.limit}张牌对你可见。<br>每轮限${info.limit}次，你可以使用其中的牌。<br>当前本轮剩余次数：${info.limit - info.used}`;
                },
                mark(dialog, storage, player) {
                    if (player.isUnderControl(true) && ui.cardPile.childNodes.length) {
                        let cards = [];
                        let num = ui.cardPile.childElementCount;
                        for (var i = 0; i < player.hp && i < num; i++) {
                            cards.push(ui.cardPile.childNodes[i]);
                        }
                        dialog.addAuto(cards);
                        return '牌堆顶的' + get.cnNumber(player.hp) + '张牌';
                    };
                    return '';
                },
            },

            // 辅助函数：管理轮次限制
            getLimitInfo(player) {
                let data = player.storage.xinxxzhaohan_data || { round: 0, used: 0 };
                // 如果记录的轮数不是当前游戏轮数，重置计数
                if (data.round != game.roundNumber) {
                    data.round = game.roundNumber;
                    data.used = 0;
                    player.storage.xinxxzhaohan_data = data;
                }
                return {
                    used: data.used,
                    limit: Math.max(0, player.hp)
                };
            },
            group: "xinxxzhaohan_aocai",
            subSkill: {
                aocai: {
                    mod: {
                        aiOrder(player, card, num) {
                            if (card?.hasGaintag?.("xinxxzhaohan")) {
                                return num + 0.1;
                            }
                        },
                    },
                    onChooseToUse(event) {
                        if (game.online) return;
                        const player = event.player;

                        // 检查限制：如果本轮已用次数 >= 体力值，则不发动
                        const info = lib.skill.xinxxzhaohan.getLimitInfo(player);
                        if (info.used >= info.limit) return;

                        let cards = player.getCards("s", card => card.hasGaintag("xinxxzhaohan"));
                        if (cards.length) {
                            game.deleteFakeCards(cards);
                        }
                        if (ui.cardPile.hasChildNodes !== false) {
                            // 生成 X 张虚拟牌
                            cards = Array.from(ui.cardPile.childNodes).slice(0, info.limit);
                            player.directgains(game.createFakeCards(cards), null, "xinxxzhaohan");
                        }
                    },
                    onChooseToRespond(event) {
                        if (game.online) return;
                        const player = event.player;

                        // 检查限制
                        const info = lib.skill.xinxxzhaohan.getLimitInfo(player);
                        if (info.used >= info.limit) return;

                        let cards = player.getCards("s", card => card.hasGaintag("xinxxzhaohan"));
                        if (cards.length) {
                            game.deleteFakeCards(cards);
                        }
                        if (ui.cardPile.hasChildNodes !== false) {
                            cards = Array.from(ui.cardPile.childNodes).slice(0, info.limit);
                            player.directgains(game.createFakeCards(cards), null, "xinxxzhaohan");
                        }
                    },
                    trigger: {
                        player: ["useCardBefore", "respondBefore", "chooseToUseAfter", "chooseToRespondAfter"],
                    },
                    filter(event, player) {
                        if (["useCard", "respond"].includes(event.name)) {
                            // 判断使用的牌是否确实来源于牌堆顶的合法范围内
                            const info = lib.skill.xinxxzhaohan.getLimitInfo(player);
                            // 如果已经超限，理论上不会走到这里，但双重保险
                            if (info.used >= info.limit) return false;

                            const pile = Array.from(ui.cardPile.childNodes).slice(0, info.limit);
                            return event.cards?.some(card => pile.some(cardx => cardx.cardid == card._cardid));
                        }
                        return true;
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        if (["useCard", "respond"].includes(trigger.name)) {
                            // 记录发动
                            if (!trigger.skill) {
                                trigger.skill = "xinxxzhaohan";
                            } else {
                                await player.logSkill("xinxxzhaohan");
                            }

                            // 增加使用计数
                            let data = player.storage.xinxxzhaohan_data;
                            data.used++;
                            player.storage.xinxxzhaohan_data = data;
                            player.updateMark("xinxxzhaohan"); // 更新标记显示的剩余次数

                            // 处理牌的数据交换（将虚拟牌替换为真牌）
                            const cards = await get.info("xinxxzhaohan").getCards(player);
                            for (let i = 0; i < trigger.cards.length; i++) {
                                const card = trigger.cards[i];
                                const cardx = cards.find(cardx => cardx.cardid == card._cardid);
                                if (cardx) {
                                    trigger.cards[i] = cardx;
                                    trigger.card.cards[i] = cardx;
                                }
                            }
                        }
                        // 清理未使用的虚拟牌
                        let cards = player.getCards("s", card => card.hasGaintag("xinxxzhaohan"));
                        if (cards.length) {
                            game.deleteFakeCards(cards);
                        }
                    },
                },
            },
        },
        /*xinxxzhaohan: {
            audio: "ext:永夜之境/audio:4",
            forced: true,
            locked: true,
            mark: true,
            init: (player, skill) => player.markSkill(skill),
            intro: {
                mark(dialog, storage, player) {
                    if (player.isUnderControl(true) && ui.cardPile.childNodes.length) {
                        let cards = [];
                        let num = ui.cardPile.childElementCount;
                        for (var i = 0; i < player.hp && i < num; i++) {
                            cards.push(ui.cardPile.childNodes[i]);
                        }
                        dialog.addAuto(cards);
                        return '牌堆顶的' + get.cnNumber(player.hp) + '张牌';
                    };
                    return '';
                },
                markcount: (_, player) => player.getHp() - player.countMark("xinxxzhaohan_used"),
                content: (_, player) => "当前剩余发动次数：" + (player.getHp() - player.countMark("xinxxzhaohan_used")),

            },
            group: ['xinxxzhaohan_use', 'xinxxzhaohan_useResult', 'xinxxzhaohan_wuxie'],
            subSkill: {

                'wuxie': {
                    trigger: {
                        global: ['_wuxieBegin', '_wuxieEnd'],
                    },
                    delay: false,
                    direct: true,
                    log: false,
                    async content(event, trigger, player) {
                        let deleteCards = player.getCards('s', (card) => card.hasGaintag('xinxxzhaohan_hs'));
                        if (player.isOnline2()) {
                            player.send((cards, player) => {
                                cards.forEach(i => i.delete());
                                if (player == game.me) ui.updatehl();
                            }, deleteCards, player);
                        };
                        deleteCards.forEach(i => i.delete());
                        if (player == game.me) ui.updatehl();
                        if (event.triggername == '_wuxieEnd') return;
                        let cards = [];
                        let cards_xs = [], cards_top = [], cards_first = [];
                        const num = player.hp;
                        cards_first = get.cards(num, true);
                        cards.addArray(cards_first);
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
                            if (cardx) card.addGaintag('xinxxzhaohan_hs');
                        };
                    },
                },
                'useResult': {
                    trigger: {
                        player: ['useCardBefore', 'respondBefore'],
                    },
                    silent: true,
                    async content(event, trigger, player) {
                        let deleteCards = player.getCards('s', (card) => card.hasGaintag('xinxxzhaohan_hs'));
                        if (trigger.cards.some((card) => card._infoCard)) {
                            player.logSkill('xinxxzhaohan');
                            event.useSkillx = true;
                        };
                        const cards = trigger.cards.map((card) => {
                            if (card._infoCard) return card._infoCard;
                            return card;
                        });
                        trigger.cards = cards;
                        trigger.card.cards = cards;
                        if (deleteCards.length) {
                            if (player.isOnline2()) {
                                player.send((cards, player) => {
                                    cards.forEach(i => i.delete());
                                    if (player == game.me) ui.updatehl();
                                }, deleteCards, player);
                            };
                            deleteCards.forEach(i => i.delete());
                            if (player == game.me) ui.updatehl();
                        }
                    },
                },
                'use': {
                    intro: {
                        markcount: (_, player) => player.getHp() - player.countMark("xinxxzhaohan_used"),
                        content: (_, player) => "当前剩余发动次数：" + (player.getHp() - player.countMark("xinxxzhaohan_used")),
                    },
                    enable: ['chooseToUse', 'chooseToRespond'],
                    hiddenCard(player, name) {
                        return lib.inpile.includes(name);
                    },
                    filter(event, player) {
                        return event.type != 'wuxie' && player.countMark("xinxxzhaohan_used") < player.getHp();
                    },
                    // usable(skill, player) {
                    //     return player.hp;//发动次数+1
                    // },
                    delay: false,
                    direct: true,
                    log: false,
                    async content(event, trigger, player) {
                        player.addMark("xinxxzhaohan_used", 1, false);
                        player.addTempSkill("xinxxzhaohan_used", "roundStart");
                        let deleteCards = player.getCards('s', (card) => card.hasGaintag('xinxxzhaohan_hs'));
                        if (deleteCards.length) {
                            if (player.isOnline2()) {
                                player.send((cards, player) => {
                                    cards.forEach(i => i.delete());
                                    if (player == game.me) ui.updatehl();
                                }, deleteCards, player);
                            };
                            deleteCards.forEach(i => i.delete());
                            if (player == game.me) ui.updatehl();
                        } else {
                            if (!event.getParent(2).xinxxzhaohan_delete) {
                                const next = game.createEvent('xinxxzhaohan_delete', false).set('player', player).setContent(async function (event, trigger, player) {
                                    let deleteCards = player.getCards('s', (card) => card.hasGaintag('xinxxzhaohan_hs'));
                                    if (deleteCards.length) {
                                        if (player.isOnline2()) {
                                            player.send((cards, player) => {
                                                cards.forEach(i => i.delete());
                                                if (player == game.me) ui.updatehl();
                                            }, deleteCards, player);
                                        };
                                        deleteCards.forEach(i => i.delete());
                                        if (player == game.me) ui.updatehl();
                                    };
                                    event.getParent().xinxxzhaohan_delete = false;
                                });
                                event.next.remove(next);
                                event.getParent(2).after.push(next);
                                event.getParent(2).xinxxzhaohan_delete = true;
                            };
                            let cards = [];
                            let cards_xs = [], cards_top = [], cards_first = [];
                            const num = player.hp;
                            cards.addArray(cards_top);
                            cards_first = get.cards(num, true);
                            cards.addArray(cards_first);
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
                                if (cardx) card.addGaintag('xinxxzhaohan_hs');
                            };
                        };
                        event.getParent(2).goto(0);
                    },

                    ai: {
                        order: function (item, player) {
                            if (player && _status.event.type == 'phase') {
                                var max = 0, add = false;
                                var list = lib.inpile.filter(name => get.type(name) == 'basic');
                                if (list.includes('sha')) add = true;
                                list = list.map(namex => { return { name: namex, isCard: true } });
                                if (add) {
                                    lib.inpile_nature.forEach(naturex => list.push({ name: 'sha', nature: naturex, isCard: true }));
                                }
                                for (var card of list) {
                                    if (player.getUseValue(card) > 0) {
                                        var temp = get.order(card);
                                        if (temp > max) max = temp;
                                    }
                                }
                                if (max > 0) max += 0.3;
                                return max;
                            }
                            return 10;
                        },
                        respondShan: true,
                        respondSha: true,
                        skillTagFilter: function (player, tag, arg) {
                            if (arg == 'respond') return false;
                            return !player.hasSkill('xing_mengran_used');
                        },
                        result: {
                            player: function (player) {
                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                return 1;
                            },
                        },
                    },

                },
                'hs': {
                },

                used: {
                    charlotte: true,
                    onremove: true,
                },
            },

        },*/


        xinxduanwan: {//锁定技。每回合限一次。一名角色的体力值变化时，若其体力值不大于2，你选择一项：1.获得一名角色等同其体力值张牌；2.弃置装备区一张牌，令一名角色弃置所有基本牌，然后你与其距离视为1直到下轮开始。
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "changeHp",
            },
            filter(event, player) {
                return event.player.hp <= 2 && event.num < 2;
            },
            usable: 1,
            locked: true,
            //     check(event, player) {
            // return  get.attitude(player, event.player) <= 0 && event.player.countCards("he") > 1;
            //     },
            async content(event, trigger, player) {
                const cards1 = player.getCards("e");
                if (cards1.length) { await player.discard(cards1); }
                const list = ['获得牌', '弃置牌']
                const result = await player.chooseControl(list).set('prompt', get.skillTranslation(event.name) + ':请选择一项').set('ai', () => {
                    return 0;
                }).set('choiceList', ["获得一名角色X张牌（X为其体力值）", "令一名角色弃置所有基本牌"])
                    .forResult();
                switch (result.control) {
                    case '获得牌':
                        const result = await player
                            .chooseTarget("请选择一名角色，获得其体力值张牌", true)
                            .set("ai", target => get.effect(target, { name: "guohe_copy2" }, player, player))
                            .forResult();
                        if (result.bool) {
                            const target = result.targets[0];
                            let num = Math.max(1, target.hp);
                            player.line(target);
                            await player.gainPlayerCard(target, "he", num, true);
                            player.markAuto("xinxduanwan_eff", [target]);
                            player.addTempSkill("xinxduanwan_eff", { global: 'roundStart' });
                        }
                        break;
                    case '弃置牌':
                        const result1 = await player
                            .chooseTarget("请选择一名角色，令其弃置所有基本牌", true)
                            .set("ai", target => get.effect(target, { name: "guohe_copy" }, player, player))
                            .forResult();
                        if (result1.bool) {
                            const target = result1.targets[0];
                            player.line(target);
                            //  await player.discard(player.getCards("e"), true);
                            var cards = target.getCards("he", function (card) {
                                return get.type(card) == "basic" && lib.filter.cardDiscardable(card, player, event);

                            });
                            if (cards.length) target.discard(cards);
                            player.markAuto("xinxduanwan_eff", [target]);
                            player.addTempSkill("xinxduanwan_eff", { global: 'roundStart' });
                            // await   player.discardPlayerCard(target,target.getCards("e"), true);
                        }
                        break;
                }

            },

            subSkill: {

                eff: {
                    mark: "character",
                    onremove: true,
                    intro: {
                        content: "到$的距离视为1",
                    },
                    mod: {
                        globalFrom: function (from, to) {
                            if (from.getStorage("xinxduanwan_eff").includes(to)) {
                                return -Infinity;
                            }
                        },
                    },
                    "_priority": 0,
                },

            }



        },

        xinxjingong: {//锁定技。当你造成或受到伤害时，你展示目标角色一张牌，若此牌牌名字数大于你的体力值，此伤害+1，否则你随机获得本回合进入弃牌堆的一张牌。
            audio: "ext:永夜之境/audio:2",
            trigger: {
                //source: "damageBegin1",
                player: "damageBefore",
            },
            forced: true,
            filter(event, player) {
                if (event._notrigger.includes(event.player)) return false;
                if (player == event.source) {
                    return event.player != player && event.player.countCards("he");
                } else {
                    return event.source && event.source != player && event.source.countCards("he");
                }
                //&& player != event.source
            },
            logTarget(event, player) {
                if (player == event.player) {
                    return event.source && event.source.countCards("he") > 0;
                } else {
                    return event.player;
                }
            },

            async content(event, trigger, player) {

                var target = player == trigger.player ? trigger.source : trigger.player;


                const promptText = `展示${get.translation(target)}一张牌`;

                // if (target.countCards("he") === 0) {
                //     if (get.discarded().length > 0&&_status.currentPhase) {
                //         const discardPile = get.discarded();
                //         await player.gain(discardPile.randomGets(1), "gain2");
                //     }
                //     return;
                // }

                const result = await player.choosePlayerCard(target, promptText, "he", true).forResult();
                if (result.bool && result.links.length > 0) {
                    const card = result.links[0];
                    await player.showCards([card], get.translation(player) + "对" + (player == target ? "自己" : get.translation(target)) + "发动了【矜功】");
                    const num = player.hp;
                    if (get.cardNameLength(card) >= num) {
                        trigger.num++;
                    }
                }
            }

        },
        xinxshanjiao: { //一名角色使用牌后，若其手牌中没有与此牌花色相同的牌，你可以进行一次判定，若为红色，你摸等同你手牌中花色数的牌；若为黑色，你令一名其他角色无法使用或打出与此判定牌类型或花色相同的牌，直到其下个回合结束。
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "useCard",

            },
            forced: true,
            logTarget: "player",
            filter(event, player) {
                if (!lib.suit.includes(get.suit(event.card))) return false;
                const suit = get.suit(event.card);

                return !event.player.hasCard(card => get.suit(card) == get.suit(event.card), "h");



            },

            async content(event, trigger, player) {


                const result = await player.judge().forResult();
                if (result.color == "red") {
                    const suits = {};
                    player.getCards('h').forEach(card => {
                        var suit = get.suit(card);
                        if (!suits[suit]) {
                            suits[suit] = true;
                        }
                    });
                    var suitCount = Object.keys(suits).length;

                    // 根据花色数摸牌
                    const num = Math.ceil(suitCount / 2);
                    const num1 = Math.max(1, num);
                    await player.draw(num1);

                }
                else if (result.color == "black") {

                    const result = await player
                        .chooseTarget("请选择一名角色，令其不能打出同类型的牌")
                        .set("ai", target => get.effect(target, { name: "guohe_copy2" }, player, player))
                        .forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        player.logSkill('xinxshanjiao_use', target);
                        const suit = get.suit(trigger.card);
                        const type = get.type(trigger.card);
                        targets[0].addTempSkill("xinxshanjiao_limit");
                        //, { player: 'phaseEnd'}
                        // targets[0].markAuto("xinxshanjiao_limit", [type]);
                        targets[0].markAuto('xinxshanjiao_limit', [get.type(result.card)]);

                    }

                }


            },

            subSkill: {
                limit: {
                    onremove: true,
                    charlotte: true,
                    mod: {
                        cardEnabled: function (card, player) {
                            //  if (player.getStorage("xinxshanjiao_limit").includes(get.suit(card))) return false;
                            if (player.getStorage("xinxshanjiao_limit").includes(get.type(card))) return false;
                        },
                        cardRespondable: function (card, player) {
                            //  if (player.getStorage("xinxshanjiao_limit").includes(get.suit(card))) return false;
                            if (player.getStorage("xinxshanjiao_limit").includes(get.type(card))) return false;
                        },
                        cardSavable: function (card, player) {
                            //  if (player.getStorage("xinxshanjiao_limit").includes(get.suit(card))) return false;
                            if (player.getStorage("xinxshanjiao_limit").includes(get.type(card))) return false;
                        },
                    },
                    mark: true,
                    marktext: "教",
                    intro: {
                        content: "不能使用或打出$类型的牌",
                    },
                    sub: true,
                    sourceSkill: "xinxshanjiao",
                    "_priority": 0,

                },
            },



        },
        xinxhuiyan: {
            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxhuiyan1.mp3", "ext:永夜之境/audio/xinxhuiyan2.mp3"],
            trigger: {
                player: "judgeEnd",
            },
            filter(event, player, name) {
                const color = get.color(event.result.card);
                return player.hasUseTarget(event.result.card) && player.hasCard(card => get.color(card) == get.color(event.result.card), "h");

            },
            frequent: true,
            async content(event, trigger, player) {
                await player.chooseUseTarget(trigger.result.card, false);
            },
            group: 'xinxhuiyan_gl',
            subSkill: {
                gl: {
                    audio: "xinxhuiyan",
                    logAudio: () => ["ext:永夜之境/audio/xinxhuiyan3.mp3", "ext:永夜之境/audio/xinxhuiyan4.mp3"],
                    trigger: {
                        global: "judgeEnd",
                    },
                    filter(event, player, name) {
                        const suit = get.suit(event.result.card);
                        return event.player != player && player.hasUseTarget(event.result.card) && player.hasCard(card => get.suit(card) == get.suit(event.result.card), "h");

                    },
                    frequent: true,
                    async content(event, trigger, player) {
                        await player.chooseUseTarget(trigger.result.card, false);
                    },

                }

            }
        },


        xinxzhenying: {

            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "showCharacterAfter",
            },
            hiddenSkill: true,
            filter: function (event, player) {
                var target = _status.currentPhase;
                return event.toShow?.some(i => get.character(i).skills?.includes("xinxzhenying")) && target && target != player && target.isIn();
            },
            direct: true,
            async content(event, trigger, player) {
                var target = _status.currentPhase;
                // await target.damage(player);
                const {
                    bool
                } = await player.chooseBool("砧影：是否对" + get.translation(target) + "造成1点伤害？").set("choice", get.damageEffect(target, player, player) > 0).forResult();
                if (bool) {
                    player.line(target);
                    player.logSkill('xinxzhenying', target);
                    await target.damage();
                    player.addSkill("xinxzhenying_debuff");
                    player.markAuto("xinxzhenying_debuff", target);
                }
            },
            subSkill: {
                debuff: {
                    charlotte: true,
                    onremove: true,
                    trigger: {
                        player: "damageBegin3",
                    },
                    silent: true,
                    usable: 1,
                    filter(event, player) {
                        return player.getStorage("xinxzhenying_debuff").includes(event.source);
                        // return _status.currentPhase && _status.currentPhase != player;
                        // const markedTargets = player.getStorage("xinxzhenying_debuff") || [];
                        // for (const target of markedTargets) {
                        //     if (target && target.isIn()) {
                        //         return true;
                        //     }
                        // }
                        // return false;
                    },
                    async content(event, trigger, player) {
                        //if (_status.currentPhase) await _status.currentPhase.draw(2);
                        const target = trigger.source;
                        await target.draw(2);
                        player.unmarkAuto("xinxzhenying_debuff", [target]);


                    },
                    sub: true,
                    sourceSkill: "xinxzhenying",
                    forced: true,
                    popup: false,
                    "_priority": 1,
                },

            }

        },
        xinxzhebian: {
            audio: "ext:永夜之境/audio:5",
            logAudio: () => ["ext:永夜之境/audio/xinxzhebian1.mp3", "ext:永夜之境/audio/xinxzhebian2.mp3"],
            trigger: {
                player: "phaseEnd",
            },
            forced: true,
            // hiddenLP(target){
            //     target.storage.hiddenLP = {hp:target.hp, maxHp:target.maxHp}
            //     target.classList.add('unseen');
            //     target.classList.add('unseen_show');
            //     target.hidden = true;
            //     game.delay();
            //     target.update();
            //     target.when({player:'showCharacterEnd'}).then(()=>{
            //         target.maxHp = target.storage.hiddenLP.maxHp;
            //         target.hp = target.storage.hiddenLP.hp;
            //         target.update();
            //     }).vars({target:target})
            //     game.log(target,'进入了隐匿状态');
            // },
            // content: function () {
            //     lib.skill.xinxzhebian.hiddenLP(player);
            // },
            async content(event, trigger, player) {
                const Pskills = player.getSkills(null, false, false).filter(skill => {
                    let info = get.info(skill);
                    if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) {
                        return false;
                    }
                    return true;
                });
                player.removeSkill(Pskills);
                if (!player.hiddenSkills) player.hiddenSkills = [];
                player.hiddenSkills.addArray(Pskills);

                player.addSkill('g_hidden_ai');
                player.name = 'unknown';
                player.sex = 'male';
                player.storage.rawHp = player.hp;
                player.storage.rawMaxHp = player.maxHp;
                player.hp = 1;
                player.maxHp = 1;
                if (!_status.video) player.classList.add("unseen_show");
                player.classList.add(_status.video ? "unseen_v" : "unseen");
                if (!player.node.name_seat && !_status.video) {
                    player.node.name_seat = ui.create.div(".name.name_seat", get.verticalStr(get.translation(player.name)), player);
                    player.node.name_seat.dataset.nature = get.groupnature(player.group);
                }
                if (player.name2) {
                    if (!_status.video) player.classList.add("unseen2_show");
                    player.classList.add(_status.video ? "unseen2_v" : "unseen2");
                }
                player.update();
            },
            group: 'xinxzhebian_change',
            subSkill: {
                change: {
                    //audio: "xinxzhebian",
                    audio: "ext:永夜之境/audio:3",
                    logAudio: () => ["ext:永夜之境/audio/xinxzhebian3.mp3", "ext:永夜之境/audio/xinxzhebian4.mp3", "ext:永夜之境/audio/xinxzhebian5.mp3"],
                    trigger: {
                        player: ["turnOverEnd", "linkEnd", "showCharacterEnd", "hideCharacterEnd", "removeCharacterEnd"],
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {

                        const result = await player
                            .chooseTarget("选择一名角色，对其造成1点伤害")
                            .set("ai", target => get.damageEffect(target, _status.event.player, _status.event.player))
                            .forResult();
                        if (result.bool) {
                            const target = result.targets[0];
                            player.logSkill('xinxzhebian_change', target);
                            await target.damage();
                            target.draw();
                            // await  player.gainPlayerCard(target,"he",true);
                        }
                    },

                }
            }
        },

        xinxxuanxiao: {//出牌阶段限一次。你可以与一名其他角色议事。若结果为：红色，你回复1点体力；黑色，你视为使用一张【出其不意】。
            //若你与其意见:相同，你将势力变更为与其相同，从牌堆获得一张坐骑牌，然后重复执行一次议事的红黑结果；不同，你摸一张牌并从牌堆获得两张【杀】，本回合你对其使用牌无次数和距离限制，其无法响应你的牌。
            audio: "ext:永夜之境/audio:2",
            enable: "phaseUse",
            usable: 1,
            filter(event, player) {
                return game.hasPlayer(current => current != player);
            },
            filterTarget(card, player, target) {
                return player != target;
            },
            selectTarget: [1],
            multitarget: true,
            multiline: true,
            async content(event, trigger, player) {
                await player.chooseToDebate(event.targets.concat([player])).set("callback", lib.skill.xinxxuanxiao.callback);
            },
            async callback(event, trigger, player) {
                const result = event.debateResult;
                var target = event.getParent(2).target;
                if (result.opinions.some(idea => idea != "others" && result[idea].length == 1 && result[idea][0][0] == player)) {
                    const list = lib.group.slice();
                    list.remove(player.group);
                    list.push("cancel2");
                    // const {
                    //     result: { control },
                    // } = 
                    // await player.draw();
                    player.line(target);
                    var cards = [];
                    for (var i = 0; i < 1; i++) {
                        var card = get.cardPile2(function (card) {
                            return card.name == 'sha' && !cards.includes(card);
                        });
                        if (card) cards.push(card);
                    }
                    if (cards.length) player.gain(cards, 'gain2');
                    player.addTempSkill("xinxxuanxiao_effect");
                    target.addTempSkill("xinxxuanxiao_effect1");
                    //target.addSkill("xinxbenhuai");
                } else {
                    const card2 = get.cardPile2(card => get.subtypes(card).includes("equip3") || get.subtypes(card).includes("equip4") && player.hasUseTarget(card));
                    if (card2) {
                        await player.gain(card2, 'gain2', true);
                    }
                    player.line(target);
                    player.changeGroup(target.group);
                    player.popup(target.group + "2", get.groupnature(target.group, "raw"));
                    // const card = { name: "chuqibuyi", isCard: true };
                    // if (player.hasUseTarget(card)) await player.chooseUseTarget(card, true);
                }
                // if (result.bool && result.opinion) {
                //     if (result.opinion == "red") {
                //         await player.recover();
                //     } else if (result.opinion == "black") {
                //         const card = { name: "chuqibuyi", isCard: true };
                //         if (player.hasUseTarget(card)) await player.chooseUseTarget(card, true);
                //     }
                // }

            },
            ai: {
                order: 8,
                expose: 0.2,
                result: {
                    target: -1,
                },
            },
            subSkill: {

                effect: {
                    marktext: "父",
                    intro: {
                        "name2": "父",
                        markcount: () => 0,
                        content: "父",
                    },
                    charlotte: true,
                    trigger: {
                        player: "useCard",
                    },
                    forced: true,
                    locked: false,
                    popup: false,
                    filter: function (event, player) {

                        return game.hasPlayer(current => {
                            return current != player && current.hasSkill("xinxxuanxiao_effect1");
                        });
                    },
                    content: function () {
                        trigger.directHit.addArray(
                            game.filterPlayer(current => {
                                return current != player && current.hasSkill("xinxxuanxiao_effect1");
                            })
                        );
                    },

                    mod: {
                        targetInRange: function (card, player, target) {
                            if (target.hasSkill("xinxxuanxiao_effect1")) {
                                return true;
                            }
                        },
                        cardUsableTarget: function (card, player, target) {
                            if (target.hasSkill("xinxxuanxiao_effect1")) return true;
                        },

                    },
                },
                effect1: {
                    charlotte: true,
                },
            }
        },
        xinxbenhuai: {
            trigger: {
                player: "phaseJieshuBegin",
            },
            forced: true,
            check() {
                return false;
            },
            filter(event, player) {
                return !player.isMinHp();
            },
            async content(event, trigger, player) {
                const { control } = await player
                    .chooseControl("baonue_hp", "baonue_maxHp", function (event, player) {
                        if (player.hp == player.maxHp) return "baonue_hp";
                        if (player.hp < player.maxHp - 1 || player.hp <= 2) return "baonue_maxHp";
                        return "baonue_hp";
                    })
                    .set("prompt", "崩坏：失去1点体力或减1点体力上限")
                    .forResult();
                if (control == "baonue_hp") await player.loseHp();
                else await player.loseMaxHp(true);
            },
            ai: {
                threaten: 0.5,
                neg: true,
            },
        },
        xinxshiji: {
            derivation: "xinxwushuang",
            audio: "ext:永夜之境/audio:2",
            trigger: {
                source: "damageBegin1",
            },
            usable: 1,
            popup: false,
            filter: function (event, player) {
                return game.hasPlayer(current => {
                    return current.countCards("ej") > 0;
                });
            },
            check(event, player) {
                return (
                    get.attitude(player, event.player) < 0
                );
            },
            async content(event, trigger, player) {

                const result = await player.chooseTarget('是否弃置场上的一张牌？', (card, player, target) => {
                    return target.countDiscardableCards(player, 'ej');
                }).set('ai', target => {
                    var player = _status.event.player;
                    var att = get.attitude(player, target);
                    // 优先选择与自己同势力的角色
                    if (target.group == player.group && target.countDiscardableCards(player, 'ej') > 0) {
                        return 3; // 最高优先级
                    }
                    // 其他友方角色
                    if (att > 0 && (target.countCards('j') > 0 || target.countCards('e', function (card) {
                        return get.value(card, target) < 0;
                    }))) return 2;
                    // 敌人角色
                    if (att < 0 && target.countCards('e') > 0 && !target.hasSkillTag('noe')) return -1;
                    // 默认情况
                    return 0;
                }).forResult();
                if (result.bool) {
                    player.logSkill('xinxshiji', result.targets[0]);
                    const { cards }
                        = await player.discardPlayerCard(result.targets[0], 'ej', true).forResult();
                    if (["equip"].includes(get.type(cards[0]))) {
                        await player.addTempSkill('xinxwushuang');
                    }
                    player.addExpose(0.2);
                    if (result.targets[0].group == player.group) {
                        trigger.num++;
                    }
                }
            },
            ai: {
                noe: true,
                reverseEquip: true,
                effect: {
                    target(card, player, target, current) {
                        if (get.type(card) == "equip" && !get.cardtag(card, "gifts")) return [1, 3];
                    },
                },
            },

        },
        xinxwushuang: {
            audio: "ext:永夜之境/audio:2",
            logAudio: () => ["ext:永夜之境/audio/xinxwushuang1.mp3", "ext:永夜之境/audio/xinxwushuang2.mp3"],
            trigger: {
                global: "dyingBegin",
            },
            forced: true,
            logTarget: "player",
            usable: 1,
            filter: function (event, player) {
                return player == _status.currentPhase;
            },
            async content(event, trigger, player) {

                await player.gainMaxHp();
                player.recover();
                const targets = game.filterPlayer(target => {
                    if (![player.getNext(), player.getPrevious()].includes(target)) return false;
                    return target.countCards('he');
                }).sortBySeat(player);
                const result = event.result = await player.chooseBool(get.prompt(event.name), '弃置' + get.translation(targets) + (targets.length > 1 ? '各' : '的') + '一张牌').set('choice', (() => {
                    return targets.reduce((sum, target) => sum + get.effect(target, { name: 'guohe_copy2', position: 'he' }, player, player), 0) >= 0;
                })()).forResult();
                if (result?.bool) {
                    player.line(targets);
                    for (const i of targets) await player.discardPlayerCard(i, 'he', true);
                }
            },
            subSkill: {
                after: {
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        global: "dyingAfter",
                    },
                    forced: true,
                    logTarget: "player",
                    filter: function (event, player) {
                        return player == _status.currentPhase;
                    },
                    async content(event, trigger, player) {

                    },
                }

            }
        },
        xinxjiaojue: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: "useCardToPlayered",
            },
            filter(event, player) {
                //if (event.name != 'useCard' && event.player == event.target) return false;
                return event.targets.length == 1 && get.color(event.card) == 'black' && event.target !== player;
            },
            forced: true,
            async content(event, trigger, player) {

                const [target] = trigger.targets,
                    storage = player.storage[event.name];

                let list = ["摸牌", "重铸", "弃置牌"];
                let choices = [];
                let choiceList = [];
                if (storage[0] > 0) {
                    choices.push(list[0]);
                    choiceList.push("你摸" + storage[0] + "张牌");
                }
                if (storage[1] > 0) {
                    choices.push(list[1]);
                    choiceList.push("你重铸" + storage[1] + "张牌");
                }
                if (storage[2] > 0) {
                    choices.push(list[2]);
                    choiceList.push("弃置" + get.translation(target) + get.cnNumber(storage[2]) + "张牌");
                }
                if (choices.length === 0) {
                    event.finish();
                    return;
                }


                const { control: choice } =
                    choices.length > 1
                        ? await player
                            .chooseControl(choices)
                            .set("ai", () => {
                                const player = get.player(),
                                    // target = get.event().getParent().targets[0],
                                    storage = player.storage.xinxjiaojue;
                                const map = {
                                    摸牌: get.recoverEffect(player, player, player) * storage[0],
                                    重铸: get.recoverEffect(player, player, player) * storage[1],
                                    弃置牌: get.effect(target, { name: "guohe_copy", position: "he" }, player, player) * Math.min(target.countGainableCards(player, "he"), storage[2]),
                                };
                                return get
                                    .event()
                                    .controls.slice()
                                    .sort((a, b) => map[b] - map[a])[0];
                            })
                            .set("choiceList", choiceList)
                            .set("prompt", "狡谲：请选择一项执行，执行后该项目数值-1，其余项目数值+1")
                            //.forResult("control")
                            .forResult()
                        : choices[0];
                const index = (event.index = list.indexOf(choice));
                switch (index) {
                    case 0:
                        await player.draw(storage[0]);
                        break;
                    case 1:
                        const result =
                            await player.
                                chooseCard("请重铸" + storage[1] + "张牌", 'he', storage[1], true)
                                .forResult();
                        if (result?.bool && result.cards?.length) {
                            await player.recast(result.cards);
                        }
                        break;
                    case 2:
                        player.line(target);
                        await player.discardPlayerCard(target, storage[2], "he", true);
                        break;
                }
                player.storage[event.name][index]--;

                for (let i = 0; i < 3; i++) {
                    storage[i] = Math.max(0, Math.min(storage[i], 2));
                }

                const nums = Array.from({ length: 3 })
                    .map((_, i) => i)
                    .filter(i => i !== index);
                for (const num of nums) player.storage[event.name][num]++;
                get.info(event.name).updateMark(player, event.name);


            },
            init(player, skill) {
                player.storage[skill] = [1, 1, 1, false];
                get.info(skill).updateMark(player, skill);
            },
            onremove(player, skill) {
                player.removeTip(skill);
                delete player.storage[skill];
            },
            updateMark(player, skill) {
                player.markSkill(skill);
                // player.addTip(skill, [get.translation(skill), ...player.storage[skill].slice(0, 3)].join(" "));
            },
            marktext: "狡",
            intro: {
                markcount: storage => storage.slice(0, 3).map(i => i.toString()).join(""),
                content: storage => "当前选项数值为：" + storage.slice(0, 3),
            },
            // mod: {
            //     ignoredHandcard(card, player) {
            //         if (get.color(card) == "black") return true;
            //     },
            //     cardDiscardable(card, player, name) {
            //         if (name == "phaseDiscard" && get.color(card) == "black") return false;
            //     },
            // },

            //group:'xinxjiaojue_counter',
            subSkill: {
                counter: {
                    audio: "xinxjiaojue",
                    logAudio: () => ["ext:永夜之境/audio/xinxjiaojue3.mp3", "ext:永夜之境/audio/xinxjiaojue4.mp3"],
                    trigger: {
                        player: "damageEnd",
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        const storage = player.storage.xinxjiaojue || [1, 1, 1];

                        const randomIndex = Math.floor(Math.random() * 3);
                        // 增加该选项的数值上限（最多增加到3）
                        if (storage[randomIndex] < 3) {
                            storage[randomIndex]++;
                        }
                        get.info('xinxjiaojue').updateMark(player, 'xinxjiaojue');


                    },
                    init(player, skill) {
                        // 不需要初始化伤害计数
                    },
                    onremove(player, skill) {
                        delete player.storage[skill];
                    },
                }
            },

        },
        xinxfengyao: {
            audio: "ext:永夜之境/audio:5",
            trigger: {
                player: ["phaseBegin", "phaseEnd"],
                source: "damageSource",
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {

                if (event.triggername === 'phaseEnd') {
                    player.gainMaxHp();
                    player.storage.xinxfengyao_sha++;
                }
                else {
                    player.logSkill("xinxfengyao");
                    player.storage.xinxfengyao_mark++;
                    player.storage.xinxfengyao_att++;
                }


            },
            //mod: { maxHandcard: (player, num) => num + (player.storage?.["xinxfengyao"]?.[1] || 0)},
            mod: {
                cardUsable(card, player, num) {
                    if (card.name == "sha") return num += player.storage.xinxfengyao_sha;
                },
                attackRange: (player, num) => num += player.storage.xinxfengyao_att,
            },
            init(player) {
                player.storage.xinxfengyao_mark = 0;
                player.storage.xinxfengyao_sha = 0;
                player.storage.xinxfengyao_att = 0;
            },
            onremove(player, skill) {
                delete player.storage[skill];
            },
            mark: true,
            marktext: "凤",
            intro: {
                content(storage, player) {
                    var str = "";
                    var mark = player.storage.xinxfengyao_mark,
                        att = player.storage.xinxfengyao_att,
                        sha = player.storage.xinxfengyao_sha;
                    if (mark > 0) {
                        str += "<li>下个额定摸牌数+" + mark + "；";
                    }
                    if (att > 0) {
                        str += "<li>攻击范围+" + att + "；";
                    }
                    if (sha > 0) {
                        str += "<li>出杀次数+" + sha + "；";
                    }
                    if (sha > 0) {
                        str += "<li>体力上限+" + sha + "；";
                    }
                    str = str.slice(0, -1) + "";
                    return str;
                },
            },
            group: 'xinxfengyao_draw',
            subSkill: {
                draw: {
                    audio: "xinxfengyao",
                    logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxfengyao" + index + ".mp3" : 2),
                    trigger: {
                        player: ["phaseDrawBegin2", "damageBegin3"]
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        if (event.triggername === 'damageBegin3') {
                            player.logSkill("xinxfengyao", [], null, null, [get.rand(1, 2, 5)]);
                            player.gainMaxHp();
                            player.storage.xinxfengyao_sha++;
                        }
                        else {
                            trigger.num += player.storage.xinxfengyao_mark;
                            player.storage.xinxfengyao_mark = 0;
                        }
                    }
                }
            }
        },


        xinxyingqi: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "roundStart",
            },
            filter(event, player) {
                let storage = player.getStorage('xinxyingqi_use');
                return player.getStorage('xinxyingqi_use').length < 6;
            },
            async cost(event, trigger, player) {
                event.result = await player.chooseTarget(get.prompt(event.name.replace('_cost', '')), '令一名其他角色跳过其下个阶段', (card, player, target) => {
                    return target != player;
                }).set("ai", target => -get.attitude(_status.event.player, target))
                    .forResult();
            },
            async content(event, trigger, player) {
                let target = event.targets[0];
                let map = {};
                let list = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
                let choose = [];
                for (let phase of list) {
                    let cn = get.translation(phase);
                    map[cn] = phase;
                    choose.push(cn);
                };
                const result = await player.chooseButton(['〖' + get.skillTranslation(event.name) + '〗:选择执行的阶段', [choose, 'tdnodes']], 1, true).set('ai', (button) => {
                    const player = get.player();
                    if (get.attitude(player, target) < 0) {
                        if (button.link == '摸牌阶段') return 2;
                        else if (button.link == '出牌阶段') return 3;
                        return 1;
                    } else if (button.link == '弃牌阶段') return 2;
                    return 1;
                }).set('filterButton', (button, player) => {
                    //return button.link != player.storage[event.name + '_lastPhase']; // 不能选择上次选择过的阶段
                    return !player.getStorage(event.name + '_use').includes(button.link); // 不能选择选择过的阶段
                }).forResult();
                if (result.bool) {
                    // player.storage[event.name + '_lastPhase'] = result.links[0];// 记录上次选择的阶段
                    player.addSkill(event.name + '_use');
                    player.markAuto(event.name + '_use', [result.links[0]]);// 记录选择的阶段
                    //player.storage[event.name+'_use'].push(map[result.links[0]]);// 添加到记录
                    player.markSkill(event.name + '_use');

                    const phase = map[result.links[0]];

                    target.skip(phase); // 跳过选择的阶段
                    target.storage.xinxyingqi_skip_phase = phase;
                    target.addTempSkill('xinxyingqi_skip', { player: 'phaseEnd' });

                    let next = player[map[result.links[0]]]();
                    event.next.remove(next);
                    trigger.next.push(next);

                    player
                        .when({ global: "phaseEnd" })
                        .filter(evt => evt.player == target)
                        .step(async (event, trigger, player) => {
                            if (player.isAlive()) {
                                player.insertPhase('xinxyingqi').set('phaseList', ['phaseZhunbei', 'phaseJudge', 'phaseUse', 'phaseJieshu', 'phaseDiscard']);
                            };
                        });


                }
            },
            subSkill: {
                use: {
                    charlotte: true,
                    mark: true,
                    intro: {
                        name: "已记录的阶段",
                        content(storage, player) {
                            return get.translation(storage);
                        },
                        markcount() {
                            return 0;
                        },
                    },
                    init(player, skill) {
                        player.storage[skill] = [];
                    },
                    onremove(player, skill) {
                        delete player.storage[skill];

                    },
                    sub: true,
                    sourceSkill: "xinxyingqi",
                    "_priority": 0,
                },
                skip: {
                    mark: true,
                    charlotte: true,
                    marktext: "影",
                    intro: {
                        name: "影骑",
                        content(storage, player) {
                            return "跳过下个" + get.translation(player.storage.xinxyingqi_skip_phase) + "";
                        },
                    },
                },
            },
            "_priority": 0,
        },


        xinxyanhui: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: "phaseUseBegin",
            },
            filter: function (event, player) {
                return player.countCards("he") > 1;
            },
            forced: true,

            async content(event, trigger, player) {
                const result = await player.chooseCard(get.prompt("xinxyanhui"), "重铸至多两张牌", 'he', [1, 2])
                    .set("ai", function (card) {
                        const selectedCards = ui.selected.cards;
                        const selectedNames = new Set(selectedCards.map(c => c.name));
                        // 检查是否已经有【杀】
                        const hasSha = selectedCards.some(c => get.name(c) === 'sha');
                        // 避免选择重复的牌名
                        if (selectedNames.has(card.name)) {
                            return -1;
                        }
                        // 优先级：【杀】 > 装备牌/锦囊牌 > 闪 > 桃
                        switch (get.name(card)) {
                            case 'sha':
                                return 4; // 最高优先级
                            case 'tao':
                            case 'shan':
                            case 'wuxie':
                                return 1; // 最低优先级
                            default:
                                if (['equip'].includes(get.type(card))) {
                                    return 3; // 中等优先级
                                }
                                return 2; // 默认中等优先级
                        }
                    })
                    .forResult();
                if (result.bool) {
                    await player.recast(result.cards);
                    const cards = result.cards;
                    if (cards.length) {
                        const names = cards.map(card => card.name).unique();
                        if (names.length === cards.length) {//牌名均不相同
                            let list = cards.slice(); // 复制卡牌列表
                            while (list.some(card => player.hasUseTarget(card))) {
                                const result = await player.chooseButton(['是否使用其中的一张牌？', list]).set('filterButton', button => {
                                    return get.player().hasUseTarget(button.link);
                                }).set('ai', button => {
                                    if (button.link.name == 'jiu') return 10;
                                    return get.player().getUseValue(button.link);
                                }).forResult();
                                if (result.bool) {
                                    const card = result.links[0];
                                    list.remove(card);
                                    player.$gain2(card, false);
                                    await game.delayx();
                                    await player.chooseUseTarget(true, card, false);
                                    //await player.chooseUseTarget(true, card, false, 'nodistance');
                                } else {
                                    break;
                                }
                            }
                        }
                    }

                }

            }

        },
        xinxduanzhi: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                global: "phaseJieshuBegin",
            },
            filter(event, player) {

                // event.player === player &&
                if (event.player === player && !player.hasMark('xinxjinshu')) {
                    return false;
                }

                return event.player.hasHistory("useCard", evt => {
                    return (evt.cards || []).some(card => get.position(card, true) == "d");
                });
            },
            // event.player !== player&&
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt("xinxduanzhi"), "令一名角色使用当前回合角色本回合因使用的且进入弃牌堆的牌")
                    .set("ai", target =>
                        get.attitude(_status.event.player, target))
                    .forResult();
            },
            async content(event, trigger, player) {

                const usedCards = trigger.player.getHistory('useCard', evt => {
                    return (evt.cards || []).some(card => get.position(card, true) === "d");
                });
                // 恢复进入弃牌堆的牌
                const cards = usedCards.reduce((sum, evt) => {
                    return sum.addArray(evt.cards.filter(card => get.position(card, true) === "d"));
                }, []);
                const target = event.targets[0];

                let list = cards.slice(); // 复制卡牌列表，避免直接修改原列表

                let useCount = 0;
                while (list.length > 0 && useCount < 2) {
                    const useResult = await target.chooseButton([
                        "断织：是否使用一张牌？（还可使用" + get.cnNumber(2 - useCount) + "张）",
                        list
                    ]).set('filterButton', button => {
                        return get.player().hasUseTarget(button.link);
                    }).set('ai', button => {
                        if (button.link.name == 'jiu') return 20;
                        return get.player().getUseValue(button.link);
                    }).forResult();
                    if (useResult.bool) {
                        const card = useResult.links[0];
                        list.remove(card); // 从可选项中移除已使用的牌
                        target.$gain2(card, false);
                        await game.delayx();
                        await target.chooseUseTarget(true, card, false);
                        useCount++;
                    } else {
                        break;
                    }
                }

                if (list.length > 1) {
                    // target.gain(list, "gain2");
                    const result1 = await target.chooseButton(['断织：选择获得其中一张牌', list], 1, true)
                        .forResult();
                    if (result1.bool) { await target.gain(result1.links, 'gain2'); }
                } else {
                    await target.gain(list, 'gain2');
                }
                if (trigger.player === player) {
                    player.removeMark('xinxjinshu', 1);
                    player.unmarkSkill('xinxjinshu');
                }
            },
            ai: {
                order: 10,
                threaten: 5,
            },
        },
        xinxjinshu: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "damageEnd",
            },
            forced: true,
            priority: 100,
            filter(event, player) {
                return !player.hasMark('xinxjinshu');
            },
            async content(event, trigger, player) {
                player.addMark('xinxjinshu', 1);
                player.markSkill('xinxjinshu');
            },
            intro: {
                name: "锦书",
                markcount: () => 0,
                content: '拥有"念"标记',
            },
            marktext: "念",

        },


        xinxceshi1: {
            trigger: {
                player: "useCardToPlayered",
                target: "useCardToTargeted",
            },
            filter(event, player) {
                if (event.player === event.target) return false;
                return event.targets.length === 1;
            },
            forced: true,
            // logTarget: "target",
            logTarget: function (event, player) {
                return player == event.player ? event.target : event.player;
            },
            check: function (event, player) {
                return get.attitude(player, player == event.player ? event.target : event.player) <= 0;
            },

            async content(event, trigger, player) {
                var target = (player == trigger.player ? trigger.target : trigger.player);
                // const target = event.targets[0];
                const cards = target.getCards("h");
                if (cards.length > 0) {
                    target.addGaintag(cards, "xinxceshi1_card");
                    target.addSkill('xinxceshi1_card');
                    game.log(player, "令", target, "的所有手牌视为无色牌");
                }
            },
            subSkill: {
                card: {
                    charlotte: true,
                    isxinxceshi(card) {
                        return card.hasGaintag("xinxceshi1_card");
                    },
                    mod: {
                        suit(card) {
                            if (lib.skill.xinxceshi1_card.isxinxceshi(card)) return "none";
                        },
                    },
                    sub: true,
                    sourceSkill: "xinxceshi1",
                    "_priority": 0,
                },
            },


        },

        xinxceshi2: {

            audio: 2,
            trigger: {
                target: "useCardToTargeted",
            },
            filter(event, player) {
                return get.suit(event.card) === "none";
            },
            forced: true,
            logTarget: " player",
            async content(event, trigger, player) {

                const cards = trigger.cards?.filterInD();
                if (cards.length) {
                    await player.gain(cards, 'gain2', 'log');
                    player.$gain2(cards, false);
                    await game.delayx();
                    await player.chooseUseTarget(cards, false);


                }

                else { player.draw() };

            }

        },
        xinxqueyi: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                target: "useCardToTargeted",
            },
            forced: true,
            filter(event, player) {
                return event.cards.length && event.player != player;
            },

            async content(event, trigger, player) {
                const cards = trigger.cards;
                await player.addToExpansion(cards, "gain2").gaintag.add("xinxqueyi");
                await game.asyncDraw([player, trigger.player]);
                trigger.player.addTempSkill('xinxqueyi_use');
                // 更新触发玩家的累计牌数
                if (!trigger.player.storage.xinxqueyi_count) {
                    trigger.player.storage.xinxqueyi_count = 0;
                }
                trigger.player.storage.xinxqueyi_count += 1;
                // if (cards.filter(card => get.tag(card, "damage")).length>0) {
                //     //  await player.addJudge({ name: "xumou_jsrg" },cards);
                //     await player.addToExpansion(cards, "gain2").gaintag.add("xinxqueyi");
                // }
                if (trigger.player.storage.xinxqueyi_count > 2) {
                    player.gainPlayerCard(trigger.player, "he", 1, "visible", true);
                }

            },
            marktext: "阙",
            intro: {
                markcount: "expansion",
                mark(dialog, storage, player) {
                    let cards = player.getExpansions('xinxqueyi');
                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                    else return '共有' + get.cnNumber(cards.length) + '张牌';
                },
            },
            subSkill: {
                use: {
                    trigger: {
                        global: "phaseEnd",
                    },
                    charlotte: true,
                    forced: true,
                    popup: false,
                    priority: 10,
                    content() {
                        player.storage.xinxqueyi_count = 0;
                    }
                },
            }
        },

        xinxshexin: {//判定阶段开始时，你可以展示判定区任意张牌，然后令一名其他角色选择一项：1.将所有手牌置入牌堆，然后获得展示的牌；2.令你弃置其等量张牌，并使用展示的牌。

            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxshexin" + index + ".mp3" : 2),
            trigger: {
                player: "phaseJudgeBegin",
            },
            filter: function (event, player) {
                //return player.countCards('j') > 0;
                return player.countCards("xs") > 0;
            },
            forced: true,
            popup: false,
            usable: 1,
            async content(event, trigger, player) {
                // const judgeCards = player.getCards('j');
                // await   delete player.storage.xumou_jsrg;
                //player.unmarkAuto("xumou_jsrg", judgeCards);

                const judgeCards = player.getCards("xs", card => !card._cardid);
                const cardCountMap = {};
                // 统计每种牌的数量
                for (const card of judgeCards) {
                    if (card.name in cardCountMap) {
                        cardCountMap[card.name]++;
                    } else {
                        cardCountMap[card.name] = 1;
                    }
                }
                // 找出数量大于 1 的牌
                const duplicateCards = [];
                for (const [cardName, count] of Object.entries(cardCountMap)) {
                    if (count > 1) {
                        duplicateCards.push(...judgeCards.filter(card => card.name === cardName));
                    }
                }
                player.logSkill("xinxshexin", null, null, null, [get.rand(1, 2)]);
                const result = await player.chooseCardButton(judgeCards, [1, Infinity])
                    .set('prompt', '请选择要展示的牌')
                    .set('ai', button => {
                        if (duplicateCards.length > 0) {
                            return duplicateCards.includes(button.link) ? 1 : 0;
                        } else {
                            return Math.random();
                        }
                    })
                    .forResult();
                if (result.bool) {
                    const cards = result.links;
                    const target = await player.chooseTarget(true, (card, player, target) => player != target)
                        .set('prompt', '请选择一名其他角色')
                        .set('ai', target => {
                            return -get.attitude(get.player(), target);
                        })
                        .forResult();
                    if (!target.bool || !target.targets.length) return;
                    const target1 = target.targets[0];
                    if (cards.length) player.showCards(cards);

                    // 动态生成选择列表
                    const cards2 = target1.countCards('h');
                    const choiceList = [];
                    if (cards2 > 0) {
                        choiceList.push('选项一', '选项二');
                    } else {
                        choiceList.push('选项二');
                    }

                    const choice = await target1.chooseControl(choiceList[0], choiceList[1])
                        .set('prompt', '请选择一项:')
                        .set('choiceList', [
                            '将展示的牌置入牌堆，然后交给' + get.translation(player) + '所有手牌',
                            '令' + get.translation(player) + '弃置你等量张牌，并使用展示的牌'
                        ])
                        .set('ai', () => {
                            return target1.countCards('h') > cards.length ? 1 : 0;
                        })
                        .forResult();
                    if (cards2 > 0) {
                        if (choice.index === 0) {
                            player.logSkill("xinxshexin", [target1], null, null, [3]);
                            const card = target1.getCards("h");
                            game.log(player, `将${get.cnNumber(cards.length)}张牌置入了牌堆`);
                            player.loseToDiscardpile(cards, ui.cardPile, "blank").set("log", false).insert_index = function () {
                                return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                            };
                            await target1.give(card, player);
                            // await player.give(cards, target1);
                        }
                        else if (choice.index === 1) {
                            player.logSkill("xinxshexin", [target1], null, null, [4]);
                            game.log(target1, '选择了让', player, '使用这些牌');
                            await player.discardPlayerCard('he', true, target1, cards.length);
                            for (const card of cards) {
                                //await player.draw(cards.length);
                                await player.chooseUseTarget(card, false);
                            }
                        }
                    }
                    else {
                        // 只有选项二的逻辑
                        player.logSkill("xinxshexin", [target1], null, null, [4]);
                        game.log(target1, '选择了让', player, '使用这些牌');
                        for (const card of cards) {
                            await player.discardPlayerCard('he', true, target1, cards.length);
                            await player.chooseUseTarget(card, false);
                        }
                    }
                }

                // if (player.getCards("xs", card => !card._cardid).length) {
                //     let list = player.getCards("xs", card => !card._cardid).slice(); // 复制卡牌列表
                //     while (list.some(card => player.hasUseTarget(card))) {
                //         const result = await player.chooseButton(['是否使用其中的一张牌？', list]).set('filterButton', button => {
                //             return get.player().hasUseTarget(button.link);
                //         }).set('ai', button => {
                //             if (button.link.name == 'jiu') return 10;
                //             return get.player().getUseValue(button.link);
                //         }).forResult();
                //         if (result.bool) {
                //             const card = result.links[0];
                //             list.remove(card);
                //             player.$gain2(card, false);
                //             await game.delayx();
                //             await player.chooseUseTarget(true, card, false);
                //         } else {
                //             break;
                //         }
                //     }
                // }
                await player.loseToDiscardpile(player.getCards("xs", card => !card._cardid));


            },
        },
        xinxjinmian: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: "phaseUseBegin",
            },
            forced: true,
            filter(event, player) {
                return player.getHistory("useCard").length > player.hp || player.getHistory("sourceDamage").length;
            },
            async content(event, trigger, player) {
                player.$fullscreenpop("晋冕", "thunder");
                player.changeSkin({ characterName: "xinx_simazhao" }, "xinx_simazhao_shadow");
                await player.changeGroup("jin");
                player.addTempSkills(['xinxsukan', 'xinxbingjun']);
                //await player.changeSkills(["jsrgweisi", "jsrgdangyi"], ["jsrgqiantun"]);

            },
            derivation: ['xinxsukan', 'xinxbingjun'],
            group: 'xinxjinmian_chan',
            subSkill: {
                chan: {
                    trigger: {
                        player: "phaseEnd",
                    },
                    forced: true,
                    popup: false,
                    priority: -100,
                    filter(event, player) {
                        return player.hasSkill('xinxsukan');
                    },
                    async content(event, trigger, player) {
                        player.changeSkin({ characterName: "xinx_simazhao" }, "xinx_simazhao");
                        await player.changeGroup("wei");

                    },
                }
            }
        },
        xinxsukan: {
            enable: "phaseUse",
            audio: "ext:永夜之境/audio:7",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxsukan" + index + ".mp3" : "ext:永夜之境/audio/xinxsukan" + get.rand(6, 7) + ".mp3"),
            usable: 1,
            filterTarget: function (card, player, target) {
                return player != target;
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                //target.addMark('xinxsukan',1,false);
                target.addTempSkill('xinxsukan_mark');
                target.markSkill('xinxsukan_mark');
            },
            ai: {
                order: 10,
                result: {
                    target: -1,
                },
            },
            group: 'xinxsukan_use',
            subSkill: {
                use: {
                    audio: "xinxsukan",
                    trigger: {
                        player: "useCardToPlayered",
                    },
                    forced: true,
                    popup: false,
                    logTarget: "target",
                    filter: function (event, player) {
                        return event.target.hasSkill("xinxsukan_mark");
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        const result = await player.judge().forResult();
                        if (result.color === 'black') {
                            player.logSkill("xinxsukan", [target], null, null, [get.rand(3, 5)]);
                            target.damage("thunder", 'nosource');

                        }
                        if (result.color === 'red') {
                            // const skills = target.getStockSkills(true, true);角色固有 / 库存的技能
                            // const skills = target.getSkills(null, false, false).filter(skill => {当前实时生效的技能
                            //     const info = get.info(skill);
                            //     return info && !info.charlotte;
                            // });
                            // if (!skills.length) {
                            //     return;
                            // }
                            const skills = target.getSkills(null, false, false).filter(s => {
                                if (player.getSkills().includes(s)) return false;
                                const info = lib.skill[s];
                                return info && !info.charlotte;
                            });
                            let list;
                            if (!skills.length) {
                                list = ['获得魏晋技能'];
                            } else {
                                list = ['获得其技能', '获得魏晋技能'];
                            }
                            const result = await player.chooseControl(list).set('prompt', get.skillTranslation(event.name) + ':请选择一项').set('ai', () => {
                                return get.event().controls.randomGet();
                            }).set('choiceList', ["获得其武将牌上的一个技能", "从三张魏或晋势力武将牌中获得一个技能"])
                                .forResult();
                            switch (result.control) {
                                case '获得其技能':
                                    if (skills.length) {
                                        player.logSkill("xinxsukan", [target], null, null, [get.rand(1, 2)]);
                                        /* const result = await player.chooseControl(skills).set('ai', () => {
                                            let skills = get.event().controls.slice();
                                            return skills.sort((a, b) => get.skillRank(b) - get.skillRank(a))[0];
                                        }).set('prompt', '选择一个技能获得').set('choiceList', skills.map(i => {
                                            return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                                        })).set('displayIndex', false).forResult();
                                        if (result.control) await player.addTempSkills(result.control); */
                                        const result = await player.chooseButton([`请选择获得${get.translation(target)}一个技能`, [skills, 'skill']])
                                            .set('ai', button => get.priority(button.link))
                                            .set('forced', true)
                                            .forResult();
                                        if (result.links && result.links.length) {
                                            const chosenSkill = result.links[0];
                                            player.addTempSkills(chosenSkill);
                                            player.popup(chosenSkill);
                                            game.log(player, '获得了临时技能', `【${get.translation(chosenSkill)}】`);
                                        }
                                    }
                                    break;
                                case '获得魏晋技能':
                                    player.logSkill("xinxsukan", [target], null, null, [get.rand(1, 2)]);

                                    let list = [];
                                    if (_status.characterlist) {
                                        for (const name of _status.characterlist) if (["jin", "wei"].includes(lib.character[name][1])) list.push(name);
                                    } else if (_status.connectMode) {
                                        list = get.charactersOL(name => !["jin", "wei"].includes(lib.character[name][1]));
                                    } else {
                                        list = get.gainableCharacters(info => ["jin", "wei"].includes(info[1]));
                                    }
                                    const players = game.players.concat(game.dead);
                                    for (var i = 0; i < players.length; i++) {
                                        list.remove(players[i].name);
                                        list.remove(players[i].name1);
                                        list.remove(players[i].name2);
                                    }
                                    const filter = skill => {
                                        const translation = get.skillInfoTranslation(skill, player);
                                        if (!translation) return false;
                                        const info = get.info(skill);
                                        return info && !info.zhuSkill && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
                                    };
                                    list = list.filter(name => (lib.character[name][3] || []).some(filter));
                                    if (!list.length) return;
                                    const skillList = {};
                                    for (const name of list.randomGets(3)) skillList[name] = (lib.character[name][3] || []).filter(filter);
                                    if (Object.keys(skillList).length) {
                                        const next = player.chooseButton(3, ["肃戡：获得其中一个技能", [Object.keys(skillList), "character"]], true, [1, 1]);
                                        next.set("skillList", skillList);
                                        next.set("processAI", function () {
                                            const map = get.event().skillList;
                                            return {
                                                links: Object.values(map).flat().randomGets(2),
                                                bool: true,
                                            };
                                        });
                                        next.set("custom", {
                                            replace: {
                                                button(button) {
                                                    if (!_status.event.isMine()) return;
                                                    if (button.classList.contains("selectable") == false) return;
                                                    const dialog = get.event().dialog;
                                                    const nodes = Array.from(dialog.content.childNodes[1].childNodes);
                                                    if (nodes.includes(button)) {
                                                        if (button.classList.contains("selected")) {
                                                            button.classList.remove("selected");
                                                            while (dialog.content.childElementCount > 2) dialog.content.removeChild(dialog.content.lastChild);
                                                            dialog.buttons.splice(nodes.length);
                                                            ui.update();
                                                        } else {
                                                            const node = nodes.find(node => node.classList.contains("selected"));
                                                            if (node) {
                                                                node.classList.remove("selected");
                                                                while (dialog.content.childElementCount > 2) dialog.content.removeChild(dialog.content.lastChild);
                                                                dialog.buttons.splice(nodes.length);
                                                                ui.update();
                                                            }
                                                            button.classList.add("selected");
                                                            dialog.add([get.event().skillList[button.link].map(value => [value, get.translation(value)]), "tdnodes"]);
                                                            dialog.buttons.forEach(function (button) {
                                                                if (ui.selected.buttons.some(value => value.link == button.link)) button.classList.add("selected");
                                                            });
                                                            game.check();
                                                        }
                                                    } else {
                                                        if (button.classList.contains("selected")) {
                                                            ui.selected.buttons.remove(button);
                                                            button.classList.remove("selected");
                                                            if (_status.multitarget || _status.event.complexSelect) {
                                                                game.uncheck();
                                                                game.check();
                                                            }
                                                        } else {
                                                            button.classList.add("selected");
                                                            ui.selected.buttons.add(button);
                                                        }
                                                        const custom = get.event().custom;
                                                        if (custom && custom.add && custom.add.button) custom.add.button();
                                                    }
                                                    game.check();
                                                    nodes.forEach(button => button.classList.add("selectable"));
                                                },
                                                window() {
                                                    const dialog = get.event().dialog;
                                                    const node = dialog.content.childNodes[1];
                                                    const selected = Array.from(node.childNodes).find(node => node.classList.contains("selected"));
                                                    if (selected) {
                                                        selected.classList.remove("selected");
                                                        while (dialog.content.lastChild != node) dialog.content.removeChild(dialog.content.lastChild);
                                                        dialog.buttons.splice(node.childElementCount);
                                                    }
                                                    game.uncheck();
                                                    game.check();
                                                    ui.update();
                                                },
                                            },
                                            add: next.custom.add,
                                        });
                                        const { links } = await next.forResult();
                                        await player.addTempSkills(links);
                                    }
                                    break;
                            }

                        }
                    },
                },
                mark: {
                    charlotte: true,
                    marktext: "肃戡",
                    intro: {
                        markcount: () => 0,
                        content: "已成为镇压对象",
                    },
                },
            }
        },
        xinxbingjun: {
            audio: "ext:永夜之境/audio:3",
            trigger: {
                global: "die",
            },
            forced: true,
            filter: function (event, player, name) {
                return _status.currentPhase == player && event.player != player;
            },
            async content(event, trigger, player) {
                player.draw(2);
                game.log(player, '重置了技能', '#g【肃戡】')
                delete player.getStat().skill.xinxsukan;
            },
        },

        xinxzhiyi: {
            audio: "ext:永夜之境/audio:2",
            logAudio: () => ["ext:永夜之境/audio/xinxzhiyi1.mp3", "ext:永夜之境/audio/xinxzhiyi2.mp3"],
            trigger: {
                global: "gameDrawAfter",
                player: "enterGame",
            },
            forced: true,
            async content(event, trigger, player) {

                await player.draw(2).gaintag.add("xinxzhiyi_tag");
            },

            group: "xinxzhiyi_gain",
            subSkill: {
                gain: {
                    audio: "xinxzhiyi",
                    logAudio: () => ["ext:永夜之境/audio/xinxzhiyi1.mp3", "ext:永夜之境/audio/xinxzhiyi2.mp3"],
                    trigger: {
                        player: "loseAfter",
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    filter(event, player) {
                        return player.countCards("h", card => card.hasGaintag("xinxzhiyi_tag")) == 0;
                    },
                    forced: true,
                    async content(event, trigger, player) {
                        await player.draw(2).gaintag.add("xinxzhiyi_tag");
                    },

                }
            }
        },
        xinxshenai: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxshenai" + index + ".mp3" : 2),
            zhuanhuanji: true,
            mark: true,
            marktext: "☯",
            intro: {
                content(storage) {
                    if (storage) return "交给一名其他角色一张牌，然后你获得其一张牌";
                    return "重铸一张牌";
                },
            },
            trigger: {
                player: "damageEnd",
            },
            forced: true,
            locked: false,
            filter(event, player) {
                return player.countCards("he");
            },
            async content(event, trigger, player) {
                player.changeZhuanhuanji("xinxshenai");
                if (player.storage.xinxshenai) {
                    player.logSkill("xinxshenai", null, null, null, [get.rand(3, 4)]);
                    const result = await player.
                        chooseCard("蜃霭：请重铸一张牌", 'he', 1, true)
                        .forResult();
                    if (result?.bool && result.cards?.length) {
                        await player.recast(result.cards);
                    }
                } else {
                    const result = await player.chooseCardTarget({
                        position: "he", filterCard: true, selectCard: 1,
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        ai1(card) {
                            return -get.value(card);
                        },
                        ai2(target) {
                            var att = get.attitude(_status.event.player, target);
                            if (att > 0) return 10;
                            return 2;
                        },
                        prompt: "蜃霭：选择一张牌，交给一名其他角色。",
                        forced: true,
                    }).forResult();
                    if (result.bool) {
                        const target = result.targets[0];
                        player.logSkill("xinxshenai", [target], null, null, [get.rand(1, 2)]);
                        await player.give(result.cards, target);
                        await player.gainPlayerCard(target, "he", true);
                    }

                }
            },

        },
        xinxxishuo: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            logTarget: (event, player) => game.filterPlayer().sortBySeat(),
            async content(event, trigger, player) {
                const cards = player.getCards('h', card => !get.tag(card, 'damage') && player.canRecast(card));
                if (!player.storage.xinxhaopo) {
                    event.result =
                        await player.recast(cards);
                }
                else {
                    event.result =
                        await player.addToExpansion(cards, 'giveAuto', player).gaintag.add('xinxxishuo');
                    // await player.draw(2);
                }
                for (const target of event.targets) {
                    if (!target.countCards("h", { name: 'sha' })) continue;
                    const result = await target
                        .chooseCard("h", "是否将一张【杀】置于牌堆顶", (card, target) => {
                            return card.name == 'sha';
                        })
                        .set("targetx", player)
                        .set("ai", card => {
                            const { player, targetx } = get.event();
                            let att = 0;
                            if (player && target) att = get.sgnAttitude(player, targetx);
                            if (att > 0) {
                                let val = 7 - get.value(card);
                                if (card.name == "sha") val += att * 4;
                                return val;
                            }
                            return 0;
                        })
                        .forResult();
                    if (result.bool) {
                        target.$throw(1, 1000);
                        game.log(target, "将", "#y一张【杀】", "置于了牌堆顶");
                        await target.lose(result.cards, ui.cardPile, "insert");
                        game.updateRoundNumber();
                    }
                }
                const card = { name: "qianjungongjin", isCard: true, xinxxishuo: true, storage: { nowuxie: true } };
                if (player.hasUseTarget(card)) await player.chooseUseTarget(card, true);

                //  await player.chooseUseTarget({name:'binglinchengxiax',storage: { nowuxie: true }},true,false);
            },
            marktext: "青州",
            intro: {
                content: "expansion",
                markcount: "expansion",
            },
            onremove(player, skill) {
                player.removeGaintag(skill);
                const cards = player.getExpansions(skill);
                if (cards.length) player.loseToDiscardpile(cards);
            },
        },
        xinxhaopo: {
            audio: "ext:永夜之境/audio:2",
            // trigger: {
            //     player: "dying",
            // },
            trigger: {
                player: "changeHp",
            },
            filter(event, player) {
                return event.player.hp <= 1 && event.num < 1;
            },
            derivation: ["xinxjuyan", "xinxxishuo_re"],
            juexingji: true,
            forced: true,
            skillAnimation: true,
            animationColor: "thunder",
            async content(event, trigger, player) {

                const result = await player
                    .chooseTarget(get.prompt2("xinxhaopo"), '选择一名其他角色，其将手牌摸至体力上限，你将体力回复至1点', lib.filter.notMe, true)
                    .set("ai", target => {
                        const player = get.player(),
                            hs = game.countPlayer();
                        if (target.isMaxHp()) return hs * 2;
                        return hs;
                    })
                    .forResult();
                if (result.bool) {
                    const target = result.targets[0];
                    player.line(target);
                    await target.drawTo(target.maxHp);
                    //await player.gainPlayerCard(target, "he", true, 2);
                    await player.recoverTo(1);
                }
                player.addSkill('xinxjuyan');
                await player.changeSkin({ characterName: "xinxzhu_caocao" }, "xinxzhu_caocao_shadow");
                player.awakenSkill(event.name);
            },

        },

        xinxjuyan: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "useCardToPlayer",
            },
            filter(event, player) {
                return event.card.name === 'sha' && event.player !== event.target;
                // &&event.player != player
            },
            forced: true,
            locked: false,
            popup: false,
            usable: 1,
            logTarget: "target",
            async content(event, trigger, player) {
                //await    player.addToExpansion(trigger.cards.filterInD(), "gain2").gaintag.add("xinxxishuo");

                // const target =trigger.target;
                //     const  cards1 = target.getCards("he", card =>!get.tag(card, "damage"));
                // if (cards1)    await player.addToExpansion(cards1, target, "give").gaintag.add("xinxxishuo");

                const target = trigger.target;
                const num = target.getDiscardableCards(target, "he").length;
                const cards1 = target.getCards("he", function (card) {
                    return !get.tag(card, "damage") && lib.filter.cardDiscardable(card, player, event);

                });
                if (cards1.length > 0) {
                    const minCards = cards1.length === 1 ? 1 : 2;
                    const maxCards = cards1.length === 1 ? 1 : 2;
                    const
                        result
                            =
                            await target
                                .chooseCard("he", true, [minCards, maxCards], '选择最多两张牌置于' + get.translation(player) + '的武将牌上称为“青州”', function (card) {
                                    return !get.tag(card, "damage");
                                }
                                ).forResult();
                    if (result.bool) {
                        const cards = result.cards;
                        const next = player.addToExpansion(cards, target, "give").gaintag.add("xinxxishuo");
                    }
                }
            },
            group: "xinxjuyan_gain",
            subSkill: {
                gain: {
                    audio: "xinxjuyan",
                    logAudio: () => ["ext:永夜之境/audio/xinxjuyan1.mp3", "ext:永夜之境/audio/xinxjuyan2.mp3"],
                    trigger: {
                        player: ["phaseJieshuBegin", "dying"],

                    },
                    filter(event, player) {
                        return player.countCards("xs", card => !card._cardid) > 0;
                    },
                    forced: true,
                    async content(event, trigger, player) {

                        // if (button.link == "gain") {
                        //     return player.countCards("xs", card => !card._cardid) > 0;
                        // }

                        // let cards=player.getExpansions(event.name);

                        // let cards=  player.countCards("xs", card => !card._cardid).length;
                        // const result = await player.chooseButton(['选择获得至多两张牌', cards], 2,true).set('ai', button => {
                        //     return get.value(button.link, get.event().player);
                        // }).forResult();
                        // if (result.bool) {await player.gain(result.links, 'gain2');}

                        const cards = player.getCards("xs").filter(card => !card._cardid);
                        // const buttons = cards.map(card => ({
                        //     name: get.translation(card),
                        //     link: card,
                        //     image: card.name,
                        // }));
                        let num = player.maxHp;
                        const result = await player.chooseButton(['踞兖：选择获得至多' + get.cnNumber(num) + '张牌', cards], [1, num]).set('ai', button => {
                            return get.value(button.link, get.event().player);
                        }).forResult();
                        if (result.bool) { await player.gain(result.links, 'gain2'); }

                        //     if(cards.length)player.gain(cards,'draw');
                        //   await player.gain(player.getCards("xs", card => !card._cardid),"draw");


                        //   await player.gain(
                        //     target.getCards("xs", card => !card._cardid),
                        //     "draw"
                        // );

                    }
                }
            }
        },
        xinxqianjun_card: {
            superCharlotte: true,
            marktext: "军",
            intro: {
                content: "expansion",
                markcount: "expansion",
            },
            onremove(player, skill) {
                player.removeGaintag(skill);
                const cards = player.getExpansions(skill);
                if (cards.length) player.loseToDiscardpile(cards);
            },
        },
        xinxqianjun_eff: {
            charlotte: true,
            mark: true,
            marktext: "千军",
            markimage: "image/card/sha.png",
            intro: {
                content: "不能使用伤害牌",
            },
            mod: {
                cardEnabled(card) {
                    if (get.tag(card, 'damage')) return false;
                },
            },
        },

        xinxqiansi: {
            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxqiansi1.mp3", "ext:永夜之境/audio/xinxqiansi2.mp3"],
            trigger: {
                // player: "phaseZhunbeiBegin",
                // global: "phaseZhunbeiBegin",
                global: "roundStart",

            },
            priority: 10,
            filter(event, player, name, target) {
                return event.target != player && game.hasPlayer(target => target != player && target.hasCard(card => target.canRecast(card), 'h'));;
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2("xinxqiansi"), function (card, player, target) {
                        return target != player && target.countCards('h');
                    })
                    .set("ai", target => {
                        const player = get.player(),
                            hs = game.countPlayer();
                        if (get.attitude(player, target) <= 0 && target.hp <= Math.floor(target.maxHp)) return hs * 2;
                        return hs;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];

                let cards = target.getCards('h', card => !game.hasPlayer2(target => target.getStorage('xinxqiansi').includes(card)));
                if (cards.length) {
                    // const result=await player.choosePlayerCard("选择" + get.translation(target) + "的两张手牌",2,target,'h',true,"visible").forResult();
                    const result = await player.chooseButton(["选择" + get.translation(target) + "一张手牌标记为“嗣”", cards], 1, true).forResult();
                    if (result.bool) {
                        player.markAuto("xinxqiansi", result.links);
                        target.addGaintag(result.links, 'xinxqiansi_tag');
                        player.$draw(result.links.length);
                    }
                }

            },
            mark: true,
            intro: {
                mark(dialog, storage, player) {
                    if (!player.isUnderControl(true)) return '阿斗已被' + get.translation(player) + '掳走';
                    let targets = game.filterPlayer(target => {
                        return target.hasCard(card => {
                            return card.hasGaintag('xinxqiansi_tag');
                        }, 'h');
                    }).sortBySeat(player);
                    if (targets.length) {
                        for (const target of targets) {
                            dialog.addText(get.translation(target));
                            dialog.addSmall(target.getCards('h', card => {
                                return card.hasGaintag('xinxqiansi_tag');
                            }));
                        }
                    }
                    else return '阿斗不在此处';
                },
            },
            group: ["xinxqiansi_use", "xinxqiansi_gain"],
            subSkill: {

                use: {
                    audio: "xinxqiansi",
                    logAudio: () => ["ext:永夜之境/audio/xinxqiansi3.mp3", "ext:永夜之境/audio/xinxqiansi4.mp3"],
                    trigger: {
                        global: "useCardToTarget",
                    },
                    filter(event, player) {
                        return (
                            player.getStorage("xinxqiansi").length &&
                            event.player != player &&
                            event.targets.length == 1 &&
                            event.cards.filter(function (i) {
                                return player.getStorage("xinxqiansi").includes(i);
                            }).length > 0
                        );
                    },
                    check(event, player) {
                        return get.effect(player, event.card, event.player, player) >= get.effect(event.targets[0], event.card, event.player, player);
                    },
                    logTarget: "player",
                    async cost(event, trigger, player) {

                        const card = trigger.card;
                        const cardName = get.name(card);
                        const cardType = get.type(card);

                        const isEquipmentOrHeal = [
                            'tao',
                            'jiu',
                            'wuzhongsengyou'
                        ].includes(cardName) || cardType === 'equip';

                        event.result = await player
                            .chooseTarget('选择此牌的转移目标')
                            .set("ai", target => {
                                const att = get.attitude(player, target);
                                if (isEquipmentOrHeal) {
                                    if (att >= 0) return 1; // 自己或友方
                                    return 0; // 敌人
                                } else {
                                    if (att <= 0) return 1; // 敌人
                                    return 0; // 自己或友方
                                }
                            })
                            .forResult();
                    },
                    async content(event, trigger, player) {

                        const target1 = event.targets[0];
                        const evt = trigger.getParent();

                        trigger.targets.remove(trigger.target);
                        trigger.getParent().triggeredTargets1.remove(trigger.target);
                        trigger.untrigger();

                        trigger.target.line(target1);
                        await trigger.targets.push(target1);
                        const list = trigger.cards.filter(function (i) {
                            return player.getStorage("xinxqiansi").includes(i);
                        });
                        player.unmarkAuto("xinxqiansi", list);


                    },
                    sub: true,
                    sourceSkill: "xinxqiansi",
                    "_priority": 10,
                },
                gain: {
                    charlotte: true,
                    trigger: {
                        global: ["phaseAfter"],
                    },
                    sourceSkill: "xinxqiansi",
                    filter(event, player) {

                        const targets = game.players.slice().concat(game.dead);
                        return targets.some(target => target.getStorage("xinxqiansi").filterInD("d").length);
                    },
                    forced: true,
                    logTarget: "player",
                    async content(event, trigger, player) {
                        const targets = game.players.slice().concat(game.dead);
                        const cards = targets.reduce((list, target) => list.addArray(target.getStorage("xinxqiansi").filterInD("d")), []);
                        await player.gain(cards, "gain2");
                        const list = cards.filter(function (i) {
                            return player.getStorage("xinxqiansi").includes(i);
                        });
                        player.unmarkAuto("xinxqiansi", list);
                    },
                }
            }
        },

        xinxxiaoling: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxxiaoling" + index + ".mp3" : 2),
            enable: ["chooseToUse", "chooseToRespond"],
            locked: true,
            hiddenCard(player, card) {
                return ['sha', 'shan'].includes(card.name);
            },
            filter(event, player) {
                if (event.type == 'wuxie' || player.hasSkill('xinxxiaoling_used')) return false;
                for (let name of ['sha', 'shan']) {
                    if (event.filterCard({ name: name, isCard: true }, player, event) && game.hasPlayer(current => {
                        return current.countCards("ej") > 0;
                    })) return true;
                };
                return false;
            },
            chooseButton: {
                dialog(event, player) {
                    let vcards = [];
                    for (let name of ['sha', 'shan']) {
                        let card = { name: name, isCard: true };
                        if (event.filterCard(card, player, event)) vcards.push(['基本', '', name]);
                    };
                    let dialog = ui.create.dialog('枭翎', [vcards, 'vcard'], 'hidden');
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
                            //  player.logSkill('xinxxiaoling');
                            player.when({ source: "damageSource" }).step(async () => { player.addTempSkill('xinxxiaoling_used') });
                            const result = await player.chooseTarget('枭翎：获得场上的一张牌', true, (card, player, target) => {
                                return target.countDiscardableCards(player, 'ej');
                            }).set('ai', target => {
                                const player = get.player();
                                let att = get.attitude(player, target);
                                if (att < 0) att = -Math.sqrt(-att);
                                else att = Math.sqrt(att);
                                return att * lib.card.shunshou.ai.result.target(player, target);
                            }).forResult();
                            if (result.bool) {
                                //  player.logSkill('xinxxiaoling',[result.targets[0]],null, null,[get.rand(1,2)]);
                                const { cards } = await player.gainPlayerCard(result.targets[0], 'ej', true).forResult();
                                if (["equip1"].includes(get.subtype(cards[0]))) {
                                    player.logSkill('xinxxiaoling', [result.targets[0]], null, null, [get.rand(1, 2)]);
                                    await player.addTempSkill('xinxxiaoling_used');
                                }
                                else if (["equip2"].includes(get.subtype(cards[0]))) {
                                    player.logSkill('xinxxiaoling', [result.targets[0]], null, null, [get.rand(1, 2)]);
                                    await player.addSkill("xinxxiaoling_attack");
                                    player.addMark("xinxxiaoling_attack", 1, false);
                                }
                                else if (["equip3", "equip4", "equip5"].includes(get.subtype(cards[0]))) {
                                    player.logSkill('xinxxiaoling', [result.targets[0]], null, null, [get.rand(3, 4)]);
                                    // await player.draw();
                                    await player.addTempSkill('xinxxiaoling_used');
                                }
                                else if (["delay"].includes(get.type(cards[0]))) {
                                    player.logSkill('xinxxiaoling', [result.targets[0]], null, null, [get.rand(3, 4)]);
                                    // await player.draw();
                                    await player.addTempSkill('xinxxiaoling_used');
                                }
                                player.addExpose(0.2);
                            }
                        },
                    };
                },
                prompt(links, player) {
                    return '枭翎：选择【' + get.translation(links[0][2]) + '】的目标';
                },
            },
            ai: {
                respondSha: true,
                respondShan: true,
                order: 10,
                result: {
                    player: 2,
                },
            },
            subSkill: {
                used: {
                    charlotte: true,
                    mark: true,
                    onremove: true,
                    intro: {
                        content: "本回合已失效",
                    },
                    sub: true,
                    sourceSkill: "xinxxiaoling",
                    "_priority": 0,
                },
                attack: {
                    charlotte: true,
                    onremove: true,
                    trigger: {
                        player: "damageBegin2",
                    },
                    forced: true,
                    content() {
                        trigger.num += player.countMark(event.name);
                        player.removeSkill(event.name);
                    },
                    markimage: "image/card/pss_paper.png",
                    intro: {
                        name: "枭翎 - 受伤",
                        content: "下次受到的伤害+#",
                    },
                    ai: {
                        effect: {
                            target(card, player, target) {
                                if (get.tag(card, "damage")) {
                                    return 2;
                                }
                            }
                        },
                    },
                    sub: true,
                    sourceSkill: "olsbyangwei",
                    "_priority": 0,
                },

            },
            "_priority": 0,

        },
        xinxyuanyan: {
            audio: "ext:永夜之境/audio:4",
            // trigger: {
            //     player: "damageEnd",
            //     source: "damageSource",
            // },
            // filter(event, player) {
            //     // const cards = lib.skill.xinxyuanyan.getCards().filter(card => player.hasUseTarget(card));
            //     // return cards.length > 0&&event.source;
            //     return event.source;
            // },
            // forced: true,
            // logTarget(event, player) {
            //     if (player == event.player) {
            //         return event.source;
            //     } else {
            //         return event.player;
            //     }
            // },
            // async content(event, trigger, player) {
            //     const target = player == trigger.player ? trigger.source : trigger.player;

            trigger: {
                global: "useCardAfter",
            },
            filter(event, player) {
                const { card, targets } = event;
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
                if (
                    game.hasPlayer2(target => {
                        return target.getHistory("damage", evt => evt.card && evt.card == trigger.card).length;
                    })
                ) {
                    let cards = lib.skill.xinxyuanyan.getCards().filter(card => get.player().hasUseTarget(card));
                    if (cards.length > 0) {
                        const result = await player
                            .chooseButton(["渊偃：是否使用其中的一张牌？", cards])
                            .set("filterButton", button => {
                                return get.player().hasUseTarget(button.link);
                            })
                            .set("ai", button => {
                                return get.event().player.getUseValue(button.link);
                            }).forResult();
                        if (result.bool) {
                            player.logSkill("xinxyuanyan");
                            const card = result.links[0];
                            cards.remove(card);
                            player.$gain2(card, false);
                            await game.delayx();
                            await player.chooseUseTarget(true, card, false);
                            // await player.addToExpansion(get.cards(1), "draw").gaintag.add("xinxyuanyan");
                            if (get.type(card) != "equip" && get.type(card) != "delay") {
                                await player.addToExpansion(card, "gain2", player).gaintag.add('xinxyuanyan');
                            }

                            await target.gain(lib.card.ying.getYing(2), "gain2");
                        }
                    }
                }
            },
            getCards() {
                let cards = [],
                    targets = game.players.slice().concat(game.dead.slice());
                for (const target of targets) {
                    const history = target.getHistory("lose", evt => evt.position == ui.discardPile);
                    if (history.length) {
                        for (const evt of history) cards.addArray(evt.cards2.filterInD("d"));
                    }
                }
                const historyx = game.getGlobalHistory("cardMove", evt => evt.name == "cardsDiscard");
                if (historyx.length) {
                    for (const evtx of historyx) cards.addArray(evtx.cards.filterInD("d"));
                }
                return cards;
            },
            marktext: "渊",
            intro: {
                content: "expansion",
                markcount: "expansion",
            },
            onremove(player, skill) {
                player.removeGaintag(skill);
                const cards = player.getExpansions(skill);
                if (cards.length) player.loseToDiscardpile(cards);
            },
        },

        xinxchengshu: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxchengshu" + index + ".mp3" : 2),
            trigger: {
                // global: ["loseAfter","loseAsyncAfter"],,"gainAfter"
                global: ["loseAfter", "equipAfter", "addJudgeAfter", "loseAsyncAfter", "addToExpansionAfter"],
            },
            filter(event, player) {
                // return game.hasPlayer2(current => {
                //     var evt = event.getl(current);
                //     return evt?.cards2?.some(card => card.name == 'ying');
                // })&& player.getExpansions("xinxyuanyan").length > 0 && event.player !== player;
                // && player.countCards("h")
                const cards = event.cards || event.getl(player)?.cards2 || [];
                return cards.some(card => get.name(card, false) == "ying") && player.getExpansions("xinxyuanyan").length > 0 && event.player !== player;
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {

                player.logSkill("xinxchengshu", [], null, null, [get.rand(1, 2)]);
                await player.draw();
                const cards = player.getExpansions("xinxyuanyan");
                if (cards.length && player.countCards("h")) {
                    const next = player.chooseToMove("渊偃：是否交换“渊”和手牌？");
                    next.set("list", [
                        [get.translation(player) + "（你）的“渊”", cards],
                        ["手牌区", player.getCards("h")],
                    ]);
                    next.set("filterMove", function (from, to) {
                        return typeof to != "number";
                    });
                    next.set("processAI", function (list) {
                        const player = _status.event.player,
                            cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                return get.value(a) - get.value(b);
                            }),
                            cards2 = cards.splice(0, player.getExpansions("xinxyuanyan").length);
                        return [cards2, cards];
                    });
                    const result = await next.forResult();
                    if (result.bool) {
                        const pushs = result.moved[0],
                            gains = result.moved[1];
                        pushs.removeArray(player.getExpansions("xinxyuanyan"));
                        gains.removeArray(player.getCards("h"));
                        if (pushs.length && pushs.length == gains.length) {
                            const next = player.addToExpansion(pushs);
                            next.gaintag.add("xinxyuanyan");
                            await next;
                            await player.gain(gains, "gain2", "log");
                            let cards = player.getExpansions('xinxyuanyan');
                            const
                                result = await player
                                    .chooseButton(["承枢：是否使用其中的一张牌？", cards])
                                    .set("filterButton", button => {
                                        return get.player().hasUseTarget(button.link);
                                    })
                                    .set("ai", button => {
                                        return get.event().player.getUseValue(button.link);
                                    }).forResult();
                            if (result.bool) {
                                player.logSkill("xinxchengshu", [], null, null, [get.rand(3, 4)]);
                                const card = result.links[0];
                                cards.remove(card);
                                player.$gain2(card, false);
                                await game.delayx();
                                await player.chooseUseTarget(true, card, false, 'nodistance');
                                const xs = player.getExpansions("xinxyuanyan");
                                let bool1 =
                                    xs.every(c => {
                                        return get.color(c) == get.color(xs[0]);
                                    });
                                if (bool1) {
                                    await player.draw();
                                }
                            }
                        }
                    }
                }
            },
            group: ["xinxchengshu_backup", "xinxchengshu_hs"],
            subSkill: {
                hs: {
                },
                backup: {
                    log: false,
                    popname: true,
                    precontent() {
                        player.logSkill("xinxchengshu", null, null, null, [get.rand(3, 4)]);
                        let name = event.result.card.name, cards = event.result.card.cards.slice(0);
                        event.result.cards = cards;
                        let rcard = cards[0], card;
                        if (rcard.name == name) card = get.autoViewAs(rcard);
                        else card = get.autoViewAs({ name, isCard: true });
                        event.result.card = card;
                    },
                    filterCard: () => false,
                    selectCard: -1,
                },
            }
        },
        xinxlongxiang: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxlongxiang" + index + ".mp3" : 2),
            trigger: {
                player: ["loseAfter"],
                global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
            },
            // ,'damageBegin3'
            filter(event, player) {
                // if (player.countCards("h", { type: ["trick", "delay","equip"] }) > 0) return false;
                //  return event.name === 'damageBegin3'

                if (player.countCards("h")) return false;
                var evt = event.getl(player);
                return evt && evt.hs && evt.hs.length; // 确保失去了手牌

            },
            // usable:1,
            popup: false,
            locked: true,
            async cost(event, trigger, player) {

                const list = get.inpileVCardList(info => {
                    return ["basic", "trick", "delay"].includes(info[0]) && !player.getStorage("xinxlongxiang_used").includes(info[2]);
                });
                await player.draw();
                player.logSkill("xinxlongxiang", [], null, null, [get.rand(1, 2)]);
                if (list.length === 0) {
                    game.log(player, "没有可选的卡牌");
                    const list1 = get.inpileVCardList(info => {
                        if (info[0] != "basic") return false;
                        return player.hasUseTarget({ name: info[2], nature: info[3], isCard: true });
                    });
                    if (list1.length) {
                        const next = player.chooseButton(["是否视为使用一张基本牌？", [list1, "vcard"]]);
                        next.set("ai", button => {
                            const card = {
                                name: button.link[2],
                                nature: button.link[3],
                                isCard: true,
                            };
                            return player.getUseValue(card);
                        });
                        const { links } = await next.forResult();
                        if (!links?.length) return;
                        const card = { name: links[0][2], nature: links[0][3], isCard: true };
                        await player.logSkill("xinxlongxiang", [], null, null, [get.rand(3, 4)]);
                        await player.chooseUseTarget(card, true);
                    }
                    return;
                }
                const dialog = [`###${get.prompt("xinxlongxiang")}###<div class="text center">从牌堆或弃牌堆中获得一张牌</div>`, [list, "vcard"]];
                const { bool, links } = await player.chooseButton(dialog)
                    .set("ai", button => {
                        const trigger = _status.event.getTrigger();
                        const player = get.player(),
                            name = button.link[2];
                        if (!get.cardPile2(card => card.name == name)) return 0;
                        const value = get.value({ name: name });
                        if (get.type(name) === 'basic') {
                            return value * 100;
                        }
                        return value;
                    }).set("filterButton", button => {
                        const name = button.link[2];
                        return !player.getStorage("xinxlongxiang_used").includes(name);
                        return event.filterCard(new lib.element.VCard({ name: button.link[2], nature: button.link[3] }), player, event);
                    }).forResult();
                event.result = {
                    bool: bool,
                    cost_data: links,
                };
            },
            async content(event, trigger, player) {
                const {
                    cost_data: links,
                    name: skillName,
                } = event;
                const name = links[0][2],
                    type = links[0][0],
                    nature = links[0][3];

                const cardx = { name: name, nature: nature };
                player.popup(cardx);
                // if (type === 'basic') {
                player.markAuto('xinxlongxiang_used', [name]);
                // }
                player.addSkill('xinxlongxiang_used');
                game.log(player, "声明了", `#y${get.translation(cardx)}`);
                const card = get.cardPile(card => get.name(card, false) == name && get.nature(card, false) == nature);
                if (card) {
                    const next = player.gain([card], "gain2");
                    // next.gaintag.add(skillName);
                    await next;
                } else { player.chat("无牌可得？"); }

                const basicCards = get.inpileVCardList(info => info[0] === 'basic');
                //const basicCards = get.inpileVCardList(info => ["basic", "trick", "delay"].includes(info[0]));
                const remainingBasics = basicCards.filter(info => !player.getStorage("xinxlongxiang_used").includes(info[2]));
                if (remainingBasics.length === 0) {
                    const list = get.inpileVCardList(info => {
                        if (info[0] != "basic") return false;
                        return player.hasUseTarget({ name: info[2], nature: info[3], isCard: true });
                    });
                    if (list.length) {
                        const next = player.chooseButton(["是否视为使用一张基本牌？", [list, "vcard"]]);
                        next.set("ai", button => {
                            const card = {
                                name: button.link[2],
                                nature: button.link[3],
                                isCard: true,
                            };
                            return player.getUseValue(card);
                        });
                        const { inks } = await next.forResult();
                        if (!links?.length) return;
                        const card = { name: links[0][2], nature: links[0][3], isCard: true };
                        await player.logSkill("xinxlongxiang", [], null, null, [get.rand(3, 4)]);
                        await player.chooseUseTarget(card, true, false);
                    }
                }
                // const allCards = get.inpileVCardList(info => ["basic", "trick", "delay"].includes(info[0]));
                // const usedCards = player.getStorage("xinxlongxiang_used");
                // const remainingCards = allCards.filter(info => !usedCards.includes(info[2]));
                // if (remainingCards.length === 0) {
                //     player.draw(2);
                // }

            },
            ai: {
                threaten: 0.8,
                effect: {
                    player_use(card, player, target) {
                        if (player.countCards("h") === 1) return [1, 0.8];
                    },
                    target(card, player, target) {
                        if (get.tag(card, "loseCard") && target.countCards("h") === 1) return 0.5;
                    },
                },
                noh: true,
                nokeep: true,
                skillTagFilter(player, tag) {
                    if (tag == "noh") {
                        if (player.countCards("h") != 1) return false;
                    }
                },
            },
            subSkill: {
                used: {
                    charlotte: true,
                    onremove: true,
                    intro: {
                        content: "已移除牌名：$",
                    },
                    sub: true,
                    sourceSkill: "xinxlongxiang",
                    "_priority": 0,
                },
            }
        },
        xinxcangnuo: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxcangnuo" + index + ".mp3" : 2),
            trigger: {
                target: "useCardToTargeted",
            },
            filter(event, player) {
                if (player == _status.currentPhase) return false;
                return get.tag(event.card, 'damage') >= 1;
            },
            init(player) {
                if (!player.storage.xinxcangnuo_targetCount) player.storage.xinxcangnuo_targetCount = 0;
            },
            onremove(player) {
                delete player.storage.xinxcangnuo_targetCount;
            },
            forced: true,
            async content(event, trigger, player) {
                player.storage.xinxcangnuo_targetCount++;
                let num = player.storage.xinxcangnuo_targetCount;
                game.broadcastAll(num => {
                    lib.skill.xinxcangnuo_backup.selectCard = [1, num];
                }, num);
                const next = player.chooseToUse();
                next.set("openskilldialog", `沧诺：将至多${get.cnNumber(num)}张手牌当作不计入次数的【杀】使用，此牌结算后你弃置目标角色对应实体牌数张手牌`);
                next.set("norestore", true);
                next.set("_backupevent", "xinxcangnuo_backup");
                next.set("custom", {
                    add: {},
                    replace: { window() { } },
                });
                next.backup("xinxcangnuo_backup");
                next.set("targetRequired", true);
                next.set("complexSelect", true);
                next.set("filterTarget", (...args) => lib.filter.targetEnabled.apply(this, args));
                // next.set("logSkill", event.name);
                player.logSkill("xinxcangnuo", [], null, null, [get.rand(3, 4)]);
                next.set("addCount", false);
                //     next.set("oncard", () => {
                //         let event = get.event(),
                //             { cards } = event;
                //         event.set("xinxcangnuo", true);
                //     let target = event.targets[0];
                //    // player.logSkill("xinxcangnuo", [], null, null, [get.rand(3,4)]);
                //     if (target && target.countCards('h')) {
                //         target.chooseToDiscard(true, 'h', cards.length).set('prompt', `弃置${get.cnNumber(cards.length)}张手牌`).set('ai', card => get.unuseful(card));
                //     }
                //     });
                await next;
                if (next.result && next.result.bool) {
                    const cards = next.result.cards;
                    const targets = next.result.targets;

                    if (cards && cards.length > 0 && targets && targets.length > 0) {
                        for (const target of targets) {
                            if (target.countCards('he')) {
                                player.logSkill("xinxcangnuo", [], null, null, [get.rand(1, 2)]);
                                // target.chooseToDiscard(true, 'h', cards.length).set('prompt', `弃置${get.cnNumber(cards.length)}张手牌`).set('ai', card => get.unuseful(card));
                                player.discardPlayerCard(target, true, 'he', cards.length);
                            }
                        }
                    }
                }

                player.when({ global: "phaseAfter" }).step(async () => {
                    player.storage.xinxcangnuo_targetCount = 0;
                });
            },
            subSkill: {
                backup: {
                    filterCard: (card, player) => get.itemtype(card) == "card",
                    viewAs: {
                        name: "sha",
                    },
                    position: "h",
                    ai1(card) {
                        return 8 - get.value(card);
                    },
                    log: false,
                    sub: true,
                    sourceSkill: "xinxcangnuo",
                }
            }
        },

        xinxlujing: {
            audio: "ext:永夜之境/audio:4",
            logAudio: () => ["ext:永夜之境/audio/xinxlujing1.mp3", "ext:永夜之境/audio/xinxlujing2.mp3"],
            trigger: {
                player: "useCardToPlayered",
            },
            filter(event, player) {
                return player != event.target && event.target.isIn();

                // && event.target.hp <= player.hp
            },
            //forced: true,
            locked: true,
            usable: 1,
            logTarget: "target",
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2("xinxlujing"), (card, player, target) => {
                        return _status.event.targets.includes(target);
                    })
                    .set("ai", target => {
                        return 2 - get.attitude(get.player(), target);
                    })
                    .set("targets", trigger.targets)
                    .forResult();
            },


            async content(event, trigger, player) {
                const {
                    targets: [target],
                } = event;
                if (!player.storage.xinxlujing) {
                    player.storage.xinxlujing = [];
                }
                await target.addMark('xinxlujing_gain', 1, false);
                await player.addTempSkill('xinxlujing_gain', { player: "phaseBegin" });


                // 将目标玩家添加到 player.storage.xinxlujing 数组中
                player.storage.xinxlujing.push(target);

                if (!_status.characterlist) lib.skill.pingjian.initList();
                const extensionCharacters = Object.keys(lib.characterPack['xinx1'] || {});
                const filteredNames = extensionCharacters.filter(name => {
                    const info = get.character(name);
                    return ['double', 'female'].includes(info.sex) && info.skills?.some(skill => !player.hasSkill(skill, false, false));
                }).randomGets(1);

                if (filteredNames?.length) {
                    for (const name of filteredNames) {
                        target.flashAvatar(event.name, name);

                        // if (target.node.avatar) {
                        //     target.node.avatar.setBackgroundImage(`extension/永夜之境/image/${name}.png`);
                        // }
                        // if (target.node.avatar2) {
                        //     target.node.avatar2.setBackgroundImage(`extension/永夜之境/image/${name}.png`);    //永久替换武将图片
                        // }
                    }
                }


                player.when({ player: "phaseBegin" })
                    .step(async (event, trigger, player) => {
                        const targets = player.storage.xinxlujing;
                        if (targets && Array.isArray(targets)) {
                            for (const target of targets) {
                                if (target && !target.isDead() && target.isIn() && target.hasMark('xinxlujing_gain')) {
                                    await target.removeMark('xinxlujing_gain');
                                }
                            }
                        }
                        delete player.storage.xinxlujing;
                    });




            },
            // group: 'xinxlujing_remove',
            subSkill: {
                gain: {
                    marktext: "掳",
                    intro: {
                        name: "掳京",
                        content: "已被太师掳获",
                        markcount: () => 0,
                    },
                    audio: "ext:永夜之境/audio:2",
                    trigger: {
                        global: ["recoverBegin", "gainAfter", "loseAsyncAfter"],
                    },
                    direct: true,
                    superCharlotte: true,
                    filter(event, player) {
                        if (!event.player) return false;
                        return player != event.player && event.player.hasMark('xinxlujing_gain');
                    },
                    async content(event, trigger, player) {
                        if (trigger.name == "gain" || trigger.name == "loseAsync") {
                            const lostCards = trigger.cards || [];
                            if (lostCards.length > 0) {
                                //  player.gain(lostCards, trigger.player, 'giveAuto', 'bySelf');

                                // const basicCards = lostCards.filter(card => get.type(card) === 'basic');
                                // if (basicCards.length > 0) {
                                //     player.gain(basicCards, trigger.player, 'giveAuto', 'bySelf');
                                // }

                                const num = Math.floor(lostCards.length / 2);
                                if (num > 0) {
                                    // if (num === 1) {
                                    //     await player.gain([lostCards[0]], 'gain2', trigger.player);
                                    // } else {
                                    const result = await player.chooseButton(['掳京：选择获得' + get.cnNumber(num) + '张牌', lostCards], num).forResult();
                                    await player.line(trigger.player);
                                    if (result.bool) await player.gain(result.links, 'gain2', trigger.player);
                                }
                            }

                        }
                        else {
                            trigger.cancel();
                            await player.logSkill("xinxlujing_gain", trigger.player);
                            await player.gainMaxHp(trigger.num);
                        }
                    }
                },
                remove: {
                    forced: true,
                    popup: false,
                    charlotte: true,
                    trigger: {
                        player: ['phaseBegin', "dieBegin"],
                    },
                    filter: function (event, player) {
                        if (event.name == "die") return true;
                        const targets = player.storage.xinxlujing;
                        if (targets && Array.isArray(targets)) {
                            for (const target of targets) {
                                if (target && !target.isDead() && target.isIn() && target.hasMark('xinxlujing_gain')) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const targets = player.storage.xinxlujing;
                        if (targets && Array.isArray(targets)) {
                            for (const target of targets) {
                                if (target && !target.isDead() && target.isIn() && target.hasMark('xinxlujing_gain')) {
                                    await target.removeMark('xinxlujing_gain');
                                }
                            }
                        }
                        delete player.storage.xinxlujing;
                    },
                    sub: true,
                    sourceSkill: "xinxlujing",
                },

            }
        },
        xinxzisui: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzisui" + index + ".mp3" : 2),
            trigger: {
                player: "phaseJieshuBegin",
            },
            filter(event, player) {
                return player.getStorage("xinxzisui").length < 3;
            },
            locked: true,
            // filterTarget(card, player, target) {
            //     return target != player;
            // },
            popup: false,
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(
                        get.prompt("xinxzisui"),
                        '锁定技。结束阶段，你选择一名其他角色并选择一项：<br>1.令其摸X张牌；<br>2.令其回复X点体力；<br>3.令其将X张手牌当【决斗】对你使用，否则你与其各失去1点体力。<br>然后你移除此选项。当所有选项移除后，你减4点体力上限（X为场上牌数）。',
                        function (card, player, target) {
                            return target != player;
                        }, true)
                    .set("ai", target => {
                        const player = get.player(),
                            hs = game.countPlayer();
                        if (get.attitude(player, target) <= 0 && target.hasMark('xinxlujing_gain')) return hs * 2;
                        return hs;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const num = Math.max(1, game.countPlayer(function (current) { return current.countCards('ej'); }));
                let result,
                    list = ["摸牌", "回复", "决斗"].filter(i => !player.getStorage("xinxzisui").includes(i));
                if (list.length == 1) result = { control: list[0] };
                else
                    result = await player
                        .chooseControl(list)
                        .set("prompt", "恣睢：选择执行并移去一项")
                        .set("ai", () => {
                            if (target.isDamaged()) return "回复";
                            if (target.countCards('h') < num) return "决斗";
                            return "摸牌";
                        })
                        // .set('choiceList', ["令" + get.translation(target) + "摸" + get.cnNumber(num) + "张牌", "令" + get.translation(target) + "回复" + get.cnNumber(num) + "点体力", "令" + get.translation(target) + "将" + get.cnNumber(num) + "张手牌当【决斗】对你使用，否则其失去2点体力"].filter(i => !player.getStorage("xinxzisui").includes(i)))
                        .set('choiceList', list.map(choice => {
                            switch (choice) {
                                case "摸牌":
                                    return "令" + get.translation(target) + "摸" + get.cnNumber(num) + "张牌";
                                case "回复":
                                    return "令" + get.translation(target) + "回复" + get.cnNumber(num) + "点体力";
                                case "决斗":
                                    return "令" + get.translation(target) + "将" + get.cnNumber(num) + "张手牌当【决斗】对你使用，否则你与其失去1点体力";
                            }
                        }))
                        .forResult();
                const choice = result.control;
                player.popup(choice);
                game.log(player, "选择了", "#y" + choice);
                switch (choice) {
                    case "摸牌":
                        player.logSkill("xinxzisui", [target], null, null, [get.rand(1, 2)]);
                        target.draw(num);
                        break;
                    case "回复":
                        player.logSkill("xinxzisui", [target], null, null, [get.rand(1, 2)]);
                        target.recover(num);
                        break;
                    case "决斗":
                        const count = target.countCards("h");
                        player.logSkill("xinxzisui", [target], null, null, [get.rand(3, 4)]);
                        if (count >= num) {
                            game.broadcastAll(num => {
                                lib.skill.xinxzisui_backup.selectCard = num;
                            }, num);
                            const next = target.chooseToUse();
                            next.set("openskilldialog", `恣睢：将${get.cnNumber(num)}张手牌当作【决斗】对${get.translation(player)}使用`);
                            next.set("norestore", true);
                            next.set("_backupevent", "xinxzisui_backup");
                            next.set("custom", {
                                add: {},
                                replace: { window() { } },
                            });
                            next.backup("xinxzisui_backup");
                            next.set("targetRequired", true);
                            next.set("complexSelect", true);
                            next.set("filterTarget", function (card, player, target) {
                                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                return lib.filter.targetEnabled.apply(this, arguments);
                            });
                            // next.set("logSkill", event.name);
                            next.set("sourcex", player);
                            next.set("addCount", false);
                            next.set("forced", true);
                            await next;
                        }
                        else {
                            player.loseHp(1);
                            target.loseHp(1);
                        }

                        break;
                }
                player.markAuto("xinxzisui", [choice]);
                if (player.getStorage("xinxzisui").length == 3) {
                    await player.loseMaxHp(4);
                }
            },
            mark: true,
            intro: {
                markcount: storage => 3 - (storage || []).length,
                content: storage => ((storage || []).length ? "已移去了" + storage + "项" : "暂未移去任何项"),
            },
            subSkill: {
                backup: {
                    filterCard: (card, player) => get.itemtype(card) == "card",
                    viewAs: {
                        name: "juedou",
                    },
                    position: "h",
                    ai1(card) {
                        return 8 - get.value(card);
                    },
                    log: false,
                    sub: true,
                    sourceSkill: "xinxzisui",
                    "_priority": 0,
                },
            }
        },

        xinxqiyi: {
            init(player, skill) {
                player.storage[skill] = {
                    color: null,
                    players: [],
                };
            },
            audio: "ext:永夜之境/audio:3",
            logAudio: () => ["ext:永夜之境/audio/xinxqiyi1.mp3", "ext:永夜之境/audio/xinxqiyi2.mp3", "ext:永夜之境/audio/xinxqiyi3.mp3"],
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            filter(event, player) {
                return game.hasPlayer(current => current != player);
            },
            priority: 1,
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2("xinxqiyi"), function (card, player, target) {
                        return target != player;
                    })
                    .set("ai", target => {
                        const player = get.player(),
                            hs = game.countPlayer();
                        if (get.attitude(player, target) > 0 || target.isMaxHandcard()) return hs * 2;
                        return hs;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                var target = event.targets[0];
                player.addSkill(['xinxqiyi_mark', 'xinxqiyi_eff1']);
                player.storage.xinxqiyi_mark = player;
                await player.storage.xinxqiyi.players.add(player);


                target.addSkill(['xinxqiyi_mark', 'xinxqiyi_eff1']);
                target.storage.xinxqiyi_mark = player;
                player.storage.xinxqiyi.players.add(target);


                player.when({ player: "phaseBegin" })
                    .filter(evt => evt.player == target)
                    .step(async (event, trigger, player) => {
                        player.storage.xinxqiyi = {
                            color: null,
                            players: [],
                        };
                        player.removeSkill('xinxqiyi_eff1');
                        player.removeSkill('xinxqiyi_group');
                        player.removeSkill('xinxqiyi_mark');
                        target.removeSkill('xinxqiyi_eff1');
                        target.removeSkill('xinxqiyi_group');
                        target.removeSkill('xinxqiyi_mark');
                    })


                player.when("phaseEnd")
                    //.filter(evt => evt.player == target)
                    .step(async (event, trigger, player) => {
                        let num = 0;
                        target.getHistory("lose", evt => {
                            if (evt.cards2) num += evt.cards2.length;
                        });
                        await player.draw(num);
                        target.getHistory("lose", evt => {
                            if (evt.cards2) num += evt.cards2.length;
                        });
                        if (num > 0 && target.isIn()) {
                            const result =
                                await player.chooseBool("契翊：是否令" + get.translation(target) + "摸" + get.cnNumber(num) + "张牌？", lib.filter.notMe).set("choice")
                                    .set("ai", () => {
                                        let evt = _status.event.getParent();
                                        return get.attitude(evt.player, evt.target) > 0;
                                    }).forResult();
                            if (result?.bool) {
                                await target.draw(num);
                            }
                        }
                    });
                //  await player.addTempSkill('xinxqiyi_eff2');
                //    await target.addSkill('xinxqiyi_clear');


                // let num = 0;
                // player.getHistory("lose", evt => {
                //     if (evt.cards2) num += evt.cards2.length;
                // });

            },
            ai: {
                order: 13,
                threaten: 2.3,
                result: {
                    player: 1,
                },
            },
            group: ['xinxqiyi_clear'],
            subSkill: {
                mark: {
                    mark: true,
                    intro: {
                        content(event, player) {
                            var target = game.findPlayer(current => {
                                return current == player.storage.xinxqiyi_mark;
                            });
                            var storage = target.storage.xinxqiyi.players.slice();
                            storage.remove(target);
                            if (storage.length == 0) return `<font color=#FFD700>${get.translation(target)}</font>知己未觅`;
                            return `<font color=#FFD700>${get.translation(target)}</font>与<font color=#FFD700>${get.translation(storage)}</font>琴剑同鸣`;
                        },
                    },
                    onremove: true,
                    charlotte: true,
                    silent: true,
                    firstDo: true,
                    forceDie: true,
                    trigger: {
                        player: 'die',
                    },
                    content() {
                        var target = game.findPlayer(current => {
                            return current == player.storage.xinxqiyi_mark;
                        });
                        if (!target) return;
                        target.storage.xinxqiyi.players.remove(trigger.player);
                        player.removeSkill('xinxqiyi_mark');
                    },
                },
                clear: {
                    // audio: "xinxqiyi",
                    // logAudio: () => ["ext:永夜之境/audio/xinxqiyi1.mp3", "ext:永夜之境/audio/xinxqiyi2.mp3", "ext:永夜之境/audio/xinxqiyi3.mp3"],
                    charlotte: true,
                    silent: true,
                    trigger: { global: ['dieBefore'] },
                    forceDie: true,
                    filter(event, player) {
                        return event.player.hasSkill('xinxqiyi_mark');
                        // player.storage.xinxqiyi['players'].length > 0&&
                    },
                    async content(event, trigger, player) {
                        for (var i of player.storage.xinxqiyi['players']) {
                            i.removeSkill('xinxqiyi_eff1');
                            i.removeSkill('xinxqiyi_group');
                            i.removeSkill('xinxqiyi_mark');
                        };
                        player.storage.xinxqiyi = {
                            color: null,
                            players: [],
                        };
                        // const {
                        //     result: { bool },
                        // } =
                        //     await player.chooseBool("契翊：是否令" + get.translation(i) + "摸两张牌？", lib.filter.notMe).set("choice")
                        //         .set("ai", target => get.recoverEffect(target, get.player(), get.player()));
                        // if (bool) {
                        //     // await player.line(i);
                        //     await player.logSkill("xinxqiyi_clear", [i]);
                        //     await i.draw(2);
                        // }
                    },
                },
                eff1: {
                    silent: true,
                    charlotte: true,
                    trigger: {
                        global: ["loseEnd", "equipEnd", "addJudgeEnd", "gainEnd", "loseAsyncEnd", "addToExpansionEnd", "xinxqiyiAfter"],
                    },
                    filter(event, player) {
                        return (player.hasSkill('xinxqiyi_mark')) ^ player.hasSkill('xinxqiyi_group');
                    },
                    async content(event, trigger, player) {
                        if (player.hasSkill('xinxqiyi_mark')) {
                            var cards = [],
                                target = game.findPlayer(current => {
                                    return current == player.storage.xinxqiyi_mark;
                                });
                            for (var i of target.storage.xinxqiyi.players) {
                                if (i.countCards('h') == 0) continue;
                                if (i == player) continue;
                                for (var j of i.getCards('h')) cards.push(j);
                            }
                            var cardsx = cards.map(card => {
                                var cardx = ui.create.card();
                                cardx.init(get.cardInfo(card));
                                cardx._cardid = card.cardid;
                                return cardx;
                            });
                            player.directgains(cardsx, null, 'xinxqiyi');
                            player.addSkill('xinxqiyi_group');
                        }
                        else player.removeSkill('xinxqiyi_group');
                    },
                },
                group: {
                    charlotte: true,
                    group: ['xinxqiyi_eff_use', 'xinxqiyi_eff_lose'],
                    trigger: {
                        global: ["addJudgeAfter", "gainAfter", "loseAfter", "loseAsyncAfter", "cardsDiscardAfter", "equipAfter"],
                    },
                    forced: true,
                    silent: true,
                    filter: function (event, player) {
                        if (event.name == 'gain') return event.cards && event.cards.length;
                        var cards = event.getd();
                        return cards.length;
                    },
                    onremove: function (player) {
                        var cards2 = player.getCards('s', card => {
                            return card.hasGaintag('xinxqiyi');
                        });
                        if (player.isOnline2()) {
                            player.send(function (cards, player) {
                                cards.forEach(i => i.delete());
                                if (player == game.me) ui.updatehl();
                            }, cards2, player);
                        }
                        cards2.forEach(i => i.delete());
                        if (player == game.me) ui.updatehl();
                    },
                    content: function () {
                        var cards = [];
                        var idList = player.getCards('s', card => card.hasGaintag('xinxqiyi')).map(i => i._cardid);
                        var target = game.findPlayer(current => {
                            return current == player.storage.xinxqiyi_mark;
                        });
                        for (var i of target.storage.xinxqiyi.players) {
                            if (i.countCards('h') == 0) continue;
                            if (i == player) continue;
                            for (var j of i.getCards('h')) {
                                if (idList.includes(j.cardid)) continue;
                                cards.push(j);
                            }
                        }
                        var cards2 = cards.map(card => {
                            var cardx = ui.create.card();
                            cardx.init(get.cardInfo(card));
                            cardx._cardid = card.cardid;
                            return cardx;
                        });
                        player.directgains(cards2, null, 'xinxqiyi');
                    },
                },
                eff_use: {
                    trigger: {
                        player: ["useCardBefore", "respondBefore"],
                    },
                    charlotte: true,
                    forced: true,
                    popup: false,
                    firstDo: true,
                    filter: function (event, player) {
                        var cards = player.getCards('s', card => card.hasGaintag('xinxqiyi') && card._cardid);
                        return event.cards && event.cards.some(card => {
                            return cards.includes(card);
                        });
                    },
                    content: function () {
                        var idList = player.getCards('s', card => card.hasGaintag('xinxqiyi')).map(i => i._cardid);
                        var cards = [];
                        var target = game.findPlayer(current => {
                            return current == player.storage.xinxqiyi_mark;
                        });
                        for (var i of target.storage.xinxqiyi.players) {
                            if (i.countCards('h') == 0) continue;
                            if (i == player) continue;
                            for (var j of i.getCards('h')) {
                                if (!idList.includes(j.cardid)) continue;
                                cards.push(j);
                            }
                        }
                        var cards2 = [];
                        for (var card of trigger.cards) {
                            var cardx = cards.find(cardx => cardx.cardid == card._cardid);
                            if (cardx) cards2.push(cardx);
                        }
                        var cards3 = trigger.cards.slice();
                        trigger.cards = cards2;
                        trigger.card.cards = cards2;
                        if (player.isOnline2()) {
                            player.send(function (cards, player) {
                                cards.forEach(i => i.delete());
                                if (player == game.me) ui.updatehl();
                            }, cards3, player);
                        }
                        cards3.forEach(i => i.delete());
                        if (player == game.me) ui.updatehl();
                    },
                },
                eff_lose: {
                    trigger: {
                        global: ["loseEnd", "equipEnd", "addJudgeEnd", "gainEnd", "loseAsyncEnd", "addToExpansionEnd", "cardsGotoOrderingBegin"],
                    },
                    charlotte: true,
                    forced: true,
                    popup: false,
                    firstDo: true,
                    filter: function (event, player) {
                        var idList = player.getCards('s', card => card.hasGaintag('xinxqiyi')).map(i => i._cardid);
                        return event.cards && event.cards.some(card => {
                            return idList.includes(card.cardid);
                        });
                    },
                    content: function () {
                        var cards2;
                        var idList = [];
                        var target = game.findPlayer(current => {
                            return current == player.storage.xinxqiyi_mark;
                        });
                        for (var i of target.storage.xinxqiyi.players) {
                            if (i.countCards('h') == 0) continue;
                            if (i == player) continue;
                            for (var j of i.getCards('h')) {
                                idList.add(j.cardid);
                            };
                        }
                        cards2 = player.getCards('s', card => {
                            return card.hasGaintag('xinxqiyi') && !idList.includes(card._cardid);
                        });
                        if (player.isOnline2()) {
                            player.send(function (cards, player) {
                                cards.forEach(i => i.delete());
                                if (player == game.me) ui.updatehl();
                            }, cards2, player);
                        }
                        cards2.forEach(i => i.delete());
                        if (player == game.me) ui.updatehl();
                    },
                },
                eff2: {
                    trigger: {
                        player: ["loseAfter", "changeHp", "gainMaxHpAfter", "loseMaxHpAfter", "xinxqiyiAfter"],
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    charlotte: true,
                    forced: true,
                    filter: function (event, player) {
                        if (event.getl && !event.getl(player)) return false;
                        return player.countCards('h') < player.storage.xinxqiyi.players.length
                    },
                    content: function () {
                        player.draw(player.storage.xinxqiyi.players.length - player.countCards('h'));
                    },
                    ai: {
                        noh: true,
                        skillTagFilter: function (player, tag) {
                            if (tag == 'noh' && player.maxHp - player.hp < player.storage.xinxqiyi.players.length) {
                                return false;
                            }
                        },
                    },
                },
            },
        },

        xinxfanjian: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxfanjian" + index + ".mp3" : 2),
            trigger: {
                player: "phaseUseBegin",
            },
            forced: true,
            popup: false,
            filter(event, player) {
                return player.countCards('h');
            },
            async content(event, trigger, player) {

                game.addGlobalSkill('xinxfanjian_biao');
                // const cards = player.getCards("hs").filter(card => get.type(card) === 'basic' && !['sha'].includes(get.name(card)));
                // await player.addGaintag(cards, 'xinxfanjian_tag');


                // const card = get.cardPile2(card => get.type2(card) === 'trick');
                // if (card) {
                //     const next = player.markAuto('xinxfanjian', card);
                // }

                const cards = player.getCards("h", card => !game.hasPlayer2(player => player.getStorage('xinxfanjian').includes(card)));

                // const cards = player.getCards("h").filter(card => {
                //     return !game.hasPlayer(target => lib.filter.targetEnabled2(card, get.player(), target));
                //     return true;
                // })
                // await player.addTempSkill('xinxfanjian_use');
                // await player.addGaintag(cards, 'xinxfanjian_tag');

                ai.get.buttonValue = function (button) {
                    const card = button.link;
                    if (get.type(card) === 'equip') return 5; // 装备牌优先级最高
                    if (get.type(card) === 'trick') return 4; // 锦囊牌次之
                    return 1; // 其他牌优先级最低
                };

                const result = await player.chooseButton(['反间：选择一张牌，并标记一张牌堆中与之相同花色的牌', cards], 1, true)
                    // .set("filterButton", button => {
                    //     const card = button.link;
                    //     return get.type(card) === 'basic' && !['sha'].includes(get.name(card));
                    // })
                    .set("ai", button => {
                        const card = button.link;
                        if (get.type(card) === 'equip') return 5;
                        if (get.type(card) === 'trick') return 4;
                        if (get.name(card) === 'jiu') return 3;
                        return 1;
                    })
                    .forResult();
                if (result.bool) {
                    player.logSkill("xinxfanjian", [], null, null, [get.rand(1, 2)]);
                    // await player.addGaintag(result.links, 'xinxfanjian_tag');
                    // await player.markAuto('xinxfanjian', result.links);
                    const selectedCard = result.links[0];
                    const suit = get.suit(selectedCard);

                    const card = get.cardPile2(card => get.suit(card) === suit);
                    if (card) {
                        const next = player.markAuto('xinxfanjian', card);
                    } else { player.chat("没牌了"); }
                    await game.delayx();
                };
            },
            intro: {
                mark(dialog, content, player) {
                    if (player == game.me || player.isUnderControl()) dialog.addAuto(content);
                },
            },
            group: 'xinxfanjian_use',
            subSkill:
            {
                use: {
                    audio: "ext:永夜之境/audio:2",
                    charlotte: true,
                    trigger: {
                        // global: "useCardAfter",
                        //  global: "useCardToTargeted",
                        global: "useCard",
                    },
                    forced: true,
                    direct: true,
                    filter(event, player) {

                        return event.cards && event.cards.some(card => player.getStorage("xinxfanjian").includes(card));
                        //    var history = event.player.getHistory('useCard').concat(event.player.getHistory('respond'));
                        //    return !history.some(evt => evt.respondTo && evt.respondTo[1] == event.card);
                    },
                    async content(event, trigger, player) {
                        game.addGlobalSkill('xinxfanjian_biao');
                        // if (
                        //     trigger.player.hasHistory("useCard", evt => {
                        //         return evt.respondTo && evt.respondTo[1] == trigger.card;
                        //     })
                        // ) {
                        //     const [bool1, targets1] = await player
                        //         .chooseTarget("选择一名角色，令其摸牌至体力上限")
                        //         .set("ai", target => get.attitude(_status.event.player, target))
                        //         .forResult("bool", "targets");
                        //     if (bool1) {
                        //         const target = targets1[0];
                        //         player.logSkill('xinxfanjian_use', target);
                        //         target.drawTo(target.maxHp);
                        //     }

                        // } else {
                        const result = await player
                            .chooseTarget("反间：选择一名其他角色，对其造成1点火焰伤害", lib.filter.notMe, true)
                            .set("ai", target => get.damageEffect(target, get.player(), get.player()))
                            .forResult();
                        if (result.bool) {
                            const target = result.targets[0];
                            player.logSkill('xinxfanjian_use', target);
                            //  target.addTempSkill("xinxfanjian_blocker",{player:'phaseBegin'});
                            await target.damage('fire');

                        }
                        target.when({ global: 'useCardAfter' })
                            .filter(evt => evt.card === trigger.card)
                            .step(async (event, trigger, player) => {
                                if (
                                    !target.hasHistory('useCard', evt => evt.respondTo && evt.respondTo[1] === trigger.card) &&
                                    !target.hasHistory('respond', evt => evt.respondTo && evt.respondTo[1] === trigger.card)
                                ) {
                                    target.addTempSkill("xinxfanjian_blocker", { player: 'phaseBegin' });
                                }
                            });
                    }
                },
                blocker: {
                    charlotte: true,
                    mod: {
                        cardEnabled2(card, player) {
                            // if (card.hasGaintag("xinxqiyi")) return false;
                            if (!player.getCards("h").includes(card)) return false;

                        },
                    },
                    mark: true,
                    marktext: "封",
                    intro: {
                        content: "本回合内不能使用或打出非手牌区的牌",
                    },
                    sub: true,
                    sourceSkill: "xinxfanjian",
                    "_priority": 0,
                },
                biao: {
                    trigger: {
                        player: "gainAfter",
                        global: "loseAsyncAfter",
                    },
                    filter(event, player) {
                        return event.getg?.(player)?.some(card => game.hasPlayer2(target => target.getStorage('xinxfanjian').includes(card)));
                    },
                    forced: true,
                    popup: false,
                    content() {
                        player.addGaintag(trigger.getg(player).filter(card => game.hasPlayer2(target => target.getStorage('xinxfanjian').includes(card))), 'xinxfanjian_tag');
                    },
                }
            }
        },
        xinxjinjie: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjinjie" + index + ".mp3" : 2),
            trigger: {
                global: "gainAfter",
            },
            forced: true,
            popup: false,
            filter(event, player) {
                // var evt = event;
                // if (evt[event.name == "gain" ? "bySelf" : "notBySelf"] != true) return false;
                // var evtx = event.getl(player);
                // return evtx && evtx.cards2 && evtx.cards2.length > 0 && player.getStorage("xinxjinjie_mark").length > 0;
                return event.getParent().name != "draw" && player.getStorage("xinxjinjie_mark").length > 0 && event.player != player && player.countCards('he');
            },
            async content(event, trigger, player) {
                const target = trigger.player;
                var list = player.getStorage("xinxjinjie_mark").slice(0);
                const list1 = list.filter(function (i) { return player.canUse({ name: i, isCard: true, }, target) });
                if (list1.length) {
                    player.logSkill("xinxjinjie", [target], null, null, [get.rand(3, 4)]);
                    const result = await player.chooseButton([get.prompt("xinxjinjie", target), '<div class="text center">将一张牌当以下的一张牌对' + get.translation(target) + "使用</div>", [list1, "vcard"]])
                        .set("ai", function (button) {
                            var card = {
                                name: button.link[2],
                                nature: button.link[3],
                                storage: { xinxjinjie: true },
                            },
                                player = _status.event.player,
                                target = _status.event.getTrigger().player;
                            return get.effect(target, card, player, player);
                        }).forResult();
                    if (result.bool) {
                        var card = {
                            name: result.links[0][2],
                            nature: result.links[0][3],
                            storage: { xinxjinjie: true },
                        };
                        event.card = card;
                    }
                    if (!result.bool) {
                        event._result = { bool: false };
                        return;
                    }
                    const result2 = await player
                        .chooseCard("hes", "劲节：将一张牌当" + get.translation(card) + "对" + get.translation(trigger.player) + "使用", function (card, player) {
                            return player.canUse(get.autoViewAs(_status.event.getParent().card, [card]), _status.event.target, false);
                        })
                        .set("target", trigger.player)
                        .set("ai", function (card) {
                            if (get.effect(_status.event.target, get.autoViewAs(_status.event.getParent().card, [card]), player) <= 0) return false;
                            return 6 - get.value(card);
                        }).forResult();
                    if (result2.bool) {
                        player.logSkill("xinxjinjie", [target], null, null, [get.rand(1, 2)]);
                        await player.useCard(get.autoViewAs(event.card, result2.cards), result2.cards, false, trigger.player);
                    }
                }
            },
            group: ["xinxjinjie_mark"],
            subSkill: {
                mark: {
                    trigger: {
                        global: "useCard",
                    },
                    filter(event, player) {
                        return !player.getStorage("xinxjinjie_mark").includes(event.card.name) && get.type(event.card) != 'equip' && get.type(event.card) != 'delay';
                    },
                    frequent: true,
                    popup: false,
                    charlotte: true,
                    content() {
                        player.markAuto("xinxjinjie_mark", [trigger.card.name]);
                        player.when({ global: "roundStart" }).step(async () => {
                            delete player.storage.xinxjinjie_mark;
                        });
                    },
                    marktext: "劲节",
                    intro: {
                        content: "本轮已使用：$",
                    },
                },
                backup: {

                }
            },
        },
        xinxyunjue: {
            derivation: ["xinxyunjue_re"],
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyunjue" + index + ".mp3" : 2),
            // filter: function (event, player) {
            //     if (player.getStorage("xinxyunjue_debuff")) return true;
            //     return event.getParent(4).name == "xinxyunjue_debuff";
            // },
            trigger: {
                target: "useCardToTargeted",
            },
            forced: true,
            filter(event, player) {

                //return event.player != player;
                return event.player != player && game.hasPlayer(function (current) {
                    return current != event.player && current.countCards("he");
                });
            },
            popup: false,
            async content(event, trigger, player) {

                const result = await player
                    .chooseTarget(get.prompt2("xinxyunjue"), "选择一名角色的一张牌令" + get.translation(trigger.player) + "获得", function (card, player, target) {
                        if (player.storage.xinxyunjue_count < 3) { return target != trigger.player && target.countCards('he') }
                        return target.countCards('he');
                    })
                    .set("ai", target => {
                        const att = get.attitude(player, target);
                        if (att <= 0) return 10;
                        return 5;
                    })
                    .forResult();
                if (result.bool) {
                    const target = result.targets[0];
                    player.logSkill("xinxyunjue", [target], null, null, [get.rand(1, 2)]);
                    player.storage.xinxyunjue_count++;
                    let { cards } = await player
                        .choosePlayerCard("韫决：选择" + get.translation(target) + "的一张牌", target, "he", [1], true)
                        .set("ai", function (button) {
                            if (get.position(button.link) == "e") {
                                if (get.subtype(button.link) == "equip2") return 5 * get.value(button.link);
                                return get.value(button.link);
                            }
                            return 1;
                        })
                        .forResult();
                    if (["equip"].includes(get.type(cards[0])) && player.storage.xinxyunjue_count >= 3) {
                        await player.gain(cards, target, "give");
                    }
                    else await trigger.player.gain(cards, target, "give");
                    player.draw();
                    if (player.storage.xinxyunjue_count > 3) {
                        player.storage.xinxyunjue_debuff;
                        const list = get
                            .inpileVCardList(info => {
                                const name = info[2];
                                return !player.getStorage("xinxjinjie_mark").includes(name) && get.type(name) != 'equip' && get.type(name) != 'delay';
                            })
                            .filter(card => player.hasUseTarget({ name: card[2], nature: card[3] }));

                        if (list.length) {
                            // const links = await player.chooseButton([get.prompt('xinxyunjue'), '视为使用一张本轮未使用的牌', [list, "vcard"]], true)
                            //     .set("ai", button => {
                            //         return get.event().player.getUseValue({
                            //             name: button.link[2],
                            //             nature: button.link[3],
                            //         });
                            //     })
                            //     .forResult("links");
                            // const evt = event.getParent(2);
                            // let name = links[0][2],
                            //     nature = links[0][3];
                            //  await player.chooseUseTarget(true, false,{ name, nature, isCard: true });
                            //  player.logSkill("xinxyunjue", null, null, null, [get.rand(3, 4)]);
                            const result = await player.chooseButton(["是否将一张牌当做一张本轮未使用的牌使用？", [list, "vcard"]])
                                .set("ai", button => get.player().getUseValue({ name: button.link[2], nature: button.link[3] }, false))
                                .forResult();
                            if (!result?.links?.length) return;
                            player.addSkill(event.name + "_add");
                            const card = { name: result.links[0][2], nature: result.links[0][3] };
                            game.broadcastAll(card => {
                                lib.skill.xinxyunjue_backup.viewAs = card;
                            }, card);
                            const next = player.chooseToUse();
                            next.set("openskilldialog", "将一张牌当做" + get.translation(card) + "使用");
                            next.set("norestore", true);
                            next.set("addCount", false);
                            next.set("_backupevent", "xinxyunjue_backup");
                            next.set("logSkill", ["xinxyunjue", null, null, null, [get.rand(3, 4)]]);
                            next.set("custom", {
                                add: {},
                                replace: { window() { } },
                            });
                            next.backup("xinxyunjue_backup");
                            await next;
                        }
                    }
                }
            },
            init(player) {
                player.storage.xinxyunjue_count = 0;
            },
            onremove(player, skill) {
                delete player.storage[skill];
            },
            group: "xinxyunjue_debuff",
            subSkill: {
                debuff: {
                    charlotte: true,
                    onremove: true,
                    trigger: {
                        target: "useCardToTargeted",
                    },
                    filter(event, player) {
                        return event.player != player && player.storage.xinxyunjue_count < 3;
                        // return !player.getStorage("xinxyunjue_debuff");
                    },
                    silent: true,
                    async content(event, trigger, player) {
                        trigger.getParent().directHit.add(player);
                    },
                    sub: true,
                    sourceSkill: "xinxyunjue",
                    forced: true,
                    popup: false,
                    "_priority": 1,
                },
                backup: {
                    filterCard(card) {
                        return get.itemtype(card) == "card";
                    },
                    position: "hes",
                    filterTarget: function (card, player, target) {
                        if (!card) return false;
                        if (!target || !target.isIn()) return false;
                        var info = get.info(card);
                        var filter = info.filterTarget;
                        if (!info.singleCard || ui.selected.targets.length == 0) {
                            var mod = game.checkMod(card, player, target, "unchanged", "playerEnabled", player);
                            if (mod != "unchanged") return mod;
                            var mod = game.checkMod(card, player, target, "unchanged", "targetEnabled", target);
                            if (mod != "unchanged") return mod;
                        }
                        if (typeof filter == "boolean") return filter;
                        if (typeof filter == "function") return Boolean(filter(card, player, target));
                    },
                    selectCard: 1,
                    check: card => 6 - get.value(card),
                    log: false,
                    sub: true,
                    sourceSkill: "xinxyunjue",
                    "_priority": 0,
                    viewAs: {
                        name: "sha",
                        nature: undefined,
                    },
                },
            }
        },
        xinxyunjue_re: {
            audio: "ext:永夜之境/audio:4",
            "audioname2": {
                xinx_wangyun: "xinxyunjue",
            },
        },
        xinxpanzhi_re: {
            audio: "ext:永夜之境/audio:2",
            "audioname2": {
                xinx_jiangwei: "xinxpanzhi",
            },
        },
        xinxxishuo_re: {
            audio: "ext:永夜之境/audio:2",
            "audioname2": {
                xinxzhu_caocao: "xinxxishuo",
            },
        },
        // xinxjieshuo: {
        //     audio: "ext:永夜之境/audio:4",
        //     logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjieshuo" + index + ".mp3" : "ext:永夜之境/audio/xinxjieshuo" + get.rand(1, 2) + ".mp3"),
        //     init(player) {
        //         player.storage.xinxjieshuoCount = 0;
        //     },
        //     onremove(player, skill) {
        //         delete player.storage[skill];
        //     },
        //     trigger: {
        //         target: "useCardToTargeted",
        //     },
        //     filter(event, player) {
        //         let num1 = 4 - player.storage.xinxjieshuoCount;
        //         return get.tag(event.card, 'damage') > 0.5 && event.player !== player && num1 > 0;
        //         //  && event.targets.length === 1
        //     },
        //     usable: 1,
        //     forced: true,
        //     async content(event, trigger, player) {
        //         const target = trigger.player;
        //         //const num1 = Math.max(1, 4 - player.storage.xinxjieshuoCount);
        //         const num1 = 4 - player.storage.xinxjieshuoCount;
        //         let cards1, num, cards2;
        //         if (target.countCards("xsej") > 0) {
        //             const cards = target.getCards("xsej").filter(card => !card._cardid);
        //             const dialog = '###截槊：选择其区域内至多' + get.cnNumber(num1) + '张牌###<div class="text center">当做一张等量名字数的牌使用</div><div class="text center">';
        //             const result = await player.chooseButton([dialog, cards], [1, num1], true)
        //                 .set('ai', button => {
        //                     return get.value(button.link, get.event().player);
        //                 }).forResult();
        //             if (result.bool) {
        //                 num = result.links.length;
        //                 cards1 = result.links;
        //             }
        //         }
        //         else {
        //             cards2 = get.cards(num1);
        //             // const dialog1 = [`###${get.prompt("twshenyi", target)}###<div class="text center">从牌堆中将一张牌作为“侠义”置于武将牌上${player != target && player.countCards("h") ? "，然后将任意张手牌交给其" : ""}</div>`, [list, "vcard"]];
        //             const dialog2 = '###截槊：选择牌堆顶至多' + get.cnNumber(num1) + '张牌###<div class="text center">当做一张等量名字数的牌使用</div><div class="text center">然后你获得剩余与之名字数不同的牌</div>';
        //             const result2 = await player.chooseButton([dialog2, cards2], [1, num1], true)
        //                 .set('ai', button => {
        //                     // return get.value(button.link, get.event().player);
        //                     return 2 - get.value(button.link);
        //                 }).forResult();
        //             if (result2.bool) {
        //                 num = result2.links.length;
        //                 cards1 = result2.links;
        //             }
        //         }
        //         const list = get.inpileVCardList(info => {
        //             const name = info[2];
        //             if (get.cardNameLength(name) !== num) return false;
        //             return ['basic', 'trick'].includes(get.type(name));
        //         }).filter(info => player.hasUseTarget(new lib.element.VCard({ name: info[2], nature: info[3] }), false));

        //         if (!list.length) {
        //             event.result = { bool: false };
        //             return;
        //         }

        //         const choice = list.length > 1 ? await player.chooseButton([
        //             '###截槊###<div class="text center">请使用一张名字数为' + num + '的牌</div>',
        //             [list, 'vcard'],
        //         ], true).set('ai', button => {
        //             const player = get.player();
        //             return player.getUseValue({ name: button.link[2], nature: button.link[3] });
        //         }).forResult() : { bool: true, links: list };

        //         if (choice?.bool && choice.links?.length) {
        //             const card = new lib.element.VCard({ name: choice.links[0][2], nature: choice.links[0][3] });
        //             const useResult = await player.chooseUseTarget(cards1, card, true, false, 'nodistance')
        //                 .set('prompt', '截槊：请选择' + get.translation(card) + '的目标')
        //                 .set('logSkill', ["xinxjieshuo", null, null, null, [get.rand(3, 4)]]).forResult();
        //             if (useResult.bool) {
        //                 if (cards2) {
        //                     const reCards = cards2.filter(card => !cards1.includes(card));
        //                     const filteredRemainingCards = reCards.filter(card => get.cardNameLength(card.name) !== num);
        //                     if (filteredRemainingCards.length > 0) {
        //                         await player.gain(filteredRemainingCards, 'gain2');
        //                     }
        //                 }
        //             }

        //         } else {
        //             event.result = { bool: false };
        //         }
        //         player.storage.xinxjieshuoCount++;
        //         player.when({ global: "roundStart" }).step(async () => {
        //             player.storage.xinxjieshuoCount = 0;
        //         });
        //     }

        // },
        xinxjieshuo: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjieshuo" + index + ".mp3" : "ext:永夜之境/audio/xinxjieshuo" + get.rand(1, 2) + ".mp3"),
            init(player) {
                player.storage.xinxjieshuoCount = 0;
            },
            onremove(player, skill) {
                delete player.storage[skill];
            },
            trigger: {
                target: "useCardToTargeted",
            },
            filter(event, player) {
                let num1 = 4 - player.storage.xinxjieshuoCount;
                return get.tag(event.card, 'damage') > 0.5 && event.player !== player && num1 > 0;
            },
            usable: 1,
            forced: true,
            async content(event, trigger, player) {
                const target = trigger.player;
                const num1 = 4 - player.storage.xinxjieshuoCount;
                let cards, isFromDeck = false;
                // 1. 确定实体牌来源（区域牌 或 牌堆顶）
                if (target.countCards("xsej") > 0) {
                    cards = target.getCards("xsej").filter(card => !card._cardid);
                } else {
                    cards = get.cards(num1);
                    isFromDeck = true;
                }

                if (!cards.length) return;

                // 2. 准备转化牌列表（VCard）
                // 计算当前可选的最大字数（受限于实体牌数量和技能剩余次数）
                const maxLen = Math.min(cards.length, num1);

                const vcards = get.inpileVCardList(info => {
                    const name = info[2];
                    const len = get.cardNameLength(name);
                    // 筛选条件：基本牌或锦囊，且名字长度在可选范围内
                    if (len < 1 || len > maxLen) return false;
                    return ['basic', 'trick'].includes(get.type(name));
                }).filter(info => player.hasUseTarget(new lib.element.VCard({ name: info[2], nature: info[3] }), false));

                if (!vcards.length) {
                    if (isFromDeck) {
                        // 如果是从牌堆拿了牌但无法转化，按规则应当处理这些牌（此处简单处理为放入弃牌堆，防止卡死）
                        game.cardsDiscard(cards);
                    }
                    event.result = { bool: false };
                    return;
                }

                // 3. 循环选择直到合法（One Window Logic）
                let selectedPhys = [];
                let selectedVCardInfo = null;
                let validSelection = false;

                while (!validSelection) {
                    const dialogPrompt = isFromDeck
                        ? `###截槊：选择牌堆顶至多${get.cnNumber(num1)}张牌###<div class="text center">请选择实体牌（1~${maxLen}张），然后选择使用一张字数相同的转化牌，并获得剩余与之名字数不同的牌</div>`
                        : `###截槊：选择其区域内至多${get.cnNumber(num1)}张牌###<div class="text center">请选择实体牌（1~${maxLen}张），然后选择使用一张字数相同的转化牌</div>`;

                    // 构造单窗口：[提示, 实体牌数组, 分割线, 转化牌数组]
                    const result = await player.chooseButton(
                        [
                            dialogPrompt,
                            cards,
                            '<div class="text center">——— 转化目标 ———</div>',
                            [vcards, 'vcard']
                        ],
                        // 允许选择的数量范围：最少2张（1实体+1转化），最多 N+1 张
                        [2, maxLen + 1],
                        true
                    ).set('filterButton', button => {
                        // UI 交互优化：动态禁止不合法的选择
                        if (!ui.selected.buttons.length) return true;

                        // 分离当前已选中的实体牌和转化牌
                        const selected = ui.selected.buttons;
                        const phys = selected.filter(b => !Array.isArray(b.link));
                        const virt = selected.filter(b => Array.isArray(b.link));

                        // 如果当前按钮是转化牌（link是数组）
                        if (Array.isArray(button.link)) {
                            // 只能选1张转化牌，如果已经选了别的，禁止此按钮
                            if (virt.length && virt[0] !== button) return false;
                            // 如果已经选了实体牌，只能选字数匹配的转化牌
                            if (phys.length) {
                                return get.cardNameLength(button.link[2]) === phys.length;
                            }
                            return true;
                        }
                        // 如果当前按钮是实体牌
                        else {
                            // 如果已经选了转化牌，实体牌数量不能超过转化牌字数
                            if (virt.length) {
                                const reqLen = get.cardNameLength(virt[0].link[2]);
                                if (phys.length >= reqLen && !phys.includes(button)) return false;
                            }
                            return true;
                        }
                    }).set('ai', button => {
                        const link = button.link;
                        if (Array.isArray(link)) {
                            return player.getUseValue({ name: link[2], nature: link[3] });
                        }
                        // 如果是牌堆的牌(未知)，倾向于选；如果是敌人的牌，倾向于拆。
                        return isFromDeck ? 1 : get.value(link, get.event().player);
                    }).forResult();

                    if (!result.bool) {
                        break;
                    }

                    // 4. 验证选择逻辑
                    const links = result.links;
                    const phys = links.filter(l => !Array.isArray(l)); // 实体牌是对象
                    const virt = links.filter(l => Array.isArray(l));  // 转化牌是数组

                    // 规则：必须有且仅有1张转化牌，且实体牌数量等于转化牌名字长度
                    if (virt.length === 1 && phys.length === get.cardNameLength(virt[0][2])) {
                        selectedPhys = phys;
                        selectedVCardInfo = virt[0];
                        validSelection = true;
                    } else {
                        if (player.isUnderControl()) break; // 防止AI死循环
                        if (virt.length === 0) alert("请选择一张转化牌！");
                        else if (virt.length > 1) alert("只能选择一张转化牌！");
                        else alert(`请选择与转化牌【${virt[0][2]}】名字字数（${get.cardNameLength(virt[0][2])}）相等的实体牌！`);
                    }
                }

                // 5. 执行阶段
                if (validSelection && selectedVCardInfo) {
                    const card = new lib.element.VCard({ name: selectedVCardInfo[2], nature: selectedVCardInfo[3] });

                    // 使用 chooseUseTarget 发动卡牌
                    // 第一个参数 selectedPhys 是作为转化的实体牌
                    const useResult = await player.chooseUseTarget(selectedPhys, card, true, false, 'nodistance')
                        .set('prompt', '截槊：请选择' + get.translation(card) + '的目标')
                        .set('logSkill', ["xinxjieshuo", null, null, null, [get.rand(3, 4)]]).forResult();

                    if (useResult.bool) {
                        // 处理牌堆顶剩余牌的获得逻辑
                        if (isFromDeck) {
                            // 剩余的牌 = 所有牌 - 已作为转化的实体牌
                            const remaining = cards.filter(c => !selectedPhys.includes(c));
                            const nameLen = get.cardNameLength(card.name);

                            // 获得剩余与使用牌名字数【不同】的牌
                            const toGain = remaining.filter(c => get.cardNameLength(c.name) !== nameLen);

                            if (toGain.length > 0) {
                                await player.gain(toGain, 'gain2');
                            }

                            // 名字数相同的剩余牌（如果有）按规则隐含被丢弃（因为是从get.cards取出的，如果不gain也不放回，就会消失至弃牌堆）
                            // 为了严谨，显式丢弃剩余不需要的牌
                            const toDiscard = remaining.filter(c => !toGain.includes(c));
                            if (toDiscard.length) {
                                game.cardsDiscard(toDiscard);
                            }
                        }
                    } else {
                        // 选择了卡牌但取消了目标选择（chooseUseTarget返回false）
                        // 如果是牌堆顶的牌，需要处理归宿
                        if (isFromDeck) game.cardsDiscard(cards);
                    }
                } else {
                    if (isFromDeck) game.cardsDiscard(cards);
                    event.result = { bool: false };
                }

                player.storage.xinxjieshuoCount++;
                player.when({ global: "roundStart" }).step(async () => {
                    player.storage.xinxjieshuoCount = 0;
                });
            }
        },


        xinxhuolu: {
            audio: "ext:永夜之境/audio:6",
            trigger: {
                global: "useCard1",
            },
            priority: 10,
            filter(event, player) {
                return get.tag(event.card, "damage") >= 0.5 && event.player !== player && event.cards && event.cards.filterInD().length;
            },
            forced: true,
            popup: false,
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxhuolu" + index + ".mp3" : 2),
            async content(event, trigger, player) {
                const target = trigger.player;
                player.storage.xinxhuolu = target.countCards("xshej");
                player.addSkill('xinxhuolu_add');
            },
            marktext: "镬",
            intro: {
                content: "expansion",
                markcount: "expansion",
            },
            onremove(player, skill) {
                var cards = player.getExpansions(skill);
                if (cards.length) player.loseToDiscardpile(cards);
            },
            group: "xinxhuolu_use",
            subSkill: {
                add: {
                    trigger: {
                        global: "useCardAfter",
                    },
                    charlotte: true,
                    forced: true,
                    onremove: true,
                    popup: false,
                    sourceSkill: "xinxhuolu",
                    filter(event, player) {
                       if (typeof player.storage.xinxhuolu != "number") return false;
                        return get.tag(event.card, "damage") >= 0.5 && event.player.countCards("xshej") != player.storage.xinxhuolu && event.player !== player && event.cards && event.cards.filterInD().length;
                        //return event.player.getHistory("gain").length + event.player.getHistory("lose", evt =>  evt.es?.length || evt.xs?.length).length;
                    },
                    async content(event, trigger, player) {
                        const target = trigger.player;
                        player.logSkill("xinxhuolu", [target], null, null, [get.rand(1, 2)]);
                        player.addToExpansion(trigger.cards.filterInD(), "gain2").gaintag.add("xinxhuolu");
                        player.storage.xinxhuolu = 0;
                    },
                    sub: true,
                    "_priority": 0,
                },
                use: {
                    trigger: {
                        player: "useCardAfter",
                    },
                    filter(event, player) {
                        return get.tag(event.card, "damage") >= 0.5 && player.countCards("xs") > 0 && !game.hasPlayer2(current => {
                            return current.hasHistory("damage", evt => evt.card === event.card);
                        }, true);
                    },
                    popup: false,
                    async cost(event, trigger, player) {
                        const result = await player
                            .chooseButton([get.prompt("xinxhuolu", trigger.player),
                            [
                                [
                                    ["usecard", `令${get.translation(player)}使用武将牌上的一张牌`],
                                    ["discard", `令${get.translation(player)}弃置武将牌上的任意张牌，然后摸等量的牌`],
                                ],
                                "textbutton",
                            ],
                            ])
                            .set("filterButton", button => {
                                return true;
                            })
                            .set("ai", button => {
                                const options = ["usecard", "discard"];
                                return options[Math.floor(Math.random() * options.length)];
                            })
                            .forResult();
                        event.result = {
                            bool: result.bool,
                            cost_data: result.links,
                        };
                    },
                    async content(event, trigger, player) {
                        const cards = player.getCards("xs").filter(card => !card._cardid);
                        const result = event.cost_data[0];

                        if (result == "usecard") {
                            const result1
                                = await player
                                    .chooseButton(["镬戮：是否使用其中的一张牌？", cards])
                                    .set("filterButton", button => {
                                        return get.player().hasUseTarget(button.link);
                                    })
                                    .set("ai", button => {
                                        return get.event().player.getUseValue(button.link);
                                    }).forResult();
                            if (result1.bool) {
                                const card = result1.links;
                                cards.remove(card);
                                player.$gain2(card, false);
                                await game.delayx();
                                player.logSkill("xinxhuolu", null, null, null, [get.rand(3, 4)]);
                                await player.chooseUseTarget(true, card, false);
                            }
                        }
                        else {
                            const result2
                                = await player
                                    .chooseButton(["镬戮：是否弃置其中任意张牌？", cards], [1, Infinity])
                                    .set("ai", button => {
                                        return get.event().player.getUseValue(button.link);
                                        // return 2 - get.value(button.link);
                                    }).forResult();
                            if (result2.bool) {
                                const card = result2.links;
                                player.logSkill("xinxhuolu", null, null, null, [get.rand(5, 6)]);
                                await player.discard(card);
                                player.draw(card.length);
                            }
                        }
                    },
                }
            }
        },
        xinxkejing: {
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxkejing" + index + ".mp3" : 2),
            trigger: {
                global: "roundStart",
            },
            // filter(event, player) {
            //     return !game.hasPlayer(current => player.getStorage("xinxkejing").includes(current));
            // },
            priority: -10,
            popup: false,
            async cost(event, trigger, player) {
                const result = await player
                    .chooseTarget(1, lib.filter.notMe, get.prompt2("xinxkejing"))
                    .set("ai", target => {
                        const player = get.player();
                        let val = target.countCards('h');
                        if (get.attitude(player, target) <= 0) val *= 2;
                        return val;
                    })
                    .forResult();
                if (!result?.targets) result.targets = [];
                event.result = {
                    bool: true,
                    targets: result.targets,
                };
            },
            async content(event, trigger, player) {
                const target = event.targets;
                if (!player.storage.xinxjuyi) {
                    player.logSkill("xinxkejing", null, null, null, [get.rand(3, 4)]);
                }
                else player.logSkill("xinxkejing", null, null, null, [get.rand(5, 6)]);
                player.line(target);
                player.markAuto("xinxkejing", target);
                player.markSkill("xinxkejing");
            },
            intro: {
                markcount(storage, player) {
                    let num = player.countMark("xinxjuyi_add");
                    if (num == 0) return null;
                    return num;
                },
                mark(dialog, storage, player) {
                    if (storage) dialog.addSmall([storage.map(key => key.name), "character"]);
                    let num = player.countMark("xinxjuyi_add");
                    if (num != 0) dialog.addText(`已造成伤害值${num > 0 ? ":" : ""}${num}`);
                },
            },
            group: ["xinxkejing_use", 'xinxkejing_clear'],
            subSkill: {
                clear: {
                    trigger: {
                        global: "roundStart",
                    },
                    charlotte: true,
                    popup: false,
                    forced: true,
                    priority: 100,
                    filter(event, player) {
                        return game.hasPlayer(current => player.getStorage("xinxkejing").includes(current));
                    },
                    async content(event, trigger, player) {
                        const targets =
                            game.filterPlayer(target => {
                                return player.getStorage("xinxkejing").includes(target);
                            }).sortBySeat();
                        for (const target of targets) {
                            player.unmarkAuto("xinxkejing", target);
                            player.unmarkSkill("xinxkejing");
                        }
                    },
                },
                use: {
                    trigger: {
                        global: "phaseUseEnd",
                    },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        if (event.player == player) return false;
                        // const targets = game
                        //     .filterPlayer(target => {
                        //         return player.getStorage("xinxkejing").includes(target);
                        //     }).sortBySeat();
                        //     for (const target of targets) {
                        //         if (target && !target.getHistory("damage").length && event.player.countCards("he")) {
                        //             return true;
                        //         }
                        const markedTargets = player.getStorage("xinxkejing") || [];
                        for (const target of markedTargets) {
                            if (target && target.isIn() && !target.getHistory("damage").length && event.player.countCards("he")) {
                                return true;
                            }
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const markedTargets =
                            game.filterPlayer(target => {
                                return player.getStorage("xinxkejing").includes(target);
                            }).sortBySeat();
                        const target = trigger.player;
                        const result = await target.chooseToGive(player, 'he', 2, true).forResult();
                        const cards = result.cards;
                        const result2 = await player.chooseToGive(target, 'he', cards.length, true).forResult();
                        const cards2 = result2.cards;
                        // let name = [cards, cards2]
                        //     .map(list => list.map(card => get.name(card)))
                        //     .flat()
                        //     .unique();
                        // if (name.includes('sha')) {
                        //     const shaCards = [...cards, ...cards2].filter(card => get.name(card) === 'sha');

                        const allCards = [...cards, ...cards2];
                        let name = allCards
                            .map(card => get.name(card))
                            .flat()
                            .unique();
                        if (allCards.some(card => get.tag(card, "damage"))) {
                            const shaCards = allCards.filter(card => get.tag(card, "damage"));

                            for (const markedTarget of markedTargets) {
                                for (const shaCard of shaCards) {
                                    await markedTarget.gain([shaCard], target, 'give');
                                }
                            }
                        }
                        player.logSkill("xinxkejing", [target], null, null, [get.rand(1, 2)]);
                        for (const markedTarget of markedTargets) {
                            let
                                discard = true;
                            while (true) {
                                const damageCards = markedTarget.getCards("h", card => {
                                    // if (get.name(card) !== "sha" && (get.type(card) !== "trick" || !get.tag(card, "damage"))) return false;

                                    if ((get.type(card) == "equip")) return false;
                                    return markedTarget.canUse(card, target, false);
                                });
                                if (damageCards.length) {
                                    if (discard) discard = false;
                                    await markedTarget.useCard(damageCards.randomGet(), target, false);
                                } else break;
                            }
                            if (discard) {
                                const list = get.inpileVCardList(info => {
                                    const name = info[2];
                                    if (!get.tag({ name }, 'damage') > 0.5) return false;
                                    return ['basic', 'trick'].includes(get.type(name));
                                }).filter(info => player.hasUseTarget(new lib.element.VCard({ name: info[2], nature: info[3] })));
                                if (!list.length) {
                                    event.result = { bool: false };
                                    return;
                                }
                                //const list1 = list.filter(function (i) { return player.canUse({ name: i, isCard: true, }, target2) });
                                const { links } = await player.chooseButton([`视为使用一张伤害锦囊牌`, [list, "vcard"]], true)
                                    .set("ai", button => {
                                        return get.event().player.getUseValue({
                                            name: button.link[2],
                                            nature: button.link[3],
                                        });
                                    })
                                    .forResult();
                                const evt = event.getParent(2);
                                let name = links[0][2],
                                    nature = links[0][3];
                                for (const markedTarget of markedTargets) {
                                    await player.chooseUseTarget(true, false, { name, nature, isCard: true }, markedTarget, 'nodistance');

                                }
                            }
                        }
                    },
                }
            }
        },
        xinxjuyi: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "phaseBefore",
            },
            priority: 10,
            derivation: "xinxgushu",
            juexingji: true,
            skillAnimation: true,
            forced: true,
            animationColor: "fire",
            filter: function (event, player) {
                return player.countMark('xinxjuyi_add') >= game.countPlayer();
            },
            async content(event, trigger, player) {
                player.awakenSkill(event.name);
                //await player.chooseDrawRecover(2, true);
                player.addSkill('xinxgushu');
            },
            group: "xinxjuyi_add",
            subSkill: {
                add: {
                    trigger: {
                        global: "damageEnd",
                    },
                    priority: 1,
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter: function (event, player) {
                        const targets = game
                            .filterPlayer(target => {
                                return player.getStorage("xinxkejing").includes(target);
                            }).sortBySeat();
                        return targets.includes(event.source);
                    },
                    async content(event, trigger, player) {
                        player.addMark('xinxjuyi_add', trigger.num, false);
                    },
                }
            }
        },


        xinxgushu: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxgushu" + index + ".mp3" : 2),
            trigger: {
                source: "damageSource",
                player: "damageEnd",
            },
            forced: true,
            popup: false,
            usable: 1,
            // filter: function (event, player) {
            //     if (!event.card) return false;
            //     const targets = game
            //         .filterPlayer(target => {
            //             return player.getStorage("xinxkejing").includes(target);
            //         }).sortBySeat();
            //     const source = event.source;
            //     const target = event.player;
            //     // return targets.includes(event.player);
            //     return targets.includes(source) || targets.includes(target) && typeof get.number(event.card) == 'number';
            // },

            filter(event, player) {
                if (!event.card) return false;
                return typeof get.number(event.card) == 'number';
            },
            async content(event, trigger, player) {
                const num = player.maxHp - get.number(trigger.card);
                player.logSkill("xinxgushu", null, null, null, [get.rand(1, 3)]);
                await player[num > 0 ? "loseMaxHp" : "gainMaxHp"](Math.abs(num));
                await player.draw(Math.abs(num));
            },

            group: ["xinxgushu_lose", "xinxgushu_add"],
            subSkill: {
                add: {
                    trigger: {
                        player: "phaseBegin",
                    },
                    priority: 1,
                    forced: true,
                    popup: false,
                    charlotte: true,
                    async content(event, trigger, player) {
                        player.storage.xinxgushu_add = player.maxHp;
                    },
                },
                lose: {
                    trigger: {
                        player: "phaseJieshuBegin",
                    },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    filter: function (event, player) {
                        return player.maxHp != player.storage.xinxgushu_add;
                    },
                    async content(event, trigger, player) {
                        player.logSkill("xinxgushu", null, null, null, [get.rand(4, 5)]);
                        await player.loseMaxHp();
                        player.storage.xinxgushu_add = 0;

                    },
                }
            }
        },
        xinxchanyi: {
            audio: "ext:永夜之境/audio:2",
            audioname: ["xinx_moqiongshu_shadow"],
            global: "xinxchanyi_global",
            subSkill: {
                global: {
                    forceaudio: true,
                    enable: "phaseUse",
                    usable: 1,
                    filter(event, player) {
                        if (!player.countCards("he")) return false;
                        return game.hasPlayer(current => current.hasSkill("xinxchanyi"));
                    },
                    filterTarget(card, player, target) {
                        return target.hasSkill("xinxchanyi");
                    },
                    selectTarget() {
                        const num = game.countPlayer(current => current.hasSkill("xinxchanyi"));
                        return num > 1 ? 1 : -1;
                    },
                    filterCard: true,
                    position: "he",
                    check(card) {
                        const player = get.player();
                        const hasFriend = game.hasPlayer(current => {
                            return current.hasSkill("xinxchanyi") && get.attitude(player, current) > 0;
                        });
                        return (hasFriend ? 7 : 1) - get.value(card);
                    },
                    prompt() {
                        const list = game.filterPlayer(current => {
                            return current.hasSkill("xinxchanyi");
                        });
                        return `将一张牌交给${get.translation(list)}${list.length > 1 ? "中的一人" : ""}，然后执行后续效果。`;
                    },
                    discard: false,
                    lose: false,
                    prepare(cards, player, targets) {
                        if (targets[0] != player) player.$give(cards, targets[0], false);
                    },
                    async content(event, trigger, player) {
                        const card = event.cards[0],
                            target = event.target;
                        if (target != player) await player.give(card, target);
                        else await player.recast(card);
                        await game.delayx();
                        await game.asyncDraw([player, target]);
                        const result =
                            player.countMark("xinxchanyi") < 3 ? await target.chooseBool(`蝉翼：是否令${get.translation(player)}选择获得一个额外装备栏?`)
                                .set("choice")
                                .set("ai", () => {
                                    let evt = _status.event.getParent();
                                    return get.attitude(evt.player, evt.target) > 0;
                                })
                                :
                                player.isDamaged() ? await target.chooseBool(`蝉翼：是否令${get.translation(player)}回复1点体力?`) :
                                    await target.chooseBool(`蝉翼：是否令${get.translation(player)}增加1点体力上限?`)
                                        .set("choice")
                                        .set("ai", () => {
                                            let evt = _status.event.getParent();
                                            return get.attitude(evt.player, evt.target) > 0;
                                        }).forResult();
                        if (result.bool) {
                            target.line(player);
                            target.logSkill("xinxchanyi");
                            target.storage['xinxchanyi_global'] = !target.storage['xinxchanyi_global'];
                            target.changeSkin({ characterName: "xinx_moqiongshu" }, "xinx_moqiongshu" + (target.storage['xinxchanyi_global'] ? "_shadow" : ""));
                            if (player.countMark("xinxchanyi") < 3) {
                                let map = {};
                                let list = ['equip1', 'equip2', 'equip3', 'equip4'];
                                let choose = [];
                                for (let equip of list) {
                                    let cn = get.translation(equip);
                                    map[cn] = equip;
                                    choose.push(cn);
                                };
                                const result1 = await player.chooseButton(['〖' + get.skillTranslation(event.name) + '〗:选择要获得的额外装备栏', [choose, 'tdnodes']], 1, true)
                                    .set('ai', (button) => {
                                        const player = get.player();
                                        const randomValue = Math.random();
                                        if (randomValue < 0.7 && button.link === "武器") {
                                            return 3;
                                        }
                                        if (button.link === "防具") {
                                            return 2;
                                        }
                                        return 1;
                                    })
                                    // .set('filterButton', (button, player) => {
                                    //     return !player.getStorage("xinxchanyi").includes(button.link);
                                    // })
                                    .forResult();
                                if (result1.bool) {
                                    player.addMark("xinxchanyi", 1, false);
                                    const equip = map[result1.links[0]];
                                    await player.expandEquip(equip);
                                }
                            } else {
                                player.isDamaged() ? await player.recover() : await player.gainMaxHp();
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            player(player, target) {
                                if (get.attitude(player, target) > 0) return 1;
                                return 0;
                            },
                            target: 0.5,
                        },
                    },
                    sub: true,
                    sourceSkill: "xinxchanyi",
                    "_priority": 0,
                },
            }

        },

        xinxzejuan: {



        },
        xinxsanshi: {
            audio: "ext:永夜之境/audio:5",
            // logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxsanshi" + index + ".mp3" : 2),
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxsanshi" + index + ".mp3" : "ext:永夜之境/audio/xinxsanshi" + get.rand(4, 5) + ".mp3"),
            trigger: {
                player: "loseAfter",
                global: ["loseAsyncAfter", "equipAfter", "addJudgeAfter", "gainAfter", "addToExpansionAfter"],
                //global: ["loseAsyncAfter", "equipAfter", "addJudgeAfter", "addToExpansionAfter"],
            },
            forced: true,
            locked: false,
            //popup: false,
            filter(event, player) {
                if (event.getParent().name == "useCard") {
                    return false;
                }
                return event.getl(player)?.cards?.some(card => !get.owner(card));
                // // return event.getl(player)?.cards?.length > 0;
            },
            async content(event, trigger, player) {
                const card = trigger
                    .getl(player)
                    .cards.filter(card => !get.owner(card));
                //const cards = trigger.getl(player).cards;

                //  player.logSkill("xinxsanshi", null, null, null,[get.rand(4,5)]);
                await player.addToExpansion(card, "gain2").set("gaintag", ["xinxsanshi"]);
            },
            marktext: "士",
            intro: {
                mark(dialog, storage, player) {
                    const cards = player.getExpansions("xinxsanshi");
                    if (player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        return "共有" + get.cnNumber(cards.length) + "张牌";
                    }
                },
                markcount: "expansion",
            },
            group: 'xinxsanshi_use',
            subSkill: {
                use: {
                    logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxsanshi" + index + ".mp3" : 2),
                    trigger: {
                        player: "useCardAfter",
                    },
                    filter(event, player) {
                        return game.hasPlayer(function (current) {
                            return current.countCards("xs") > 0;
                        }) && event.cards.length;
                    },
                    popup: false,
                    forced: true,
                    locked: false,
                    async content(event, trigger, player) {
                        const cards = [];
                        game.countPlayer(function (current) {
                            cards.addArray(current.getCards("xs", card => !card._cardid));
                            // cards.addArray(current.getExpansions());
                        });
                        if (cards.length > 0) {
                            const result = await player.chooseButton(
                                ["是否获得一张“移出游戏”的牌？", cards]
                            ).forResult();
                            if (result.bool) {
                                let card = result.links[0];
                                player.line(get.owner(card) || player, "green");
                                player.logSkill("xinxsanshi", null, null, null, [get.rand(1, 3)]);
                                await player.gain(card, "gain2");
                            }
                        }
                    }
                }
            },
        },
        xinxchenlue: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxchenlue" + index + ".mp3" : 2),
            trigger: {
                global: "roundStart",
            },
            filter(event, player) {
                if (player.countCards('he') == 0) return false;
                return game.hasPlayer(function (current) {
                    return current != player && current.countCards('he') > 0;
                });
            },
            async cost(event, trigger, player) {
                event.result = await player.chooseTarget(
                    get.prompt("xinxchenlue"),
                    "每轮开始时，你可以选择一名其他角色，你/其同时重铸/弃置一种类型的所有牌，若这些牌类型相同，你与其依次对彼此使用一张牌并重复之，未使用牌的角色受到对方造成的1点伤害并结束此流程。",
                    function (card, player, target) {
                        return target != player && target.countCards('he') > 0;
                    }
                )
                    .set("ai", function (target) {
                        let player = _status.event.player;
                        let att = get.attitude(player, target);
                        if (att > 0) return 0;
                        return target.countCards('h') - att;
                    }).forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                player.line(target, "fire");
                player.logSkill("xinxchenlue", null, null, null, [get.rand(1, 2)]);

                const getCardType = function (card) {
                    const type = get.type2(card);
                    if (type == 'delay') return 'trick';
                    return type;
                };
                //获取玩家手牌中存在的类型列表
                const getExistTypes = (p) => {
                    const cards = p.getDiscardableCards(p, 'he');
                    const list = [];
                    for (let i = 0; i < cards.length; i++) {
                        const t = getCardType(cards[i]);
                        list.add(t);
                    }
                    const sortMap = { basic: 0, trick: 1, equip: 2 };
                    list.sort((a, b) => (sortMap[a] || 3) - (sortMap[b] || 3));
                    return list;
                };

                const typeTranslate = { basic: "基本牌", trick: "锦囊牌", equip: "装备牌" };

                const myTypes = getExistTypes(player);
                const targetTypes = getExistTypes(target);

                let myType;
                if (myTypes.length == 1) {
                    myType = myTypes[0];
                } else {
                    const choice1 = await player.chooseControl(myTypes)
                        .set("prompt", "沉略：请选择一种的类型的牌进行重铸")
                        .set("ai", () => {
                            return myTypes.sort((typeA, typeB) => {
                                const cardsA = player.getCards('he', { type: typeA });
                                const cardsB = player.getCards('he', { type: typeB });
                                // 检测是否有牌可用
                                const isUsableA = cardsA.some(card => player.hasUseTarget(card));
                                const isUsableB = cardsB.some(card => player.hasUseTarget(card));
                                // 优先选不可用的
                                // if (isUsableA !== isUsableB) return isUsableA ? 1 : -1;
                                // 次选数量最多的
                                return cardsB.length - cardsA.length;
                            })[0];
                        })
                        // .set("ai", () => {
                        //     return myTypes.sort((a, b) => {
                        //         return player.countCards('h', {type: a}) - player.countCards('h', {type: b});
                        //     })[0];
                        // })
                        .forResult();
                    myType = choice1.control;
                }

                // --- 目标选择 ---
                let targetType;
                if (targetTypes.length == 1) {
                    targetType = targetTypes[0];
                } else {
                    const choice2 = await target.chooseControl(targetTypes)
                        .set("prompt", "沉略：" + get.translation(player) + "对你发动技能，请选择一种的类型的牌进行弃置")
                        // .set("ai", () => {
                        //     return targetTypes.sort((typeA, typeB) => {
                        //         const cardsA = target.getCards('he', { type: typeA });
                        //         const cardsB = target.getCards('he', { type: typeB });

                        //         const isUsableA = cardsA.some(card => target.hasUseTarget(card));
                        //         const isUsableB = cardsB.some(card => target.hasUseTarget(card));

                        //        // if (isUsableA !== isUsableB) return isUsableA ? 1 : -1;

                        //         return cardsB.length - cardsA.length;
                        //     })[0];
                        // })
                        .set("ai", () => {
                            return targetTypes.sort((a, b) => {
                                return target.countCards('h', { type: a }) - target.countCards('h', { type: b });
                            })[0];
                        })
                        .forResult();
                    targetType = choice2.control;
                }

                game.log(player, "选择了", typeTranslate[myType]);
                game.log(target, "选择了", typeTranslate[targetType]);

                const cards1 = player.getCards("he", card => get.type2(card) == myType);
                const cards2 = target.getCards("he", card => get.type2(card) == targetType);

                const discardTasks = [];
                if (cards1.length) discardTasks.push(player.recast(cards1));
                if (cards2.length) discardTasks.push(target.discard(cards2));

                if (discardTasks.length > 0) {
                    await Promise.all(discardTasks);
                }

                if (myType == targetType) {
                    await game.delay(0.5);
                    let active = player;
                    let passive = target;

                    while (true) {
                        if (!active.isAlive() || !passive.isAlive()) break;

                        // 检查是否有能用的牌
                        const canFight = active.hasCard(function (card) {
                            return get.type(card) != 'equip' && active.canUse(card, passive);
                        }, "h");

                        let next = { bool: false };
                        if (canFight) {
                            next = await active.chooseToUse(
                                function (card, player, event) {
                                    return get.type(card) != 'equip' && player.canUse(card, passive);
                                },
                                "沉略：对 " + get.translation(passive) + " 使用一张牌",
                                "若取消或无牌可出，你将受到1点伤害并结束此流程。"
                            ).set("targetRequired", true)
                                .set("complexSelect", true)
                                .set("filterTarget", function (card, player, target) {
                                    return target === passive;
                                })
                                .set("addCount", false)
                                .forResult();
                        }

                        if (next.bool) {
                            await game.delay(0.5);
                            const temp = active;
                            active = passive;
                            passive = temp;
                        } else {
                            game.log(active, "未使用牌，受到伤害");
                            const damageEvt = await active.damage(1, passive);
                            if (active === player && damageEvt && damageEvt.num > 0 && !damageEvt.cancelled && active.isAlive()) {
                                await active.logSkill("xinxchenlue", null, null, null, [get.rand(3, 4)]);
                            }
                            break;
                        }
                    }
                } else {
                    game.log("类型不同，不进行对决");
                }
            }

        },










    },


};
