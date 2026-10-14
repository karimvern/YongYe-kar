# 叠置牌机制（xinxqp）维护文档

> 最后更新：2026-10-14
> 涉及文件：`source/precontent.js`（数据与API）、`source/js/globalskill.js`（结算触发）、`source/character/xinx1.js`（授予技能示例：`xinxnewquanpao`、`xinxlingyun_effect`）

---

## 一、机制概述

"叠置"指将若干手牌按选择顺序叠放在一张手牌（**底牌/壳牌**）上的机制。使用底牌后可依次使用其上的叠置实体牌；底牌以非"使用/打出"方式离手（弃置、被获得、作材料等）时，叠置牌自动收回手牌。

核心设计：**数据挂壳牌、实体进暂存、载荷走 gaintag、结算靠全局技能**。

## 二、数据结构

| 数据 | 位置 | 说明 |
|---|---|---|
| `card.storage.xinxqp_stack` | 壳牌（在手牌区） | 叠置列表，**从下到上**的叠置顺序（先叠的先 push） |
| `card.storage.xinxqp_master` | 叠置实体牌（在 `ui.special`） | 叠置归属玩家，用于死亡清扫与 clearAll 收回 |
| `"xinxqp:花色,点数,牌名,,cardid|..."` | 壳牌 `gaintag` 数组 | 断线重连的数据通道（随 getState 序列化），**显示层会隐藏它** |
| `ui.special` DOM 区域 | 叠置实体牌物理位置 | 不属于任何玩家的区域，`get.owner()` 返回 false |

**要点**：叠置实体牌不在任何玩家手牌区，技能统计"手牌中的叠置"统计的是壳牌。

## 三、代码分布与职责

### 1. `precontent.js` → `game.xinxqp`（数据与API层）

所有读写叠置数据的入口。**技能代码请勿直接摸 `card.storage.xinxqp_stack`，统一走这些 API**：

```js
// ——查询（只读，安全）——
game.xinxqp.getStack(card)            // 叠置列表（从下到上），自动初始化空数组
game.xinxqp.isShell(card)             // 是否为带叠置的壳牌（底牌）
game.xinxqp.countStack(card)          // 叠置数量，非壳牌为 0
game.xinxqp.getTopCard(card)          // 最上方（最后叠置）的牌，无则 null
game.xinxqp.getBase(card)             // 最下方底牌：传壳牌返回自身；传叠置牌反查所属壳牌，找不到 null
game.xinxqp.getAllCards(card, opts)   // 叠置整体所有实体牌，默认 [底牌,...叠置牌(从下到上)]
                                      // opts.includeBase===false 时只返回叠置牌；传叠置牌会自动定位底牌

// ——事件取数（失去叠置牌时从 lose/loseAsync 事件中取数据）——
game.xinxqp.parsePayload(payload)     // 解析壳牌gaintag中的"xinxqp:"载荷 → [花色,点数,牌名,关联,cardid] 列表
                                      // （前缀长度为7，内部slice(7)去前缀；非载荷返回[]）
game.xinxqp.getCardsByIds(ids)        // 按cardid经lib.cardOL反查实体牌（牌在任何区域都能查到）
game.xinxqp.getLostStackCards(event, player, opts)
                                      // 从lose/loseAsync事件取本次失去壳牌上的叠置实体牌（默认不含底牌）
                                      // 三路兜底：①storage未清直接读 ②gaintag_map载荷按cardid反查 ③祖先链xinxqp_stash
                                      // opts.includeBase===true 时底牌（本次失去的壳牌本身）插在各组叠置牌之前一并返回

// ——写入/结算——
game.xinxqp.stackOn(player, base, tops)   // 核心：将 tops 叠置于 base（并入原有叠置→移入ui.special→标记→同步）
game.xinxqp.mergeShell(player, base, top) // 整体并入：top 连同其叠置作为整体叠到 base
game.xinxqp.clearShell(shell)             // 清除单张壳牌全部叠置痕迹（storage/载荷/显示/阴影）
game.xinxqp.broadcastClear(player, shells)// clearShell + 录像 + 全客户端同步 + 刷新显示
game.xinxqp.clearAll(player)              // 清除一名角色全部叠置并收回手牌（授予技能 onremove 时调用）

// ——同步/恢复——
game.xinxqp.syncShell(player, shell)      // 叠置变动后：录像+维护壳牌gaintag载荷+联机同步+刷新显示
game.xinxqp.rebuildAll()                  // 断线重连后按壳牌载荷重建叠置数据
game.xinxqp.video(player, info)           // 录像回放恢复

// ——显示层——
game.xinxqp.refreshVisual(player)         // 刷新一名角色手牌/装备区的叠置显示（标签/阴影/右键简介，cardMod 两个容器都注册）
game.xinxqp.refreshGaintag(card, num)     // 重写壳牌标签：隐藏"xinxqp:"载荷，显示"叠置×N"
game.xinxqp.installUI()                   // 幂等包装 Card.prototype.addGaintag（显示层兜底，由 install() 调用）
game.xinxqp.stackShadows                  // 叠置堆叠阴影样式（按叠置数取用）
```

