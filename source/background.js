import { lib, game, ui, get, ai, _status } from '../../../noname.js';

/** 扩展名（与 info.json、扩展文件夹保持一致） */
export const EXTENSION_NAME = '永夜之境';
/** 扩展配置项名，完整配置键为 extension_永夜之境_background_image */
export const CONFIG_KEY = 'background_image';
/** 背景图片所在的文件夹（相对游戏根目录） */
export const BACKGROUND_FOLDER = `extension/${EXTENSION_NAME}/image/newbackground`;
/**
 * 缩略图小图缓存目录（只给设置窗口的缩略图用）。
 * 以 "." 开头，本体的文件枚举会自动忽略它（不会被当成背景图列出来）。
 */
export const CACHE_FOLDER = `${BACKGROUND_FOLDER}/.cache`;
/** 缩略图小图的最长边（像素）；缩略图格子很小，800 已经足够清晰 */
const THUMB_MAX_SIZE = 800;

const DEFAULT_KEY = 'default';
const DEFAULT_NAME = '默认';
/** 会被识别为背景图片的后缀名 */
const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'jpe', 'jfif', 'webp', 'gif', 'bmp', 'avif', 'apng', 'svg'];

/**
 * 配置项的可选项表：文件名 → 显示名。
 * config.js 直接引用该对象，刷新时只修改对象内容而不替换引用。
 * @type { Record<string, string> }
 */
export const backgroundItem = {};
backgroundItem[DEFAULT_KEY] = DEFAULT_NAME;

export function getBackgroundConfigKey() {
    return `extension_${EXTENSION_NAME}_${CONFIG_KEY}`;
}

/** 获取当前保存的背景（文件名，或 default） */
export function getSavedBackground() {
    return lib.config[getBackgroundConfigKey()] || DEFAULT_KEY;
}

/** 保存背景设置 */
export function saveBackground(link) {
    game.saveConfig(getBackgroundConfigKey(), link);
}

/** 背景图片的完整地址 */
export function getBackgroundImageURL(link) {
    return `${lib.assetURL}${BACKGROUND_FOLDER}/${encodeURIComponent(link)}`;
}

/** 拼成 CSS 里可以安全使用的 url(...) */
export function toCSSURL(url) {
    return `url("${String(url).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}")`;
}

/** 背景小图缓存的完整地址 */
export function getCachedImageURL(link) {
    return `${lib.assetURL}${CACHE_FOLDER}/${encodeURIComponent(link)}`;
}

/** 加载一张图片 */
export function loadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.decoding = 'async';
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error(`无法读取图片：${url}`));
        image.src = url;
    });
}

/* ---------------- 缩略图小图缓存 ----------------
 * 背景原图动辄几 MB、几千像素，设置窗口里只显示 150px 左右的缩略图，
 * 直接贴原图的话每张都要完整解码一遍，重开游戏后又得重来。
 * 所以第一次用到某张背景时，会把它缩到最长边 800 像素存到 .cache 里，
 * 以后（包括重开游戏后）缩略图直接用这张小图，不再解码原图。
 *
 * 启动/加载阶段的背景固定用原图：那张图后面 ui.background 本来就要用，
 * 浏览器只会 fetch / 解码一次，两边复用；换成小图反而要多解码一张，收益为 0。
 *
 * 手机端（cordova）与电脑端（node）用的是同一套 game.writeFile / checkFile 接口，
 * 根目录都是可写的游戏目录（和本体安装扩展时写入的位置一致）。
 */

/** 本会话内已经确认存在的缓存文件名 */
const cachedLinks = new Set();

/** 当前环境是否支持写文件（手机端与电脑端都支持，纯浏览器打开时没有） */
export function canUseFileCache() {
    return typeof game.writeFile === 'function' && typeof game.ensureDirectory === 'function';
}

async function checkCachedFile(link) {
    if (typeof game.checkFile !== 'function') return true;
    try {
        return (await game.promises.checkFile(`${CACHE_FOLDER}/${link}`)) === 1;
    } catch (e) {
        return false;
    }
}

/**
 * 确保某张背景有缩略图小图（已存在就直接复用，不会重复生成）。
 * 只服务于设置窗口的缩略图。
 * @param { string } [link]
 * @returns { Promise<boolean> } 是否可用
 */
