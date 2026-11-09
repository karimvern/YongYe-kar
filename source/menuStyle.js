import { lib, game, ui, get, _status } from '../../../noname.js';

/** 菜单美化配置键 */
const CONFIG_KEY = 'extension_永夜之境_menu_prettify';

/** 当前挂载的样式表节点 */
let menuLink = null;

/**
 * 开关“菜单美化”。
 * 移植自《十周年UI》的 meanPrettify：开启后给本体菜单套上全屏羊皮纸样式。
 * 样式表只在游戏界面创建后加载，避免影响开始菜单。
 * @param {boolean} enable
 */
export function applyMenuStyle(enable) {
	if (typeof document === 'undefined') return;
	if (menuLink) {
		menuLink.remove();
		menuLink = null;
	}
	if (!enable) return;
	const link = document.createElement('link');
	link.id = 'yongye-menu-style';
	link.rel = 'stylesheet';
	// 带时间戳，避免调试样式时被浏览器缓存
	link.href = `${lib.assetURL}extension/永夜之境/menu.css?t=${Date.now()}`;
	document.head.appendChild(link);
	menuLink = link;
}

/**
 * 按当前配置初始化菜单美化（arena 创建后调用，保证不影响开始菜单）
 */
export function initMenuStyle() {
	applyMenuStyle(Boolean(lib.config[CONFIG_KEY]));
}

/** 当前是否开启 */
export function isMenuStyleOn() {
	return Boolean(lib.config[CONFIG_KEY]);
}
