import { lib, game, ui, get, ai, _status } from '../../../../noname.js';

/**
 * 查看手牌弹窗（移植自《点绛唇》）
 * 用于MVP结算页面点击玩家条目右侧的“查看手牌”按钮
 */
const DIR = 'extension/永夜之境/source/mvp';
lib.init.css(lib.assetURL + DIR, 'openCardsDialog');

/**
 * 打开一名角色的手牌展示弹窗
 * @param {Player} player 要展示手牌的角色
 */
export function openCardsDialog(player) {
    const dialog = ui.create.div(document.body, '.handsDialog', function (event) {
        //只有点到遮罩本身才关闭，点牌/点武将图不关闭
        if (event.target === dialog) dialog.delete();
    });
    const cardsBg = ui.create.div('.cardsDialog', dialog);
    const container = ui.create.div('.cardsScrollContainer', cardsBg);
    Object.assign(container.style, {
        display: 'flex',
        flexWrap: 'wrap',
        overflowY: 'auto',
        justifyContent: 'center',
        width: '100%',
    });

    //按手牌信息生成展示用卡牌（不修改原牌，避免影响结算数据）
    const cards = player.getCards('h');
    if (cards.length) {
        for (const item of cards) {
            const card = game.createCard(get.name(item, false), get.suit(item, false), get.number(item, false), get.nature(item, false));
            card.style.flex = '0 0 auto';
            container.appendChild(card);
        }
    } else {
        //ui.create.div('.emptyText', '没有手牌', container);
    }

    //标题
    const head = ui.create.div('.handHead', cardsBg);
    ui.create.div('.text', get.slimName(player.name1) + '的手牌', head);

    //左下角武将立绘：本体手绘立绘优先，否则退回武将皮肤图
    const image = ui.create.div('.charImage', cardsBg);
    const fallback = () => image.setBackground(player.name1, 'character');
    try {
        if (typeof game.getFileList == 'function') {
            game.getFileList(
                'image/lihui',
                (folders, files) => {
                    if ((files || []).includes(player.name1 + '.jpg')) {
                        image.setBackgroundImage('image/lihui/' + player.name1 + '.jpg');
                        image.style.webkitMask = 'none';
                        image.style.backgroundRepeat = 'no-repeat';
                    } else {
                        fallback();
                    }
                },
                fallback,
            );
        } else {
            fallback();
        }
    } catch (e) {
        fallback();
    }

    return dialog;
}
