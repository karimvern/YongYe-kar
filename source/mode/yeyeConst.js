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
	eliteSkillCount: 2,          // 精英额外获得的可获取技能数
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
	shopBuffCost: 10,             // 「强化」的兜底基础价（正常会先读下面的档位表/单项 price）
	shopSkillCost: 7,            // 购买「技能」类的基础功勋价
	// ==================== 【强化定价】按档位 + 单项覆盖 ====================
	// 强化实际价格 = 单项 price（若写了） → 否则本档位默认价 → 否则 shopBuffCost 兜底，
	// 最后再加上本关递增价（stageShopPriceStep × 本关已买次数）。
	// 想给不同档位定不同价，直接改这 5 个数字即可，例如 { 1: 10, 2: 12, 3: 18, 4: 22, 5: 28 }
	buffPriceByLevel: {
		1: 10,
		2: 12,
		3: 15,
		4: 18,
		5: 20,
	},
	skillLimit: 9,              // 最多能把 9 个技能带入对局；超出的标红且不生效，卖掉前面的才会顶上来
	sellCoin: 2,
	jadePerCoin: 100,            // 花 100 玉璧换 5 功勋
	coinPerJade: 5,

	// ==================== 【新增】商店限购与递增价格（每关重置） ====================
	// 说明：这三项只影响“本关”的商店，进入下一关会自动清零。
	// 想还原成旧版（不限购 / 不涨价 / 刷新 1 功勋）：
	//   stageShopLimit 改成 999，stageShopPriceStep 改成 0，shopRefreshBase 改成 1，shopRefreshBaseMul 改成 1
	stageShopLimit: 2,           // 每关「技能」「强化」各自最多能买几次
	stageShopPriceStep: 2,       // 本关同类每多买 1 次单价 +2（技能 7→9→11，强化 10→12→14）
	shopRefreshBase: 2,          // 本关第一次刷新的价格
	shopRefreshBaseMul: 2,       // 之后每次刷新在上一价基础上乘这个倍率（2 → 4 → 8 → 16 …）

	// ==================== 【新增节点】数值总表（锻造 / 祭坛 / 挑战） ====================
	// 想停用这三种新节点：把下面的 enableNewNodes 改成 false。
	// 改完三选一里就不会再出现它们，商店与原先的节点逻辑会自动回退到旧版。
	enableNewNodes: true,
	// —— 锻造：花功勋，选一个已有技能重铸成随机新技能 ——
	forgeRerollCost: 2,             // 每次重铸消耗的功勋
	// —— 祭坛：三种献祭，每种每次限一次 ——
	altarHpCost: 3,                 // 献祭消耗的当前体力（体力 ≤ 这个值时不给该选项）
	altarHpBuffMinLevel: 4,         // 献祭体力换到的强化最低档位（4=蛮力/防具，5=锦囊/强攻/延寿）
	altarMaxHpCost: 1,              // 献祭消耗的体力上限
	altarReviveRewardCoin: 8,       // 献祭 1 次复活额外给的功勋
	// —— 挑战：自选加码，加码越狠奖励越高 ——
	challengeCoinBonus: 3,          // 每选一项加码，胜利后额外给的功勋
	challengeEnemyDelta: 2,         // 「以寡敌众」本关敌人 +2（改幅度就改这个数）
	challengeMarkBonus: 2,          // 「夜之烙印」本关敌人全体各 +2 个夜之刻印（改幅度就改这个数）
};

/** 节点类型表 */
export const YEYE_NODES = {
	battle: { key: 'battle', name: '战斗', accent: '#7fb2ff', info: '与敌人交战，胜利获得功勋。' },
	elite: { key: 'elite', name: '精英', accent: '#ff8a5c', info: '敌人更少，但更强：带夜之刻印、体力上限提升、额外技能、可复生一次。' },
	event: { key: 'event', name: '奇遇', accent: '#c08cff', info: '触发一个随机事件。' },
	rest: { key: 'rest', name: '休整', accent: '#7fe6a8', info: '回复部分体力并获得功勋。' },
	boss: { key: 'boss', name: 'BOSS', accent: '#ff6b6b', info: '永夜化身：体力上限提升、多个夜之刻印、可复生一次，身旁有随从。' },
	// ===== 【新增节点】以下三种由 YEYE_RULES.enableNewNodes 控制 =====
	// 想彻底拿掉它们：把 enableNewNodes 改成 false；也可以把下面三行整段注释掉。
	forge: { key: 'forge', name: '锻造', accent: '#ffcf6b', info: '花功勋重铸一个已有技能。' },
	altar: { key: 'altar', name: '祭坛', accent: '#b06bff', info: '献祭体力 / 体力上限 / 复活，换取稀有奖励。' },
	challenge: { key: 'challenge', name: '挑战', accent: '#ff4d6d', info: '自选加码，胜利后拿高额功勋。' },
};