### 2. `globalskill.js` → `lib.skill._xinxqp_diezhi`（结算触发层）

全局规则技能（`ruleSkill`），不依赖任何授予技能，负责叠置的生命周期结算：

| 子技能 | 触发 | 职责 |
|---|---|---|
| `install()` | 由授予技能 `init` 调用 | 调用 `installUI()` 包装 addGaintag + 注册 `_status.postReconnect` 重连重建 |
| `_stash` | `useCardBegin`/`respondBegin` | 壳牌**作为本身牌**被使用/打出时，把叠置转移到事件的 `xinxqp_stash` 暂存并清空壳牌（先于 lose，杜绝 lose 分支误收回） |
| `_loop` | `useCardAfter`/`respondAfter` | 依次让玩家选择使用剩余叠置牌；用被取消的重新挂回壳牌；死亡/结束则弃置 |
| `_lose` | `loseAfter` | 壳牌（**手牌 hs / 装备区 es**）以非"使用/打出"方式离手时，收回叠置到手牌（死亡/游戏结束则弃置） |
| `_die` | `dieAfter` | 清扫 `ui.special` 中归属该角色的遗留叠置，置入弃牌堆 |

### 3. 授予技能（如 `xinx1.js` 的 `xinxnewquanpao`）

新技能要授予叠置能力，只需两步：

```js
xinxXXX: {
    init(player) {
        lib.skill._xinxqp_diezhi.install();   // 安装机制（幂等）
    },
    onremove(player) {
        game.xinxqp.clearAll(player);         // 失去技能时收回全部叠置
    },
    async content(event, trigger, player) {
        // ...选择底牌 base 与叠置牌 tops 后：
        await game.xinxqp.stackOn(player, base, tops);
    },
}
```

## 四、关键运行链路

### 使用/打出壳牌
```
useCardBegin/respondBegin
  └─ _stash：xinxqp_stash = 叠置.slice()；xinxqp_used_all = [底牌,...剩余实体牌]（快照）；broadcastClear（壳牌变干净）
useCard 结算（壳牌经 lose 事件离手——此时 storage/载荷均空）
  └─ _lose：inUse 检查命中，跳过
useCardAfter/respondAfter
  └─ _loop：逐张选择使用剩余叠置；用不出的收回（gain事件带 xinxqp_recoup 标记）；结束若未用完则收回（死亡则弃置）
```
注意：`useCardAfter` 的 `trigger.cards` **只含底牌**。要拿"底牌+使用时的剩余实体牌"，读 `trigger.xinxqp_used_all`（_stash 的快照，_loop 不删除）。**勿把叠置牌塞进 `trigger.cards`**——useCard 的 lose 会把它们一并带走置入处理区，`_loop` 将无牌可用，且 lose 的 hs 会被污染造成重复结算。
注意：`useCard/respond` 事件的 `card` 被 `get.autoViewAs` 包装成 VCard（拷贝了壳牌 cardid），**判定是否"作为本身牌使用"要用 cardid 比对实体牌**（见 `_stash` filter 与 `_lose` 的 inUse 检查）。

### 普通失去（弃置/被获得/作材料）
```
lose 结算：引擎先把壳牌 gaintag 剥离并存档到 lose 事件 event.gaintag_map[cardid]
  └─ loseAfter → _lose：收回叠置（storage 此时还在）→ broadcastClear
```

### 断线重连
```
_status.postReconnect._xinxqp_diezhi → ui.create.me 包装 → rebuildAll()
  按各壳牌 gaintag 中的 "xinxqp:" 载荷重建 storage.xinxqp_stack（实体牌移回 ui.special）→ refreshVisual
```

## 五、已知坑与设计决策（改代码前必读）

1. **引擎会在 lose 结算时剥离 gaintag**（content.js 约 10954 行）：非 `eternal_` 前缀的 tag 全部移除并存档进 `event.gaintag_map`。因此：
   - 判断"失去的牌曾是壳牌"要查 `gaintag_map` 里的 `xinxqp:` 载荷，不能只看 storage；
   - `clearShell` 必须**无条件重写显示**（不能比较 gaintag 前后长度短路），否则剥离期间被显示层重新写回的"叠置×N"会残留在牌上、跟着牌进入获得者手牌区（已修复的 bug）。
2. **`addGaintag` 显示层包装**（`installUI`）：引擎任何路径重渲染标签时，隐藏 `xinxqp:` 载荷、按实时 `storage.xinxqp_stack` 显示"叠置×N"。**载荷只负责被隐藏，不据此补标签**——载荷是存档数据（重连通道），按它补标签会在叠置收回后产生幻影"叠置×N"。
3. **统计/获取"失去的叠置实体牌"的三路兜底**（已封装为 `game.xinxqp.getLostStackCards`，计数取 `.length` 即可）：
   - ① storage 还在 → 直接读；
   - ② storage 已被清理 → 读 lose 事件 `gaintag_map` 中载荷的 `|` 段数；
   - ③ 使用/打出壳牌 → 沿事件祖先链读 `useCard/respond` 事件的 `xinxqp_stash`（**必须校验本次失去的牌就是该壳牌本体**，否则壳牌使用过程中的无关失去会误计）。
