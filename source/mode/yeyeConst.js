'use strict';
import { lib, game, ui, get, ai, _status } from '../../../../noname.js';

/**
 * 《永夜将临》肉鸽化改造的数值总表。
 * 想调平衡只改这里，玩法逻辑统一从这里取数。
 */
export const YEYE_RULES = {
	totalStages: 25,                          // 单局总关数
	bossStages: [5, 10, 15, 20, 25],      // BOSS 关
	stageCoin: 4,                // 每关通关基础功勋
	eliteCoin: 4,                // 精英关额外功勋
	bossCoin: 10,                // BOSS 关功勋（替代基础功勋）
	coinPerExtraEnemy: 2,        // 本关敌人每多 1 个，额外（第一个不算）
	eventCoin: 1,                // 奇遇结算后的基础功勋（非战斗节点不再给战斗的基础功勋）
	restCoin: 0,                 // 休整（未满血）功勋
	restFullCoin: 1,             // 休整（满血）功勋
	restHealRatio: 0.5,          // 休整回复比例，向上取整
	markPerElite: 1,             // 精英敌人各带 1 个夜之刻印
	markPerBoss: 1,              // BOSS 自带 1 个夜之刻印
	bossSideEnemies: 1,          // BOSS 身旁额外生成的敌人数量
	bossHpBonus: 3,              // BOSS 体力上限加成
	bossSkillCount: 2,           // BOSS 额外获得的可获取技能数
	bossReviveHp: 2,             // BOSS 阶段复生时的体力
	//精英敌人强化：精英关里每个敌人都会套用这一组
	eliteHpBonus: 2,             // 精英体力上限加成
	eliteSkillCount: 1,          // 精英额外获得的可获取技能数
	eliteReviveHp: 2,            // 精英阶段复生时的体力（填 0 就是不复生）
	//BOSS/精英强化倍率：15 关以前按原数值，15 关起 ×2，最后一关 ×3
	enhanceBoostStage: 15,       // 从这一关起强化数值翻倍
	enhanceBoostScale: 2,        // 翻倍倍率
	enhanceFinalScale: 2,        // 最后一关（totalStages）的倍率
	servantMaxLevel: 3,          // 侍灵最高阶
	servantFullConvertCoin: 3,   // 侍灵满阶后重复获得的折算功勋
	nextStageBonusCoin: 2,       // 「永夜之赐」每关额外功勋
	maxLevel: 5,                 // 商店等级上限
	upgradeCost: { 1: 5, 2: 6, 3: 7, 4: 8 },
	shopRefreshCost: 1,
	shopBuffCost: 10,             // 购买「强化」类的功勋价
	shopSkillCost: 7,            // 购买「技能」类的功勋价
	skillLimit: 100,              // 最多能把 12 个技能带入对局；超出的标红且不生效，卖掉前面的才会顶上来
	sellCoin: 2,
	jadePerCoin: 100,            // 花 100 玉璧换 5 功勋
	coinPerJade: 5,
};

/** 节点类型表 */
export const YEYE_NODES = {
	battle: { key: 'battle', name: '战斗', accent: '#7fb2ff', info: '与敌人交战，胜利获得功勋。' },
	elite: { key: 'elite', name: '精英', accent: '#ff8a5c', info: '敌人更少，但更强：带夜之刻印、体力上限提升、额外技能、可复生一次。' },
	event: { key: 'event', name: '奇遇', accent: '#c08cff', info: '触发一个随机事件。' },
	rest: { key: 'rest', name: '休整', accent: '#7fe6a8', info: '回复部分体力并获得功勋。' },
	boss: { key: 'boss', name: 'BOSS', accent: '#ff6b6b', info: '永夜化身：体力上限提升、多个夜之刻印、可复生一次，身旁有随从。' },
};

export const YEYE_NODE_POOL = ['battle', 'elite', 'event', 'rest'];

/**
 * 夜之刻印（敌人词条）。
 * info 一律以「刻印持有者（敌人）」为主视角书写：你是敌人，玩家是玩家方。
 * 这段文本会注册成技能描述，玩家查看敌人武将牌时能看到。
 */
