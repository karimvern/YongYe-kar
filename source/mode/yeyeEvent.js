'use strict';
import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
import {
	YEYE_RULES,
	yeyeRandomBuff,
	yeyeRandomGainableSkills,
	yeyeBuffOf,
	yeyeAddBuff,
	yeyeRemoveBuff,
	yeyeOpenPanel,
	yeyePanelCard,
	yeyePanelClear,
} from './yeyeConst.js';
import {
	yeyePickServantId,
	yeyeGainServant,
	yeyeServantResultText,
} from './yeyeServant.js';

/** 已拥有强化的去重列表 */
function yeyeOwnedBuffNames(data) {
	const names = [];
	(data.buff || []).forEach(buff => {
		if (buff && buff.name && !names.includes(buff.name)) names.push(buff.name);
	});
	return names;
}

function yeyeDescribeBuff(name) {
	const buff = yeyeBuffOf(name);
	const count = (lib.config.wujinYongyeData?.buff || []).filter(item => item.name === name).length;
	return `${buff ? buff.info : '未知强化'}（当前 ${count} 层）`;
}

function yeyeGrantRandomSkill(data, count = 1) {
	const skills = yeyeRandomGainableSkills(data, count);
	if (!skills.length) return null;
	skills.forEach(skill => data.skill.push(skill));
	return skills;
}

function yeyeSkillText(skills) {
	if (!skills || !skills.length) return '（技能池已空）';
	return skills.map(skill => `【${get.translation(skill)}】`).join('');
}

