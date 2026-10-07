import { lib, game, ui, get, ai, _status } from '../../../noname.js';
import {
	BACKGROUND_FOLDER,
	backgroundItem,
	getSavedBackground,
	saveBackground,
	applyBackground,
	refreshBackgroundItem,
	getBackgroundImageURL,
	getCachedImageURL,
	toCSSURL,
	loadImage,
	canUseFileCache,
	ensureThumbnailCache,
	clearThumbnailCacheFiles,
} from './background.js';

/** 缩略图尺寸（16:9） */
const THUMB_WIDTH = 320;
const THUMB_HEIGHT = 180;
/** 缩略图缓存：文件名 → 可以直接给 background-image 用的地址 */
const thumbnailCache = new Map();
/** 正在生成的缩略图：文件名 → Promise */
const thumbnailPending = new Map();

/** 当前打开的窗口 */
let openedWindow = null;

function getDisplayName(link) {
	return backgroundItem[link] || link;
}

/**
 * 把原图当场缩成 320×180 的 data URL（没有文件系统时的兜底方案）。
 * @param { string } link
 */
async function buildMemoryThumbnail(link) {
	const source = getBackgroundImageURL(link);
	const image = await loadImage(source);
	if (typeof image.decode == 'function') {
		await image.decode().catch(() => {});
	}
	const canvas = document.createElement('canvas');
	canvas.width = THUMB_WIDTH;
	canvas.height = THUMB_HEIGHT;
	const context = canvas.getContext('2d');
	const width = image.naturalWidth || image.width;
	const height = image.naturalHeight || image.height;
	// 正中心裁切
	const scale = Math.max(THUMB_WIDTH / width, THUMB_HEIGHT / height);
	const cropWidth = THUMB_WIDTH / scale;
	const cropHeight = THUMB_HEIGHT / scale;
	context.drawImage(
		image,
		(width - cropWidth) / 2,
		(height - cropHeight) / 2,
		cropWidth,
		cropHeight,
		0,
		0,
		THUMB_WIDTH,
		THUMB_HEIGHT
	);
	let result = '';
	try {
		result = canvas.toDataURL('image/webp', 0.8);
		if (!result || !result.startsWith('data:image')) result = '';
	} catch (e) {
		result = '';
	}
	return result || source;
}

/**
 * 缩略图地址。
 * 优先用磁盘上的小图缓存（和启动背景共用一份，重开游戏后不用再解码原图），
 * 没有文件系统时才当场把原图缩成 320×180。
 * @param { string } link
 * @returns { Promise<string> } 图片地址（失败时回退为原图地址）
 */
function getThumbnail(link) {
	if (thumbnailCache.has(link)) return Promise.resolve(thumbnailCache.get(link));
	if (thumbnailPending.has(link)) return thumbnailPending.get(link);
	const task = (async () => {
		let url = '';
		try {
			if (canUseFileCache() && (await ensureThumbnailCache(link))) {
				url = getCachedImageURL(link);
			} else {
				url = await buildMemoryThumbnail(link);
			}
		} catch (e) {
			console.warn(`《永夜之境》：生成背景缩略图失败（${link}）。`, e);
			url = getBackgroundImageURL(link);
		}
		thumbnailCache.set(link, url);
		return url;
	})();
	thumbnailPending.set(link, task);
	task.finally(() => thumbnailPending.delete(link));
	return task;
}

/** 清空缩略图缓存（刷新列表时文件内容可能已经替换） */
export function clearThumbnailCache() {
	thumbnailCache.clear();
	thumbnailPending.clear();
}

/** 设置页那一行显示的内容（不含最外层 span） */
export function getBackgroundRowHTML() {
	const link = getSavedBackground();
	return `游戏背景<span class="xinxbg-row-tip">（当前：${getDisplayName(link)}）点击选择 ▶</span>`;
}

/** 关闭背景选择窗口 */
export function closeBackgroundWindow() {
	if (!openedWindow) return;
	const data = openedWindow;
	openedWindow = null;
	if (data.keydown) document.removeEventListener('keydown', data.keydown, true);
	if (data.observer) data.observer.disconnect();
	// 直接移除，不做 500ms 淡出，避免关窗时整屏重绘带来的迟滞
	if (data.mask && data.mask.parentNode) data.mask.remove();
}

/** 打开背景图片所在文件夹（Electron 环境下直接打开资源管理器） */
function openBackgroundFolder() {
	const tip = `请把背景图片放入：\n游戏目录/${BACKGROUND_FOLDER}\n\n放好后点击窗口里的「刷新列表」即可。`;
	try {
		if (typeof window.require == 'function' && typeof window.__dirname == 'string') {
			window.require('electron').shell.openPath(`${window.__dirname}/${BACKGROUND_FOLDER}`);
			return;
		}
	} catch (e) {
		console.error(e);
	}
	alert(tip);
}

/**
 * 打开背景选择窗口。
 * @param { HTMLElement } [rowNode] 设置页里对应的那一行，用于同步显示当前背景
 */
