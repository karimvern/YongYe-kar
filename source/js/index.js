import { lib, game, ui, get, ai, _status } from '../../../../noname.js';

export async function initExtraContent(config, pack) {

    //视频播放，参考《无名美化》
    Object.assign(lib.element.content, {
        /**
         * 播放视频通用函数 (ES6 Modern Version)
         * @param {string} src 视频路径
         * @param {object} config 配置对象
         * @param {function} onEnd 播放结束后的回调
         */
        xinxplayVideo(src, config = {}, onEnd) {
            // 获取全局开关设置 (如果没有设置过，默认为 true)
            let globalEnable = lib.config['extension_永夜之境_video_enable'];
            if (globalEnable === undefined) globalEnable = true; // 默认值
            // 2. 如果开关关闭，直接结束
            if (!globalEnable) {
                if (typeof onEnd === "function") {
                    onEnd(); // 立即执行回调，保证 await promise 能解除
                }
                return null; // 不返回 video 元素
            }

            //获取跳过设置
            const globalSkipSetting = lib.config['extension_永夜之境_video_skippable'];
            // 1. 定义默认配置
            const defaults = {
                zIndex: 5000,
                opacity: 1,
                pauseGame: true,
                skippable: false,
                style: {},
                objectFit: "cover",
                muted: false,
                volume: 1.0
            };

            // 2. 合并配置 (使用展开运算符，finalConfig 将包含最终设置)
            const finalConfig = { ...defaults, ...config };

            // 开关检查
            if (!globalSkipSetting) {
                finalConfig.skippable = false;
            }
            // 如果全局开关是“开启”的，并且技能代码里没传参，默认为可跳过
            else if (config.skippable === undefined) {
                finalConfig.skippable = true;
            }

            // 3. 处理路径 (使用 startsWith 判断)
            const videoSrc = (src.startsWith('http') || src.startsWith('file'))
                ? src
                : lib.assetURL + src;

            // 4. 创建视频元素 
            const video = document.createElement("video");
            video.src = videoSrc;
            video.preload = "auto";

            // 使用模板字符串设置样式
            video.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: none;
                z-index: ${finalConfig.zIndex};
                object-fit: ${finalConfig.objectFit};
                opacity: ${finalConfig.opacity};
            `;

            video.muted = finalConfig.muted;
            video.volume = finalConfig.volume;

            // 应用自定义样式覆盖
            if (finalConfig.style) {
                for (const key in finalConfig.style) {
                    video.style[key] = finalConfig.style[key];
                }
            }

            document.body.appendChild(video);

            // 5. 定义结束与清理逻辑 
            const finish = () => {
                if (video._finished) return;
                video._finished = true;

                // 淡出效果
                video.style.transition = "opacity 0.5s";
                video.style.opacity = 0;

                setTimeout(() => {
                    if (video.parentNode) document.body.removeChild(video);
                    // 恢复游戏
                    if (finalConfig.pauseGame) {
                        game.resume();
                    }

                    if (typeof onEnd === "function") {
                        onEnd();
                    }
                }, 500);
            };

            // 事件监听
            video.onended = finish;

            video.onerror = () => {
                console.error(`视频加载失败: ${videoSrc}`);
                finish();
            };

            // 点击跳过
            if (finalConfig.skippable) {
                video.onclick = finish;
                video.ontouchend = finish;
            }

            // 6. 定义播放逻辑
            const startPlay = () => {
                if (finalConfig.pauseGame) {
                    game.pause();
                }
                video.style.display = "block";

                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.warn("自动播放被拦截，尝试静音播放", error);
                        video.muted = true;
                        video.play();
                    });
                }
            };

            // 7. 触发播放
            video.oncanplay = () => {
                if (!video._loaded) {
                    video._loaded = true;
                    startPlay();
                }
            };

            // 处理缓存已加载的情况
            if (video.readyState >= 3) {
                video._loaded = true;
                startPlay();
            }

            return video;
        }
    });


    Object.assign(lib.element.content, {
        /**
         * 通用智能音乐播放函数 (支持随机/顺序/去重/广播)
         * @param {string|string[]} musicList 音乐文件名数组
         * @param {string} folderPath 文件夹路径
         * @param {object} config 配置: { auto: bool(自动续播), sequence: bool(顺序播放), tag: string(记录标识) }
         */
        xinxplayMusic(musicList, folderPath, config = {}) {
            // 1. 参数标准化
            const list = Array.isArray(musicList) ? musicList : [musicList];
            const isSingle = list.length === 1;

            // 默认配置
            const settings = {
                auto: false,      // 是否自动播放下一首
                sequence: false,  // 是否按顺序播放 (false=随机, true=顺序)
                tag: 'global',    // 历史记录标识
                volume: null,     // 音量 (0-1)
                ...config
            };

            // 2. 初始化主机端的历史记录
            if (!_status.xinxMusicHistory) _status.xinxMusicHistory = {};
            if (!_status.xinxMusicHistory[settings.tag]) {
                _status.xinxMusicHistory[settings.tag] = { last: null, played: [] };
            }

            const history = _status.xinxMusicHistory[settings.tag];
            let selection;

            // 3. 选曲核心逻辑
            if (isSingle) {
                selection = list[0];
            } else {
                // --- 顺序播放逻辑 ---
                if (settings.sequence) {
                    // 查找上一首在列表中的位置
                    const lastIndex = list.indexOf(history.last);
                    // 计算下一首 (如果没有上一首，lastIndex为-1，结果为0，即第一首)
                    // 使用取模 (%) 实现循环：最后一首的下一首变回第一首
                    const nextIndex = (lastIndex + 1) % list.length;
                    selection = list[nextIndex];
                }
                // --- 随机播放逻辑---
                else {
                    let candidates = list.filter(name => name !== history.last);
                    if (candidates.length === 0) candidates = list;

                    const unplayed = candidates.filter(name => !history.played.includes(name));

                    if (unplayed.length > 0) {
                        selection = unplayed.randomGet();
                    } else {
                        history.played = []; // 重置循环
                        selection = candidates.randomGet();
                    }
                }
            }

            // 4. 更新主机记录
            history.last = selection;
            if (!settings.sequence) history.played.push(selection); // 顺序模式不需要记录played列表

            // 5. 构建路径
            const cleanPath = folderPath.endsWith('/') ? folderPath : folderPath + '/';
            const fullUrl = lib.assetURL + cleanPath + selection + ".mp3";

            // 6. 全场广播
            // 注意：传入 selection 是为了让客户端也能更新自己的历史记录，保证下次自动切歌时顺序正确
            game.broadcastAll(function (url, selection, isSingle, settings, originalArgs) {
                // --- A. 更新客户端本地历史记录 ---
                //联机时，客户端需要知道当前播的是啥，才能算出下一首是啥
                if (!_status.xinxMusicHistory) _status.xinxMusicHistory = {};
                if (!_status.xinxMusicHistory[settings.tag]) {
                    _status.xinxMusicHistory[settings.tag] = { last: null, played: [] };
                }
                const localHistory = _status.xinxMusicHistory[settings.tag];
                localHistory.last = selection;
                if (!settings.sequence && !localHistory.played.includes(selection)) {
                    localHistory.played.push(selection);
                }

                // --- B. 播放音频 ---
                const audio = ui.backgroundMusic;
                if (settings.volume !== null) audio.volume = settings.volume;
                audio.src = url;

                // 清理旧监听
                if (audio._xinx_onend_handler) {
                    audio.removeEventListener('ended', audio._xinx_onend_handler);
                    delete audio._xinx_onend_handler;
                }

                // --- C. 自动续播处理 ---
                if (settings.auto) {
                    if (isSingle) {
                        audio.loop = true; // 单曲直接loop
                    } else {
                        audio.loop = false;
                        // 定义结束后的回调
                        audio._xinx_onend_handler = function () {
                            // 递归调用：使用相同的参数，再次进入函数
                            // 因为 update 了 localHistory.last，下次进来时会基于当前这首计算下一首
                            lib.element.content.xinxplayMusic(
                                originalArgs[0], // list
                                originalArgs[1], // path
                                originalArgs[2]  // config
                            );
                        };
                        audio.addEventListener('ended', audio._xinx_onend_handler);
                    }
                } else {
                    audio.loop = false;
                }

                audio.play().catch(e => console.log('BGM Play prevented', e));

            }, fullUrl, selection, isSingle, settings, [list, folderPath, config]);

            return selection;
        }
    });


    // ==========================================
    // 角色出牌语音注入模块
    // ==========================================
    const myExtension = "永夜之境";
    const charSuffixes = ["zhonghui", "guojia", 'duyu'];
    // 改用对象来分类存放不同角色的语音
    // { "zhonghui": ["sha", "nanman"], "xxxx": ["sha", "wuzhong"] }
    let customVoices = {};
    // ==========================================
    // 自动化读取所有角色的文件夹
    // ==========================================
    if (typeof require !== 'undefined') {
        try {
            const fs = require('fs');
            // 循环遍历每一个后缀
            for (let suffix of charSuffixes) {
                const audioDir = `${__dirname}/extension/${myExtension}/audio/${suffix}`;

                if (fs.existsSync(audioDir)) {
                    // 读取该角色文件夹下的 mp3
                    customVoices[suffix] = fs.readdirSync(audioDir)
                        .filter(file => file.toLowerCase().endsWith('.mp3'))
                        .map(file => file.slice(0, -4));

                    console.log(`[${myExtension}] 成功自动加载 ${suffix} 的专属语音：`, customVoices[suffix]);
                } else {
                    // 如果文件夹不存在，给个空数组防报错
                    customVoices[suffix] = [];
                }
            }
        } catch (err) {
            console.error(`[${myExtension}] 自动读取语音文件夹失败：`, err);
        }
    }

    // 兜底机制：如果没读取到任何东西（比如在手机端），启用手动配置的字典
    if (Object.keys(customVoices).length === 0) {
        // 手机端的兜底数组也按角色分开写
        customVoices = {
            "zhonghui": [
                "bingliang", "chiling", "diaohulishan", "guohe",
                "gz_guguoanbang", "gz_haolingtianxia", "gz_kefuzhongyuan",
                "huogong", "huoshaolianying", "jiedao", "jiu",
                "juedou", "lebu", "lianjunshengyan", "lulitongxin",
                "nanman", "sha", "shan", "shandian", "sha_fire",
                "sha_thunder", "shuiyanqijun", "shunshou", "tao",
                "taoyuan", "tiesuo", "wanjian", "wenhe", "wugu",
                "wuxie", "wuzhong", "yiyi", "yuanjiao", "zhibi"
            ],
            "guojia": [
                "bingliang", "diaohulishan", "guohe", "huogong", "jiedao",
                "jiu", "juedou", "lebu", "lianjunshengyan", "lulitongxin",
                "nanman", "sha", "shan", "shandian", "sha_fire", "sha_thunder",
                "shuiyanqijun", "shunshou", "tao", "taoyuan", "tiesuo", "wanjian",
                "wugu", "wuxie", "wuzhong", "yuanjiao", "zhibi",
            ],
            "duyu": [
                "bingliang", "chiling", "diaohulishan", "guohe",
                "gz_guguoanbang", "gz_haolingtianxia", "gz_kefuzhongyuan",
                "huogong", "huoshaolianying", "jiedao", "jiu",
                "juedou", "lebu", "lianjunshengyan", "lulitongxin",
                "nanman", "sha", "shan", "shandian", "sha_fire",
                "sha_thunder", "shuiyanqijun", "shunshou", "tao",
                "taoyuan", "tiesuo", "wanjian", "wenhe", "wugu",
                "wuxie", "wuzhong", "yiyi", "yuanjiao", "zhibi"
            ],

        };
        console.log(`[${myExtension}] 已启用兜底语音字典。`);
    }

    // ==========================================
    // 角色匹配函数：返回匹配到的具体【后缀名】
    // ==========================================
    const getMatchSuffix = function (name) {
        if (!name) return null;
        // 遍历所有配置的后缀，看看当前武将名是以哪个结尾的
        for (let suffix of charSuffixes) {
            if (name.endsWith(suffix)) {
                return suffix; // 返回匹配到的名字，比如 "zhonghui"
            }
        }
        return null;
    };

    // ==========================================
    // 拦截：动态替换出牌语音
    // ==========================================
    const originPlayAudio = game.playAudio;
    game.playAudio = function (...args) {
        // 【检查】：如果设置里关闭了开关，直接执行原版语音逻辑
        if (lib.config && lib.config.extension_永夜之境_custom_voice_switch === false) {
            return originPlayAudio.apply(this, args);
        }

        if (args[0] === 'card' && _status.event && _status.event.player) {
            const player = _status.event.player;

            // 获取到底是哪个后缀匹配上了（优先主将，其次副将1、2）
            const matchedSuffix = getMatchSuffix(player.name) || getMatchSuffix(player.name1) || getMatchSuffix(player.name2);

            // 如果匹配到了某个配置的后缀
            if (matchedSuffix) {
                const cardName = args.length >= 3 ? args[2] : args[1];
                // 去对应角色的专属语音列表里找，有没有这张牌
                if (customVoices[matchedSuffix] && customVoices[matchedSuffix].includes(cardName)) {
                    // 自动拼装路径：ext:永夜之境/audio/匹配到的名字/卡牌名.mp3
                    return originPlayAudio.call(this, `ext:${myExtension}/audio/${matchedSuffix}/${cardName}.mp3`);
                }
            }
        }
        // 条件不满足，走原版逻辑
        return originPlayAudio.apply(this, args);
    };
    // ==========================================
    //附加功能：在技能中手动触发
    // ==========================================
    Object.assign(lib.element.content, {
        // step.playMyAudio('zhonghui', 'nanman')
        playMyAudio: function (suffixName, cardName) {
            if (customVoices[suffixName] && customVoices[suffixName].includes(cardName)) {
                game.playAudio(`ext:${myExtension}/audio/${suffixName}/${cardName}.mp3`);
            }
        }
    });

    // ==========================================
    //武将资料页：技能台词快速播放按钮（点击圆形按钮播放对应台词）
    // ==========================================
    const xinxHookVoiceQuickPlay = (dialog) => {
        if (!dialog || dialog._xinxVoiceHooked) return;
        dialog._xinxVoiceHooked = true;
        const getAudioList = (type, skill) => {
            const active = dialog.querySelector('.characterskill .active');
            if (!active) return [];
            const avatar = dialog.querySelector('.avatar');
            const skinName = (avatar && avatar.tempSkin) || active.linkAudioName;
            const player = { name: active.linkname, skin: { name: skinName }, tempname: [skinName] };
            if (type == 'die') {
                return get.Audio.die({ player }).audioList.filter(item => item.text != void 0);
            }
            return get.Audio.skill({ skill, player }).audioList.filter(item => item.text != void 0);
        };
        const injectVoiceButtons = () => {
            const intro2 = dialog.querySelector('.intro2');
            if (!intro2) return;
            const active = dialog.querySelector('.characterskill .active');
            const mainList = active && active.link != 'dieAudios' ? getAudioList('skill', active.link) : [];
            const dieList = active ? getAudioList('die') : [];
            const derivationMap = new Map();
            if (active && active.link != 'dieAudios') {
                const info = get.info(active.link);
                const derivations = info && info.derivation ? (typeof info.derivation == 'string' ? [info.derivation] : info.derivation) : [];
                for (const skill of derivations) {
                    if (skill && skill.indexOf('_faq') == -1 && get.info(skill)) {
                        derivationMap.set(get.translation(skill), getAudioList('skill', skill));
                    }
                }
            }
            let currentList = null;
            for (const child of Array.from(intro2.children)) {
                if (!child || child.dataset.xinxVoiceLine) continue;
                const text = child.textContent || '';
                const trimmed = text.trim();
                if (/^\d+\.\s/.test(trimmed)) {
                    if (currentList) {
                        const index = parseInt(trimmed.match(/\d+/)[0], 10) - 1;
                        const audioItem = currentList[index];
                        if (audioItem && audioItem.file) {
                            child.dataset.xinxVoiceLine = '1';
                            const btn = document.createElement('span');
                            btn.style.cssText = 'display:inline-block;width:16px;height:16px;border-radius:50%;background:rgba(255,107,107,0.9);color:#fff;font-size:10px;line-height:16px;text-align:center;cursor:pointer;user-select:none;vertical-align:middle;margin-right:5px;';
                            btn.textContent = '▶';
                            btn.onclick = (evt) => {
                                evt.stopPropagation();
                                game.playAudio(audioItem.file);
                            };
                            const br = child.querySelector('br');
                            child.insertBefore(btn, br ? br.nextSibling : child.firstChild);
                        }
                    }
                } else if (trimmed == '技能台词') {
                    currentList = mainList;
                } else if (trimmed == '阵亡台词') {
                    currentList = dieList;
                } else {
                    const match = trimmed.match(/^(.+?)台词$/);
                    if (match && derivationMap.has(match[1])) {
                        currentList = derivationMap.get(match[1]);
                    }
                }
            }
        };
        const observer = new MutationObserver(injectVoiceButtons);
        observer.observe(dialog, { childList: true, subtree: true });
        injectVoiceButtons();
    };
    const originCharactercard = ui.click.charactercard;
    ui.click.charactercard = function (...args) {
        const result = originCharactercard.apply(this, args);
        if (lib.config.extension_永夜之境_voice_quick_play !== false) {
            const dialogs = document.querySelectorAll('.menubg.charactercard');
            if (dialogs.length) {
                xinxHookVoiceQuickPlay(dialogs[dialogs.length - 1]);
            }
        }
        return result;
    };



    

}
