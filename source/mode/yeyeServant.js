'use strict';
import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import { YEYE_RULES, yeyeOpenPanel, yeyePanelCard } from './yeyeConst.js';

/**
 * ============ 添加一只侍灵要做的事（一共两步） ============
 * 1) 在下面的 YEYE_SERVANTS 里加一条：id（英文唯一）、name（面板显示名）、
 *    character（立绘用的武将 id，图片取 extension/永夜之境/image/<武将id>.png）、
 *    passive / active（两个技能 id，命名约定 yeye_sl_<id>_p / yeye_sl_<id>_a）。
 * 2) 在 globalskill-yy.js 里按这两个 id 写技能实现（被动写在 trigger 上，
 *    主动写 enable: 'phaseUse'；「每关限一次」用 game.yeyeStageUsed / game.yeyeMarkStageUsed
 *    判断与标记，「每回合限一次」用 game.yeyeTurnKey()）。
 *    技能要用的工具都要挂在 game 上（game.yeyeXxx），不要引用模块作用域变量——
 *    本体编译技能内容时不带模块作用域。
 * 3) 技能名与描述写在本文件的 YEYE_SERVANT_TRANSLATE 里（唯一出处），
 *    面板、出牌阶段技能栏、技能详情都会读它。改完重开游戏即可。
 */

/** 侍灵技能翻译：技能 id / 技能名 / 技能描述 */
export const YEYE_SERVANT_TRANSLATE = {
	yeye_sl_changyeyue_p: "月影",
	yeye_sl_changyeyue_p_info: "回合结束时，你回复1点体力；三阶起额外摸2张牌。",
	yeye_sl_changyeyue_a: "无期",
	yeye_sl_changyeyue_a_info: "你对体力值不大于2的角色造成伤害时，改为杀死之。",
	yeye_sl_yeshunguang_p: "瞬光",
	yeye_sl_yeshunguang_p_info: "你每回合首次造成伤害后，摸2张牌；三阶起改为摸3张。",
	yeye_sl_yeshunguang_a: "诛邪",
	yeye_sl_yeshunguang_a_info: "限定技，出牌阶段，你可以令你本局与其他角色的距离视为1，出【杀】上限+1。",
	yeye_sl_liuying_p: "萤火",
	yeye_sl_liuying_p_info: "你受到伤害后摸2张牌；三阶起额外对伤害来源造成1点伤害。",
	yeye_sl_liuying_a: "燃坠",
	yeye_sl_liuying_a_info: "限定技，出牌阶段，你可以对一名其他角色造成2点火焰伤害，三阶起改为3点。",
	yeye_sl_ruanmei_p: "轻拢",
	yeye_sl_ruanmei_p_info: "回合开始时，你摸1张牌；二阶起改为摸2张。",
	yeye_sl_ruanmei_a: "慢捻",
	yeye_sl_ruanmei_a_info: `限定技，出牌阶段，你可以加1点体力上限并回复1点体力。`,
	yeye_sl_daheita_p: "解构",
	yeye_sl_daheita_p_info: "你对体力值不大于你的角色造成的伤害+1；三阶起额外视为使用一张非伤害即时牌。",
	yeye_sl_daheita_a: "魔女",
	yeye_sl_daheita_a_info: "限定技，出牌阶段，你可以摸两张牌并令你本回合造成的伤害+1。",
	yeye_sl_sanyueqi_p: "留念",
	yeye_sl_sanyueqi_p_info: "回合结束时，你可以使用本回合弃牌堆的一张牌，三阶起改为两张。",
	yeye_sl_sanyueqi_a: "冰封",
	yeye_sl_sanyueqi_a_info: "限定技，出牌阶段，你可以令一名其他角色翻面。",
	yeye_sl_baie_p: "负世",
	yeye_sl_baie_p_info: "每回合限一次：你成为伤害牌的目标时，可以将此牌改为【火攻】。",
	yeye_sl_baie_a: "逐火",
	yeye_sl_baie_a_info: "限定技，出牌阶段，你可以视为使用X张无距离次数限制的火【杀】，X为你本关受到伤害的次数。",
};

//注册进技能翻译表，面板与技能栏都读这一份
Object.keys(YEYE_SERVANT_TRANSLATE).forEach(key => {
	lib.translate[key] = YEYE_SERVANT_TRANSLATE[key];
});

/**
 * 侍灵（附身型）：不占座位，只以技能形式挂在玩家身上。
 * 立绘直接复用本扩展里同名武将的图，不引入新素材。
 * 技能名与描述不在这里写死——统一从上面的 YEYE_SERVANT_TRANSLATE 读取，避免两处文本对不上。
 */
