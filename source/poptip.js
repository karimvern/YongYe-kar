import { lib, game, ui, get, ai, _status } from '../../../noname.js';
export let poptip = {};

lib.poptip.add({
    name: '火',
    id: 'xinxpojie_huo',
    info: '回合开始时，你受到1点无来源火焰伤害。',
});
lib.poptip.add({
    name: '雷',
    id: 'xinxpojie_lei',
    info: '当你获得黑桃牌后，由银狼获得之。',
});
lib.poptip.add({
    name: '冰',
    id: 'xinxpojie_bing',
    info: '你于自己的回合内至多使用等同体力上限张牌。',
});
lib.poptip.add({
    name: '风',
    id: 'xinxpojie_feng',
    info: '摸牌阶段结束后，你将一种花色的所有牌置于牌堆顶。',
});
lib.poptip.add({
    name: '物理',
    id: 'xinxpojie_wuli',
    info: '当你回复体力时，进行一次判定，若为黑色，取消之。',
});
lib.poptip.add({
    name: '虚数',
    id: 'xinxpojie_xushu',
    info: '当你成为其他角色使用牌的目标，你须交给银狼一张牌，否则移去此弱点，选择失去一个技能或失去1点体力。',
});
lib.poptip.add({
    name: '量子',
    id: 'xinxpojie_liangzi',
    info: '当你受到来自银狼的伤害后，其对你发动一次【破解】。',
});

lib.poptip.add({
    name: '额外得牌数',
    id: 'xinx_ewaidepai',
    info: '当你不因此效果获得牌时，你摸等同额外得牌数张牌。',
});
lib.poptip.add({
    name: '额外摸牌数',
    id: 'xinx_ewaimopai',
    info: '当你不因此效果摸牌时，你多摸额外摸牌数张牌。',
});
lib.poptip.add({
    name: '提前自己的下个回合',
    id: 'xinx_tiqianhuihe',
    info: '于当前回合结束后进行一个额外回合，并于此额外回合结束后跳过自己的下个回合（每轮限一次）',
});
lib.poptip.add({
    name: '共享手牌',
    id: 'xinx_gongxiang',
    info: '你与其均可将对方手牌如手牌般使用或打出',
});
lib.poptip.add({
    name: '状态技',
    id: 'xinx_Charlotte',
    info: '角色被施加的状态效果。如神黄忠的击伤，神张飞的标记，谋曹丕的放逐等等。',
});
lib.poptip.add({
    name: '虚无',
    id: 'xinx_xuwu',
    info: '回合结束时，若此牌仍在你的手牌区，将其销毁',
});
lib.poptip.add({
    name: '消耗',
    id: 'xinx_consume',
    info: '使用此牌后，将其对应的实体牌销毁',
});
lib.poptip.add({
    name: '记忆',
    id: 'xinx_jiyi',
    info: '此牌被弃置后，你使用此牌，且仅能以此法使用',
});
lib.poptip.add({
    name: '毁灭',
    id: 'xinx_huimie',
    info: '使用此牌时，受到1点无来源火焰伤害',
});
lib.poptip.add({
    name: '即时牌',
    id: 'xinx_jishipai',
    info: '基本牌和普通锦囊牌',
});
lib.poptip.add({
    name: '中央区',
    id: 'xinx_central',
    info: '本回合弃牌堆',
});
lib.poptip.add({
    name: '主要阶段',
    id: 'xinx_zyjd',
    info: '判定/摸牌/出牌/弃牌阶段',
});
lib.poptip.add({
    name: '专属牌堆',
    id: 'xinxzhuanshucardpile',
    info:
        `包含如下卡牌。
<br><br>基本牌：♠7【杀】；♠8【杀】；♥5【闪】；♥9【桃】；♠9【酒】；♦K【勘破】；♥2【往世之约】。
<br><br>锦囊牌：♦Q【以身为炬】；♣K【无懈可击】；♦Q【顺手牵羊】；♠Q【过河拆桥】；♦7【逆鳞】；♣Q【归寂】；♥7【铭心之约】；♥4【记忆标本】；♠7【与黑拥吻】。
<br><br>装备牌：♠2【八卦阵】；♦A【侵晨】。
`,
});
lib.poptip.add({
    name: '专属牌库',
    id: 'xinxzhuanshuLibrary',
    info:
        `包含如下卡牌。
<br><br>基本牌：♠8【杀】；♥9【桃】。
<br><br>锦囊牌：♠Q【玄蚀】；♠7【决斗】；♥8【如我所书】；♣J【拿来吧你】；♠K【金手指】；♦10【橙晖琥珀】。
<br><br>装备牌：♥9【青囊书】。
`,
});
   
