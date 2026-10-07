#!/usr/bin/env node
/**
 * 永夜将临 · 旧样式层自查
 *
 * 校验「转正前原样式」与「当前新样式 + 旧样式层」是否逐属性一致：
 *   A 页：只加载 tools/yy_original_style.css（基准）
 *   B 页：加载 ../style.css + ../skin.css，并在 body 上挂 yeye-legacy
 * 两页使用完全相同的 DOM 探针，逐选择器比对 11 项计算样式（含 2 个伪元素），
 * 由 Node 汇总差异并返回退出码（0 = 零差异）。
 *
 * 驱动方式：Chrome 的 --remote-debugging-pipe（走进程管道）。
 * 不用本地 HTTP、不装任何 npm 依赖，只用 Node 内置模块。
 *
 * 用法：
 *   node tools/check_legacy.mjs
 * 需要本机已安装 Chrome 或 Edge；可用环境变量 CHROME_PATH 指定路径。
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const TOOLS_DIR = path.dirname(fileURLToPath(import.meta.url));
const LEGACY_DIR = path.dirname(TOOLS_DIR);      // .../source/mode/yeyeSkin
const MODE_DIR = path.dirname(LEGACY_DIR);       // .../source/mode

const SNAPSHOT = path.join(TOOLS_DIR, 'yy_original_style.css');
const STYLE = path.join(MODE_DIR, 'style.css');
const SKIN = path.join(LEGACY_DIR, 'skin.css');

const PROPS = ['background-image', 'background-size', 'background-position',
    'background-repeat', 'background-color', 'color', 'border-radius',
    'box-shadow', 'font-family', 'opacity', 'display'];
const PSEUDO_PROPS = ['content', 'display', 'opacity', 'background-image', 'width', 'height'];
const PSEUDO_TARGETS = [
    ['pseudo-home', '::after', '.yeye_Home::after'],
    ['pseudo-body', '::before', '.yeye_HomeBody::before'],
];
const TIMEOUT_MS = 60000;

function fail(msg, code = 2) {
    console.error('❌ ' + msg);
    process.exit(code);
}

/** 从原样式快照里取出全部单类名 .yeye_* 选择器（与旧层生成器同一规则） */
function collectSelectors(cssText) {
    const text = cssText.replace(/\/\*[\s\S]*?\*\//g, '');
    const set = new Set();
    for (const m of text.matchAll(/([^{}]+)\{/g)) {
        for (const raw of m[1].split(',')) {
            const sel = raw.trim();
            if (/^\.yeye_[A-Za-z0-9_]+$/.test(sel)) set.add(sel);
        }
    }
    return [...set].sort();
}

function findChrome() {
    const candidates = [
        process.env.CHROME_PATH,
        'C:/Program Files/Google/Chrome/Application/chrome.exe',
        'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
        process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe') : null,
        'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
        'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
        '/usr/bin/google-chrome', '/usr/bin/chromium',
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    ].filter(Boolean);
    for (const c of candidates) {
        try { if (fs.existsSync(c)) return c; } catch (e) { /* ignore */ }
    }
    return null;
}

/** 探针页：同一套 DOM + 计算样式采集 */
function probePage(links, withLegacyClass, selectors, pageTitle) {
    const js = [
        'window.__probe = null;',
        'var SELECTORS = ' + JSON.stringify(selectors) + ';',
        'var PROPS = ' + JSON.stringify(PROPS) + ';',
        'var PSEUDO = ' + JSON.stringify(PSEUDO_PROPS) + ';',
        'var PSEUDO_TARGETS = ' + JSON.stringify(PSEUDO_TARGETS) + ';',
        'var root = document.getElementById("probe-root");',
        'var result = {};',
        'for (var i = 0; i < SELECTORS.length; i++) {',
        '  var d = document.createElement("div");',
        '  d.className = SELECTORS[i].slice(1);',
        '  d.style.position = "static";',
        '  d.style.width = "200px";',
        '  d.style.height = "60px";',
        '  d.style.margin = "0";',
        '  root.appendChild(d);',
        '  var cs = getComputedStyle(d);',
        '  var o = {};',
        '  for (var j = 0; j < PROPS.length; j++) o[PROPS[j]] = cs.getPropertyValue(PROPS[j]);',
        '  result[SELECTORS[i]] = o;',
        '}',
        'for (var k = 0; k < PSEUDO_TARGETS.length; k++) {',
        '  var t = PSEUDO_TARGETS[k];',
        '  var pcs = getComputedStyle(document.getElementById(t[0]), t[1]);',
        '  var po = {};',
        '  for (var q = 0; q < PSEUDO.length; q++) po[PSEUDO[q]] = pcs.getPropertyValue(PSEUDO[q]);',
        '  result[t[2]] = po;',
        '}',
        'window.__probe = result;',
    ].join('\n');
    return '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>' + pageTitle +
        '</title>' + links + '</head><body' + (withLegacyClass ? ' class="yeye-legacy"' : '') + '>' +
        '<div id="probe-root"></div>' +
        '<div id="pseudo-home" class="yeye_Home" style="position:static;width:200px;height:60px"></div>' +
        '<div id="pseudo-body" class="yeye_HomeBody" style="position:static;width:200px;height:60px"></div>' +
        '<script>' + js + '<\/script></body></html>';
}

const linkFor = p => '<link rel="stylesheet" href="' + pathToFileURL(p).href + '">';

// ------------------------------------------------------------ 主流程

for (const p of [SNAPSHOT, STYLE, SKIN]) {
    if (!fs.existsSync(p)) fail('找不到文件：' + p);
}
const chrome = findChrome();
if (!chrome) fail('没有找到 Chrome / Edge。请安装 Chrome，或用环境变量 CHROME_PATH 指定可执行文件路径。');

const selectors = collectSelectors(fs.readFileSync(SNAPSHOT, 'utf8'));
if (!selectors.length) fail('基准快照里没有解析到任何 .yeye_* 选择器：' + SNAPSHOT);

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'yeye-legacy-check-'));
const pageA = path.join(tempDir, 'probe-a.html');
const pageB = path.join(tempDir, 'probe-b.html');
// 快照原本位于 source/mode/ 下，它的相对路径 url(image/...) 现在会解析错。
// 这里把它改写成绝对路径，保证 A、B 两页引到的是同一批位图（否则比出来全是路径差异）。
const imageBase = pathToFileURL(path.join(MODE_DIR, 'image') + path.sep).href;
const snapshotAbs = path.join(tempDir, 'snapshot-abs.css');
const snapshotCss = fs.readFileSync(SNAPSHOT, 'utf8').replace(/url\(image\//g, 'url(' + imageBase);
fs.writeFileSync(snapshotAbs, snapshotCss, 'utf8');
fs.writeFileSync(pageA, probePage(linkFor(snapshotAbs), false, selectors, 'A'), 'utf8');
fs.writeFileSync(pageB, probePage(linkFor(STYLE) + linkFor(SKIN), true, selectors, 'B'), 'utf8');

const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'yeye-legacy-profile-'));
const child = spawn(chrome, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run',
    '--no-default-browser-check', '--remote-debugging-pipe',
    '--user-data-dir=' + userDataDir, 'about:blank',
], { stdio: ['ignore', 'ignore', 'ignore', 'pipe', 'pipe'] });

