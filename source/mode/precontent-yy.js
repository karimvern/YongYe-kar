'use strict';
import { lib, game, ui, get, ai, _status } from "../../../../noname.js";

const precontent = function () {
    let currentPlayingAudio = null;
    let currentPlayingAudioPath = "";
    game.txhj_TrySkillAudio_yy = function (skill, player, directaudio, which, skin) {
        if (_status.qhly_viewRefreshing) return;

        if (currentPlayingAudio && !currentPlayingAudio.ended) return;
        var info = get.info(skill);
        if (!info) return;
        _status.qhly_previewAudio = true;
        try {
            var audioname = skill;
            if (info.audioname2 && info.audioname2[player.name]) {
                audioname = info.audioname2[player.name];
                info = lib.skill[audioname];
            }
            var audioinfo = info?.audio;
            if (!audioinfo) return;
            if (typeof audioinfo == 'string' && lib.skill[audioinfo]) {
                audioname = audioinfo;
                audioinfo = lib.skill[audioname].audio;
            }

            let playPath = "";
            let isExtensionAudio = false;
            if (typeof audioinfo == 'string') {
                if (audioinfo.indexOf('ext:') == 0) {
                    isExtensionAudio = true;
                    audioinfo = audioinfo.split(':');
                    if (audioinfo.length == 3) {
                        let playName = audioname;
                        if (audioinfo[2] != 'true') {
                            audioinfo[2] = parseInt(audioinfo[2]);
                            if (audioinfo[2]) {
                                playName = typeof which == 'number'
                                    ? audioname + (which % audioinfo[2] + 1)
                                    : audioname + Math.ceil(audioinfo[2] * Math.random());
                            }
                        }
                        playPath = `ext:${audioinfo[1]}/${playName}`;
                    }
                }
            } else if (Array.isArray(audioinfo)) {
                audioname = audioinfo[0];
                audioinfo = audioinfo[1];
            }

            if (Array.isArray(info.audioname) && player) {
                if (info.audioname.includes(player.name)) {
                    audioname += '_' + player.name;
                } else if (info.audioname.includes(player.name1)) {
                    audioname += '_' + player.name1;
                } else if (info.audioname.includes(player.name2)) {
                    audioname += '_' + player.name2;
                }
            }

            if (!playPath) {
                let playName = audioname;
                if (typeof audioinfo == 'number') {
                    playName = typeof which == 'number'
                        ? audioname + (which % audioinfo + 1)
                        : audioname + Math.ceil(audioinfo * Math.random());
                }
                playPath = `skill/${playName}`;
            }

            if (playPath) {
                if (currentPlayingAudio) {
                    currentPlayingAudio.pause();
                    currentPlayingAudio.remove();
                }
                currentPlayingAudio = game.playAudio({
                    path: playPath,
                    rangekey: skill,
                    onPlay: (ev) => {
                        currentPlayingAudioPath = playPath;
                        //  console.log('音频开始播放：', playPath);
                    },
                    onEnded: (ev) => {
                        currentPlayingAudio = null;
                        currentPlayingAudioPath = "";
                        // console.log('音频播放结束：', playPath);
                    },
                    onError: (ev) => {
                        currentPlayingAudio = null;
                        currentPlayingAudioPath = "";
                        console.error('音频播放出错：', playPath, ev);
                    }
                });
            }
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