export const YEYE_MARKS = [
	{ key: 'yeye_mk_kuangbao', name: '狂暴', info: '你造成的伤害+1。' },
	{ key: 'yeye_mk_tiebi', name: '铁壁', info: '你每回合首次受到的伤害-1。' },
	{ key: 'yeye_mk_wangyu', name: '亡语', info: '你死亡时，玩家失去2点体力。' },
	{ key: 'yeye_mk_leifa', name: '雷罚', info: '回合开始时，对玩家造成1点雷电伤害。' },
	{ key: 'yeye_mk_tanlan', name: '贪婪', info: '回合结束时，玩家弃置2张牌。' },
	{ key: 'yeye_mk_zhoufu', name: '咒缚', info: '玩家使用【杀】时，你摸1张牌。' },
	{ key: 'yeye_mk_shixue', name: '嗜血', info: '你造成伤害后回复1点体力。' },
	{ key: 'yeye_mk_zhongjia', name: '重甲', info: '每回合限一次，你受到的【杀】伤害-1。' },
	{ key: 'yeye_mk_jijia', name: '棘甲', info: '每回合限一次，你受到伤害后，对伤害来源造成1点伤害。' },
	{ key: 'yeye_mk_shigu', name: '蚀骨', info: '每回合限一次，玩家对你造成伤害后，其失去1点体力。' },
	{ key: 'yeye_mk_yinhun', name: '阴魂', info: '你死亡时，玩家失去1点体力。' },
	{ key: 'yeye_mk_feiteng', name: '沸腾', info: '你的体力值不大于2时，造成的伤害+1。' },
];

//把刻印注册成技能名与技能描述，玩家查看敌人武将牌时就能读到文本
YEYE_MARKS.forEach(mark => {
	lib.translate[mark.key] = mark.name;
	lib.translate[mark.key + '_info'] = mark.info;
});

/** 商店强化表：外层是等级档位，和原来 wujinYongyeData 里的一致 */
export const YEYE_BUFFS = [
	[{ name: '迅捷', info: '与其他角色的距离-1', value: 1, level: 1 },
	{ name: '凝神', info: '手牌上限+2', value: 2, level: 1 },
	{ name: '援军', info: '起始手牌额外获得2张临时牌', value: 2, level: 1 },
	{ name: '基本', info: '起始手牌额外获得2张临时基本牌', value: 2, level: 1 },
	{ name: '坐骑', info: '起始手牌额外获得2张临时坐骑牌', value: 2, level: 1 }],
	[{ name: '智识', info: '锦囊牌造成的伤害+1', value: 1, level: 2 },
	{ name: '避战', info: '与其他角色的距离+1', value: 1, level: 2 },
	{ name: '武器', info: '起始手牌额外获得2张临时武器牌', value: 2, level: 2 }],
	[{ name: '强身', info: '体力上限+1', value: 1, level: 3 },
	{ name: '回复', info: '回复体力的效果+1', value: 1, level: 3 },
	{ name: '丰收', info: '摸牌数+1', value: 1, level: 3 }],
	[{ name: '蛮力', info: '【杀】造成的伤害+1', value: 1, level: 4 },
	{ name: '防具', info: '起始手牌额外获得2张临时防具牌', value: 2, level: 4 }],
	[{ name: '锦囊', info: '起始手牌额外获得2张临时锦囊牌', value: 2, level: 5 },
	{ name: '强攻', info: '使用【杀】的次数上限+1', value: 1, level: 5 },
	{ name: '延寿', info: '增加体力上限的效果+1', value: 1, level: 5 }],
];

/** 商店每级上架的强化/技能数量 */
export const YEYE_SHOP_PLAN = [
	{ buff: 1, skill: 2 },
	{ buff: 1, skill: 3 },
	{ buff: 2, skill: 4 },
	{ buff: 2, skill: 5 },
	{ buff: 3, skill: 6 },
];

