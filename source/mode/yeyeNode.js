'use strict';
/**
 * ==================== 【新增节点】锻造 / 祭坛 / 挑战 ====================
 *
 * 三种新节点的实现全部集中在本文件，数值全部来自 yeyeConst.js 的 YEYE_RULES。
 * 想停用：把 YEYE_RULES.enableNewNodes 改成 false（三选一里就不会再出现它们）。
 * 想彻底删掉：删除本文件，并删掉 prepare.js 里 import 与分发处的「新增节点」代码块。
 */
import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import {
	YEYE_RULES,
	yeyeRandomBuff,
	yeyeRandomGainableSkills,
	yeyeGainableSkillPool,
	yeyeAddBuff,
	yeyeOpenPanel,
	yeyePanelCard,
	yeyePanelClear,
} from './yeyeConst.js';
import { yeyePickServantId, yeyeGainServant, yeyeServantResultText } from './yeyeServant.js';

/** 统一创建面板 + 返回 finish/resolve 的骨架，三种节点共用 */
function yeyeNodePanel(host, title, extraClass, onClose) {
	const api = yeyeOpenPanel(host, title, extraClass);
	let settled = false;
	const finish = value => {
		if (settled) return;
		settled = true;
		api.close();
		api.resolve(value);
	};
	const closeBtn = api.panel.querySelector('.yeye_PanelClose');
	if (closeBtn) closeBtn.addEventListener('click', () => finish(onClose));
	api.finish = finish;
	api.promise = new Promise(res => (api.resolve = res));
	return api;
}

/* ============================================================================
 * 锻造：花功勋，选一个已有技能重铸成随机新技能（可连续重铸）
 * 数值：YEYE_RULES.forgeRerollCost
 * ========================================================================== */
export function yeyeRunForge(host, data) {
	const cost = YEYE_RULES.forgeRerollCost;
	const api = yeyeNodePanel(host, '锻造', 'yeye_ForgeBody', true);

	function render() {
		yeyePanelClear(api.body);
		ui.create.div(
			'.yeye_EventDesc',
			`花费 ${cost} 功勋重铸一个已有技能（换成随机新技能），可连续重铸；点击「离开」结束本关并进入下一关。`,
			api.body
		);
		const skills = Array.isArray(data.skill) ? data.skill : [];
		if (!skills.length) {
			ui.create.div('.yeye_PanelEmpty', '你还没有任何技能，无法重铸。', api.body);
		}
		const affordable = (data.coin || 0) >= cost;
		skills.forEach((skill, index) => {
			yeyePanelCard(api.body, {
				title: `【${get.translation(skill)}】`,
				info: lib.translate[skill + '_info'] || '暂无描述',
				cost: `${cost} 功勋`,
				disabled: !affordable,
				onClick() {
					reroll(index);
				},
			});
		});
		const leave = ui.create.div('.yeye_PanelButton', '离开', api.body);
		leave.addEventListener('click', function () {
			game.txhj_playAudioCall_yy('WinButton', null, true);
			api.finish(true);
		});
	}

	function reroll(index) {
		if ((data.coin || 0) < cost) {
			game.messagePopup_yy('功勋不足');
			return;
		}
		const pool = yeyeGainableSkillPool(data);
		const next = pool.randomGet();
		if (!next) {
			game.messagePopup_yy('已没有可以重铸出的新技能');
			return;
		}
		const old = data.skill[index];
		data.skill[index] = next;
		data.coin -= cost;
		game.saveConfig('wujinYongyeData', data);
		game.txhj_playAudioCall_yy('WinButton', null, true);
		game.messagePopup_yy(`重铸成功：【${get.translation(old)}】→【${get.translation(next)}】`);
		render();
	}

	render();
	return api.promise;
}

/* ============================================================================
 * 祭坛：三种献祭，每种每次限一次
 * 数值：YEYE_RULES.altarHpCost / altarHpBuffMinLevel / altarMaxHpCost / altarReviveRewardCoin
 * ========================================================================== */
