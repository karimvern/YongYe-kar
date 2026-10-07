'use strict';
import { lib, game } from "../../../../../noname.js";

/**
 * 永夜将临 · 旧样式层（已冻结，独立、可整体删除）
 *
 * 默认样式已经是 ../style.css 里的「永夜」新样式；这个文件夹只保留
 * 「切回旧素材」的接口。skin.css 里所有规则都带 body.yeye-legacy 前缀，
 * 开关关闭时对页面零影响。
 *
 * 【维护等级：冻结】以后修改 ../style.css 时不必同步这个文件夹，
 * 本层只保证「能切换、旧观感基本可读」。想恢复 100% 对齐见 tools/README.md。
 *
 * 它做四件事：
 * 1. 提供模式设置里的开关定义（YEYE_LEGACY_CONFIG，键名 legacyAssets）；
 * 2. 按开关给 <body> 挂/去 `yeye-legacy`，并加载同目录的 skin.css；
 * 3. 给 mode.js 里「按档位换图标」提供替代实现（旧层走内联贴图）；
 * 4. 清理历史遗留的旧配置键 yeyeSkin。
 *
 * 移除方法：删掉 yeyeSkin/ 整个文件夹，再删掉 extension.js 与 mode.js 里
 * 带「[旧样式层]」注释的那几行即可，其它什么都不用改。
 */

const BODY_CLASS = 'yeye-legacy';
const MODE_ID = 'wujin_yongye';
const CONFIG_KEY = 'legacyAssets';
const OBSOLETE_KEY = 'yeyeSkin';
const CSS_DIR = 'extension/永夜之境/source/mode/yeyeSkin';
const CSS_NAME = 'skin';
const IMG_DIR = 'extension/永夜之境/source/mode/image/icon/';

let cssRequested = false;
let obsoleteKeyCleaned = false;

/** 模式设置里的开关项，由 mode.js 用展开运算符并入 config */
export const YEYE_LEGACY_CONFIG = {
    // 【已停用】「使用旧版素材」按钮：按要求注释掉，模式设置里不再显示这一项。
    // 需要恢复时，把下面整段 [CONFIG_KEY]: {...}, 取消注释即可（其余代码都不受影响）。
    /*
    [CONFIG_KEY]: {
        name: '使用旧版素材',
        intro: '开启后，永夜将临的页面切回旧样式的素材与观感（旧贴图、旧文字色、无整屏星点）；关闭则使用默认的「永夜」新样式。随时可切，不影响存档与玩法。',
        init: false,
        frequent: true,
        // 【为什么自己保存】noname 里模式设置项的保存逻辑挂在「默认 onclick」上
        // （ui/create/menu/pages/startMenu.js：if (!cfg.onclick) cfg.onclick = ... saveConfig ...），
        // 一旦自己提供 onclick 就会把带保存的默认处理器顶掉，开关会存不住；
        // 而新版 Vue 菜单（ui/create/menu/nonameConfig.js）只认 onclick，既不保存也不调 onsave。
        // 两种菜单都传「新状态布尔值」进来，所以这里统一自己 saveConfig + 立即应用，两边都稳。
        onclick: function (bool) {
            try {
                game.saveConfig(CONFIG_KEY, bool, MODE_ID);
            } catch (e) {
                console.warn('[旧样式层] 保存开关失败：', e);
            }
            applyLegacyAssets(bool);
        },
    },
    */
};

/** 当前是否使用旧样式，读不到配置时按「用新样式」处理 */
export function isLegacyAssetsOn() {
    try {
        const mc = lib.config && lib.config.mode_config && lib.config.mode_config[MODE_ID];
        return !!(mc && mc[CONFIG_KEY]);
    } catch (e) {
        return false;
    }
}

/** skin.css 只加载一次 */
function ensureCss() {
    if (cssRequested) return;
    cssRequested = true;
    try {
        // extension.js 启动时已经挂过一次，这里避免重复插入 <link>
        if (document.querySelector('link[href*="yeyeSkin/skin.css"]')) return;
        lib.init.css(lib.assetURL + CSS_DIR, CSS_NAME);
    } catch (e) {
        console.warn('[旧样式层] 样式加载失败：', e);
    }
}