/**
 * 本局真正能带入对局的技能：只取前 skillLimit 个。
 * 面板上第 skillLimit+1 个起会标红；玩家卖掉靠前的技能后，后面的会依次顶上来生效。
 */
export function yeyeActiveSkills(list) {
	return Array.isArray(list) ? list.slice(0, YEYE_RULES.skillLimit) : [];
}

/**
 * 本关 BOSS/精英强化数值的倍率：
 * 15 关以前按原数值（×1）；15 关起 ×2；最后一关（totalStages）×3。
 */
export function yeyeEnhanceScale(stage) {
	const s = Number(stage) || 1;
	if (s >= YEYE_RULES.totalStages) return YEYE_RULES.enhanceFinalScale;
	if (s >= YEYE_RULES.enhanceBoostStage) return YEYE_RULES.enhanceBoostScale;
	return 1;
}

/**
 * 取按关卡放大后的强化数值，例如 yeyeScaled('markPerBoss', stage)。
 * 适用：markPerBoss / markPerElite / bossSideEnemies / bossHpBonus /
 *       bossSkillCount / bossReviveHp / eliteHpBonus / eliteSkillCount / eliteReviveHp
 */
export function yeyeScaled(key, stage) {
	const base = Number(YEYE_RULES[key]) || 0;
	return base * yeyeEnhanceScale(stage);
}

export function yeyeIsBossStage(stage) {
	return YEYE_RULES.bossStages.includes(stage);
}

/** 节点卡片上的具体说明（带上本关的敌人数量与功勋），让玩家一眼能分清哪个是打架哪个是事件 */
export function yeyeNodeInfo(key, stage) {
	const base = yeyeEnemyCount(stage);
	switch (key) {
		case 'battle':
			return `敌人 ${base} 名，胜利 +${YEYE_RULES.stageCoin + yeyeEnemyBonus(base)} 功勋`;
		case 'elite': {
			const count = Math.max(1, base - 1);
			return `精英 ${count} 名（夜之刻印 · 体力上限+${yeyeScaled('eliteHpBonus', stage)} · 额外技能 · 可复生），胜利 +${YEYE_RULES.stageCoin + YEYE_RULES.eliteCoin + yeyeEnemyBonus(count)} 功勋`;
		}
		case 'event':
			return `触发一个随机事件，结算后获得 ${YEYE_RULES.eventCoin} 功勋并直接进入下一关`;
		case 'rest':
			return YEYE_RULES.restCoin > 0
				? `回复约一半已损失体力，+${YEYE_RULES.restCoin} 功勋（体力已满时 +${YEYE_RULES.restFullCoin}）`//只有战斗类节点才给通关功勋
				: `回复约一半已损失体力，体力已满时 +${YEYE_RULES.restFullCoin} 功勋`;
		case 'boss': {
			const side = yeyeScaled('bossSideEnemies', stage);
			const count = 1 + side;
			return `永夜化身（体力上限+${yeyeScaled('bossHpBonus', stage)}、${yeyeScaled('markPerBoss', stage)} 个夜之刻印、可复生一次）+ ${side} 名随从　·　胜利 +${YEYE_RULES.bossCoin + yeyeEnemyBonus(count)} 功勋`;
		}
		default:
			return '';
	}
}

/** 敌人数量带来的额外功勋：第一个敌人不算，之后每多 1 个 +coinPerExtraEnemy */
export function yeyeEnemyBonus(count) {
	return Math.max(0, (Number(count) || 0) - 1) * YEYE_RULES.coinPerExtraEnemy;
}

/** 普通关敌人数量（沿用原来的成长曲线） */
export function yeyeEnemyCount(stage) {
	return stage <= 3 ? 1 : stage <= 8 ? 2 : 3;
}

/**
 * 是否启用了「对决模式（欢乐）」的战斗布局。
 * 开关位于永夜将临的模式设置（mode_config.wujin_yongye.duelMode）。
 */