export async function ensureThumbnailCache(link) {
    if (!link || link == DEFAULT_KEY) return false;
    if (!canUseFileCache()) return false;
    if (cachedLinks.has(link)) return true;
    // 之前生成过：直接复用（换了一局游戏也还在）
    if (await checkCachedFile(link)) {
        cachedLinks.add(link);
        return true;
    }
    try {
        const image = await loadImage(getBackgroundImageURL(link));
        const width = image.naturalWidth || image.width;
        const height = image.naturalHeight || image.height;
        const scale = Math.min(1, THUMB_MAX_SIZE / Math.max(width, height));
        const targetWidth = Math.max(1, Math.round(width * scale));
        const targetHeight = Math.max(1, Math.round(height * scale));
        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        canvas.getContext('2d').drawImage(image, 0, 0, targetWidth, targetHeight);
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', 0.75));
        if (!blob) return false;
        const buffer = await blob.arrayBuffer();
        await game.promises.writeFile(buffer, CACHE_FOLDER, link);
        if (!(await checkCachedFile(link))) return false;
        cachedLinks.add(link);
        return true;
    } catch (e) {
        console.warn(`《${EXTENSION_NAME}》：生成缩略图小图失败（${link}），缩略图将直接使用原图。`, e);
        return false;
    }
}

/**
 * 清空缓存记录并删掉已生成的小图（图片内容可能变了时用），
 * 之后缩略图会按需重新生成。
 */
export async function clearThumbnailCacheFiles() {
    cachedLinks.clear();
    if (!canUseFileCache() || typeof game.removeFile !== 'function') return;
    try {
        const result = await game.promises.getFileList(CACHE_FOLDER);
        const files = Array.isArray(result) ? result[1] || [] : [];
        await Promise.allSettled(files.map(name => game.promises.removeFile(`${CACHE_FOLDER}/${name}`)));
    } catch (e) {
        // 目录还不存在之类的都不算问题
    }
}

/**
 * 同步“启动/加载阶段”的背景。
 *
 * 本体在 boot 最开始（配置都还没读）就会用
 * localStorage[configprefix + "background"] 拼出
 *   url(assetURL + "image/background/" + 值 + ".jpg")
 * 作为加载界面 / 重开一局时的背景；之后 createBackground 才创建 ui.background。
 * 所以只改 ui.background 的话，重开一局时会先看到本体的默认背景。
 *
 * 这里把该值写成 "../../<扩展背景目录>/<文件名>#"：
 * 用 "../.." 从 image/background 回到游戏根目录，用 "#" 吃掉本体追加的 ".jpg"，
 * 于是加载阶段直接就是扩展里选的背景，重开时不会再闪默认背景。
 *
 * 这里固定用原图：它和随后 createBackground 创建的 ui.background 是同一张，
 * 浏览器只 fetch / 解码一次，加载阶段不会额外多花时间。
 */
export function syncStartupBackground(link = getSavedBackground()) {
    const style = document.documentElement.style;
    if (!link || link == DEFAULT_KEY) {
        // 交回本体：由本体的背景设置决定启动背景
        style.backgroundImage = '';
        style.backgroundSize = '';
        style.backgroundPosition = '';
        if (typeof lib.init.background == 'function') lib.init.background();
        return;
    }
    style.backgroundImage = toCSSURL(getBackgroundImageURL(link));
    style.backgroundSize = 'cover';
    style.backgroundPosition = '50% 50%';
    style.height = '100%';
    try {
        const key = lib.configprefix + 'background';
        const value = `../../${BACKGROUND_FOLDER}/${link}#`;
        if (localStorage.getItem(key) != value) localStorage.setItem(key, value);
    } catch (e) {
        console.warn(`《${EXTENSION_NAME}》：写入启动背景失败。`, e);
    }
}

/**
 * 清掉扩展写入的“启动/加载阶段背景”，交回本体。
 * 扩展被关闭时本体不会执行 precontent，需要由扩展入口主动调用，
 * 否则重开一局时加载界面还会显示扩展背景。
 */
export function clearStartupBackground() {
    syncStartupBackground(DEFAULT_KEY);
}

function isImageFile(name) {
    if (typeof name != 'string') return false;
    const index = name.lastIndexOf('.');
    if (index < 0) return false;
    return IMAGE_EXTENSIONS.includes(name.slice(index + 1).toLowerCase());
}

function getDisplayName(fileName) {
    const index = fileName.lastIndexOf('.');
    return index > 0 ? fileName.slice(0, index) : fileName;
}

function sortByName(a, b) {
    try {
        return a.localeCompare(b, 'zh-Hans-CN', { numeric: true, sensitivity: 'base' });
    } catch (e) {
        return a > b ? 1 : a < b ? -1 : 0;
    }
}

function getFileList(dir) {
    if (game.promises && typeof game.promises.getFileList == 'function') {
        return game.promises.getFileList(dir);
    }
    return new Promise((resolve, reject) => {
        game.getFileList(dir, (folders, files) => resolve([folders, files]), reject);
    });
}

