import {lib, game, ui, get, ai, _status} from '../../../noname.js';
export default {
	loadUpdateContent: { //参考《忽悠宇宙》
		// 👇 font-family: \'Songti SC\', \'SimSun\',
		name: '<div style="display:inline-block; padding: 6px 18px; background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255, 255, 255, 0.15); border-radius: 6px; color: #ffffff;  serif; font-size: 18px; text-shadow: 0 1px 2px rgba(0,0,0,0.8); cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">更新日志 · 查看</div>',
		onclick() {
			if (lib.node) game.open(lib.assetURL + 'extension/永夜之境/image/author/history_code.html');
			else {
				const hight = document.body.offsetHeight;
				const wigth = document.body.offsetWidth;
				let xinx_log = ui.create.div('',
					`<div style="z-index:2147483647">
						<div style="top:40px">
							<iframe width="${wigth}px" height="${hight - 40}px" src="${lib.assetURL}extension/永夜之境/image/author/history_code.html"
								style="box-sizing:border-box;border:medium double green">
							</iframe>
						</div>
					</div>`, ui.window);
				ui.create.div('',
					`<div style=" height: 40px; width: ${wigth}px; background-color:rgb(11, 208, 215); text-align: center; z-index: 2147483647">
						<font size="6em">》》》点击此处关闭《《《</font>
					</div>`, xinx_log, () => (xinx_log.delete()));
			}
		},
		clear: true,
	},
	qq: {
			name: '<span style="font-size:17px;">交流群·查看▶</span>',
			clear: true,
			onclick() {
				if (this.group == undefined) {
					var more = ui.create.div('.group',
						`永夜之境：</b>1076996650</br>
						<img src ="${lib.assetURL}extension/永夜之境/image/author/author_qqun.jpg" style ="width: 220px">`);
					this.parentNode.insertBefore(more, this.nextSibling);
					this.group = more;
					this.innerHTML = '<span style = "font-size:17px;">交流群·查看▼</span>';
				} else {
					this.parentNode.removeChild(this.group);
					delete this.group;
					this.innerHTML = '<span style = "font-size:17px; ">交流群·查看▶</span>';
				};
			},
	},
	video_skippable: {
		name: "允许点击跳过视频",
		init: false, // 默认值
		intro: "开启后，播放角色变身视频时点击屏幕可直接跳过。默认关闭。",
		onclick: function (item) {
			// 立即保存设置
			game.saveConfig('extension_永夜之境_video_skippable', item);
		}
	},
	/* video_enable: {
		name: "开启技能视频动画",
		init: true, // 默认开启
		intro: "开启后，播放角色变身视频时会播放全屏视频。默认开启。",
		onclick: function (item) {
			game.saveConfig('extension_永夜之境_video_enable', item);
		}
	}, */
	yeshunguang_end_video: {
        name: "开启叶瞬光退幻视频",
        init: true,
        intro: "开启后，播放叶瞬光退幻视频。",
        onclick: function(item) {
            game.saveConfig('extension_永夜之境_yeshunguang_end_video', item);
        }
    },
	custom_voice_switch: {
		name: "开启特定角色出牌语音",
		init: true, 
		intro: "开启后，同名角色将播放专属出牌语音。<br>目前支持角色：钟会、郭嘉。",
		onclick: function(item) {
			game.saveConfig('extension_永夜之境_custom_voice_switch', item);
		}
	},
	

}