export function yeyeDuelModeEnabled() {
	try {
		const mc = lib.config.mode_config && lib.config.mode_config.wujin_yongye;
		if (mc && mc.duelMode !== undefined) return !!mc.duelMode;
		//兜底：万一开关被写进了全局设置
		if (lib.config.duelMode !== undefined) return !!lib.config.duelMode;
		return false;
	} catch (e) {
		return false;
	}
}

/**
 * 本关的座位布局。
 * 关闭对决模式：玩家 + 敌人若干（维持原来的主公/反贼）。
 * 开启对决模式：
 *   敌人 = 1：玩家 + 1 名敌人（没有队友，共 2 人）；
 *   敌人 = 2：玩家 + 队友 + 2 名敌人（共 4 人）；
 *   敌人 ≥ 3：玩家 + 队友 + 敌人若干，多余的敌人排在最后（如 3 敌人共 5 人）。
 * 返回 { total, ally }，total 是座位总数，ally 表示是否要安排队友。
 */
export function yeyeArenaLayout(enemyCount) {
	enemyCount = Math.max(1, Number(enemyCount) || 1);
	if (!yeyeDuelModeEnabled()) return { total: enemyCount + 1, ally: false };
	const ally = enemyCount >= 2;
	return { total: enemyCount + 1 + (ally ? 1 : 0), ally };
}

/** 本关的三个节点候选：精英不会出现在 BOSS 前一关 */
export function yeyeNodeCandidates(stage) {
	const pool = YEYE_NODE_POOL.filter(key => {
		if (key === 'elite' && yeyeIsBossStage(stage + 1)) return false;
		return true;
	});
	const result = pool.randomGets(Math.min(3, pool.length));
	return result.filter(Boolean);
}

/** 从强化表里抽一个随机强化，minLevel 用来抽「稀有」强化 */
export function yeyeRandomBuff(minLevel = 1) {
	const pool = [];
	YEYE_BUFFS.forEach((tier, index) => {
		if (index + 1 < minLevel) return;
		tier.forEach(buff => pool.push(buff));
	});
	return pool.randomGet() || null;
}

/** 抽可获取技能，过滤规则与商店保持一致 */
export function yeyeGainableSkillPool(data) {
	const excluded = data && Array.isArray(data.skill) ? data.skill : [];
	return get.gainableSkills().filter(i => {
		if (!lib.translate[i + '_info'] || excluded.includes(i)) return false;
		const list = [i];
		game.expandSkills(list);
		for (const j of list) {
			const info = lib.skill[j];
			if (!info) continue;
			const ai = info.ai || {};
			if ((info.mode && !info.mode.includes(get.mode())) || info.silent || info.juexingji || info.hiddenSkill || info.hidden || info.dutySkill || info.unique || info.ZhuSkill || ai.combo || ai.notemp || ai.neg) {
				continue;
			}
			return true;
		}
		return false;
	});
}

export function yeyeRandomGainableSkills(data, count) {
	const pool = yeyeGainableSkillPool(data);
	const result = [];
	let guard = 0;
	while (result.length < count && guard++ < 50) {
		const skill = pool.randomGet();
		if (skill) result.add(skill);
	}
	return result;
}

export function yeyeBuffOf(name) {
	for (const tier of YEYE_BUFFS) {
		const found = tier.find(buff => buff.name === name);
		if (found) return found;
	}
	return null;
}

/**
 * 给玩家加一层强化。
 * 「强身」改成购买/获得时立刻生效，这样跨关保留体力时不会反复叠加体力上限。
 */
export function yeyeAddBuff(data, buff) {
	if (!data || !buff) return;
	if (!Array.isArray(data.buff)) data.buff = [];
	data.buff.push(buff);
	if (buff.name === '强身') {
		data.maxHp = (data.maxHp || 0) + 1;
		data.hp = Math.min((data.hp || 0) + 1, data.maxHp);
	}
}