4. **loseAfter 与 loseAsyncAfter 防重**：loseAsync 会派生直接子级 lose 事件，两个触发点都会命中——子级 lose 的 filter 要跳过（`event.parent?.name == "loseAsync"`），统一由 loseAsyncAfter 用 `event.getl(player)` 处理。
5. **叠置顺序语义**：`xinxqp_stack` 数组下标 0 = 最先叠置（最贴近底牌），最后一项 = 最上方。`getAllCards` 返回顺序与此一致。
6. **联机**：宿主维护壳牌 gaintag 载荷（`!game.online` 分支），客户端靠 `broadcastAll` 同步 storage 与显示；手牌 gaintag 随 getState 序列化，是重连唯一数据通道，**勿改载荷格式**（`rebuildAll` 按逗号 5 字段解析）。
7. **录像**：叠置变动都调用 `game.addVideo("skill", player, ["_xinxqp_diezhi", [shell.cardid, get.cardsInfo(stack)]])`，回放由 `video()` 恢复。新增修改叠置数据的路径时记得补录像调用。
8. **收回标记**：`_lose`/`_loop` 收回叠置实体牌时，会给收回的 **gain 事件**打 `xinxqp_recoup = true` 标记（不是给牌打标记，牌上的标记会随转移残留造成误触发）。技能可在 `player: "gainAfter"` 用 `event.xinxqp_recoup === true` 识别并结算（如重铸收回的牌）。注意：`clearAll` 收回不打此标记。
9. **装备区壳牌**：底牌可以是装备区牌。显示（`refreshVisual` 对 `he` 区刷新 + 装备容器注册 cardMod）、失去收回（`_lose` 处理 `es`）、`getBase` 反查、`rebuildAll`/`clearAll` 扫描均已覆盖。**联机重连限制**：引擎 getState 只序列化手牌 gaintag，装备区牌的载荷不随状态同步，重连后装备区叠置可能无法恢复（离线/单机无影响）；如需支持，要给 `state.equips_map` 补 gaintag 通道。
10. **useCard 快照**：`_stash` 会在 useCard/respond 事件上存 `xinxqp_used_all = [底牌,...剩余实体牌]`（使用时刻快照，`_loop` 不删除），供 `useCardAfter` 等处读取完整牌组；`trigger.cards` 始终只含底牌，勿改动（见"使用/打出壳牌"链路说明）。

## 六、常用写法示例

```js
// 手牌中带叠置的牌（壳牌）数量
const num1 = player.countCards('h', card => game.xinxqp.isShell(card));

// 手牌叠置实体牌总数（不含底牌）
const num2 = player.getCards('h').reduce((s, c) => s + game.xinxqp.countStack(c), 0);

// 一张叠置牌整体的所有牌（含底牌），打印牌名
for (const c of game.xinxqp.getAllCards(shell)) game.log(c);

// 拿到某张叠置牌所属的底牌
const base = game.xinxqp.getBase(someStackedCard);

// 最上层那张叠置牌
const top = game.xinxqp.getTopCard(shell);

// 失去叠置牌时取本次失去的叠置实体牌（技能触发 player:"loseAfter" / global:"loseAsyncAfter"）
const cards = game.xinxqp.getLostStackCards(trigger, player);

// 连同底牌一起取（底牌 = 本次失去的那张壳牌本身，插在各组叠置牌之前）
const all = game.xinxqp.getLostStackCards(trigger, player, { includeBase: true });

// 完整的 losecards 子技能模板
/*
losecards: {
    charlotte: true,
    trigger: { player: "loseAfter", global: "loseAsyncAfter" },
    forced: true,
    filter(event, player) {
        //loseAsync派生的子lose事件由loseAsyncAfter统一处理，防重复
        if (event.name == "lose" && event.parent?.name == "loseAsync") return false;
        return game.xinxqp.getLostStackCards(event, player).length > 0;
    },
    async content(event, trigger, player) {
        const cards = game.xinxqp.getLostStackCards(trigger, player);
        //...用 cards 做后续结算
    },
},
*/
```

## 七、维护检查清单

修改本机制时逐项确认：

- [ ] 新增/修改叠置数据写入点 → 是否调用了 `syncShell`（含录像与联机同步）？
- [ ] 新增壳牌离手场景 → `_lose` 的 inUse 检查是否覆盖？是否需要新的 stash/loop 分支？
- [ ] 修改显示逻辑 → `clearShell` 是否仍无条件重写？`addGaintag` 包装是否仍只按 storage 计数？
- [ ] 修改载荷格式 → `syncShell` 编码与 `rebuildAll` 解析是否同步更新？旧存档兼容性？
- [ ] 新技能读叠置数据 → 是否全部走 `game.xinxqp` 查询 API，未直接摸 storage？
- [ ] 技能统计失去叠置 → 是否按"三路兜底"处理？loseAsync 场景是否防重？
- [ ] 联机测试 → 客户端断线重连后叠置是否正常恢复？