/**
 * 扫描 image/newbackground 文件夹并刷新选项表。
 * 文件夹不存在或读取失败时只保留“默认”项，不会抛出异常。
 * @param { Record<string, string> } [item] 需要刷新的选项表，默认为 backgroundItem
 */
export async function refreshBackgroundItem(item = backgroundItem) {
    /** @type { string[] | null } */
    let files = null;
    try {
        if (typeof game.getFileList != 'function') {
            console.warn(`《${EXTENSION_NAME}》：当前环境不支持读取文件夹，无法自动扫描背景。`);
        } else {
            const result = await getFileList(BACKGROUND_FOLDER);
            if (Array.isArray(result)) {
                files = result[1] || [];
            }
        }
    } catch (e) {
        console.warn(`《${EXTENSION_NAME}》：读取背景文件夹「${BACKGROUND_FOLDER}」失败，请确认文件夹是否存在。`, e);
    }
    if (files == null) {
        // 扫描失败时保留原有列表，避免因为读取失败而丢失已显示的内容
        if (!(DEFAULT_KEY in item)) item[DEFAULT_KEY] = DEFAULT_NAME;
        return item;
    }
    for (const key of Object.keys(item)) {
        if (key != DEFAULT_KEY) delete item[key];
    }
    item[DEFAULT_KEY] = DEFAULT_NAME;
    for (const file of files.filter(isImageFile).sort(sortByName)) {
        item[file] = getDisplayName(file);
    }
    // 之前选中的图片如果被删除了，就回到默认背景
    const saved = lib.config[getBackgroundConfigKey()];
    if (saved && saved != DEFAULT_KEY && !(saved in item)) {
        game.saveConfig(getBackgroundConfigKey(), DEFAULT_KEY);
    }
    // config.js 里的介绍文字读取的是模块内的选项表，这里保持同步
    if (item !== backgroundItem) {
        for (const key of Object.keys(backgroundItem)) {
            if (key != DEFAULT_KEY) delete backgroundItem[key];
        }
        Object.assign(backgroundItem, item);
    }
    return item;
}

/**
 * 应用背景。
 * 传入 default（或空值）时还原为游戏本体的背景设置。
 * @param { string } [link] 背景文件名，省略时使用已保存的设置
 */
export function applyBackground(link = getSavedBackground()) {
    const background = ui.background;
    if (!background) {
        // ui.background 还没创建（例如启动阶段），先把加载背景同步好
        syncStartupBackground(link);
        return false;
    }
    if (!link || link == DEFAULT_KEY) {
        syncStartupBackground(DEFAULT_KEY);
        // 交回本体处理：本体自带背景、自定义背景、临时背景都能正确还原
        if (typeof game.updateBackground == 'function') game.updateBackground();
        return true;
    }
    // 直接换掉现有背景层的图片，而不是让本体删掉整层再重建。
    // 反复点击切换时，重建整屏背景会让浏览器反复解码/上传大图，非常卡。
    const style = background.style;
    style.backgroundImage = toCSSURL(getBackgroundImageURL(link));
    style.backgroundSize = 'cover';
    style.backgroundPosition = '50% 50%';
    if (lib.config.image_background_blur) {
        style.filter = 'blur(8px)';
        style.webkitFilter = 'blur(8px)';
        style.transform = 'scale(1.05)';
    } else {
        style.filter = '';
        style.webkitFilter = '';
        style.transform = '';
    }
    // 让重开一局、重启游戏时的加载阶段也用这张图
    syncStartupBackground(link);
    return true;
}

/** 按已保存的设置应用背景（默认背景时不做任何处理） */
export function applyBackgroundFromConfig() {
    const link = getSavedBackground();
    if (!link || link == DEFAULT_KEY) return false;
    return applyBackground(link);
}

/**
 * 等待本体创建 ui.background，让开始界面也能显示扩展背景。
 * 需要在本体创建背景之前调用（precontent）。
 */
export function installBackgroundWatcher() {
    if (installBackgroundWatcher.installed) return;
    installBackgroundWatcher.installed = true;
    // 尽早同步加载阶段（html）的背景，缩短重开时默认背景的停留时间
    syncStartupBackground();
    const tryApply = () => {
        if (!ui.background) return false;
        applyBackgroundFromConfig();
        return true;
    };
    if (tryApply()) return;
    if (typeof MutationObserver != 'function') return;
    const observer = new MutationObserver(() => {
        if (tryApply()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true });
    // 保险：一分钟之后无论如何都停止监听
    setTimeout(() => observer.disconnect(), 60000);
}