/** 清掉上一版用过的旧键 yeyeSkin，避免语义反转后旧值误导 */
function cleanObsoleteKey() {
    if (obsoleteKeyCleaned) return;
    try {
        const mc = lib.config && lib.config.mode_config && lib.config.mode_config[MODE_ID];
        if (!mc) return; // 配置还没就绪，下次再试
        if (Object.prototype.hasOwnProperty.call(mc, OBSOLETE_KEY)) {
            game.saveConfig(OBSOLETE_KEY, undefined, MODE_ID);
        }
        obsoleteKeyCleaned = true;
    } catch (e) {
        obsoleteKeyCleaned = true;
    }
}

/** 应用/取消旧样式层；不传参数时读当前设置 */
export function applyLegacyAssets(on) {
    cleanObsoleteKey();
    const enabled = (typeof on === 'boolean') ? on : isLegacyAssetsOn();
    if (enabled) ensureCss();
    try {
        document.body.classList.toggle(BODY_CLASS, enabled);
    } catch (e) {
        /* body 尚不存在时忽略 */
    }
    if (enabled) {
        restoreOriginalTiers();
    } else {
        adoptExistingTiers();
    }
}

/** 旧样式的换图逻辑（与转正前的行为逐字一致） */
function setOriginalIcon(el, kind, high) {
    const file = kind === 'buff'
        ? (high ? 'buff4' : 'buff3')
        : (high ? 'skills1' : 'skills0');
    el.setBackgroundImage(IMG_DIR + file + '.png');
}

/** 新样式用档位 class 表达高低档 */
function setTierClass(el, high) {
    el.classList.remove('yy-tier-hi', 'yy-tier-low');
    el.classList.add(high ? 'yy-tier-hi' : 'yy-tier-low');
    // 清掉旧样式层写下的内联背景，交给 style.css 的档位规则接管
    el.style.backgroundImage = '';
}

/**
 * 供 mode.js 调用，替代原来的 setBackgroundImage(...)。
 * 旧样式层开启 -> 走原换图逻辑（内联贴图会自动压过新样式的非 !important 规则）；
 * 否则 -> 挂档位 class。
 */
export function applyAssetTier(el, kind, tier) {
    if (!el) return;
    const high = tier === 'hi';
    if (isLegacyAssetsOn()) {
        setOriginalIcon(el, kind, high);
        return;
    }
    try {
        setTierClass(el, high);
    } catch (e) {
        setOriginalIcon(el, kind, high);
    }
}

/** 实时关掉旧样式层时，把已经画好的内联贴图换算成档位 class */
function adoptExistingTiers() {
    try {
        document.querySelectorAll('.yeye_DataBuffIcon').forEach(function (el) {
            const bg = el.style.backgroundImage || '';
            if (bg.indexOf('buff3') !== -1) setTierClass(el, false);
            else if (bg.indexOf('buff4') !== -1) setTierClass(el, true);
        });
        document.querySelectorAll('.yeye_DataMeSkillIcon').forEach(function (el) {
            const bg = el.style.backgroundImage || '';
            if (bg.indexOf('skills0') !== -1) setTierClass(el, false);
            else if (bg.indexOf('skills1') !== -1) setTierClass(el, true);
        });
    } catch (e) {
        /* 忽略 */
    }
}

/** 实时打开旧样式层时，把档位 class 还原成原来的内联贴图 */
function restoreOriginalTiers() {
    try {
        document.querySelectorAll('.yy-tier-hi, .yy-tier-low').forEach(function (el) {
            const high = el.classList.contains('yy-tier-hi');
            const kind = el.classList.contains('yeye_DataBuffIcon') ? 'buff' : 'skill';
            el.classList.remove('yy-tier-hi', 'yy-tier-low');
            setOriginalIcon(el, kind, high);
        });
    } catch (e) {
        /* 忽略 */
    }
}
