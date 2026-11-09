import {lib, game, ui, get, ai, _status} from '../../../../noname.js';

/**
 * 本体UI右手布局
 *
 * 实现方式与《十周年UI》一致：不做整体镜像，而是给 #arena 打 data 标记，
 * 由 right-layout.css 按 data 属性把主玩家区、手牌区、控制按钮重定位到屏幕右侧。
 *
 * 注意：属性名特意不用十周年UI的 data-right-layout（避免两个扩展互相干扰）：
 * - data-yongye-right="on"          ：右手布局总开关（CSS 选择器前缀）
 * - data-yongye-right-base="<layout>"：本体布局名（mobile/long/long2/nova/newlayout），
 *   用于按布局套用对应的镜像规则（mobile 与 long 共用一套，long2 与 nova 共用一套）
 */

const RIGHT_LAYOUT_CONFIG_KEY = 'extension_永夜之境_right_layout';

export function isRightLayoutEnabled() {
	return lib.config[RIGHT_LAYOUT_CONFIG_KEY] == true;
}

/**
 * 十周年UI 是否启用：两者都是“重定位式”右手布局，会互相覆盖，
 * 检测到十周年UI启用时本功能自动让位，避免两套样式打架。
 */
function isDecadeUIActive() {
	return lib.config.extension_十周年UI_enable === true &&
		typeof lib.extensionPack === 'object' && lib.extensionPack['十周年UI'];
}

/**
 * 根据配置给 #arena 打上/清除 data 标记。
 * arena 尚未创建时静默跳过（extension.js 的 arenaReady 钩子会在
 * arena 创建后再次调用）。
 */
export function applyRightLayout() {
	if (typeof ui === 'undefined' || !ui.arena) return;
	if (isRightLayoutEnabled() && isDecadeUIActive()) {
		delete ui.arena.dataset.yongyeRight;
		delete ui.arena.dataset.yongyeRightBase;
		console.info('[永夜之境] 检测到十周年UI已启用，本体UI右手布局自动停用（两者不能同时生效）');
		return;
	}
	if (isRightLayoutEnabled()) {
		ui.arena.dataset.yongyeRight = 'on';
		ui.arena.dataset.yongyeRightBase = game.layout || 'mobile';
		console.info('[永夜之境] 本体UI右手布局已启用，当前本体布局：', game.layout);
	} else {
		delete ui.arena.dataset.yongyeRight;
		delete ui.arena.dataset.yongyeRightBase;
	}
}

/**
 * 重定位 ui.updatec 中的 stayleft 按钮（“不无懈”类）。
 *
 * 本体在开启 lib.config.wuxie_right 时把它定位在屏幕左缘
 * （offset = ceil(-arena宽/2) + 135 + currentLeft，最终屏幕左缘=135+currentLeft）。
 * 右手布局下按钮仍在左侧，但左缘对齐手牌区左界（红线）：
 * 控制按钮自然位置 = 控制条中心 = 屏幕中线（#control 镜像后中心不变），
 * 故 offset = (ZONE_LEFT + currentLeft) - arena宽/2；
 * 多个 stayleft 按本体 currentLeft 依次向右堆叠。
 */
function repositionStayLefts() {
	const half = ui.arena.offsetWidth / 2;
	for (const node of ui.control.childNodes) {
		if (!node.stayleft || node.classList.contains('removing')) continue;
		if (typeof node._offset !== 'number') continue;
		const newOffset = STAYLEFT_LEFT + (node.currentLeft || 0) - half;
		if (node._offset !== newOffset) {
			node._offset = newOffset;
			node.style.transform = 'translateX(' + newOffset + 'px)';
		}
	}
}

/** 结束回合按钮的文案（本体：ui.create.control("结束回合", "stayleft", fn) 创建） */
const END_PHASE_TEXT = '结束回合';
/** 结束回合与左侧技能按钮（重铸等）之间的额外间隔（px） */
const END_PHASE_GAP = 24;

/**
 * 把“结束回合”按钮从 stayleft 左锚改为普通控制按钮，并排到所有技能按钮右侧。
 *
 * 本体 #control > div 是 position:absolute + left:50% + translateX 排布，
 * 所以 DOM 顺序决定左右顺序：追加到 #control 末尾即位于最右。
 * 追加到末尾后它后面没有任何按钮，因此用 margin-left 撑间隔不会压到别人。
 */
function pinEndPhaseButton() {
	if (!ui.control) return;
	for (const node of Array.from(ui.control.childNodes)) {
		// _args 在构造函数里是 updatec 之后才赋值的，因此再用子节点 link 兜底识别
		const isEndPhase =
			(Array.isArray(node._args) && node._args[0] === END_PHASE_TEXT) ||
			Array.from(node.childNodes).some(child => child.link === END_PHASE_TEXT);
		if (!isEndPhase) continue;
		if (node.stayleft) {
			delete node.stayleft;
			node.classList.remove('stayleft');
		}
		node.classList.add('yongye-endphase');
		if (node.style.marginLeft !== END_PHASE_GAP + 'px') {
			node.style.marginLeft = END_PHASE_GAP + 'px';
		}
		if (ui.control.lastChild !== node) {
			ui.control.appendChild(node);
		}
	}
}