const writePipe = child.stdio[3];
const readPipe = child.stdio[4];
let buffer = Buffer.alloc(0);
let nextId = 1;
let finished = false;
const pending = new Map();
const waiters = [];

function cleanup(code) {
    if (finished) return;
    finished = true;
    try { child.kill(); } catch (e) { /* ignore */ }
    for (const dir of [tempDir, userDataDir]) {
        try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) { /* ignore */ }
    }
    process.exit(code);
}

const timeout = setTimeout(() => {
    console.error('❌ 等待比对结果超时（' + (TIMEOUT_MS / 1000) + 's）。');
    cleanup(2);
}, TIMEOUT_MS);

readPipe.on('data', chunk => {
    buffer = Buffer.concat([buffer, chunk]);
    let i;
    while ((i = buffer.indexOf(0)) >= 0) {
        const raw = buffer.slice(0, i).toString('utf8');
        buffer = buffer.slice(i + 1);
        let msg;
        try { msg = JSON.parse(raw); } catch (e) { continue; }
        if (msg.id && pending.has(msg.id)) {
            pending.get(msg.id)(msg);
            pending.delete(msg.id);
        } else if (msg.method) {
            for (let k = waiters.length - 1; k >= 0; k--) {
                if (waiters[k].event === msg.method) {
                    waiters[k].resolve(msg);
                    waiters.splice(k, 1);
                }
            }
        }
    }
});