export const YEYE_NODE_POOL = ['battle', 'elite', 'event', 'rest']
	// 【新增节点】开关在这里：enableNewNodes 为 true 时才把锻造/祭坛/挑战加进三选一池
	.concat(YEYE_RULES.enableNewNodes ? ['forge', 'altar', 'challenge'] : []);

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
	{ key: 'yeye_mk_zhoufu', name: '咒缚', info: '玩家使用基本牌时，你摸1张牌。' },
	{ key: 'yeye_mk_shixue', name: '嗜血', info: '你造成伤害后增加1点体力上限并回复1点体力。' },
	{ key: 'yeye_mk_zhongjia', name: '重甲', info: '每回合限一次，你受到的【杀】伤害-1。' },
	{ key: 'yeye_mk_jijia', name: '棘甲', info: '每回合限一次，你受到伤害后，对伤害来源造成1点伤害。' },
	{ key: 'yeye_mk_shigu', name: '蚀骨', info: '每回合限一次，玩家对你造成伤害后，其失去1点体力。' },
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
	// price 会覆盖 buffPriceByLevel[3]，单独给「摸牌数+1」定价
	{ name: '丰收', info: '摸牌数+1', value: 1, level: 3, price: 25 }],
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

/* ===================== 【新增】商店限购 / 递增价格 计算 ===================== */

/**
 * 强化单项的基础价（功勋）：
 * 优先用 YEYE_BUFFS 里单项的 price → 其次按档位表 buffPriceByLevel[level] → 最后兜底 shopBuffCost。
 * 例：{ name: '丰收', ..., level: 3, price: 25 } 就固定按 25 算。
 */
export function yeyeBuffBasePrice(buff) {
	if (!buff) return YEYE_RULES.shopBuffCost || 0;
	if (typeof buff.price === 'number') return buff.price;
	const table = YEYE_RULES.buffPriceByLevel || {};
	const byLevel = table[buff.level];
	if (typeof byLevel === 'number') return byLevel;
	return YEYE_RULES.shopBuffCost || 0;
}

/** 本关同类商品已买 boughtCount 次后，下一次购买的单价 */
export function yeyeShopPrice(base, boughtCount) {
	const step = YEYE_RULES.stageShopPriceStep || 0;
	return (Number(base) || 0) + step * Math.max(0, Number(boughtCount) || 0);
}

/** 本关第 refreshCount 次刷新的价格：base × mul^refreshCount（2 → 4 → 8 …） */
export function yeyeRefreshPrice(refreshCount) {
	const base = YEYE_RULES.shopRefreshBase || 0;
	const mul = YEYE_RULES.shopRefreshBaseMul || 1;
	return base * Math.pow(mul, Math.max(0, Number(refreshCount) || 0));
}

/** 本关某类商品是否已经买满（达到 stageShopLimit） */
export function yeyeShopLimitReached(boughtCount) {
	return (Number(boughtCount) || 0) >= (YEYE_RULES.stageShopLimit || 0);
}

/** 进入下一关时清空商店限购计数（购买次数与刷新次数都归零） */
export function yeyeResetStageShop(data) {
	if (!data) return;
	data.stageBought = { skill: 0, buff: 0 };
	data.stageRefresh = 0;
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
		// ===== 【新增节点】卡片说明（数值都取自 YEYE_RULES） =====
		case 'forge':
			return `花费${YEYE_RULES.forgeRerollCost} 功勋，将一个已有技能替换成随机技能，可连续重铸；离开时 +${YEYE_RULES.eventCoin} 功勋`;
		case 'altar':
			return `三选一献祭：${YEYE_RULES.altarHpCost} 点体力换稀有强化 / ${YEYE_RULES.altarMaxHpCost} 点体力上限换侍灵 / 1 次复活换 +${YEYE_RULES.altarReviveRewardCoin} 功勋与随机技能；离开时 +${YEYE_RULES.eventCoin} 功勋`;
		case 'challenge':
			return `自选条件（敌人 +${YEYE_RULES.challengeEnemyDelta} 或全体 +${YEYE_RULES.challengeMarkBonus} 刻印），胜利后每项 +${YEYE_RULES.challengeCoinBonus} 功勋`;
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
	const result = pool.randomGets(Math.min(3, pool.length)).filter(Boolean);
	// 【新增节点配套】池子变大后可能三张都不是能打的节点，这里保证至少留一个战斗类，避免功勋收入断档。
	// 若不需要这条保底，删掉下面这一段即可。
	const combat = ['battle', 'elite', 'challenge'];
	if (result.length && !result.some(key => combat.includes(key))) {
		const fallback = pool.filter(key => combat.includes(key)).randomGet();
		if (fallback) result[Math.floor(Math.random() * result.length)] = fallback;
	}
	return result;
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