export const YEYE_SERVANTS = [
	{
		id: 'changyeyue',
		name: '长夜月',
		character: 'xinxnew_changyeyue',
		passive: 'yeye_sl_changyeyue_p',
		active: 'yeye_sl_changyeyue_a',
	},
	{
		id: 'yeshunguang',
		name: '叶瞬光',
		character: 'xinx_yeshunguang',
		passive: 'yeye_sl_yeshunguang_p',
		active: 'yeye_sl_yeshunguang_a',
	},
	{
		id: 'liuying',
		name: '流萤',
		character: 'xinxnew_liuying',
		passive: 'yeye_sl_liuying_p',
		active: 'yeye_sl_liuying_a',
	},
	{
		id: 'ruanmei',
		name: '阮梅',
		character: 'xinx_ruanmei',
		passive: 'yeye_sl_ruanmei_p',
		active: 'yeye_sl_ruanmei_a',
	},
	{
		id: 'daheita',
		name: '大黑塔',
		character: 'xinx_daheita',
		passive: 'yeye_sl_daheita_p',
		active: 'yeye_sl_daheita_a',
	},
	{
		id: 'sanyueqi',
		name: '三月七',
		character: 'xinx_sanyueqi',
		passive: 'yeye_sl_sanyueqi_p',
		active: 'yeye_sl_sanyueqi_a',
	},
	{
		id: 'baie',
		name: '白厄',
		character: 'xinx_baie',
		passive: 'yeye_sl_baie_p',
		active: 'yeye_sl_baie_a',
	},
];

export function yeyeGetServant(id) {
	return YEYE_SERVANTS.find(servant => servant.id === id) || null;
}

export function yeyeServantEntry(data, id) {
	if (!data || !Array.isArray(data.servants)) return null;
	return data.servants.find(entry => entry.id === id) || null;
}

/** 已拥有的侍灵（带等级） */
export function yeyeServantList(data) {
	if (!data || !Array.isArray(data.servants)) return [];
	return data.servants
		.map(entry => {
			const servant = yeyeGetServant(entry.id);
			if (!servant) return null;
			return Object.assign({}, servant, { level: entry.level || 1 });
		})
		.filter(Boolean);
}

/** 当前出战的侍灵 */
export function yeyeActiveServant(data) {
	if (!data || !data.servantActive) return null;
	const entry = yeyeServantEntry(data, data.servantActive);
	if (!entry) return null;
	const servant = yeyeGetServant(entry.id);
	if (!servant) return null;
	return Object.assign({}, servant, { level: entry.level || 1 });
}

export function yeyeServantLevel(data, id) {
	const entry = yeyeServantEntry(data, id);
	return entry ? (entry.level || 1) : 1;
}

/**
 * 获得一只侍灵：没有则新得，已有则升阶，满阶折算功勋。
 * 返回 {type:'new'|'upgrade'|'full', servant, level, coin}
 */
export function yeyeGainServant(data, id) {
	const servant = yeyeGetServant(id);
	if (!servant) return null;
	if (!Array.isArray(data.servants)) data.servants = [];
	let entry = yeyeServantEntry(data, id);
	if (!entry) {
		entry = { id, level: 1 };
		data.servants.push(entry);
		if (!data.servantActive) data.servantActive = id;
		return { type: 'new', servant, level: 1 };
	}
	if (entry.level >= YEYE_RULES.servantMaxLevel) {
		const coin = YEYE_RULES.servantFullConvertCoin;
		game.yeyeCoin(coin, '侍灵满阶折算', data);
		return { type: 'full', servant, level: entry.level, coin };
	}
	entry.level += 1;
	return { type: 'upgrade', servant, level: entry.level };
}

/**
 * 随机挑一只侍灵。
 * preferOwned=true 时优先给已有侍灵升阶（BOSS 奖励用），否则优先给还没有的（奇遇用）。
 */
export function yeyePickServantId(data, preferOwned) {
	const owned = yeyeServantList(data);
	const maxLevel = YEYE_RULES.servantMaxLevel;
	const upgradable = owned.filter(item => item.level < maxLevel);
	const missing = YEYE_SERVANTS.filter(item => !owned.some(one => one.id === item.id));
	let pool;
	if (preferOwned && upgradable.length) pool = upgradable;
	else if (missing.length) pool = missing;
	else if (upgradable.length) pool = upgradable;
	else pool = YEYE_SERVANTS;
	const picked = pool.randomGet();
	return picked ? picked.id : null;
}

