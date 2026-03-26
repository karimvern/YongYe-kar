import { lib, game, ui, get, ai, _status } from '../../../../noname.js';

export let info = {
	name: 'xinxhuaijiu',
	connect: true,
	connectBanned: [],
	//武将分包
	characterSort: {
		'xinxhuaijiu': {
			'huaijiu': ['xinxhj_dc_sb_luxun', 'xinxhj_zhanghuai', 'xinxhj_yuji', 'xinxhj_sb_lvbu', 'xinxhj_sb_caopi', 'xinxhj_sb_wuyi'],
			'shizhounian': ['xinxhj_v_zhangliao', 'xinxhj_dc_simashi', 'xinxhj_dc_sb_lvmeng', 'xinxhj_dc_sb_jushou'
				, 'xinxhj_yj_sb_guojia', 'xinxhj_dc_xiahouxuan', 'xinxhj_star_fazheng', 'xinxhj_xuwen', 'xinxhj_dc_zhushuo', 'xinxhj_liujinliupei',
				'xinxhj_sunhuan', 'xinxhj_sb_zhangxiu', 'xinxhj_dc_wuzhi', 'xinxhj_dc_zhaoxiang', 'xinxhj_guānning', 'xinxhj_wupu', 'xinxhj_dc_sb_zhouyu'],
			'shousha': ['xinxhj_new_simayi', 'xinxhj_mb_huangzu', 'xinxhj_simashi', 'xinxhj_hefei_zhangliao', 'xinxhj_sp_zhonghui', 'xinxhj_sb_zhangliao',
				'xinxhj_hefei_lidian', 'xinxhj_hefei_yuejin'],
			'xinxol': ['xinxhj_ol_jsrg_caocao', 'xinxhj_jsrg_zhangliao', 'xinxhj_clan_zhonghui']

		}
	},
	//武将 'rare', 'epic', 'legend',['legend']
	character: {
		xinxhj_yuji: {
			sex: "male",
			group: "qun",
			hp: 3,
			img: "image/character/pot_yuji.jpg",
			trashBin: ["character:pot_yuji", 'epic'],
			skills: ["xinxhjdaozhuan", "xinxhjfuji"],
			dieAudios: ["pot_yuji"],
		},
		xinxhj_zhanghuai: {
			sex: "female",
			group: "wu",
			hp: 3,
			img: "image/character/zhanghuai.jpg",
			trashBin: ["character:zhanghuai", 'rare'],
			skills: ['xinxhjlaoyan', 'xinxhjjueyan'],
			dieAudios: ["zhanghuai"],
		},
		xinxhj_sb_lvbu: {
			sex: "male",
			group: "qun",
			hp: 4,
			img: "image/character/sb_lvbu.jpg",
			trashBin: ["character:sb_lvbu", 'epic'],
			skills: ['xinxhjsbwushuang', 'xinxhjsbliyu'],
			dieAudios: ["sb_lvbu"],
		},
		xinxhj_dc_sb_luxun: {
			sex: "male",
			group: "qun",
			hp: 3,
			img: "image/character/dc_sb_luxun.jpg",
			trashBin: ["character:dc_sb_luxun", 'legend'],
			skills: ['xinxhjdcsbjunmou', 'xinxhjdcsbzhanyan'],
			dieAudios: ["dc_sb_luxun"],
		},
		xinxhj_sb_caopi: {
			sex: "male",
			group: "wei",
			hp: 3,
			trashBin: ["character:sb_caopi", 'legend'],
			skills: ['xinxhjxingshang', 'xinxhjfangzhu', 'xinxhjsongwei'],
			isZhugong: true,
			dieAudios: ["sb_caopi"],
		},
		xinxhj_new_simayi: {
			sex: "male",
			group: "shen",
			hp: 4,
			skills: ["xinxhjjilin", "xinxhjyingyou", "xinxhjyingtian"],
			trashBin: ['legend'],
			img: "image/character/new_simayi.jpg",
			dieAudios: ["new_simayi"],
			names: "司马|懿",
		},
		xinxhj_v_zhangliao: {
			sex: "male",
			group: "qun",
			hp: 4,
			img: "image/character/v_zhangliao.jpg",
			skills: ["xinxhjdcyuxi", "xinxhjdcporong"],
			trashBin: ["character:v_zhangliao", 'legend'],
			dieAudios: ["v_zhangliao"],
		},
		xinxhj_dc_simashi: {
			sex: "male",
			group: "wei",
			hp: 3,
			img: "image/character/dc_simashi.jpg",
			skills: ["xinxhjdcsanshi", "xinxhjdczhenrao", "xinxhjdcchenlve"],
			names: "司马|师",
			trashBin: ['legend'],
			groupBorder: "jin",
			dieAudios: ["dc_simashi"],
		},
		xinxhj_dc_sb_lvmeng: {
			sex: "male",
			group: "wu",
			hp: 4,
			img: "image/character/dc_sb_lvmeng.jpg",
			skills: ["xinxhjdcsbhengye", "xinxhjdcsbyingbo"],
			trashBin: ['epic'],
		},
		xinxhj_mb_huangzu: {
			sex: "male",
			group: "qun",
			hp: 4,
			trashBin: ['rare'],
			img: "image/character/mb_huangzu.jpg",
			skills: ["xinxhjmbchizhang", "xinxhjmbduanyang"],
			dieAudios: ["mb_huangzu"],
		},
		xinxhj_mb_huangzu: {
			sex: "male",
			group: "qun",
			hp: 4,
			trashBin: ['rare'],
			img: "image/character/mb_huangzu.jpg",
			skills: ["xinxhjmbchizhang", "xinxhjmbduanyang"],
			dieAudios: ["mb_huangzu"],
		},
		xinxhj_dc_sb_jushou: {
			sex: "male",
			group: "qun",
			hp: 3,
			trashBin: ['rare'],
			img: "image/character/dc_sb_jushou.jpg",
			skills: ["xinxhjzuojun", "xinxhjmuwang"],
			dieAudios: ["dc_sb_jushou"],
		},
		xinxhj_yj_sb_guojia: {
			sex: "male",
			group: "wei",
			hp: 3,
			img: "image/character/yj_sb_guojia.jpg",
			trashBin: ["character:yj_sb_guojia", 'legend'],
			skills: ["xinxhjxianmou", "xinxhjlunshi"],
			dieAudios: ["yj_sb_guojia"],
		},
		xinxhj_dc_xiahouxuan: {
			sex: "male",
			group: "wei",
			hp: 3,
			img: "image/character/dc_xiahouxuan.jpg",
			trashBin: ['legend'],
			skills: ["xinxhjboxuan", "xinxhjyizheng", "xinxhjguilin"],
			names: "夏侯|玄",
			dieAudios: ["dc_xiahouxuan"],
		},
		xinxhj_ol_jsrg_caocao: {
			sex: "male",
			group: "qun",
			hp: 4,
			trashBin: ['legend'],
			img: "image/character/jsrg_caocao.jpg",
			skills: ["xinxhjdingxi", "xinxhjnengchen", "xinxhjhuojie"],
			dieAudios: ["jsrg_caocao"],
		},
		xinxhj_star_fazheng: {
			sex: "male",
			group: "shu",
			hp: 3,
			trashBin: ['legend'],
			img: "extension/永夜之境/image/xinxhj_star_fazheng.png",
			skills: ["xinxhjzhiji", "xinxhjanji"],
			dieAudios: ["star_fazheng"],
		},
		xinxhj_xuwen: {
			sex: "female",
			hp: 3,
			group: "wei",
			trashBin: ['legend'],
			img: "extension/永夜之境/image/xinxhj_xuwen.png",
			skills: ["xinxhjfuhui", "xinxhjmohua"],
			dieAudios: ["xuwen"],
		},
		xinxhj_dc_zhushuo: {
			sex: "male",
			group: "wei",
			trashBin: ['epic'],
			hp: 4,
			img: "image/character/dc_zhushuo.jpg",
			skills: ["xinxhjzsshuhe", "xinxhjjilie"],
			dieAudios: ["dc_zhushuo"],
		},
		xinxhj_liujinliupei: {
			sex: "female",
			group: "wei",
			hp: 3,
			trashBin: ['legend'],
			img: "extension/永夜之境/image/xinxhj_liujinliupei.png",
			skills: ["xinxhjqixin", "xinxhjjiusi"],
			names: "刘|衿-刘|佩",
			dieAudios: ["liujinliupei"],
		},
		xinxhj_simashi: {
			sex: "male",
			group: "wei",
			hp: 4,
			trashBin: ['legend'],
			img: "extension/永夜之境/image/xinxyin_simashi.png",
			skills: ["xinxhjbaiyi", "xinxhjjinglve", "xinxhjshanli"],
			names: "司马|师",
			groupBorder: "xing",
			dieAudios: ["simashi"],
		},
		xinxhj_sunhuan: {
			sex: "male",
			group: "wu",
			hp: 4,
			trashBin: ['rare'],
			skills: ["xinxhjniji"],
			groupBorder: "xing",
			img: "extension/永夜之境/image/xinxhj_sunhuan.png",
			dieAudios: ["sunhuan"],
		},
		xinxhj_sb_zhangxiu: {
			sex: "male",
			group: "qun",
			hp: 4,
			groupBorder: "xing",
			trashBin: ['rare'],
			img: "extension/永夜之境/image/xinxhj_sb_zhangxiu.png",
			skills: ["xinxhjsbfuxi", "xinxhjsbhaoyi"],
			dieAudios: ["dc_sb_zhangxiu"],
		},
		xinxhj_hefei_zhangliao: {
			sex: "male",
			group: "wei",
			hp: 4,
			groupBorder: "xing",
			trashBin: ['legend'],
			img: "image/character/hefei_zhangliao.jpg",
			skills: ["xinxhjchonglei", "xinxhjdangshi"],
			dieAudios: ["hefei_zhangliao"],
		},
		xinxhj_sp_zhonghui: {
			sex: "male",
			group: "wei",
			hp: 4,
			skills: ["xinxhjsizi", "xinxhjxiezhi", "xinxhjyunan", "xinxhjkechang"],
			img: "extension/永夜之境/image/xinxhj_sp_zhonghui.png",
			isZhugong: true,
			trashBin: ['legend'],
			clans: ["颍川钟氏"],
			doubleGroup: ["wei", "qun"],
		},
		xinxhj_jsrg_zhangliao: {
			sex: "male",
			group: "qun",
			hp: 4,
			img: "image/character/ol_jsrg_zhangliao.jpg",
			skills: ["xinxhjzhengbing", "xinxhjtuwei"],
			doubleGroup: ["wei", "qun"],
			trashBin: ['legend'],
			dieAudios: ["jsrg_zhangliao"],
		},
		xinxhj_sb_zhangliao: {
			sex: "male",
			group: "wei",
			hp: 4,
			img: "extension/永夜之境/image/xinxhj_sb_zhangliao.png",
			skills: ["xinxhjtuxi", "xinxhjdengfeng"],
			trashBin: ['epic'],
			dieAudios: ["sb_zhangliao"],
		},
		xinxhj_clan_zhonghui: {
			sex: "male",
			group: "wei",
			hp: 2,
			maxHp: 4,
			img: "image/character/clan_zhonghui.jpg",
			trashBin: ["character:clan_zhonghui", 'legend'],
			skills: ["xinxhjyuzhi", "xinxhjxieshu", "xinxhjbaozu"],
			clans: ["颍川钟氏"],
			dieAudios: ["clan_zhonghui"],
		},
		xinxhj_dc_wuzhi: {
			sex: "male",
			group: "wei",
			hp: 3,
			trashBin: ['rare'],
			img: "image/character/dc_wuzhi.jpg",
			skills: ["xinxhjweiti", "xinxhjyuanrong"],
			dieAudios: ["dc_wuzhi"],
		},
		xinxhj_dc_zhaoxiang: {
			sex: "female",
			group: "shu",
			hp: 4,
			img: "image/character/dc_zhaoxiang.jpg",
			trashBin: ['legend'],
			skills: ["rexinxhjfanghun", "xinxhjfuhan"],
			dieAudios: ["zhaoxiang"],
		},
		xinxhj_sb_wuyi: {
			sex: "male",
			group: "shu",
			hp: 4,
			img: "image/character/dc_sb_wuyi.jpg",
			skills: ["xinxhjsbshibian", "xinxhjsbbibu"],
			dieAudios: ["dc_sb_wuyi"],
			trashBin: ['legend'],
			clans: ["陈留吴氏"],
		},
		xinxhj_guānning: {
			sex: "male",
			group: "shu",
			hp: 3,
			trashBin: ['rare'],
			img: "extension/永夜之境/image/xinxhj_guānning.png",
			skills: ["xinxhjxiuwen", "xinxhjlongsong"],
			dieAudios: ["guānning"],
		},
		xinxhj_wupu: {
			sex: "male",
			group: "qun",
			hp: 4,
			img: "image/character/wupu.jpg",
			trashBin: ['rare'],
			skills: ["xinxhjduanti", "xinxhjshicao"],
			dieAudios: ["wupu"],
		},
		xinxhj_hefei_lidian: {
			sex: "male",
			group: "wei",
			hp: 4,
			img: "image/character/hefei_lidian.jpg",
			trashBin: ['rare'],
			skills: ["xinxhjduanjin", "xinxhjgaigong"],
			dieAudios: ["hefei_lidian"],
		},
		xinxhj_hefei_yuejin: {
			sex: "male",
			group: "wei",
			hp: 4,
			trashBin: ['epic'],
			img: "extension/永夜之境/image/xinxhj_hefei_yuejin.png",
			skills: ["xinxhjxianjian", "xinxhjzherui"],
			dieAudios: ["hefei_yuejin"],
		},
		xinxhj_dc_sb_zhouyu: {
			sex: "male",
			group: "wu",
			hp: 4,
			skills: ["xinxhjsbronghuo", "xinxhjsbyingmou"],
			img: "image/character/dc_sb_zhouyu.jpg",
			trashBin: ["character:dc_sb_zhouyu", 'epic'],
			dieAudios: ["dc_sb_zhouyu"],
		},




	},
	//翻译
	translate: {
		//武将分包
		shizhounian: '十周年',
		shousha: '手杀',
		huaijiu: '怀旧',
		xinxol: 'OL',
		//武将翻译
		xinxhj_yuji: "旧势于吉",
		xinxhj_yuji_prefix: "旧势",
		xinxhj_zhanghuai: "旧张怀",
		xinxhj_zhanghuai_prefix: "旧",
		xinxhj_sb_lvbu: "旧谋吕布",
		xinxhj_sb_lvbu_prefix: "旧谋",
		xinxhj_dc_sb_luxun: "旧新杀谋陆逊",
		xinxhj_dc_sb_luxun_prefix: "旧新杀谋",
		xinxhj_sb_caopi: "旧谋曹丕",
		xinxhj_sb_caopi_prefix: "旧谋",
		xinxhj_new_simayi: "改神司马懿",
		xinxhj_new_simayi_prefix: "改|神",
		xinxhj_v_zhangliao: "改威张辽",
		xinxhj_v_zhangliao_prefix: "改|威",
		xinxhj_dc_simashi: "改新杀谋司马师",
		xinxhj_dc_simashi_prefix: "改新杀谋",




		//技能翻译
		xinxhj_dc_sb_zhouyu: "改新杀谋周瑜",
		xinxhj_dc_sb_zhouyu_prefix: "改新杀谋",
		xinxhjsbronghuo: "融火",
		xinxhjsbronghuo_info: "锁定技，有角色受到火焰伤害后，你下一次使用火【杀】或【火攻】额外指定1个目标（不可叠加），你使用火【杀】或【火攻】造成的伤害+X (X为全场势力数)。",
		xinxhjsbyingmou: "英谋",
		xinxhjsbyingmou_info: "转换技。①游戏开始时，你可以转换此技能状态；②每回合限一次，当你使用牌指定其他角色为目标后，你可以选择其中一名目标角色：阳，你将手牌数摸至全场最多，然后视为对其使用一张【火攻】；阴，令一名手牌数为全场最大的角色对其使用手牌中所有的【杀】和伤害类锦囊牌（两者可重合，若其没有可使用的牌则将手牌数弃至与你相同）。若其未因此受到伤害，你对其造成1点火焰伤害。",
		xinxhj_hefei_yuejin: "改骥乐进",
		xinxhj_hefei_yuejin_prefix: "改骥",
		xinxhjxianjian: "陷坚",
		xinxhjxianjian_info: `你使用${get.poptip('xinx_jishipai')}指定其他角色为唯一目标后，可以选择一项：1.摸X张牌，其弃置X张牌（X为目标场上牌数且至少为1）；2.此牌结算结束后，你将此牌置入其一个装备栏（顶替原装备），称为“陷坚”牌。`,
		xinxhjxianjian_equip: "陷坚",
		xinxhjxianjian_equip_info: "先登陷城！",
		xinxhjzherui: "折锐",
		xinxhjzherui_info: `①装备区有“陷坚”牌的角色使用【杀】指定目标后，你对其发动一次其选择选项的${get.poptip("xinxhjxianjian")}。②有角色失去装备栏里的一张“陷坚”牌后，你对其造成1点伤害并摸一张牌。`,
		xinxhjheyuyuejin: "合御",
		xinxhjheyuyuejin_info: `锁定技，①若${get.poptip("characterx_hefei_zhangliao")}在场且与你阵营相同，你发动过${get.poptip("xinxhjxianjian")}的【杀】对一名角色造成伤害后，你可对其执行未选择的一项。②若${get.poptip("characterx_hefei_lidian")}在场且与你阵营相同，每回合首次有角色失去“陷坚”牌后，你摸一张牌。`,
		xinxhj_hefei_lidian: "改骥李典",
		xinxhj_hefei_lidian_prefix: "改骥",
		xinxhjduanjin: "断津",
		xinxhjduanjin_info: "你使用基本牌结算结束后，可以获得一名本回合使用过牌的其他角色一张牌。",
		xinxhjgaigong: "概公",
		xinxhjgaigong_info: "你对其他角色造成伤害后，或受到其他角色造成的伤害后，你可选择你或其的至多三张手牌，展示并与牌堆底等量牌进行交换。若以此法移动的牌包含至少三种花色，你可使用其中一张牌（无次数限制）。",
		xinxhj_wupu: "改吴普",
		xinxhj_wupu_prefix: "改",
		xinxhjduanti: "锻体",
		xinxhjduanti_info: "锁定技。当你使用或打出牌结算结束后，若此牌是你本局游戏使用或打出过的牌中的第5X张牌（X∈N⁺），你加1点体力上限、回复1点体力。",
		xinxhjshicao: "识草",
		xinxhjshicao_info: "出牌阶段，你可以声明一种类型，然后选择从牌堆顶或牌堆底摸一张牌并使用之。若此牌类型与你声明的类型不同，你观看牌堆另一端的两张牌，此技能本回合失效。",
		xinxhj_guānning: "改关宁",
		xinxhj_guānning_prefix: "改",
		xinxhjxiuwen: "修文",
		xinxhjxiuwen_info: "当你使用牌时，若你本轮未记录此牌牌名，你可以记录之并摸一张牌。",
		xinxhjlongsong: "龙诵",
		xinxhjlongsong_info: "出牌阶段开始时，你可以交给或获得一名其他角色一张红色牌，然后你获得其发动时机包含“出牌阶段”的一项技能。若其没有符合条件的技能或你拥有此技能，则改为随机获得一个满足条件的技能。",
		xinxhj_sb_wuyi: "旧新杀谋吴懿",
		xinxhj_sb_wuyi_prefix: "旧新杀谋",
		xinxhjsbshibian: "识变",
		xinxhjsbshibian_info: "每轮开始时，你可选择一名其他角色，本轮其攻击范围内的角色视为在你攻击范围内，且你使用【杀】或普通锦囊牌可指定一名其攻击范围内的角色为额外目标。",
		xinxhjsbbibu: "庇部",
		xinxhjsbbibu_info: "你的上家或下家每回合首次成为其他角色的【杀】或普通锦囊牌的唯一目标时，你可摸一张牌并令此牌无效；你的上家或下家每回合首次使用【杀】或普通锦囊牌结算结束后，你可摸一张牌，视为使用此牌。",
		xinxhj_dc_zhaoxiang: "改新杀赵襄",
		xinxhj_dc_zhaoxiang_prefix: "改新杀",
		rexinxhjfanghun: "芳魂",
		rexinxhjfanghun_info: "当你使用伤害牌或成为伤害牌的目标后，你获得1个“梅影”标记；你可以移去1个“梅影”标记来发动〖龙胆〗并摸一张牌。",
		xinxhjfuhan: "扶汉",
		xinxhjfuhan_info: '准备阶段，你可以移去所有"梅影"标记并摸两张牌，然后从X张三国势力武将牌中选择并获得至多两个技能（限定技、觉醒技、隐匿技、使命技、主公技除外）。（X为场上角色数，且X∈[4,+∞)）。',
		xinxhj_dc_wuzhi: "改吴质",
		xinxhj_dc_wuzhi_prefix: "改",
		xinxhjweiti: "伪涕",
		xinxhjweiti_info: "出牌阶段限一次，你可以选择一名其他角色并选择一项：1.与其各受到1点伤害，你获得两张与所有手牌点数均不同的牌；2.增加1点体力上限并回复1点体力，你与其各弃置两张点数不同的牌。",
		xinxhjyuanrong: "圆融",
		xinxhjyuanrong_info: "你的回合结束时，你可以将本回合进入弃牌堆的一张牌当任意普通锦囊牌使用，然后将本回合进入弃牌堆的一张红色牌当任意基本牌使用。",
		xinxhj_clan_zhonghui_prefix: "改族",
		xinxhj_clan_zhonghui: "改族钟会",
		xinxhjyuzhi: "迂志",
		xinxhjyuzhi_info: "锁定技。①每轮开始时，你展示一张手牌，然后摸X张牌（X为此牌牌名字数），以此法展示和获得的牌不计入手牌上限。②每轮结束时，若你上一轮因此摸的牌数小于你本轮因此摸的牌数，你受到1点雷属性伤害。",
		xinxhjxieshu: "挟术",
		xinxhjxieshu_info: "当你因牌造成或受到伤害后，你可以弃置Y张牌，然后摸你已损失体力值张牌（Y为此牌牌名字数），以此法获得的牌无次数距离限制。",
		xinxhjbaozu: "保族",
		xinxhjbaozu_info: "限定技。当一名颍川钟氏角色进入濒死状态时，你可以令其回复体力至1点。有角色死亡后，你重置本技能。",
		xinxhj_sb_zhangliao: "改谋张辽",
		xinxhj_sb_zhangliao_prefix: "改谋",
		xinxhjtuxi: "突袭",
		xinxhjtuxi_info: "当你不因此技能获得牌后，你可以移出你的等量张牌，然后获得至多X名其他角色各一张牌（X为你以此法移出牌数）。",
		xinxhjdengfeng: "登锋",
		xinxhjdengfeng_info: `准备阶段，你可以选择一名其他角色并选择一项：①获得其装备区的至多两张牌。②获得牌堆中的一张【杀】。③获得一张移出牌。④${get.poptip("rule_beishui")}：失去1点体力。`,
		xinxhj_jsrg_zhangliao: "改闪张辽",
		xinxhj_jsrg_zhangliao_prefix: "改闪",
		xinxhjzhengbing: "整兵",
		xinxhjzhengbing_info: "出牌阶段限三次，你的登场势力为群。你可以重铸一张牌，若此牌为：【杀】，你的手牌上限、额定摸牌数+1；【闪】，你摸两张牌；【桃】/【酒】，你于此回合结束时执行一个出牌阶段。然后若你以此法触发过所有选项，变更势力为魏。",
		xinxhjtuwei: "突围",
		xinxhjtuwei_info: "魏势力技。出牌阶段开始时，你可以获得攻击范围内任意名角色各一张牌。然后此回合结束时，这些角色中未于本回合受到过伤害的角色依次弃置你的一张牌。",
		xinxhj_sp_zhonghui: "改势钟会",
		xinxhj_sp_zhonghui_prefix: "改势",
		xinxhjsizi: "肆恣",
		xinxhjsizi_info: `蓄力技（4/4）。出牌阶段限一次，你可消耗任意蓄力点，令从此回合开始的等量个回合，执行以下效果（你的回合开始时，这些效果失效）：1.你使用【杀】造成的伤害+1；2.每个回合结束时，你摸两张牌且本回合内使用过【杀】的其他角色失去1点体力。若你消耗的蓄力点大于你的体力值，执行一个额外效果：每个回合结束时，若本回合未有角色使用过【杀】，当前回合角色失去1点体力。`,
		xinxhjxiezhi: "挟志",
		xinxhjxiezhi_info: "锁定技，你造成伤害或体力值变化后，获得等量蓄力点。若你有因此未获得的蓄力点，你摸未获得数张牌并令手牌上限和出杀上限+1。",
		xinxhjyunan: "迂难",
		xinxhjyunan_info: `觉醒技，你的登场势力为魏。当你令一名角色进入濒死状态时，你将势力变更为群，然后升级${get.poptip({
			id: "xinxhjyunan_kechang",
			name: "〖克昌〗",
			type: "character",
			info: "锁定技，你使用【杀】无距离限制；你使用的【杀】不可被响应。",
		})}。`,
		xinxhjkechang: "克昌",
		xinxhjkechang_info: "锁定技，你使用【杀】无距离限制。",
		xinxhjkechang_rewrite: "克昌·二级",
		get xinxhjkechang_rewrite_info() {
			return lib.poptip.getInfo("xinxhjyunan_kechang");
		},
		xinxhj_hefei_zhangliao: "改骥张辽",
		xinxhj_hefei_zhangliao_prefix: "改骥",
		xinxhjchonglei: "冲垒",
		xinxhjchonglei_info: "锁定技，①你响应其他角色使用的牌后，或你使用的牌被其他角色响应后，获得其一张牌。②你的出牌阶段内：其他角色不处于濒死状态时，所有非【杀】手牌只能当作【闪】使用或打出。",
		xinxhjdangshi: "荡势",
		xinxhjdangshi_info: "你使用伤害牌结算结束后，可选择一名此牌目标，令其选择一项执行：1.对你使用一张同名牌；2.弃置X张牌（X为其选择此项的次数+1）；3.受到1点伤害。若为本阶段首次执行此项，你摸一张牌且本阶段出杀次数+1。",
		xinxhjheyuzhangliao: "合御",
		xinxhjheyuzhangliao_info: `锁定技，①若${get.poptip({
			id: "characterx_hefei_lidian",
			name: "合李典",
			type: "character",
			dialog: "characterDialog",
		})}在场且与你阵营相同，修改${get.poptip("xinxhjchonglei")}中的“非【杀】手牌”为“手牌”。②若${get.poptip({
			id: "characterx_hefei_yuejin",
			name: "合乐进",
			type: "character",
			dialog: "characterDialog",
		})}在场且与你阵营相同，将${get.poptip("xinxhjdangshi")}中的X固定为3。`,
		xinxhj_sb_zhangxiu: '改新杀谋张绣',
		xinxhj_sb_zhangxiu_prefix: "改新杀谋",
		xinxhjsbfuxi: "附袭",
		xinxhjsbfuxi_info: "一名角色的出牌阶段开始时你可以选择一项：①交给其一张牌，然后摸两张牌；②弃置其一张牌，然后视为对其使用一张【杀】。",
		xinxhjsbhaoyi: "豪义",
		xinxhjsbhaoyi_info: "结束阶段，你可以获得本回合进入弃牌堆的伤害牌，然后你可以将这些牌任意分配给其他角色。",
		xinxhj_sunhuan: "改孙桓",
		xinxhj_sunhuan_prefix: "改",
		xinxhjniji: "逆击",
		xinxhjniji_info: "①当你成为牌的目标后，你可以摸一张牌，称为“逆击”。②一名角色的结束阶段，你可以使用一张“逆击”牌（无距离限制）。",
		xinxhj_simashi: "改司马师",
		xinxhj_simashi_prefix: "改",
		xinxhjbaiyi: "败移",
		xinxhjbaiyi_info: `当你受伤后，你对伤害来源发动一次${get.poptip('xinxhjjinglve')}，并可以交换两名角色的座次。`,
		eternal_xinxhjjinglve_tag: 'invisible',
		xinxhjjinglve: "景略",
		xinxhjjinglve_info: "出牌阶段限一次，你可以观看一名角色的手牌，将其区域内两张牌标记为「死士」。当「死士」被其他角色首次使用时，你取消此牌的所有目标。",
		xinxhjshanli: "擅立",
		xinxhjshanli_info: `锁定技，当其他角色使用「死士」时，你获得之。`,
		xinxhj_liujinliupei: "改刘衿刘佩",
		xinxhj_liujinliupei_prefix: "改",
		xinxhjqixin: "契心",
		xinxhjqixin_info: "每回合各限两次，当你不因本技能使用牌时/摸牌后，你可以摸一张牌/使用一张牌。",
		xinxhjjiusi: "纠思",
		xinxhjjiusi_info: `每回合限一次，你可以视为使用一张${get.poptip('xinx_jishipai')}。`,
		xinxhj_dc_zhushuo: "改朱铄",
		xinxhj_dc_zhushuo_prefix: "改",
		xinxhjzsshuhe: "疏和",
		xinxhjzsshuhe_info: `每回合限一次，其他角色使用伤害牌时，你可以从牌堆获得一张【酒】，令其选择一项：1.令此牌无效并视为使用一张不计入次数限制的【酒】；2.令你摸一张牌。`,
		xinxhjjilie: "急烈",
		xinxhjjilie_info: "出牌阶段限一次，你可重铸任意张牌，每重铸一种花色的牌便进行两次判定。若判定结果为【杀】，你可视为使用此牌（无距离限制且此【杀】伤害为本回合你使用【杀】的次数）。",
		xinxhj_xuwen: "改徐妏",
		xinxhj_xuwen_prefix: "改",
		xinxhjfuhui: "赋绘",
		xinxhjfuhui_info: `每种牌名每回合限一次，你可将两张牌当作任意一张${get.poptip('xinx_jishipai')}使用。若这两张手牌的花色组合为本回合首次使用，你摸一张牌。`,
		xinxhjmohua: "摹画",
		xinxhjmohua_info: `每轮限一次，其他角色回合结束时，你可依序视为使用其出牌阶段使用的相同牌名的${get.poptip('xinx_jishipai')}（使用者视为该角色）。若此牌目标与其使用该牌的目标有重合，你摸重合目标数的牌。`,
		xinxhj_star_fazheng: "改星法正",
		xinxhj_star_fazheng_prefix: "改星",
		xinxhjzhiji: "知机",
		xinxhjzhiji_info: "准备阶段，你可以弃置任意张手牌并将手牌数摸至五张，然后若你弃置的牌数与你摸的牌数之差X：大于0，你可以对至多X名其他角色各造成1点伤害；等于0，你本回合使用牌无法被响应且数值+1；小于0，你本回合手牌上限+2。",
		xinxhjanji: "谙计",
		xinxhjanji_info: "锁定技，一名角色使用牌时，若此花色的牌本轮游戏使用最少的之一，则你摸一张牌。",
		xinxhj_ol_jsrg_caocao: "改汉曹操",
		xinxhj_ol_jsrg_caocao_prefix: "改汉",
		xinxhjdingxi: "定西",
		xinxhjdingxi_info:
			`当你不因〖定西〗使用${get.poptip('xinx_jishipai')}进入弃牌堆后，你可以对上家或下家使用其中一张牌，然后将使用的牌置于武将牌上。结束阶段，你摸X张牌（X为你的“定西”牌数）。`,
		xinxhjnengchen: "能臣",
		xinxhjnengchen_info: "锁定技，当你受到牌造成的伤害后，若你拥有与此牌牌名相同的“定西”牌，则你从牌堆获得一张同名牌。",
		xinxhjhuojie: "祸结",
		xinxhjhuojie_info:
			"锁定技，出牌阶段开始时，若X大于游戏人数，则你进行一次【闪电】判定（X为你的“定西”牌数）；然后若你因此受到了伤害，则你依次使用所有“定西”牌。",
		xinxhj_dc_xiahouxuan: "改新杀夏侯玄",
		xinxhj_dc_xiahouxuan_prefix: "改|新杀",
		xinxhjboxuan: "博玄",
		xinxhjboxuan_info: "你使用手牌指定目标结算完毕后，你可展示牌堆底的三张牌，若其中有牌与你使用的牌：1.牌名字数相同，你摸一张牌；2.花色相同，你可弃置一名其他角色一张牌；3.类型相同，你可使用一张展示牌（无距离次数限制）。",
		xinxhjboxuan_rewrite: "博玄·改",
		xinxhjboxuan_rewrite_info: "你使用手牌指定目标结算完毕后，你可展示牌堆底的三张牌，若其中有牌与你使用的牌：1.牌名字数相同，你摸一张牌；2.花色相同，你可弃置一名其他角色一张牌；3.类型相同，你可使用一张展示牌（无距离次数限制）。然后你可将使用的手牌置于牌堆底。",
		xinxhjyizheng: "议政",
		xinxhjyizheng_info: "你的回合开始时，你可与至多体力上限名其他角色各展示一张手牌，若展示的牌类型均相同，你可将这些牌交给一名角色，否则，你弃置这些牌。",
		xinxhjguilin: "归林",
		xinxhjguilin_info: "限定技，出牌阶段或你进入濒死状态时，你可以回复所有体力，然后失去〖议政〗并修改〖博玄〗。",
		xinxhj_yj_sb_guojia: "改新杀谋郭嘉",
		xinxhj_yj_sb_guojia_prefix: "改新杀谋",
		xinxhjxianmou: "先谋",
		xinxhjxianmou_info: "转换技。①游戏开始时，你可以转换此技能状态；②你失去过牌的回合结束时，你可以：阳，观看牌堆顶五张牌并获得至多X张牌；阴，观看一名角色手牌并获得其至多X张牌，若获得X张牌则当前回合角色进行一次【闪电】判定。（X为你与非当前回合角色本回合失去牌数）",
		xinxhjlunshi: "论势",
		xinxhjlunshi_info: "一名角色对其以外的角色使用普通锦囊牌的结算中，若你手牌中两种颜色的牌数量相同，你可将一张牌当作不可被响应的【无懈可击】使用。",
		xinxhj_dc_sb_jushou: "改新杀谋沮授",
		xinxhj_dc_sb_jushou_prefix: "改新杀谋",
		xinxhjzuojun: "佐军",
		xinxhjzuojun_info: "出牌阶段限一次，你可以令一名角色摸三张牌并令其选择一项：1.直到其下个回合开始，其不能使用这些牌且这些牌不计入手牌上限；2.失去1点体力，摸一张牌并使用因此获得的任意张牌。",
		xinxhjmuwang: "暮往",
		xinxhjmuwang_info: "锁定技，当你每回合首次失去的基本牌或普通锦囊牌进入弃牌堆时，你获得其中一张。当你本回合再次失去这张牌后，你摸一张牌。",
		xinxhjdaozhuan: "道转",
		xinxhjdaozhuan_info: "每轮每种牌名限一次，你可以将你与当前回合角色的共X张牌置入弃牌堆（X为本回合所有角色使用牌的类别数，X为0则跳过此步骤），视为使用一张基本牌。若X不为0且当前回合角色因此失去了X张牌，则本轮此技能失效。",
		xinxhjfuji: "符济",
		xinxhjfuji_info: "出牌阶段限一次，你可以展示全场共计Y张手牌并令等量角色获得之（Y为场上其他角色数）。因此获得【杀】的角色使用【杀】造成的伤害+1直到你的下个回合开始；因此获得【闪】的角色使用【闪】结算完毕后摸一张牌直到你的下个回合开始。然后若你的手牌数为全场最低，则你获得摸两张牌，获得这两项效果直到你的下个回合开始。",
		xinxhjlaoyan: "劳燕",
		xinxhjlaoyan_info: "锁定技，一张牌指定你为目标后，若此牌存在其他目标角色，则你令此牌对其他目标角色无效。",
		xinxhjjueyan: "诀言",
		xinxhjjueyan_info: "当你使用指定唯一其他目标的牌结算完毕后，你可以{与其拼点，若你赢，你}选择一项：①你与其依次受到[1]点伤害；②回复[1]点体力；③获得其[1]张手牌。然后你将所选选项[ ]中的数值改为1，其余选项[ ]中的数值+1。若你已经选择过所有选项，则你修改此技能，删除描述中{ }的内容。",
		xinxhjsbwushuang: "无双",
		xinxhjsbwushuang_info: "锁定技，你使用的【杀】需两张【闪】才能抵消；与你进行【决斗】的角色每次需要打出两张【杀】。此【杀】或【决斗】造成伤害时，若受伤角色没有使用或打出过【杀】或【闪】响应，此伤害+1。",
		xinxhjsbliyu: "利驭",
		xinxhjsbliyu_info: "当你使用【杀】对一名其他角色造成伤害后，你可获得其区域内至多等同于伤害值张牌，然后其摸等量张牌。若你与其因此获得了全部类型的牌，其选择一项:1.你视为对其指定的另一名其他角色使用一张【决斗】；2.其获得〖无双〗直至其下个回合结束。",
		xinxhjdcsbjunmou: "隽谋",
		xinxhjdcsbjunmou_info: "转换技。①游戏开始时，你可以转换此技能状态；②一张牌结算结束后，若此牌的目标包括你，你可以摸一张牌并选择一张手牌，阳：此牌视为无次数限制的火【杀】；阴：重铸此牌并横置一名角色。",
		xinxhjdcsbzhanyan: "绽炎",
		xinxhjdcsbzhanyan_info: "限定技，出牌阶段，你可选择任意名横置的其他角色并摸等量张牌，然后这些角色同时展示一张手牌，你可弃置相同花色牌并对展示对应花色的角色各造成1点火焰伤害，若这些角色均受到伤害则重复此流程， 且此技能结算期间你每失去一张牌则摸一张牌。",
		xinxhjxingshang: "行殇",
		xinxhjxingshang_info: "①当一名角色受到伤害后（每回合限一次）或死亡时，你获得2个“颂”标记（你至多拥有9个“颂”标记）。②出牌阶段限两次，你可以：" + ["移去2个“颂”标记，令一名角色复原武将牌", "移去2个“颂”标记，令一名角色摸X张牌（X为场上死亡角色数，且X至少为2，至多为5）", "移去5个“颂”标记，令一名体力上限小于10的角色回复1点体力，增加1点体力上限，随机恢复一个已废除的装备栏", "移去5个“颂”标记，获得一名阵亡角色武将牌上的所有技能，然后你失去〖行殇〗〖放逐〗〖颂威〗"].map((str, index) => `${index + 1}.${str}`).join("；") + "。",
		xinxhjfangzhu: "放逐",
		xinxhjfangzhu_info: "出牌阶段限一次，你可以：" + ["移去1个“颂”标记，令一名其他角色于手牌中只能使用基本牌直到其回合结束", "移去2个“颂”标记，令一名其他角色于手牌中只能使用锦囊牌直到其回合结束", "移去3个“颂”标记，令一名其他角色于手牌中只能使用装备牌直到其回合结束", "移去2个“颂”标记，令一名其他角色的非Charlotte技能失效直到其回合结束", "移去2个“颂”标记，令一名其他角色不能响应另一名角色使用的牌直到其回合结束", "移去3个“颂”标记，令一名其他角色将武将牌翻面"].map((str, index) => `${index + 1}.${str}`).join("；") + "。",
		xinxhjfangzhu_info_doudizhu: "出牌阶段限一次，你可以：" + ["移去2个“颂”标记，令一名其他角色于手牌中只能使用锦囊牌直到其回合结束", "移去2个“颂”标记，令一名其他角色不能响应另一名角色使用的牌直到其回合结束", "移去3个“颂”标记，令一名其他角色将武将牌翻面"].map((str, index) => `${index + 1}.${str}`).join("；") + "。",
		xinxhjsongwei: "颂威",
		xinxhjsongwei_info: "主公技。①出牌阶段开始时，你获得Y个“颂”标记（Y为场上其他魏势力角色数的两倍）。②每局游戏限一次，你可以令一名其他魏势力角色失去武将牌上的所有技能。",
		xinxhjjilin: "戢鳞",
		xinxhjjilin_info: "①游戏开始时，你将牌堆顶两张牌暗置于你的武将牌上，称为“志”。②当你成为其他角色使用牌的目标时，你可以明置一张暗置的“志”令此牌对你无效。③回合开始时，你可用任意张手牌替换等量暗置的“志”。",
		xinxhjyingyou: "英猷",
		xinxhjyingyou_info: "①出牌阶段开始时，你可明置一张“志”然后摸X张牌（X为明置的“志”的数量）。②当你失去与明置的“志”其中一张花色相同的牌时，你摸一张牌。",
		xinxhjyingtian: "应天",
		xinxhjyingtian_info: `觉醒技。一名角色死亡后，若场上势力数不大于2，则你本局游戏使用牌没有距离限制。`,
		xinxhjdcyuxi: "驭袭",
		xinxhjdcyuxi_info: "当你造成或受到伤害时，你可以摸一张牌。你使用以此法获得的牌无次数限制且不计入手牌上限。",
		xinxhjdcporong: "破戎",
		xinxhjdcporong_info: "你使用伤害牌时，令你下次使用【杀】时可以获得目标角色与其相邻角色的各一张牌，且此牌额外结算一次。",
		xinxhjdcsanshi: "散士",
		xinxhjdcsanshi_tag: "死士",
		xinxhjdcsanshi_info: "锁定技。①游戏开始时，你令系统将牌堆中每个点数的随机一张牌永久标记为“死士”（“死士”对你可见）。②一名角色的回合结束时，若本回合有“死士”不因你使用或打出而进入弃牌堆，你于弃牌堆中获得这些牌。③你使用“死士”不能被响应。",
		xinxhjdczhenrao: "震扰",
		xinxhjdczhenrao_info: "每回合每名角色限一次。当你使用牌指定第一个目标后，若目标角色包含其他角色，或当其他角色使用牌指定你为目标后，你可以选择手牌数大于你的其中一个目标或此牌的使用者，然后对其造成1点伤害。",
		xinxhjdcchenlve: "沉略",
		xinxhjdcchenlve_info: "限定技。出牌阶段，你可以将牌堆、弃牌堆、场上及其他角色的手牌区里的所有“死士”置入处理区，然后你获得这些牌。若如此做，你获得如下效果：1.此阶段结束时，你将这些牌移出游戏；2.你回合开始时，将所有以此法移出游戏的“死士”置入弃牌堆。",
		xinxhj_dc_sb_lvmeng: "改新杀谋吕蒙",
		xinxhj_dc_sb_lvmeng_prefix: "改新杀谋",
		xinxhjdcsbhengye: "横野",
		xinxhjdcsbhengye_info: "锁定技，①你造成或受到伤害后，令你以下一项数值+1（至多+5）：1.摸牌阶段摸牌数；2.出牌阶段使用【杀】的次数；3.手牌上限，4.攻击范围。②若你〖横野①〗中任意项已+3，你的回合开始时，你回复1点体力。",
		xinxhjdcsbyingbo: "英博",
		xinxhjdcsbyingbo_info: "你使用伤害牌时，若此牌本轮已有角色使用过同名牌，此牌造成的伤害改为火焰伤害且伤害+1；否则此牌不可被响应且结算结束后你可将其交给一名其他角色。",
		xinxhj_mb_huangzu: "改势黄祖",
		xinxhj_mb_huangzu_prefix: "改势",
		xinxhjmbchizhang: "鸱张",
		xinxhjmbchizhang_info: "你使用伤害牌无距离限制且无视防具。当你使用伤害牌指定目标后，你可以弃置任意数量的手牌，其他角色不能使用或打出与你此法弃置牌颜色相同的牌响应此牌。",
		xinxhjmbduanyang: "断鞅",
		xinxhjmbduanyang_info: "当你不因使用而失去手牌后，你可以将其中的伤害牌置于武将牌上，并于本回合结束时使用之；你以此法使用的【杀】造成伤害后，你可以弃置受伤角色区域内至多两张牌，然后摸四张牌。",



	},
	//动态翻译
	dynamicTranslate: {
		xinxhjjueyan(player, skill) {
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
				result = result.replace("{与其拼点，若你赢，你}", "").replace("若你已经选择过所有选项，则你修改此技能，删除描述中{ }的内容。", "");
			}
			return result;
		},
		xinxhjxianmou(player) {
			const bool = player.storage.xinxhjxianmou;
			let yang = "观看牌堆顶五张牌并获得至多X张牌",
				yin = "观看一名角色手牌并获得其至多X张牌，若获得X张牌则当前回合角色进行一次【闪电】判定";
			if (bool) {
				yin = `<span class='bluetext'>${yin}</span>`;
			} else {
				yang = `<span class='firetext'>${yang}</span>`;
			}
			let start = "转换技，①游戏开始时，你可以转换此技能状态；②你失去过牌的回合结束时，你可以：",
				end = "（X为你与非当前回合角色本回合失去牌数）。";
			return `${start}阳：${yang}；阴：${yin}${end}`;
		},
		xinxhjboxuan(player) {
			if (player.storage.xinxhjboxuan) {
				return lib.translate["xinxhjboxuan_rewrite_info"];
			}
			return lib.translate["xinxhjboxuan_info"];
		},
		xinxhjkechang(player, skill) {
			if (player.getStorage(skill, false)) {
				return lib.translate[`${skill}_rewrite_info`];
			}
			return lib.translate[`${skill}_info`];
		},
		xinxhjsbyingmou(player) {
			const bool = player.storage.xinxhjsbyingmou;
			let yang = "你将手牌数摸至全场最多，然后视为对其使用一张【火攻】",
				yin = "令一名手牌数为全场最大的角色对其使用手牌中所有的【杀】和伤害类锦囊牌（若其没有可使用的牌则将手牌数弃至与你相同）";
			if (bool) {
				yin = `<span class='bluetext'>${yin}</span>`;
			} else {
				yang = `<span class='firetext'>${yang}</span>`;
			}
			let start = "转换技。①游戏开始时，你可以转换此技能状态；②每回合限一次，你对其他角色使用牌后，你可以选择其中一名目标角色：",
				end = "。若其未因此受到伤害，你对其造成1点火焰伤害。";
			return `${start}阳：${yang}；阴：${yin}${end}`;
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
		xinxhj_yuji: [
			['xinxhj_yuji_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/huaijiu/xinxhj_yuji_shadow.png',
				'tempname:pot_yuji_shadow',
				'die:pot_yuji_shadow'
			]],
		],
		xinxhj_dc_sb_luxun: [
			['xinxhj_dc_sb_luxun_shadow', [
				((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/huaijiu/xinxhj_dc_sb_luxun_shadow.png',
				'tempname:dc_sb_luxun_shadow',
				'die:dc_sb_luxun_shadow'
			]],
		],
		xinxhj_dc_sb_lvmeng: [
			['xinxhj_dc_sb_lvmeng_shadow', ['ext:永夜之境/image/xinxhj_dc_sb_lvmeng_shadow.png',
				'tempname:xinxhj_dc_sb_lvmeng_shadow',
				'die:dc_sb_lvmeng',
			]],
		],
		xinxhj_yj_sb_guojia: [
			['xinxhj_yj_sb_guojia_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') +
				'永夜之境/image/huaijiu/yj_sb_guojia_shadow.jpg',
				'tempname:yj_sb_guojia_shadow',
				'die:yj_sb_guojia_shadow'
			]],
		],
		xinxhj_v_zhangliao: [
			['xinxhj_v_zhangliao_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') +
				'永夜之境/image/huaijiu/xinxhj_v_zhangliao_shadow.png',
				'tempname:v_zhangliao',
				'die:v_zhangliao'
			]],
		],
		xinxhj_dc_sb_zhouyu: [
			['xinxhj_dc_sb_zhouyu_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') +
				'永夜之境/image/huaijiu/xinxhj_dc_sb_zhouyu_shadow.jpg',
				'tempname:dc_sb_zhouyu_shadow',
				'die:dc_sb_zhouyu_shadow'
			]],
		],
	},
	//武将姓名
	pinyins: {

	},
	//武将称号
	characterTitle: {
		//武将ID:" ",

	},
	//珠联璧合
	perfectPair: {

	},
	//衍生卡牌
	card: {

	},
	//技能
	skill: {
		//周瑜
		xinxhjsbronghuo: {
			audio: 'dcsbronghuo',
			audioname: ["dc_sb_zhouyu_shadow"],
			trigger: { player: "useCard" },
			filter(event, player) {
				return (event.card.name == "sha" && game.hasNature(event.card, "fire")) || event.card.name == "huogong";
			},
			forced: true,
			async content(event, trigger, player) {
				trigger.baseDamage += game.countGroup();
			},
			ai: { threaten: 3.5 },
			group: ["xinxhjsbronghuo_target"],
			subSkill: {
				target: {
					audio: "xinxhjsbronghuo",
					forced: true,
					trigger: {
						global: "damageEnd",
					},
					filter(event, player) {
						return event.hasNature("fire");
					},
					async content(event, trigger, player) {
						player.addTempSkill("xinxhjsbronghuo_effect", { player: "dieAfter" });
					},
				},
				effect: {
					charlotte: true,
					mark: true,
					intro: {
						content: "下一次使用火【杀】或【火攻】额外指定1个目标",
					},
					forced: true,
					popup: false,
					trigger: {
						player: "useCard2",
					},
					filter(event, player) {
						return get.info("xinxhjsbronghuo").filter(event, player);
					},
					async content(event, trigger, player) {
						player.removeSkill(event.name);
						const { targets, card } = trigger;
						const targetsx = game.filterPlayer(
							target =>
								!targets.includes(target) &&
								lib.filter.targetEnabled2(card, player, target) &&
								lib.filter.targetInRange(card, player, target)
						);
						if (targets?.length) {
							const result = await player
								.chooseTarget(`融火：你可以为${get.translation(card)}增加1名目标`, (card, player, target) =>
									get.event().targets.includes(target)
								)
								.set("targets", targetsx)
								.set("card", card)
								.set("ai", target => get.effect(target, get.event().card, get.player(), get.player()))
								.forResult();
							if (result?.bool) {
								const { targets } = result;
								player.logSkill("xinxhjsbronghuo", targets);
								game.log(targets, "成为了", card, "的额外目标");
								trigger.targets.addArray(targets);
							}
						}
					},
				},
			},
		},
		xinxhjsbyingmou: {
			mark: true,
			marktext: "☯",
			zhuanhuanji(player, skill) {
				player.storage[skill] = !player.storage[skill];
				player.changeSkin({ characterName: "xinxhj_dc_sb_zhouyu" }, "dc_sb_zhouyu" + (player.storage[skill] ? "_shadow" : ""));
			},
			intro: {
				content(storage) {
					return (
						"每回合限一次，当你使用牌指定其他角色为目标后，你可以选择其中一名目标角色，" +
						(storage
							? "令一名手牌数为全场最大的角色对其使用手牌中所有的【杀】和伤害类锦囊牌（若其没有可使用的牌则将手牌数弃至与你相同）。"
							: "你将手牌数摸至全场最多，然后视为对其使用一张【火攻】。")
					);
				},
			},
			audio: 'dcsbyingmou',
			audioname: ["dc_sb_zhouyu_shadow"],
			trigger: {
				//player: "useCardAfter",
				player: "useCardToPlayer",
			},
			filter(event, player) {
				return event.targets?.some(target => target != player && target.isIn());
			},
			usable: 1,
			async cost(event, trigger, player) {
				const { targets } = trigger;
				const skillName = event.name.slice(0, -5);
				const storage = player.storage[skillName];
				let next;
				if (storage) {
					next = player
						.chooseCardTarget({
							prompt: get.prompt(skillName),
							prompt2:
								"选择一名目标角色，令一名手牌数为全场最大的角色对其使用手牌中所有的【杀】和伤害类锦囊牌（若其没有可使用的牌则将手牌数弃至与你相同）",
							filterTarget(card, player, target) {
								if (!ui.selected.targets.length) {
									return _status.event.targets.includes(target);
								}
								return target.isMaxHandcard();
							},
							selectTarget: [1, 2],
							complexSelect: true,
							complexTarget: true,
							multitarget: true,
							targetprompt: ["目标角色", "使用角色"],
							filterCard: () => false,
							selectCard: -1,
							ai2(target) {
								const player = get.player();
								const getNum = (player, target, source) => {
									return player
										.getCards("h", card => {
											if (get.name(card) != "sha" && (get.type(card) != "trick" || !get.tag(card, "damage"))) {
												return false;
											}
											return player.canUse(card, target, false);
										})
										.reduce((sum, card) => sum + get.effect(target, card, player, source), 0);
								};
								if (!ui.selected.targets.length) {
									const targets = game.filterPlayer(target => target.isMaxHandcard());
									targets.sort((a, b) => getNum(b, target, player) - getNum(a, target, player));
									return getNum(targets[0], target, player) + 1;
								}
								return getNum(target, ui.selected.targets[0], player) + 1;
							},
						})
						.set("targets", targets);
				} else {
					next = player
						.chooseTarget(
							get.prompt(skillName),
							"选择一名目标角色，将手牌数摸至全场最多，然后视为对其使用一张【火攻】",
							(card, player, target) => _status.event.targets.includes(target)
						)
						.set("ai", target => {
							const player = get.player();
							return (
								//Math.max(0, Math.min(5, target.countCards("h") - player.countCards("h"))) * 2 +
								get.effect(target, { name: "huogong" }, player, player)
							);
						})
						.set("targets", targets);
				}
				event.result = await next.forResult();
			},
			async content(event, trigger, player) {
				const { targets, name: skillName } = event;
				player.changeZhuanhuanji(skillName);
				const target = targets[0];
				let bool = false;
				if (!player.storage[skillName]) {
					player.line2(targets);
					let source = targets[1] ? targets[1] : targets[0],
						discard = true;
					while (true) {
						const cards = source.getCards("h", card => {
							if (get.name(card) != "sha" && (get.type(card) != "trick" || !get.tag(card, "damage"))) {
								return false;
							}
							return source.canUse(card, target, false);
						});
						if (cards.length) {
							if (discard) {
								discard = false;
							}
							const next = source.useCard(cards.randomGet(), target, false);
							await next;
							if (target.hasHistory("damage", evt => evt.card == next.card)) {
								bool = true;
							}
						} else {
							break;
						}
					}
					if (discard && player.countCards("h") < source.countCards("h")) {
						await source.chooseToDiscard(source.countCards("h") - player.countCards("h"), "h", true, "allowChooseAll");
					}
				} else {
					/* if (player.countCards("h") < target.countCards("h")) {
						await player.draw(Math.min(5, target.countCards("h") - player.countCards("h")));
					} */
					const starget = game.findPlayer(current => current.isMaxHandcard());
					if (starget?.isIn()) {
						await player.drawTo(starget.countCards("h"));
					}

					if (player.canUse({ name: "huogong" }, target, false)) {
						const next = player.useCard({ name: "huogong" }, target, false);
						await next;
						if (target.hasHistory("damage", evt => evt.card == next.card)) {
							bool = true;
						}
					}
				}
				if (!bool) {
					player.line(target, "fire");
					await target.damage("fire");
				}
			},
			group: "xinxhjsbyingmou_change",
			subSkill: {
				change: {
					audio: "dcsbyingmou",
					audioname: ["dc_sb_zhouyu_shadow"],
					trigger: {
						global: "phaseBefore",
						player: "enterGame",
					},
					filter(event, player) {
						return event.name != "phase" || game.phaseNumber == 0;
					},
					prompt2(event, player) {
						return "切换【英谋】为状态" + (player.storage.xinxhjsbyingmou ? "阳" : "阴");
					},
					check: () => Math.random() > 0.5,
					content() {
						player.changeZhuanhuanji("xinxhjsbyingmou");
					},
				},
			},
		},
		//乐进
		xinxhjxianjian: {
			audio: 'hefeixianjian',
			trigger: {
				player: "useCardToPlayered",
			},
			filter(event, player) {
				if (event.targets.includes(player)) { return false; }
				return ['basic', 'trick'].includes(get.type(event.card)) && event.targets?.length == 1;
			},
			async cost(event, trigger, player) {
				const target = trigger.target;
				let num = Math.max(1, target.countCards("ej"));
				const result = await player
					.chooseButton([
						get.prompt(event.skill, target),
						[
							[
								["draw", `摸${get.cnNumber(num)}张牌，然后其需弃置${get.cnNumber(num)}张牌`],
								["equip", `此牌结算结束后将对应实体牌置入其一个装备栏中，称为“陷坚”牌`],
							],
							"textbutton",
						],
					])
					.set("filterButton", button => {
						if (button.link == "draw") {
							return true;
						}
						const trigger = get.event().getTrigger();
						if (!trigger.cards?.length) {
							return false;
						}
						const testCard = get.autoViewAs({ name: 'xinxhjxianjian_equip' }, trigger.cards);
						for (let i = 1; i <= 5; i++) {
							testCard.subtypes = [`equip${i}`];
							if (trigger.target.canEquip(testCard, true)) {
								return true;
							}
						}
						/* for (let i = 1; i < 6; i++) {
							if (trigger.target.hasEmptySlot(i)) {
								return true;
							}
						} */
						return false;
					})
					.set("ai", button => {
						const trigger = get.event().getTrigger();
						if (get.attitude(get.player(), trigger.target) > 0) {
							return 0;
						}
						if (button.link == "draw") {
							return 2;
						}
						if (trigger.target.countCards("e", card => card.name == "xinxhjxianjian_equip")) {
							return 1;
						}
						return 3;
					})
					.forResult();
				if (result?.bool && result.links?.length) {
					event.result = {
						bool: true,
						targets: [target],
						cost_data: result.links[0],
					};
				}
			},
			async content(event, trigger, player) {
				const {
					targets: [target],
					cost_data: link,
				} = event;
				const card = trigger.getParent().card;
				card.storage ??= {};
				card.storage[event.name] ??= link;
				game.broadcastAll(
					(card, storage) => {
						card.storage = storage;
					},
					card,
					card.storage
				);
				if (link == "draw") {
					const num1 = Math.max(1, target.countCards("ej"));
					await player.draw(num1);
					const num = Math.min(target.countDiscardableCards("he"), Math.max(1, target.countCards("ej")));
					if (num > 0) {
						await target.chooseToDiscard(num, "he", true);
					}
				} else {
					player
						.when({
							global: "useCardAfter",
						})
						.filter(evt => evt == trigger.getParent("useCard", true, true))
						.step(async (event, trigger, player) => {
							const cards = trigger.cards.filterInD("od");
							if (!cards?.length) {
								return;
							}
							const list = [];
							/* for (let i = 1; i < 6; i++) {
								const slot = `equip${i}`;
								if (target.hasEmptySlot(slot)) {
									list.add(slot);
								}
							} */
							const testCard = get.autoViewAs({ name: 'xinxhjxianjian_equip' }, cards);
							for (let i = 1; i <= 5; i++) {
								const slot = `equip${i}`;
								testCard.subtypes = [slot];
								if (target.canEquip(testCard, true)) {
									list.add(slot);
								}
							}
							if (list.length === 0) return;
							const result = await player
								.chooseControl(list)
								.set("prompt", `陷坚：将${get.translation(cards)}置入${get.translation(target)}的一个装备栏中`)
								.set("ai", () => {
									return get.event().resultx;
								})
								.set("resultx", list.randomGet())
								.forResult();
							if (result.control) {
								const card = get.autoViewAs({ name: `xinxhjxianjian_equip` }, cards);
								card.subtypes = [result.control];
								card.storage ??= {};
								card.storage.xinxhjxianjian_source = player;
								target.$gain2(cards, false);
								await target.equip(card);
							}
						});
				}
			},
			init(player, skill) {
				/* if (!lib.card.xinxhjxianjian_equip) {
					lib.card.xinxhjxianjian_equip = {
						type: "equip",
						subtype: "equip1", 
						name: "xinxhjxianjian_equip",
						skills: [], 
						description: "由【陷坚】置入的虚拟装备。",
					};
					lib.translate.xinxhjxianjian_equip = "陷坚";
					lib.translate.xinxhjxianjian_equip_info = "由【陷坚】转化而来的装备。";
				} */
				if (!lib.card.xinxhjxianjian_equip) {
					lib.card.xinxhjxianjian_equip = {
						type: "equip",
						name: "xinxhjxianjian_equip",
						fullimage: true,
						blankCard: true,
						image: 'character:xinxhj_hefei_yuejin',
						description: "由【陷坚】转化而来的装备。",
						onEquip(card) {
							// 读取是谁发动技能造了这件装备
							const source = card.storage?.xinxhjxianjian_source;
							if (get.itemtype(source) === 'player') {
								game.broadcastAll((player, card, source) => {
									let cardx;
									// 找到这件装备对应的 UI 节点
									for (const node of player.node.equips.childNodes) {
										if (node.cardSymbol && node[node.cardSymbol] === card) {
											cardx = node;
											break;
										}
									}
									const vcards = card.cards ?? [];
									if (cardx?.node?.name2 && (vcards.length !== 1 || vcards[0].name !== cardx.name)) {
										// 动态修改装备栏右侧的小字，显示“陷坚·基本”或“陷坚·未知”
										const typeStr = vcards[0] ? get.translation(get.type2(vcards[0])) : '虚拟';
										cardx.node.name2.innerHTML = `陷坚·${source.isUnderControl(true) ? typeStr : '未知'}`;
									}
									// 把卡面的背景图，替换成发动技能的那个角色的立绘
									if (cardx && source.name) {
										cardx.setBackground(source.name, 'character');
									}
								}, player, card, source);
							}
						}
					};
					lib.translate.xinxhjxianjian_equip = "陷坚";
					lib.translate.xinxhjxianjian_equip_info = "由【陷坚】转化而来的装备。";
				}
				if (!_status[`_${skill}_nodeintro`]) {
					game.broadcastAll(skill => {
						const nodeintro = _status[`_${skill}_nodeintro`] = get.nodeintro;
						get.nodeintro = function (node, ...args) {
							const uiintro = nodeintro(node, ...args);
							if (node.classList.contains('card')) {
								let vcard = node.cardSymbol && node[node.cardSymbol];
								if (node.link?.name && lib.card[node.link.name]) {
									vcard = node.link.cardSymbol && node.link[node.link.cardSymbol];
								}
								const vcards = vcard?.cards ?? [];
								if (vcard && vcard.name === 'xinxhjxianjian_equip' && (vcards.length !== 1 || vcards[0].name !== node.name)) {
									const source = vcard.storage?.xinxhjxianjian_source;
									if (get.itemtype(source) === 'player') {
										if (source.isUnderControl(true)) {
											if (vcards.length) {
												if (!uiintro.innerHTML.includes('—— 对应实体牌 ——')) {
													uiintro.add('<div class="text center">—— 对应实体牌 ——</div>');
													uiintro.addSmall(vcards);
												}
											} else {
												uiintro.add('<div class="text center">—— 此为虚拟牌 ——</div>');
											}
										}
									}
								}
							}
							return uiintro;
						};
					}, skill);
				}
			},
		},
		xinxhjzherui: {
			audio: 'hefeizherui',
			logAudio: index => (typeof index === "number" ? "hefeizherui" + index + ".mp3" : "hefeizherui" + get.rand(1, 2) + ".mp3"),
			trigger: {
				global: "useCardToPlayered",
			},
			forced: true,
			locked: false,
			filter(event, player) {
				if (event.card.name != "sha") {
					return false;
				}
				return event.player.countCards("e", card => card.name == "xinxhjxianjian_equip");
			},
			logTarget: "player",
			async content(event, trigger, player) {
				const target = event.targets[0];
				const result = await target
					.chooseButton(
						[
							`${get.translation(player)}对你发动了【陷坚】，选择一项：`,
							[
								[
									["draw", `其摸一张牌，然后你需弃置${get.cnNumber(Math.max(1, target.countCards("ej")))}张牌`],
									["equip", `此杀结算结束后其将对应实体牌置入你一个空置装备栏中，称为“陷坚”牌`],
								],
								"textbutton",
							],
						],
						true
					)
					.set("filterButton", button => {
						if (button.link == "draw") {
							return true;
						}
						const trigger = get.event().getTrigger();
						if (!trigger.cards?.length) {
							return false;
						}
						for (let i = 1; i < 6; i++) {
							if (trigger.player.hasEmptySlot(i)) {
								return true;
							}
						}
						return false;
					})
					.set("ai", button => {
						if (button.link == "draw") {
							return 2;
						}
						return 1.3 + Math.random();
					})
					.forResult();
				if (!result?.bool || !result.links?.length) {
					return;
				}
				const skill = "xinxhjxianjian";
				player.logSkill(skill, target);
				const next = game.createEvent(skill);
				next.player = player;
				next._trigger = trigger;
				next.targets = [target];
				next.cost_data = result.links[0];
				next.triggername = event.triggername;
				next.setContent(get.info(skill).content);
				await next;
			},
			group: "xinxhjzherui_damage",
			subSkill: {
				damage: {
					trigger: {
						global: ["loseAfter", "loseAsyncAfter", "equipAfter", "addJudgeAfter", "addToExpansionAfter", "gainAfter"],
					},
					getIndex(event, player) {
						let list = [];
						game.countPlayer(current => {
							const evt = event.getl(current);
							evt.es.forEach(card => {
								const VEquip = evt.vcard_map.get(card);
								if (VEquip?.name === "xinxhjxianjian_equip") {
									list.add([current, VEquip]);
								}
							});
							return false;
						});
						return list;
					},
					filter(event, player, name, list) {
						const [target, card] = list;
						if (!card || card.name != "xinxhjxianjian_equip") {
							return false;
						}
						return true;
					},
					forced: true,
					locked: false,
					popup: false,
					logTarget(_1, _2, _3, list) {
						return list[0];
					},
					async content(event, trigger, player) {
						const target = event.indexedData[0];
						player.logSkill("xinxhjzherui", [target], null, null, [get.rand(3, 4)]);
						await target.damage(player);
						await player.draw();
					},
				},
			},
			ai: {
				combo: "xinxhjxianjian",
			},
		},
		xinxhjheyuyuejin: {
			audio: 2,
			trigger: {
				source: "damageSource",
				global: ["loseAfter", "loseAsyncAfter", "equipAfter", "addJudgeAfter", "addToExpansionAfter", "gainAfter"],
			},
			filter(event, player) {
				const name = event.name == "damage" ? "hefei_zhangliao" : "hefei_lidian";
				if (!get.info("friendgongli").isFriendOf(player, name)) {
					return false;
				}
				if (event.name == "damage") {
					return event.card?.storage?.xinxhjxianjian;
				}
				const evts = game.getGlobalHistory("everything", evt => {
					if (!["lose", "gain", "loseAsync", "equip", "addJudge", "addToExpansion"].includes(evt.name)) {
						return false;
					}
					return true;
				});
				for (const evt of evts) {
					for (const current of game.filterPlayer(() => true)) {
						const evtx = evt.getl(current);
						if (evtx?.vcard_map?.size && Array.from(evtx.vcard_map.values()).some(card => card.name == "xinxhjxianjian_equip")) {
							return evt == event;
						}
					}
				}
				return false;
			},
			async cost(event, trigger, player) {
				if (trigger.name !== "damage") {
					event.result = {
						bool: true,
					};
					return;
				}
				const link = trigger.card?.storage?.xinxhjxianjian,
					target = trigger.player;
				const prompt =
					link !== "draw"
						? `你摸一张牌，其弃置${get.cnNumber(Math.max(1, target.countCards("ej")))}张牌`
						: `此杀结算后将对应实体牌置入其一个空置装备栏`;
				event.result = await player
					.chooseBool(get.prompt(event.skill, target), prompt)
					.set("choice", get.attitude(player, target) <= 0)
					.forResult();
				event.result.targets = [target];
			},
			async content(event, trigger, player) {
				if (trigger.name != "damage") {
					await player.draw();
					return;
				}
				const link = trigger.card?.storage?.xinxhjxianjian == "draw" ? "equip" : "draw";
				const next = game.createEvent("xinxhjxianjian_effect", false);
				next.player = player;
				next._trigger = trigger;
				next.targets = [trigger.player];
				next.cost_data = link;
				next.triggername = event.triggername;
				next.setContent(get.info("xinxhjxianjian").content);
				await next;
			},
			ai: {
				combo: "xinxhjxianjian",
			},
		},
		//李典
		xinxhjduanjin: {
			audio: 'hefeiduanjin',
			trigger: {
				player: "useCardAfter",
			},
			filter(event, player) {
				if (get.type(event.card) != "basic") {
					return false;
				}
				return game.hasPlayer(current => {
					if (current == player || !current.hasHistory("useCard")) {
						return false;
					}
					return current.countGainableCards(player, "he") > 0;
				});
			},
			async cost(event, trigger, player) {
				const targets = game.filterPlayer(current => {
					if (current == player || !current.hasHistory("useCard")) {
						return false;
					}
					return current.countGainableCards(player, "he") > 0;
				});
				if (!targets.length) {
					return;
				}
				event.result = await player
					.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
						return get.event().targetx.includes(target);
					})
					.set("targetx", targets)
					.set("ai", target => {
						const player = get.player();
						return get.effect(target, { name: "guohe_copy2" }, player, player);
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				await player.gainPlayerCard(target, "he", true);
			},
		},
		xinxhjgaigong: {
			audio: 'hefeigaigong',
			trigger: {
				source: "damageSource",
				player: "damageEnd",
			},
			filter(event, player) {
				if (event.player == event.source) {
					return false;
				}
				return [event.player, event.source].some(current => {
					if (!current?.isIn()) {
						return false;
					}
					return current.countCards("h") >= 1;
				});
			},
			//usable: 1,
			async cost(event, trigger, player) {
				const targets = [trigger.player, trigger.source].filter(current => {
					if (!current?.isIn()) {
						return false;
					}
					return current.countCards("h") >= 1;
				});
				if (!targets?.length) {
					return;
				}
				event.result = await player
					.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
						return get.event().targetx.includes(target);
					})
					.set("targetx", targets)
					.set("ai", target => {
						const player = get.player();
						const att = -get.attitude(player, target);
						let score = Math.max(0.1, att);
						const ths = target.countCards('h');
						const phs = player.countCards('h');
						if (ths >= phs) {
							score += 10;
						} else {
							score += ths;
						}
						return score;
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0];
				const result = await player.choosePlayerCard(target, [1, 3], true, "h", "展示至多三张手牌并与牌堆底的牌交换")
					.set("ai", button => {
						return 10;
					})
					.forResult();
				if (!result?.bool || !result.links?.length) {
					return;
				}
				const cards = result.links;
				await player.showCards(cards, `${get.translation(player)}发动了【概公】`);
				const cards2 = get.bottomCards(3, true);
				const result2 = await player
					.chooseToMove(`概公：交换${player == target ? "你" : get.translation(target)}的手牌与牌堆底的牌`, true)
					.set("list", [
						[`${player == target ? "你" : get.translation(target)}的手牌`, cards],
						["牌堆底", cards2],
					])
					.set("filterMove", function (from, to, moved) {
						if (typeof to == "number") {
							return false;
						}
						return true;
					})
					.set("att", get.attitude(player, target))
					.set("processAI", function (list) {
						const cards = list[0][1].slice(0).sort(function (a, b) {
							return get.value(b) - get.value(a);
						});
						if (get.event().att <= 0) {
							cards.reverse();
						}
						return [cards, cards.splice(3)];
					})
					.forResult();
				if (!result2?.bool || !result2.moved?.length) {
					return;
				}
				const puts = cards.removeArray(result2.moved[0]),
					gains = cards2.removeArray(result2.moved[1]);
				if (puts.length && gains.length) {
					target.$throw(puts.length, 1000);
					await target.lose(puts, ui.special);
					await target.gain(gains, "draw");
					const bottoms = result2.moved[1].slice();
					if (bottoms.length) {
						await game.cardsGotoOrdering(bottoms);
						await game.cardsGotoPile(bottoms);
						game.updateRoundNumber();
					}
				}
				const allCards = [puts, gains].flat(),
					suits = allCards.map(card => get.suit(card)).toUniqued();
				if (suits.length < 3 || allCards.every(card => !player.hasUseTarget(card))) {
					return;
				}
				const result3 = await player
					.chooseButton([
						"概公：是否使用一张牌？",
						[
							allCards.map(card => [
								card,
								(() => {
									return result2.moved[0].includes(card) ? "手牌" : "牌堆底";
								})(),
							]),
							(item, type, position, noclick, node) => {
								node = ui.create.buttonPresets.card(item[0], type, position, noclick);
								game.createButtonCardsetion(item[1], node);
								return node;
							},
						],
					])
					.set("filterButton", button => {
						return get.player().hasUseTarget(button.link);
					})
					.set("ai", button => {
						return get.player().getUseValue(button.link);
					})
					.forResult();
				if (!result3?.bool || !result3?.links?.length) {
					return;
				}
				const card = result3.links[0];
				if (player.hasUseTarget(card)) {
					await player.chooseUseTarget(card, true, false);
				}
			},
		},
		xinxhjheyulidian: {
			audio: 2,
			trigger: {
				player: "useCard",
				global: "discardAfter",
			},
			filter(event, player) {
				const name = event.name == "useCard" ? "hefei_zhangliao" : "hefei_yuejin";
				if (!get.info("friendgongli").isFriendOf(player, name)) {
					return false;
				}
				const evt = event.getParent(2);
				if (event.name == "useCard") {
					return evt?.name == "xinxhjgaigong";
				}
				return evt?.name == "xinxhjduanjin" && evt.player == player && event.cards?.someInD("od");
			},
			forced: true,
			async content(event, trigger, player) {
				if (trigger.name == "useCard") {
					trigger.directHit.addArray(game.players);
					return;
				}
				const cards = trigger.cards?.filterInD("od");
				if (cards?.length) {
					await player.gain(cards, "gain2");
				}
			},
			ai: {
				combo: ["xinxhjduanjin", "xinxhjgaigong"],
			},
		},
		//吴普
		xinxhjduanti: {
			audio: 'dcduanti',
			trigger: {
				player: ["useCardAfter", "respondAfter"],
			},
			forced: true,
			filter(event, player) {
				return event._copxinxhjduanti;
			},
			onremove: ["xinxhjduanti", "xinxhjduanti_counter"],
			group: "xinxhjduanti_counter",
			async content(event, trigger, player) {
				await player.gainMaxHp();
				await player.recover();
				player.addMark("xinxhjduanti", 1, false);
			},
			subSkill: {
				counter: {
					trigger: {
						player: ["useCard1", "respond"],
					},
					forced: true,
					charlotte: true,
					popup: false,
					firstDo: true,
					async content(event, trigger, player) {
						if (!player.countMark("xinxhjduanti_counter")) {
							const num = game.getAllGlobalHistory("everything", evt => {
								return evt.player === player && ["useCard", "respond"].includes(evt.name) && evt !== trigger;
							}).length;
							if (num) {
								player.addMark("xinxhjduanti_counter", num, false);
							}
						}
						player.addMark("xinxhjduanti_counter", 1, false);
						if (player.countMark("xinxhjduanti_counter") % 5 === 0) {
							trigger._copxinxhjduanti = true;
						}
						player.markSkill("xinxhjduanti");
					},
				},
			},
			/* intro: {
				markcount(storage, player) {
					return player.countMark("xinxhjduanti_counter");
				},
				content(storage, player) {
					return `<li>已使用过${get.cnNumber(player.countMark("xinxhjduanti_counter"))}张牌<br><li>已以此法增加${player.countMark("xinxhjduanti")}点体力上限`;
				},
			}, */
		},
		xinxhjshicao: {
			audio: 'dcshicao',
			enable: "phaseUse",
			onremove: ["xinxhjshicao_aiRecord"],
			chooseButton: {
				dialog(event, player) {
					return ui.create.dialog(
						"###识草###选择一种类型与要摸牌的来源",
						[["caoying_basic", "caoying_trick", "caoying_equip"], "vcard"],
						[["牌堆顶", "牌堆底"], "tdnodes"]
					);
				},
				check(button) {
					const player = get.player();
					const bottom = player.storage.xinxhjshicao_bottom,
						aiStorage = player.getStorage("xinxhjshicao_aiRecord");
					if (
						bottom &&
						aiStorage.length > 0 &&
						ui.cardPile.lastChild &&
						get.name(ui.cardPile.lastChild, false) === get.name(aiStorage.lastItem, false)
					) {
						if (button.link === "牌堆底" || button.link[2].slice(8) === get.type2(aiStorage.lastItem, false)) {
							return 20;
						}
					}
					if (button.link === "牌堆顶" || button.link[2].slice(8) === "basic") {
						return 10;
					}
					return 5 + Math.random();
				},
				filter(button, player) {
					if (!ui.selected.buttons.length) {
						return true;
					}
					return ui.selected.buttons[0].parentNode != button.parentNode;
				},
				select: 2,
				backup(links, player) {
					if (links[0].includes("牌堆")) {
						links.reverse();
					}
					return {
						audio: "xinxhjshicao",
						type: links[0][2].slice(8),
						pos: links[1],
						filterCard: () => false,
						selectCard: -1,
						async content(event, trigger, player) {
							let { type, pos } = lib.skill.xinxhjshicao_backup;
							game.log(player, "声明了", `#y${get.translation(type)}牌`);
							const next = player.draw();
							const bottom = pos === "牌堆底";
							if (bottom) {
								next.set("bottom", true);
								if (player.getStorage("xinxhjshicao_aiRecord").length > 0) {
									player.storage.xinxhjshicao_aiRecord.pop();
								}
							}
							const drawnCards = (await next.forResult()).cards;
							if (drawnCards) {
								let card = drawnCards[0];
								if (player.hasUseTarget(card)) {
									await player.chooseUseTarget(card, true, false);
								}
							}
							if (get.type2(drawnCards[0], player) === type) {
								return;
							}
							let cards;
							if (!bottom) {
								cards = get.bottomCards(2);
								cards.reverse();
							} else {
								cards = get.cards(2);
							}
							await game.cardsGotoOrdering(cards);
							await player.viewCards(`${bottom ? "牌堆顶" : "牌堆底"}的两张牌(靠左的在牌堆更靠上)`, cards);
							player.storage.xinxhjshicao_record = cards.slice();
							player.storage.xinxhjshicao_aiRecord = cards.slice();
							player.storage.xinxhjshicao_bottom = !bottom;
							const skill = "xinxhjshicao";
							player.localMarkSkill(skill, player, event);
							if (bottom) {
								cards.reverse();
							}
							await game.cardsGotoPile(cards, bottom ? "insert" : null);
							player.tempBanSkill(skill);
						},
						ai: {
							result: { player: 1 },
						},
					};
				},
				prompt(links, player) {
					return `点击“确定”，从${links[1]}摸一张牌`;
				},
			},
			marktext: '🌿',
			intro: {
				mark(dialog, content, player) {
					var cards = player.getStorage("xinxhjshicao_record");
					if (cards && cards.length) {
						if (player.isUnderControl(true)) {
							dialog.addText(`上一次观看的${player.storage.xinxhjshicao_bottom ? "牌堆底" : "牌堆顶"}的牌：`);
							dialog.addAuto(cards);
							dialog.addText("（牌堆顶——牌堆底）");
						} else {
							return "不给看";
						}
					}
				},
			},
			subSkill: {
				backup: {},
			},
			ai: {
				order: 8,
				result: {
					player: 1,
				},
			},
		},
		//关宁
		xinxhjxiuwen: {
			audio: "ext:永夜之境/audio:2",
			trigger: { player: "useCard" },
			filter(event, player) {
				return !player.getStorage("xinxhjxiuwen").includes(event.card.name);
			},
			frequent: true,
			async content(event, trigger, player) {
				player.draw();
				player.markAuto("xinxhjxiuwen", [trigger.card.name]);
				player.when({ global: "roundStart" }).step(async (event, trigger, player) => {
					player.unmarkSkill("xinxhjxiuwen");
					delete player.storage.xinxhjxiuwen;
				});
			},
			marktext: "🗄️",
			intro: {
				markcount(storage, player) {
					return (storage || []).length;
				},
				mark(dialog, storage, player) {
					dialog.css({ width: "50%" });
					if (get.is.phoneLayout()) {
						dialog.classList.add("fullheight");
					}
					dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🎴本轮已用牌名</div>');
					const allCards = lib.inpile.filter(name => {
						return name;
					});
					const recorded = storage || [];
					if (allCards.length) {
						dialog.addSmall([allCards, 'vcard']);
						dialog.buttons.forEach(btn => {
							let cardName = '';
							if (typeof btn.link === 'string') {
								cardName = btn.link;
							} else if (btn.link && btn.link.name) {
								cardName = btn.link.name;
							} else if (Array.isArray(btn.link)) {
								cardName = btn.link[2];
							}
							if (recorded.includes(cardName)) {
								btn.style.opacity = '1';
								btn.style.filter = 'none';
								btn.style.boxShadow = '0 0 8px rgba(255, 215, 0, 0.8)';
							} else {
								btn.style.opacity = '0.5';
								//btn.style.filter = 'grayscale(100%) brightness(0.6)'; //全黑白滤镜、
								btn.style.boxShadow = 'none';
							}
						});
					}
					else {
						dialog.addText('<div class="text center" style="opacity:0.6">暂无卡牌</div>');
					}
				},
			}
		},
		xinxhjlongsong: {
			audio: "ext:永夜之境/audio:2",
			trigger: { player: "phaseUseBegin" },
			filter(event, player) {
				return game.hasPlayer(target => {
					return target.hasCard(card => {
						if (get.position(card) == "h") {
							return true;
						}
						if (get.color(card) != "red") {
							return false;
						}
						if (player == target) {
							return true;
						}
						return lib.filter.canBeGained(card, player, target);
					}, "he");
				});
			},
			getSkills(skills, len) {
				let player = get.player();
				skills = skills.filter(skill => {
					let str = get.skillInfoTranslation(skill, get.event().player);
					if (str.indexOf("当你于出牌阶段外") != -1) {
						return false;
					}
					if (str.indexOf("当你于出牌阶段") != -1) {
						return true;
					}
					if (player.hasSkill(skill, null, null, false)) {
						return false;
					}
					let ss = game.expandSkills([skill]);
					if (
						ss.some(skillx => {
							let info = get.info(skillx);
							if (!info || !info.enable) {
								return false;
							}
							if (
								info.enable != "phaseUse" &&
								info.enable != "chooseToUse" &&
								(!Array.isArray(info.enable) || (!info.enable.includes("phaseUse") && !info.enable.includes("chooseToUse")))
							) {
								return false;
							}
							if (info.juexingji || info.hiddenSkill || info.charlotte || info.limited || info.dutySkill) {
								return false;
							}
							if (info.ai && info.ai.notemp) {
								return false;
							}
							return true;
						})
					) {
						return true;
					}
					return false;
				});
				if (len && !skills.length) {
					if (!_status.characterlist) {
						game.initCharacterList();
					}
					let allList = _status.characterlist.slice(0);
					allList.randomSort();
					for (const name of allList) {
						const curSkills = lib.character[name][3];
						const filteredSkills = lib.skill.xinxhjlongsong.getSkills(curSkills);
						if (filteredSkills.length > 0) {
							return filteredSkills.randomGets(1);
						}
					}
				}
				return skills;
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseCardTarget({
						prompt: get.prompt2(event.skill),
						filterTarget(card, player, target) {
							if (target === player) {
								return false;
							}
							const skills = lib.skill.xinxhjlongsong.getSkills(target.getSkills(null, false)).map(skill => get.translation(skill));
							if (skills.length) {
								target.prompt(skills.join("<br>"));
							}
							return (
								ui.selected.cards.length ||
								target.hasCard(card => {
									return get.color(card) == "red" && lib.filter.canBeGained(card, player, target);
								}, "he")
							);
						},
						filterCard: { color: "red" },
						selectCard: [0, 1],
						multitarget: true,
						ai1(card) {
							const ai2 = get.event().ai2;
							if (
								game.hasPlayer(current => {
									return ai2(current) > 0;
								})
							) {
								return -1 - get.value(card);
							}
							return 6 - get.value(card);
						},
						ai2(target) {
							const player = get.event().player,
								att = get.attitude(player, target);
							if (att > 0 && !target.getGainableCards(player, "he").some(card => get.color(card) == "red")) {
								return 0;
							}
							return (
								lib.skill.xinxhjlongsong.getSkills(target.getSkills(null, false)).length +
								(att > 0 ? 0 : Math.max(0, get.effect(target, { name: "shunshou_copy2" }, player, player)))
							);
						},
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const target = event.targets[0],
					cards = event.cards,
					gainableCards = target.getGainableCards(player, "he").filter(card => get.color(card) == "red");
				if (cards) {
					await player.give(cards, target);
				} else {
					if (gainableCards.length) {
						let dialog = ["龙诵：获得" + get.translation(target) + "的一张红色牌"];
						let cards1 = gainableCards.filter(i => get.position(i) == "h"),
							cards2 = gainableCards.filter(i => get.position(i) == "e");
						if (cards1.length) {
							dialog.push('<div class="text center">手牌区</div>');
							if (player.hasSkillTag("viewHandcard", null, target, true)) {
								dialog.push(cards1);
							} else {
								dialog.push([cards1.randomSort(), "blank"]);
							}
						}
						if (cards2.length) {
							dialog.push('<div class="text center">装备区</div>');
							dialog.push(cards2);
						}
						const { bool, links } = await player
							.chooseButton(dialog, true)
							.set("ai", button => {
								const player = get.event().player,
									target = get.event().getParent().targets[0];
								return get.value(button.link, player) * get.value(button.link, target) * (1 + Math.random());
							})
							.forResult();
						if (!bool) {
							return;
						}
						await player.gain(links, target, "giveAuto", "bySelf");
					} else {
						player.popup("杯具");
						player.chat("无牌可得？！");
						game.log("但是", target, "没有红色牌可被" + get.translation(player) + "获得！");
					}
				}
				let skills = lib.skill.xinxhjlongsong.getSkills(target.getSkills(null, false), true);
				if (!event.isMine() && !event.isOnline()) {
					await game.delayx();
				}
				if (!skills.length) {
					return;
				}
				let skill;
				if (skills.length == 1) {
					skill = skills[0];
				} else {
					skill = (
						await player
							.chooseControl(skills)
							.set(
								"choiceList",
								skills.map(i => {
									return (
										'<div class="skill">' +
										(lib.translate[i + "_ab"] || lib.translate[i]) +
										"</div><div>" +
										get.skillInfoTranslation(i, player, false) +
										"</div>"
									);
								})
							)
							.set("displayIndex", false)
							.set("prompt", "龙诵：请选择你要获得的技能")
							.set("ai", () => {
								var list = _status.event.controls.slice();
								return list.sort((a, b) => {
									return get.skillRank(b, "in") - get.skillRank(a, "in");
								})[0];
							})
							.forResult()
					).control;
				}
				//player.addTempSkill("dcxinxhjlongsong_remove", ["phaseUseAfter", "phaseAfter"]);
				//player.markAuto("dcxinxhjlongsong_remove", [skill]);
				await player.addSkills(skill, ["phaseUseAfter", "phaseAfter"]);
			},
		},
		//谋吴懿
		xinxhjsbshibian: {
			audio: 'dcsbshibian',
			trigger: {
				global: "roundStart",
			},
			filter(event, player) {
				return game.hasPlayer(current => current != player);
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2(event.skill), lib.filter.notMe)
					.set("ai", target => {
						const player = get.player();
						const targets = game.filterPlayer(current => {
							if (player.inRange(current) || get.attitude(player, current) > 0) {
								return false;
							}
							return target.inRange(current);
						});
						return targets.length + 1;
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const skill = `${event.name}_effect`;
				player.addTempSkill(skill, { global: "roundStart" });
				player.markAuto(skill, event.targets);
				player.addTip(
					skill,
					`识变 ${player
						.getStorage(skill)
						.map(i => get.translation(i))
						.join(" ")}`
				);
			},
			subSkill: {
				effect: {
					charlotte: true,
					onremove(player, skill) {
						player.removeTip(skill);
						player.setStorage(skill, null, true);
					},
					intro: {
						content: "本轮在$攻击范围内的角色视为在你攻击范围内",
					},
					trigger: {
						player: "useCard",
					},
					filter(event, player) {
						if (event.card.name != "sha" && get.type(event.card) != "trick") {
							return false;
						}
						const list = player.getStorage("xinxhjsbshibian_effect");
						if (!list.length) {
							return false;
						}
						return game.hasPlayer(current => {
							if (event.targets?.includes(current)) {
								return false;
							}
							if (!lib.filter.targetEnabled2(event.card, event.player, current)) {
								return false;
							}
							return list.some(target => target.inRange(current));
						});
					},
					async cost(event, trigger, player) {
						const list = player.getStorage(event.skill);
						const targets = game.filterPlayer(current => {
							if (trigger.targets?.includes(current)) {
								return false;
							}
							if (!lib.filter.targetEnabled2(trigger.card, trigger.player, current)) {
								return false;
							}
							return list.some(target => target.inRange(current));
						});
						event.result = await player
							.chooseTarget(
								get.prompt(event.skill),
								`令一名在本轮〖识变〗目标攻击范围内的角色成为${get.translation(trigger.card)}的额外目标`,
								(card, player, target) => {
									return get.event().targetx.includes(target);
								}
							)
							.set("targetx", targets)
							.set("ai", target => {
								const player = get.player(),
									trigger = get.event().getTrigger();
								return get.effect(target, trigger.card, trigger.player, player);
							})
							.forResult();
					},
					locked: false,
					async content(event, trigger, player) {
						const { targets } = event;
						game.log(targets, "成为", trigger.card, "的额外目标");
						trigger.targets.addArray(targets);
					},
					mod: {
						inRange(from, to) {
							const list = from.getStorage("xinxhjsbshibian_effect");
							if (!list.length) {
								return;
							}
							if (
								list.some(current => {
									if (current._isInShibian) {
										return false;
									}
									current._isInShibian = true;
									const bool = current.inRange(to);
									delete current._isInShibian;
									return bool;
								})
							) {
								return true;
							}
						},
					},
				},
			},
		},
		xinxhjsbbibu: {
			audio: 'dcsbbibu',
			trigger: {
				global: ["useCardToTarget", "useCardAfter"],
			},
			filter(event, player) {
				if (event.card.name != "sha" && get.type(event.card) != "trick") {
					return false;
				}
				const target = event.name == "useCard" ? event.player : event.target;
				if (target != player.getNext() && target != player.getPrevious()) {
					return false;
				}
				if (event.name == "useCard") {
					return target.getHistory("useCard", evt => evt.card.name == "sha" || get.type(evt.card) == "trick").indexOf(event) == 0;
				}
				if (event.targets?.length != 1) {
					return false;
				}
				const evts = game.getGlobalHistory(
					"useCard",
					evt => (evt.card.name == "sha" || get.type(evt.card) == "trick") && evt.targets?.includes(target) && evt.player != player
				);
				return evts.indexOf(event.getParent()) == 0;
			},
			logTarget(event, player) {
				return event.name == "useCard" ? event.player : event.target;
			},
			prompt2(event, player) {
				if (event.name == "useCard") {
					return `摸一张牌并视为使用${get.translation(event.card)}`;
				}
				return `摸一张牌并令${get.translation(event.card)}无效`;
			},
			check(event, player) {
				const { card, player: source, target } = event;
				if (event.name == "useCard") {
					return player.getUseValue(get.autoViewAs({ name: card.name, nature: card.nature, isCard: true })) > 0;
				}
				return get.effect(target, card, source, player) < 0;
			},
			async content(event, trigger, player) {
				await player.draw();
				if (trigger.name == "useCard") {
					const card = get.autoViewAs({ name: trigger.card.name, nature: trigger.card.nature, isCard: true });
					if (player.hasUseTarget(card) || (get.info(card).notarget && lib.filter.cardEnabled(card, player))) {
						await player.chooseUseTarget(card, false, true);
					}
					return;
				}
				game.log(trigger.card, "被无效了");
				const evt = trigger.getParent();
				evt.all_excluded = true;
			},
		},
		xinxhjfuhan: {
			audio: "fuhan",
			trigger: { player: "phaseZhunbeiBegin" },
			/* limited: true,
			skillAnimation: true,
			animationColor: "orange", */
			filter(event, player) {
				return player.countMark("xinxhjfanghun") > 0;
			},
			check: () => true,
			async content(event, trigger, player) {
				const num = player.countMark("xinxhjfanghun");
				if (num) {
					//await player.draw(num);
					await player.draw(2);
				}
				player.removeMark("xinxhjfanghun", num);
				let list;
				if (_status.characterlist) {
					list = [];
					for (let i = 0; i < _status.characterlist.length; i++) {
						const name = _status.characterlist[i];
						//if (lib.character[name][1] == "shu") {
						if (["shu", 'wu', 'wei'].includes(lib.character[name][1])) {
							list.push(name);
						}
					}
				} else if (_status.connectMode) {
					list = get.charactersOL(function (i) {
						return lib.character[i][1] != "shu";
					});
				} else {
					list = get.gainableCharacters(function (info) {
						//return info[1] == "shu";
						return ["shu", 'wu', 'wei'].includes(info[1]);
					});
				}
				const players = game.players.concat(game.dead);
				for (let i = 0; i < players.length; i++) {
					list.remove(players[i].name);
					list.remove(players[i].name1);
					list.remove(players[i].name2);
				}
				list.remove("zhaoyun");
				list.remove("re_zhaoyun");
				list.remove("ol_zhaoyun");
				list = list.filter(name => {
					const isXinx1 = lib.characterPack['xinx1'] && lib.characterPack['xinx1'][name];
					const isXinxfenyu = lib.characterPack['xinxfenyu'] && lib.characterPack['xinxfenyu'][name];
					const isXinxhuaijiu = lib.characterPack['xinxhuaijiu'] && lib.characterPack['xinxhuaijiu'][name];
					return !isXinx1 && !isXinxfenyu && !isXinxhuaijiu;
				});
				list = list.randomGets(Math.max(4, game.countPlayer()));
				if (!list.length) {
					return;
				}
				let num2 = 0,
					skillMap = {};
				for (const i of list) {
					const skills = (lib.character[i][3] || []).filter(skill => {
						if (player.hasSkill(skill, null, null, false)) {
							return false;
						}
						const info = get.info(skill);
						return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
					});
					if (skills.length > num2) {
						num2 = skills.length;
					}
					skillMap[i] = skills;
				}
				if (num2 == 0) {
					return;
				}
				const result = await player
					.chooseButton(
						[
							[["扶汉：请选择获得至多两个技能"], "addNewRow"],
							[
								dialog => {
									const { list, skillMap } = get.event();
									//算出来需要多少列，最多八列
									const num = 8;
									const column = Math.min(list.length, num);
									//重新创建一个容器，不然css之后会导致dialog.content内的其他元素也加入到布局中
									const contentx = ui.create.div(".content", dialog.content);
									contentx.css({
										display: "grid",
										gridTemplateColumns: `repeat(${column}, 1fr)`,
										width: "fit-content",
										margin: "0 auto",
										justifyItems: "center",
										alignItems: "start",
									});
									//一个一个塞进去
									for (const i of list) {
										const div = ui.create.div(".buttons", contentx);
										const button = ui.create.button(i, "character", div);
										const skills = skillMap[i];
										//让角色和技能按钮水平居中垂直排列
										div.css({
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
										});
										//角色因为不是可选按钮所以需要调整一下透明度
										button.style.setProperty("opacity", "1", "important");
										if (skills.length) {
											//创建技能按钮
											const buttons = ui.create.buttons(
												skills.map(i => [i, get.translation(i)]),
												"tdnodes",
												div
											);
											//丢进可选按钮中
											dialog.buttons = dialog.buttons.concat(buttons);
										}
									}
								},
								"handle",
							],
						],
						[1, 2],
						true
					)
					.set("list", list.slice())
					//.set("list2", list.slice().add("xinxhjfuhan_kongwei"))
					//.set("num2", num2)
					.set("skillMap", skillMap)
					.set("ai", button => {
						const skill = button.link;
						return get.skillRank(skill, "inout");
					})
					.forResult();
				if (result?.links?.length) {
					await player.addSkills(result.links);
				}
				/* if (player.isMinHp()) {
					await player.recover();
				} */
			},
			ai: {
				combo: "rexinxhjfanghun",
			},
		},
		rexinxhjfanghun: {
			mod: {
				aiValue(player, card, num) {
					if (card.name != "sha" && card.name != "shan") {
						return;
					}
					var geti = function () {
						var cards = player.getCards("hs", function (card) {
							return card.name == "sha" || card.name == "shan";
						});
						if (cards.includes(card)) {
							return cards.indexOf(card);
						}
						return cards.length;
					};
					return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
				},
			},
			locked: false,
			audio: "fanghun",
			inherit: "xinxhjfanghun",
			trigger: {
				player: "useCard",
				target: "useCardToTargeted",
			},
		},
		xinxhjfanghun: {
			hiddenCard(player, name) {
				if (!player.storage.xinxhjfanghun || player.storage.xinxhjfanghun <= 0) {
					return false;
				}
				if (name == "tao") {
					return player.countCards("hs", "jiu") > 0;
				}
				if (name == "jiu") {
					return player.countCards("hs", "tao") > 0;
				}
				return false;
			},
			audio: 2,
			marktext: "影",
			intro: {
				content: "mark",
				name: "梅影",
			},
			trigger: {
				source: "damageSource",
				player: "damageEnd",
			},
			forced: true,
			locked: false,
			filter(event) {
				return event.card && get.is.damageCard(event.card);
			},
			content() {
				player.addMark("xinxhjfanghun", trigger.num || 1);
				player.addMark("xinxhjfanghun2", trigger.num || 1, false);
			},
			derivation: "xinxhjfanghun_sha",
			group: ["xinxhjfanghun_sha", "xinxhjfanghun_draw"],
			subSkill: {
				draw: {
					trigger: { player: ["useCardAfter", "respondAfter"] },
					forced: true,
					popup: false,
					filter(event) {
						return event.skill == "xinxhjfanghun_sha" || event.skill == "xinxhjfanghun_shan";
					},
					content() {
						player.draw();
					},
				},
				sha: {
					audio: "xinxhjfanghun",
					inherit: "ollongdan",
					enable: ["chooseToUse", "chooseToRespond"],
					prompt: "弃置一枚【梅影】标记，将杀当做闪，或将闪当做杀，或将桃当做酒，或将酒当做桃使用或打出",
					filter(event, player) {
						return player.hasMark("xinxhjfanghun") && get.info("ollongdan").filter(event, player);
					},
					onrespond() {
						return this.onuse.apply(this, arguments);
					},
					onuse(result, player) {
						player.removeMark("xinxhjfanghun", 1);
					},
					ai: {
						respondSha: true,
						respondShan: true,
						skillTagFilter(player, tag) {
							if (!player.hasMark("xinxhjfanghun")) {
								return false;
							}
							return get.info("ollongdan").ai.skillTagFilter(player, tag);
						},
						order(item, player) {
							if (!player || !player.storage) {
								player = _status.event.player;
								if (!player || !player.storage) {
									return 0;
								}
								if (
									Object.keys(player.storage).some(i => {
										return typeof i == "string" && i.indexOf("fuhan") != -1;
									})
								) {
									return 4;
								}
								return 1;
							}
							const awakened = Object.keys(player.storage).some(i => typeof i == "string" && i.indexOf("fuhan") != -1);
							if (_status.event.type == "phase") {
								var max = 0;
								var list = ["sha", "tao", "jiu"];
								var map = { sha: "shan", tao: "jiu", jiu: "tao" };
								for (var i = 0; i < list.length; i++) {
									var name = list[i];
									if (player.countCards("hs", map[name]) > (name == "jiu" ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
										var temp = get.order({ name: name });
										if (temp > max) {
											max = temp;
										}
									}
								}
								if (max > 0) {
									max += awakened ? 0.3 : -0.3;
								}
								return max;
							}
							return awakened ? 4 : 1;
						},
					},
				},
			},
		},
		//吴质
		xinxhjweiti: {
			audio: 'dcweiti',
			enable: "phaseUse",
			usable: 1,
			//filterTarget: true,
			filterTarget: lib.filter.notMe,
			async content(event, trigger, player) {
				const target = event.target;
				const targets = [player, target];
				const result = await player
					.chooseControl("受到伤害", "回复体力")
					.set("prompt", "伪涕：请选择一项")
					.set("choiceList", [`与${get.translation(target)}各受到1点伤害，然后获得两张点数与你所有手牌均不同的牌`, `增加1点体力上限并回复1点体力，然后与${get.translation(target)}弃置两张点数不相同的牌`])
					.set("ai", () => {
						const player = get.player();
						let eff1 = 3 + get.recoverEffect(player, player) - Math.min(2, player.countCards("he")),
							eff2 = 1 + get.damageEffect(player, target, player);
						return eff1 > eff2 ? "回复体力" : "受到伤害";
					})
					.forResult();
				if (result.control == "受到伤害") {
					for (let target of targets) {
						await target.damage();
					}
					const nums = player.getCards("h").map(card => get.number(card, player));
					let cards = [];
					while (cards.length < 2) {
						const card = get.cardPile2(card => !nums.includes(get.number(card, player)) && !cards.includes(card));
						if (card) {
							cards.push(card);
						} else {
							break;
						}
					}
					if (cards.length) {
						await player.gain(cards, "gain2");
					}
				} else {
					await player.gainMaxHp();
					await player.recover();
					const num = Math.min(
						2,
						player
							.getCards("h")
							.map(card => get.number(card, target))
							.toUniqued().length
					);
					for (let target of targets) {
						await target
							.chooseToDiscard(num, true, `弃置${get.cnNumber(num)}张点数不同的牌`, "he")
							.set("filterCard", card => {
								const player = get.player();
								return !ui.selected.cards?.some(cardx => get.number(cardx, player) == get.number(card, player));
							})
							.set("complexCard", true);
					}
				}
			},
			ai: {
				order: 1,
				result: {
					target: -1,
				},
			},
		},
		xinxhjyuanrong: {
			audio: 'dcyuanrong',
			trigger: {
				global: "phaseEnd",
			},
			filter(event, player) {
				if (!player.getHistory("lose").length) {
					return false;
				}
				/* if (![player.getPrevious(), player].includes(event.player)) {
					return false;
				} */
				if (player !== event.player) {
					return false;
				}
				let cardsLost = [];
				game.getGlobalHistory("cardMove", evt => {
					if (evt.name === "cardsDiscard" || (evt.name === "lose" && evt.position === ui.discardPile)) {
						cardsLost.addArray(evt.cards);
					}
				});
				cardsLost = cardsLost.filterInD("d");
				//return cardsLost?.some(card => get.color(card) == "black");
				return cardsLost;
			},
			async cost(event, trigger, player) {
				let cardsLost = [];
				game.getGlobalHistory("cardMove", evt => {
					if (evt.name === "cardsDiscard" || (evt.name === "lose" && evt.position === ui.discardPile)) {
						cardsLost.addArray(evt.cards);
					}
				});
				//cardsLost = cardsLost.filterInD("d").filter(card => get.color(card) == "black");
				cardsLost = cardsLost.filterInD("d");
				let cards = get.inpileVCardList(info => {
					if (get.type(info[2]) != "trick") {
						return false;
					}
					return cardsLost.some(card => {
						const cardx = get.autoViewAs({ name: info[2] }, [card]);
						return player.hasUseTarget(cardx, true, true);
					});
				});
				if (!cards.length) {
					return;
				}
				const result = await player
					.chooseButton([`###${get.prompt(event.skill)}###弃牌堆`, cardsLost, "###可转化锦囊牌###", [cards, "vcard"]], 2)
					.set("filterButton", button => {
						if (!Array.isArray(button.link)) {
							return ui.selected.buttons.length == 0;
						}
						if (ui.selected.buttons.length != 1) {
							return false;
						}
						const cardx = get.autoViewAs(
							{ name: button.link[2] },
							ui.selected.buttons.map(i => i.link)
						);
						return get.player().hasUseTarget(cardx, true, true) && ui.selected.buttons.length;
					})
					.set("complexSelect", true)
					.set("ai", button => {
						if (ui.selected.buttons.length == 0) {
							return Math.random();
						}
						if (!Array.isArray(button.link)) {
							return 0;
						}
						const cardx = get.autoViewAs({ name: button.link[2] });
						return get.player().getUseValue(cardx, true, true);
					})
					.forResult();
				event.result = {
					bool: result.bool,
					cards: [result?.links?.[0]],
					cost_data: result?.links?.[1][2],
				};
			},
			async content(event, trigger, player) {
				const { cards, cost_data: name } = event;
				const card = get.autoViewAs({ name: name }, cards);
				if (player.hasUseTarget(card, true, true)) {
					await player.chooseUseTarget(card, true, cards);
				}
				let cardsLost = [];
				game.getGlobalHistory("cardMove", evt => {
					if (evt.name === "cardsDiscard" || (evt.name === "lose" && evt.position === ui.discardPile)) {
						cardsLost.addArray(evt.cards);
					}
				});
				cardsLost = cardsLost.filterInD("d").filter(card => get.color(card) == "red");
				let cardxs = get.inpileVCardList(info => {
					if (get.type(info[2]) != "basic") {
						return false;
					}
					return cardsLost.some(card => {
						const cardx = get.autoViewAs({ name: info[2], nature: info[3] }, [card]);
						return player.hasUseTarget(cardx, true, true);
					});
				});
				if (!cardxs.length) {
					return;
				}
				let bcard, btarget;
				if (cardsLost.length == 1 && cardxs.length == 1) {
					bcard = cardsLost;
					btarget = cardxs[0];
				} else {
					const result = await player
						.chooseButton([`###圆融：将一张红色牌当基本牌使用###弃牌堆`, cardsLost, "###可转化基本牌###", [cardxs, "vcard"]], 2, true)
						.set("filterButton", button => {
							if (!Array.isArray(button.link)) {
								return ui.selected.buttons.length == 0;
							}
							if (ui.selected.buttons.length != 1) {
								return false;
							}
							const cardx = get.autoViewAs(
								{ name: button.link[2], nature: button.link[3] },
								ui.selected.buttons.map(i => i.link)
							);
							return get.player().hasUseTarget(cardx, true, true) && ui.selected.buttons.length;
						})
						.set("complexSelect", true)
						.set("ai", button => {
							if (ui.selected.buttons.length == 0) {
								return Math.random();
							}
							if (!Array.isArray(button.link)) {
								return 0;
							}
							const cardx = get.autoViewAs({ name: button.link[2] });
							return get.player().getUseValue(cardx, true, true);
						})
						.forResult();
					if (!result.bool) {
						return;
					}
					bcard = [result.links[0]];
					btarget = result.links[1];
				}
				const cardx = get.autoViewAs({ name: btarget[2], nature: btarget[3] }, bcard);
				if (player.hasUseTarget(cardx, true, true)) {
					await player.chooseUseTarget(cardx, true, bcard);
				}
			},
		},
		//族钟会
		xinxhjyuzhi: {
			/* init(player) {
				player.addSkill("xinxhjyuzhi_effect");
			}, */
			mod: {
				aiOrder(player, card, num) {
					if (card.name == "tao") {
						return num / 114514;
					}
				},
				ignoredHandcard(card, player) {
					if (card.hasGaintag("xinxhjyuzhi")) {
						return true;
					}
				},
				cardDiscardable(card, player, name) {
					if (name == 'phaseDiscard' && card.hasGaintag("xinxhjyuzhi")) {
						return false;
					}
				},
			},
			audio: 'clanyuzhi',
			trigger: { global: ["roundStart", "roundEnd"] },
			filter(event, player, name) {
				if (name === "roundStart") {
					return player.countCards("h");
				}
				if (player.hasCard(card => card.hasGaintag("xinxhjyuzhi") && lib.filter.cardDiscardable(card, player), "h")) {
					return true;
				}
				const num1 = player.getRoundHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent(2).name == "xinxhjyuzhi").reduce((sum, evt) => sum + evt.cards.length, 0);
				const num2 = player.getRoundHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent(2).name == "xinxhjyuzhi", 1).reduce((sum, evt) => sum + evt.cards.length, 0);
				//const num3 = player.getRoundHistory("useCard").length;
				return (num1 > 0 && num2 > 0 && num1 > num2);
				//|| num1 > num3
			},
			forced: true,
			async content(event, trigger, player) {
				const name = event.triggername;
				const num1 = player.getRoundHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent(2).name == "xinxhjyuzhi", name === "roundStart" ? 1 : 0).reduce((sum, evt) => sum + evt.cards.length, 0);
				switch (name) {
					case "roundStart": {
						const result = await player
							.chooseCard(
								"迂志：请展示一张手牌",
								"摸此牌牌名字数的牌，以此展示和获得的牌不计入手牌上限。若上一轮你以此法摸的牌数小于此牌牌名字数，则你受到1点雷属性伤害。",
								(card, player) => {
									const num = get.cardNameLength(card);
									return typeof num == "number" && num > 0;
								},
								true
							)
							.set("ai", card => {
								const { dying, num } = get.event();
								if (dying && num > 0 && get.cardNameLength(card) > num) {
									return 1 / get.cardNameLength(card); //怂
								}
								return get.cardNameLength(card); //勇
							})
							.set(
								"dying",
								player.hp +
								player.countCards("hs", {
									name: ["tao", "jiu"],
								}) <
								1
							)
							.set("num", num1)
							.forResult();
						if (result?.bool && result.cards?.length) {
							await player.showCards(result.cards, get.translation(player) + "发动了【迂志】");
							player.addGaintag(result.cards, "xinxhjyuzhi");
							await player.draw(get.cardNameLength(result.cards[0])).set('gaintag', ["xinxhjyuzhi"]);
							player.storage.xinxhjyuzhi_mark = get.cardNameLength(result.cards[0]);
							player.addTempSkill("xinxhjyuzhi_mark", "roundStart");
						}
						break;
					}
					case "roundEnd": {
						const cards = player.getCards("h", card => card.hasGaintag("xinxhjyuzhi") && lib.filter.cardDiscardable(card, player));
						/* if (cards.length) {
							player.removeGaintag("xinxhjyuzhi");
						} */
						const num2 = player.getRoundHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent(2).name == "xinxhjyuzhi", 1).reduce((sum, evt) => sum + evt.cards.length, 0);
						const num3 = player.getRoundHistory("useCard").length;
						if ((num1 > 0 && num2 > 0 && num1 > num2)) {
							//let result;
							if (num2 > 0 && num1 > num2) {
								game.log(player, "的野心已开始膨胀", "#y(" + num1 + "张>" + num2 + "张)");
							}
							/* if (num1 > num3) {
								game.log(player, "的行动未达到野心", "#y(" + num3 + "张<" + num1 + "张)");
							} */
							await player.damage(1, "thunder");
							/* if (player.hasSkill("clanbaozu", null, false, false)) {
								result = await player.chooseBool("迂志：是否失去〖保族〗？", "若选择“否”，则你受到1点雷属性伤害").set("choice", player.awakenedSkills.includes("clanbaozu")).forResult();
							} else {
								result = { bool: false };
							}
							if (result?.bool) {
								await player.removeSkills("clanbaozu");
							} else {
								await player.damage(1, "thunder");
							} */
						}
					}
				}
			},
			ai: {
				threaten: 3,
				nokeep: true,
			},
			onremove(player, skill) {
				player.removeGaintag(skill);
				player.removeSkill(skill + "_mark");
			},
			subSkill: {
				mark: {
					charlotte: true,
					onremove: true,
					mark: true,
					intro: { content: "本轮野心：#张" },
				},
			},
		},
		xinxhjxieshu: {
			init(player) {
				player.addSkill("xinxhjxieshu_effect");
			},
			audio: 'clanxieshu',
			trigger: { player: "damageEnd", source: "damageSource" },
			filter(event, player) {
				if (!event.card) {
					return false;
				}
				let num = get.cardNameLength(event.card);
				return typeof num == "number" && num > 0 && player.countCards("he") > 0;
			},
			async cost(event, trigger, player) {
				let num = get.cardNameLength(trigger.card),
					str = "";
				if (player.getDamagedHp() > 0) {
					str += "，然后摸" + get.cnNumber(player.getDamagedHp()) + "张牌";
				}
				event.result = await player
					.chooseToDiscard(get.prompt(event.skill), "弃置" + get.cnNumber(num) + "张牌" + str, "he", num, "chooseonly")
					.set("ai", (card) => {
						let player = _status.event.player;
						let num = _status.event.num;
						let num2 = player.getDamagedHp();
						if (!num2) {
							return 0;
						}
						if (num < num2) {
							return 8 - get.value(card);
						}
						if (num == num2 || num2 >= 2 + num - num2) {
							return lib.skill.zhiheng.check(card);
						}
						return 0;
					})
					.set("num", num)
					//.set("logSkill", "xinxhjxieshu")
					.forResult();
			},
			//popup: false,
			async content(event, trigger, player) {
				await player.discard(event.cards);
				//await player.link(true);
				if (player.getDamagedHp() > 0) {
					let result = await player.draw(player.getDamagedHp()).set('gaintag', ["xinxhjxieshu_effect"]).forResult();
					/* if (result?.bool && result.cards?.length) {
						result.cards.forEach(card => card.classList.add('silver-flowing-card'));
					} */
				}
				/* if (
					game.getGlobalHistory("everything", evt => {
						return evt.name == "dying";
					}).length
				) {
					player.tempBanSkill("xinxhjxieshu");
				} */
			},
			ai: { threaten: 3 },
			subSkill: {
				effect: {
					charlotte: true,
					onremove(player) {
						player.removeGaintag("xinxhjxieshu_effect");
					},
					trigger: {
						player: "useCard1",
					},
					filter(event, player) {
						return (
							event.addCount !== false &&
							player.hasHistory("lose", evt => {
								if (evt.getParent() != event) {
									return false;
								}
								return Object.values(evt.gaintag_map).flat().includes("xinxhjxieshu_effect");
							})
						);
					},
					async cost(event, trigger, player) {
						trigger.addCount = false;
						const stat = player.getStat().card,
							name = trigger.card.name;
						if (typeof stat[name] === "number") {
							stat[name]--;
						}
					},
					name: "<span style='text-shadow:rgba(0, 183, 255, 1) 0 0 2px, rgba(0, 183, 255, 1) 0 0 2px, rgba(0, 183, 255, 1) 0 0 2px, rgba(0, 183, 255, 1) 0 0 2px, black 0 0 1px'>挟术</span>",
					mod: {
						targetInRange(card, player, target) {
							if (get.suit(card) == "unsure") {
								return true;
							}
							if (!card.cards) {
								return;
							}
							for (var i of card.cards) {
								if (i.hasGaintag("xinxhjxieshu_effect")) {
									return true;
								}
							}
						},
						cardUsable(card, player, num) {
							if (get.suit(card) == "unsure") {
								return Infinity;
							}
							if (!card.cards) {
								return;
							}
							for (var i of card.cards) {
								if (i.hasGaintag("xinxhjxieshu_effect")) {
									return Infinity;
								}
							}
						},
					},
				},
			}
		},
		xinxhjbaozu: {
			audio: "ext:永夜之境/audio:6",
			logAudio: index => "ext:永夜之境/audio/xinxhjbaozu" + get.rand(1, 3) + ".mp3",
			trigger: { global: "dying" },
			limited: true,
			skillAnimation: true,
			animationColor: "water",
			filter(event, player) {
				return (event.player == player || event.player.hasClan("颍川钟氏")) && event.player.hp <= 0;
			},
			logTarget: "player",
			check(event, player) {
				return lib.skill.wanlan.check(event, player);
			},
			async content(event, trigger, player) {
				await player.awakenSkill(event.name);
				player.addSkill('xinxhjbaozu_sunben');
				//await trigger.player.link(true);
				await trigger.player.recoverTo(1);
			},
			subSkill: {
				clan_zhonghui: { audio: 6 },
				sunben: {
					charlotte: true,
					trigger: {
						global: "die",
					},
					forced: true,
					nopop: true,
					filter(event, player, name) {
						return event.player != player;
					},
					async content(event, trigger, player) {
						game.playAudio("../extension/永夜之境/audio/", 'xinxhjbaozu' + [get.rand(4, 6)] + '.mp3');
						player.restoreSkill('xinxhjbaozu');
						game.log(player, "重置了技能", "#g【保族】");
					},
				}

			},
		},
		// 谋张辽
		xinxhjtuxi: {
			audio: 'sbtuxi',
			trigger: {
				player: "gainAfter",
				global: "loseAsyncAfter",
			},
			filter(event, player) {
				if (player != _status.currentPhase || event.getParent("xinxhjtuxi").player == player) {
					return false;
				}
				return event.getg(player).length;
			},
			/* get usable() {
				return 2;
			}, */
			async cost(event, trigger, player) {
				const cards = trigger.getg(player).filter(i => get.owner(i) == player);
				const htargets = game.filterPlayer(current => {
					return current != player && current.countCards("hej");
				});
				if (htargets.length) {
					event.result = await player
						.chooseCard(
							get.prompt(event.name.slice(0, -5)),
							`<div class="text center">移出获得数张牌，然后获得至多等量名其他角色的各一张牌</div>`,
							//card => get.event().cards.includes(card),
							'he',
							[1, cards.length],
							"allowChooseAll"
						)
						.set("ai", card => {
							const player = get.player();
							const targets = game.filterPlayer(
								current =>
									player != current &&
									current.countGainableCards(player, "he") &&
									get.effect(current, { name: "shunshou_copy2" }, player, player) > 0
							);
							if (ui.selected.cards.length > targets.length) {
								return 0;
							}
							return 6.5 - get.value(card);
						})
						.set("cards", cards)
						.forResult();
				}
			},
			async content(event, trigger, player) {
				const { cards } = event,
					num = cards.length;
				//await player.loseToDiscardpile(cards);
				await player.addToExpansion(cards, "gain2").set("gaintag", ["xinxhjtuxi"]);
				if (!game.hasPlayer(current => player != current && current.countGainableCards(player, "he"))) {
					return;
				}
				const { bool, targets } = await player
					.chooseTarget(
						`获得至多${get.cnNumber(num)}名其他角色的各一张牌`,
						(card, player, target) => {
							return player != target && target.countGainableCards(player, "he");
						},
						[1, num],
						true
					)
					.set("ai", target => {
						const player = get.player();
						return get.effect(target, { name: "shunshou_copy2" }, player, player);
					})
					.forResult();
				if (bool) {
					await player.gainMultiple(targets.sortBySeat(), "he");
				}
			},
			marktext: "🔪",
			intro: {
				markcount: "expansion",
				mark(dialog, storage, player) {
					const cards = player.getExpansions("xinxhjtuxi");
					dialog.css({ width: "50%" });
					if (get.is.phoneLayout()) {
						dialog.classList.add("fullheight");
					}
					dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🎴移出的牌</div>');
					if (cards.length && player.isUnderControl(true)) {
						dialog.addAuto(cards);
					} else {
						dialog.addText(`<div class="text center" style="opacity:0.6">共有${get.cnNumber(cards.length)}张牌</div>`);
					}
				},
			},
		},
		xinxhjdengfeng: {
			audio: 'sbdengfeng',
			trigger: {
				player: "phaseZhunbeiBegin",
			},
			filter(event, player) {
				return game.hasPlayer(current => player != current);
			},
			async cost(event, trigger, player) {
				const { bool, targets, links } = await player
					.chooseButtonTarget({
						createDialog: [
							`###${get.prompt(event.skill)}###选择一名其他角色并执行一项`,
							[
								[
									["equip", "获得一名其他角色装备区里的至多两张牌"],
									["sha", "获得牌堆里的一张【杀】"],
									["gain", "获得你的一张移出牌"],
									["all", "背水！失去1点体力并执行所有选项"],
								],
								"textbutton",
							],
						],
						complexSelect: true,
						filterButton(button) {
							/* if (
								!['sha'].includes(button.link) &&
								!game.hasPlayer(current => {
									return current != get.player() && current.countCards("e");
								})
							) {
								return false;
							}
							if (
								button.link == "gain"  
							) {
								return player.countCards("xs", card => !card._cardid) > 0;
							}
							return true; */
							const player = get.player();
							const canEquip = game.hasPlayer(current => current != player && current.countCards("e") > 0);
							const canSha = true;
							const canGain = player.countCards("xs", card => !card._cardid) > 0;
							if (button.link === "equip") return canEquip;
							if (button.link === "sha") return canSha;
							if (button.link === "gain") return canGain;
							if (button.link === "all") {
								let validCount = 0;
								if (canEquip) validCount++;
								if (canSha) validCount++;
								if (canGain) validCount++;
								return validCount >= 2;
							}
							return false;
						},
						filterTarget(card, player, target) {
							/* if (ui.selected.buttons[0]?.link != "sha") {
								return target.countCards("e") && target != player;
							}
							return target != player; */
							if (target === player) { return false; }
							const link = ui.selected.buttons[0]?.link;
							if (link === "equip") {
								return target.countCards("e") > 0;
							}
							if (link === "all") {
								const anyHasEquip = game.hasPlayer(current => current != player && current.countCards("e") > 0);
								if (anyHasEquip) {
									return target.countCards("e") > 0;
								}
								return true;
							}
							return true;
						},
						ai1(button) {
							const { player } = get.event();
							const bool1 = game.hasPlayer(current => {
								const es = current.getCards("e"),
									att = get.attitude(player, current);
								return (
									current != player &&
									es.some(card => {
										if (att > 0) {
											return get.equipValue(card, current) <= 4;
										}
										return get.equipValue(card, current) > 7;
									})
								);
							});
							let num = 0;
							if (bool1 && ["all", "equip"].includes(button.link)) {
								num++;
							}
							const bool2 = !player.countCards("hs", { name: "sha" }) || player.hasSkill("xinxhjtuxi");
							if (bool2 && ["all", "sha", 'gain'].includes(button.link)) {
								num++;
							}
							if (player.getHp() <= 2 && get.effect(player, { name: "losehp" }, player, player) <= 0) {
								if (button.link == "all") {
									num = 0;
								}
							}
							return num;
						},
						ai2(target) {
							const player = get.player();
							const att = get.attitude(player, target);
							const es = target.getCards("e");
							if (
								(es.some(card => get.equipValue(card, target) <= 4) && att > 0) ||
								(es.some(card => get.equipValue(card, target) > 7) && att < 0)
							) {
								return 10;
							}
							return 1;
						},
					})
					.forResult();
				event.result = {
					bool: bool,
					targets: targets,
					cost_data: links,
				};
			},
			async content(event, trigger, player) {
				const {
					cost_data: [control],
					targets: [target],
				} = event;
				if (["equip", "all"].includes(control) && target.countCards("e")) {
					const { cards } = await player
						.choosePlayerCard(target, true, "e", `选择${get.translation(target)}的至多两张装备牌获得之`, [1, 2])
						.forResult();
					if (cards?.length) {
						await player.gain(cards, "gain2");
					}
				}
				if (["sha", "all"].includes(control)) {
					const card = get.cardPile2(card => card.name == "sha");
					if (card) {
						await player.gain(card, "gain2");
					}
				}
				if (["gain", "all"].includes(control)) {
					const cards = player.getCards("xs").filter(card => !card._cardid);
					const result = await player.chooseButton(['登锋：选择获得一张移出牌', cards])
						.set('ai', button => {
							return get.value(button.link, get.event().player);
						}).forResult();
					if (result?.bool) {
						await player.gain(result.links, 'gain2');
					}
				}
				if (control == "all") {
					await player.loseHp();
				}
			},
		},
		//闪张辽
		xinxhjzhengbing: {
			audio: "jsrgzhengbing",
			enable: "phaseUse",
			usable: 3,
			initGroup: "qun",
			filter(event, player) {
				return player.countCards("he");
			},
			filterCard: lib.filter.cardRecastable,
			check(card) {
				var player = _status.event.player,
					val = 5 + ['sha', 'tao'].includes(get.name(card)) * 1.5;
				if (player.needsToDiscard() > 2 && get.name(card) == "sha" && player.countCards("hs", "shan") > 1) {
					val += 0.5;
				}
				return val - get.value(card);
			},
			position: "he",
			lose: false,
			discard: false,
			delay: false,
			async content(event, trigger, player) {
				const { cards, name } = event;
				await player.recast(cards);
				let type;
				switch (get.name(cards[0])) {
					case "sha":
						type = "sha";
						player.addSkill("xinxhjzhengbing_sha");
						player.addMark("xinxhjzhengbing_sha", 1, false);
						break;
					case "shan":
						type = "shan";
						await player.draw(2);
						break;
					case "tao":
					case "jiu":
						type = "tao/jiu";
						player.addTempSkill("xinxhjzhengbing_dianjun", { global: ["phaseAfter", "phaseBeforeStart"] });
						break;
				}
				if (type) {
					player.getHistory("custom").push({ skill: name, type });
				}
				if (
					player
						.getAllHistory("custom", evt => {
							return evt.skill == name;
						})
						.map(evt => evt.type)
						.toUniqued().length >= 3
				) {
					await player.changeGroup("wei");
				}
			},
			ai: {
				order: 7,
				result: { player: 1 },
			},
			subSkill: {
				dianjun: {
					audio: "jsrgzhengbing",
					charlotte: true,
					trigger: { player: "phaseEnd" },
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						trigger.phaseList.splice(trigger.num, 0, `phaseUse|${event.name}`);
					},
				},
				sha: {
					markimage: "image/card/handcard.png",
					charlotte: true,
					onremove: true,
					trigger: {
						player: "phaseDrawBegin2",
					},
					silent: true,
					filter(event, player) {
						return !event.numFixed && player.countMark("xinxhjzhengbing_sha");
					},
					content() {
						trigger.num += player.countMark("xinxhjzhengbing_sha");
					},
					mod: {
						maxHandcard(player, num) {
							return num + player.countMark("xinxhjzhengbing_sha");
						},
					},
					intro: {
						content: "手牌上限、额定摸牌数+#",
					},
				},
			},
		},
		xinxhjtuwei: {
			audio: 'jsrgtuwei',
			trigger: {
				player: "phaseUseBegin",
			},
			filter(event, player) {
				return (
					player.group == "wei" &&
					game.hasPlayer(current => {
						return player.inRange(current) && current.countGainableCards(player, "he") > 0;
					})
				);
			},
			groupSkill: "wei",
			//direct: true,
			popup: false,
			async cost(event, trigger, player) {
				const result = await player.chooseTarget(
					get.prompt("xinxhjtuwei"),
					"获得攻击范围内任意名角色的各一张牌。然后回合结束时这些角色中未受过伤害的角色依次弃置你的一张牌。",
					(card, player, target) => {
						return player.inRange(target) && target.countGainableCards(player, "he") > 0;
					},
					[1, Infinity]
				).set("ai", target => {
					let player = _status.event.player;
					return get.effect(target, { name: "shunshou_copy2" }, player, player);
				}).forResult();
				event.result = {
					bool: result?.bool,
					targets: result?.targets,
				};
			},
			async content(event, trigger, player) {
				let targets = event.targets.slice();
				targets.sortBySeat();
				player.logSkill("xinxhjtuwei", targets);
				await player.gainMultiple(targets, "he");
				player.addTempSkill("xinxhjtuwei_backfire");
				player.markAuto("xinxhjtuwei_backfire", targets);
			},
			subSkill: {
				backfire: {
					audio: "jsrgtuwei",
					trigger: {
						player: "phaseEnd",
					},
					charlotte: true,
					onremove: true,
					forced: true,
					filter(event, player) {
						return player.getStorage("xinxhjtuwei_backfire").some(target => {
							return !target.getHistory("damage").length && target.isIn();
						});
					},
					async content(event, trigger, player) {
						let targets = player.getStorage("xinxhjtuwei_backfire").filter(target => {
							return !target.getHistory("damage").length && target.isIn();
						});
						targets.sortBySeat();
						for (let target of targets) {
							if (!player.countCards("he")) break;
							if (target.isIn() && player.countGainableCards(target, "he")) {
								target.line(player);
								//await target.gainPlayerCard(player, true, "he");
								await target.discardPlayerCard(player, true, "he");
							}
						}
					},
					ai: {
						effect: {
							player(card, player, target) {
								if (player != target && get.tag(card, "damage") && target && player.getStorage("xinxhjtuwei_backfire").includes(target) && !target.getHistory("damage").length) {
									return [1, 1, 1, 0];
								}
							},
						},
					},
				},
			},
		},
		//势钟会
		xinxhjsizi: {
			audio: 'mbsizi',
			logAudio(event) {
				if (typeof event == "number") {
					return `mbsizi${event}.mp3`;
				}
				return 2;
			},
			enable: "phaseUse",
			usable: 1,
			beginMarkCount: 4,
			chargeSkill: 4,
			filter(event, player) {
				return player.countCharge() > 0;
			},
			chooseButton: {
				dialog(event, player) {
					return ui.create.dialog(get.prompt2("xinxhjsizi"), "hidden");
				},
				chooseControl(event, player) {
					const choices = Array.from(Array(player.countCharge())).map((v, i) => i + 1);
					return [...choices, "cancel2"];
				},
				check(event, player) {
					return get.rand(1, player.countCharge());
				},
				backup(result, player) {
					return {
						audio: "mbsizi",
						logAudio: () => 2,
						control: result.control,
						async content(event, trigger, player) {
							const { control: num } = get.info(event.name),
								skill = "xinxhjsizi_effect";
							player.removeCharge(num);
							//player.draw(num);
							player.addTempSkill(skill, { player: "phaseBegin" });
							player.addMark(skill, num, false);
							if (num > player.getHp()) {
								player.addTempSkill("xinxhjsizi_extra", { player: "phaseBegin" });
							}
						},
					};
				},
				prompt(result, player) {
					let prompt = `直到你的回合开始，接下来${get.cnNumber(result.control)}个回合：`;
					let list = [
						"所有角色使用【杀】造成的伤害+1",
						"每个回合结束时，本回合内使用过【杀】的其他角色失去一点体力，你摸两张牌",
						"每个回合结束时，若本回合未有角色使用过【杀】，你与当前回合角色各失去1点体力",
					];
					if (result.control <= player.hp) {
						list = list.slice(0, 2);
					}
					return `###${prompt}###${list.join("<br>")}`;
				},
			},
			group: "xinxhjsizi_init",
			subSkill: {
				backup: {},
				init: {
					audio: "mbsizi",
					logAudio: () => "mbsizi3.mp3",
					trigger: {
						player: "enterGame",
						global: "phaseBefore",
					},
					filter(event, player) {
						if (!player.countCharge(true)) {
							return false;
						}
						return event.name != "phase" || game.phaseNumber == 0;
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						const num = lib.skill.xinxhjsizi.beginMarkCount;
						player.addCharge(num);
						await game.delayx();
					},
				},
				extra: {
					charlotte: true,
				},
				effect: {
					charlotte: true,
					onremove(player, skill) {
						player.clearMark(skill, false);
						player.removeSkill("xinxhjsizi_extra");
					},
					intro: {
						content(storage, player) {
							if (!storage) {
								return "已无效果";
							}
							let list = [
								"你使用【杀】造成的伤害+1",
								"每个回合结束时，你摸两张牌且本回合内使用过【杀】的其他角色失去一点体力",
								"每个回合结束时，若本回合未有角色使用过【杀】，当前回合角色失去1点体力",
							];
							if (!player.hasSkill("xinxhjsizi_extra")) {
								list = list.slice(0, 2);
							}
							return `剩余可用${storage || "0"}个回合<br>${list.map(i => `<li>${i}`).join("<br>")}`;
						},
					},
					trigger: {
						global: ["phaseEnd", "damageBegin1"],
					},
					filter(event, player) {
						if (!player.countMark("xinxhjsizi_effect")) {
							return false;
						}
						if (event.name == "damage") {
							return event.source == player && (event.card?.name == "sha" && event.notLink());
						}
						return event.name == "phase";
					},
					async cost(event, trigger, player) {
						if (trigger.name == "phase") {
							player.removeMark(event.skill, 1, false);
							event.result = {
								bool: true,
								skill_popup: false,
							};
						} else {
							trigger.num++;
						}
					},
					async content(event, trigger, player) {
						const targets = game.filterPlayer2(
							current => {
								if (current == player) {
									return false;
								}
								return current.hasHistory("useCard", evt => evt.card?.name == "sha");
							},
							undefined,
							true
						);
						const func = async target => {
							if (!target?.isIn()) {
								return;
							}
							await target.loseHp();
						};
						player.logSkill("xinxhjsizi", null, null, null, [get.rand(4, 5)]);
						await player.draw(2);
						if (targets.length) {
							await game.doAsyncInOrder(targets, func);
						}
						if (player.hasSkill("xinxhjsizi_extra") && !targets?.length) {
							player.logSkill("xinxhjsizi", null, null, null, [get.rand(6, 7)]);
							await game.doAsyncInOrder([_status.currentPhase], func);
						}
					},
				},
			},
			ai: {
				order: 10,
				result: {
					player: 1,
				},
			},
		},
		xinxhjxiezhi: {
			audio: 'mbxiezhi',
			trigger: {
				source: "damageSource",
				player: "changeHpAfter",
				//player: "damageEnd",
			},
			filter(event, player) {
				return event.num != 0;
			},
			forced: true,
			async content(event, trigger, player) {
				const max = Math.max(player.countCharge(true), 0);
				const num = Math.min(Math.abs(trigger.num), max);
				if (num > 0) {
					player.addCharge(num);
				}
				const num2 = Math.abs(trigger.num) - num;
				if (num2 > 0) {
					const buff = `${event.name}_effect`;
					player.addSkill(buff);
					player.draw(num2);
					player.addMark(buff, 1, false);
					game.log(player, "的手牌上限和出杀次数", "#y+1");
					await game.delayx();
				}
			},
			subSkill: {
				effect: {
					charlotte: true,
					onremove: true,
					mark: true,
					marktext: '志',
					intro: {
						content: "手牌上限和出杀次数+#",
					},
					mod: {
						maxHandcard(player, num) {
							return num + player.countMark("xinxhjxiezhi_effect");
						},
						cardUsable(card, player, num) {
							if (card.name == "sha") {
								return num + player.countMark("xinxhjxiezhi_effect");
							}
						},
					},
				},
			},
		},
		xinxhjyunan: {
			audio: 'mbyunan',
			trigger: {
				source: "dying",
			},
			juexingji: true,
			initGroup: "wei",
			forced: true,
			skillAnimation: true,
			animationColor: "purple",
			/* filter(event, player) {
				return game.getRoundHistory("everything", evt => evt.name == "die").length > 0;
			}, */
			async content(event, trigger, player) {
				await player.changeGroup("qun");
				player.awakenSkill(event.name);
				const skill = "xinxhjkechang";
				if (!player.hasSkill(skill, null, null, false)) {
					await player.addSkills(skill);
				} else {
					player.setStorage(skill, true);
					player.popup(skill, "purple");
					game.log(player, "升级了技能", `#g【${get.translation(skill)}】`);
					await game.delayx();
				}
			},
			derivation: ["xinxhjkechang"],
		},
		xinxhjkechang: {
			audio: 'mbkechang',
			onremove: true,
			forced: true,
			trigger: {
				player: "useCard1",
			},
			filter(event, player) {
				if (event.card.name != "sha") {
					return false;
				}
				return player.getStorage("xinxhjkechang", false) === true;
			},
			async content(event, trigger, player) {
				trigger.directHit.addArray(game.players);
			},
			ai: {
				directHit_ai: true,
				skillTagFilter(player, tag, arg) {
					return player.getStorage("xinxhjkechang", false) && arg?.card?.name == "sha";
				},
			},
			derivation: ["xinxhjkechang_rewrite"],
			global: "xinxhjkechang_global",
			subSkill: {
				rewrite: {
					nopop: true,
				},
				global: {
					charlotte: true,
					mod: {
						targetInRange(card, player) {
							if (card.name != "sha") {
								return;
							}
							if (game.hasPlayer(current => current.hasSkill("xinxhjkechang"))) {
								return true;
							}
						},
					},
				},
			},
		},
		//骥张辽
		xinxhjchonglei: {
			audio: 'hefeichonglei',
			forced: true,
			trigger: {
				global: ["useCard", "respond"],
			},
			//usable: 1,
			filter(event, player) {
				/* if (!player.isPhaseUsing()) {
					return false;
				} */
				if (!event.respondTo || !Array.isArray(event.respondTo)) {
					return false;
				}
				if (player != event.player && player != event.respondTo[0]) {
					return false;
				}
				if (event.player == event.respondTo[0]) {
					return false;
				}
				const target = event.player == player ? event.respondTo[0] : event.player;
				return target.countGainableCards(player, "he");
			},
			logTarget(event, player) {
				if (event.player == player) {
					return event.respondTo[0];
				}
				return event.player;
			},
			async content(event, trigger, player) {
				const {
					targets: [target],
				} = event;
				await player.gainPlayerCard(target, "he", true);
			},
			global: "xinxhjchonglei_wansha",
			subSkill: {
				wansha: {
					enable: ["chooseToUse", "chooseToRespond"],
					filterCard(card, player) {
						const target = get.event()?.getParent("phaseUse", true, true)?.player;
						if (!target || !target.hasSkill("xinxhjchonglei") || target == player || player.isDying()) {
							return false;
						}
						if (target.hasSkill("xinxhjheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
							return true;
						}
						return get.name(card) != "sha";
					},
					position: "hs",
					viewAs: {
						name: "shan",
					},
					viewAsFilter(player) {
						const target = get.event()?.getParent("phaseUse", true, true)?.player;
						if (!target || !target.hasSkill("xinxhjchonglei") || target == player || player.isDying()) {
							return false;
						}
						if (
							player.countCards("hs", card => {
								if (target.hasSkill("xinxhjheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
									return true;
								}
								return get.name(card) != "sha";
							})
						) {
							return true;
						}
						return false;
					},
					prompt() {
						const target = get.event()?.getParent("phaseUse", true, true)?.player;
						if (!target || !target.hasSkill("xinxhjchonglei")) {
							return "";
						}
						if (target.hasSkill("xinxhjheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
							return "将一张手牌当作闪使用或打出";
						}
						return "将一张非【杀】手牌当作闪使用或打出";
					},
					check(card) {
						const val = get.value(card);
						if (_status.event.name == "chooseToRespond") {
							return 1 / Math.max(0.1, val);
						}
						return 5 - val;
					},
					locked: false,
					ai: {
						respondShan: true,
						skillTagFilter(player) {
							const target = get.event()?.getParent("phaseUse", true, true)?.player;
							if (!target || !target.hasSkill("xinxhjchonglei") || target == player || player.isDying()) {
								return false;
							}
							if (
								!player.countCards("hs", card => {
									if (target.hasSkill("xinxhjheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
										return true;
									}
									return get.name(card) != "sha";
								})
							) {
								return false;
							}
						},
					},
					mod: {
						cardEnabled(card, player) {
							if (get.name(card) == "shan" || player.isDying()) {
								return;
							}
							const target = get.event()?.getParent("phaseUse", true, true)?.player;
							if (!target || !target.hasSkill("xinxhjchonglei") || target == player) {
								return;
							}
							const hs = player.getCards("hs", card => {
								if (target.hasSkill("xinxhjheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
									return true;
								}
								return get.name(card) != "sha";
							});
							if ("cards" in card && Array.isArray(card.cards) && card.cards.containsSome(...hs)) {
								return false;
							}
						},
						cardRespondable(card, player) {
							if (get.name(card) == "shan" || player.isDying()) {
								return;
							}
							const target = get.event()?.getParent("phaseUse", true, true)?.player;
							if (!target || !target.hasSkill("xinxhjchonglei") || target == player) {
								return;
							}
							const hs = player.getCards("hs", card => {
								if (target.hasSkill("xinxhjheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
									return true;
								}
								return get.name(card) != "sha";
							});
							if ("cards" in card && Array.isArray(card.cards) && card.cards.containsSome(...hs)) {
								return false;
							}
						},
						cardSavable(card, player) {
							if (get.name(card) == "shan" || player.isDying()) {
								return;
							}
							const target = get.event()?.getParent("phaseUse", true, true)?.player;
							if (!target || !target.hasSkill("xinxhjchonglei") || target == player) {
								return;
							}
							const hs = player.getCards("hs", card => {
								if (target.hasSkill("xinxhjheyuzhangliao") && get.info("friendgongli").isFriendOf(target, "hefei_lidian")) {
									return true;
								}
								return get.name(card) != "sha";
							});
							if ("cards" in card && Array.isArray(card.cards) && card.cards.containsSome(...hs)) {
								return false;
							}
						},
					},
				},
			},
		},
		xinxhjdangshi: {
			audio: 'hefeidangshi',
			trigger: { player: "useCardAfter" },
			filter(event, player) {
				if (!event.targets?.length) {
					return false;
				}
				return get.is.damageCard(event.card);
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2(event.skill), (card, player, target) => {
						const trigger = get.event().getTrigger();
						return trigger.targets?.includes(target);
					})
					.set("ai", target => {
						const player = get.player();
						if (get.attitude(player, target) > 0) {
							return 0;
						}
						if (!target.countCards("he")) {
							return get.damageEffect(target, player, player);
						}
						return 10 / target.countCards("he");
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const {
					targets: [target],
					name,
				} = event;
				const getNum = (player, target) => {
					let num = target.countMark(`xinxhjdangshi_count`) + 1;
					if (player.hasSkill("xinxhjheyuzhangliao") && get.info("friendgongli").isFriendOf(player, "hefei_yuejin")) {
						num = 3;
					}
					return num;
				};
				const list = [
					["useCard", `对${get.translation(player)}使用一张${get.translation(trigger.card.name)}`],
					["discard", `弃置${get.cnNumber(getNum(player, target))}张牌`],
					["damage", `受到1点伤害`],
				];
				const canChoose = list
					.map(info => info[0])
					.filter(info => {
						switch (info) {
							case "useCard": {
								return (
									target.countCards("hs", card => {
										if (get.name(card) != trigger.card.name) {
											return false;
										}
										return target.canUse(card, player);
									}) > 0
								);
							}
							case "discard": {
								const num = getNum(player, target);
								return target.countDiscardableCards(target, "he") >= num;
							}
							default: {
								return true;
							}
						}
					});
				const result =
					canChoose.length > 1
						? await target
							.chooseButton(["荡势：请选择一项", [list, "textbutton"]], true)
							.set("filterButton", button => {
								return get.event().canChoose?.includes(button.link);
							})
							.set("ai", button => {
								const { player, getNum } = get.event(),
									trigger = get.event().getTrigger();
								if (button.link == "useCard") {
									const cards = player.getCards("hs", card => {
										if (get.name(card) != trigger.card.name) {
											return false;
										}
										return player.canUse(card, trigger.player);
									}),
										check = card => get.effect(trigger.player, card, player, player);
									return check(cards.maxBy(check));
								}
								if (button.link == "discard") {
									return get.effect(player, { name: "guohe_copy2" }, player, player) / getNum;
								}
								return get.damageEffect(player, player, player);
							})
							.set("getNum", getNum(player, target) + 1)
							.set("canChoose", canChoose)
							.forResult()
						: {
							bool: true,
							links: canChoose,
						};
				if (!result?.bool || !result.links?.length) {
					return;
				}
				const type = result.links[0],
					next = { skill: name, type: type, event: event };
				game.log(target, "选择了", `#y${list.find(info => info[0] == type)?.[1]}`);
				player.getHistory("custom").push(next);
				if (
					!player.hasHistory("custom", evt => {
						if (evt.skill != name || evt.type != type) {
							return false;
						}
						return evt.event != event;
					})
				) {
					await player.draw();
					player.addTempSkill('xinxhjdangshi_effect', 'phaseChange');
					player.addMark('xinxhjdangshi_effect', 1, false);
				}
				switch (type) {
					case "useCard": {
						await target
							.chooseToUse({
								filterCard(card, player, event) {
									if (get.itemtype(card) != "card" || get.name(card) != get.event().cardx) {
										return false;
									}
									return lib.filter.filterCard.apply(this, arguments);
								},
								prompt: `荡势：对${get.translation(player)}使用一张${get.translation(trigger.card.name)}`,
								addCount: false,
								forced: true,
								filterTarget(card, player, target) {
									if (target != get.event().sourcex) {
										return false;
									}
									return lib.filter.filterTarget.apply(this, arguments);
								},
							})
							.set("targetRequired", true)
							.set("complexTarget", true)
							.set("cardx", trigger.card.name)
							.set("sourcex", player);
						return;
					}
					case "discard": {
						const num = Math.min(target.countDiscardableCards(target, "he"), getNum(player, target));
						target.addMark(`${name}_count`, 1, false);
						if (num > 0) {
							await target.chooseToDiscard("he", true, num);
						}
						return;
					}
					default: {
						await target.damage();
						return;
					}
				}
			},
			subSkill: {
				effect: {
					charlotte: true,
					onremove: true,
					intro: {
						content: "出杀次数+#",
					},
					mod: {
						cardUsable(card, player, num) {
							if (card.name == "sha") {
								return num + player.countMark("xinxhjdangshi_effect");
							}
						},
					},
				},
			},
		},
		xinxhjheyuzhangliao: {
			audio: 'heifeiheyuzhangliao',
			locked: true,
			ai: {
				combo: ["xinxhjchonglei", "xinxhjdangshi"],
			},
		},


		//张绣
		xinxhjsbfuxi: {
			audio: "ext:永夜之境/audio:2",
			trigger: { global: "phaseUseBegin" },
			filter(event, player) {
				const target = event.player;
				if (
					!player.countCards("he") &&
					!target.countCards("he") &&
					!player.canUse(new lib.element.VCard({ name: "sha", isCard: true }), target, false)
				) {
					return false;
				}
				//return event.player != player;
				return true;
			},
			async cost(event, trigger, player) {
				const target = trigger.player,
					str = get.translation(target);
				let result;
				if (!player.countCards("he")) {
					result = await player
						.chooseBool(get.prompt(event.skill, target), "弃置" + str + "的一张牌，然后视为对其使用一张【杀】")
						.set(
							"choice",
							get.effect(target, { name: "guohe_copy2" }, player, player) +
							get.effect(target, new lib.element.VCard({ name: "sha", isCard: true }), player, player) >
							0
						)
						.forResult();
					result.index = 1;
				}
				else if (player == target && target.countCards("he")) {
					result = await player.chooseToGive(target, "是否交给" + str + "一张牌，然后摸两张牌", "he")
						.set("ai", () => true)
						.forResult();
					if (result?.bool) {
						player.logSkill('xinxhjsbfuxi');
						await player.draw(2);
					}
					return;
				}
				else if (!target.countCards("he") && !player.canUse(new lib.element.VCard({ name: "sha", isCard: true }), target, false) || player == target) {
					result = await player
						.chooseBool(get.prompt(event.skill, target), "交给" + str + "一张牌，然后摸两张牌")
						.set("choice", get.attitude(player, target) > 0 || player.hasCard(card => card.name == "du", "h"))
						.forResult();
					result.index = 0;
				} else {
					result = await player
						.chooseControl("给牌", "出杀", "cancel2")
						.set("choiceList", ["交给" + str + "一张牌，然后摸两张牌", "弃置" + str + "的一张牌，然后视为对其使用一张【杀】"])
						.set("ai", () => {
							const player = get.event().player,
								target = get.event().target;
							const num =
								get.effect(target, { name: "guohe_copy2" }, player, player) +
								get.effect(target, new lib.element.VCard({ name: "sha", isCard: true }), player, player);
							if (num <= 0 && get.attitude(player, target) < 0) {
								return "cancel2";
							}
							return get.attitude(player, target) >= 0 ? 0 : 1;
						})
						.set("target", target)
						.forResult();
					result.bool = result.control != "cancel2";
				}
				if (result.bool) {
					result.targets = [target];
					result.cost_data = result.index;
				}
				event.result = result;
			},
			async content(event, trigger, player) {
				const target = trigger.player;
				if (event.cost_data == 0) {
					await player.chooseToGive(target, "he", true);
					await player.draw(2);
				} else {
					await player.discardPlayerCard(target, "he", true);
					const sha = new lib.element.VCard({ name: "sha", isCard: true });
					if (player.canUse(sha, target, false)) {
						await player.useCard(sha, target, false);
					}
				}
			},
		},
		xinxhjsbhaoyi: {
			audio: "ext:永夜之境/audio:2",
			trigger: { player: "phaseJieshuBegin" },
			filter(event, player) {
				return lib.skill.xinxhjsbhaoyi.getCards().length;
			},
			frequent: true,
			prompt(event, player) {
				return get.prompt("xinxhjsbhaoyi") + "（可获得" + get.translation(lib.skill.xinxhjsbhaoyi.getCards()) + "）";
			},
			async content(event, trigger, player) {
				let cardx = lib.skill.xinxhjsbhaoyi.getCards();
				await player.gain(cardx, "gain2");
				cardx = cardx.filter(i => get.owner(i) == player && get.position(i) == "h");
				if (!cardx.length) {
					return;
				}
				if (_status.connectMode) {
					game.broadcastAll(() => (_status.noclearcountdown = true));
				}
				let given_map = [];
				while (
					player.hasCard(card => cardx.includes(card) && !card.hasGaintag("olsujian_given"), "h") &&
					game.hasPlayer(current => player !== current)
				) {
					const { bool, cards, targets } = await player
						.chooseCardTarget({
							filterCard(card, player) {
								return get.event().cards.includes(card) && !card.hasGaintag("olsujian_given");
							},
							selectCard: [1, Infinity],
							position: "h",
							filterTarget: lib.filter.notMe,
							prompt: "豪义：请选择要分配的卡牌和目标",
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
						.set("cards", cardx)
						.forResult();
					if (bool) {
						const target = targets[0];
						if (given_map.some(i => i[0] == target)) {
							given_map[given_map.indexOf(given_map.find(i => i[0] == target))][1].addArray(cards);
						} else {
							given_map.push([target, cards]);
						}
						player.addGaintag(cards, "olsujian_given");
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
			},
			getCards() {
				let cards = [],
					targets = game.players.slice().concat(game.dead.slice());
				for (const target of targets) {
					const history = target.getHistory("lose", evt => evt.position == ui.discardPile);
					if (history.length) {
						for (const evt of history) {
							cards.addArray(evt.cards2.filterInD("d"));
						}
					}
				}
				const historyx = game.getGlobalHistory("cardMove", evt => evt.name == "cardsDiscard");
				if (historyx.length) {
					for (const evtx of historyx) {
						cards.addArray(evtx.cards.filterInD("d"));
					}
				}
				/* for (const target of targets) {
					const history = target.getHistory(
						"useCard",
						evt =>
							(evt.cards || []).length &&
							target.getHistory("sourceDamage", evtx => {
								return evtx.card && evtx.card == evt.card;
							}).length
					);
					if (history.length) {
						for (const evt of history) {
							cards.removeArray(evt.cards.filterInD("d"));
						}
					}
				} */
				return cards.filter(card => get.is.damageCard(card));
			},
		},
		xinxhjniji: {
			audio: 'dcniji',
			trigger: {
				target: "useCardToTargeted",
			},
			filter(event, player) {
				return event.card;
			},
			frequent: true,
			async content(event, trigger, player) {
				let num = Math.min(2, player.getHistory("useSkill", evt => evt.skill == "xinxhjniji").length);
				if (num > 0) {
					//await player.draw(num).set("gaintag", ["xinxhjniji"]);
					await player.draw().set("gaintag", ["xinxhjniji"]);
				}
			},
			group: "xinxhjniji_effect",
			subSkill: {
				effect: {
					trigger: {
						global: "phaseJieshuBegin"
					},
					filter(event, player, name) {
						return player.hasCard(card => card.hasGaintag("xinxhjniji"), "h");
					},
					frequent: true,
					popup: false,
					async content(event, trigger, player) {
						let cards = player.getCards("h", card => card.hasGaintag("xinxhjniji"));
						//while (cards.some(card => player.hasUseTarget(card))) {
						if (cards.some(card => player.hasUseTarget(card))) {
							await player.chooseToUse({
								filterCard(card) {
									if (get.itemtype(card) != "card" || !["h", "s"].includes(get.position(card))) {
										return false;
									}
									if (![card].concat(card.cards || []).some(c => get.itemtype(c) == "card" && c.hasGaintag("xinxhjniji"))) {
										return false;
									}
									return lib.filter.filterCard.apply(this, arguments);
								},
								filterTarget(card, player, target) {
									return lib.filter.targetEnabled.apply(this, arguments);
								},
								prompt: "逆击：使用一张牌（无距离限制）",
								addCount: false,
								//forced: true,
							}).set("logSkill", ["xinxhjniji"]);
						}

					},
				}
			}
		},
		//司马师
		xinxhjjinglve: {
			audio: "jinglve",
			enable: "phaseUse",
			usable: 1,
			filter(event, player) {
				return game.hasPlayer(target => lib.skill.xinxhjjinglve.filterTarget(null, player, target));
			},
			filterTarget(card, player, target) {
				return target.countCards("hejxs") > 0;
			},
			async content(event, trigger, player) {
				const target = event.target;
				const result = await player
					.chooseCardButton("选择至多两张牌作为「死士」", target.getCards("hejxs"), [1, 2])
					.set('filterButton', button => {
						const card = button.link;
						const selected = ui.selected.buttons;
						if (card.hasGaintag('eternal_xinxhjjinglve_tag')) {
							return false;
						}
						return true;
					})
					.set("ai", button => {
						const card = button.link;
						const val = get.event().getParent().target.getUseValue(card);
						return Math.max(val, get.value(card));
					})
					.forResult();
				if (result?.bool) {
					player.markAuto("xinxhjjinglve", result.links);
					target.addGaintag(result.links, 'eternal_xinxhjjinglve_tag');
				}
			},
			mark: true,
			marktext: "🤺",
			intro: {
				markcount(storage, player) {

				},
				mark(dialog, storage, player) {
					dialog.css({ width: "50%" });
					if (get.is.phoneLayout()) {
						dialog.classList.add("fullheight");
					}
					if (!player.isUnderControl(true)) {
						return '已散⌈死士⌋';
					}
					dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🎴⌈死士⌋牌</div>');
					let targets = game.filterPlayer(target => {
						return target.hasCard(card => {
							return card.hasGaintag('eternal_xinxhjjinglve_tag');
						}, 'hejxs');
					}).sortBySeat(player);
					if (targets.length) {
						for (const target of targets) {
							dialog.addText(get.translation(target));
							dialog.addSmall(target.getCards('hejxs', card => {
								return card.hasGaintag('eternal_xinxhjjinglve_tag');
							}));
						}
					}
					else { dialog.addText('<div class="text center" style="opacity:0.6; margin-top:10px;">暂无⌈死士⌋</div>'); }
				},
			},
			ai: {
				order: 12,
				result: { target: -1 },
			},
			group: "xinxhjjinglve_effect",
			subSkill: {
				tag: {

				},
				effect: {
					audio: "jinglve",
					trigger:
					{
						global: ["useCard"]
					},
					filter(event, player) {
						if (event.player == player) {
							return false;
						}
						return player.getStorage("xinxhjjinglve").length && event.cards.filter(card => {
							return player.getStorage("xinxhjjinglve").includes(card);
						}).length > 0;
					},
					forced: true,
					async content(event, trigger, player) {
						if (trigger.name == "useCard") {
							trigger.all_excluded = true;
							trigger.targets.length = 0;
							game.log(trigger.card, "被无效了");
							const list = trigger.cards.filter(card => {
								return player.getStorage("xinxhjjinglve").includes(card);
							});
							player.unmarkAuto("xinxhjjinglve", list);
						} else {

						}
					},

				}
			}
		},
		xinxhjbaiyi: {
			audio: "baiyi",
			trigger: { player: ["damageAfter"] },
			/* filter(event, player) {
				return game.players.length > 2;
			}, */
			multitarget: true,
			multiline: true,
			seatRelated: "changeSeat",
			async cost(event, trigger, player) {
				if (trigger.source?.isIn()) {
					await player.useSkill("xinxhjjinglve", null, [trigger.source]);
				}
				if (game.players.length > 2) {
					event.result = await player
						.chooseTarget("败移：请选择要交换座位的角色", 2)
						.set("ai", target => {
							const player = get.player();
							const current = _status.currentPhase || player;
							const turnDist = get.distance(current, target, "absolute");
							const att = get.attitude(player, target);
							if (att === 0) return 0;
							const selfBonus = (target === player) ? 2 : 1;
							if (ui.selected.targets.length === 0) {
								if (att > 0) return turnDist * 2 * selfBonus;
								if (att < 0) return (10 - turnDist) * 2;
							}
							else if (ui.selected.targets.length === 1) {
								const target1 = ui.selected.targets[0];
								const att1 = get.attitude(player, target1);
								if ((att1 > 0 && att > 0) || (att1 < 0 && att < 0)) return 0;
								const dist1 = get.distance(current, target1, "absolute");
								const dist2 = turnDist;
								// 提取友方和敌方各自的顺位距离
								let friendDist = att > 0 ? dist2 : dist1;
								let enemyDist = att < 0 ? dist2 : dist1;
								// 必须是把友方往前调，敌方往后调才值得换
								// 即友方原本的距离，必须大于敌方原本的距离
								if (friendDist > enemyDist) {
									return (friendDist - enemyDist) * Math.abs(att) * selfBonus;
								}
							}
							return 0;
						})
						.forResult();
				}
			},
			async content(event, trigger, player) {
				player.$fullscreenpop("败移", "thunder");
				const targets = event.targets;
				game.broadcastAll(
					function (target1, target2) {
						game.swapSeat(target1, target2);
					},
					targets[0],
					targets[1]
				);

			},
		},
		xinxhjshanli: {
			audio: "shanli",
			trigger: {
				//target: "useCardToTargeted",
				global: "useCard1",
			},
			firstDo: true,
			forced: true,
			filter(event, player) {
				return event.cards && event.cards.some(card => { return card.hasGaintag("eternal_xinxhjjinglve_tag") })
					&& event.player != player;
			},
			async content(event, trigger, player) {
				await player.gain(trigger.cards, 'gain2');
				//await player.draw();
			}
		},
		//二刘
		xinxhjqixin: {
			audio: 'dcllqixin',
			trigger: {
				player: ["gainAfter", "useCard"],
				global: "loseAsyncAfter",
			},
			filter(event, player) {
				if (event.name === "useCard") {
					return (event.getParent().name !== "chooseToUse" || event.getParent(2).name !== "xinxhjqixin")
						//&& get.type(event.card) === "basic"
						&& player.countMark("xinxhjqixin_draw") < 2;
				}
				if (event.name === "gain" && (event.getParent().name !== "draw" || event.getParent(2).name === "xinxhjqixin")) {
					return false;
				}
				if (event.name !== "gain" && event.type !== "draw") {
					return false;
				}
				//return event.getg(player).length === 2;
				return event.getg(player).length && player.countMark("xinxhjqixin_use") < 2;
			},
			frequent: true,
			direct: true,
			async content(event, trigger, player) {
				let result;
				if (trigger.name === "useCard") {
					result = await player.chooseBool(get.prompt(event.name), "摸一张牌").set("frequentSkill", event.name).forResult();
					if (result?.bool) {
						player.logSkill(event.name);
						await player.draw();
						player.addTempSkill("xinxhjqixin_draw");
						player.addMark("xinxhjqixin_draw", 1, false);
					}
				} else {
					result = await player
						.chooseToUse(
							function (card, player, event) {
								/* if (get.type(card) !== "basic") {
									return false;
								} */
								return lib.filter.cardEnabled.apply(this, arguments);
							},
							`###${get.prompt(event.name)}###使用一张牌`
						)
						.set("logSkill", event.name)
						.set("addCount", false)
						.forResult();
				}
				if (!result?.bool) {
					const stat = player.getStat().triggerSkill;
					if (typeof stat[event.name] == "number") {
						stat[event.name]--;
					}
				} else {
					player.addTempSkill("xinxhjqixin_use");
					player.addMark("xinxhjqixin_use", 1, false);
				}
			},
			subSkill: {
				use: {
					onremove: true,
					charlotte: true,
				},
				draw: {
					onremove: true,
					charlotte: true,
				}
			}
		},
		xinxhjjiusi: {
			audio: 'dcjiusi',
			enable: "chooseToUse",
			filter(event, player) {
				return get
					.inpileVCardList(info => {
						const name = info[2];
						return ['basic', 'trick'].includes(get.type(name));
					})
					.some(card => {
						return event.filterCard({ name: card[2], nature: card[3] }, player, event);
					});
			},
			usable: 1,
			chooseButton: {
				dialog(event, player) {
					const list = get
						//.inpileVCardList(info => get.type(info[2]) == "basic")
						.inpileVCardList(info => {
							const name = info[2];
							return ['basic', 'trick'].includes(get.type(name));
						})
						.filter(card => {
							return event.filterCard({ name: card[2], nature: card[3] }, player, event);
						});
					return ui.create.dialog("纠思", [list, "vcard"], "hidden");
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
						async precontent(event, trigger, player) {
							player.logSkill("xinxhjjiusi");
							/* await player.chooseToDiscard('he', 2, true)
								.set("ai", card => {
									return 6 - get.value(card);
								}); */
						},
					};
				},
			},
			hiddenCard(player, name) {
				if (player.getStat("skill").xinxhjjiusi) {
					return false;
				}
				return ['basic', 'trick'].includes(get.type(name)) && lib.inpile.includes(name);
			},
			ai: {
				order: 10,
				respondShan: true,
				respondSha: true,
				skillTagFilter(player, tag, arg) {
					if (arg === "respond") {
						return false;
					}
					return get.info("xinxhjjiusi").hiddenCard(player, tag.slice("respond".length).toLowerCase());
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
		},
		//朱铄
		xinxhjzsshuhe: {
			audio: 'dczsshuhe',
			trigger: { global: "useCard" },
			usable: 1,
			filter(event, player) {
				if (event.player == player) {
					return false;
				}
				return get.is.damageCard(event.card);
			},
			logTarget: "player",
			check(event, player) {
				if (get.attitude(player, event.player) > 0) {
					return true;
				}
				let eff = 2;
				if (event.targets) {
					for (let target of event.targets) {
						eff += get.effect(target, event.card, event.player, player);
					}
				}
				return eff <= 0;
			},
			async content(event, trigger, player) {
				const card = get.cardPile2(card => card.name == "jiu");
				if (card) {
					await player.gain(card, "gain2");
				}
				let eff = -1;
				if (trigger.targets) {
					for (let target of trigger.targets) {
						eff += get.effect(target, trigger.card, trigger.player, trigger.player);
					}
				}
				const result = await trigger.player
					.chooseBool()
					.set("prompt", "疏和")
					.set("prompt2", `令${get.translation(trigger.card)}无效并视为使用一张【酒】，或点取消令${get.translation(player)}摸一张牌`)
					.set("choice", eff < 0)
					.forResult();
				if (result.bool) {
					trigger.targets.length = 0;
					trigger.all_excluded = true;
					game.log(trigger.card, "被无效了");
					const card = { name: "jiu", isCard: true };
					if (trigger.player.hasUseTarget(card)) {
						const next = trigger.player.chooseUseTarget(card, false, true);
						event.next.remove(next);
						trigger.after.push(next);
					}
				} else {
					await player.draw();
				}
			},
		},
		xinxhjjilie: {
			audio: 'dcjilie',
			enable: "phaseUse",
			position: "he",
			selectCard() {
				return [1, Infinity];
			},
			complexCard: true,
			complexSelect: true,
			/* lose: false,
			discard: false,
			delay: false, */
			usable: 1,
			filterCard: lib.filter.cardRecastable,
			filter(event, player) {
				return player.countCards("he");
			},
			check(card) {
				const player = get.player(),
					value = get.value(card);
				if (ui.selected.cards?.some(cardx => get.suit(cardx, player) == get.suit(card, player))) {
					return 2 - value;
				}
				return 3 - value;
			},
			async content(event, trigger, player) {
				await player.recast(event.cards);

				let num = event.cards.map(i => get.suit(i, player)).toUniqued().length * 2;
				while (num > 0) {
					num--;
					const judgeEvent = player.judge(card => (card.name == "sha" ? 10 : -1));
					judgeEvent.set("callback", async event => {
						if (event.card.name == "sha" && player.hasUseTarget(event.card, false)) {
							const next = player.chooseUseTarget(event.card, false, "nodistance");
							next.set("oncard", () => {
								_status.event.baseDamage += player.getHistory("useCard", evt => evt.card.name == "sha").length;
							});
							await next;
						}
					});
					await judgeEvent;
				}
			},
			ai: {
				order: 9,
				result: {
					player: 1,
				},
			},
		},
		//徐妏
		xinxhjfuhui: {
			audio: "ext:永夜之境/audio:6",
			enable: "chooseToUse",
			onChooseToUse(event) {
				if (game.online) {
					return;
				}
				const player = event.player;
				const used = game
					.getGlobalHistory("useCard", evt => {
						return evt.card?.storage?.xinxhjfuhui == player && (evt.cards ?? []).length == 2;
					})
					.map(evt => evt.cards.map(card => get.suit(card, evt.player)).toUniqued());
				event.set("usedSuit", used);
			},
			filter(event, player) {
				if (player.countCards("hse") < 2) {
					return false;
				}
				return get
					.inpileVCardList(info => {
						const name = info[2];
						if (get.type(name) != "basic" && get.type(name) != "trick") {
							return false;
						}
						return !player.getStorage("xinxhjfuhui_used").includes(name);
					})
					.some(card => event.filterCard(get.autoViewAs({ name: card[2], nature: card[3] }, "unsure"), player, event));
			},
			chooseButton: {
				dialog(event, player) {
					const list = get
						.inpileVCardList(info => {
							const name = info[2];
							if (get.type(name) != "basic" && get.type(name) != "trick") {
								return false;
							}
							return !player.getStorage("xinxhjfuhui_used").includes(name);
						})
						.filter(card => event.filterCard(get.autoViewAs({ name: card[2], nature: card[3] }, "unsure"), player, event));
					return ui.create.dialog("赋绘", [list, "vcard"]);
				},
				check(button) {
					if (get.event().getParent().type != "phase") {
						return 1;
					}
					return get.event().player.getUseValue({
						name: button.link[2],
						nature: button.link[3],
					});
				},
				backup(links, player) {
					return {
						filterCard: true,
						selectCard: 2,
						popname: true,
						viewAs: {
							name: links[0][2],
							nature: links[0][3],
							storage: {
								xinxhjfuhui: player,
							},
						},
						ai1(card) {
							return 1 / (get.value(card) || 0.5);
						},
						log: false,
						position: "hse",
						async precontent(event, trigger, player) {
							player.logSkill("xinxhjfuhui");
							player.addTempSkill("xinxhjfuhui_used");
							player.markAuto("xinxhjfuhui_used", [event.result.card.name]);
							player
								.when({
									global: "useCard",
								})
								.filter(evt => evt.getParent() == event.getParent())
								.step(async (event, trigger, player) => {
									const sort = (a, b) => lib.suits.indexOf(a) - lib.suits.indexOf(b);
									const suits = trigger.cards.map(i => get.suit(i, player)).sort(sort);
									if (
										!game.hasGlobalHistory(
											"useCard",
											evt => {
												if (evt === trigger || (evt.cards ?? []).length !== 2) {
													return false;
												}
												if (evt.card?.storage?.xinxhjfuhui !== player) {
													return false;
												}
												const suits2 = evt.cards.map(i => get.suit(i, evt.player)).sort(sort);
												return suits.length === suits2.length && suits.every((suit, i) => suit == suits2[i]);
											},
											trigger
										)
									) {
										await player.draw();
									}
									//await player.draw();
								});
						},
					};
				},
				prompt(links, player) {
					//花色各不相同的
					let prompt = `将两张牌当作${get.translation(links[0][3] || "")}【${get.translation(links[0][2])}】使用`,
						prompt2 = [];
					const used = get.event().usedSuit;
					const suits = lib.suit.slice(0).addArray(player.getCards("hs").map(card => get.suit(card)));
					for (const suit1 of suits) {
						let list = [];
						for (const suit2 of suits) {
							const combo = [suit1, suit2].toUniqued();
							if (
								used?.length &&
								used.some(record => {
									if (record.length != combo.length) {
										return false;
									}
									return record.containsAll(...combo);
								})
							) {
								list.add(`<span style="opacity:0.5">${get.translation(suit1)}${get.translation(suit2)}</span>`);
							} else {
								list.add(`<span class="greentext">${get.translation(suit1)}${get.translation(suit2)}</span>`);
							}
						}
						prompt2.add(`<div class="text center">${list.join(" ")}</div>`);
					}
					return `###${prompt}###${prompt2.join("<br>")}`;
					//return `将两张牌当作${get.translation(links[0][3] || "")}【${get.translation(links[0][2])}】使用`;
				},
			},
			hiddenCard(player, name) {
				/*if (
					player
						.getCards("hs")
						.map(i => get.suit(i))
						.unique().length < 2
				) {
					return false;
				}*/
				if (player.countCards("hse") < 2) {
					return false;
				}
				if (get.type(name) != "basic" && get.type(name) != "trick") {
					return false;
				}
				if (player.getStorage("xinxhjfuhui_used").includes(name)) {
					return false;
				}
				return lib.inpile.includes(name);
			},
			ai: {
				order(item, player) {
					if (player && get.event().type == "phase") {
						let list = get
							.inpileVCardList(info => {
								const name = info[2];
								if (get.type(name) != "basic" && get.type(name) != "trick") {
									return false;
								}
								return !player.getStorage("xinxhjfuhui_used").includes(name);
							})
							.map(card => {
								return { name: card[2], nature: card[3] };
							})
							.filter(card => player.getUseValue(card, true, true) > 0);
						if (!list.length) {
							return 0;
						}
						list.sort((a, b) => (player.getUseValue(b, true, true) || 0) - (player.getUseValue(a, true, true) || 0));
						return get.order(list[0], player) * 0.99;
					}
					return 0.001;
				},
				respondSha: true,
				respondShan: true,
				skillTagFilter(player, tag, arg) {
					if (arg == "respond") {
						return false;
					}
					const name = tag == "respondSha" ? "sha" : "shan";
					return lib.skill["xinxhjfuhui"].hiddenCard(player, name);
				},
				result: {
					player(player) {
						if (_status.event?.dying) {
							return get.attitude(player, _status.event.dying);
						}
						return 1;
					},
				},
			},
			subSkill: {
				backup: {},
				used: {
					charlotte: true,
					onremove: true,
				},
				effect: {
					charlotte: true,
					trigger: { player: "useCard" },
					filter(event, player) {
						if (event.skill !== "xinxhjfuhui_backup" || (event.cards ?? []).length !== 2) {
							return false;
						}
						const sort = (a, b) => lib.suits.indexOf(a) - lib.suits.indexOf(b);
						const suits = event.cards.map(i => get.suit(i, player)).sort(sort);
						return !player.hasHistory(
							"useCard",
							evt => {
								if (evt === event || (evt.cards ?? []).length !== 2) {
									return false;
								}
								const suits2 = evt.cards.map(i => get.suit(i, player)).sort(sort);
								return suits.length === suits2.length && suits.every((suit, i) => suit == suits2[i]);
							},
							event
						);
					},
					forced: true,
					popup: false,
					async content(event, trigger, player) {
						await player.draw();
					},
				},
			},
		},
		xinxhjmohua: {
			audio: "ext:永夜之境/audio:6",
			trigger: { global: "phaseEnd" },
			filter(event, player) {
				if (_status.currentPhase == player) {
					return false;
				}
				const history = event.player.getHistory("useCard", evt => evt.isPhaseUsing(event.player) && ['basic', 'trick'].includes(get.type(evt.card)));
				return history.length
				// && player.hasUsableCard(history[0].card.name);
			},
			check(event, player) {
				const history = event.player.getHistory("useCard", evt => evt.isPhaseUsing(event.player) && ['basic', 'trick'].includes(get.type(evt.card)));
				const { name } = history[0].card;
				/* const card = { name, storage: { xinxhjmohua: history[0] } };
				return event.player.hasValueTarget(new lib.element.VCard(card), true, true); */
				const card = { name: name, isCard: true };
				return event.player.hasValueTarget(card, false);
			},
			round: 1,
			logTarget: "player",
			async content(event, trigger, player) {
				player.addTempSkill("xinxhjmohua_effect");
				player.setStorage("xinxhjmohua_effect", trigger.player);
				const history = trigger.player.getHistory("useCard", evt => evt.isPhaseUsing(trigger.player) && ['basic', 'trick'].includes(get.type(evt.card)));
				for (const evt of history) {
					const { name } = evt.card;
					/* const card = (event.card = { name, storage: { xinxhjmohua: evt } });
					const next = player.chooseToUse(function (card, player, target) {
						const { cardx } = get.event();
						if (!cardx || get.name(card) !== cardx.name) {
							return false;
						}
						return lib.filter.filterCard.apply(this, arguments);
					}); */
					//提取原目标的名字，拼接成字符串
					const card = { name: name, isCard: true, storage: { xinxhjmohua: evt } };
					const originalTargetNames = evt.targets.map(t => get.translation(t)).join('、');

					const next = player.chooseUseTarget({
						card: card,
						// 把原目标高亮显示在选牌提示上，替代 onChooseToUse
						prompt: `是否发动【摹画】视为使用【${get.translation(name)}】？<br><span style="color:#FFD700; font-size:14px">（原目标：${originalTargetNames}）</span>`,
						forced: false
					});
					next.set("xinxhjmohua", true);
					/* next.set("manualConfirm", true);
					next.set("openskilldialog", `${get.translation(event.name)}：请选择【${get.translation(card.name)}】的目标`);
					next.set("cardx", card); */
					const result = await next.forResult();
					if (!result?.bool) {
						break;
					}
				}
				player.removeSkill("xinxhjmohua_effect");
			},
			onChooseToUse(event) {
				const evt = event.getParent();
				if (evt.name === "chooseUseTarget" && evt.name === "xinxhjmohua" && evt.player === event.player) {
					const evt2 = evt.card.storage.xinxhjmohua;
					if (Array.isArray(evt2.targets)) {
						event.targetprompt2.add(target => {
							if (target.isIn() && evt2.targets.includes(target)) {
								return "原目标";
							}
						});
					}
				}
			},
			subSkill: {
				effect: {
					charlotte: true,
					priority: Infinity,
					trigger: { player: "useCardBefore" },
					direct: true,
					filter(event, player) {
						const target = player.getStorage("xinxhjmohua_effect");
						return get.itemtype(target) == "player" && target?.isIn();
					},
					logTarget: (event, player) => player.getStorage("xinxhjmohua_effect"),
					async content(event, trigger, player) {
						trigger.player = player.getStorage("xinxhjmohua_effect");
						trigger.noai = true;
						await game.delay(0.5);
					},
					mod: {
						selectTarget(card, player, range) {
							const source = player.getStorage("xinxhjmohua_effect");
							if (!source.isIn() || get.itemtype(source) != "player") {
								return;
							}
							const evt = get.event().getParent("chooseUseTarget", true, true);
							if (!evt?.xinxhjmohua) {
								return;
							}
							let info = get.info(card);
							let select = get.copy(info.selectTarget);
							if (select == undefined) {
								if (info.filterTarget == undefined) {
									return [0, 0];
								}
								range = [1, 1];
							} else if (typeof select == "number") {
								range = [select, select];
							} else if (get.itemtype(select) == "select") {
								range = select;
							} else if (typeof select == "function") {
								range = select(card, source);
								if (typeof range == "number") {
									range = [range, range];
								}
							}
							game.checkMod(card, source, range, "selectTarget", source);
						},
						cardEnabled2(card, player, event) {
							const source = player.getStorage("xinxhjmohua_effect");
							if (!source.isIn() || get.itemtype(source) != "player") {
								return;
							}
							const evt = get.event().getParent("chooseUseTarget", true, true);
							if (!evt?.xinxhjmohua) {
								return;
							}
							let check = game.checkMod(card, source, event, "unchanged", "cardEnabled2", source);
							return check;
						},
						cardEnabled(card, player, event) {
							const source = player.getStorage("xinxhjmohua_effect");
							if (!source.isIn() || get.itemtype(source) != "player") {
								return;
							}
							const evt = get.event().getParent("chooseUseTarget", true, true);
							if (!evt?.xinxhjmohua) {
								return;
							}
							if (event === "forceEnable") {
								let mod = game.checkMod(card, source, event, "unchanged", "cardEnabled", source);
								if (mod != "unchanged") {
									return mod;
								}
								return true;
							} else {
								let filter = get.info(card).enable;
								if (!filter) {
									return;
								}
								let mod = game.checkMod(card, player, source, "unchanged", "cardEnabled", source);
								if (mod != "unchanged") {
									return mod;
								}
								if (typeof filter == "boolean") {
									return filter;
								}
								if (typeof filter == "function") {
									return filter(card, source, event);
								}
							}
						},
						cardUsable(card, player, num) {
							const source = player.getStorage("xinxhjmohua_effect");
							if (!source.isIn() || get.itemtype(source) != "player") {
								return;
							}
							const evt = get.event().getParent("chooseUseTarget", true, true);
							if (!evt?.xinxhjmohua) {
								return;
							}
							let event = _status.event;
							if (event.type == "chooseUseTarget_button") {
								event = event.getParent();
							}
							/*if (source != _status.event.player) {
								return true;
							}*/
							const info = get.info(card);
							if (info.updateUsable == "phaseUse") {
								if (event.getParent().name != "phaseUse") {
									return true;
								}
								if (event.getParent().player != source) {
									return true;
								}
							}
							event.addCount_extra = true;
							num = info.usable;
							if (typeof num == "function") {
								num = num(card, source);
							}
							num = game.checkMod(card, source, num, event, "cardUsable", source);
							if (typeof num != "number") {
								return true;
							}
							if (source.countUsed(card) < num) {
								return true;
							}
							if (
								game.hasPlayer(function (current) {
									return game.checkMod(card, source, current, false, "cardUsableTarget", source);
								})
							) {
								return true;
							}
							return false;
						},
						playerEnabled(card, player, target) {
							const source = player.getStorage("xinxhjmohua_effect");
							if (!source.isIn() || get.itemtype(source) != "player") {
								return;
							}
							const evt = get.event().getParent("chooseUseTarget", true, true);
							if (!evt?.xinxhjmohua) {
								return;
							}
							return lib.filter.targetEnabledx(card, source, target);
						},
						targetInRange(card, player, target) {
							const source = player.getStorage("xinxhjmohua_effect");
							if (!source.isIn() || get.itemtype(source) != "player") {
								return;
							}
							const evt = get.event().getParent("chooseUseTarget", true, true);
							if (!evt?.xinxhjmohua) {
								return;
							}
							return lib.filter.targetInRange(card, source, target);
						},
					},
					group: "xinxhjmohua_draw",
				},
				draw: {
					charlotte: true,
					trigger: { global: "useCard" },
					filter(event, player) {
						/* let evt = event.getParent(2);
						if (!event.targets?.length || evt.name !== "xinxhjmohua" || evt.player !== player) {
							return false;
						}
						evt = evt.card.storage.xinxhjmohua;
						return evt.targets?.length && evt.targets.containsSome(...event.targets); */
						const chooseEvt = event.getParent("chooseUseTarget");
						if (!chooseEvt || !chooseEvt.xinxhjmohua || chooseEvt.player !== player) {
							return false;
						}
						const originalEvt = chooseEvt.card.storage?.xinxhjmohua;
						return originalEvt && originalEvt.targets && originalEvt.targets.containsSome(...event.targets);
					},
					forced: true,
					popup: false,
					async content(event, trigger, player) {
						/* const evt = trigger.getParent(2);
						const targets = evt.card.storage.xinxhjmohua.targets.filter(target => trigger.targets.includes(target));
						await player.draw(targets.length); */
						const chooseEvt = trigger.getParent("chooseUseTarget");
						const originalEvt = chooseEvt.card.storage.xinxhjmohua;
						const originalTargets = originalEvt.targets;

						// 计算重合目标的数量
						const overlapCount = originalTargets.filter(target => trigger.targets.includes(target)).length;
						if (overlapCount > 0) {
							game.log(player, "与原目标有", "#y" + overlapCount, "个重合，摸", "#y" + overlapCount, "张牌");
							await player.draw(overlapCount);
						}
					},
				},
			},
		},
		//法正
		xinxhjzhiji: {
			audio: "starzhiji",
			trigger: { player: "phaseZhunbeiBegin" },
			filter(event, player) {
				return player.hasCard(card => _status.connectMode || lib.filter.cardDiscardable(card, player), "h");
			},
			async cost(event, trigger, player) {
				const next = player.chooseToDiscard(get.prompt2(event.skill), [1, Infinity], "allowChooseAll").set("logSkill", "xinxhjzhiji");
				if (_status.auto || !(player === game.me || player.isOnline())) {
					next.complexCard = true;
					next.ai = function (card) {
						const player = get.player();
						switch (get.sgn(player.countCards("h") - 5)) {
							case 1: {
								const num = game.countPlayer(target => target !== player && get.damageEffect(target, player, player) > 0);
								if (ui.selected.cards.length < num) {
									return 8 - get.value(card);
								}
								return 0;
							}
							default:
								return (
									lib.skill.zhiheng.check(card) + (5 - player.countCards("h")) * get.effect(player, { name: "draw" }, player, player)
								);
						}
					};
				}
				event.result = await next.forResult();
			},
			popup: false,
			async content(event, trigger, player) {
				const num = event.cards.length - ((await player.drawTo(5).forResult()).cards || []).length;
				switch (get.sgn(num)) {
					case 1: {
						const result = await player
							.chooseTarget("是否对至多" + num + "名其他角色各造成1点伤害？", lib.filter.notMe, [1, num])
							.set("ai", target => {
								const player = get.player();
								return get.damageEffect(target, player, player);
							})
							.forResult();
						if (result.bool) {
							const targets = result.targets.sortBySeat();
							player.line(targets);
							for (const i of targets) {
								await i.damage();
							}
						}
						break;
					}
					case 0:
						player.addTempSkill("xinxhjzhiji_fuqi");
						break;
					case -1:
						player.addTempSkill("xinxhjzhiji_hand");
						player.addMark("xinxhjzhiji_hand", 2, false);
						break;
				}
			},
			subSkill: {
				fuqi: {
					charlotte: true,
					audio: "starzhiji",
					trigger: { player: "useCard" },
					forced: true,
					content() {
						trigger.baseDamage++;
						trigger.directHit.addArray(game.players);
						game.log(trigger.cards, "不可被响应");

					},
					ai: { directHit_ai: true },
					mark: true,
					intro: { content: "使用牌不可被响应且数值+1" },
				},
				hand: {
					charlotte: true,
					onremove: true,
					mod: { maxHandcard: (player, num) => num + player.countMark("xinxhjzhiji_hand") },
					intro: { content: "手牌上限+#" },
				},
			},
		},
		xinxhjanji: {
			getUsed(player) {
				let history = game.getRoundHistory("useCard"),
					suits = lib.suit.slice();
				const map = history.reduce((map, evt) => {
					const suit = get.suit(evt.card);
					if (!map[suit]) {
						map[suit] = 1;
						suits.add(suit);
					} else {
						map[suit]++;
					}
					return map;
				}, {});
				return [map, suits];
			},
			audio: "staranji",
			trigger: { global: "useCard" },
			/* filter(event, player) {
				 const [map, suits] = get.info("xinxhjanji").getUsed(player),
					min = Math.min(...suits.slice().map(suit => map[suit] || 0));
				return map[get.suit(event.card)] === min; 
				const [map, suits] = get.info("old_staranji").getUsed(player),
					min = Math.min(...suits.slice().map(suit => map[suit]));
				return map[get.suit(event.card)] === min;
			}, */
			filter(event, player) {
				const suit = get.suit(event.card);
				if (!lib.suit.includes(suit)) { return false; }
				const history = game.getRoundHistory("useCard") || [];
				const map = {};
				// 还原“出这张牌之前”的状况
				for (const evt of history) {
					// 一旦在记录里遇到当前正在结算的这张牌，停止统计
					if (evt === event) break;
					const s = get.suit(evt.card);
					if (lib.suit.includes(s)) {
						map[s] = (map[s] || 0) + 1;
					}
				}
				// 找出出牌前的最小值
				let min = Infinity;
				for (const s of lib.suit) {
					const count = map[s] || 0;
					if (count < min) min = count;
				}
				//只要当前花色在出牌前等 最小值（允许并列），就触发
				return (map[suit] || 0) === min;
			},
			forced: true,
			firstDo: true,
			logTarget: "player",
			content() {
				player.draw();
			},
			init(player, skill) {
				const [map] = get.info(skill).getUsed(player);
				if (Object.keys(map).length) {
					player.storage[skill] = map;
					player.markSkill(skill);
				}
			},
			onremove: true,
			intro: {
				content(storage = {}, player) {
					if (!storage) {
						return "当前暂无记录";
					}
					let str = "本轮游戏所有角色使用牌的花色情况：<br>";
					const list = lib.suit.slice();
					const entries = Object.entries(storage).sort((a, b) => list.indexOf(a[0]) - list.indexOf(b[0]));
					for (const entry of entries) {
						str += "<li>" + get.translation(entry[0]) + "：" + entry[1];
					}
					return str;
				},
			},
			ai: { threaten: 2 },
			group: "xinxhjanji_count",
			subSkill: {
				count: {
					charlotte: true,
					trigger: { global: ["useCard1", "roundStart"] },
					filter(event, player, name) {
						return name == "useCard1" || Object.keys(player.storage.xinxhjanji || {}).length;
					},
					firstDo: true,
					forced: true,
					popup: false,
					async content(event, trigger, player) {
						if (event.triggername == "roundStart") {
							delete player.storage.xinxhjanji;
							player.unmarkSkill("xinxhjanji");
						} else {
							const key = get.suit(trigger.card);
							player.storage.xinxhjanji ??= {};
							player.storage.xinxhjanji[key] ??= 0;
							player.storage.xinxhjanji[key]++;
							player.markSkill("xinxhjanji");
						}
					},
				},
			},
		},
		//汉曹操
		xinxhjdingxi: {
			audio: 'oldingxi',
			trigger: { global: "cardsDiscardAfter" },
			filter(event, player) {
				const list = [player.getNext(), player.getPrevious()];
				if (
					!list.some(current => current.isIn()) ||
					!event.cards.filterInD("d").some(card => {
						//return get.is.damageCard(card) && list.some(target => player.canUse(card, target));
						return ['basic', 'trick'].includes(get.type(card)) && list.some(target => player.canUse(card, target));
					})
				) {
					return false;
				}
				const evt = event.getParent();
				if (evt.name != "orderingDiscard") {
					return false;
				}
				const evtx = evt.relatedEvent || evt.getParent();
				return player.hasHistory("useCard", evtxx => {
					if (evtxx.getParent().name === "xinxhjdingxi") {
						return false;
					}
					return evtx.getParent() == (evtxx.relatedEvent || evtxx.getParent()) && ['basic', 'trick'].includes(get.type(evtxx.card));
				});
			},
			async cost(event, trigger, player) {
				const list = [player.getNext(), player.getPrevious()];
				const cards = trigger.cards.filterInD("d").filter(card => ['basic', 'trick'].includes(get.type(card)));
				const count = game.countPlayer(current => current !== player);
				if (count == 1) {
					const target = player.getPrevious();
					event.result = await player
						.chooseButton([get.prompt2(event.skill, target), cards])
						.set("filterButton", button => {
							const player = get.player(),
								target = get.event().target;
							return player.canUse(button.link, target);
						})
						.set("target", target)
						.set("ai", button => {
							const player = get.player(),
								target = get.event().target;
							return get.effect(target, button.link, player, player);
						})
						.forResult();
					if (event.result.bool) {
						event.result.cards = event.result.links;
						event.result.targets = [target];
					}
				} else {
					let result = await player
						.chooseButtonTarget({
							createDialog: [
								`${get.prompt2(event.skill)}`,
								cards],
							cards: cards,
							filterTarget(card, player, target) {
								return get.event().list.includes(target);
							},
							filterButton(button) {
								const player = get.player();
								const list = get.event().list;
								return list.some(target => player.canUse(button.link, target));
							},
							ai1(button) {
								return get.value(button.link);
							},
							ai2(target) {
								//return get.effect(target, button.link, player, player);
								return get.damageEffect(target, player, player);
							},
						})
						.set('list', list)
						.forResult();
					if (result.bool && result.targets && result.links) {
						event.result = {
							bool: true,
							targets: result.targets,
							cards: result.links
						};
					}
				}
			},
			async content(event, trigger, player) {
				player.$gain2(event.cards, false);
				await game.delayx();
				const useCardEvent = player.useCard(event.cards[0], event.targets[0], false);
				await useCardEvent;
				const cards = useCardEvent.cards.filterInD("d");
				if (cards.length) {
					const next = player.addToExpansion(cards, "gain2");
					next.gaintag.add("xinxhjdingxi");
					await next;
				}
			},
			intro: {
				content: "expansion",
				markcount: "expansion",
			},
			onremove(player, skill) {
				const cards = player.getExpansions(skill);
				if (cards.length) {
					player.loseToDiscardpile(cards);
				}
			},
			group: "xinxhjdingxi_biyue",
			subSkill: {
				biyue: {
					audio: "oldingxi",
					trigger: { player: "phaseJieshuBegin" },
					forced: true,
					locked: false,
					filter(event, player) {
						return player.countExpansions("xinxhjdingxi") > 0;
					},
					async content(event, trigger, player) {
						await player.draw(player.countExpansions("xinxhjdingxi"));
					},
				},
			},
		},
		xinxhjnengchen: {
			audio: 'olnengchen',
			trigger: { player: "damageEnd" },
			filter(event, player) {
				return event.card && player.getExpansions("xinxhjdingxi").some(card => card.name === event.card.name);
			},
			forced: true,
			async content(event, trigger, player) {
				//const cards = player.getExpansions("xinxhjdingxi").filter(card => card.name === trigger.card.name);
				//player.gain(cards.randomGet(), player, "give");
				const card = get.cardPile(card => get.name(card) == get.name(trigger.card));
				if (card) {
					await player.gain(card, "gain2");
				}
				//await player.draw();
			},
			ai: { combo: "xinxhjdingxi" },
		},
		xinxhjhuojie: {
			audio: 'olhuojie',
			trigger: { player: "phaseUseBegin" },
			filter(event, player) {
				return player.countExpansions("xinxhjdingxi") > game.players.length + game.dead.length;
			},
			forced: true,
			async content(event, trigger, player) {
				let usenum = player.getExpansions("xinxhjdingxi").length;
				let num = 1;
				while (num > 0) {
					num--;
					const next = player.executeDelayCardEffect("shandian");
					await next;
					if (player.hasHistory("damage", evt => evt.getParent(2) == next)) {
						const cards = player.getExpansions("xinxhjdingxi");
						if (cards.length) {
							while (cards.some(card => player.hasUseTarget(card))) {
								const result1 = await player.chooseCardButton(`祸结：选择要使用的牌`, cards, true)
									.set('filterButton', button => {
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
									/* let xcard = get.autoViewAs(
										{
											name: card.name,
											cards: [card],
											storage: { xinxhjdingxix: true },
										},
										card
									);
									await player.chooseUseTarget(xcard, true, false); */
									await player.chooseUseTarget(card, true, false);
								}
								else {
									break;
								}
								break;
							}
						}
					}
				}
			},
			ai: {
				combo: "xinxhjdingxi",
				neg: true,
			},
		},
		//新杀夏侯玄
		xinxhjboxuan: {
			audio: 'dcboxuan',
			trigger: { player: "useCardAfter" },
			filter(event, player) {
				if (!event.targets?.length || !event.cards?.length) {
					return false;
				}
				/* if (!event.targets?.some(target => target != player) && !player.storage.xinxhjboxuan) {
					return false;
				} */
				return player.hasHistory("lose", evt => {
					const evtx = evt.relatedEvent || evt.getParent();
					if (evtx != event) {
						return false;
					}
					return evt.getl(player)?.hs?.length;
				});
			},
			frequent: true,
			check: () => true,
			async content(event, trigger, player) {
				const cards = get.bottomCards(3, true);
				await player
					.showCards(cards, `${get.translation(player)}发动了【博玄】`)
					.set("log", (cards, player) => [player, "展示了牌堆底的", cards]);
				const list = ["cardNameLength", "suit", "type2"].map(attri => cards.some(card => get[attri](trigger.card) == get[attri](card)));
				if (list[0]) {
					await player.draw();
				}
				if (
					list[1] &&
					game.hasPlayer(target => {
						return target.countDiscardableCards(player, "he") && target != player;
					})
				) {
					const result = await player
						.chooseTarget(`博玄：你可弃置一名其他角色一张牌`, (card, player, target) => {
							return target.countDiscardableCards(player, "he") && target != player;
						})
						.set("ai", target => get.effect(target, { name: "guohe_copy2" }, get.player(), get.player()))
						.forResult();
					if (result?.targets) {
						player.line(result.targets);
						await player.discardPlayerCard(result.targets[0], "he", true);
					}
				}
				if (list[2] && cards.some(card => player.hasUseTarget(card, false, false))) {
					const result = await player
						.chooseCardButton(`博玄：你可以使用一张展示牌`, cards)
						.set("filterButton", button => get.player().hasUseTarget(button.link, false, false))
						.set("ai", button => get.player().getUseValue(button.link))
						.forResult();
					if (result?.links) {
						const card = result.links[0];
						if (player.hasUseTarget(card, false, false)) {
							await player.chooseUseTarget(card, false, 'nodistance');
						}
					}
				}
				if (player.storage.xinxhjboxuan) {
					const put = trigger.cards.filterInD("od");
					if (!put.length) return;
					const result = await player
						.chooseBool()
						.set("createDialog", [`博玄：是否将这些牌置于牌堆底`, put])
						.set("ai", () => Math.random() > 0.5)
						.forResult();
					if (result?.bool) {
						game.log(player, "将", put, "置于牌堆底");
						await game.cardsGotoPile(put);
					}
				}
			},
		},
		xinxhjboxuan_rewrite: {
			//空技能，博玄修改后
		},
		xinxhjyizheng: {
			audio: 'dcyizheng',
			trigger: { player: ["phaseBegin"] }, //, "phaseEnd"
			filter(event, player) {
				return (
					player.countCards("h") &&
					game.hasPlayer(target => {
						return target != player && target.countCards("h");
					})
				);
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseTarget(get.prompt2(event.skill), [1, player.maxHp], (card, player, target) => {
						return target != player && target.countCards("h");
					})
					.set("ai", target => {
						if (player.hp == 1) {
							return 0;
						}
						return -get.attitude(get.player(), target);
					})
					.forResult();
			},
			async content(event, trigger, player) {
				const targets = [player].concat(event.targets).sortBySeat();
				//先选牌
				let showEvent = player
					.chooseCardOL(targets, "议政：请选择要展示的牌", true)
					.set("ai", function (card) {
						return -get.value(card);
					})
					.set("source", player);
				showEvent.aiCard = function (target) {
					const hs = target.getCards("h");
					return { bool: true, cards: [hs.randomGet()] };
				};
				showEvent._args.remove("glow_result");
				const result = await showEvent.forResult();
				const cards = [];
				for (var i = 0; i < targets.length; i++) {
					cards.push(result[i].cards[0]);
				}
				await player
					.showCards(cards, `${get.translation(player)} 发动了【${get.translation(event.name)}】`, false)
					.set("multipleShow", true)
					.set("customButton", button => {
						const target = get.owner(button.link);
						if (target) {
							button.node.gaintag.innerHTML = target.getName();
						}
					})
					.set("delay_time", targets.length * 1.5);
				if (cards.map(card => get.type2(card)).unique().length == 1) {
					player.popup("洗具");
					const result = await player
						.chooseTarget(true)
						.set("createDialog", [`议政：令一名角色获得这些牌`, cards])
						.set("ai", target => get.attitude(get.player(), target))
						.forResult();
					if (result?.targets) {
						const target = result.targets[0];
						player.line(target);
						let gainEvent = target.gain(cards);
						gainEvent.set(
							"givers",
							targets.filter(i => i != target)
						);
						gainEvent.set("animate", function (event) {
							const player = event.player,
								cards = event.cards,
								givers = event.givers;
							for (let i = 0; i < givers.length; i++) {
								givers[i].$give(cards[i], player);
							}
							return 500;
						});
						await gainEvent;
					}
				} else {
					player.popup("杯具");
					await game
						.loseAsync({
							lose_list: targets.map((target, index) => {
								return [target, [cards[index]]];
							}),
							discarder: player,
						})
						.setContent("discardMultiple");
				}
			},
		},
		xinxhjguilin: {
			audio: 'dcguilin',
			derivation: ["xinxhjboxuan_rewrite"],
			limited: true,
			unique: true,
			skillAnimation: true,
			animationColor: "thunder",
			enable: "phaseUse",
			trigger: { player: "dying" },
			filter(event, player) {
				if (event.name == "dying") {
					return player.isDying();
				}
				return true;
			},
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				const num = player.getDamagedHp();
				await player.recover(num);
				//await player.draw(num);
				await player.removeSkills("xinxhjyizheng");
				if (player.hasSkill("xinxhjboxuan", null, null, false)) {
					player.storage.xinxhjboxuan = true;
				}
				game.log(player, `修改了〖博玄〗`);
			},
			ai: {
				order: 10,
				result: {
					player: player => get.recoverEffect(player, player, player),
				},
			},
		},
		//新谋郭嘉
		xinxhjxianmou: {
			mark: true,
			marktext: "☯",
			zhuanhuanji(player, skill) {
				player.storage[skill] = !player.storage[skill];
				player.changeSkin({ characterName: "xinxhj_yj_sb_guojia" }, "xinxhj_yj_sb_guojia" + (player.storage[skill] ? "_shadow" : ""));
			},
			intro: {
				content(storage) {
					if (!storage) {
						return "你失去过牌的回合结束时，你可以观看牌堆顶五张牌并获得至多X张牌（X为本回合失去牌数）";
					}
					return "你失去过牌的回合结束时，你可以观看一名角色手牌并获得其至多X张牌，若获得X张牌则当前回合角色进行一次【闪电】判定（X为你与非当前回合角色本回合失去牌数）";
				},
			},
			audio: 'xianmou',
			audioname: ["yj_sb_guojia_shadow"],
			trigger: {
				global: "phaseEnd",
			},
			filter(event, player) {
				return player.getHistory("lose", evt => evt.cards2 && evt.cards2.length).length;
			},
			getNum(player) {
				let num = 0;
				/* player.getHistory("lose", evt => {
					if (evt.cards2) {
						num += evt.cards2.length;
					}
				}); */
				/* game.countPlayer(current => {
					if (current.hasHistory("lose", evt => {
						if (evt.cards2) {
							num += evt.cards2.length;
						}
					}
					));
				}); */
				game.countPlayer(current => {
					if (current === player || current !== _status.currentPhase) {
						const history = current.getHistory("lose");
						for (const evt of history) {
							if (evt.cards2) {
								num += evt.cards2.length;
							}
						}
					}
				});
				return num;
			},
			async cost(event, trigger, player) {
				let num = get.info(event.skill)?.getNum(player);
				if (player.storage[event.skill]) {
					event.result = await player
						.chooseTarget(get.prompt(event.skill), `观看一名角色手牌并获得其至多${num}张牌`, function (card, player, target) {
							return target.countCards("he");
						})
						.set("ai", function (target) {
							const player = _status.event.player;
							return get.effect(target, { name: "shunshou_copy2" }, player, player);
						})
						.forResult();
				} else {
					event.result = await player.chooseBool(get.prompt(event.skill), `观看牌堆顶五张牌并获得至多${num}张牌`).forResult();
				}
				event.result.cost_data = num;
			},
			async content(event, trigger, player) {
				let num = event.cost_data;
				player.changeZhuanhuanji(event.name);
				if (player.storage[event.name]) {
					player.addAdditionalSkills(event.name, []);
					let cards = game.cardsGotoOrdering(get.cards(5)).cards;
					const result = await player
						.chooseButton([`是否获得至多${num}张牌？`, cards], [1, num])
						.set("ai", function (button) {
							/* if (ui.selected.buttons.length + 1 >= _status.event.maxNum) {
								return 0;
							} */
							return get.value(button.link);
						})
						.set("maxNum", num)
						.forResult();
					if (result.bool) {
						await player.gain(result.links, "gain2");
						cards.removeArray(result.links);
					}
					await game.cardsGotoPile(cards.reverse(), "insert");
					//await player.addSkills('new_reyiji');
					/* if (!result.bool || result.links.length < num) {
						//await player.addAdditionalSkills(event.name, get.info(event.name)?.derivation);
						await player.addSkills('new_reyiji');
					} */
				} else {
					const target = event.targets[0];
					const result = await player
						//.discardPlayerCard(target, "he", `是否弃置${get.translation(target)}至多${num}张牌?`, [1, num], "visible")
						.gainPlayerCard(target, "he", `是否获得${get.translation(target)}至多${num}张牌?`, [1, num], "visible")
						.set("ai", function (button) {
							if (ui.selected.buttons.length + 1 >= _status.event.maxNum && player == _status.currentPhase) {
								return 5 - get.value(button.link);
							}
							return get.value(button.link);
						})
						.set("maxNum", num)
						.forResult();
					if (result?.bool && result.links?.length >= num) {
						if (_status.currentPhase) {
							await _status.currentPhase.executeDelayCardEffect("shandian");
						}
					}
				}
			},
			//derivation: "new_reyiji",
			group: "xinxhjxianmou_change",
			subSkill: {
				change: {
					audio: "xianmou",
					audioname: ["yj_sb_guojia_shadow"],
					trigger: {
						global: "phaseBefore",
						player: "enterGame",
					},
					filter(event, player) {
						return event.name != "phase" || game.phaseNumber == 0;
					},
					prompt2(event, player) {
						return "切换【先谋】为状态" + (player.storage.xianmou ? "阳" : "阴");
					},
					check: () => Math.random() > 0.5,
					content() {
						player.changeZhuanhuanji("xinxhjxianmou");
					},
				},
			},
		},
		xinxhjlunshi: {
			audio: 'lunshi',
			audioname: ["yj_sb_guojia_shadow"],
			position: "hse",
			enable: "chooseToUse",
			filter(event, player) {
				if (!player.countCards("hs")) {
					return false;
				}
				if (player.countCards("h", { color: "black" }) != player.countCards("h", { color: "red" })) {
					return false;
				}
				if (event.type != "wuxie") {
					return false;
				}
				let info = event.info_map;
				if (!info || get.type(info.card) != "trick") {
					return false;
				}
				return info.player != info.target;
			},
			filterCard: true,
			viewAs: {
				name: "wuxie",
			},
			viewAsFilter(player) {
				if (!player.countCards("hes")) {
					return false;
				}
				if (player.countCards("h", { color: "black" }) != player.countCards("h", { color: "red" })) {
					return false;
				}
				return true;
			},
			prompt: "将一张手牌当无懈可击使用",
			check(card) {
				return 8 - get.value(card);
			},
			group: "xinxhjlunshi_nowuxie",
			subSkill: {
				nowuxie: {
					trigger: {
						player: "useCard",
					},
					forced: true,
					locked: false,
					popup: false,
					filter(event, player) {
						return event.card.name == "wuxie" && event.skill && event.skill == "xinxhjlunshi";
					},
					content() {
						trigger.directHit.addArray(game.players);
					},
				},
			},
		},
		//谋沮授
		xinxhjzuojun: {
			audio: 'dcsbzuojun',
			enable: "phaseUse",
			usable: 1,
			filterTarget: true,
			async content(event, trigger, player) {
				const target = event.targets[0];
				const result = (await target.draw(3).forResult()).cards;
				const { index } = await target
					.chooseControl()
					.set("choiceList", [
						`${get.translation(result)}不能被你使用且不计入你的手牌上限`,
						`失去1点体力，再摸一张牌并使用其中任意张牌`,
					])
					.set("ai", () => {
						const player = get.player(),
							cards = get.event().cards;
						let eff = get.effect(player, { name: "losehp" }, player, player) + get.effect(player, { name: "draw" }, player, player);
						for (const card of cards) {
							eff += player.getUseValue(card);
						}
						return eff > 6 ? 1 : 0;
					})
					.set("cards", result)
					.forResult();
				if (index == 0) {
					target.addGaintag(result, "xinxhjzuojun_tag");
					target.addSkill("xinxhjzuojun_effect");
					target
						.when({ player: "phaseBegin" }, false)
						.filter(evt => evt != event.getParent("phase"))
						.assign({
							firstDo: true,
						})
						.step(async (event, trigger, player) => {
							player.removeGaintag("xinxhjzuojun_tag", result);
							if (!player.hasCard(card => card.hasGaintag("xinxhjzuojun_tag"))) {
								player.removeSkill("xinxhjzuojun_effect");
							}
						})
						.finish();
				} else {
					await target.loseHp();
					const result2 = (await target.draw().forResult()).cards;
					let cards = result.slice().concat(result2);
					while (cards.some(i => get.owner(i) == target && target.hasUseTarget(i))) {
						const result = await target
							.chooseToUse(function (card, player, event) {
								if (get.itemtype(card) != "card" || !get.event().cards.includes(card)) {
									return false;
								}
								return lib.filter.filterCard.apply(this, arguments);
							}, "佐军：是否使用其中的一张牌？")
							.set("cards", cards)
							.set("addCount", false)
							.forResult();
						if (result.bool) {
							cards.removeArray(result.cards);
							await game.delayx();
						} else {
							break;
						}
					}
					/* cards = cards.filter(i => get.owner(i) == target);
					if (cards.length) {
						await target.modedDiscard(cards);
					} */
				}
			},
			ai: {
				order: 10,
				result: {
					target: 1,
				},
			},
			subSkill: {
				tag: {},
				effect: {
					charlotte: true,
					onremove(player) {
						player.removeGaintag("xinxhjzuojun_tag");
					},
					mod: {
						ignoredHandcard(card, player) {
							if (card.hasGaintag("xinxhjzuojun_tag")) {
								return true;
							}
						},
						cardDiscardable(card, player, name) {
							if (name == "phaseDiscard" && card.hasGaintag("xinxhjzuojun_tag")) {
								return false;
							}
						},
						cardEnabled(card, player) {
							if (card.cards?.some(i => i.hasGaintag("xinxhjzuojun_tag"))) {
								return false;
							}
						},
						cardSavable(card, player) {
							if (card.cards?.some(i => i.hasGaintag("xinxhjzuojun_tag"))) {
								return false;
							}
						},
					},
				},
			},
		},
		xinxhjmuwang: {
			audio: 'dcsbmuwang',
			trigger: {
				player: "loseAfter",
				global: ["cardsDiscardAfter", "loseAsyncAfter", "equipAfter"],
			},
			forced: true,
			filter(event, player) {
				if (player.getHistory("useSkill", evt => evt.skill == "xinxhjmuwang").length) {
					return false;
				}
				const filter = card => ["basic", "trick"].includes(get.type(card));
				if (event.name != "cardsDiscard") {
					return event.getd(player, "cards2").filter(filter).length > 0;
				} else {
					if (event.cards.filterInD("d").filter(filter).length <= 0) {
						return false;
					}
					const evt = event.getParent();
					if (evt.name != "orderingDiscard") {
						return false;
					}
					const evtx = evt.relatedEvent || evt.getParent();
					if (evtx.player != player) {
						return false;
					}
					return player.hasHistory("lose", evtxx => {
						return evtx == (evtxx.relatedEvent || evtxx.getParent());
					});
				}
			},
			async content(event, trigger, player) {
				let cards;
				if (trigger.name != "cardsDiscard") {
					cards = trigger.getd(player, "cards2");
				} else {
					cards = trigger.cards.filterInD("d");
				}
				cards = cards.filter(card => ["basic", "trick"].includes(get.type(card)));
				if (cards.length) {
					const next = player.gain(cards.randomGet(), "gain2");
					next.gaintag.add("xinxhjmuwang_tag");
					await next;
					player.addTempSkill("xinxhjmuwang_lose");
				}
			},
			subSkill: {
				tag: {},
				lose: {
					charlotte: true,
					onremove(player) {
						player.removeGaintag("xinxhjmuwang_tag");
					},
					trigger: {
						player: "loseAfter",
						global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
					},
					filter(event, player) {
						if (!player.countCards("he")) {
							return false;
						}
						const evt = event.getl(player);
						if (!evt || !evt.cards2 || !evt.cards2.length) {
							return false;
						}
						if (event.name == "lose") {
							return evt.cards2.some(card => (evt.gaintag_map[card.cardid] || []).includes("xinxhjmuwang_tag"));
						}
						return player.hasHistory("lose", evt => {
							if (event != evt.getParent()) {
								return false;
							}
							return evt.cards2.some(card => (evt.gaintag_map[card.cardid] || []).includes("xinxhjmuwang_tag"));
						});
					},
					forced: true,
					popup: false,
					async content(event, trigger, player) {
						/* if (player.countCards("he")) {
							await player.chooseToDiscard("he", true);
						} */
						player.draw()
					},
				},
			},
		},
		//手杀黄祖
		xinxhjmbchizhang: {
			mod: {
				targetInRange(card, player, target) {
					if (get.is.damageCard(card)) {
						return true;
					}
				},
			},
			locked: false,
			audio: "mbchizhang",
			trigger: { player: "useCardToPlayered" },
			filter(event, player) {
				return (
					event.isFirstTarget &&
					get.is.damageCard(event.card) &&
					player.countDiscardableCards(player, "h") &&
					player.hasHistory("lose", evt => {
						const evtx = evt.relatedEvent || evt.getParent();
						return evtx == event.getParent() && evt.hs?.length;
					})
				);
			},
			async cost(event, trigger, player) {
				event.result = await player
					.chooseToDiscard(get.prompt2(event.skill), [1, Infinity], "chooseonly")
					.set("ai", card => {
						const suits = ui.selected.cards?.map(card => get.suit(card, get.player())).unique();
						if (suits?.includes(get.suit(card, get.player()))) {
							return 0;
						}
						return 6 - get.value(card);
					})
					.forResult();
			},
			logTarget(event, player) {
				return game.filterPlayer(target => target != player);
			},
			async content(event, trigger, player) {
				const cards = event.cards,
					colors = cards.map(card => get.color(card)).unique(),
					targets = game.filterPlayer(target => target != player);
				await player.discard(cards);
				targets.forEach(target => target.addTempSkill(event.name + "_global"));
				trigger.card.storage ??= {};
				trigger.card.storage.xinxhjmbchizhang = [targets, colors];
			},
			ai: {
				unequip: true,
				"unequip_ai": true,
				skillTagFilter(player, tag, arg) {
					if (tag == "unequip" && !get.is.damageCard(arg)) {
						return false;
					}
					if (tag == "unequip_ai" && (!arg)) {
						return false;
					}
				},
			},
			subSkill: {
				global: {
					charlotte: true,
					mod: {
						cardEnabled(card, player) {
							let evt = get.event();
							if (evt.name != "chooseToUse") {
								evt = evt.getParent("chooseToUse");
							}
							if (!evt?.respondTo || !evt.respondTo[1]?.storage?.xinxhjmbchizhang) {
								return;
							}
							const color = get.color(card, player),
								colors = evt.respondTo[1].storage.xinxhjmbchizhang[1],
								targets = evt.respondTo[1].storage.xinxhjmbchizhang[0];
							if (color === "unsure" || !targets.includes(player)) {
								return;
							}
							if (colors.includes(color)) {
								return false;
							}
						},
						cardRespondable(card, player) {
							let evt = get.event();
							if (evt.name != "chooseToRespond") {
								evt = evt.getParent("chooseToRespond");
							}
							if (!evt?.respondTo || !evt.respondTo[1]?.storage?.xinxhjmbchizhang) {
								return;
							}
							const color = get.color(card, player),
								colors = evt.respondTo[1].storage.xinxhjmbchizhang[1],
								targets = evt.respondTo[1].storage.xinxhjmbchizhang[0];
							if (color === "unsure" || !targets.includes(player)) {
								return;
							}
							if (colors.includes(color)) {
								return false;
							}
						},
					},
				},
			},
		},
		xinxhjmbduanyang: {
			audio: "mbduanyang",
			logAudio: index => (typeof index === "number" ? "mbduanyang" + index + ".mp3" : 2),
			trigger: {
				player: "loseAfter",
				global: ["loseAsyncAfter", "equipAfter", "addJudgeAfter", "gainAfter", "addToExpansionAfter"],
			},
			filter(event, player) {
				if (event.getParent().name == "useCard") {
					return false;
				}
				return event.getl(player)?.hs?.some(card => get.is.damageCard(card, false) && !get.owner(card));
			},
			async content(event, trigger, player) {
				const cards = trigger
					.getl(player)
					.hs.filter(card => get.is.damageCard(card, false) && !get.owner(card))
				//.randomGet();
				await player.addToExpansion(cards, "gain2").set("gaintag", ["xinxhjmbduanyang"]);
			},
			intro: {
				markcount: "expansion",
				content: "expansion",
			},
			group: ["xinxhjmbduanyang_damage", "xinxhjmbduanyang_use"],
			subSkill: {
				use: {
					audio: ["mbduanyang1.mp3", "mbduanyang2.mp3"],
					charlotte: true,
					trigger: {
						global: "phaseEnd",
					},
					filter(event, player) {
						return player.getExpansions("xinxhjmbduanyang").length;
					},
					forced: true,
					async content(event, trigger, player) {
						for (const card of player.getExpansions("xinxhjmbduanyang")) {
							if (!player.hasUseTarget(card, true, false)) {
								continue;
							}
							player.$gain2(card);
							const sha = get.autoViewAs(card, [card]);
							//sha.storage ??= {};
							sha.storage.xinxhjmbduanyang = true;
							await player.chooseUseTarget(sha, [card], true, false);
						}
						await player.loseToDiscardpile(player.getExpansions("xinxhjmbduanyang"));
					},
				},
				damage: {
					popup: false,
					trigger: { source: "damageSource" },
					filter(event, player) {
						const target = event.player;
						return (
							event.card?.storage?.xinxhjmbduanyang &&
							event.card?.name == "sha" &&
							target.isIn() &&
							target.countDiscardableCards(player, "hej") > 0
						);
					},
					async cost(event, trigger, player) {
						const target = trigger.player;
						event.result = await player
							.discardPlayerCard(get.prompt2(event.skill, target), target, "hej", [1, 2])
							.forResult();
					},
					logTarget: "player",
					async content(event, trigger, player) {
						const target = trigger.player;
						player.logSkill("mbduanyang", target, null, null, [3]);
						await player.draw(4);
					},
				},
			},
		},
		//新杀谋吕蒙
		xinxhjdcsbhengye: {
			audio: "ext:永夜之境/audio:2",
			audioname: ["xinxhj_dc_sb_lvmeng_shadow"],
			trigger: {
				source: ["damageSource"],
				player: ["phaseDrawBegin2", 'damageAfter'],
				global: "phaseBegin",
			},
			init(player, skill) {
				player.setStorage(skill, [0, 0, 0, 0]);
				player.addTip(skill, `${get.translation(skill)} ${player.getStorage(skill).join(" ")}`);
			},
			onremove(player, skill) {
				player.setStorage(skill, [0, 0, 0, 0]);
				player.removeTip(skill);
			},
			forced: true,
			filter(event, player) {
				const list = player.getStorage("xinxhjdcsbhengye", [0, 0, 0, 0]);
				if (event.name == "phase") {
					return event.player == player && list.some(num => num >= 3);
				}
				if (event.name == "phaseDraw") {
					return !event.numFixed && list[0] > 0;
				}
				/*if (!event.hasNature()) {
					return false;
				}*/
				return list.some(num => num < 5);
			},
			async content(event, trigger, player) {
				const skill = event.name;
				/* if (trigger.name == "die") {
					get.info(skill).init(player, skill);
					return;
				} */
				if (trigger.name == "phase") {
					await player.recover();
					return;
				}
				const list = player.getStorage(skill, [0, 0, 0, 0]);
				if (trigger.name == "phaseDraw") {
					trigger.num += list[0];
					return;
				}
				const result = await player
					.chooseButton(
						[
							"横野：令一项数值+1（至多+5）",
							[
								[0, "摸牌阶段摸牌数"],
								[1, "出牌阶段出杀次数"],
								[2, "手牌上限"],
								[3, "攻击范围"],
							].map(i => [[i], "tdnodes"]),
							[
								dialog => {
									dialog.buttons.forEach(i => {
										i.style.setProperty("width", "200px", "important");
										i.style.setProperty("text-align", "center", "important");
									});
								},
								"handle",
							],
						],
						true
					)
					.set("filterButton", button => {
						const { link } = button,
							{ player, numList } = get.event();
						return numList[link] < 5;
					})
					.set("numList", list)
					.set("ai", button => {
						const { link } = button,
							{ player, numList } = get.event();
						if (link == 1) {
							if (
								player.countCards("hs", card => {
									if (get.name(card) != "sha") {
										return false;
									}
									return player.hasValueTarget(card, null, false) && !player.hasValueTarget(card);
								})
							) {
								return 3;
							}
							return 0;
						}
						return 3.1 - link;
					})
					.forResult();
				if (result?.bool) {
					for (let i = 0; i < list.length; i++) {
						if (result.links?.length && !result.links.includes(i)) {
							continue;
						}
						list[i] = Math.min(5, list[i] + 1);
					}
					player.setStorage(skill, list);
					player.addTip(skill, `${get.translation(skill)} ${player.getStorage(skill).join(" ")}`);
					if (list.some(num => num >= 5)) {
						player.changeSkin({ characterName: "xinxhj_dc_sb_lvmeng" }, "xinxhj_dc_sb_lvmeng_shadow");
					}
				}
			},
			mod: {
				maxHandcard(player, num) {
					const list = player.getStorage("xinxhjdcsbhengye", [0, 0, 0, 0]);
					return num + list[2];
				},
				attackRange(player, num) {
					const list = player.getStorage("xinxhjdcsbhengye", [0, 0, 0, 0]);
					return num + list[3];
				},
				cardUsable(card, player, num) {
					if (card.name != "sha") {
						return;
					}
					const list = player.getStorage("xinxhjdcsbhengye", [0, 0, 0, 0]);
					return num + list[1];
				},
			},
		},
		xinxhjdcsbyingbo: {
			audio: "ext:永夜之境/audio:2",
			audioname: ["xinxhj_dc_sb_lvmeng_shadow"],
			trigger: { player: "useCard" },
			filter(event, player) {
				return get.is.damageCard(event.card);
			},
			forced: true,
			async content(event, trigger, player) {
				/* if (
					game.getRoundHistory("useCard",
						evt => {
							return evt.card.name == trigger.card.name && evt != trigger;
						},
						0,
						null,
						trigger
					).length
				){ */
				const hasUsed =
					//game.players.concat(game.dead).some(p => {
					game.findPlayer2(p => {
						return p.getRoundHistory(
							"useCard",
							evt => {
								return evt.card.name == trigger.card.name && evt != trigger;
							},
							0,
							null,
							trigger
						).length > 0;
					});
				if (hasUsed) {
					player.markAuto("xinxhjdcsbyingbo_fire", trigger.card);
					player.addTempSkill("xinxhjdcsbyingbo_fire");
				} else {
					trigger.directHit.addArray(game.players);
					player
						.when("useCardAfter")
						.filter(evt => evt == trigger)
						.step(async (event, trigger, player) => {
							if (!game.hasPlayer(current => current != player)) {
								return;
							}
							const cards = trigger.cards?.filterInD();
							if (!cards?.length) {
								return;
							}
							const result = await player
								.chooseTarget(`英博：是否将${get.translation(cards)}交给一名其他角色？`, lib.filter.notMe)
								.set("ai", target => {
									const { player, cardx } = get.event();
									return cardx.reduce((sum, card) => {
										return sum + get.value(card, target) * get.attitude(player, target);
									}, 0);
								})
								.set("cardx", cards)
								.forResult();
							if (result?.bool && result.targets?.length) {
								const target = result.targets[0];
								player.logSkill("xinxhjdcsbyingbo", target);
								await target.gain(cards, "gain2");
							}
						});
				}
			},
			subSkill: {
				fire: {
					charlotte: true,
					onremove: true,
					trigger: { source: "damageBegin1" },
					filter(event, player) {
						if (!event.card || !event.notLink()) {
							return false;
						}
						return player.getStorage("xinxhjdcsbyingbo_fire").includes(event.card);
					},
					forced: true,
					popup: false,
					async content(event, trigger, player) {
						game.setNature(trigger, "fire");
						trigger.num++;
					},
				},
			},
		},
		//司马师
		xinxhjdcsanshi: {
			audio: "dcsanshi",
			trigger: {
				global: "phaseBefore",
				player: "enterGame",
			},
			forced: true,
			filter(event, player) {
				return event.name != "phase" || game.phaseNumber == 0;
			},
			group: ["xinxhjdcsanshi_gain", "xinxhjdcsanshi_directHit"],
			async content(event, trigger, player) {
				const recordedNumbers = [];
				let num = get.rand(0, ui.cardPile.childNodes.length - 1);
				for (let i = 0; i < ui.cardPile.childNodes.length; i++) {
					let j = i + num;
					if (j >= ui.cardPile.childNodes.length) {
						j -= ui.cardPile.childNodes.length;
					}
					const card = ui.cardPile.childNodes[j],
						number = get.number(card, false);
					if (!recordedNumbers.includes(number)) {
						recordedNumbers.add(number);
						card.storage.xinxhjdcsanshi = true;
						num = get.rand(0, ui.cardPile.childNodes.length - 1);
					}
				}
				player.addSkill("xinxhjdcsanshi_mark");
			},
			subSkill: {
				gain: {
					audio: "dcsanshi",
					trigger: { global: "phaseEnd" },
					filter(event, player) {
						return game.hasGlobalHistory("cardMove", evt => {
							if (evt.name == "lose") {
								if (evt.position !== ui.discardPile) {
									return false;
								}
							} else if (evt.name !== "cardsDiscard") {
								return false;
							}
							if (lib.skill.xinxhjdcsanshi_gain.notUseOrRespond(evt, player)) {
								return evt.cards.some(card => {
									return card.storage.xinxhjdcsanshi && get.position(card) === "d";
								});
							}
							return false;
						});
					},
					forced: true,
					notUseOrRespond(event, player) {
						if (event.name !== "cardsDiscard") {
							return true;
						}
						const evtx = event.getParent();
						if (evtx.name !== "orderingDiscard") {
							return true;
						}
						const evt2 = evtx.relatedEvent || evtx.getParent();
						return !["useCard", "respond"].includes(evt2.name) || evt2.player !== player;
					},
					async content(event, trigger, player) {
						const cards = [];
						game.checkGlobalHistory("cardMove", evt => {
							if (evt.name == "lose") {
								if (evt.position !== ui.discardPile) {
									return false;
								}
							} else if (evt.name !== "cardsDiscard") {
								return false;
							}
							if (lib.skill.xinxhjdcsanshi_gain.notUseOrRespond(evt, player)) {
								cards.addArray(
									evt.cards.filter(card => {
										return card.storage.xinxhjdcsanshi && get.position(card) === "d";
									})
								);
							}
						});
						if (cards.length) {
							player.gain(cards, "gain2");
						}
					},
				},
				directHit: {
					audio: "dcsanshi",
					trigger: { player: "useCard" },
					forced: true,
					filter(event, player) {
						return (
							event.cards &&
							event.cards.some(card => {
								return card.storage.xinxhjdcsanshi;
							})
						);
					},
					async content(event, trigger, player) {
						trigger.directHit.addArray(game.filterPlayer());
						game.log(trigger.card, "不可被响应");
					},
				},
				mark: {
					trigger: {
						player: "gainEnd",
						global: "loseAsyncEnd",
					},
					forced: true,
					popup: false,
					silent: true,
					lastDo: true,
					filter(event, player) {
						if (!["xinxhjdcsanshi", "xinxhjdcchenlve"].every(skill => player.hasSkill(skill, null, false, false))) {
							return false;
						}
						const cards = event.getg(player);
						if (!cards.length) {
							return false;
						}
						return cards.some(card => card.storage.xinxhjdcsanshi);
					},
					async content(event, trigger, player) {
						var cards = trigger.getg(player);
						if (cards.length) {
							cards = cards.filter(card => card.storage.xinxhjdcsanshi);
							player.addGaintag(cards, "xinxhjdcsanshi_tag");
						}
					},
				},
			},
			ai: {
				threaten: 3,
			},
		},
		xinxhjdczhenrao: {
			audio: "dczhenrao",
			trigger: { global: "useCardToPlayered" },
			filter(event, player) {
				if (
					(() => {
						if (event.player === player) {
							if (!event.isFirstTarget) {
								return false;
							}
							return event.targets.some(target => target !== player);
						}
						return event.target === player;
					})()
				) {
					return event.targets.concat(event.player).some(target => {
						return target.countCards("h") > player.countCards("h") && !player.getStorage("xinxhjdczhenrao").includes(target);
					});
				}
				return false;
			},
			direct: true,
			async content(event, trigger, player) {
				const result = await player
					.chooseTarget(get.prompt("xinxhjdczhenrao"), "对一名可选角色造成1点伤害", (card, player, target) => {
						return get.event().targets.includes(target) && !player.getStorage("xinxhjdczhenrao").includes(target);
					})
					.set(
						"targets",
						trigger.targets.concat(trigger.player).filter(target => target.countCards("h") > player.countCards("h"))
					)
					.set("ai", target => {
						const player = get.player();
						return get.damageEffect(target, player, player);
					})
					.forResult();
				if (!result.bool) {
					return;
				}
				const target = result.targets[0];
				player.logSkill("xinxhjdczhenrao", target);
				if (!player.storage.xinxhjdczhenrao) {
					player.when({ global: "phaseAfter" }).step(async () => player.unmarkSkill("xinxhjdczhenrao"));
				}
				player.markAuto("xinxhjdczhenrao", target);
				await target.damage();
				await game.delayx();
			},
			intro: {
				content: "已以此法对$造成过伤害",
				onunmark: true,
			},
			ai: {
				expose: 0.2,
				threaten: 3,
			},
		},
		xinxhjdcchenlve: {
			audio: "dcchenlve",
			enable: "phaseUse",
			limited: true,
			skillAnimation: true,
			animationColor: "thunder",
			manualConfirm: true,
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				const cards = ["cardPile", "discardPile"].map(pos => Array.from(ui[pos].childNodes)).flat();
				const sishiList = [];
				const isSishi = card => card.storage.xinxhjdcsanshi;
				const lose_list = [],
					players = game.filterPlayer();
				players.forEach(current => {
					const pos = "ej" + (current !== player ? "h" : "");
					const sishis = current.getCards(pos, isSishi);
					if (sishis.length > 0) {
						current.$throw(sishis);
						lose_list.push([current, sishis]);
						sishiList.addArray(sishis);
					}
				});
				if (lose_list.length) {
					await game.loseAsync({ lose_list }).setContent("chooseToCompareLose");
					await game.delayx();
				}
				sishiList.addArray(cards.filter(isSishi));
				player.gain(sishiList, "gain2");
				player
					.when("phaseUseEnd")
					.filter(evt => evt === event.getParent("phaseUse"))
					.step(async () => {
						const lose_list = [],
							players = game.filterPlayer();
						players.forEach(current => {
							const cards = current.getCards("hej").filter(card => sishiList.includes(card));
							if (cards.length > 0) {
								current.$throw(cards, 1000);
								lose_list.push([current, cards]);
							}
						});
						if (lose_list.length) {
							await game.loseAsync({ lose_list }).setContent("chooseToCompareLose");
						}
						await game.cardsGotoSpecial(sishiList);
						game.log(sishiList, "被移出了游戏");
					});
				player
					.when("phaseBegin")
					.assign({
						forceDie: true,
					})
					.step(async () => {
						await game.cardsDiscard(sishiList);
						game.log(sishiList, "被置入了弃牌堆");
					});
			},
			ai: {
				order: 10,
				result: {
					player(player) {
						/* if (player.getHp(true) > 1 && player.countCards("he") > 1) {
							return 0;
						}
						if (!player.isDamaged() && (player.countCards("h") > 1 || player.countCards("e") > 0)) {
							return 0;
						} */
						return 10;
					},
				},
				combo: "xinxhjdcsanshi",
			},
		},
		//威张辽
		xinxhjdcyuxi: {
			audio: "dcyuxi",
			trigger: {
				source: "damageBegin3",
				player: "damageBegin4",
			},
			frequent: true,
			async content(event, trigger, player) {
				player.addSkill(event.name + "_effect");
				await player.draw().set('gaintag', [event.name]);
			},
			subSkill: {
				effect: {
					inherit: "nocount",
					filter(event, player) {
						return (
							event.addCount !== false &&
							player.hasHistory("lose", evt => {
								return (
									(evt.relatedEvent || evt.getParent()) == event &&
									evt.hs.length &&
									Object.values(evt.gaintag_map).flat().includes("xinxhjdcyuxi")
								);
							})
						);
					},
					mod: {
						cardUsable(card) {
							if (get.number(card) === "unsure" || card.cards?.some(card => card.hasGaintag("xinxhjdcyuxi"))) {
								return Infinity;
							}
						},
						ignoredHandcard(card, player) {
							if (card.hasGaintag("xinxhjdcyuxi")) {
								return true;
							}
						},
						cardDiscardable(card, player, name) {
							if (name == 'phaseDiscard' && card.hasGaintag("xinxhjdcyuxi")) {
								return false;
							}
						},
					},
				},
			},
		},
		xinxhjdcporong: {
			audio: "dcporong",
			comboSkill: true,
			mod: {
				aiOrder(player, card, num) {
					if (typeof card == "object") {
						const evt = lib.skill.xinxhjdcporong.getLastUsed(player);
						if (evt?.card && get.is.damageCard(evt.card) && !evt.xinxhjdcporong && get.name(card, player) == "sha") {
							return num + 10;
						}
					}
				},
			},
			getLastUsed(player, event) {
				/* var history = player.getAllHistory("useCard");
				var index;
				if (event) {
					index = history.indexOf(event) - 1;
				} else {
					index = history.length - 1;
				}
				if (index >= 0) {
					return history[index];
				}
				return false; */
				var history = player.getAllHistory("useCard");
				var index;
				if (event) {
					index = history.indexOf(event) - 1;
				} else {
					index = history.length - 1;
				}
				while (index >= 0) {
					var evt = history[index];
					//伤害牌返回
					if (get.is.damageCard(evt.card) || evt.card.name === "sha") {
						return evt;
					}
					//否则跳过
					index--;
				}
				return false;
			},
			trigger: { player: "useCard" },
			filter(event, player) {
				if (event.card.name != "sha") {
					return false;
				}
				const evt = lib.skill.xinxhjdcporong.getLastUsed(player, event);
				if (!evt || !evt.card || evt.xinxhjdcporong) {
					return false;
				}
				return get.is.damageCard(evt.card);
			},
			locked: false,
			logTarget(event, player) {
				return event.targets.sortBySeat();
			},
			check(event, player) {
				if (event.targets.reduce((sum, target) => sum + get.effect(target, event.card, player, player), 0) > 0) {
					return true;
				}
				const targets = event.targets
					.map(target =>
						[target, target.getNext(), target.getPrevious()].filter(current => current != player && current.countGainableCards(player, "he"))
					)
					.flat();
				return targets.reduce((sum, target) => sum + get.effect(target, { name: "shunshou_copy2" }, player, player), 0) > 0;
			},
			async content(event, trigger, player) {
				const { targets, name } = event;
				trigger.set(name, true);
				//game.log(trigger.card, "不可被响应");
				//trigger.directHit.addArray(game.filterPlayer());
				for (const target of targets) {
					const targetsx = [target, target.getNext(), target.getPrevious()]
						.filter(current => current != player && current.countGainableCards(player, "he"))
						.sortBySeat();
					if (targetsx.length) {
						await player.gainMultiple(targetsx, "he");
					}
				}
				trigger.effectCount++;
				await player.changeSkin({ characterName: "xinxhj_v_zhangliao" }, "xinxhj_v_zhangliao");
			},
			init(player, skill) {
				player.addSkill(skill + "_mark");
			},
			onremove(player, skill) {
				player.removeSkill(skill + "_mark");
			},
			ai: {
				directHit_ai: true,
				skillTagFilter(player, tag, arg) {
					if (!arg?.card || get.name(arg.card) !== "sha") {
						return;
					}
					const evt = lib.skill.xinxhjdcporong.getLastUsed(player);
					return evt?.card && get.is.damageCard(evt.card) && !evt.xinxhjdcporong;
				},
			},
			subSkill: {
				mark: {
					init(player, skill) {
						const evt = lib.skill.xinxhjdcporong.getLastUsed(player);
						if (evt?.card && get.is.damageCard(evt.card) && !evt.xinxhjdcporong) {
							player.addTip(skill, "破戎 可连击");
						}
					},
					onremove(player, skill) {
						player.removeTip(skill);
					},
					charlotte: true,
					trigger: { player: ["useCard1", "useCardAfter"] },
					forced: true,
					popup: false,
					firstDo: true,
					async content(event, trigger, player) {
						if (event.triggername == "useCard1") {
							if (get.is.damageCard(trigger.card)) {
								player.changeSkin({ characterName: "xinxhj_v_zhangliao" }, "xinxhj_v_zhangliao_shadow");
								player.addTip(event.name, "破戎 可连击");
							}
							/* else {
								player.removeTip(event.name);
							} */
						}
						if (trigger.xinxhjdcporong) {
							player.removeTip(event.name);
						}
					},
				},
			},
		},
		//应天司马懿
		xinxhjjilin: {
			audio: "jilin",
			trigger: {
				global: "phaseBefore",
				player: "enterGame",
			},
			filter(event, player) {
				return event.name != "phase" || game.phaseNumber == 0;
			},
			forced: true,
			locked: false,
			logAudio: () => ["jilin1.mp3"],
			async content(event, trigger, player) {
				const cards = get.cards(2);
				const next = player.addToExpansion(cards, "draw");
				next.gaintag.add(event.name);
				await next;
			},
			marktext: "志",
			intro: {
				markcount: "expansion",
				mark(dialog, content, player) {
					const cards = player.getExpansions("xinxhjjilin"),
						mingzhi = cards.filter(card => card.storage.xinxhjjilin),
						hidden = cards.removeArray(mingzhi);
					if (mingzhi.length) {
						dialog.addText("已明之志");
						dialog.addSmall(mingzhi);
					}
					if (hidden.length) {
						if (player == game.me || player.isUnderControl()) {
							dialog.addText("未明之志");
							dialog.addSmall(hidden);
						} else {
							return "共有" + get.cnNumber(hidden.length) + "张暗“志”";
						}
					}
				},
				async content(event, trigger, player) {
					const cards = player.getExpansions("xinxhjjilin"),
						mingzhi = cards.filter(card => card.storage.xinxhjjilin),
						hidden = cards.removeArray(mingzhi);
					if (mingzhi.length) {
						dialog.addText("已明之志");
						dialog.addSmall(mingzhi);
					}
					if (hidden.length) {
						if (player == game.me || player.isUnderControl()) {
							dialog.addText("未明之志");
							dialog.addSmall(hidden);
						} else {
							return "共有" + get.cnNumber(hidden.length) + "张暗“志”";
						}
					}
				},
			},
			group: ["xinxhjjilin_kanpo", "xinxhjjilin_change"],
			subSkill: {
				kanpo: {
					audio: "jilin",
					logAudio: () => ["jilin2.mp3", "jilin3.mp3"],
					trigger: {
						target: "useCardToTarget",
					},
					filter(event, player) {
						return event.player != player && player.getExpansions("xinxhjjilin").some(card => !card.storage.xinxhjjilin);
					},
					async cost(event, trigger, player) {
						const hidden = player.getExpansions("xinxhjjilin").filter(card => !card.storage.xinxhjjilin);
						const goon = get.effect(player, trigger.card, trigger.player, player) < 0;
						const suits = player
							.getExpansions("xinxhjjilin")
							.filter(card => card.storage.xinxhjjilin)
							.map(card => get.suit(card))
							.toUniqued();
						if (hidden.length == 1) {
							const { bool } = await player
								.chooseBool("戢鳞：明置一张“志”", `令${get.translation(trigger.card)}对你无效`)
								.set("choice", goon)
								.forResult();
							event.result = {
								bool: bool,
								cost_data: hidden,
							};
						} else {
							const { bool, links } = await player
								.chooseButton(["戢鳞：明置一张“志”", hidden])
								.set("ai", button => {
									const player = get.player(),
										card = button.link,
										suits = get.event().suits;
									if (!get.event().goon) {
										return 0;
									}
									if (!suits.includes(get.suit(card))) {
										return 10;
									}
									return 6 - get.value(card);
								})
								.set("suits", suits)
								.set("goon", goon)
								.forResult();
							event.result = {
								bool: bool,
								cost_data: links,
							};
						}
					},
					async content(event, trigger, player) {
						await player.showCards(event.cost_data, get.translation(player) + "发动了【戢鳞】");
						event.cost_data[0].storage.xinxhjjilin = true;
						trigger.getParent().excluded.add(player);
					},
				},
				change: {
					audio: "jilin",
					logAudio: () => ["jilin4.mp3", "jilin5.mp3"],
					trigger: {
						player: "phaseBegin",
					},
					filter(event, player) {
						return player.countCards("h") && player.getExpansions("xinxhjjilin").some(card => !card.storage.xinxhjjilin);
					},
					async cost(event, trigger, player) {
						const hidden = player.getExpansions("xinxhjjilin").filter(card => !card.storage.xinxhjjilin);
						const next = player.chooseToMove("戢鳞：是否交换“志”和手牌？");
						next.set("list", [
							[get.translation(player) + "（你）的未明之“志”", hidden],
							["手牌区", player.getCards("h")],
						]);
						next.set("filterMove", (from, to) => {
							return typeof to != "number";
						});
						next.set("processAI", list => {
							let player = get.player(),
								cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
									return get.useful(a) - get.useful(b);
								}),
								cards2 = cards.splice(0, player.getExpansions("xinxhjjilin").length);
							return [cards2, cards];
						});
						const { bool, moved } = await next.forResult();
						event.result = {
							bool: bool,
							cost_data: moved,
						};
					},
					async content(event, trigger, player) {
						const moved = event.cost_data;
						const pushs = moved[0],
							gains = moved[1];
						pushs.removeArray(player.getExpansions("xinxhjjilin"));
						gains.removeArray(player.getCards("h"));
						if (!pushs.length || pushs.length != gains.length) return;
						const next = player.addToExpansion(pushs);
						next.gaintag.add("xinxhjjilin");
						await next;
						await player.gain(gains, "draw");
					},
				},
			},
		},
		xinxhjyingyou: {
			audio: "yingyou",
			trigger: {
				player: "phaseUseBegin",
			},
			filter(event, player) {
				return player.countCards("h") && player.getExpansions("xinxhjjilin").some(card => !card.storage.xinxhjjilin);
			},
			async cost(event, trigger, player) {
				const hidden = player.getExpansions("xinxhjjilin").filter(card => !card.storage.xinxhjjilin);
				const suits = player
					.getExpansions("xinxhjjilin")
					.filter(card => card.storage.xinxhjjilin)
					.map(card => get.suit(card))
					.toUniqued();
				const { bool, links } = await player
					.chooseButton(["英猷：你可以明志", hidden])
					.set("ai", button => {
						const player = get.player(),
							card = button.link,
							suits = get.event().suits;
						const getNum = player => {
							var list = [];
							for (var i of lib.suit) {
								list.push(player.countCards("h", { suit: i }) + 3);
							}
							return list.sort((a, b) => b - a)[0];
						};
						if (!suits.includes(get.suit(card))) {
							return 10;
						}
						if (get.suit(card) == getNum(player)) {
							return 5;
						}
						return 0;
					})
					.set("suits", suits)
					.forResult();
				event.result = {
					bool: bool,
					cost_data: links,
				};
			},
			logAudio: () => 2,
			async content(event, trigger, player) {
				await player.showCards(event.cost_data, get.translation(player) + "发动了【英猷】");
				event.cost_data[0].storage.xinxhjjilin = true;
				const num = player.getExpansions("xinxhjjilin").filter(card => card.storage.xinxhjjilin).length;
				await player.draw(num);
			},
			ai: {
				combo: "xinxhjjilin",
			},
			group: "xinxhjyingyou_draw",
			subSkill: {
				draw: {
					audio: "yingyou",
					logAudio: () => ["yingyou3.mp3", "yingyou4.mp3"],
					trigger: {
						player: "loseAfter",
						global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
					},
					filter(event, player) {
						const suits = player
							.getExpansions("xinxhjjilin")
							.filter(card => card.storage.xinxhjjilin)
							.map(card => get.suit(card))
							.toUniqued();
						const evt = event.getl(player);
						if (!evt || !evt.cards2 || !evt.cards2.length) {
							return false;
						}
						return evt.cards2.some(card => {
							return suits.includes(get.suit(card, player));
						});
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						const suits = player
							.getExpansions("xinxhjjilin")
							.filter(card => card.storage.xinxhjjilin)
							.map(card => get.suit(card))
							.toUniqued();
						const num = trigger.getl(player).cards2.filter(card => {
							return suits.includes(get.suit(card, player));
						}).length;
						await player.draw(num);
					},
				},
			},
		},
		xinxhjyingtian: {
			audio: "yingtian",
			trigger: {
				global: "dieAfter",
			},
			filter(event, player) {
				return game.countGroup() < 3;
			},
			forced: true,
			juexingji: true,
			skillAnimation: true,
			animationColor: "gray",
			async content(event, trigger, player) {
				const skill = event.name;
				player.awakenSkill(skill);
				//await player.changeSkills(get.info(skill).derivation, ["xinxhjyingyou"]);
				player.addSkill(skill + "_effect");
			},
			//derivation: ["reguicai", "rewansha", "lianpo"],
			subSkill: {
				effect: {
					mod: {
						targetInRange: () => true,
					},
				},
			},
		},
		//张怀
		xinxhjlaoyan: {
			audio: 'dclaoyan',
			trigger: { target: "useCardToTargeted" },
			filter(event, player) {
				return event.targets.length > 1;
			},
			forced: true,
			logTarget(event, player) {
				return event.targets.filter(i => i !== player);
			},
			content() {
				trigger.getParent().excluded.addArray(event.targets);
				game.log(trigger.card, "对", event.targets, "无效");
			},
			global: "xinxhjlaoyan_zhuiji",
			subSkill: {
				zhuiji: {
					ai: {
						effect: {
							player_use(card, player) {
								if (_status._zhuiji_check || typeof card !== "object") return;
								const targets = game.filterPlayer(target => player.canUse(card, target) && target.hasSkill("xinxhjlaoyan")).sortBySeat(player);
								if (!targets.length || game.countPlayer(target => player.canUse(card, target)) < 2) return;
								const select = get.info(card).selectTarget;
								let range;
								if (select === undefined) range = [1, 1];
								else if (typeof select === "number") range = [select, select];
								else if (get.itemtype(select) === "select") range = select;
								else if (typeof select == "function") range = select(card, player);
								game.checkMod(card, player, range, "selectTarget", player);
								if (range[1] === -1 || (range[1] > 1 && ui.selected.targets?.length)) {
									_status._zhuiji_check = true;
									const result = get.effect(targets[0], card, player, player);
									delete _status._zhuiji_check;
									return [0, result];
								}
							},
						},
					},
				},
			},
		},
		xinxhjjueyan: {
			audio: 'dcjueyan',
			trigger: { player: "useCardAfter" },
			filter(event, player) {
				if (!event.targets || event.targets.length !== 1) return false;
				if (event.targets[0] === player || !event.targets[0].isIn()) return false;
				return player.storage.xinxhjjueyan[3] || player.canCompare(event.targets[0]);
			},
			logTarget: event => event.targets[0],
			check(event, player) {
				const [target] = event.targets,
					storage = player.storage.xinxhjjueyan;
				if (!storage[3] && get.attitude(player, target) > 0) return false;
				return Math.max(...[(get.damageEffect(player, player, player) + get.damageEffect(target, player, player)) * storage[0], get.recoverEffect(player, player, player) * storage[1], get.effect(target, { name: "shunshou_copy", position: "h" }, player, player) * Math.min(target.countGainableCards(player, "h") - !storage[3], storage[2])]) > 0;
			},
			async content(event, trigger, player) {
				const [target] = trigger.targets,
					storage = player.storage[event.name];
				const { bool: goon } = storage[3] || (await player.chooseToCompare(target).forResult());
				if (!goon) return;
				let list = ["造成伤害", "回复体力", "获得手牌"],
					choices = list.slice(); ///[list[0]];
				let choiceList = ["依次对你与" + get.translation(target) + "各造成" + storage[0] + "点伤害", "回复" + storage[1] + "点体力", "获得" + get.translation(target) + get.cnNumber(storage[2]) + "张手牌"];
				/*
				因为可以叠数值所以不能执行的也能选（?）
				if (player.isDamaged()) choices.add("回复体力");
				else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "（无法选择）</span>";
				if (target.countCards("h")) choices.add("获得手牌");
				else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + "（无法选择）</span>";
				*/
				const { control: choice } =
					choices.length > 1
						? await player
							.chooseControl(choices)
							.set("ai", () => {
								const player = get.player(),
									target = get.event().getParent().targets[0],
									storage = player.storage.xinxhjjueyan;
								const map = {
									造成伤害: (get.damageEffect(player, player, player) + get.damageEffect(target, player, player)) * storage[0],
									回复体力: get.recoverEffect(player, player, player) * storage[1],
									获得手牌: get.effect(target, { name: "shunshou_copy", position: "h" }, player, player) * Math.min(target.countGainableCards(player, "h"), storage[2]),
								};
								return get
									.event()
									.controls.slice()
									.sort((a, b) => map[b] - map[a])[0];
							})
							.set("choiceList", choiceList)
							.set("prompt", "诀言：请选择一项执行，执行后该项目数值变为1，其余项目数值+1")
							.forResult()
						: choices[0];
				const index = (event.index = list.indexOf(choice));
				switch (index) {
					case 0:
						await player.damage(storage[0]);
						await target.damage(storage[0]);
						break;
					case 1:
						await player.recover(storage[1]);
						break;
					case 2:
						await player.gainPlayerCard(target, "h", storage[2], true);
						break;
				}
				player.storage[event.name][index] = 1;
				const nums = Array.from({ length: 3 })
					.map((_, i) => i)
					.filter(i => i !== index);
				for (const num of nums) player.storage[event.name][num]++;
				get.info(event.name).updateMark(player, event.name);
				if (
					!storage[3] &&
					Array.from({ length: 3 })
						.map((_, i) => i)
						.every(num => {
							return (
								game.getAllGlobalHistory("everything", evt => {
									return evt.name === event.name && evt.player === player && evt.index === num;
								}).length > 0
							);
						})
				) {
					player.storage[event.name][3] = true;
					player.popup(event.name);
					game.log(player, "修改了技能", "#g【" + get.translation(event.name) + "】");
				}
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
		},
		//势于吉
		xinxhjdaozhuan: {
			audio: 'potdaozhuan',
			logAudio: index => (typeof index === "number" ? "potdaozhuan" + index + ".mp3" : 2),
			enable: "chooseToUse",
			filter(event, player) {
				if (event.xinxhjdaozhuan) return false;
				let num = game
					.getGlobalHistory("useCard")
					.map(evt => get.type2(evt.card))
					.unique().length;
				num -= player.countCards("he");
				if (_status.currentPhase?.isIn() && _status.currentPhase !== player) num -= _status.currentPhase.countCards("he");
				if (num > 0) return false;
				return get
					.inpileVCardList(info => {
						const name = info[2];
						if (get.type(name) !== "basic") return false;
						return !player.getStorage("xinxhjdaozhuan_used").includes(name);
					})
					.some(card => event.filterCard(new lib.element.VCard({ name: card[2], nature: card[3] }), player, event));
			},
			chooseButton: {
				dialog(event, player) {
					return ui.create.dialog("道转", [get.inpileVCardList(info => get.type(info[2]) === "basic"), "vcard"]);
				},
				filter(button, player) {
					const event = get.event().getParent();
					if (player.getStorage("xinxhjdaozhuan_used").includes(button.link[2])) return false;
					return event.filterCard(new lib.element.VCard({ name: button.link[2], nature: button.link[3] }), player, event);
				},
				check(button) {
					const event = get.event().getParent();
					if (event.type !== "phase") return 1;
					return get.player().getUseValue(new lib.element.VCard({ name: button.link[2], nature: button.link[3] }));
				},
				prompt(links, player) {
					const num = game
						.getGlobalHistory("useCard")
						.map(evt => get.type2(evt.card))
						.unique().length;
					let prompt = "";
					if (num > 0) {
						prompt += "将你";
						if (_status.currentPhase?.isIn() && _status.currentPhase !== player) prompt += "与" + get.translation(_status.currentPhase);
						prompt += "的共计" + get.cnNumber(num) + "张牌置入弃牌堆，";
					}
					return '###道转###<div class="text center">' + prompt + "视为使用" + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】</div>";
				},
				backup(links) {
					return {
						filterCard: () => false,
						selectCard: -1,
						viewAs: { name: links[0][2], nature: links[0][3] },
						log: false,
						async precontent(event, trigger, player) {
							const num = game
								.getGlobalHistory("useCard")
								.map(evt => get.type2(evt.card))
								.unique().length;
							let result;
							if (num === 0) result = { bool: true };
							else {
								const goon = _status.currentPhase?.isIn() && _status.currentPhase !== player;
								let prompt = "将你";
								if (goon) prompt += "与" + get.translation(_status.currentPhase);
								prompt += "的共计" + get.cnNumber(num) + "张牌置入弃牌堆";
								let dialog = ["道转：" + prompt];
								if (player.countCards("h")) {
									dialog.push('<div class="text center">你的手牌</div>');
									dialog.push(player.getCards("h"));
								}
								if (player.countCards("e")) {
									dialog.push('<div class="text center">你的装备牌</div>');
									dialog.push(player.getCards("e"));
								}
								if (goon) {
									const target = _status.currentPhase;
									if (target.countCards("h")) {
										const cards = target.getCards("h");
										dialog.push('<div class="text center">' + get.translation(target) + "的手牌</div>");
										if (player.hasSkillTag("viewHandcard", null, target, true)) dialog.push(cards);
										else dialog.push([cards.slice().randomSort(), "blank"]);
									}
									if (target.countCards("e")) {
										dialog.push('<div class="text center">' + get.translation(target) + "的装备牌</div>");
										dialog.push(target.getCards("e"));
									}
								}
								result = await player
									.chooseButton(dialog, num, true)
									.set("ai", button => {
										const player = get.player(),
											source = get.owner(button.link);
										return get.value(button.link, get.owner(source)) * Math.sign(-get.attitude(player, source));
									})
									.forResult();
							}
							if (result?.bool) {
								player.changeSkin({ characterName: "xinxhj_yuji" }, "xinxhj_yuji");
								player.logSkill("potdaozhuan", null, null, null, [get.rand(1, 2)]);
								//player.changeSkin({ characterName: "xinxhj_yuji" }, "xinxhj_yuji_shadow");
								player.addTempSkill("xinxhjdaozhuan_used", "roundStart");
								player.markAuto("xinxhjdaozhuan_used", [event.result.card.name]);
								if (result.links?.length) {
									const target = _status.currentPhase;
									const owners = result.links.map(i => get.owner(i)).unique();
									if (owners.length > 1) {
										const cards = [player.getCards("he", i => result.links.includes(i)), target.getCards("he", i => result.links.includes(i))];
										await game
											.loseAsync({
												lose_list: [
													[player, cards[0]],
													[target, cards[1]],
												],
											})
											.setContent(get.info("mbzengou").loseToDiscardpileMultiple);
									}
									else {
										await owners[0].loseToDiscardpile(result.links);
										//if (owners[0] === target) player.tempBanSkill("xinxhjdaozhuan");
										if (owners[0] === target) {
											player.changeSkin({ characterName: "xinxhj_yuji" }, "xinxhj_yuji_shadow");
											player.tempBanSkill("xinxhjdaozhuan", "roundStart");
											player.logSkill("potdaozhuan", null, null, null, [get.rand(3, 4)]);
										}
									}
									// if (owners[0] === target) {
									// 	player.tempBanSkill("xinxhjdaozhuan", "roundStart");
									// 	player.logSkill("potdaozhuan", null, null, null, [get.rand(3, 4)]);
									// }
								}
								return;
							}
							const evt = event.getParent();
							evt.set("xinxhjdaozhuan", true);
							evt.goto(0);
						},
					};
				},
			},
			hiddenCard(player, name) {
				if (player.isTempBanned("xinxhjdaozhuan")) return false;
				return get.type(name) === "basic" && !player.getStorage("xinxhjdaozhuan_used").includes(name);
			},
			ai: {
				fireAttack: true,
				respondSha: true,
				respondShan: true,
				skillTagFilter(player, tag, arg) {
					if (arg === "respond") return false;
					return get.info("xinxhjdaozhuan").hiddenCard(
						player,
						(() => {
							switch (tag) {
								case "fireAttack":
									return "sha";
								default:
									return tag.slice("respond".length).toLowerCase();
							}
						})()
					);
				},
				order(item, player) {
					if (player && _status.event.type === "phase") {
						let max = 0,
							names = get.inpileVCardList(info => {
								const name = info[2];
								if (get.type(name) !== "basic") return false;
								return !player.getStorage("xinxhjdaozhuan_used").includes(name);
							});
						names = names.map(namex => new lib.element.VCard({ name: namex[2], nature: namex[3] }));
						names.forEach(card => {
							if (player.getUseValue(card) > 0) {
								let temp = get.order(card);
								if (temp > max) max = temp;
							}
						});
						return max + (max > 0 ? 0.2 : 0);
					}
					return 10;
				},
				result: {
					player(player) {
						if (_status.event.dying) return get.attitude(player, _status.event.dying);
						return 1;
					},
				},
			},
			subSkill: {
				backup: {},
				used: {
					charlotte: true,
					onremove: true,
					intro: { content: "本轮已使用牌名：$" },
				},
			},
		},
		xinxhjfuji: {
			audio: 'potfuji',
			enable: "phaseUse",
			filter(event, player) {
				return game.countPlayer(t => t.countCards("h")) > 0 && game.hasPlayer(target => target !== player);
			},
			usable: 1,
			chooseButton: {
				dialog(event, player) {
					const targets = game.filterPlayer(target => target.countCards("h"));
					return ui.create.dialog(
						"符济",
						...targets
							.map(target => {
								let list = [],
									cards = target.getCards("h");
								list.push('<div class="text center">' + get.translation(target) + "的手牌</div>");
								if (target === player || player.hasSkillTag("viewHandcard", null, target, true)) list.push(cards);
								else list.push([cards.slice().randomSort(), "blank"]);
								return list;
							})
							.flat(),
						"hidden"
					);
				},
				select: () => [1, game.countPlayer(target => target !== get.player())],
				check(button) {
					const player = get.player(),
						owner = get.owner(button.link);
					return get.value(button.link, owner) * Math.sign(-get.attitude(player, owner));
				},
				prompt(links) {
					let prompt = "将" + get.translation(links) + "交给至多等量角色。";
					prompt += "因此获得【杀】的角色使用【杀】造成的伤害+1直到你的下个回合开始；";
					prompt += "因此获得【闪】的角色使用【闪】结算完毕后摸一张牌直到你的下个回合开始。";
					prompt += "然后若你的手牌数为全场最低，则你获得摸两张牌，获得这两项效果直到你的下个回合开始。";
					return '###符济###<div class="text center">' + prompt + "</div>";
				},
				backup(links) {
					return {
						giveCards: links,
						logAudio: () => ["potfuji1.mp3", "potfuji2.mp3", "potfuji3.mp3"],
						filterCard: () => false,
						selectCard: -1,
						filterTarget: true,
						selectTarget: links.length,
						targetprompt() {
							const links = get.info("xinxhjfuji_backup").giveCards;
							return ["获得", get.translation(links[ui.selected.targets.length - 1])].join("<br>");
						},
						multiline: true,
						multitarget: true,
						complexSelect: true,
						async content(event, trigger, player) {
							const targets = event.targets;
							const links = get.info("xinxhjfuji_backup").giveCards;
							let map = new Map(),
								lose_list = [];
							for (const link of links) {
								const owner = get.owner(link);
								map.set(owner, (map.get(owner) || []).concat([link]));
							}
							for (const [owner, cards] of Array.from(map.entries())) {
								owner.$throw(cards.length, 500);
								game.log(owner, "将", get.cnNumber(cards.length), "张牌置入了处理区");
								lose_list.push([owner, cards]);
							}
							await game
								.loseAsync({
									lose_list: lose_list,
								})
								.setContent("chooseToCompareLose");
							await game.delayx();
							const gain_list = links.map((link, i) => [targets[i], [link]]);
							await game
								.loseAsync({
									gain_list: gain_list,
									giver: player,
									animate: "gain2",
								})
								.setContent("gaincardMultiple");
							for (const [target, [link]] of gain_list) {
								const name = get.name(link, false);
								if (["sha", "shan"].includes(name)) {
									player.addTempSkill("xinxhjfuji_clear", { player: "phaseBegin" });
									await target.addAdditionalSkills("xinxhjfuji_" + player.playerid, "xinxhjfuji_" + name, true);
								}
							}
							if (player.isMinHandcard()) {
								player.changeSkin({ characterName: "pot_yuji" }, "pot_yuji_shadow");
								await player.draw(2);
								player.addTempSkill("xinxhjfuji_clear", { player: "phaseBegin" });
								await player.addAdditionalSkills("xinxhjfuji_" + player.playerid, ["xinxhjfuji_sha", "xinxhjfuji_shan"], true);
							}
							player.when({ player: "phaseBegin" }).step(async () => {
								player.changeSkin({ characterName: "pot_yuji" }, "pot_yuji");
							});
						},
						ai: {
							result: {
								player(player, target) {
									const links = get.info("xinxhjfuji_backup").giveCards;
									return get.value(links[ui.selected.targets.length], target) * get.attitude(player, target);
								},
							},
						},
					};
				},
			},
			ai: {
				order: 15,
				threaten: 4,
				result: {
					player(player, target) {
						return 1;
					},
				},
			},
			subSkill: {
				backup: {},
				clear: {
					charlotte: true,
					onremove(player) {
						game.countPlayer(current => current.removeAdditionalSkills("xinxhjfuji_" + player.playerid));
					},
				},
				sha: {
					audio: ["potfuji4.mp3", "potfuji5.mp3"],
					charlotte: true,
					mark: true,
					marktext: "杀",
					intro: {
						name: "符济 - 杀",
						content: "使用【杀】造成的伤害+1",
					},
					trigger: { source: "damageBegin1" },
					filter(event, player) {
						return event.card && event.card.name === "sha";
					},
					forced: true,
					logTarget: "player",
					content() {
						trigger.num++;
					},
				},
				shan: {
					audio: ["potfuji4.mp3", "potfuji5.mp3"],
					charlotte: true,
					mark: true,
					marktext: "闪",
					intro: {
						name: "符济 - 闪",
						content: "使用【闪】结算完毕后摸一张牌",
					},
					trigger: { player: "useCardAfter" },
					filter(event, player) {
						return event.card.name === "shan";
					},
					forced: true,
					content() {
						player.draw();
					},
				},
			},
		},
		//谋吕布
		xinxhjsbwushuang: {
			audio: 'sbwushuang',
			inherit: "wushuang",
			init(player) {
				player.storage.sbwushuangCount = false;
			},
			trigger: { source: "damageBegin1" },
			filter(event, player) {
				const target = event.player;
				const evtx = event.getParent(2);
				const card = event.card;
				const name = card?.name;
				if (!card || !["sha", "juedou"].includes(name)) {
					return false;
				}
				if (target == player) {
					return false;
				}
				if (name == "sha") {
					return !target.hasHistory("useCard", evt => {
						return evt.card.name == "shan" && evt.respondTo && evt.getParent(3) == evtx;
					});
				} else if (name == "juedou") {
					return !target.hasHistory("respond", evt => {
						return evt.card.name == "sha" && evt.respondTo && evt.getParent(3) == evtx;
					});
				}
				return false;
			},
			forced: true,
			logTarget: "player",
			logAudio: () => ["sbwushuang4.mp3", "sbwushuang5.mp3"],
			content() {
				trigger.num++;
			},
			group: ["sbwushuang_1", "sbwushuang_2"],
			preHidden: ["sbwushuang_1", "sbwushuang_2"],
			subSkill: {
				1: {
					audio: "sbwushuang",
					logAudio(event, player) {
						const storage = player.storage.sbwushuangCount;
						if (storage) {
							return ["sbwushuang2.mp3", "sbwushuang3.mp3"];
						}
						return ["sbwushuang1.mp3", "sbwushuang6.mp3"];
					},
					inherit: "wushuang1",
				},
				2: {
					audio: "sbwushuang",
					logAudio(event, player) {
						const storage = player.storage.sbwushuangCount;
						if (storage) {
							return ["sbwushuang2.mp3", "sbwushuang3.mp3"];
						}
						return ["sbwushuang1.mp3", "sbwushuang6.mp3"];
					},
					inherit: "wushuang2",
				},
			},
		},
		xinxhjsbliyu: {
			audio: 'sbliyu',
			logAudio: index => (typeof index === "number" ? "sbliyu" + index + ".mp3" : 2),
			trigger: { source: "damageSource" },
			filter(event, player) {
				return event.player != player && event?.card?.name == "sha" && event.player.countGainableCards(player, "hej") > 0 && event.player.isIn();
			},
			popup: false,
			async cost(event, trigger, player) {
				event.result = await player.gainPlayerCard(get.prompt2(event.skill), trigger.player, "hej", [1, trigger.num]).set("chooseOnly", true).forResult();
			},
			async content(event, trigger, player) {
				const cards = event.cards;
				const target = trigger.player;
				await player.gain(cards, target, "bySelf");
				const draw = (await target.draw(cards.length).forResult()).cards;
				let types = [cards, draw]
					.map(list => list.map(card => get.type2(card)))
					.flat()
					.unique();
				player.logSkill("sbliyu", [target], null, null, [get.rand(1, 2)]);
				if (types.length >= 3) {
					let list = [`${get.translation(player)}视为对你指定的另一名其他角色使用一张【决斗】`, `你获得技能〖无双〗直至你下个回合结束`];
					let result;
					if (
						!game.hasPlayer(function (current) {
							return current != player && current != target && player.canUse("juedou", current);
						})
					) {
						result = {
							bool: true,
							control: "选项二",
						};
					} else {
						result = await target
							.chooseControl()
							.set("choiceList", list)
							.set("ai", () => {
								const player = get.player();
								const source = get.event().getParent().player;
								const juedou = new lib.element.VCard({ name: "juedou", isCard: true });
								return game.hasPlayer(target => {
									return ![player, source].includes(target) && source.canUse(juedou, target, false) && get.effect(target, juedou, source, player) > 0;
								})
									? "选项一"
									: "选项二";
							})
							.forResult();
					}
					player.logSkill("sbliyu", null, null, null, [result.control == "选项一" ? get.rand(3, 4) : 5]);
					if (result.control == "选项一") {
						const result2 = await target
							.chooseTarget(
								true,
								(card, player, target) => {
									var evt = get.event().getParent();
									return evt.player.canUse({ name: "juedou" }, target) && target != get.player();
								},
								"利驭：请选择一名角色，视为" + get.translation(player) + "对其使用【决斗】"
							)
							.set("ai", function (target) {
								var evt = get.event().getParent();
								return get.effect(target, { name: "juedou" }, evt.player, get.player()) - 2;
							})
							.forResult();
						target.line(player);
						await player.useCard({ name: "juedou", isCard: true }, result2.targets[0], "noai");
					} else {
						await target.addTempSkills("sbwushuang", { player: "phaseAfter" });
						target.storage.sbwushuangCount = true;
					}
				}
			},
			derivation: "sbwushuang",
		},
		//谋陆逊
		xinxhjdcsbjunmou: {
			audio: 'dcsbjunmou',
			group: "xinxhjdcsbjunmou_change",
			audioname: ["dc_sb_luxun_shadow"],
			zhuanhuanji(player, skill) {
				player.storage[skill] = !player.storage[skill];
				player.changeSkin({ characterName: "xinxhj_dc_sb_luxun" }, "xinxhj_dc_sb_luxun" + (player.storage[skill] ? "_shadow" : ""));
			},
			marktext: "☯",
			mark: true,
			intro: {
				content(storage, player) {
					if (!storage) {
						return `一张牌结算结束后，若此牌的目标包括你，你可以摸一张牌并选择一张手牌，此牌视为无次数限制的火【杀】。`;
					}
					return `一张牌结算结束后，若此牌的目标包括你，你可以摸一张牌并选择一张手牌，重铸此牌并横置一名角色。`;
				},
			},
			trigger: {
				global: ["useCardAfter"],
			},
			filter(event, player) {
				return event.targets?.includes(player);
			},
			check: () => true,
			frequent: true,
			async content(event, trigger, player) {
				const bool = player.storage[event.name];
				player.changeZhuanhuanji(event.name);
				await player.draw();
				if (!player.countCards("h")) {
					return;
				}
				const result = await player.chooseCard(`隽谋：选择一张手牌，${bool ? "重铸此牌并横置一名角色" : "此牌视为无次数限制的火【杀】"}`, "h", true).forResult();
				if (result?.cards?.length) {
					const card = result.cards[0];
					if (!bool) {
						player.addSkill(event.name + "_sha");
						player.addGaintag(card, event.name + "_sha");
					} else {
						await player.recast(card);
						if (game.hasPlayer(target => !target.isLinked())) {
							const resultx = await player
								.chooseTarget("隽谋：横置一名角色", true, (card, player, target) => {
									return !target.isLinked();
								})
								.set("ai", target => -get.attitude(get.player(), target))
								.forResult();
							if (resultx?.targets?.length) {
								const target = resultx.targets[0];
								player.line(target, "yellow");
								await target.link(true);
							}
						}
					}
				}
			},
			subSkill: {
				sha: {
					mod: {
						cardname(card, player, name) {
							if (card.hasGaintag("xinxhjdcsbjunmou_sha")) {
								return "sha";
							}
						},
						cardnature(card, player, nature) {
							if (card.hasGaintag("xinxhjdcsbjunmou_sha")) {
								return "fire";
							}
						},
						cardUsable(card, player, num) {
							if (card.cards?.length !== 1 || !card.isCard) {
								return;
							}
							if (card.cards[0].hasGaintag("xinxhjdcsbjunmou_sha")) {
								return Infinity;
							}
						},
					},
					forced: true,
					popup: false,
					charlotte: true,
					firstDo: true,
					trigger: {
						player: "useCard1",
					},
					filter(event, player) {
						return (
							event.addCount !== false &&
							event.card.isCard &&
							event.cards?.length == 1 &&
							player.hasHistory("lose", evt => {
								if ((evt.relatedEvent || evt.getParent()) !== event) {
									return false;
								}
								return evt.hs.length == 1 && Object.values(evt.gaintag_map).flat().includes("xinxhjdcsbjunmou_sha");
							})
						);
					},
					async content(event, trigger, player) {
						trigger.addCount = false;
						const stat = player.getStat().card,
							name = trigger.card.name;
						if (typeof stat[name] == "number") {
							stat[name]--;
						}
						game.log(trigger.card, "不计入次数");
					},
				},
				change: {
					audio: "dcsbjunmou",
					audioname: ["dc_sb_luxun_shadow"],
					trigger: {
						global: "phaseBefore",
						player: "enterGame",
					},
					filter(event, player) {
						return event.name != "phase" || game.phaseNumber == 0;
					},
					prompt2(event, player) {
						return "切换【隽谋】为状态" + (player.storage.xinxhjdcsbjunmou ? "阳" : "阴");
					},
					check: () => Math.random() > 0.5,
					content() {
						player.changeZhuanhuanji("xinxhjdcsbjunmou");
					},
				},
			},


		},
		xinxhjdcsbzhanyan: {
			audio: 'dcsbzhanyan',
			audioname: ["dc_sb_luxun_shadow"],
			limited: true,
			enable: "phaseUse",
			skillAnimation: true,
			animationColor: "wood",
			filter(event, player) {
				return game.hasPlayer(target => target.isLinked() && target != player);
			},
			filterTarget(card, player, target) {
				return target.isLinked() && target != player;
			},
			selectTarget: [1, Infinity],
			multitarget: true,
			multiline: true,
			async content(event, trigger, player) {
				player.awakenSkill(event.name);
				player.addTempSkill(event.name + "_draw");
				let { targets } = event;
				await player.draw(targets.length);
				while (true) {
					targets = targets.filter(target => target.isIn() && target.countCards("h"));
					if (!targets.length) {
						break;
					}
					const showEvent = player
						.chooseCardOL(targets, "绽炎：请选择要展示的牌", true)
						.set("ai", function (card) {
							return Math.random();
						})
						.set("source", player);
					showEvent.aiCard = function (target) {
						const hs = target.getCards("h");
						return { bool: true, cards: [hs.randomGet()] };
					};
					showEvent._args.remove("glow_result");
					const result = await showEvent.forResult();
					const cards = [];
					for (var i = 0; i < targets.length; i++) {
						cards.push(result[i].cards[0]);
					}
					const suits = cards.map(card => get.suit(card)).unique();
					const next = player
						.showCards(cards, `${get.translation(player)} 发动了【${get.translation(event.name)}】`, false)
						.set("showers", targets)
						.set("customButton", button => {
							const target = get.owner(button.link);
							if (target) {
								const div = button.querySelector(".info");
								div.innerHTML = "<span style = 'font-weight:bold'>" + get.translation(get.suit(button.link, target)) + target.getName() + "</span>";
							}
						})
						.set("delay_time", targets.length * 2)
						.set("closeDialog", false);
					await next;
					const id = next.videoId;

					const update = function (id, suits) {
						const dialog = get.idDialog(id);
						if (dialog) {
							const div = dialog.querySelector(".caption");
							div.innerHTML = `绽炎：你可以弃置任意张花色为<span style = "font-weight:bold;font-size: 150%">${get.translation(suits)}</span>的牌对所选角色造成1点火焰伤害`;
							ui.update();
						}
					};
					if (player == game.me) {
						update(id, suits);
					} else if (player.isOnline()) {
						player.send(update, id, suits);
					}
					const nextx = player.chooseCardTarget({
						prompt: false,
						dialog: get.idDialog(id),
						filterCard(card) {
							if (!get.event().suits.includes(get.suit(card, get.player()))) {
								return false;
							}
							return lib.filter.cardDiscardable.apply(this, arguments);
						},
						selectCard: [1, Infinity],
						filterTarget(card, player, target) {
							const selected = ui.selected.cards;
							if (!selected.length) {
								return false;
							}
							const suits = selected.map(card => get.suit(card, player)).unique();
							return suits.includes(get.suit(get.event().cards[get.event().targets.indexOf(target)], target));
						},
						//complexTarget: true,
						selectTarget: -1,
						suits: suits,
						cards: cards,
						targets: targets,
						position: "he",
						ai1(card) {
							return 10 - get.value(card);
						},
					});
					nextx.set(
						"targetprompt2",
						nextx.targetprompt2.concat([
							target => {
								const evt = get.event();
								if (!target.isIn() || !evt.filterTarget(null, get.player(), target)) {
									return;
								}
								const card = evt.cards[evt.targets.indexOf(target)];
								if (!card) {
									return;
								}
								const suit = get.suit(card, target);
								const color = get.color(card, target);
								const str = get.translation(suit);
								return `<span style = "color:${color};font-weight:bold;font-size: 200%">${str}</span>`;
							},
						])
					);
					const resultx = await nextx.forResult();
					game.broadcastAll("closeDialog", id);
					if (resultx?.cards?.length && resultx.targets?.length) {
						const damage = resultx.targets;
						await player.discard(resultx.cards);
						player.line(damage, "fire");
						const damaged = [];
						await game.doAsyncInOrder(damage, async target => {
							const next = target.damage("fire");
							await next;
							damaged.addArray(targets.filter(i => i.hasHistory("damage", evt => (evt.getParent()?.getTrigger() || evt) == next)));
						});
						if (damaged.length != event.targets.length) {
							targets.forEach(target => {
								if (!damaged.includes(target)) {
									target.chat("☝🤓唉，没打着");
									target.throwEmotion(player, ["egg", "shoe"].randomGet());
								}
							});
							break;
						}
					} else {
						targets.forEach(target => {
							target.chat("☝🤓唉，没打着");
							target.throwEmotion(player, ["egg", "shoe"].randomGet());
						});
						break;
					}
				}
				player.removeSkill(event.name + "_draw");
			},
			subSkill: {
				draw: {
					audio: "dcsbzhanyan",
					charlotte: true,
					forced: true,
					trigger: {
						player: "loseAfter",
						global: ["gainAfter", "loseAsyncAfter", "addJudgeAfter", "addToExpansionAfter", "equipAfter"],
					},
					filter(event, player) {
						return event.getl?.(player)?.cards2?.length;
					},
					async content(event, trigger, player) {
						await player.draw(trigger.getl?.(player)?.cards2?.length);
					},
				},
			},
			ai: {
				order: 1,
				result: {
					target: -1,
				},
			},

		},
		//谋曹丕
		xinxhjxingshang: {
			getLimit: 9,
			getList: [
				{
					cost: 2,
					prompt: () => "令一名角色复原武将牌",
					filter: () => game.hasPlayer(target => target.isLinked() || target.isTurnedOver()),
					filterTarget: {
						filterTarget: (card, player, target) => target.isLinked() || target.isTurnedOver(),
					},
					async content(player, target) {
						if (target.isLinked()) {
							await target.link(false);
						}
						if (target.isTurnedOver()) {
							await target.turnOver(false);
						}
					},
					ai: {
						result: {
							target(player, target) {
								let res = 0;
								if (target.isLinked()) {
									res = 0.3;
								}
								if (target.isTurnedOver()) {
									res += 3.5 * get.threaten(target, player);
								}
								return res;
							},
						},
					},
				},
				{
					cost: 2,
					prompt: () => "令一名角色摸" + get.cnNumber(Math.min(5, Math.max(2, game.dead.length))) + "张牌",
					filter: () => true,
					filterTarget: {
						filterTarget: true,
					},
					async content(player, target) {
						await target.draw(Math.min(5, Math.max(2, game.dead.length)));
					},
					ai: {
						result: {
							player(player, target) {
								return get.effect(target, { name: "draw" }, player, player) * Math.min(5, Math.max(2, game.dead.length));
							},
						},
					},
				},
				{
					cost: 5,
					prompt: () => "令一名体力上限小于10的角色回复1点体力，增加1点体力上限，随机恢复一个废除的装备栏",
					filter: () => game.hasPlayer(target => target.maxHp < 10),
					filterTarget: {
						filterTarget: (card, player, target) => target.maxHp < 10,
					},
					async content(player, target) {
						await target.recover();
						await target.gainMaxHp();
						let list = Array.from({ length: 13 }).map((_, i) => "equip" + parseFloat(i + 1));
						list = list.filter(i => target.hasDisabledSlot(i));
						if (list.length) {
							await target.enableEquip(list.randomGet());
						}
					},
					ai: {
						result: {
							target(player, target) {
								let res = 0.2;
								if (target.isHealthy()) {
									res += 0.4;
								}
								if (
									Array.from({ length: 5 })
										.map((_, i) => "equip" + parseFloat(i + 1))
										.some(i => target.hasDisabledSlot(i))
								) {
									res += 0.3;
								}
								return res + get.recoverEffect(target, target, target) / 16;
							},
						},
					},
				},
				{
					cost: 5,
					prompt: () => "获得一名已阵亡角色的武将牌上的所有技能，然后失去〖行殇〗〖放逐〗〖颂威〗",
					filter: () => game.dead.some(target => target.getStockSkills(true, true).some(i => get.info(i) && !get.info(i).charlotte)),
					filterTarget: {
						filterTarget(card, player, target) {
							if (!target.isDead()) {
								return false;
							}
							return target.getStockSkills(true, true).some(i => get.info(i) && !get.info(i).charlotte);
						},
						deadTarget: true,
					},
					async content(player, target) {
						await player.changeSkills(
							target.getStockSkills(true, true).filter(skill => get.info(skill) && !get.info(skill).charlotte),
							["xinxhjxingshang", "xinxhjfangzhu", "xinxhjsongwei"]
						);
					},
					ai: {
						result: {
							player(player, target) {
								return ["name", "name1", "name2"].reduce((sum, name) => {
									if (!target[name] || !lib.character[target[name]] || (name == "name1" && target.name1 == target.name)) {
										return sum;
									}
									return sum + get.rank(target[name], true);
								}, 0);
							},
						},
					},
				},
			],
			marktext: "颂",
			intro: {
				name: "颂",
				content: "mark",
			},
			audio: "sbxingshang",
			enable: "phaseUse",
			filter(event, player) {
				return get.info("xinxhjxingshang").getList.some(effect => {
					return player.countMark("xinxhjxingshang") >= effect.cost && effect.filter(player);
				});
			},
			usable: 2,
			chooseButton: {
				dialog() {
					let dialog = ui.create.dialog("行殇：请选择一项", "hidden");
					const list = get.info("xinxhjxingshang").getList.slice();
					dialog.add([
						list.map(effect => {
							return [effect, "移去" + effect.cost + "个“颂”标记，" + effect.prompt()];
						}),
						"textbutton",
					]);
					return dialog;
				},
				filter(button, player) {
					const effect = button.link;
					return player.countMark("xinxhjxingshang") >= effect.cost && effect.filter(player);
				},
				check(button) {
					const player = get.event().player,
						effect = button.link;
					return Math.max(
						...game
							.filterPlayer(target => {
								const filterTarget = effect.filterTarget.filterTarget;
								if (!filterTarget) {
									return target == player;
								}
								if (typeof filterTarget == "function") {
									return filterTarget(null, player, target);
								}
								return true;
							})
							.map(target => {
								game.broadcastAll(effect => (lib.skill["xinxhjxingshang_aiSkill"].ai = effect.ai || {}), effect);
								return get.effect(target, "xinxhjxingshang_aiSkill", player, player);
							})
					);
				},
				backup(links, player) {
					const effect = links[0];
					return {
						effect: effect,
						audio: "sbxingshang",
						filterCard: () => false,
						selectCard: -1,
						...effect.filterTarget,
						async content(event, trigger, player) {
							const effect = lib.skill.xinxhjxingshang_backup.effect;
							player.removeMark("xinxhjxingshang", effect.cost);
							await effect.content(player, ...event.targets);
						},
						ai: effect.ai,
					};
				},
				prompt(links, player) {
					const effect = links[0],
						str = "###行殇###";
					return str + '<div class="text center">' + "移去" + effect.cost + "个“颂”标记，" + effect.prompt() + "</div>";
				},
			},
			ai: {
				order: 6.5,
				result: {
					player(player) {
						const list = get.info("xinxhjxingshang").getList.filter(effect => {
							return player.countMark("xinxhjxingshang") >= effect.cost && effect.filter(player);
						});
						return Math.max(
							...list.map(effect => {
								return Math.max(
									...game
										.filterPlayer(target => {
											const filterTarget = effect.filterTarget.filterTarget;
											if (!filterTarget) {
												return target == player;
											}
											if (typeof filterTarget == "function") {
												return filterTarget(null, player, target);
											}
											return true;
										})
										.map(target => {
											game.broadcastAll(effect => (lib.skill["xinxhjxingshang_aiSkill"].ai = effect.ai || {}), effect);
											return get.effect(target, "xinxhjxingshang_aiSkill", player, player);
										})
								);
							})
						);
					},
				},
			},
			group: "xinxhjxingshang_gain",
			subSkill: {
				aiSkill: {},
				backup: {},
				gain: {
					audio: "sbxingshang",
					trigger: { global: ["die", "damageEnd"] },
					filter(event, player) {
						if (player.countMark("xinxhjxingshang") >= get.info("xinxhjxingshang").getLimit) {
							return false;
						}
						return event.name == "die" || !player.getHistory("custom", evt => evt.xinxhjxingshang).length;
					},
					forced: true,
					locked: false,
					async content(event, trigger, player) {
						player.addMark("xinxhjxingshang", Math.min(2, get.info("xinxhjxingshang").getLimit - player.countMark("xinxhjxingshang")));
						if (trigger.name == "damage") {
							player.getHistory("custom").push({ xinxhjxingshang: true });
						}
					},
				},
			},
		},
		xinxhjfangzhu: {
			getList: [
				{
					cost: 1,
					prompt: () => "令一名其他角色于手牌中只能使用基本牌直到其回合结束",
					filter: player => get.mode() != "doudizhu" && game.hasPlayer(target => target != player && !target.getStorage("xinxhjfangzhu_ban").includes("basic")),
					filterTarget: {
						filterTarget: (card, player, target) => target != player && !target.getStorage("xinxhjfangzhu_ban").includes("basic"),
					},
					async content(player, target) {
						target.addTempSkill("xinxhjfangzhu_ban", { player: "phaseEnd" });
						target.markAuto("xinxhjfangzhu_ban", ["basic"]);
						lib.skill.xinxhjfangzhu_ban.init(target, "xinxhjfangzhu_ban");
					},
					ai: {
						result: {
							target(player, target) {
								return -(target.countCards("hs") + 2) / 3;
							},
						},
					},
				},
				{
					cost: 2,
					prompt: () => "令一名其他角色于手牌中只能使用锦囊牌直到其回合结束",
					filter: player => game.hasPlayer(target => target != player && !target.getStorage("xinxhjfangzhu_ban").includes("trick")),
					filterTarget: {
						filterTarget: (card, player, target) => target != player && !target.getStorage("xinxhjfangzhu_ban").includes("trick"),
					},
					async content(player, target) {
						target.addTempSkill("xinxhjfangzhu_ban", { player: "phaseEnd" });
						target.markAuto("xinxhjfangzhu_ban", ["trick"]);
						lib.skill.xinxhjfangzhu_ban.init(target, "xinxhjfangzhu_ban");
					},
					ai: {
						result: {
							target(player, target) {
								return -(target.countCards("hs") + 2) / 2;
							},
						},
					},
				},
				{
					cost: 3,
					prompt: () => "令一名其他角色于手牌中只能使用装备牌直到其回合结束",
					filter: player => get.mode() != "doudizhu" && game.hasPlayer(target => target != player && !target.getStorage("xinxhjfangzhu_ban").includes("equip")),
					filterTarget: {
						filterTarget: (card, player, target) => target != player && !target.getStorage("xinxhjfangzhu_ban").includes("equip"),
					},
					async content(player, target) {
						target.addTempSkill("xinxhjfangzhu_ban", { player: "phaseEnd" });
						target.markAuto("xinxhjfangzhu_ban", ["equip"]);
						lib.skill.xinxhjfangzhu_ban.init(target, "xinxhjfangzhu_ban");
					},
					ai: {
						result: {
							target(player, target) {
								return -target.countCards("hs") - 2;
							},
						},
					},
				},
				{
					cost: 2,
					prompt: () => "令一名其他角色的非Charlotte技能失效直到其回合结束",
					filter: player => get.mode() != "doudizhu" && game.hasPlayer(target => target != player),
					filterTarget: {
						filterTarget: lib.filter.notMe,
					},
					async content(player, target) {
						target.addTempSkill("xinxhjfangzhu_baiban", { player: "phaseEnd" });
					},
					ai: {
						result: {
							target(player, target) {
								return -target.getSkills(null, false).filter(i => get.info(i) && !get.info(i).charlotte).length * get.threaten(target, player);
							},
						},
					},
				},
				{
					cost: 2,
					prompt: () => "令一名其他角色不能响应另一名角色使用的牌直到其回合结束",
					filter(player) {
						return game.hasPlayer(target => {
							if (target !== player) {
								return game.hasPlayer(current => {
									if (current !== target) {
										return !current.getStorage("xinxhjfangzhu_kill").includes(target);
									}
									return false;
								});
							}
							return false;
						});
					},
					filterTarget: {
						filterTarget(card, player, target) {
							return ui.selected.targets.length > 0 || target !== player;
						},
						selectTarget: 2,
						targetprompt: ["被响应", "响应源"],
						multitarget: true,
					},
					async content(player, target, source) {
						source.addTempSkill("xinxhjfangzhu_kill", { player: "phaseEnd" });
						source.markAuto("xinxhjfangzhu_kill", [target]);
					},
				},
				{
					cost: 3,
					prompt: () => "令一名其他角色将武将牌翻面",
					filter: player => game.hasPlayer(target => target != player),
					filterTarget: {
						filterTarget: lib.filter.notMe,
					},
					async content(player, target) {
						await target.turnOver();
					},
					ai: {
						result: {
							target(player, target) {
								return target.isTurnedOver() ? 3.5 : -3.5;
							},
						},
					},
				},
			],
			audio: "sbfangzhu",
			enable: "phaseUse",
			filter(event, player) {
				return get.info("xinxhjfangzhu").getList.some(effect => {
					return player.countMark("xinxhjxingshang") >= effect.cost && effect.filter(player);
				});
			},
			usable: 1,
			chooseButton: {
				dialog() {
					let dialog = ui.create.dialog("放逐：请选择一项", "hidden");
					const list = get.info("xinxhjfangzhu").getList.slice();
					dialog.add([
						list.map(effect => {
							return [effect, "移去" + effect.cost + "个“颂”标记，" + effect.prompt()];
						}),
						"textbutton",
					]);
					return dialog;
				},
				filter(button, player) {
					const effect = button.link;
					return player.countMark("xinxhjxingshang") >= effect.cost && effect.filter(player);
				},
				check(button) {
					const player = get.event().player,
						effect = button.link;
					return Math.max(
						...game
							.filterPlayer(target => {
								const filterTarget = effect.filterTarget.filterTarget;
								if (!filterTarget) {
									return target == player;
								}
								if (typeof filterTarget == "function") {
									return filterTarget(null, player, target);
								}
								return true;
							})
							.map(target => {
								game.broadcastAll(effect => (lib.skill["xinxhjxingshang_aiSkill"].ai = effect.ai || {}), effect);
								return get.effect(target, "xinxhjxingshang_aiSkill", player, player);
							})
					);
				},
				backup(links, player) {
					const effect = links[0];
					return {
						effect: effect,
						audio: "sbfangzhu",
						audioname: ["mb_caomao"],
						filterCard: () => false,
						selectCard: -1,
						...effect.filterTarget,
						async content(event, trigger, player) {
							const effect = lib.skill.xinxhjfangzhu_backup.effect;
							player.removeMark("xinxhjxingshang", effect.cost);
							await effect.content(player, ...event.targets);
						},
						ai: effect.ai,
					};
				},
				prompt(links, player) {
					const effect = links[0],
						str = "###放逐###";
					return str + '<div class="text center">' + "移去" + effect.cost + "个“颂”标记，" + effect.prompt() + "</div>";
				},
			},
			ai: {
				combo: "xinxhjxingshang",
				order: 7,
				result: {
					player(player) {
						const list = get.info("xinxhjfangzhu").getList.filter(effect => {
							return player.countMark("xinxhjxingshang") >= effect.cost && effect.filter(player);
						});
						return Math.max(
							...list.map(effect => {
								return Math.max(
									...game
										.filterPlayer(target => {
											const filterTarget = effect.filterTarget.filterTarget;
											if (!filterTarget) {
												return target == player;
											}
											if (typeof filterTarget == "function") {
												return filterTarget(null, player, target);
											}
											return true;
										})
										.map(target => {
											game.broadcastAll(effect => (lib.skill["xinxhjxingshang_aiSkill"].ai = effect.ai || {}), effect);
											return get.effect(target, "xinxhjxingshang_aiSkill", player, player);
										})
								);
							})
						);
					},
				},
			},
			subSkill: {
				backup: {},
				baiban: {
					init(player, skill) {
						player.addSkillBlocker(skill);
						player.addTip(skill, "放逐 技能失效");
					},
					onremove(player, skill) {
						player.removeSkillBlocker(skill);
						player.removeTip(skill);
					},
					inherit: "baiban",
					marktext: "逐",
				},
				kill: {
					charlotte: true,
					onremove: true,
					marktext: "放",
					intro: { content: "$不能响应你使用的牌" },
					trigger: { player: "useCard1" },
					forced: true,
					popup: false,
					async content(event, trigger, player) {
						trigger.directHit.addArray(player.getStorage(event.name));
					},
					ai: {
						directHit_ai: true,
						skillTagFilter(player, tag, arg) {
							return player.getStorage("xinxhjfangzhu_kill").includes(arg?.target);
						},
					},
				},
				ban: {
					charlotte: true,
					mark: true,
					marktext: "禁",
					intro: {
						markcount: () => 0,
						content(storage) {
							if (storage.length > 1) {
								return "不能使用手牌";
							}
							return "于手牌中只能使用" + get.translation(storage[0]) + "牌";
						},
					},
					init(player, skill) {
						let storage = player.getStorage(skill);
						if (storage.length) {
							player.addTip(skill, "放逐 限" + (storage.length === 1 ? get.translation(storage[0])[0] : "手牌"));
						}
					},
					onremove(player, skill) {
						player.removeTip(skill);
						delete player.storage[skill];
					},
					mod: {
						cardEnabled(card, player) {
							const storage = player.getStorage("xinxhjfangzhu_ban");
							const hs = player.getCards("h"),
								cards = [card];
							if (Array.isArray(card.cards)) {
								cards.addArray(card.cards);
							}
							if (cards.containsSome(...hs) && (storage.length > 1 || !storage.includes(get.type2(card)))) {
								return false;
							}
						},
						cardSavable(card, player) {
							const storage = player.getStorage("xinxhjfangzhu_ban");
							const hs = player.getCards("h"),
								cards = [card];
							if (Array.isArray(card.cards)) {
								cards.addArray(card.cards);
							}
							if (cards.containsSome(...hs) && (storage.length > 1 || !storage.includes(get.type2(card)))) {
								return false;
							}
						},
					},
				},
			},
		},
		xinxhjsongwei: {
			audio: "sbsongwei",
			trigger: { player: "phaseUseBegin" },
			filter(event, player) {
				if (player.countMark("xinxhjxingshang") >= get.info("xinxhjxingshang").getLimit) {
					return false;
				}
				return game.hasPlayer(target => target.group == "wei" && target != player);
			},
			zhuSkill: true,
			forced: true,
			locked: false,
			async content(event, trigger, player) {
				player.addMark("xinxhjxingshang", Math.min(get.info("xinxhjxingshang").getLimit - player.countMark("xinxhjxingshang"), 2 * game.countPlayer(target => target.group == "wei" && target != player)));
			},
			group: "xinxhjsongwei_delete",
			subSkill: {
				delete: {
					audio: "sbsongwei",
					enable: "phaseUse",
					filter(event, player) {
						if (player.storage.xinxhjsongwei_delete) {
							return false;
						}
						return game.hasPlayer(target => lib.skill.xinxhjsongwei.subSkill.delete.filterTarget(null, player, target));
					},
					filterTarget(card, player, target) {
						return target != player && target.group == "wei" && target.getStockSkills(false, true).length;
					},
					skillAnimation: true,
					animationColor: "thunder",
					async content(event, trigger, player) {
						player.storage.xinxhjsongwei_delete = true;
						player.awakenSkill(event.name);
						event.target.removeSkills(event.target.getStockSkills(false, true));
					},
					ai: {
						order: 13,
						result: {
							target(player, target) {
								return -target.getStockSkills(false, true).length;
							},
						},
					},
				},
			},
		},





	},



};