child.on('exit', code => {
    if (!finished) {
        clearTimeout(timeout);
        console.error('❌ 浏览器意外退出（code=' + code + '）。');
        cleanup(2);
    }
});

function send(method, params, sessionId) {
    const id = nextId++;
    const payload = { id, method, params: params || {} };
    if (sessionId) payload.sessionId = sessionId;
    writePipe.write(JSON.stringify(payload) + '\0');
    return new Promise((resolve, reject) => {
        pending.set(id, msg => {
            if (msg.error) reject(new Error(method + ' 失败：' + JSON.stringify(msg.error)));
            else resolve(msg.result);
        });
    });
}

function waitEvent(event) {
    return new Promise(resolve => waiters.push({ event, resolve }));
}

async function readProbe(sessionId, url) {
    const loaded = waitEvent('Page.loadEventFired');
    await send('Page.navigate', { url }, sessionId);
    await loaded;
    // 等一帧，确保页内脚本已跑完
    await new Promise(r => setTimeout(r, 120));
    const res = await send('Runtime.evaluate',
        { expression: 'JSON.stringify(window.__probe)', returnByValue: true }, sessionId);
    const value = res && res.result && res.result.value;
    if (!value) throw new Error('探针没有返回数据：' + url);
    return JSON.parse(value);
}

(async () => {
    try {
        const target = await send('Target.createTarget', { url: 'about:blank' });
        const attached = await send('Target.attachToTarget', { targetId: target.targetId, flatten: true });
        const sid = attached.sessionId;
        await send('Page.enable', {}, sid);

        console.log('基准快照 : ' + path.relative(MODE_DIR, SNAPSHOT));
        console.log('探针数量 : ' + selectors.length + ' 个选择器 × ' + PROPS.length +
            ' 项属性 + ' + PSEUDO_TARGETS.length + ' 个伪元素');
        console.log('浏览器   : ' + chrome);

        const A = await readProbe(sid, pathToFileURL(pageA).href);
        const B = await readProbe(sid, pathToFileURL(pageB).href);

        const diffs = [];
        let total = 0;
        for (const sel of Object.keys(A)) {
            for (const prop of Object.keys(A[sel])) {
                total++;
                const va = String(A[sel][prop] === undefined ? '' : A[sel][prop]);
                const vb = (B[sel] && B[sel][prop] !== undefined) ? String(B[sel][prop]) : '(缺失)';
                if (va !== vb) diffs.push({ sel, prop, va, vb });
            }
        }

        clearTimeout(timeout);
        if (!diffs.length) {
            console.log('✅ 零差异：' + Object.keys(A).length + ' 个选择器 / ' + total +
                ' 项计算样式与转正前完全一致');
            cleanup(0);
            return;
        }
        console.log('❌ 发现 ' + diffs.length + ' 处差异（共 ' + Object.keys(A).length +
            ' 个选择器 / ' + total + ' 项）：');
        for (const d of diffs.slice(0, 40)) {
            console.log('   ' + d.sel + '  ·  ' + d.prop);
            console.log('      原样式: ' + d.va);
            console.log('      旧层  : ' + d.vb);
        }
        if (diffs.length > 40) console.log('   ……还有 ' + (diffs.length - 40) + ' 处未列出');
        cleanup(1);
    } catch (e) {
        clearTimeout(timeout);
        console.error('❌ ' + e.message);
        cleanup(2);
    }
})();
