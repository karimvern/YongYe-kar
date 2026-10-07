# 永夜将临 · 旧样式层（已冻结）

默认样式是 `../style.css` 里的**永夜新样式**。这个文件夹是「切回旧素材」的可选层，
和默认样式并存、互不影响。

## 怎么用

游戏里进入 **永夜将临 → 模式设置**，找到 **「使用旧版素材」**：

- **关闭（默认）**：使用 `../style.css` 的永夜新样式。
- **开启**：切回旧样式的贴图、文字色，并去掉新样式独有的整屏星点与外框底板。

开关随时可切，不用重启，也不影响存档与玩法。

## 维护等级：冻结

**以后修改 `../style.css` 时，不需要同步这个文件夹。**
本层只保证「能切换、旧观感基本可读」，不承诺和新样式逐像素对齐。

它只跟踪这 8 个属性：

```
background-image / background-size / background-position / background-repeat
background-color / color / border-radius / box-shadow
```

- 改动落在上面这 8 个属性 → 旧层会把原值盖回去，旧观感不受影响；
- 新增**别的**属性（`outline`、`filter`、`opacity`、`text-shadow`、`padding`…）或新增选择器
  → 旧层不会复位它，旧样式会出现「旧贴图 + 新装饰」的混合观感。属预期行为，不是 bug。

想恢复 100% 对齐（或想确认当前是否还对得齐）：见 `tools/README.md`，两条命令搞定。

## 文件说明

| 文件 | 作用 |
|---|---|
| `yeyeSkin.js` | 开关定义、`body.yeye-legacy` 切换、图标档位助手、旧配置键清理 |
| `skin.css` | 全部还原规则。**分界线以上**是手工固定部分；分界线以下由 `tools/regen_legacy.py` 生成 |
| `tools/` | 开发用自查 / 生成工具，不参与运行，可随时整体删除 |

> `skin.css` 位于本目录下，所以里面的位图路径写作 `../image/...`。

## ⚠ 两条不能破的约定

1. **不要给新样式加 `!important`** —— 一旦使用，会压过本层以及 `mode.js` 给档位图标写下的
   内联贴图，旧观的技能框 / 六边形会直接消失。当前 `../style.css` 的永夜主题区块是零 `!important`。
2. **`skin.css` 分界线以下不要手改** —— 下次跑 `tools/regen_legacy.py` 会覆盖它。

## 旧层还原了什么

- 位图：50 处引用（31 个文件，全在 `../image/` 下）
- 文字色：含购买弹窗正文的深棕字 `#342319` 等
- 字体：`--yy-font` 固定为 `shousha`（将来新样式换字体也不影响旧观感）
- 复位新样式新增的装饰：`box-shadow`、`border-radius`、`background-color`、
  `background-size/position/repeat`，以及整屏星点 `.yeye_Home::after` 与外框底板 `.yeye_HomeBody::before`

这些位图**不能删** —— 旧层仍在使用。武将卡星级 `icon_star.png`、势力名牌 `name2_*`、
血量球 `glass1-4`、模式入口图 `wujin.jpg` 两套样式共用，从未改动。

## 接口

- 配置键：`lib.config.mode_config.wujin_yongye.legacyAssets`（布尔，默认 `false`）
- 程序调用：`applyLegacyAssets(true|false)`、`isLegacyAssetsOn()`
- 换图助手：`applyAssetTier(el, 'buff'|'skill', 'hi'|'low')`，由 `mode.js` 调用

## 移除方法

1. 删掉整个 `yeyeSkin/` 文件夹；
2. 删掉 `extension.js` 与 `mode.js` 里带 `[旧样式层]` 注释的那几行。

删完即回到「只有永夜新样式」的状态；那时 `../image/` 下那 31 个位图也就可以一并删除了。