let patchInstalled = false;

/**
 * 包装 ui.updatec：右手布局开启时，
 * ① 结束回合按钮重排到技能按钮右侧（须在本体计算 offset 之前，因此先做）；
 * ② 本体定位完成后对 stayleft 按钮做镜像补偿。
 * （ui.updatec 的所有调用点都通过实例属性访问，实例级包装即可生效）
 */
export function installRightLayoutPatch() {
	if (patchInstalled) return;
	patchInstalled = true;
	const originalUpdatec = ui.updatec;
	ui.updatec = function () {
		let rightLayout = false;
		try {
			rightLayout = !!(ui.arena && ui.control && ui.arena.dataset.yongyeRight === 'on');
			if (rightLayout) pinEndPhaseButton();
		} catch (e) {
			console.warn('[永夜之境] 右手布局结束回合按钮重排失败：', e);
		}
		const ret = originalUpdatec.apply(this, arguments);
		try {
			if (rightLayout && lib.config.wuxie_right) {
				repositionStayLefts();
			}
		} catch (e) {
			console.warn('[永夜之境] 右手布局 stayleft 镜像失败：', e);
		}
		return ret;
	};
}

/**
 * 包装 ui.updatehl：右手布局下重划手牌区并左对齐卡牌列表。
 *
 * 手牌区 = [ZONE_LEFT, 主玩家框左缘-缝]：
 * - 卡牌从左界（红线）起向右排布（与本体左起排布习惯一致）；
 * - 右界取武将框左缘，用于限定牌距计算宽度，牌多时不会压住武将框；
 * - 区间宽度决定折叠间距（offset 按 offsetWidth 算）。
 *
 * 必须在原 updatehl 计算 offset 之前改容器宽度，
 * 因此采用“先划区、再调用原函数、后锚定列表左缘”的顺序。
 */
let handcardPatchInstalled = false;

/** 手牌区左界（px，对应截图中的红线位置，可按需调整） */
const HANDCARD_ZONE_LEFT = 175;
/** 手牌右缘与武将框的间隙（px） */
const HANDCARD_GAP = 8;
/**
 * “不无懈”按钮的左缘位置（px，距屏幕左侧）。
 * 默认与手牌区左界一致；想单独左右移动按钮就改这个值，
 * 例如 300 = 向右移到 x=300 处，0 = 贴屏幕最左。
 */
const STAYLEFT_LEFT = HANDCARD_ZONE_LEFT;

export function installHandcardAlignPatch() {
	if (handcardPatchInstalled) return;
	handcardPatchInstalled = true;
	const originalUpdatehl = ui.updatehl;
	ui.updatehl = function () {
		try {
			if (ui.arena && ui.arena.dataset.yongyeRight === 'on') {
				applyHandcardZone();
			}
		} catch (e) {
			console.warn('[永夜之境] 右手布局手牌区划定失败：', e);
		}
		const ret = originalUpdatehl.apply(this, arguments);
		try {
			if (ui.arena && ui.arena.dataset.yongyeRight === 'on') {
				alignHandcards(ui.handcards1Container);
			}
		} catch (e) {
			console.warn('[永夜之境] 右手布局手牌对齐失败：', e);
		}
		return ret;
	};
}

/**
 * 用内联 !important 重设 #handcards1 的 left/right/width。
 * 手牌容器挂在 #me 内，坐标需换算到 #me 的盒子上。
 */
function applyHandcardZone() {
	const container = ui.handcards1Container;
	if (!container || !ui.me || !game.me) return;

	// 右界锚点：主玩家可见头像框的左缘（mobile 横条与 long2/nova 站立框通吃）
	const anchor = game.me.node.avatar || game.me.node.avatar2 || game.me;
	const anchorRect = anchor.getBoundingClientRect();
	if (!anchorRect.width) return;

	// 左界为固定值（arena 坐标），换算为相对 #me 的偏移
	const meRect = ui.me.getBoundingClientRect();
	if (!meRect.width) return;

	const zoneRightAbs = anchorRect.left - HANDCARD_GAP;
	const left = HANDCARD_ZONE_LEFT - meRect.left;
	const right = meRect.right - zoneRightAbs;
	if (right < 100) return; // 窗口过窄等异常情况，不划区以免挤压

	container.style.setProperty('left', left + 'px', 'important');
	container.style.setProperty('right', right + 'px', 'important');
	container.style.setProperty('width', 'auto', 'important');
}

/**
 * 卡牌列表左缘锚定在手牌区左界（红线）：
 * 清掉 margin 与本体 default 布局的 left:-10px 相对偏移，
 * 让第一张牌精确从 ZONE_LEFT 开始向右排布。
 */
function alignHandcards(container) {
	const inner = container && container.firstChild;
	if (!inner || inner.nodeType !== 1) return;
	inner.style.display = 'block';
	inner.style.cssFloat = 'none';
	inner.style.marginLeft = '0';
	inner.style.left = '0px';
}

/** 扩展加载入口：安装补丁并立即应用当前配置 */
export function initRightLayout() {
	installRightLayoutPatch();
	installHandcardAlignPatch();
	applyRightLayout();
}
