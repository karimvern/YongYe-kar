'use strict';
import { lib, game, ui, get, ai, _status } from "../../../../noname.js";

const precontent = function () {
    let currentPlayingAudio = null;
    let currentPlayingAudioPath = "";
    // 每次点击 +1：上一次点击留下的 onEnded/onError 回调看到 token 变了就直接作废
    let yeyeAudioToken = 0;

    /**
     * 取某个技能的语音文件列表。
     * 直接用本体自己的解析器 get.Audio.skill（noname/get/audio.js），
     * 这样扩写武将、侍灵、本体武将吃的是和战斗中「技能台词」完全同一套 audio 声明规则：
     *   audio: "ext:永夜之境/audio:4"    → extension/永夜之境/audio/<技能名>1~4.mp3
     *   audio: "其它技能名"               → 复用那个技能的语音
     *   logAudio: index => "完整路径.mp3" → 用 logAudio 算路径
     */
    function yeyeSkillAudioFiles(skill, player, which) {
        if (!skill) return [];
        try {
            const args = [typeof which === 'number' ? which : get.rand(1, 2)];
            const list = get.Audio.skill({ skill: skill, player: player, args: args }).fileList;
            return Array.isArray(list) ? list.filter(file => typeof file === 'string' && file) : [];
        } catch (err) {
            console.warn('语音解析失败：', skill, err);
            return [];
        }
    }

    game.txhj_TrySkillAudio_yy = function (skill, player, directaudio, which, skin) {
        if (_status.qhly_viewRefreshing) return;
        if (!skill) return;
        _status.qhly_previewAudio = true;
        try {
            let files = yeyeSkillAudioFiles(skill, player, which);
            // 这个技能没配到语音时退一步：从该角色的其它技能里找一个有语音的。
            // （扩展武将经常只有部分技能写了 audio，随机点到没写的技能就整段没声音）
            if (!files.length && player && player.name) {
                let others = [];
                try {
                    others = get.character(player.name, 3);
                } catch (err) {
                    others = [];
                }
                if (Array.isArray(others)) {
                    others = others.slice(0);
                    others.remove(skill);
                    others.randomSort();
                    for (const other of others) {
                        files = yeyeSkillAudioFiles(other, player, which);
                        if (files.length) break;
                    }
                }
            }
            if (!files.length) return;

            // 点第二个武将时直接覆盖：先作废旧回调，再停掉正在播的那条语音
            const token = ++yeyeAudioToken;
            const playPath = files.randomGet() || files[0];
            if (currentPlayingAudio) {
                try {
                    currentPlayingAudio.pause();
                    currentPlayingAudio.remove();
                } catch (err) { }
                currentPlayingAudio = null;
            }
            currentPlayingAudio = game.playAudio({
                path: playPath,
                rangekey: skill,
                onPlay: (ev) => {
                    if (token !== yeyeAudioToken) return;
                    currentPlayingAudioPath = playPath;
                },
                onEnded: (ev) => {
                    if (token !== yeyeAudioToken) return;
                    currentPlayingAudio = null;
                    currentPlayingAudioPath = "";
                },
                onError: (ev) => {
                    if (token !== yeyeAudioToken) return;
                    currentPlayingAudio = null;
                    currentPlayingAudioPath = "";
                    console.warn('语音播放失败：', playPath, ev);
                }
            });
        } catch (err) {
            console.error('语音播放逻辑异常：', err);
            currentPlayingAudio = null;
            currentPlayingAudioPath = "";
        } finally {
            delete _status.qhly_previewAudio;
        }
    };

    game.txhj_playAudioCall_yy = function (name, num, repeat) {
        if (!repeat) {
            if (num === undefined || num === null) {
                game.playAudio('..', 'extension', '永夜之境', 'source', 'mode', 'image', 'audio', name);
            } else {
                game.playAudio('..', 'extension', '永夜之境', 'source', 'mode', 'image', 'audio', name + Math.ceil(Math.random() * num));
            }
        } else {
            if (num === undefined || num === null) {
                game.txhj_playGameAudio_yy('..', 'extension', '永夜之境', 'source', 'mode', 'image', 'audio', name);
            } else {
                game.txhj_playGameAudio_yy('..', 'extension', '永夜之境', 'source', 'mode', 'image', 'audio', name + Math.ceil(Math.random() * num));
            }
        }
    };
    game.txhj_playGameAudio_yy = function () {
        if (_status.video && arguments[1] != 'video') return;
        var str = '';
        var onerror = null;
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'string' || typeof arguments[i] == 'number') {
                str += '/' + arguments[i];
            } else if (typeof arguments[i] == 'function') {
                onerror = arguments[i]
            }
            if (_status.video) break;
        }
        _status.skillaudio.add(str);
        game.addVideo('playAudio', null, str);
        setTimeout(function () {
            _status.skillaudio.remove(str);
        }, 1000);
        var audio = document.createElement('audio');
        audio.autoplay = true;
        audio.volume = lib.config.volumn_audio / 8;
        if (str.indexOf('.mp3') != -1 || str.indexOf('.ogg') != -1) {
            audio.src = lib.assetURL + 'audio' + str;
        } else {
            audio.src = lib.assetURL + 'audio' + str + '.mp3';
        }
        audio.addEventListener('ended', function () {
            this.remove();
        });
        audio.onerror = function () {
            if (this._changed) {
                this.remove();
                if (onerror) {
                    onerror();
                }
            } else {
                this.src = lib.assetURL + 'audio' + str + '.ogg';
                this._changed = true;
            }
        };
        ui.window.appendChild(audio);
        return audio;
    };
    /**
 * 检查图片文件是否存在
 * @param {string} group - 分组名称（拼接路径用）
 * @returns {Promise<boolean>} - 文件存在返回true，不存在返回false
 */
    game.checkImageExists_yy = function (path) {
        return new Promise((resolve) => {
            // 拼接完整图片路径
            const img = new Image();
            const imgPath = lib.assetURL + path;
            // 跨域/缓存处理（可选）
            img.crossOrigin = 'anonymous'; // 解决跨域图片加载问题
            img.src = imgPath + '?t=' + Date.now(); // 加时间戳避免缓存

            // 图片加载成功 → 文件存在
            img.onload = () => {
                resolve(true);
                // 释放资源
                img.onload = img.onerror = null;
            };

            // 图片加载失败 → 文件不存在
            img.onerror = () => {
                resolve(false);
                // 释放资源
                img.onload = img.onerror = null;
            };
        });
    }
}
export default precontent;