/** 12 个奇遇事件。effect 全部是纯函数，只改 wujinYongyeData。 */
export const YEYE_EVENTS = [
	{
		id: 'caravan',
		name: '永夜商队',
		desc: '一支挂着残破灯笼的商队在雾里停下。商人掀开斗篷，露出几件来路不明的好东西。',
		options: [
			{
				text: '花 400 玉璧买 1 个稀有强化',
				info: '稀有强化来自 4~5 级强化池',
				cost: { jade: 400 },
				run(data) {
					const buff = yeyeRandomBuff(4);
					yeyeAddBuff(data, buff);
					return `获得强化【${buff.name}】：${buff.info}`;
				},
			},
			{
				text: '花 8 功勋买 1 个随机技能',
				cost: { coin: 8 },
				run(data) {
					return `获得技能${yeyeSkillText(yeyeGrantRandomSkill(data))}`;
				},
			},
			{
				text: '离开',
				run() {
					return '商队的灯笼逐渐没入雾里。';
				},
			},
		],
	},
	{
		id: 'fork',
		name: '迷雾岔路',
		desc: '两条路都被雾吞掉了大半。左边那侧传来低语，右边只有风声。',
		options: [
			{
				text: '弃 1 个强化，换 2 个随机强化',
				info: '需要至少 1 个强化',
				available(data) {
					return yeyeOwnedBuffNames(data).length > 0;
				},
				choose(data) {
					return yeyeOwnedBuffNames(data).map(name => ({
						title: name,
						info: yeyeDescribeBuff(name),
						value: name,
					}));
				},
				chooseTitle: '选择要放弃的强化',
				run(data, api, chosen) {
					yeyeRemoveBuff(data, chosen);
					const gained = [];
					for (let i = 0; i < 2; i++) {
						const buff = yeyeRandomBuff(1);
						if (buff) {
							yeyeAddBuff(data, buff);
							gained.push(buff.name);
						}
					}
					return `放弃【${chosen}】，获得强化【${gained.join('】【') || '无'}】。`;
				},
			},
			{
				text: '直接前进',
				run() {
					return '你没有理会雾里的低语。';
				},
			},
		],
	},
	{
		id: 'altar',
		name: '禁忌祭坛',
		desc: '祭坛上刻着看不懂的字。把手按上去的瞬间，你听见自己心跳慢了一拍。',
		options: [
			{
				text: '体力上限与当前体力各 -1，换 1 个强力技能',
				info: '需要体力上限与体力都大于 1',
				available(data) {
					return (data.maxHp || 0) > 1 && (data.hp || 0) > 1;
				},
				run(data) {
					data.maxHp -= 1;
					data.hp -= 1;
					return `你付出了一点生命力，获得技能${yeyeSkillText(yeyeGrantRandomSkill(data, 1))}`;
				},
			},
			{
				text: '拒绝',
				run() {
					return '你把手收了回来，祭坛重新归于沉寂。';
				},
			},
		],
	},
	{
		id: 'survivor',
		name: '幸存者',
		desc: '一个满身血污的人从废墟里爬起来，说他记得前路的地形。',
		options: [
			{
				text: '花 2 功勋：下一场战斗敌人 -1',
				cost: { coin: 2 },
				available(data) {
					return (data.coin || 0) >= 2;
				},
				run(data) {
					data.pendingEnemyDelta = (data.pendingEnemyDelta || 0) - 1;
					return '他画下一张粗糙的地图，下一场战斗的敌人会少 1 个。';
				},
			},
			{
				text: '花 20 功勋：本局首次失败不消耗复活',
				cost: { coin: 20 },
				available(data) {
					return (data.coin || 0) >= 20;
				},
				run(data) {
					data.freeReviveOnce = true;
					return '他答应在关键时刻拉你一把：本局首次失败不会消耗复活次数。';
				},
			},
			{
				text: '无视',
				run() {
					return '他骂了一句，转身消失在雾里。';
				},
			},
		],
	},
	{
		id: 'gamble',
		name: '赌局',
		desc: '几个看不清脸的人围着一张桌子。桌上只有一副牌和一堆功勋。',
		options: [
			{
				text: '押上 5 功勋',
				info: '50% 赢得 8 功勋，否则失去押注',
				cost: { coin: 8 },
				available(data) {
					return (data.coin || 0) >= 8;
				},
				run(data) {
					if (Math.random() < 0.5) {
						game.yeyeCoin(8, '赌局获胜', data);
						return '牌面翻开——你赢了，获得 8 功勋。';
					}
					return '牌面翻开——你输了，押注的 5 功勋没了。';
				},
			},
			{
				text: '不赌',
				run() {
					return '你绕过桌子继续赶路。';
				},
			},
		],
	},
	{
		id: 'artisan',
		name: '落难匠人',
		desc: '一个背着工具袋的老人蹲在路边，说他能帮你把身上的东西再打磨一遍。',
		options: [
			{
				text: '花 10 功勋：指定 1 个强化 +1 层',
				info: '需要至少 1 个强化',
				cost: { coin: 6 },
				available(data) {
					return (data.coin || 0) >= 10 && yeyeOwnedBuffNames(data).length > 0;
				},
				choose(data) {
					return yeyeOwnedBuffNames(data).map(name => ({
						title: name,
						info: yeyeDescribeBuff(name),
						value: name,
					}));
				},
				chooseTitle: '选择要打磨的强化',
				run(data, api, chosen) {
					yeyeAddBuff(data, yeyeBuffOf(chosen));
					return `【${chosen}】提升 1 层。`;
				},
			},
			{
				text: '花 6 玉璧：随机 1 个已有强化 +1 层',
				cost: { jade: 6 },
				available(data) {
					return (data.jade || 0) >= 6;
				},
				run(data) {
					const names = yeyeOwnedBuffNames(data);
					if (!names.length) {
						const buff = yeyeRandomBuff(1);
						yeyeAddBuff(data, buff);
						return `你身上没有可打磨的强化，改为获得【${buff.name}】。`;
					}
					const name = names.randomGet();
					yeyeAddBuff(data, yeyeBuffOf(name));
					return `【${name}】提升 1 层。`;
				},
			},
		],
	},
	{
		id: 'whisper',
		name: '夜之低语',
		desc: '雾里的声音在数你的名字。它说，只要你肯听，下一批敌人会被它标记。',
		options: [
			{
				text: '接受：下一场战斗敌人各多 1 个刻印，胜利额外 +3 功勋',
				run(data) {
					data.pendingMarkBonus = (data.pendingMarkBonus || 0) + 1;
					data.pendingWinBonus = (data.pendingWinBonus || 0) + 3;
					return '低语缠上了你的影子，下一场战斗的敌人会更强，但收益也更高。';
				},
			},
			{
				text: '拒绝',
				run() {
					return '你捂住耳朵，低语声渐渐散了。';
				},
			},
		],
	},
	{
		id: 'pickers',
		name: '拾遗者',
		desc: '一具早已风干的尸体靠在墙边，手里还攥着几件装备。',
		options: [
			{
				text: '拿走装备：下一场战斗开局多 3 张临时装备牌',
				run(data) {
					data.pendingEquipCards = (data.pendingEquipCards || 0) + 3;
					return '你收起了装备，下一场战斗开局会多 3 张临时装备牌。';
				},
			},
			{
				text: '只搜走财物：+3 功勋',
				run(data) {
					game.yeyeCoin(3, '拾遗者', data);
					return '获得 3 功勋。';
				},
			},
		],
	},
	{
		id: 'dreamer',
		name: '幻梦商人',
		desc: '商人没有影子。他说自己只做一种生意：用生命力换玉璧。',
		options: [
			{
				text: '体力上限 -1，换 60 玉璧',
				info: '需要体力上限大于 1',
				available(data) {
					return (data.maxHp || 0) > 1;
				},
				run(data) {
					data.maxHp -= 1;
					data.hp = Math.min(data.hp || 1, data.maxHp);
					data.jade += 60;
					return '你感觉到什么被抽走了，获得 60 玉璧。';
				},
			},
			{
				text: '花 60 玉璧，换体力上限 +1',
				cost: { jade: 60 },
				available(data) {
					return (data.jade || 0) >= 60;
				},
				run(data) {
					data.maxHp += 1;
					data.hp += 1;
					return '体力上限 +1。';
				},
			},
		],
	},
	{
		id: 'traveler',
		name: '迷途旅人',
		desc: '旅人靠在石头上喘气，说他刚从前面的战场逃出来，那条路布满了陷阱。',
		options: [
			{
				text: '稍作休整：体力回满，下一场战斗敌人 +1',
				run(data) {
					data.hp = data.maxHp;
					data.pendingEnemyDelta = (data.pendingEnemyDelta || 0) + 1;
					return '你恢复了全部体力，但下一场战斗会多 1 个敌人。';
				},
			},
			{
				text: '继续前行',
				run() {
					return '你没有停留。';
				},
			},
		],
	},
	{
		id: 'stele',
		name: '古老石碑',
		desc: '石碑上覆着一层薄霜。你把手放上去的时候，霜化成了水。',
		options: [
			{
				text: '接受石碑的馈赠：随机获得 1 只侍灵（已有则升阶）',
				run(data) {
					const id = yeyePickServantId(data);
					const result = yeyeGainServant(data, id);
					return yeyeServantResultText(result);
				},
			},
			{
				text: '取走碑上的玉：+3 功勋',
				run(data) {
					game.yeyeCoin(3, '古老石碑', data);
					return '获得 3 功勋。';
				},
			},
		],
	},
	{
		id: 'blessing',
		name: '永夜之赐',
		desc: '雾散开一条缝，缝隙里的光落在你身上，像是一种承诺。',
		options: [
			{
				text: `接下来 2 关，每关胜利额外 +${YEYE_RULES.nextStageBonusCoin} 功勋`,
				run(data) {
					data.nextStageBonus = (data.nextStageBonus || 0) + 2;
					return `接下来 2 关，每关胜利额外获得 ${YEYE_RULES.nextStageBonusCoin} 功勋。`;
				},
			},
			{
				text: '立刻兑现：+3 功勋',
				run(data) {
					game.yeyeCoin(3, '永夜之赐', data);
					return '获得 3 功勋。';
				},
			},
		],
	},
];

