'use strict';
import { lib, game, ui, get, ai, _status } from "../../../../noname.js";
import globalSkill from "./globalskill-yy.js";
import { YEYE_INTRO, yeyePickAlly } from "./yeyeUI.js";
import {
    YEYE_RULES,
    YEYE_BUFFS,
    YEYE_SHOP_PLAN,
    yeyeIsBossStage,
    yeyeAddBuff,
    yeyeActiveSkills,
    yeyeScaled,
    yeyeRemoveBuff,
    yeyeMarkName,
    yeyeArenaLayout,
    yeyeDuelModeEnabled,
    // 【新增】商店限购与递增价格的计算函数（数值在 yeyeConst.js 的 YEYE_RULES）
    yeyeShopPrice,
    yeyeRefreshPrice,
    yeyeShopLimitReached,
    yeyeBuffBasePrice,
} from "./yeyeConst.js";
import {
    yeyeOpenServantPanel,
    yeyeActiveServant,
    yeyeApplyServantSkills,
} from "./yeyeServant.js";
// [旧样式层] 可选：把页面切回旧素材，全部实现在 yeyeSkin/ 里；删除该文件夹即可整体移除
import { YEYE_LEGACY_CONFIG, applyLegacyAssets, applyAssetTier } from "./yeyeSkin/yeyeSkin.js";
import { yeyeMakeSortable } from "./yeyeSkillDrag.js";
//势力框图片（永夜之境自建势力 xinx/xing 也有兜底）
function yeyeName2Image(group) {
    const known = ['wei', 'shu', 'wu', 'qun', 'jin', 'shen', 'unknown', 'xinx', 'xing'];
    if (!known.includes(group)) group = 'unknown';
    return 'extension/永夜之境/source/mode/image/style/name2_' + group + '.png';
}
const mode = function () {
    game.addMode('wujin_yongye', {
        name: 'wujin_yongye',
        splash: 'ext:永夜之境/source/mode/image/wujin.jpg',
        start: async function () {
            _status.mode = 'wujin_yongye';
            //“玉璧系统”默认开启：老存档若记录为关闭，这里做一次迁移，玩家之后仍可手动关掉
            try {
                if (
                    lib.config.mode_config &&
                    lib.config.mode_config.wujin_yongye &&
                    lib.config.mode_config.wujin_yongye.jade !== true &&
                    !lib.config.yeyeJadeDefaultOn
                ) {
                    lib.config.yeyeJadeDefaultOn = true;
                    game.saveConfig('yeyeJadeDefaultOn', true);
                    game.saveConfig('jade', true, 'wujin_yongye');
                }
            } catch (e) {
                console.warn('玉璧系统默认开启迁移失败:', e);
            }
            const checkResult = game.checkResult;
            //保存原有checkResult函数，防止长安神贾诩之类的覆盖
            Object.defineProperty(game, 'checkResult', {
                get() {
                    return checkResult;
                },
                set(){

                },
                configurable: false,
                enumerable: true
            });
            //旧存档没有 runVersion：重置本局进度（updateWujinYongyeData 会保留玉璧与常用武将）
            if (lib.config.wujinYongyeData == undefined || lib.config.wujinYongyeData.runVersion !== 1) {
                game.updateWujinYongyeData();
            }
            _status.yeyeGame = {
                number: 2,
                buff: [],
                enemy: [],
                enemyBuffs: [],
                skills: [],
                return: null,
            }
            game.pause();
            const yeyeSave = lib.config.wujinYongyeData;
            if (yeyeSave.pack == null) {
                game.yeyeChooseEnemyPool();
            } else if (yeyeSave.name == null) {
                game.wujinYongyeHome();
            } else if ((yeyeSave.barrier || 1) > YEYE_RULES.totalStages) {
                //已经打完最后一关，进入通关结算
                game.yeyeVictory();
            } else {
                game.wujinYongyeData();
            }
            game.chooseCharacterWujinYongye();
        },
        init: function () {
            document.interval = setInterval(function () {
                if (_status.modeNode == undefined) return;
                if (_status.modeNode.score == undefined) return;
                if (_status.modeNode.score.time == undefined) return;
                if (_status.gameStart == true && _status.enterGame == true) {
                    _status.modeNode.score.time++;
                }
            }, 1000);
        },
        game: {
            updateWujinYongyeData: function () {//初始化数据
                if (!lib.config.wujinYongyeData) {
                    lib.config.wujinYongyeData = {};
                }
                let savejade = lib.config.wujinYongyeData.jade || 0;
                let saveuse = lib.config.wujinYongyeData.use || {};
                delete lib.config.wujinYongyeData;
                lib.config.wujinYongyeData = {
                    runVersion: 1,/*存档版本：旧存档读到会重置本局（保留玉璧/常用武将）*/
                    name: null,/*当前角色*/
                    point: null,/*当前点将*/
                    use: saveuse || {},/*常用武将*/
                    hp: 0,/*武将当前体力*/
                    maxHp: 0,/*武将体力上限*/
                    coin: 8,/*功勋*/
                    jade: savejade || 0,/*玉璧*/
                    minHs: 0,/*手牌上限*/
                    level: 1,/*当前等级*/
                    adjust: 3,/*手气卡*/
                    buff: [],/*强化buff*/
                    skill: [],/*当前技能*/
                    score: {/*得分统计*/
                        gaincard: 0,
                        usecard: 0,
                        discard: 0,
                        damage: 0,
                        damaged: 0,
                        kill: 0,
                        skill: 0,
                        round: 0,
                        fight: 0,
                        time: 0,
                    },
                    shop: {
                        buff: [],
                        skill: [],
                    },/*当前商店*/
                    revive: 1,/*复活点数*/
                    barrier: 1,/*当前关卡*/
                    pack: null,/*敌人将池*/
                    packName: null,/*敌人将池名称*/
                    enemyPool: [],/*敌人将池剩余武将（一次性消耗）*/
                    enemyPoolAll: [],/*敌人将池完整名单（耗尽时用来重洗）*/
                    servants: [],/*本局获得的侍灵 [{id, level}]*/
                    servantActive: null,/*当前出战的侍灵 id*/
                    node: null,/*本关已选节点*/
                    nodeCandidates: [],/*本关的节点候选*/
                    eventHistory: [],/*本局已触发过的奇遇（避免重复）*/
                    pendingEvent: null,/*本关已抽到的奇遇（关闭后重进不刷新）*/
                    coinLog: [],/*本局功勋获取记录（商店界面「记录」查看）*/
                    nextStageBonus: 0,/*接下来 N 关每关额外功勋*/
                    pendingEnemyDelta: 0,/*下一场战斗敌人数量增减*/
                    pendingMarkBonus: 0,/*下一场战斗敌人额外刻印数*/
                    pendingWinBonus: 0,/*下一场战斗胜利额外功勋*/
                    pendingEquipCards: 0,/*下一场战斗开局额外临时装备牌*/
                    freeReviveOnce: false,/*本局首次失败不消耗复活*/
                    // 【新增】商店限购与刷新翻倍的每关计数（进入下一关会自动清零，见 prepare.js 的 yeyeResetStageShop）
                    stageBought: { skill: 0, buff: 0 },/*本关已购买次数：技能/强化各记一份*/
                    stageRefresh: 0,/*本关已刷新次数*/
                };
                game.saveConfig('wujinYongyeData', lib.config.wujinYongyeData);
                return lib.config.wujinYongyeData;
            },
            yeyeVictory: function (home, homeBody) {//打完最后一关，通关结算
                const data = lib.config.wujinYongyeData;
                const rewardJade = Math.min(data.barrier || YEYE_RULES.totalStages, YEYE_RULES.totalStages) * 10;
                game.txhj_playAudioCall_yy('Win', null, true);
                if (home) home.delete();
                if (homeBody) game.yyUIupdata(homeBody, false);
                document.querySelectorAll('.yeye_Home').forEach(el => el.remove());
                const str = `你闯过了 ${YEYE_RULES.totalStages} 关永夜，恭喜通关！<br>当前结算可获得玉璧${rewardJade}枚。`;
                const view = ui.create.div('.yeye_Home');
                document.body.appendChild(view);
                game.purchasePrompt_yy('通关', str, view, (bool) => {
                    if (bool) {
                        let timeID = (new Date()).getTime();
                        data.time = timeID;
                        if (!lib.config.wujinYongyeRecord) lib.config.wujinYongyeRecord = {};
                        lib.config.wujinYongyeRecord[timeID] = data;
                        data.jade += rewardJade;
                        game.saveConfig('wujinYongyeRecord', lib.config.wujinYongyeRecord);
                        game.updateWujinYongyeData();
                        _status.yeyeGame.return = false;
                        setTimeout(function () {
                            game.reload();
                        }, 500);
                    } else {
                        window.location.reload();
                    }
                });
                return false;
            },
            wujinYongyeHome: function () {//主界面
                let home = ui.create.div('.yeye_Home');
                document.body.appendChild(home);
                let homeBody = ui.create.div('.yeye_HomeBody', home);
                game.yyHomeButton(home);
                _status.choiceCharacter = undefined;

                if (window.decadeUI) {
                    [
                        '#system2',
                        '.lbtn-paixu',
                        '.lbtn-controls',
                        '.latn-jilu',
                        'img[src="extension/十周年UI/ui/assets/lbtn/uibutton/liaotian.png"]',
                        'img[src="extension/十周年UI/shoushaUI/lbtn/images/uibutton/liaotian.png"]'
                    ].forEach(selector => {
                        const el = document.querySelector(selector);
                        if (el) {
                            el.style.setProperty('display', 'none', 'important');
                        }
                    });
                }
                game.yyUIupdata(homeBody, true);
                let body = ui.create.div('.yeye_HomeBodyBackground1', homeBody);
                //背景与「选择获得侍从」页统一：不用 img_select_general_bg 这张专属底图
                body.style.backgroundImage = 'none';
                //===== 选将页面头部：标题 + 正则搜索（与侍从界面同款） =====
                ui.create.div('.yeye_ServantTitle', '选择武将', body);
                const yeyeSearchBar = ui.create.div('.yeye_ServantSearchBar', body);
                const yeyeSearchInput = document.createElement('input');
                yeyeSearchInput.className = 'yeye_ServantSearchInput';
                yeyeSearchInput.type = 'text';
                yeyeSearchInput.placeholder = '支持正则搜索（武将名 / 技能）';
                yeyeSearchBar.appendChild(yeyeSearchInput);
                const yeyeSearchBtn = ui.create.div('.yeye_ServantSearchBtn', '搜索', yeyeSearchBar);
                let yeyeChoiceEntries = [];
                //搜索命中过多时只显示前若干个，避免一次渲染上千张牌
                const YEYE_SEARCH_LIMIT = 60;
                function yeyeCharSearchText(name) {
                    let text = [name, get.translation(name), get.translation(name + '_ab')].join(' ');
                    const info = lib.character[name];
                    const skills = (info && info[3]) || [];
                    skills.forEach(skill => {
                        text += ' ' + (lib.translate[skill] || '') + ' ' + (lib.translate[skill + '_info'] || '');
                    });
                    return text;
                }
                function yeyeRenderChoices(names) {
                    characterBody.innerHTML = '';
                    characterBody.choosingNow = null;
                    yeyeChoiceEntries = [];
                    names.forEach(name => {
                        const card = func(name);
                        characterBody.appendChild(card);
                        yeyeChoiceEntries.push({ name: name, card: card });
                    });
                    if (lib.config.extension_永夜之境_yeyeTextSizeOn === true) {
                        game.applyandroidSize_yy(characterBody);
                    }
                }
                //正则搜索：范围为全部武将（不是只过滤当前候选）
                function yeyeSearchChoices() {
                    const raw = (yeyeSearchInput.value || '').trim();
                    if (!raw) {
                        refreshCharacterChoices();
                        return;
                    }
                    let reg = null;
                    try {
                        reg = new RegExp(raw, 'i');
                    } catch (e) {
                        reg = null;
                    }
                    const low = raw.toLowerCase();
                    const matched = list.filter(name => {
                        const text = yeyeCharSearchText(name);
                        return reg ? reg.test(text) : text.toLowerCase().indexOf(low) >= 0;
                    }).slice(0, YEYE_SEARCH_LIMIT);
                    yeyeRenderChoices(matched);
                }
                yeyeSearchInput.onkeydown = function (event) {
                    event.stopPropagation();
                    if (event.key === 'Enter') yeyeSearchChoices();
                };
                yeyeSearchInput.onmousedown = function (event) {
                    event.stopPropagation();
                };
                yeyeSearchBtn.addEventListener('click', function (event) {
                    yeyeSearchChoices();
                    event.stopPropagation();
                });
                let icon0 = (function () {
                    let clickPrompt = ui.create.div('.yeye_icon0', '更换', body);
                    clickPrompt.style.left = '48%';
                    clickPrompt.addEventListener("click", function (event) {
                        game.txhj_playAudioCall_yy('WinButton', null, true);
                        yeyeSearchInput.value = '';
                        refreshCharacterChoices();
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });

                    return clickPrompt;
                })();
                let icon1 = (async function () {
                    let clickPrompt = ui.create.div('.yeye_icon1', '自由选将', body);
                    clickPrompt.style.left = '66%';
                    clickPrompt.addEventListener("click", async function () {
                        if (lib.config.wujinYongyeData && lib.config.wujinYongyeData.name != null) {
                            game.messagePopup_yy('请完成当前挑战');
                            return;
                        }
                        if (lib.config.wujinYongyeData.name == null) {
                            await game.yeyeChooseCharacter(home, homeBody);
                        };
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });

                    return clickPrompt;
                })();
                let icon2 = (function () {
                    let clickPrompt = ui.create.div('.yeye_icon2', `${lib.config.wujinYongyeData.name == null ? '确定' : '继续'}`, body);
                    clickPrompt.style.left = '34%';
                    clickPrompt.addEventListener("click", function (event) {
                        if (lib.config.wujinYongyeData.name == null) {
                            if (_status.choiceCharacter) {
                                const characterKey = _status.choiceCharacter;
                                lib.config.wujinYongyeData.name = characterKey;
                                lib.config.wujinYongyeData.use[characterKey] = (lib.config.wujinYongyeData.use[characterKey] || 0) + 1;
                                //记录到本模式的「最近使用」武将（自由选将界面“最近”页读的就是它）
                                try {
                                    if (typeof game.addRecentCharacter === 'function') game.addRecentCharacter(characterKey);
                                } catch (e) { }
                                lib.config.wujinYongyeData.skill = lib.character[characterKey]?.skills;
                                lib.config.wujinYongyeData.maxHp = lib.character[characterKey]?.maxHp;
                                lib.config.wujinYongyeData.hp = lib.character[characterKey]?.hp;
                                game.saveConfig('wujinYongyeData', lib.config.wujinYongyeData);
                                home.delete();
                                game.yyUIupdata(homeBody, false);
                                //选完武将后先插入「选择获得侍从」，再进入商店
                                if (typeof game.yeyeStartServantSelect === 'function') {
                                    game.yeyeStartServantSelect(() => game.wujinYongyeData());
                                } else {
                                    game.wujinYongyeData();
                                }
                            } else {
                                game.messagePopup_yy('请选择使用的武将');
                            }
                        } else {
                            home.delete();
                            game.yyUIupdata(homeBody, false);
                            game.wujinYongyeData();
                        }
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });

                    return clickPrompt;
                })();
                let playBody = ui.create.div('.yeye_playBody', body);
                //改用侍从界面的版式后不再显示左侧技能预览（右键武将牌仍可查看技能）
                playBody.style.display = 'none';
                //let textBody = ui.create.div('.yeye_textBody', '请选择本次永夜将临使用的武将', body);

                let playBodySkills = ui.create.div('.yeye_chooseCharacterPlayBodySkills', playBody);

                lib.setScroll(playBodySkills);
                playBody.update = function (name) {
                    game.txhj_playAudioCall_yy('PopUp', null, true);
                    setTimeout(function () {
                        playBodySkills.innerHTML = '';
                        //     playBodyDiv.style.animationName = 'none';
                        //     playBodyDiv.style.opacity = '1';
                        var intro = lib.character[name];
                        if (!intro) {
                            for (var i in lib.characterPack) {
                                if (lib.characterPack[i][name]) {
                                    intro = lib.characterPack[i][name];
                                    break;
                                }
                            }
                        }
                        var skillsComps = {
                            playName: (function () {
                                var info = lib.translate[name];
                                var playName = ui.create.div('.yeye_chooseCharacterPlayBodySkills1');

                                playName.innerHTML = lib.translate[intro[1]] + '.' + info;
                                if (intro[1] == 'wei') {
                                    playName.style.color = '#1E90FF';
                                } else if (intro[1] == 'shu') {
                                    playName.style.color = '#FF7F24';
                                } else if (intro[1] == 'wu') {
                                    playName.style.color = '#76EE00';
                                } else if (intro[1] == 'qun') {
                                    playName.style.color = '#FFFF00';
                                } else if (intro[1] == 'jin') {
                                    playName.style.color = '#9400D3';
                                } else {
                                    playName.style.color = '#FF0000';
                                }
                                return playName;
                            })(),
                            playHp: (function (hp) {
                                var playHp = ui.create.div('.yeye_chooseCharacterPlayBodySkills2');
                                if (typeof hp != 'number') {
                                    var hp1 = get.infoHp(hp);
                                    var hp2 = hp1;
                                    var maxHp1 = get.infoMaxHp(hp);
                                    if (hp1 < 16 && maxHp1 < 16) {
                                        var num = maxHp1 - hp1;
                                        while (hp1--) {
                                            var tmp = ui.create.div(".yeye_chooseCharacterPlayBodyHpICON", playHp);
                                            if (hp2 > 2) {
                                                tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass1.png');
                                            } else if (hp2 > 1) {
                                                tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass2.png');
                                            } else if (hp2 > 0) {
                                                tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass3.png');
                                            }
                                        }
                                        while (num--) {
                                            var tmp = ui.create.div(".yeye_chooseCharacterPlayBodyHpICON", playHp);
                                            tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass4.png');
                                        }
                                    } else {
                                        var tmp = ui.create.div(".yeye_chooseCharacterPlayBodyHpICON", playHp);
                                        tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass1.png');
                                        var numbody = ui.create.div(".yeye_chooseCharacterPlayBodyHpNum", hp + '', playHp);
                                    }
                                } else if (hp <= 15) {
                                    var num = hp;
                                    while (num--) {
                                        var tmp = ui.create.div(".yeye_chooseCharacterPlayBodyHpICON", playHp);
                                        tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass1.png');
                                    }
                                } else if (hp == Infinity) {
                                    var tmp = ui.create.div(".yeye_chooseCharacterPlayBodyHpICON", playHp);
                                    tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass1.png');
                                    var numbody = ui.create.div(".yeye_chooseCharacterPlayBodyHpNum", '∞', playHp);
                                } else {
                                    var tmp = ui.create.div(".yeye_chooseCharacterPlayBodyHpICON", playHp);
                                    tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass1.png');
                                    var numbody = ui.create.div(".yeye_chooseCharacterPlayBodyHpNum", hp + '', playHp);
                                }
                                return playHp;
                            })(intro[2]),
                            playSkills: (function () {
                                var skillInfo = "";
                                var skills = get.character(name, 3).slice(0);
                                for (var i = 0; i < skills.length; i++) {
                                    if (skillInfo != "") skillInfo += "<p>";
                                    skillInfo += "<br>" + get.translation([skills[i]]) + ":";
                                    skillInfo += lib.translate[skills[i] + '_info'];
                                }
                                var playSkills = ui.create.div('.yeye_chooseCharacterPlayBodySkills3');

                                playSkills.innerHTML = skillInfo;
                                return playSkills;
                            })(),
                        }
                        for (var i in skillsComps) {
                            playBodySkills.appendChild(skillsComps[i]);
                        }
                        if (lib.config.extension_永夜之境_yeyeTextSizeOn === true) {
                            game.applyandroidSize_yy(playBodySkills);
                        }
                    }, 300);
                };
                let characterBody = ui.create.div('.yeye_chooseCharacterCharacterBody', body);
                lib.setScroll(characterBody);
                function func(name) {
                    var div = ui.create.div('.yeye_chooseCharacterDiv');
                    game.addCharacterYeyeDivMobile(name, true, div);
                    div.listen(function (e) {
                        game.txhj_playAudioCall_yy('WinButton', null, true);
                        var skills = get.character(name, 3).slice(0);
                        game.txhj_TrySkillAudio_yy(skills.randomGet(), { name: name }, null, [1, 2].randomGet());
                        if (characterBody.choosingNow) {
                            characterBody.choosingNow.noChoiced();
                        }
                        this.choiced();
                        div.style.boxShadow = '-5px 0px 5px rgba(0,255,0,0.75),0px -5px 5px rgba(0,255,0,0.75),5px 0px 5px rgba(0,255,0,0.75),0px 5px 5px rgba(0,255,0,0.75)';
                        if (_status.choiceCharacter != name) {
                            _status.choiceCharacter = name;
                            playBody.update(name);
                        }
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });
                    div.oncontextmenu = function (e) {
                        game.txhj_playAudioCall_yy('WinButton', null, true);
                        game.pause2();
                        ui.click.charactercard(name, null, null, true, this);
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    };
                    div.choiced = function () {
                        characterBody.choosingNow = this;
                        div.style.boxShadow = '-5px 0px 5px rgba(255,255,0,0.75),0px -5px 5px rgba(255,255,0,0.75),5px 0px 5px rgba(255,255,0,0.75),0px 5px 5px rgba(255,255,0,0.75)';
                    };
                    div.noChoiced = function () {
                        characterBody.choosingNow = null;
                        div.style.boxShadow = 'none';
                    };
                    div.onmouseover = function () {
                        if (_status.choiceCharacter == undefined || _status.choiceCharacter != name) {
                            div.style.boxShadow = '-5px 0px 5px rgba(255,255,0,0.75),0px -5px 5px rgba(255,255,0,0.75),5px 0px 5px rgba(255,255,0,0.75),0px 5px 5px rgba(255,255,0,0.75)';
                        };
                    };
                    div.onmouseout = function () {
                        if (_status.choiceCharacter == undefined || _status.choiceCharacter != name) {
                            div.style.boxShadow = 'none';
                        };
                    };
                    return div;
                };

                var list = [];
                const disabledCharacters = new Set(Object.keys(lib.character).filter(lib.filter.characterDisabled));
                const pointCharacter = lib.config.wujinYongyeData?.point;
                for (const i in lib.character) {
                    if (disabledCharacters.has(i) || !lib.character[i] || (pointCharacter && i === pointCharacter)) {
                        continue;
                    }
                    list.push(i);
                }
                function appendCharacters(characterBody, list2, func) {
                    while (list2.length) {
                        var name = list2.shift();
                        if (name != null) {
                            characterBody.appendChild(func(name));
                        }
                    }
                }
                //候选武将：上次点将的武将 + 随机武将，共两行、每行 6 个；点「更换」重新刷新
                function refreshCharacterChoices() {
                    let point = lib.config.wujinYongyeData.point || null;
                    let list2 = point ? [point] : [];
                    //默认显示 12 名候选（有上次点将的武将时它排在第 1 个）
                    list2 = list2.concat(list.randomGets(12 - list2.length)).filter(Boolean);
                    list2 = list2.filter((name, index) => list2.indexOf(name) === index);
                    yeyeRenderChoices(list2);
                }
                refreshCharacterChoices();
                if (lib.config.extension_永夜之境_yeyeTextSizeOn === true) {
                    game.applyandroidSize_yy(homeBody);
                }
            },
            addCharacterYeyeDivMobile: function (name, packs, view) {//创建角色ui
                let div = ui.create.div('.yeye_characterDivMobile', view);
                let intro = lib.character[name];
                if (!intro) {
                    for (let i in lib.characterPack) {
                        if (lib.characterPack[i][name]) {
                            intro = lib.characterPack[i][name];
                            break;
                        }
                    }
                }
                let rarity = game.getRarity(name);
                let star, tmp;
                switch (rarity) {
                    case 'legend': star = 5; break;
                    case 'epic': star = 4; break;
                    case 'rare': star = 3; break;
                    case 'common': star = 2; break;
                    default: star = 1;
                }
                let bg = ui.create.div('.yeye_consoledeskPlayBg');
                bg.setBackgroundImage(yeyeName2Image(intro[1]));

                let imp = ui.create.div('.yeye_consoledeskPlayImp2');
                imp.classList.add("qh-not-replace");
                imp.setBackground(name, 'character');
                const str = imp.style.backgroundImage;
                if (!str) return;
                if (lib.device === 'ios' || lib.device === 'android') {
                    if (str && str.trim() !== '') {
                        tmp = str.split('(')[1].split(')')[0];
                        if (tmp.indexOf('"') > -1) {
                            tmp = tmp.split('"')[1].split('"')[0];
                        } else {
                            tmp = tmp.split('"')[0];
                        }
                    }
                }

                let firstPromise = new Promise(function (resolve) {
                    let img = new Image();
                    img.src = lib.assetURL + decodeURI(tmp);
                    if (lib.device === 'ios' || lib.device === 'android') {
                        img.src = tmp;
                    }
                    img.onload = function () {
                        let canvas = document.createElement('canvas');
                        let context = canvas.getContext('2d');
                        canvas.width = this.width;
                        canvas.height = this.height;
                        context.drawImage(img, 0, 0);
                        let imageData = context.getImageData(0, 0, 50, 50).data;
                        let isAlphaBackground = 0;
                        for (let index = 3; index < 100; index += 4) {
                            if (imageData[index] !== 255) {
                                isAlphaBackground++;
                                if (isAlphaBackground >= 25) {
                                    resolve();
                                    break;
                                }
                            }
                        }
                    };
                });

                firstPromise.then(function () {
                    imp.style.backgroundImage = 'none';
                    let imp2 = ui.create.div('.yeye_consoledeskPlayImpL', imp);
                    imp2.setBackground(name, 'character');
                });

                let namebody = ui.create.div(".yeye_characterDivMobileName", lib.translate[name]);

                let rankBody = ui.create.div(".yeye_characterDivMobileRankBody");
                while (star--) {
                    let starIcon = ui.create.div(".yeye_characterDivMobileStarICON", rankBody);
                }

                div.appendChild(bg);
                div.appendChild(imp);
                div.appendChild(namebody);
                div.appendChild(rankBody);
                if (lib.config.extension_永夜之境_yeyeTextSizeOn === true) {
                    game.applyandroidSize_yy(div);
                }
            },
            wujinYongyeData: function () {//商店界面
                const home = ui.create.div('.yeye_Home');
                document.body.appendChild(home);
                if (!_status.choiceShop || !_status.choiceType) {
                    _status.choiceShop = undefined;
                    _status.choiceType = undefined;
                }
                if (window.decadeUI) {
                    [
                        '#system2',
                        '.lbtn-paixu',
                        '.lbtn-controls',
                        '.latn-jilu',
                        'img[src="extension/十周年UI/ui/assets/lbtn/uibutton/liaotian.png"]',
                        'img[src="extension/十周年UI/shoushaUI/lbtn/images/uibutton/liaotian.png"]'
                    ].forEach(selector => {
                        const el = document.querySelector(selector);
                        if (el) {
                            el.style.setProperty('display', 'none', 'important');
                        }
                    });
                }
                game.yyHomeButton(home);
                const wujinYongyeData = lib.config.wujinYongyeData;
                const homeBody = ui.create.div('.yeye_HomeBody', home);
                game.yyUIupdata(homeBody, true);
                //强化表与商店上架数量统一放在 yeyeConst.js 里，方便调平衡
                const buffList = YEYE_BUFFS;
                const shopList = YEYE_SHOP_PLAN;
                const body = ui.create.div('.yeye_HomeBodyBackground2', homeBody);
                const textBody = ui.create.div('.yeye_DataTextBody', `第${wujinYongyeData.barrier}关`, body);
                const topBar = ui.create.div('.yeye_DataTop-bar', body);
                const leftTop = ui.create.div('.yeye_DataTop-left', topBar);
                const rightTop = ui.create.div('.yeye_DataTop-right', topBar);
                //「记录」：查看本局功勋获取明细（「成就」按钮已移除）
                const jilu = ui.create.div('.yeye_DataTop-recordbutton', leftTop, '记录', (event) => {
                    game.txhj_playAudioCall_yy('WinButton', null, true);
                    game.yeyeOpenCoinLog(homeBody, wujinYongyeData);
                    event.stopPropagation();
                    event.preventDefault();
                    return false;
                });
                const topCoin = ui.create.div('.yeye_DataTop-coin', `${wujinYongyeData.coin}`, rightTop, (event) => {
                    if (!lib.config.mode_config.wujin_yongye?.jade) return;
                    const str = `是否花费${YEYE_RULES.jadePerCoin}玉璧购买${YEYE_RULES.coinPerJade}功勋？`;
                    game.purchasePrompt_yy('购买功勋', str, homeBody, (bool) => {
                        if (bool) {
                            if (wujinYongyeData.jade < 100) {
                                game.messagePopup_yy("玉璧不足");
                                return;
                            }
                            game.yeyeCoin(YEYE_RULES.coinPerJade, '玉璧兑换', wujinYongyeData);
                            topCoin.innerHTML = wujinYongyeData.coin;
                            wujinYongyeData.jade -= YEYE_RULES.jadePerCoin;
                            topJade.innerHTML = wujinYongyeData.jade;
                            game.messagePopup_yy("成功购买功勋");
                            game.saveConfig('wujinYongyeData', wujinYongyeData);
                            event.stopPropagation();
                            event.preventDefault();
                            return false;
                        }
                    });
                });
                const topJade = ui.create.div('.yeye_DataTop-jade', `${wujinYongyeData.jade}`, rightTop, () => console.log('点击玉璧'));

                const leftBody = ui.create.div('.yeye_DataLeftBody', body);
                const rightBody = ui.create.div('.yeye_DataRightBody', body);
                function funcBuff(shop, str, str2) {
                    // 商店里上架的商品显示当前售价（右侧「已拥有」列表 str2 == 'right' 不显示）
                    let shopPriceSuffix = '';
                    if (str2 !== 'right') {
                        if (!wujinYongyeData.stageBought) wujinYongyeData.stageBought = { skill: 0, buff: 0 };
                        const boughtNow = wujinYongyeData.stageBought[str] || 0;
                        const basePrice = str == 'buff' ? yeyeBuffBasePrice(shop) : YEYE_RULES.shopSkillCost;
                        //shopPriceSuffix = `　·　售价 ${yeyeShopPrice(basePrice, boughtNow)} 功勋`;
                    }
                    const icon = (function () {
                        let clickPrompt;
                        if (str == 'buff') {
                            clickPrompt = ui.create.div('.yeye_DataBuffIcon', shop.name);
                            applyAssetTier(clickPrompt, 'buff', shop.level > 2 ? 'hi' : 'low'); // [旧样式层]
                        } else if (str == 'skill') {
                            let divname = str2 == 'right' ? '.yeye_DataMeSkillIcon' : '.yeye_DataBuffIcon';
                            clickPrompt = ui.create.div(divname, get.translation(shop));
                            if (str2 == 'right') {
                                applyAssetTier(clickPrompt, 'skill', get.skillRank(shop) > 1 ? 'hi' : 'low'); // [旧样式层]
                            } else {
                                applyAssetTier(clickPrompt, 'buff', get.skillRank(shop) > 1 ? 'hi' : 'low'); // [旧样式层]
                            }
                        }

                        clickPrompt.choiced = function () {
                            leftBody.choosingNow = this;
                            clickPrompt.style.boxShadow = '-5px 0px 5px rgba(255,255,0,0.75),0px -5px 5px rgba(255,255,0,0.75),5px 0px 5px rgba(255,255,0,0.75),0px 5px 5px rgba(255,255,0,0.75)';
                        };
                        clickPrompt.noChoiced = function () {
                            leftBody.choosingNow = null;
                            clickPrompt.style.boxShadow = 'none';
                        };

                        clickPrompt.addEventListener("click", function (event) {
                            //拖拽换位刚结束时，这次的 click 是拖动的尾巴，不当成点选
                            if (_status.justdragged) {
                                event.stopPropagation();
                                event.preventDefault();
                                return false;
                            }
                            let query = document.querySelector('.yeye_buffInfo');
                            const info = get.info(shop);
                            if (leftBody.choosingNow) {
                                leftBody.choosingNow.noChoiced();
                            }
                            _status.choiceShop = shop;
                            _status.choiceType = str;
                            if (query) {
                                if (query.innerHTML.includes(shop.name) || query.innerHTML.includes(get.translation(shop))) {
                                    query.remove();
                                } else {
                                    query.innerHTML = `
                            <p class="buff-name">${str == 'buff' ? '加成' : '技能'}【${str == 'buff' ? (shop.name || '未知Buff') : (get.translation(shop) || '未知技能')}】</p>
                            <p class="buff-info">${str == 'buff' ? (shop.info || '暂无描述') : (lib.translate[shop + "_info"] || '暂无描述')}${shopPriceSuffix}</p>
                            `;
                                    if (str == 'skill') {
                                        if (info.derivation) {
                                            if (typeof info.derivation == 'string') {
                                                query.innerHTML += `
                            <p class="buff-name">技能【${get.translation(info.derivation) || '未知技能'}】</p>
                            <p class="buff-info">${lib.translate[info.derivation + "_info"] || '暂无描述'}</p>
                            `;
                                            } else {
                                                info.derivation.forEach(deri => {
                                                    query.innerHTML += `
                            <p class="buff-name">技能【${get.translation(deri) || '未知技能'}】</p>
                            <p class="buff-info">${lib.translate[deri + "_info"] || '暂无描述'}</p>
                            `;
                                                });
                                            }

                                        }
                                    }
                                    this.choiced();
                                    clickPrompt.style.boxShadow = '-5px 0px 5px rgba(0,255,0,0.75),0px -5px 5px rgba(0,255,0,0.75),5px 0px 5px rgba(0,255,0,0.75),0px 5px 5px rgba(0,255,0,0.75)';
                                }
                            } else {
                                this.choiced();
                                clickPrompt.style.boxShadow = '-5px 0px 5px rgba(0,255,0,0.75),0px -5px 5px rgba(0,255,0,0.75),5px 0px 5px rgba(0,255,0,0.75),0px 5px 5px rgba(0,255,0,0.75)';
                                query = ui.create.div('.yeye_buffInfo');
                                query.style[str2] = '53%';
                                query.innerHTML = `
                            <p class="buff-name">${str == 'buff' ? '加成' : '技能'}【${str == 'buff' ? (shop.name || '未知Buff') : (get.translation(shop) || '未知技能')}】</p>
                            <p class="buff-info">${str == 'buff' ? (shop.info || '暂无描述') : (lib.translate[shop + "_info"] || '暂无描述')}${shopPriceSuffix}</p>
                            `;
                                if (str == 'skill') {
                                    if (info.derivation) {
                                        if (typeof info.derivation == 'string') {
                                            query.innerHTML += `
                            <p class="buff-name">技能【${get.translation(info.derivation) || '未知技能'}】</p>
                            <p class="buff-info">${lib.translate[info.derivation + "_info"] || '暂无描述'}</p>
                            `;
                                        } else {
                                            info.derivation.forEach(deri => {
                                                query.innerHTML += `
                            <p class="buff-name">技能【${get.translation(deri) || '未知技能'}】</p>
                            <p class="buff-info">${lib.translate[deri + "_info"] || '暂无描述'}</p>
                            `;
                                            });
                                        }
                                    }
                                }
                                body.appendChild(query);
                                if (lib.config.extension_永夜之境_yeyeTextSizeOn === true) {
                                    game.applyandroidSize_yy(query);
                                }
                            }
                            event.stopPropagation();
                            event.preventDefault();
                            return false;
                        });
                        return clickPrompt;
                    })();
                    return icon;
                }

                let icon0 = (function () {
                    let clickPrompt = ui.create.div('.yeye_DataIcon0', '刷新', leftBody, (event) => {
                        // 【新增】刷新价格：本关第一次 YEYE_RULES.shopRefreshBase，之后每次翻倍（2 → 4 → 8 …）
                        // 想还原成固定 1 功勋：把 yeyeConst.js 的 shopRefreshBase 改成 1、shopRefreshBaseMul 改成 1
                        const refreshCost = yeyeRefreshPrice(wujinYongyeData.stageRefresh || 0);
                        const str = `是否花费${refreshCost}功勋刷新商店？（本关第 ${(wujinYongyeData.stageRefresh || 0) + 1} 次刷新）`;
                        game.purchasePrompt_yy('刷新', str, homeBody, (bool) => {
                            if (bool) {
                                if (wujinYongyeData.coin < refreshCost) {
                                    game.messagePopup_yy('功勋不足');
                                    return;
                                }
                                wujinYongyeData.coin -= refreshCost;
                                wujinYongyeData.stageRefresh = (wujinYongyeData.stageRefresh || 0) + 1;
                                topCoin.innerHTML = wujinYongyeData.coin;
                                _status.choiceShop = undefined;
                                _status.choiceType = undefined;
                                let query = document.querySelector('.yeye_buffInfo');
                                document.querySelectorAll('.yeye_DataBuffIcon').forEach(el => {
                                    el.noChoiced();
                                });
                                if (query) {
                                    query.remove();
                                }
                                upShop('up');
                                game.saveConfig('wujinYongyeData', wujinYongyeData);
                                game.messagePopup_yy('刷新成功');
                                return;
                            }
                        });
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });

                    return clickPrompt;
                })();
                let icon1 = (function () {
                    let clickPrompt = ui.create.div('.yeye_DataIcon1', '购买', leftBody, (event) => {
                        if (_status.choiceShop) {
                            // ===== 【新增】商店限购与递增价格 =====
                            // 每关「技能」「强化」各自最多买 stageShopLimit 次，同类每多买 1 次单价 +stageShopPriceStep。
                            // 数值与开关都在 yeyeConst.js 的 YEYE_RULES（想还原旧版：limit 改 999、step 改 0）。
                            const buyType = _status.choiceType == 'buff' ? 'buff' : 'skill';
                            if (!wujinYongyeData.stageBought) wujinYongyeData.stageBought = { skill: 0, buff: 0 };
                            const bought = wujinYongyeData.stageBought[buyType] || 0;
                            if (yeyeShopLimitReached(bought)) {
                                game.messagePopup_yy(`本关${buyType === 'buff' ? '强化' : '技能'}已购满 ${YEYE_RULES.stageShopLimit} 次，进入下一关才能继续购买`);
                                return false;
                            }
                            // 强化按「单项 price → 档位默认价 → shopBuffCost」取基础价（见 yeyeBuffBasePrice）
                            const buyBase = buyType == 'buff' ? yeyeBuffBasePrice(_status.choiceShop) : YEYE_RULES.shopSkillCost;
                            const itemCost = yeyeShopPrice(buyBase, bought);
                            const str = `是否花费${itemCost}功勋购买${_status.choiceType == 'buff' ? '强化 【' + _status.choiceShop.name + '】' : '技能 【' + get.translation(_status.choiceShop) + '】'}？（本关第 ${bought + 1}/${YEYE_RULES.stageShopLimit} 次）`;
                            game.purchasePrompt_yy('购买商品', str, homeBody, (bool) => {
                                if (bool) {
                                    if (wujinYongyeData.coin < itemCost) {
                                        if (!lib.config.mode_config.wujin_yongye?.jade) {
                                            game.messagePopup_yy('功勋不足');
                                            return;
                                        }
                                        const str = `功勋不足,是否花费${YEYE_RULES.jadePerCoin}玉璧购买${YEYE_RULES.coinPerJade}功勋？`;
                                        game.purchasePrompt_yy('购买功勋', str, homeBody, (bool) => {
                                            if (bool) {
                                                if (wujinYongyeData.jade < 100) {
                                                    game.messagePopup_yy("玉璧不足");
                                                    return;
                                                }
                                                game.yeyeCoin(YEYE_RULES.coinPerJade, '玉璧兑换', wujinYongyeData);
                                                topCoin.innerHTML = wujinYongyeData.coin;
                                                wujinYongyeData.jade -= YEYE_RULES.jadePerCoin;
                                                topJade.innerHTML = wujinYongyeData.jade;
                                                game.messagePopup_yy("成功购买功勋");
                                                game.saveConfig('wujinYongyeData', wujinYongyeData);
                                            } else {
                                                return;
                                            }
                                        });
                                        return;
                                    }
                                    wujinYongyeData.coin -= itemCost;
                                    wujinYongyeData.stageBought[buyType] = bought + 1;
                                    topCoin.innerHTML = wujinYongyeData.coin;
                                    if (_status.choiceType == 'buff') {
                                        //「强身」在购买时立刻结算体力上限，这样跨关保留体力时不会反复叠加
                                        yeyeAddBuff(wujinYongyeData, _status.choiceShop);
                                        wujinYongyeData.shop.buff.remove(_status.choiceShop);
                                        upBuffBodyDiv('buff');
                                        playBodyDiv.update();
                                    } else {
                                        wujinYongyeData.skill.push(_status.choiceShop);
                                        wujinYongyeData.shop.skill.remove(_status.choiceShop);
                                        upBuffBodyDiv('skill');
                                    }
                                    _status.choiceShop = undefined;
                                    _status.choiceType = undefined;
                                    upShop('shop');
                                    game.saveConfig('wujinYongyeData', wujinYongyeData);
                                    game.messagePopup_yy('购买成功');
                                    return;
                                }
                            });
                        } else {
                            game.messagePopup_yy('请选择要购买的物品');
                        }
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });

                    return clickPrompt;
                })();
                let icon2 = (function () {
                    let clickPrompt = ui.create.div('.yeye_DataIcon2', '结算', rightBody, (event) => {
                        const str = `当前结算可获得玉璧${wujinYongyeData.barrier * 10}枚,是否结算？`;
                        game.purchasePrompt_yy('结算', str, homeBody, (bool) => {
                            if (bool) {
                                let timeID = (new Date()).getTime();
                                wujinYongyeData.time = timeID;
                                if (!lib.config.wujinYongyeRecord) lib.config.wujinYongyeRecord = {};
                                lib.config.wujinYongyeRecord[timeID] = wujinYongyeData;
                                wujinYongyeData.jade += wujinYongyeData.barrier * 10;
                                game.saveConfig('wujinYongyeData', wujinYongyeData);
                                game.saveConfig('wujinYongyeRecord', lib.config.wujinYongyeRecord);
                                game.updateWujinYongyeData();
                                _status.yeyeGame.return = false;
                                setTimeout(function () {
                                    game.reload();
                                }, 500);
                            }
                        });

                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });

                    return clickPrompt;
                })();
                let icon3 = (function () {
                    let clickPrompt = ui.create.div('.yeye_DataIcon3', '中途退出', rightBody, (event) => {
                        const str = `是否退出？`;
                        game.purchasePrompt_yy('中途退出', str, homeBody, (bool) => {
                            if (bool) {
                                window.location.reload();
                            }
                        });

                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });

                    return clickPrompt;
                })();
                //BOSS 关不给三选一，直接进 BOSS；普通关先弹节点选择
                const isBossStage = yeyeIsBossStage(wujinYongyeData.barrier);
                let icon4 = (function () {
                    let clickPrompt = ui.create.div('.yeye_DataIcon4', isBossStage ? '挑战BOSS' : '选择节点', rightBody, async (event) => {
                        event.stopPropagation();
                        event.preventDefault();
                        if (isBossStage) {
                            game.yeyeStartNode('boss', home, homeBody);
                            return false;
                        }
                        const node = await game.yeyeChooseNode(homeBody, wujinYongyeData);
                        if (node) game.yeyeStartNode(node, home, homeBody);
                        return false;
                    });

                    return clickPrompt;
                })();
                //侍灵：查看 / 切换出战侍灵
                let icon5 = (function () {
                    const active = yeyeActiveServant(wujinYongyeData);
                    let clickPrompt = ui.create.div('.yeye_DataIcon5', active ? active.name : '侍灵', rightBody, (event) => {
                        game.txhj_playAudioCall_yy('WinButton', null, true);
                        yeyeOpenServantPanel(homeBody, wujinYongyeData, () => {
                            const now = yeyeActiveServant(wujinYongyeData);
                            clickPrompt.innerHTML = now ? now.name : '侍灵';
                        });
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });

                    return clickPrompt;
                })();
                const levelBody = ui.create.div('.yeye_DataLevelBody', leftBody);
                function upLevel() {
                    Array.from(levelBody.querySelectorAll('.yeye_DatalevelImage1, .yeye_DatalevelImage2')).forEach(el => {
                        levelBody.removeChild(el);
                    });
                    let level = wujinYongyeData.level;
                    let level2 = 5 - level;
                    const fragment1 = document.createDocumentFragment();
                    const fragment2 = document.createDocumentFragment();
                    while (level--) {
                        const div = ui.create.div(".yeye_DatalevelImage1");
                        fragment1.appendChild(div);
                    }
                    levelBody.appendChild(fragment1);
                    while (level2--) {
                        const div = ui.create.div(".yeye_DatalevelImage2");
                        fragment2.appendChild(div);
                    }
                    levelBody.appendChild(fragment2);
                }
                upLevel();
                let levelIcon = (function () {
                    let clickPrompt = ui.create.div('.yeye_DatalevelIcon', '升级', levelBody, (event) => {
                        const levelList = {
                            1: 5,
                            2: 8,
                            3: 10,
                            4: 15,
                        };
                        if (wujinYongyeData.level >= 5) {
                            game.messagePopup_yy('等级已满');
                            return;
                        }
                        const str = `是否花费${levelList[wujinYongyeData.level]}个功勋升级？`;
                        game.purchasePrompt_yy('升级', str, homeBody, (bool) => {
                            if (bool) {
                                if (wujinYongyeData.coin < levelList[wujinYongyeData.level]) {
                                    game.messagePopup_yy('功勋不足');
                                    return;
                                } else {
                                    wujinYongyeData.coin -= levelList[wujinYongyeData.level];
                                    wujinYongyeData.level++;
                                    topCoin.innerHTML = wujinYongyeData.coin;
                                    upLevel();
                                    upShop('up');
                                    game.saveConfig('wujinYongyeData', wujinYongyeData);
                                    game.messagePopup_yy('升级成功');
                                }
                            }
                        });
                        event.stopPropagation();
                        event.preventDefault();
                        return false;
                    });
                    return clickPrompt;
                })();
                const skillBody = ui.create.div('.yeye_DataSkillBody', leftBody);
                function upShop(str) {
                    while (skillBody.firstChild) {
                        skillBody.removeChild(skillBody.firstChild);
                    }
                    let query = document.querySelector('.yeye_buffInfo');
                    document.querySelectorAll('.yeye_DataBuffIcon').forEach(el => {
                        el.noChoiced();
                    });
                    if (query) {
                        query.remove();
                    }
                    _status.choiceShop = undefined;
                    _status.choiceType = undefined;
                    let allBuffs = [];
                    let skillList = [];
                    if (str == 'up') {
                        let skills = get.gainableSkills().filter(i => {
                            if (!lib.translate[i + "_info"] || wujinYongyeData.skill.includes(i)) return false;
                            const list = [i];
                            game.expandSkills(list);
                            for (const j of list) {
                                const info = lib.skill[j];
                                if (!info) continue;
                                const ai = info.ai || {};
                                if ((info.mode && !info.mode.includes(get.mode())) || info.silent || info.juexingji || info.hiddenSkill || info.hidden || info.dutySkill || info.unique || info.ZhuSkill || ai.combo || ai.notemp || ai.neg) {
                                    continue;
                                }
                                return true;
                            }
                            return false;
                        });
                        let num = 0;
                        while (skillList.length < shopList[wujinYongyeData.level - 1].skill && num++ < 20) {
                            let skill = skills.randomGet();
                            if (skill) skillList.add(skill);
                        }
                        for (let i = 0; i < wujinYongyeData.level; i++) {
                            let buff = buffList[i];
                            for (let j of buff) {
                                allBuffs.push(j);
                            }
                        }
                        allBuffs = allBuffs.randomGets(shopList[wujinYongyeData.level - 1].buff);
                        wujinYongyeData.shop.buff = allBuffs;
                        wujinYongyeData.shop.skill = skillList;
                        game.saveConfig('wujinYongyeData', wujinYongyeData);
                    } else if (str == 'shop') {
                        allBuffs = wujinYongyeData.shop.buff || [];
                        skillList = wujinYongyeData.shop.skill || [];
                    }
                    if (allBuffs.length) {
                        for (let i of allBuffs) {
                            skillBody.appendChild(funcBuff(i, 'buff', 'left'));
                        }
                    }
                    if (skillList.length) {
                        for (let i of skillList) {
                            skillBody.appendChild(funcBuff(i, 'skill', 'left'));
                        }
                    }
                    if (lib.config.extension_永夜之境_yeyeTextSizeOn === true) {
                        game.applyandroidSize_yy(skillBody);
                    }
                }
                if (wujinYongyeData.shop.buff.length == 0 && wujinYongyeData.shop.skill.length == 0) {
                    upShop('up');
                } else {
                    upShop('shop');
                }
                const playBody = ui.create.div('.yeye_DataPlayBody', rightBody);
                function upPlayRevive() {
                    Array.from(playBody.querySelectorAll('.yeye_DataRevive_hp1, .yeye_DataRevive_hp2')).forEach(el => {
                        playBody.removeChild(el);
                    });
                    let revive = wujinYongyeData.revive;
                    //复活勾玉只显示 1 个（不再固定占 5 格）
                    //let revive2 = Math.max(0, 1 - revive);
                    let revive2 = 5 - revive;
                    const fragment1 = document.createDocumentFragment();
                    const fragment2 = document.createDocumentFragment();
                    while (revive--) {
                        const div = ui.create.div(".yeye_DataRevive_hp1");
                        fragment1.appendChild(div);
                    }
                    playBody.appendChild(fragment1);
                    while (revive2--) {
                        const div = ui.create.div(".yeye_DataRevive_hp2");
                        fragment2.appendChild(div);
                    }
                    playBody.appendChild(fragment2);
                }
                upPlayRevive();
                const playBodyDiv = ui.create.div('.yeye_consoledeskPlayBody', playBody);
                playBodyDiv.update = function () {
                    const name = wujinYongyeData.name;
                    playBodyDiv.innerHTML = '';
                    var intro = lib.character[name];
                    if (!intro) {
                        for (var i in lib.characterPack) {
                            if (lib.characterPack[i][name]) {
                                intro = lib.characterPack[i][name];
                                break;
                            }
                        }
                    }
                    if (!intro) {
                        const str = `当前主武将不存在,是否立即结算？当前结算可获得玉璧${wujinYongyeData.barrier * 10}枚？`;
                        game.purchasePrompt_yy('结算', str, homeBody, (bool) => {
                            if (bool) {
                                let timeID = (new Date()).getTime();
                                wujinYongyeData.time = timeID;
                                if (!lib.config.wujinYongyeRecord) lib.config.wujinYongyeRecord = {};
                                lib.config.wujinYongyeRecord[timeID] = wujinYongyeData;
                                wujinYongyeData.jade += wujinYongyeData.barrier * 10;
                                game.saveConfig('wujinYongyeData', wujinYongyeData);
                                game.saveConfig('wujinYongyeRecord', lib.config.wujinYongyeRecord);
                                game.updateWujinYongyeData();
                                _status.yeyeGame.return = false;
                                setTimeout(function () {
                                    game.reload();
                                }, 500);
                            } else {
                                window.location.reload();
                            }
                        });
                        return;
                    }
                    var playComps = {
                        bg: (function () {
                            var bg = ui.create.div('.yeye_consoledeskPlayBg');
                            bg.setBackgroundImage(yeyeName2Image(intro[1]));
                            return bg;
                        })(intro[1]),
                        imp: (function () {
                            var imp = ui.create.div('.yeye_consoledeskPlayImp1');
                            //修改千幻
                            imp.classList.add("qh-not-replace");
                            //修改
                            imp.setBackground(name, 'character');
                            const str = imp.style.backgroundImage;
                            if (!str) return;
                            if (lib.device == 'ios' || lib.device == 'android') {
                                var tmp = str.split('(')[1].split(')')[0];
                                if (tmp.indexOf('"') > -1) {
                                    tmp = tmp.split('"')[1].split('"')[0];
                                }
                            } else {
                                var tmp = str.split('("')[1].split('")')[0];
                            }

                            var firstPromise = new Promise(function (resolve, reject) {
                                var reader = new FileReader();
                                var img = new Image();
                                img.src = lib.assetURL + decodeURI(tmp);
                                if (lib.device == 'ios' || lib.device == 'android') {
                                    img.src = tmp;
                                }
                                var isAlphaBackground = 0;
                                var canvas = document.createElement('canvas');
                                var context = canvas.getContext('2d');
                                img.onload = function () {
                                    var originWidth = this.width;
                                    var originHeight = this.height;
                                    canvas.width = originWidth;
                                    canvas.height = originHeight;
                                    context.clearRect(0, 0, originWidth, originHeight);
                                    context.drawImage(img, 0, 0);
                                    isAlphaBackground = 0;
                                    var imageData = context.getImageData(0, 0, 50, 50).data;
                                    for (var index = 3; index < 100; index += 4) {
                                        if (imageData[index] != 255) {
                                            isAlphaBackground++;
                                            if (isAlphaBackground >= 25) {
                                                resolve();
                                                break;
                                            }
                                        }
                                    }
                                };
                            });
                            firstPromise.then(function (successMessage) {
                                imp.style.backgroundImage = 'none';
                                var imp2 = ui.create.div('.yeye_consoledeskPlayImpX', imp);
                                //适配千幻
                                //   imp2.classList.add("qh-not-replace");
                                //
                                imp2.setBackground(name, 'character');
                            });
                            return imp;
                        })(intro[1]),
                        namebody: (function (name) {
                            var info = lib.translate[name];
                            var namebody = ui.create.div(".yeye_consoledeskPlayName", info);
                            return namebody;
                        })(name),
                        playHp: (function (hp) {
                            var playHp = ui.create.div('.yeye_consoledeskPlayHpBox');
                            var hp = wujinYongyeData.hp;
                            var maxHp = wujinYongyeData.maxHp;
                            if (hp < 6 && maxHp < 6) {
                                var num = maxHp - hp;
                                while (hp--) {
                                    var tmp = ui.create.div(".yeye_consoledeskPlayHpICON", playHp);
                                    if (wujinYongyeData.hp > 2) {
                                        tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass1.png');
                                    } else if (wujinYongyeData.hp > 1) {
                                        tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass2.png');
                                    } else if (wujinYongyeData.hp > 0) {
                                        tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass3.png');
                                    }
                                }
                                while (num--) {
                                    var tmp = ui.create.div(".yeye_consoledeskPlayHpICON", playHp);
                                    tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass4.png');
                                }
                            } else {
                                var tmp = ui.create.div(".yeye_consoledeskPlayHpICON2", playHp);
                                tmp.setBackgroundImage('extension/永夜之境/source/mode/image/style/glass1.png');
                                var numbody = ui.create.div(".yeye_consoledeskPlayHpNum", hp + '', playHp);
                                numbody.innerHTML = hp + '<br>/<br>' + maxHp;
                            }
                            return playHp;
                        })(intro[2]),
                    };
                    for (var i in playComps) {
                        playBodyDiv.appendChild(playComps[i]);
                    }
                };
                playBodyDiv.update();
                const buffBody = ui.create.div('.yeye_DataBuffBody', rightBody);
                const buffBodySkill = ui.create.div('.yeye_DataBuffBodySkill', '技能', buffBody, () => upBuffBodyDiv('skill'));
                const buffBodyBuff = ui.create.div('.yeye_DataBuffBodyBuff', '强化', buffBody, () => upBuffBodyDiv('buff'));
                const buffBodyCell = ui.create.div('.yeye_DataBuffBodyCell', '出售', buffBody, (event) => {
                    if (_status.choiceShop && _status.choiceType && (wujinYongyeData.buff.includes(_status.choiceShop) || wujinYongyeData.skill.includes(_status.choiceShop))) {
                        const str = `是否出售${_status.choiceType == 'buff' ? '强化 【' + _status.choiceShop.name + '】' : '技能 【' + get.translation(_status.choiceShop) + '】'}以换取2个功勋？`;
                        game.purchasePrompt_yy('出售', str, homeBody, (bool) => {
                            if (bool) {
                                game.yeyeCoin(YEYE_RULES.sellCoin, '出售强化/技能', wujinYongyeData);
                                topCoin.innerHTML = wujinYongyeData.coin;
                                if (_status.choiceType == 'buff') {
                                    yeyeRemoveBuff(wujinYongyeData, _status.choiceShop.name);
                                } else if (_status.choiceType == 'skill') {
                                    wujinYongyeData.skill.remove(_status.choiceShop);
                                }
                                _status.choiceShop = undefined;
                                _status.choiceType = undefined;
                                upBuffBodyDiv()
                                game.saveConfig('wujinYongyeData', wujinYongyeData);
                                game.messagePopup_yy('出售成功');
                            }
                        });
                    } else {
                        game.messagePopup_yy('请选择要出售的物品');
                    }
                    event.stopPropagation();
                    event.preventDefault();
                    return false;
                });
                if (!_status.choiceBuffBodyDiv) {
                    _status.choiceBuffBodyDiv = 'skill';
                }
                function upBuffBodyDiv(str) {
                    var buffBodyDiv;
                    const allbuff = document.querySelectorAll('.yeye_DataBuffBodyDiv');
                    const allskill = document.querySelectorAll('.yeye_DataSkillBodyDiv');
                    if (str == 'skill') {
                        if (allbuff) {
                            allbuff.forEach(el => {
                                el.innerHTML = '';
                                el.remove();
                            });
                        }
                        let div = document.querySelector('.yeye_DataSkillBodyDiv');
                        if (!div) {
                            buffBodyDiv = ui.create.div('.yeye_DataSkillBodyDiv', buffBody);
                        } else {
                            div.innerHTML = '';
                            buffBodyDiv = div;
                        }
                    } else if (str == 'buff') {
                        if (allskill) {
                            allskill.forEach(el => {
                                el.innerHTML = '';
                                el.remove();
                            });
                        }
                        let div = document.querySelector('.yeye_DataBuffBodyDiv');
                        if (!div) {
                            buffBodyDiv = ui.create.div('.yeye_DataBuffBodyDiv', buffBody);
                        } else {
                            div.innerHTML = '';
                            buffBodyDiv = div;
                        }
                    } else {
                        let div = document.querySelector('.yeye_DataSkillBodyDiv');
                        div.innerHTML = '';
                        buffBodyDiv = div;
                    }

                    const allBuffIcons = document.querySelectorAll('.yeye_DataBuffIcon');
                    allBuffIcons.forEach(el => {
                        if (typeof el.noChoiced === 'function') {
                            el.noChoiced();
                        }
                    });
                    const buffInfoEl = document.querySelector('.yeye_buffInfo');
                    if (buffInfoEl) {
                        buffInfoEl.remove();
                    }
                    _status.choiceShop = undefined;
                    _status.choiceType = undefined;
                    const renderType = str || _status.choiceBuffBodyDiv;
                    if (renderType == 'skill') {
                        const skillList = Array.isArray(wujinYongyeData.skill) ? wujinYongyeData.skill : [];
                        skillList.forEach((skillItem, skillIndex) => {
                            const buffIcon = funcBuff(skillItem, 'skill', 'right');
                            //超过 skillLimit 的技能带不进对局：标红提示，卖掉靠前的技能后会自动顶上来
                            if (skillIndex >= YEYE_RULES.skillLimit) {
                                buffIcon.classList.add('yeye_skillOverflow');
                            }
                            buffBodyDiv.appendChild(buffIcon);
                        });
                        //顺序决定哪 12 个能带入对局，所以允许直接拖动技能图标换位
                        yeyeMakeSortable(buffBodyDiv, {
                            itemSelector: '.yeye_DataMeSkillIcon',
                            onReorder: function (from, to) {
                                const list = wujinYongyeData.skill;
                                if (!Array.isArray(list)) return;
                                if (from === to || from < 0 || to < 0 || from >= list.length || to >= list.length) return;
                                const moved = list.splice(from, 1)[0];
                                list.splice(to, 0, moved);
                                game.saveConfig('wujinYongyeData', wujinYongyeData);
                                upBuffBodyDiv('skill'); //重排后重绘，红色标记会跟着位置更新
                            },
                        });
                    } else if (renderType == 'buff') {
                        const buffList = Array.isArray(wujinYongyeData.buff) ? wujinYongyeData.buff : [];
                        let buff = {};
                        buffList.forEach(buffItem => {
                            if (!buff[buffItem.name]) {
                                buff[buffItem.name] = {
                                    name: buffItem.name,
                                    count: 0,
                                    info: buffItem.info,
                                };
                            }
                            buff[buffItem.name].count++;
                        });
                        const sortedBuffArray = Object.values(buff).sort((a, b) => {
                            return a.info.length - b.info.length;
                        });
                        sortedBuffArray.forEach(buff => {
                            const buffIcon = ui.create.div(
                                '.yeye_DataMeBuffIcon',
                                `${buff.name} (${buff.count}) —${buff.info}`
                            );
                            buffBodyDiv.appendChild(buffIcon);
                        });
                    }
                    _status.choiceBuffBodyDiv = str;
                    if (lib.config.extension_永夜之境_yeyeTextSizeOn === true) {
                        game.applyandroidSize_yy(buffBody);
                    }
                    return;
                }
                upBuffBodyDiv('skill');
                if (lib.config.extension_永夜之境_yeyeTextSizeOn === true) {
                    game.applyandroidSize_yy(homeBody);
                }
            },
            canReplaceViewpoint: () => true,
            phaseLoop(player) {
                let next = game.createEvent("phaseLoop");
                next.player = player;
                next._isStandardLoop = true;
                next.setContent(async function (event, trigger, player) {
                    let num = 1,
                        current = next.player;
                    while (current.getSeatNum() === 0) {
                        current.setSeatNum(num);
                        current = current.next;
                        num++;
                    }

                    while (_status.gameStart) {
                        if (!_status.gameStart) {
                            break;
                        }
                        if (game.players.includes(event.player)) {
                            lib.onphase.forEach(i => i());
                            const phase = event.player.phase();
                            event.next.remove(phase);
                            let isRoundEnd = false;
                            if (!_status.gameStart) {
                                break;
                            }

                            if (lib.onround.every(i => i(phase, event.player))) {
                                isRoundEnd = _status.roundSkipped;
                                if (_status.isRoundFilter) {
                                    isRoundEnd = _status.isRoundFilter(phase, event.player);
                                } else if (_status.seatNumSettled) {
                                    const seatNum = event.player.getSeatNum();
                                    if (seatNum != 0) {
                                        if (get.itemtype(_status.lastPhasedPlayer) != "player" || seatNum < _status.lastPhasedPlayer.getSeatNum()) {
                                            isRoundEnd = true;
                                        }
                                    }
                                } else if (event.player == _status.roundStart) {
                                    isRoundEnd = true;
                                }
                                if (isRoundEnd && _status.globalHistory.some(i => i.isRound)) {
                                    await event.trigger("roundEnd");
                                }
                            }
                            if (!_status.gameStart) {
                                break;
                            }

                            event.next.push(phase);
                            await phase;
                        }
                        if (!_status.gameStart) {
                            break;
                        }
                        await event.trigger("phaseOver");
                        if (!_status.gameStart) {
                            break;
                        }
                        let findNext = current => {
                            let players = game.players
                                .slice(0)
                                .concat(game.dead)
                                .filter(player => player && player.dataset)
                                .sort((a, b) => parseInt(a.dataset.position) - parseInt(b.dataset.position));
                            if (current && current.dataset) {
                                let position = parseInt(current.dataset.position);
                                for (let i = 0; i < players.length; i++) {
                                    if (parseInt(players[i].dataset.position) > position) {
                                        return players[i];
                                    }
                                }
                            }
                            return players[0];
                        };
                        const nextPlayer = findNext(event.player);
                        if (!nextPlayer) {
                            //场上已无角色（关卡清理阶段），结束阶段循环
                            break;
                        }
                        event.player = nextPlayer;
                    }

                    if (!_status.gameStart) {
                        event.finish();
                        event._triggered = null;
                        next._isStandardLoop = false;
                        // game.clearArena();
                    }

                });
                return next;
            },
            checkResult: function () {
                var me = game.me._trueMe || game.me;
                function handleGameOver(boolean) {
                    if (boolean) {
                        //本关独立结算：走本体胜利界面，“重新开始”变为“继续前进”
                        game.yeyeWinStage();
                        game.txhj_playAudioCall_yy('Win', null, true);
                    } else {
                        if (lib.config.wujinYongyeData.freeReviveOnce) {
                            //奇遇「幸存者」：本局首次失败不消耗复活次数
                            delete lib.config.wujinYongyeData.freeReviveOnce;
                            game.saveConfig('wujinYongyeData', lib.config.wujinYongyeData);
                            game.messagePopup_yy('幸存者的援手生效，本次失败不消耗复活');
                            game.yeyeLoseStage();
                        } else if (lib.config.wujinYongyeData.revive > 0) {
                            lib.config.wujinYongyeData.revive--;
                            game.saveConfig('wujinYongyeData', lib.config.wujinYongyeData);
                            //本关独立结算：走本体失败界面，重载后回到本关商店重新挑战
                            game.yeyeLoseStage();
                        } else {
                            game.txhj_playAudioCall_yy('Loss', null, true);
                            let timeID = (new Date()).getTime();
                            lib.config.wujinYongyeData.time = timeID;
                            if (!lib.config.wujinYongyeRecord) lib.config.wujinYongyeRecord = {};
                            lib.config.wujinYongyeRecord[timeID] = lib.config.wujinYongyeData;
                            lib.config.wujinYongyeData.jade += lib.config.wujinYongyeData.barrier * 10;
                            game.saveConfig('wujinYongyeData', lib.config.wujinYongyeData);
                            game.saveConfig('wujinYongyeRecord', lib.config.wujinYongyeRecord);
                            game.updateWujinYongyeData();
                            _status.yeyeGame.return = false;
                            game.over(false);
                            //失败结算的“重新开始”同样改为“继续前进”
                            game.yeyeRenameRestart('继续前进');
                        }
                    }
                }
                if (game.zhu.isAlive()) {
                    if (get.mode() != 'wujin_yongye' && game.players.length > 1) return;
                    if (me == game.zhu) {
                        handleGameOver(true);
                    } else {
                        handleGameOver(false);
                    }
                } else {
                    if (me == game.zhu) {
                        handleGameOver(false);
                    } else {
                        handleGameOver(true);
                    }
                }
            },
            gameinit: function () {
                lib.character[lib.config.wujinYongyeData.name][3] = _status.yeyeGame.skills.slice(0);
                const yeyeNode = _status.yeyeGame.node || 'battle';
                const yeyeIsBoss = yeyeNode === 'boss';
                //配置武将合集（不含玩家）
                let players = _status.yeyeGame.enemy.slice(0);
                //对决模式（欢乐）：本关多出来的座位就是队友，且固定排在最后一个座位。
                //玩家 1 号位、队友 4 号位（敌人排在中间，构成 1/4 对 2/3）。
                //直接用「实际座位数 - 敌人 - 玩家」推出队友数量，保证与建桌布局一致
                //（敌人 1 名时没有队友；敌人 2 名时 1 名队友；敌人 >= 3 时敌人夹在中间）。
                const yeyeAllySlots = Math.max(0, game.players.length - players.length - 1);
                const yeyeEnemySeats = game.players.length - 1 - yeyeAllySlots;
                console.log('[永夜对决] 座位数=' + game.players.length + ' 敌人数=' + players.length + ' 队友数=' + yeyeAllySlots);

                //分发武将牌
                let seatNum = 1;
                for (let i = 0; i < game.players.length; i++) {
                    const player = game.players[i];
                    player.getId();
                    if (player == game.me) {
                        player.init(lib.config.wujinYongyeData.name);
                        player.maxHp = lib.config.wujinYongyeData.maxHp;
                        player.hp = lib.config.wujinYongyeData.hp;
                        player.identity = 'zhu';
                        player.setIdentity('zhu');
                        player.side = true;
                        game.zhu = player;
                    } else if (i > yeyeEnemySeats) {
                        //队友：最后一个座位，与玩家同阵营（identity 'zhong'，界面显示“忠”）。
                        //武将取自玩家将池，排除玩家自己与本关敌人，避免同关重名。
                        let allyName = null;
                        try {
                            allyName = yeyePickAlly([lib.config.wujinYongyeData.name].concat(_status.yeyeGame.enemy || []));
                        } catch (e) {
                            console.warn('选择队友武将失败:', e);
                        }
                        if (!allyName) allyName = players.randomRemove(1)[0];
                        player.init(allyName);
                        player._yeyeName = allyName;
                        player._yeyeAlly = true;
                        player.exten = [];
                        player.identity = 'zhong';
                        player.setIdentity('zhong');
                        player.side = true;
                        try {
                            game.log('队友【' + get.translation(allyName) + '】加入战斗');
                        } catch (e) { }
                    } else {
                        //记录分到的武将名，用来在本关里认出哪个是 BOSS（同关敌人不会重名）
                        const enemyName = players.randomRemove(1)[0];
                        player.init(enemyName);
                        player._yeyeName = enemyName;
                        player.exten = [];
                        player.identity = 'fan';
                        player.setIdentity('fan');
                        player.side = false;
                    }
                    player.setSeatNum(seatNum);
                    seatNum++;
                }
                game.players.sortBySeat();
                //敌人只统计反贼，队友（'zhong'）不吃夜之刻印/BOSS 模板
                const targets = game.players.filter(current => current !== game.me && current.identity === 'fan');
                let skills = get.gainableSkills().filter(i => {
                    const list = [i];
                    game.expandSkills(list);
                    for (const j of list) {
                        const info = lib.skill[j];
                        if (!info) continue;
                        const ai = info.ai || {};
                        if ((info.mode && !info.mode.includes(get.mode())) || info.silent || info.juexingji || info.hiddenSkill || info.hidden || info.dutySkill || info.unique || info.ZhuSkill || ai.combo || ai.notemp || ai.neg) {
                            continue;
                        }
                        return !lib.config.wujinYongyeData.skill.includes(i);
                    }
                    return false;
                });
                //本关的 BOSS（永夜化身）：按名字认人，找不到就退回第一个敌人
                const yeyeBossName = _status.yeyeGame && _status.yeyeGame.bossName;
                const yeyeBoss = yeyeIsBoss
                    ? (targets.find(current => current._yeyeName === yeyeBossName) || targets[0])
                    : null;
                //夜之刻印：精英每个敌人 1 个（随机分发），BOSS 的刻印单独挂在化身上，外加事件追加
                const enemyMarks = (_status.yeyeGame?.enemyBuffs || []).slice();
                if (enemyMarks.length && targets.length) {
                    //打乱一遍再依次分发，保证精英每个敌人先各拿 1 个刻印
                    const markTargets = targets.slice(0).randomSort();
                    let markIndex = 0;
                    while (enemyMarks.length > 0) {
                        const mark = enemyMarks.pop();
                        const target = markTargets[markIndex % markTargets.length];
                        markIndex++;
                        if (!target) break;
                        target.addSkill(mark);
                        if (!Array.isArray(target.exten)) target.exten = [];
                        const markName = yeyeMarkName(mark);
                        if (markName) target.exten.push(markName);
                        if (!target.hasSkill('yeye_mark_exten')) target.addSkill('yeye_mark_exten');
                    }
                }
                //BOSS/精英的强化数值随关卡放大：15 关起 ×2，最后一关 ×3
                const yeyeFxStage = (lib.config.wujinYongyeData && lib.config.wujinYongyeData.barrier) || 1;
                //BOSS：永夜化身模板（体力上限提升 + 多个夜之刻印 + 复生一次 + 额外技能）
                if (yeyeBoss) {
                    const boss = yeyeBoss;
                    const bossMarks = (_status.yeyeGame?.bossMarks || []).slice();
                    bossMarks.forEach(mark => {
                        boss.addSkill(mark);
                        if (!Array.isArray(boss.exten)) boss.exten = [];
                        const markName = yeyeMarkName(mark);
                        if (markName) boss.exten.push(markName);
                    });
                    if (bossMarks.length && !boss.hasSkill('yeye_mark_exten')) boss.addSkill('yeye_mark_exten');
                    boss._yeyeBoss = true;
                    boss.maxHp += yeyeScaled('bossHpBonus', yeyeFxStage);
                    boss.hp = boss.maxHp;
                    boss._yeyeReviveHp = yeyeScaled('bossReviveHp', yeyeFxStage);
                    boss._yeyeReviveLabel = '永夜化身';
                    boss.addSkill('yeye_mk_bossRevive');
                    const bossSkills = skills.randomGets(yeyeScaled('bossSkillCount', yeyeFxStage));
                    bossSkills.forEach(skill => boss.addSkill(skill));
                    if (bossSkills.length) game.log(boss, "获得技能", bossSkills);
                }
                //精英关：每个敌人都套用精英强化（体力上限提升 + 额外技能 + 复生）
                if (yeyeNode === 'elite') {
                    const eliteHp = yeyeScaled('eliteHpBonus', yeyeFxStage);
                    const eliteRevive = yeyeScaled('eliteReviveHp', yeyeFxStage);
                    const eliteSkillNum = yeyeScaled('eliteSkillCount', yeyeFxStage);
                    targets.forEach(enemy => {
                        enemy._yeyeElite = true;
                        if (eliteHp) {
                            enemy.maxHp += eliteHp;
                            enemy.hp = enemy.maxHp;
                        }
                        if (eliteRevive > 0) {
                            enemy._yeyeReviveHp = eliteRevive;
                            enemy._yeyeReviveLabel = '精英';
                            enemy.addSkill('yeye_mk_bossRevive');
                        }
                        if (eliteSkillNum > 0) {
                            const eliteSkills = skills.randomGets(eliteSkillNum);
                            eliteSkills.forEach(skill => enemy.addSkill(skill));
                            if (eliteSkills.length) game.log(enemy, "获得技能", eliteSkills);
                        }
                    });
                }
                game.players.forEach(player => {
                    if (player == game.me) {
                        //「强身」已在购买/获得时写进存档的体力上限，这里不再重复叠加
                        player.maxHp = lib.config.wujinYongyeData.maxHp;
                        player.hp = lib.config.wujinYongyeData.hp;
                        //侍灵：附身型伙伴，只挂技能不占座位
                        yeyeApplyServantSkills(player);
                    } else if (player.exten) {
                        const exMaxHp = player.exten.filter(i => i == '体力上限+1');
                        const exSkill = player.exten.filter(i => i == '随机获得1个技能');
                        if (exMaxHp.length > 0) {
                            player.maxHp += exMaxHp.length;
                            player.hp += exMaxHp.length;
                        }
                        if (exSkill.length > 0) {
                            let skill = skills.randomGets(exSkill.length);
                            player.addSkill(skill);
                            game.log(player, "获得了技能", skill)
                        }
                    }
                    player.update();
                });
            },
            gameDraw: function (player, num2 = 4) {
                if (get.mode() != 'wujin_yongye') return;
                var next = game.createEvent('gameDraw');
                next.player = player || game.me;
                next.num = num2;
                next.setContent(async function () {
                    let end = next.player, numx = next.num, event = _status.event;
                    let cardList = [];
                    Object.keys(lib.cardPile).forEach(key => {
                        const cardsArray = lib.cardPile[key];
                        cardsArray.forEach(card => {
                            if (card && cardList.indexOf(card) === -1) cardList.push(card);
                        });
                    });
                    function createCard(type, num, cardList) {
                        let cards = [];
                        let list;
                        switch (type) {
                            case 'null':
                                list = cardList;
                                break;
                            case 'equip1':
                                list = cardList.filter(info => get.subtype(info[2]) == 'equip1');
                                break;
                            case 'equip2':
                                list = cardList.filter(info => get.subtype(info[2]) == 'equip2');
                                break;
                            case 'equip34':
                                list = cardList.filter(info => get.subtype(info[2]) == 'equip3' || get.subtype(info[2]) == 'equip4');
                                break;
                            default:
                                list = cardList.filter(info => get.type(info[2]) == type);
                                break;
                        }
                        if (!list.length) return;
                        while (num--) {
                            let cardInfo = list.randomGet();
                            let card = game.createCard(cardInfo[2], cardInfo[0], cardInfo[1], cardInfo[3] ? cardInfo[3] : null);
                            game.broadcastAll(function (card) {
                                card.destroyed = "discardPile";
                            }, card);
                            cards.push(card);
                        }
                        return cards;
                    }
                    const buffCardMap = {
                        '援军': 'null',
                        '基本': 'basic',
                        '锦囊': 'trick',
                        '武器': 'equip1',
                        '防具': 'equip2',
                        '坐骑': 'equip34'
                    };
                    do {
                        let cards = [];
                        if (typeof next.num == "function") {
                            numx = next.num(next.player);
                        }
                        if (next.player == game.me) {
                            cards = [];
                            const buffData = lib.config?.wujinYongyeData?.buff;
                            if (buffData && typeof buffData === 'object') {
                                for (let key in buffData) {
                                    if (!buffData.hasOwnProperty(key)) continue;
                                    const cardType = buffCardMap[buffData[key].name];
                                    if (cardType !== undefined) {
                                        cards.push.apply(cards, createCard(cardType, 2, cardList));
                                    }
                                }
                                if (cards.length > 0) next.player.directgain(cards, null, 'eternal_yy_buff_linshi');
                            }
                            //奇遇「拾遗者」：下一场战斗开局多若干张临时装备牌
                            const extraEquip = lib.config.wujinYongyeData?.pendingEquipCards || 0;
                            if (extraEquip > 0) {
                                const equipCards = createCard('equip', extraEquip, cardList);
                                if (equipCards && equipCards.length) {
                                    next.player.directgain(equipCards, null, 'eternal_yy_buff_linshi');
                                }
                                delete lib.config.wujinYongyeData.pendingEquipCards;
                                game.saveConfig('wujinYongyeData', lib.config.wujinYongyeData);
                            }
                        } else if (next.player.exten && Array.isArray(next.player.exten)) {
                            cards = [];
                            let buff = next.player.exten.filter(i => i == '起始手牌额外获得2张临时牌');
                            if (buff.length > 0) cards.push.apply(cards, createCard('null', buff.length * 2, cardList));
                            if (cards.length > 0) next.player.directgain(cards, null, 'eternal_yy_buff_linshi');
                        }
                        /*otherPile主要是针对那些用专属牌堆，不从一般牌堆摸牌的角色（如陈寿），该属性目前只有两个键值对，且都为函数
                         *getCards函数与获得牌相关，只传入要获得的牌数num作为参数
                         *discard与手气卡换牌后弃置牌相关，只传入要弃置的牌card作为参数
                         */
                        cards = [];
                        const otherGetCards = event.otherPile?.[next.player.playerid]?.getCards;
                        //先看有没有专属牌堆，再看其他的
                        if (otherGetCards) {
                            cards.addArray(otherGetCards(numx));
                        } else if (next.player?.getTopCards && typeof next.player?.getTopCards === 'function') {
                            cards.addArray(next.player.getTopCards(numx));
                        } else {
                            cards.addArray(get.cards(numx));
                        }
                        //别问，问就是初始手牌要有标记 by 星の语
                        //event.gaintag支持函数、字符串、数组。数组就是添加一连串的标记；函数的返回格式为[[cards1,gaintag1],[cards2,gaintag2]...]
                        if (event.gaintag?.[next.player.playerid]) {
                            const gaintag = event.gaintag[next.player.playerid];
                            const list = typeof gaintag == "function" ? gaintag(numx, cards) : [[cards, gaintag]];
                            game.broadcastAll(
                                (player, list) => {
                                    for (let i = list.length - 1; i >= 0; i--) {
                                        next.player.directgain(list[i][0], null, list[i][1]);
                                    }
                                },
                                next.player,
                                list
                            );
                        } else {
                            next.player.directgain(cards);
                        }
                        if (next.player.singleHp === true && get.mode() != "guozhan" && (lib.config.mode != "doudizhu" || _status.mode != "online")) {
                            next.player.doubleDraw();
                        }
                        next.player._start_cards = next.player.getCards("h");
                        next.player = next.player.next;
                    } while (next.player != end);
                    event.changeCard = lib.config.wujinYongyeData.adjust;
                    let shouqika = event.changeCard;
                    do {
                        if (!_status.auto && game.me.countCards('h')) {
                            const result = await game.me.chooseBool('可以免费使用' + shouqika + '次手气卡，是否更换手牌？').forResult();
                            if (result.bool) {
                                if (game.changeCoin) {
                                    game.changeCoin(-3);
                                }
                                const hs = game.me.getCards("h", c => !c.hasGaintag('eternal_yy_buff_linshi')),
                                    cards = [],
                                    otherGetCards = event.otherPile?.[game.me.playerid]?.getCards,
                                    otherDiscacrd = event.otherPile?.[game.me.playerid]?.discard;
                                //先弃牌
                                game.addVideo("lose", game.me, [get.cardsInfo(hs), [], [], []]);
                                for (let i = 0; i < hs.length; i++) {
                                    hs[i].removeGaintag(true);
                                    if (otherDiscacrd) {
                                        otherDiscacrd(hs[i]);
                                    } else {
                                        hs[i].discard(false);
                                    }
                                }
                                //再摸牌，先看有没有专属牌堆
                                if (otherGetCards) {
                                    cards.addArray(otherGetCards(hs.length));
                                } else {
                                    cards.addArray(get.cards(hs.length));
                                }
                                //添加标记相关
                                //别问，问就是初始手牌要有标记 by 星の语
                                //event.gaintag支持函数、字符串、数组。数组就是添加一连串的标记；函数的返回格式为[[cards1,gaintag1],[cards2,gaintag2]...]
                                if (event.gaintag?.[game.me.playerid]) {
                                    const gaintag = event.gaintag[game.me.playerid];
                                    const list = typeof gaintag == "function" ? gaintag(hs.length, cards) : [[cards, gaintag]];
                                    for (let i = list.length - 1; i >= 0; i--) {
                                        game.me.directgain(list[i][0], null, list[i][1]);
                                    }
                                } else {
                                    game.me.directgain(cards);
                                }
                                shouqika--;
                                game.me._start_cards = game.me.getCards("h");
                            } else {
                                game.me._start_cards = game.me.getCards("h");
                                break;
                            };
                        }
                        else {
                            break;
                        }
                    } while (shouqika > 0)
                });
            },
            chooseCharacterWujinYongye: function () {//对局创建
                var next = game.createEvent('chooseCharacter', false);
                next.showConfig = true;
                next.setContent(async function (event) {
                    //对局主循环：每次循环 = 一关
                    while (true) {
                        if (_status.gameStart === false) {
                            //等待玩家在商店点击“开始挑战”后 resume
                            await game.pause();
                        } else {
                            game.resume();
                        }
                        if (_status.gameStart == undefined) {
                            //新的一关：上一关角色已在清理时移除，这里按本关敌人数重建竞技场
                            //进入关卡前清掉可能残留的点将界面
                            if (typeof game.yeyeClearChooseUI === 'function') game.yeyeClearChooseUI();
                            delete _status.roundStart;
                            game.roundNumber = 0;
                            ui.arena.show();
                            if (ui.auto.classList.contains("hidden")) ui.auto.classList.remove("hidden");
                            if (window.decadeUI) {
                                const element = document.getElementById('dui-controls');
                                if (element) {
                                    element.style.removeProperty('display');
                                }
                                [
                                    '#system2',
                                    '.lbtn-paixu',
                                    '.lbtn-controls',
                                    '.latn-jilu',
                                    '.skill-control',
                                    '.hand-tip',
                                    'img[src="extension/十周年UI/ui/assets/lbtn/uibutton/liaotian.png"]',
                                    'img[src="extension/十周年UI/shoushaUI/lbtn/images/uibutton/liaotian.png"]'
                                ].forEach(selector => {
                                    const el = document.querySelector(selector);
                                    if (el) {
                                        el.style.removeProperty('display');
                                    }
                                });
                            }
                            ui.arenalog.innerHTML = '';/*清除历史记录*/
                            ui.historybar.innerHTML = '';/*清除出牌记录*/
                            ui.cardPile.innerHTML = '';
                            ui.discardPile.innerHTML = '';
                            ui.sidebar.innerHTML = '';/*清除暂停记录*/
                            ui.sidebar3.innerHTML = '';/*清除暂停记录*/
                            _status.txcs_yipoed = undefined; /*手杀特效*/
                            game.isInitCardPileYeye();
                            _status.revive = 1;
                            _status.modeBuff = lib.config.wujinYongyeData.buff.slice(0);
                            _status.modeSkill = yeyeActiveSkills(lib.config.wujinYongyeData.skill);
                            //座位数由布局决定：对决模式（欢乐）下会多一个队友座位
                            const yeyeLayout = yeyeArenaLayout(_status.yeyeGame.number);
                            console.log('[永夜对决] 开关=' + yeyeDuelModeEnabled() + ' 敌人=' + _status.yeyeGame.number + ' 座位=' + yeyeLayout.total + ' 队友=' + yeyeLayout.ally);
                            game.prepareArena(yeyeLayout.total);
                            if (window.decadeUI) {
                                decadeUI.bodySensor.events.pop();
                            }
                            _status.modeNode = lib.config.wujinYongyeData;
                            lib.config.wujinYongyeData = _status.modeNode;
                            game.gameinit();
                            //每关都视为新的一局：重置阶段/回合计数，
                            //否则“首轮开始(roundStart)”这类依赖 game.phaseNumber 的时机在第二关起不会触发。
                            game.phaseNumber = 0;
                            game.roundNumber = 0;
                            _status.lastSeatNum = undefined;
                            if (Array.isArray(game.players)) {
                                for (const player of game.players) {
                                    if (player) player.phaseNumber = 0;
                                }
                            }
                            if (!_status.yeyeGlobalSkillBase) {
                                //记录开局时的全局技能基线：关卡结束时据此清理本关新增的全局技能
                                _status.yeyeGlobalSkillBase = (lib.skill.global || []).slice(0);
                            }
                        }
                        game.showIdentity(true);
                        if (_status.gameStart == undefined) {
                            game.syncState();
                            await game.gameDraw(game.me);
                            await event.trigger('gameStart');
                            if (_status.enterGame != undefined) {
                                for (const enterPlayer of game.players.slice(0)) {
                                    //未分配武将的角色跳过，避免第三方扩展读取name1时报错
                                    if (!enterPlayer || !enterPlayer.name1) continue;
                                    await game.triggerEnter(enterPlayer);
                                }
                            }
                            _status.gameStart = true;
                            _status.enterGame = true;
                        }
                        await game.phaseLoop(game.zhu || _status.firstAct || game.me);
                    }
                });
            },            showIdentity: function (me) {
                for (var i = 0; i < game.players.length; i++) {
                    game.players[i].node.identity.classList.remove("guessing");
                    game.players[i].identityShown = true;
                    game.players[i].ai.shown = 1;
                    game.players[i].setIdentity(game.players[i].identity);
                    if (game.players[i].identity == "zhu") {
                        game.players[i].isZhu = true;
                    }
                }
                if (_status.clickingidentity) {
                    for (var i = 0; i < _status.clickingidentity[1].length; i++) {
                        _status.clickingidentity[1][i].delete();
                        _status.clickingidentity[1][i].style.transform = "";
                    }
                    delete _status.clickingidentity;
                }
            },
        },
        element: {
            player: {
                $dieAfter: function () {
                    if (_status.video) return;
                    if (!this.node.dieidentity) {
                        var str = { zhu: "主公", zhong: "忠臣", fan: "反贼" }[this.identity];
                        var node = ui.create.div(".damage.dieidentity", str, this);
                        ui.refresh(node);
                        node.style.opacity = 1;
                        this.node.dieidentity = node;
                    }
                    var trans = this.style.transform;
                    if (trans) {
                        if (trans.indexOf("rotateY") != -1) {
                            this.node.dieidentity.style.transform = "rotateY(180deg)";
                        } else if (trans.indexOf("rotateX") != -1) {
                            this.node.dieidentity.style.transform = "rotateX(180deg)";
                        } else {
                            this.node.dieidentity.style.transform = "";
                        }
                    } else {
                        this.node.dieidentity.style.transform = "";
                    }
                },
                dieAfter: async function (source) {
                    if (_status.mode !== 'wujin_yongye') return;
                    //关卡清理阶段（gameStart=false）不再触发结算，避免重复结算
                    if (_status.gameStart === false) return;
                    if (game.me.isDead()) {
                        if (_status.auto) {
                            ui.click.auto();
                        }
                        if (lib.config.mode_config.wujin_yongye?.jade) {
                            const config = lib.config.wujinYongyeData;
                            const revivenum = Math.min(_status.revive || 1, 5)
                            const str = `###是否复活###是否花费${revivenum * 100}玉璧复活？`;
                            const result = await game.me.chooseBool(str).set("ai", () => true).forResult();
                            if (result.bool) {
                                if (config.jade < revivenum * 100) {
                                    game.messagePopup_yy('玉璧不足');
                                    game.checkResult();
                                    return;
                                }
                                _status.revive++;
                                config.jade -= revivenum * 100;
                                game.me.revive(game.me.maxHp);
                                await game.me.draw(4);
                                game.saveConfig('wujinYongyeData', config);
                                game.messagePopup_yy('复活成功');
                                return;
                            } else {
                                game.checkResult();
                                return;
                            }
                        } else {
                            game.checkResult();
                            return;
                        }
                    }
                    const findEnemy = () => game.players.find(player => player.identity === 'fan');
                    const enemy = findEnemy();
                    if (!enemy) {
                        if (_status.auto) {
                            ui.click.auto();
                        }
                        game.checkResult();
                    }
                },
                dieAfter2: function (source) {
                    if (_status.mode != 'wujin_yongye') return;
                    //关卡清理阶段（gameStart=false）跳过
                    if (_status.gameStart === false) return;
                    //十常侍
                    if (this.isOut() && _status.mbmowang_return[this.playerid]) return;
                    if (source) {
                        if (source.identity != this.identity) {
                            source.draw(2);
                        }
                    } else {
                        game.delay();
                    }
                },
                showIdentity: function () {
                    game.broadcastAll(
                        function (player, identity) {
                            player.identity = identity;
                            player.node.identity.classList.remove("guessing");
                            player.identityShown = true;
                            player.ai.shown = 1;
                            player.setIdentity();
                            if (player.identity == "zhu") {
                                player.isZhu = true;
                            }
                            if (_status.clickingidentity) {
                                for (var i = 0; i < _status.clickingidentity[1].length; i++) {
                                    _status.clickingidentity[1][i].delete();
                                    _status.clickingidentity[1][i].style.transform = "";
                                }
                                delete _status.clickingidentity;
                            }
                        },
                        this,
                        this.identity
                    );
                },
            },
        },
        get: {
            logAi: function (targets, card) { },
            rawAttitude: function (from, to) {
                if (from.side == to.side) return 10;
                return -10;
            },
            showIdentity: function () {
                game.broadcastAll(
                    function (player, identity) {
                        player.identity = identity;
                        player.node.identity.classList.remove("guessing");
                        player.identityShown = true;
                        player.ai.shown = 1;
                        player.setIdentity();
                        if (player.identity == "zhu") {
                            player.isZhu = true;
                        }
                        if (_status.clickingidentity) {
                            for (var i = 0; i < _status.clickingidentity[1].length; i++) {
                                _status.clickingidentity[1][i].delete();
                                _status.clickingidentity[1][i].style.transform = "";
                            }
                            delete _status.clickingidentity;
                        }
                    },
                    this,
                    this.identity
                );
            },
        },
        skill: {
            ...globalSkill
        },
        characterPack: {},
        translate: {
            zhu: "主",
            zhong: "忠",
            fan: "反",
            yy_buff_linshi: "临时",
            //侍灵技能的翻译统一放在 yeyeServant.js 的 YEYE_SERVANT_TRANSLATE
        },
        cardPack: {},
        posmap: {},
    }, {
        translate: '永夜将临',
        extension: '永夜之境',
        intro: '',
        config: {
            yeyeIntro: {
                name: `<div style="padding:4px 8px;line-height:1.5;">${YEYE_INTRO.replace(/\n/g, '<br>')}</div>`,
                clear: true,
                nopointer: true,
            },
            duelMode: {
                name: '战斗为对决模式',
                intro: '开启后，战斗改为本体对决模式（欢乐）的阵营布局：玩家（主公）1 号位、队友（忠臣，敌人≥2名时）最后一个座位、敌人夹在中间。敌人只有 1 名时没有队友（共 2 人）。关闭则不加入队友。',
                init: true,
            },
            inquired: {
                name: '询问',
                intro: "开启后点击按钮不进行询问",
                init: false,
            },
            jade: {
                name: '玉璧系统',
                intro: "开启后相应功能将消耗玉璧",
                init: true,
            },
            ...YEYE_LEGACY_CONFIG, // [旧样式层]
            deleteModeNode: {
                name: '重置记录',
                init: false,
                restart: true,
                unfrequent: true,
                intro: '删除所有统计记录',
                onclick: function (bool) {
                    if (bool) {
                        var src = "是否删除所有记录并重新启动游戏？";
                        var d = confirm(src);
                        if (d == true) {
                            game.saveConfig('wujinYongyeData', undefined);
                            game.saveConfig('wujinYongyeRecord', undefined);
                            game.reload()
                        }
                    }
                }
            },
        },
    });

    // [旧样式层] 模式注册后按设置同步一次，避免依赖扩展初始化时机
    applyLegacyAssets();

}

export default mode;
