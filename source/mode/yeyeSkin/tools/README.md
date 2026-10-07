# 旧样式层工具（开发用，不参与游戏运行）

`yeyeSkin/` 是**已冻结**的旧样式层：平时改新样式（`../../style.css`）不需要管它。
只有当你**想让旧观感重新和转正前逐像素一致**时，才需要这两个工具。

## 前置条件

- Python 3（生成器；只用标准库）
- Node.js 16+（自查；只用内置模块）
- 本机已安装 Chrome 或 Edge；找不到时用环境变量指定：
  `set CHROME_PATH=D:\path\to\chrome.exe`（PowerShell 里用 `$env:CHROME_PATH=...`）

## 两条命令

```bat
python tools\regen_legacy.py      :: 重新生成 ../skin.css
node   tools\check_legacy.mjs     :: 自查是否与转正前一致
```

### regen_legacy.py —— 重新生成旧层

- 输入：`tools/yy_original_style.css`（转正前的原样式快照，唯一基准）+ `../../style.css`（当前新样式）
- 输出：**只写 `../skin.css`**，绝不改动 `../../style.css`
- `skin.css` 里分界线（`以下规则由 tools/regen_legacy.py 生成`）**以上**的内容原样保留，
  分界线以下按算法重写
- 可反复运行：没有改动时重跑，`skin.css` 逐字节不变

### check_legacy.mjs —— 自查

- 用 Chrome 的 `--remote-debugging-pipe` 驱动无头浏览器（走进程管道，不需要网络、不需要 npm 依赖）
- A 页加载「原样式快照」，B 页加载「当前新样式 + 旧层 + `body.yeye-legacy`」
- 两页用同一套 DOM 探针，逐选择器比对 11 项计算样式 + 2 个伪元素
- 打印 `✅ 零差异：N 个选择器 / M 项` 或差异清单；**退出码 0 = 一致，1 = 有差异，2 = 环境/运行错误**

## 什么时候该跑

| 场景 | 要不要跑 |
|---|---|
| 只改新样式、不在乎旧观感漂移 | **不用**（冻结层的默认状态） |
| 想确认旧层是否还和转正前一致 | 跑 `check_legacy.mjs` |
| 想让旧层重新 100% 对齐 | 先 `regen_legacy.py`，再 `check_legacy.mjs` 确认零差异 |
| 改了 `skin.css` 分界线以上的固定规则 | 跑 `check_legacy.mjs` 复查（头部注释含 8 个被跟踪属性） |

## 会「漂移」的情况（属正常，不是 bug）

旧层只跟踪这 8 个属性：

```
background-image / background-size / background-position / background-repeat
background-color / color / border-radius / box-shadow
```

所以如果你在**新样式**里：

- 改了上面 8 个属性 → 旧层会把它盖回去，旧观感不受影响；
- 新增了**别的**属性（`outline`、`filter`、`opacity`、`text-shadow`、`padding`…）或新增选择器
  → 旧层不会复位它，旧样式会出现「旧贴图 + 新装饰」的混合观感。这属于冻结后的预期行为。

## 文件说明

| 文件 | 作用 |
|---|---|
| `yy_original_style.css` | 转正前的原 `style.css` 快照（2098 行），只读基准 |
| `regen_legacy.py` | 从快照 + 当前新样式重新生成 `../skin.css` |
| `check_legacy.mjs` | 计算样式自查，零依赖，带退出码 |

整个 `tools/` 目录不参与游戏运行（不被 `info.json` 或任何 import 引用），可以随时删除；
删掉它只影响上面这两条命令，不影响扩展。