/** 给玩家挂上出战侍灵的技能（进关时调用） */
export function yeyeApplyServantSkills(player) {
	if (!player) return null;
	const servant = yeyeActiveServant(lib.config.wujinYongyeData);
	if (!servant) return null;
	player.addSkill(servant.passive);
	player.addSkill(servant.active);
	return servant;
}

/** 清掉所有侍灵技能（退场时兜底；正常换关会整体重载） */
export function yeyeRemoveServantSkills(player) {
	if (!player) return;
	YEYE_SERVANTS.forEach(servant => {
		if (player.hasSkill(servant.passive)) player.removeSkill(servant.passive);
		if (player.hasSkill(servant.active)) player.removeSkill(servant.active);
	});
}

export function yeyeServantAvatar(servant) {
	return `extension/永夜之境/image/${servant.character}.png`;
}

/**
 * 侍灵技能的名字与描述：一律引用技能本身的翻译，
 * 找不到翻译时退回技能 id，保证面板不会空掉。
 */
export function yeyeServantSkillText(servant) {
	const read = skill => {
		const name = get.translation(skill);
		return {
			name: name && name !== skill ? name : skill,
			info: lib.translate[skill + '_info'] || '',
		};
	};
	const passive = read(servant.passive);
	const active = read(servant.active);
	return {
		passiveName: passive.name,
		passiveInfo: passive.info,
		activeName: active.name,
		activeInfo: active.info,
	};
}

function yeyeServantSummary(servant) {
	const text = yeyeServantSkillText(servant);
	const lines = [];
	lines.push(`【${text.passiveName}】${text.passiveInfo}`.trim());
	lines.push(`【${text.activeName}】${text.activeInfo}`.trim());
	return lines.filter(line => line && line !== '【】').join('<br>');
}

/** 侍灵面板：查看 / 切换出战侍灵 */
export function yeyeOpenServantPanel(host, data, refresh) {
	const api = yeyeOpenPanel(host, '侍灵', 'yeye_ServantBody');
	const owned = yeyeServantList(data);
	if (!owned.length) {
		ui.create.div('.yeye_PanelEmpty', '尚未获得侍灵。<br>在奇遇事件或击败 BOSS 后可以获得。', api.body);
		return api;
	}
	ui.create.div('.yeye_EventDesc', '点击卡片切换出战侍灵。', api.body);
	owned.forEach(servant => {
		const isActive = data.servantActive === servant.id;
		yeyePanelCard(api.body, {
			title: `${servant.name}　${'★'.repeat(servant.level)}（${servant.level} 阶）`,
			info: yeyeServantSummary(servant),
			avatar: yeyeServantAvatar(servant),
			selected: isActive,
			disabled: isActive,
			dim: !isActive,
			accent: isActive ? '#7fe6a8' : '#e5dba5',
			cost: isActive ? '出战中' : '点击出战',
			onClick() {
				data.servantActive = servant.id;
				game.saveConfig('wujinYongyeData', data);
				game.txhj_playAudioCall_yy('WinButton', null, true);
				game.messagePopup_yy(`${servant.name} 已出战`);
				api.close();
				if (typeof refresh === 'function') refresh();
			},
		});
	});
	return api;
}

/** 得到侍灵时的提示文案 */
export function yeyeServantResultText(result) {
	if (!result) return '什么也没有发生。';
	if (result.type === 'new') return `获得侍灵【${result.servant.name}】！`;
	if (result.type === 'upgrade') return `侍灵【${result.servant.name}】升到 ${result.level} 阶！`;
	return `侍灵【${result.servant.name}】已满阶，折算为 ${result.coin} 功勋。`;
}

/**
 * 开局「选择获得侍从」界面。
 * 沿用点将的武将卡样式：两行、每行 6 张，超过两行可上下滑动，并支持正则搜索
 * （名字 / 技能名 / 技能描述）。选中后点「确定」即获得该侍从（已有则升阶）
 * 并设为出战，随后执行 onDone。
 */
