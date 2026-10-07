import {lib, game, ui, get, ai, _status} from '../../../noname.js'
import { applyBackgroundFromConfig } from './background.js'
//不知道干嘛，但是不是大佬的话还是别动为妙
export async function content(config, pack){
    // 应用扩展设置里选中的游戏背景
    applyBackgroundFromConfig();
}