export function yeyeGetEvent(id) {
	return YEYE_EVENTS.find(event => event.id === id) || null;
}

/** 抽一个本局没出过的奇遇，抽完则允许重复 */
export function yeyePickEvent(data) {
	const used = Array.isArray(data.eventHistory) ? data.eventHistory : [];
	let pool = YEYE_EVENTS.filter(event => !used.includes(event.id));
	if (!pool.length) pool = YEYE_EVENTS.slice(0);
	return pool.randomGet() || YEYE_EVENTS[0];
}

function yeyePayCost(data, cost) {
	if (!cost) return true;
	if (cost.coin && (data.coin || 0) < cost.coin) return false;
	if (cost.jade && (data.jade || 0) < cost.jade) return false;
	if (cost.coin) data.coin -= cost.coin;
	if (cost.jade) data.jade -= cost.jade;
	return true;
}

function yeyeCostText(cost) {
	if (!cost) return '';
	const parts = [];
	if (cost.coin) parts.push(`${cost.coin} 功勋`);
	if (cost.jade) parts.push(`${cost.jade} 玉璧`);
	return parts.join(' + ');
}

/**
 * 弹出奇遇事件。
 * 返回 Promise<boolean>：true = 已完成结算（该关结束），false = 玩家放弃（可以重新选节点）。
 */