export function openBackgroundWindow(rowNode) {
	if (openedWindow) {
		openedWindow.setRow(rowNode);
		return;
	}
	let row = rowNode || null;

	const mask = ui.create.div('.xinxbg-mask', ui.window);
	const panel = ui.create.div('.xinxbg-window', mask);
	const header = ui.create.div('.xinxbg-header', panel);
	ui.create.div('.xinxbg-title', '选择游戏背景', header);
	const closeButton = ui.create.div('.xinxbg-close', '关闭 ✕', header);
	const body = ui.create.div('.xinxbg-body', panel);
	ui.create.div('.xinxbg-hint', `把图片放进 ${BACKGROUND_FOLDER} 后，点击「刷新列表」即可看到`, body);
	const grid = ui.create.div('.xinxbg-grid', body);
	const footer = ui.create.div('.xinxbg-footer', panel);
	const refreshButton = ui.create.div('.menubutton.xinxbg-button', '刷新列表', footer);
	const folderButton = ui.create.div('.menubutton.xinxbg-button', '打开文件夹', footer);
	const status = ui.create.div('.xinxbg-status', '', footer);

	/** 本窗口里还没生成缩略图的节点 */
	let pendingThumbs = [];

	const loadThumbnail = async node => {
		if (!node || node.thumbLoaded) return;
		node.thumbLoaded = true;
		const link = node.link;
		const url = await getThumbnail(link);
		if (!node.parentNode) return;
		node.style.backgroundImage = toCSSURL(url);
		node.classList.remove('xinxbg-thumb-loading');
	};

	// 只给滚动到附近的图片生成缩略图，避免打开窗口时一起解码几十张大图
	const observer =
		typeof IntersectionObserver == 'function'
			? new IntersectionObserver(
					entries => {
						for (const entry of entries) {
							if (!entry.isIntersecting) continue;
							observer.unobserve(entry.target);
							loadThumbnail(entry.target);
						}
					},
					{ root: body, rootMargin: '400px 0px' }
			  )
			: null;

	const updateRow = () => {
		if (row && row.parentNode) {
			row.innerHTML = `<span>${getBackgroundRowHTML()}</span>`;
		}
	};

	const updateSelection = () => {
		const selected = getSavedBackground();
		for (const node of Array.from(grid.children)) {
			node.classList.toggle('xinxbg-item-selected', node.link === selected);
		}
		status.innerHTML = `当前：${getDisplayName(selected)}`;
		updateRow();
	};

	const createItem = (link, name) => {
		const item = ui.create.div('.xinxbg-item', grid);
		item.link = link;
		const thumb = ui.create.div('.xinxbg-thumb', item);
		if (link == 'default') {
			thumb.classList.add('xinxbg-thumb-default');
			ui.create.div('.xinxbg-thumb-text', '默认', thumb);
		} else {
			thumb.link = link;
			thumb.classList.add('xinxbg-thumb-loading');
			const cached = thumbnailCache.get(link);
			if (cached) {
				thumb.thumbLoaded = true;
				thumb.style.backgroundImage = toCSSURL(cached);
				thumb.classList.remove('xinxbg-thumb-loading');
			} else {
				pendingThumbs.push(thumb);
			}
		}
		ui.create.div('.xinxbg-name', name, item);
		item.listen(() => {
			saveBackground(link);
			updateSelection();
			applyBackground(link);
		});
		return item;
	};

	const rebuild = () => {
		while (grid.firstChild) grid.firstChild.remove();
		if (observer) observer.disconnect();
		pendingThumbs = [];
		for (const link of Object.keys(backgroundItem)) {
			createItem(link, backgroundItem[link]);
		}
		if (observer) {
			for (const node of pendingThumbs) observer.observe(node);
		} else {
			// 不支持 IntersectionObserver 时逐个加载，避免同时解码所有大图
			(async () => {
				for (const node of pendingThumbs) {
					await loadThumbnail(node);
				}
			})();
		}
		updateSelection();
	};

	const keydown = event => {
		if (event.key != 'Escape') return;
		event.stopPropagation();
		closeBackgroundWindow();
	};
	document.addEventListener('keydown', keydown, true);

	closeButton.listen(() => closeBackgroundWindow());
	mask.listen(event => {
		// 阻止事件冒泡到 #window，避免触发本体在窗口上的点击逻辑
		event.stopPropagation();
		// 点击窗口外的遮罩关闭
		if (event.target === mask) closeBackgroundWindow();
	});
	folderButton.listen(openBackgroundFolder);
	refreshButton.listen(async () => {
		if (refreshButton.dataset.loading) return;
		refreshButton.dataset.loading = '1';
		refreshButton.innerHTML = '刷新中...';
		try {
			const previous = getSavedBackground();
			await refreshBackgroundItem(backgroundItem);
			// 图片内容可能变了，缓存作废
			clearThumbnailCache();
			await clearThumbnailCacheFiles();
			// 选中的图片被删除时回到默认背景
			if (previous != 'default' && !(previous in backgroundItem)) applyBackground('default');
			rebuild();
			refreshButton.innerHTML = `刷新完成（${Object.keys(backgroundItem).length - 1}）`;
		} catch (e) {
			console.error(e);
			refreshButton.innerHTML = '刷新失败';
		}
		setTimeout(() => {
			refreshButton.innerHTML = '刷新列表';
			delete refreshButton.dataset.loading;
		}, 1500);
	});

	if (typeof lib.setScroll == 'function') lib.setScroll(body);

	openedWindow = {
		mask,
		observer,
		keydown,
		setRow(node) {
			if (node) row = node;
			updateRow();
		},
		rebuild,
	};

	rebuild();
}
