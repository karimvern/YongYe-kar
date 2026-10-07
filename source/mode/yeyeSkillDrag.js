'use strict';
import { lib, _status } from "../../../../noname.js";

/**
 * 永夜将临 · 列表拖拽换位（当前只给「玩家技能」用）
 *
 * 用法：yeyeMakeSortable(container, { itemSelector, onReorder(from, to) })
 * - 鼠标与触屏通用（优先 pointer 事件，老环境回退 mouse/touch）
 * - 位移小于阈值视为普通点击，不动原有点击逻辑
 * - 真的拖动过时，会置 _status.justdragged 抑制随之而来的 click，
 *   与本体「拖动对话框」的约定一致
 */

const DRAG_CLASS = 'yeye_skillDragging';
const TARGET_CLASS = 'yeye_skillDropTarget';
const MOVE_THRESHOLD = 6; // px，小于它算点击

/** 统一取出坐标：pointer / mouse / touch 都吃 */
function yeyePointOf(e) {
    if (e.touches && e.touches.length) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    if (e.changedTouches && e.changedTouches.length) {
        return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
}

function yeyeUseTouchEvent() {
    try {
        return !!(lib.config && lib.config.touchscreen);
    } catch (e) {
        return false;
    }
}

const YEYE_DRAG_EVT = window.PointerEvent
    ? { down: 'pointerdown', move: 'pointermove', up: 'pointerup', cancel: 'pointercancel' }
    : yeyeUseTouchEvent()
        ? { down: 'touchstart', move: 'touchmove', up: 'touchend', cancel: 'touchcancel' }
        : { down: 'mousedown', move: 'mousemove', up: 'mouseup', cancel: null };

/** 拖动期间挂在 document 上的三个处理器 */
let yeyeDrag = null;

function clearTargetHighlight(container) {
    container.querySelectorAll('.' + TARGET_CLASS).forEach(function (el) {
        el.classList.remove(TARGET_CLASS);
    });
}

function endDrag() {
    if (!yeyeDrag) return;
    const st = yeyeDrag;
    yeyeDrag = null;
    document.removeEventListener(YEYE_DRAG_EVT.move, st.onMove, true);
    document.removeEventListener(YEYE_DRAG_EVT.up, st.onUp, true);
    if (YEYE_DRAG_EVT.cancel) {
        document.removeEventListener(YEYE_DRAG_EVT.cancel, st.onUp, true);
    }
    st.el.classList.remove(DRAG_CLASS);
    st.el.style.transform = '';
    st.el.style.pointerEvents = '';
    if (st.container) clearTargetHighlight(st.container);
    return st;
}

/**
 * 让 container 内符合 itemSelector 的元素可以拖拽换位。
 * @param {HTMLElement} container
 * @param {{ itemSelector: string, onReorder?: (from: number, to: number) => void }} options
 */
export function yeyeMakeSortable(container, options) {
    if (!container || !options || !options.itemSelector) return;
    const selector = options.itemSelector;
    const items = Array.prototype.slice.call(container.querySelectorAll(selector));
    items.forEach(function (el, index) {
        el.dataset.yeyeSortIndex = String(index);
        if (el._yeyeSortBound) return;
        el._yeyeSortBound = true;
        el.addEventListener(YEYE_DRAG_EVT.down, function (event) {
            if (event.button !== undefined && event.button !== 0) return; // 只接左键
            if (yeyeDrag) return;
            const start = yeyePointOf(event);
            const st = {
                el: el,
                container: container,
                selector: selector,
                startX: start.x,
                startY: start.y,
                moved: false,
                target: null,
                onMove: null,
                onUp: null,
            };
            st.onMove = function (ev) {
                if (!yeyeDrag || yeyeDrag !== st) return;
                const p = yeyePointOf(ev);
                const dx = p.x - st.startX;
                const dy = p.y - st.startY;
                if (!st.moved && Math.sqrt(dx * dx + dy * dy) < MOVE_THRESHOLD) return;
                if (!st.moved) {
                    st.moved = true;
                    // 抬起：脱离命中判定，方便 elementFromPoint 找到下面的目标
                    el.classList.add(DRAG_CLASS);
                    el.style.pointerEvents = 'none';
                }
                if (ev.cancelable) ev.preventDefault();
                el.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
                const under = document.elementFromPoint(p.x, p.y);
                const targetEl = under && under.closest ? under.closest(selector) : null;
                const validTarget = (targetEl && targetEl.parentNode === container) ? targetEl : null;
                if (st.target !== validTarget) {
                    clearTargetHighlight(container);
                    if (validTarget && validTarget !== el) {
                        validTarget.classList.add(TARGET_CLASS);
                    }
                    st.target = validTarget;
                }
            };
            st.onUp = function () {
                const state = endDrag();
                if (!state) return;
                if (!state.moved) return; // 没动过：当普通点击，交给原 click 处理器
                // 抑制这次拖动末尾产生的 click（与本体拖拽对话框同一约定）
                _status.justdragged = true;
                setTimeout(function () {
                    _status.justdragged = false;
                }, 100);
                const from = Number(state.el.dataset.yeyeSortIndex);
                const toEl = state.target;
                if (!toEl) return;
                const to = Number(toEl.dataset.yeyeSortIndex);
                if (!Number.isFinite(from) || !Number.isFinite(to) || from === to) return;
                if (typeof options.onReorder === 'function') options.onReorder(from, to);
            };
            yeyeDrag = st;
            document.addEventListener(YEYE_DRAG_EVT.move, st.onMove, true);
            document.addEventListener(YEYE_DRAG_EVT.up, st.onUp, true);
            if (YEYE_DRAG_EVT.cancel) {
                document.addEventListener(YEYE_DRAG_EVT.cancel, st.onUp, true);
            }
        });
    });
}