/** 移除一层指定强化（「强身」会同步扣回体力上限） */
export function yeyeRemoveBuff(data, name) {
	if (!data || !Array.isArray(data.buff) || !name) return false;
	const index = data.buff.findIndex(buff => buff && buff.name === name);
	if (index < 0) return false;
	data.buff.splice(index, 1);
	if (name === '强身') {
		data.maxHp = Math.max(1, (data.maxHp || 1) - 1);
		data.hp = Math.max(1, Math.min(data.hp || 1, data.maxHp));
	}
	return true;
}

/** 本回合的唯一标识（用于「每回合首次」这类效果） */
export function yeyeTurnKey() {
	return `${game.roundNumber}:${_status.currentPhase ? _status.currentPhase.playerid : ''}`;
}

/** 当前关卡标识（用于「每关限一次」这类效果） */
export function yeyeStageKey() {
	const data = lib.config.wujinYongyeData;
	return 'stage_' + ((data && data.barrier) || 0);
}

export function yeyeMarkName(key) {
	const mark = YEYE_MARKS.find(item => item.key === key);
	return mark ? mark.name : null;
}

/* ===================== 公共界面工具 ===================== */

/** 打开一个覆盖在永夜主界面上的面板 */
export function yeyeOpenPanel(host, title, extraClass) {
	const panel = ui.create.div('.yeye_Panel' + (extraClass ? ' ' + extraClass : ''), host);
	ui.create.div('.yeye_PanelTitle', title, panel);
	const closeBtn = ui.create.div('.yeye_PanelClose', '关闭', panel);
	const body = ui.create.div('.yeye_PanelBody', panel);
	lib.setScroll(body);
	const api = {
		panel,
		body,
		close() {
			if (panel.parentNode) panel.parentNode.removeChild(panel);
		},
	};
	closeBtn.addEventListener('click', function (event) {
		game.txhj_playAudioCall_yy('off', null, true);
		api.close();
		event.stopPropagation();
		event.preventDefault();
		return false;
	});
	// 阻止冒泡，避免触发主界面自身的点击逻辑
	panel.addEventListener('click', function (event) {
		event.stopPropagation();
	});
	return api;
}

/** 面板里的卡片 */
export function yeyePanelCard(body, options) {
	//全部用显式 appendChild + innerHTML，避免依赖 ui.create.div 的参数推断
	const card = ui.create.div('.yeye_PanelCard');
	if (options.extraClass) card.classList.add(options.extraClass);
	if (options.disabled) card.classList.add('disabled');
	if (options.selected) card.classList.add('selected');
	//dim：只把卡片变暗，但仍可点击（与 disabled 区分开）
	if (options.dim) card.classList.add('dim');
	if (options.accent) card.style.borderLeft = '8px solid ' + options.accent;
	if (options.avatar) {
		card.classList.add('has-avatar');
		const avatar = ui.create.div('.yeye_PanelCardAvatar');
		avatar.setBackgroundImage(options.avatar);
		card.appendChild(avatar);
	}
	if (options.cost) card.classList.add('has-cost');
	const main = ui.create.div('.yeye_PanelCardMain');
	const nameNode = ui.create.div('.yeye_PanelCardName');
	nameNode.innerHTML = options.title === undefined || options.title === null ? '' : String(options.title);
	main.appendChild(nameNode);
	if (options.info) {
		const infoNode = ui.create.div('.yeye_PanelCardInfo');
		infoNode.innerHTML = String(options.info);
		main.appendChild(infoNode);
	}
	card.appendChild(main);
	if (options.cost) {
		const costNode = ui.create.div('.yeye_PanelCardCost');
		costNode.innerHTML = String(options.cost);
		card.appendChild(costNode);
	}
	body.appendChild(card);
	if (options.onClick && !options.disabled) {
		card.addEventListener('click', function (event) {
			options.onClick(event);
			event.stopPropagation();
			event.preventDefault();
			return false;
		});
	}
	return card;
}

/** 面板里换一段内容（用于「事件 -> 选择 -> 结果」这类流程） */
export function yeyePanelClear(body) {
	while (body.firstChild) body.removeChild(body.firstChild);
}
