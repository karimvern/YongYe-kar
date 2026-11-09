import {lib, game, ui, get, ai, _status} from '../../../noname.js'
import { applyBackgroundFromConfig } from './background.js'
import { applyRightLayout } from './right/rightLayout.js'
import { correctContent } from './js/correct.js'
//不知道干嘛，但是不是大佬的话还是别动为妙
export async function content(config, pack){
    // 应用扩展设置里选中的游戏背景
    applyBackgroundFromConfig();
    // 注意：本体在 ui.create.arena() 之前执行扩展 content，此处 arena 尚不存在，
    // applyRightLayout 会静默跳过；真正的打标记由 extension.js 的 arenaReady 钩子完成
    applyRightLayout();
    await correctContent(config, pack);
}
