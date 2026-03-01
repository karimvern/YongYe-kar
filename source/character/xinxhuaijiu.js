import { lib, game, ui, get, ai, _status } from '../../../../noname.js';

export let info = {
	name: 'xinxhuaijiu',
	connect: true,
	connectBanned: [],
	//武将分包
	characterSort: {
		'xinxhuaijiu': {
			'shizhounian': ['xinxhj_dc_sb_luxun', 'xinxhj_zhanghuai'],
			'shousha': ['xinxhj_yuji', 'xinxhj_sb_lvbu', 'xinxhj_sb_caopi'],
			'xinxxiugai': ['xinxhj_new_simayi', 'xinxhj_v_zhangliao', 'xinxhj_dc_simashi', 'xinxhj_dc_sb_lvmeng', 'xinxhj_mb_huangzu', 'xinxhj_dc_sb_jushou'
				, 'xinxhj_yj_sb_guojia'
			],


		}
	},
	//武将 'rare', 'epic', 'legend',['legend']
	character: {
		xinxhj_yuji: {
			sex: "male",
			group: "qun",
			hp: 3,
			trashBin: ["character:pot_yuji", 'epic'],
			skills: ["xinxhjdaozhuan", "xinxhjfuji"],
			dieAudios: ["pot_yuji"],
		},
		xinxhj_zhanghuai: {
			sex: "female",
			group: "wu",
			hp: 3,
			trashBin: ["character:zhanghuai", 'rare'],
			skills: ['xinxhjlaoyan', 'xinxhjjueyan'],
			dieAudios: ["zhanghuai"],
		},
		xinxhj_sb_lvbu: {
			sex: "male",
			group: "qun",
			hp: 4,
			trashBin: ["character:sb_lvbu", 'epic'],
			skills: ['xinxhjsbwushuang', 'xinxhjsbliyu'],
			dieAudios: ["sb_lvbu"],
		},
		xinxhj_dc_sb_luxun: {
			sex: "male",
			group: "qun",
			hp: 3,
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
			trashBin: ["character:yj_sb_guojia", 'legend'],
			skills: ["xinxhjxianmou", "xinxhjlunshi"],
			dieAudios: ["yj_sb_guojia"],
		},




	},
	//翻译
	translate: {
		//武将分包
		shizhounian: '十周年',
		shousha: '手杀',
		xinxxiugai: '武将修改',
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
		xinxhj_yj_sb_guojia: "改新杀谋郭嘉",
		xinxhj_yj_sb_guojia_prefix: "改新杀谋",
		xinxhjxianmou: "先谋",
		xinxhjxianmou_info: "转换技。①游戏开始时，你可以转换此技能状态；②你失去过牌的回合结束时，你可以：阳，观看牌堆顶五张牌并获得至多X张牌；阴，观看一名角色手牌并获得其至多X张牌，若获得X张牌则当前回合角色进行一次【闪电】判定。（X为本回合失去牌数）",
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
		xinxhjjilin_info: "①游戏开始时，你将牌堆顶三张牌暗置于你的武将牌上，称为“志”。②当你成为其他角色使用牌的目标时，你可以明置一张暗置的“志”令此牌对你无效。③回合开始时，你可用任意张手牌替换等量暗置的“志”。",
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
				end = "（X为本回合失去牌数）。";
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
				'die:xinxhj_dc_sb_lvmeng_shadow',
			]],
		],
		xinxhj_yj_sb_guojia: [
			['xinxhj_yj_sb_guojia_shadow', [
				((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/huaijiu/yj_sb_guojia_shadow.jpg',
				'tempname:yj_sb_guojia_shadow',
				'die:yj_sb_guojia_shadow'
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
					return "你失去过牌的回合结束时，你可以观看一名角色手牌并获得其至多X张牌，若获得X张牌则当前回合角色进行一次【闪电】判定（X为本回合失去牌数）";
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
				game.countPlayer(current => {
					if (current.hasHistory("lose", evt => {
						if (evt.cards2) {
							num += evt.cards2.length;
						}
					}
					));
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
							return get.effect(target, { name: "guohe_copy2" }, player, player);
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
				if (!player.countCards("hse")) {
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

				player.addTempSkill("qinggang2");
				player.storage.qinggang2.add(trigger.card);
				player.markSkill("qinggang2");

				trigger.card.storage ??= {};
				trigger.card.storage.xinxhjmbchizhang = [targets, colors];
			},
			ai: {
				"unequip_ai": true,
				skillTagFilter(player, tag, arg) {
					if (arg && get.is.damageCard(arg)) {
						return true;
					}
					return false;
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
							.choosePlayerCard(get.prompt2(event.skill, target), target, "hej", [1, 2],
								(card, player, target) => {
									return target.countDiscardableCards(player, "he");
								})
							.forResult();
					},
					logTarget: "player",
					async content(event, trigger, player) {
						const cards = event.cards,
							target = trigger.player;
						player.logSkill("mbduanyang", target, null, null, [3]);
						await target.discard(cards);
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
				if (
					game.getRoundHistory(
						"useCard",
						evt => {
							return evt.card.name == trigger.card.name && evt != trigger;
						},
						0,
						null,
						trigger
					).length
				) {
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
				const cards = get.cards(3);
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
				order: 10,
				threaten: 4,
				result: { player: 1 },
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