export function yeyeRunEvent(event, host, data) {
	return new Promise(resolve => {
		let settled = false;
		const api = yeyeOpenPanel(host, `奇遇 · ${event.name}`, 'yeye_EventBody');
		const closeBtn = api.panel.querySelector('.yeye_PanelClose');
		const finish = bool => {
			if (settled) return;
			settled = true;
			api.close();
			resolve(bool);
		};
		if (closeBtn) {
			closeBtn.addEventListener('click', function () {
				finish(false);
			});
		}

		api.choose = function (list, title) {
			return new Promise(res => {
				yeyePanelClear(api.body);
				ui.create.div('.yeye_EventSubTitle', title, api.body);
				list.forEach(item => {
					yeyePanelCard(api.body, {
						title: item.title,
						info: item.info,
						onClick() {
							game.txhj_playAudioCall_yy('WinButton', null, true);
							res(item.value);
						},
					});
				});
				const cancel = ui.create.div('.yeye_PanelButton', '返回', api.body);
				cancel.addEventListener('click', function () {
					game.txhj_playAudioCall_yy('off', null, true);
					res(null);
				});
			});
		};

		function renderOptions() {
			yeyePanelClear(api.body);
			ui.create.div('.yeye_EventDesc', event.desc, api.body);
			event.options.forEach(option => {
				const available = !option.available || option.available(data);
				const cost = yeyeCostText(option.cost);
				yeyePanelCard(api.body, {
					title: option.text,
					info: [option.info, cost ? `消耗：${cost}` : ''].filter(Boolean).join('　'),
					cost: available ? '' : '条件不足',
					disabled: !available,
					async onClick() {
						if (!available) {
							game.messagePopup_yy('条件不足');
							return;
						}
						let chosen = null;
						if (typeof option.choose === 'function') {
							chosen = await api.choose(option.choose(data), option.chooseTitle || '请选择');
							if (chosen === null || chosen === undefined) {
								renderOptions();
								return;
							}
						}
						if (!yeyePayCost(data, option.cost)) {
							game.messagePopup_yy('资源不足');
							renderOptions();
							return;
						}
						game.txhj_playAudioCall_yy('WinButton', null, true);
						let text = '';
						try {
							text = await option.run(data, api, chosen);
						} catch (e) {
							console.error('永夜奇遇事件结算出错:', e);
							text = '事件结算出错，但已消耗的资源不会退回。';
						}
						if (!Array.isArray(data.eventHistory)) data.eventHistory = [];
						if (!data.eventHistory.includes(event.id)) data.eventHistory.push(event.id);
						data.hp = Math.max(1, Math.min(data.hp || 1, data.maxHp || 1));
						game.saveConfig('wujinYongyeData', data);
						yeyePanelClear(api.body);
						ui.create.div('.yeye_EventResult', text || '什么也没有发生。', api.body);
						const ok = ui.create.div('.yeye_PanelButton', '继续', api.body);
						ok.addEventListener('click', function () {
							game.txhj_playAudioCall_yy('WinButton', null, true);
							finish(true);
						});
						if (closeBtn && closeBtn.parentNode) closeBtn.remove();
					},
				});
			});
		}

		renderOptions();
	});
}