export function yeyeRunAltar(host, data) {
	const api = yeyeNodePanel(host, '祭坛', 'yeye_AltarBody', true);
	// 每次进入祭坛，三种献祭各只能用一次
	const used = { hp: false, maxHp: false, revive: false };

	function render() {
		yeyePanelClear(api.body);
		ui.create.div('.yeye_EventDesc', '向永夜献上代价，换取本不属于你的力量。每种献祭每次限一次。', api.body);

		// —— 献祭体力 → 稀有强化 ——
		const hpCost = YEYE_RULES.altarHpCost;
		const hpAvailable = !used.hp && (data.hp || 1) > hpCost;
		yeyePanelCard(api.body, {
			title: '献祭体力',
			info: `失去 ${hpCost} 点当前体力，随机获得 1 条稀有强化（体力 ≤ ${hpCost} 时不能用）`,
			cost: used.hp ? '已献祭' : '',
			disabled: !hpAvailable,
			onClick() {
				data.hp = Math.max(1, (data.hp || 1) - hpCost);
				const buff = yeyeRandomBuff(YEYE_RULES.altarHpBuffMinLevel);
				if (buff) yeyeAddBuff(data, buff);
				used.hp = true;
				game.saveConfig('wujinYongyeData', data);
				game.txhj_playAudioCall_yy('WinButton', null, true);
				game.messagePopup_yy(buff ? `获得强化【${buff.name}】` : '强化池已空');
				render();
			},
		});

		// —— 献祭体力上限 → 侍灵 ——
		const maxHpCost = YEYE_RULES.altarMaxHpCost;
		const maxHpAvailable = !used.maxHp && (data.maxHp || 1) > maxHpCost;
		yeyePanelCard(api.body, {
			title: '献祭体力上限',
			info: `体力上限 -${maxHpCost}，随机获得 1 只侍灵（已有则升阶）`,
			cost: used.maxHp ? '已献祭' : '',
			disabled: !maxHpAvailable,
			onClick() {
				data.maxHp = Math.max(1, (data.maxHp || 1) - maxHpCost);
				data.hp = Math.max(1, Math.min(data.hp || 1, data.maxHp));
				const id = yeyePickServantId(data, false);
				const result = id ? yeyeGainServant(data, id) : null;
				used.maxHp = true;
				game.saveConfig('wujinYongyeData', data);
				game.txhj_playAudioCall_yy('WinButton', null, true);
				game.messagePopup_yy(result ? yeyeServantResultText(result) : '侍灵池已空');
				render();
			},
		});

		// —— 献祭复活 → 功勋 + 随机技能 ——
		const reviveAvailable = !used.revive && (data.revive || 0) > 0;
		yeyePanelCard(api.body, {
			title: '献祭复活',
			info: `复活次数 -1，获得 ${YEYE_RULES.altarReviveRewardCoin} 功勋并随机获得 1 个技能`,
			cost: used.revive ? '已献祭' : '',
			disabled: !reviveAvailable,
			onClick() {
				data.revive = Math.max(0, (data.revive || 0) - 1);
				game.yeyeCoin(YEYE_RULES.altarReviveRewardCoin, '祭坛·献祭复活', data);
				const skills = yeyeRandomGainableSkills(data, 1);
				if (skills.length) skills.forEach(skill => data.skill.push(skill));
				used.revive = true;
				game.saveConfig('wujinYongyeData', data);
				game.txhj_playAudioCall_yy('WinButton', null, true);
				game.messagePopup_yy(
					skills.length
						? `获得 ${YEYE_RULES.altarReviveRewardCoin} 功勋与技能【${get.translation(skills[0])}】`
						: `获得 ${YEYE_RULES.altarReviveRewardCoin} 功勋（技能池已空）`
				);
				render();
			},
		});

		const leave = ui.create.div('.yeye_PanelButton', '离开', api.body);
		leave.addEventListener('click', function () {
			game.txhj_playAudioCall_yy('WinButton', null, true);
			api.finish(true);
		});
	}

	render();
	return api.promise;
}

/* ============================================================================
 * 挑战：先选加码再开打，加码越狠奖励越高
 * 数值：YEYE_RULES.challengeCoinBonus / challengeEnemyDelta / challengeMarkBonus
 * 返回 Promise<{enemy:boolean, mark:boolean} | null>：null = 放弃（退回节点选择）
 * ========================================================================== */
export function yeyeRunChallenge(host, data) {
	const api = yeyeNodePanel(host, '挑战 · 选择条件', 'yeye_ChallengeBody', null);
	const mods = { enemy: false, mark: false };

	function render() {
		yeyePanelClear(api.body);
		ui.create.div(
			'.yeye_EventDesc',
			`每选一项条件，胜利后额外 +${YEYE_RULES.challengeCoinBonus} 功勋。`,
			api.body
		);
		yeyePanelCard(api.body, {
			title: '以寡敌众',
			info: `本关敌人 +${YEYE_RULES.challengeEnemyDelta}（再次点击可取消）${mods.enemy ? '　·　已选' : ''}`,
			cost: `+${YEYE_RULES.challengeCoinBonus} 功勋`,
			selected: mods.enemy,
			onClick() {
				mods.enemy = !mods.enemy;
				game.txhj_playAudioCall_yy('WinButton', null, true);
				render();
			},
		});
		yeyePanelCard(api.body, {
			title: '夜之烙印',
			info: `本关敌人全体额外获得 ${YEYE_RULES.challengeMarkBonus} 个夜之刻印（再次点击可取消）${mods.mark ? '　·　已选' : ''}`,
			cost: `+${YEYE_RULES.challengeCoinBonus} 功勋`,
			selected: mods.mark,
			onClick() {
				mods.mark = !mods.mark;
				game.txhj_playAudioCall_yy('WinButton', null, true);
				render();
			},
		});
		const start = ui.create.div('.yeye_PanelButton', '开始挑战', api.body);
		start.addEventListener('click', function () {
			if (!mods.enemy && !mods.mark) {
				game.messagePopup_yy('请至少选择一项加码');
				return;
			}
			game.txhj_playAudioCall_yy('WinButton', null, true);
			api.finish({ enemy: mods.enemy, mark: mods.mark });
		});
	}

	render();
	return api.promise;
}