export function yeyeOpenServantSelect(onDone) {
	const data = lib.config.wujinYongyeData;
	const view = ui.create.div('.yeye_Home');
	document.body.appendChild(view);
	const body = ui.create.div('.yeye_HomeBody', view);
	game.yyUIupdata(body, true);

	ui.create.div('.yeye_ServantTitle', '选择获得侍从', body);

	//搜索栏：支持正则
	const searchBar = ui.create.div('.yeye_ServantSearchBar', body);
	const input = document.createElement('input');
	input.className = 'yeye_ServantSearchInput';
	input.type = 'text';
	input.placeholder = '支持正则搜索（名字 / 技能）';
	searchBar.appendChild(input);
	const searchBtn = ui.create.div('.yeye_ServantSearchBtn', '搜索', searchBar);

	//卡片区：两行、每行 6 个，超出可上下滑动
	const grid = ui.create.div('.yeye_ServantGrid', body);
	lib.setScroll(grid);

	const entries = [];
	let selected = null;
	YEYE_SERVANTS.forEach(servant => {
		const card = ui.create.div('.yeye_ServantCard', grid);
		game.addCharacterYeyeDivMobile(servant.character, true, card);
		const owned = yeyeServantEntry(data, servant.id);
		if (owned) {
			ui.create.div('.yeye_ServantOwned', '★'.repeat(Math.max(1, owned.level || 1)), card);
		}
		const entry = { servant: servant, card: card };
		card.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function (event) {
			if (_status.dragged || _status.justdragged) return;
			game.txhj_playAudioCall_yy('WinButton', null, true);
			if (selected && selected.card) selected.card.classList.remove('selected');
			selected = entry;
			card.classList.add('selected');
			event.stopPropagation();
			event.preventDefault();
			return false;
		});
		//右键查看该侍从的技能
		card.oncontextmenu = function (event) {
			game.txhj_playAudioCall_yy('WinButton', null, true);
			const text = yeyeServantSkillText(servant);
			const api = yeyeOpenPanel(view, servant.name + ' · 技能', 'yeye_ServantSkillBody');
			ui.create.div('.yeye_EventDesc', `【${text.passiveName}】${text.passiveInfo}<br><br>【${text.activeName}】${text.activeInfo}`, api.body);
			event.stopPropagation();
			event.preventDefault();
			return false;
		};
		entries.push(entry);
	});

	//搜索用文本：名字 + 技能名 + 技能描述
	function servantSearchText(servant) {
		const parts = [servant.name, servant.character, lib.translate[servant.character] || ''];
		[servant.passive, servant.active].forEach(skill => {
			parts.push(lib.translate[skill] || '');
			parts.push(lib.translate[skill + '_info'] || '');
		});
		return parts.join(' ');
	}
	function updateFind() {
		const raw = (input.value || '').trim();
		let reg = null;
		if (raw) {
			try {
				reg = new RegExp(raw, 'i');
			} catch (e) {
				reg = null;
			}
		}
		entries.forEach(entry => {
			let show = true;
			if (raw) {
				const text = servantSearchText(entry.servant);
				show = reg ? reg.test(text) : text.toLowerCase().indexOf(raw.toLowerCase()) >= 0;
			}
			entry.card.style.display = show ? '' : 'none';
		});
	}
	searchBtn.addEventListener('click', function (event) {
		updateFind();
		event.stopPropagation();
	});
	input.onkeydown = function (event) {
		event.stopPropagation();
		if (event.key === 'Enter') updateFind();
	};
	input.onmousedown = function (event) {
		event.stopPropagation();
	};

	//底部按钮
	function finish() {
		game.yyUIupdata(body, false);
		view.delete();
		if (typeof onDone === 'function') onDone();
	}
	const okBtn = ui.create.div('.yeye_ServantBtn.yeye_ServantOk', '确定', body);
	okBtn.addEventListener('click', function (event) {
		if (!selected) {
			game.messagePopup_yy('请选择一名侍从，或点「跳过」');
			event.stopPropagation();
			event.preventDefault();
			return false;
		}
		const result = yeyeGainServant(data, selected.servant.id);
		data.servantActive = selected.servant.id;
		game.saveConfig('wujinYongyeData', data);
		game.txhj_playAudioCall_yy('WinButton', null, true);
		if (typeof game.messagePopup_yy === 'function' && result) game.messagePopup_yy(yeyeServantResultText(result));
		event.stopPropagation();
		event.preventDefault();
		finish();
		return false;
	});
	const skipBtn = ui.create.div('.yeye_ServantBtn.yeye_ServantSkip', '跳过', body);
	skipBtn.addEventListener('click', function (event) {
		game.txhj_playAudioCall_yy('off', null, true);
		event.stopPropagation();
		event.preventDefault();
		finish();
		return false;
	});

	if (lib.config.extension_永夜之境_yeyeTextSizeOn === true) {
		game.applyandroidSize_yy(body);
	}
	return { view, body };
}
