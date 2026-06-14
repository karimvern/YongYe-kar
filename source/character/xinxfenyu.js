import { lib, game, ui, get, ai, _status } from '../../../../noname.js';





export let info = {
    name: 'xinxfenyu',
    connect: true,
    connectBanned: [],
    //武将分包
    characterSort: {
        xinxfenyu: {
            // 分包: ["武将ID","武将ID"],
            'xuandiesheji': ['xinx_hanzhuo', 'xinx_zhuowenjun', 'xinx_limu', 'xinx_xunguan', 'xinx_wuqi', 'xinx_wangmang', 'xinx_wuyuan',
                'fyrh_zuti', 'fyrh_lvzhi', 'fyrh_yuji', 'fyrh_weiqinghuoqubing', 'fyrh_pengyue', 'fyrh_pengyue', 'fyrh_chentang', 'fyrh_chenping'
                , 'fyrh_goujian', 'fyrh_shiyiguang', 'xinxhj_fyrh_weiqinghuoqubing'
            ],
            'xinx_xiaoyezisheji': ['xinx_lingfeng', 'xinx_zhugejing', 'xinx_lizhaoyi', 'fyrh_yuanchen', 'fyrh_bianrang', 'fyrh_simaying',
                'fyrh_fengxizhangnan', 'fyrh_qinwuyang', 'fyrh_zhangxiu', 'fyrh_chendao', 'fyrh_zhugejun', 'fyrh_dailaidongzhu', 'fyrh_maxiumatie'],
            'xinx_xiulisheji': ['fyrh_leisai', 'fyrh_dianci', 'fyrh_zaochuanqiu', 'fyrh_jiye', 'fyrh_anbian', 'fyrh_liumin', 'fyrh_qiangzhiemo', 'fyrh_jiaerjiali',
                'fyrhxiu_zhaoyun', 'fyrhxiu_jiangwei'],
            'xinx_tingyusheji': ['fyrh_duyu', 'fyrh_caocao', 'fyrh_jiangwei', 'fyrh_zhaoyun', 'fyrh_xuyou', 'fyrh_chenqun', 'fyrh_guanyu', 'fyrh_wangping',
                'fyrh_zhangfei', 'fyrh_jiachong', 'fyrh_xujing', 'fyrh_yanyan', 'fyrh_caozhi', 'fyrh_wangling', 'fyrh_qinhui', 'fyrh_liuyan', 'xinxhj_fyrh_liuyan',
                'fyrh_zhangjiao', 'fyrh_simayi', 'fyrh_liyuanba'],
            'xinx_xiahuaxuanlan': ['fyrh_daheita', 'fyrh_changyeyue', 'fyrh_xilian', 'fyrh_fuxuan', 'fyrh_huahuo', 'fyrhold_huahuo', 'fyrh_zhuangfangyi', 'fyrh_kelvdela'],
            'xinx_U': ['fyrhu_haozhao', 'fyrhu_machao', 'fyrhu_tongyuan', 'fyrhu_wuxian', 'fyrhu_lvbu', 'fyrhu_sunquan', 'fyrhu_zhugedan', 'fyrhu_zhonghui', 'fyrhu_zhengxuan'],
            'xinx_y': ['fyrh_caozhao', 'fyrh_haopu', 'fyrh_zhuyi', 'fyrhy_fugu'],
            'xinx_qitasheji': ['fyrh_guyu', 'fyrhbl_zhouyu', 'fyrh_xieqi', 'fyrh_fazheng', 'fyrh_zhenfu', 'fyrh_huaxiong', 'fyrh_zhengxiaotong',
                'fyrh_dengai', 'fyrh_luxun', 'fyrh_weijie', 'fyrh_zhangliao', 'fyrh_wangcheng', 'fyrh_weiyi', 'fyrh_gouxi', 'fyrh_simashao', 'fyrh_liuying',
                'fyrh_sunchen', 'fyrh_wanglang', 'fyrh_gongsunli', 'fyrh_xusheng'],

        }
    },
    //武将 'rare', 'epic', 'legend',['legend']
    character: {
        xinx_hanzhuo: ["male", "qun", 6, ['xinxfenjiao'], ['epic']],
        xinx_zhuowenjun: ["female", "shu", 3, ['xinxxiangfu', 'xinxyixin'], ['legend']],
        xinx_limu: ["male", "qun", 4, ['xinxsijiao'], ['epic']],
        xinx_xunguan: ["female", "jin", 4, ['xinxyuwei'], ['legend']],
        xinx_wuqi: ["male", "qun", 4, ['xinxcongzu', 'xinxyibian', 'xinxbailian'], ['legend']],
        xinx_wangmang: ["male", "qun", 4, ['xinxqingding', 'fyrhjianji'], ['rare']],
        xinx_wuyuan: ["male", "qun", 4, ['xinxyuanyuan'], ['rare']],
        xinx_lingfeng: ["male", "wu", 4, ['xinxjilang'], ['epic']],
        xinx_zhugejing: ["male", "wu", 3, ['xinxsian', 'xinxsizhan', 'xinxsitui'], ['legend']],
        xinx_lizhaoyi: {
            sex: "female",
            group: "shu",
            hp: 3,
            img: "extension/永夜之境/image/xinx_lizhaoyi.png",
            trashBin: ['legend'],
            skills: ['fyrhzhiwen', 'fyrhminnian', 'fyrhfenjue'],
            dieAudios: ["clan_xuncai"],
        },
        fyrh_leisai: ["female", "qun", 4, ['fyrhlihua', 'fyrhhuohuan'], ['border:xinx', 'epic']],
        fyrh_dianci: ["male", "qun", 4, ['fyrhzaoju', 'fyrhchongsheng'], ['border:xinx', 'legend']],
        fyrh_zaochuanqiu: ["male", "qun", 4, ['fyrhkeng'], ['border:xinx', 'legend']],
        fyrh_yuanchen: ["male", "shu", 4, ['fyrhzhansui', 'fyrhxiaoxian'], ['legend']],
        fyrh_jiye: ["female", "qun", 4, ['fyrhyouling', 'fyrhxianji'], ['border:xinx', 'rare']],
        fyrh_duyu: ["male", "jin", 4, ['fyrhzhenzhan', 'fyrhpozhu'], ['legend']],
        fyrh_caocao: ["male", "qun", 4, ['fyrhyulie', 'fyrhwenjue'], ['legend']],
        fyrh_jiangwei: ["male", "shu", 4, ['fyrhjizhi', 'fyrhzhiji'], ['legend']],
        fyrh_xuyou: ["male", "qun", 3, ['fyrhchenglue', 'fyrhshicai'], ['epic']],
        fyrh_zhaoyun: {
            sex: "male",
            group: "shu",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_zhaoyun.png",
            trashBin: ['rare'],
            skills: ['fyrhlongdan', 'fyrhyajiao'],
            dieAudios: ["jsrg_zhaoyun"],
        },
        fyrh_chenqun: {
            sex: "male",
            group: "wei",
            hp: 3,
            img: "extension/永夜之境/image/fyrh_chenqun.png",
            trashBin: ['legend'],
            skills: ['fyrhyinzhi', 'fyrhquanxin'],
            dieAudios: ["clan_chenqun"],
        },
        fyrh_bianrang: ["male", "qun", 4, ['fyrhzhanghua', 'fyrhyanfeng'], ['legend']],
        fyrh_zuti: {
            sex: "male",
            group: "jin",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_zuti.png",
            trashBin: ['legend'],
            skills: ['fyrhjiji'],
            dieAudios: ["litong"],
        },
        fyrh_lvzhi: ["female", "qun", 3, ['fyrhjunce'], ['epic']],
        fyrh_anbian: ["male", "qun", 4, ['fyrhruiqi'], ['border:xinx', 'legend']],
        fyrh_yuji: ["female", "qun", 3, ['fyrhquxing', 'fyrhwulan'], ['legend']],
        fyrh_weiqinghuoqubing: ["male", "qun", 4, ['fyrhjuemo'], ['epic']],
        xinxhj_fyrh_weiqinghuoqubing: {
            sex: "male",
            group: "qun",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_weiqinghuoqubing.png",
            trashBin: ['epic'],
            skills: ['oldfyrhjuemo'],
            dieAudios: ["fyrh_weiqinghuoqubing"],
        },
        fyrh_pengyue: ["male", "qun", 5, ['fyrhliebing', 'fyrhnaoji'], ['legend']],
        fyrh_chentang: ["male", "qun", 5, ['fyrhjiaobing'], ['legend']],
        fyrh_chenping: ["male", "qun", 3, ['fyrhjiedu', 'fyrhyouren'], ['epic']],
        fyrh_goujian: ["male", "qun", 6, ['fyrhtoulao'], ['rare']],
        fyrh_guanyu: {
            sex: "male",
            group: "shu",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_guanyu.png",
            trashBin: ['legend'],
            skills: ['fyrhwusheng', 'fyrhyijue'],
            dieAudios: ["re_guanyu"],
        },
        fyrh_liumin: ["male", "shu", 3, ['fyrhyizuo', 'fyrhlianzhi'], ['epic']],
        fyrh_qiangzhiemo: ["male", "qun", 4, ['fyrhshitang'], ['border:xinx', 'legend']],
        fyrh_wangping: ["male", "shu", 4, ['fyrhyizhen', 'fyrhzhibing'], ['epic']],
        fyrh_zhangfei: ["male", "shu", 4, ['fyrhyafeng', 'fyrhbaohe'], ['epic']],
        fyrh_guyu: ["male", "wu", 4, ['fyrhtuilang'], ['epic']],
        fyrhbl_zhouyu: ["male", "wu", 4, ['fyrhyingzi', 'fyrhbingfa'], ['epic']],
        fyrh_xieqi: ["male", "wei", 4, ['fyrhrangrang'], ['rare']],
        fyrh_jiachong: ["male", "jin", 3, ['fyrhxilong', 'fyrhzuiwo'], ['legend']],
        fyrh_xujing: {
            sex: "male",
            group: "shu",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_xujing.png",
            trashBin: ['epic'],
            skills: ['fyrhxuqi', 'fyrhzhiqi'],
            dieAudios: ["dc_xujing"],
        },
        fyrh_fazheng: {
            sex: "male",
            group: "shu",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_fazheng.png",
            trashBin: ['epic'],
            skills: ['fyrhyazi', 'fyrhxuanmi'],
            dieAudios: ["sb_fazheng"],
        },
        fyrh_zhenfu: {
            sex: "female",
            group: "wei",
            hp: 3,
            img: "extension/永夜之境/image/fyrh_zhenfu.png",
            trashBin: ['epic'],
            skills: ['fyrhluoshen', 'fyrhlenzen'],
            dieAudios: ["sb_zhenji"],
        },
        fyrh_huaxiong: ["male", "qun", 6, ['fyrhyaowu'], ['rare']],
        fyrh_zhengxiaotong: ["male", "wei", 4, ['fyrhxiushen', 'fyrhbaiwei'], ['legend']],
        fyrh_dengai: {
            sex: "male",
            group: "wei",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_dengai.png",
            trashBin: ['legend'],
            skills: ['fyrhzaoxian', 'fyrhtuntian'],
            dieAudios: ["pot_dengai"],
        },
        fyrh_luxun: {
            sex: "male",
            group: "wu",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_luxun.png",
            trashBin: ['legend'],
            skills: ['fyrhzhuying'],
            dieAudios: ["dc_sb_luxun"],
        },
        fyrh_weijie: {
            sex: "male",
            group: "jin",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_weijie.png",
            trashBin: ['legend'],
            skills: ['fyrhlunxuan', 'fyrhkansha'],
        },
        fyrh_shiyiguang: ["female", "qun", 3, ['fyrhlian', 'fyrhsu'], ['legend']],
        fyrh_zhangliao: {
            sex: "male",
            group: "wei",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_zhangliao.png",
            trashBin: ['legend'],
            skills: ['fyrhtuxi', 'fyrhzhiti'],
            dieAudios: ["clan_wuban"],
        },
        fyrh_jiaerjiali: ["male", "qun", 4, ['fyrhroubo', 'fyrhmianshu'], ['border:xinx', 'legend']],
        fyrh_yanyan: {
            sex: "male",
            group: "shu",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_yanyan.png",
            trashBin: ['epic'],
            skills: ['fyrhjuzhan', 'fyrhqingye'],
            dieAudios: ["yanyan"],
        },
        fyrh_simaying: {
            sex: "male",
            group: "jin",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_simaying.png",
            trashBin: ['epic'],
            skills: ['fyrhbianshi', 'fyrhege'],
        },
        fyrh_caozhi: {
            sex: "male",
            group: "wei",
            hp: 3,
            img: "extension/永夜之境/image/fyrh_caozhi.png",
            trashBin: ['epic'],
            skills: ['fyrhjiushi', 'fyrhluoying'],
        },
        fyrh_wangling: {
            sex: "male",
            group: "wei",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_wangling.png",
            trashBin: ['epic'],
            skills: ['fyrhjidang', 'fyrhzifu'],//, 'smyyingshi'
            dieAudios: ["wangling"],
        },
        fyrh_fengxizhangnan: {
            sex: "male",
            group: "shu",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_fengxizhangnan.png",
            trashBin: ['legend'],
            skills: ['fyrhxiejian', 'fyrhpijing'],
        },
        fyrh_qinwuyang: {
            sex: "male",
            group: "qun",
            hp: 5,
            img: "extension/永夜之境/image/fyrh_qinwuyang.png",
            trashBin: ['legend'],
            skills: ['fyrhbawu', 'fyrhweijie'],
        },
        fyrh_zhangxiu: {
            sex: "male",
            group: "qun",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_zhangxiu.png",
            trashBin: ['epic'],
            skills: ['fyrhfujie', 'fyrhxuzhong'],
        },
        fyrh_chendao: {
            sex: "male",
            group: "shu",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_chendao.png",
            trashBin: ['epic'],
            skills: ['fyrhwanglie'],
            dieAudios: ["pot_chendao"],
        },
        fyrh_zhugejun: {
            sex: "male",
            group: "qun",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_zhugejun.png",
            trashBin: ['epic'],
            skills: ['fyrhgenghuang', 'fyrhbisao', 'fyrhshouzhen'],
            dieAudios: ["dc_zhugejun"],
        },
        fyrh_wangcheng: {
            sex: "male",
            group: "jin",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_wangcheng.png",
            trashBin: ['epic'],
            skills: ['fyrhweiyu', 'fyrhmobei'],
            dieAudios: ['re_fazheng'],
        },
        fyrh_qinhui: {
            sex: "male",
            group: "qun",
            hp: 3,
            img: "extension/永夜之境/image/fyrh_qinhui.png",
            trashBin: ['epic'],
            skills: ['fyrhchuailing', 'fyrhhufu'],
            dieAudios: ["chengui"],
        },
        fyrh_dailaidongzhu: {
            sex: "male",
            group: "qun",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_dailaidongzhu.png",
            trashBin: ['rare'],
            skills: ['fyrhjiaxie', 'fyrhcangren'],
            dieAudios: ["mengyou"],
        },
        fyrh_liuyan: {
            sex: "male",
            group: "qun",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_liuyan.png",
            trashBin: ['epic'],
            skills: ['fyrhlietu', 'fyrhkuizong'],
            dieAudios: ["liuyan"],
        },
        xinxhj_fyrh_liuyan: {
            sex: "male",
            group: "qun",
            hp: 4,
            img: "extension/永夜之境/image/xinxhj_fyrh_liuyan.png",
            trashBin: ['epic'],
            skills: ['fyrhlietu', 'fyrhkuizong'],
            dieAudios: ["liuyan"],
        },
        fyrh_zhangjiao: {
            sex: "male",
            group: "qun",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_zhangjiao.png",
            trashBin: ['epic'],
            skills: ['fyrhyijin', 'fyrhhuangsheng', 'fyrhcanjue'],
            dieAudios: ["re_zhangjiao"],
        },
        fyrh_maxiumatie: {
            sex: "male",
            group: "qun",
            hp: 4,
            img: "image/character/maxiumatie.jpg",
            trashBin: ['rare'],
            skills: ['fyrhquxian', 'fyrhjiaoshi'],
            dieAudios: ["maxiumatie"],
        },
        fyrh_weiyi: {
            sex: "male",
            group: "jin",
            hp: 4,
            trashBin: ['rare'],
            img: "extension/永夜之境/image/fyrh_weiyi.png",
            skills: ['fyrhliecheng'],
            dieAudios: ['xinx_lvbu'],
        },
        fyrhxiu_zhaoyun: {
            sex: "male",
            group: "shu",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrhxiu_zhaoyun.png",
            skills: ['fyrhfuzhi', 'fyrhshunyi'],
            dieAudios: ['xinxzhu_zhaoyun'],
        },
        fyrh_simayi: {
            sex: "male",
            group: "wei",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/xinxying_simayi.png",
            skills: ['fyrhruluo', 'fyrhneiji'],
            dieAudios: ['xinxying_simayi'],
        },
        fyrh_gouxi: {
            sex: "male",
            group: "jin",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrh_gouxi.png",
            skills: ['fyrhchicui', 'fyrhhuanhuo'],
            dieAudios: ['db_wenyang'],
        },
        fyrh_simashao: {
            sex: "male",
            group: "jin",
            hp: 4,
            trashBin: ['rare'],
            img: "extension/永夜之境/image/fyrh_simashao.png",
            skills: ['fyrhjiabai'],
            dieAudios: ['jin_jsrg_simazhao'],
        },
        fyrh_daheita: {
            sex: "female",
            group: "xinx",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrh_daheita.png",
            skills: ['fyrhpouxi'],
            dieAudios: ['xinx_daheita'],
        },
        fyrh_changyeyue: {
            sex: "female",
            group: "xinx",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrh_changyeyue.png",
            skills: ['fyrhmenglong'],
        },
        fyrh_xilian: {
            sex: "female",
            group: "xinx",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrh_xilian.png",
            skills: ['fyrhningxi'],
            dieAudios: ['xinx_xilian'],
        },
        fyrh_fuxuan: {
            sex: "female",
            group: "xinx",
            hp: 3,
            trashBin: ['rare'],
            img: "extension/永夜之境/image/fyrh_fuxuan.png",
            skills: ['fyrhpitai', 'fyrhjishen'],
            dieAudios: ['xinx_fuxuan'],
        },
        fyrh_huahuo: {
            sex: "female",
            group: "xinx",
            hp: 3,
            trashBin: ['rare'],
            img: "extension/永夜之境/image/fyrh_huahuo.png",
            skills: ['fyrhqianyi'],
            dieAudios: ['xinx_huahuo'],
        },
        fyrh_liuying: {
            sex: "female",
            group: "xinx",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrh_liuying.png",
            skills: ['fyrhfuhuo', 'fyrhzhuguang'],
            dieAudios: ['xinx_liuying'],
        },
        fyrhold_huahuo: {
            sex: "female",
            group: "xinx",
            hp: 3,
            trashBin: ['rare'],
            img: "extension/永夜之境/image/fyrhold_huahuo.png",
            skills: ['oldfyrhqianyi'],
            dieAudios: ['xinx_huahuo'],
        },
        fyrhu_haozhao: {
            sex: "male",
            group: "wei",
            hp: 4,
            trashBin: ['rare'],
            img: "extension/永夜之境/image/fyrhu_haozhao.png",
            skills: ['fyrhzhengu'],
            dieAudios: ['haozhao'],
        },
        fyrhu_machao: {
            sex: "male",
            group: "qun",
            hp: 4,
            trashBin: ['epic'],
            img: "extension/永夜之境/image/fyrhu_machao.png",
            skills: ['fyrhzhuiming'],
            dieAudios: ['sp_machao'],
        },
        fyrh_zhuangfangyi: {
            sex: "female",
            group: "qun",
            groupBorder: "xinx",
            hp: 3,
            trashBin: ['rare'],
            img: "extension/永夜之境/image/fyrh_zhuangfangyi.png",
            skills: ['fyrhchunleidong', 'fyrhwanwusheng'],
        },
        fyrhu_tongyuan: {
            sex: "male",
            group: "qun",
            hp: 4,
            trashBin: ['epic'],
            img: "image/character/xia_tongyuan.jpg",
            skills: ['fyrhchaofeng'],
            dieAudios: ['xia_tongyuan'],
        },
        fyrhu_wuxian: {
            sex: "female",
            group: "shu",
            hp: 3,
            trashBin: ['epic'],
            img: "extension/永夜之境/image/fyrhu_wuxian.png",
            skills: ['fyrhyirong', 'clanmuyin'],
            tempname: ["clan_wuxian"],
            dieAudios: ['clan_wuxian'],
        },
        fyrh_kelvdela: {
            sex: "female",
            group: "xinx",
            hp: 3,
            trashBin: ['rare'],
            img: "extension/永夜之境/image/fyrh_kelvdela.png",
            skills: ['fyrhranlv', 'fyrhchongsu'],
            dieAudios: ['xinx_kelvdela'],
        },
        fyrhu_lvbu: {
            sex: "male",
            group: "qun",
            hp: 5,
            trashBin: ['rare'],
            img: "extension/永夜之境/image/fyrhu_lvbu.png",
            skills: ['fyrhwuqian'],
            dieAudios: ['xinx_lvbu'],
        },
        fyrhu_sunquan: {
            sex: "male",
            group: "wu",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrhu_sunquan.png",
            skills: ['fyrhminglv', 'fyrhzihun'],
            dieAudios: ['v_sunquan'],
        },
        fyrhu_zhugedan: {
            sex: "male",
            group: "wei",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrhu_zhugedan.png",
            skills: ['fyrhjuyi'],
            dieAudios: ['xinx_zhugedan'],
        },
        fyrhu_zhonghui: {
            sex: "male",
            group: "wei",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrhu_zhonghui.png",
            skills: ['fyrhyuzhi'],
            dieAudios: ['clan_zhonghui'],
        },
        fyrhu_zhengxuan: {
            sex: "male",
            group: "qun",
            hp: 3,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrhu_zhengxuan.png",
            skills: ['fyrhzhengjing'],
            dieAudios: ['huangchengyan'],
        },
        fyrh_haopu: {
            sex: "male",
            group: "shu",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrh_haopu.png",
            skills: ['fyrhjicheng'],
            dieAudios: ['haopu'],
        },
        fyrhxiu_jiangwei: {
            sex: "male",
            group: "shu",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrhxiu_jiangwei.png",
            skills: ['fyrhzhuyang'],
            tempname: ["ol_sb_jiangwei"],
            dieAudios: ['ol_sb_jiangwei'],
        },
        fyrh_sunchen: {
            sex: "male",
            group: "wu",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrh_sunchen.png",
            skills: ['fyrhxiongduan'],
            dieAudios: ['pot_sunchen'],
        },
        fyrh_caozhao: {
            sex: "male",
            group: "wei",
            hp: 4,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrh_caozhao.png",
            skills: ['fyrhxixi'],
            dieAudios: ['heyan'],
        },
        fyrh_gongsunli: {
            sex: "female",
            group: "qun",
            groupBorder: "xinx",
            hp: 3,
            trashBin: ['legend'],
            img: "extension/永夜之境/image/fyrh_gongsunli.png",
            skills: ['fyrhpaoleidi', 'fyrhpaohuanhun'],
        },
        fyrh_wanglang: {
            sex: "male",
            group: "qun",
            groupBorder: "xinx",
            hp: 3,
            img: "extension/永夜之境/image/fyrh_wanglang.png",
            trashBin: ['legend'],
            skills: ['fyrhhyygushe', 'fyrhhyyzuobao'],
            dieAudios: ["wanglang"],
        },
        fyrh_zhuyi: {
            sex: "male",
            group: "wu",
            hp: 4,
            img: "image/character/zhuji.jpg",
            trashBin: ['epic'],
            skills: ['fyrhkunzhao', 'fyrhranzhong'],
            dieAudios: ["zhuji"],
        },
        fyrhy_fugu: {
            sex: "male",
            group: "wei",
            hp: 3,
            img: "extension/永夜之境/image/fyrhy_fugu.png",
            trashBin: ['epic'],
            skills: ['fyrhligang', 'fyrhkenjian'],
            dieAudios: ['dc_dongzhao'],
        },
        fyrh_xusheng: {
            sex: "male",
            group: "wu",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_xusheng.png",
            trashBin: ['epic'],
            skills: ['fyrhyicheng'],
        },
        fyrh_liyuanba: {
            sex: "male",
            group: "qun",
            hp: 4,
            img: "extension/永夜之境/image/fyrh_liyuanba.png",
            trashBin: ['legend'],
            skills: ['fyrhwuji'],
        },




    },
    //武将称号
    characterTitle: {
        //武将ID:" ",
        xinx_lingfeng: "<font color=#52E0B3>设计：小叶子</font>",
        fyrh_caocao: "<font color=#70ADDC>胎出龙鳞</font>",
        fyrh_duyu: "<font color=#9160A4>万断其锋</font>",
        fyrh_jiangwei: "<font color=#F96C5D>七星危坠</font>",
        fyrh_guyu: "<font color=#52E0B3>设计：波罗</font>",
        fyrhbl_zhouyu: "<font color=#52E0B3>设计：波罗</font>",
        fyrh_xieqi: "<font color=#52E0B3>设计：突然消失</font>",
        fyrh_fazheng: "<font color=#76A5DB>设计：雨幕江南</font>",
        fyrh_zhenfu: "<font color=#76A5DB>设计：异议，白驹</font>",
        fyrh_huaxiong: "<font color=#76A5DB>设计：扬林，杏</font>",
        fyrh_zhengxiaotong: "<font color=#76A5DB>设计：雨幕江南</font>",
        fyrh_luxun: "<font color=#52E0B3>设计：屑</font>",
        fyrh_weijie: "<font color=#A4B5E5>设计：雨幕江南</font>",
        fyrh_wangcheng: "<font color=#D8E4E8>设计：正常人欧菲手</font>",
        fyrh_weiyi: "<font color=#D8E4E8>设计：正常人欧菲手</font>",
        fyrh_gouxi: "<font color=#D8E4E8>设计：正常人欧菲手</font>",
        fyrh_simashao: "<font color=#D8E4E8>设计：正常人欧菲手</font>",
        fyrh_liuying: "<font color=#D8E4E8>设计：拾壹</font>",
        fyrh_wanglang: "<font color=#D8E4E8>设计：滑溜溜</font>",
        fyrh_gongsunli: "<font color=#D8E4E8>设计：黄袍爱音</font>",
        fyrh_xusheng: "<font color=#D8E4E8>设计：屑</font>",


    },
    characterSubstitute: {//皮肤切换
        fyrh_caocao: [
            ['fyrh_caocao_shadow', ['ext:永夜之境/image/fyrh_caocao_shadow.png']],
        ],
        fyrh_wangping: [
            ['fyrh_wangping_shadow', ['ext:永夜之境/image/fyrh_wangping_shadow.png']],
        ],
    },
    //翻译
    translate: {
        fyrh_liyuanba: '廷李元霸',
        fyrh_liyuanba_prefix: '廷',
        fyrh_xusheng: '屑徐盛',
        fyrh_xusheng_prefix: '屑',
        fyrhy_fugu: 'Y傅嘏',
        fyrhy_fugu_prefix: 'Y',
        fyrh_zhuyi: 'Y朱异',
        fyrh_zhuyi_prefix: 'Y',
        fyrh_wanglang: '王朗',
        fyrh_gongsunli: '公孙离',
        fyrh_caozhao: 'Y曹肇',
        fyrh_caozhao_prefix: 'Y',
        xinx_y: 'yyuaN',
        fyrh_sunchen: '雨孙綝',
        fyrh_sunchen_prefix: '雨',
        fyrhxiu_jiangwei: '秀姜维',
        fyrhxiu_jiangwei_prefix: '秀',
        fyrh_haopu: 'Y郝普',
        fyrh_haopu_prefix: 'Y',
        fyrhu_zhengxuan: 'U郑玄',
        fyrhu_zhengxuan_prefix: 'U',
        fyrhu_zhonghui: 'U钟会',
        fyrhu_zhonghui_prefix: 'U',
        fyrhu_zhugedan: 'U诸葛诞',
        fyrhu_zhugedan_prefix: 'U',
        fyrhu_sunquan: 'U孙权',
        fyrhu_sunquan_prefix: 'U',
        fyrhu_lvbu: 'U吕布',
        fyrhu_lvbu_prefix: 'U',
        fyrh_kelvdela: '夏刻律德菈',
        fyrh_kelvdela_prefix: '夏',
        fyrhu_wuxian: 'U族吴苋',
        fyrhu_wuxian_prefix: 'U族',
        fyrhu_tongyuan: 'U童渊',
        fyrhu_tongyuan_prefix: 'U',
        fyrh_zhuangfangyi: '夏庄方宜',
        fyrh_zhuangfangyi_prefix: '夏',
        fyrhu_machao: 'U马超',
        fyrhu_machao_prefix: 'U',
        xinx_U: 'U',
        fyrhu_haozhao: 'U郝昭',
        fyrhu_haozhao_prefix: 'U',
        fyrh_liuying: '流萤',
        fyrhold_huahuo: '旧夏花火',
        fyrhold_huahuo_prefix: '旧夏',
        fyrh_huahuo: '夏花火',
        fyrh_huahuo_prefix: '夏',
        fyrh_fuxuan: '夏符玄',
        fyrh_fuxuan_prefix: '夏',
        fyrh_xilian: '夏昔涟',
        fyrh_xilian_prefix: '夏',
        fyrh_changyeyue: '夏长夜月',
        fyrh_changyeyue_prefix: '夏',
        fyrh_daheita: '夏黑塔',
        fyrh_daheita_prefix: '夏',
        xinx_xiahuaxuanlan: '夏花の绚烂',
        fyrh_simashao: '正司马绍',
        fyrh_simashao_prefix: '正',
        fyrh_gouxi: '正苟晞',
        fyrh_gouxi_prefix: '正',
        fyrh_simayi: '廷司马懿',
        fyrh_simayi_prefix: '廷',
        fyrhxiu_zhaoyun: '秀赵云',
        fyrhxiu_zhaoyun_prefix: '秀',
        fyrh_weiyi: '正魏乂',
        fyrh_weiyi_prefix: '正',
        xinxhj_fyrh_weiqinghuoqubing: '改玄蝶卫青霍去病',
        xinxhj_fyrh_weiqinghuoqubing_prefix: '改玄蝶',
        fyrh_maxiumatie: '叶马休马铁',
        fyrh_maxiumatie_prefix: '叶',
        fyrh_zhangjiao: '廷张角',
        fyrh_zhangjiao_prefix: '廷',
        fyrh_liuyan: '廷刘焉',
        fyrh_liuyan_prefix: '廷',
        xinxhj_fyrh_liuyan: '改廷刘焉',
        xinxhj_fyrh_liuyan_prefix: '改廷',
        fyrh_dailaidongzhu: '叶带来洞主',
        fyrh_dailaidongzhu_prefix: '叶',
        fyrh_qinhui: '廷秦桧',
        fyrh_qinhui_prefix: '廷',
        fyrh_wangcheng: '正王澄',
        fyrh_wangcheng_prefix: '正',
        fyrh_zhugejun: '叶诸葛均',
        fyrh_zhugejun_prefix: '叶',
        fyrh_chendao: '叶陈到',
        fyrh_chendao_prefix: '叶',
        fyrh_zhangxiu: '叶张修',
        fyrh_zhangxiu_prefix: '叶',
        fyrh_qinwuyang: '叶秦舞阳',
        fyrh_qinwuyang_prefix: '叶',
        fyrh_fengxizhangnan: '叶冯习张南',
        fyrh_fengxizhangnan_prefix: '叶',
        fyrh_wangling: '廷王凌',
        fyrh_wangling_prefix: '廷',
        fyrh_caozhi: '廷曹植',
        fyrh_caozhi_prefix: '廷',
        fyrh_simaying: '叶司马颖',
        fyrh_simaying_prefix: '叶',
        fyrh_yanyan: '廷严颜',
        fyrh_yanyan_prefix: '廷',
        fyrh_jiaerjiali: '秀加尔加里',
        fyrh_jiaerjiali_prefix: '秀',
        fyrh_zhangliao: '白张辽',
        fyrh_zhangliao_prefix: '白',
        fyrh_shiyiguang: '玄蝶施夷光',
        fyrh_shiyiguang_prefix: '玄蝶',
        fyrh_weijie: '雨卫玠',
        fyrh_weijie_prefix: '雨',
        fyrh_luxun: '屑陆逊',
        fyrh_luxun_prefix: '屑',
        fyrh_dengai: '白邓艾',
        fyrh_dengai_prefix: '白',
        fyrh_zhengxiaotong: '雨郑小同',
        fyrh_zhengxiaotong_prefix: '雨',
        fyrh_huaxiong: '华雄',
        fyrh_zhenfu: '白甄宓',
        fyrh_zhenfu_prefix: '白',
        fyrh_fazheng: '雨法正',
        fyrh_fazheng_prefix: '雨',
        fyrh_xujing: '廷许靖',
        fyrh_xujing_prefix: '廷',
        fyrh_jiachong: '廷贾充',
        fyrh_jiachong_prefix: '廷',
        fyrh_xieqi: '谢奇',
        fyrhbl_zhouyu: '周瑜',
        fyrh_guyu: '顾裕',
        fyrh_zhangfei: '廷张飞',
        fyrh_zhangfei_prefix: '廷',
        fyrh_wangping: '廷王平',
        fyrh_wangping_prefix: '廷',
        fyrh_qiangzhiemo: '秀枪之恶魔',
        fyrh_qiangzhiemo_prefix: '秀',
        fyrh_liumin: '秀刘敏',
        fyrh_liumin_prefix: '秀',
        fyrh_guanyu: '廷关羽',
        fyrh_guanyu_prefix: '廷',
        fyrh_goujian: '玄蝶勾践',
        fyrh_goujian_prefix: '玄蝶',
        fyrh_chenping: '玄蝶陈平',
        fyrh_chenping_prefix: '玄蝶',
        xuandiesheji: '玄蝶',
        xinx_xiaoyezisheji: '小叶子',
        xinx_xiulisheji: '秀丽',
        xinx_tingyusheji: '廷玉',
        xinx_qitasheji: '其他',
        xinx_zhuowenjun: '玄蝶卓文君',
        xinx_zhuowenjun_prefix: '玄蝶',
        xinx_hanzhuo: '玄蝶寒浞',
        xinx_hanzhuo_prefix: '玄蝶',
        xinx_limu: '玄蝶李牧',
        xinx_limu_prefix: '玄蝶',
        xinx_xunguan: '玄蝶荀灌',
        xinx_xunguan_prefix: '玄蝶',
        xinx_wuqi: '玄蝶吴起',
        xinx_wuqi_prefix: '玄蝶',
        xinx_wangmang: '玄蝶王莽',
        xinx_wangmang_prefix: '玄蝶',
        xinx_wuyuan: '玄蝶伍员',
        xinx_wuyuan_prefix: '玄蝶',
        xinx_lingfeng: '叶凌封',
        xinx_lingfeng_prefix: '叶',
        xinx_zhugejing: '叶诸葛靓',
        xinx_zhugejing_prefix: '叶',
        xinx_lizhaoyi: '叶李昭仪',
        xinx_lizhaoyi_prefix: '叶',
        fyrh_yuanchen: '叶袁綝',
        fyrh_yuanchen_prefix: '叶',
        fyrh_leisai: '秀蕾塞',
        fyrh_leisai_prefix: '秀',
        fyrh_dianci: '秀电次',
        fyrh_dianci_prefix: '秀',
        fyrh_zaochuanqiu: '秀早川秋',
        fyrh_zaochuanqiu_prefix: '秀',
        fyrh_jiye: '秀姬野',
        fyrh_jiye_prefix: '秀',
        fyrh_duyu: '廷杜预',
        fyrh_duyu_prefix: '廷',
        fyrh_caocao: '廷曹操',
        fyrh_caocao_prefix: '廷',
        fyrh_jiangwei: '廷姜维',
        fyrh_jiangwei_prefix: '廷',
        fyrh_zhaoyun: '廷赵云',
        fyrh_zhaoyun_prefix: '廷',
        fyrh_xuyou: '廷许攸',
        fyrh_xuyou_prefix: '廷',
        fyrh_chenqun: '廷陈群',
        fyrh_chenqun_prefix: '廷',
        fyrh_bianrang: '叶边让',
        fyrh_bianrang_prefix: '叶',
        fyrh_zuti: '玄蝶祖逖',
        fyrh_zuti_prefix: '玄蝶',
        fyrh_lvzhi: '玄蝶吕雉',
        fyrh_lvzhi_prefix: '玄蝶',
        fyrh_anbian: '秀岸边',
        fyrh_anbian_prefix: '秀',
        fyrh_yuji: '玄蝶虞姬',
        fyrh_yuji_prefix: '玄蝶',
        fyrh_weiqinghuoqubing: '玄蝶卫青霍去病',
        fyrh_weiqinghuoqubing_prefix: '玄蝶',
        fyrh_pengyue: '玄蝶彭越',
        fyrh_pengyue_prefix: '玄蝶',
        fyrh_chentang: '玄蝶陈汤',
        fyrh_chentang_prefix: '玄蝶',




        //技能翻译
        fyrhwuji: '武极',
        fyrhwuji_info: `锁定技，出牌阶段开始时，你将随机杀死三名角色，若不包括你，则改为你各对其造成1点伤害。`,
        fyrhyicheng: '疑城',
        fyrhyicheng_info: `每回合限一次，你可以重铸所有手牌，并视为使用一张【杀】或【闪】。对方先选择一项：1.改为弃置，每含一张此牌你便摸三张牌；2.若不含此牌，其失去1点体力。`,
        fyrhligang: '立纲',
        fyrhligang_info: `每轮开始时，你可声明一个点数，本轮此点数的牌均可被重铸，若此牌：为装备或伤害牌，你摸一张牌；为【桃】，你回复1点体力。`,
        fyrhkenjian: '恳谏',
        fyrhkenjian_info: `每轮限一次，其他角色准备阶段，你可以交给其一张牌，其失去此牌前，本回合下次体力回复由你选择回复角色；其失去此牌后，本回合下次伤害造成由你选择受伤角色。`,
        fyrhkunzhao: '困沼',
        fyrhkunzhao_info: `准备阶段，你可令一名角色交给你一张牌，其选择令你本回合出【杀】次数增加1至3次。`,
        fyrhranzhong: '燃忠',
        fyrhranzhong_info: `出牌阶段，若你出【杀】次数未耗尽，你可重铸任意张牌并失去1点体力；耗尽时，你可展示没有【杀】的手牌，回复1点体力并摸牌至体力值。`,
        fyrhhyygushe: '鼓舌',
        fyrhhyygushe_info: `出牌阶段，你可以拼点且目标增加牌堆顶的牌和最后进入${get.poptip('xinx_central')}的牌，若你拼点牌点数排名第：1.获得一张拼点牌并使用剩余一张拼点牌。2.弃置所有手牌并摸两张牌。3.受到2点伤害。4.分配本次拼点牌给你和拼点目标。`,
        fyrhhyyzuobao: '作保',
        fyrhhyyzuobao_info: `每回合限一次，你受伤时，若你的手牌数与体力值相等，你可摸一张牌并防止此伤害。`,
        fyrhpaoleidi: '泪笛',
        fyrhpaoleidi_info: `每回合限一次，你可于以下时机摸${get.poptip('xinx_central')}花色数张牌并将中央区的牌洗入牌堆：造成/受到伤害时；不因使用失去牌后。`,
        fyrhpaohuanhun: '涣魂',
        fyrhpaohuanhun_info: `转换技，你一次性获得至少三张牌后，可将本回合下一阶段替换为你的阳/阴：摸牌阶段/出牌阶段；然后重置${get.poptip('fyrhpaoleidi')}。若获得的牌数大于三，你可将你的阶段重新排序。`,//若首阶段与上次排序的首阶段不同，你额外执行之。
        fyrhxixi: '犀嬉',
        fyrhxixi_info: `出牌阶段限一次，你可以令一名其他角色回复1点体力，再视为对其使用一张伤害值为5、每响应一次伤害值便−1、不能被抵消的【决斗】，你与其均可摸两张牌视为响应此牌，均摸牌后，均不能再响应。`,
        fyrhxiongduan: '凶断',
        fyrhxiongduan_info: `出牌阶段，你可以失去1点体力，展示牌堆顶四张牌并选择一项：1.置于牌堆顶两张牌；2.摸两张牌；3.视为使用【兵临城下】。然后你展示并获得牌堆顶第四张牌，若之非基本牌，你该次选择项本回合失效。`,
        fyrhnewzhuyang: '逐阳',
        fyrhnewzhuyang_info: `主要阶段结束时，你可以与一名角色拼点，若你赢，你可以使用一张拼点牌并摸两张牌。`,
        fyrhzhuyang: '逐阳',
        fyrhzhuyang_info: `使命技，<u>主要阶段结束时，你可以与一名角色拼点，若你赢，你可以使用一张拼点牌并摸两张牌</u>；若你没赢，你失去此后本阶段赢的效果或1点体力。
<br>成功：若你回合内每个主要阶段均以此法使用过牌，你获得一个仅保留划线描述的${get.poptip('fyrhnewzhuyang')}。
<br>失败：回合结束时，若你本回合未以此法使用过牌，你回复所有体力，获得${get.poptip('kunfen')}。`,
        fyrhjicheng: '岌城',
        fyrhjicheng_info: `出牌阶段，你可以拼点，若你没赢，你本回合手牌上限-X（X为红色拼点牌数），然后你执行能令你手牌数等于手牌上限的一项：1.摸两张牌；2.将一张牌当【决斗】使用；3.将手牌数调整至手牌上限，结束回合。`,
        fyrhzhengjing: '整经',
        fyrhzhengjing_info: `转换技，你可以视为使用：<br>
        ①【杀】②【火攻】③【万箭齐发】④【过河拆桥】<br>⑤【闪】⑥【决斗】⑦【无中生有】⑧【铁索连环】<br>⑨【酒】⑩【借刀】⑪【桃园结义】⑫【顺手牵羊】<br>⑬【桃】⑭【无懈】⑮【五谷丰登】⑯【南蛮入侵】周始：你可以调换任意两项的顺序。`,
        fyrhyuzhi: '迂志',
        fyrhyuzhi_info: `锁定技，出牌阶段开始时，你将体力值调整至任意值并摸等量张牌，然后展示手牌，若【杀】的数量小于此值，你受到与这些【杀】等量点伤害并弃置之。`,
        fyrhjuyi: '举义',
        fyrhjuyi_info: `每轮第X个回合开始时，你可以摸2X张牌，然后X不再变化。`,
        fyrhminglv: '明虑',
        fyrhminglv_info: `你的回合仅有出牌阶段；你可以使用弃牌堆中的牌，于结算后将之洗入牌堆。`,
        fyrhzihun: '滋昏',
        fyrhzihun_info: `锁定技，当你于一回合使用至少第<font color="#E53935">4</font>张牌后，你失去1点体力；当牌堆低于弃牌堆时，你获得牌堆，然后<font color="#E53935">牌数</font>-1。`,
        fyrhwuqian: '无前',
        fyrhwuqian_info: `你可以将场上所有牌当伤害等量的【决斗】或【杀】使用。`,
        fyrhranlv: '燃律',
        fyrhranlv_info: `${get.poptip('xinx_fazeji')}，其他角色于摸牌阶段后执行一个弃牌阶段。`,
        fyrhchongsu: '重塑',
        fyrhchongsu_info: `出牌阶段，汝可令一名角色于本阶段结束后执行一个刻律德菈武将牌上的技能拥有的阶段，随后刻律德菈移动本技能。`,
        fyrhyirong: '移荣',
        fyrhyirong_info: `出牌阶段每项限一次，你可以：X.将手牌数调整至X，或将X调整至手牌数，然后X-1。（X为你的手牌上限）`,
        fyrhchaofeng: '朝凤',
        fyrhchaofeng_info: `出牌阶段限一次，你可以依次执行：1.摸两张牌；2.重铸一张非基本牌；3.执行前X项（X为你攻击范围）；4.使用一张牌。`,
        fyrhchunleidong: '春雷动',
        fyrhchunleidong_info: `你可以作废你使用的基本牌，以令一名角色进行【闪电】判定，若判定失败则你弃置三张手牌。`,
        fyrhwanwusheng: '万物生',
        fyrhwanwusheng_info: `锁定技，你将一次性减少多点体力或手牌时，若此时该值不足以完成消耗，则改为增多等值。`,
        fyrhzhuiming: '追命',
        fyrhzhuiming_info: `出牌阶段开始时，你可以将任意张牌当【杀】使用，此【杀】结算后，目标选择一项：令你获得这些牌，再交给你等量张牌；你可以再次发动${get.poptip('fyrhzhuiming')}。`,
        fyrhzhengu: '镇骨',
        fyrhzhengu_info: `当你使用${get.poptip('xinx_jishipai')}时，你可以将一项调整至与另一项相等（变化量至多为5）：1. 目标数；2. 手牌数；3.3。`,
        oldfyrhqianyi: '千役',
        oldfyrhqianyi_info: `锁定技，轮次开始时，你以场上一名存活的其他角色的武将牌进行一个仅于以下时机登场的隐匿：轮次结束时；失救时。`,
        fyrhfuhuo: '伏火',
        fyrhfuhuo_info: `锁定技，你使用牌时判定：若为伤害牌，你受到1点火焰伤害并获得判定牌。若你因此濒死，令你技能中的数字翻倍。`,
        fyrhzhuguang: '逐光',
        fyrhzhuguang_info: `转换技，阳：你受到伤害后；阴：你造成伤害后，你可以回复1点体力并摸1张牌。`,
        fyrhqianyi: '千役',
        fyrhqianyi_info: `轮次开始或出牌阶段，你以随机一张武将牌作为隐匿，只在体力扣减后登场。`,
        fyrhpitai: '否泰',
        fyrhpitai_info: `每轮各限一次，你体力值或手牌数变化至唯一最少时可将之调整至另一值。`,
        fyrhjishen: '计神',
        fyrhjishen_info: `准备阶段，你可卜算3，${get.poptip('fyrh_fuxuanjishen')}你区域及以内的牌也为可调动对象。`,
        fyrhningxi: '凝昔',
        fyrhningxi_info: `出牌阶段限一次，你可以分配两点冰冻伤害于不同角色，然后回合结束时这些角色将因此变化的手牌数与体力值回调至发动前。`,
        fyrhmenglong: '朦胧',
        fyrhmenglong_info: `每回合限一次，你可于以下某个时机时摸两张牌，并于本回合结束时依次执行其余项：出牌阶段；对一名角色造成1点伤害；受到1点伤害。`,
        fyrhpouxi: '剖析',
        fyrhpouxi_info: `出牌阶段每项限一次，你可：N.令一名角色重铸N张牌并展示至少一张牌，然后将N改为展示的类别数并摸变化数张牌，N初始为2。`,
        fyrhjiabai: '假拜',
        fyrhjiabai_info: `出牌阶段开始时，你令一名其他角色使用四张【杀】，未足数移至下家继续使用，直至耗尽、无人可出或你成为【杀】的目标，然后本轮你的手牌数恒为X（X为结算中成为【杀】目标的角色数）。`,
        fyrhchicui: '驰摧',
        fyrhchicui_info: `每轮限三次，你可于一名角色使用【杀】结算结束后视为对其使用一张【杀】，若造成伤害，其可令你摸此技能剩余次数张牌以耗尽之。`,
        fyrhhuanhuo: '唤祸',
        fyrhhuanhuo_info: `锁定技，你恰使用一张牌的回合结束时，若你本回合未造成伤害，${get.poptip('fyrhchicui')}本轮使用次数+1。`,
        fyrhruluo: '入洛',
        fyrhruluo_info: `限定技，出牌阶段，你可以对与你体力值相同的角色各造成2点伤害，然后你分配3点回复。`,
        fyrhneiji: '内忌',
        fyrhneiji_info: `你对一名角色造成伤害后，可以令其获得${get.poptip('fyrhruluo')}。司马懿的每个其他技能占据一个手牌上限。`,
        fyrhfuzhi: '福至',
        fyrhfuzhi_info: `每回合限一次，当你放弃使用【闪】时，你可发起两次拼点，若拼点牌中有红桃牌或【桃】，则你本回合你受到的伤害值改为0，若你均赢，你分配所有拼点牌。`,
        fyrhshunyi: '顺意',
        fyrhshunyi_info: `每回合限一次，当你需要使用【杀】时，你可进行两次判定，若判定牌中有伤害牌或【酒】，则你视为使用之再将手牌数摸至6，若均没有，你卜算你的所有判定牌。`,
        fyrhliecheng: '裂城',
        fyrhliecheng_info: `每三张【杀】结算完成或你失去所有手牌后，你可将手牌数调整为4并展示手牌，使用其中的【杀】，重铸其中第二次因此展示的牌。`,
        fyrhquxian: '驱险',
        fyrhquxian_info: `你指定或成为伤害牌唯一目标时，你可令此牌多结算一次，此牌被响应后你获得使用者一张牌。`,
        fyrhjiaoshi: '角势',
        fyrhjiaoshi_info: `出牌阶段限一次，你可获得一名其他角色一张牌并可将一张牌交给另一名角色。然后因此失去牌的角色视为对一名因此获得牌的角色使用一张【杀】。`,
        fyrhyijin: '蚁尽',
        fyrhyijin_info: `若其他角色只有一张手牌，你可见且可以使用或打出之。你使用黑桃牌后，可以令一名角色将两张手牌移出游戏至你使用其他花色的牌。`,
        fyrhhuangsheng: '蝗生',
        fyrhhuangsheng_info: `摸牌阶段，你额外摸X张牌（X为手牌数最小的角色数）。你的手牌数首次达到九后，杀死一名从来没计入过「蝗生」的角色。`,
        fyrhcanjue: '蚕觉',
        fyrhcanjue_info: `限定技，洗牌时，你可以令所有角色弃置所有牌，下次【桃】被摸取后，所有角色摸四张牌。`,
        fyrhlietu: '裂土',
        fyrhlietu_info: `你累计使用三张牌后，若结算中只有你失去过牌，你可以摸三张牌。`,
        fyrhkuizong: '睽宗',
        fyrhkuizong_info: `限定技，出牌阶段，你可以令一名其他角色获得基本牌各一张，其失去一张后你摸两张牌。其均失去前，你使用牌没有次数限制。`,
        fyrhjiaxie: '假挟',
        fyrhjiaxie_info: `出牌阶段每项限一次，你可以将一张牌当做【桃】/【无中生有】对一名角色使用，若如此做，直到你下回合开始，其获得牌/体力变化后，你可以弃置其两张牌。`,
        fyrhcangren: '藏刃',
        fyrhcangren_info: `每回合结束时，若有【杀】因弃置进入弃牌堆，你可以使用这些牌，若未造成伤害，你将此牌交给一名目标角色。`,
        fyrhchuailing: '揣令',
        fyrhchuailing_info: `出牌阶段开始时，你可以令任意名体力值不小于你的角色各重铸一张牌，然后你获得其中点数最大的【闪】，使用点数小于之的牌。`,
        fyrhhufu: '狐抚',
        fyrhhufu_info: `当一名角色使用牌时，若其体力值为1/2，你可以重铸一张同花色的牌，令之当【决斗】/【杀】结算。`,
        visible_fyrhmobei: '明置',
        fyrhweiyu: '未誉',
        fyrhweiyu_info: `锁定技，转换技，有角色①摸两张牌；②失去两张牌；③受到1点伤害后，你额外执行之或令当前回合角色反向执行之。`,
        fyrhmobei: '漠悲',
        fyrhmobei_info: `你可将任意手牌替换为不计入手牌上限的【影】并明置之，以无效目标为你的牌，此牌使用者亦可重铸你${get.poptip('fyrhweiyu')}所在项张【影】，你因此失去所有【影】后，此牌对你强行生效且不可响应。`,
        fyrhgenghuang: '耕荒',
        fyrhgenghuang_info: `你不因本技能摸牌时可以少摸一张并进行判定，然后多摸你区域中与判定同颜色牌数张牌。`,
        fyrhbisao: '敝扫',
        fyrhbisao_info: `你不因本技能弃牌后可以多弃一张并进行判定，然后使用弃牌中与判定颜色相同的牌。`,
        fyrhshouzhen: '守真',
        fyrhshouzhen_info: `你可将你的判定结果改为你上次判定结果。`,
        fyrhwanglie: '往烈',
        fyrhwanglie_info: `锁定技，额定回合结束时，你执行一个所有角色仅能使用共计X张牌的额外回合（X为本回合使用牌数）。`,
        fyrhfujie: '符节',
        fyrhfujie_info: `每回合限一次，你可以重铸至少两张点数连续的牌，视为对等量名角色各使用一张【桃】，然后你令其中体力值不小于X的角色选择一项：1.重铸一张点数于此区间的牌；2.受到你对其造成的2点雷电伤害（X为你以此法重铸的牌数）。`,
        fyrhxuzhong: '蓄众',
        fyrhxuzhong_info: `出牌阶段，你可以观看牌堆顶三张牌，然后获得其中点数与你手牌均不同且在点数最大与最小之间的牌，若你没有以此法获得牌，则你失去1点体力，获得这些牌然后此技能本回合失效。`,
        fyrhbawu: '霸武',
        fyrhbawu_info: `锁定技，连招技（基本牌+伤害牌），你横置并弃置一名目标一张牌，若你已横置则改为你摸一张牌并重置。`,
        fyrhweijie: '巍阶',
        fyrhweijie_info: `若你处于连招状态，你可视为使用一张【决斗】；若你已横置，你可视为使用一张无次数限制的【杀】。若均满足，此技能失效。`,
        fyrhxiejian: '协艰',
        fyrhxiejian_info: `你可将一张牌当无距离次数限制的【杀】或【桃】对一名手牌数为X倍数的角色使用，结算后目标弃置至少一张牌（X为本局因此弃置的总牌数+1）。`,//你获得弃置的牌
        fyrhpijing: '披荆',
        fyrhpijing_info: `结束阶段，你可令${get.poptip('fyrhxiejian')}中X减至1并摸减少值张牌。然后至你下回合开始，每回合开始时，你可与当前回合角色拼点，若你拒绝或没赢其可对你使用一张【杀】。`,
        fyrhjidang: '绩宕',
        fyrhjidang_info: `你使用【杀】时，可以令一名参与者摸牌直到摸到【杀】，每摸两张，你弃置其三张牌；每摸五张，你对其造成1点伤害。`,
        fyrhzifu: '自缚',
        fyrhzifu_info: `出牌阶段限两次，你可以将一张【杀】置于牌堆第一张【闪】之下；获得牌堆第一张【杀】前的所有非伤害牌。`,
        fyrhjiushi: '酒诗',
        fyrhjiushi_info: `你可以视为使用一张【酒】并选择一项：①将武将牌翻至背面；②重铸此时你能使用的所有牌。你使用【酒】没有次数限制。`,
        fyrhluoying: '落英',
        fyrhluoying_info: `锁定技，出牌阶段开始时，你使用至多七张牌，然后上限更改为此使用牌数。`,
        fyrhbianshi: '变势',
        fyrhbianshi_info: `目标含你的牌结算后，你可弃置一名角色两张牌并令另一名角色摸两张牌。若两者手牌数大小关系改变，因此弃牌者可对摸牌者使用一张【杀】；若未改变，此技能本回合失效。`,
        fyrhege: '扼戈',
        fyrhege_info: `出牌阶段限一次，你可选择场上至多X张装备牌并令装备这些牌的角色将之收回（X为本回合失去过牌的角色数）。`,
        fyrhjuzhan: '拒战',
        fyrhjuzhan_info: `其他角色对你使用牌时，若其本轮已对你使用过牌，你可以获得其两张牌并令之无效。你对其他角色使用牌时，若你本轮已对其使用过牌，可以改为令其对你使用之。`,
        fyrhqingye: '清野',
        fyrhqingye_info: `锁定技，其他角色回合外失去的【杀】会占用其下个回合的出【杀】上限。`,
        fyrhroubo: '肉博',
        fyrhroubo_info: `出牌阶段限一次，你可以明置任意张【杀】摸等量张牌，然后视为使用【决斗】。明置【杀】共占用你1点手牌上限，濒死结算中，这些牌视为一张【桃】。`,
        fyrhmianshu: '面束',
        fyrhmianshu_info: `你不能使用暗置【杀】，不能打出明置【杀】。出牌阶段，你可以失去本技能，以此视为对自己使用伤害+1且不能被响应的【杀】，若本回合为你脱离濒死后的你执行的首回合，则改为指定一名其他角色。`,
        fyrhsu: '溯',
        fyrhsu_info: `锁定技，你回合内，你的手牌视为弃牌堆顶的${get.poptip('xinx_jishipai')}，且此牌的目标与原实体牌相同。`,
        fyrhlian: '涟',
        fyrhlian_info: `你可以将【闪】当任意${get.poptip('xinx_jishipai')}使用，然后令你一个技能于你再使用X张牌之前或之后失效（X为此牌目标数）。`,
        fyrhsu_append: `<span style="font-family: yuanli">道是水柔无性气，急声声怒慢生悲。</span>`,
        fyrhtuxi: '突袭',
        fyrhtuxi_info: `摸牌/弃牌阶段，你可以少摸/多弃任意张牌并依次视为使用等量张【顺手牵羊】/【杀】，且无距离限制。`,
        fyrhzhiti: '止啼',
        fyrhzhiti_info: `你攻击范围的角色于其出牌阶段获得牌时，你可以令其移出这些牌。你回合开始时，你获得其中半数向上张牌，其获得其余的牌。`,
        fyrhlunxuan_bagua: '八卦阵',
        fyrhlunxuan_bagua_info: `当你需要使用或打出一张【闪】时，你可以进行判定，若判定结果为你移出牌中的花色，视为你使用或打出了一张【闪】。`,
        fyrhlunxuan: '论玄',
        fyrhlunxuan_info: `每轮开始时，若你没有移出牌，你可以移出任意张花色不同的牌并摸等量张牌；若你装备区没有防具牌，你视为装备着生效花色为因此移出牌的【八卦阵】，并于发动后，获得其中一张与一名角色一张牌。`,
        fyrhkansha: '看杀',
        fyrhkansha_info: `目标为你的【杀】结算两次；均结算后，若仅造成一次伤害，你可以摸两张牌，若均未造成伤害，你可以视为使用一张【杀】。`,
        fyrhzhuying: '烛营',
        fyrhzhuying_info: `你可以将手牌数调整至2，视为对一名角色使用【火攻】，或视为对将对你生效的锦囊牌使用【无懈可击】。`,
        fyrhzaoxian: '凿险',
        fyrhzaoxian_info: `额定回合结束后，你可以获得一个额定摸牌数、攻击范围、出杀上限+X的额外回合，X为距你上次发动本技能所过轮次，至多为5。`,
        fyrhtuntian: '屯田',
        fyrhtuntian_info: `锁定技，你于回合外失去牌时，摸等量张牌并令你下次发动${get.poptip('fyrhzaoxian')}时X+1。`,
        fyrhxiushen: '修身',
        fyrhxiushen_info: `转换技，你对自己使用牌后，可将手牌数调整至①3；②6。<br>你受到伤害后，可重新分配两项数值，且变化值不能超过你已损失体力值。`,
        fyrhbaiwei: '拜未',
        fyrhbaiwei_info: `限定技，其他角色回合结束时，你可以视为对其使用一张【火攻】，然后你可以收回场上所有装备牌，再视为对其使用一张，若如此做，其也可以收回场上所有装备牌，改为其对你使用。`,
        fyrhyaowu: '耀武',
        fyrhyaowu_info: `锁定技，你的非【杀】基本牌视为【决斗】，你以此法造成伤害后，将手牌摸至体力上限。`,
        fyrhluoshen: '洛神',
        fyrhluoshen_info: `准备阶段，你可以${get.poptip('3d_jiansuo')}一张【闪】并获得之与期间亮出的黑色牌，以此法获得的牌不计入手牌上限。`,
        fyrhlenzen: '冷譖',
        fyrhlenzen_info: '你与其他角色于满足条件时可以对彼此发动【寒冰剑】或【雌雄双股剑】，因此弃置的牌加入你下次因此摸的牌。',
        fyrhyazi: '睚眦',
        fyrhyazi_info: '锁定技，你抵消其他角色对你使用的【杀】或普通锦囊牌方式改为：对其无距离限制、不可响应的使用另一者，然后若因此对其造成了伤害，你摸两张牌。',
        fyrhxuanmi: '渲迷',
        fyrhxuanmi_info: `出牌阶段各限一次，你可以令一名其他角色视为使用一张【顺手牵羊】或【杀】，且优先指定你为目标，若不能，改为由你指定目标。`,
        fyrhxuqi: '虚奇',
        fyrhxuqi_info: `出牌阶段开始时，你可以重铸至多一半手牌，然后令一名其他角色再重铸你一半手牌，最后手牌中经过了多次重铸的牌可以当做${get.poptip('suijiyingbian')}使用。`,
        fyrhzhiqi: '置器',
        fyrhzhiqi_info: `若你手牌中有保留了三轮的牌，你可以视为使用一张【无懈可击】并获得一张【影】，令下次发动${get.poptip('fyrhxuqi')}多选择一名其他角色。`,
        fyrhxilong: '洗龙',
        fyrhxilong_info: '回合结束时，你可以视为依次使用【火攻】【过河拆桥】【借刀杀人】。你可以获得流程中出现的牌。',
        fyrhzuiwo: '罪我',
        fyrhzuiwo_info: '若你上一张失去的牌为【杀】，你可以令一名其他角色弃置你一张手牌以视为使用【无懈可击】或【闪】。',
        fyrhrangrang: '壤壤',
        fyrhrangrang_info: `准备阶段或当你受到伤害后，你可以摸一张牌，若与上一次时机不同，改为三张。`,
        fyrhyingzi: '英姿',
        fyrhyingzi_info: `你可以跳过摸牌阶段，依次视为使用【无中生有】【洞烛先机】【火攻】。`,
        fyrhbingfa: '兵发',
        fyrhbingfa_info: `限定技，准备阶段，你可以收回装备区内所有牌并摸X张牌，令本回合${get.poptip('fyrhyingzi')}中的所有牌名改为【火攻】（X为收回牌数的平方）。`,
        fyrhyizhen: '壹阵',
        fyrhyizhen_info: `锁定技，每个回合结束时，你弃置保留在你手牌中三个回合的牌并摸四张牌。累计弃置所有花色后，你清空记录并进行一个额外回合。`,
        fyrhzhibing: '制兵',
        fyrhzhibing_info: `你可以移动场上至多X张装备牌并视为使用一张${get.poptip('suijiyingbian')}，结算后结束当前回合。（X为${get.poptip('fyrhyizhen')}未记录的花色数）。`,
        fyrhyafeng: '压风',
        fyrhyafeng_info: `出牌阶段，若你手牌中仅有X张【杀】，你可以移出其余手牌并摸四张牌。（X为本轮你发动此技能的次数）`,
        fyrhbaohe: '暴喝',
        fyrhbaohe_info: `轮次结束时，若你为本轮失去【杀】最少或之一的角色，你可以依次使用任意张手牌。（可使用移出牌）`,
        fyrhtuilang: '推浪',
        fyrhtuilang_info: `当你失去过的总牌数变为3的整数倍时，你可以摸两张牌，然后可以弃置任意张牌。`,
        fyrhshitang: '失膛',
        fyrhshitang_info: `锁定技，你的弃牌阶段改为轮流将你的手牌和牌堆顶的牌与其他角色拼点，你重复此流程直到你拼点赢和没赢均有过；有角色于此阶段失去最后一张手牌时，你须移出${get.poptip('xinx_central')}的一张${get.poptip('xinx_jishipai')}视为使用之，你优先选择其中【杀】。`,
        fyrhyizuo: '翼佐',
        fyrhyizuo_info: "出牌阶段限一次，你可以令一名角色观看你的手牌，你与其同时选择其中一张牌，然后你可以将被选择的所有牌当【无中生有】或【桃】令你或其使用。你造成伤害后，对自己发动一次本技能。",
        fyrhlianzhi: '连帜',
        fyrhlianzhi_info: "当你失去最后一张手牌后，你可以获得三张【影】；你失去手牌中最后一张【影】后，你可以展示手牌，然后摸三张牌。",
        xinxfenjiao: '偾骄',
        xinxfenjiao_info: "锁定技，当你一回合失去共至少X张牌后（X为你体力上限与额定摸牌数之差），你调整额定摸牌数（X须为正），体力上限+1，本回合不能使用牌。",
        xinxfenjiao_append: `<span style="font-family: yuanli">野树滴残龙战血，曦车碾下朝霞屑。</span>`,
        xinxxiangfu: '相赴',
        pre_xinxxiangfu: '相赴',
        xinxxiangfu_append: `<span style="font-family: yuanli">每轮各限一次，你可以与一名其他角色将手牌向彼此调整一张，
        按${get.poptip("xinx_shoupaichazhi")}变化视为使用牌:
        <br>相思·正负性不变，[杀]；相逢·变为 0，[酒]；
        <br>相失·变为相反数，[闪]；相守·未变化，[桃]。
        </span>`,
        xinxxiangfu_info: `每轮每种牌名限一次。当你需要使用一张基本牌时，若存在与此牌对应${get.poptip({
            id: "xinx_shoupaichazhi",
            name: "差值",
            info: "你与该角色手牌数之差",
        })}的其他角色，你可以选择一名并记录之，
        若你与其手牌数不同，手牌数多者弃一张牌，少者摸一张牌。然后按记录前你与其手牌数之差，你视为使用此牌：
        <br>相思·差值不小于±3，【杀】；
        <br>相逢·差值为±2，【酒】；
        <br>相失·差值为±1，【闪】；
        <br>相守·差值为0，【桃】。
        `,
        xinxyixin: '一心',
        xinxyixin_info: `锁定技，若你记录的角色为唯一一名被记录的角色，且其未对除你外的角色发动过${get.poptip('xinxxiangfu')}，其视为拥有${get.poptip('xinxxiangfu')}。`,
        xinxyixin_append: `<span style="font-family: yuanli">锁定技，唯一参与${get.poptip('xinxxiangfu')}的其他角色视为拥有之。
        <br><br>愿得一人心，白头不相离。</span>`,
        xinxsijiao: '饲骄',
        xinxsijiao_append: `<span style="font-family: yuanli">重铸0张牌、明置已明置的牌、摸牌至小于等于当前手牌数的牌，皆是不可执行的行为。
         <br><br>却秦守代著威名，大厦全凭一木撑。</span>`,
        xxinxsijiao_info: `锁定技，你使用牌时执行下列首个可执行项：
        <br>1.若你有明置的基本牌 ，重铸［0］张，否则执行下一项；
        <br>2.明置［1］张暗置的牌，否则执行下一项；
        <br>3.若你的手牌数小于［2］，则摸牌至［2］张，否则执行下一项；
        <br>4.以上所有［］的数字+1。`,
        xinxsijiao_info: `锁定技，你使用牌时执行首个可执行项:
        <br>1.重铸[0]张明置基本牌；
        <br>2.明置[1]张牌；
        <br>3.摸牌至[2]张；
        <br>4.以上数值+1。`,
        visible_xinxsijiao: "明置",
        xinxyuwei: '逾围',
        xinxyuwei_info: `你可以以${get.poptip({
            id: "xinx_yichushiyong",
            name: "移出方式使用",
            info: "将此牌置于你武将牌上，结算这张牌。若是装备牌或延时锦囊，则回到应有的位置。",
        })}牌并摸牌至X张，令本技能于你使用X张牌前失效、失效X回合后失去。(X为上一张移出牌点数)`,
        xinxyuwei_append: `<span style="font-family: yuanli">借问骁将谁，发覆青虫簪。</span>`,
        xinxcongzu: '从卒',
        xinxcongzu_info: `锁定技，转换技，阳:你以${get.poptip({
            id: "xinx_recastuse",
            name: "重铸方式使用",
            info: "使用此牌时，重铸之。若是装备牌或延时锦囊，则回到应有的位置。",
        })}基本牌；阴:你的出杀上限+X。`,
        xinxyibian: '亦变',
        xinxyibian_info: `锁定技，转换技，阳:你以${get.poptip('xinx_recastuse')}锦囊牌；阴:你的额定摸牌数+X。`,
        xinxbailian: '百炼',
        xinxbailian_info: `锁定技，当你使用牌指定不为其他角色的目标后（X为本句触发次数），将本句移至你另一技能当前项。`,
        xinxbailian_append: `<span style="font-family: yuanli">吾示子吾用兵也。</span>`,
        xinxqingding: '倾鼎',
        xinxqingding_info: `锁定技，每回合限一次，当你摸牌、回复体力、造成伤害时，若你本轮执行过：仅此一项，多执行两次；
        <br>另外两项，防止之；所有项，删除本行。`,
        xinxqingdingx: '倾鼎',
        xinxqingdingx_info: `锁定技，每回合限一次，当你摸牌、回复体力、造成伤害时，若你本轮执行过：仅此一项，多执行两次。`,
        xinxqingding_append: `<span style="font-family: yuanli">向使当初身便死，一生真伪复谁知？</span>`,
        xinxyuanyuan: '冤冤',
        xinxyuanyuan_info: `锁定技，弃牌阶段开始时，你移出任意张牌令任意名角色视为对你使用【杀】。当你或你以此法指定过的角色使用牌后，你移去一张同类牌以与其各摸两张牌，若因此移去了所有牌，此回合中，其视为拥有本技能且你对其造成的伤害值改为其体力值。`,
        xinxyuanyuan_append: `<span style="font-family: yuanli">一声长在耳，万恨重经心。</span>`,
        xinxjilang: '击浪',
        xinxjilang_info: `每回合你使用第二张牌后摸两张牌，第三张牌后视为未使用过牌。`,
        xinxsian: '思安',
        xinxsian_info: `限定技，当你受到伤害时，你可以令此伤害-1，然后你此后额定摸牌数+X（X为你武将牌上发动过的技能数）。`,
        xinxsizhan: '思战',
        xinxsizhan_info: `限定技，当你造成伤害时，你可以令此伤害+1，然后你此后出杀上限+X（X为你武将牌上发动过的技能数）。`,
        xinxsitui: '思退',
        xinxsitui_info: `限定技，出牌阶段，你可以选择获得牌堆或弃牌堆中的X张普通锦囊牌。此后每回合结束时，你从弃牌堆中获得这些牌（X为你武将牌上发动过的技能数）。`,
        fyrhzhiwen: '鸷刎',
        fyrhzhiwen_info: `你可以将三张牌或最后一张手牌当作无次数限制的【杀】或【决斗】使用，然后你选择一项:<br>1.下次仅能以另一种方式转化；<br>2.下次仅能转化为另一种牌名；<br>${get.poptip('rule_beishui')}:此牌伤害+1。`,
        fyrhminnian: '泯念',
        fyrhminnian_info: `你进入濒死状态时，你可以将手牌摸至体力上限并横置两名角色，若其中包含你，你回复1点体力。`,
        fyrhfenjue: '焚玦',
        fyrhfenjue_info: `限定技，出牌阶段，若你没有手牌，你可以对自己造成1点火焰伤害，然后获得所有本回合进入弃牌堆的牌。`,
        fyrhlihua: '礼花',
        fyrhlihua_info: `出牌阶段限一次，你可以重铸一张牌，然后你可以将手牌区和${get.poptip('xinx_central')}合计三张类别各不同或花色均相同的牌移出游戏直到本回合结束。若如此做，你对一名角色造成1点火焰伤害。`,
        fyrhhuohuan: '火环',
        fyrhhuohuan_info: `出牌阶段限一次，你可以与一名角色拼点: 若你赢，重置${get.poptip('fyrhlihua')}；若你没赢，重置${get.poptip('fyrhhuohuan')}。`,
        fyrhzaoju: '躁锯',
        fyrhzaoju_info: `出牌阶段，你可以重铸两张牌，然后将因此法获得的一张牌当一张不计入次数且无距离限制的雷【杀】使用，结算后，若${get.poptip('xinx_central')}含有四种花色，本回合本技能失效，然后你摸两张牌。`,
        fyrhchongsheng: '重生',
        fyrhchongsheng_info: `每回合限一次，你使用牌仅指定自己为目标后，可以回复1点体力或将${get.poptip('xinx_central')}两张牌洗入牌堆。`,
        fyrhkeng: '吭',
        fyrhkeng_info: `出牌阶段限一次，你可以亮出牌堆顶三张牌，然后你可以将其中一张牌发起拼点：若你赢，你可以将另外一张亮出牌当【杀】使用，否则你恢复一个装备栏。若造成伤害，你获得仅剩的亮出牌并从牌堆随机使用一张装备牌。结束阶段，你可以废除一个有牌的装备栏发动本技能。`,
        fyrhzhansui: '战随',
        fyrhzhansui_info: `每有三张伤害牌结算后，若其中有你使用的牌，你摸四张牌，否则你可以使用一张牌。`,
        fyrhxiaoxian: '骁险',
        fyrhxiaoxian_info: `你每回合首次使用伤害牌无距离限制，若此牌目标唯一，你可以令之不可响应，然后本回合结束时，目标角色视为对你使用【杀】。`,
        fyrhyouling: '幽灵',
        fyrhyouling_info: `每回合限一次，你可以将【杀】、【闪】当【顺手牵羊】或【无中生有】使用，因此获得另一种基本牌时，展示之，然后重置本技能次数。你可以废除一个有牌的装备栏，视为使用上述任意一种牌名（不受回合限制）。`,
        fyrhxianji: '献祭',
        fyrhxianji_info: `回合结束时，你可以减1点体力上限执行一个额外回合，并恢复所有装备栏。若如此做，本技能改为强制发动。`,
        fyrhzhenzhan: '枕战',
        fyrhzhenzhan_info: `你可以明置一张【杀】来跳过判定/弃牌阶段。当你需要使用基本牌时，若你的暗置牌中有，则你可以重铸所有暗置牌视为使用之。`,
        fyrhpozhu: '破竹',
        fyrhpozhu_info: `每回合限一次，你造成或受到伤害后，可以令受伤角色翻面你三张手牌，然后你依次使用明置牌（无距离限制、不可响应且于使用后摸一张牌）。`,
        visible_fyrhzhenzhan: '明置',
        fyrhyulie: '欲烈',
        fyrhyulie_info: `转换技，你可以：<br>①使用【杀】后，视为使用一张【火攻】；<br>②弃牌后，视为使用一张明牌【洞烛先机】；<br>③出牌阶段，获得${get.poptip('xinx_central')}任意张【杀】并摸等量张牌。<br>上述流程出现【闪】后，你移除该项。`,
        fyrhyuliex: '欲烈',
        fyrhyuliex_info: `转换技，你可以：<br>①使用【杀】后，${get.poptip('yulieqice')}；<br>②弃牌后，${get.poptip('yuliezaiqi')}；<br>③出牌阶段，你可以${get.poptip('yuliezhiheng')}。`,
        yulieqice: '奇策',
        yulieqice_info: `视为使用一张普通锦囊牌。`,
        yuliezaiqi: '再起',
        yuliezaiqi_info: `令至多X名角色各选择一项（X为你本回合失去的牌数）: 1.你摸一张牌: 2.弃置一张牌，然后你回复1点体力。`,
        yuliezhiheng: '制衡',
        yuliezhiheng_info: `弃置任意张牌，然后摸弃置牌数+1张牌。`,
        fyrhwenjue: '问绝',
        fyrhwenjue_info: `觉醒技，你删尽${get.poptip('fyrhyulie')}所有选项后，将${get.poptip('yulieqice')}，${get.poptip('yuliezaiqi')}，${get.poptip('yuliezhiheng')}依次填入。`,
        fyrhjizhi: '急峙',
        fyrhjizhi_info: `一名其他角色的回合开始时，若其上轮对你使用过【杀】，你可以将手牌数调整至与其相同，其本回合使用牌后，弃置你一张牌。`,
        fyrhzhiji: '志继',
        fyrhzhiji_info: `限定技，有角色失去其最后一张手牌后，你可以回复1点体力并获得${get.poptip('fyrhzhiji_guanxing')}；若为你，再获得${get.poptip('fyrhzhiji_aocai')}，若在你的回合内，再令上述技能可以同时机发动。`,
        fyrhzhiji_guanxing: '观星',
        fyrhzhiji_guanxing_info: `准备阶段和结束阶段，你卜算5。`,
        fyrhzhiji_guanxing_append: `<span style="font-family: yuanli">准备阶段和结束阶段，你卜算5，然后你观看牌堆顶四张牌并可以使用其中任意张基本牌。</span>`,
        fyrhzhiji_guanxingx: '观星',
        fyrhzhiji_guanxingx_info: `准备阶段和结束阶段，你卜算5，然后你观看牌堆顶四张牌并可以使用其中任意张基本牌。`,
        fyrhzhiji_aocai: '傲才',
        fyrhzhiji_aocai_info: `当你需要在回合外使用或打出基本牌时，你可以观看牌堆顶两张牌，若有此牌，你可以使用或打出之（若你没有手牌则改为四张）。`,
        fyrhzhiji_aocai_append: `<span style="font-family: yuanli">当你需要在回合外使用或打出基本牌时，你卜算5，然后你可以观看牌堆顶两张牌，若有此牌，你可以使用或打出之（若你没有手牌则改为四张）。</span>`,
        fyrhzhiji_aocaix: '傲才',
        fyrhzhiji_aocaix_info: `当你需要在回合外使用或打出基本牌时，你卜算5，然后你可以观看牌堆顶两张牌，若有此牌，你可以使用或打出之（若你没有手牌则改为四张）。`,
        fyrhlongdan: '龙胆',
        fyrhlongdan_info: `若你上一张失去的牌为伤害牌，你可以将基本牌当做【闪】使用然后视为使用此伤害牌；若你上一张失去的牌为红色牌，你可以将基本牌当做【杀】使用并摸两张牌。`,
        fyrhyajiao: '涯角',
        fyrhyajiao_info: `锁定技，对你造成过伤害的其他角色的回合开始时，其视为对你使用一张【杀】。`,
        fyrhchenglue: '成略',
        fyrhchenglue_info: `出牌阶段开始时，你可以弃置所有手牌并摸四张牌。此阶段内其他角色失去某种花色的牌后，你将此时机加入${get.poptip('fyrhchenglue')}。`,
        fyrhshicai: '恃才',
        fyrhshicai_info: `你可以将本回合内你获得过的最多的一种花色的所有牌当做一张【趁火打劫】使用。`,
        fyrhyinzhi: '引治',
        fyrhyinzhi_info: `每回合各限一次，当一名角色因摸牌/弃牌手牌数超过手牌上限后，你可以令其弃置/摸两张牌。`,
        fyrhquanxin: '全心',
        fyrhquanxin_info: `当所有角色均弃置过牌的轮次结束时，你可以进行一个额外回合。`,
        fyrhzhanghua: '章华',
        fyrhzhanghua_info: `你每三次失去手牌后你可以重铸所有手牌，若失去牌的方式均不同改为可以摸三张牌。`,
        fyrhyanfeng: '言锋',
        fyrhyanfeng_info: `你使用普通锦囊牌时，可以打出一张【杀】令此牌无法被响应；你使用【杀】时可以打出一张非伤害牌令此牌目标+1。`,
        fyrhjiji: '击楫',
        fyrhjiji_info: `当${get.poptip('xinx_jishipai')}进入弃牌堆后，你可以移出或移去一张同名牌。你一回合使用X张牌后可以摸X张牌（X为移出牌数）。<br>若你发动本行的次数最少，你可以视为使用一张移出牌并摸两张牌。`,
        fyrhjiji_append: `<span style="font-family: yuanli">曾记否，到中流击水，浪遏飞舟？</span>`,
        fyrhjunce: '君侧',
        fyrhjunce_info: `你可以将【杀/酒/铁索连环】、【闪/桃/过河拆桥】当另一侧一张牌使用并将两者移至同侧。任意侧唯一需要使用的牌名改为每回合首次使用额外结算一次的【无中生有】。`,
        fyrhjunce_append: `<span style="font-family: yuanli">儿妇人口不可用，顾君与我何如耳。</span>`,
        fyrhruiqi: '锐器',
        fyrhruiqi_info: `以下阶段开始时，你可以——
        <li>摸牌阶段：令摸牌数改为3，然后令一名角色本回合的装备牌失效；<li>出牌阶段：令使用牌数改为2，然后本回合你下次造成伤害时摸两张牌；<li>弃牌阶段：令所须弃牌数改为1，然后你可以将一张牌当【出其不意】使用。`,
        fyrhquxing: '曲兴',
        fyrhquxing_info: `出牌阶段，你可以将多张同名牌置于一名其他角色武将牌上并与其各摸等量张牌。直到你或其下次发动技能，你获得或其使用「曲兴」同名牌后重铸之。`,
        fyrhwulan: '舞阑',
        fyrhwulan_info: `你可以于摸牌/出牌阶段后预先执行三轮后的同一阶段，令本回合结束时唯一有「曲兴」牌的角色使用或视为使用所有即时「曲兴」牌，并将之目标转移至你。`,
        fyrhwulan_append: `<span style="font-family: yuanli">看花满眼泪，不共楚王言。</span>`,
        fyrhjuemo: '绝漠',
        fyrhjuemo_info: `当你使用基本牌/黑色牌/伤害牌后，你可以摸一张牌并明置之，令你下次使用牌须满足剩余项，无剩余项则将一项改为“明置牌”。你的明置牌不计入手牌上限且无次数距离限制。`,
        fyrhjuemo_append: `<span style="font-family: yuanli">牙璋辞凤阙，铁骑绕龙城。</span>`,
        oldfyrhjuemo: '绝漠',
        oldfyrhjuemo_info: `当你使用基本牌/黑色牌/伤害牌后，你摸一张牌并明置之，令你下次使用牌须满足剩余项，无剩余项则将一项改为“明置牌”。你的明置牌不计入手牌上限且无次数距离限制。`,
        oldfyrhjuemo_append: `<span style="font-family: yuanli">牙璋辞凤阙，铁骑绕龙城。</span>`,
        visible_fyrhjuemo: '明置',
        fyrhliebing: '裂兵',
        fyrhliebing_info: `锁定技，每轮限0.5次，你仅能将目标为你/为其他角色的手牌当【无中生有】/【杀】使用。`,
        fyrhnaoji: '挠击',
        fyrhnaoji_info: `锁定技，你使用牌后攻击范围、出杀上限、技能限制次数+0.1，你造成伤害后翻倍你一个技能的数值。`,
        fyrhnaoji_append: `<span style="font-family: yuanli">辘轳夜转槽床响，分明蟹筐才脱。</span>`,
        fyrhjiaobing: '矫兵',
        fyrhjiaobing_info: `锁定技，若如下做后X未增加，你以${get.poptip('xinx_yichushiyong')}牌并摸牌至X张。（X为点数大于手牌数的移出牌数）。`,
        fyrhjiaobing_append: `<span style="font-family: yuanli">明犯强汉者，虽远必诛。
        <br><br>注：分发起始手牌后，会将起始牌换成点数小的牌，防止开局白板。</span>`,
        fyrhjiedu: '解渡',
        fyrhjiedu_info: `当你成为牌的目标时，你可以与使用者同时明置任意张牌，若两者有相同花色，你重铸你所有明置牌或转移此牌的唯一目标。`,
        visible_fyrhjiedu: '明置',
        fyrhyouren: '游刃',
        fyrhyouren_info: `若你使用基本牌和摸两张牌的次数相同，你使用【杀】无次数限制，锦囊牌视为【无中生有】。`,
        fyrhyouren_append: `<span style="font-family: yuanli">诛吕鬼神动，安刘天地开。</span>`,
        fyrhjianji: '践极',
        fyrhjianji_info: `当所有角色均受到过伤害的轮次结束时，你回复1点体力并进行一个额外回合。`,
        fyrhtoulao: '投醪',
        fyrhtoulao_info: `每轮限X次，你需要使用【杀】时使用牌无效，你摸牌可改为增加等量出杀上限或额定摸牌数。（X为两者之差）。`,
        fyrhtoulao_append: `<span style="font-family: yuanli">勾践饮胆日，吴酒正满杯。</span>`,
        fyrhwusheng: '武圣',
        fyrhwusheng_info: `回合开始时，你可以依次翻面一名其他角色的一、二、三张手牌，每明置一张【闪】，你便视为对其使用一张【杀】；每暗置一张【杀】，你便可以重铸你或其任意张牌，其因此置入弃牌堆的牌由你获得。`,
        visible_fyrhwusheng: '明置',
        fyrhyijue: '义绝',
        fyrhyijue_info: `你造成致命伤害时，受伤角色可以翻面你三张手牌；若你没有明置【杀】，则防止之。`,
        visible_fyrhroubo: '明置',



















    },
    //动态翻译
    dynamicTranslate: {
        fyrhxiushen(player) {
            let vals = player.storage.fyrhxiushen || 0;
            let current = `①${vals[0]}`;
            let next = `②${vals[1]}`;
            current = `<span class='firetext'>${current}</span>`;
            return `转换技，你对自己使用牌后，可将手牌数调整至 ${current} ； ${next} ；<br>你受到伤害后，可重新分配两项数值，且变化值不能超过你已损失体力值。`;
        },
        fyrhzhiji_guanxing(player) {
            if (player.storage.fyrhzhiji_re) return lib.translate.fyrhzhiji_guanxing_append;
            return lib.translate.fyrhzhiji_guanxing_info;
        },
        fyrhzhiji_aocai(player) {
            if (player.storage.fyrhzhiji_re) return lib.translate.fyrhzhiji_aocai_append;
            return lib.translate.fyrhzhiji_aocai_info;
        },
        xinxqingding(player) {
            if (player.storage.xinxqingding) { return lib.translate.xinxqingdingx_info; }
            return lib.translate.xinxqingding_info;
        },
        xinxsijiao(player) {
            const storage = player.storage.xinxsijiao;
            const str = lib.translate.xinxsijiao_info;
            if (!storage) return str;
            // 正则表达式替换
            // /\[(\d+)\]/g 的意思是：
            // \[ \]  : 匹配左右方括号
            // (\d+)  : 捕获中间的数字 (例如 0, 1, 2)，把它作为 key
            return str.replace(/\[(\d+)\]/g, (match, key) => {
                // key 就是正则抓到的 "0", "1", "2"
                const val = storage[key];
                // 如果取到了值，就替换成 "[数值]"，否则保持原样
                return val !== undefined ? `[${val}]` : match;
            });
        },
        xinxcongzu(player) {
            const storage = player.storage.xinxcongzu; // 当前：true(阴)
            const location = player.storage.xinxbailian_location || '';
            const xVal = player.storage.xinxbailian_count || 0;
            const bailianText = `当你使用牌指定不为其他角色的目标后（当前X为${xVal}），将本句移至你另一技能当前项。`;
            let str = '锁定技，转换技，';
            // --- 阳状态 ---
            if (!storage) str += '<span class="bluetext">';
            str += '阳：当你使用基本牌时，重铸此牌；';
            // 如果核心句被困在阳状态 (xinxcongzu_yang)
            if (location === 'xinxcongzu_yang') {
                str += bailianText;
                // 如果当前技能是阴，说明陷阱触发，加个提示
                if (storage) str += '<br><span style="color:gray;font-size:0.8em">（注意：当前为阴状态，此句无法触发）</span>';
            }
            if (!storage) str += '</span>';
            str += '<br>';
            // --- 阴状态 ---
            if (storage) str += '<span class="bluetext">';
            str += '阴：';
            if (location === 'xinxcongzu_yin') str += bailianText;
            const isHere = location.startsWith('xinxcongzu');
            str += `你的出杀上限+${isHere ? xVal : 'X'}；`;
            if (storage) str += '</span>';
            return str;
        },
        xinxyibian(player) {
            const storage = player.storage.xinxyibian; // true(阴)
            const location = player.storage.xinxbailian_location || '';
            const xVal = player.storage.xinxbailian_count || 0;
            const bailianText = `当你使用牌指定不为其他角色的目标后（当前X为${xVal}），将本句移至你另一技能当前项。`;
            let str = '锁定技，转换技，';
            // --- 阳状态 ---
            if (!storage) str += '<span class="bluetext">';
            str += '阳：当你使用锦囊牌时，重铸此牌；';
            // 如果核心句卡在阳状态
            if (location === 'xinxyibian_yang') {
                str += bailianText;
                if (storage) str += '<br><span style="color:gray;font-size:0.8em">（注意：当前为阴状态，此句无法触发）</span>';
            }
            if (!storage) str += '</span>';
            str += '<br>';
            // --- 阴状态 ---
            if (storage) str += '<span class="bluetext">';
            str += '阴：';
            if (location === 'xinxyibian_yin') str += bailianText;
            const isHere = location.startsWith('xinxyibian');
            str += `你的额定摸牌数+${isHere ? xVal : 'X'}；`;
            if (storage) str += '</span>';
            return str;
        },
        xinxbailian(player) {
            const location = player.storage.xinxbailian_location || 'xinxbailian';
            const xVal = player.storage.xinxbailian_count || 0;
            if (location === 'xinxbailian') {
                return `锁定技，当你使用牌指定不为其他角色的目标后（当前X为${xVal}），将本句移至你另一技能当前项。`;
            } else {
                //return `<span style="opacity:0.6">暂无描述 （当前位于: ${get.translation(location)}）</span>`;
                let showName = get.translation(location.replace(/_(yin|yang)$/, ''));
                return `<span style="opacity:0.6">暂无描述（当前位于: ${showName}）</span>`;
            }
        },
        fyrhyulie(player) {
            const s = player.storage.fyrhyulie || [];
            const isWenjue = Boolean(player.storage.fyrhwenjue);
            const contentMap = isWenjue ? {
                // --- 觉醒后 (问绝) ---
                1: `① 使用【杀】后，${get.poptip('yulieqice')}`,
                2: `② 弃牌后，${get.poptip('yuliezaiqi')}`,
                3: `③ 出牌阶段，你可以${get.poptip('yuliezhiheng')}`
            } : {
                // --- 觉醒前 (欲烈) ---
                1: "① 使用【杀】后，视为使用一张【火攻】",
                2: "② 弃牌后，视为使用一张明牌【洞烛先机】",
                3: `③ 出牌阶段，获得${get.poptip('xinx_central')}任意张【杀】并摸等量张牌`
            };

            let res = '转换技，你可以：<br>';
            //遍历 1, 2, 3 生成动态文本
            for (let i = 1; i <= 3; i++) {
                const text = contentMap[i];
                if (s.includes(i)) {
                    if (s[0] === i) {
                        // 当前生效 (蓝色/高亮)
                        res += `<span class="bluetext"><b>${text}</b></span>`;
                    } else {
                        res += text;
                    }
                } else {
                    res += `<span class="greytext" style="text-decoration:line-through">${text}</span>`;
                }
                if (i < 3) res += '；<br>';
            }
            res += '。<br>';
            if (!isWenjue) {
                res += '<span class="text distinct" style="font-size:0.9em">上述流程出现【闪】后，你移除该项。</span>';
            }
            /* else {
                 res += '<span class="text distinct" style="font-size:0.9em">出现【闪】后移除该项。</span>';
            } */
            return res;

        },
        fyrhjunce(player) {
            const storage = player.storage.fyrhjunce;
            let leftStr = "【杀 / 酒 / 铁索连环】";
            let rightStr = "【闪 / 桃 / 过河拆桥】";
            if (storage && storage.left && storage.right) {
                // 遍历数组，将牌名（'sha'）翻译为中文（'杀'），并用 '/' 拼接
                const leftNames = storage.left.map(name => get.translation(name)).join(' / ');
                const rightNames = storage.right.map(name => get.translation(name)).join(' / ');
                // 加上蓝字，动态变化后的当前状态
                leftStr = `<span class="bluetext">【${leftNames}】</span>`;
                rightStr = `<span class="bluetext">【${rightNames}】</span>`;
            }
            return `你可以将${leftStr}与${rightStr}当另一侧一张牌使用并将两者移至同侧。任意侧唯一需要使用的牌名改为每回合首次使用额外结算一次的【无中生有】。`;
        },
        fyrhjuemo(player) {
            const storage = player.storage.fyrhjuemo;
            let poolStr = "基本牌/黑色牌/伤害牌";
            let remainStr = "";
            if (storage && storage.pool && storage.remaining) {
                const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" };
                // 总要求池
                const poolNames = storage.pool.map(i => map[i]).join(' / ');
                poolStr = `<span class="bluetext">${poolNames}</span>`;
                /*  if (storage.remaining.length > 0) {
                     const remainNames = storage.remaining.map(i => map[i]).join('、');
                     remainStr = `<span class="bluetext">（当前剩余：${remainNames}）</span>`;
                 } else {
                     remainStr = `<span class="bluetext">（当前无剩余项）</span>`;
                 } */
            }
            return `当你使用${poolStr}后，你可以摸一张牌并明置之，令你下次使用牌须满足剩余项${remainStr}，无剩余项则将一项改为“明置牌”。你的明置牌不计入手牌上限且无次数限制。`;
        },
        oldfyrhjuemo(player) {
            const storage = player.storage.oldfyrhjuemo;
            let poolStr = "基本牌/黑色牌/伤害牌";
            let remainStr = "";
            if (storage && storage.pool && storage.remaining) {
                const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" };
                // 总要求池
                const poolNames = storage.pool.map(i => map[i]).join(' / ');
                poolStr = `<span class="bluetext">${poolNames}</span>`;
            }
            return `当你使用${poolStr}后，你摸一张牌并明置之，令你下次使用牌须满足剩余项${remainStr}，无剩余项则将一项改为“明置牌”。你的明置牌不计入手牌上限且无次数限制。`;
        },
        fyrhliebing(player) {
            // 获取每轮的基础成长值（默认 0.5，可被翻倍）
            let baseUse = player.storage.fyrhliebing_use || 0.5;
            //  获取挠击带来的额外额度附加值
            let extra = (player.storage.fyrhnaoji && player.storage.fyrhnaoji[2]) || 0;
            //  计算本轮真正的总上限，并保留1位小数防止精度溢出
            let totalPerRound = (baseUse + extra).toFixed(1);
            //获取当前玩家头上真正的可用次数（标记数）
            let currentMarks = (player.countMark('fyrhliebing_silent') || 0).toFixed(1);
            // 拼接动态文本：将“0.5”替换为实时上限，并加上当前剩余次数
            return `锁定技，每轮限<span class="bluetext">${totalPerRound}</span>次（当前可用：<span class="bluetext">${currentMarks}</span>次），你仅能将目标为你/为其他角色的手牌当【无中生有】/【杀】使用。`;
        },
        fyrhnaoji(player) {
            // 获取当前的翻倍乘数（默认 1）
            let mult = player.storage.fyrhnaoji_mult || 1;
            let rate = (0.1 * mult).toFixed(1);
            // 获取当前已经累计的各项数值
            let storage = player.storage.fyrhnaoji || [0, 0, 0];
            // 范围和杀上限底层只认整数，所以向下取整展示；裂兵次数保留小数
            let range = Math.floor(storage[0]);
            let shaLimit = Math.floor(storage[1]);
            let extraLiebing = storage[2].toFixed(1);
            let statsStr = `范围+${range}，杀上限+${shaLimit}，裂兵次数+${extraLiebing}`;
            // 拼接动态文本：将“+0.1”替换为实时成长率，并附上当前的累计成果
            return `锁定技，你使用牌后攻击范围、出杀上限、技能限制次数<span class="bluetext">+${rate}</span><br>（<span class="bluetext">${statsStr}</span>），你造成伤害后翻倍你一个技能的数值。`;
        },
        fyrhweiyu(player) {
            const s = player.storage.fyrhweiyu || [];
            const contentMap = {
                1: "①摸两张牌后",
                2: "②失去两张牌后",
                3: `③受到1点伤害后`,
            };
            let res = '转换技，有角色：<br>';
            for (let i = 1; i <= 3; i++) {
                const text = contentMap[i];
                if (s.includes(i)) {
                    if (s[0] === i) {
                        // 当前生效 (蓝色/高亮)
                        res += `<span class="bluetext"><b>${text}</b></span>`;
                    } else {
                        res += text;
                    }
                } else {
                    res += `<span class="greytext" style="text-decoration:line-through">${text}</span>`;
                }
                if (i < 3) res += '；<br>';
            }
            res += '，<br>你额外执行之或令本回合角色反向执行之。<br>';
            return res;
        },
        fyrhfuhuo(player) {
            const num = player.countMark('fyrhfuhuo') || 1;
            let str = `<span class='thundertext'>${num}</span>`;
            return `锁定技，你使用牌时判定：若为伤害牌，你受到${str}点火焰伤害并获得判定牌。若你因此濒死，令你技能中的数字翻倍。`
        },
        fyrhzhuguang(player) {
            const bool = player.getStorage('fyrhzhuguang', false);
            let num = player.countMark('fyrhfuhuo') || 1;
            let yang = `你受到伤害后`,
                yin = `你造成伤害后，你可以回复<span class='thundertext'>${num}</span>点体力并摸<span class='thundertext'>${num}</span>张牌`;
            if (bool) {
                yin = `<span class='bluetext'>${yin}</span>`;
            } else {
                yang = `<span class='firetext'>${yang}</span>`;
            }
            let start = "转换技，",
                end = "。";
            return `${start}阳：${yang}；阴：${yin}${end}`;
        },
        fyrhzhengu(player) {
            const num = player.getStorage('fyrhzhengu') || 3;
            return `每回合限一次，当你使用${get.poptip('xinx_jishipai')}时，你可以将一项调整至与另一项相等（变化量至多为5）：1. 目标数；2. 手牌数；3.${num}。`;
        },
        fyrhzihun(player) {
            const num = player.countMark('fyrhzihun');
            return `锁定技，当你于一回合使用至少第<font color="#E53935">${num}</font>张牌后，你失去1点体力；当牌堆低于弃牌堆时，你获得牌堆，然后<font color="#E53935">牌数</font>-1。`;
        },
        fyrhzhengjing(player) {
            const list = player.getStorage('fyrhzhengjing_list') || [];
            let currentIndex = 0;
            if (player.getStorage('fyrhzhengjing')) {
                currentIndex = player.getStorage('fyrhzhengjing');
                if (typeof currentIndex !== 'number') {
                    currentIndex = 0;
                }
            }
            const circleNumbers = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩', '⑪', '⑫', '⑬', '⑭', '⑮', '⑯'];
            const dynamicText = list.map((cardName, index) => {
                //return `${circleNumbers[index]}【${get.translation(cardName)}】`;
                let text = `${circleNumbers[index]}【${get.translation(cardName)}】`;
                if (index === currentIndex) {
                    return `<span class='firetext'>${text}</span>`;
                }
                return text;

            }).join('');

            return `转换技，你可以视为使用：${dynamicText}<br>周始：你可以调整任意两项的顺序。`;
        },
        fyrhpaohuanhun(player) {
            const bool = player.getStorage('fyrhpaohuanhun', false);
            let yang = `摸牌阶段`,
                yin = `出牌阶段`;
            if (bool) {
                yin = `<span class='bluetext'>${yin}</span>`;
            } else {
                yang = `<span class='firetext'>${yang}</span>`;
            }
            let start = "转换技，你一次性获得至少三张牌后，可将本回合下一阶段替换为你的",
                end = `；然后重置${get.poptip('fyrhpaoleidi')}。若获得的牌数大于三，你可将你主要阶段重新排序。`;//若首阶段与上次排序的首阶段不同，你额外执行之。
            return `${start}阳：${yang}；阴：${yin}${end}`;
        },

    },
    //技能
    skill: {
        //李元霸
        fyrhwuji: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: 'phaseUseBegin',
            },
            forced: true,
            async content(event, trigger, player) {
                let num = Math.min(3, game.countPlayer());
                let targets = game.filterPlayer().randomGets(num).sortBySeat();
                player.line(targets);
                if (targets.includes(player)) {
                    for (let target of targets) {
                        target.die().source = player;
                    }
                } else {
                    for (let target of targets) {
                        await target.damage();
                    }
                }
            },
            ai: {
                neg: true,
            },
        },
        //徐盛
        fyrhyicheng: {
            audio: "ext:永夜之境/audio:2",
            enable: ["chooseToUse"],
            hiddenCard(player, name) {
                return (
                    ["sha", "shan"].includes(name) && player.countCards('h') && !player.getStat().skill.fyrhyicheng
                );
            },
            getList(event, player) {
                return get.inpileVCardList(info => {
                    if (!["sha", "shan"].includes(info[2])) {
                        return false;
                    }
                    const card = get.autoViewAs({ name: info[2], nature: info[3] }, "unsure");
                    return event.filterCard(card, player, event);
                });
            },
            usable: 1,
            filter(event, player) {
                return get.info("fyrhyicheng").getList(event, player).length && player.countCards('h');
            },
            chooseButton: {
                dialog(event, player) {
                    const list = get.info("fyrhyicheng").getList(event, player);
                    const dialog = ui.create.dialog("疑城", [list, "vcard"], "hidden");
                    dialog.direct = true;
                    return dialog;
                },
                check(button) {
                    const player = get.player();
                    const cardName = button.link[2];
                    if (player.countCards('h', { name: cardName }) === 0) {
                        return 0;
                    }
                    if (_status.event.getParent().type != "phase") {
                        return 1;
                    }
                    if (button.link[2] == "shan") {
                        return 3;
                    }
                    return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                },
                backup(links, player) {
                    return {
                        filterCard: () => false,
                        selectCard: -1,
                        log: false,
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],
                            storage: {
                                fyrhyicheng: true,
                            },
                        },
                        popname: true,
                        async precontent(event, trigger, player) {
                            player.logSkill("fyrhyicheng");
                            player.addTempSkill('fyrhyicheng_effect');
                            const rcardName = event.result.card.name;
                            player.setStorage("fyrhyicheng_effect", rcardName);
                        }
                    };
                },
                prompt(links, player) {
                    return `重铸所有手牌，视为使用${get.translation(links[0][3]) || ""}【${get.translation(links[0][2])}】`;
                },

            },
            ai: {
                order(item, player) {
                    return 10;
                },
                skillTagFilter(player, tag, arg) {
                    if (arg === "respond") {
                        return false;
                    }
                },
                result: {
                    player: 1,
                },
            },
            subSkill: {
                effect: {
                    trigger: {
                        player: "useCard",
                    },
                    filter(event, player) {
                        return event.card?.storage.fyrhyicheng === true;
                    },
                    forced: true,
                    charlotte: true,
                    locked: false,
                    logTarget: 'target',
                    async content(event, trigger, player) {
                        let target = lib.skill.chongzhen.logTarget(trigger, player);
                        let hs = player.getCards("h"),
                            rhs = player.getCards('h', lib.filter.cardRecastable),
                            rcardName = player.getStorage('fyrhyicheng_effect'),
                            dcards = hs.filter(card => get.name(card, false) == rcardName),
                            rdcards = rhs.filter(card => get.name(card, false) == rcardName);
                        const result = await target.chooseButton([
                            `###疑城###${get.translation(player)}即将重铸所有手牌，请选择一项`,
                            [[
                                ['dis', `令${get.translation(player)}将重铸所有手牌改为弃置，每含一张【${get.translation(rcardName)}】${get.translation(player)}便摸三张牌`],
                                ['lose', `若${get.translation(player)}重铸的牌不含【${get.translation(rcardName)}】，你失去1点体力`],
                            ], 'textbutton'],
                        ], true)
                            .set("filterButton", button => {
                                const player = get.player();
                                return true;
                            })
                            .set('dcards', dcards)
                            .set('hs', hs)
                            .set("ai", button => {
                               /*  let player = _status.event.player;
                                let hs = get.event().hs;
                                let dcards = get.event().dcards;
                                if (button.link == "dis" && hs.length < 3) {
                                    return 15;
                                }
                                if (button.link == "lose" && player.getHp() > 1) {
                                    return 12;
                                } */
                                return Math.random() < 0.5 ? "dis" : "lose";
                            })
                            .forResult();
                        if (result.bool && result.links?.length) {
                            if (result.links[0] == "dis") {
                                await player.discard(hs);
                                if (dcards.length > 0) {
                                    await player.draw(3 * dcards.length);
                                }
                            } else {
                                await player.recast(rhs);
                                if (rdcards?.length == 0) {
                                    await target.loseHp();
                                }
                            }
                        }
                    }
                }
            }
        },
        //傅嘏
        fyrhligang: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: 'roundStart',
            },
            async cost(event, trigger, player) {
                const result = await player
                    .chooseNumbers(get.prompt(event.skill), [
                        {
                            prompt: "声明一个点数，本轮此点数的牌均可被重铸",
                            min: 1,
                            max: 13,
                        },
                    ])
                    .set("processAI", () => {
                        const player = get.player();
                        const numbers = player.getCards('he').map(card => get.number(card));
                        if (numbers.length === 0) return [Math.floor(Math.random() * 13) + 1];
                        const counts = {};
                        let maxCount = 0;// 记录目前的最高票数
                        let mostFrequentNum = 0;// 记录得票最高的那个点数
                        for (const num of numbers) {
                            counts[num] = (counts[num] || 0) + 1;
                            if (counts[num] > maxCount) {
                                maxCount = counts[num];
                                mostFrequentNum = num;
                            }
                        }
                        return [mostFrequentNum];

                    })
                    .forResult();
                if (result.bool) {
                    event.result = {
                        bool: true,
                        cost_data: result.numbers[0],
                    };
                }
            },
            async content(event, trigger, player) {
                const {
                    cost_data: num,
                } = event;
                _status.fyrhligang_limit = num;
                game.addGlobalSkill('fyrhligang_limit');
                const targets = game.players.slice(0);
                targets.forEach(target => target.markSkill('fyrhligang_limit'));
                player
                    .when({ global: "roundEnd" }, false)
                    .assign({
                        firstDo: true,
                    })
                    .step(async (event, trigger, player) => {
                        delete _status.fyrhligang_limit;
                        game.removeGlobalSkill('fyrhligang_limit');
                        targets.forEach(target => target.unmarkSkill('fyrhligang_limit'));
                    })
                    .finish();
            },
            subSkill: {
                limit: {
                    mark: true,
                    charlotte: true,
                    onremove: true,
                    intro: {
                        markcount(storage, player) {
                            return _status.fyrhligang_limit;
                        },
                        content(storage) {
                            return `本轮点数${_status.fyrhligang_limit}的牌均可被重铸`;
                        },
                    },
                    enable: "phaseUse",
                    filter(event, player) {
                        return player.hasCard((card) => lib.skill.fyrhligang_limit.filterCard(card, player), "he");
                    },
                    filterCard: (card, player) => get.number(card) == _status.fyrhligang_limit && player.canRecast(card),
                    discard: false,
                    position: 'he',
                    lose: false,
                    delay: false,
                    async content(event, trigger, player) {
                        const { cards: cards2 } = event;
                        await player.recast(cards2);
                        let targets = game.filterPlayer(current => current.hasSkill("fyrhligang")).sortBySeat();
                        if (targets.length) {
                            for (let target of targets) {
                                for (let card of cards2) {
                                    if (get.type(card) == 'equip' || get.is.damageCard(card)) {
                                        await target.draw('nodelay');
                                    }
                                    if (get.name(card) == 'tao') {
                                        await target.recover();
                                    }
                                }
                            }
                        }
                    },
                    ai: {
                        basic: {
                            order: 1,
                        },
                        result: {
                            player(player) {
                                let targets = game.filterPlayer(current => current.hasSkill("fyrhligang")).sortBySeat();
                                let maxAttitude = Math.max(...targets.map(t => get.attitude(player, t)));
                                if (maxAttitude > 0) {
                                    return maxAttitude / 5;
                                }
                                return 0;
                            }
                        },
                    },
                }
            },
        },
        fyrhkenjian: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => "ext:永夜之境/audio/fyrhkenjian" + (typeof index === "number" ? index : get.rand(1, 2)) +".mp3",
            trigger: {
                global: "phaseZhunbeiBegin",
            },
            round: 1,
            filter(event, player) {
                return event.player !== player && player.countCards("he") > 0;
            },
            async cost(event, trigger, player) {
                event.result =
                    await player
                        .chooseCardTarget({
                            prompt: get.prompt(event.skill),
                            prompt2: `<div class="text center">交给${get.translation(trigger.player)}一张牌</div>`,
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return target == trigger.player;
                            },
                            selectTarget: 1,
                            selectCard: 1,
                            position: 'he',
                            ai1(card) {
                                return 5 - get.value(card);
                            },
                            ai2(target) {
                                const player = get.player();
                                let eff = get.effect(player, event.card, event.player, player);
                                if (eff > 0) {
                                    return 0;
                                }
                                let att = get.attitude(player, target);
                                if (target.hasSkillTag("nogain")) {
                                    att /= 9;
                                }
                                return -att;
                            },
                        })
                        .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const card = event.cards;
                target.addSkill(`${event.name}_effect`);
                player.addTempSkill("fyrhkenjian_recover");
                game.broadcastAll(
                    (name, translate) => {
                        lib.translate[name] = translate;
                    },
                    `${event.name}_${player.playerid}`,
                    get.translation(event.name)
                );
                const next = target.gain(card, "give");
                next.gaintag.add(`${event.name}_${player.playerid}`);
                await next;
            },
            subSkill: {
                effect: {
                    trigger: {
                        player: "loseAfter",
                        global: ["gainAfter", "loseAsyncAfter", "addJudgeAfter", "equipAfter", "addToExpansionAfter"],
                    },
                    getIndex(event, player) {
                        return event.getl(player).hs;
                    },
                    filter(event, player, name, card) {
                        if (!card || !card.cardid) {
                            return false;
                        }
                        const evt = event.getl(player);
                        const gaintag = evt.gaintag_map[card.cardid];
                        if (Array.isArray(gaintag)) {
                            /* if (gaintag.includes("fyrhkenjian")) {
                                return true;
                            } */
                            if (gaintag.some(tag => tag.startsWith("fyrhkenjian"))) {
                                return true;
                            }

                        }
                        return false;
                    },
                    forced: true,
                    locked: false,
                    async content(event, trigger, player) {
                        const card = event.indexedData,
                            gaintag = trigger.getl(player).gaintag_map[card.cardid];
                        if (!Array.isArray(gaintag)) {
                            return;
                        }
                        const targetTag = gaintag.find(tag => tag.startsWith("fyrhkenjian"));
                        if (targetTag) {
                            //切割字符串，提取 "_" 后面的 playerid
                            //tag.split("_")会变成 ["fyrhkenjian", "12345"]
                            const originalPlayerId = targetTag.split("_")[1];
                            let sourcePlayer = game.findPlayer(p => p.playerid === originalPlayerId);
                            if (sourcePlayer) {
                                sourcePlayer.addTempSkill("fyrhkenjian_damage");
                            }
                        }
                        /*  if (gaintag.includes("fyrhkenjian")) {
                         } */
                    },
                    mod: {
                        aiValue(player, card, num) {
                            if (get.itemtype(card) == "card" && card.gaintag?.some(tag => tag.startsWith("fyrhkenjian"))) {
                                return -1;
                            }
                        },
                        aiUseful() {
                            return lib.skill.fyrhkenjian.subSkill.effect.mod.aiValue.apply(this, arguments);
                        },
                        aiOrder(player, card, num) {
                            if (get.itemtype(card) == "card" && card.gaintag?.some(tag => tag.startsWith("fyrhkenjian"))) {
                                return 0;
                            }
                        },
                    },
                },
                damage: {
                    marktext: '伤',
                    intro: {
                        content: "本回合下次伤害造成由你指定受伤角色",
                    },
                    mark: true,
                    charlotte: true,
                    trigger: {
                        global: "damageBefore",
                    },
                    forced: true,
                    locked: false,
                    logTarget: "source",
                    async content(event, trigger, player) {
                        player.removeSkill(event.name);
                        const result = await player
                            .chooseTarget(get.prompt2("fyrhkenjian"), `令一名角色成为受伤角色`, (card, player, target) => {
                                return target !== trigger.player;
                            })
                            .set("ai", target => {
                                const player = get.player();
                                const att = get.attitude(player, target);
                                return -att;
                            })
                            .forResult();
                        if (result.bool && result.targets?.length) {
                            game.playAudio("../extension/永夜之境/audio/",'fyrhkenjian'+ [3] +'.mp3');
                            let target = result.targets[0];
                            player.line(target, "fire");
                            trigger.player = target;
                            game.log(player, "令", target, "成为了受伤角色");
                        }
                    },
                },
                recover: {
                    marktext: '回',
                    intro: {
                        content: "本回合下次体力回复由你选择回复角色",
                    },
                    charlotte: true,
                    mark: true,
                    onremove(player, skill) {
                        const gaintag = player
                            .getCards("h")
                            .flatMap(card => card.gaintag.filter(tag => tag.startsWith('fyrhkenjian')))
                            .unique();
                        gaintag.forEach(tag => player.removeGaintag(tag));
                    },
                    trigger: {
                        global: "recoverBefore",
                    },
                    filter(event, player) {
                        return player.countCards("h", card => card.gaintag.filter(tag => tag.startsWith('fyrhkenjian'))) > 0;
                    },
                    forced: true,
                    locked: false,
                    async content(event, trigger, player) {
                        player.removeSkill(event.name);
                        const result = await player
                            .chooseTarget(get.prompt2("fyrhkenjian"), `选择体力回复的角色`, (card, player, target) => {
                                return target !== trigger.player;
                            })
                            .set("ai", target => {
                                const player = get.player();
                                return get.recoverEffect(target, player, player) > 0;
                            })
                            .forResult();
                        if (result.bool && result.targets?.length) {
                            game.playAudio("../extension/永夜之境/audio/",'fyrhkenjian'+ [4] +'.mp3');
                            let target = result.targets[0];
                            player.line(target, "fire");
                            trigger.player = target;
                            game.log(player, "改为令", target, "回复体力");
                        }
                    },
                },
            }
        },
        //朱异
        fyrhkunzhao: {
            audio: ['potjiezhu1.mp3', 'pothuanshi1.mp3'],
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            filter(event, player) {
                return game.hasPlayer(current => current.countCards('he'));
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2(event.skill), (card, player, target) => {
                        return target.countCards("he");
                    })
                    .set("ai", target => {
                        const player = get.player();
                        const att = get.attitude(player, target);
                        /* if (game.hasPlayer(current => current.isFriendOf(player) && current.countCards("h", card => get.name(card) == 'sha'))) {
                            return att;
                        } else {
                            return -att * target.countCards("h");
                        } */
                        return -att * target.countCards("h");
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                await target
                    .chooseToGive(`困沼：交给${get.translation(player)}一张牌`, true, "he", player)
                    .set("ai", card => {
                        return 6 - get.value(card);
                    });
                const result = await target
                    .chooseControl("一", "二", "三")
                    .set("prompt", `选择令${get.translation(player)}本回合增加的出杀次数`)
                    .set("ai", () => {
                        return get.event().resultx;
                    })
                    .set(
                        "resultx",
                        (() => {
                            if (get.attitude(target, player) > 0) {
                                return "三";
                            }
                            return ["一", "二", "三"].randomGet();
                        })()
                    )
                    .forResult();
                target.popup(result.control, "wood");
                const num = result.index + 1;
                game.log(player, "本回合出杀次数增加", `#y${num}`);
                player.addTempSkill('fyrhkunzhao_effect');
                player.addMark('fyrhkunzhao_effect', num, false);

            },
            subSkill: {
                effect: {
                    charlotte: true,
                    onremove: true,
                    intro: {
                        content: "出杀次数+#",
                    },
                    mod: {
                        cardUsable(card, player, num) {
                            if (card.name == "sha") {
                                return num + player.countMark("fyrhkunzhao_effect");
                            }
                        },
                    },
                },
            }

        },
        fyrhranzhong: {
            audio: ['potjiezhu2.mp3', 'pothuanshi2.mp3'],
            enable: "phaseUse",
            manualConfirm: true,
            filter(event, player) {
                const num = player.getCardUsable("sha", true);
                if (num <= 0) {
                    return false;
                }
                const evt = get.event().getParent("phaseUse", true, true);
                if (evt) {
                    return (
                        num >
                        player.getHistory("useCard", evtx => {
                            return evtx.getParent("phaseUse") == evt && evtx.card.name == "sha" && evtx.addCount !== false;
                        }).length
                    );
                }
                return true;
            },
            async content(event, trigger, player) {
                const result = await player
                    .chooseCard(`燃忠：请重铸任意张牌`, "he", [1, Infinity], (card, player) => {
                        return player.canRecast(card);
                    })
                    .set("ai", card => {
                        /* let num = 5 - get.value(card);
                        if (get.name(card) !== "sha"){
                            num += 3;
                        }
                        return num; */
                        return 5 - get.useful(card);
                    })
                    .forResult();
                if (result.cards?.length) {
                    await player.recast(result.cards);
                    await player.loseHp();
                }
            },
            ai: {
                basic: {
                    order: 1,
                },
                result: {
                    player(player) {
                        if (!player.hasValueTarget({ name: "sha" }, false)) {
                            return -1;
                        }
                        if (player.countCards("h") >= player.hp - 1) {
                            return -1;
                        }
                        if (player.hp < 3) {
                            return -1;
                        }
                        return 1;
                    },
                },
            },
            group: ["fyrhranzhong_effect"],
            subSkill: {
                effect: {
                    audio: 'potjianlv',
                    trigger: {
                        player: 'useCardAfter',
                    },
                    filter(event, player) {
                        if (get.name(event.card) !== 'sha') {
                            return false;
                        }
                        return player.getCardUsable("sha") === 0 && player.countCards('he', card => get.name(card) == 'sha') == 0;
                    },
                    usable: 1,
                    prompt2(event, player) {
                        return `展示手牌，回复1点体力并摸牌至体力值`;
                    },
                    async content(event, trigger, player) {
                        const cards = player.getCards("h");
                        if (cards.length) {
                            await player.showCards(cards, get.translation(player) + "【燃忠】展示");
                        }
                        await player.recover();
                        await player.drawTo(player.getHp());
                    }
                }
            }
        },
        //王朗
        fyrhhyygushe: {
            audio: 'gushe',
            enable: "phaseUse",
            filter(event, player) {
                return !player.hasSkillTag("noCompareSource");
            },
            filterTarget(card, player, target) {
                return player.canCompare(target);
            },
            getTopValid(player) {
                let top = ui.discardPile?.lastChild;
                if (!top) return null;
                return top;
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const cards = get.discarded().filterInD("d");
                let top = get.info("fyrhhyygushe").getTopValid(player);
                const extraCards = [];

                const drawCard = get.cards()[0];
                if (drawCard) extraCards.push(drawCard);

                let lastDiscard = null;
                if (cards.length > 0) {
                    lastDiscard = top;
                    extraCards.push(lastDiscard);
                }
                const list = [player, target];
                const result = await player.chooseCardOL(list, "请选择一张拼点牌", true)
                    .set('ai', card => get.number(card))
                    .forResult();

                const pResult = result[0];
                const tResult = result[1];

                if (!pResult || !tResult || !pResult.bool || !tResult.bool || !pResult.cards || !tResult.cards) {
                    if (drawCard) ui.cardPile.insertBefore(drawCard, ui.cardPile.firstChild);
                    return;
                }

                const pCard = pResult.cards[0];
                const tCard = tResult.cards[0];

                //lose_list.add([[pCard, tCard, ...extraCards]]);

                await game.loseAsync({
                    lose_list: [
                        [player, [pCard]],
                        [target, [tCard]],
                    ]
                }).setContent("chooseToCompareLose");


                const allCompareCards = [pCard, tCard, ...extraCards];

                game.log(player, "与", target, "、牌堆顶、弃牌堆", "#y共同拼点");
                await game.delayx();

                game.broadcastAll(() => ui.arena.classList.add("thrownhighlight"));
                game.addVideo("thrownhighlight1");

                // 准备多目标拼点的数组
                const targetsArray = [target];
                const cardsArray = [tCard];

                // 拼点动画数组
                if (drawCard) {
                    targetsArray.push(player);
                    cardsArray.push(drawCard);
                }
                if (lastDiscard) {
                    targetsArray.push(target);
                    cardsArray.push(lastDiscard);
                }

                player.$compareMultiple(pCard, targetsArray, cardsArray);

                game.log(player, "的拼点牌为", pCard);
                game.log(target, "的拼点牌为", tCard);
                if (drawCard) game.log("牌堆顶的拼点牌为", drawCard);
                if (lastDiscard) game.log("弃牌堆的拼点牌为", lastDiscard);


                const compareEvent = game.createEvent("compare");
                compareEvent.player = player;
                compareEvent.target = target;
                compareEvent.card1 = pCard;
                compareEvent.card2 = tCard;
                compareEvent.num1 = get.number(pCard);
                compareEvent.num2 = get.number(tCard);
                compareEvent.setContent(() => { });
                await compareEvent;

                // 悬浮展示停留
                await game.delay(0, lib.config.game_speed === "vvfast" ? 6000 : 2500);

                // 清除拼点UI，恢复屏幕高亮
                game.broadcastAll(() => ui.arena.classList.remove("thrownhighlight"));
                game.addVideo("thrownhighlight2");
                game.broadcastAll(ui.clear);


                if (drawCard) {
                    await game.cardsDiscard(drawCard);
                }


                const pNum = get.number(pCard);
                const tNum = get.number(tCard);
                const dNum = drawCard ? get.number(drawCard) : -1;
                const ldNum = lastDiscard ? get.number(lastDiscard) : -1;

                const nums = [pNum, tNum];
                if (drawCard) nums.push(dNum);
                if (lastDiscard) nums.push(ldNum);
                // 降序排列 (从大到小)
                nums.sort((a, b) => b - a);
                // indexOf提取位置
                // 索引0就是第1名，所以加1
                const rank = nums.indexOf(pNum) + 1;

                //game.log(player, "拼点牌点数为", "#y" + pNum, "，在所有牌中排名第", "#g" + rank);
                let allcards = allCompareCards.slice();
                if (rank === 1) {
                    game.log(player, "触发了", "#y第一名", "的效果");
                    const { bool, links } = await player
                        .chooseButton(["鼓舌：获得其中的一张牌并使用一张剩余牌（先选择的获得）", allcards], [1, 2])
                        .set("filterButton", button => {
                            if (ui.selected.buttons.length > 0) {
                                return get.player().hasUseTarget(button.link);
                            }
                            return true;
                        })
                        .set("ai", button => {
                            if (ui.selected.buttons.length < 0) {
                                return get.number(button.link);
                            }
                            return get.event().player.getUseValue(button.link);
                        })
                        .forResult();
                    if (bool) {
                        allcards.removeArray(links);
                        const card = links[0];
                        await player.gain(card, "gain2");
                        const card2 = links[1];
                        if (card2) {
                            await player.chooseUseTarget(true, card2, false);
                        }

                    }
                }
                else if (rank === 2) {
                    game.log(player, "触发了", "#y第二名", "的效果");
                    await player.discard(player.getCards("h"));
                    await player.draw(2);

                }
                else if (rank === 3) {
                    game.log(player, "触发了", "#y第三名", "的效果");
                    await player.damage(2);
                }
                else if (rank === 4) {
                    game.log(player, "触发了", "#y第四名", "的效果");
                    const result = await player
                        .chooseButtonTarget({
                            createDialog: [`鼓舌：请选择要分配的拼点牌和目标`, allcards],
                            forced: true,
                            allowChooseAll: true,
                            filterTarget(card, player, target2) {
                                return list.includes(target2);
                            },
                            selectButton: [1, Infinity],
                            cards: allcards,
                            ai1(button) {
                                return get.value(button.link);
                            },
                            ai2(target) {
                                const player = get.player();
                                const card = ui.selected.buttons[0].link;
                                return get.value(card, target) * get.attitude(player, target);
                            },
                        })
                        .forResult();
                    if (result?.bool && result.links?.length) {
                        allcards.removeArray(result.links);
                        player.line(result.targets, "green");
                        await result.targets[0].gain(result.links, "gain2");
                    }
                }
            },
            ai: {
                order: 6,
                result: {
                    target: -1,
                }
            }
        },
        fyrhhyyzuobao: {
            audio: 'jici',
            trigger: {
                player: "damageBegin4",
            },
            filter(event, player) {
                return event.num > 0 && player.countCards('h') == player.hp;
            },
            usable: 1,
            async content(event, trigger, player) {
                await player.draw();
                trigger.cancel();
            }
        },
        //公孙离
        fyrhpaoleidi: {
            init(player) {
                player.addSkill("fyrhpaoleidi_mark");
            },
            audio: "ext:永夜之境/audio:3",
            trigger: {
                source: "damageBegin1",
                player: ["damageBegin1", "loseAfter",],
                global: ["loseAsyncAfter", "gainAfter", "equipAfter", "addToExpansionAfter", "addJudgeAfter"],
            },
            filter(event, player) {
                if (player.hasSkill("fyrhpaoleidi_used")) {
                    return false;
                }
                const cards = get.discarded().filterInD("d");
                if (cards.length == 0) {
                    return false;
                }
                if (event.name == 'damage') {
                    return true;
                }
                if ((event.relatedEvent || event.getParent())?.name == "useCard") {
                    return false;
                }
                const evt = event.getl(player);
                if (!evt?.cards2?.length) {
                    return false;
                }
                return true;
            },
            check(event, player) {
                let num = get.info('fyrhpaoleidi')?.getNum(player);
                return num > 1;
            },
            getNum(player) {
                const num = get.discarded()
                    .filterInD("d")
                    .map(card2 => get.suit(card2))
                    .unique()
                    .remove('none').length;
                return num;
            },
            prompt2(event, player) {
                const num = get.discarded()
                    .filterInD("d")
                    .map(card2 => get.suit(card2))
                    .unique()
                    .remove('none').length;
                return `摸${num}张牌，然后将中央区的牌洗入牌堆`;
            },
            async content(event, trigger, player) {
                player.addTempSkill("fyrhpaoleidi_used")
                const cards = get.discarded().filterInD("d");
                const num = get.discarded()
                    .filterInD("d")
                    .map(card2 => get.suit(card2))
                    .unique()
                    .remove('none').length;
                await player.draw(num);

                if (cards?.length) {
                    game.log(player, "将", cards, "洗入牌堆");
                    await game.cardsGotoPile(cards, () => {
                        return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                    });
                }
            },
            subSkill: {
                used: {
                    charlotte: true,
                },
                mark: {
                    marktext: "🎴",
                    mark: true,
                    intro: {
                        name: ' ',
                        markcount(storage, player) {
                            const cards = get.discarded().filterInD("d");
                            const suits = new Set();
                            for (const card of cards) {
                                const suit = get.suit(card);
                                if (suit && suit !== 'none') {
                                    suits.add(suit);
                                }
                            }
                            return suits.size;
                        },
                        mark(dialog, storage, player) {
                            dialog.css({ width: "50%" });
                            if (get.is.phoneLayout()) {
                                dialog.classList.add("fullheight");
                            }
                            const centerCards = get.discarded().filterInD("d");
                            dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">📔中央区</div>');

                            if (centerCards.length) {
                                dialog.addAuto(centerCards);
                            } else {
                                dialog.addText('<div class="text center" style="opacity:0.6">暂无卡牌</div>');
                            }
                        }
                    },
                }
            }
        },
        fyrhpaohuanhun: {
            audio: "ext:永夜之境/audio:3",
            mark: true,
            zhuanhuanji: true,
            locked: false,
            marktext: "☯",
            intro: {
                content(storage, player, skill) {
                    const bool = player.getStorage(skill, false);
                    return `你一次性获得至少三张牌后，可将本回合下一阶段替换为你的${bool ? "出牌阶段" : `摸牌阶段`}`;
                },
            },
            trigger: {
                player: "gainAfter",
                global: "loseAsyncAfter",
            },
            filter(event, player) {
                return event.getg?.(player)?.length > 2;
            },
            logTarget: "player",
            prompt2(event, player) {
                const bool = player.getStorage('fyrhpaohuanhun', false);
                let str = `将本回合下一阶段替换为你的${bool ? "出牌阶段" : `摸牌阶段`}`;
                if (event.getg?.(player)?.length > 3) {
                    str = `${str}，且可将你的主要阶段重新排序`;
                }
                return str;
            },
            async content(event, trigger, player) {
                player.removeSkill("fyrhpaoleidi_used");
                game.log(player, '重置了', "#g【泪笛】");
                const bool = player.getStorage(event.name, false);
                player.changeZhuanhuanji(event.name);
                if (trigger.getg?.(player)?.length > 3) {
                    player.addMark('fyrhpaohuanhun', 1, false);
                }
                if (bool) {
                    player.addTempSkill('fyrhpaohuanhun_effect');
                    player.setStorage('fyrhpaohuanhun_effect', 'phaseUse', true);
                } else {
                    player.addTempSkill('fyrhpaohuanhun_effect');
                    player.setStorage('fyrhpaohuanhun_effect', 'phaseDraw', true);
                }
            },
            subSkill: {
                effect: {
                    trigger: {
                        global: "phaseChange",
                    },
                    filter(event, player) {
                        return player.getStorage('fyrhpaohuanhun_effect') !== false;
                    },
                    charlotte: true,
                    direct: true,
                    onremove: true,
                    async content(event, trigger, player) {

                        if (player.hasMark('fyrhpaohuanhun')) {
                            player.clearMark('fyrhpaohuanhun', false);
                            player.addSkill('xinxyilian_phase');
                            if (!player.storage.xinxyilian_phaseList) {
                                player.storage.xinxyilian_phaseList = ["phaseZhunbei", "phaseJudge", "phaseDraw", "phaseUse", "phaseDiscard", "phaseJieshu"];
                            }
                            let myPhases = player.storage.xinxyilian_phaseList.slice();
                            /* let headPhases = [];
                            let midPhases = [];
                            let tailPhases = [];
                            for (let p of myPhases) {
                                if (p === 'phaseZhunbei') headPhases.push(p);
                                else if (p === 'phaseJieshu') tailPhases.push(p);
                                else midPhases.push(p);
                            } */

                            const moveResultMe = await player.chooseToMove('涣魂：重新调整你的阶段顺序', true)
                                .set('list', [
                                    ['你的阶段顺序 (拖动可调整)', [myPhases.map(i => ['', '', i]), 'vcard']]
                                ])
                                .set('filterOk', () => {
                                    return true;
                                })
                                .set('processAI', function () {
                                    let current = myPhases.slice();
                                    let draws = current.filter(p => p == 'phaseDraw');
                                    let uses = current.filter(p => p == 'phaseUse');
                                    let others = current.filter(p => p != 'phaseDraw' && p != 'phaseUse');
                                    let final = [...draws, ...uses, ...others];
                                    return [final.map(i => ['', '', i])];
                                })
                                .forResult();
                            let oldFirstPhase = myPhases[0]; // 记录本次重排前的首个主要阶段
                            let newFirstPhase = null;
                            if (moveResultMe.bool) {
                                let newMidPhases = moveResultMe.moved[0].map(i => i[2]);
                                newFirstPhase = newMidPhases[0];
                                player.storage.xinxyilian_phaseList = moveResultMe.moved[0].map(i => i[2]);
                                //player.storage.xinxyilian_phaseList = [...headPhases, ...newMidPhases, ...tailPhases];
                                game.log(player, '重排了阶段序列，当前为：', '#y' + player.storage.xinxyilian_phaseList.map(p => get.translation(p)).join(' → '));
                            } else {
                                player.storage.xinxyilian_phaseList = myPhases;
                            }
                            // 实时更新当前回合的阶段列表
                            /* if (_status.event.name == 'phase' && _status.event.player == player) {
                                _status.event.phaseList = player.storage.xinxyilian_phaseList.slice();
                            }

                            let turnEvent = _status.event.getParent('phase');

                            if (turnEvent && turnEvent.player == player) {
                                // 覆盖当前回合剩下的阶段列表
                                turnEvent.phaseList = player.storage.xinxyilian_phaseList.slice();
                                game.log(player, '已即时更新本回合阶段顺序');
                            } */

                            /* if (moveResultMe.bool && oldFirstPhase && newFirstPhase && oldFirstPhase !== newFirstPhase) {
                                game.log(player, '由于阶段首位发生了改变，额外执行', '#y' + get.translation(newFirstPhase));
                                const next = player[newFirstPhase]();
                                next._extraPhaseReason = event.name;
                                await next;
                            } */
                        }


                        const targetPhase = player.getStorage('fyrhpaohuanhun_effect');
                        player.removeSkill('fyrhpaohuanhun_effect');

                        const fullPhase = trigger.phaseList[trigger.num];
                        if (fullPhase) {
                            const phaseName = fullPhase.split("|")[0];
                            if (phaseName.startsWith("phase")) {
                                // 将原本的阶段改为 skip（跳过）

                                const rest = fullPhase.slice(phaseName.length); // 保留后面的 |附加参数
                                trigger.phaseList[trigger.num] = "skip" + phaseName.slice(5) + rest;
                            }
                        }
                        game.log(player, "介入了当前回合，执行了", "#y" + get.translation(targetPhase));
                        // 临时把“当前回合角色”切换成自己
                        const originPhasePlayer = _status.currentPhase;
                        _status.currentPhase = player;

                        // 执行自己的阶段
                        const next = player[targetPhase]();
                        next._extraPhaseReason = "fyrhpaohuanhun";
                        await next;

                        // 阶段执行完毕，把回合的控制权还给原来的回合角色
                        _status.currentPhase = originPhasePlayer;
                    }
                }
            }
        },
        //曹肇
        fyrhxixi: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => "ext:永夜之境/audio/fyrhxixi" + (typeof index === "number" ? index : get.rand(1, 2)) + ".mp3",
            enable: "phaseUse",
            filterTarget(event, player, target) {
                return target !== player;
            },
            filter(event, player) {
                return game.hasPlayer(current => current?.isIn() && current !== player);
            },
            usable: 1,
            async content(event, trigger, player) {
                const target = event.target;
                await target.recover();
                player.addTempSkill("fyrhxixi_effect");
                player.addTempSkill("fyrhxixi_block");
                target.addTempSkill("fyrhxixi_block");
                await player
                    .useCard({ name: "juedou", isCard: true, storage: { fyrhxixi: true, damage: 5, pDrawn: false, tDrawn: false } }, target, false, 'nowuxie');
            },
            isXixiRespond(event) {
                return Array.isArray(event?.respondTo) && event.respondTo[1]?.storage?.fyrhxixi === true;
            },
            ai: {
                order(item, player) {
                    return 5;
                },
                result: {
                    target(player, target) {
                        return -1;
                    },
                }
            },
            subSkill: {
                effect: {
                    charlotte: true,
                    global: ["fyrhxixi_global", "fyrhxixi_damage"]
                },
                damage: {
                    trigger: {
                        global: "damageBegin1",
                    },
                    filter(event, player) {
                        return event.card?.storage?.fyrhxixi;
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    async content(event, trigger, player) {
                        trigger.num = trigger.card.storage.damage;
                        player.removeSkill("fyrhxixi_damage");
                    },
                },
                block: {
                    charlotte: true,
                    trigger: {
                        player: ["respondAfter", "chooseToRespondBegin"],
                    },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        return lib.skill.fyrhxixi.isXixiRespond(event);
                    },
                    async content(event, trigger, player) {
                        const duelCard = trigger.respondTo[1];
                        const cardStorage = duelCard.storage;
                        if (event.triggername === "chooseToRespondBegin") {
                            if (cardStorage.pDrawn && cardStorage.tDrawn) {
                                game.log("双方均已摸牌，终止了对", trigger.respondTo[1], "的响应");
                                trigger.cancel();
                            }
                        }
                        else {
                            if (cardStorage.damage > 0) {
                                cardStorage.damage--;
                                game.log(trigger.player, "响应了", duelCard, "，其伤害值减至", "#y" + cardStorage.damage);
                            }
                        }

                    },
                },
                global: {
                    charlotte: true,
                    enable: "chooseToRespond",
                    filter(event, player) {
                        if (event.fyrhxixi || !lib.skill.fyrhxixi.isXixiRespond(event)) {
                            return false;
                        }
                        let cardStorage = event.respondTo[1].storage;
                        if (cardStorage.pDrawn && cardStorage.tDrawn) {
                            return false;
                        }
                        return player == event.respondTo[0] ? !cardStorage.pDrawn : !cardStorage.tDrawn;
                    },
                    filterCard: () => false,
                    selectCard: [-2, -1],
                    prompt() {
                        const event = get.event();
                        const source = event.respondTo[0];
                        return '<span class="text center">' + ["摸两张牌视为打出【杀】"].map(str => "※" + str).join("<br>") + "</span>";
                    },
                    log: false,
                    viewAs: { name: "sha" },
                    async precontent(evt, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'fyrhxixi' + get.rand(3, 4) + '.mp3');
                        const event = evt.getParent();
                        //event.respondTo[1].storage.fyrhxixi--;

                        let duelCard = event.respondTo[1];
                        let cardStorage = duelCard.storage;
                        await player.draw(2);
                        // 记录是谁摸了牌
                        const source = event.respondTo[0];
                        if (player === source) {
                            cardStorage.pDrawn = true;
                        } else {
                            cardStorage.tDrawn = true;
                        }

                        game.broadcastAll(
                            (card, storage) => {
                                card.storage = storage;
                            },
                            event.respondTo[1],
                            event.respondTo[1].storage
                        );
                    },
                    ai: {
                        order(item, player) {
                            const event = _status.event;
                            if (event && event.respondTo && event.respondTo[1] && event.respondTo[1].storage) {
                                let cardStorage = event.respondTo[1].storage;
                                let source = event.respondTo[0];
                                //判断“对方”是否已经摸过牌
                                let opponentDrawn = false;
                                if (player === source) {
                                    // 如果 AI 是发起者，对方就是目标
                                    opponentDrawn = cardStorage.tDrawn;
                                } else {
                                    // 如果 AI 是目标，对方就是发起者
                                    opponentDrawn = cardStorage.pDrawn;
                                }

                                //如果对方已经摸过牌，优先发动
                                if (opponentDrawn) {
                                    return 10;
                                }
                            }
                            if (player.countCards('h', card => get.name(card) == 'sha')) {
                                return 0;
                            }
                            const card = new lib.element.VCard({ name: "shunshou" });
                            return get.effect(player, card, player, player) > 0 ? get.order(card, player) : 0.1;
                        },
                        respondSha: true,
                        skillTagFilter(player, tag, arg) {
                            if (arg === "use") {
                                return false;
                            }
                            const event = get.event();
                            if (event.fyrhxixi || !lib.skill.fyrhxixi.isXixiRespond(event)) {
                                return false;
                            }
                            const storage = event.respondTo[1].storage;
                            return player == event.respondTo[0] ? !storage.pDrawn : !storage.tDrawn;
                        },
                    }
                }
            }
        },
        //孙綝
        fyrhxiongduan: {
            audio: ['potnigu', 'potlulian'],
            enable: "phaseUse",
            manualConfirm: true,
            filter(event, player) {
                let storage = player.getStorage('fyrhxiongduan_effect');
                if (!storage.includes('move') && storage.length == 2) {
                    return player.countCards('he') > 1;
                }
                return !player.hasSkill('fyrhxiongduan_used');
            },
            async content(event, trigger, player) {
                await player.loseHp();
                if (!player?.isIn()) {
                    return;
                }
                let cards = get.cards(4);
                await game.cardsGotoOrdering(cards);
                await player.showCards(cards, "凶断");

                if (cards.length) {
                    cards.reverse();
                    game.cardsGotoPile(cards.filterInD(), "insert");
                }

                const result = await player.chooseButton([
                    `凶断：选择一项`,
                    '<div class="text center">牌堆顶的四张牌</div>',
                    [cards.reverse().slice()],
                    [[
                        ['move', `将两张牌置于牌堆顶`],
                        ['draw', `摸两张牌`],
                        ['binglin', `视为使用【兵临城下】`],
                    ], 'textbutton'],
                ], true)
                    .set("filterButton", button => {
                        const isText = typeof button.link === 'string';
                        const player = get.player();
                        if (player.getStorage('fyrhxiongduan_effect').includes(button.link)) {
                            return false;
                        }
                        if (button.link == "move") {
                            return player.countCards('he') > 1;
                        }
                        return isText;
                    })
                    .set('ai', button => {
                        let player = _status.event.player;
                        if (button.link == "draw") {
                            return 8;
                        }
                        if (button.link == "binglin") {
                            return 5;
                        }
                        return 1;
                    })
                    .forResult();
                if (result.bool && result.links?.length) {
                    switch (result.links[0]) {
                        case "move":
                            const { bool, moved } = await player
                                .chooseToMove("凶断：将任意张牌置于牌堆顶", true)
                                .set("list", [["你的牌", player.getCards('he')], ["牌堆顶"]])
                                .set("filterOk", moved => moved[1].length == 2)
                                .set("processAI", list => {
                                    const player = get.event().player;
                                    const cards = list[0][1].slice(),
                                        cards2 = cards.filter(card => {
                                            return game.hasPlayer(target => {
                                                if (get.type(card, null, target) == "equip" && (get.attitude(player, target) > 0 || get.recoverEffect(target, player, player) > 0)) {
                                                    return true;
                                                }
                                                if (get.type(card, null, target) != "equip" && target.getHp() >= player.getHp() && get.effect(target, { name: "losehp" }, player, player) > 0) {
                                                    return true;
                                                }
                                                return false;
                                            });
                                        }),
                                        cards3 = cards2.length ? cards2.randomGet() : cards.randomGet();
                                    return [[], [cards3]];
                                })
                                .forResult();
                            if (bool) {
                                let cards = moved[1].slice();
                                game.log(player, "将", cards, "置于了牌堆顶");
                                await game.cardsGotoPile(cards.reverse(), "insert");
                            }
                            break;
                        case "draw":
                            await player.draw(2);
                            break;
                        case "binglin":
                            const card = { name: "binglinchengxiax", isCard: true };
                            if (player.hasUseTarget(card)) {
                                await player.chooseUseTarget(card, true);
                            }
                            break;
                    }
                    const pileCards = Array.from(ui.cardPile.childNodes).slice();
                    if (pileCards.length >= 4) {
                        const fCard = pileCards[3];
                        await player.showCards([fCard], "凶断");
                        await player.gain(fCard, 'gain2');
                        if (get.type2(fCard) !== 'basic') {
                            player.addTempSkill('fyrhxiongduan_effect');
                            player.markAuto('fyrhxiongduan_effect', result.links[0]);
                            if (player.getStorage('fyrhxiongduan_effect').length >= 3) {
                                player.addTempSkill('fyrhxiongduan_used');
                            }

                        }
                    } else {
                        player.chat('无牌可得？');
                    }
                }
            },
            ai: {
                order: 5,
                result: {
                    player(player, target) {
                        let res = 2 * get.effect(player, { name: "draw" }, player, player);
                        if (
                            player.hp <= 2 &&
                            !player.hasCard(i => {
                                let name = get.name(i, player);
                                if (name != "tao" && name != "jiu") {
                                    return false;
                                }
                                return lib.filter.cardSavable(i, player, player);
                            }, "hs")
                        ) {
                            res = -res / 2;
                        }
                        return res;
                    },
                },
            },
            subSkill: {
                effect: {
                    charlotte: true,
                    marktext: '凶',
                    intro: {
                        content(storage) {
                            const dict = {
                                move: "将两张牌置于牌堆顶",
                                draw: "摸两张牌",
                                binglin: "视为使用【兵临城下】",
                            };
                            const translatedStr = storage.map(task => dict[task]).join("；");
                            return "已失效：<br>" + translatedStr;
                        },
                    }
                },
                used: {
                    charlotte: true,
                }
            }
        },
        //姜维
        fyrhzhuyang: {
            audio: ['olsbzhuri', 'olsbranji'],
            logAudio() {
                return ["olsbzhuri1.mp3", "olsbzhuri2.mp3"];
            },
            dutySkill: true,
            locked: false,
            trigger: {
                player: ["phaseJudgeEnd", "phaseDrawEnd", "phaseUseEnd", "phaseDiscardEnd"],
            },
            filter(event, player) {
                if (!game.hasPlayer(target => player.canCompare(target))) {
                    return false;
                }
                return true;
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2(event.skill), (card, player, target) => {
                        return player.canCompare(target);
                    })
                    .set("ai", target => {
                        let player = _status.event.player;
                        let ts = target.getCards("h").sort((a, b) => get.number(a) - get.number(b));
                        if (get.attitude(player, target) < 0) {
                            let hs = player.getCards("h").sort((a, b) => get.number(b) - get.number(a));
                            let ts = target.getCards("h").sort((a, b) => get.number(b) - get.number(a));
                            if (get.number(hs[0]) > get.number(ts[0])) {
                                return 1;
                            }
                            if (get.effect(player, { name: "losehp" }, player, player) > 0) {
                                return Math.random() + 0.2;
                            }
                            if (player.getHp() > 2) {
                                return Math.random() - 0.5;
                            }
                            return 0;
                        }
                        return 0;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const triggerName = trigger.name;
                let result2 = await player.chooseToCompare(target).forResult();
                if (result2?.bool) {
                    if (player.getStorage('fyrhzhuyang').includes(triggerName)) {
                        return;
                    }
                    let cards = [result2.player, result2.target].filterInD("d");
                    cards = cards.filter(card => player.hasUseTarget(card));
                    if (cards.length) {
                        let result3 = await player
                            .chooseButton(["是否使用其中的牌？", cards])
                            .set("ai", button => _status.event.player.getUseValue(button.link))
                            .forResult();
                        if (result3.bool) {
                            let card = result3.links[0];
                            player.$gain2(card, false);
                            await game.delayx();
                            const next = player.chooseUseTarget(true, card, false);
                            next.set("fyrhzhuyangx", true);
                            await next;
                            await player.draw(2);
                        }
                    }
                } else {
                    const result = await player.chooseButton([
                        `逐阳：选择一项`,
                        [[
                            ['ban', `失去${get.translation(triggerName)}赢的效果`],
                            ['lose', `失去1点体力`],
                        ], 'textbutton'],
                    ], true)
                        .set("filterButton", button => {
                            const player = get.player();
                            if (button.link == "ban") {
                                return !player.getStorage('fyrhzhuyang').includes(triggerName);
                            }
                            return true;
                        })
                        .set('ai', button => {
                            let player = _status.event.player;
                            if (button.link == "lose" && player.getHp() > 2) {
                                return 8;
                            }
                            if (button.link == "ban") {
                                return 2;
                            }
                            return 1;
                        })
                        .forResult();
                    if (result.bool && result.links?.length) {
                        switch (result.links[0]) {
                            case "ban":
                                player.markAuto('fyrhzhuyang', triggerName);
                                break;
                            case "lose":
                                await player.loseHp();
                                break;
                        }
                    }
                }
            },
            marktext: '逐',
            intro: {
                content(storage) {
                    const translatedStr = storage.map(task => get.translation(task)).join("；");
                    return "下列阶段已失去赢的效果：<br>" + translatedStr;
                },
            },
            getList(event) {
                return event.getParent().phaseList.map(list => list.split("|")[0]);
            },
            getNum(player) {
                return player
                    .getHistory("useCard", evt => {
                        return lib.phaseName.some(name => {
                            return evt.getParent(name).name == name;
                        });
                    })
                    .reduce((list, evt) => {
                        return list.add(evt.getParent(lib.phaseName.find(name => evt.getParent(name).name == name)));
                    }, []).length;
            },
            derivation: ["kunfen", "fyrhnewzhuyang"],
            group: ["fyrhzhuyang_achieve", "fyrhzhuyang_fail"],
            subSkill: {
                achieve: {
                    audio: ['olsbranji'],
                    forced: true,
                    skillAnimation: true,
                    animationColor: "metal",
                    trigger: {
                        player: "phaseEnd",
                    },
                    filter(event, player) {
                        const fourPhases = ["phaseJudge", "phaseDraw", "phaseUse", "phaseDiscard"];
                        const usedPhases = [];
                        player.getHistory("useCard", evt => {
                            const parentEvent = evt.getParent("chooseUseTarget");
                            //if (evt.fyrhzhuyangx === true) {
                            if (parentEvent && parentEvent.fyrhzhuyangx === true) {
                                // 向上追溯，看chooseUse事件发生在哪一个阶段
                                fourPhases.forEach(phaseName => {
                                    if (evt.getParent(phaseName).name === phaseName) {
                                        usedPhases.add(phaseName);
                                    }
                                });
                            }
                        });
                        return usedPhases.length === 4;
                    },
                    async content(event, trigger, player) {
                        game.log(player, "成功完成使命");
                        player.awakenSkill("fyrhzhuyang");
                        await player.addSkills('fyrhnewzhuyang');
                    },
                },
                fail: {
                    audio: ['olsbranji'],
                    forced: true,
                    skillAnimation: true,
                    animationColor: "metal",
                    trigger: {
                        player: "phaseEnd",
                    },
                    filter(event, player) {
                        const used = player.getHistory("useCard", evt => {
                            const parentEvent = evt.getParent("chooseUseTarget");
                            return parentEvent && parentEvent.fyrhzhuyangx === true;
                        });
                        return used.length === 0;
                    },
                    async content(event, trigger, player) {
                        game.log(player, "使命失败");
                        player.awakenSkill("fyrhzhuyang");
                        await player.recoverTo(player.maxHp);
                        await player.addSkills('kunfen');
                    },
                },
            },
        },
        fyrhnewzhuyang: {
            audio: ['xinxpanzhi', "ext:永夜之境/audio/xinxlinyou1.mp3", "ext:永夜之境/audio/xinxlinyou2.mp3"],
            trigger: {
                player: ["phaseJudgeEnd", "phaseDrawEnd", "phaseUseEnd", "phaseDiscardEnd"],
            },
            filter(event, player) {
                if (!game.hasPlayer(target => player.canCompare(target))) {
                    return false;
                }
                return true;
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2(event.skill), (card, player, target) => {
                        return player.canCompare(target);
                    })
                    .set("ai", target => {
                        var player = _status.event.player;
                        var ts = target.getCards("h").sort((a, b) => get.number(a) - get.number(b));
                        if (get.attitude(player, target) < 0) {
                            var hs = player.getCards("h").sort((a, b) => get.number(b) - get.number(a));
                            var ts = target.getCards("h").sort((a, b) => get.number(b) - get.number(a));
                            if (get.number(hs[0]) > get.number(ts[0])) {
                                return 1;
                            }
                        }
                        return 0;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                let result2 = await player.chooseToCompare(target).forResult();
                if (result2?.bool) {
                    let cards = [result2.player, result2.target].filterInD("d");
                    cards = cards.filter(card => player.hasUseTarget(card));
                    if (cards.length) {
                        let result3 = await player
                            .chooseButton(["是否使用其中的牌？", cards])
                            .set("ai", button => _status.event.player.getUseValue(button.link))
                            .forResult();
                        if (result3.bool) {
                            let card = result3.links[0];
                            player.$gain2(card, false);
                            await game.delayx();
                            await player.chooseUseTarget(true, card, false);
                            await player.draw(2);
                        }
                    }
                }
            }
        },
        //郝普
        fyrhjicheng: {
            audio: 'olzhenying',
            enable: "phaseUse",
            filter(event, player) {
                return !player.hasSkillTag("noCompareSource");
            },
            filterTarget(card, player, target) {
                return player.canCompare(target);
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const result2 = await player.chooseToCompare(target)
                    .set("ai", (card) => {
                        const player = _status.event.player;
                        let value = 0;
                        if (get.color(card) == 'black') {
                            value += 10;
                        }
                        return value - get.value(card) / 10;
                    })
                    .forResult();
                if (!result2?.bool) {
                    let redcards = [result2.player, result2.target].filter(card => get.color(card) == 'red');
                    if (redcards?.length) {
                        player.addTempSkill("fyrhjicheng_effect");
                        player.addMark("fyrhjicheng_effect", redcards.length, false);
                    }
                    let hs = player.countCards('h');
                    const result = await player.chooseButton([
                        `岌城：选择一项`,
                        [[
                            ['draw', `摸两张牌`],
                            ['juedou', `将一张牌当决斗使用`],
                            ['change', `将手牌数调整至手牌上限，结束回合`],
                        ], 'textbutton'],
                    ], true)
                        .set("filterButton", button => {
                            const player = get.player();
                            let count = player.getHandcardLimit();
                            let hs = get.event().hs;
                            if (button.link == "draw") {
                                return count - hs == 2;
                            }
                            if (button.link == "juedou") {
                                if (player.countCards('e')) {
                                    return count == hs;
                                }
                                return hs - count == 1;
                            }
                            return true;
                        })
                        .set('hs', hs)
                        .set('ai', button => {
                            let player = _status.event.player;
                            let hs = get.event().hs;
                            if (button.link == "draw") {
                                return 10;
                            }
                            if (button.link == "juedou") {
                                return 8;
                            }
                            return 3;
                        })
                        .forResult();
                    if (result.bool && result.links?.length) {
                        switch (result.links[0]) {
                            case "draw":
                                await player.draw(2);
                                break;
                            case "juedou":
                                const next = player.chooseToUse();
                                next.set("openskilldialog", `岌城：将一张牌当作【决斗】使用`);
                                next.set("norestore", true);
                                next.set('forced', true)
                                next.set("_backupevent", "fyrhjicheng_backup");
                                next.set("custom", {
                                    add: {},
                                    replace: { window() { } },
                                });
                                next.backup("fyrhjicheng_backup");
                                next.set("targetRequired", true);
                                next.set("complexSelect", true);
                                next.set("complexTarget", true);
                                next.set("filterTarget", function (card, player, target) {
                                    return lib.filter.targetEnabled.apply(this, arguments);
                                });
                                next.set("logSkill", event.name);
                                break;
                            case "change":
                                let num1 = player.countCards("h") - player.getHandcardLimit();
                                if (num1 < 0) {
                                    await player.drawTo(player.getHandcardLimit());
                                } else if (num1 > 0) {
                                    await player.chooseToDiscard(num1, "h", true, "allowChooseAll");
                                }
                                for (const phase of lib.phaseName) {
                                    const evt = event.getParent(phase);
                                    if (evt?.name === phase && !evt.finished) {
                                        //不触发cancelled时机
                                        evt.cancel(true, null, true);
                                        break;
                                    }
                                }
                                const evt = event.getParent("phase", true);
                                if (evt) {
                                    game.log(player, "结束了回合");
                                    evt.num = evt.phaseList.length;
                                    evt.goto(11);
                                }
                                break;
                        }
                    }
                }
            },
            ai: {
                order: 7,
                result: {
                    target(player, target) {
                        return -1;
                    },
                }
            },
            subSkill: {
                backup: {
                    viewAs: {
                        name: "juedou",
                    },
                    /* filterCard: (card, player) => get.itemtype(card) == "card",
                    */
                    position: "he", 
                    filterCard(card, player) {
                        if (get.itemtype(card) !== "card") return false;
                        if (player.countCards('h') === player.getHandcardLimit()) {
                            return get.position(card) === 'e'; 
                        } else {
                            return get.position(card) === 'h'; 
                        }
                    },
                    ai1(card) {
                        return 6 - get.value(card);
                    },
                    log: false,
                    ai: {
                        basic: {
                            useful: 4,
                            value: 3,
                        },
                        order: 4,
                        result: {
                            target(player, target, card, isLink) {
                                if (get.effect(target, { name: "juedou" }, player, target) == 0) {
                                    return 0;
                                }
                                return -2.5;
                            },
                        },
                        tag: {
                            respond: 1,
                            respondShan: 1,
                            damage: 1,
                        },
                    },
                },
                effect: {
                    markimage: "image/card/handcard.png",
                    charlotte: true,
                    onremove: true,
                    mod: {
                        maxHandcard(player, num) {
                            return num - player.countMark("fyrhjicheng_effect");
                        },
                    },
                    intro: {
                        content: "手牌上限-#",
                    },
                },
            }
        },
        //郑玄
        fyrhzhengjing: {
            audio: "ext:永夜之境/audio:4",
            mark: true,
            intro: {
                markcount(storage, player) {
                    return 0;
                },
                content(storage, player) {
                    const cnList = ['杀', '火攻', '万箭齐发', '过河拆桥', '闪', '决斗', '无中生有', '铁索连环', '酒', '借刀杀人', '桃园结义', '顺手牵羊', '桃', '无懈可击', '五谷丰登', '南蛮入侵'];
                    return `当前状态：<br>可视为使用<b>【${cnList[storage || 0]}】</b>`;
                }
            },
            syncMarkUI(player, index, list) {
                game.broadcastAll(function (player, index, currentList) {
                    const skill = "fyrhzhengjing";
                    if (!player.marks[skill]) return;
                    const dict = {
                        'sha': { name: '杀', color: '#DC143C' },
                        'huogong': { name: '火', color: '#FF4500' },
                        'wanjian': { name: '万', color: '#DAA520' },
                        'guohe': { name: '拆', color: '#696969' },
                        'shan': { name: '闪', color: '#FFD700' },
                        'juedou': { name: '决', color: '#8B0000' },
                        'wuzhong': { name: '生', color: '#FF69B4' },
                        'tiesuo': { name: '索', color: '#708090' },
                        'jiu': { name: '酒', color: '#8B4513' },
                        'jiedao': { name: '借', color: '#2F4F4F' },
                        'taoyuan': { name: '结', color: '#FF1493' },
                        'shunshou': { name: '顺', color: '#4682B4' },
                        'tao': { name: '桃', color: '#32CD32' },
                        'wuxie': { name: '懈', color: '#00CED1' },
                        'wugu': { name: '谷', color: '#FFA500' },
                        'nanman': { name: '蛮', color: '#A0522D' }
                    };

                    const currentCard = currentList[index];
                    const markData = dict[currentCard] || { name: '无', color: '#000000' };

                    const markNode = player.marks[skill].firstChild;
                    // 替换首字符，并加上白色文字和黑色发光描边，确保在任何背景色下都清晰可见
                    markNode.innerHTML = `<span style="color:#FFF; font-weight:bold; text-shadow:1px 1px 2px #000;">${markData.name}</span>`;
                    // 替换背景色
                    markNode.style.backgroundColor = markData.color;

                }, player, index, list);
            },
            init(player, skill) {
                let currentIndex = player.getStorage(skill);
                if (typeof currentIndex !== 'number') {
                    currentIndex = 0;
                }
                player.setStorage(skill, currentIndex);
                let currentList = player.getStorage(skill + "_list");
                if (!Array.isArray(currentList) || currentList.length !== 16) {
                    currentList = ['sha', 'huogong', 'wanjian', 'guohe', 'shan', 'juedou', 'wuzhong', 'tiesuo', 'jiu', 'jiedao', 'taoyuan', 'shunshou', 'tao', 'wuxie', 'wugu', 'nanman'];
                    player.setStorage(skill + "_list", currentList);
                }
                player.markSkill(skill);
                get.info(skill).syncMarkUI(player, currentIndex, currentList);
            },
            enable: 'chooseToUse',
            hiddenCard(player, name) {
                const list = player.getStorage('fyrhzhengjing_list') || [];
                const currentIndex = player.getStorage('fyrhzhengjing') || 0;
                return name === list[currentIndex];

            },
            getList(event, player) {
                const list = player.getStorage('fyrhzhengjing_list') || [];
                let currentIndex = player.getStorage('fyrhzhengjing') || 0;
                if (typeof currentIndex !== 'number') {
                    currentIndex = 0;
                }
                const currentCardName = list[currentIndex];
                return get.inpileVCardList(info => {
                    if (info[2] !== currentCardName) return false;
                    const card = get.autoViewAs({ name: info[2], nature: info[3] }, "unsure");

                    return event.filterCard(card, player, event);
                });
            },
            filter(event, player) {
                return get.info("fyrhzhengjing").getList(event, player).length;
            },
            chooseButton: {
                dialog(event, player) {
                    const list = get.info("fyrhzhengjing").getList(event, player);
                    return ui.create.dialog("整经", [list, "vcard"], "hidden");
                },
                check(button) {
                    let player = _status.event.player;
                    if (_status.event.getParent().type != "phase") {
                        return 1;
                    }
                    if (button.link[2] == "juedou" && player.countCards('h', card => get.name(card, false) == 'sha')) {
                        return 5;
                    }
                    return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                },
                backup(links, player) {
                    return {
                        filterCard: () => false,
                        selectCard: -1,
                        log: false,
                        popname: true,
                        ignoreMod: true,
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],
                            storage: {
                                fyrhzhengjing: true,
                            },
                        },
                        async precontent(event, trigger, player) {
                            player.logSkill('fyrhzhengjing');
                            let currentIndex = player.getStorage('fyrhzhengjing') || 0;

                            /* let nextIndex = (currentIndex + 1) % 16;
                            player.setStorage('fyrhzhengjing', nextIndex);
                            get.info('fyrhzhengjing').syncMarkUI(player, nextIndex);
                            const cnList = ['杀', '火攻', '万箭齐发', '过河拆桥', '闪', '决斗', '无中生有', '铁索连环', '酒', '借刀杀人', '桃园结义', '顺手牵羊', '桃', '无懈可击', '五谷丰登', '南蛮入侵'];
                            game.log(player, "的", "#g【整经】", "状态转为了", "#y【" + cnList[nextIndex] + "】"); */
                            let currentList = player.getStorage('fyrhzhengjing_list');
                            if (typeof currentIndex !== 'number') {
                                currentIndex = 0;
                            }
                            let nextIndex = (currentIndex + 1) % 16;
                            player.setStorage('fyrhzhengjing', nextIndex);
                            game.log(player, "的", "#g【整经】", "状态转至下一项");

                            player
                                .when({ player: ["useCardAfter"] })
                                .filter(evt => evt.getParent() == event.getParent())
                                .step(async (event, trigger, player) => {
                                    if (nextIndex === 0) {
                                        // chooseToMove 使用的 vcard 格式数组 (['', '', 'sha'], etc...)
                                        let vcardList = currentList.map(cardName => ['', '', cardName]);

                                        const next = player.chooseToMove('整经：你已完成一轮循环，可互换其中两项的顺序');
                                        next.set('originalList', currentList);
                                        next.set('list', [
                                            ['拖拽卡牌以调整顺序（仅有两项可变）', [vcardList, 'vcard'], function (links) {
                                                if (links?.length > 0) {
                                                    return '新的一轮将从使用 【' + get.translation(links[0][2]) + '】 开始';
                                                }
                                                return '';
                                            }]
                                        ]);
                                        next.set("filterOk", function (moved) {
                                            const original = _status.event.originalList;
                                            const current = moved[0].map(item => item[2]);
                                            let diffCount = 0;
                                            for (let i = 0; i < original.length; i++) {
                                                if (original[i] !== current[i]) {
                                                    diffCount++;
                                                }
                                            }
                                            return diffCount === 0 || diffCount === 2;
                                        });
                                        next.set('processAI', function () {
                                            const player = _status.event.player;
                                            const list = player.getStorage('fyrhzhengjing_list').map(i => ['', '', i]);
                                            return [list];
                                        });
                                        const res = await next.forResult();
                                        if (res?.bool && res?.moved[0]) {
                                            let newList = res.moved[0].map(item => item[2]);
                                            player.setStorage('fyrhzhengjing_list', newList);
                                            currentList = newList;
                                            game.log(player, "重新编排了", "#g【整经】", "的序列");
                                        }
                                    }
                                    get.info('fyrhzhengjing').syncMarkUI(player, nextIndex, currentList);
                                });

                            get.info('fyrhzhengjing').syncMarkUI(player, nextIndex, currentList);


                        }
                    };
                },
                prompt(links, player) {
                    return `视为使用${get.translation(links[0][3]) || ""}【${get.translation(links[0][2])}】使用`;
                },
            },
            ai: {
                order(item, player) {
                    return 10;
                },
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 1;
                    },
                },
            },
            subSkill: {


            }
        },
        //钟会
        fyrhyuzhi: {
            audio: 'clanxieshu',
            trigger: {
                player: "phaseUseBegin",
            },
            locked: true,
            async cost(event, trigger, player) {
                const result = await player
                    .chooseNumbers(get.prompt(event.skill, trigger.player), [
                        {
                            prompt: "将体力值调整至任意值并摸等量张牌，然后若手牌中的【杀】的数量不大于此值，你受到【杀】数量点伤害",
                            min: 1,
                            max: player.maxHp,
                        },
                    ], true)
                    .set("processAI", () => {
                        const player = get.player();
                        const shahs = player.getCards('h').filter(card => card.name === "sha");
                        const num = player.maxHp - shahs.length;
                        return [player.maxHp];
                    })
                    .forResult();
                if (result.bool) {
                    event.result = {
                        bool: true,
                        cost_data: result.numbers[0],
                    };
                }
            },
            async content(event, trigger, player) {
                const {
                    cost_data: num,
                } = event;
                await player.changeHp(num);
                await player.draw(num);
                await player.showCards(player.getCards('h'));
                const shanum = player.getCards('h').filter(card => card.name === "sha");
                if (shanum.length < num) {
                    await player.damage(shanum.length);
                    await player.discard(shanum);
                }
            },
        },
        //诸葛诞
        fyrhjuyi: {
            init(player) {
                player.addSkill("fyrhjuyi2");
            },
            audio: ['xinxjuyi', 'xinxgushu'],
            trigger: {
                global: "phaseBegin",
            },
            filter(event, player) {
                const currentX = player.countMark('fyrhjuyi2') || 1;
                const fixedX = player.getStorage('fyrhjuyi');
                if (fixedX > 0) {
                    return currentX === fixedX;
                } else {
                    return true;
                }
            },
            logAudio(event, player) {
                return player.getStorage('fyrhjuyi') > 0 ? ["ext:永夜之境/audio/xinxgushu1.mp3", "ext:永夜之境/audio/xinxgushu2.mp3"] : 'xinxjuyi';
            },
            prompt2(event, player) {
                const currentX = player.countMark('fyrhjuyi2') || 1;
                const fixedX = player.getStorage('fyrhjuyi');
                if (fixedX > 0) {
                    return `摸${2 * fixedX}张牌`;
                }
                return `摸${2 * currentX}张牌，并将本技能的X固定为${currentX}`;
            },
            check(event, player) {
                const fixedX = player.getStorage('fyrhjuyi');
                if (fixedX > 0) return true;
                const currentX = player.countMark('fyrhjuyi2') || 1;
                const num = game.countPlayer();
                if (num == 2) {
                    return currentX >= 2;
                }
                return currentX >= 2;
            },
            async content(event, trigger, player) {
                let num = player.getStorage('fyrhjuyi');
                if (typeof num !== 'number') {
                    num = player.countMark('fyrhjuyi2') || 1;
                    player.setStorage('fyrhjuyi', num, true);
                }
                if (num > 0) {
                    await player.draw(2 * num);
                }
            },
            marktext: "义",
            intro: {
                markcount(storage, player) {
                    return (storage || 0).toString();
                },
                content(storage, player) {
                    return `每轮的第${storage || 0}个回合开始时，你可以摸${2 * storage || 0}张牌。`;
                },
            },
            group: ["fyrhjuyi_hook"],
            subSkill: {
                hook: {

                }
            }
        },
        fyrhjuyi2: {
            charlotte: true,
            silent: true,
            trigger: {
                global: ["roundStart", "phaseBeforeStart"],
            },
            forced: true,
            async content(event, trigger, player) {
                if (event.triggername === "roundStart") {
                    player.clearMark("fyrhjuyi2", false);
                } else if (event.triggername === "phaseBeforeStart") {
                    player.addMark("fyrhjuyi2", 1, false);
                }
            }
        },
        //孙权
        fyrhminglv: {
            audio: "ext:永夜之境/audio:4",
            enable: "chooseToUse",
            filter(event, player) {
                if (!Array.isArray(event.fyrhminglv)) {
                    return false;
                }
                for (let card of event.fyrhminglv) {
                    if (event.filterCard(card, player, event)) {
                        return true;
                    }
                }
                return false;
            },
            onChooseToUse(event) {
                if (game.online) {
                    return;
                }
                const cards = [];
                for (let i = 0; i < ui.discardPile.childNodes.length; i++) {
                    let card = ui.discardPile.childNodes[i];
                    cards.push(card);
                }
                event.set("fyrhminglv", cards);
            },
            chooseButton: {
                dialog(event, player) {
                    let dialog = ui.create.dialog("明虑", "hidden");
                    if (event.fyrhminglv && event.fyrhminglv.length) {
                        dialog.add(event.fyrhminglv);
                    } else {
                        dialog.addText("弃牌堆没有牌");
                    }
                    return dialog;
                },
                filter(button, player) {
                    let evt = _status.event.getParent(),
                        card = button.link;
                    if (evt && evt.filterCard) {
                        return evt.filterCard(card, player, evt);
                    }
                    return false;
                },
                check(button) {
                    let player = _status.event.player,
                        card = button.link;
                    if (_status.event.type != "phase") {
                        return 1;
                    }
                    if (_status.event.dying) {
                        return get.attitude(player, _status.event.dying);
                    }
                    return player.getUseValue(card) / 4;
                },
                backup(links, player) {
                    return {
                        filterCard: () => false,
                        selectCard: -1,
                        viewAs: { name: links[0].name, isCard: true, cards: [links[0]] },
                        popname: true,
                        log: false,
                        async precontent(event, trigger, player) {
                            player.logSkill("fyrhminglv");
                            let name = event.result.card.name;
                            event.result.cards = event.result.card.cards;
                            event.result.card = get.autoViewAs(event.result.cards[0]);
                            event.result.card.name = name;
                            let next = game.createEvent("fyrhminglv_update");
                            event.next.remove(next);
                            event.getParent().after.push(next);
                            next.setContent(function () {
                                game.updateRoundNumber();
                            });
                            let cards1 = event.result.cards;
                            player
                                .when({ player: ["useCardAfter"] })
                                .filter(evt => evt.getParent() == event.getParent())
                                .step(async (event, trigger, player) => {
                                    //let cards = cards1.filterInD('od');
                                    let cards = cards1.filterInD('ojd');
                                    if (cards?.length) {
                                        game.log(player, "将", cards, "洗入牌堆");
                                        await game.cardsGotoPile(cards, () => {
                                            return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                                        });
                                    }
                                });
                        },
                    };
                },
                prompt(links, player) {
                    return "使用弃牌堆中的" + get.translation(links);
                },
            },
            hiddenCard(player, name) {
                if (name) {
                    if (ui.discardPile.hasChildNodes !== false) {
                        const pile = Array.from(ui.discardPile.childNodes);
                        let range = pile.slice();
                        return range.some(card => card.name === name);
                    }
                    return false;
                }
                return true;
            },
            subSkill: {
                used: {
                    charlotte: true,
                },
            },
            ai: {
                effect: {
                    target(card, player, target, effect) {
                        if (get.tag(card, "respondShan")) {
                            return 0.7;
                        }
                        if (get.tag(card, "respondSha")) {
                            return 0.7;
                        }
                    },
                },
                order(item, player) {
                    if (!player?.hasSkill('fyrhzihun')) {
                        return 12;
                    }
                    if (player.getHistory("useCard").length < player.countMark('fyrhzihun')) {
                        return 12;
                    }
                    return 0;
                },
                respondSha: true,
                respondShan: true,
                fireAttack: true,
                skillTagFilter(player, tag, arg) {
                    if (arg == "respond") {
                        return false;
                    }
                    let list = [];
                    for (let i = 0; i < ui.discardPile.childNodes.length; i++) {
                        let card = ui.discardPile.childNodes[i];
                        if (!list.includes(card.name)) {
                            list.push(card.name);
                        }
                    }
                    if (tag == "respondSha") {
                        return list.includes("sha");
                    }
                    if (tag == "respondShan") {
                        return list.includes("shan");
                    }
                    return !player.getStat("skill").fyrhminglv;
                },
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 1;
                    },
                },
            },
            group: "fyrhminglv_effect",
            subSkill: {
                effect: {
                    trigger: {
                        player: "phaseBefore",
                    },
                    forced: true,
                    locked: false,
                    async content(event, trigger, player) {
                        trigger.phaseList = ["phaseUse"];
                    },
                }
            }
        },
        fyrhzihun: {
            audio: "dcwoheng",
            init(player, skill) {
                if (!player.hasMark(skill)) {
                    player.setMark(skill, 4, false);
                }
            },
            mark: true,
            marktext: "滋",
            intro: {
                name: "滋昏",
                content: "一回合使用至少第#张牌后，失去1点体力",
            },
            trigger: {
                player: "useCardEnd",
            },
            onremove: true,
            forced: true,
            filter(event, player) {
                return player.getHistory("useCard").indexOf(event) + 1 >= player.countMark('fyrhzihun');
            },
            async content(event, trigger, player) {
                await player.loseHp();
            },
            mod: {
                aiOrder(player, card, num, event) {
                    if (get.itemtype(card) == "card") {
                        const simulatedCount = player.getHistory("useCard").length;
                        const threshold = player.countMark('fyrhzihun');
                        if (get.type(card, false) == "delay") {
                            return 0;
                        }
                        if (simulatedCount < threshold) {
                            return num;
                        }
                        return 0;
                    }
                },
            },
            group: "fyrhzihun_effect",
            subSkill: {
                effect: {
                    trigger: {
                        global: ["loseAfter", "loseAsyncAfter", "cardsGotoPileAfter", "drawAfter", "gainAfter"],
                    },
                    filter(event, player, name, target) {
                        const cardPileNum = ui.cardPile.childNodes.length;
                        const discardPileNum = ui.discardPile.childNodes.length;
                        if (cardPileNum >= discardPileNum || cardPileNum === 0) {
                            return false;
                        }
                        return true;
                    },
                    forced: true,
                    silent: true,
                    async content(event, trigger, player) {
                        const cards = Array.from(ui.cardPile.childNodes);
                        if (cards.length > 0) {
                            game.playAudio("../extension/永夜之境/audio/", 'fyrhminglv' + get.rand(1, 2) + '.mp3');
                            await player.gain(cards, 'gain2');
                            player.removeMark('fyrhzihun', 1, false);
                        }
                    },

                }
            }

        },
        //吕布
        fyrhwuqian: {
            audio: ['xinxxuanxiao', "ext:永夜之境/audio/xinxshiji2.mp3"],
            enable: ["chooseToUse"],
            hiddenCard(player, name) {
                return (
                    ["sha", "juedou"].includes(name) &&
                    game.countPlayer(current => current.countCards('ej'))
                );
            },
            getList(event, player) {
                return get.inpileVCardList(info => {
                    if (!["sha", "juedou"].includes(info[2])) {
                        return false;
                    }
                    const card = get.autoViewAs({ name: info[2], nature: info[3] }, "unsure");
                    return event.filterCard(card, player, event) && game.countPlayer(current => current.countCards('ej'));
                });
            },
            getCards(player) {
                let cards = [];
                game.countPlayer(current => {
                    cards.push(...current.getCards('ej'));
                });
                return cards;
            },
            filter(event, player) {
                return get.info("fyrhwuqian").getList(event, player).length;
            },
            chooseButton: {
                dialog(event, player) {
                    const list = get.info("fyrhwuqian").getList(event, player);
                    return ui.create.dialog("无前", [list, "vcard"], "hidden");
                },
                check(button) {
                    let player = _status.event.player;
                    if (_status.event.getParent().type != "phase") {
                        return 1;
                    }
                    if (button.link[2] == "juedou" && player.countCards('h', card => get.name(card, false) == 'sha')) {
                        return 5;
                    }
                    return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
                },
                backup(links, player) {
                    return {
                        /* filterCard(card, player) {
                            return get.info("fyrhwuqian").getCards(player);
                        },
                        position: "h", */
                        filterCard: () => false,
                        selectCard: -1,
                        log: false,
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],
                            storage: {
                                fyrhwuqian: true,
                            },
                        },
                        async precontent(event, trigger, player) {
                            const cards = get.info("fyrhwuqian").getCards(player);
                            // const cards = lib.skill.fyrhwuqian.getCards(player);
                            player.logSkill("fyrhwuqian");
                            event.result.cards = cards;
                            let num = cards.length;
                            player.addTempSkill('fyrhwuqian_effect');
                            player.setStorage("fyrhwuqian_effect", num);
                        }
                    };
                },
                prompt(links, player) {
                    let num1 = get.info("fyrhwuqian").getCards(player).length;
                    return `将场上的所有牌当作伤害为${num1}的${get.translation(links[0][3]) || ""}【${get.translation(links[0][2])}】使用`;
                },
            },
            subSkill: {
                effect: {
                    trigger: {
                        global: "damageBegin1",
                    },
                    filter(event, player) {
                        var targets = event.getParent(2).targets;
                        if (!targets) {
                            return false;
                        }
                        if (!event.card?.storage?.fyrhwuqian) {
                            return false;
                        }
                        let target = event.player;
                        if (!target.isIn()) {
                            return false;
                        }
                        return player.getStorage('fyrhwuqian_effect');
                    },
                    forced: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxwushuang' + get.rand(1, 2) + '.mp3');
                        let num = player.getStorage('fyrhwuqian_effect');
                        trigger.num = num;
                        player.removeSkill("fyrhwuqian_effect");
                    },
                }
            },
            ai: {
                order(item, player) {
                    let num1 = get.info("fyrhwuqian").getCards(player).length;
                    return Math.max(get.order({ name: "juedou" })) + num1;
                },
                respondSha: true,
                skillTagFilter(player) {
                    if (!get.info("fyrhwuqian").getCards(player)) {
                        return false;
                    }
                },
                result: {
                    player(player) {
                        return 1;
                    },
                },
            },
        },
        //刻律德菈
        fyrhranlv: {
            audio: 'xinxzhengfu',
            trigger: {
                global: "phaseBefore",
                player: "enterGame",
            },
            firstDo: true,
            forced: true,
            popup: false,
            filter(event, player) {
                return (event.name != "phase" || game.phaseNumber == 0);
            },
            async content(event, trigger, player) {
                game.countPlayer(current => {
                    if (current == player) {
                        return false;
                    }
                    current.addSkill('fyrhranlv2');
                })
            },
        },
        fyrhranlv2: {
            persevereSkill: true,
            forced: true,
            charlotte: true,
            mark: true,
            superCharlotte: true,
            unique: true,
            markimage: "extension/永夜之境/image/mark/xinxzhengfu_effect.png",
            intro: {
                name: '我即律法',
                content: '汝于摸牌阶段后执行一个弃牌阶段',
            },
            trigger: {
                player: "phaseDrawAfter",
            },
            async content(event, trigger, player) {
                game.playAudio("../extension/永夜之境/audio/", 'xinxzhengfu' + get.rand(1, 6) + '.mp3');
                const next = player.phaseDiscard();
                event.next.remove(next);
                trigger.next.push(next);
            }
        },
        fyrhchongsu: {
            audio: 'xinxfengjue',
            logAudio: index => "ext:永夜之境/audio/xinxfengjue" + (typeof index === "number" ? index : get.rand(1, 5)) + ".mp3",
            enable: "phaseUse",
            filterTarget(event, player, target) {
                return true;
            },
            filter(event, player) {
                let kelvdela = game.findPlayer2(current => current.name === 'fyrh_kelvdela');
                let skills = kelvdela ? kelvdela.getStockSkills(false, true).filter(skill => {
                    const info = get.info(skill);
                    return !info.charlotte || !info.persevereSkill;
                }) : (lib.character['fyrh_kelvdela'] ? lib.character['fyrh_kelvdela'][3] : []);
                for (let skill of skills) {
                    let info = lib.translate[skill + "_info"];
                    if (info && (info.includes("准备阶段") || info.includes("判定阶段") || info.includes("摸牌阶段") || info.includes("出牌阶段") || info.includes("弃牌阶段") || info.includes("结束阶段"))) {
                        return true;
                    }
                }
                return false;
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                let kelvdela = game.findPlayer2(current => current.name === 'fyrh_kelvdela');
                let skills = kelvdela ? kelvdela.getStockSkills(false, true).filter(skill => {
                    const info = get.info(skill);
                    return !info.charlotte || !info.persevereSkill;
                }) : (lib.character['fyrh_kelvdela'] ? lib.character['fyrh_kelvdela'][3] : []);

                const phaseMap = {
                    "准备阶段": "phaseZhunbei",
                    "判定阶段": "phasePanding",
                    "摸牌阶段": "phaseDraw",
                    "出牌阶段": "phaseUse",
                    "弃牌阶段": "phaseDiscard",
                    "结束阶段": "phaseJieshu"
                };

                let availablePhases = new Set();
                for (let skill of skills) {
                    let info = lib.translate[skill + "_info"];
                    if (info) {
                        for (let key in phaseMap) {
                            if (info.includes(key)) {
                                availablePhases.add(key);
                            }
                        }
                    }
                }

                const controls = Array.from(availablePhases);
                if (controls.length === 0) return;
                const result = await player.chooseButton([
                    `###${get.translation('fyrhchongsu')}###选择令${get.translation(target)}于本阶段结束后执行的阶段`,
                    [controls, 'textbutton']
                ])
                    .set("target", target)
                    .set('ai', button => {
                        const player = get.player();
                        const { target } = get.event();
                        let att = get.attitude(player, target);
                        if (button.link == "出牌阶段") {
                            return att * target.countCards("h") * 2;
                        }
                        if (button.link == "摸牌阶段") {
                            return att / Math.max(1, target.countCards("h"));
                        }
                        if (button.link == "弃牌阶段") {
                            return -att * target.countCards("h") * 2;
                        }
                    }).forResult();
                if (result.bool && result.links?.length) {
                    const selectedItem = result.links[0];
                    const phaseName = phaseMap[selectedItem];
                    const phaseChinese = selectedItem;
                    game.log(player, "令", target, "于本阶段结束后执行一个", "#y" + phaseChinese);
                    player.addTempSkill('fyrhchongsu_effect', 'phaseUseAfter');
                    let tasks = player.getStorage('fyrhchongsu_effect') || [];
                    player.markAuto('fyrhchongsu_effect', { target: target, phase: phaseName, phaseChinese: phaseChinese });

                    let kelvdela = game.findPlayer2(current => current.name === 'fyrh_kelvdela');
                    if (kelvdela.isIn() && player.hasSkill('fyrhchongsu')) {
                        const result = await kelvdela
                            .chooseTarget(`###${get.translation('fyrhchongsu')}###<div class="text center">将${get.poptip('fyrhchongsu')}交给一名角色</div>`, true,
                                (card, p, target) => {
                                    return target !== player;
                                })
                            .set("ai", target => {
                                const player = _status.event.player;
                                const att = get.attitude(player, target);
                                return att;
                            })
                            .forResult();
                        if (result.bool && result.targets?.length) {
                            const target = result.targets[0];
                            kelvdela.line(target);
                            await player.removeSkills('fyrhchongsu');
                            await target.addSkills('fyrhchongsu');
                        }
                    }
                }
            },
            ai: {
                order: 6,
                result: {
                    target(player, target) {
                        if (get.attitude(player, target) > 0 && target !== player) {
                            return 1;
                        }
                        return 0;
                    },
                },
            },
            subSkill: {
                effect: {
                    charlotte: true,
                    onremove: true,
                    forced: true,
                    popup: false,
                    trigger: {
                        player: "phaseUseEnd",
                    },
                    filter(event, player) {
                        return player.getStorage('fyrhchongsu_effect').length;
                    },
                    async content(event, trigger, player) {
                        const tasks = player.getStorage('fyrhchongsu_effect');
                        if (tasks?.length === 0) return;
                        game.playAudio("../extension/永夜之境/audio/", 'yrhchongsu' + get.rand(7, 9) + '.mp3');
                        player.removeSkill('fyrhchongsu_effect');
                        for (let task of tasks) {
                            let target = task.target;
                            let phaseName = task.phase;
                            if (target?.isIn()) {
                                const next = target[phaseName]();
                                next._extraPhaseReason = event.name;
                                await next;
                            }
                        }
                    }
                }
            }
        },
        //吴苋
        fyrhyirong: {
            audio: 'clanyirong',
            init(player, skill) {
                let num = player.getHandcardLimit();
                player.setStorage(skill, num);
                player.markSkill(skill);
            },
            onremove: true,
            mark: true,
            marktext: "荣",
            intro: {
                markcount(storage, player) {
                    let x = player.getHandcardLimit();
                    //return (storage || 0).toString();
                    return (x || 0).toString();
                },
                content(storage, player) {
                    let usedArr = player.getStorage('fyrhyirong_used');
                    let x = player.getHandcardLimit();
                    let usedStr = "无";
                    if (Array.isArray(usedArr) && usedArr.length > 0) {
                        usedStr = usedArr.join("、");
                    }
                    return `当前X为：<font color=#CEB1E2>${x || 0}</font><br>已使用项数：${usedStr}`;
                },
            },
            enable: "phaseUse",
            filter(event, player) {
                let num = player.getHandcardLimit();
                return !player.getStorage('fyrhyirong_used').includes(num);
            },
            chooseButton: {
                dialog(event, player) {
                    let num = player.getHandcardLimit();
                    let hs = player.countCards('h');
                    return ui.create.dialog(`移荣：选择一项`, [
                        [
                            ['gain', `将手牌数调整至${num}`],
                            ['set', `将上限调整至手牌数${hs}`],
                        ],
                        "textbutton"
                    ]);
                },
                filter(button, player) {
                    return true;
                },
                check(button) {
                    let player = _status.event.player;
                    let num = player.getHandcardLimit();
                    let hs = player.countCards('h');
                    if (button.link == "set") {
                        return hs > num && hs - num >= 2 ? 1 : 0;
                    }
                    if (button.link == "gain") {
                        return hs < num && num - hs >= 2 ? 1 : 0;
                    }
                    return 0;
                },
                backup(links, player) {
                    return {
                        audio: 'clanyirong',
                        choice: links[0],
                        filterTarget(card, player, target) {
                            return player === target;
                        },
                        selectTarget: -1,
                        async content(event, trigger, player) {
                            let num = player.getHandcardLimit();
                            let hs = player.countCards('h');
                            const { choice } = get.info(event.name);
                            player.addTempSkill('fyrhyirong_used', "phaseUseAfter");
                            player.markAuto('fyrhyirong_used', num);
                            if (choice == "gain") {
                                const num1 = num - hs;
                                if (num1 > 0) {
                                    await player.drawTo(player.getHandcardLimit());
                                } else {
                                    await player.chooseToDiscard(-num1, "h", true, "allowChooseAll");
                                }
                                lib.skill.chenliuwushi.change(player, -1);

                            } else if (choice == "set") {
                                let changeAmount = (hs - 1) - num;
                                if (changeAmount !== 0) {
                                    lib.skill.chenliuwushi.change(player, changeAmount);
                                }
                            }

                            player.markSkill('fyrhyirong');
                        },
                    };
                },
            },
            /* async content(event, trigger, player) {
                const target = event.target;
                let num = player.getHandcardLimit();
                let hs = player.countCards('h');
                player.addTempSkill('fyrhyirong_used', "phaseUseAfter");
                player.markAuto('fyrhyirong_used', num);
                const result = await player.chooseButton([
                    `移荣：选择一项`,
                    [[
                        ['gain', `将手牌数调整至${num}`],
                        ['set', `将${num}调整至手牌数${hs}`],
                    ], 'textbutton'],
                ], true)
                    .set("filterButton", button => {
                        return true;
                    })
                    .set('target', target)
                    .set('num', num)
                    .set('hs', hs)
                    .set('ai', button => {
                        let player = _status.event.player;
                        let num = get.event().num;
                        let hs = get.event().hs;
                        if (button.link == "set") {
                            return hs > num && hs - num >= 2 ? 1 : 0;
                        }
                        if (button.link == "gain") {
                            return hs < num && num - hs >= 2 ? 1 : 0;
                        }
                        return 0;
                    })
                    .forResult();
                if (result.bool && result.links?.length) {
                    if (result.links[0] == "gain") {
                        const num1 = num - player.countCards("h");
                        if (num1 > 0) {
                            await player.drawTo(player.getHandcardLimit());
                        } else {
                            await player.chooseToDiscard(player.getHandcardLimit(), "h", true, "allowChooseAll");
                        }
                        lib.skill.chenliuwushi.change(player, -1);
                    } else {
                        let changeAmount = (hs - 1) - num;
                        if (changeAmount !== 0) {
                            lib.skill.chenliuwushi.change(player, changeAmount);
                        }
                    }
                    player.markSkill('fyrhyirong');
                }
            }, */
            subSkill: {
                used: {
                    charlotte: true,
                    onremove: true,
                },
                backup: {

                },
                effect: {
                    mod: {
                        maxHandcardBase(player, num) {
                            let x = player.getStorage('fyrhyirong');
                            if (typeof x === 'number') {
                                return x;
                            }
                        },
                    },
                },
            },
            ai: {
                order: 12,
                result: {
                    player: 1,
                },
            }
        },
        //童渊
        fyrhchaofeng: {
            audio: "twchaofeng",
            enable: "phaseUse",
            usable: 1,
            filter(event, player) {
                return player.countCards('he', card => player.canRecast(card));
            },
            async content(event, trigger, player) {
                const attackRange = player.getAttackRange();
                const effects = [
                    async () => {
                        await player.draw(2);
                    },
                    async () => {
                        const result = await player
                            .chooseCard("重铸一张非基本牌", "he", (card, player) => get.type(card) !== "basic" && player.canRecast(card))
                            .set("ai", card => 6 - get.value(card))
                            .forResult();
                        if (result.bool && result.cards?.length) {
                            await player.recast(result.cards);
                        }
                    },

                    async (isNested = false) => {
                        if (isNested) return;
                        const count = Math.min(attackRange, effects.length);
                        if (count > 0) {
                            game.log(player, "根据攻击范围", attackRange, "，额外执行了前", count, "项");
                        }
                        for (let i = 0; i < count; i++) {
                            await effects[i](true);
                        }
                    },

                    async () => {
                        await player.chooseToUse({
                            filterCard(card) {
                                return lib.filter.filterCard.apply(this, arguments);
                            },
                            prompt: `是否使用一张牌？`,
                            addCount: false,
                        });
                    },
                ];
                for (let i = 0; i < effects.length; i++) {
                    await effects[i](false);
                }

            },
            ai: {
                order: 10,
                result: {
                    player: 1,
                }
            }
        },
        //庄方宜
        fyrhchunleidong: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => "ext:永夜之境/audio/fyrhchunleidong" + (typeof index === "number" ? index : get.rand(1, 3)) + ".mp3",
            nobracket: true,
            trigger: {
                player: 'useCardBefore',
            },
            filter(event, player) {
                return get.type(event.card) == 'basic';
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2(event.skill), `<div class="text center">将${get.translation(trigger.card)}作废以令一名角色进行【闪电】判定</div>`, (card, player, target) => {
                        return true;
                    })
                    .set("ai", target => {
                        const player = get.player();
                        if (player.countCards('h') > 3) {
                            return false;
                        }
                        const att = get.attitude(player, target);
                        return -att;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                game.log(player, "将", trigger.card, "作废");
                await player.loseToDiscardpile(trigger.cards);
                if (get.is.convertedCard(trigger.card) || get.is.virtualCard(trigger.card)) {
                    trigger.cancel();
                } else {
                    trigger.cancel();
                    trigger.getParent().goto(0);
                    trigger.line = false;
                }
                const target = event.targets[0];
                const next = target.executeDelayCardEffect("shandian");
                await next;
                if (target.hasHistory("damage", evt => evt.getParent(2) == next)) {
                    game.playAudio("../extension/永夜之境/audio/", 'fyrhchunleidong' + get.rand(4, 5) + '.mp3');
                }
            },
            group: "fyrhchunleidong_effect",
            subSkill: {
                effect: {
                    forced: true,
                    charlotte: true,
                    trigger: {
                        global: "judgeEnd",
                    },
                    filter(event, player) {
                        if (event.getParent(2).name !== 'fyrhchunleidong') return false;
                        return event.result.judge == 1;
                    },
                    async content(event, trigger, player) {
                        await player.chooseToDiscard('h', 3, true);
                    },
                }
            }
        },
        fyrhwanwusheng: {
            audio: "ext:永夜之境/audio:2",
            nobracket: true,
            trigger: {
                player: ['changeHpBefore', "loseBefore"],
            },
            filter(event, player) {
                if (event.name == 'changeHp') {
                    return event.num <= -2;
                }
                else {
                    const num = lib.skill.fyrhwanwusheng.getCardCost(event);
                    const handCost = lib.skill.fyrhwanwusheng.getHandCost(event, player, num);
                    const hs = player.countCards('h');
                    return handCost > hs;
                    //&& hs >= 2;
                }
            },
            forced: true,
            getCardCost(event) {
                /* const choose = event.getParent("chooseToDiscard", true, true);
                if (choose?.selectCard) {
                    const range = get.select(choose.selectCard);
                    if (range[0] == range[1] && typeof range[0] == "number") {
                        return range[0];
                    }
                }
                return event.cards?.length || 0; */
                let num = event.cards ? event.cards.length : 0;
                let evt = event.parent;
                while (evt) {
                    if (["chooseToDiscard", "discard", "chooseToGive", "give", "lose"].includes(evt.name)) {
                        if (evt.selectCard) {
                            const range = get.select(evt.selectCard);
                            if (range[0] == range[1] && typeof range[0] == "number") {
                                num = Math.max(num, range[0]);
                            }
                        } else if (typeof evt.num == "number") {
                            num = Math.max(num, evt.num);
                        }
                    }
                    evt = evt.parent;
                }
                return num;
            },
            getHandCost(event, player, num) {
                /* const choose = event.getParent("chooseToDiscard", true, true);
                if (choose) {
                    const position = choose.position || "h";
                    const nonHandCards = player.getCards(position).filter(card => {
                        if (get.position(card) == "h") return false;
                        if (!lib.filter.cardDiscardable(card, player, choose)) return false;
                        return !choose.filterCard || choose.filterCard(card, player);
                    });
                    return Math.max(0, num - nonHandCards.length);
                }
                return event.cards?.filter(card => get.position(card) == "h").length || 0; */
                let position = "he";
                let filterCard = null;
                let targetEvt = null;
                let evt = event.parent;
                while (evt) {
                    if (["chooseToDiscard", "discard", "chooseToGive", "give", "lose"].includes(evt.name)) {
                        //targetEvt = evt;
                        if (!targetEvt) targetEvt = evt;
                        if (evt.position) position = evt.position;
                        if (evt.filterCard) filterCard = evt.filterCard;
                        //break;
                    }
                    evt = evt.parent;
                }
                // 计算有多少非手牌（如装备）可以用来抵扣这次消耗
                const nonHandCards = player.getCards(position).filter(card => {
                    if (get.position(card) == "h") return false;
                    // 如果是弃置类事件，判断防具、坐骑等是否处于可弃置状态
                    if (targetEvt && ["chooseToDiscard", "discard"].includes(targetEvt.name)) {
                        if (!lib.filter.cardDiscardable(card, player, targetEvt)) return false;
                    }
                    // 如果技能本身有特殊的卡牌过滤条件
                    if (filterCard && !filterCard(card, player)) return false;

                    return true;
                });

                // 总需求量 - 非手牌可抵扣量 = 真实需要的手牌消耗量
                return Math.max(0, num - nonHandCards.length);
            },
            async content(event, trigger, player) {
                let hp = player.getHp(),
                    hs = player.countCards('h'),
                    num,
                    handCost;
                if (trigger.name == 'changeHp') {
                    num = -trigger.num;
                    if (num - hp > 0) {
                        trigger.cancel();
                        await player.recover(num);
                    }
                } else {
                    num = lib.skill.fyrhwanwusheng.getCardCost(trigger);
                    handCost = lib.skill.fyrhwanwusheng.getHandCost(trigger, player, num);
                    if (handCost - hs > 0) {
                        trigger.cancel();
                        await player.draw(num);
                    }
                }
            }

        },
        //马超
        fyrhzhuiming: {
            audio: 'ol_shichou',
            trigger: {
                player: 'phaseUseBegin',
            },
            filter(event, player) {
                return player.countCards('h');
            },
            frequent: true,
            async content(event, trigger, player) {
                let num = Infinity;
                game.broadcastAll(num => {
                    lib.skill.fyrhzhuiming_backup.selectCard = [1, num];
                }, num);
                const next = player.chooseToUse();
                next.set("openskilldialog", `###${get.prompt(event.name)}###是否将任意张牌当作【杀】使用`);
                next.set("norestore", true);

                next.set("_backupevent", "fyrhzhuiming_backup");
                next.set("custom", {
                    add: {},
                    replace: { window() { } },
                });
                next.backup("fyrhzhuiming_backup");
                //next.set("targetRequired", true);
                next.set("complexSelect", true);
                next.set("logSkill", event.name);
                next.set("addCount", false);
                await next;
                if (next.result && next.result.bool) {
                    const cards = next.result.cards;
                    const targets = next.result.targets;
                    let num = cards.length;
                    if (targets?.length) {
                        for (const target of targets) {
                            const result = await target.chooseButton([
                                `追命：选择一项`,
                                [[
                                    ['gain', `令${get.translation(player)}获得${get.translation(cards)}，然后你交给其${num}张牌`],
                                    ['use', `令${get.translation(player)}可以再次发动${get.poptip('fyrhzhuiming')}`],
                                ], 'textbutton'],
                            ], true)
                                .set("filterButton", button => {
                                    return true;
                                })
                                .set('target', target)
                                .set('num', num)
                                .set('ai', button => {
                                    let player = _status.event.player;
                                    let num = get.event().num;
                                    if (button.link == "use") {
                                        if (player.hp > 2 && player.countCards('h') > 2) {
                                            return 15;
                                        } else if (player.hp <= 2 && !player.countCards('h', card => get.name(card) == 'shan')) {
                                            return 0;
                                        }
                                    }
                                    if (button.link == "gain" && player.countCards('h') > 2 && num < 2) {
                                        return 10;
                                    }
                                    return 1;
                                })
                                .forResult();
                            if (result.bool && result.links?.length && target?.isIn()) {
                                if (result.links[0] == "gain") {
                                    await player.gain(cards, 'gain2');
                                    const result2 = await target
                                        .chooseToGive(`追命：交给${get.translation(player)}${num}张牌`, num, true, "he", player)
                                        .set("ai", card => {
                                            return 6 - get.value(card);
                                        })
                                        .forResult();
                                    if (result2.bool && result2.cards?.length) {
                                        const {
                                            cards
                                        } = result2;
                                        await player.gain(cards, 'gain2');
                                    }
                                } else {
                                    const next = game.createEvent("fyrhzhuiming", false);
                                    next.player = player;
                                    next.setContent(lib.skill.fyrhzhuiming.content);
                                    await next;
                                }
                            }
                        }
                    }
                }
            },
            subSkill: {
                backup: {
                    filterCard: (card, player) => get.itemtype(card) == "card",
                    viewAs: {
                        name: "sha",
                    },
                    position: "he",
                    ai1(card) {
                        if (ui.selected.cards.length <= 0) {
                            return 6 - get.value(card);
                        } else {
                            return -1;
                        }
                    },

                }
            }
        },
        //郝昭
        fyrhzhengu: {
            init(player, skill) {
                player.setStorage(skill, 3);
            },
            audio: 'drlt_zhengu',
            trigger: {
                player: 'useCard',
            },
            logTarget: "targets",
            filter(event, player) {
                return ['basic', 'trick'].includes(get.type(event.card));
            },
            //usable: 1,
            async cost(event, trigger, player) {
                const tarnum = trigger.targets?.length || 0;
                const hs = player.countCards('h');
                const num = player.getStorage('fyrhzhengu');
                //定义一个校验函数：两项不相等，且差值的绝对值 <= 5
                const diffValid = (a, b) => a !== b && Math.abs(a - b) <= 5;
                const options = [];
                //穷举所有合法的转换情况
                /* if (diffValid(tarnum, hs)) options.push(['tar_to_hs', `目标数(${tarnum}) ▶ 手牌数(${hs})`]);
                if (diffValid(tarnum, num)) options.push(['tar_to_num', `目标数(${tarnum}) ▶ 镇骨数(${num})`]);

                if (diffValid(hs, tarnum)) options.push(['hs_to_tar', `手牌数(${hs}) ▶ 目标数(${tarnum})`]);
                if (diffValid(hs, num)) options.push(['hs_to_num', `手牌数(${hs}) ▶ 镇骨数(${num})`]);

                if (diffValid(num, tarnum)) options.push(['num_to_tar', `镇骨数(${num}) ▶ 目标数(${tarnum})`]);
                if (diffValid(num, hs)) options.push(['num_to_hs', `镇骨数(${num}) ▶ 手牌数(${hs})`]); */

                if (tarnum > 0) {
                    if (diffValid(tarnum, hs)) {
                        options.push(['tar_to_hs', `${get.translation(trigger.card)}目标数(${tarnum}) ▶ (${hs})`]);
                    }
                    if (diffValid(tarnum, num) && num !== hs) {
                        options.push(['tar_to_num', `${get.translation(trigger.card)}目标数(${tarnum}) ▶ (${num})`]);
                    }
                }

                if (diffValid(hs, tarnum)) {
                    options.push(['hs_to_tar', `手牌数(${hs}) ▶ (${tarnum})`]);
                }
                if (diffValid(hs, num) && num !== tarnum) {
                    options.push(['hs_to_num', `手牌数(${hs}) ▶ (${num})`]);
                }
                if (diffValid(num, tarnum)) {
                    options.push(['num_to_tar', `镇骨数(${num}) ▶ (${tarnum})`]);
                }
                if (diffValid(num, hs) && hs !== tarnum) {
                    options.push(['num_to_hs', `镇骨数(${num}) ▶ (${hs})`]);
                }
                if (options.length === 0) {
                    event.result = { bool: false };
                    return;
                }
                const dialog = ui.create.dialog('你可以将一项调整至与另一项相等（变化量至多为5）', [options, 'textbutton']);
                let result = await player.chooseButton(dialog)
                    .set('ai', button => {
                        const link = button.link;
                        /* if (link.startsWith('hs_')) return 0.3;
                        if (link.startsWith('num_')) return 0.2; */
                        let score = 0;
                        // 如果是调整目标数
                        if (link === 'tar_to_hs') {
                            const diff = hs - tarnum;
                            if (diff > 0) score = 2 + diff; // 增加目标
                        }
                        else if (link === 'tar_to_num') {
                            const diff = num - tarnum;
                            if (diff > 0) score = 2 + diff;
                        }

                        // 如果是调整震骨数
                        else if (link === 'num_to_tar') {
                            const diff = tarnum - num;
                            if (diff > 0) score = 8 + diff;
                        }
                        else if (link === 'num_to_hs') {
                            const diff = hs - num;
                            if (diff > 0) score = 8 + diff;
                        }
                        else if (link === 'hs_to_tar') {
                            const diff = tarnum - hs;
                            if (diff > 0) score = 6 + diff; //过牌
                        }
                        else if (link === 'hs_to_num') {
                            const diff = num - hs;
                            if (diff > 0) score = 6 + diff;
                        }
                        return score;
                    })
                    .forResult();
                event.result = {
                    bool: result.bool,
                    cost_data: result.links,
                };
            },
            async content(event, trigger, player) {
                const choice = event.cost_data[0];
                const tarnum = trigger.targets ? trigger.targets.length : 0;
                const hs = player.countCards('h');
                const num = player.getStorage('fyrhzhengu');
                const targets = game.filterPlayer(current => {
                    if (trigger.targets?.includes(current)) {
                        return false;
                    }
                    if (!lib.filter.targetEnabled2(trigger.card, trigger.player, current)) {
                        return false;
                    }
                    return true;
                });
                const targetGoal = choice === 'tar_to_hs' ? hs : num;
                const diff = targetGoal - tarnum;

                switch (choice) {
                    case 'hs_to_tar':
                        // 手牌数变为目标数
                        if (tarnum > hs) {
                            await player.draw(tarnum - hs);
                        } else if (tarnum < hs) {
                            await player.chooseToDiscard('h', hs - tarnum, true, "allowChooseAll");
                        }
                        break;
                    case 'hs_to_num':
                        if (num > hs) {
                            await player.draw(num - hs);
                        } else if (num < hs) {
                            await player.chooseToDiscard('h', hs - num, true, "allowChooseAll");
                        }
                        break;
                    case 'num_to_tar':
                        player.setStorage('fyrhzhengu', tarnum);
                        game.log(player, '将镇骨数调整为了', tarnum);
                        break;
                    case 'num_to_hs':
                        player.setStorage('fyrhzhengu', hs);
                        game.log(player, '将镇骨数调整为了', hs);
                        break;
                    case 'tar_to_hs':
                    case 'tar_to_num': {
                        const targetGoal = (choice === 'tar_to_hs') ? hs : num;
                        const diff = targetGoal - tarnum;
                        let result;
                        if (diff > 0) {
                            const targets = game.filterPlayer(current => {
                                if (trigger.targets?.includes(current)) {
                                    return false;
                                }
                                if (!lib.filter.targetEnabled2(trigger.card, trigger.player, current)) {
                                    return false;
                                }
                                return true;
                            });
                            if (!targets.length) break;
                            result = await player
                                .chooseTarget(get.prompt('fyrhzhengu'), `<div class="text center">令至多${diff}名角色成为${get.translation(trigger.card)}的额外目标</div>`, [1, diff], (card, player, target) => {
                                    return get.event().targetx.includes(target);
                                })
                                .set("targetx", targets)
                                .set("ai", target => {
                                    const player = get.player(),
                                        trigger = get.event().getTrigger();
                                    return get.effect(target, trigger.card, trigger.player, player);
                                })
                                .forResult();
                            if (result.bool && result.targets?.length) {
                                const targets = result.targets;
                                player.line(targets);
                                game.log(targets, "成为", trigger.card, "的额外目标");
                                trigger.targets.addArray(targets);
                            }

                        } else if (diff < 0) {
                            const targets = trigger.targets.slice();
                            result = await player
                                .chooseTarget(get.prompt('fyrhzhengu'), `<div class="text center">取消${get.translation(trigger.card)}至多${-diff}名目标</div>`, [1, -diff], (card, player, target) => {
                                    return get.event().targetx.includes(target);
                                })
                                .set("targetx", targets)
                                .set("ai", target => {
                                    const player = get.player(),
                                        trigger = get.event().getTrigger();
                                    return -get.effect(target, trigger.card, trigger.player, player);
                                })
                                .forResult();
                            if (result.bool && result.targets?.length) {
                                const targets = result.targets;
                                player.line(targets);
                                game.log(player, "取消了", targets, "作为", trigger.card, "的目标");
                                trigger.targets.removeArray(targets);
                            }
                        }
                        break;
                    }
                }

            }
        },
        //旧花火
        oldfyrhqianyi: {
            audio: "xinxhuaqianyi",
            logAudio: index => "ext:永夜之境/audio/xinxhuaqianyi" + (typeof index === "number" ? index : get.rand(1, 7)) + ".mp3",
            trigger: {
                global: ["roundStart"],
            },
            locked: true,
            filter(event, player) {
                return !player.hasSkill("oldfyrhqianyi_hidden");
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2(event.skill), (card, player, target) => {
                        return target !== player;
                    })
                    .set("ai", target => {
                        return Math.random();
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const character1 = target.name1 || target.name;;

                player.storage.oldfyrhqianyi_rawName1 = player.name1;
                player.storage.oldfyrhqianyi_rawName2 = player.name2;
                player.storage.oldfyrhqianyi_rawHp = player.hp;
                player.storage.oldfyrhqianyi_rawMaxHp = player.maxHp;

                // 传入数组 [character1]。如果原本是双将，会暂时覆盖变成单将伪装
                await player.changeCharacter([character1]);
                const hpInfo = lib.character[character1][2];
                let newHp = hpInfo;
                let newMaxHp = hpInfo;

                if (typeof hpInfo === "string" && hpInfo.includes("/")) {
                    const hpArray = hpInfo.split("/");
                    newHp = parseInt(hpArray[0]);
                    newMaxHp = parseInt(hpArray[1]);
                }
                /* player.maxHp = newMaxHp;
                player.hp = newHp;
                player.update(); */
                player.maxHp = 1;
                player.hp = 1;
                player.update();
                player.addSkill("oldfyrhqianyi_hidden");
            },
            subSkill: {
                hidden: {
                    mod: {
                        maxHandcardBase(player, num) {
                            return player.storage.oldfyrhqianyi_rawHp || player.hp;
                        },
                    },
                    charlotte: true,
                    trigger: {
                        player: "dieBefore",
                        global: 'roundEnd',
                    },
                    filter(event, player, name) {
                        if (name == 'roundEnd') {
                            return true;
                        }
                        return event.getParent().name != "giveup";
                    },
                    forced: true,
                    silent: true,
                    lastDo: true,
                    priority: 100,
                    async content(event, trigger, player) {
                        if (trigger.name == 'die') {
                            trigger.cancel();
                        }
                        game.playAudio("../extension/永夜之境/audio/", 'xinxhuaqianyi' + get.rand(10, 12) + '.mp3');
                        //读取保存的原本武将（兼容单双将）
                        const rawPairs = [player.storage.oldfyrhqianyi_rawName1];
                        if (player.storage.oldfyrhqianyi_rawName2) {
                            rawPairs.push(player.storage.oldfyrhqianyi_rawName2);
                        }
                        // 切换回原本的武将
                        await player.changeCharacter(rawPairs);

                        player.maxHp = player.storage.oldfyrhqianyi_rawMaxHp;
                        player.hp = player.storage.oldfyrhqianyi_rawHp;
                        player.update();

                        player.removeSkill("oldfyrhqianyi_hidden");
                        delete player.storage.oldfyrhqianyi_rawName1;
                        delete player.storage.oldfyrhqianyi_rawName2;
                        delete player.storage.oldfyrhqianyi_rawHp;
                        delete player.storage.oldfyrhqianyi_rawMaxHp;
                    }
                }
            },
        },
        //流萤
        fyrhfuhuo: {
            audio: ["xinxyingshi"],
            mark: true,
            markimage: "extension/永夜之境/image/mark/xinxxinzhui_length.png",
            intro: {
                name: "伏火",
                content: "技能中的数字为#",
            },
            init(player, skill) {
                if (!player.hasMark(skill)) {
                    player.setMark(skill, 1, false);
                }
            },
            trigger: {
                player: 'useCard',
            },
            forced: true,
            popup: false,
            logTarget: "player",
            filter(event, player) {
                return true;
            },
            async content(event, trigger, player) {
                const result = await player
                    .judge(card => {
                        return get.is.damageCard(card) ? 2 : -2;
                    })
                    .set("judge2", result => Boolean(result.bool))
                    .forResult();
                if (result?.bool) {
                    player.logSkill(event.name);
                    let num = player.countMark('fyrhfuhuo');
                    await player.damage(num, 'fire');
                    await player.gain(result.card, 'gain2');
                }
            },
            group: "fyrhfuhuo_effect",
            subSkill: {
                effect: {
                    audio: [
                        "ext:永夜之境/audio/xinxxinzhui1.mp3",
                        "ext:永夜之境/audio/xinxxinzhui2.mp3",
                    ],
                    trigger: {
                        global: "dying",
                    },
                    filter(event, player) {
                        let evt = event.getParent(2);
                        return evt && evt.name == "fyrhfuhuo";
                    },
                    charlotte: true,
                    forced: true,
                    async content(event, trigger, player) {
                        let num = player.countMark('fyrhfuhuo');
                        player.addMark('fyrhfuhuo', num, false);
                        game.log(player, "令", `#g${get.translation("fyrhfuhuo")}`, `#g${get.translation("fyrhzhuguang")}`, "的数字翻倍了");
                    }
                }
            }
        },
        fyrhzhuguang: {
            audio: ["ext:永夜之境/audio/xinxyingshi_xinx_liuying_shadow1.mp3",
                "ext:永夜之境/audio/xinxyingshi_xinx_liuying_shadow2.mp3",
                "ext:永夜之境/audio/xinxyingshi_xinx_liuying_shadow3.mp3",
            ],
            mark: true,
            zhuanhuanji: true,
            forced: true,
            locked: false,
            marktext: "☯",
            intro: {
                content(storage, player, skill) {
                    const bool = player.getStorage(skill, false);
                    return `转换技，${bool ? "你造成伤害后，你可以回复1点体力并摸1张牌" : `你受到伤害后`}`;
                },
            },
            trigger: {
                player: "damageEnd",
                source: "damageSource",
            },
            filter(event, player, name) {
                const bool = player.getStorage("fyrhzhuguang", false);
                if (name == "damageSource") {
                    return bool;
                }
                if (name == "damageEnd") {
                    return !bool;
                }
                return false;
            },
            logTarget: "player",
            async content(event, trigger, player) {
                const bool = player.getStorage(event.name, false);
                player.changeZhuanhuanji(event.name);
                if (bool) {
                    let num = player.countMark('fyrhfuhuo') || 1;
                    const result = await player.chooseBool(`逐光：是否回复${num}点体力并摸${num}张牌？`).forResult();
                    if (result.bool) {
                        await player.recover(num);
                        await player.draw(num);
                    }
                }
            }
        },
        //花火
        fyrhqianyi: {
            audio: "xinxhuaqianyi",
            logAudio: index => "ext:永夜之境/audio/xinxhuaqianyi" + (typeof index === "number" ? index : get.rand(1, 7)) + ".mp3",
            enable: 'phaseUse',
            manualConfirm: true,
            trigger: {
                global: ["roundStart"],
            },
            filter(event, player) {
                return !player.hasSkill("fyrhqianyi_hidden");
            },
            forced: true,
            locked: false,
            async content(event, trigger, player) {
                if (!_status.characterlist) {
                    game.initCharacterList();
                }
                let list = [];
                if (_status.characterlist) {
                    list = _status.characterlist.slice();
                }
                else if (_status.connectMode) {
                    list = game.charactersOL();
                } else {
                    list = game.getCharacters(true).map(info => info[0]);
                }
                if (!list.length) {
                    return [];
                }
                const character1 = list.randomGet();
                //const character1 = 're_guojia';

                player.storage.fyrhqianyi_rawName1 = player.name1;
                player.storage.fyrhqianyi_rawName2 = player.name2;
                player.storage.fyrhqianyi_rawHp = player.hp;
                player.storage.fyrhqianyi_rawMaxHp = player.maxHp;

                // 传入数组 [character1]。如果原本是双将，会暂时覆盖变成单将伪装
                await player.changeCharacter([character1]);
                const hpInfo = lib.character[character1][2];
                let newHp = hpInfo;
                let newMaxHp = hpInfo;
                //解析特殊的双数值体力格式（如 "3/4" -> 3血4上限）
                if (typeof hpInfo === "string" && hpInfo.includes("/")) {
                    const hpArray = hpInfo.split("/");
                    newHp = parseInt(hpArray[0]);
                    newMaxHp = parseInt(hpArray[1]);
                }
                if (player.isZhu || player.identity == "zhu") {
                    newMaxHp++;
                    newHp++;
                }
                player.maxHp = newMaxHp;
                player.hp = newHp;
                player.update();

                /* player.maxHp = 1;
                player.hp = 1;
                player.update(); */
                player.addSkill("fyrhqianyi_hidden");
            },
            ai: {
                order: 7,
                result: {
                    player: 1,
                }
            },
            subSkill: {
                hidden: {
                    /* mod: {
                        maxHandcardBase(player, num) {
                            return player.storage.fyrhqianyi_rawHp || player.hp;
                        },
                    }, */
                    charlotte: true,
                    trigger: {
                        player: "changeHpAfter",
                    },
                    filter(event, player) {
                        return event.num < 0;
                    },
                    forced: true,
                    silent: true,
                    lastDo: true,
                    priority: 100,
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxhuaqianyi' + get.rand(10, 12) + '.mp3');
                        //读取保存的原本武将（兼容单双将）
                        const rawPairs = [player.storage.fyrhqianyi_rawName1];
                        if (player.storage.fyrhqianyi_rawName2) {
                            rawPairs.push(player.storage.fyrhqianyi_rawName2);
                        }
                        // 切换回原本的武将
                        await player.changeCharacter(rawPairs);

                        player.maxHp = player.storage.fyrhqianyi_rawMaxHp;
                        player.hp = player.storage.fyrhqianyi_rawHp;
                        player.update();

                        player.removeSkill("fyrhqianyi_hidden");
                        delete player.storage.fyrhqianyi_rawName1;
                        delete player.storage.fyrhqianyi_rawName2;
                        delete player.storage.fyrhqianyi_rawHp;
                        delete player.storage.fyrhqianyi_rawMaxHp;
                    }
                }
            }
        },
        //符玄
        fyrhpitai: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhpitai${index}.mp3` : 2),
            trigger: {
                player: ["changeHpAfter", "loseAfter"],
                global: ["loseAsyncAfter", "equipAfter", "addToExpansionAfter", "gainAfter", "addJudgeAfter"],
            },
            popup: false,
            filter(event, player) {
                if (event.name == 'changeHp') {
                    return player.isMinHp(true) && !player.getStorage("fyrhpitai_used").includes(event.name);
                }
                const bool1 = event.getg && event.getg(player)?.length,
                    bool2 = event.getl && event.getl(player)?.hs?.length;
                return (bool1 || bool2) && player.isMinHandcard(true) && !player.getStorage("fyrhpitai_used").includes('lose');
            },
            async cost(event, trigger, player) {
                let hp = Math.min(player.hp, player.maxHp),
                    hs = Math.min(player.countCards('h'), player.maxHp);
                if (player.hp === player.countCards('h')) {
                    return;
                }
                const prompt = get.prompt(event.skill, player);
                let str = ``;
                if (trigger.name == "changeHp") {
                    str += `将体力值调整至${hs}`;
                } else {
                    str += `将手牌数调整至${hp}`;
                }
                event.result = await player
                    .chooseBool(prompt, str)
                    .set('hp', hp)
                    .set('hs', hs)
                    .set("ai", () => {
                        const evt = get.event();
                        const hp = evt.hp;
                        const hs = evt.hs;
                        if (trigger.name == "changeHp") {
                            return hs > hp;
                        }
                        return hp > hs;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                player.addTempSkill('fyrhpitai_used', 'roundStart');
                let hp = Math.min(player.hp, player.maxHp),
                    hs = Math.min(player.countCards('h'), player.maxHp);
                if (trigger.name == 'changeHp') {
                    player.logSkill("fyrhpitai", player, null, null, [get.rand(1, 2)]);
                    player.markAuto('fyrhpitai_used', trigger.name);
                    await player.changeHp(hs - player.getHp(true));
                    game.log(player, `调整体力值至${hs}`);
                } else {
                    player.logSkill("fyrhpitai", player, null, null, [get.rand(3, 4)]);
                    const num = player.countCards("h") - hp;
                    if (num > 0) {
                        await player.chooseToDiscard("h", num, true, "allowChooseAll");
                    } else {
                        player.markAuto('fyrhpitai_used', 'lose');
                        await player.draw(-num);
                    }
                }
            },
            subSkill: {
                used: {
                    charlotte: true,
                    onremove: true,
                    markimage: "extension/永夜之境/image/mark/fyrhpitai.png",
                    intro: {
                        content(storage) {
                            const map = {
                                changeHp: "体力值变化",
                                lose: "手牌数变化",
                            };
                            const str = storage.map(name => map[name]).join("、");
                            return "本轮已用时机：" + str;
                        },
                    },
                }
            }
        },
        fyrhjishen: {
            audio: "xinxqiongguan",
            //logAudio: index => "ext:永夜之境/audio/xinxqiongguan" + (typeof index === "number" ? index : get.rand(1, 2)) + ".mp3",
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            frequent: true,
            async content(event, trigger, player) {
                const top = get.cards(3, true),
                    bottom = get.bottomCards(0, true),
                    hs = player.getCards('h'),
                    he = player.getCards('e'),
                    hj = player.getCards('j');
                await game.cardsGotoOrdering([...top, ...bottom]);
                const next = player.chooseToMove_new(get.translation(event.name), true);
                next.set("list", [
                    //["你区域的牌", hs],
                    ["手牌区", hs],
                    [
                        ["牌堆顶", top],
                        ["牌堆底", bottom],
                    ],
                    [
                        ["装备区", he],
                        ["判定区", hj],
                    ],
                ]);
                next.set("processAI", list => {
                    /* const myCards = list[0][1].slice(); // 自己的牌
                    const deckCards = list[1][0][1].slice(); // 牌堆顶的牌
                    const newHs = myCards.slice();
                    const newTops = [];
                    const newBottoms = [];
                    deckCards.forEach(card => {
                        if (get.value(card) >= 6) {
                            newHs.push(card); 
                        } else if (get.value(card) <= 0) {
                            newBottoms.push(card);
                        } else {
                            newTops.push(card);
                        }
                    });
                    return [newHs, newTops, newBottoms]; */
                    const hsCards = list[0][1].slice();   // 手牌区
                    const topCards = list[1][0][1].slice();
                    const bottomCards = list[1][1][1].slice();
                    const heCards = list[2][0][1].slice();
                    const hjCards = list[2][1][1].slice();

                    // AI 默认的分配目标容器
                    const newHs = hsCards.slice();
                    const newHe = heCards.slice();
                    const newHj = hjCards.slice();
                    const newTops = [];
                    const newBottoms = [];
                    topCards.forEach(card => {
                        if (get.value(card) > 0) {
                            newHs.push(card); // 好牌放入手牌区
                        } else if (get.value(card) <= 0) {
                            newBottoms.push(card); // 差牌放牌堆底
                        } else {
                            newTops.push(card);
                        }
                    });

                    return [newHs, newHe, newHj, newTops, newBottoms];

                });
                const result = await next.forResult();
                if (!result?.bool) {
                    return;
                }
                /* if (!result?.bool) {
                    top.reverse();
                    await game.cardsGotoPile(top, ["top_cards", top], (event, card) => {
                        return ui.cardPile.firstChild;
                    });
                    return;
                } */

                /* const [newHs, newTops, newBottoms] = result.moved;
                // 从牌堆过来的新牌
                const gains = newHs.filter(card => !hs.includes(card));
                if (gains.length > 0) {
                    await player.gain(gains, "gain2");
                }
                newTops.reverse(); 
                const toPile = newTops.concat(newBottoms);
    
                if (toPile.length > 0) {
                    await game.cardsGotoPile(toPile, ["top_cards", newTops], (event, card) => {
                        // 如果这张牌在 newTops 数组里，就塞在最顶层 (firstChild)
                        if (event.top_cards.includes(card)) {
                            return ui.cardPile.firstChild; 
                        }
                        return null; 
                    });
                }
                game.updateRoundNumber();
                await game.delay(); */

                const [newHs, newTops, newBottoms, newHe, newHj] = result.moved;

                // 结算放回牌堆的牌
                // 将 tops和bottoms合并。tops反转一下数组，确保游戏引擎按视觉上看到的顺序放在最顶端
                newTops.reverse();
                const toPile = newTops.concat(newBottoms);

                const allOriginalPlayerCards = [...hs, ...he, ...hj];
                const lostToPile = allOriginalPlayerCards.filter(card => toPile.includes(card));
                if (lostToPile.length > 0) {
                    await player.lose(lostToPile, ui.special, "to_pile");
                }

                //处理进入玩家区域的新牌
                //手牌区
                const gainsToHand = newHs.filter(card => !hs.includes(card));
                if (gainsToHand.length > 0) {
                    await player.gain(gainsToHand, "gain2");
                }
                const gainsToEquip = newHe.filter(card => !he.includes(card));
                if (gainsToEquip.length > 0) {
                    let gaincards = [];
                    for (const card of gainsToEquip) {
                        if (get.type(card, false) == 'equip' && player.canUse(card, player)) {
                            await player.equip(card);
                        } else {
                            gaincards.add(card);
                        }
                    }
                    if (gaincards.length) {
                        await player.gain(gaincards, "gain2");
                    }
                }
                const gainsToJudge = newHj.filter(card => !hj.includes(card));
                if (gainsToJudge.length > 0) {
                    for (const card of gainsToJudge) {
                        //await player.addJudge(card);
                        if (get.type(card, false) == 'delay') {
                            await player.addJudge(card);
                        }
                        else if (get.color(card) == 'red') {
                            await player.addJudge({ name: 'lebu' }, [card]);
                        } else if (get.color(card) == 'black') {
                            await player.addJudge({ name: 'bingliang' }, [card]);
                        }
                        else {
                            await player.loseToDiscardpile(card);
                        }
                    }
                }

                // 将剩余的牌送回牌堆顶/底
                if (toPile.length > 0) {
                    await game.cardsGotoPile(toPile, ["top_cards", newTops], (event, card) => {
                        if (event.top_cards.includes(card)) {
                            return ui.cardPile.firstChild;
                        }
                        return null;
                    });
                }

                game.updateRoundNumber();
                await game.delay();
            },
            ai: {
                effect: {
                    target_use(card, player, target) {
                        if (get.type(card) === "delay" && get.attitude(player, target) < 0) {
                            return [0, 0];
                        }
                    },
                },
            },
        },

        //昔涟
        fyrhningxi: {
            audio: "xinxyilian",
            logAudio: index => "ext:永夜之境/audio/xinxyilian" + (typeof index === "number" ? index : get.rand(1, 6)) + ".mp3",
            enable: "phaseUse",
            filter(event, player) {
                return game.hasPlayer(current => current?.isIn() && current !== player);
            },
            manualConfirm: true,
            usable: 1,
            async content(event, trigger, player) {
                const reqNum = 2;

                const next = player.chooseTarget(
                    `###${get.translation(event.name)}###将${reqNum}点冰冻伤害分配给两名角色`,
                    [reqNum, reqNum], //分满2次
                    (card, player, target) => target.isIn()
                ).set("complexSelect", true)
                    .set("ai", target => {
                        const player = get.player();
                        const att = get.attitude(player, target);
                        if (target == player && player.countCards('h') > 1) {
                            return 10;
                        }
                        if (target !== player && target.countCards('e') > 1) {
                            return -att;
                        }
                        else if (target.hp == 1 && player.countCards('h', card => get.is.damageCard(card))) {
                            return 9;
                        }
                        return att;
                    })
                    .set("multitarget", true).set("forced", true);
                //.set("forced", true);
                // 劫持点击逻辑，实现分配交互
                next.set("custom", {
                    add: {
                        confirm() { game.players.forEach(p => p.unprompt()); },
                        cancel() { game.players.forEach(p => p.unprompt()); }
                    },
                    replace: {
                        target(target, e) {
                            const evt = get.event();
                            if (!evt.isMine() || !evt.filterTarget(void 0, evt.player, target)) return;
                            if (!target.classList.contains("selectable")) return;

                            const selected = ui.selected.targets;
                            const currentCount = get.numOf(selected, target);
                            // 允许伤害叠加
                            const maxPerTarget = 1;

                            // 防溢出与撤销逻辑
                            if (currentCount >= maxPerTarget || selected.length >= evt.selectTarget[1]) {
                                if (currentCount > 0) {
                                    target.unprompt();
                                    target.classList.remove("selected");
                                    while (selected.includes(target)) {
                                        selected.remove(target);
                                    }
                                    game.check();
                                }
                                return;
                            }

                            // 正常增加分配
                            target.unprompt();
                            target.classList.add("selected");
                            selected.push(target);
                            const newCount = get.numOf(selected, target);

                            target.prompt(`伤害×${newCount}`);
                            game.check();
                        }
                    }
                });

                const res = await next.forResult();

                if (res.bool && res.targets?.length) {

                    const realTargets = res.targets.toUniqued();
                    /* for (let target of realTargets) {
                        target.setStorage('fyrhningxi_revert', {
                            hp: target.hp,
                            hcard: target.countCards("h")
                        }, true)
                        await target.addTempSkill('fyrhningxi_revert');
                    } */
                    let snapMap = new Map();
                    for (let target of realTargets) {
                        snapMap.set(target, {
                            hp: target.hp,
                            hcard: target.countCards("h")
                        });
                    }
                    await game.doAsyncInOrder(realTargets, async target => {
                        player.line(target);
                        const count = get.numOf(res.targets, target);
                        await target.damage(count, "ice", player);
                        if (target?.isIn()) {
                            const snap = snapMap.get(target);
                            // 比对：现在的数值和伤害前的数值是否不同
                            const hpChanged = target.hp !== snap.hp;
                            const hcardChanged = target.countCards("h") !== snap.hcard;
                            // 至少一项数据发生变化时，给该角色挂上回调技能
                            if (hpChanged || hcardChanged) {
                                target.setStorage('fyrhningxi_revert', {
                                    hp: snap.hp,
                                    hcard: snap.hcard,
                                    revertHp: hpChanged,// 标记：体力值是否需要回调
                                    revertHcard: hcardChanged
                                }, true);
                                await target.addTempSkill('fyrhningxi_revert');
                            }
                        }

                    });

                    /* for (let target of realTargets) {
                        if (!target?.isIn()) continue;
                        const snap = snapMap.get(target);
                        const hpChanged = target.hp !== snap.hp;
                        const hcardChanged = target.countCards("h") !== snap.hcard;
                        if (hpChanged || hcardChanged) {
                            target.setStorage('fyrhningxi_revert', {
                                hp: snap.hp,
                                hcard: snap.hcard,
                                revertHp: hpChanged,         
                                revertHcard: hcardChanged
                            }, true);
                            await target.addTempSkill('fyrhningxi_revert');
                        }
                    } */
                }
            },
            subSkill: {
                revert: {
                    markimage: "extension/永夜之境/image/mark/xinxyilian_used.png",
                    intro: {
                        markcount(storage, player) {
                            return '';
                        },
                        content(storage) {
                            if (!storage) return "";
                            /* return `回合结束时，将回调至：<br>
                                    体力值：<b>${storage.hp}</b><br>
                                    手牌数：<b>${storage.hcard}</b>`; */
                            let str = "回合结束时，将回调：<br>";
                            if (storage.revertHp) str += `体力值至<b>${storage.hp}</b><br>`;
                            if (storage.revertHcard) str += `手牌数至<b>${storage.hcard}</b>`;
                            return str;

                        },
                    },
                    trigger: { global: "phaseEnd" },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    onremove: true,
                    filter(event, player) {
                        return player.getStorage('fyrhningxi_revert') && player?.isIn();
                    },
                    async content(event, trigger, player) {
                        const snapshot = player.getStorage('fyrhningxi_revert');
                        if (player.hasSkill('fyrhningxi')) {
                            game.playAudio("../extension/永夜之境/audio/", 'xinxyilian' + get.rand(9, 14) + '.mp3');
                        }
                        if (snapshot.revertHp) {
                            const hpDiff = player.hp - snapshot.hp;
                            if (hpDiff < 0) {
                                await player.recover(-hpDiff);
                            } else if (hpDiff > 0) {
                                await player.loseHp(hpDiff);
                            }
                        }
                        if (snapshot.revertHcard) {
                            const num = player.countCards("h") - snapshot.hcard;
                            if (num > 0) {
                                await player.chooseToDiscard("h", num, true, "allowChooseAll");
                            } else {
                                await player.draw(-num);
                            }
                        }
                    }
                }
            },
            ai: {
                order(item, player) {
                    if (get.event().peyeyan_exclude) {
                        return 0;
                    }
                    return 10;
                },
                result: {
                    player: 1,
                    /* player(player, target) {
                        return get.damageEffect(target, player, player, "ice");
                    } */
                },
            },
        },
        //长夜月
        fyrhmenglong: {
            audio: "ext:永夜之境/audio:16",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhmenglong${index}.mp3` : 2),
            enable: "phaseUse",
            trigger: {
                player: "damageEnd",
                source: "damageSource",
            },
            filter(event, player) {
                if (player.hasSkill('fyrhmenglong_used')) {
                    return false;
                }
                if (event.name == 'damage') {
                    return event.num == 1;
                }
                return true;
            },
            direct: true,
            async content(event, trigger, player) {
                let remaining = [];
                let timing = "phaseUse";
                if (trigger?.name === "damage") {
                    timing = event.triggername;
                }

                if (timing !== "phaseUse") remaining.push("出牌阶段");
                if (timing !== "damageSource") remaining.push("对一名角色造成1点伤害");
                if (timing !== "damageEnd") remaining.push("受到1点伤害");
                const result = await player.chooseBool(get.prompt('fyrhmenglong'),
                    `<div class="text center">摸两张牌，并于本回合结束时依次执行：${remaining.join("；")}</div>`)
                    .set("ai", () => get.event().choice)
                    .set(
                        "choice",
                        (() => {
                            let player = get.player();
                            if (event.triggername !== 'damageSource') {
                                return true;
                            }
                            return false;
                        })()
                    )
                    .forResult();

                if (result?.bool) {
                    let timing = "phaseUse";
                    if (trigger?.name === "damage") {
                        timing = event.triggername;
                    }

                    if (timing == "phaseUse") {
                        player.logSkill("fyrhmenglong", null, null, null, [get.rand(1, 3)]);
                    }
                    if (timing == "damageSource") {
                        player.logSkill("fyrhmenglong", null, null, null, [get.rand(4, 6)]);
                    }
                    if (timing == "damageEnd") {
                        player.logSkill("fyrhmenglong", null, null, null, [get.rand(7, 8)]);
                    }

                    await player.draw(2);
                    player.addTempSkill('fyrhmenglong_effect');

                    let tasks = [];
                    if (timing !== "phaseUse") tasks.push("phaseUse");
                    if (timing !== "damageSource") tasks.push("damageSource");
                    if (timing !== "damageEnd") tasks.push("damageEnd");
                    //player.storage.fyrhmenglong_tasks = tasks;
                    player.markAuto('fyrhmenglong_effect', tasks);
                    //player.addTempSkill('fyrhmenglong_used', timing = "phaseUse" ? "phaseUseAfter": "phaseAfter");
                    player.addTempSkill('fyrhmenglong_used', "phaseAfter");

                }
            },
            ai: {
                order(item, player) {
                    return 10;
                },
                result: {
                    player(player, target) {
                        let res = 2 * get.effect(player, { name: "draw" }, player, player);
                        if (
                            player.hp <= 1 &&
                            !player.hasCard(i => {
                                let name = get.name(i, player);
                                if (name != "tao" && name != "jiu") {
                                    return false;
                                }
                                return lib.filter.cardSavable(i, player, player);
                            }, "hs")
                        ) {
                            res = -res / 2;
                        }
                        return res;
                    },
                },
            },
            subSkill: {
                used: {
                    charlotte: true,
                },
                effect: {
                    markimage: "extension/永夜之境/image/mark/xinxbuli.png",
                    intro: {
                        content(storage) {
                            const dict = {
                                phaseUse: "出牌阶段",
                                damageSource: "对一名角色造成1点伤害",
                                damageEnd: "受到1点伤害",
                            };
                            const translatedStr = storage.map(task => dict[task]).join("；");
                            return "回合结束时依次执行：<br>" + translatedStr;
                        },
                    },
                    trigger: {
                        global: "phaseEnd",
                    },
                    forced: true,
                    charlotte: true,
                    onremove: true,
                    async content(event, trigger, player) {
                        const tasks = player.getStorage('fyrhmenglong_effect');
                        if (!tasks || tasks.length === 0) return;
                        for (let task of tasks) {
                            if (task === "phaseUse") {
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhmenglong' + get.rand(12, 14) + '.mp3');
                                /* const nextPhase = game.createEvent("phaseUse");
                                nextPhase.player = player;
                                nextPhase.setContent("phaseUse");
                                await nextPhase; */
                                const next = game.createEvent("phaseUse", false, event);
                                next.player = player;
                                event.next.remove(next);
                                event.next.unshift(next);
                                next.setContent("phaseUse");
                                await next;

                            }
                            else if (task === "damageSource") {
                                const result = await player
                                    .chooseTarget("朦胧：对一名角色造成1点伤害", true, (card, player, target) => {
                                        return true;
                                    })
                                    .set("ai", target => {
                                        const player = get.event().player;
                                        return get.damageEffect(target, player, player);
                                    })
                                    .forResult();
                                if (result?.bool) {
                                    game.playAudio("../extension/永夜之境/audio/", 'fyrhmenglong' + get.rand(9, 11) + '.mp3');
                                    player.line(result.targets[0], "thunder");
                                    await result.targets[0].damage();
                                }
                            }
                            else if (task === "damageEnd") {
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhmenglong' + get.rand(15, 16) + '.mp3');
                                await player.damage();
                            }
                        }
                        player.removeSkill("fyrhmenglong_effect");
                    }
                }
            }
        },
        //黑塔
        fyrhpouxi: {
            audio: ["xinxlinggan", "ext:永夜之境/audio/xinxjiegou5.mp3", "ext:永夜之境/audio/xinxjiegou6.mp3"],
            init(player, skill) {
                player.setStorage(skill, 2);
            },
            onremove: true,
            mark: true,
            markimage: "extension/永夜之境/image/mark/xinxlinggan.png",
            intro: {
                markcount(storage, player) {
                    return (storage || 0).toString();
                },
                content(storage, player) {
                    let usedArr = player.getStorage('fyrhpouxi_used');
                    let usedStr = "无";
                    if (Array.isArray(usedArr) && usedArr.length > 0) {
                        usedStr = usedArr.join("、");
                    }
                    return `当前N为：<font color=#CEB1E2>${storage || 0}</font><br>已使用项数：${usedStr}`;
                },
            },
            enable: 'phaseUse',
            filterTarget(card, player, target) {
                return target.hasCard(card => target.canRecast(card), "he");
            },
            filter(event, player) {
                let num = player.getStorage('fyrhpouxi');
                return !player.getStorage('fyrhpouxi_used').includes(num);
            },
            async content(event, trigger, player) {
                const target = event.target;
                let num = player.getStorage('fyrhpouxi');
                player.addTempSkill('fyrhpouxi_used', "phaseUseAfter");
                player.markAuto('fyrhpouxi_used', num);
                const result1 = await target.chooseCard(`重铸${get.cnNumber(num)}张牌`, 'he', num, lib.filter.cardRecastable)
                    .set("ai", (card) => {
                        const owner = get.event().player;
                        const currentType = get.type2(card);
                        const sameTypeCount = owner.countCards('he', c => get.type2(c) === currentType);
                        //每多一张同类型的牌，权重就 +2
                        return 6 - get.value(card) + sameTypeCount * 2;
                    }).forResult();
                if (result1.bool && result1.cards?.length) {
                    const card = result1.cards;
                    await target.recast(card);

                    const autoBtn = ui.create.control("AI代选", function () {
                        // 当前处于暂停等待状态的事件
                        const currentEvent = _status.event;
                        //传入 ai
                        ai.basic.chooseCard(currentEvent.ai);
                        // 给选中卡牌加上高亮框
                        for (let i = 0; i < ui.selected.cards.length; i++) {
                            ui.selected.cards[i].updateTransform(true);
                        }
                        // 检查选中数量是否合法
                        game.check();
                    });
                    const result = await target
                        .chooseCard(`展示至少一张牌，然后${num}改为展示牌类别数`, [1, Infinity], "he", true, "allowChooseAll")
                        .set("ai", card => {
                            const { player } = get.event();
                            const num = get.event().num;
                            const currentSelected = ui.selected.cards || [];
                            let nss = player.getStorage('fyrhpouxi_used');
                            // 假设AI选了这张牌，产生新的牌组
                            const simulatedCards = currentSelected.concat(card);
                            // 计算假设选中后的【新类别数】
                            const newTypeCount = new Set(simulatedCards.map(c => get.type2(c))).size;
                            // 计算当前的【旧类别数】（如果一张还没选，旧类别数为0）
                            const oldTypeCount = currentSelected.length === 0 ? 0 : new Set(currentSelected.map(c => get.type2(c))).size;
                            // 【追求类别越少】（如num = 3，想要只凑1个类别）
                            if (num >= 2) {
                                if (currentSelected.length === 0) {
                                    return 100 - get.value(card);
                                } else {
                                    // 只要已经选了1 张，后续不选
                                    return -1;
                                }
                            }
                            // 【追求类别越多】（如num = 1，想要凑齐3个类别）
                            else {
                                if (newTypeCount > oldTypeCount) {
                                    // 只要这张牌能提供新类别，就选
                                    return 100 - get.value(card);
                                } else {
                                    return -1;
                                }
                            }
                        })
                        .set('num', num)
                        .forResult();
                    if (autoBtn) {
                        autoBtn.close();
                    }
                    if (!result.bool) {
                        return;
                    }
                    await target.showCards(result.cards);
                    let typeCount = new Set(result.cards.map(card => get.type2(card))).size;
                    player.setStorage('fyrhpouxi', typeCount, true);
                    let drawnum = Math.abs(typeCount - num);
                    await target.draw(drawnum);
                }
            },
            subSkill: {
                used: {
                    charlotte: true,
                    onremove: true,
                }
            },
            ai: {
                order: 12,
                result: {
                    target(player, target) {
                        if (target == player) {
                            return 1;
                        }
                        return 0;
                    },
                },
            },

        },
        //司马绍
        fyrhjiabai: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => "ext:永夜之境/audio/fyrhjiabai" + (typeof index === "number" ? index : get.rand(3, 4)) + ".mp3",
            trigger: {
                player: "phaseUseBegin",
            },
            filter(event, player) {
                return game.countPlayer(current => current.countCards("h") && current !== player);
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2("fyrhjiabai"), (card, player, target) => {
                        return target !== player;
                    }).set("ai", target => {
                        const player = get.player();
                        const hassha = game.countPlayer(current => current.countCards("h", card => get.name(card) == 'sha'));
                        if (hassha < 2) {
                            return 0;
                        }
                        const att = get.attitude(player, target);
                        if (att > 0) {
                            return att * target.countCards("h", card => get.name(card) == 'sha');
                        } else {
                            return target.countCards("h", card => get.name(card) == 'sha');
                        }
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                let current = event.targets[0]; // 当前被要求出杀的角色
                let remain = 4;                 // 剩余额度
                let passCount = 0;              // 连续跳过的人数
                let allTargets = new Set();     // 记录所有成为目标的角色
                const total = game.countPlayer(); // 全场总人数

                // 条件：额度没用完，且连续跳过的人数还没凑齐一圈
                while (remain > 0 && passCount < total) {
                    // 无法出杀直接跳过
                    if (!current.isAlive() || !current.hasUseTarget({ name: "sha" })) {
                        passCount++;
                        current = current.getNext();
                        continue;
                    }
                    const next = current.chooseToUse(
                        { name: "sha" },
                        `使用一张【杀】（剩余 ${remain} 次），点取消将由下家继续`
                    )
                        .set('filterTarget', function (card, player, target) {
                            return lib.filter.filterTarget.apply(this, arguments);
                        })
                        .set('addCount', false);

                    const result = await next.forResult();
                    if (result.bool) {
                        // 出了杀
                        remain--;
                        passCount = 0; // 只要有人出了杀，就重置跳过计数
                        // 记录这把杀的所有目标，塞进 Set 里
                        if (result.targets?.length > 0) {
                            result.targets.forEach(t => allTargets.add(t));
                        }

                        if (result.targets && result.targets.includes(player)) {
                            game.log(player, "成为了", current, "使用【杀】的目标，流程终止");
                            break;
                        }
                    } else {
                        passCount++;
                        current = current.getNext();
                    }
                }


                if (allTargets.size > 0) {
                    game.playAudio("../extension/永夜之境/audio/", 'fyrhjiabai' + get.rand(1, 2) + '.mp3');
                    game.log("在此过程中共有", allTargets.size, "名角色成为过【杀】的目标");
                    let num = allTargets.size;
                    player.addTempSkill('fyrhjiabai_effect', "roundStart");
                    player.setStorage('fyrhjiabai_effect', num);
                    const dnum = player.countCards("h") - num;
                    if (dnum > 0) {
                        await player.chooseToDiscard("h", dnum, true, "allowChooseAll");
                    } else {
                        await player.draw(-dnum);
                    }
                }
                else {
                    let num = 0;
                    player.addTempSkill('fyrhjiabai_effect', "roundStart");
                    player.setStorage('fyrhjiabai_effect', num);
                    await player.chooseToDiscard("h", player.countCards("h"), true, "allowChooseAll");
                    game.log(player, "在此过程中没有角色成为【杀】的目标");
                }
            },
            subSkill: {
                effect: {
                    mark: true,
                    marktext: "拜",
                    intro: {
                        name: "假拜",
                        content: "手牌数恒为#张",
                    },
                    charlotte: true,
                    onremove: true,
                    mod: {
                        aiOrder(player, card, num) {
                            if (num > 0) {
                                return num;
                            }
                            if (card.name === "zhuge" && player.getCardUsable("sha", true) < 6) {
                                return 1;
                            }
                        },
                        aiValue(player, card, num) {
                            if (card.name === "zhuge") {
                                return 60 / (1 + player.getCardUsable("sha", true));
                            }
                        },
                        aiUseful(player, card, num) {
                            if (card.name === "zhuge") {
                                return 60 / (1 + player.getCardUsable("sha", true));
                            }
                        },
                    },
                    trigger: {
                        player: ["loseAfter"],
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    forced: true,
                    filter(event, player) {
                        const num = player.getStorage("fyrhjiabai_effect") || 0;
                        if (event.name == "gain" && event.player == player) {
                            return player.countCards("h") > num;
                        }
                        var evt = event.getl(player);
                        if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards("h") >= num) {
                            return false;
                        }
                        var evt = event;
                        for (let i = 0; i < 4; i++) {
                            evt = evt.getParent("fyrhjiabai_effect");
                            if (evt.name != "fyrhjiabai_effect") {
                                return true;
                            }
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const num = player.countCards("h") - player.getStorage("fyrhjiabai_effect");
                        if (num > 0) {
                            await player.chooseToDiscard("h", num, true, "allowChooseAll");
                        } else {
                            await player.draw(-num);
                        }

                    },
                }
            }
        },
        fyrhchicui: {
            init(player) {
                player.addTempSkill("fyrhchicui_used", "roundEnd");
                player.addMark("fyrhchicui_used", 3, false);
            },
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "useCardAfter",
            },
            filter(event, player) {
                if (!player.hasMark("fyrhchicui_used")) return false;
                return event.player.isIn() && event.card.name == "sha" && player.canUse("sha", event.player, false, false);
            },
            prompt2(event, player) {
                return `视为对${get.translation(event.player)}使用一张【杀】`;
            },
            check(event, player){
                return get.attitude(player, event.player) <= 0;
            },
            async content(event, trigger, player) {
                /* player.addTempSkill("fyrhchicui_used", "roundStart");
                player.addMark("fyrhchicui_used", 1, false); */
                player.removeMark("fyrhchicui_used", 1, false);
                const target = trigger.player;
                await player.useCard({ name: "sha", storage: { fyrhchicui: true }, isCard: true }, target, false);
                if (player.hasHistory('sourceDamage', (evt) => evt.getParent(3) == event)) {
                    //let num = 3 - Math.min(3, player.countMark("fyrhchicui_used"));
                    let num = player.countMark("fyrhchicui_used");
                    if (num > 0) {
                        let result1 =
                            await target.chooseBool(get.prompt('fyrhchicui'), `<div class="text center">令${get.translation(player)}摸${num}张牌以耗尽${get.poptip('fyrhchicui')}的次数</div>`)
                                //.set('ai', () => true)
                                .set("ai", () => get.event().choice)
                                .set(
                                    "choice",
                                    (() => {
                                        let player2 = _status.event.player;
                                        let att = get.attitude(player, player2);
                                        if (att > 0) {
                                            return true;
                                        }
                                        else if (player.countMark("fyrhchicui_used") < 2) {
                                            return true;
                                        }
                                        return false;
                                    })()
                                )
                                .forResult();
                        if (result1?.bool) {
                            await player.draw(num);
                            player.clearMark("fyrhchicui_used", false);
                            //await player.addMark("fyrhchicui_used", num, false);
                        }
                    }
                }

            },
            subSkill: {
                used: {
                    mark: true,
                    marktext: "驰",
                    intro: {
                        name: "驰摧",
                        content: "本轮可使用#次",
                    },
                    charlotte: true,
                    onremove: true,
                },
            }
        },
        fyrhhuanhuo: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "phaseEnd",
            },
            filter(event, player) {
                return player.getHistory('useCard').length == 1 && !player.hasHistory("sourceDamage");
            },
            forced: true,
            async content(event, trigger, player) {
                player.addMark("fyrhchicui_used", 1, false);

                player
                    .when({ global: "roundStart" }, false)
                    .assign({
                        firstDo: true,
                    })
                    .step(async (event, trigger, player) => {
                        player.addTempSkill("fyrhchicui_used", "roundEnd");
                        player.clearMark("fyrhchicui_used", false);
                        player.addMark("fyrhchicui_used", 3, false);
                    })
                    .finish();
            }
        },
        //司马懿
        fyrhruluo: {
            audio: 'xinxyuanyan',
            enable: "phaseUse",
            skillAnimation: true,
            animationColor: "thunder",
            limited: true,
            manualConfirm: true,
            filter(event, player) {
                return game.hasPlayer(current => current.getHp() == player.getHp());
            },
            multiline: true,
            multitarget: true,
            filterTarget(card, player, target) {
                return target.getHp() == player.getHp();
            },
            selectTarget: -1,
            async content(event, trigger, player) {
                player.awakenSkill(event.name);
                const targets = event.targets.sortBySeat();
                for (const target of targets) {
                    await target.damage(2);
                }
                //const num = 3;
                let totalLostHp = 0;
                game.countPlayer(current => {
                    if (current.isDamaged()) {
                        totalLostHp += (current.maxHp - current.hp);
                    }
                });
                if (totalLostHp === 0) return;
                if (!game.hasPlayer(current => current.isDamaged())) return;

                // 取3和总失血量的最小值
                const reqNum = Math.min(3, totalLostHp);

                const next = player.chooseTarget(
                    `###${get.translation(event.name)}###将${reqNum}点回复分配给角色。`,
                    [reqNum, reqNum],
                    (card, player, target) => target.isDamaged() // 只能选受伤的角色
                ).set("complexSelect", true)
                set('ai', target => {
                    const player = get.player();
                    return get.recoverEffect(target, player, player) > 0;
                }
                )
                    .set("multitarget", true).set("forced", true);
                //.set("forced", true);
                // 劫持底层的点击逻辑，实现分配交互
                next.set("custom", {
                    add: {
                        // 无论玩家点“确定”还是“取消”，都要把残留在角色头顶的“回复×N”字样抹掉
                        confirm() { game.players.forEach(p => p.unprompt()); },
                        cancel() { game.players.forEach(p => p.unprompt()); }
                    },
                    replace: {
                        target(target, e) {
                            const evt = get.event();
                            if (!evt.isMine() || !evt.filterTarget(void 0, evt.player, target)) return;
                            if (!target.classList.contains("selectable")) return;

                            const selected = ui.selected.targets;
                            const currentCount = get.numOf(selected, target);
                            const lostHp = target.maxHp - target.hp;

                            // 【防溢出与重置逻辑】：
                            // 如果继续点击该角色会溢出其已损失体力，或者总分配次数已达上限
                            if (currentCount >= lostHp || selected.length >= evt.selectTarget[1]) {
                                // 此时如果该角色身上有分配值，则直接清空他的分配（方便玩家重新分配）
                                if (currentCount > 0) {
                                    target.unprompt();
                                    target.classList.remove("selected");
                                    // 把该角色从选中列表中全部剔除
                                    while (selected.includes(target)) {
                                        selected.remove(target);
                                    }
                                    game.check(); // 刷新确认按钮的状态
                                }
                                return; // 阻止继续增加
                            }

                            // 正常增加分配逻辑
                            target.unprompt();
                            target.classList.add("selected");
                            selected.push(target);
                            const newCount = get.numOf(selected, target);
                            target.prompt(`回复×${newCount}`);
                            game.check();
                        }
                    }
                });
                //等待玩家在界面上点完确定
                const res = await next.forResult();
                // 如果玩家点了确定，并且选了目标
                if (res.bool && res.targets?.length) {
                    // toUniqued() 会把 [A, A, B] 变成 [A, B]
                    const realTargets = res.targets.toUniqued();
                    await game.doAsyncInOrder(realTargets, async target => {
                        // 统计这个独立的目标在数组里出现了几次，就是给他几点回复
                        const count = get.numOf(res.targets, target);
                        await target.recover({ num: count });
                    });
                }
            },
            subSkill: {
            },
            ai: {
                order(item, player) {
                    if (get.event().peyeyan_exclude) {
                        return 0;
                    }
                    return game.hasPlayer(target => {
                        const eff = get.damageEffect(target, player, player);
                        return eff > 0 && player.getHp() == target.getHp() && player.getHp() > 2;
                    })
                        ? 10
                        : 0;
                },
                result: {
                    player: 1,
                },
            },
        },
        fyrhneiji: {
            audio: 'xinxchengshu',
            trigger: {
                source: "damageAfter",
            },
            //global: "fyrhneiji_effect",
            filter(event, player) {
                return event.player?.isIn();
            },
            prompt2(event, player) {
                return `<div class="text center">令${get.translation(event.player)}获得${get.poptip('fyrhruluo')}</div>`;
            },
            init(player) {
                game.countPlayer(current => {
                    current.addSkill('fyrhneiji_effect');
                    current.markSkill('fyrhneiji_effect');
                })
            },
            check(event, player) {
                return get.attitude(player, event.player) > 0;
            },
            async content(event, trigger, player) {
                const target = trigger.player;
                await target.addSkills('fyrhruluo');
                //await target.restoreSkill('fyrhruluo');
                target.addSkill('fyrhneiji_effect');
                target.markSkill('fyrhneiji_effect');
                /* game.countPlayer(current => {
                    current.markSkill('fyrhneiji_effect');
                }) */
            },
            subSkill: {
                effect: {
                    markimage: "image/card/handcard.png",
                    intro: {
                        markcount: (storage, player) => {
                            if (!lib.skill.fyrhneiji.simayiSkillsPool) return 0;
                            let count = 0;
                            for (let skill of player.getSkills()) {
                                if (skill !== "fyrhneiji" && lib.skill.fyrhneiji.simayiSkillsPool.includes(skill)) {
                                    count++;
                                }
                            }
                            return -count;
                        },
                        content(storage, player) {
                            if (!lib.skill.fyrhneiji.simayiSkillsPool) return 0;
                            let count = 0;
                            for (let skill of player.getSkills()) {
                                if (skill !== "fyrhneiji" && lib.skill.fyrhneiji.simayiSkillsPool.includes(skill)) {
                                    count++;
                                }
                            }
                            return `手牌上限-${count}`;
                        }
                    },
                    charlotte: true,
                    onremove: true,
                    mod: {
                        maxHandcard(player, num) {
                            if (!lib.skill.fyrhneiji.simayiSkillsPool) {
                                let pool = new Set();
                                // 遍历所有加载的武将数据
                                for (let charId in lib.character) {
                                    // 只要武将的代码 ID里包含"simayi"
                                    if (charId.includes("simayi")) {
                                        // 武将数据的第 4 项（索引3） 拥有的技能数组
                                        let skills = lib.character[charId][3];
                                        if (Array.isArray(skills)) {
                                            skills.forEach(s => pool.add(s));
                                        }
                                    }
                                }
                                // 把去重后的技能集合,存在 fyrhneiji 的对象上
                                lib.skill.fyrhneiji.simayiSkillsPool = Array.from(pool);
                            }
                            let count = 0;
                            const simayiPool = lib.skill.fyrhneiji.simayiSkillsPool;

                            let playerSkills =
                                //player.getSkills(null, false, false).filter((skill) => {
                                player.getSkills(false, true).filter((skill) => {
                                    let info = get.info(skill);
                                    if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) {
                                        return false;
                                    }
                                    return true;
                                });
                            for (let skill of playerSkills) {
                                if (skill !== "fyrhneiji" && simayiPool.includes(skill)) {
                                    count++;
                                }
                            }
                            return num - count;
                        },
                    },
                },
            }
        },
        //赵云
        fyrhfuzhi: {
            audio: "xinxlongxiang",
            trigger: {
                global: ["shaHit"],
            },
            usable: 1,
            filter(event, player) {
                return event.target == player && !event.directHit;
            },
            /* prompt2(event, player) {
                return lib.translate.fyrhfuzhi_info.slice(lib.translate.fyrhfuzhi_info.indexOf("你可"));
            }, */
            direct: true,
            async content(event, trigger, player) {
                let num = 0, win = 0;
                let gaincards = [];
                while (num < 2) {
                    let goon = player.needsToDiscard() > 1 ? player.hasCard(card => {
                        return card.number > 10 && get.value(card) <= 5;
                    }) : player.hasCard(card => {
                        return (card.number >= 9 && get.value(card) <= 5) || get.value(card) <= 3;
                    });
                    const result2 = await player.chooseTarget((card, player, target) => {
                        return player.canCompare(target);
                    })
                        .set("prompt", get.prompt("fyrhfuzhi"))
                        .set("prompt2", lib.translate.fyrhfuzhi_info.slice(lib.translate.fyrhfuzhi_info.indexOf("你可")))
                        .set('ai', target => {
                            const { player, goon } = get.event();
                            if (goon && get.attitude(player, target) < 0) {
                                return true
                            };
                            return 0;
                        }).set('goon', goon).forResult();
                    if (result2.bool && result2.targets?.length) {
                        num++;
                        const target = result2.targets[0];
                        player.logSkill("fyrhfuzhi", target);
                        const result1 = await player.chooseToCompare(target).forResult();
                        if (result1.bool) {
                            win++;
                        }
                        if (!result1.bool || result1.bool) {
                            let cards1 = [result1.player, result1.target];
                            if (cards1.some(card => {
                                return get.name(card) == "tao" || get.suit(card) == 'heart'
                            })) {
                                player.addTempSkill('fyrhfuzhi_effect');
                            }
                            gaincards.push(...cards1);
                        }
                    } else {
                        break;
                    }
                }
                if (win > 1) {
                    const cards = gaincards.slice();
                    if (!cards.length) {
                        return;
                    }
                    do {
                        const result =
                            cards.length > 1
                                ? await player
                                    .chooseButtonTarget({
                                        createDialog: [`福至：请选择要分配的牌和目标`, cards],
                                        forced: true,
                                        allowChooseAll: true,
                                        selectButton: [1, Infinity],
                                        cardsx: cards,
                                        ai1(button) {
                                            return get.value(button.link);
                                        },
                                        ai2(target) {
                                            const player = get.player();
                                            const card = ui.selected.buttons[0].link;
                                            if (card) {
                                                return get.value(card, target) * get.attitude(player, target);
                                            }
                                            return 1;
                                        },
                                    })
                                    .forResult()
                                : await player
                                    .chooseTarget("选择一名角色获得" + get.translation(cards), true)
                                    .set("ai", target => {
                                        const att = get.attitude(_status.event.player, target);
                                        if (_status.event.enemy) {
                                            return -att;
                                        } else if (att > 0) {
                                            return att / (1 + target.countCards("h"));
                                        } else {
                                            return att / 100;
                                        }
                                    })
                                    .set("enemy", get.value(cards[0], player, "raw") < 0)
                                    .forResult();
                        if (result?.bool) {
                            if (!result.links?.length) {
                                result.links = cards.slice(0);
                            }
                            cards.removeArray(result.links);
                            player.line(result.targets, "green");
                            const gainEvent = result.targets[0].gain(result.links, "draw");
                            gainEvent.giver = player;
                            await gainEvent;
                        }
                    } while (cards.length > 0);
                }
            },
            locked: false,
            mod: {
                aiUseful(player, card, num) {
                    if (get.suit(card, player) === "heart") {
                        return num + 3;
                    }
                },
            },
            subSkill: {
                effect: {
                    trigger: {
                        player: "damageBegin4",
                    },
                    onremove: true,
                    charlotte: true,
                    forced: true,
                    firstDo: true,
                    mark: true,
                    marktext: '福',
                    intro: {
                        content: "受到的伤害值改为0",
                    },
                    async content(event, trigger, player) {
                        trigger.num = 0;
                    }
                }
            },
            ai: {
                effect: {
                    player: (card, player, target) => {
                        //确认当前 AI 正在评估的是不是【闪】
                        if (typeof card !== 'object' || get.name(card, player) !== 'shan' || !game.hasPlayer(target => player.canCompare(target, true))) return;
                        const shaEvent = _status.event.getParent('sha');
                        if (!shaEvent || !shaEvent.player) return;
                        const attacker = shaEvent.player;
                        if (player.countCards('h', card => {
                            return get.name(card) == "tao" || get.suit(card) == 'heart'
                        })) {
                            return -10;
                        }
                    },
                },
            }
        },
        fyrhshunyi: {
            audio: 'xinxcangnuo',
            enable: "chooseToUse",
            filter(event, player) {
                if (event.type == "wuxie" || player.hasSkill("fyrhshunyi_used")) {
                    return false;
                }
                for (let name of ["sha"]) {
                    if (event.filterCard({ name: name, isCard: true }, player, event)) {
                        return true;
                    }
                }
                return false;
            },
            chooseButton: {
                dialog(event, player) {
                    let vcards = [];
                    for (let name of ["sha"]) {
                        let card = { name: name, isCard: true };
                        if (event.filterCard(card, player, event)) {
                            vcards.push(["基本", "", name]);
                        }
                    }
                    let dialog = ui.create.dialog("顺意", [vcards, "vcard"], "hidden");
                    dialog.direct = true;
                    return dialog;
                },
                backup(links, player) {
                    return {
                        selectCard: -1,
                        filterCard: () => false,
                        ignoreMod: true,
                        viewAs: {
                            name: links[0][2],
                            suit: "none",
                            number: "none",
                            isCard: true,
                        },
                        log: false,
                        async precontent(event, trigger, player) {
                            player.addTempSkill("fyrhshunyi_used");
                            const skill = "fyrhshunyi";
                            delete event.result.cards;
                            player.logSkill(skill);
                            let num = 2;
                            let used = false;
                            let cards2 = [];
                            while (num > 0) {
                                num--;
                                const judgeEvent = player.judge(card => (card.name == "jiu" || get.is.damageCard(card) ? 10 : -1), "fyrhshunyi");
                                judgeEvent.set("callback", async event => {
                                    cards2.push(event.judgeResult.card);
                                    if (event.card.name == "jiu" || get.is.damageCard(event.card)) {
                                        used = true;
                                    }
                                });
                                await judgeEvent;
                            }
                            if (used) {
                                await player.drawTo(6);
                            } else {
                                event.getParent().goto(0);
                                const next = player.chooseToMove("allowChooseAll");
                                next.set("list", [["牌堆顶", cards2.reverse()], ["牌堆底"]]);
                                next.set("prompt", "顺意：点击或拖动将牌移动到牌堆顶或牌堆底");
                                next.processAI = (list) => {
                                    const cards3 = list[0][1], player2 = _status.event.player;
                                    const top2 = [];
                                    const judges = player2.getCards("j");
                                    let stopped = false;
                                    if (!player2.hasWuxie()) {
                                        for (let i = 0; i < judges.length; i++) {
                                            const judge = get.judge(judges[i]);
                                            cards3.sort((a, b) => judge(b) - judge(a));
                                            if (judge(cards3[0]) < 0) {
                                                stopped = true;
                                                break;
                                            } else {
                                                top2.unshift(cards3.shift());
                                            }
                                        }
                                    }
                                    let bottom2;
                                    if (!stopped) {
                                        cards3.sort((a, b) => get.value(b, player2) - get.value(a, player2));
                                        while (cards3.length) {
                                            if (get.value(cards3[0], player2) <= 5) {
                                                break;
                                            }
                                            top2.unshift(cards3.shift());
                                        }
                                    }
                                    bottom2 = cards3;
                                    return [top2, bottom2];
                                };
                                const { moved } = await next.forResult();
                                const top = moved[0];
                                const bottom = moved[1];
                                top.reverse();
                                game.cardsGotoPile(top.concat(bottom), ["top_cards", top], (event2, card) => {
                                    if (event2.top_cards.includes(card)) {
                                        return ui.cardPile.firstChild;
                                    }
                                    return null;
                                });
                                player.popup(get.cnNumber(top.length) + "上" + get.cnNumber(bottom.length) + "下");
                                game.log(player, "将" + get.cnNumber(top.length) + "张牌置于牌堆顶");
                                await game.delayx();

                                return;
                            }
                        },
                    };
                },
                prompt(links, player) {
                    return `顺意：进行两次判定，若有伤害牌或【酒】则视为使用一张【${get.translation(links[0][2])}】`;
                },
            },
            ai: {
                order(item, player) {
                    if (player.countCards("h") < 4) {
                        return 8;
                    }
                    return 3;
                },
                respondSha: true,
                skillTagFilter(player, tag, arg) {
                    if (arg === "respond" || player.hasSkill("fyrhshunyi_used")) {
                        return false;
                    }
                },
                result: {
                    player: 1,
                },
            },
            subSkill: {
                used: {
                    charlotte: true,
                    mark: true,
                    onremove: true,
                    marktext: '顺',
                    intro: {
                        content: "本回合已发动",
                    },
                },
            },
        },
        //魏乂
        fyrhliecheng: {
            audio: ["ext:永夜之境/audio/xinxshiji1.mp3", "ext:永夜之境/audio/xinxwushuang2.mp3"],
            trigger: {
                player: ["loseAfter"],
                global: ["useCardAfter", "loseAsyncAfter", "equipAfter", "addJudgeAfter", "gainAfter", "addToExpansionAfter"],
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player, name) {
                if (name == "useCardAfter") {
                    return get.name(event.card) === 'sha';
                }
                return event.getl(player)?.hs?.length && !player.countCards("h");
            },
            async content(event, trigger, player) {
                let used = false;
                if (event.triggername !== 'useCardAfter') {
                    used = true;
                } else {
                    await player.addMark('fyrhliecheng', 1, false);
                    if (player.countMark('fyrhliecheng') > 2) {
                        used = true;
                        player.clearMark('fyrhliecheng', false);
                    }
                }
                if (used) {
                    const result = await player.chooseBool(`裂城：是否将手牌数调整至4张？`)
                        .set("ai", () => get.event().choice)
                        .set(
                            "choice",
                            (() => {
                                let player = get.player();
                                if (4 - player.countCards("h") > 1) {
                                    return true;
                                }
                                return false;
                            })()
                        )
                        .forResult();
                    if (result.bool) {
                        player.logSkill(event.name);
                        const num = player.countCards("h") - 4;
                        if (num > 0) {
                            await player.chooseToDiscard("h", num, true, "allowChooseAll");
                        } else if (num < 0) {
                            await player.draw(-num);
                        }
                        await player.showCards(player.getCards('h'));
                        let ucards = player.getCards('h', (card) => { return !card.hasGaintag("fyrhliecheng") });
                        let rcards = player.getCards('h', (card) => { return card.hasGaintag("fyrhliecheng") && player.canRecast(card) });
                        await player.addGaintag(ucards, "fyrhliecheng");
                        let recastedCards = [];
                        let cards = player.getCards('h', (card) => {
                            return get.name(card) === "sha" && player.hasUseTarget(card);
                        });
                        while (cards.length) {
                            const result = await player
                                .chooseToUse(function (card, player, event) {
                                    if (get.name(card) != "sha") {
                                        return false;
                                    }
                                    return lib.filter.filterCard.apply(this, arguments);
                                }, "裂城：是否使用任意张【杀】？")
                                .set("targetRequired", true)
                                .set("complexSelect", true)
                                .set("complexTarget", true)
                                .set("filterTarget", function (card, player, target) {
                                    return lib.filter.filterTarget.apply(this, arguments);
                                }).forResult();
                            if (!result?.bool) {
                                break;
                            }
                        }
                        if (rcards?.length) {
                            await player.recast(rcards);
                        }
                    }
                }

            },
            marktext: '裂',
            intro: {
                content: '已结算$张【杀】',
            }
        },
        //马休马铁
        fyrhquxian: {
            audio: "olkenshang2.mp3",
            trigger: {
                target: "useCardToTarget",
                player: "useCardToPlayer",
            },
            filter(event, player) {
                return get.is.damageCard(event.card) && event.targets?.length == 1;
            },
            logTarget(event, player) {
                return player == event.player ? event.target : event.player;
            },
            async cost(event, trigger, player) {
                let target = (trigger.name == "useCardToPlayer" ? trigger.target : trigger.player);
                //const goon = get.effect(player, trigger.card, target, player) < 0;
                const goon = trigger.name == "useCardToPlayer";
                event.result = await player.chooseBool(get.prompt('fyrhquxian'), `令${get.translation(trigger.card)}多结算一次`)
                    .set("choice", goon)
                    /* .set("ai", () => {
                        return _status.event.bool;
                    })
                    .set("bool",  get.effect(player, trigger.card, trigger.player, player) < 0) */
                    .forResult();
            },
            async content(event, trigger, player) {
                const responder = trigger.target;
                const target = (player === trigger.player) ? player : trigger.player;
                let num = 1;
                trigger.getParent().effectCount += num;
                game.log(trigger.card, '额外结算' + get.cnNumber(num) + '次');
                player.when({ global: "useCardAfter", })
                    .filter(evt => evt == trigger.getParent())
                    .step(async (event, trigger, player) => {
                        for (const key of ["useCard", "respond"]) {
                            if (
                                responder.hasHistory(key, evt => {
                                    if (!evt.respondTo) {
                                        return false;
                                    }
                                    return evt.respondTo[1] == trigger.card;
                                })
                            ) {
                                /* if (target.countDiscardableCards(player, "he")) {
                                    await player.discardPlayerCard(target, "he", true);
                                } */
                                if (target.countGainableCards(player, "he")) {
                                    await player.gainPlayerCard(target, "he", true);
                                }
                                break;
                            }
                        }
                    });
            }
        },
        fyrhjiaoshi: {
            audio: "olkenshang1.mp3",
            enable: "phaseUse",
            usable: 1,
            filterTarget(event, player, target) {
                return target.countGainableCards(player, "he") && target !== player;
            },
            async content(event, trigger, player) {
                const target1 = event.targets[0];
                await player.gainPlayerCard(target1, "he", true);
                const result =
                    await player
                        .chooseCardTarget({
                            prompt: get.prompt('fyrhjiaoshi'),
                            prompt2: `<div class="text center">将一张牌交给一名其他角色，然后${get.translation(target1)}视为对其使用一张【杀】</div>`,
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return target !== target1;
                            },
                            selectCard: 1,
                            position: 'h',
                            ai1(card) {
                                return 6 - get.value(card);
                            },
                            ai2(target) {
                                const player = get.player();
                                let att = get.attitude(player, target);
                                if (target.hasSkillTag("nogain")) {
                                    att /= 9;
                                }
                                //return att;
                                return 0;
                            },
                        })
                        .forResult();
                if (result?.bool) {
                    const cards = result.cards;
                    const target = result.targets[0];
                    await player.give(cards, target);
                    if (target1.canUse({ name: "sha" }, target, false)) {
                        await target1.useCard({ name: "sha", isCard: true }, target, false);
                    }
                }
            }
        },
        //张角
        fyrhyijin: {
            audio: "ext:永夜之境/audio:4",
            forced: true,
            locked: true,
            init: (player, skill) => player.markSkill(skill),
            onremove(player, skill) { player.clearMark(skill); },
            getCards(player) {
                let cards = [];
                game.countPlayer(current => {
                    if (current !== player && current.countCards('h') === 1) {
                        cards.push(...current.getCards('h'));
                    }
                });
                return cards;
            },
            hiddenCard(player, name) {
                const cards = get.info("fyrhyijin").getCards(player);
                return cards.some(card => card.name === name);
            },
            markimage: "image/card/leigong.png",
            intro: {
                markcount(storage, player) {
                    return null;
                },
                mark(dialog, storage, player) {
                    let cards = get.info("fyrhyijin").getCards(player);
                    if (cards.length && player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                        return "场上可用的手牌";
                    }
                    return '共有' + get.cnNumber(cards.length) + '张可用的手牌';
                },
            },
            group: ["fyrhyijin_handler", "fyrhyijin_effect"],
            subSkill: {
                handler: {
                    mod: {
                        aiOrder(player, card, num) {
                            if (card?.hasGaintag?.("fyrhyijin")) {
                                return num + 10;
                            }
                        },
                    },
                    onChooseToUse(event) {
                        if (game.online) return;
                        const player = event.player;

                        // 清理上一轮可能残留的虚拟牌
                        let oldCards = player.getCards("s", card => card.hasGaintag("fyrhyijin"));
                        if (oldCards.length) {
                            game.deleteFakeCards(oldCards);
                        }

                        let shownCards = get.info("fyrhyijin").getCards(player);

                        if (shownCards.length) {
                            // 生成虚拟牌并直接给予玩家（带有特定标签）
                            const fakes = game.createFakeCards(shownCards);
                            fakes.forEach(card => card.classList.add('gold-flowing-card'));
                            player.directgains(fakes, null, "fyrhyijin");
                            // 遍历生成的假牌，将右上角的标签改为原拥有者的名字
                            for (let i = 0; i < fakes.length; i++) {
                                const fake = fakes[i];
                                const real = shownCards[i]; // fakes 和 shownCards 一一对应
                                if (fake.node && fake.node.gaintag && real) {
                                    const owner = get.owner(real);
                                    if (owner) {
                                        fake.node.gaintag.innerHTML = owner.getName();
                                    }
                                }
                            }
                        }
                    },
                    onChooseToRespond(event) {
                        if (game.online) return;
                        const player = event.player;

                        let oldCards = player.getCards("s", card => card.hasGaintag("fyrhyijin"));
                        if (oldCards.length) {
                            game.deleteFakeCards(oldCards);
                        }
                        let shownCards = get.info("fyrhyijin").getCards(player);

                        if (shownCards.length) {
                            const fakes = game.createFakeCards(shownCards);
                            fakes.forEach(card => card.classList.add('gold-flowing-card'));
                            player.directgains(fakes, null, "fyrhyijin");
                            for (let i = 0; i < fakes.length; i++) {
                                const fake = fakes[i];
                                const real = shownCards[i]; // fakes 和 shownCards 一一对应
                                if (fake.node && fake.node.gaintag && real) {
                                    const owner = get.owner(real);
                                    if (owner) {
                                        fake.node.gaintag.innerHTML = owner.getName();
                                    }
                                }
                            }
                        }
                    },
                    trigger: {
                        player: ["useCardBefore", "respondBefore", "chooseToUseAfter", "chooseToRespondAfter"],
                    },
                    filter(event, player) {
                        if (["useCard", "respond"].includes(event.name)) {
                            let shownCards = get.info("fyrhyijin").getCards(player);
                            // 检查事件中的牌ID是否存在于当前的明置牌列表中
                            return event.cards?.some(card => shownCards.some(sc => sc.cardid == card._cardid));
                        }
                        return true;
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        if (["useCard", "respond"].includes(trigger.name)) {
                            if (!trigger.skill) {
                                trigger.skill = "fyrhyijin";
                            } else {
                                player.logSkill("fyrhyijin", null, null, null, [get.rand(1, 2)]);
                                //await  player.logSkill("fyrhyijin");
                            }
                            // 重新获取最新的明置牌对象
                            let shownCards = get.info("fyrhyijin").getCards(player);

                            // 将玩家使用的虚拟牌替换为场上真实的明置牌
                            for (let i = 0; i < trigger.cards.length; i++) {
                                const card = trigger.cards[i];
                                const realCard = shownCards.find(sc => sc.cardid == card._cardid);
                                if (realCard) {
                                    trigger.cards[i] = realCard;
                                    if (trigger.card && trigger.card.cards) {
                                        trigger.card.cards[i] = realCard;
                                    }
                                }
                            }
                        }
                        // 清理虚拟牌
                        let cards = player.getCards("s", card => card.hasGaintag("fyrhyijin"));
                        if (cards.length) {
                            game.deleteFakeCards(cards);
                        }
                    },
                },
                effect: {
                    logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhyijin${index}.mp3` : 2),
                    trigger: {
                        player: "useCardAfter",
                    },
                    filter(event, player) {
                        return get.suit(event.card) == 'spade';
                    },
                    popup: false,
                    async cost(event, trigger, player) {
                        event.result = await player
                            .chooseTarget(get.prompt('fyrhyijin'), (card, player, target) => {
                                return target.countCards('he');
                            })
                            .set('prompt2', `<div class="text center">令一名角色移出两张牌</div>`)
                            .set("ai", target => {
                                return -get.attitude(get.player(), target) * target.countCards("he");
                            })
                            .forResult();
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        const num = Math.min(2, target.countCards('he'))
                        const result = await target.chooseCard('选择要移出的牌', 'he', num, true)
                            .set("ai", card => {
                                return 6 - get.value(card);
                            })
                            .forResult();
                        if (result?.bool && result.cards?.length) {
                            player.logSkill("fyrhyijin", null, null, null, [get.rand(3, 4)]);
                            const cards = result.cards;
                            //await target.addToExpansion(cards, "draw").set("gaintag", ["fyrhyijin_expansion"]);
                            game.broadcastAll(
                                (name, translate) => {
                                    lib.translate[name] = translate;
                                },
                                `fyrhyijin_expansion_${player.playerid}`,
                                get.translation(event.name)
                            );
                            const next = target.addToExpansion(cards, "draw");
                            next.gaintag.add(`fyrhyijin_expansion_${player.playerid}`);
                            await next;
                            target.addSkill("fyrhyijin_expansion");
                            target.markSkill("fyrhyijin_expansion");
                        }
                    },
                },
                expansion: {
                    trigger: {
                        global: "useCardAfter",
                    },
                    filter(event, player) {
                        const tag = "fyrhyijin_expansion_" + event.player.playerid;
                        return get.suit(event.card) !== 'spade' && player.countExpansions(tag);
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    async content(event, trigger, player) {
                        const tag = "fyrhyijin_expansion_" + trigger.player.playerid;
                        const cards = player.getExpansions(tag);
                        game.log(player, "收回了" + get.cnNumber(cards.length) + "张牌");
                        await player.gain(cards, "draw");
                        player.removeSkill('fyrhyijin_expansion');
                    },
                    onremove: true,
                    marktext: "蚁",
                    mark: true,
                    intro: {
                        //markcount: "expansion",
                        markcount(storage, player) {
                            let count = 0;
                            game.countPlayer2(p => {
                                const tag = "fyrhyijin_expansion_" + p.playerid;
                                count += player.getExpansions(tag).length;
                            });
                            return count;
                        },
                        mark(dialog, storage, player) {
                            let cards = [];
                            game.countPlayer2(p => {
                                const tag = "fyrhyijin_expansion_" + p.playerid;
                                cards.push(...player.getExpansions(tag));
                            });
                            if (player.isUnderControl(true)) {
                                dialog.addAuto(cards);
                            } else {
                                return "共有" + get.cnNumber(cards.length) + "张牌";
                            }
                        },
                    },
                },
            },
        },
        fyrhhuangsheng: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => "ext:永夜之境/audio/fyrhhuangsheng" + (typeof index === "number" ? index : get.rand(1, 3)) + ".mp3",
            trigger: {
                player: "phaseDrawBegin2",
            },
            forced: true,
            locked: false,
            filter(event, player) {
                return !event.numFixed;
            },
            async content(event, trigger, player) {
                let targets = game.filterPlayer(current => current.isMinHandcard());
                for (let target of targets) {
                    player.markAuto('fyrhhuangsheng', target);
                    player.markSkill('fyrhhuangsheng');
                }
                let count = targets.length;
                trigger.num += count;
                //trigger.num = count;
            },
            marktext: "🐜",
            intro: {
                mark(dialog, storage, player) {
                    if (storage) dialog.addSmall([storage.map(key => key.name), "character"]);
                },
            },
            group: ["fyrhhuangsheng_kill"],
            subSkill: {
                kill: {
                    trigger: {
                        player: "loseAfter",
                        global: ["gainAfter", "loseAsyncAfter", "addJudgeAfter", "addToExpansionAfter", "equipAfter"],
                    },
                    charlotte: true,
                    popup: false,
                    filter(event, player) {
                        const bool = (event.getl?.(player)?.hs?.length || event.getg?.(player)?.length);
                        if (bool) {
                            return player.countCards('h') === 9 && !player.hasMark('fyrhhuangsheng_kill');
                        };
                    },
                    async cost(event, trigger, player) {
                        const targets = game.filterPlayer(current => !player.getStorage('fyrhhuangsheng').includes(current)).slice();
                        if (targets?.length) {
                            event.result = await player
                                .chooseTarget(get.prompt('fyrhhuangsheng'), (card, player, target) => {
                                    return targets.includes(target);
                                })
                                .set('prompt2', `<div class="text center">杀死一名角色</div>`)
                                .set("ai", target => {
                                    return -get.attitude(get.player(), target) * target.hp;
                                })
                                .forResult();
                        }
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        player.logSkill("fyrhhuangsheng", null, null, null, [get.rand(4, 5)]);
                        target.die().source = player;
                        player.addMark('fyrhhuangsheng_kill', 1, false);
                    }
                }
            }
        },
        fyrhcanjue: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: ["washCard"],
            },
            limited: true,
            skillAnimation: true,
            animationColor: "thunder",
            async content(event, trigger, player) {
                player.awakenSkill(event.name);
                const targets = game.players;
                await game.doAsyncInOrder(targets, async (target) => target.modedDiscard(target.getCards("he")));
                game.addGlobalSkill('fyrhcanjue_effect');
            },
            subSkill: {
                effect: {
                    trigger: {
                        global: "drawAfter",
                    },
                    charlotte: true,
                    silent: true,
                    filter(event, player) {
                        const gainedCards = event.getg(event.player);
                        if (!gainedCards.length) return false;
                        return gainedCards.some(card => card.name === 'tao');
                    },
                    async content(event, trigger, player) {
                        const targets = game.players;
                        await game.asyncDraw(targets.sortBySeat(), 4);
                        game.removeGlobalSkill('fyrhcanjue_effect');
                    }
                }
            }
        },
        //刘焉
        fyrhlietu: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "useCardAfter",
            },
            forced: true,
            locked: false,
            popup: false,
            firstDo: true,
            async content(event, trigger, player) {
                /* if (!player.hasMark('fyrhlietu_draw')) {
                    player.addMark('fyrhlietu', 1, false);
                } */
                if (player.name == 'xinxhj_fyrh_liuyan') {
                    if (!player.hasMark('fyrhlietu_draw')) {
                        player.addMark('fyrhlietu', 1, false);
                    }
                }
                else {
                    if (player.hasMark('fyrhlietu_draw')) {
                        player.clearMark('fyrhlietu', false);
                    } else {
                        player.addMark('fyrhlietu', 1, false);
                    }
                }
                await player.removeSkill('fyrhlietu_draw');
                if (player.countMark('fyrhlietu') >= 3) {
                    player.clearMark('fyrhlietu', false);
                    player.logSkill('fyrhlietu');
                    await player.draw(3);
                }
            },
            mark: true,
            marktext: "土",
            intro: {
                content(storage, player) {
                    const x = player.countMark('fyrhlietu');
                    return `已使用牌（结算中仅你失去牌）：<font color=#FFD700>${x}</font>张`;
                },
            },
            group: 'fyrhlietu_use',
            subSkill: {
                use: {
                    trigger: {
                        player: "useCard1",
                    },
                    charlotte: true,
                    silent: true,
                    onremove: true,
                    firstDo: true,
                    async content(event, trigger, player) {
                        player.addTempSkill('fyrhlietu_draw');
                    },
                },
                draw: {
                    charlotte: true,
                    silent: true,
                    onremove: true,
                    trigger: {
                        global: ["loseAfter", "loseAsyncAfter", "equipAfter", "addJudgeAfter", "addToExpansionAfter", "gainAfter"],
                    },
                    getIndex(event, player) {
                        return game.filterPlayer(target => event.getl?.(target)?.cards2?.length).sortBySeat();
                    },
                    filter(event, player, name, target) {
                        return target !== player;
                    },
                    logTarget(event, player, name, target) {
                        return target;
                    },
                    async content(event, trigger, player) {
                        await player.addMark('fyrhlietu_draw', 1, false);
                    },
                },
            }
        },
        fyrhkuizong: {
            audio: "ext:永夜之境/audio:1",
            limited: true,
            skillAnimation: true,
            animationColor: "orange",
            enable: "phaseUse",
            filterTarget: lib.filter.notMe,
            async content(event, trigger, player) {
                const target = event.targets[0];
                player.awakenSkill(event.name);
                let cards2 = [];
                while (cards2.length < 4) {
                    const card = get.cardPile((card2) => {
                        if (get.type(card2) != "basic") {
                            return false;
                        }
                        if (!cards2.length) {
                            return true;
                        }
                        return cards2.every((cardx) => cardx.name != card2.name);
                    });
                    if (card) {
                        cards2.add(card);
                    } else {
                        break;
                    }
                }
                if (cards2.length) {
                    //await target.gain(cards2, "gain2").set('gaintag', ["fyrhkuizong"]);
                    player.addSkill(`${event.name}_draw`);
                    game.broadcastAll(
                        (name, translate) => {
                            lib.translate[name] = translate;
                        },
                        `${event.name}_draw_${target.playerid}`,
                        get.translation(event.name)
                    );
                    const next = target.gain(cards2, "gain2");
                    next.gaintag.add(`${event.name}_draw_${target.playerid}`);
                    await next;
                }
            },
            ai: {
                order(item, player) {
                    return 6;
                },
                result: {
                    target(player, target) {
                        if (player.hasFriend()) {
                            return 1;
                        }
                        return -1;
                    }
                }
            },
            subSkill: {
                draw: {
                    onremove(player, skill) {
                        const gaintag = game.countPlayer(current => {
                            current.getCards("h")
                                .flatMap(card => card.gaintag.filter(tag => tag.startsWith(skill)))
                                .unique()
                        });
                        gaintag.forEach(tag => player.removeGaintag(tag));
                    },
                    trigger: {
                        global: ["loseAfter", "loseAsyncAfter", "gainAfter", "equipAfter", "addJudgeAfter", "addToExpansionAfter"],
                    },
                    getIndex(event, player) {
                        return game.filterPlayer((target) => {
                            const evt = event.getl?.(target);
                            const expectedTag = "fyrhkuizong_draw_" + target.playerid;
                            return evt?.cards2?.some((card) => evt.gaintag_map?.[card.cardid]?.includes(expectedTag));
                        }).sortBySeat();
                    },
                    filter(event, player, name, target) {
                        return target !== player;
                    },
                    logTarget(event, player, name, target) {
                        return target;
                    },
                    charlotte: true,
                    silent: true,
                    async content(event, trigger, player) {
                        const target = event.indexedData;
                        const evt = trigger.getl?.(target);
                        const expectedTag = "fyrhkuizong_draw_" + target.playerid;
                        let count = 0;
                        if (evt && evt.cards2) {
                            count = evt.cards2.filter(card => evt.gaintag_map?.[card.cardid]?.includes(expectedTag)).length;
                        }
                        if (count > 0) {
                            await player.draw(count * 2);
                        }
                        const hs = target.getCards('he').filter(card => card.hasGaintag(expectedTag));
                        if (!hs.length) {
                            player.storage.fyrhkuizong_draw = true;
                        }
                    },
                    mod: {
                        targetInRange(card, player, target) {
                            if (!player.storage?.fyrhkuizong_draw) {
                                return true;
                            }
                        },
                        cardUsableTarget(card, player, target) {
                            if (!player.storage?.fyrhkuizong_draw) {
                                return true;
                            }
                        },
                    },
                }
            },
        },
        //带来洞主
        fyrhjiaxie: {
            audio: "ext:永夜之境/audio:2",
            enable: "phaseUse",
            filter(event, player) {
                if (player.getStorage('fyrhjiaxie_used').length > 1) {
                    return false;
                }
                if (!player.getStorage('fyrhjiaxie_used').includes('tao') && player.getStorage('fyrhjiaxie_used').includes('wuzhong')) {
                    return game.hasPlayer(current => current.isDamaged());
                }
                return player.hasCard(cardx => {
                    return get.inpileVCardList(info => {
                        const name = info[2];
                        if (player.getStorage("xfyrhjiaxie_used").includes(name)) {
                            return false;
                        }
                        return name === "wuzhong" || name === "tao";
                    }).some(info => {
                        const vcard = get.autoViewAs({ name: info[2], nature: info[3], isCard: true, cards: [cardx], storage: { jiaxiex: true } });
                        if (!event.filterCard(vcard, player, event)) { return false; }
                        return game.hasPlayer(target => player.canUse(vcard, target, false));
                    });
                }, "hes");
            },
            chooseButton: {
                dialog(event, player) {
                    const list = get.inpileVCardList(info => {
                        const name = info[2];
                        if (name === "wuzhong") {
                            return event.filterCard({ name: "wuzhong", isCard: true }, player, event);
                        }
                        if (name === "tao") {
                            return game.hasPlayer(current => current.isDamaged());
                        }
                        return false;
                    });
                    return ui.create.dialog("假挟", [list, "vcard"]);
                },
                filter(button, player) {
                    if (player.getStorage("fyrhjiaxie_used").includes(button.link[2])) {
                        return false;
                    }
                    return true;
                },
                check(button) {
                    if (_status.event.getParent().type != "phase") {
                        return 1;
                    }
                    const player = get.event().player,
                        value = player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    return value;
                },
                backup(links, player) {
                    const cardName = links[0][2];
                    return {
                        filterCard: true,
                        popname: true,
                        ignoreMod: true,
                        selectTarget: 1,
                        filterTarget(card, player, target) {
                            if (cardName === "tao") {
                                return target.isDamaged();
                            }
                            else if (cardName === "wuzhong") {
                                return lib.filter.filterTarget({ name: "wuzhong", isCard: true }, player, player);
                            }
                            return false;
                        },
                        check(card) {
                            return 6 - get.value(card);
                        },
                        position: "hse",
                        viewAs: {
                            name: links[0][2], nature: links[0][3],
                            storage: {
                                jiaxiex: true,
                            },
                        },
                        async precontent(event, trigger, player) {
                            player.logSkill('fyrhjiaxie');
                            player.addTempSkill('fyrhjiaxie_used');
                            player.markAuto('fyrhjiaxie_used', cardName);
                            player.when({ player: "useCardAfter" })
                                .filter(evt => evt.getParent() == event.getParent())
                                .step(async (event, trigger, player) => {
                                    const target = trigger.targets[0];
                                    target.addSkill('fyrhjiaxie_effect');
                                    target.markAuto("fyrhjiaxie_effect", player);
                                    target.markAuto('fyrhjiaxie_effect', cardName);
                                });
                        },
                    };
                },
                prompt(links, player) {
                    return "将一张牌当作" + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】对目标使用";
                },
            },
            ai: {
                order: 8,
                result: {
                    //target(player, target) {
                    player(player, target) {
                        return 1;
                    }
                }
            },
            mod: {
                cardEnabled(card, player) {
                    if ((card.name === "tao") && card?.storage?.jiaxiex) {
                        return true;
                    }
                },
            },
            subSkill: {
                used: {
                    charlotte: true,
                    onremove: true,
                    marktext: "假",
                    intro: {
                        content(storage) {
                            const map = {
                                wuzhong: "无中生有",
                                tao: "桃",
                            };
                            const str = storage.map(name => map[name]).join("、");
                            return "本回合已因此使用：" + str;
                        },
                    },
                },
                effect: {
                    markimage: "image/card/nanman.png",
                    intro: {
                        markcount(storage, player) {
                            return '';
                        },
                        content(storage) {
                            const map = {
                                wuzhong: "体力值变化",
                                tao: "获得牌",
                            };
                            const str = storage.map(name => map[name]).filter(Boolean).join("、");
                            const target = game.findPlayer(current => storage.includes(current));
                            return `你${str}后，${get.translation(target)}可以弃置你两张牌`;
                        },
                    },
                    trigger: {
                        player: ["gainAfter", 'changeHpAfter'],
                        global: "loseAsyncAfter",
                    },
                    charlotte: true,
                    onremove: true,
                    silent: true,
                    filter(event, player) {
                        const st = player.getStorage("fyrhjiaxie_effect") || [];
                        const target = game.findPlayer(current => st.includes(current));
                        if (!target?.isIn()) return false;
                        if (event.name === 'changeHp') {
                            return st.includes('wuzhong');
                        }
                        return event.getg?.(player)?.length && st.includes('tao');
                    },
                    async content(event, trigger, player) {
                        const st = player.getStorage("fyrhjiaxie_effect") || [];
                        const target = game.findPlayer(current => st.includes(current));
                        if (target?.isIn() && player.countDiscardableCards(target, "he")) {
                            await target.discardPlayerCard(player, [1, 2], "he")
                                .set('ai', () => {
                                    const player = _status.event.player,
                                        target = _status.event.getTrigger().player;
                                    return get.effect(target, { name: "guohe" }, player, player) > 0;
                                });
                        }
                        player
                            .when({ global: "phaseBegin" }, false)
                            .filter((event) => {
                                return event.player === target;
                            })
                            .assign({
                                firstDo: true,
                            })
                            .step(async (event, trigger, player) => {
                                player.removeSkill("fyrhjiaxie_effect");
                            })
                            .finish();
                    }
                }
            }
        },
        fyrhcangren: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "phaseEnd",
            },
            direct: true,
            lastDo: true,
            filter(event, player) {
                return game.hasPlayer(current => current.hasHistory("lose", (evt) => {
                    if (evt.type != "discard") return false;
                    for (let i of evt.cards2) {
                        if (player.hasUseTarget(i) && i.name == 'sha') return true;//get.position(i, true) == "d" &&
                    }
                    return false;
                }));
            },
            getCards(player) {
                const cards = [];
                game.countPlayer(current => current.getHistory("lose", evt => {
                    if (evt.type == "discard") {
                        cards.addArray(evt.cards2);//.filterInD("d")
                    }
                }));
                return cards;
            },
            /* async cost(event, trigger, player) {
                const discarded = get.info("fyrhcangren").getCards(player).filter((c) => c.name == "sha");
                if (discarded?.length) {
                    const result = await player.chooseCardButton("藏刃：是否选择使用其中一张【杀】", discarded)
                        .set("filterButton", (button) => {
                            return get.player().hasUseTarget(button.link);
                        }).forResult();
                    event.result = {
                        bool: result?.bool,
                        cards: result?.links,
                    };
                }
            },
            async content(event, trigger, player) {
                player.addSkill("fyrhcangren_effect");
                const card = event.cards[0];
                const next = player.chooseUseTarget(card, true, false);
                next.set("fyrhcangren", true);
                await next;
            }, */
            async content(event, trigger, player) {
                const discarded = get.info("fyrhcangren").getCards(player).filter((c) => c.name == "sha").slice();
                while (discarded.some(card => player.hasUseTarget(card))) {
                    const result = await player.chooseCardButton("藏刃：是否选择使用其中一张【杀】", discarded)
                        .set("filterButton", (button) => {
                            return get.player().hasUseTarget(button.link);
                        }).forResult();
                    if (result.bool && result.links?.length) {
                        game.playAudio("../extension/永夜之境/audio/", 'fyrhcangren' + get.rand(1, 2) + '.mp3');
                        player.addSkill("fyrhcangren_effect");
                        const card = result.links[0];
                        discarded.remove(card);
                        const next = player.chooseUseTarget(card, true, false);
                        next.set("fyrhcangren", true);
                        await next;
                    } else {
                        break;
                    }
                }
            },
            subSkill: {
                effect: {
                    charlotte: true,
                    trigger: {
                        player: "useCardAfter",
                    },
                    filter(event, player) {
                        if (!event.targets || !event.targets[0]?.isIn()) return false;
                        return event.getParent("chooseUseTarget").fyrhcangren && !player.hasHistory('sourceDamage', evt => evt.card === event.card);
                    },
                    forced: true,
                    logTarget: "targets",
                    async content(event, trigger, player) {
                        const targets = trigger.targets;
                        const cards = trigger.cards?.filterInD();
                        if (cards?.length && targets?.length) {
                            const result = await player
                                .chooseTarget(`藏刃：将${get.translation(cards)}交给一名目标角色`, true, (card, player, target) => {
                                    return _status.event.targets.includes(target);
                                })
                                .set("targets", targets)
                                .set("ai", target => {
                                    const { player, cardx } = get.event();
                                    return cardx.reduce((sum, card) => {
                                        return sum + get.value(card, target) * get.attitude(player, target);
                                    }, 0);
                                })
                                .set("cardx", cards)
                                .forResult();
                            if (result?.bool && result.targets?.length) {
                                const target = result.targets[0];
                                await target.gain(cards, "gain2");
                            }
                        }

                    }
                }
            }
        },
        //秦桧
        fyrhchuailing: {
            audio: "ext:永夜之境/audio:3",
            trigger: {
                player: "phaseUseBegin",
            },
            filter(event, player) {
                return game.hasPlayer(current => player.hp <= current.hp && current.hasCard(card => current.canRecast(card), "he"));
            },
            async cost(event, trigger, player) {
                const targets = game.filterPlayer(current => player.hp <= current.hp && current.hasCard(card => current.canRecast(card), "he"));
                if (targets.length == 0) return false;
                event.result = await player
                    .chooseTarget(get.prompt2("fyrhchuailing"), [1, Infinity], (card, player, target) => {
                        return targets.includes(target);
                    }).set("ai", target => {
                        const player = get.player();
                        const att = get.attitude(player, target);
                        return 1;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const targets = event.targets;
                let allcards = [];
                for (let target of targets) {
                    const result1 = await target.chooseCard("重铸一张牌", 'he', true, lib.filter.cardRecastable)
                        .set("ai", (card) => {
                            //const { player } = get.event();
                            /* const current = _status.event.player; */
                            let att = get.attitude(target, player);
                            if (card.name == "shan" && att >= 0) {
                                return 10;
                            }
                            return 6 - get.value(card);
                        }).forResult();
                    if (result1.bool && result1.cards?.length) {
                        const card = result1.cards[0];
                        allcards.push(card);
                        await target.recast(card);
                    }
                }
                if (allcards.length) {
                    const shans = allcards.filter(card => get.name(card) == "shan");
                    if (shans.length) {
                        const number = Math.max(...shans.map(card => get.number(card)));
                        const maxshans = shans.filter(card => get.number(card) === number);
                        await player.gain(maxshans, 'gain2');
                        const cards = allcards.filter(card => get.number(card) < get.number(maxshans[0]));
                        while (cards.some(card => player.hasUseTarget(card))) {
                            const result = await player.chooseCardButton(`揣令：是否使用其中一张牌`, cards)
                                .set('filterButton', button => {
                                    return get.player().hasUseTarget(button.link);
                                }).set('ai', button => {
                                    return get.player().getUseValue(button.link);
                                }).forResult();
                            if (result?.bool && result.links?.length > 0) {
                                const card = result.links[0];
                                cards.remove(card);
                                player.$gain2(card, false);
                                await game.delayx();
                                await player.chooseUseTarget(card, true, false);
                            } else {
                                break;
                            }
                        }
                    }
                }
            },
        },
        fyrhhufu: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "useCardToBegin",
            },
            filter(event, player) {
                if (event?.card && get.suit(event.card) == null) {
                    return false;
                }
                if (event.targets.length == 0) {
                    return false;
                }
                const suits = get.suit(event.card);
                if (!player.hasCard(card => get.suit(card) == suits, "he")) {
                    return false;
                }
                return event.player.hp == 1 || event.player.hp == 2;
            },
            firstDo: true,
            async cost(event, trigger, player) {
                const suits = get.suit(trigger.card);
                const hassha = trigger.player.hp == 2;
                let str = `重铸一张${get.translation(suits)}牌，并令${get.translation(trigger.card)}`;
                if (hassha) {
                    str = `${str}当【杀】结算`;
                } else {
                    str = `${str}当【决斗】结算`;
                }
                const effect = (() => {
                    const att = get.attitude(player, trigger.player);
                    if (att >= 0 && trigger.targets.includes(trigger.player)) {
                        return 0;
                    }
                    return -att;
                })();
                event.result = await player.chooseCard(get.prompt("fyrhhufu"), str, 'he', lib.filter.cardRecastable)
                    .set('filterCard', (card, player) => {
                        return get.suit(card) == suits;
                    })
                    .set("effect", effect)
                    .set("ai", (card) => {
                        if (effect <= 0) {
                            return false;
                        }
                        return 6 - get.value(card);
                    }).forResult();
            },
            async content(event, trigger, player) {
                const hassha = trigger.player.hp == 2;
                await player.recast(event.cards[0]);
                const cardName = hassha ? 'sha' : 'juedou';
                if (lib.card[cardName]?.content) {
                    trigger.setContent(lib.card[cardName].content);
                    game.log(trigger.card, "的结算方式被", player, "改为", cardName);
                }
            },

        },
        //王澄
        fyrhweiyu: {
            audio: ["reenyuan1.mp3", "reenyuan2.mp3", 'rexuanhuo1.mp3'],
            mark: true,
            marktext: "誉",
            init(player) {
                if (!player.storage.fyrhweiyu) {
                    player.storage.fyrhweiyu = [1, 2, 3];
                }
            },
            intro: {
                markcount(storage, player) {
                    if (!storage || !storage.length) return "";
                    const map = { 1: "①", 2: "②", 3: "③" };
                    return map[storage[0]];
                },
                content(storage, player) {
                    if (!storage || !storage.length) return "";
                    const s = player.storage.fyrhweiyu;
                    let map = {
                        1: "①摸两张牌后",
                        2: "②失去两张牌后",
                        3: `③受到1点伤害后`
                    }
                    let str = " 当前生效：有角色<br>" + map[s[0]];
                    return str;
                },
            },
            //direct: true,
            trigger: {
                global: ["drawAfter", "gainAfter", "equipAfter", "addJudgeAfter", "loseAfter", "loseAsyncAfter", "addToExpansionAfter", "damageAfter"],
            },
            /* getIndex(event, player) {
                return game.filterPlayer(current => event.getl(current)?.hs?.length === 2).sortBySeat();
            },
            filter: (event, player, name, target) => target?.isIn(),
            logTarget: (event, player, name, target) => target, */
            forced: true,
            getIndex(event, player) {
                const s = player.storage.fyrhweiyu;
                if (!Array.isArray(s) || !s.length) return [];
                const state = s[0];
                return game.filterPlayer(current => {
                    if (state === 1) {
                        if (event.name === "draw") {
                            return current === event.player && event.num === 2;
                        }
                        if (event.name === "gain" && event.getParent().name === "draw") {
                            const gained = event.getg(current);
                            return gained && gained.length === 2;
                        }
                    }
                    else if (state === 2) {
                        if (["equip", "addJudge", "lose", "loseAsync", "addToExpansion"].includes(event.name)) {
                            return event.getl(current)?.hs?.length === 2;
                        }
                    }
                    else if (state === 3) {
                        if (event.name === "damage") {
                            return current === event.player && event.num === 1;
                        }
                    }
                    return false;
                }).sortBySeat();
            },
            filter: (event, player, name, target) => _status.currentPhase?.isIn(),
            logTarget: (event, player, name, target) => _status.currentPhase,
            async content(event, trigger, player) {
                const target = _status.currentPhase;
                const s = player.storage.fyrhweiyu || [];
                if (!Array.isArray(s) || !s.length) {
                    return;
                }
                if (s[0] == 1) {
                    s.push(s.shift());
                    const result = await player.chooseButton([
                        `未誉：选择一项`,
                        [[
                            ['draw', `摸两张牌`],
                            ['ppdraw', `令${get.translation(target)}失去两张牌`],
                        ], 'textbutton'],
                    ], true)
                        .set("filterButton", button => {
                            if (button.link == "ppdraw") {
                                return target.countCards('he');
                            }
                            return true;
                        })
                        .set('target', target)
                        .set('ai', button => {
                            let player = get.player();
                            if (button.link == "draw") {
                                return 10;
                            }
                            if (button.link == "ppdraw" && get.attitude(player, target) <= 0) {
                                return 3;
                            }
                            return 1;
                        }).forResult();
                    if (result.bool && result.links?.length) {
                        if (result.links[0] == "draw") {
                            await player.draw(2);
                        }
                        else {
                            const result = await target.chooseCard('选择要失去的牌', 'he', 2, true)
                                .set("ai", card => {
                                    return 6 - get.value(card);
                                })
                                .forResult();
                            if (result?.bool && result.cards?.length) {
                                const cards = result.cards;
                                await target.loseToDiscardpile(cards);
                            }
                        }
                    }
                }
                else if (s[0] == 2) {
                    s.push(s.shift());
                    const result = await player.chooseButton([
                        `未誉：选择一项`,
                        [[
                            ['lose', `失去两张牌`],
                            ['pplose', `令${get.translation(target)}摸两张牌`],
                        ], 'textbutton'],
                    ], true)
                        .set("filterButton", button => {
                            if (button.link == "lose") {
                                return player.countCards('he');
                            }
                            return true;
                        })
                        .set('target', target)
                        .set('ai', button => {
                            let player = get.player();
                            if (button.link == "pplose" && get.attitude(player, target) >= 0) {
                                return 3;
                            }
                            if (button.link == "lose" && player.countCards('he') > 4) {
                                return 1;
                            }
                            return 1;
                        }).forResult();
                    if (result.bool && result.links?.length) {
                        if (result.links[0] == "lose") {
                            const result = await player.chooseCard('选择要失去的牌', 'he', 2, true)
                                .set("ai", card => {
                                    return 6 - get.value(card);
                                })
                                .forResult();
                            if (result?.bool && result.cards?.length) {
                                const cards = result.cards;
                                await player.loseToDiscardpile(cards);
                            }
                        }
                        else {
                            await target.draw(2);
                        }
                    }
                }
                else if (s[0] == 3) {
                    s.push(s.shift());
                    const result = await player.chooseButton([
                        `未誉：选择一项`,
                        [[
                            ['damage', `受到1点伤害`],
                            ['reover', `令${get.translation(target)}回复1点体力`],
                        ], 'textbutton'],
                    ], true)
                        .set('target', target)
                        .set('ai', button => {
                            let player = get.player();
                            if (target.isDamaged()) {
                                if (button.link == "reover" && get.attitude(player, target) >= 0) {
                                    return 3;
                                }
                                if (button.link == "damage") {
                                    return 1;
                                }
                            }
                            if (button.link == "reover") {
                                return 2;
                            }
                            return 1;
                        }).forResult();
                    if (result.bool && result.links?.length) {
                        if (result.links[0] == "damage") {
                            await player.damage();
                        }
                        else {
                            await target.recover();
                        }
                    }
                }
                player.markSkill('fyrhweiyu');
            },
        },
        fyrhmobei: {
            audio: ['zhancai1.mp3', 'youtan1.mp3', 'youtan3.mp3', 'youtan4.mp3'],
            trigger: {
                target: "useCardToTargeted",
            },
            filter(event, player) {
                const hs = player.getCards('h').filter(card => card.name !== 'ying')
                return event.card && hs.length > 0;
            },
            popup: false,
            async cost(event, trigger, player) {
                const eff = get.effect(player, trigger.card, trigger.player, player);
                const s = player.storage.fyrhweiyu || [];
                const num = s[0];
                let aiTargetNum;
                if (eff > 0) {
                    aiTargetNum = num;
                } else {
                    aiTargetNum = (num === 1) ? 2 : 1;
                }
                const aiPickCards = player.getCards('he')
                    .sort((a, b) => get.value(a) - get.value(b)) // 按单卡价值从低到高排序
                    .slice(0, aiTargetNum);
                event.result = await player.chooseCard(`###${get.prompt('fyrhmobei')}###<div class="text center">将任意张手牌替换为【影】，令${get.translation(trigger.card)}对你无效</div>`, 'he', [1, Infinity])
                    .set("ai", card => {
                        const player = get.player();
                        if (aiPickCards.includes(card)) {
                            return 10 - get.value(card);
                        }
                        return 0;
                    })
                    .setHiddenSkill('fyrhmobei')
                    .forResult();
            },
            async content(event, trigger, player) {
                game.playAudio("skill", ["zhancai1", 'youtan1'].randomGet());
                const s = player.storage.fyrhweiyu || [];
                const num = s[0];
                const cards = event.cards;
                await player.loseToDiscardpile(cards);
                const yingCards = lib.card.ying.getYing(cards.length);
                await player.gain(yingCards, "gain2");
                player.addShownCards(yingCards, "visible_fyrhmobei");
                let xiao = false;
                const result = await trigger.player
                    .choosePlayerCard(player, "h", [1, num], "visible", `###${get.prompt('fyrhmobei')}###<div class="text center">重铸${get.translation(player)}${num}张【影】，若失去所有【影】，${get.translation(trigger.card)}对你强行生效</div>`)
                    .set("filterButton", button => {
                        const card = button.link;
                        const player = get.event().getParent().target;
                        return get.name(card) == 'ying' && lib.filter.cardRecastable(button.link, player);
                    })
                    .set('num', num)
                    .set("ai", button => {
                        const card = button.link;
                        const player = _status.event.player;
                        const targetPlayer = get.event().getParent().target;
                        const count = ui.selected.buttons.length;
                        if (get.attitude(player, targetPlayer) >= 0) {
                            return Math.random();
                        }
                        return Math.random();
                    })
                    .forResult();
                if (result.bool && result.cards?.length) {
                    await player.recast(result.cards);
                    const hs = player.getCards('h').filter(card => card.name == 'ying');
                    if (!hs.length) {
                        xiao = true;
                        game.log(trigger.card, "不可被响应");
                        trigger.directHit.addArray(game.players);
                    }
                }
                if (!xiao) {
                    game.playAudio("skill", "youtan" + get.rand(3, 4));
                    trigger.getParent().excluded.add(player);
                    game.log(trigger.card, "对", player, "无效");
                }
            },
            mod: {
                ignoredHandcard(card, player) {
                    if (card.hasGaintag("visible_fyrhmobei")) {
                        return true;
                    }
                },
                cardDiscardable(card, player, name) {
                    if (name == 'phaseDiscard' && card.hasGaintag("visible_fyrhmobei")) {
                        return false;
                    }
                },
            }
        },
        //诸葛均
        fyrhgenghuang: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: ["drawBegin"],
            },
            filter(event, player) {
                return event.num > 0 && event.getParent(2).name != "fyrhgenghuang";
            },
            //usable: 1,
            check(event, player) {
                return player.countCards("hej") > 2;
            },
            async content(event, trigger, player) {
                trigger.num--;
                const result = await player.judge((card) => {
                    return 0;
                }).forResult();
                //const result = await player.judge().forResult();
                if (result?.color) {
                    const cards = player.getCards("hej").filter(c => get.color(c) == result.color);
                    trigger.num += cards.length;
                }
            }
        },
        fyrhbisao: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: ["discardAfter"],
            },
            filter(event, player) {
                return player.countCards('he') && event.getParent(2).name != "fyrhbisao";
            },
            prompt2(event, player) {
                return `多弃置一张并进行判定，然后使用弃牌中与判定颜色相同的牌`;
            },
            check(event, player) {
                return event.cards?.length > 3;
            },
            //usable: 1,
            async content(event, trigger, player) {
                const result1 = await player.chooseToDiscard('he', true).forResult();
                if (result1.bool && result1.cards?.length) {
                    let allcards = trigger.cards.concat(result1.cards);
                    const result = await player.judge((card) => {
                        return 0;
                    }).forResult();
                    if (result?.color) {
                        const cards = allcards.filter(c => get.color(c) == result.color);
                        if (cards.length) {
                            while (cards.some(card => player.hasUseTarget(card))) {
                                const result = await player.chooseCardButton(`敝扫：是否使用其中一张牌`, cards)
                                    .set('filterButton', button => {
                                        return get.player().hasUseTarget(button.link);
                                    }).set('ai', button => {
                                        return get.player().getUseValue(button.link);
                                    }).forResult();
                                if (result?.bool && result.links?.length > 0) {
                                    const card = result.links[0];
                                    cards.remove(card);
                                    player.$gain2(card, false);
                                    await game.delayx();
                                    await player.chooseUseTarget(card, true, false);
                                } else {
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        },
        fyrhshouzhen: {
            audio: "ext:永夜之境/audio:2",
            init(player) {
                player.addSkill('fyrhshouzhen_effect');
            },
            trigger: {
                player: "judge",
            },
            filter(event, player) {
                return player.getStorage('fyrhshouzhen_effect').length;
            },
            async cost(event, trigger, player) {
                let storage = player.getStorage('fyrhshouzhen_effect');
                let str = '你的' + (trigger.judgestr || '') + '判定牌为' + get.translation(trigger.player.judging[0]) + `，是否修改为${get.translation(storage)}？`;
                const result = await player.chooseControl(storage.toString(), 'cancel2').set('prompt', str).set('ai', function () {
                    let judging = _status.event.judging;
                    let trigger = _status.event.getTrigger();
                    let res1 = trigger.judge(judging);
                    let list = lib.suit.slice(0);
                    let attitude = get.attitude(player, trigger.player);
                    if (attitude == 0) return 0;
                    let getj = function (suit) {
                        return trigger.judge({
                            name: get.name(judging),
                            nature: get.nature(judging),
                            suit: suit,
                            number: get.number(judging),
                        })
                    };
                    list.sort(function (a, b) {
                        return (getj(b) - getj(a)) * Math.sign(attitude);
                    });
                    if ((getj(list[0]) - res1) * attitude > 0) return list[0];
                    return 'cancel2';
                }).set('judging', trigger.player.judging[0]).forResult();
                event.result = {
                    bool: result?.control && result.control !== 'cancel2',
                    cost_data: result?.control,
                };
            },
            async content(event, trigger, player) {
                const suit = event.cost_data;
                player.popup(suit + 2);
                game.log(player, '将判定结果改为了', '#y' + get.translation(suit + 2));
                trigger.fixedResult = {
                    suit: suit,
                    color: get.color({ suit: suit }),
                };
            },
            subSkill: {
                effect: {
                    trigger: {
                        player: "judgeEnd",
                    },
                    firstDo: true,
                    silent: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        await player.setStorage('fyrhshouzhen_effect', get.suit(trigger.result.card), true);
                    },
                    marktext: '守',
                    intro: {
                        content(storage) {
                            return `上次判定结果为${get.translation(storage)}`;
                        },
                    }
                }
            },
            ai: {
                rejudge: true,
                tag: {
                    rejudge: 0.3,
                },
            },
        },
        //陈到
        fyrhwanglie: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => "ext:永夜之境/audio/fyrhwanglie" + (typeof index === "number" ? index : get.rand(1, 3)) + ".mp3",
            trigger: {
                //global: "phaseAfter",
                player: "phaseAfter",
            },
            filter(event, player) {
                return !event.skill;
            },
            forced: true,
            getNum(player) {
                return game.countPlayer(current => {
                    const history = current.getHistory("useCard");
                    return history.length;
                });
            },
            async content(event, trigger, player) {
                let num = get.info('fyrhwanglie')?.getNum(player);
                _status.fyrhwanglie_limit = num;
                game.log('本回合使用牌数为', num);
                game.addGlobalSkill('fyrhwanglie_effect');
                let next = player.insertPhase();
                next.skill = 'fyrhwanglie';
                next.fyrhwanglie_extra = true;
                const targets = game.players.slice(0);
                targets.forEach(target => target.markSkill('fyrhwanglie_effect'));
            },
            subSkill: {
                effect: {
                    mark: true,
                    marktext: "禁",
                    intro: {
                        markcount(storage, player) {
                            return _status.fyrhwanglie_limit;
                        },
                        content(storage) {
                            return `全场角色还可使用<span class='text text-danger'>${_status.fyrhwanglie_limit}</span>张牌`;
                        },
                    },
                    charlotte: true,
                    onremove: true,
                    trigger: {
                        player: ["useCard0", "phaseAfter"],
                    },
                    filter(event, player) {
                        if (event.name === "phaseAfter") {
                            return event.fyrhwanglie_extra;
                        }
                        return _status.fyrhwanglie_limit !== undefined;
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    async content(event, trigger, player) {
                        const targets = game.players.slice(0);
                        if (event.triggername == "phaseAfter") {
                            targets.forEach(target => target.unmarkSkill('fyrhwanglie_effect'));
                            delete _status.fyrhwanglie_limit;
                            game.removeGlobalSkill('fyrhwanglie_effect');
                        } else {
                            _status.fyrhwanglie_limit--;
                            targets.forEach(target => target.markSkill('fyrhwanglie_effect'));
                            if (_status.fyrhwanglie_limit <= 0) {
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhwanglie' + get.rand(4, 5) + '.mp3');
                                game.log("全场使用牌数已达上限，无法再使用任何牌");
                            }
                        }

                    },
                    mod: {
                        cardEnabled(card, player) {
                            if (_status.fyrhwanglie_limit !== undefined && _status.fyrhwanglie_limit > 0) {
                                return;
                            }
                            if (get.itemtype(card) == "card" && get.position(card) == "h") {
                                return false;
                            }
                            if (card.cards && (card.cards || []).some((i) => get.position(i) == "h")) {
                                return false;
                            }
                        },
                        cardSavable() {
                            return lib.skill.fyrhwanglie.subSkill.effect.mod.cardEnabled.apply(this, arguments);
                        },
                    },
                }
            }
        },
        //张修
        fyrhfujie: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => "ext:永夜之境/audio/fyrhfujie" + (typeof index === "number" ? index : get.rand(1, 2)) + ".mp3",
            enable: "chooseToUse",
            usable: 1,
            viewAsFilter(player) {
                const cards = player.getCards("he", card => player.canRecast(card));
                if (cards.length < 2) return false;

                let nums = cards.map(card => get.number(card, player)).filter(n => n > 0);
                nums = [...new Set(nums)].sort((a, b) => a - b);
                for (let i = 1; i < nums.length; i++) {
                    if (nums[i] - nums[i - 1] === 1) {
                        return true;
                    }
                }
                return false;
            },
            filterCard(card, player) {
                const cards = ui.selected?.cards.slice();
                cards.push(card);
                if (cards.length > 1) {
                    const nums = cards.map(card => get.number(card, player)).sort((a, b) => a - b);
                    for (let i = 1; i < nums.length; i++) {
                        const diff = nums[i] - nums[i - 1];
                        if (diff != 1) {
                            return false;
                        }
                    }
                }
                return player.canRecast(card);
            },
            filterTarget(card, player, target) {
                if (!card) {
                    card = get.card();
                }
                return lib.filter.targetEnabled2(card, player, target);
            },
            complexCard: true,
            selectCard: [2, Infinity],
            selectTarget() {
                return [1, ui.selected.cards.length];
            },
            position: "he",
            check(card) {
                return 6 - get.value(card);
            },
            viewAs: {
                name: "tao",
                isCard: true,
                suit: "none",
                number: null,
                storage: {
                    fyrhfujie: true,
                }
            },
            ignoreMod: true,
            log: false,
            popname: true,
            ignoreMod: true,
            log: false,
            async precontent(event, trigger, player) {
                const { cards } = event.result;
                player.logSkill("fyrhfujie");
                await player.recast(cards);
                event.result.card = get.autoViewAs({ name: "tao", isCard: true, storage: { fyrhfujie: cards } });
                event.result.cards = [];
                event.getParent().oncard = function () {
                    const { card } = get.event();
                    player
                        .when("useCardAfter")
                        .filter(evt => evt.card == card)
                        .step(async (event, trigger, player) => {
                            const { targets, card } = trigger;
                            const cards = card.storage.fyrhfujie;
                            const num = cards.length;
                            const nums = cards.map(i => get.number(i)).sort((a, b) => a - b);
                            player.line(targets.filter(target => target.hp >= num));
                            await game.doAsyncInOrder(targets.filter(target => target.hp >= num), async target => {
                                const resultx = await target
                                    .chooseCard(`符节：重铸一张点数在[${nums[0]},${nums[nums.length - 1]}]之间的牌或取消受到2点雷电伤害`, "he", (card, player) => {
                                        return player.canRecast(card) && get.event().nums.includes(get.number(card));
                                    })
                                    .set("nums", nums)
                                    .set("ai", card => 7.5 - get.value(card))
                                    .forResult();
                                if (resultx?.cards?.length) {
                                    const { cards } = resultx;
                                    await target.recast(cards);
                                }
                                else {
                                    game.playAudio("../extension/永夜之境/audio/", 'fyrhfujie' + get.rand(3, 4) + '.mp3');
                                    await target.damage(2, "thunder");
                                }
                            })
                        })
                }
            },
            mod: {
                cardEnabled2(card, player) {
                    if (_status._fyrhfujie_check) {
                        return;
                    }
                    const event = get.event();
                    if (!event || event.name !== "chooseToUse" || !card?.storage?.fyrhfujie) {
                        return;
                    }
                    _status._fyrhfujie_check = true;
                    const bool = game.hasPlayer(target => lib.filter.targetEnabled2(card, player, target));
                    delete _status._fyrhfujie_check;
                    if (bool) {
                        return true;
                    }
                },
                cardEnabled(card, player) {
                    if (_status._fyrhfujie_check) {
                        return;
                    }
                    const event = get.event();
                    if (!event || event.name !== "chooseToUse" || !card?.storage?.fyrhfujie) {
                        return;
                    }
                    _status._fyrhfujie_check = true;
                    const bool = game.hasPlayer(target => lib.filter.targetEnabled2(card, player, target));
                    delete _status._fyrhfujie_check;
                    if (bool) {
                        return true;
                    }
                },
                playerEnabled(card, player, target) {
                    if (_status._fyrhfujie_check) {
                        return;
                    }
                    const event = get.event();
                    if (!event || event.name !== "chooseToUse" || !card?.storage?.fyrhfujie) {
                        return;
                    }
                    _status._fyrhfujie_check = true;
                    const bool = lib.filter.targetEnabled2(card, player, target);
                    delete _status._fyrhfujie_check;
                    if (bool) {
                        return true;
                    }
                },
            },
            locked: false,
            ai: {
                order(item, player) {
                    return 10;
                },
                result: {
                    target(player, target) {
                        if (target.isDamaged()) {
                            return -1;
                        }
                    }
                },
            }
        },
        fyrhxuzhong: {
            audio: "ext:永夜之境/audio:2",
            enable: "phaseUse",
            async content(event, trigger, player) {
                const cards = get.cards(3, true);
                await player.viewCards(`牌堆顶${get.cnNumber(cards.length)}张牌`, cards);
                const nums = player.getCards("h").map(i => get.number(i)).unique().sort((a, b) => a - b);
                const gain = cards.filter(card => {
                    const number = get.number(card);
                    return !nums.includes(number) && number >= nums[0] && number <= nums[nums.length - 1];
                })
                if (gain.length) {
                    game.log(player, `获得了${get.cnNumber(gain.length)}张牌`);
                    await player.gain(gain, "draw");
                }
                else {
                    await player.loseHp();
                    await player.gain(cards, "gain2");
                    player.tempBanSkill('fyrhxuzhong');
                }
            },
            ai: {
                order(item, player) {
                    return 6;
                },
                result: {
                    player(player, target) {
                        if (player.hp > 1 || player.countCards('h', 'tao')) {
                            return 1;
                        }
                    }
                },
            },
        },
        //秦舞阳
        fyrhbawu: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhbawu${index}.mp3` : 2),
            comboSkill: true,
            mod: {
                aiOrder(player, card, num) {
                    if (typeof card == "object") {
                        const evt = lib.skill.dcjianying.getLastUsed(player);
                        //if (evt?.card && get.type(evt.card) == "basic" && !evt.fyrhbawu && get.is.damageCard(card)) {
                        if (evt?.card && !evt.fyrhbawu && !get.is.damageCard(card) && get.type(evt.card) == "basic") {
                            return num + 10;
                        }
                    }
                },
            },
            trigger: {
                player: "useCard",
            },
            filter(event, player) {
                const { card } = event;
                if (!get.is.damageCard(card)) {
                    return false;
                }
                const evt = lib.skill.dcjianying.getLastUsed(player, event);
                if (!evt || !evt.card || evt.fyrhbawu) {
                    return false;
                }
                return get.type(evt.card) == "basic" && event.targets.length > 0;
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
                trigger.set('fyrhbawu', true);
                const targets = trigger.targets;
                if (!player.isLinked()) {
                    const result = await player
                        .chooseTarget(get.prompt2('fyrhbawu'), true, (card, player, target) => {
                            return targets.includes(target);
                        })
                        .set("ai", target => {
                            const player = get.player();
                            return -get.attitude(player, target);
                        })
                        .forResult();
                    if (result.bool && result.targets?.length) {
                        player.logSkill("fyrhbawu", null, null, null, [get.rand(1, 2)]);
                        const target = result.targets[0];
                        await player.link(true);
                        if (target.countDiscardableCards(player, "he")) {
                            await player.discardPlayerCard(target, "he", true);
                        }
                    }
                } else {
                    //await player.chooseToDiscard('h', true);
                    player.logSkill("fyrhbawu", null, null, null, [get.rand(3, 4)]);
                    await player.draw();
                    await player.link(false);
                }
            },
            init(player, skill) {
                player.addSkill(skill + "_mark");
            },
            onremove(player, skill) {
                player.removeSkill(skill + "_mark");
            },
            subSkill: {
                mark: {
                    init(player, skill) {
                        const evt = lib.skill.dcjianying.getLastUsed(player);
                        if (evt?.card && get.type(evt.card) == "basic" && !evt.fyrhbawu) {
                            player.addTip(skill, "霸武 可连击");
                        }
                    },
                    onremove(player, skill) {
                        player.removeTip(skill);
                    },
                    charlotte: true,
                    trigger: {
                        player: ["useCard1", "useCardAfter"],
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    async content(event, trigger, player) {
                        if (event.triggername == "useCard1") {
                            if (get.type(trigger.card) == "basic") {
                                player.addTip(event.name, "霸武 可连击");
                                player.setStorage('fyrhweijie', true);
                            } else {
                                player.removeTip(event.name);
                                player.setStorage('fyrhweijie', false);
                            }
                        } else if (trigger.fyrhbawu) {
                            player.removeTip(event.name);
                            player.setStorage('fyrhweijie', false);
                        }
                    },
                }
            }
        },
        fyrhweijie: {
            audio: "ext:永夜之境/audio:4",
            enable: "chooseToUse",
            filter(event, player) {
                const canJuedou = player.getStorage('fyrhweijie', false) == true;
                const canSha = player.isLinked();
                if (canJuedou && canSha) { return false; }
                let flag = false;
                if (canSha) {
                    flag = flag || event.filterCard({ name: "sha", isCard: true, storage: { fyrhweijiex: true } }, player, event);
                }
                if (canJuedou) {
                    flag = flag || event.filterCard({ name: "juedou", isCard: true, storage: { fyrhweijiex: true } }, player, event);
                }
                return flag;
            },
            chooseButton: {
                dialog(event, player) {
                    const canJuedou = player.getStorage('fyrhweijie', false) == true;
                    const canSha = player.isLinked();
                    /* const list = [];
                    if (canSha && event.filterCard({ name: "sha", isCard: true, storage: { fyrhweijiex: true } }, player, event)) {
                        list.push(['基本', '', 'sha']);
                    }
                    if (canJuedou && event.filterCard({ name: "juedou", isCard: true, storage: { fyrhweijiex: true } }, player, event)) {
                        list.push(['锦囊', '', 'juedou']);
                    }
                    return ui.create.dialog("巍阶", [list, "vcard"]); */
                    const list = get
                        .inpileVCardList(info => {
                            const name = info[2];
                            if (name === "sha") {
                                return canSha;
                            }
                            if (name === "juedou") {
                                return canJuedou;
                            }
                            return false;
                        })
                    return ui.create.dialog("巍阶", [list, "vcard"]);

                },
                filter(button, player) {
                    let evt = _status.event.getParent();
                    return evt.filterCard(
                        {
                            name: button.link[2],
                            nature: button.link[3],
                            storage: { fyrhweijiex: true }
                        },
                        player,
                        evt
                    );
                },
                check(button) {
                    const player = get.event().player;
                    return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                },
                backup(links, player) {
                    return {
                        filterCard: () => false,
                        selectCard: -1,
                        popname: true,
                        log: false,
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],
                            isCard: true,
                            storage: {
                                fyrhweijiex: true,
                            },
                        },
                        async precontent(event, trigger, player) {
                            player.logSkill("fyrhweijie");
                        }
                    };
                },
                prompt(links, player) {
                    return "视为使用一张无次数限制的 " + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】";
                },
            },
            mod: {
                cardUsable(card, player, num) {
                    if (card?.storage?.fyrhweijiex) {
                        return Infinity;
                    }
                },
            },
            ai: {
                order(item, player) {
                    return Math.max(get.order({ name: "sha" }), get.order({ name: "juedou" })) + 0.2;
                },
                result: {
                    player: 1,
                },
            },
        },
        //冯习，张南
        fyrhxiejian: {
            audio: "ext:永夜之境/audio:3",
            init(player, skill) {
                if (!player.storage[skill]) {
                    player.storage[skill] = 0;
                }
            },
            enable: "chooseToUse",
            filter(event, player) {
                const x = (player.storage.fyrhxiejian || 0) + 1;
                /* const hasTarget = game.hasPlayer(current => current.countCards("h") % x === 0);
                if (!hasTarget) { return false; }
                return get
                    .inpileVCardList(info => {
                        const name = info[2];
                        if (name != "sha" && name != "tao") {
                            return false;
                        }
                        return get.type(name) == "basic";
                    })
                    .some(card => player.hasCard(cardx => event.filterCard({ name: card[2], nature: card[3], cards: [cardx], storage: { xiejianx: true } }, player, event), "hes")); */
                const validTargets = game.filterPlayer(current => current.countCards("h") % x === 0);
                if (validTargets.length === 0) {
                    return false;
                }
                return player.hasCard(cardx => {
                    return get.inpileVCardList(info => {
                        const name = info[2];
                        return (name === "sha" || name === "tao") && get.type(name) === "basic";
                    }).some(info => {
                        const vcard = get.autoViewAs({ name: info[2], nature: info[3], isCard: true, cards: [cardx], storage: { xiejianx: true } });
                        if (!event.filterCard(vcard, player, event)) { return false; }
                        return validTargets.some(target => player.canUse(vcard, target, false));
                    });
                }, "hes");
            },
            chooseButton: {
                dialog(event, player) {
                    /* const list = get
                        .inpileVCardList(info => {
                            const name = info[2];
                            if (name != "sha" && name != "tao") {
                                return false;
                            }
                            return get.type(name) == "basic";
                        })
                        .filter(card =>
                            player.hasCard(cardx => event.filterCard({ name: card[2], nature: card[3], cards: [cardx] }, player, event), "hes")
                        );
                    return ui.create.dialog("协艰", [list, "vcard"]); */
                    const list = get.inpileVCardList(info => {
                        const name = info[2];
                        if (name === "sha") {
                            return event.filterCard({ name: "sha", isCard: true, storage: { xiejianx: true } }, player, event);
                        }
                        if (name === "tao") {
                            return game.hasPlayer(current => current.isDamaged());
                        }
                        return false;
                    });
                    return ui.create.dialog("协艰", [list, "vcard"]);
                },
                filter(button, player) {
                    return true;
                },
                check(button) {
                    if (_status.event.getParent().type != "phase") {
                        return 1;
                    }
                    const player = get.event().player,
                        value = player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    if (button.link[2] == "sha" && player.getHistory("useCard", evt => get.type(evt.card) == "basic").length) {
                        if (value > 0) {
                            return value + 20;
                        }
                    }
                    return value;
                },
                backup(links, player) {
                    const cardName = links[0][2];
                    return {
                        audio: 'fyrhxiejian',
                        filterCard: true,
                        popname: true,
                        ignoreMod: true,
                        selectTarget: 1,
                        filterTarget(card, player, target) {
                            const x = (player.storage.fyrhxiejian || 0) + 1;
                            if (target.countCards("h") % x !== 0) {
                                return false;
                            }
                            if (cardName === "tao") {
                                return target.isDamaged();
                            } else if (cardName === "sha") {
                                return lib.filter.filterTarget({ name: "sha", isCard: true, storage: { xiejianx: true } }, player, target);
                            }
                            return false;
                        },
                        check(card) {
                            return 6 - get.value(card);
                        },
                        position: "hse",
                        viewAs: {
                            name: links[0][2], nature: links[0][3],
                            storage: {
                                xiejianx: true,
                            },
                        },
                        async precontent(event, trigger, player) {
                            player.when({ player: "useCardAfter" })
                                .filter(evt => evt.getParent() == event.getParent())
                                .step(async (event, trigger, player) => {
                                    const target = trigger.targets[0];
                                    const count = (player.storage.fyrhxiejian || 0) + 1;
                                    if (target?.isAlive()) {
                                        const result = await target.chooseToDiscard([1, Infinity], '协艰：弃置至少一张牌', 'he', true)
                                            .set("ai", (card) => {
                                                return -get.useful(card);
                                            }).forResult();
                                        if (result.bool && result.cards?.length) {
                                            const num = result.cards.length;
                                            //await player.gain(result.cards, 'gain2');
                                            player.storage.fyrhxiejian += num;
                                            player.markSkill('fyrhxiejian');
                                        }
                                    }
                                });
                        },
                        ai: {
                            skillTagFilter(player, tag, arg) {
                                if (get.event().skill != "fyrhxiejian_backup") {
                                    return false;
                                }
                                return arg && arg.card && arg.card.name == "sha";
                            },
                        },
                    };
                },
                prompt(links, player) {
                    return "将一张牌当作" + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】对目标使用";
                },
            },
            hiddenCard(player, name) {
                if (name !== "sha" && name !== "tao") {
                    return false;
                }
                if (player.getStat("skill").fyrhxiejian) {
                    return false;
                }
                return player.countCards("hes") && lib.inpile.includes(name);
            },
            locked: false,
            mod: {
                targetInRange(card) {
                    if (card?.storage?.xiejianx) {
                        return true;
                    }
                },
                cardUsable(card, player, num) {
                    if (card?.storage?.xiejianx) {
                        return Infinity;
                    }
                },
                cardEnabled(card, player) {
                    if (card.name === "tao" && card?.storage?.xiejianx) {
                        return true;
                    }
                },
            },
            mark: true,
            marktext: "艰",
            intro: {
                markcount(storage, player) {
                    return (storage || 0) + 1;
                },
                content(storage, player) {
                    const x = (storage || 0) + 1;
                    return `本局已因此弃置${storage || 0}张牌<br>当前<font color=#FFD700>X</font>的值为${x}`;
                },
            },
            ai: {
                fireAttack: true,
                respondSha: true,
                skillTagFilter(player, tag, arg) {
                    if (arg == "respond") {
                        return false;
                    }
                    if (player.getStat("skill").fyrhxiejian || !player.countCards("hes")) {
                        return false;
                    }
                },
                order(item, player) {
                    if (player && _status.event.type == "phase" && player.hasValueTarget({ name: "sha" }, true, true)) {
                        let max = 0,
                            names = get.inpileVCardList(info => {
                                const name = info[2];
                                if (name != "sha" && name != "jiu") {
                                    return false;
                                }
                                return get.type(name) == "basic";
                            });
                        names = names.map(namex => {
                            return { name: namex[2], nature: namex[3] };
                        });
                        names.forEach(card => {
                            if (player.getUseValue(card) > 0) {
                                let temp = get.order(card);
                                if (card.name == "jiu") {
                                    let cards = player.getCards("hs", cardx => get.value(cardx) < 8);
                                    cards.sort((a, b) => get.value(a) - get.value(b));
                                    if (!cards.some(cardx => get.name(cardx) == "sha" && !cards.slice(0, 2).includes(cardx))) {
                                        temp = 0;
                                    }
                                }
                                if (temp > max) {
                                    max = temp;
                                }
                            }
                        });
                        if (max > 0) {
                            max += 15;
                        }
                        return max;
                    }
                    return 0.5;
                },
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 1;
                    },
                },
            },
            subSkill: {
                backup: {
                },
                effect: {

                },
            }
        },
        fyrhpijing: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => "ext:永夜之境/audio/fyrhpijing" + (typeof index === "number" ? index : get.rand(1, 2)) + ".mp3",
            trigger: {
                player: "phaseJieshuBegin",
            },
            filter(event, player) {
                const x = player.getStorage('fyrhxiejian') || 0;
                return x > 0;
            },
            async cost(event, trigger, player) {
                const num = player.getStorage('fyrhxiejian') || 0;
                event.result = player.chooseBool(get.prompt("fyrhpijing"), `<div class="text center">将${get.poptip('fyrhxiejian')}的X减至1并摸${num}张牌</div>`)
                    .set("ai", () => get.event().choice)
                    .set(
                        "choice",
                        (() => {
                            let player = get.player();
                            const x = player.getStorage('fyrhxiejian');
                            if (x > 1) {
                                return true;
                            }
                            return false;
                        })()
                    )
                    .forResult();
            },
            async content(event, trigger, player) {
                let num = player.getStorage('fyrhxiejian') || 0;
                await player.draw(num);
                player.setStorage('fyrhxiejian', 0, true);
                player.markSkill('fyrhxiejian');
                player.addTempSkill('fyrhpijing_effect', { player: "phaseBegin" });
            },
            subSkill: {
                effect: {
                    trigger: {
                        global: "phaseBegin",
                    },
                    filter(event, player) {
                        if (_status.currentPhase == player) {
                            return false;
                        }
                        return !player.hasSkillTag("noCompareSource") && player.canCompare(_status.currentPhase);
                    },
                    direct: true,
                    async content(event, trigger, player) {
                        const target = _status.currentPhase;
                        const result = await player.chooseBool(get.prompt("fyrhpijing"), `<div class="text center">与${get.translation(target)}拼点，若你拒绝或没赢其可对你使用一张【杀】</div>`)
                            .set("ai", () => get.event().choice)
                            .set(
                                "choice",
                                (() => {
                                    let player = get.player();
                                    const x = player.countCards('h');
                                    if (x > 3) {
                                        return -get.attitude(player, target);
                                    }
                                    return false;
                                })()
                            )
                            .forResult();
                        if (result.bool) {
                            game.playAudio("../extension/永夜之境/audio/", 'fyrhpijing' + get.rand(3, 4) + '.mp3');
                            player.line(target);
                            const result1 = await player.chooseToCompare(target).forResult();
                            if (result1?.bool) {
                                if (result1.winner !== player) {
                                    await target.chooseToUse(
                                        function (card, player, event) {
                                            if (get.name(card) != "sha") {
                                                return false;
                                            }
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        `是否对${get.translation(player)}使用一张【杀】`,
                                    ).set("targetRequired", true)
                                        .set("filterTarget", function (card, player, target) {
                                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) {
                                                return false;
                                            }
                                            return lib.filter.filterTarget.apply(this, arguments);
                                        }).set("sourcex", player)
                                        .forResult();
                                }
                            }
                        } else {
                            await target.chooseToUse(
                                function (card, player, event) {
                                    if (get.name(card) != "sha") {
                                        return false;
                                    }
                                    return lib.filter.filterCard.apply(this, arguments);
                                },
                                `是否对${get.translation(player)}使用一张【杀】`,
                            ).set("targetRequired", true)
                                .set("complexSelect", true)
                                .set("complexTarget", true)
                                .set("filterTarget", function (card, player, target) {
                                    if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) {
                                        return false;
                                    }
                                    return lib.filter.filterTarget.apply(this, arguments);
                                }).set("sourcex", player)
                                .forResult();
                        }
                    }

                }
            }
        },
        //王凌
        fyrhjidang: {
            audio: "xingqi",
            trigger: {
                player: "useCardToPlayered",
            },
            filter(event, player) {
                if (event.card.name !== 'sha') return false;
                return true;
            },
            async cost(event, trigger, player) {
                const targets = [player, trigger.target];
                if (targets.length == 0) return false;
                event.result = await player
                    .chooseTarget(get.prompt2("fyrhjidang"), (card, player, target) => {
                        return targets.includes(target);
                    }).set("ai", target => {
                        const player = get.player();
                        return -get.attitude(player, target);
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                let drawCount = 0;
                while (true) {
                    const result = await target.draw().forResult();
                    if (result?.bool) {
                        const card = result.cards[0];
                        drawCount++;
                        if (drawCount % 2 === 0) {
                            if (target.countDiscardableCards(player, 'he') > 0) {
                                await player.discardPlayerCard(target, 'he', 3, true);
                            }
                        }
                        if (drawCount % 5 === 0) {
                            await target.damage();
                        }
                        if (get.name(card) === 'sha') {
                            break;
                        }
                    }
                }
            },
        },
        fyrhzifu: {
            audio: "mibei",
            enable: 'phaseUse',
            position: "he",
            selectCard: 1,
            usable: 2,
            lose: false,
            discard: false,
            delay: false,
            filterCard(card, player, event) {
                if (get.name(card) !== "sha") {
                    return false;
                }
                return true;
            },
            filter(event, player) {
                return player.countCards("he", card => {
                    return get.name(card) == "sha";
                });
            },
            async content(event, trigger, player) {
                const card = event.cards[0];
                await player.lose(card, ui.special);
                // 重置卡牌状态
                card.fix();
                card.position = 'c';


                //将牌堆DOM转为数组
                let pileArray = Array.from(ui.cardPile.childNodes);
                //找第一张【闪】并插入
                let shanIndex = pileArray.findIndex(c => c.name === 'shan');
                // 计算插入位置：如果有【闪】，插在它后面（即它的下方）；如果没有，直接放牌堆底
                let insertPos = (shanIndex !== -1) ? shanIndex + 1 : pileArray.length;
                // 将剥离的【杀】正式插入牌堆数组
                pileArray.splice(insertPos, 0, card);
                game.log(player, '将', card, '置于了牌堆', shanIndex !== -1 ? '第一张【闪】之下' : '底');
                //寻找第一张【杀】并抽走非伤害牌
                let shaIndex = pileArray.findIndex(c => c.name === 'sha');
                let gainedCards = [];
                // 如果第一张杀不在牌堆最顶上（索引 > 0），说明它上面有牌可捞
                if (shaIndex > 0) {
                    let i = 0;
                    // 只遍历到这第一张【杀】之前的位置
                    while (i < shaIndex) {
                        let c = pileArray[i];
                        let isDamageCard = get.is.damageCard(c);
                        if (!isDamageCard) {
                            gainedCards.push(c);
                            pileArray.splice(i, 1); // 从牌堆数组中剔除这张牌
                            shaIndex--; // 因为拿走了一张牌，目标【杀】的位置自然往上提了 1 位
                        } else {
                            // 是【伤害牌】 -> 留在原位不动，看下一张
                            i++;
                        }
                    }
                }
                // 重新 appendChild 一遍，把DOM节点按顺序排列
                for (let i = 0; i < pileArray.length; i++) {
                    ui.cardPile.appendChild(pileArray[i]);
                }
                if (gainedCards.length > 0) {
                    game.log(player, '获得了牌堆第一张【杀】前的', gainedCards.length, '张非伤害牌');
                    await player.gain(gainedCards, 'gain2');
                } else {
                    game.log(player, '牌堆第一张【杀】前没有非伤害牌');
                }
            },
            ai: {
                order: 2,
                result: {
                    player: 1,
                }
            }

        },
        //曹植
        fyrhjiushi: {
            mod: {
                cardUsable(card, player, num) {
                    if (card.name == "jiu") {
                        return Infinity;
                    }
                },
            },
            //manualConfirm: true,
            audio: "ext:永夜之境/audio:2",
            enable: "chooseToUse",
            hiddenCard(player, name) {
                let usecards = player.getCards('h').filter(card => player.hasUseTarget(card));
                if (name !== "jiu") {
                    return false;
                }
                return !player.isTurnedOver() && usecards.length;
            },
            filter(event, player) {
                let usecards = player.getCards('h').filter(card => player.hasUseTarget(card));
                if (player.isTurnedOver() && !usecards.length) return false;
                return event.filterCard({ name: "jiu", isCard: true }, player, event);
            },
            chooseButton: {
                dialog(event, player) {
                    return ui.create.dialog(`酒诗：选择一项`,
                        [[
                            ['over', `将武将牌翻至背面`],
                            ['reduce', `重铸此时你能使用的所有牌`],
                        ], 'textbutton']
                    );
                },
                filter(button, player) {
                    let usecards = player.getCards('h').filter(card => player.hasUseTarget(card));
                    if (button.link == "reduce") {
                        return usecards.length > 0;
                    }
                    else {
                        return !player.isTurnedOver();
                    };
                },
                check(button) {
                    let player = get.player();
                    if (button.link == "over" && player.isTurnedOver()) {
                        return 4;
                    }
                    if (button.link == "reduce") {
                        return 3;
                    }
                    return 1;
                },
                backup(links, player) {
                    return {
                        audio: 'fyrhjiushi',
                        choice: links[0],
                        async content(event, trigger, player) {
                            if (_status.event.getParent(2).type == "dying") {
                                event.dying = player;
                                event.type = "dying";
                            }
                            let usecards = player.getCards('h').filter(card => player.hasUseTarget(card));
                            const { choice } = get.info(event.name);
                            if (choice == "over") {
                                await player.turnOver();
                            } else {
                                await player.recast(usecards);
                            }
                            await player.useCard({ name: "jiu", isCard: true }, player);
                        },
                    };
                },
            },
            subSkill: {
                backup: {

                }
            },
            ai: {
                save: true,
                skillTagFilter(player, tag, arg) {
                    return _status.event?.dying == player;
                },
                order: 5,
                result: {
                    player(player) {
                        let usecards = player.getCards('h').filter(card => player.hasUseTarget(card));
                        if (usecards.length > 0) {
                            return 2;
                        }
                        return 0;
                    },
                },
            }
            /* async content(event, trigger, player) {
                if (_status.event.getParent(2).type == "dying") {
                    event.dying = player;
                    event.type = "dying";
                }
                let usecards = player.getCards('h').filter(card => player.hasUseTarget(card));
                const result = await player.chooseButton([
                    `酒诗：选择一项`,
                    [[
                        ['over', `将武将牌翻至背面`],
                        ['reduce', `重铸此时你能使用的所有牌`],
                    ], 'textbutton'],
                ], true)
                    .set("filterButton", button => {
                        if (button.link == "reduce") {
                            return usecards.length > 0;
                        }
                        else {
                            return !player.isTurnedOver();
                        };
                    })
                    .set('ai', button => {
                        let player = get.player();
                        if (button.link == "over" && player.isTurnedOver()) {
                            return 4;
                        }
                        if (button.link == "reduce") {
                            return 3;
                        }
                        return 1;
                    }).forResult();
                if (result.bool && result.links?.length) {
                    if (result.links[0] == "over") {
                        await player.turnOver();
                    }
                    else {
                        await player.recast(usecards);
                    }
                    await player.useCard({ name: "jiu", isCard: true }, player);
                }
            }, */
        },
        fyrhluoying: {
            audio: "ext:永夜之境/audio:2",
            init(player, skill) {
                player.setStorage(skill, 7);
            },
            mark: true,
            marktext: "落",
            intro: {
                markcount(storage, player) {
                    return (storage || 0).toString();
                },
                content(storage, player) {
                    //return `${get.poptip('fyrhluoying')}可用牌数：` + (storage || 0).toString();
                    return `当前${get.poptip('fyrhluoying')}可用牌数：${storage || 0}`;
                }
            },
            trigger: {
                player: "phaseUseBegin",
            },
            popup: false,
            forced: true,
            filter(event, player) {
                let usecount = player.getStorage("fyrhluoying");
                return usecount > 0;
            },
            async content(event, trigger, player) {
                let usecount = player.getStorage("fyrhluoying");
                let used = 0;
                while (usecount > 0) {
                    const result = await player
                        .chooseToUse({
                            filterCard(card) {
                                return lib.filter.filterCard.apply(this, arguments);
                            },
                            prompt: `是否使用一张牌（还可使用${usecount}张）`,
                            addCount: false,
                        })
                        .forResult();
                    if (result && result.bool) {
                        usecount--;
                        used++;
                    } else {
                        break;
                    }
                }
                const newcount = used;
                player.logSkill('fyrhluoying');
                await player.setStorage('fyrhluoying', newcount, true);
            }
        },
        //司马颖
        fyrhbianshi: {
            audio: "ext:永夜之境/audio:3",
            logAudio: index => "ext:永夜之境/audio/fyrhbianshi" + (typeof index === "number" ? index : get.rand(1, 2)) + ".mp3",
            trigger: {
                global: "useCardAfter",
            },
            filter(event, player) {
                if (!event?.targets?.length) {
                    return false;
                }
                return event.targets.includes(player);
            },
            async cost(event, trigger, player) {
                if (game.countPlayer() < 2) {
                    return;
                }
                const result = await player.chooseTarget(
                    "是否发动【变势】：选择两名角色",
                    "弃置前者两张牌，令后者摸两张牌",
                    2,
                    (card, player2, target2) => {
                        if (ui.selected.targets.length) {
                            let targetx = ui.selected.targets[0];
                            return target2 !== targetx;
                        }
                        //return target2.countDiscardableCards(player, "he") > 0;
                        return true;
                    }
                ).set("targetprompt", ["弃牌", "摸牌"]).set("multitarget", true).set("ai", (target2) => {
                    let aiTargets = get.event().aiTargets;
                    if (aiTargets) {
                        return aiTargets[ui.selected.targets.length] == target2 ? 10 : 0;
                    }
                    return 0;
                }).set(
                    "aiTargets",
                    (() => {
                        let bestTargets = null;
                        let maxVal = 0;
                        for (let user2 of game.filterPlayer()) {
                            if (!user2.countDiscardableCards(player, "he")) continue;
                            for (let target2 of game.filterPlayer()) {
                                if (user2 === target2) continue;
                                let val = 0;
                                let att1 = get.attitude(player, user2);
                                let att2 = get.attitude(player, target2);
                                if (att1 <= 0) val += Math.abs(att1);
                                if (att2 > 0) val += att2;
                                if (val > maxVal) {
                                    maxVal = val;
                                    bestTargets = [user2, target2];
                                }
                            }
                        }
                        return bestTargets;
                    })()
                ).forResult();
                event.result = {
                    bool: result?.bool,
                    targets: result?.targets,
                };
            },
            async content(event, trigger, player) {
                let user = event.targets[0], target = event.targets[1];
                const getRelation = () => {
                    return Math.sign(user.countCards("h") - target.countCards("h"))
                };
                /* const getRelation = function() {
                    return Math.sign(user.countCards("h") - target.countCards("h"));
                }; */
                let relationBefore = getRelation();
                if (user.countDiscardableCards(player, "he")) {
                    await player.discardPlayerCard(2, user, "he", true);
                }
                await target.draw(2);
                let relationAfter = getRelation();
                let change = (relationBefore !== relationAfter);
                if (change && target?.isIn()) {
                    game.playAudio("../extension/永夜之境/audio/", 'fyrhbianshi' + [3] + '.mp3');
                    await user.chooseToUse(`是否对${get.translation(target)}使用一张【杀】`, { name: 'sha' })
                        .set("filterTarget", function (card, player, target) {
                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) {
                                return false;
                            }
                            return lib.filter.filterTarget.apply(this, arguments);
                        })
                        .set("targetRequired", true)
                        .set('sourcex', target);
                } else {
                    player.tempBanSkill("fyrhbianshi");
                }
            },
        },
        fyrhege: {
            audio: "fyrhpijing",
            enable: "phaseUse",
            usable: 1,
            manualConfirm: true,
            filter(event, player) {
                let num = get.info('fyrhege')?.getNum(player);
                return game.hasPlayer(current => {
                    return current.getCards('e').length > 0;
                }) && num > 0;
            },
            getNum(player) {
                let num = game.countPlayer(current => {
                    return current.hasHistory("lose", function (evt) {
                        return evt.cards2.length > 0;
                    });
                });
                return num;
            },
            async content(event, trigger, player) {
                let choiceList = [];
                for (let i of game.players.sortBySeat()) {
                    if (!i.countCards('e')) continue;
                    choiceList.add(`<div class="text center">${get.translation(i)}的装备区</div>`)
                    choiceList.add(i.getCards('e'));
                }
                let num = get.info('fyrhege')?.getNum(player);
                const result = await player.chooseButton([1, num], [`选择至多${num}张装备牌并令装备这些牌的角色将之收回`, ...choiceList], true)
                    .set('ai', (button) => {
                        let player = _status.event.player;
                        return get.equipValue(button.link, player);
                    }).forResult();
                if (result?.bool) {
                    const cards = result.links;
                    for (let card of cards) {
                        const owner = get.owner(card);
                        await owner.gain(card, 'gain2');
                    }
                }
            },
            ai: {
                order(item, player) {
                    return 2;
                },
                result: {
                    target: -1,
                },
            },
        },
        //严颜
        fyrhjuzhan: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhjuzhan${index}.mp3` : 2),
            trigger: {
                player: "useCardToPlayer",
                target: "useCardToTarget",
            },
            popup: false,
            filter(event, player) {
                if (event.name === "useCardToPlayer") {
                    let history = player.getRoundHistory('useCard', (evt) => {
                        return evt.targets && evt.targets.includes(event.target);
                    })
                    return event.target !== player && history.length > 1;
                } else {
                    let history = event.player.getRoundHistory('useCard', (evt) => {
                        return evt.targets && evt.targets.includes(player);
                    })
                    return event.player !== player && history.length > 1;
                }
            },
            logTarget(event, player) {
                return player == event.player ? event.target : event.player;
            },
            check(event, player) {
                const target = get.info("fyrhjuzhan").logTarget(event, player);
                let history = target.getRoundHistory('useCard', (evt) => {
                    return evt.targets && evt.targets.includes(player);
                })
                if (event.name === "useCardToTarget") {
                    return get.attitude(player, target) <= 0;
                }
                return history.length < 1;
            },
            prompt2(event, player) {
                const target = get.info("fyrhjuzhan").logTarget(event, player);
                return player == event.player ? `改为令${get.translation(target)}对你使用${get.translation(event.card)}` : `<div class="text center">获得${get.translation(target)}两张牌，并令${get.translation(event.card)}对你无效</div>`;
            },
            async content(event, trigger, player) {
                const target = get.info("fyrhjuzhan").logTarget(trigger, player);
                if (trigger.name == "useCardToPlayer") {
                    player.logSkill("fyrhjuzhan", target, null, null, [get.rand(3, 4)]);
                    trigger.getParent().excluded.add(target);
                    trigger.untrigger();
                    trigger.getParent().player = target;
                    await target.useCard(trigger.card, player);
                    game.log(target, "成为了", trigger.card, "的使用者");
                } else {
                    player.logSkill("fyrhjuzhan", target, null, null, [get.rand(1, 2)]);
                    if (target.countGainableCards(player, "he")) {
                        await player.gainPlayerCard(target, 2, "he");
                    }
                    trigger.getParent().excluded.add(player);
                    game.log(trigger.card, "对", player, "无效");
                }
            },
            ai: {
                effect: {
                    target(card, player, target) {
                        if (player === target) {
                            return;
                        }
                        if (
                            game.hasPlayer2(current => {
                                return current.hasHistory("useCard", evt => evt.player == current && evt.targets && evt.targets.includes(target));
                            })
                        ) {
                            return "zeroplayertarget";
                        }
                    },
                },
            }
        },
        fyrhqingye: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "loseAfter",
            },
            forced: true,
            filter(event, player) {
                if (event.player == player) {
                    return false;
                }
                return event.cards2.some(card => card.name == 'sha') && event.player !== _status.currentPhase;
            },
            async content(event, trigger, player) {
                const list = trigger.cards2.filter(card => card.name == 'sha');
                const target = trigger.player;
                if (list.length) {
                    target.addTempSkill('fyrhqingye_effect', { player: "phaseAfter" });
                    target.addMark('fyrhqingye_effect', list.length, false);
                }
            },
            subSkill: {
                effect: {
                    markimage: "image/card/sha.png",
                    intro: {
                        markcount(storage, player) {
                            return (storage || 0).toString();
                        },
                        content(storage, player) {
                            return "出杀上限-" + (storage || 0).toString();
                        },
                    },
                    charlotte: true,
                    onremove: true,
                    trigger: {
                        player: "useCard",
                    },
                    filter(event, player) {
                        if (!player.hasMark('fyrhqingye_effect')) {
                            return false;
                        }
                        return get.name(event.card) == 'sha' && player == _status.currentPhase;
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    async content(event, trigger, player) {
                        player.removeMark("fyrhqingye_effect", 1, false);
                    },
                    mod: {
                        cardUsable(card, player, num) {
                            if (card.name == "sha") {
                                let x = player.countMark('fyrhqingye_effect');
                                return num -= x;
                            }
                        },
                    }
                }
            }
        },
        //加尔加里
        fyrhroubo: {
            enable: "phaseUse",
            usable: 1,
            filterCard(card, player) {
                return card.name == 'sha';
            },
            filter(event, player) {
                return player.hasCard(c => { return !get.is.shownCard(c) && get.name(c) === "sha" }, "h");
            },
            lose: false,
            discard: false,
            delay: false,
            selectCard: [1, Infinity],
            filterTarget(card, player, target) {
                return player.canUse({ name: 'juedou', isCard: true }, target);
            },
            prompt: "明置任意张【杀】摸等量张牌，然后视为对目标使用【决斗】",
            check(card) {
                return 6 - get.value(card);
            },
            async content(event, trigger, player) {
                const cards = event.cards;
                const target = event.target;
                await player.addShownCards(cards, "visible_fyrhroubo");
                if (cards.length > 0) {
                    await player.draw(cards.length);
                }
                await player.useCard({ name: 'juedou', isCard: true }, target);
            },
            mod: {
                ignoredHandcard(card, player) {
                    if (get.is.shownCard(card) && get.name(card) === 'sha') {
                        const tagged = player.getCards('h', c => get.is.shownCard(c) && get.name(c) === 'sha');
                        // 按卡牌ID排序
                        tagged.sort((a, b) => a.cardid - b.cardid);
                        //只显示第一张牌
                        if (card !== tagged[0]) return true;
                    }
                },
                cardDiscardable(card, player, name) {
                    if (name === 'phaseDiscard' && get.is.shownCard(card) && get.name(card) === 'sha') {
                        const tagged = player.getCards('h', c => get.is.shownCard(c) && get.name(c) === 'sha');
                        tagged.sort((a, b) => a.cardid - b.cardid);
                        if (card !== tagged[0]) return false;
                    }
                },
                aiUseful(player, card, num) {
                    if (get.is.shownCard(card) && get.name(card) === 'sha') {
                        return 10;
                    }
                },
            },
            ai: {
                order(item, player) {
                    return Math.max(get.order({ name: "sha" }), get.order({ name: "juedou" })) + 0.2;
                },
                result: {
                    target: -1,
                },
            },
            group: ["fyrhroubo_tao", 'fyrhroubo_bundleDiscard'],
            subSkill: {
                tao: {
                    enable: ["chooseToUse"],
                    filterCard(card, player) {
                        return get.is.shownCard(card) && get.name(card) == 'sha';
                    },
                    filter(event, player) {
                        if (!player.hasCard(c => { return get.is.shownCard(c) && get.name(c) === "sha" }, "h")) {
                            return false
                        }
                        return event.type == 'dying' && event.dying && event.dying.hp <= 0;
                    },
                    selectCard() {
                        const player = _status.event.player;
                        if (!player) return [1, 1];
                        const num = player.getCards('h', c => get.is.shownCard(c) && get.name(c) === 'sha').length;
                        return [num, num];
                    },
                    viewAs: {
                        name: "tao"
                    },
                    filter(event, player) {
                        if (event.type !== 'dying') return false;
                        const taggedCount = player.getCards('h', c => get.is.shownCard(c) && get.name(c) === 'sha').length;
                        return taggedCount > 0;
                    },
                    prompt: "将所有明置的【杀】当做一张【桃】使用",
                    check(card) {
                        return 1;
                    },
                    ai: {
                        order: 1,
                        save: true,
                        result: {
                            player(player) {
                                if (_status.event.dying) {
                                    return get.attitude(player, _status.event.dying);
                                }
                                return 1;
                            },
                        },
                    },
                },
                bundleDiscard: {
                    trigger: { player: "discardBefore" },
                    forced: true,
                    silent: true,
                    popup: false,
                    firstDo: true,
                    filter(event, player) {
                        if (!event.getParent("phaseDiscard") || player !== event.player) return false;
                        return event.cards.some(c => get.is.shownCard(c) && get.name(c) === 'sha');
                    },
                    async content(event, trigger, player) {
                        const otherTagged = player.getCards('h', c => get.is.shownCard(c) && get.name(c) === 'sha' && !trigger.cards.includes(c));
                        if (otherTagged.length > 0) {
                            trigger.cards.addArray(otherTagged);
                        }
                    }
                }
            }
        },
        fyrhmianshu: {
            mod: {
                cardEnabled(card, player) {
                    const hiddenCards = player.getCards("h", card => !get.is.shownCard(card)).filter(card => {
                        return get.name(card) == "sha";
                    });
                    if ([card].concat(card.cards || []).some(cardx => get.itemtype(cardx) === 'card' && hiddenCards.includes(cardx))) {
                        return false;
                    }
                },
                cardRespondable(card, player) {
                    const showCards = player.getCards("h", card => get.is.shownCard(card)).filter(card => {
                        return get.name(card) == "sha";
                    });
                    if ([card].concat(card.cards || []).some(cardx => get.itemtype(cardx) === 'card' && showCards.includes(cardx))) {
                        return false;
                    }
                },
            },
            enable: "phaseUse",
            prompt(event, player) {
                if (player.getStorage("fyrhmianshu_mark", false) == true) {
                    return "失去本技能，视为对一名其他角色使用伤害+1且不可被响应的【杀】";
                }
                return "失去本技能，视为对自己使用伤害+1且不可被响应的【杀】";
            },
            popup: false,
            lose: false,
            discard: false,
            delay: false,
            selectCard: -1,
            filterTarget(card, player, target) {
                if (player.getStorage("fyrhmianshu_mark", false) == true) {
                    return target !== player;
                }
                return target == player;
            },
            async content(event, trigger, player) {
                player.removeSkill('fyrhmianshu');
                const target = event.targets[0];
                player.addTempSkill('fyrhmianshu_buff');
                await player.useCard({
                    name: 'sha',
                    isCard: true,
                    storage: { fyrhmianshux: true }
                }, target);

            },
            ai: {
                order: 8,
                result: {
                    target(player, target) {
                        return -3;
                    },
                },
            },
            group: ["fyrhmianshu_mark"],
            subSkill: {
                mark: {
                    onremove: true,
                    charlotte: true,
                    silent: true,
                    popup: false,
                    trigger: {
                        player: "dyingAfter",
                    },
                    async content(event, trigger, player) {
                        player.setStorage('fyrhmianshu_mark', true);
                        player.when({ player: "phaseBegin" }, false)
                            .assign({ firstDo: true })
                            .step(async (event, trigger, player) => {
                                player.setStorage('fyrhmianshu_mark', true);
                            })
                            .finish();
                    }
                },
                buff: {
                    charlotte: true,
                    trigger: { player: "useCard1" },
                    silent: true,
                    popup: false,
                    filter(event, player) {
                        return event.card.storage?.fyrhmianshux === true;
                    },
                    async content(event, trigger, player) {
                        trigger.baseDamage++;
                        trigger.directHit.addArray(game.filterPlayer());
                        game.log(trigger.card, "不可被响应且伤害+1");
                    }
                }
            }
        },
        //张辽
        fyrhtuxi: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: ["phaseDrawBegin2", "phaseDiscard"]
            },
            direct: true,
            preHidden: true,
            filter(event, player) {
                if (event.name == "phaseDraw" && !game.hasPlayer((target) => {
                    return target.countCards("h") > 0 && player != target;
                })) {
                    return false;
                }
                if (event.name == "phaseDiscard" && !player.countCards("he")) {
                    return false;
                }
                return event.num > 0 && !event.numFixed;
            },
            async content(event, trigger, player) {
                let result;
                if (trigger.name == "phaseDraw") {
                    let num = get.copy(trigger.num);
                    if (get.mode() == "guozhan" && num > 2) {
                        num = 2;
                    }
                    result =
                        await player.chooseNumbers(get.prompt(event.name), [{
                            prompt: "少摸任意张牌，视为使用等量张无距离限制的【顺手牵羊】",
                            min: 0,
                            max: num,
                        }]).set("processAI", () => {
                            const player = get.player();
                            const targets = game.filterPlayer(current => player != current && current.countGainableCards(player, "h") > 1
                                && get.effect(current, { name: "shunshou_copy2" }, player, player) > 0);
                            if (targets.length) {
                                let num2 = [Math.max(2, num)];
                                return [num2];
                            }
                            return -1;
                        }).forResult();
                    if (result?.numbers?.length) {
                        const number = result.numbers[0];
                        player.logSkill('fyrhtuxi');
                        for (let i = 0; i < number; i++) {
                            const card2 = get.autoViewAs({ name: 'shunshou', isCard: true });
                            await player.chooseUseTarget(card2, false, 'nodistance').set("prompt2", `还可以再使用${number - i}张`);;
                        }
                        trigger.num -= number;
                    } else {
                        return;
                    }
                    if (trigger.num <= 0) {
                        await game.delay();
                    }
                } else {
                    result =
                        await player.chooseNumbers(get.prompt(event.name), [{
                            prompt: "多弃任意张牌，视为使用等量张无距离限制的【杀】",
                            min: 0,
                            max: player.countCards('he') - trigger.num,
                        }]).set("processAI", () => {
                            const player = get.player();
                            let num2 = [Math.max(1, (player.countCards('he') - player.getHandcardLimit() + 3))];
                            return [num2];
                        }).forResult();
                    if (result?.numbers?.length) {
                        player.logSkill('fyrhtuxi');
                        const number = result.numbers[0];
                        for (let i = 0; i < number; i++) {
                            const card2 = get.autoViewAs({ name: 'sha', isCard: true });
                            await player.chooseUseTarget(card2, false, 'nodistance').set("prompt2", `还可以再使用${number - i}张`);
                        }
                        trigger.num += number;
                    } else {
                        return;
                    }
                    if (trigger.num <= 0) {
                        await game.delay();
                    }
                }
            },
            ai: {
                threaten: 1.6,
                expose: 0.2,
            },
        },
        fyrhzhiti: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "gainBegin",
            },
            lastDo: true,
            filter(event, player) {
                if (player == event.player) {
                    return false;
                }
                return player.inRange(event.player) && event.player.isPhaseUsing();
            },
            prompt2(event, player) {
                return `令${get.translation(event.player)}移出即将获得的${get.translation(event.cards)}`;
            },
            check(event, player) {
                return get.attitude(player, event.player) <= 0;
            },
            async content(event, trigger, player) {
                const cards = trigger.cards.slice(0);
                trigger.cancel();
                player.addSkill('fyrhzhiti_gain');
                await trigger.player.addToExpansion(cards, "gain2").set("gaintag", ["fyrhzhiti"]);
            },
            marktext: "🔪",
            intro: {
                markcount: "expansion",
                mark(dialog, storage, player) {
                    const cards = player.getExpansions("fyrhzhiti");
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🎴移出的牌</div>');
                    if (cards.length && player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        dialog.addText(`<div class="text center" style="opacity:0.6">共有${get.cnNumber(cards.length)}张牌</div>`);
                    }
                },
            },
            subSkill: {
                gain: {
                    trigger: {
                        player: "phaseBegin",
                    },
                    filter(event, player) {
                        return game.hasPlayer(current => player != current && current.getExpansions('fyrhzhiti').length > 0);
                    },
                    silent: true,
                    async content(event, trigger, player) {
                        let targets = game.filterPlayer(current => current != player && current.getExpansions('fyrhzhiti').length > 0);
                        let allCards = [];
                        let ownerMap = new Map();
                        /* targets.forEach(target => {
                            let cards = target.getExpansions('fyrhzhiti');
                            cards.forEach(card => {
                                //ownerMap.set(card, target); // 记录：这张牌属于 target
                                allCards.push(card);
                            });
                        }); */
                        game.countPlayer(current => {
                            let cards = current.getExpansions('fyrhzhiti');
                            cards.forEach(card => {
                                ownerMap.set(card, current);
                                allCards.push(card);
                            })
                        });
                        if (!allCards.length) return;
                        let getNum = Math.ceil(allCards.length / 2);
                        // 创建弹窗，并打上名字标签
                        let dialog = ui.create.dialog(`###止啼###请选择你要获得的${getNum}张牌（其余物归原主）`, [allCards, "card"]);
                        for (let button of dialog.buttons) {
                            let card = button.link;
                            //let owner = ownerMap.get(card);
                            let owner = get.owner(card);
                            if (owner) {
                                //gaintag 渲染名字
                                button.node.gaintag.innerHTML = `${get.translation(owner)}`;
                            }
                        }
                        let result = await player.chooseButton(dialog, getNum, true)
                            .set("ownerMap", ownerMap)
                            .set("ai", function (button) {
                                let evt = _status.event;
                                let cardOwner = evt.ownerMap.get(button.link);
                                let att = get.attitude(evt.player, cardOwner);
                                let val = get.value(button.link, evt.player);
                                return att <= 0 ? val + 5 : val - 5;
                            })
                            .forResult();

                        let getCards = [];
                        if (result.bool && result.links && result.links.length) {
                            getCards = result.links;
                        } else {
                            getCards = allCards.slice(0, getNum);
                        }
                        //结算剩下的牌，准备物归原主
                        let leftCards = allCards.filter(c => !getCards.includes(c));
                        let returnMap = new Map(); // 创建归还账本
                        for (let card of leftCards) {
                            //let owner = ownerMap.get(card);
                            let owner = get.owner(card);
                            if (!returnMap.has(owner)) {
                                returnMap.set(owner, []);
                            }
                            returnMap.get(owner).add(card);
                        }
                        if (getCards.length) {
                            await player.gain(getCards, "gain2");
                        }
                        for (let [owner, cards] of returnMap.entries()) {
                            if (cards.length) {
                                await owner.gain(cards, "gain2");
                            }
                        }

                    }
                }
            }
        },
        //西施
        fyrhlian: {
            audio: "ext:永夜之境/audio:3",
            enable: ["chooseToUse", "chooseToRespond"],
            filter(event, player) {
                if (!player.countCards("hse", card => get.name(card) == "shan") || player.hasSkill("xinxhjmiewu_used")) {
                    return false;
                }
                return get.inpileVCardList(info => {
                    if (!["basic", "trick"].includes(info[0])) {
                        return false;
                    }
                    //return event.filterCard(get.autoViewAs({ name: info[2], nature: info[3] }, "unsure"), player, event);
                    return player.hasCard(card => {
                        return get.name(card) == "shan" && event.filterCard(get.autoViewAs({ name: info[2], nature: info[3] }, "unsure"), player, event);
                    }, "hes")
                }).length;
            },
            chooseButton: {
                dialog(event, player) {
                    const list = get.inpileVCardList(info => {
                        if (!["basic", "trick"].includes(info[0])) {
                            return false;
                        }
                        //return event.filterCard(get.autoViewAs({ name: info[2], nature: info[3] }, "unsure"), player, event);
                        return player.hasCard(card => {
                            return get.name(card) == "shan" && event.filterCard(get.autoViewAs({ name: info[2], nature: info[3] }, "unsure"), player, event);
                        }, "hes")
                    });
                    return ui.create.dialog("涟", [list, "vcard"]);
                },
                check(button) {
                    if (_status.event.getParent().type != "phase") {
                        return 1;
                    }
                    const player = get.player();
                    if (["wugu", "zhulu_card", "yiyi", "lulitongxin", "lianjunshengyan", "diaohulishan"].includes(button.link[2])) {
                        return 0;
                    }
                    return player.getUseValue({
                        name: button.link[2],
                        nature: button.link[3],
                    });
                },
                backup(links, player) {
                    return {
                        filterCard(card, player) {
                            return get.name(card) == "shan";
                        },
                        popname: true,
                        check(card) {
                            return 8 - get.value(card);
                        },
                        position: "hse",
                        viewAs: {
                            name: links[0][2], nature: links[0][3], isCard: true,
                            storage: {
                                fyrhlian: true,
                            },
                        },
                        log: false,
                        async precontent(event, trigger, player) {
                            player
                                .when({ player: ["useCardAfter"] })
                                .filter(evt => evt.getParent() == event.getParent())
                                .step(async (event, trigger, player) => {
                                    player.removeSkill(event.name);
                                    player.logSkill("fyrhlian");
                                    const num = trigger.targets.length;
                                    const loseList = player.getStockSkills(false, true).filter(s => !player.hasSkill(`temp_ban_${s}`));
                                    if (!loseList.length) return;
                                    const result = await player.chooseButton([
                                        `###${get.prompt('fyrhlian')}###选择你的一个未失效的技能并选择一项效果`,
                                        [loseList, "skill"],
                                        [[
                                            ["recover", `该技能失效，直到你使用了${num}张牌`],
                                            ["lose", `你使用${num}张牌后，此技能失效`]
                                        ], "textbutton"]
                                    ])
                                        .set("selectButton", 2)
                                        .set("loseList", loseList)
                                        .set("filterButton", button => {
                                            const selected = ui.selected.buttons;
                                            const loseList = _status.event.loseList;
                                            // 判断当前点击的按钮是“技能”还是“选项”
                                            const isSkill = loseList.includes(button.link);
                                            if (selected.length === 0) return true;
                                            // 如果已经选了1个，判断第一个选的是什么类型
                                            const firstIsSkill = loseList.includes(selected[0].link);
                                            // 如果第一个是技能，现在就只能选选项（!isSkill）；反之亦然
                                            return firstIsSkill ? !isSkill : isSkill;
                                        })
                                        .set("ai", button => {
                                            if (button.link === "lose") return 10;
                                            if (button.link === "recover") return 1;
                                            return Math.random();
                                        })
                                        .set("forced", true)
                                        .forResult();

                                    if (result.bool && result.links.length === 2) {
                                        let chosenSkill = result.links.find(link => loseList.includes(link));
                                        let chosenEffect = result.links.find(link => link === "recover" || link === "lose");
                                        if (num === 0) {
                                            if (chosenEffect === "lose") {
                                                player.disableSkill("fyrhlian", chosenSkill);
                                                game.log(player, "的技能", `【${get.translation(chosenSkill)}】`, "失效了");
                                            }
                                        } else {
                                            player.addSkill("fyrhlian_tracker");
                                            let trackers = player.getStorage("fyrhlian_tracker") || [];
                                            if (chosenEffect === "recover") {
                                                player.disableSkill("fyrhlian", chosenSkill);
                                                game.log(player, "的技能", `【${get.translation(chosenSkill)}】`, "失效了");
                                                // 存入任务：[技能名，任务类型，目标数值，当前进度]
                                                trackers.push({ skill: chosenSkill, type: "recover", target: num, count: 0 });
                                            } else {
                                                game.log(player, "选择了在使用了", `#y${num}`, "张牌后，令", `【${get.translation(chosenSkill)}】`, "失效");
                                                trackers.push({ skill: chosenSkill, type: "lose", target: num, count: 0 });
                                            }
                                            player.setStorage("fyrhlian_tracker", trackers, true);
                                        }

                                    }
                                });
                        },
                    };
                },
                prompt(links, player) {
                    return "将一张【闪】当做" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + "使用";
                },
            },
            hiddenCard(player, name) {
                if (!lib.inpile.includes(name)) {
                    return false;
                }
                const type = get.type2(name);
                return ["basic", "trick"].includes(type) && player.countCards("hse", card => get.name(card) == "shan") && !player.hasSkill("fyrhlian_used");
            },
            ai: {
                fireAttack: true,
                respondSha: true,
                respondShan: true,
                skillTagFilter(player) {
                    if (!player.countCards("hse", card => get.name(card) == "shan") || player.hasSkill("fyrhlian_used")) {
                        return false;
                    }
                },
                order: 7,
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 1;
                    },
                },
            },
            subSkill: {
                backup: {},
                used: { charlotte: true },
                tracker: {
                    marktext: "涟",
                    intro: {
                        content(storage, player) {
                            if (!Array.isArray(storage) || !storage.length) return "暂无";
                            // 遍历所有的后台任务，生成多行提示
                            return storage.map(t => {
                                let remain = t.target - t.count;
                                let effect = t.type === "recover" ? "恢复" : "失效";
                                let color = t.type === "recover" ? "#00fa9a" : "#ff6347";
                                return `再使用 <span style="font-weight:bold; color:${color}">${remain}</span> 张牌后，令【${get.translation(t.skill)}】${effect}`;
                            }).join("<br><hr>");
                        }
                    },
                    trigger: { player: "useCardAfter" },
                    forced: true,
                    popup: false,
                    onremove: true,
                    charlotte: true,
                    filter(event, player) {
                        return Array.isArray(player.getStorage("fyrhlian_tracker")) && player.getStorage("fyrhlian_tracker").length > 0 && !event.card?.storage?.fyrhlian;
                    },
                    async content(event, trigger, player) {
                        let trackers = player.getStorage("fyrhlian_tracker");
                        let activeTrackers = []; // 未完成的任务留下来
                        let changed = false;
                        for (let t of trackers) {
                            t.count++;
                            if (t.count >= t.target) {
                                changed = true;
                                if (t.type === "recover") {
                                    player.enableSkill("fyrhlian", t.skill);
                                    game.log(player, "的技能", `【${get.translation(t.skill)}】`, "恢复了");
                                } else if (t.type === "lose") {
                                    player.disableSkill("fyrhlian", t.skill);
                                    game.log(player, "的技能", `【${get.translation(t.skill)}】`, "失效了");
                                }
                            } else {
                                // 还没达标的，重新塞回队列
                                activeTrackers.push(t);
                            }
                        }
                        //更新数据
                        if (changed) {
                            player.setStorage("fyrhlian_tracker", activeTrackers);
                            if (activeTrackers.length === 0) {
                                player.removeSkill("fyrhlian_tracker");
                            } else {
                                player.markSkill("fyrhlian_tracker");
                            }
                        }
                    }
                }

            },
        },
        fyrhsu: {
            locked: true,
            getTopValid(player) {
                if (_status.currentPhase !== player) return null;
                // 获取弃牌堆顶的实体卡牌（DOM 元素）
                //let top = ui.discardPile?.firstChild;
                let top = ui.discardPile?.lastChild;
                if (!top) return null;
                let type = get.type(top);
                if (type !== 'basic' && type !== 'trick') return null;
                return top;
            },
            // 判断某张牌是否需要被“缝合”
            getfilter(card, player) {
                let top = get.info("fyrhsu").getTopValid(player);
                if (!top) return true;
                let cards = card.cards || [card];
                if (cards.length !== 1) return true;
                if (get.position(cards[0]) !== 'h') return true;
                // 如果手牌原本的名字和弃牌堆顶一模一样，不需要强行修改
                if (cards[0].name === top.name && cards[0].nature === top.nature) return true;
                return false;
            },
            mod: {
                // 修改卡牌名字和属性
                cardname(card, player) {
                    if (get.info("fyrhsu").getfilter(card, player)) return;
                    let top = get.info("fyrhsu").getTopValid(player);
                    if (top) return top.name;
                },
                cardnature(card, player) {
                    if (get.info("fyrhsu").getfilter(card, player)) return;
                    let top = get.info("fyrhsu").getTopValid(player);
                    if (top && top.nature) return top.nature;
                    if (top && !top.nature) return false; // 清除手牌原本可能带有的属性
                },
                // 拦截目标选择逻辑，换回原牌的逻辑
                selectTarget(card, player, range) {
                    if (get.info("fyrhsu").getfilter(card, player)) return;
                    let cardc = (card.cards && card.cards.length) ? card.cards[0] : card;
                    let info = lib.card[cardc.name];
                    let select = info?.selectTarget;

                    let res = [1, 1];
                    if (typeof select === "number") {
                        res = [select, select];
                    } else if (get.itemtype(select) === "select") {
                        res = select;
                    } else if (typeof select === "function") {
                        let num = select(cardc, player);
                        res = (typeof num === "number") ? [num, num] : num;
                    }
                    if (res) {
                        range[0] = res[0];
                        range[1] = res[1];
                    }
                },
                playerEnabled(card, player, target) {
                    if (get.info("fyrhsu").getfilter(card, player)) return;
                    let cardc = (card.cards && card.cards.length) ? card.cards[0] : card;
                    let cardx = get.autoViewAs({ name: cardc?.name, nature: cardc?.nature }, [cardc]);
                    let mockCard = { name: cardc.name, nature: cardc.nature, isCard: true };
                    let info = lib.card[cardc.name];
                    // 用原牌的规则去检测目标是否合法
                    if (info && typeof info.filterTarget === "boolean" && info.filterTarget === false) return false;
                    if (info && typeof info.filterTarget === "function" && !info.filterTarget(mockCard, player, target)) return false;
                    return lib.filter.targetEnabledx(mockCard, player, target);
                },
                targetInRange(card, player, target) {
                    if (get.info("fyrhsu").getfilter(card, player)) return;
                    let cardc = (card.cards && card.cards.length) ? card.cards[0] : card;
                    let cardx = get.autoViewAs({ name: cardc?.name, nature: cardc?.nature }, [cardc]);
                    let mockCard = { name: cardc.name, nature: cardc.nature, isCard: true };
                    let info = lib.card[cardc.name];
                    // 用原牌的规则去检测距离
                    if (info && typeof info.filterTarget === "boolean" && info.filterTarget === false) return false;
                    if (info && typeof info.filterTarget === "function" && !info.filterTarget(mockCard, player, target)) return false;
                    return lib.filter.targetInRange(mockCard, player, target);
                }
            }
        },
        //卫玠
        fyrhlunxuan: {
            audio: "ext:永夜之境/audio:4",
            init(player, skill) {
                player.addExtraEquip(skill, "bagua", true, (player2) => player2.hasEmptySlot(2) && lib.card.bagua);
            },
            onremove(player, skill) {
                player.removeExtraEquip(skill);
            },
            trigger: { global: 'roundStart' },
            filter(event, player) {
                return !player.countExpansions('fyrhlunxuan');
            },
            async cost(event, trigger, player) {
                event.result = await player.chooseCard(get.prompt2('fyrhlunxuan'), [1, Infinity], 'he')
                    .set('filterCard', (card, player) => {
                        /* let suits = [];
                        if (ui.selected && ui.selected.cards) {
                            suits = ui.selected.cards.map(c => get.suit(c));
                        }
                        return !suits.includes(get.suit(card)); */
                        return !ui.selected.cards.some(i => get.suit(i) === get.suit(card));
                    })
                    .set("ai", card => {
                        return 10 - get.value(card);
                    })
                    .set('complexCard', true).forResult();
            },
            async content(event, trigger, player) {
                let cards = event.cards;
                await player.addToExpansion(cards, "gain2").set("gaintag", ["fyrhlunxuan"]);
                await player.draw(cards.length);
            },
            marktext: "玄",
            intro: {
                markcount: "expansion",
                mark(dialog, storage, player) {
                    const cards = player.getExpansions("fyrhlunxuan");
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🎴移出的牌</div>');
                    if (cards.length && player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        dialog.addText(`<div class="text center" style="opacity:0.6">共有${get.cnNumber(cards.length)}张牌</div>`);
                    }
                },
            },
            group: ["fyrhlunxuan_bagua"],
            subSkill: {
                bagua: {
                    locked: false,
                    equipSkill: true,
                    noHidden: true,
                    audio: 'bagua_skill',
                    inherit: "bagua_skill",
                    sourceSkill: "fyrhlunxuan_bagua",
                    filter(event, player) {
                        if (!lib.skill.bagua_skill.filter(event, player)) return false;
                        if (!player.hasEmptySlot(2)) return false;
                        if (!player.getExpansions("fyrhlunxuan").length) return false;
                        return true;
                    },
                    async content(event, trigger, player) {
                        const cards = player.getExpansions("fyrhlunxuan");
                        if (!cards || !cards.length) return;
                        const validSuits = cards.map(c => get.suit(c, player));
                        const next = player.judge("fyrhlunxuan_bagua", function (card) {
                            return validSuits.includes(get.suit(card)) ? 1.5 : -0.5;
                        });
                        next.judge2 = function (result) {
                            return result.bool;
                        };
                        await next;
                        if (next.result.judge > 0) {
                            trigger.untrigger();
                            trigger.set("responded", true);
                            trigger.result = { bool: true, card: { name: "shan", isCard: true } };

                        }
                        if (cards.length > 0) {
                            let result =
                                //await player.chooseButton(['论玄：获得移出的一张牌', cards], true)
                                await player.chooseButtonTarget({
                                    createDialog: [`论玄：获得一张移出牌，然后获得一名角色一张牌`, cards],
                                    forced: true,
                                    complexSelect: true,
                                    selectButton: 1,
                                    cards: cards,
                                    ai1(button) {
                                        return get.value(button.link);
                                    },
                                    ai2(target) {
                                        return -get.attitude(get.player(), target);
                                    },
                                })
                                    .forResult();
                            if (result.bool && result.links?.length) {
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhlunxuan' + [get.rand(1, 4)] + '.mp3');
                                await player.gain(result.links, "gain2");
                                const target = result.targets[0];
                                if (target.countGainableCards(player, "he")) {
                                    player.line(target);
                                    await player.gainPlayerCard(target, "he");
                                }
                            }
                        }
                        /* else if (cards.length === 1) {
                            await player.gain(cards[0], "gain2");
                        } */
                    },
                    ai: {
                        respondShan: true,
                        freeShan: true,
                        skillTagFilter(player, tag, arg) {
                            if (tag !== "respondShan" && tag !== "freeShan") {
                                return;
                            }
                            if (!player.hasEmptySlot(2) || player.hasSkillTag("unequip2")) {
                                return false;
                            }
                            if (!player.getExpansions("fyrhlunxuan").length) return false;
                            if (!arg || !arg.player) {
                                return true;
                            }
                            if (
                                arg.player.hasSkillTag("unequip", false, {
                                    target: player,
                                })
                            ) {
                                return false;
                            }
                            return true;
                        },
                        effect: {
                            target(card, player, target) {
                                if (player == target && get.subtype(card) == "equip2") {
                                    if (get.equipValue(card) <= 7.5) {
                                        return 0;
                                    }
                                }
                                if (!target.hasEmptySlot(2)) {
                                    return;
                                }
                                if (!target.getExpansions("fyrhlunxuan").length) return;
                                return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
                            },
                        },
                    },
                }
            },
        },
        fyrhkansha: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                target: "useCardToTargeted",
            },
            filter(event, player) {
                return event.card.name === "sha";
            },
            forced: true,
            popup: false,
            locked: false,
            async content(event, trigger, player) {
                player.addTempSkill("fyrhkansha_check");
                trigger.getParent().set("fyrhkansha_check", true);
                trigger.getParent().effectCount++;
                game.log(trigger.card, "额外结算一次");
            },
            subSkill: {
                check: {
                    charlotte: true,
                    trigger: {
                        global: "useCardAfter",
                    },
                    filter(event, player) {
                        if (!event.fyrhkansha_check) {
                            return false;
                        }
                        const history = player.getHistory("damage", evt => {
                            return evt.card == event.card;
                        });
                        if (history.length == 2) {
                            return false;
                        }
                        if (history.length !== 0) {
                            return true;
                        }
                        const card = new lib.element.VCard({ name: 'sha', isCard: true });
                        return player.hasUseTarget(card);
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        const history = player.getHistory("damage", evt => {
                            return evt.card == trigger.card;
                        });
                        if (history.length == 0) {
                            const card = new lib.element.VCard({ name: 'sha', isCard: true });
                            if (player.hasUseTarget(card)) {
                                player.logSkill("fyrhkansha");
                                await player.chooseUseTarget(card, false);
                            }
                        } else if (history.length == 1) {
                            const result = await player.chooseBool(`看杀：是否摸两张牌？`).forResult();
                            if (result.bool) {
                                player.logSkill("fyrhkansha");
                                await player.draw(2);
                            }
                        }
                    },
                },
            },
        },
        //陆逊
        fyrhzhuying: {
            audio: "ext:永夜之境/audio:8",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhzhuying${index}.mp3` : 2),
            enable: ["chooseToUse"],
            hiddenCard(player, name) {
                if (!["huogong", "wuxie"].includes(name)) {
                    return false;
                }
                if (player.countCards('h') === 2) {
                    return false;
                }
                if (name === "wuxie") {
                    let evt = _status.event;
                    // 顺着当前状态往下摸，找到 _wuxie 底事件
                    let wuxieEvt = evt.name === '_wuxie' ? evt : evt.getParent('_wuxie');
                    // 存在无懈事件，且 info_map 里记录的受害者不是自己
                    if (wuxieEvt && wuxieEvt._info_map && wuxieEvt._info_map.target !== player) {
                        return false;
                    }
                }
                return true;
            },
            filter(event, player) {
                if (player.countCards('h') === 2) {
                    return false;
                }
                return ["huogong", "wuxie"].some((name) => {
                    if (name === "wuxie") {
                        if (event.type === "wuxie" && event.info_map && event.info_map.target !== player) {
                            return false;
                        }
                    }
                    const card = new lib.element.VCard({ name, isCard: true });
                    return event.filterCard(card, player, event);
                });
            },
            chooseButton: {
                dialog(event, player) {
                    const list = ["huogong", "wuxie"].filter(name => {
                        if (name === "wuxie") {
                            if (event.type === "wuxie" && event.info_map && event.info_map.target !== player) {
                                return false;
                            }
                        }
                        const card = new lib.element.VCard({ name, isCard: true });
                        return event.filterCard(card, player, event);
                    });
                    const dialog = ui.create.dialog("烛营", [list, "vcard"], "hidden");
                    dialog.direct = true;
                    return dialog;
                },
                backup(links, player) {
                    const num = get.event().fyrhzhuyingCount;
                    return {
                        ignoreMod: true,
                        filterCard: () => false,
                        selectCard: -1,
                        popname: true,
                        viewAs: {
                            name: links[0][2],
                            isCard: true,
                            suit: "none",
                            number: "none",
                        },
                        log: false,
                        async precontent(event, trigger, player) {
                            const evt = event.result;
                            delete event.result.cards;
                            if (evt.card.name === "wuxie") {
                                player.logSkill("fyrhzhuying", null, null, null, [get.rand(7, 8)]);
                            } else {
                                player.logSkill("fyrhzhuying", null, null, null, [get.rand(1, 2)]);
                            }
                            const num = player.countCards("h") - 2;
                            if (num == 0) {
                                return;
                            }
                            if (num > 0) {
                                await player.chooseToDiscard("h", num, true, "allowChooseAll");
                            } else {
                                await player.draw(-num);
                            }

                            evt.card = new lib.element.VCard({ name: evt.card.name, isCard: true });
                            evt.cards = [];


                            player.when("useCardAfter")
                                .filter(evt => evt.skill == "fyrhzhuying_backup")
                                .step(async (event, trigger, player) => {
                                    if (player.hasHistory("sourceDamage", evt => {
                                        return evt.card == trigger.card;
                                    })) {
                                        game.playAudio("../extension/永夜之境/audio/", 'fyrhzhuying' + [get.rand(3, 6)] + '.mp3');
                                    }
                                });
                        },
                    };
                },
                prompt(links, player) {
                    const event = get.event();
                    return `###烛营###<div class="text center">将手牌数调整至二，视为使用一张${get.translation(links[0][2])}</div>`;
                },
            },
            ai: {
                order(item, player) {
                    player ??= get.player();
                    if (player.countCards('h') < 2) {
                        return 10;
                    }
                    return get.order({ name: "huogong" }, player) + 0.1;
                },
                result: {
                    player: 1,
                },
            },
        },
        //邓艾
        fyrhzaoxian: {
            audio: "ext:永夜之境/audio:3",
            trigger: { player: "phaseAfter" },
            filter(event, player) {
                return !event.skill;
            },
            prompt2(event, player) {
                let lastRound = player.getStorage('fyrhzaoxian_lastRound') || 0;
                let currentRound = game.roundNumber || 1;
                let bx = Math.min(5, Math.max(0, currentRound - lastRound));
                let ex = player.countMark('fyrhzaoxian');
                let tx = bx + ex;
                return `<div class="text center">获得一个额定摸牌数、攻击范围、出杀上限+${tx}的额外回合。</div>`;
            },
            async content(event, trigger, player) {
                let lastRound = player.getStorage('fyrhzaoxian_lastRound') || 0;
                let currentRound = game.roundNumber || 1;
                let bx = Math.min(5, Math.max(0, currentRound - lastRound));
                let ex = player.countMark('fyrhzaoxian');
                let tx = bx + ex;
                player.setStorage('fyrhzaoxian_lastRound', currentRound);
                await player.clearMark('fyrhzaoxian');

                let next = player.insertPhase();
                next.skill = 'fyrhzaoxian';
                next.fyrhzaoxian_x = tx;

            },
            onremove(player, skill) {
                player.clearMark(skill, false);
                player.removeStorage('fyrhzaoxian_lastRound');
            },
            marktext: '凿',
            intro: {
                name: "凿险加成",
                content(storage, player, skill) {
                    let lastRound = player.getStorage('fyrhzaoxian_lastRound') || 0;
                    let currentRound = game.roundNumber || 1;
                    let bx = Math.min(5, Math.max(0, currentRound - lastRound));
                    let ex = player.countMark('fyrhzaoxian');
                    let tx = bx + ex;
                    return `下一次发动【凿险】时，额外回合的摸牌数、攻击范围和出杀上限将<b style="color:#FF4500">+${tx}</b>。<br>
                    （其中轮次差加成：<b>${bx}</b>，【屯田】附加：<b>${ex}</b>）`;
                }
            },
            mod: {
                cardUsable(card, player, num) {
                    let phase = _status.event.getParent('phase');
                    if (card.name == "sha" && phase && phase.skill === 'fyrhzaoxian') {
                        let x = phase.fyrhzaoxian_x || 0;
                        return num += x;
                    }
                },
                attackRange(player, num) {
                    let phase = _status.event.getParent('phase');
                    if (phase && phase.skill === 'fyrhzaoxian') {
                        let x = phase.fyrhzaoxian_x || 0;
                        return num + x;
                    }
                }
            },
            group: "fyrhzaoxian_draw",
            subSkill: {
                draw: {
                    trigger: {
                        player: ["phaseDrawBegin2"],
                    },
                    filter(event, player) {
                        let phase = _status.event.getParent('phase');
                        return !event.numFixed && phase && phase.skill === 'fyrhzaoxian';
                    },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    async content(event, trigger, player) {
                        let phase = _status.event.getParent('phase');
                        let x = phase.fyrhzaoxian_x || 0;
                        trigger.num += x;
                    },
                },
            },
        },
        fyrhtuntian: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: ["loseAfter"],
                global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
            },
            forced: true,
            filter(event, player) {
                if (player == _status.currentPhase) {
                    return false;
                }
                if (event.name == "gain" && event.player == player) {
                    return false;
                }
                const evt = event.getl(player);
                return evt && evt.cards2 && evt.cards2.length > 0;
            },
            async content(event, trigger, player) {
                const cards = trigger.getl(player).cards2;
                const num = cards.length;
                await player.draw(num);
                player.addMark('fyrhzaoxian', 1, false);
            }
        },
        //郑小同
        fyrhxiushen: {
            //zhuanhuanji: true,
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhxiushen${index}.mp3` : 2),
            mark: true,
            marktext: '修',
            intro: {
                markcount(storage, player) {
                    return "";
                },
                content(storage, player, skill) {
                    let vals = player.storage.fyrhxiushen || [3, 6];
                    return `当前调整数值：<b style="color:#FF4500">${vals[0]}</b><br>
                    下一次调整数值：<b style="color:#1E90FF">${vals[1]}</b><br>
                    当你对自己使用牌后，可将手牌数调整至<b>${vals[0]}</b>张；<br>
                    你受到伤害后，可重新分配这两项数值（总和不变），且单项变化值不能超过你已损失的体力值。`;
                }
            },
            init(player, skill) {
                if (!player.storage.fyrhxiushen) {
                    player.storage.fyrhxiushen = [3, 6];
                }
                let vals = player.storage.fyrhxiushen;
                player.addTip(skill, `${get.translation(skill)} ${vals[0]}张`);
            },
            onremove(player, skill) {
                player.removeTip(skill);
            },
            popup: false,
            trigger: { player: "useCardAfter" },
            filter(event, player) {
                if (!event.targets || !event.targets.includes(player)) {
                    return false;
                }
                let vals = player.storage.fyrhxiushen || [3, 6];
                //return player.countCards("h") !== vals[0];
                return true;
            },
            async cost(event, trigger, player) {
                let vals = player.storage.fyrhxiushen || [3, 6];
                let result = await player.chooseBool(`修身：是否将手牌数调整至${vals[0]}张？`)
                    .set("ai", () => get.event().choice)
                    .set(
                        "choice",
                        (() => {
                            let player = get.player();
                            if (vals[0] - player.countCards("h") > 1) {
                                return true;
                            }
                            return false;
                        })()
                    )
                    .forResult();
                event.result = {
                    bool: result.bool,
                };
            },
            async content(event, trigger, player) {
                player.logSkill("fyrhxiushen", null, null, null, [get.rand(1, 4)]);
                let vals = player.storage.fyrhxiushen;
                let targetNum = vals[0];
                player.addTip("fyrhxiushen", `${get.translation("fyrhxiushen")}`, `${targetNum}张`);
                const num = player.countCards("h") - targetNum;
                /* if (num == 0) {
                    return;
                } */
                if (num > 0) {
                    await player.chooseToDiscard("h", num, true, "allowChooseAll");
                } else {
                    await player.draw(-num);
                }

                vals.push(vals.shift());
                player.markSkill("fyrhxiushen");
                player.addTip("fyrhxiushen", `${get.translation("fyrhxiushen")} ${vals[0]}张`);
            },
            group: ["fyrhxiushen_damage"],
            subSkill: {
                damage: {
                    trigger: { player: "damageAfter" },
                    filter(event, player) {
                        return player.isDamaged();
                    },
                    direct: true,
                    async content(event, trigger, player) {
                        let vals = player.getStorage("fyrhxiushen") || [3, 6];
                        let sum = vals[0] + vals[1];
                        let lostHp = player.getDamaged ? player.getDamaged() : player.getDamagedHp();
                        // 提前检测是否有合法的分配方案
                        let canMove = false;
                        for (let i = 0; i <= sum; i++) {
                            let delta = Math.abs(i - vals[0]);
                            if (delta > 0 && delta <= lostHp) {
                                canMove = true;
                                break;
                            }
                        }
                        if (!canMove) {
                            event.result = { bool: false };
                            return;
                        }
                        //准备武将卡牌池
                        let availableChars = [];
                        if (lib.characterPack['xinxfenyu']) {
                            availableChars = Object.keys(lib.characterPack['xinxfenyu']);
                        }
                        if (availableChars.length < sum) {
                            availableChars =
                                ['liubei', 'guanyu', 'zhangfei', 'zhaoyun', 'machao', 'huangzhong', 'weiyan', 'pangtong', 'zhugeliang', 'xushu', 'xunyu', 'guojia'];
                        }
                        // 随机抽出需要的数量，并按照目前的 vals 切割成两份
                        const randomAvatars = availableChars.randomGets(sum);
                        const chars1 = randomAvatars.slice(0, vals[0]);
                        const chars2 = randomAvatars.slice(vals[0]);
                        let result = await player.chooseToMove(
                            `修身：移动武将牌重新分配调整值（变化不能超过已损失体力 ${lostHp}）`
                        )
                            .set("list", [
                                //["区域名字", [实体数组, "类型"]]
                                /*  [`状态 ①（当前：${vals[0]}）`, [chars1, 'character']],
                                 [`状态 ②（当前：${vals[1]}）`, [chars2, 'character']] */
                                [`状态 ①（当前：${vals[0]}）`, [chars1, 'character'], function (list) {
                                    return `状态 ①（当前：${list.length}）`;
                                }],
                                [`状态 ②（当前：${vals[1]}）`, [chars2, 'character'], function (list) {
                                    return `状态 ②（当前：${list.length}）`;
                                }]
                            ])
                            .set("filterOk", function (moved) {
                                let original = _status.event.originalV0;
                                let lostHp = _status.event.lostHp;
                                let current = moved[0].length;
                                let delta = Math.abs(current - original);
                                // 必须有变化，且变化量不能超过已损失体力
                                return delta > 0 && delta <= lostHp;
                            })
                            .set("originalV0", vals[0])
                            .set("lostHp", lostHp)
                            .set("processAI", function (list) {
                                let original = _status.event.originalV0;
                                let lostHp = _status.event.lostHp;
                                let sum = original + list[1][1][0].length;
                                let targetV0 = original;
                                // 随意找一个合法的最大变化值
                                for (let d = lostHp; d > 0; d--) {
                                    if (original + d <= sum) { targetV0 = original + d; break; }
                                    if (original - d >= 0) { targetV0 = original - d; break; }
                                }
                                //找不到合法的，或者决定不发动，返回 null 即可
                                if (targetV0 === original) return null;

                                let allChars = list[0][1][0].concat(list[1][1][0]);
                                return [
                                    allChars.slice(0, targetV0),
                                    allChars.slice(targetV0)
                                ];
                            })
                            .forResult();
                        if (result.bool && result?.moved) {
                            player.logSkill("fyrhxiushen", null, null, null, [get.rand(5, 6)]);
                            let newVals = [result.moved[0].length, result.moved[1].length];
                            player.storage.fyrhxiushen = newVals;
                            player.addTip("fyrhxiushen", `${get.translation("fyrhxiushen")} ${newVals[0]}张`);
                            game.log(player, "将", "#g【修身】", "的数值重新分配为了", "#y①:" + newVals[0], "和", "#y②:" + newVals[1]);
                        }
                    }
                }
            }
        },
        fyrhbaiwei: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "phaseEnd",
            },
            filter(event, player) {
                return event.player !== player && player.canUse({ name: 'huogong', isCard: true }, event.player);
            },
            limited: true,
            skillAnimation: true,
            animationColor: "orange",
            check(event, player) {
                return player.countCards('e') > 1;
            },
            async content(event, trigger, player) {
                player.awakenSkill(event.name);
                const target = trigger.player;
                await player.useCard({ name: 'huogong', isCard: true }, target);
                if (player.countCards('e')) {
                    let result =
                        await player.chooseBool(get.prompt('fyrhbaiwei'), `<div class="text center">收回场上所有装备牌，再视为对${get.translation(target)}使用一张【火攻】？</div>`)
                            .forResult();
                    if (result?.bool) {
                        await player.gain(player.getCards('e'), 'gain2');
                        if (target.countCards('e') > 0) {
                            let result1 =
                                await target.chooseBool(get.prompt('fyrhbaiwei'), `<div class="text center">收回场上所有装备牌，视为对${get.translation(player)}使用一张【火攻】？</div>`)
                                    .set('ai', () => true)
                                    .forResult();
                            if (result1?.bool) {
                                await target.gain(target.getCards('e'), 'gain2');
                                await target.useCard({ name: 'huogong', isCard: true }, player);
                            } else {
                                await player.useCard({ name: 'huogong', isCard: true }, target);
                            }
                        } else {
                            await player.useCard({ name: 'huogong', isCard: true }, target);
                        }
                    }

                }
            }


        },
        //华雄
        fyrhyaowu: {
            mod: {
                cardname(card, player, name) {
                    //if (card.name == "shan") {
                    if (['basic'].includes(lib.card[card.name]?.type) && card.name !== "sha") {
                        return "juedou";
                    }
                }
            },
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhyaowu${index}.mp3` : 2),
            trigger: {
                source: "damageSource",
            },
            forced: true,
            popup: false,
            filter(event, player) {
                if (event.card.name !== "juedou") {
                    return false;
                }
                return !event.skill && event.cards.length == 1 && get.type(event.cards[0]) == 'basic' && event.cards[0].name !== "sha";
                //event.cards[0].name == "shan"
            },
            async content(event, trigger, player) {
                player.logSkill("fyrhyaowu", null, null, null, [get.rand(5, 6)]);
                await player.drawTo(player.maxHp);
            },
            group: "fyrhyaowu_use",
            subSkill: {
                use: {
                    trigger: {
                        player: "useCard",
                    },
                    charlotte: true,
                    silent: true,
                    filter(event, player) {
                        if (event.card.name !== "juedou") {
                            return false;
                        }
                        return !event.skill && event.cards.length == 1 && get.type(event.cards[0]) == 'basic' && event.cards[0].name !== "sha";
                    },
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'fyrhyaowu' + [get.rand(1, 4)] + '.mp3');
                        //player.logSkill("fyrhyaowu", null, null, null, [get.rand(1, 4)]);
                    }
                }
            }
        },
        //甄宓
        fyrhluoshen: {
            audio: "ext:永夜之境/audio:3",
            trigger: {
                player: "phaseZhunbeiBegin",
            },
            frequent: true,
            async content(event, trigger, player) {
                /* let blackCards = [];
                let count = 0;
                while (count < 100) {
                    count++;
                    let judgeEvent = player.judge(card => {
                        let isShan = get.name(card, false) === "shan";
                        let isBlack = get.color(card) === "black";
                        if (isShan) return -10;
                        if (isBlack) return 5;
                        return 0;
                    });
                    await judgeEvent;
                    let card = judgeEvent.result?.card || judgeEvent.card;
                    if (!card) break;
                    if (get.color(card) === "black") {
                        blackCards.push(card);
                    }
                    if (get.name(card, false) === "shan") {
                        blackCards.push(card);
                        game.log(player, "判定为", card, "，判定流程结束");
                        break;
                    }
                }
                if (blackCards.length > 0) {
                    let toGain = blackCards.filter(c => {
                        let pos = get.position(c);
                        return pos === "d" || pos === "o" || !pos;
                    });
                    if (toGain.length > 0) {
                        await player.gain(toGain, "gain2");
                    }
                } */
                let toGain = [];
                let toDiscard = [];
                let count = 0;
                while (true) {
                    const cards = get.cards(1);
                    if (!cards || cards.length === 0) break;
                    const card = cards[0];
                    await game.cardsGotoOrdering(card);
                    const judgestr = `${get.translation(player)}亮出第${get.cnNumber(count + 1, true)}张牌`;
                    const videoId = lib.status.videoId++;
                    game.addVideo("judge1", player, [get.cardInfo(card), judgestr, event.videoId]);
                    game.broadcastAll(
                        (player, card, str, id, cardid) => {
                            let event;
                            if (game.online) event = {};
                            else event = _status.event;
                            if (game.chess) event.node = card.copy("thrown", "center", ui.arena).addTempClass("start");
                            else event.node = player.$throwordered(card.copy(), true);
                            if (lib.cardOL) lib.cardOL[cardid] = event.node;
                            event.node.cardid = cardid;
                            event.node.classList.add("thrownhighlight");
                            ui.arena.classList.add("thrownhighlight");
                            event.dialog = ui.create.dialog(str);
                            event.dialog.classList.add("center");
                            event.dialog.videoId = id;
                        },
                        player, card, judgestr, videoId, get.id()
                    );

                    game.log(player, "亮出了牌堆顶的", card);
                    await game.delayx(1);
                    game.broadcastAll(id => {
                        const dialog = get.idDialog(id);
                        if (dialog) dialog.close();
                        ui.arena.classList.remove("thrownhighlight");
                    }, videoId);
                    game.addVideo("judge2", null, videoId);
                    //黑牌准备进手牌，红牌准备进弃牌堆
                    if (get.color(card) === "black" || get.name(card, false) === "shan") {
                        toGain.push(card);
                    } else {
                        toDiscard.push(card);
                    }
                    count++;
                    if (get.name(card, false) === "shan") {
                        game.log(player, "亮出了", card, "，亮牌流程结束");
                        break;
                    }
                }

                game.broadcastAll(() => ui.clear());
                if (toGain.length > 0) {
                    await player.gain(toGain, "gain2").set('gaintag', ["fyrhluoshen"]);
                }
                if (toDiscard.length > 0) {
                    await game.cardsDiscard(toDiscard);
                }
            },
            mod: {
                ignoredHandcard(card, player) {
                    if (card.hasGaintag("fyrhluoshen")) {
                        return true;
                    }
                },
                cardDiscardable(card, player, name) {
                    if (name == 'phaseDiscard' && card.hasGaintag("fyrhluoshen")) {
                        return false;
                    }
                },
            }
        },
        fyrhlenzen: {
            audio: "ext:永夜之境/audio:3",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhlenzen${index}.mp3` : 2),
            trigger: {
                player: "useCardToPlayer",
                target: "useCardToTarget",
            },
            filter(event, player) {
                return event.card.name === "sha" && event.player.isIn();
            },
            popup: false,
            logTarget: "player",
            async cost(event, trigger, player) {
                const source = (player == trigger.player ? player : trigger.player);
                let target = (player === source ? trigger.target : player);
                /* const result = await source.chooseButton([
                    `冷譖：是否获得一个武器效果`,
                    [[
                        ['hanbing', '寒冰剑'],
                        ['cixiong', '雌雄双股剑'],
                    ], 'textbutton'],//"tdnodes",
                ]).set('ai', button => {
                    let player = _status.event.player;
                    if (button.link == "cixiong" && target.sex !== player.sex) {
                        return 10;
                    }
                    if (button.link == "hanbing" && target.countCards("he")) {
                        return 1;
                    }
                    return 0;
                }).forResult();
                event.result = {
                    bool: result.bool,
                    cost_data: result.links,
                }; */
                let choice = ['寒冰剑', '雌雄双股剑'];
                let result = await source.chooseControl(choice)
                    .set("prompt", `冷譖：选择获得一个武器效果`)
                    .set("ai", () => {
                        let player = _status.event.player;
                        if (target.sex !== player.sex) { return "雌雄双股剑"; }
                        if (target.countCards("he") > 1) { return "寒冰剑"; }
                        return "雌雄双股剑";
                    })
                    .forResult();
                event.result = {
                    bool: true,
                    cost_data: result.index,
                };
            },
            async content(event, trigger, player) {
                //const result = event.cost_data[0];
                const result = event.cost_data;
                const source = (player == trigger.player ? player : trigger.player);
                let skillName;
                if (result == 0) {
                    skillName = "hanbing_skill";
                    player.logSkill("fyrhlenzen", null, null, null, [3]);
                    await source.addAdditionalSkill("fyrhlenzen", skillName);
                    game.log(source, "获得了技能", "#g" + get.translation(skillName));
                } else {
                    skillName = "cixiong_skill";
                    player.logSkill("fyrhlenzen", null, null, null, [get.rand(1, 2)]);
                    await source.addAdditionalSkill("fyrhlenzen", skillName);
                    game.log(source, "获得了技能", "#g" + get.translation(skillName));
                }
                source.when({ global: 'useCardAfter' })
                    .filter(evt => evt === trigger.getParent())
                    .step(async (event, trigger, player) => {
                        source.removeAdditionalSkill("fyrhlenzen", skillName);
                        game.log(source, "失去了技能", "#g" + get.translation(skillName));
                    });
            },
            marktext: '冷',
            intro: {
                content: "cards",
                name: `因${get.poptip('fyrhlenzen')}弃置的牌`,
            },
            group: ["fyrhlenzen_tracker"],
            subSkill: {
                tracker: {
                    trigger: {
                        global: ["loseAfter", "loseAsyncAfter"],
                        player: "drawAfter",
                    },
                    silent: true,
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        if (event.name === "lose") {
                            let weaponEvt = event.getParent("hanbing_skill", true) || event.getParent("cixiong_skill", true);
                            if (!weaponEvt || !weaponEvt.player) return false;
                            let extSkills = weaponEvt.player.additionalSkills;
                            return extSkills && extSkills.fyrhlenzen && extSkills.fyrhlenzen.includes(weaponEvt.name);
                        }
                        if (event.name === "draw") {
                            let weaponEvt = event.getParent("cixiong_skill", true);
                            if (!weaponEvt || !weaponEvt.player) return false;
                            let extSkills = weaponEvt.player.additionalSkills;
                            let hasTempWeapon = extSkills && extSkills.fyrhlenzen && extSkills.fyrhlenzen.includes("cixiong_skill");
                            return hasTempWeapon && event.player === player;
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        if (trigger.name === "lose") {
                            let cards = trigger.cards.filterInD('od');
                            if (cards.length > 0) {
                                let storage = player.getStorage("fyrhlenzen") || [];
                                storage.addArray(cards);
                                player.setStorage("fyrhlenzen", storage, true);
                            }
                        }
                        else if (trigger.name === "draw") {
                            let storage = player.getStorage("fyrhlenzen") || [];
                            if (storage.length > 0) {
                                let toGain = storage.filterInD('od');
                                if (toGain.length > 0) {
                                    game.log(player, "通过", "#g【冷譖】", "获得了", toGain);
                                    await player.gain(toGain, "gain2");
                                }
                                player.removeStorage("fyrhlenzen");
                                player.unmarkSkill("fyrhlenzen");
                            }
                        }
                    }
                }
            }
        },
        //法正
        fyrhyazi: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                target: "useCardToTargeted",
            },
            filter(event, player) {
                if (event.player === player) { return false; }
                return get.name(event.card, false) === "sha" || get.type(event.card) === "trick";
            },
            locked: true,
            async cost(event, trigger, player) {
                const isSha = get.name(trigger.card, false) === "sha";
                const target = trigger.player;
                let canCounter = false;
                if (isSha) {
                    let hasTrick = player.getCards("he").some(c => get.type(c) === "trick");
                    let hasViewAsSkill = player.getSkills().some(s => {
                        let info = get.info(s);
                        return info && info.viewAs;
                    });
                    if (hasTrick || (hasViewAsSkill && player.countCards("he") > 0)) {
                        canCounter = true;
                    }
                } else {
                    if (player.hasUsableCard("sha") || player.getCards("he").some(c => get.name(c) === "sha")) {
                        canCounter = true;
                    }
                }
                if (!canCounter) {
                    event.result = { bool: false };
                    return;
                }
                if (isSha) {
                    trigger.directHit.add(player);
                } else {
                    trigger.nowuxie = true;
                }

                let result =
                    await player.chooseToUse(function (card, player, event) {
                        const isSha = _status.event.isSha;
                        if (isSha) {
                            if (get.type(card) !== "trick") return false;
                        } else {
                            if (get.name(card) !== "sha") return false;
                        }
                        return lib.filter.filterCard.apply(this, arguments);
                    }, target)
                        .set('isSha', isSha)
                        .set('prompt', `睚眦：是否对${get.translation(target)}无距离限制使用一张${isSha ? '普通锦囊牌' : '【杀】'}，以抵消${get.translation(trigger.card)}？`)
                        .set('addCount', false)
                        .set('nodistance', true)
                        .set('fyrhyazix', true)
                        .set('target', target)
                        .forResult();
                /* let next = player.chooseToUse(function (card, player, event) {
                    const isSha = _status.event.isSha;
                    if (isSha) {
                        if (get.type(card) !== "trick") return false;
                    } else {
                        if (get.name(card, false) !== "sha") return false;
                    }
                    return lib.filter.filterCard.apply(this, arguments);
                });
                next.set('isSha', isSha);
                next.set('target', target);
                next.set('prompt', `睚眦：是否对${get.translation(target)}无距离限制使用一张${isSha ? '普通锦囊牌' : '【杀】'}，以抵消${get.translation(trigger.card)}？`);
                next.set('addCount', false);
                next.set('nodistance', true);
                next.set('filterTarget', function (card, player, target) {
                    return target === _status.event.target;
                });
                let result = await next.forResult(); */
                event.result = {
                    bool: result?.bool,
                    cards: result?.cards,
                };
            },
            async content(event, trigger, player) {
                const target = trigger.player;
                game.log(trigger.card, '被', player, '抵消了');
                const isSha = get.name(trigger.card, false) === "sha";
                if (isSha) {
                    player
                        .when({ target: "shaBegin" })
                        .filter(evt => evt.card == trigger.card)
                        .step(async (event, trigger, player) => {
                            trigger.neutralize();
                        });
                }
                else {
                    player
                        .when({ global: "useCardToBegin" })
                        .filter(evt => evt.card == trigger.card)
                        .step(async (event, trigger, player) => {
                            trigger.neutralize();
                        });
                }

                /* 
                trigger.neutralize();
                let parent = trigger.getParent();
                if (parent) {
                    if (!parent.excluded) parent.excluded = [];
                    parent.excluded.add(player);
                } */
            },
            mod: {
                aiUseful(player, card, num) {
                    if (card.name === "sha" || get.is.damageCard(card)) {
                        return 16;
                    }
                    if (get.name(card, player) == 'shan' || get.name(card, player) == 'wuxie') {
                        return -1;
                    }
                },
            },
            group: ["fyrhyazi_draw", 'fyrhyazi_directHit'],
            subSkill: {
                draw: {
                    trigger: { source: "damage" },
                    forced: true,
                    charlotte: true,
                    silent: true,
                    popup: false,
                    filter(event, player) {
                        let chooseEvent = event.getParent("chooseToUse");
                        if (chooseEvent.fyrhyazix === true) {
                            return event.player === chooseEvent.target;
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        await player.draw(2);
                    }
                },
                directHit: {
                    trigger: { player: "useCard" },
                    forced: true,
                    silent: true,
                    filter(event, player) {
                        let chooseEvent = event.getParent("chooseToUse");
                        return chooseEvent.fyrhyazix === true;
                    },
                    async content(event, trigger, player) {
                        trigger.directHit.addArray(game.filterPlayer());
                        game.log(trigger.card, "不可被响应");
                    },
                },
            }
        },
        fyrhxuanmi: {
            audio: "ext:永夜之境/audio:3",
            enable: "phaseUse",
            usable: 2,
            filter(event, player) {
                let used = player.getStorage("fyrhxuanmi_used") || [];
                if (used.includes("sha") && used.includes("shunshou")) { return false; }
                return game.hasPlayer(current => current !== player);
            },
            filterTarget(card, player, target) {
                return target !== player;
            },
            complexCard: true,
            async content(event, trigger, player) {
                let target = event.target;
                let used = player.getStorage("fyrhxuanmi_used") || [];
                let controls = [];
                if (!used.includes("shunshou")) controls.push("顺手牵羊");
                if (!used.includes("sha")) controls.push("杀");
                let choice = controls[0];
                if (controls.length > 1) {
                    let result = await player.chooseControl(controls)
                        .set("prompt", `渲迷：请选择令 ${get.translation(target)} 视为使用的牌`)
                        .set('ai', () => {
                            let player = get.player();
                            let reachSha = target.canUse({ name: "sha", isCard: true }, player);
                            let reachShun = target.canUse({ name: "shunshou", isCard: true }, player);
                            let sha = player.countCards('h', "sha");
                            let damage = player.getCards('h').filter(card => get.is.damageCard(card) && get.type(card) == 'trick');
                            if (sha && !used.includes("shunshou")) {
                                return "顺手牵羊";
                            }
                            if (damage && !used.includes("sha")) {
                                return "杀";
                            }
                            return controls[0];
                        })
                        .forResult();
                    choice = result.control || controls[0];
                }
                let cardName = choice === "杀" ? "sha" : "shunshou";
                used.push(cardName);
                player.setStorage("fyrhxuanmi_used", used);
                let fakeCard = { name: cardName, isCard: true };
                if (target.canUse(fakeCard, player)) {
                    await target.useCard(fakeCard, player);
                } else {
                    game.log(target, "无法对", player, "使用", fakeCard, "，改由", player, "代为指定目标");
                    let hasValidTarget = game.hasPlayer(current => target.canUse(fakeCard, current));
                    if (!hasValidTarget) {
                        game.log("场上没有任何合法的目标，使用失败");
                        return;
                    }
                    let next = player.chooseTarget(
                        `渲迷：请为${get.translation(target)}指定 ${get.translation(cardName)} 的目标`,
                        function (card, player, target2) {
                            return _status.event.source.canUse(_status.event.fakeCard, target2);
                        }
                    );
                    next.set("ai", (target2) => {
                        return -get.attitude(_status.event.player, target2);
                    });
                    // 把变量塞进面板事件
                    next.set("source", target);
                    next.set("fakeCard", fakeCard);
                    const result = await next.forResult();
                    if (result.bool && result.targets?.length > 0) {
                        await target.useCard(fakeCard, result.targets);
                    } else {
                        game.log(player, "取消了指定");
                    }
                }
                player.when("phaseUseAfter")
                    .step(async (event, trigger, player) => {
                        player.removeStorage("fyrhxuanmi_used");
                    });
            },
            ai: {
                order: 10,
                result: {
                    target(player, target) {
                        let sha = player.countCards("h", "sha");
                        let damage = player.getCards('h').filter(card => get.is.damageCard(card) && get.type(card) == 'trick').length;
                        let used = player.getStorage("fyrhxuanmi_used") || [];
                        let reachSha = target.canUse({ name: "sha", isCard: true }, player);
                        let reachShun = target.canUse({ name: "shunshou", isCard: true }, player);
                        if (sha && !used.includes("shunshou")) {
                            return -1;
                        }
                        if (damage && !used.includes("sha")) {
                            return -1;
                        }
                        return 0;
                    },
                }
            },
        },
        //许靖
        fyrhxuqi: {
            audio: "fyrhyizuo",
            trigger: {
                player: ["phaseUseBegin"],
            },
            filter(event, player) {
                return player.hasCard(lib.filter.cardRecastable, "he");
            },
            async cost(event, trigger, player) {
                const num = Math.max(1, player.getStorage('fyrhzhiqi') || 0);
                let result = await player
                    .chooseCardTarget({
                        prompt: get.prompt(event.skill),
                        prompt2: `<div class="text center">重铸至多一半手牌，然后令至多${num}名其他角色再重铸你一半手牌</div>`,
                        filterCard: lib.filter.cardRecastable,
                        selectTarget: [num, num],
                        filterTarget(card, player, target) {
                            return target != player;
                        },
                        selectCard: [1, Math.floor(player.countCards('h') / 2)],
                        position: 'h',
                        ai1(card) {
                            if (ui.selected.cards.length > 1) {
                                return 0;
                            }
                            return 5 - get.value(card);
                        },
                        ai2(target) {
                            const player = get.player();
                            let att = get.attitude(player, target);
                            return att;
                        },
                    })
                    .forResult();
                event.result = {
                    bool: result?.bool,
                    cards: result?.cards,
                    targets: result?.targets,
                };
            },
            async content(event, trigger, player) {
                const targets = event.targets;
                const cards = event.cards;
                const originalHs = player.getCards("h");
                let recastedCards = [];
                recastedCards.addArray(cards);
                await player.recast(cards);
                const func = async target => {
                    if (!target?.isIn()) {
                        return;
                    }
                    let result1 = await target.choosePlayerCard(`虚奇：重铸${get.translation(player)}一半手牌`, Math.floor(player.countCards('h') / 2),
                        player, "h", true).forResult();
                    if (result1.bool && result1.links?.length) {
                        recastedCards.addArray(result1.links);
                        await player.recast(result1.links);
                    }
                };
                if (targets.length && player.countCards('h')) {
                    await game.doAsyncInOrder(targets, func);
                }
                /*  for (let target of targets) {
                     if (player.countCards('h')&&target?.isIn()) {
                         let result1 = await target.choosePlayerCard(`虚奇：重铸${get.translation(player)}一半手牌`, Math.floor(player.countCards('h') / 2),
                             player, "h", true).forResult();
                         if (result1.bool && result1.links?.length) {
                             recastedCards.addArray(result1.links);
                             await player.recast(result1.links);
                         }
                     }
                 } */
                let newhs = player.getCards("h");
                let survivors = newhs.filter(c =>
                    originalHs.includes(c) && !recastedCards.includes(c)
                );
                if (survivors.length > 0) {
                    player.addGaintag(survivors, "fyrhxuqi");
                }
            },
            aiUseful(player, card, num) {
                const dict = player.getStorage("yyzjbaoliu") || {};
                let pos = get.position(card) || "h";
                if (pos === "s") pos = "h";
                let baseKey = player.playerid + "_" + pos + "_" + card.cardid;
                let roundAge = dict[baseKey + "_round"] || 0;
                let val = get.value(card);
                if (roundAge > 0) {
                    return num + (roundAge * 2) + val;
                }
            },
            aiOrder(player, card, num) {
                const dict = player.getStorage("yyzjbaoliu") || {};
                let pos = get.position(card) || "h";
                if (pos === "s") pos = "h";
                let baseKey = player.playerid + "_" + pos + "_" + card.cardid;
                let age = dict[baseKey] || 0;
                let roundAge = dict[baseKey + "_round"] || 0;
                if (roundAge > 0) {
                    return num - (roundAge * 2);
                }
            },
            group: ["fyrhxuqi_use", 'fyrhxuqi_tracker'],
            subSkill: {
                use: {
                    enable: "chooseToUse",
                    getCardInfo(player) {
                        let info = player.getStorage("fyrhxuqi_use") || [];
                        if (info && info.name && lib.card[info.name]) {
                            return { name: info.name, nature: info.nature, isCard: true };
                        }
                        return null;
                    },
                    filter(event, player) {
                        let cardInfo = get.info("fyrhxuqi_use").getCardInfo(player);
                        if (!cardInfo) return false;
                        return event.filterCard(cardInfo, player, event) && player.countCards('h', card => card.hasGaintag("fyrhxuqi"));
                    },
                    chooseButton: {
                        dialog(event, player) {
                            let savedData = player.getStorage("fyrhxuqi_use");
                            let name = "";
                            let nature = "";
                            if (savedData) {
                                if (typeof savedData === "string") {
                                    name = savedData;
                                }
                                else if (typeof savedData === "object") {
                                    name = savedData.name || "";
                                    nature = savedData.nature || "";
                                }
                            }
                            let type = get.type(name);
                            const vcardArray = [type, '', name, nature];
                            return ui.create.dialog('虚奇', [[vcardArray], 'vcard'], 'hidden');
                        },
                        check(button) {
                            let player = _status.event.player, card = { name: button.link[2], nature: button.link[3] };
                            return _status.event.getParent().type == 'phase' ? player.getUseValue(card) : 1;
                        },
                        backup(links, player) {
                            return {
                                filterCard: card => card.hasGaintag("fyrhxuqi"),
                                position: 'hes',
                                viewAs: {
                                    name: links[0][2],
                                    nature: links[0][3],
                                    isCard: true,
                                },
                                ai1(card) {
                                    return 7 - get.value(card);
                                },
                                log: false,
                                async precontent(event, trigger, player) {
                                    player.logSkill('fyrhxuqi');
                                },
                                hiddenCard(player, name) {
                                    let cardInfo = get.info("fyrhxuqi_use").getCardInfo(player);
                                    if (!cardInfo) return false;
                                    return name === cardInfo.name;
                                },
                            }
                        },
                        prompt(links, player) {
                            let name = links[0][2];
                            let nature = links[0][3];
                            let natureStr = nature ? get.translation(nature) : "";
                            return `将一张牌当【${natureStr}${get.translation(name)}】使用`;
                        },
                    },
                    ai: {
                        order: 8,
                        respondShan: true,
                        respondSha: true,
                        skillTagFilter(player, tag, arg) {
                            if (arg === "respond") {
                                return false;
                            }
                            return true;
                        },
                        result: {
                            player(player) {
                                if (_status.event.dying) {
                                    return get.attitude(player, _status.event.dying);
                                }
                                return 1;
                            },
                        },
                    },
                },
                tracker: {
                    trigger: {
                        player: ["useCard1", "respond"],
                    },
                    forced: true,
                    silent: true,
                    firstDo: true,
                    priority: 50,
                    popup: false,
                    onremove: true,
                    filter(event, player) {
                        return event.card && ['basic', 'trick'].includes(get.type(event.card));
                    },
                    async content(event, trigger, player) {
                        player.setStorage("fyrhxuqi_use", {
                            name: trigger.card.name,
                            nature: trigger.card.nature,
                            isCard: true
                        });
                        player.when({ global: "phaseAfter" })
                            .step(async (event, trigger, player) => {
                                delete player.storage.fyrhxuqi_use;
                            });
                    },
                },
            }
        },
        fyrhzhiqi: {
            audio: "fyrhlianzhi",
            enable: "chooseToUse",
            viewAs: {
                name: "wuxie",
                isCard: true,
            },
            viewAsFilter(player) {
                const dict = player.getStorage("yyzjbaoliu") || {};
                return player.getCards("h").some(card => dict[player.playerid + "_h_" + card.cardid + "_round"] >= 3);
            },
            filterCard: () => false,
            selectCard: -1,
            log: false,
            popname: true,
            ignoreMod: true,
            async precontent(event, trigger, player) {
                player.logSkill("fyrhzhiqi");
                await player.gain(lib.card.ying.getYing(1), "gain2");
                player.setStorage('fyrhzhiqi', 2);
            },
            updateMarks(player) {
                if (player !== game.me) return;
                const dict = player.getStorage("yyzjbaoliu") || {};
                const cards = player.getCards("h");
                for (let c of cards) {
                    if (!c.node.fyrh_mark) {
                        c.node.fyrh_mark = ui.create.div('.fyrh-mark', c);
                        c.node.fyrh_mark.style.cssText = 'position:absolute; top:75%; left:50%; transform:translate(-50%, -50%); width:90%; background:rgba(0,0,0,0.7); color:white; font-size:14px; text-align:center; z-index:3; pointer-events:none; padding: 2px 0; font-family: "kaiti"; text-shadow: 1px 1px 2px black; line-height:1.2; border-radius:4px; box-shadow: 0 0 4px black;';
                    }
                    c.node.fyrh_mark.style.display = 'block';
                    let baseKey = player.playerid + "_" + get.position(c) + "_" + c.cardid;
                    let roundAge = dict[baseKey + "_round"] || 0;
                    c.node.fyrh_mark.innerHTML = `<span style="color:#FFD700;font-weight:bold;">保留中</span><br>已留${roundAge}轮`;
                }
            },
            group: ['fyrhzhiqi_ui'],
            subSkill: {
                ui: {
                    trigger: {
                        global: ["gameDrawAfter", "gainAfter", "loseAfter", "loseAsyncAfter", "addToExpansionAfter", "useCardAfter", "equipAfter", "addJudgeAfter", "phaseAfter"],
                    },
                    forced: true,
                    silent: true,
                    async content(event, trigger, player) {
                        get.info("fyrhzhiqi").updateMarks(player);
                        if (trigger.cards) {
                            for (let c of trigger.cards) {
                                if (!player.getCards("h").includes(c) && c.node.fyrh_mark) {
                                    c.node.fyrh_mark.style.display = 'none';
                                }
                            }
                        }
                    }
                }
            }
        },
        //贾充
        fyrhxilong: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: ["phaseEnd"],
            },
            onremove(player, skill) {
                delete player.storage[skill];
            },
            async content(event, trigger, player) {
                player.setStorage('fyrhxilong', true);
                for (let name of ["huogong", "guohe", "jiedao"]) {
                    const card2 = get.autoViewAs({ name, storage: { fyrhxilongx: true }, isCard: true });
                    if (player.hasUseTarget(card2, false)) {
                        const next = player.chooseUseTarget(card2, false);
                        next.set("fyrhxilong", true);
                        const result = await next.forResult();
                        if (!result?.bool) {
                            continue;
                        }
                    }
                }
                player.setStorage('fyrhxilong', false);
            },
            group: ["fyrhxilong_catch"],
            subSkill: {
                catch: {
                    trigger: {
                        global: ["loseAfter", "loseAsyncAfter", "gainAfter", "addToExpansionAfter", "equipAfter", "addJudgeAfter", 'showCardsAfter', 'useCardAfter',
                            'respondAfter', 'drawAfter'
                        ]
                    },
                    getCards(trigger) {
                        if (["showCards", 'respond', 'useCard', 'draw'].includes(trigger.name)) {
                            return trigger.cards || [];
                        }
                        if (typeof trigger.getl === "function") {
                            const evt = trigger.getl(trigger.player);
                            return evt && evt.cards2 ? evt.cards2 : [];
                        }
                        return [];
                    },
                    popup: false,
                    frequent: true,
                    filter(event, player) {
                        /*  const chooseEvt = event.getParent("chooseUseTarget");
                         if (!chooseEvt.fyrhxilong) { return false; } */
                        if (!player.getStorage("fyrhxilong", false) === true) { return false; }
                        const compareEvt = event.getParent("compare");
                        const judgeEvt = event.getParent("judge");
                        if ((compareEvt && compareEvt.name === "compare") || (judgeEvt && judgeEvt.name === "judge")) {
                            return false;
                        }
                        /* const evt = event.getl(event.player);
                        //return evt?.cards2?.length && evt.cards2.some(c => get.name(c) === "sha");
                        return evt?.cards2?.length; */
                        const cards = lib.skill.fyrhxilong.subSkill.catch.getCards(event);
                        return cards && cards.length > 0;
                    },
                    prompt2(event, player) {
                        const cards = lib.skill.fyrhxilong.subSkill.catch.getCards(event);
                        //return `<div class="text center">是否获得${get.translation(event.cards2.filter(c => get.name(c) === "sha"))}？</div>`;
                        return `<div class="text center">是否获得${get.translation(cards)}？</div>`;
                    },
                    async content(event, trigger, player) {
                        //const evt = trigger.getl(trigger.player);
                        //const shas = evt.cards2.filter(c => get.name(c) === "sha");
                        const shas = lib.skill.fyrhxilong.subSkill.catch.getCards(trigger);
                        if (shas.length > 0) {
                            await player.gain(shas, "gain2");
                        }
                    }
                }
            }
        },
        fyrhzuiwo: {
            audio: "ext:永夜之境/audio:4",
            enable: ["chooseToUse"],
            hiddenCard(player, name) {
                if (!["shan", "wuxie"].includes(name)) {
                    return false;
                }
                const last = lib.skill.fyrhlongdan.getLastLost(player);
                if (last) {
                    return player.countDiscardableCards(player, "h") > 0 && (get.name(last) == 'sha');
                }
                return false;
            },
            filter(event, player) {
                const last = lib.skill.fyrhlongdan.getLastLost(player);
                if (last) {
                    if (get.name(last) !== 'sha') return false;
                    if (!player.countDiscardableCards(player, "h")) {
                        return false;
                    }
                    return ["shan", "wuxie"].some(name => {
                        const card = new lib.element.VCard({ name, isCard: true });
                        return event.filterCard(card, player, event);
                    });
                }
                return false;
            },
            chooseButton: {
                dialog(event, player) {
                    const list = ["shan", "wuxie"].filter(name => {
                        const card = new lib.element.VCard({ name, isCard: true });
                        return event.filterCard(card, player, event);
                    });
                    const dialog = ui.create.dialog("罪我", [list, "vcard"], "hidden");
                    dialog.direct = true;
                    return dialog;
                },
                backup(links, player) {
                    return {
                        ignoreMod: true,
                        filterCard: () => false,
                        selectCard: -1,
                        popname: true,
                        filterTarget(card, player, target) {
                            return target !== player;
                        },
                        selectTarget: 1,
                        viewAs: {
                            name: links[0][2],
                            isCard: true,
                            suit: "none",
                            number: "none",
                        },
                        ai2(target) {
                            const player = get.player();
                            let att = get.attitude(player, target);
                            return 4 + att;
                        },
                        discard: false,
                        visible: false,
                        log: false,
                        async precontent(event, trigger, player) {
                            const evt = event.result;
                            const target = event.result.targets[0];
                            delete event.result.cards;
                            player.logSkill("fyrhzuiwo", target);
                            if (player.countDiscardableCards(target, "he")) {
                                await target.discardPlayerCard(player, true, "he");
                            }
                            evt.card = new lib.element.VCard({ name: evt.card.name, isCard: true });
                            evt.cards = [];
                        },
                    };
                },
                prompt(links, player) {
                    const event = get.event();
                    return `###罪我###<div class="text center">令一名其他角色弃置你一张手牌，视为使用一张${get.translation(links[0][2])}</div>`;
                },
            },
            ai: {
                order(item, player) {
                    player ??= get.player();
                    return get.order({ name: "shan" }, player) + 0.1;
                },
                result: {
                    player: 1,
                },
            },
            group: ["fyrhzuiwo_tip"],
            subSkill: {
                tip: {
                    trigger: {
                        player: "loseAfter",
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    charlotte: true,
                    silent: true,
                    firstDo: true,
                    filter(event, player) {
                        const evt = event.getl(player);
                        return evt?.cards2?.length;
                    },
                    async content(event, trigger, player) {
                        player.removeTip("fyrhzuiwo_tip");
                        const last = lib.skill.fyrhlongdan.getLastLost(player);
                        if (last) {
                            let info = get.translation("fyrhzuiwo");
                            const tags = [];
                            if (get.name(last) == 'sha') tags.push("杀");
                            if (tags.length) {
                                info += " (" + tags.join("/") + ")";
                            }
                            player.addTip("fyrhzuiwo_tip", info);
                        }
                    },
                    onremove(player, skill) {
                        delete player.storage[skill];
                        player.removeTip("fyrhzuiwo_tip");
                    },
                    forced: true,
                    popup: false,
                },
            }
        },
        //谢奇
        fyrhrangrang: {
            audio: "ext:永夜之境/audio:4",
            onremove(player, skill) {
                delete player.storage[skill];
                player.removeTip(skill);
            },
            trigger: {
                player: ["damageAfter", "phaseZhunbeiBegin"],
            },
            filter(event, player) {
                return true;
            },
            prompt2(event, player) {
                let Timing = event.name;
                const lastTiming = player.getStorage("fyrhrangrang");
                if (Timing !== lastTiming) {
                    return `摸三张牌`;
                }
                return `摸一张牌`;
            },
            async content(event, trigger, player) {
                const Timing = trigger.name;
                const map = {
                    damage: "受到伤害",
                    phaseZhunbei: "准备阶段",
                };
                const lastTiming = player.getStorage("fyrhrangrang");
                if (Timing !== lastTiming) {
                    await player.draw(3);
                } else {
                    await player.draw();
                }
                player.setStorage('fyrhrangrang', Timing, true);
                player.addTip("fyrhrangrang", `${get.translation(map[Timing])}`);
            },
            marktext: "壤",
            intro: {
                content(storage) {
                    const map = {
                        damage: "受到伤害",
                        phaseZhunbei: "准备阶段",
                    };
                    return "上次发动时机：" + (map[storage] || "无");
                },
            },
            ai: {
                maixie: true,
                maixie_hp: true,
                effect: {
                    target(card, player, target) {
                        if (get.is.damageCard(card)) {
                            if (player.hasSkillTag("jueqing", false, target)) {
                                return [1, -2];
                            }
                            const lastTiming = target.getStorage("fyrhrangrang");
                            if (lastTiming === "damage") {
                                return [1, -0.5];
                            }
                            if (target.hp >= 4) {
                                return [1, 2];
                            }
                            if (target.hp == 3) {
                                return [1, 1.5];
                            }
                            if (target.hp == 2) {
                                return [1, 0.5];
                            }
                        }
                    },
                },
            },
        },
        //周瑜
        fyrhyingzi: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: ["phaseDrawBegin"],
            },
            prompt2(event, player) {
                if (player.getStorage("fyrhbingfa", false) === true) {
                    return `跳过摸牌阶段，依次视为使用三张【火攻】`;
                }
                return `跳过摸牌阶段，依次视为使用【无中生有】【洞烛先机】【火攻】`;
            },
            async content(event, trigger, player) {
                trigger.cancel();
                if (player.getStorage("fyrhbingfa", false) === true) {
                    for (let i = 0; i < 3; i++) {
                        const card2 = get.autoViewAs({ name: 'huogong', isCard: true });
                        await player.chooseUseTarget(card2, true, false);
                    }
                    player.setStorage('fyrhbingfa', false);
                } else {
                    for (let name of ["wuzhong", "dongzhuxianji", "huogong"]) {
                        const card2 = get.autoViewAs({ name, isCard: true });
                        if (player.hasUseTarget(card2)) {
                            await player.chooseUseTarget(card2, true, false);
                        }
                    }
                }
            }
        },
        fyrhbingfa: {
            audio: "dcsbyingmou",
            trigger: {
                player: ["phaseZhunbeiBegin"],
            },
            xiandingji: true,
            skillAnimation: true,
            animationColor: "fire",
            filter(event, player) {
                return player.countCards('e');
            },
            check(event, player) {
                return player.countCards('e') >= 3 || (player.hp < 2 && player.countCards('e') >= 2);
            },
            async content(event, trigger, player) {
                player.awakenSkill(event.name);
                player.setStorage('fyrhbingfa', true);
                const cards = player.getCards('e');
                if (cards && cards?.length) {
                    await player.gain(cards, "gain2");
                    await player.draw(cards.length * cards.length);
                }
            },
            subSkill: {
                mark: {
                    charlotte: true,
                }
            }
        },
        //顾裕
        fyrhtuilang: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: ["loseAfter"],
                global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
            },
            onremove(player, skill) {
                player.setStorage(skill, null);
                player.removeTip(skill);
            },
            popup: false,
            direct: true,
            /* getNum(player) {
                let num = 0;
                player.getAllHistory("lose", evt => {
                    if (evt.cards2) {
                        num += evt.cards2.length;
                    }
                });
                return num;
            }, */
            filter(event, player) {
                let num = get.info(event.skill)?.getNum(player);
                const evt = event.getl(player);
                return evt?.cards2?.length;
            },
            async content(event, trigger, player) {
                const lostCount = trigger.getl(player).cards2.length;
                const oldCount = player.storage.fyrhtuilang || 0;
                const newCount = oldCount + lostCount;
                player.setStorage('fyrhtuilang', newCount);
                const remainder = newCount % 3;
                const need = remainder === 0 ? 3 : (3 - remainder);
                player.removeTip("fyrhtuilang");
                player.addTip("fyrhtuilang", `失${newCount}(触发${need})`);
                //const triggerTimes = Math.floor(newCount / 3) - Math.floor(oldCount / 3);
                //if (triggerTimes > 0) {
                if (newCount > 0 && newCount % 3 === 0) {
                    // for (let i = 0; i < triggerTimes; i++) {
                    /*   const result = await player.chooseBool(get.prompt(event.skill), `<div class="text center">是否摸两张牌，然后弃置任意张牌</div>`)
                          .set('ai', () => true)
                          .forResult();
                      if (result?.bool) { */
                    player.logSkill(event.name);
                    await player.draw(2);
                    await player.chooseToDiscard('he', '是否弃置任意张牌', [1, Infinity])
                        .set('ai', (card) => {
                            let player = get.player();
                            if (ui.selected.cards.length > 2) {
                                return 0;
                            }
                            if (ui.selected.cards.length < 1) {
                                return 2 - get.value(card);
                            }
                            return 0;
                        })
                    //}
                    // }
                }
            }
        },
        //张飞
        fyrhyafeng: {
            audio: "ext:永夜之境/audio:2",
            enable: "phaseUse",
            selectCard: -1,
            manualConfirm: true,
            position: "h",
            filterCard(card, player, event) {
                if (get.name(card) == "sha") {
                    return false;
                }
                return true;
            },
            filter(event, player) {
                const x = player.getRoundHistory("useSkill", evt => evt.skill === "fyrhyafeng").length;
                const shaCount = player.countCards("h", card => get.name(card) === "sha");
                return shaCount === x && player.countCards("h");
            },
            async content(event, trigger, player) {
                //await player.recast(event.cards);
                await player.addToExpansion(event.cards, "gain2").set("gaintag", ["fyrhyafeng"]);
                //await player.draw(event.cards.length);
                await player.draw(4);
            },
            marktext: "喝",
            intro: {
                markcount: "expansion",
                mark(dialog, storage, player) {
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }
                    const cards = player.getExpansions("fyrhyafeng");
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🎴移出的牌</div>');
                    if (cards.length && player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        dialog.addText(`<div class="text center" style="opacity:0.6">共有${get.cnNumber(cards.length)}张牌</div>`);
                    }
                },
            },
            ai: {
                order: 10,
                result: {
                    player: 1,
                }
            }
        },
        fyrhbaohe: {
            audio: "ext:永夜之境/audio:3",
            trigger: {
                global: ["roundEnd"],
            },
            filter(event, player) {
                const usecount = player.getRoundHistory("useSkill", evt => evt.skill === "fyrhyafeng").length;
                const countLostSha = (target) => {
                    let count = 0;
                    const loseHistory = target.getRoundHistory('lose');
                    for (const evt of loseHistory) {
                        if (evt.cards2 && evt.cards2.length > 0) {
                            for (const card of evt.cards2) {
                                if (get.name(card, target) === 'sha' || get.name(card, false) === 'sha') {
                                    count++;
                                }
                            }
                        }
                    }
                    return count;
                };
                const myCount = countLostSha(player);
                return game.filterPlayer().every(target => {
                    return countLostSha(target) >= myCount;
                });
            },
            prompt2(event, player) {
                const usecount = player.getRoundHistory("useSkill", evt => evt.skill === "fyrhyafeng").length;
                //return `依次使用${usecount}张手牌`;
                return `依次使用任意张手牌`;
            },
            async content(event, trigger, player) {
                let usecount = player.getRoundHistory("useSkill", evt => evt.skill === "fyrhyafeng").length;
                const Cards = player.getExpansions("fyrhyafeng");
                const cards = Cards.filter(card => {
                    return player.hasUseTarget(card);
                });
                const cardsx = game.createFakeCards(cards);
                player.directgains(cardsx, null, "fyrhbaohe");
                //while (usecount > 0) {
                while (true && player.countCards('hs', card => card.hasGaintag('fyrhbaohe'))) {
                    const result = await player
                        .chooseToUse({
                            filterCard(card) {
                                if (get.itemtype(card) != "card" || (get.position(card) != "h" && get.position(card) != "s")) {
                                    return false;
                                }
                                //return lib.filter.filterCard.apply(this, arguments);
                                return true;
                            },
                            //prompt: `是否使用一张手牌（还可使用${usecount}张）`,
                            prompt: `是否使用一张手牌`,
                            addCount: false,
                            chooseonly: true,
                        })
                        .forResult();
                    if (result?.bool && result.cards?.length) {
                        game.playAudio("../extension/永夜之境/audio/", 'fryhbaohe' + [get.rand(1, 3)] + '.mp3');
                        let hasSwapped = false;
                        for (let i = 0; i < result.cards.length; i++) {
                            const chosenCard = result.cards[i];
                            // 如果选择的牌是假牌，则替换成真牌
                            if (chosenCard.hasGaintag("fyrhbaohe")) {
                                const realCard = cards.find(c => c.cardid === chosenCard._cardid);
                                if (realCard) {
                                    cards.remove(realCard);
                                    chosenCard.delete();
                                    hasSwapped = true;
                                    // 将 result 里的假牌替换成对应的真牌
                                    result.cards[i] = realCard;
                                    if (result.card === chosenCard) {
                                        result.card = realCard;
                                    } else if (result.card && result.card.cards) {
                                        const idx = result.card.cards.indexOf(chosenCard);
                                        if (idx !== -1) result.card.cards[idx] = realCard;
                                    }
                                }
                            }
                        }
                        if (hasSwapped) { ui.updatehl(); }
                        await player.useResult(result);
                        usecount--;
                    } else {
                        break;
                    }
                }
                const fakeCards = player.getCards("hs", card => card.hasGaintag("fyrhbaohe"));
                if (fakeCards.length) {
                    game.deleteFakeCards(fakeCards);
                }
            },
            group: ["fyrhbaohe_catch"],
            subSkill: {
                catch: {
                    mod: {
                        cardSavable(card, player) {
                            for (let i of card.cards) {
                                if (i.hasGaintag("fyrhbaohe")) {
                                    return false;
                                }
                            }
                        },
                        cardRespondable(card) {
                            for (let i of card.cards) {
                                if (i.hasGaintag("fyrhbaohe")) {
                                    return false;
                                }
                            }
                        },
                    },
                    trigger: {
                        player: ["useCardBefore", "respondBefore"],
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return event.cards && event.cards.some(c => c.hasGaintag("fyrhbaohe"));
                    },
                    async content(event, trigger, player) {
                        const cards = player.getExpansions("fyrhyafeng");
                        let hasSwapped = false;
                        for (let i = 0; i < trigger.cards.length; i++) {
                            const fakeCard = trigger.cards[i];
                            if (fakeCard.hasGaintag("fyrhbaohe")) {
                                const realCard = cards.find(c => c.cardid === fakeCard._cardid);
                                if (realCard) {
                                    cards.remove(realCard);
                                    trigger.cards[i] = realCard;
                                    if (trigger.card === fakeCard) {
                                        trigger.card = realCard;
                                    } else if (trigger.card && trigger.card.cards) {
                                        const idx = trigger.card.cards.indexOf(fakeCard);
                                        if (idx !== -1) trigger.card.cards[idx] = realCard;
                                    }
                                    fakeCard.delete();
                                    hasSwapped = true;
                                }
                            }
                        }
                        if (hasSwapped) ui.updatehl();
                    }
                }
            }
        },
        //王平
        fyrhyizhen: {
            audio: "ext:永夜之境/audio:2",
            audioname: ["fyrh_wangping_shadow"],
            trigger: {
                global: "phaseEnd",
            },
            forced: true,
            onremove(player, skill) {
                delete player.storage[skill];
                player.removeTip(skill);
            },
            marktext: "阵",
            intro: {
                content(storage) {
                    if (!storage || !storage.length) return "尚未记录任何花色";
                    return `已记录<span class=thundertext>${storage.reduce((str, suit) => str + get.translation(suit), "")}</span>`;
                    //return `已累积花色：<span class=thundertext>${storage.map(s => get.translation(s)).join("、")}</span>`;
                }
            },
            updateMarks(player) {
                if (player !== game.me) return;
                const dict = player.getStorage("fyrhyizhen_tracker") || {};
                const cards = player.getCards("h");
                for (let c of cards) {
                    if (!c.node.fyrh_mark) {
                        c.node.fyrh_mark = ui.create.div('.fyrh-mark', c);
                        c.node.fyrh_mark.style.cssText = 'position:absolute; top:75%; left:50%; transform:translate(-50%, -50%); width:90%; background:rgba(0,0,0,0.7); color:white; font-size:14px; text-align:center; z-index:3; pointer-events:none; padding: 2px 0; font-family: "kaiti"; text-shadow: 1px 1px 2px black; line-height:1.2; border-radius:4px; box-shadow: 0 0 4px black;';
                    }
                    c.node.fyrh_mark.style.display = 'block';
                    let key = player.playerid + "_h_" + c.cardid;
                    let age = dict[key] || 0;
                    if (age >= 3) {
                        c.node.fyrh_mark.innerHTML = `<span style="color:#00FF00;font-weight:bold;">✔将弃置</span><br>已留 ${age} 回合`;
                    } else {
                        c.node.fyrh_mark.innerHTML = `<span style="color:#FFD700;font-weight:bold;">保留中</span><br>${age} / 3 回合`;
                    }
                }
            },
            filter(event, player) {
                const dict = player.getStorage("fyrhyizhen_tracker");
                if (!dict) return false;
                return player.getCards("h").some(card => dict[player.playerid + "_h_" + card.cardid] >= 3);
            },
            async content(event, trigger, player) {
                const dict = player.getStorage("fyrhyizhen_tracker");
                const hs = player.getCards("h");
                //挑出寿命达到3回合的牌
                const toDiscard = hs.filter(card => dict[player.playerid + "_h_" + card.cardid] >= 3);
                if (toDiscard.length > 0) {
                    await player.discard(toDiscard);
                    await player.draw(4);
                    let suits = player.getStorage("fyrhyizhen") || [];
                    let newSuits = [];
                    for (let card of toDiscard) {
                        let suit = get.suit(card);
                        if (suit && suit !== "none" && !suits.includes(suit)) {
                            newSuits.push(suit);
                        }
                    }
                    if (newSuits.length > 0) {
                        player.markAuto("fyrhyizhen", newSuits);
                        player.addTip(
                            "fyrhyizhen",
                            get.translation("fyrhyizhen") + player.getStorage("fyrhyizhen").reduce((str, suit) => str + get.translation(suit), "")
                        );
                    }
                    suits = player.getStorage("fyrhyizhen") || [];
                    const allSuits = ["spade", "heart", "club", "diamond"];
                    if (allSuits.every(s => suits.includes(s))) {
                        await game.delayx();
                        player.popup("额外回合", "yellow");
                        game.log(player, "集齐了四种花色，", "#g【壹阵】", "清空记录并进行一个额外回合");
                        player.unmarkSkill("fyrhyizhen");
                        delete player.storage.fyrhyizhen;
                        player.removeTip(event.skill);
                        player.insertPhase();
                    }
                }
            },
            group: ["fyrhyizhen_tracker", "fyrhyizhen_ui"],
            subSkill: {
                tracker: {
                    trigger: { global: "phaseEnd" },
                    silent: true,
                    firstDo: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        let dict = player.getStorage("fyrhyizhen_tracker") || {};
                        let newDict = {};
                        let hs = player.getCards("h");
                        for (let card of hs) {
                            // 如果上一回合已经在手里了，寿命 +1；如果是这回合刚摸的，寿命从1开始记
                            //newDict[card.cardid] = (dict[card.cardid] || 0) + 1;
                            let key = player.playerid + "_h_" + card.cardid;
                            newDict[key] = (dict[key] || 0) + 1;
                        }
                        player.setStorage("fyrhyizhen_tracker", newDict);
                    }
                },
                ui: {
                    trigger: {
                        global: ["gameDrawAfter", "gainAfter", "loseAfter", "loseAsyncAfter", "addToExpansionAfter", "useCardAfter", "equipAfter", "addJudgeAfter", "phaseAfter"],
                    },
                    forced: true,
                    silent: true,
                    async content(event, trigger, player) {
                        get.info("fyrhyizhen").updateMarks(player);
                        if (trigger.cards) {
                            for (let c of trigger.cards) {
                                if (!player.getCards("h").includes(c) && c.node.fyrh_mark) {
                                    c.node.fyrh_mark.style.display = 'none';
                                }
                            }
                        }
                    }
                }
            }
        },
        fyrhzhibing: {
            audio: "ext:永夜之境/audio:2",
            audioname: ["fyrh_wangping_shadow"],
            enable: "chooseToUse",
            filterCard: () => false,
            selectCard: -1,
            getCardInfo(player) {
                let info = player.getStorage("fyrhzhibing") || [];
                if (info && info.name && lib.card[info.name]) {
                    return { name: info.name, nature: info.nature, isCard: true };
                }
                return null;
            },
            filter(event, player) {
                let cardInfo = get.info("fyrhzhibing").getCardInfo(player);
                if (!cardInfo) return false;
                return event.filterCard(cardInfo, player, event);
            },
            chooseButton: {
                dialog(event, player) {
                    let savedData = player.getStorage("fyrhzhibing");
                    let name = "";
                    let nature = "";
                    if (savedData) {
                        if (typeof savedData === "string") {
                            name = savedData;
                        }
                        else if (typeof savedData === "object") {
                            name = savedData.name || "";
                            nature = savedData.nature || "";
                        }
                    }
                    let type = get.type(name);
                    // vcard：[类型, 子类型, 名字, 属性]
                    const vcardArray = [type, '', name, nature];
                    return ui.create.dialog('制兵', [[vcardArray], 'vcard'], 'hidden');
                },
                check(button) {
                    return 1;
                },
                prompt(links, player) {
                    let name = links[0][2];
                    let nature = links[0][3];
                    let natureStr = nature ? get.translation(nature) : "";
                    return `你可以移动场上至多X张装备牌，并视为使用一张【${natureStr}${get.translation(name)}】`;
                },
                backup(links, player) {
                    return {
                        selectCard: -1,
                        filterCard: () => false,
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],
                            isCard: true,
                        },
                        log: false,
                        async precontent(event, trigger, player) {
                            player.logSkill('fyrhzhibing');
                            player.storage['fyrhzhibingx'] = !player.storage['fyrhzhibingx'];
                            player.changeSkin({ characterName: "fyrh_wangping" }, "fyrh_wangping" + (player.storage['fyrhzhibingx'] ? "_shadow" : ""));
                            let cardInfo = get.info("fyrhzhibing").getCardInfo(player);
                            let cardNameStr = cardInfo ? get.translation(cardInfo.name) : "牌";
                            let suits = player.getStorage("fyrhyizhen") || [];
                            const equipt = game.hasPlayer(current => current.countCards("e") > 0);
                            let X = 4 - suits.length;
                            if (X > 0 && equipt) {
                                for (let i = 0; i < X; i++) {
                                    const targetResult = await player.chooseTarget(2, function (card, player2, target) {
                                        if (ui.selected.targets.length) {
                                            let from = ui.selected.targets[0];
                                            if (target.isMin()) return false;
                                            if (from === target) return false;
                                            let es = from.getCards("e");
                                            for (let j = 0; j < es.length; j++) {
                                                if (target.canEquip(es[j])) return true;
                                            }
                                            return false;
                                        } else {
                                            return target.countCards("e") > 0;
                                        }
                                    })
                                        .set("prompt", `【制兵】: 请选择要移动的装备来源和目标（第${i + 1}/${X}次）`)
                                        //.set("prompt", `【制兵】: 视为使用【${cardNameStr}】，请选择要移动的装备来源和目标（第 ${i + 1}/${X} 次）`)
                                        .set("targetprompt", ["脱下装备", "穿上装备"])
                                        .set("multitarget", true)
                                        .set("ai", function (target) {
                                            let player = _status.event.player;
                                            if (ui.selected.targets.length == 0) {
                                                return get.attitude(player, target) < 0 ? 1 : 0;
                                            } else {
                                                return get.attitude(player, target) > 0 ? 1 : 0;
                                            }
                                        }).forResult();
                                    if (targetResult.bool && targetResult.targets.length === 2) {
                                        let source = targetResult.targets[0];
                                        let target = targetResult.targets[1];
                                        player.line2(targetResult.targets, "green");
                                        const cardResult = await player.choosePlayerCard(source, "e", true, function (button) {
                                            return target.canEquip(button.link);
                                        }).set("prompt", `请选择要移动给 ${get.translation(target)} 的装备`).forResult();
                                        if (cardResult.bool && cardResult.links.length) {
                                            let link = cardResult.links[0];
                                            source.$give(link, target);
                                            await target.equip(link);
                                            await game.delay();
                                        } else {
                                            break;
                                        }
                                    } else {
                                        break;
                                    }
                                }
                            }
                            player.when("useCardAfter").filter((evt) => evt.getParent() == event.getParent())
                                .step(async (event, trigger, player) => {
                                    for (const phase of lib.phaseName) {
                                        const evt = event.getParent(phase);
                                        if (evt?.name === phase && !evt.finished) {
                                            //不触发cancelled时机
                                            evt.cancel(true, null, true);
                                            break;
                                        }
                                    }
                                    const evt = event.getParent("phase", true);
                                    if (evt) {
                                        game.log(player, "结束了回合");
                                        player.logSkill('fyrhzhibing');
                                        evt.num = evt.phaseList.length;
                                        evt.goto(11);
                                    }
                                });
                        }
                    }
                },
                hiddenCard(player, name) {
                    let cardInfo = get.info("fyrhzhibing").getCardInfo(player);
                    if (!cardInfo) return false;
                    return name === cardInfo.name;
                },
            },
            ai: {
                order: 8,
                respondShan: true,
                respondSha: true,
                skillTagFilter(player, tag, arg) {
                    if (arg === "respond") {
                        return false;
                    }
                    return true;
                },
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 1;
                    },
                },
            },
            group: "fyrhzhibing_tracker",
            subSkill: {
                tracker: {
                    trigger: { player: ["useCard1", "respond"] },
                    forced: true,
                    silent: true,
                    popup: false,
                    onremove: true,
                    filter(event, player) {
                        return event.card && ['basic', 'trick'].includes(get.type(event.card));
                    },
                    async content(event, trigger, player) {
                        player.setStorage("fyrhzhibing", {
                            name: trigger.card.name,
                            nature: trigger.card.nature,
                            isCard: true
                        });
                        player.when({ global: "phaseAfter" })
                            .step(async (event, trigger, player) => {
                                delete player.storage.fyrhzhibing;
                            });
                    }
                },
            }
        },
        //枪之恶魔
        fyrhshitang: {
            trigger: {
                player: "phaseDiscardBegin",
            },
            forced: true,
            async content(event, trigger, player) {
                player.addTempSkill('fyrhshitang_effect', 'phaseChange');
                trigger.setContent(lib.skill[event.name].phaseDiscard);
            },
            marktext: "🔫",
            intro: {
                mark(dialog, storage, player) {
                    const cards = player.getExpansions("fyrhshitang");
                    if (player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        return "共有" + get.cnNumber(cards.length) + "张牌";
                    }
                },
                markcount: "expansion",
            },
            phaseDiscard: [
                async (event, trigger, player) => {
                    game.log(player, "进入了弃牌阶段");
                    game.broadcastAll(function (player) {
                        if (lib.config.show_phase_prompt) {
                            player.popup("弃牌阶段", null, false);
                        }
                    }, player);
                    event.trigger("phaseDiscard");
                },
                async (event, trigger, player) => {
                    let hasWon = false;
                    let hasNotWon = false;
                    let useHand = true;  // 轮流标志：true 代表用手牌，false 代表用牌堆顶
                    while (!(hasWon && hasNotWon)) {
                        const targets = game.filterPlayer(current => current !== player && player.canCompare(current, true));
                        if (!targets.length) break;
                        if (useHand && player.countCards('h') === 0) break;
                        const result = await player.chooseTarget(`失膛：请选择角色进行拼点（使用${useHand ? '手牌' : '牌堆顶的牌'}）`, (card, player, target) => {
                            return target !== player && target.countCards('h') > 0;
                        }, true)
                            .set('ai', target => get.attitude(player, target) <= 0).forResult();
                        const target = (result?.bool && result.targets?.length) ? result.targets[0] : targets.randomGet();
                        const next = player.chooseToCompare(target);
                        if (!useHand) {
                            const topCard = get.cards()[0];
                            game.cardsGotoSpecial([topCard], "draw");
                            if (!next.fixedResult) {
                                next.fixedResult = {};
                            }
                            next.fixedResult[player.playerid] = topCard;
                        }
                        const cmpResult = await next.forResult();
                        if (cmpResult.bool) {
                            hasWon = true;
                        } else {
                            hasNotWon = true;
                        }
                        // 切换状态（手牌 -> 牌堆顶 -> 手牌）
                        useHand = !useHand;
                    }
                },
            ],
            subSkill: {
                effect: {
                    trigger: {
                        global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    silent: true,
                    getIndex(event, player, name) {
                        return game
                            .filterPlayer(target => {
                                if (target.countCards("h")) {
                                    return false;
                                }
                                const evt = event.getl(target);
                                return evt?.hs?.length;
                            })
                            .sortBySeat();
                    },
                    filter: (event, player, name, target) => target?.isIn(),
                    async content(event, trigger, player) {
                        const disCards = get.discarded().filterInD("od");
                        let usecards = disCards.slice().filter(c => ['basic', 'trick'].includes(get.type(c)) && player.hasUseTarget(c))
                        if (!usecards.length) { return; }
                        const hasSha = usecards.some(c => c.name === 'sha');
                        const result = await player.chooseButton(['失膛：移出中央区的一张牌并视为使用之', usecards], 1, true)
                            .set('filterButton', button => {
                                if (hasSha) {
                                    return button.link.name === 'sha';
                                }
                                return true;
                            })
                            .set('ai', button => {
                                return get.player().getUseValue(button.link);
                            }).forResult();
                        if (result?.bool && result.links?.length) {
                            const card = result.links[0];
                            await player.addToExpansion(card, "gain2").set("gaintag", ["fyrhshitang"]);
                            if (lib.card[card.name]?.notarget || !lib.card[card.name]?.enable) {
                                return;
                            }
                            const [suit, number, name, nature] = get.cardInfo(card);
                            const cardx = get.autoViewAs({ name, number, suit, nature }, []);
                            await game.delayx();
                            if (player.hasUseTarget(cardx)) {
                                await player.chooseUseTarget(cardx, true, false);
                            }
                        }
                        player.when('phaseAfter')
                            .step(async (event, trigger, player) => {
                                const cards = player.getExpansions("fyrhshitang");
                                if (cards.length) {
                                    player.gain(cards, "draw");
                                    game.log(player, "收回了" + get.cnNumber(cards.length) + "张移出牌");
                                }
                            });
                    },
                },
            },
        },
        //刘敏
        fyrhyizuo: {
            audio: "ext:永夜之境/audio:2",
            init(player) {
                player.addSkill("fyrhyizuo_effect");
            },
            enable: "phaseUse",
            usable: 1,
            filterTarget: true,
            async content(event, trigger, player) {
                const target = event.target;
                //const targets = [player, target].unique().sortBySeat();
                const cards = player.getCards("h");
                let selectedCards = [];
                if (target === player) {
                    const result = await player.chooseButton(['【翼佐】请选择你的一至两张手牌', cards], [1, 2])
                        .set('ai', button => {
                            if (ui.selected.buttons.length == 0) { return 6 - get.value(button.link); }
                            return 0;
                        })
                        .forResult();
                    if (!result.bool || !result.links.length) {
                        return;
                    }
                    if (result?.bool && result.links?.length) {
                        selectedCards = result.links;
                    }
                    game.log(player, '选择了', selectedCards);
                } else {
                    const resultT = await target.chooseButton([`【翼佐】请选择 ${get.translation(player)} 的一张手牌`, cards], 1, true)
                        .set('ai', button => {
                            let score = 6 - get.value(button.link);
                            if (button.link.name === 'ying') {
                                score += 100;
                            }
                            return score;
                        })
                        .forResult();
                    const cardT = (resultT?.bool && resultT.links?.length) ? resultT.links[0] : cards.randomGet();
                    const resultP = await player.chooseButton(['【翼佐】请与目标同时选择你的一张手牌', cards], 1, true)
                        .set('ai', button => {
                            /* if (button.link === cardT) {
                                return -100;
                            } */
                            let score = 6 - get.value(button.link);
                            if (button.link.name === 'ying') {
                                score += 100;
                            }
                            return score;
                        })
                        .forResult();
                    const cardP = (resultP?.bool && resultP.links?.length) ? resultP.links[0] : cards.randomGet();
                    // 将两人选的牌合并，加上 .unique()
                    selectedCards = [cardT, cardP].unique();
                    game.log(player, '与', target, '同时选择了', selectedCards);
                }
                const validList = [player, target].unique().filter(p => p.isIn());
                if (validList.length === 0) { return; }
                const buttons = [
                    ['trick', '', 'wuzhong'],
                    ['basic', '', 'tao']
                ];
                let finalCardName = null;
                let finalUser = null;
                if (validList.length === 1 || player == target) {
                    const soleTarget = validList[0];
                    const result = await player.chooseButton([`【翼佐】选择将牌当做以下牌令 ${get.translation(soleTarget)} 使用`, [buttons, 'vcard']], 1)
                        .set('filterButton', button => {
                            if (button.link[2] === 'tao' && soleTarget.hp >= soleTarget.maxHp) return false;
                            return true;
                        })
                        .set("ai", button => {
                            return get.player().getUseValue(button.link) + 1;
                        })
                        .forResult();
                    if (result?.bool && result.links?.length) {
                        finalCardName = result.links[0][2];
                        finalUser = soleTarget;
                    }
                }
                else {
                    const result = await player.chooseButtonTarget({
                        createDialog: [`【翼佐】选择将牌当做【无中生有】或【桃】，并令你或目标使用`, [buttons, 'vcard']],
                        filterButton(button) {
                            return true;
                        },
                        filterTarget(card, player, target) {
                            // 只能选 player 或 target
                            if (!get.event().validList.includes(target)) return false;
                            // 如果左边点选了【桃】，右边满血的角色就无法被选中
                            const cardName = ui.selected.buttons[0]?.link[2];
                            if (cardName === 'tao' && target.hp >= target.maxHp) return false;
                            return true;
                        },
                        ai1(button) {
                            return button.link[2] === 'wuzhong' ? 1 : (game.hasPlayer(p => p.hp < p.maxHp) ? 2 : 0);
                        },
                        ai2(target) {
                            const cardName = ui.selected.buttons[0]?.link[2];
                            if (cardName === 'tao') return 10 - target.hp;
                            return get.attitude(get.player(), target);
                        }
                    }).set('validList', validList).forResult();
                    if (result?.bool && result.links?.length && result.targets?.length) {
                        finalCardName = result.links[0][2];
                        finalUser = result.targets[0];
                    }
                }
                if (finalCardName && finalUser) {
                    await finalUser.chooseUseTarget({
                        name: finalCardName,
                        isCard: true,
                    }, selectedCards, true, false)
                }
            },
            ai: {
                order: 6,
                result: {
                    target: 1,
                },
            },
            subSkill: {
                effect: {
                    trigger: {
                        source: "damageSource",
                        //player: "damageAfter",
                    },
                    silent: true,
                    async content(event, trigger, player) {
                        //player.removeSkill("xinxbeichan_locked");
                        /* delete player.getStat("skill")["fyrhyizuo"];
                        game.log(player, '重置了', "#g【翼佐】"); */
                        await player.useSkill("fyrhyizuo", null, [player]);
                    }
                }
            }
        },
        fyrhlianzhi: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: ["loseAfter"],
                global: ["loseAsyncAfter", "equipAfter", "addJudgeAfter", "gainAfter", "addToExpansionAfter"],
            },
            filter(event, player) {
                //return event.getl(player)?.hs?.length && !player.countCards("h");
                const lost = event.getl(player);
                if (!lost || !lost.hs || lost.hs.length === 0) { return false; }
                const cond1 = player.countCards("h") === 0;
                const cond2 = lost.hs.some(c => c.name === 'ying') && player.countCards("h", { name: 'ying' }) === 0;
                return cond1 || cond2;
            },
            popup: false,
            async cost(event, trigger, player) {
                const lost = trigger.getl(player);
                const cond1 = player.countCards("h") === 0;
                const cond2 = lost.hs.some(c => c.name === 'ying') && player.countCards("h", { name: 'ying' }) === 0;
                if (cond1 && cond2) {
                    const result = await player.chooseBool('是否获得三张【影】，并展示手牌摸三张牌？')
                        .set('ai', () => true).forResult();
                    if (result?.bool) {
                        event.result = { bool: true, cost_data: 3 };
                    }
                }
                else if (cond1) {
                    const result = await player.chooseBool('是否获得三张【影】？')
                        .set('ai', () => true).forResult();
                    if (result?.bool) { event.result = { bool: true, cost_data: 1 }; }
                }
                else if (cond2) {
                    const result = await player.chooseBool('是否展示手牌并摸三张牌？')
                        .set('ai', () => true).forResult();
                    if (result?.bool) { event.result = { bool: true, cost_data: 2 }; }
                }
            },
            async content(event, trigger, player) {
                const type = event.cost_data;
                if (type === 3) {
                    player.logSkill("fyrhlianzhi", null, null, null, [get.rand(1)]);
                }
                if (type === 2) {
                    player.logSkill("fyrhlianzhi", null, null, null, [get.rand(2, 4)]);
                }
                if (type === 1) {
                    player.logSkill("fyrhlianzhi", null, null, null, [get.rand(2, 4)]);
                }
                if (type === 1 || type === 3) {
                    await player.gain(lib.card.ying.getYing(3), "gain2");
                }
                if (type === 2 || type === 3) {
                    const hs = player.getCards("h");
                    if (hs.length > 0) {
                        await player.showCards(hs, get.translation(player) + "发动了【连帜】");
                    } else {
                        game.log(player, '没有手牌可展示');
                    }
                    await player.draw(3);
                }
            }
        },
        //关羽
        fyrhwusheng: {
            audio: "ext:永夜之境/audio:4",
            logAudio: () => "ext:永夜之境/audio/fyrhwusheng" + get.rand(1, 2) + ".mp3",
            trigger: {
                player: "phaseBegin",
            },
            filter(event, player) {
                return game.hasPlayer((current) => current.countCards("h") && current !== player);
            },
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2("fyrhwusheng"), (card, player, target) => {
                        return target != player && target.countCards('h');
                    })
                    .set("ai", target => {
                        // return 2 - get.attitude(get.player(), target);
                        const player = get.player();
                        const att = get.attitude(player, target);
                        if (att > 0) return 0;
                        return -att * target.countCards("h");
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                for (let i of [1, 2, 3]) {
                    if (!target.isIn() || target.countCards("h") === 0) { break; }
                    let num = Math.min(i, target.countCards("h"));
                    const result = await player.choosePlayerCard(target, "h", num)
                        .set("prompt", `###武圣###<div class="text center">第${i}次翻面${get.translation(target)}${get.cnNumber(num)}张手牌</div>`)
                        .forResult();
                    if (result?.bool && result.cards?.length) {
                        const selectedCards = result.cards;
                        const toShow = [];
                        const toHide = [];
                        selectedCards.forEach(card => {
                            if (get.is.shownCard(card)) {
                                toHide.push(card);
                            } else {
                                toShow.push(card);
                            }
                        });
                        if (toShow.length) { await target.addShownCards(toShow, "visible_fyrhwusheng"); }
                        if (toHide.length) { await target.hideShownCards(toHide, "visible_fyrhwusheng"); }
                        const shownShanCount = toShow.filter(c => c.name === 'shan').length;
                        for (let j = 0; j < shownShanCount; j++) {
                            game.playAudio("../extension/永夜之境/audio/", 'fyrhwusheng' + [4] + '.mp3');
                            if (player.canUse('sha', target, false)) {
                                await player.useCard({ name: 'sha', isCard: true }, target, false);
                            }
                        }
                        const hiddenShaCount = toHide.filter(c => c.name === 'sha').length;
                        for (let k = 0; k < hiddenShaCount; k++) {
                            const dialog = ui.create.dialog('hidden', `【武圣】请选择重铸你或${get.translation(target)}的任意张牌`);
                            dialog.add(`<div class="text center">${get.translation(player)}的牌</div>`);
                            dialog.add(player.getCards("he"));
                            dialog.add(`<div class="text center">${get.translation(target)}的牌</div>`);
                            const targetCards = target.getCards("he");
                            if (target === player || player.hasSkillTag("viewHandcard", null, target, true)) {
                                dialog.add(targetCards);
                            } else {
                                const shown = targetCards.filter(c => get.is.shownCard(c) || get.position(c) === 'e');
                                const hidden = targetCards.filter(c => !get.is.shownCard(c) && get.position(c) === 'h');
                                // 手动创建一个“按钮容器”，把明暗牌强制绑定在同一行
                                const container = ui.create.div('.buttons');
                                dialog.content.appendChild(container); // 将容器放入弹窗
                                if (shown.length) {
                                    // 生成明牌按钮，塞入容器，并同步给弹窗管理器
                                    const btns1 = ui.create.buttons(shown, 'card', container);
                                    dialog.buttons.addArray(btns1);
                                }
                                if (hidden.length) {
                                    // 生成暗牌卡背，塞入同一个容器
                                    const btns2 = ui.create.buttons(hidden.slice().randomSort(), 'blank', container);
                                    dialog.buttons.addArray(btns2);
                                }
                            }
                            /* dialog.add(`<div class="text center">${get.translation(player)}的牌</div>`);
                            dialog.add(player.getCards("he"));
                            dialog.add(`<div class="text center">${get.translation(target)}的牌</div>`);
                            const targetCards = target.getCards("he");
                            if (target === player || player.hasSkillTag("viewHandcard", null, target, true)) {
                                dialog.add(targetCards);
                            } else {
                                const shown = targetCards.filter(c => get.is.shownCard(c) || get.position(c) === 'e');
                                const hidden = targetCards.filter(c => !get.is.shownCard(c) && get.position(c) === 'h');
                                if (shown.length) {
                                    dialog.add(shown);
                                }
                                if (hidden.length) {
                                    dialog.add([hidden.slice().randomSort(), 'blank']);
                                }
                            } */
                            const result2 = await player.chooseButton(dialog, [1, Infinity]).set('ai', button => {
                                let player = get.player();
                                const card = button.link;
                                const owner = get.owner(card) || target;
                                /* const att = get.attitude(player, owner);
                                const val = get.value(card); 
                                if (att < 0) {
                                    return val - 5.5; 
                                } else {
                                    return 5.5 - val; 
                                } */
                                if (owner === target) {
                                    return 100;
                                }
                                else {
                                    const val = get.value(card);
                                    return 6 - val;
                                }
                            }).forResult();
                            if (result2?.bool && result2.links?.length) {
                                //await player.recast(result2.links);
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhwusheng' + [3] + '.mp3');
                                const pCards = [];
                                const tCards = [];
                                result2.links.forEach(card => {
                                    if (get.owner(card) === target) {
                                        tCards.push(card);
                                    } else {
                                        pCards.push(card);
                                    }
                                });
                                if (pCards.length > 0) {
                                    await player.recast(pCards);
                                }
                                if (tCards.length > 0 && target.isIn()) {
                                    await target.recast(tCards);
                                    await player.gain(tCards, "gain2")
                                }
                            }
                        }
                    } else {
                        break;
                    }
                }
            }
        },
        fyrhyijue: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "damageBegin4",
            },
            filter(event, player) {
                if (!event.source || event.source != player || event.player == player) {
                    return false;
                }
                return event.num >= event.player.hp;
            },
            forced: true,
            logTarget: "player",
            async content(event, trigger, player) {
                const target = trigger.player;
                const num = Math.min(3, player.countCards("h"));
                const result = await target
                    .choosePlayerCard(player, "h", num)
                    .set("prompt", (() => {
                        return (`###义绝###<div class="text center">是否翻面${get.translation(player)}${get.cnNumber(num)}张手牌，若没有明置【杀】，则防止此伤害</div>`);
                    })()
                    )
                    .set("ai", card => {
                        if (get.is.shownCard(card) && card.name == 'sha') {
                            return 20;
                        }
                        if (!get.is.shownCard(card)) {
                            return 2;
                        }
                        return 1;
                    })
                    .forResult();
                if (result?.bool && result.cards?.length) {
                    const selectedCards = result.cards;
                    const toShow = [];
                    const toHide = [];
                    selectedCards.forEach(card => {
                        if (get.is.shownCard(card)) {
                            toHide.push(card);
                        } else {
                            toShow.push(card);
                        }
                    });
                    if (toShow.length) { await player.addShownCards(toShow, "visible_fyrhwusheng"); }
                    if (toHide.length) {
                        await player.hideShownCards(toHide, "visible_fyrhwusheng");
                    }
                    const toShowShaCount = toShow.filter(c => c.name === 'sha').length;
                    if (toShowShaCount < 1) {
                        trigger.cancel();
                    }
                }
            }
        },
        //勾践
        fyrhtoulao: {
            init(player, skill) {
                player.storage[skill] = [1, 2];
                get.info(skill).updateMark(player, skill);
            },
            onremove(player, skill) {
                player.removeTip(skill);
                delete player.storage[skill];
            },
            updateMark(player, skill) {
                player.markSkill(skill);
                //player.addTip(skill, [get.translation(skill), ...player.storage[skill].slice(0, 2)].join(" "));
            },
            marktext: "醪",
            intro: {
                markcount(storage, player) {
                    let drawNum = storage[1];
                    let shaNum = storage[0];
                    return drawNum + "/" + shaNum;
                },
                content(storage, player) {
                    let drawNum = storage[1];
                    let shaNum = storage[0];
                    return "<li>额定摸牌数：" + drawNum +
                        "<li>出杀上限：" + shaNum;
                }
            },
            trigger: {
                player: "drawBegin",
            },
            filter(event, player) {
                return player.hasMark("fyrhtoulao_use");
            },
            async cost(event, trigger, player) {
                const storage = player.storage.fyrhtoulao;
                const num = trigger.num;
                const result = await player
                    .chooseButton([
                        `是否令其中一项数值+${num}`,
                        [
                            [
                                ["draw", `额定摸牌（当前${storage[1]}）`],
                                ["sha", `出杀上限（当前${storage[0]}）`],
                            ],
                            "textbutton",
                        ],
                    ])
                    .set("ai", button => {
                        const player = get.player();
                        const storage = player.storage.fyrhtoulao;
                        const num = _status.event.num;
                        if (Math.max(storage[0], storage[1]) >= 8) {
                            return 0;
                        }
                        // 计算选“摸牌”或“出杀”后的新差值
                        const diffIfDraw = Math.abs((storage[1] + num) - storage[0]);
                        const diffIfSha = Math.abs((storage[0] + num) - storage[1]);
                        if (button.link === "draw") {
                            // 如果选摸牌的差值更小，或者差值相等
                            return diffIfDraw <= diffIfSha ? 1 : 0;
                        } else if (button.link === "sha") {
                            // 如果选出杀的差值更小
                            return diffIfSha < diffIfDraw ? 1 : 0;
                        }
                        return 0;
                    })
                    .set("complexCard", true)
                    .set("num", num)
                    .forResult();
                event.result = {
                    bool: result.bool,
                    cost_data: result.links,
                };
            },
            async content(event, trigger, player) {
                const num = trigger.num;
                trigger.cancel();
                const result = event.cost_data[0];
                const storage = player.storage.fyrhtoulao;
                if (result == "draw") {
                    storage[1] += num;
                } else {
                    storage[0] += num;
                }

                await player.clearMark('fyrhtoulao_use', false);
                let cnum = Math.abs(storage[1] - storage[0]);
                if (cnum > 0) {
                    await player.addMark('fyrhtoulao_use', cnum, false);
                }
                //await player.removeMark('fyrhtoulao_use', 1, false);
            },
            group: ["fyrhtoulao_effect", "fyrhtoulao_use", "fyrhtoulao_round"],//
            subSkill: {
                round: {
                    silent: true,
                    charlotte: true,
                    trigger: {
                        global: "roundStart"
                    },
                    filter(event, player) {
                        return player.storage.fyrhtoulao;
                    },
                    async content(event, trigger, player) {
                        await player.clearMark('fyrhtoulao_use', false);
                        const storage = player.storage.fyrhtoulao;
                        let num = Math.abs(storage[1] - storage[0]);
                        if (num > 0) {
                            await player.addMark('fyrhtoulao_use', Math.abs(num), false);
                        }
                    },
                },
                effect: {
                    trigger: {
                        player: "phaseDrawBegin2",
                    },
                    forced: true,
                    silent: true,
                    firstDo: true,
                    filter(event, player) {
                        return !event.numFixed && typeof player.storage.fyrhtoulao[1] === 'number';
                    },
                    async content(event, trigger, player) {
                        const storage = player.storage.fyrhtoulao;
                        trigger.num = storage[1];
                    },
                    mod: {
                        cardUsable(card, player, num) {
                            const storage = player.storage.fyrhtoulao;
                            if (card.name == "sha") return num += storage[0];
                        },
                    },
                },
                use: {
                    mark: true,
                    marktext: "禁",
                    intro: {
                        markcount(storage, player) {
                            return (storage || 0).toString();
                        },
                        content(storage, player) {
                            return "回合内使用的下" + (storage || 0).toString() + "张牌无效";
                        },
                    },
                    charlotte: true,
                    onremove: true,
                    trigger: {
                        player: "useCard",
                    },
                    filter(event, player) {
                        return player.countMark("fyrhtoulao_use") > 0 && player == _status.currentPhase;
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    async content(event, trigger, player) {
                        trigger.all_excluded = true;
                        game.log(trigger.card, '被无效了');
                        player.removeMark("fyrhtoulao_use", 1, false);
                    },
                },
            }
        },
        //陈平
        fyrhjiedu: {
            trigger: {
                target: "useCardToTargeted",
            },
            filter(event, player) {
                return player.getCards("h", card => !get.is.shownCard(card)).length > 0
                    && event.player.getCards("h", card => !get.is.shownCard(card)).length > 0;
            },
            prompt2(event, player) {
                return `与${get.translation(event.player)}同时明置任意张牌，若两者有相同花色，你重铸你所有明置牌或转移此牌的唯一目标。`;
            },
            check(event, player) {
                return get.attitude(player, event.player) <= 0;
            },
            async content(event, trigger, player) {
                const cardUser = trigger.player;
                //const target = trigger.player;
                const targets = [player, cardUser].unique().sortBySeat();

                const next = player.chooseCardOL(targets, "请选择要明置的牌", true)
                    .set('selectCard', [1, Infinity])
                    .set('filterCard', function (card) {
                        return !get.is.shownCard(card);
                    })
                    .set("ai", function (card) {
                        return 7 - get.value(card);
                    });
                next.aiCard = function (target) {
                    const hs = target.getCards("h", card => !get.is.shownCard(card));
                    return { bool: true, cards: [hs.randomGet()] };
                };
                next._args.remove("glow_result");
                const result = await next.forResult();
                let playerChosen = [];
                let targetChosen = [];
                let allCards = [];
                // chooseCardOL 返回的纯数组，第 i 个结果对应 targets[i]
                for (let i = 0; i < targets.length; i++) {
                    const res = result[i];
                    if (res && res.bool && res.cards) {
                        allCards.addArray(res.cards);
                        if (targets[i] === player) playerChosen = res.cards;
                        if (targets[i] === cardUser) targetChosen = res.cards;
                    }
                }
                if (allCards.length === 0) return;
                // 明置卡牌
                if (playerChosen.length > 0) {
                    await player.addShownCards(playerChosen, "visible_fyrhjiedu");
                }
                // 如果使用者不是自己，且对方也选了牌，则明置对方的牌
                if (cardUser !== player && targetChosen.length > 0) {
                    await cardUser.addShownCards(targetChosen, "visible_fyrhjiedu");
                }
                game.log(player, "和", cardUser, "同时明置了", allCards);
                const playerSuits = playerChosen.map(c => get.suit(c));
                const targetSuits = targetChosen.map(c => get.suit(c));
                // 对比花色
                const hasCommonSuit = playerSuits.some(suit => targetSuits.includes(suit));
                if (!hasCommonSuit) return;
                game.log(player, "与", cardUser, "明置的牌中有相同花色");
                let list = [];
                let choiceList = [];
                const allShownCards = player.getCards("h", card => get.is.shownCard(card));
                if (allShownCards.length > 0) {
                    list.push('重铸');
                    choiceList.push(`重铸所有明置牌`);
                }
                // 判断目标是否唯一，找 trigger 的父事件
                const useCardEvent = trigger.getParent();
                if (useCardEvent.targets && useCardEvent.targets.length === 1) {
                    list.push('转移');
                    choiceList.push(`将${get.translation(trigger.card)}转移给其他角色`);
                }

                if (list.length === 0) return;
                const result2 = await player.chooseControl(list)
                    .set('prompt', get.prompt(event.skill) + ':请选择一项')
                    .set("choiceList", choiceList)
                    .set("ai", () => {
                        const player = get.player();
                        if (list.includes('转移')) {
                            const eff = get.effect(player, trigger.card, cardUser, player);
                            if (eff < 0) return list.indexOf('转移');
                        }
                        return list.indexOf('重铸');
                    })
                    .forResult();
                if (result2.control == '重铸') {
                    await player.recast(allShownCards);
                    // await player.draw(2);
                }
                if (result2.control == '转移') {
                    const result1 = await player
                        .chooseTarget("将" + get.translation(trigger.card) + '转移给一名其他角色', (card, player, target) => {
                            return target != trigger.player && target != player;
                        })
                        .set("ai", target => {
                            const player = get.player();
                            return get.effect(target, trigger.card, cardUser, player);
                        })
                        .forResult();
                    if (result1?.bool) {
                        const evt = trigger.getParent();
                        evt.triggeredTargets2.remove(player);
                        evt.targets.remove(player);
                        player.line(result1.targets[0]);
                        evt.targets.push(result1.targets[0]);
                        game.log(player, "将", trigger.card, "的目标转移给了", result1.targets[0]);
                    }
                }
            }
        },
        fyrhyouren: {
            mod: {
                cardUsable(card, player, num) {
                    if (card.name !== "sha") return;
                    const basicCount = player.getAllHistory("useCard", evt => get.type(evt.card, null, false) === "basic").length;
                    // （判断 evt.cards 的长度）
                    const gain2Count = player.getAllHistory("gain", evt => evt.getParent().name == 'draw' && evt.cards && evt.cards.length === 2).length;
                    if (basicCount > 0 && basicCount === gain2Count) {
                        return Infinity;
                    }
                },
                cardname(card, player, name) {
                    const basicCount = player.getAllHistory("useCard", evt => get.type(evt.card, null, false) === "basic").length;
                    const gain2Count = player.getAllHistory("gain", evt => evt.getParent().name == 'draw' && evt.cards && evt.cards.length === 2).length;
                    if (basicCount > 0 && basicCount === gain2Count) {
                        //if (lib.card[card.name]?.type === "trick") {
                        if (["trick", 'delay'].includes(lib.card[card.name]?.type)) {
                            return "wuzhong";
                        }
                    }
                },
            },
            init(player, skill) {
                lib.skill[skill].updateTip(player, skill);
            },
            updateTip(player, skill) {
                const basicCount = player.getAllHistory("useCard", evt => get.type(evt.card, null, false) === "basic").length;
                const gain2Count = player.getAllHistory("gain", evt => evt.getParent().name == 'draw' && evt.cards && evt.cards.length === 2).length;
                // 拼接
                const text = `游刃 ${basicCount} ${gain2Count}`;
                player.addTip(skill, text);
            },
            mark: true,
            marktext: "游",
            intro: {
                content(storage, player) {
                    const basicCount = player.getAllHistory("useCard", evt => get.type(evt.card, null, false) === "basic").length;
                    const gain2Count = player.getAllHistory("gain", evt => evt.getParent().name == 'draw' && evt.cards && evt.cards.length === 2).length;
                    let str = `基本牌已使用：<span style="color:yellow">${basicCount}</span> 次<br>`;
                    str += `一次性获得两张牌：<span style="color:yellow">${gain2Count}</span> 次`;

                    if (basicCount > 0 && basicCount === gain2Count) {
                        str += `<br><br><span style="color:#00ff00">【游刃】已触发</span>`;
                    }
                    return str;
                }
            },
            group: "fyrhyouren_update",
            subSkill: {
                update: {
                    trigger: { global: ["useCardAfter", "gainAfter", "drawAfter"] },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    silent: true,
                    content() {
                        player.markSkill("fyrhyouren");
                        lib.skill.fyrhyouren.updateTip(player, "fyrhyouren");
                        if (lib.skill.fyrhyouren.updateMarks) {
                            lib.skill.fyrhyouren.updateMarks(player);
                        }
                    }
                }
            },
        },
        //陈汤
        fyrhjiaobing: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhjiaobing${index}.mp3` : 2),
            init(player) {
                if (player === game.me) lib.skill.fyrhjiaobing.updateMarks(player);
            },
            onremove(player) {
                if (player === game.me) {
                    for (let c of player.getCards('h')) {
                        if (c.node.fyrh_mark) c.node.fyrh_mark.style.display = 'none';
                    }
                }
            },
            // 用于给手牌打标签的函数
            updateMarks(player) {
                // 只有玩家自己能看到标签
                if (player !== game.me) return;
                const cards = player.getCards('h');
                const handCount = cards.length;
                const expCards = player.getExpansions("fyrhjiaobing");
                const expPoints = expCards.map(c => get.number(c)).filter(n => n > 0);
                const X_before = expPoints.filter(n => n > handCount).length;

                for (let c of cards) {
                    // 如果这张牌还没有标签 UI，就动态创建一个
                    if (!c.node.fyrh_mark) {
                        c.node.fyrh_mark = ui.create.div('.fyrh-mark', c);
                        //CSS：半透明黑底，吸附在卡牌底部
                        //c.node.fyrh_mark.style.cssText = 'position:absolute; bottom:0; left:0; width:100%; background:rgba(0,0,0,0.8); color:white; font-size:12px; text-align:center; z-index:3; pointer-events:none; padding: 2px 0; font-family: "kaiti"; text-shadow: 1px 1px 1px black; line-height:1.2;';
                        //中心
                        c.node.fyrh_mark.style.cssText = 'position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:90%; background:rgba(0,0,0,0.65); color:white; font-size:14px; text-align:center; z-index:3; pointer-events:none; padding: 4px 0; font-family: "kaiti"; text-shadow: 1px 1px 2px black; line-height:1.3; border-radius:4px; box-shadow: 0 0 4px black;';
                    }
                    c.node.fyrh_mark.style.display = 'block'; // 确保标签可见

                    let type = get.type(c);
                    let info = get.info(c) || {};
                    let isMoveable = (type !== 'equip' && info.type !== 'delay');

                    let newExpPoints = expPoints.slice();
                    if (isMoveable) {
                        let pt = get.number(c);
                        if (pt > 0) newExpPoints.push(pt);
                    }

                    let A_minus_1 = handCount - 1;
                    let Y = newExpPoints.filter(n => n > A_minus_1).length;
                    let H_after = Math.max(A_minus_1, Y);
                    let Z = newExpPoints.filter(n => n > H_after).length;

                    let canTrigger = (X_before >= Z);
                    // 【标签内容渲染】：根据计算结果涂上不同的颜色
                    if (canTrigger) {
                        if (isMoveable) {
                            c.node.fyrh_mark.innerHTML = `<span style="color:#00FF00;font-weight:bold;">✔可移出</span><br>摸至 ${Y}`;
                        } else {
                            c.node.fyrh_mark.innerHTML = `<span style="color:#00BFFF;font-weight:bold;">✔触发(不移)</span><br>摸至 ${Y}`;
                        }
                    } else {
                        c.node.fyrh_mark.innerHTML = `<span style="color:#FF4500;font-weight:bold;">✖未达标</span>`;
                    }
                }
            },
            trigger: {
                player: "useCard",
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                if (!event.cards || event.cards.length === 0) return false;
                // 【状态:使用时（出牌后，摸牌前）】
                const currentHandCount = player.countCards('h'); // 即解读中的 A-1
                const expCards = player.getExpansions("fyrhjiaobing");
                const expPoints = expCards.map(c => get.number(c)).filter(n => n > 0);
                // 模拟：哪些牌会被移出游戏（过滤装备和延时锦囊）
                let addedPoints = [];
                let cardsFromHand = 0;
                for (const c of event.cards) {
                    const type = get.type(c);
                    const info = get.info(c) || {};
                    // 如果不是装备，也不是延时锦囊，则会移出游戏
                    if (type !== 'equip' && info.type !== 'delay') {
                        let pt = get.number(c);
                        if (pt > 0) addedPoints.push(pt);
                    }
                    // 精准溯源：这张牌是不是从手里打出去的
                    if (c.original === 'h') {
                        cardsFromHand++;
                    }
                }
                const newExpPoints = expPoints.concat(addedPoints); // 模拟打出后的新移出区
                // 【状态 1：使用前】还原出牌前的手牌数 A
                const H_before = currentHandCount + cardsFromHand;
                // 计算 X_before (使用前的 X)
                const X_before = expPoints.filter(n => n > H_before).length;
                // 【沙盘推演步骤 1】：计算 Y（移出后，点数大于当前手牌数 A-1 的牌数）
                const Y = newExpPoints.filter(n => n > currentHandCount).length;
                // 【沙盘推演步骤 2】：计算 Z（摸牌至 Y 后，点数大于新手牌数的牌数）
                // 如果摸牌至 Y，新回合的手牌数将是 max(A-1, Y)
                const H_after = Math.max(currentHandCount, Y);
                const Z = newExpPoints.filter(n => n > H_after).length;
                // 【沙盘推演步骤 3】：对比：如果 X未增加 (即 X_before >= Z)，则允许发动
                return X_before >= Z;
            },
            async content(event, trigger, player) {
                const cardsToMove = [];
                for (const c of trigger.cards) {
                    const type = get.type(c);
                    const info = get.info(c) || {};
                    if (type !== 'equip' && info.type !== 'delay') {
                        cardsToMove.push(c);
                    }
                }
                if (cardsToMove.length > 0) {
                    await player.addToExpansion(cardsToMove, player, "gain2").set("gaintag", ["fyrhjiaobing"]);
                }

                //  实时计算：当前应该摸到多少张牌（此时牌已经进了移出区，直接获取即可）
                const currentHandCount = player.countCards('h');
                const expCards = player.getExpansions("fyrhjiaobing");
                const expPoints = expCards.map(c => get.number(c)).filter(n => n > 0);

                // 计算当前的 X（即推演中的 Y）
                const targetHandCount = expPoints.filter(n => n > currentHandCount).length;

                if (targetHandCount > 0) {
                    await player.drawTo(targetHandCount);
                    game.log(player, "将手牌摸至", "#y" + targetHandCount, "张");
                }

                if (cardsToMove.length > 0 && targetHandCount < 0) {
                    player.logSkill("fyrhjiaobing", null, null, null, [get.rand(1, 2)]);
                } else {
                    player.logSkill("fyrhjiaobing", null, null, null, [get.rand(3, 5)]);
                }
            },
            mod: {
                aiOrder(player, card, num) {
                    const type = get.type(card);
                    const info = get.info(card) || {};
                    if (type !== 'equip' && info.type !== 'delay') {
                        let pt = get.number(card);
                        if (pt > 0) {
                            // 点数越小，出牌优先级越高
                            return num + (14 - pt);
                        }
                    }
                    return num;
                },
            },
            marktext: "兵",
            intro: {
                markcount: "expansion",
                mark(dialog, storage, player) {
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }

                    const cards = player.getExpansions("fyrhjiaobing");
                    const handCount = player.countCards("h");
                    let x = 0;
                    if (cards.length > 0) {
                        let expPoints = cards.map(c => get.number(c)).filter(n => n > 0);
                        x = expPoints.filter(n => n > handCount).length;
                    }

                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; border-bottom:1px solid rgba(128,128,128,0.3)">📔状态统计</div>');

                    const infoHtml =
                        '<div class="text center" style="margin: 15px 0; font-size: 20px; line-height: 2.2; font-weight: bold;">' +
                        `<div>当前手牌数：<span style="color:#FFFF00">${handCount}</span></div>` +
                        `<div>移出牌中点数大于 <span style="color:#FFFF00">${handCount}</span> 的牌数：<span style="color:#00BFFF">${x}</span></div>` +
                        '</div>';
                    dialog.addText(infoHtml);

                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🎴移出的牌</div>');
                    if (cards.length && player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        dialog.addText(`<div class="text center" style="opacity:0.6">共有${get.cnNumber(cards.length)}张牌</div>`);
                    }
                },
            },
            group: ["fyrhjiaobing_start", "fyrhjiaobing_ui"],
            subSkill: {
                start: {
                    trigger: { global: "gameDrawAfter" },
                    forced: true,
                    silent: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        const hs = player.getCards('h');
                        // 检查当前手里已经有几张启动牌
                        // 定义：点数在 1~3 之间，且不是装备、不是延时锦囊
                        const goodCards = hs.filter(c => {
                            const pt = get.number(c);
                            const type = get.type(c);
                            const info = get.info(c) || {};
                            return pt > 0 && pt <= 3 && type !== 'equip' && info.type !== 'delay';
                        });

                        const need = 4 - goodCards.length;
                        // 如果不足 4 张，开始从牌堆里换牌
                        if (need > 0) {
                            const toGain = [];
                            const pile = ui.cardPile.childNodes;

                            //翻遍牌堆，找 1~3 点的牌
                            for (let i = 0; i < pile.length; i++) {
                                const c = pile[i];
                                const pt = get.number(c);
                                const type = get.type(c);
                                const info = get.info(c) || {};
                                if (pt > 0 && pt <= 3 && type !== 'equip' && info.type !== 'delay') {
                                    toGain.push(c);
                                    if (toGain.length === need) break;
                                }
                            }
                            if (toGain.length > 0) {
                                // 挑出准备扔回牌堆的“废牌”（把好牌排除在外）
                                let badCards = hs.filter(c => !goodCards.includes(c));
                                // 按点数从大到小排序，优先把点数最大的牌扔回牌堆
                                badCards.sort((a, b) => get.number(b) - get.number(a));
                                const toLose = badCards.slice(0, toGain.length);
                                // 换牌：失去废牌（塞回牌堆底），获得好牌。
                                player.lose(toLose, ui.cardPile, 'insert');
                                player.gain(toGain, 'gain2');
                            }
                        }
                    }
                },
                ui: {
                    trigger: {
                        global: ["gameDrawAfter", "gainAfter", "loseAfter", "loseAsyncAfter", "addToExpansionAfter", "useCardAfter", "equipAfter", "addJudgeAfter", "phaseZhunbeiBegin"]
                    },
                    forced: true,
                    silent: true,
                    filter(event, player) {
                        return player === game.me && player.hasSkill('fyrhjiaobing');
                    },
                    async content(event, trigger, player) {
                        let lostCards = trigger.cards || trigger.cards2 || [];
                        for (let c of lostCards) {
                            if (c.node && c.node.fyrh_mark) {
                                c.node.fyrh_mark.style.display = 'none';
                            }
                        }

                        lib.skill.fyrhjiaobing.updateMarks(player);
                    }
                }

            }
        },
        //彭越
        fyrhliebing: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhliebing${index}.mp3` : 2),
            init(player) {
                // 初始成长值
                player.storage.fyrhliebing_use = 0.5;
            },
            getTargetType(card, player) {
                let isSelf = false;
                let isOther = false;
                const type = get.type(card);
                const info = get.info(card);
                if (type === 'equip') {
                    isSelf = true;
                } else if (info) {
                    if (info.toself) {
                        isSelf = true;
                    } else if (info.selectTarget === -1) {
                        isOther = true;
                        if (['taoyuan', 'tiesuo', 'wugu'].includes(get.name(card))) {
                            isSelf = true;
                        }
                    } else if (typeof info.filterTarget === 'function') {
                        // 传入真实 card 实体，且加入 try-catch 拦截怪异 DIY 牌的报错
                        const targets = game.filterPlayer(current => {
                            try {
                                return info.filterTarget(card, player, current);
                            } catch (e) {
                                return false;
                            }
                        });
                        if (targets.includes(player)) isSelf = true;
                        if (targets.some(p => p !== player)) isOther = true;

                        // 如果上面报错了什么都选不到，只要它是张牌，给它个默认值
                        if (!isSelf && !isOther) isOther = false;
                    } else {
                        if (info.notarget) { isSelf = false; }
                        else { isOther = true; }
                    }
                }
                return { self: isSelf, other: isOther };
            },

            enable: "chooseToUse",
            filter(event, player) {
                if (player.countMark('fyrhliebing_silent') < 1 || player.countCards('h') == 0) {
                    return false;
                };
                let canSha = false;
                let canWu = false;
                if (event.type === 'phase') {
                    canSha = player.hasUseTarget('sha');
                    canWu = player.hasUseTarget('wuzhong');
                } else if (typeof event.filterCard === 'function') {
                    canSha = event.filterCard({ name: 'sha', isCard: true }, player, event);
                    canWu = event.filterCard({ name: 'wuzhong', isCard: true }, player, event);
                }

                if (!canSha && !canWu) return false;
                return player.hasCard(card => {
                    const type = lib.skill.fyrhliebing.getTargetType(card, player);
                    return (canSha && type.other) || (canWu && type.self);
                }, 'h');
            },
            chooseButton: {
                dialog(event, player) {
                    const list = [
                        ['trick', '', 'wuzhong'],
                        ['basic', '', 'sha'],
                        ['basic', '', 'sha', 'fire'],
                        ['basic', '', 'sha', 'thunder']
                    ];
                    return ui.create.dialog("裂兵", [list, "vcard"]);
                },
                filter(button, player) {
                    const viewAsName = button.link[2];
                    /* const canUse = player.hasUseTarget({ name: viewAsName, nature: button.link[3] });
                    const hasMaterial = player.hasCard(card => {
                        if (get.position(card) !== 'h') return false;
                        const targetType = lib.skill.fyrhliebing.getTargetType(card, player);
 
                        if (viewAsName === 'wuzhong') return targetType.self;
                        if (viewAsName === 'sha') return targetType.other;
                        return false;
                    }, "h");
                    return canUse && hasMaterial && _status.event
                        .getParent()
                        .filterCard(get.autoViewAs({ name: button.link[2], nature: button.link[3] }, "unsure"), player, _status.event.getParent()); */
                    const nature = button.link[3];
                    const evt = _status.event.getParent();
                    let isAllowed = false;
                    if (evt.type === 'phase') {
                        isAllowed = player.hasUseTarget({ name: viewAsName, nature: nature });
                    } else if (typeof evt.filterCard === 'function') {
                        isAllowed = evt.filterCard({ name: viewAsName, nature: nature, isCard: true }, player, evt);
                    }
                    if (!isAllowed) return false;
                    return player.hasCard(card => {
                        if (get.position(card) !== 'h') return false;
                        const targetType = lib.skill.fyrhliebing.getTargetType(card, player);
                        if (viewAsName === 'wuzhong') return targetType.self;
                        if (viewAsName === 'sha') return targetType.other;
                        return false;
                    }, "h");
                },
                check(button) {
                    const player = get.player(),
                        card = get.autoViewAs({ name: button.link[2] }, "unsure");
                    return player.getUseValue(card);
                },
                backup(links, player) {
                    return {
                        filterCard(card, player) {
                            if (get.position(card) !== 'h') return false;
                            const viewAsName = links[0][2];
                            const targetType = lib.skill.fyrhliebing.getTargetType(card, player);
                            if (viewAsName === 'wuzhong') return targetType.self;
                            if (viewAsName === 'sha') return targetType.other;
                            return false;
                        },
                        selectCard: 1,
                        popname: true,
                        position: "h",
                        log: false,
                        popup: false,
                        viewAs: { name: links[0][2], nature: links[0][3] },
                        precontent(event, trigger, player) {
                            const cardName = event.result.cards[0].name;
                            if (cardName == 'sha') {
                                player.logSkill("fyrhliebing", null, null, null, [get.rand(3, 4)]);
                            } else {
                                player.logSkill("fyrhliebing", null, null, null, [get.rand(1, 2)]);
                            }
                            player.removeMark('fyrhliebing_silent', 1, false);
                        },
                    };
                },
                prompt(links, player) {
                    return "将一张符合条件的牌当作" + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】使用";
                },
                hiddenCard(player, name) {
                    if (!["sha", "wuzhong"].includes(name)) {
                        return false;
                    }
                    return player.countCards("hs");
                },
            },
            ai: {
                order: 8,
                result: {
                    player: 1,
                },
            },
            group: ['fyrhliebing_add', 'fyrhliebing_lock'],
            subSkill: {
                backup: {
                    sub: true,
                    skill_id: "fyrhliebing_backup",
                },
                add: {
                    trigger: { global: 'roundStart' },
                    forced: true,
                    silent: true,
                    async content(event, trigger, player) {
                        // 每轮给玩家发标记
                        const extra = (player.storage.fyrhnaoji && player.storage.fyrhnaoji[2]) || 0;
                        const num = player.storage.fyrhliebing_use + extra;
                        player.addMark('fyrhliebing_silent', num, false);
                    }
                },
                lock: {
                    mod: {
                        cardEnabled(card, player) {
                            if (get.position(card) !== 'h') return;
                            const evt = _status.event;
                            if (evt.name !== 'chooseToUse' || evt.type !== 'phase') return;
                            if (evt.skill === 'fyrhliebing_backup' || (evt.getParent && evt.getParent().skill === 'fyrhliebing_backup')) return;
                            //大于1才触发
                            if (player.countMark('fyrhliebing_silent') >= 1) {
                                return false;
                            }
                        }
                    }
                }
            }
        },

        fyrhnaoji: {
            audio: "ext:永夜之境/audio:2",
            init(player, skill) {
                player.storage[skill] = [0, 0, 0];
                player.storage.fyrhnaoji_mult = 1;
                get.info(skill).updateMark(player, skill);
            },
            onremove(player, skill) {
                player.removeTip(skill);
                delete player.storage[skill];
                delete player.storage.fyrhnaoji_mult;
            },
            updateMark(player, skill) {
                player.markSkill(skill);
                const formattedNumbers = player.storage[skill].slice(0, 3).map(num => Number(num).toFixed(1));
                player.addTip(skill, [...formattedNumbers].join("  "));
            },
            intro: {
                //markcount: storage => storage.slice(0, 3).map(i => i.toFixed(1)).join(" | "), 
                content: storage => `当前附加数值：<br>
                 攻击范围：<span style="color:red">+${storage[0].toFixed(1)}</span> (实际生效: +${Math.floor(storage[0])})<br>
                出杀上限：<span style="color:red">+${storage[1].toFixed(1)}</span> (实际生效: +${Math.floor(storage[1])})<br>
                裂兵每轮附加次数：<span style="color:red">+${storage[2].toFixed(1)}</span>`,
            },
            trigger: {
                player: ["useCardAfter"],
                source: "damageSource",
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
                if (trigger.name === "useCard") {
                    const mult = player.storage.fyrhnaoji_mult || 1;
                    const gain = 0.1 * mult; // 计算本次获得的成长值

                    player.storage.fyrhnaoji[0] += gain;
                    player.storage.fyrhnaoji[1] += gain;
                    player.storage.fyrhnaoji[2] += gain;


                    player.addMark('fyrhliebing_silent', gain, false);

                    get.info('fyrhnaoji').updateMark(player, 'fyrhnaoji');
                }
                else if (trigger.name === "damage") {
                    const result = await player.
                        chooseControl('裂兵', '挠击')
                        .set("ai", () => {
                            const player = get.player();
                            if (player.getAllHistory("useSkill", evt => evt.skill == "fyrhnaoji").length <= 1) {
                                return '裂兵';
                            }
                            else {
                                return '挠击';
                            }
                        })
                        .set('prompt', '选择一项【永久翻倍】其文本成长数值')
                        .forResult();
                    if (result?.control) {
                        player.logSkill("fyrhnaoji");
                    }
                    if (result.control === '裂兵') {
                        const delta = player.storage.fyrhliebing_use; // 翻倍前的数值
                        player.storage.fyrhliebing_use *= 2;
                        player.addMark('fyrhliebing_silent', delta, false);
                        game.log(player, "将", "#g【裂兵】", "的技能数值翻倍");
                    } else {
                        player.storage.fyrhnaoji_mult *= 2;
                        get.info('fyrhnaoji').updateMark(player, 'fyrhnaoji');
                        game.log(player, "将", "#g【挠击】", "的技能数值翻倍");
                    }
                }
            },
            mod: {
                cardUsable(card, player, num) {
                    const storage = player.storage.fyrhnaoji;
                    if (card.name === "sha" && storage) {
                        return num + Math.floor(storage[1]);
                    }
                },
                attackRange(player, num) {
                    const storage = player.storage.fyrhnaoji;
                    if (storage) {
                        return num + Math.floor(storage[0]);
                    }
                },
            },
        },
        //寒浞
        xinxfenjiao: {
            audio: "ext:永夜之境/audio:4",
            init(player) {
                player.storage.xinxfenjiao_draw = 2;
            },
            mark: true,
            intro: {
                content(storage, player) {
                    let drawNum = player.storage.xinxfenjiao_draw || 2;
                    let lostNum = 0;
                    player.getHistory("lose", (evt) => {
                        if (evt.cards2) {
                            lostNum += evt.cards2.length;
                        }
                    });
                    let X = player.maxHp - drawNum;
                    let conditionStr = (X > 0) ? ("需失去 " + X + " 张") : "不可触发(X<=0)";
                    return "<li>额定摸牌数：" + drawNum +
                        "<li>本回合失牌：" + lostNum +
                        "<li>触发条件：" + conditionStr;
                },
                markcount(storage, player) {
                    //return player.getHistory("lose").reduce((sum, evt) => sum + (evt.cards2||[]).length, 0);
                    let drawNum = player.storage.xinxfenjiao_draw || 2;
                    let lostNum = player.getHistory("lose").reduce((sum, evt) => sum + (evt.cards2 || []).length, 0);
                    let targetNum = player.maxHp - drawNum;
                    return lostNum + "/" + targetNum;
                },
            },
            trigger: {
                player: "loseAfter",
                global: ["loseAsyncAfter", "gainAfter", "addJudgeAfter", "equipAfter", "addToExpansionAfter"],
            },
            logAudio: () => ["ext:永夜之境/audio/xinxfenjiao3.mp3", "ext:永夜之境/audio/xinxfenjiao4.mp3"],
            forced: true,
            filter(event, player) {
                if (!event.getl?.(player)?.cards2?.length) {
                    return false;
                }
                if (player.hasSkill('xinxfenjiao_block')) return false;
                const baseDraw = player.storage.xinxfenjiao_draw || 2;
                const X = player.maxHp - baseDraw;
                if (X <= 0) return false;
                let totalLost = 0;
                player.getHistory("lose", function (evt) {
                    if (evt.cards2) {
                        totalLost += evt.cards2.length;
                    }
                });
                return totalLost >= X;
            },
            async content(event, trigger, player) {
                player.addTempSkill('xinxfenjiao_block');
                const currentDraw = player.storage.xinxfenjiao_draw || 2;
                const promptStr = "偾骄：调整额定摸牌数（当前为 " + currentDraw + "，需失去 " + (player.maxHp - currentDraw) + " 张牌触发）";
                const result = await player.chooseNumbers(promptStr, [{
                    prompt: "设置新的额定摸牌数",
                    min: 1,
                    max: player.maxHp
                }], true).set("processAI", () => {
                    const player = get.player();
                    let target = player.maxHp - 2;
                    return [target];
                }).forResult();
                if (result?.bool) {
                    const num = result.numbers[0];
                    player.storage.xinxfenjiao_draw = num;
                    game.log(player, "将额定摸牌数调整为", num);
                    await player.gainMaxHp();
                }
            },
            ai: {
                nokeep: true,
            },
            group: ['xinxfenjiao_effect'],
            subSkill: {
                effect: {
                    trigger: { player: "phaseDrawBegin2" },
                    forced: true,
                    filter(event, player) {
                        return !event.numFixed && typeof player.storage.xinxfenjiao_draw === 'number';
                    },
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxfenjiao' + [get.rand(1, 2)] + '.mp3');
                        trigger.num = player.storage.xinxfenjiao_draw;
                    },
                },
                block: {
                    mark: true,
                    charlotte: true,
                    marktext: "封",
                    intro: { content: "本回合不能使用牌" },
                    mod: {
                        cardEnabled(card, player) {
                            return false;
                        },
                    },
                    sub: true,
                }
            }


        },
        xinxxiangfu: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/xinxxiangfu${index}.mp3` : 2),
            enable: "chooseToUse",
            popup: false,
            filter(event, player) {
                const used = player.getStorage("xinxxiangfu_used");
                const list = ["sha", "shan", "jiu", "tao"];
                return list.some(name => {
                    if (used.includes(name)) return false;
                    const vcard = new lib.element.VCard({ name: name, isCard: true });
                    if (!event.filterCard(vcard, player, event)) return false;
                    // 检查是否有符合差值的目标
                    return game.hasPlayer(target => {
                        if (target === player) return false;
                        const diff = Math.abs(player.countCards("h") - target.countCards("h"));
                        if (name === "sha") {
                            return diff >= 3 && player.canUse(vcard, target);
                        }
                        if (name === "jiu") return diff === 2;
                        if (name === "shan") return diff === 1;
                        if (name === "tao") return diff === 0;
                        return false;
                    });
                });
            },
            chooseButton: {
                dialog(event, player) {
                    return ui.create.dialog('###相赴###<div class="text center">选择视为使用的牌', [get.inpileVCardList(info => get.type(info[2]) === "basic"), "vcard"]);
                },
                filter(button, player) {
                    const name = button.link[2];
                    const used = player.getStorage("xinxxiangfu_used");
                    if (used.includes(name)) return false;
                    const event = get.event().getParent();
                    const vcard = new lib.element.VCard(new lib.element.VCard({ name: button.link[2], nature: button.link[3], isCard: true }), player, event);
                    if (!event.filterCard(vcard, player, event)) return false;
                    return game.hasPlayer(target => {
                        if (target === player) return false;
                        const diff = Math.abs(player.countCards("h") - target.countCards("h"));
                        if (name === "sha") {
                            return diff >= 3 && player.canUse(vcard, target);
                        }
                        if (name === "jiu") return diff === 2;
                        if (name === "shan") return diff === 1;
                        if (name === "tao") return diff === 0;
                        return false;
                    });
                },
                check(button) {
                    return get.player().getUseValue(new lib.element.VCard({ name: button.link[2], nature: button.link[3], isCard: true }));
                },
                backup(links, player) {
                    const cardName = links[0][2];
                    return {
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],
                            isCard: true,
                        },
                        selectTarget: 1,
                        filterCard: () => false,
                        selectCard: -1,
                        log: false,
                        filterTarget(card, player, target) {
                            if (target === player) return false;
                            const diff = Math.abs(player.countCards("h") - target.countCards("h"));
                            if (cardName === "sha") return diff >= 3;
                            if (cardName === "jiu") return diff === 2;
                            if (cardName === "shan") return diff === 1;
                            if (cardName === "tao") return diff === 0;
                            return false;
                        },
                        async precontent(event, trigger, player) {
                            const target = event.result.targets[0];
                            const realCard = event.result.card;
                            //player.logSkill("xinxxiangfu", target);
                            if (player.hasSkill("xinxyixin")) {
                                player.markAuto("xinxxiangfu", [target]);
                                player.markSkill("xinxxiangfu");
                                const targets = game
                                    .filterPlayer(target => {
                                        return player.getStorage("xinxxiangfu").includes(target) && target.hasSkill("xinxxiangfu");
                                    }).sortBySeat();
                                if (player.getStorage("xinxxiangfu").length > 1) {
                                    for (const target of targets) {
                                        target.removeSkills("xinxxiangfu");
                                        game.log(target, "失去了技能", `#g【${get.translation("xinxxiangfu")}】`);
                                    }
                                } else {
                                    target.addSkills("xinxxiangfu");
                                    game.log(target, "获得了技能", `#g【${get.translation("xinxxiangfu")}】`);
                                }
                            } else {
                                if (!player.hasSkill("xinxyixin")) {
                                    player.logSkill("xinxyixin");
                                    player.removeSkills("xinxxiangfu");
                                    game.log(player, "失去了技能", `#g【${get.translation("xinxxiangfu")}】`);
                                }
                            }


                            const n1 = player.countCards("h");
                            const n2 = target.countCards("h");
                            if (n1 !== n2) {
                                const winner = n1 > n2 ? player : target;
                                const loser = n1 > n2 ? target : player;
                                if (winner.countCards("h") > 0) {
                                    await winner.chooseToDiscard("h", true);
                                }
                                await loser.draw();
                            }
                            player.addTempSkill("xinxxiangfu_used", "roundStart");
                            player.markAuto("xinxxiangfu_used", [event.result.card.name]);


                            if (realCard.name === "sha") {
                                const vSha = { name: 'sha', nature: realCard.nature, isCard: true };
                                const result = await player.chooseTarget(
                                    "相赴：请选择【杀】的目标",
                                    true,
                                    (card, player, target) => {
                                        return player.canUse(vSha, target);
                                    },
                                    (target) => {
                                        return -get.attitude(player, target);
                                    }
                                ).forResult();
                                if (result?.bool) {
                                    //把目标换成刚才新选的
                                    player.logSkill("xinxxiangfu", null, null, null, [1]);
                                    event.result.targets = result.targets;
                                    event.targets = result.targets;
                                    game.log(player, "对", result.targets, "使用了", realCard);
                                }
                                else {
                                    // 如果没得选或者强制卡住，视为空杀（目标为空）
                                    event.result.targets = [];
                                    event.targets = [];
                                }
                            }
                            // --- 针对【桃】 ---
                            else if (realCard.name === "tao") {
                                player.logSkill("xinxxiangfu", null, null, null, [5]);
                                const dyingPlayer = _status.event.dying || (_status.event.getParent() && _status.event.getParent().dying);
                                if (dyingPlayer) {
                                    event.result.targets = [dyingPlayer];
                                    event.targets = [dyingPlayer];
                                } else {
                                    event.result.targets = [player];
                                    event.targets = [player];
                                }
                            }

                            // --- 针对【酒】 ---
                            else if (realCard.name === "jiu") {
                                player.logSkill("xinxxiangfu", null, null, null, [2]);
                                event.result.targets = [player];
                                event.targets = [player];
                            }

                            // --- 针对【闪】 ---
                            else if (realCard.name === "shan") {
                                player.logSkill("xinxxiangfu", null, null, null, [get.rand(3, 4)]);
                                event.result.targets = [];
                                event.targets = [];
                            }
                        }
                    };
                },
                hiddenCard(player, name) {
                    return get.type(name) === "basic" && !player.getStorage("xinxxiangfu_used").includes(name);
                },
                prompt(links, player) {
                    const name = links[0][2];
                    let condition = "";
                    if (name === "sha") condition = "手牌差 ≥ 3";
                    else if (name === "jiu") condition = "手牌差 = 2";
                    else if (name === "shan") condition = "手牌差 = 1";
                    else if (name === "tao") condition = "手牌差 = 0";
                    return "〖相赴〗：请选择一名手牌差值为【" + condition + "】的角色，" +
                        "与其相赴（视为使用【" + get.translation(name) + "】）";
                },
            },
            intro: {
                mark(dialog, storage, player) {
                    if (storage) dialog.addSmall([storage.map(key => key.name), "character"]);
                },
            },
            ai: {
                order: 10,
                respondShan: true,
                respondSha: true,
                order(item, player) {
                    return 10;
                },
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 5;
                    },
                },
            },
            subSkill: {
                used: {
                    charlotte: true,
                    onremove: true,
                    marktext: "已用",
                    intro: {
                        content: "本轮已使用牌名：$",
                    },
                    "skill_id": "xinxxiangfu_used",
                    sub: true,
                    sourceSkill: "xinxxiangfu",
                    "_priority": 0,
                },
            }
        },
        xinxyixin: {
            audio: "ext:永夜之境/audio:2",
            forced: true,
            /* trigger: {
                global: "dieAfter",
            },
            filter(event, player) {
                if (!player.isIn() && event.player != player) {
                    return false;
                }
                if (!player.getStorage("xinxxiangfu").includes(event.player)) {
                    return false;
                }
                return game.hasPlayer(current => current.isIn() && player.getStorage("xinxxiangfu").includes(current));
            },
            async content(event, trigger, player) {
                await player.unmarkAuto("xinxxiangfu", trigger.player);
                const targets = game
                    .filterPlayer(target => {
                        return player.getStorage("xinxxiangfu").includes(target);
                    }).sortBySeat();
                if (player.getStorage("xinxxiangfu").length == 1) {
                    if (targets.length > 0) {
                        targets[0].addSkill('xinxxiangfu');
                        targets[0].popup('xinxxiangfu');
                        game.log(targets[0], "获得了技能", `#g【${get.translation("xinxxiangfu")}】`);
                    }
                }
            } */
        },
        xinxsijiao: {
            audio: "ext:永夜之境/audio:6",
            init(player, skill) {
                player.storage[skill] = [0, 1, 2, false];
                get.info(skill).updateMark(player, skill);
            },
            onremove(player, skill) {
                player.removeTip(skill);
                delete player.storage[skill];
            },
            updateMark(player, skill) {
                player.markSkill(skill);
                player.addTip(skill, [get.translation(skill), ...player.storage[skill].slice(0, 3)].join(" "));
            },
            intro: {
                markcount: storage =>
                    storage
                        .slice(0, 3)
                        .map(i => i.toString())
                        .join(""),
                content: storage => "当前选项数值为：" + storage.slice(0, 3),
            },
            trigger: {
                player: "useCard",
            },
            filter(event, player) {
                return true;
            },
            popup: false,
            forced: true,
            async content(event, trigger, player) {
                const storage = player.storage[event.name];
                const shownBasicCount = player.countCards("h", card => get.type(card) == "basic" && get.is.shownCard(card));
                const unshownCount = player.countCards("h", card => !get.is.shownCard(card));
                const handCount = player.countCards("h");
                if (shownBasicCount > 0 && shownBasicCount >= storage[0] && storage[0] > 0) {
                    let cards = player.getCards('h', card => get.type(card) == 'basic' && player.canRecast(card) && get.is.shownCard(card))
                    if (storage[0] == cards.length) {
                        await player.recast(cards);
                    }
                    else {
                        const result = await player.chooseCard('h', storage[0], "请重铸" + get.cnNumber(storage[0]) + "张明置基本牌")
                            .set('filterCard', card => get.type(card) == 'basic' && player.canRecast(card) && get.is.shownCard(card))
                            .set('ai', card => 6 - get.value(card))
                            .forResult();

                        if (result.bool) {
                            player.logSkill("xinxsijiao", null, null, null, [6]);
                            await player.recast(result.cards);
                        }
                    }
                }
                else if (unshownCount >= storage[1]) {
                    //let cards = player.getCards('h', card => !get.is.shownCard(card))
                    const result = await player.chooseCard('h', storage[1], true)
                        .set('filterCard', card => !get.is.shownCard(card))
                        .set('prompt', '请选择明置' + get.cnNumber(storage[1]) + '张手牌')
                        .set("ai", card => 6 - get.value(card))
                        .forResult();
                    if (result.bool) {
                        player.logSkill("xinxsijiao", null, null, null, [5]);
                        await player.addShownCards(result.cards, "visible_xinxsijiao");
                    }

                }
                else if (storage[2] > handCount) {
                    player.logSkill("xinxsijiao", null, null, null, [get.rand(1, 2)]);
                    await player.drawTo(storage[2]);
                }
                else {
                    storage[0]++;
                    storage[1]++;
                    storage[2]++;
                    get.info(event.name).updateMark(player, event.name);
                    player.logSkill("xinxsijiao", null, null, null, [get.rand(3, 4)]);
                    game.log(player, "的", "#g【" + get.translation(event.name) + "】", "数值均+1");
                    player.popup("数值+1");
                }
            },
            mod: {
                aiOrder(player, card, num) {  //保证手里有两张明置锦囊，且手里没有明置基本，即可实现摸至4，
                    // 优先使用【明置的基本牌】
                    if (get.type(card) == "basic" && get.is.shownCard(card)) {
                        return num + 100;
                    }
                    // 其次优先使用【暗置牌】 只有当明置非基本牌大于1时，才会令数值+1
                    if (!get.is.shownCard(card)) {
                        return num + 50;
                    }
                    return num;
                },
            }
        },
        xinxyuwei: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/xinxyuwei${index}.mp3` : 2),
            marktext: "围",
            intro: {
                mark(dialog, storage, player) {
                    const cards = player.getExpansions("xinxyuwei");
                    if (player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        return "共有" + get.cnNumber(cards.length) + "张牌";
                    }
                },
                markcount: "expansion",
            },
            hiddenCard(player, name) {
                if ((player.getStat("skill")?.xinxyuwei ?? 0) > 0) {
                    return false;
                }
                return player.hasCard(card => get.name(card) === name, 'h');
            },
            popup: false,
            enable: "chooseToUse",
            filter(event, player) {
                return get.inpileVCardList(info => {
                    const name = info[2];
                    const nature = info[3];
                    // 只有当手牌里有名称且属性一致的牌时
                    return player.hasCard(card => {
                        return get.name(card) === name && (get.nature(card) || null) === (nature || null);
                    }, 'h');
                }).some(card => event.filterCard(new lib.element.VCard({
                    name: card[2],
                    nature: card[3],
                    isCard: true,
                }), player, event));
            },
            chooseButton: {
                dialog(event, player) {
                    const list = get.inpileVCardList(info => {
                        const name = info[2];
                        const nature = info[3];
                        // 名字相同 且 (属性均为null 或 属性相同)
                        return player.hasCard(card => {
                            return get.name(card) === name && (get.nature(card) || null) === (nature || null);
                        }, 'h');
                    });
                    return ui.create.dialog(`###逾围###<div class="text center">以${get.poptip("xinx_yichushiyong",)}`, [list, "vcard"]);
                },
                filter(button, player) {
                    const event = get.event().getParent();
                    const name = button.link[2];
                    const nature = button.link[3];
                    if (!player.hasCard(c => get.name(c) === name && (get.nature(c) || null) === (nature || null), 'h')) {
                        return false;
                    }
                    return event.filterCard(new lib.element.VCard({
                        name: name,
                        nature: nature,
                        isCard: true
                    }), player, event);
                },
                check(button) {
                    const event = get.event().getParent();
                    if (event.type !== "phase") {
                        return 1;
                    }
                    return get.player().getUseValue(new lib.element.VCard({
                        name: button.link[2],
                        nature: button.link[3],
                        isCard: true
                    }));
                },
                prompt(links) {
                    return '###逾围###<div class="text center">使用' + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】并将其置于武将牌上";
                },
                backup(links, player) {
                    return {
                        selectCard: 1,
                        position: 'h',
                        filterCard: function (card) {
                            const reqName = links[0][2];
                            const reqNature = links[0][3];
                            // 名字相同，且属性相同
                            return get.name(card) === reqName && (get.nature(card) || null) === (reqNature || null);

                        },
                        ai1(card) {
                            let count = 0;
                            let hs = player.countCards('h');
                            const num = get.number(card);
                            count += num;
                            if (Math.abs(count - hs) < 5) {
                                return 0;
                            }
                            return count;
                        },
                        viewAs: {
                            name: links[0][2],
                            nature: links[0][3],
                            isCard: true
                        },
                        onuse(result, player) {
                            if (result.cards && result.cards.length) {
                                const type = get.type(result.cards[0]);
                                if (type == 'basic' || type == 'trick') {
                                    player.addToExpansion(result.cards, "gain2").set("gaintag", ["xinxyuwei"]);
                                    result.cards = [];
                                }
                            }
                        },
                        async precontent(event, trigger, player) {
                            const num = get.number(event.result.card);
                            player.logSkill("xinxyuwei", null, null, null, [get.rand(1, 2)]);
                            await player.drawTo(num);
                            player.addSkill('xinxyuwei_gain');
                            if (!player.storage.xinxyuwei_gain) {
                                player.storage.xinxyuwei_gain = 0;
                            }
                            player.storage.xinxyuwei_gain += num;
                            player.addSkill('xinxyuwei_lose');
                            player.clearMark("xinxyuwei_lose", false);
                            player.addMark("xinxyuwei_lose", num, false);
                            player.markSkill('xinxyuwei_gain');
                            player.tempBanSkill("xinxyuwei", "forever");
                        }
                    }
                }
            },
            ai: {
                order: 10,
                result: {
                    player(player) {
                        if (player.countCards("h") > 7) return -1;
                        if (player.countCards("h") < 3) return 5;
                        return 2;
                    },

                },
            },
            subSkill: {
                gain: {
                    marktext: "失效",
                    intro: {
                        content(storage) {
                            return `使用${get.cnNumber(storage)}张牌后恢复${get.poptip('xinxyuwei')}`;
                        },
                    },
                    charlotte: true,
                    onremove: true,
                    trigger: { player: "useCardBegin" },
                    filter(event, player) {
                        return player.storage.xinxyuwei_gain > 0;
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        player.storage.xinxyuwei_gain--;
                        player.markSkill('xinxyuwei_gain');
                        if (player.storage.xinxyuwei_gain == 0) {
                            delete player.storage[`temp_ban_xinxyuwei`];
                            player.popup("逾围");
                            game.playAudio("../extension/永夜之境/audio/", 'xinxyuwei' + [get.rand(3, 4)] + '.mp3');
                            game.log(player, "恢复了技能", "#g【逾围】");
                            player.removeSkill("xinxyuwei_lose");
                            player.removeSkill("xinxyuwei_gain");
                        }
                    },
                },
                lose: {
                    marktext: "失去",
                    intro: {
                        content: `还剩#个回合失去${get.poptip('xinxyuwei')}`,
                    },
                    charlotte: true,
                    onremove: true,
                    trigger: { global: "phaseAfter" },
                    filter(event, player) {
                        return player.storage[`temp_ban_xinxyuwei`] && player.countMark("xinxyuwei_lose") > 0;
                    },
                    forced: true,
                    popup: false,
                    lastDo: true,
                    async content(event, trigger, player) {
                        await player.removeMark("xinxyuwei_lose", 1, false);
                        if (player.storage[`temp_ban_xinxyuwei`] && player.countMark("xinxyuwei_lose") == 0) {
                            player.removeSkill("xinxyuwei");
                            player.removeSkill("xinxyuwei_gain");
                        }
                        if (player.countMark("xinxyuwei_lose") == 0) {
                            player.removeSkill("xinxyuwei_lose");
                        }
                    },
                },
            },
        },
        xinxcongzu: {
            audio: "ext:永夜之境/audio:2",
            mark: true,
            zhuanhuanji: true,
            marktext: "☯",
            intro: {
                content(storage, player) {
                    let str = (storage ? '阴' : '阳') + '状态。';
                    if (!storage) str += '当你使用基本牌时，重铸此牌，然后转换为阴。';
                    else str += '你的出杀上限+X（X为“百炼”句触发次数）。';
                    if (player.storage.xinxbailian_location === 'xinxcongzu') {
                        str += '当你使用牌指定不为其他角色的目标后，将此句移走。';
                    }
                    return str;
                },
            },
            trigger: { player: "useCard" },
            filter(event, player) {
                return !player.storage.xinxcongzu && get.type(event.card) === 'basic';
            },
            forced: true,
            async content(event, trigger, player) {
                player.changeZhuanhuanji('xinxcongzu');
                await player.recast(trigger.cards);
            },
            mod: {
                cardUsable(card, player, num) {
                    // 只要核心句在从卒上，当前是阴状态，就加成
                    // 使用 startsWith 来忽略 _yin 或 _yang 后缀
                    if (player.storage.xinxcongzu &&
                        (player.storage.xinxbailian_location || '').startsWith('xinxcongzu') &&
                        card.name === 'sha') {
                        return num + (player.storage.xinxbailian_count || 0);
                    }
                }
            },
        },
        xinxbailian: {
            audio: "ext:永夜之境/audio:4",
            init(player) {
                if (!player.storage.xinxbailian_location) {
                    player.storage.xinxbailian_location = 'xinxbailian';
                    player.storage.xinxbailian_count = 0;
                }
            },
            mark: true,
            intro: {
                content(storage, player) {
                    const loc = player.storage.xinxbailian_location || 'xinxbailian';
                    const count = player.storage.xinxbailian_count || 0;
                    if (loc === 'xinxbailian') {
                        return `当前拥有描述：当你使用牌指定不为其他角色的目标后，将本句移至你另一技能当前项。<br>当前X为：${count}`;
                    }
                    //去掉 _yin 或 _yang 后缀，得到纯技能名 (如 xinxyibian)
                    const rawName = loc.replace(/_(yin|yang)$/, '');
                    const cnName = get.translation(rawName);
                    let stateText = '';
                    if (loc.endsWith('_yin')) stateText = '(阴)';
                    if (loc.endsWith('_yang')) stateText = '(阳)';
                    return `当前描述位于技能：${cnName}${stateText}<br>当前X为：${count}`;
                }
            },
            trigger: { player: "useCardToPlayered" },
            filter(event, player) {
                if (event.target !== player || !event.isFirstTarget || event.targets.length !== 1) return false;
                const loc = player.storage.xinxbailian_location || 'xinxbailian';
                if (loc === 'xinxbailian') return true;
                // 解析后缀
                let requiredState = false; // 默认为阳
                let skillName = loc;
                if (loc.endsWith('_yin')) {
                    requiredState = true;
                    skillName = loc.replace('_yin', '');
                } else if (loc.endsWith('_yang')) {
                    requiredState = false;
                    skillName = loc.replace('_yang', '');
                }
                // 获取当前技能实际状态
                let actualState = player.storage[skillName];
                // 只有 实际状态 == 记录状态，才能触发移动
                return actualState === requiredState;
            },
            forced: true,
            popup: false,
            priority: 2,
            async content(event, trigger, player) {
                if (typeof player.storage.xinxbailian_count !== 'number') player.storage.xinxbailian_count = 0;
                player.storage.xinxbailian_count++;

                let currentRawLoc = (player.storage.xinxbailian_location || 'xinxbailian').replace(/_(yin|yang)$/, '');

                const list = player.getStockSkills(false, true).filter(s => s !== currentRawLoc);

                if (list.length > 0) {
                    const result = await player.chooseButton([
                        `百炼：请将描述从【${get.translation(currentRawLoc)}】移动至以下一个技能`,
                        [list, 'skill']
                    ])
                        .set('ai', button => {
                            const p = _status.event.player;
                            const target = button.link;
                            const shaCount = p.countCards('h', 'sha');
                            if (target === 'xinxcongzu') {
                                if (!p.storage.xinxcongzu) return 0;
                                if (shaCount > 2) return 20;
                                return 4;
                            }
                            if (target === 'xinxyibian') {
                                if (!p.storage.xinxyibian) return 0;
                                if (shaCount <= 2) return 15;
                                return 6;
                            }
                            if (target === 'xinxbailian') return 5;
                            return 1;
                        })
                        .set('forced', true)
                        .forResult();
                    if (result.links && result.links.length) {
                        player.logSkill("xinxbailian");
                        let targetSkill = result.links[0];
                        let suffix = '_yang'; // 默认标记为阳
                        // 移动时，记录目标当前的阴阳状态，检查新家的状态，决定给核心句贴什么标签
                        // 如果目标是 xinxcongzu 且它现在是阴状态，则后缀设为 _yin
                        if (targetSkill === 'xinxcongzu' && player.storage.xinxcongzu) suffix = '_yin';
                        if (targetSkill === 'xinxyibian' && player.storage.xinxyibian) suffix = '_yin';
                        if (targetSkill === 'xinxbailian') suffix = '';
                        player.storage.xinxbailian_location = targetSkill + suffix;
                        player.popup(get.translation(targetSkill), 'wood');
                        game.log(player, '将百炼描述移动到了', `#g【${get.translation(targetSkill)}】`);
                        player.updateMarks(['xinxcongzu', 'xinxbailian', 'xinxyibian']);
                    }
                }

                // 联动回转
                if (currentRawLoc === 'xinxcongzu' && player.storage.xinxcongzu) {
                    player.changeZhuanhuanji('xinxcongzu');
                    game.log(player, '的', '#g【从卒】', '重置为了阳状态');
                }
                else if (currentRawLoc === 'xinxyibian' && player.storage.xinxyibian) {
                    player.changeZhuanhuanji('xinxyibian');
                    game.log(player, '的', '#g【亦变】', '重置为了阳状态');
                }
            }
        },
        xinxyibian: {
            audio: "ext:永夜之境/audio:2",
            mark: true,
            zhuanhuanji: true,
            marktext: "☯",
            intro: {
                content(storage, player) {
                    let str = (storage ? '阴' : '阳') + '状态。';
                    if (!storage) str += '当你使用锦囊牌时，重铸此牌，然后转换为阴。';
                    else str += '你的额定摸牌数+X（X为“百炼”句触发次数）。';

                    if (player.storage.xinxbailian_location === 'xinxyibian') {
                        str += '当你使用牌指定不为其他角色的目标后，将此句移走。';
                    }
                    return str;
                },
            },
            trigger: { player: "useCard" },
            filter(event, player) {
                return !player.storage.xinxyibian && get.type2(event.card) === 'trick';
            },
            forced: true,
            async content(event, trigger, player) {
                player.changeZhuanhuanji('xinxyibian');
                await player.recast(trigger.cards);
            },
            group: ["xinxyibian_effect"],
            subSkill: {
                effect: {
                    trigger: { player: "phaseDrawBegin2" },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        // 只要在亦变上，且当前是阴状态，就生效
                        return player.storage.xinxyibian &&
                            (player.storage.xinxbailian_location || '').startsWith('xinxyibian') &&
                            !event.numFixed;
                    },
                    async content(event, trigger, player) {
                        const xVal = player.storage.xinxbailian_count || 0;
                        if (xVal > 0) {
                            game.playAudio("../extension/永夜之境/audio/", 'xinxbailian' + [get.rand(1, 4)] + '.mp3');
                            trigger.num += xVal;
                            game.log(player, '的', '#g【亦变】', '令摸牌数 +' + xVal);
                        }
                    }
                }
            }
        },
        xinxqingding: {
            audio: "ext:永夜之境/audio:7",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/xinxqingding${index}.mp3` : 2),
            trigger: {
                player: ["drawBegin", "recoverBegin"],
                source: "damageBegin1",
            },
            forced: true,
            popup: false,
            usable: 1,
            filter(event, player) {
                return event.num > 0;
            },
            async content(event, trigger, player) {
                const hasDraw =
                    player.getRoundHistory("gain", evt => {
                        return evt.getParent().name == "draw";
                    }).length;
                const hasRecover = game.getRoundHistory("changeHp", evt => {
                    return evt.getParent().name == "recover" && evt.player == player;
                }).length;
                const hasDamage = player.getRoundHistory("sourceDamage").length;
                if (trigger.name == "draw" && !hasRecover && !hasDamage) {
                    trigger.num += trigger.num * 2;
                    game.log(player, '发动', '#g【倾鼎】', '将摸牌数改为' + trigger.num);
                    if (!player.storage?.xinxqingding) {
                        player.logSkill("xinxqingding", null, null, null, [get.rand(1, 2)]);
                    } else {
                        player.logSkill("xinxqingding", null, null, null, [get.rand(3, 4)]);
                    }
                }
                if (trigger.name == "recover" && !hasDraw && !hasDamage) {
                    trigger.num += trigger.num * 2;
                    game.log(player, '发动', '#g【倾鼎】', '将回复值改为' + trigger.num);
                    if (!player.storage?.xinxqingding) {
                        player.logSkill("xinxqingding", null, null, null, [get.rand(1, 2)]);
                    } else {
                        player.logSkill("xinxqingding", null, null, null, [get.rand(3, 4)]);
                    }
                }
                if (trigger.name == "damage" && !hasDraw && !hasRecover) {
                    trigger.num += trigger.num * 2;
                    game.log(player, '发动', '#g【倾鼎】', '将伤害值改为' + trigger.num);
                    if (!player.storage?.xinxqingding) {
                        player.logSkill("xinxqingding", null, null, null, [get.rand(1, 2)]);
                    } else {
                        player.logSkill("xinxqingding", null, null, null, [get.rand(3, 4)]);
                    }
                }
                if (trigger.name == "draw" && hasDraw && hasRecover && hasDamage && !player.storage.xinxqingding) {
                    player.logSkill("xinxqingding", null, null, null, [5]);
                    player.storage.xinxqingding = true;
                    player.$fullscreenpop("已得三足", "thunder");
                    game.log(player, '发动', '#g【倾鼎】', '，已成功得其三足');
                }
                if (trigger.name == "recover" && hasDraw && hasRecover && hasDamage && !player.storage.xinxqingding) {
                    player.logSkill("xinxqingding", null, null, null, [5]);
                    player.storage.xinxqingding = true;
                    player.$fullscreenpop("已得三足", "thunder");
                    game.log(player, '发动', '#g【倾鼎】', '，已成功得其三足');
                }
                if (trigger.name == "damage" && hasDraw && hasRecover && hasDamage && !player.storage.xinxqingding) {
                    player.logSkill("xinxqingding", null, null, null, [5]);
                    player.storage.xinxqingding = true;
                    player.$fullscreenpop("已得三足", "thunder");
                    game.log(player, '发动', '#g【倾鼎】', '，已成功得其三足');
                }
                if (trigger.name == "draw" && hasRecover && hasDamage && !player.storage.xinxqingding) {
                    player.logSkill("xinxqingding", null, null, null, [get.rand(6, 7)]);
                    trigger.cancel();
                    game.log(player, '发动', '#g【倾鼎】', '，取消了本次摸牌');
                }
                if (trigger.name == "recover" && hasDraw && hasDamage && !player.storage.xinxqingding) {
                    player.logSkill("xinxqingding", null, null, null, [get.rand(6, 7)]);
                    trigger.cancel();
                    game.log(player, '发动', '#g【倾鼎】', '，取消了本次回复');
                }
                if (trigger.name == "damage" && hasDraw && hasRecover && !player.storage.xinxqingding) {
                    player.logSkill("xinxqingding", null, null, null, [get.rand(6, 7)]);
                    trigger.cancel();
                    game.log(player, '发动', '#g【倾鼎】', '，取消了本次伤害');
                }
            },
        },
        fyrhjianji: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: ["roundEnd"],
            },
            filter(event, player) {
                return game.filterPlayer().every(target => {
                    const history = target.getRoundHistory("damage");
                    return history.length > 0;
                });
            },
            firstDo: true,
            forced: true,
            locked: false,
            async content(event, trigger, player) {
                await player.recover();
                player.insertPhase();
            },
        },
        xinxyuanyuan: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/xinxyuanyuan${index}.mp3` : 2),
            trigger: {
                player: "phaseDiscardBegin",
            },
            forced: true,
            filter(event, player) {
                return player.countCards("he") > 0;
            },
            popup: false,
            async content(event, trigger, player) {
                //trigger.cancel();
                const result = await player.chooseCardTarget({
                    forced: true,
                    prompt: get.prompt("xinxyuanyuan"),
                    prompt2: `<div class="text center">移出任意张牌，令至少一名角色视为对你使用【杀】</div>`,
                    position: "he",
                    selectCard: [0, Infinity],
                    selectTarget: [1, Infinity],
                    //filterTarget: lib.filter.notMe,
                    ai1(card) {
                        const player = get.player();
                        const num = Math.floor(player.countCards('h') / 2);
                        if (num <= 0) return 0;
                        const allCards = player.getCards("he");
                        allCards.sort((a, b) => {
                            const typeA = get.type(a);
                            const typeB = get.type(b);
                            const isBasicA = (typeA === 'basic');
                            const isBasicB = (typeB === 'basic');
                            if (isBasicA && !isBasicB) return -1;
                            if (!isBasicA && isBasicB) return 1;
                            return get.value(a, player) - get.value(b, player);
                        });
                        if (allCards.indexOf(card) < num) {
                            return 6 - get.value(card, player);
                        }
                        return 0;
                        /* const player = _status.event.player;
                        const handCount = player.countCards('h');
                        const hp = player.hp;
                        const num = handCount - hp; 
                        if (num <= 0) return 0;
                        const allCards = player.getCards("he");
                        allCards.sort((a, b) => get.value(a, player) - get.value(b, player));
                        if (allCards.indexOf(card) < num) {
                            return  5- get.value(card, player);
                        }
                        return 0; */
                    },
                    ai2(target) {
                        const player = get.player();
                        /* const att = get.attitude(player, target);
                        if (player.name == 'xinx_wuyuan') {
                            if (att > 0) return 10;
                        } else {
                            if (att < 0) return 10;
                        }
                        return 0; */
                        const isWuyuan = (player.name === 'xinx_wuyuan');
                        const att = get.attitude(player, target);
                        if (isWuyuan) {
                            if (att < 0) return 0;
                        } else {
                            if (att > 0) return 0;
                        }
                        const candidates = game.filterPlayer(current => {
                            if (current === player) return false;
                            const currentAtt = get.attitude(player, current);
                            return isWuyuan ? (currentAtt >= 0) : (currentAtt <= 0);
                        });
                        if (candidates.length > 0) {
                            candidates.sort((a, b) => {
                                const attA = get.attitude(player, a);
                                const attB = get.attitude(player, b);
                                if (isWuyuan) {
                                    if (attA !== attB) return attB - attA;
                                } else {
                                    if (attA !== attB) return attA - attB;
                                }
                                return a.hp - b.hp;
                            });
                            if (target === candidates[0]) {
                                return 10;
                            }
                        }
                        return 0;
                    },
                    allowChooseAll: true,
                })
                    .set('complexCard', true)
                    .forResult();

                if (result.bool) {
                    const targets = result.targets;
                    const cards = result.cards;
                    const tag = "xinxyuanyuan_" + player.name;
                    lib.translate[tag] = "" + get.translation(player.name).slice(0, 4);
                    await player.addToExpansion(cards, "gain2").set("gaintag", ["xinxyuanyuan", tag]);
                    player.updateMark("xinxyuanyuan");
                    player.logSkill("xinxyuanyuan", null, null, null, [get.rand(3, 4)]);
                    if (targets.length) {
                        player.line(targets);
                        player.markAuto("xinxyuanyuan", targets);
                        player.markSkill("xinxyuanyuan");
                        for (const target of targets) {
                            if (target.isIn()) {
                                await target.useCard({ name: "sha", isCard: true }, player, false);
                            }
                        }
                        //await targets.forEach(target =>  target.useCard({ name: "sha", isCard: true }, player, false));
                    }

                }
            },
            marktext: "冤",
            intro: {
                mark(dialog, storage, player) {
                    const cards = player.getExpansions('xinxyuanyuan');
                    if (player.isUnderControl(true)) {
                        dialog.addAuto(cards);
                    } else {
                        return "共有" + get.cnNumber(cards.length) + "张牌";
                    }
                },
                markcount: "expansion",
            },
            group: ["xinxyuanyuan_kill", 'xinxyuanyuan_draw'],
            subSkill: {
                draw: {
                    trigger: { global: "useCardEnd" },
                    forced: true,
                    charlotte: true,
                    filter(event, player) {
                        const expansions = player.getExpansions('xinxyuanyuan');
                        if (expansions.length <= 0) return false;
                        const targets = game
                            .filterPlayer(target => {
                                return player.getStorage("xinxyuanyuan").includes(target);
                            }).sortBySeat();
                        if (event.player != player && !targets.includes(event.player)) return false;
                        const useType = get.type2(event.card);
                        return expansions.some(card => get.type2(card) == useType);
                    },
                    async content(event, trigger, player) {
                        const useType = get.type2(trigger.card);
                        const target = trigger.player;
                        const expansions = player.getExpansions('xinxyuanyuan');
                        const matches = expansions.filter(card => get.type2(card) == useType);
                        const result = await player.chooseButton(
                            [
                                `冤冤：移去一张${get.translation(useType)}牌，与${get.translation(target)}各摸两张牌`,
                                matches
                            ],
                            true
                        ).forResult();

                        if (result.bool) {
                            const lose = result.links[0];
                            await player.loseToDiscardpile(lose);
                            //await player.gain(lose, "gain2");
                            game.playAudio("../extension/永夜之境/audio/", 'xinxyuanyuan' + [get.rand(1, 2)] + '.mp3');
                            game.log(player, "移去了", lose);
                            player.updateMark("xinxyuanyuan");
                            await game.asyncDraw([player, target], 2);
                            const remaining = player.getExpansions('xinxyuanyuan');
                            if (remaining.length == 0) {
                                game.log(player, "移去了所有“冤”牌");
                                const targets = game
                                    .filterPlayer(target => {
                                        return player.getStorage("xinxyuanyuan").includes(target);
                                    }).sortBySeat();
                                for (const target of targets) {
                                    target.addTempSkill("xinxyuanyuan");
                                    player.storage.xinxyuanyuan_kill_target = target;
                                }
                                player.addTempSkill("xinxyuanyuan_kill");
                                game.log("冤冤相报何时了？");
                            }
                        }
                    }
                },
                kill: {
                    trigger: {
                        source: "damageBegin3",
                    },
                    forced: true,
                    charlotte: true,
                    onremove: true,
                    filter(event, player) {
                        return event.player == player.storage.xinxyuanyuan_kill_target;
                    },
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxyuanyuan' + [5] + '.mp3');
                        const targetHp = Math.max(1, trigger.player.hp);
                        trigger.num = targetHp;
                        game.log(player, "对", trigger.player, "造成的伤害改为", targetHp);
                    }
                }
            }
        },
        xinxjilang: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjilang" + index + ".mp3" : 2),
            trigger: {
                player: "useCardEnd",
            },
            filter(event, player) {
                const index = player.getHistory("useCard").indexOf(event);
                return index == 1 || index == 2;
                //return player.getHistory("useCard").indexOf(event) == 1;
            },
            forced: true,
            locked: false,
            popup: false,
            async content(event, trigger, player) {
                const index = player.getHistory("useCard").indexOf(trigger);
                if (index == 1) {
                    player.logSkill("xinxjilang", null, null, null, [get.rand(1, 2)]);
                    await player.draw(2);
                } else if (index == 2) {
                    player.logSkill("xinxjilang", null, null, null, [get.rand(3, 4)]);
                    if (player.getHistory("useCard")) {
                        player.getHistory("useCard").length = 0;
                    }
                    var stat = player.getStat();
                    if (stat && stat.card) {
                        stat.card = {};
                    }
                }
                player.markSkill("xinxjilang");
            },
            mark: true,
            marktext: "浪",
            intro: {
                content(storage, player) {
                    return "本回合已使用 " + player.getHistory("useCard").length + " 张牌";
                },
                markcount(storage, player) {
                    let useNum = player.getHistory("useCard").length || 0;
                    return useNum;
                },
            },
        },
        xinxsian: {
            audio: "ext:永夜之境/audio:3",
            trigger: {
                player: "damageBegin4",
            },
            filter(event, player) {
                return event.num > 0;
            },
            limited: true,
            skillAnimation: true,
            animationColor: "thunder",
            "prompt2": "令即将受到的伤害-1",
            /* check(event, player) {
                const list = [];
                const skills = player.getOriginalSkills();
                for (let skill of skills) {
                    if (lib.skill[skill].limited && player.awakenedSkills.includes(skill)) {
                        list.push(skill);
                    }
                }
                const num = list.length;
                if (num < 1) { return false; }
                return true;
            }, */
            async content(event, trigger, player) {
                await player.awakenSkill(event.name);
                trigger.num--;
                const list = [];
                const skills = player.getOriginalSkills();
                for (let skill of skills) {
                    if (lib.skill[skill].limited && player.awakenedSkills.includes(skill)) {
                        list.push(skill);
                    }
                }
                if (!list.length) return;
                const num = list.length;
                player.addSkill('xinxsian_draw');
                player.addMark('xinxsian_draw', num, false);
            },

            subSkill: {
                draw: {
                    mark: true,
                    charlotte: true,
                    onremove: true,
                    marktext: "安",
                    intro: {
                        content(storage, player) {
                            return "额定摸牌数+" + storage;
                        },
                    },
                    trigger: {
                        player: "phaseDrawBegin2",
                    },
                    forced: true,
                    popup: false,
                    filter(event, player) {
                        return !event.numFixed && player.hasMark('xinxsian_draw');
                    },
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxsian' + [get.rand(1, 3)] + '.mp3');
                        trigger.num += player.countMark(event.name);
                    },
                }
            },
        },
        xinxsizhan: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                source: "damageBegin1",
            },
            logTarget: "player",
            limited: true,
            skillAnimation: true,
            animationColor: "fire",
            filter(event, player) {
                return true;
            },
            "prompt2": "令即将对其造成的伤害+1",
            check(event, player) {
                return (
                    get.attitude(player, event.player) < 0 &&
                    !event.player.hasSkillTag("filterDamage", null, {
                        player: player,
                        card: event.card,
                    })
                );
            },
            async content(event, trigger, player) {
                await player.awakenSkill(event.name);
                trigger.num++;
                const list = [];
                const skills = player.getOriginalSkills();
                for (let skill of skills) {
                    if (lib.skill[skill].limited && player.awakenedSkills.includes(skill)) {
                        list.push(skill);
                    }
                }
                if (!list.length) return;
                const num = list.length;
                player.addSkill('xinxsizhan_sha');
                player.storage.xinxsizhan_sha = num;
                player.markSkill("xinxsizhan_sha");
            },
            subSkill: {
                sha: {
                    init(player) {
                        player.storage.xinxsizhan_sha = 0;
                    },
                    mark: true,
                    onremove: true,
                    charlotte: true,
                    marktext: "战",
                    intro: {
                        content(storage, player) {
                            return `出杀上限+${(storage)}`;
                        },
                        markcount(storage) {
                            return `${(storage)}`;
                        },
                    },
                    mod: {
                        cardUsable(card, player, num) {
                            if (card.name == "sha") return num += player.storage.xinxsizhan_sha;
                        },
                    }
                }
            }
        },
        xinxsitui: {
            audio: "ext:永夜之境/audio:2",
            enable: "phaseUse",
            limited: true,
            skillAnimation: true,
            animationColor: "metal",
            discard: false,
            lose: false,
            delay: false,
            getNum(player) {
                let list = [];
                const skills = player.getOriginalSkills();
                for (let skill of skills) {
                    if (lib.skill[skill].limited && player.awakenedSkills.includes(skill)) {
                        list.push(skill);
                    }
                }
                return list.length;
            },
            prompt2(event, player) {
                const num = lib.skill.xinxsitui.getNum(player) + 1;
                return `是否选择获得牌堆或弃牌堆中的${num}张普通锦囊牌？`;
            },
            async content(event, trigger, player) {
                await player.awakenSkill(event.name);
                const num = lib.skill.xinxsitui.getNum(player);
                const cards = [];
                // 遍历牌堆 (ui.cardPile)
                for (let i = 0; i < ui.cardPile.childNodes.length; i++) {
                    let card = ui.cardPile.childNodes[i];
                    if (get.type(card) === 'trick') cards.push(card);
                }
                // 遍历弃牌堆 (ui.discardPile)
                for (let i = 0; i < ui.discardPile.childNodes.length; i++) {
                    let card = ui.discardPile.childNodes[i];
                    if (get.type(card) === 'trick') cards.push(card);
                }

                if (cards.length === 0) {
                    player.popup('无锦囊可取');
                    return;
                }
                const result = await player.chooseCardButton(
                    cards,
                    `请选择获得${num}张普通锦囊牌`,
                    [1, num]
                ).set('filterButton', (button) => {
                    return get.type(button.link) === 'trick';
                }).
                    set("ai", (button) => {
                        const player = get.player(),
                            card = button.link;
                        const allWuxies = cards.filter(c => c.name == 'wuxie');
                        if (card.name == "wuxie") {
                            if (allWuxies.length > 0 && card === allWuxies[0]) {
                                return 50;
                            }
                            return 5;
                        }
                        if (card.name == "huogong") {
                            return 40;
                        }
                        if (card.name == "wuzhong") {
                            return 30;
                        }
                        return get.value(card);
                    }).
                    forResult();
                if (result.bool && result.links && result.links.length) {
                    player.addSkill('xinxsitui_gain');
                    await player.gain(result.links, 'gain2');
                    player.addGaintag(result.links, "eternal_xinxsitui_tag");
                }
            },
            ai: {
                order: 10,
                result: {
                    player(player) {
                        if (lib.skill.xinxsitui.getNum(player) > 0) {
                            return 2;
                        }
                        return 0;
                    },
                },
            },
            subSkill: {
                tag: {
                    "skill_id": "xinxsitui_tag",
                    sub: true,
                    sourceSkill: "xinxsitui",
                },
                gain: {
                    trigger: {
                        global: "phaseJieshuBegin",
                    },
                    filter(event, player) {
                        return Array.from(ui.discardPile.childNodes).some(card => card.hasGaintag("eternal_xinxsitui_tag"));
                    },
                    charlotte: true,
                    popup: false,
                    forced: true,
                    async content(event, trigger, player) {
                        game.playAudio("../extension/永夜之境/audio/", 'xinxsitui' + [get.rand(1, 2)] + '.mp3');
                        const cards = Array.from(ui.discardPile.childNodes).filter(card => card.hasGaintag("eternal_xinxsitui_tag"));
                        player.gain(cards, "gain2");
                    },
                    sub: true,

                },
            }

        },
        fyrhzhiwen: {
            audio: "ext:永夜之境/audio:2",
            enable: "chooseToUse",
            filter(event, player) {
                const handCount = player.countCards("h");
                const totalCount = player.countCards("hes");
                const banName = player.getStorage("fyrhzhiwen_used");
                const banNum = player.getStorage("fyrhzhiwen_num");
                let canMode1 = (handCount === 1) && (!banNum.includes(1));
                let canMode3 = (totalCount >= 3) && (!banNum.includes(3));
                if (!canMode1 && !canMode3) { return false; }
                return ["sha", "juedou"].some(name => {
                    if (banName.includes(name)) return false;
                    if (!event.filterCard({
                        name: name,
                        nature: null,
                        isCard: true,
                        storage: { zhiwenss: true }
                    }, player, event)) {
                        return false;
                    }
                    return true;
                });
                /* return get
                   .inpileVCardList(info => {
                       const name = info[2];
                       if (info[3]) {
                           return false;
                       }
                       if (name != "sha" && name != "juedou") {
                           return false;
                       }
                       return !banName.includes(name);
                   })
                   .some(card => {
                       return event.filterCard({
                           name: card[2] , 
                           nature: card[3],
                           isCard: true,   
                           storage: { zhiwenss: true }   
                       }, player, event);
                   }); */
            },
            chooseButton: {
                dialog(event, player) {
                    const list = get
                        .inpileVCardList(info => {
                            const name = info[2];
                            if (info[3]) {
                                return false;
                            }
                            if (name != "sha" && name != "juedou") {
                                return false;
                            }
                            return !player.getStorage("fyrhzhiwen_used").includes(name);
                        })
                        .filter(card => player.hasCard(event.filterCard({ name: card[2], nature: card[3] }, player, event), "hes"));
                    return ui.create.dialog("鸷刎", [list, "vcard"]);
                },
                filter(button, player) {
                    return true;
                },
                check(button) {
                    if (_status.event.getParent().type != "phase") {
                        return 1;
                    }
                    const player = get.event().player,
                        value = player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    return value;
                },
                backup(links, player) {
                    return {
                        filterCard(card, player) {
                            const banNum = player.getStorage("fyrhzhiwen_num");
                            const handCount = player.countCards("h");
                            const isHand = get.position(card) === "h";
                            let allowMode1 = (handCount === 1 && !banNum.includes(1) && isHand);
                            let allowMode3 = (!banNum.includes(3));
                            return allowMode1 || allowMode3;
                        },
                        selectCard() {
                            const player = get.player();
                            const banNum = player.getStorage("fyrhzhiwen_num");
                            const handCount = player.countCards("h");
                            const totalCount = player.countCards("hes");
                            // 使用 includes，数组判断
                            let canMode1 = (handCount === 1 && !banNum.includes(1));
                            let canMode3 = (totalCount >= 3 && !banNum.includes(3));
                            if (canMode1 && canMode3) return [1, 3];
                            if (canMode1) return [1, 1];
                            if (canMode3) return [3, 3];
                            return -1;
                        },
                        complexCard: true,
                        popname: true,
                        //check(card) {
                        ai1(card) {
                            const player = get.player();
                            if (player.countCards("h") === 1) {
                                if (get.position(card) === "h") {
                                    return 20;
                                }
                                return -10;
                            }
                            //return 6 - get.value(card);
                            return 10 - player.getUseValue(card);
                        },
                        position: "hse",
                        viewAs: {
                            name: links[0][2], nature: links[0][3], storage: {
                                zhiwenss: true,
                            },
                        },
                        async precontent(event, trigger, player) {
                            const realCards = event.result.cards;
                            const useNum = realCards.length;
                            const cardName = event.result.card.name;
                            player.removeSkill("fyrhzhiwen_damage");
                            player.unmarkAuto("fyrhzhiwen_num", [1, 3]);
                            player.unmarkAuto("fyrhzhiwen_used", ["sha", "juedou"]);
                            const controlList = ["选项一", "选项二", "背水！"];
                            const choiceInfo = [
                                `下次仅能以${useNum === 1 ? "三张牌" : "一张牌"}方式转化`,
                                `下次仅能转化为${cardName === "sha" ? "【决斗】" : "【杀】"}`,
                                "背水！(伤害+1，且同时触发上述两项限制)"
                            ];
                            const result = await player
                                .chooseControl(controlList)
                                .set("choiceList", choiceInfo)
                                .set("prompt", get.prompt('fyrhzhiwen'))
                                .set("ai", () => {
                                    const player = _status.event.player;
                                    const h = player.countCards("h");
                                    if (h === 4 || h === 1) {
                                        return "背水！";
                                    }
                                    return "选项二";
                                })
                                .forResult();
                            player.logSkill("fyrhzhiwen");
                            if (["选项一", "背水！"].includes(result.control)) {
                                player.markAuto("fyrhzhiwen_num", [useNum]);
                            }
                            if (["选项二", "背水！"].includes(result.control)) {
                                player.markAuto("fyrhzhiwen_used", [cardName]);
                            }
                            if (result.control == "背水！") {
                                player.addTempSkill("fyrhzhiwen_damage");
                            }
                        }
                    };
                },
                prompt(links, player) {
                    const banNum = player.getStorage("fyrhzhiwen_num");
                    let numText = "最后一张手牌或三张牌";
                    if (banNum.includes(1)) {
                        numText = "三张牌";
                    }
                    else if (banNum.includes(3)) {
                        numText = "一张牌";
                    }
                    return "将" + numText + "当作" + (get.translation(links[0][3]) || "") + "【" + get.translation(links[0][2]) + "】使用或打出";
                },
            },
            hiddenCard(player, name) {
                return ["sha", "juedou"].includes(name) && player.countCards("hes");
            },
            mark: true,
            intro: {
                content(storage, player) {
                    let str = "";
                    const banNum = player.getStorage("fyrhzhiwen_num");
                    const banName = player.getStorage("fyrhzhiwen_used");
                    if (banNum.length) str += `<li>不可使用${banNum.join("/")}张牌转化\n`;
                    if (banName.length) str += `<li>不可转化为${banName.map(n => get.translation(n)).join("/")}`;
                    return str || "无限制";
                }
            },
            locked: false,
            mod: {
                cardUsable(card, player, num) {
                    if (card?.storage?.zhiwenss) {
                        return Infinity;
                    }
                },
                /* aiOrder(player, card, num) {
                    if (get.name(card) === "juedou") return num + 100;
                }, */
            },
            ai: {
                expose: 0.4,
                skillTagFilter(player) {
                    if (!player.countCards("hes")) {
                        return false;
                    }
                },
                order(item, player) {
                    const h = player.countCards("h");
                    if (h === 1) {
                        return 30;
                    }
                    if (h === 3) {
                        return 0.1;
                    }
                    return 6;
                },
                result: {
                    player(player) {
                        const h = player.countCards("h");
                        if (h === 1) return 15;
                        if (h === 3) return 0.1;
                        return 1;
                    },
                },
                tag: {
                    respondSha: true,
                    damage: 1,
                    nokeep: true,
                },
            },
            subSkill: {
                backup: {
                    "skill_id": "fyrhzhiwen_backup",
                    sub: true,
                    sourceSkill: "fyrhzhiwen",
                    "_priority": 0,
                },
                used: {
                    sub: true,
                },
                damage: {
                    trigger: {
                        global: "damageBegin1",
                    },
                    filter(event, player) {
                        var targets = event.getParent(2).targets;
                        if (!targets || targets.length != 1) {
                            return false;
                        }
                        if (!event.card || !event.card.storage || !event.card.storage.zhiwenss) {
                            return false;
                        }
                        var target = event.player,
                            card = event.cards[0];
                        if (!target.isIn()) {
                            return false;
                        }
                        return true;
                    },
                    forced: true,
                    charlotte: true,
                    content() {
                        trigger.num++;
                        game.log(player, "选择了背水令", "【" + get.translation(trigger.card.name) + "】", "伤害+1");
                        player.removeSkill("fyrhzhiwen_damage");
                    },

                },
            },


        },
        fyrhminnian: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: "dying",
            },
            forced: true,
            locked: false,
            check: () => true,
            filter(event) {
                return game.hasPlayer(current => !current.isLinked());
            },
            async content(event, trigger, player) {
                player.drawTo(player.maxHp);
                const count = game.countPlayer(current => !current.isLinked());
                const num = Math.min(2, count);
                const result = await player
                    .chooseTarget(`请选择横置${get.cnNumber(num)}名角色`, [num, num], true, (card, player, target) => {
                        return !target.isLinked();
                    })
                    .set('ai', (target) => {
                        const player = _status.event.player;
                        if (target == player) {
                            return 10;
                        }
                        return -get.attitude(player, target);
                    })
                    .forResult();
                if (result.bool) {
                    const targets = result.targets;
                    player.line(targets);
                    for (let i of targets.sortBySeat()) {
                        await i.link(true);
                    }
                    if (targets.includes(player)) {
                        await player.recover();
                    }
                }
            },

        },
        fyrhfenjue: {
            audio: "ext:永夜之境/audio:1",
            enable: "phaseUse",
            limited: true,
            skillAnimation: true,
            animationColor: "fire",
            filter(event, player) {
                const cards = get.discarded().filterInD("d");
                return !player.countCards("h") && cards.length > 0;
            },
            async content(event, trigger, player) {
                player.awakenSkill(event.name);
                const cards = get.discarded().filterInD("d");
                await player.damage(1, 'fire');
                await player.gain(cards, "gain2");
            },
            ai: {
                order: 1,
                result: {
                    player(player) {
                        const cards = get.discarded().filterInD("d");
                        if (cards.length > 4) {
                            return 2;
                        }
                        return -0.5;
                    }
                },
            },
        },
        fyrhlihua: {
            audio: "ext:永夜之境/audio:3",
            enable: "phaseUse",
            usable: 1,
            position: "he",
            lose: false,
            discard: false,
            delay: false,
            filter(event, player) {
                return player.countCards("he");
            },
            filterCard: lib.filter.cardRecastable,
            check(card) {
                var player = _status.event.player,
                    val = 5 + ["shan"].includes(get.name(card)) * 1.5;
                if (player.needsToDiscard() > 2 && get.name(card) == "sha" && player.countCards("hs", "sha") > 1) {
                    val += 0.5;
                }
                return val - get.value(card);
            },
            async content(event, trigger, player) {
                const { cards, name } = event;
                await player.recast(cards);
                const cecards = get.discarded().filterInD("d");
                const hscards = player.getCards("h");
                const alllength = cecards.length + hscards.length;
                const checkHasValidCombo = () => {
                    const allCards = [...cecards, ...hscards];
                    if (allCards.length < 3) return false;
                    const suitCounts = {};
                    for (const card of allCards) {
                        const suit = get.suit(card);
                        suitCounts[suit] = (suitCounts[suit] || 0) + 1;
                        if (suitCounts[suit] >= 3) return true;
                    }
                    const types = new Set();
                    for (const card of allCards) {
                        types.add(get.type2(card));
                    }
                    if (types.size >= 3) return true;

                    return false;
                };
                if (alllength >= 3 && checkHasValidCombo()) {
                    const result = await player.chooseButton([
                        `###${get.prompt("fyrhlihua")}###<div class="text center">将三张类别各不同或花色均相同的牌移出游戏，对一名角色造成一点火焰伤害</div>`,
                        `###<div class="text center">中央区</div>###`,
                        [cecards],
                        `###<div class="text center">手牌区</div>###`,
                        [hscards]
                    ])
                        .set("selectButton", 3)
                        .set('filterButton', button => {
                            const selected = ui.selected.buttons;
                            if (!selected || selected.length === 0) return true;
                            const nextList = [...selected, button];
                            const types = nextList.map(but => get.type2(but.link));
                            const isSameSuit = nextList.every(but => get.suit(but.link) === get.suit(nextList[0].link));
                            const isDiffType = new Set(types).size === nextList.length;
                            return !ui.selected.buttons?.some(but => get.suit(but.link) !== get.suit(button.link))
                                || isDiffType;

                        })
                        .set("complexSelect", true)
                        .set('ai', (button) => {
                            const player = _status.event.player;
                            const card = button.link;
                            if (!_status.event.ai_plan) {
                                const allCards = [...cecards, ...hscards];
                                const getDiscardCost = (c) => {
                                    let val = get.value(c, player);
                                    if (cecards.includes(c)) {
                                        val -= 1000;
                                    }
                                    return val;
                                };
                                let bestPlan = null;
                                let minCost = Infinity;
                                // === 策略 A：花色均相同 ===
                                const suits = {};
                                for (const c of allCards) {
                                    const s = get.suit(c);
                                    if (!suits[s]) suits[s] = [];
                                    suits[s].push(c);
                                }
                                for (const s in suits) {
                                    if (suits[s].length >= 3) {
                                        // 按"代价"从小到大排序
                                        // 因为中央区代价是负数，所以中央区牌会排在最前面
                                        suits[s].sort((a, b) => getDiscardCost(a) - getDiscardCost(b));
                                        const pick = suits[s].slice(0, 3);
                                        const cost = pick.reduce((sum, c) => sum + getDiscardCost(c), 0);

                                        if (cost < minCost) {
                                            minCost = cost;
                                            bestPlan = pick;
                                        }
                                    }
                                }
                                // === 策略 B：类别各不同 ===
                                const typesMap = { basic: [], trick: [], equip: [] };
                                for (const c of allCards) {
                                    let type = get.type2(c);
                                    if (typesMap[type]) {
                                        typesMap[type].push(c);
                                    }
                                }
                                if (typesMap.basic.length > 0 && typesMap.trick.length > 0 && typesMap.equip.length > 0) {
                                    const pick = [];
                                    let currentCost = 0;
                                    ['basic', 'trick', 'equip'].forEach(type => {
                                        typesMap[type].sort((a, b) => getDiscardCost(a) - getDiscardCost(b));
                                        const bestCard = typesMap[type][0];
                                        pick.push(bestCard);
                                        currentCost += getDiscardCost(bestCard);
                                    });

                                    if (currentCost < minCost) {
                                        minCost = currentCost;
                                        bestPlan = pick;
                                    }
                                }
                                _status.event.ai_plan = bestPlan || [];
                            }

                            if (_status.event.ai_plan.includes(card)) {
                                return 1;
                            }
                            return 0;
                        })
                        .forResult();
                    if (result?.bool && result.links?.length) {
                        await player.addToExpansion(result.links, "gain2").set("gaintag", ["fyrhlihua"]);
                        player.markSkill("fyrhlihua_mark");
                        const result1 = await player.chooseTarget('对一名角色造成一点火焰伤害').set('ai', target => {
                            return get.damageEffect(target, _status.event.player, _status.event.player);
                        }).forResult();
                        if (result1.bool) {
                            player.line(result1.targets[0])
                            result1.targets[0].damage('fire');
                        }
                    }
                    player.when('phaseAfter')
                        .step(async (event, trigger, player) => {
                            const cards = player.getExpansions("fyrhlihua");
                            if (cards.length) {
                                player.gain(cards, "draw");
                                game.log(player, "收回了" + get.cnNumber(cards.length) + "张“礼花”牌");
                            }
                        });
                }


            },
            marktext: "花",
            onremove: true,
            mark: true,
            intro: {
                markcount(storage, player) {
                    const expCount = player.getExpansions("fyrhlihua").length;
                    const centerCount = get.discarded().filterInD("d").length;
                    return centerCount;
                },
                mark(dialog, storage, player) {
                    // 设置弹窗宽度，大框显示
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }
                    const expCards = player.getExpansions("fyrhlihua");
                    const centerCards = get.discarded().filterInD("d");
                    // === 移出游戏区===
                    // 添加一个居中的标题，加粗，稍微调大字号
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; border-bottom:1px solid rgba(128,128,128,0.3)">🌸移出游戏区</div>');

                    if (expCards.length) {
                        if (player.isUnderControl(true)) {
                            dialog.addAuto(expCards);
                        } else {
                            dialog.addText('<div class="text center">共有' + get.cnNumber(expCards.length) + '张牌</div>');
                        }
                    } else {
                        dialog.addText('<div class="text center" style="opacity:0.6">暂无卡牌</div>');
                    }

                    // === 中央区 (中) ===
                    // 添加标题，margin-top 用于拉开与上面卡牌的距离
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🀄中央区</div>');

                    if (centerCards.length) {
                        dialog.addAuto(centerCards);
                    } else {
                        dialog.addText('<div class="text center" style="opacity:0.6">暂无卡牌</div>');
                    }
                }
            },
            ai: {
                order: 6,
                result: {
                    player(player, target) {
                        const cecards = get.discarded().filterInD("d");
                        const hscards = player.getCards("h");
                        const checkHasValidCombo = () => {
                            const allCards = [...cecards, ...hscards];
                            if (allCards.length < 3) return false;
                            const suitCounts = {};
                            for (const card of allCards) {
                                const suit = get.suit(card);
                                suitCounts[suit] = (suitCounts[suit] || 0) + 1;
                                if (suitCounts[suit] >= 3) return true;
                            }
                            const types = new Set();
                            for (const card of allCards) {
                                types.add(get.type2(card));
                            }
                            if (types.size >= 3) return true;
                            return false;
                        };
                        if (checkHasValidCombo()) {
                            return 5;
                        }
                        return 1;
                    },
                },

            },
        },
        fyrhhuohuan: {
            audio: "ext:永夜之境/audio:2",
            enable: "phaseUse",
            usable: 1,
            filter(event, player) {
                return !player.hasSkillTag("noCompareSource");
            },
            filterTarget(card, player, target) {
                return player.canCompare(target);
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const result = await player.chooseToCompare(target).forResult();
                if (result?.winner == player) {
                    delete player.getStat().skill.fyrhlihua;
                    game.log(player, '重置了', "#g【礼花】");
                } else {
                    delete player.getStat().skill.fyrhhuohuan;
                    game.log(player, '重置了', "#g【火环】");
                }
            },
            ai: {
                order: 6,
                result: {
                    target(player, target) {
                        const cecards = get.discarded().filterInD("d");
                        const hscards = player.getCards("h");
                        const checkHasValidCombo = () => {
                            const allCards = [...cecards, ...hscards];
                            if (allCards.length < 3) return false;
                            const suitCounts = {};
                            for (const card of allCards) {
                                const suit = get.suit(card);
                                suitCounts[suit] = (suitCounts[suit] || 0) + 1;
                                if (suitCounts[suit] >= 3) return true;
                            }
                            const types = new Set();
                            for (const card of allCards) {
                                types.add(get.type2(card));
                            }
                            if (types.size >= 3) return true;
                            return false;
                        };
                        if (checkHasValidCombo()) {
                            return -2;
                        }
                        return 0;
                    },
                },
            },

        },
        fyrhzaoju: {
            enable: "phaseUse",
            position: "he",
            selectCard: 2,
            lose: false,
            discard: false,
            delay: false,
            filter(event, player) {
                return player.countCards("he");
            },
            filterCard: lib.filter.cardRecastable,
            check(card) {
                let val = get.value(card);
                return Math.max(0.1, 10 - val);
            },
            async content(event, trigger, player) {
                const { cards } = event;
                let drawEvent;
                await player.recast(cards, undefined, (player, cardsToRecast) => {
                    drawEvent = player.draw(cardsToRecast.length);
                    drawEvent.log = false;
                    return drawEvent;
                }).forResult();
                const gainedCards = (drawEvent && drawEvent.result && drawEvent.result.cards) ? drawEvent.result.cards : [];
                if (gainedCards.length > 0) {
                    /*  const result1 = await player.chooseButton(
                         ["是否将一张牌当作雷杀使用？（不计次数）", gainedCards]
                     ).set("ai", button => {
                         return 6 - get.value(button.link);
                     }).forResult(); */
                    const result1 = await player.chooseCardButton(`是否将一张牌当作雷【杀】使用？（不计次数且无距离限制）`, gainedCards)
                        .set("ai", button => 6 - get.value(button.link))
                        .forResult();
                    if (result1?.bool && result1?.links) {
                        const cards = result1.links;
                        let useresult =
                            await player.chooseUseTarget({
                                name: 'sha',
                                nature: 'thunder',
                                isCard: true,
                            }, cards, false, 'nodistance')
                                .forResult();
                        if (useresult.bool) {
                            await game.delayx();
                            const cards = get.discarded().filterInD("d");
                            const suits = new Set();
                            for (const card of cards) {
                                const suit = get.suit(card);
                                if (suit && suit !== 'none') {
                                    suits.add(suit);
                                }
                            }
                            if (suits.size >= 4) {
                                player.tempBanSkill("fyrhzaoju");
                                player.draw(2);
                            }
                        }
                    }
                }
            },
            ai: {
                order: 10,
                result: {
                    player: 1,
                },
            },
            //group: 'xinxangang_add',
            marktext: "🪚",
            mark: true,
            intro: {
                markcount(storage, player) {
                    const cards = get.discarded().filterInD("d");
                    const suits = new Set();
                    for (const card of cards) {
                        const suit = get.suit(card);
                        if (suit && suit !== 'none') {
                            suits.add(suit);
                        }
                    }
                    return suits.size;
                },
                mark(dialog, storage, player) {
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }
                    const centerCards = get.discarded().filterInD("d");
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">🀄中央区</div>');

                    if (centerCards.length) {
                        dialog.addAuto(centerCards);
                    } else {
                        dialog.addText('<div class="text center" style="opacity:0.6">暂无卡牌</div>');
                    }
                }
            },
            subSkill: {

            }
        },
        fyrhchongsheng: {
            trigger: {
                player: "useCardToPlayered",
            },
            filter(event, player) {
                if (event.target !== player || !event.isFirstTarget || event.targets.length !== 1) return false;
                const cards = get.discarded().filterInD("d");
                return cards.length >= 2 || player.isDamaged();
            },
            usable: 1,
            /*  async cost(event, trigger, player) {
                 let list = [];
                 let choiceList = [];
                 const cards = get.discarded().filterInD("d");
                 if (player.isDamaged()) {
                     list.push('回复');
                     choiceList.push(`回复1点体力`);
                 }
                 if (cards.length >= 2) {
                     list.push('洗入');
                     choiceList.push(`将${get.poptip('xinx_central')}两张牌洗入牌堆`);
                 }
                 list.push("cancel2");
                 const { control } = await player.chooseControl(list)
                     .set('prompt', get.prompt(event.skill) + ':请选择一项')
                     .set("choiceList", choiceList)
                     .set("ai", () => {
                         const player = get.player();
                         if (player.hp <= 3 && list.includes('回复')) {
                             return list.indexOf('回复');
                         }
                         if (list.includes('洗入')) {
                             return list.indexOf('洗入');
                         }
                         return 0;
                     })
                     .forResult();
                 event.result = {
                     bool: control != "cancel2",
                     cost_data: control,
                 };
             },
             async content(event, trigger, player) {
                 const control = event.cost_data;
                 if (control === '回复') {
                     player.recover();
                 } else if (control === '洗入') {
                     let discards = get.discarded().filterInD("d");
                     const result = await player.chooseButton(
                         ["是否将中央区两张牌洗入牌堆", discards], 2
                     ).set("ai", button => {
                         return 6 - get.value(button.link);
                     }).forResult();
                     if (result?.bool && result?.links) {
                         let cards = result.links;
                         game.log(player, "将", cards, "洗入牌堆");
                         await game.cardsGotoPile(cards, () => {
                             return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                         });
                         player.markSkill('fyrhzaoju');
                     }
                 }
             }, */
            async cost(event, trigger, player) {
                const cards = get.discarded().filterInD("d");
                let textBtns = [];
                //生成文字按钮
                if (player.isDamaged()) {
                    textBtns.push(['recover', '回复1点体力']);
                }
                if (cards.length >= 2) {
                    textBtns.push(['shuffle', `将${get.poptip('xinx_central')}两张牌洗入牌堆`]);
                }

                let dialogArgs = [
                    `###${get.prompt(event.skill)}###<div class="text center">请选择一项</div>`,
                    [textBtns, "textbutton"]
                ];
                if (cards.length > 0) {
                    dialogArgs.push('<div class="text center">中央区的牌</div>');
                    dialogArgs.push([cards]);
                }
                const result = await player.chooseButton(dialogArgs, [1, 3])
                    .set("complexSelect", true)
                    .set("filterButton", button => {
                        // 给已经选中的按钮颁发免死金牌
                        if (ui.selected.buttons.includes(button)) return true;
                        const isText = typeof button.link === 'string';
                        //如果面板空，只准点文字按钮
                        if (ui.selected.buttons.length === 0) return isText;
                        //如果第一个选的不是文字，直接全锁死
                        const firstIsText = typeof ui.selected.buttons[0].link === 'string';
                        if (!firstIsText) return false;
                        const mode = ui.selected.buttons[0].link;
                        // 2. 如果选了“回复”，锁死其他所有选项
                        if (mode === 'recover') return false;
                        // 3. 如果选了“洗牌”，允许点底下的实体卡牌
                        if (mode === 'shuffle') {
                            // 限制最多只能再点2张实体牌（加上文字按钮共3个），满了就不让点了
                            if (ui.selected.buttons.length >= 3) return false;
                            return !isText;
                        }
                        return false;
                    })
                    .set("filterOk", () => {
                        if (ui.selected.buttons.length === 0) return false;
                        const firstIsText = typeof ui.selected.buttons[0].link === 'string';
                        if (!firstIsText) return false;
                        const mode = ui.selected.buttons[0].link;
                        // 回复：只需1个
                        if (mode === 'recover') return ui.selected.buttons.length === 1;
                        // 洗牌：必须刚好选满3个（1个文字按钮 + 2张实体卡牌）
                        if (mode === 'shuffle') return ui.selected.buttons.length === 3;
                        return false;
                    })
                    .set("ai", button => {
                        const player = _status.event.player;
                        const isText = typeof button.link === 'string';
                        if (ui.selected.buttons.length === 0) {
                            if (!isText) return 0;
                            const mode = button.link[0];
                            // 血少急救优先
                            if (player.hp <= 3 && textBtns.some(b => b[0] === 'recover')) {
                                return mode === 'recover' ? 10 : 0;
                            }
                            // 否则优先洗牌
                            return mode === 'shuffle' ? 10 : 0;
                        } else {
                            //已经选了洗牌，优先选价值低的牌
                            const mode = ui.selected.buttons[0].link[0];
                            if (mode === 'shuffle' && !isText) {
                                return 10 - get.value(button.link);
                            }
                        }
                        return 0;
                    })
                    .forResult();
                if (result.bool) {
                    // 分离出 模式ID 和 选中的实体卡牌
                    const mode = result.links.find(l => typeof l === 'string');
                    const selectedCards = result.links.filter(l => typeof l !== 'string');
                    event.result = {
                        bool: true,
                        cost_data: { mode, cards: selectedCards }
                    };
                } else {
                    event.result = { bool: false };
                }
            },
            async content(event, trigger, player) {
                const { mode, cards } = event.cost_data;
                if (mode === 'recover') {
                    await player.recover();
                } else if (mode === 'shuffle') {
                    if (cards?.length) {
                        game.log(player, "将", cards, "洗入牌堆");
                        await game.cardsGotoPile(cards, () => {
                            return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                        });
                        player.markSkill('fyrhzaoju');
                    }
                }
            },
            ai: {
                order: 7,
                result: {
                    player: 1,
                },
            },
        },
        fyrhkeng: {
            audio: "ext:永夜之境/audio:2",
            enable: "phaseUse",
            usable: 1,
            delay: false,
            lose: false,
            discard: false,
            filter(event, player) {
                return game.hasPlayer(target => player.canCompare(target, true));
            },
            async content(event, trigger, player) {
                let cards = get.cards(3);
                await game.cardsGotoOrdering(cards);
                let result = await player
                    .chooseButtonTarget({
                        createDialog: [
                            `###${get.prompt('fyrhkeng')}###<div class="text center">选择一张牌，并与一名角色拼点</div>`,
                            cards], cards: cards,
                        filterButton(button) {
                            return true;
                        },
                        filterTarget(card, player, target) {
                            return player.canCompare(target, true);
                        },
                        ai1(button) {
                            return get.number(button.link);
                        },
                        ai2(target) {
                            return -get.attitude(get.player(), target) * target.countCards("h");
                        },
                    })
                    .forResult();
                if (result?.bool && result.links && result.targets) {
                    const target = result.targets[0];
                    player.line(target);
                    const cardInHand = result.links[0];
                    cards.remove(cardInHand);
                    let next = player.chooseToCompare(target);
                    if (!next.fixedResult) {
                        next.fixedResult = {};
                    }
                    next.fixedResult[player.playerid] = cardInHand;
                    const result1 = await next.forResult();
                    if (result1?.bool) {
                        if (result1.winner === player) {
                            const result2 = await player.chooseCardButton(`是否将一张牌当作【杀】使用？`, cards)
                                .set("ai", button => { return 10 - get.value(button.link) })
                                .forResult();
                            if (result2?.bool && result2?.links) {
                                const scard = result2.links;
                                player.$gain2(scard, false);
                                await game.delayx();
                                const sha = get.autoViewAs({
                                    name: "sha",
                                    isCard: true,
                                });
                                if (player.hasUseTarget({ name: "sha" }, true, false)) {
                                    await player.chooseUseTarget({
                                        name: 'sha',
                                        isCard: true,
                                    }, scard, true, false)
                                }
                                if (player.hasHistory('sourceDamage', (evt) => evt.getParent(4) == event)) {
                                    cards.removeArray(scard);
                                    await player.gain(cards, "gain2");
                                    /* delete player.getStat().skill.fyrhkeng;
                                    game.log(player, '重置了', "#g【吭】"); */
                                    const findEquipCard = slot => {
                                        const find = card => get.type(card, null, false) == "equip" && (!slot || get.subtype(card) == slot);
                                        return get.cardPile2(find, "random");
                                    };
                                    const emptySlots = Array.from({ length: 5 }, (_, i) => i + 1)
                                        .filter(i => player.hasEmptySlot(i))
                                        .map(i => "equip" + i);

                                    let card = null;
                                    if (emptySlots.length > 0) {
                                        for (const slot of emptySlots) {
                                            card = findEquipCard(slot);
                                            if (card) break;
                                        }
                                    }
                                    if (!card) {
                                        card = findEquipCard();
                                    }
                                    if (!card) {
                                        return;
                                    }
                                    if (player.hasUseTarget(card)) {
                                        await player.chooseUseTarget(card, true);
                                    }
                                    if (!player.hasDisabledSlot()) {
                                        return;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if (player.hasDisabledSlot()) {
                            const list = [1, 2, 3, 4, 5].filter(num => player.hasDisabledSlot(num)).map(num => "equip" + num);
                            const result = await player
                                .chooseControl(list)
                                .set("prompt", `吭：恢复一个装备栏`)
                                .set("ai", () => {
                                    const player = get.player();
                                    const val = slot => {
                                        if (
                                            player.hasCard(function (card) {
                                                return get.subtype(card) == slot;
                                            }, "hs")
                                        ) {
                                            return 15;
                                        }
                                        return 10;
                                    };
                                    return get.event().list.sort((a, b) => val(b) - val(a))[0];
                                })
                                .set("list", list)
                                .forResult();
                            if (result?.control) {
                                await player.enableEquip(result.control);
                            }
                        }
                    }
                }
            },
            ai: {
                order: 7,
                result: {
                    player: 1,
                },
            },
            group: 'fyrhkeng_use',
            subSkill: {
                use: {
                    trigger: {
                        player: "phaseEnd",
                    },
                    filter(event, player) {
                        return player.countCards("e") > 0 && game.hasPlayer(target => player.canCompare(target, true));
                    },
                    async cost(event, trigger, player) {
                        let list = [];
                        for (let i = 1; i <= 5; i++) {
                            if (player.getEquips(i).length > 0) {
                                list.push("equip" + i);
                            }
                        }
                        list.push("cancel2");
                        let bool = "cancel2";
                        const card = new lib.element.VCard({ name: "sha", isCard: true });
                        //if (get.effect(trigger.player, card, player, player) > 0) {
                        bool = list.filter(i => i != "cancel2").randomGet();
                        //}
                        const result = await player
                            .chooseControl(list)
                            //.set("prompt", get.prompt2('fyrhkeng'))
                            .set("prompt", `是否废除一个有牌的装备区，发动${get.poptip('fyrhkeng')}`)
                            .set("ai", () => get.event().bool)
                            .set("bool", bool)
                            .forResult();
                        event.result = {
                            bool: result.control != "cancel2",
                            targets: [trigger.player],
                            cost_data: result.control,
                        };

                    },
                    async content(event, trigger, player) {
                        const slot = event.cost_data;
                        await player.disableEquip([slot]);
                        const next = game.createEvent("fyrhkeng" + event.name);
                        next.player = player;
                        next.setContent(lib.skill.fyrhkeng.content);
                        await next;
                    },


                },

            }
        },
        fyrhzhansui: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/fyrhzhansui" + index + ".mp3" : 2),
            trigger: {
                global: "useCardAfter",
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                return get.is.damageCard(event.card);
            },
            async content(event, trigger, player) {
                if (!player.storage.fyrhzhansui) player.storage.fyrhzhansui = [];
                const usedByMe = (trigger.player === player);
                player.storage.fyrhzhansui.push(usedByMe);
                player.markSkill('fyrhzhansui');
                player.syncStorage('fyrhzhansui');
                if (player.storage.fyrhzhansui.length >= 3) {
                    const hasMine = player.storage.fyrhzhansui.includes(true);
                    player.storage.fyrhzhansui = [];
                    player.unmarkSkill('fyrhzhansui');
                    player.syncStorage('fyrhzhansui');
                    if (hasMine) {
                        player.logSkill('fyrhzhansui', null, null, null, [get.rand(1, 2)]);
                        await player.draw(4);
                    } else {
                        await player
                            .chooseToUse(function (card, player, event) {
                                return lib.filter.filterCard.apply(this, arguments);
                            }, "战随：是否使用一张牌？")
                            .set("logSkill", ["fyrhzhansui", null, null, null, [get.rand(3, 4)]])
                            .set("addCount", false)
                            .forResult();
                    }
                }
            },
            mark: true,
            marktext: "随",
            intro: {
                content(storage, player) {
                    let len = storage ? storage.length : 0;
                    return '已累计结算伤害牌：' + len + ' 张';
                }
            },
        },
        fyrhxiaoxian: {
            audio: "ext:永夜之境/audio:2",
            mod: {
                targetInRange(card, player, target, now) {
                    if (get.is.damageCard(card)) {
                        let history = player.getHistory('useCard', (evt) => {
                            return get.is.damageCard(evt.card);
                        });
                        if (history.length === 0) return true;
                    }
                },
            },
            trigger: {
                player: "useCard",
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                return get.is.damageCard(event.card) && !player.hasSkill('fyrhxiaoxian_lock');
            },
            async content(event, trigger, player) {
                player.addTempSkill('fyrhxiaoxian_lock');
                if (trigger.targets.length == 1) {
                    const target = trigger.targets[0];
                    const result = await player.chooseBool(`是否令${get.translation(trigger.card)}不可被响应？`)
                        .set("ai", () => {
                            return get.attitude(get.player(), get.event().target) <= 0;
                        })
                        .forResult();
                    if (result?.bool) {
                        player.logSkill('fyrhxiaoxian');
                        trigger.directHit.addArray(game.players);
                        game.log(player, `令${get.translation(trigger.card)}不可被响应`);
                        player
                            .when({ global: "phaseEnd" })
                            .step(async (event, trigger, player) => {
                                if (target.canUse("sha", player, true, false) && target.isIn()) {
                                    await target.useCard({ name: "sha", isCard: true }, player, false, "noai");
                                }
                            })
                    }
                }
            },
            subSkill: {
                lock: {
                    charlotte: true,
                },
            }
        },
        fyrhyouling: {
            enable: "chooseToUse",
            filter(event, player) {
                const isHandUsed = player.hasSkill('fyrhyouling_limit');
                let canUseHand = false;
                if (!isHandUsed) {
                    canUseHand = ["shunshou", "wuzhong"].some(name => {
                        const info = { name: name };
                        return (
                            get.info(info) &&
                            player.hasCard(card => {
                                return (get.name(card) == 'sha' || get.name(card) == 'shan') && event.filterCard({ name: name, cards: [card] }, player, event);
                            }, "hs")
                        );
                    });
                }
                const canAbolish = player.countCards('e') > 0;

                return canUseHand || canAbolish;
            },
            chooseButton: {
                dialog(event, player) {
                    const list = [];
                    const isHandUsed = player.hasSkill('fyrhyouling_limit');
                    if (!isHandUsed) {
                        ["shunshou", "wuzhong"].forEach(name => {
                            const info = { name: name };
                            if (get.info(info) && player.hasCard(card => {
                                return (get.name(card) == 'sha' || get.name(card) == 'shan') && event.filterCard({ name: name, cards: [card] }, player, event);
                            }, "hs")) {
                                list.push(["基本转化", "", name, "hand"]);
                            }
                        });
                    }
                    if (player.countCards('e') > 0) {
                        const checkValid = (name, nature) => {
                            const vcard = { name: name, nature: nature, isCard: true };
                            if (nature) vcard.nature = nature;
                            if (!event.filterCard(vcard, player, event)) return false;
                            if (name == 'shunshou' || name == 'sha') {
                                if (!player.hasValueTarget(vcard, null, true)) return false;
                            }
                            return true;
                        };
                        ["shunshou", "wuzhong", "shan"].forEach(name => {
                            if (checkValid(name)) {
                                list.push(["废除装备", "", name, '', "equip"]);
                            }
                        });
                        if (event.filterCard(get.autoViewAs({ name: "sha" }, "unsure"), player, event)) {
                            list.push(["废除装备", "", "sha", '', "equip"]);
                        }
                        for (var j of lib.inpile_nature) {
                            if (event.filterCard(get.autoViewAs({ name: "sha", nature: j }, "unsure"), player, event)) {
                                list.push(["废除装备", "", "sha", j, "equip"]);
                            }
                        }
                    }

                    return ui.create.dialog("幽灵", [list, "vcard"]);
                },
                filter(button, player) {
                    return true;
                },
                check(button) {
                    if (_status.event.getParent().type != "phase") return 1;
                    const player = get.event().player;
                    const name = button.link[2];
                    if (button.link[4] == "equip") return 10;
                    let value = player.getUseValue({ name: name });
                    return value;
                },
                backup(links, player) {
                    const cardName = links[0][2];
                    const cardNature = links[0][3];
                    const mode = links[0][4];
                    if (mode === "equip") {
                        return {
                            filterCard: () => false,
                            selectCard: -1,
                            viewAs: {
                                name: cardName,
                                nature: cardNature,
                            },
                            log: false,
                            async precontent(event, trigger, player) {
                                let list = [];
                                for (let i = 1; i <= 5; i++) {
                                    if (player.getEquips(i).length > 0) {
                                        list.push("equip" + i);
                                    }
                                }
                                const result = await player.chooseControl(list)
                                    .set("prompt", "选择废除一个有牌的装备栏以发动【幽灵】")
                                    .set("ai", () => {
                                        return list.sort((a, b) => {
                                            return get.value(player.getEquip(a)) - get.value(player.getEquip(b));
                                        })[0];
                                    })
                                    .forResult();
                                if (result.control) {
                                    player.storage.fyrhyouling_hand = true;
                                    await player.disableEquip(result.control);
                                    game.log(player, "#g【幽灵】", "废除了", get.translation(result.control));
                                    player.logSkill('fyrhyouling');
                                }
                            }
                        };
                    }
                    // === 手牌转化 (限一次) ===
                    return {
                        filterCard(card, player) {
                            return get.name(card) == 'sha' || get.name(card) == 'shan';
                        },
                        selectCard: 1,
                        popname: true,
                        check(card) {
                            return 5 - get.value(card);
                        },
                        position: "hs",
                        viewAs: {
                            name: cardName,
                            storage: { fyrhyoulingx: true },
                        },
                        log: false,
                        async precontent(event, trigger, player) {
                            const cardName = event.result.cards[0].name;
                            player.storage.fyrhyouling_hand = false;
                            player.storage.fyrhyouling_used = cardName;
                            player.addTempSkill('fyrhyouling_limit');
                            game.log(player, "#g【幽灵】的底牌为", cardName);
                            player.logSkill('fyrhyouling');
                        }
                    };
                },
                prompt(links, player) {
                    const nameStr = get.translation(links[0][2]);
                    const natureStr = links[0][3] ? get.translation(links[0][3]) : "";
                    if (links[0][4] == "equip") {
                        return "废除一个有牌装备栏，视为使用【" + natureStr + nameStr + "】";
                    }
                    return "将一张【杀】或【闪】当作【" + nameStr + "】使用";
                },
            },
            hiddenCard(player, name) {
                if (["sha", "shan"].includes(name) && !player.countCards("e")) {
                    return false
                }
                return ["shunshou", "wuzhong"].includes(name) && player.countCards("hes");
            },
            locked: false,
            ai: {
                expose: 0.4,
                skillTagFilter(player) {
                    if (!player.countCards("hes") && !player.countCards('e')) return false;
                },
                order(item, player) {
                    if (!player || _status.event.type != "phase") {
                        return 0.001;
                    }
                    return 6;
                },
                result: {
                    player: 1,
                },
                tag: {
                    respondSha: true,
                    respondShan: true,
                },
            },
            group: ["fyrhyouling_gain"],
            subSkill: {
                limit: {
                    mark: true,
                    marktext: "幽",
                    charlotte: true,
                    intro: { content: "本回合已发动过【幽灵】的手牌转化效果" }
                },
                backup: { sub: true },
                gain: {
                    silent: true,
                    trigger: {
                        player: ["gainAfter", "drawAfter"]
                    },
                    filter(event, player) {
                        const usedName = player.storage.fyrhyouling_used;
                        if (!usedName || player.storage.fyrhyouling_hand) return false;
                        const need = (usedName == 'sha') ? 'shan' : 'sha';
                        var evt = event.getParent("useCard");
                        if (event.name == 'gain') {
                            return event.cards.some(card => get.name(card) == need) && evt.skill == "fyrhyouling_backup";
                        } else {
                            return event.cards?.some(card => get.name(card) == need) && evt.skill == "fyrhyouling_backup";
                        }
                    },
                    async content(event, trigger, player) {
                        const usedName = player.storage.fyrhyouling_used;
                        const need = (usedName == 'sha') ? 'shan' : 'sha';
                        const cardsToShow = trigger.cards.filter(card => get.name(card) == need);
                        if (cardsToShow.length > 0) {
                            player.showCards(cardsToShow);
                            player.removeSkill('fyrhyouling_limit');
                            game.log(player, "重置了", "#g【幽灵】");
                        }
                        delete player.storage.fyrhyouling_used;
                    },
                }
            },
        },
        fyrhxianji: {
            trigger: {
                player: "phaseAfter",
            },
            filter(event, player) {
                return player.maxHp > 0;
            },
            locked: false,
            forced: true,
            async content(event, trigger, player) {
                if (!player.storage?.fyrhxianji_used) {
                    const result = await player.chooseBool()
                        .set("choice", true)
                        /* .set("ai", () => {
                            const hp = player.maxHp;
                            return hp > 1;
                        }) */
                        .set("prompt", get.prompt2('fyrhxianji'))
                        .forResult();
                    if (result?.bool) {
                        let list = [];
                        for (let i = 1; i < 6; i++) {
                            for (let j = 0; j < player.countDisabledSlot(i); j++) {
                                list.push(i);
                            }
                        }
                        if (list.length) { await player.enableEquip(list); }
                        player.storage.fyrhxianji_used = true;
                        player.loseMaxHp();
                        player.insertPhase();
                    }
                } else {
                    let list = [];
                    for (let i = 1; i < 6; i++) {
                        for (let j = 0; j < player.countDisabledSlot(i); j++) {
                            list.push(i);
                        }
                    }
                    if (list.length) { await player.enableEquip(list); }
                    player.loseMaxHp();
                    player.insertPhase();
                }
            },
        },
        fyrhzhenzhan: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/fyrhzhenzhan" + index + ".mp3" : 2),
            enable: "chooseToUse",
            popup: false,
            filter(event, player) {
                if (event.type === "wuxie") {
                    return false;
                }
                const hiddenCards = player.getCards("h", card => !get.is.shownCard(card));
                if (!hiddenCards.length) return false;
                return hiddenCards.some(card => {
                    return get.type(card) == "basic" && event.filterCard(card, player, event);
                });
                /* return get
                    .inpileVCardList(info => get.type(info[2]) == "basic")
                    .some(card => {
                        return event.filterCard({ name: card[2], nature: card[3] }, player, event);
                    }); */
            },
            chooseButton: {
                dialog(event, player) {
                    /* const list = get
                        .inpileVCardList(info => get.type(info[2]) == "basic")
                        .filter(card => {
                            return event.filterCard({ name: card[2], nature: card[3] }, player, event);
                        }); */
                    const hiddenCards = player.getCards("h", card => !get.is.shownCard(card));
                    const list = hiddenCards.filter(card => {
                        return get.type(card) == "basic" && event.filterCard(card, player, event);
                    });

                    return ui.create.dialog("枕战", [list, "vcard"], "hidden");
                },
                check(button) {
                    const event = get.event().getParent();
                    if (event.type !== "phase") {
                        return 1;
                    }
                    return get.player().getUseValue({ name: button.link[2], nature: button.link[3] });
                },
                prompt(links) {
                    return "重铸所有暗置牌，视为使用" + get.translation(links[0]) + "";
                },
                backup(links, player) {
                    return {
                        selectCard: -1,
                        filterCard: () => false,
                        viewAs: {
                            name: links[0].name,
                            nature: links[0].nature,
                            isCard: true,
                        },
                        log: false,
                        async precontent(event, trigger, player) {
                            player.logSkill("fyrhzhenzhan", null, null, null, [get.rand(1, 2)]);
                            const hiddenCards = player.getCards("h", card => !get.is.shownCard(card));
                            if (hiddenCards.length > 0) {
                                await player.recast(hiddenCards);
                            }

                        },
                    };
                },
            },
            hiddenCard(player, name) {
                if (player.getStat("skill").fyrhzhenzhan) {
                    return false;
                }
                if (get.type(name) !== "basic") return false;
                return player.hasCard(card => {
                    return !get.is.shownCard(card) && get.name(card) == name;
                }, "h");
            },
            ai: {
                order: 12,
                respondShan: true,
                respondSha: true,
                skillTagFilter(player, tag, arg) {
                    if (arg == 'respond') { return false; }
                    return true;
                },
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 1;
                    },
                },
            },
            group: ["fyrhzhenzhan_cancel"],
            subSkill: {
                cancel: {
                    trigger: {
                        player: ["phaseJudgeBegin", "phaseDiscardBegin"]
                    },
                    filter(event, player) {
                        const hiddenCards = player.getCards("h", card => !get.is.shownCard(card));
                        if (!hiddenCards.length) return false;
                        return hiddenCards.some(card => {
                            return get.name(card) == "sha";
                        });
                    },
                    popup: false,
                    check(event, player) {
                        if (event.name == "phaseJudge") {
                            return player.countCards("j") > 0;
                        }
                        if (event.name == "phaseDiscard") {
                            return player.countCards("h") - player.hp > 2;
                        }
                        return false;
                    },
                    async cost(event, trigger, player) {
                        event.result = await player.chooseCard(get.prompt('fyrhzhenzhan'),
                            `明置一张【杀】以跳过${get.translation(trigger.name)}`, card => {
                                return !get.is.shownCard(card) && get.name(card) == 'sha'
                            }).set("ai", (card) => {
                                return 5 - get.value(card);
                            })
                            .forResult();
                    },
                    async content(event, trigger, player) {
                        player.logSkill("fyrhzhenzhan", null, null, null, [get.rand(3, 4)]);
                        await player.addShownCards(event.cards, "visible_fyrhzhenzhan");
                        trigger.cancel();
                        game.log(player, "跳过了", trigger.name);
                    },
                }
            }
        },
        fyrhpozhu: {
            audio: "ext:永夜之境/audio:7",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/fyrhpozhu" + index + ".mp3" : 2),
            trigger: {
                source: "damageSource",
                player: "damageEnd",
            },
            filter(event, player) {
                //if (event.player === player) return false;
                return event.player.isIn() && player.countCards("h");
            },
            /* check(event, player) {
                const cards = player.hasCard(card => {
                    return player.hasUseTarget(card);
                }, "h");
                return cards.length > 0;
            }, */
            prompt2(event, player) {
                return `令${get.translation(event.player)}翻面你三张牌，然后你依次使用明置牌（无距离限制、不可响应且于使用后摸一张牌）`;
            },
            usable: 1,
            popup: false,
            async content(event, trigger, player) {
                const target = trigger.player;
                const num = Math.min(3, player.countCards("h"));
                player.logSkill("fyrhpozhu", [target], null, null, [get.rand(1, 7)]);
                const result = await target
                    .choosePlayerCard(player, true, "h", num)
                    .set("prompt", (() => {
                        return (`###破竹###<div class="text center">翻面${get.translation(player)}三张手牌，然后其依次使用明置牌</div>`);
                    })()
                    )
                    .set("ai", card => {
                        const chooser = _status.event.player;
                        const owner = card.owner;
                        if (get.attitude(chooser, owner) <= 0) {
                            if (get.is.shownCard(card)) {
                                return 20 + get.value(card);
                            }
                            return 1;
                        }
                        else {
                            if (!get.is.shownCard(card)) {
                                return 1;
                            }
                            return get.useful(card);
                        }
                    })
                    .forResult();
                if (result?.bool && result.cards?.length) {
                    const selectedCards = result.cards;
                    const toShow = [];
                    const toHide = [];
                    selectedCards.forEach(card => {
                        if (get.is.shownCard(card)) {
                            toHide.push(card);
                        } else {
                            toShow.push(card);
                        }
                    });

                    if (toShow.length) { await player.addShownCards(toShow, "visible_fyrhzhenzhan"); }
                    if (toHide.length) {
                        /* const tagsToRemove = new Set();
                        toHide.forEach(card => {
                            if (card.gaintag) {
                                card.gaintag.forEach(tag => {
                                    if (typeof tag === 'string' && tag.startsWith("visible_")) {
                                        tagsToRemove.add(tag);
                                    }
                                });
                            }
                        });
                        await player.hideShownCards(toHide, ...tagsToRemove); */
                        await player.hideShownCards(toHide, "visible_fyrhzhenzhan");
                    }
                    const usecards = player.getCards("h", card => get.is.shownCard(card));
                    if (usecards.length > 0) {
                        for (const card of usecards) {
                            if (player.hasUseTarget(card, false)) {
                                let result1 = await player.chooseUseTarget(card, false, 'nodistance')
                                    .set("oncard", card => {
                                        game.log(_status.event.card, "不可被响应");
                                        _status.event.directHit.addArray(game.players);
                                    }).forResult();
                                if (result1?.bool) {
                                    await player.draw();
                                }
                            }
                        }
                    }
                }
            },
        },
        fyrhyulie: {
            mark: true,
            marktext: "烈",
            init(player) {
                if (!player.storage.fyrhyulie) {
                    player.storage.fyrhyulie = [1, 2, 3];
                }
            },
            intro: {
                markcount(storage, player) {
                    if (!storage || !storage.length) return "";
                    const map = { 1: "①", 2: "②", 3: "③" };
                    return map[storage[0]];
                },
                content(storage, player) {
                    if (!storage || !storage.length) return "技能失效";
                    const s = player.storage.fyrhyulie;
                    const isWenjue = player.storage.fyrhwenjue;
                    let map;
                    if (!isWenjue) {
                        map = {
                            1: "① 使用【杀】后，视为使用【火攻】",
                            2: "② 弃牌后，视为使用明牌【洞烛先机】",
                            3: `③ 出牌阶段，获得${get.poptip("xinx_central")}任意张【杀】并摸等量张牌`
                        };
                    } else {
                        map = {
                            1: `① 使用【杀】后，${get.poptip("yulieqice")}`,
                            2: `② 弃牌后，${get.poptip("yuliezaiqi")}`,
                            3: `③ 出牌阶段，你可以${get.poptip("yuliezhiheng")}`
                        };
                    }
                    let str = " 当前生效：<br>" + map[s[0]];
                    if (!isWenjue) {
                        str += "<br><br><span class='text distinct'>流程出现【闪】后移除当前项</span>";
                    }
                    return str;
                    /* const map = {
                        1: "① 使用【杀】后，视为使用【火攻】",
                        2: "② 弃牌后，视为使用【洞烛先机】",
                        3: "③ 出牌阶段，将中央区的任意张【杀】洗入牌堆并摸等量张牌"
                    };
                    let str = "当前生效：<br>" + map[storage[0]];
                    str += "<br><br><span class='text distinct'>流程出现【闪】后移除当前项</span>";
                    return str; */
                }
            },
            audio: "ext:永夜之境/audio:7",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/fyrhyulie" + index + ".mp3" : 2),
            enable: "phaseUse",
            filter(event, player) {
                const s = player.storage.fyrhyulie;
                const cards = get.discarded().filterInD("d").filter(card => get.name(card, false) == "sha")
                if (!Array.isArray(s) || !s.length || s[0] !== 3) return false;
                if (!player.storage.fyrhwenjue) {
                    return cards.length > 0;
                } else {
                    return true;
                }
            },
            log: false,
            async content(event, trigger, player) {
                const s = player.storage.fyrhyulie;
                if (!player.storage.fyrhwenjue) {
                    const discards = get.discarded().filterInD("d").filter(card => get.name(card, false) == "sha");
                    const result = await player.chooseButton(
                        ["是否获得中央区任意张【杀】，并摸等量张牌", discards], [1, Infinity]
                    ).set("ai", button => {
                        return get.value(button.link);
                    }).forResult();
                    if (result?.bool && result?.links) {
                        player.logSkill("fyrhyulie", null, null, null, [get.rand(6, 7)]);
                        let cards = result.links;
                        await player.gain(cards, 'gain2');
                        const draw = await player.draw(cards.length).forResult();
                        if (draw?.bool && draw.cards.some(c => get.name(c) == 'shan')) {
                            const removed = await s.shift();
                            game.log(player, "获得了【闪】，", "#g【欲烈】", "的选项", removed, "被移除");
                        }
                        else {
                            s.push(s.shift());
                        }
                    }
                } else {
                    let hs = player.countCards("he");
                    const result = await player
                        .chooseCard("he")
                        .set("prompt", get.prompt("fyrhyulie"))
                        .set("prompt2", `你可以弃置任意张牌，并摸弃置牌数+1张牌`)
                        .set("selectCard", () => {
                            return [1, hs];
                        })
                        .set("ai", card => {
                            return 8 - get.value(card);
                        })
                        .forResult();
                    if (result?.bool && result.cards?.length) {
                        game.playAudio("../extension/永夜之境/audio/", 'fyrhwenjue' + [get.rand(7, 8)] + '.mp3');
                        const currentItem = s.shift();
                        let hasShan = false;
                        if (result.cards.some(c => get.name(c) == 'shan')) {
                            hasShan = true;
                        }
                        await player.discard(result.cards);
                        const draw = await player.draw(result.cards.length + 1).forResult();
                        if (draw?.bool && draw.cards.some(c => get.name(c) == 'shan')) {
                            hasShan = true;
                        }

                        //if (hasShan) {
                        //     game.log(player, "制衡过程中涉及了【闪】，", "#g【欲烈】", "的选项", currentItem, "被移除");
                        // } else {
                        s.push(currentItem);
                        // }
                        player.markSkill('fyrhyulie');
                        player.syncStorage("fyrhyulie");
                    }
                }
                if (!player.storage.fyrhwenjue && s.length === 0) {
                    player.storage.fyrhwenjue = true;
                    player.storage.fyrhyulie = [1, 2, 3];
                    await game.delayx();
                    player.$fullscreenpop("魏武君临", "thunder");
                    game.playAudio("../extension/永夜之境/audio/", 'fyrhwenjue' + [1] + '.mp3');
                    player.awakenSkill("fyrhwenjue");
                    player.changeSkin({ characterName: "fyrh_caocao" }, "fyrh_caocao_shadow");
                    game.log(player, "已扫六合，魏武君临");
                }
                player.markSkill('fyrhyulie');
                player.syncStorage("fyrhyulie");
            },
            ai: {
                order(item, player) {
                    return 5;
                },
                result: {
                    player: 1,
                }
            },
            group: ["fyrhyulie_trigger", 'fyrhyulie_dongzhu', "fyrhyulie_shan"],//
            subSkill: {
                trigger: {
                    trigger: {
                        player: ['useCard', 'discardAfter'],
                    },
                    filter(event, player) {
                        const s = player.storage.fyrhyulie;
                        if (!s || !s.length) return false;
                        if (event.name === "useCard" && event.card.name === "sha") {
                            return s[0] === 1;
                        }
                        if (event.name === "discard") {
                            return s[0] === 2;
                        }
                        return false;
                    },
                    prompt2(event, player) {
                        const s = player.storage.fyrhyulie;
                        if (!player.storage.fyrhwenjue) {
                            return s[0] === 1 ? `是否使用一张【火攻】` : `是否使用一张【洞烛先机】`;
                        } else {
                            return s[0] === 1 ? `<div class="text center">是否${get.poptip("yulieqice")}</div>` : `<div class="text center">是否${get.poptip("yuliezaiqi")}</div>`;
                        }
                    },
                    async content(event, trigger, player) {
                        const s = player.storage.fyrhyulie;
                        if (trigger.name === "useCard") {
                            if (!player.storage.fyrhwenjue) {
                                await s.push(s.shift());
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhyulie' + [get.rand(1, 2)] + '.mp3');
                                await player.chooseUseTarget({ name: 'huogong', storage: { fyrhyulieuse: true, fyrhyulie_mode: 1 } }, true);
                                player.markSkill("fyrhyulie");
                                player.syncStorage("fyrhyulie");
                            }
                            else {
                                const cards = get.inpileVCardList(info => {
                                    return info[0] == "trick" && player.hasUseTarget(info[2]);
                                });
                                if (!cards?.length) {
                                    return;
                                }
                                await s.push(s.shift());
                                const result = await player
                                    .chooseButton(["欲烈：选择要视为使用的牌", [cards, "vcard"]], true)
                                    .set("ai", button => {
                                        return get.player().getUseValue(button.link[2]);
                                    })
                                    .forResult();
                                if (result?.bool) {
                                    game.playAudio("../extension/永夜之境/audio/", 'fyrhwenjue' + [get.rand(1, 4)] + '.mp3');
                                    const card = new lib.element.VCard({
                                        name: result.links[0][2], isCard: true,
                                        // storage: { fyrhyulieuse: true, fyrhyulie_mode: 1 } 
                                    });
                                    if (player.hasUseTarget(card)) {
                                        await player.chooseUseTarget(card, true);
                                    }
                                }
                            }
                        }
                        else {
                            if (!player.storage.fyrhwenjue) {
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhyulie' + [get.rand(3, 5)] + '.mp3');
                                await player.useCard({ name: 'dongzhuxianji', storage: { fyrhyulieuse: true, fyrhyulie_mode: 2 } }, player, false);
                                if (player.hasSkill('fyrhyulie_remove')) {
                                    player.removeSkill('fyrhyulie_remove');
                                } else {
                                    await s.push(s.shift());
                                }
                            } else {
                                //const num = player.getHistory("lose", evt => evt.type == "discard").reduce((num, evt) => num + evt.cards2.length, 0);
                                const num = player.getHistory("lose").reduce((num, evt) => num + evt.cards2.length, 0);
                                const result = await player
                                    .chooseTarget(get.prompt2("yuliezaiqi"), [1, num])
                                    .set("ai", target => {
                                        const player = get.player();
                                        const att = get.attitude(player, target);
                                        return 3 - get.sgn(att) + Math.abs(att / 1000);
                                    })
                                    .forResult();

                                if (result?.bool && result.targets?.length) {
                                    //s.push(s.shift());
                                    game.playAudio("../extension/永夜之境/audio/", 'fyrhwenjue' + [get.rand(5, 6)] + '.mp3');
                                    const currentItem = s.shift();
                                    let hasShan = false;
                                    const targets = result.targets.sortBySeat();
                                    while (targets.length) {
                                        const target = targets.shift();
                                        const discardResult = await target
                                            .chooseToDiscard(get.translation(player) + "对你发动了【再起】", "是否弃置一张牌令其回复1点体力？或者点击“取消”，令该角色摸一张牌。", "he")
                                            .set("ai", card => {
                                                const eff = _status.event.eff;
                                                const att = _status.event.att;
                                                if ((eff > 0 && att > 0) || (eff <= 0 && att < 0)) {
                                                    return 5.5 - get.value(card);
                                                }
                                                return 0;
                                            })
                                            .set("eff", get.recoverEffect(player, player, target))
                                            .set("att", get.attitude(target, player))
                                            .forResult();
                                        target.line(player);
                                        if (discardResult.bool && discardResult.cards && discardResult.cards.length) {
                                            if (discardResult.cards.some(c => get.name(c) == 'shan')) {
                                                hasShan = true;
                                            }
                                            await player.recover(target);
                                        } else {
                                            const gained = await player.draw().forResult();
                                            if (gained?.bool && gained.cards.some(c => get.name(c) == 'shan')) {
                                                hasShan = true;
                                            }
                                        }
                                    }
                                    // if (hasShan) {
                                    //    game.log(player, "结算期间出现了【闪】，", "#g【欲烈】", "的选项", currentItem, "被移除");
                                    // } else {
                                    s.push(currentItem);
                                    //  }
                                }
                            }
                        }
                        player.markSkill('fyrhyulie');
                        player.syncStorage("fyrhyulie");
                    }

                },
                dongzhu: {
                    trigger: { player: "dongzhuxianjiBegin" },
                    silent: true,
                    charlotte: true,
                    filter(event, player) {
                        return event.card.name === 'dongzhuxianji' && event.card.storage.fyrhyulieuse;
                    },
                    async content(event, trigger, player) {
                        trigger.setContent(async function (event) {
                            const player = event.player;
                            const cards = get.cards(2);
                            game.cardsGotoOrdering(cards);
                            const next = player.chooseToMove("allowChooseAll");
                            next.set("list", [["牌堆顶", cards.reverse()], ["牌堆底"]]);
                            next.set("prompt", "欲烈：点击或拖动将牌移动到牌堆顶或牌堆底");
                            next.processAI = list => {
                                const cards = list[0][1],
                                    player = _status.event.player;
                                const top = [];
                                const judges = player.getCards("j");
                                let stopped = false;
                                if (!player.hasWuxie()) {
                                    for (let i = 0; i < judges.length; i++) {
                                        const judge = get.judge(judges[i]);
                                        cards.sort((a, b) => judge(b) - judge(a));
                                        if (judge(cards[0]) < 0) {
                                            stopped = true;
                                            break;
                                        } else {
                                            top.unshift(cards.shift());
                                        }
                                    }
                                }
                                let bottom;
                                if (!stopped) {
                                    cards.sort((a, b) => get.value(b, player) - get.value(a, player));
                                    while (cards.length) {
                                        if (get.value(cards[0], player) <= 5) {
                                            break;
                                        }
                                        top.unshift(cards.shift());
                                    }
                                }
                                bottom = cards;
                                return [top, bottom];
                            };
                            const { moved } = await next.forResult();
                            const top = moved[0];
                            const bottom = moved[1];
                            top.reverse();
                            game.cardsGotoPile(top.concat(bottom), ["top_cards", top], (event, card) => {
                                if (event.top_cards.includes(card)) {
                                    return ui.cardPile.firstChild;
                                }
                                return null;
                            });
                            player.popup(get.cnNumber(top.length) + "上" + get.cnNumber(bottom.length) + "下");
                            top.length ? game.log(player, "将", "#y" + get.translation(top), "置于牌堆顶") : null;
                            bottom.length ? game.log(player, "将", "#y" + get.translation(bottom), "置于牌堆底") : null;
                            await game.delayx();
                            const gained = await player.draw(2);
                        });
                    }

                },
                remove: {
                    charlotte: true,
                },
                shan: {
                    trigger: { player: "useCardAfter" },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return event.card.storage.fyrhyulieuse;
                    },
                    async content(event, trigger, player) {
                        const mode = trigger.card.storage.fyrhyulie_mode;
                        const history = game.getGlobalHistory('everything');
                        let hasShan = false;
                        for (let evt of history) {
                            if (!['lose', 'loseAsync', 'cardsDiscard', 'gain', 'draw', 'cardsGotoOrdering', 'move', 'respond', 'showCards'].includes(evt.name)) continue;
                            //检查这个事件是不是本次 (trigger) 的子事件
                            let isChild = false;
                            let parent = evt.getParent();
                            while (parent && typeof parent.getParent === 'function') {
                                if (parent == trigger) {
                                    isChild = true;
                                    break;
                                }
                                parent = parent.getParent();
                            }
                            if (!isChild) continue;
                            if (evt.cards && evt.cards.length) {
                                if (evt.cards.some(c => get.name(c) == 'shan')) {
                                    hasShan = true;
                                    break;
                                }
                            }
                        }
                        // 如果发现了闪，执行移除逻辑
                        if (hasShan) {
                            const s = player.storage.fyrhyulie;
                            if (s && s.length) {
                                const index = s.indexOf(mode);
                                if (index !== -1) {
                                    const removed = await s.splice(index, 1)[0];
                                    game.log("结算期间出现了【闪】，", "#g【欲烈】", "的选项", removed, "被移除");
                                    player.addTempSkill('fyrhyulie_remove');
                                    if (!player.storage.fyrhwenjue && s.length === 0) {
                                        player.storage.fyrhwenjue = true;
                                        player.storage.fyrhyulie = [1, 2, 3];
                                        await game.delayx();
                                        player.$fullscreenpop("魏武君临", "thunder");
                                        game.playAudio("../extension/永夜之境/audio/", 'fyrhwenjue' + [1] + '.mp3');
                                        player.awakenSkill("fyrhwenjue");
                                        player.changeSkin({ characterName: "fyrh_caocao" }, "fyrh_caocao_shadow");
                                        game.log(player, "已扫六合，魏武君临");
                                    }
                                    player.markSkill("fyrhyulie");
                                    player.syncStorage("fyrhyulie");
                                }
                            }
                        }
                    }
                }


            }
        },
        fyrhwenjue: {
            audio: "ext:永夜之境/audio:8",
            juexingji: true,
            ai: {
                combo: "fyrhyulie",
            }
        },
        fyrhyuliex: {

        },
        fyrhjizhi: {
            audio: "ext:永夜之境/audio:3",
            trigger: {
                global: "phaseBegin",
            },
            filter(event, player) {
                if (game.roundNumber <= 1) return false;
                if (event.player === player) return false;
                let history = event.player.getRoundHistory('useCard', (evt) => {
                    return evt.card.name == 'sha' && evt.targets && evt.targets.includes(player);
                }, 1);
                return history.length > 0;
            },
            async cost(event, trigger, player) {
                const target = trigger.player,
                    num = target.countCards("h"),
                    hs = player.countCards("h"),
                    prompt = get.prompt(event.skill, target);
                if (hs > num) {
                    event.result = await player
                        .chooseToDiscard(prompt, player.countCards("h") - num, "allowChooseAll")
                        .set("ai", card => {
                            const { player, selectCard } = get.event();
                            let cards = player.getDiscardableCards(player, "h");
                            const select = selectCard?.[1] ?? 1;
                            if (cards.length < select) {
                                return 0;
                            }
                            cards.sort((a, b) => get.value(a) - get.value(b));
                            return cards.slice(0, select).reduce((s, c) => s + get.value(c), 0) && cards.includes(card) ? 1 : 0;
                        })
                        .set("prompt2", "将手牌数弃至" + get.cnNumber(num) + "张，且本回合" + get.translation(target) + "使用牌后弃置你一张牌")
                        .set("chooseonly", true)
                        .forResult();
                } else {
                    let str = `本回合${get.translation(target)}使用牌后弃置你一张牌`;
                    if (hs < num) {
                        str = `将手牌摸至${get.cnNumber(num)}张，且${str}`;
                    }
                    event.result = await player
                        .chooseBool(prompt, str)
                        .set(
                            "choice",
                            (() => {
                                const count = Math.max(0, num - hs);
                                return count;
                            })()
                        )
                        .forResult();
                }
            },
            async content(event, trigger, player) {
                const target = trigger.player;
                if (event.cards?.length) {
                    await player.discard(event.cards);
                } else {
                    await player.drawTo((target.countCards("h")));
                }
                player.addTempSkill("fyrhjizhi_dis");
                player.setStorage("fyrhjizhi_dis", target);
            },
            subSkill: {
                dis: {
                    trigger: {
                        global: "useCardAfter",
                    },
                    silent: true,
                    charlotte: true,
                    onremove: true,
                    filter(event, player) {
                        if (!event.player) {
                            return false;
                        }
                        return event.player === player.getStorage("fyrhjizhi_dis") && player.countCards("he") > 0;
                    },
                    async content(event, trigger, player) {
                        await trigger.player.discardPlayerCard(player, "he", true);
                    }
                }
            }
        },
        fyrhzhiji: {
            audio: "ext:永夜之境/audio:2",
            derivation: ["fyrhzhiji_guanxing", "fyrhzhiji_aocai"],
            skillAnimation: true,
            animationColor: "fire",
            xiandingji: true,
            trigger: {
                global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
            },
            getIndex(event, player, name) {
                return game
                    .filterPlayer(target => {
                        if (target.countCards("h")) {
                            return false;
                        }
                        const evt = event.getl(target);
                        return evt?.hs?.length;
                    })
                    .sortBySeat();
            },
            filter: (event, player, name, target) => target?.isIn(),
            logTarget: (event, player, name, target) => target,
            check: (event, player, name, target) => {
                return player == target && !player.countCards('h') && player == _status.currentPhase;
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                player.awakenSkill('fyrhzhiji');
                await player.recover();
                player.addSkills('fyrhzhiji_guanxing');
                if (player == target) {
                    player.addSkills('fyrhzhiji_aocai')
                    if (player === _status.currentPhase && !player.storage.fyrhzhiji_re) {
                        player.storage.fyrhzhiji_re = true;
                    }
                }
            },
            ai: {
                order: 10,
                threaten: 1.5,
                result: {
                    player(player) {
                        return 1;
                    },
                },
            },
            subSkill: {
                guanxing: {
                    audio: "ext:永夜之境/audio:6",
                    logAudio: index => "ext:永夜之境/audio/fyrhzhiji_guanxing" + [1, 3].randomGet() + ".mp3",
                    trigger: {
                        player: ["phaseZhunbeiBegin", "phaseJieshuBegin"],
                    },
                    frequent: true,
                    preHidden: true,
                    async content(event, trigger, player) {
                        const result = await player.chooseToGuanxing(5)
                            .set("prompt", "观星：点击或拖动将牌移动到牌堆顶或牌堆底")
                            .set("processAI", list => {
                                let cards = list[0][1],
                                    player = _status.event.player,
                                    target = _status.currentPhase || player,
                                    name = _status.event.getTrigger().name;
                                let top = [],
                                    bottom = [];
                                if (player.storage?.fyrhzhiji_re) {
                                    const getScore = (card) => {
                                        let score = 0;
                                        const type = get.type(card);
                                        score += get.value(card, player);
                                        if (type === 'basic') {
                                            score += 10;
                                            if (player.hasUseTarget(card)) {
                                                score += 20;
                                                if (card.name === 'tao' && player.hp < player.maxHp) {
                                                    score += 50;
                                                }
                                                if (card.name === 'sha') {
                                                    score += 15;
                                                }
                                                if (card.name === 'shan') {
                                                    score -= 50;
                                                }
                                            }
                                        }
                                        return score;
                                    };
                                    cards.sort((a, b) => getScore(b) - getScore(a));
                                    while (cards.length) {
                                        const card = cards.shift();
                                        const score = getScore(card);
                                        if (score > 10) {
                                            top.push(card);
                                        } else {
                                            bottom.push(card);
                                        }
                                    }
                                    return [top, bottom];
                                }
                                cards.sort((a, b) => get.value(b, player) - get.value(a, player));
                                while (cards.length) {
                                    if (get.value(cards[0], player) > 5) {
                                        top.push(cards.shift());
                                    } else {
                                        bottom.push(cards.shift());
                                    }
                                }
                                return [top, bottom];
                            })
                            .forResult();
                        if (result?.bool && player.storage?.fyrhzhiji_re) {
                            const cards = get.cards(4);
                            if (cards.length > 0) {
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhzhiji_guanxing' + [get.rand(4, 6)] + '.mp3');
                                while (cards.some(card => get.type(card) === 'basic' && player.hasUseTarget(card))) {
                                    const result1 = await player.chooseCardButton(`傲才：是否使用其中任意张基本牌`, cards)
                                        .set('filterButton', button => {
                                            if (get.type(button.link) !== 'basic') return false;
                                            return get.player().hasUseTarget(button.link);
                                        })
                                        .set("ai", button => {
                                            return get.player().getUseValue(button.link);
                                        }).forResult();
                                    if (result1?.bool && result1.links?.length > 0) {
                                        const card = result1.links[0];
                                        cards.remove(card);
                                        player.$gain2(card, false);
                                        await game.delayx();
                                        await player.chooseUseTarget(card, true, false);
                                    }
                                    else {
                                        break;
                                    }
                                }
                                if (cards.length) {
                                    await game.cardsGotoPile(cards.reverse(), "insert");
                                    game.log(player, "将", get.cnNumber(cards.length), "张牌置于了牌堆顶");
                                }
                            }
                        }
                    },
                },
            },
        },
        fyrhzhiji_aocai: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhzhiji_aocai${index}.mp3` : 2),
            enable: ["chooseToUse", "chooseToRespond"],
            hiddenCard(player, name) {
                if (player != _status.currentPhase && get.type(name) == "basic" && lib.inpile.includes(name)) {
                    return true;
                }
                return false;
            },
            filter(event, player) {
                if (event.responded || player == _status.currentPhase || event.fyrhzhiji_aocai) {
                    return false;
                }
                return lib.inpile.some(i => get.type(i) == "basic" && event.filterCard(get.autoViewAs({ name: i }, "unsure"), player, event));
            },
            delay: false,
            popup: false,
            async content(event, trigger, player) {
                if (player.storage?.fyrhzhiji_re) {
                    game.playAudio("../extension/永夜之境/audio/", 'fyrhzhiji_aocai' + [get.rand(1, 2)] + '.mp3');
                    await player.chooseToGuanxing(5)
                        .set("prompt", "观星：点击或拖动将牌移动到牌堆顶或牌堆底");
                }

                const evt = event.getParent(2);
                const cards = get.cards(get.mode() != "guozhan" && player.countCards("h") == 0 ? 4 : 2, true);
                const cardsx = cards.slice().map(card => {
                    const cardx = ui.create.card();
                    cardx.init(get.cardInfo(card));
                    cardx._cardid = card.cardid;
                    return cardx;
                });
                evt.set("fyrhzhiji_aocai", true);
                player.directgains(cardsx, null, "fyrhzhiji_aocai_hs");
                const result = await player
                    .chooseCard(
                        "傲才：选择要" + (evt.name == "chooseToUse" ? "使用" : "打出") + "的牌",
                        (card, player) => {
                            return get.event().cards.includes(card);
                        },
                        "s"
                    )
                    .set(
                        "cards",
                        cardsx.filter(card => {
                            if (player.hasSkill("aozhan") && card.name == "tao") {
                                return (
                                    evt.filterCard(
                                        {
                                            name: "sha",
                                            isCard: true,
                                            cards: [card],
                                        },
                                        evt.player,
                                        evt
                                    ) ||
                                    evt.filterCard(
                                        {
                                            name: "shan",
                                            isCard: true,
                                            cards: [card],
                                        },
                                        evt.player,
                                        evt
                                    )
                                );
                            }
                            return evt.filterCard(card, evt.player, evt);
                        })
                    )
                    .set("ai", card => {
                        if (get.type(card) == "equip") {
                            return 0;
                        }
                        const evt = get.event().getParent(3),
                            player = get.event().player;
                        if (evt.type == "phase" && !player.hasValueTarget(card, null, true)) {
                            return 0;
                        }
                        if (evt && evt.ai) {
                            const tmp = _status.event;
                            _status.event = evt;
                            const result = (evt.ai || event.ai1)(card, player, evt);
                            _status.event = tmp;
                            return result;
                        }
                        return 1;
                    })
                    .forResult();
                let card;
                if (result.bool) {
                    card = cards.find(card => card.cardid === result.cards[0]._cardid);
                }
                const cards2 = player.getCards("s", card => card.hasGaintag("fyrhzhiji_aocai_hs"));
                if (player.isOnline2()) {
                    player.send(
                        (cards, player) => {
                            cards.forEach(i => i.delete());
                            if (player == game.me) {
                                ui.updatehl();
                            }
                        },
                        cards2,
                        player
                    );
                }
                cards2.forEach(i => i.delete());
                if (player == game.me) {
                    ui.updatehl();
                }
                if (card) {
                    let name = card.name,
                        aozhan = player.hasSkill("aozhan") && name == "tao";
                    if (aozhan) {
                        name = evt.filterCard(
                            {
                                name: "sha",
                                isCard: true,
                                cards: [card],
                            },
                            evt.player,
                            evt
                        )
                            ? "sha"
                            : "shan";
                    }
                    if (evt.name == "chooseToUse") {
                        game.broadcastAll(
                            (result, name) => {
                                lib.skill.fyrhzhiji_aocai_backup.viewAs = { name: name, cards: [result], isCard: true };
                            },
                            card,
                            name
                        );
                        evt.set("_backupevent", "fyrhzhiji_aocai_backup");
                        evt.set("openskilldialog", "请选择" + get.translation(card) + "的目标");
                        evt.backup("fyrhzhiji_aocai_backup");
                    } else {
                        delete evt.result.used;
                        delete evt.result.skill;
                        evt.result.card = get.autoViewAs(card);
                        if (aozhan) {
                            evt.result.card.name = name;
                        }
                        evt.result.cards = [card];
                        evt.redo();
                        return;
                    }
                }
                evt.goto(0);
            },
            ai: {
                effect: {
                    target(card, player, target, effect) {
                        if (get.tag(card, "respondShan")) {
                            return 0.7;
                        }
                        if (get.tag(card, "respondSha")) {
                            return 0.7;
                        }
                    },
                },
                order: 11,
                respondShan: true,
                respondSha: true,
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 1;
                    },
                },
            },
            subSkill: {
                backup: {
                    precontent() {
                        player.logSkill("fyrhzhiji_aocai", null, null, null, [get.rand(3, 5)]);
                        var name = event.result.card.name,
                            cards = event.result.card.cards.slice(0);
                        event.result.cards = cards;
                        var rcard = cards[0],
                            card;
                        if (rcard.name == name) {
                            card = get.autoViewAs(rcard);
                        } else {
                            card = get.autoViewAs({ name, isCard: true });
                        }
                        event.result.card = card;
                        event.result._apply_args = { addSkillCount: false };
                    },
                    filterCard: () => false,
                    selectCard: -1,
                    log: false,
                    "skill_id": "fyrhzhiji_aocai_backup",
                    sub: true,
                    sourceSkill: "fyrhzhiji_aocai",
                },
                hs: {

                }
            },

        },
        fyrhlongdan: {
            audio: "jsrglonglin",
            getLastLost(player) {
                /* let history = player.getAllHistory("lose");
                let allLostCards = [];
                history.forEach(evt => {
                    if (evt.cards && evt.cards.length) allLostCards.push(...evt.cards);
                    else if (evt.card) allLostCards.push(evt.card);
                });
                if (allLostCards.length > 0) {
                    return allLostCards[allLostCards.length - 1];
                }
                return null; */
                const history = player.getAllHistory("lose");
                if (!history || history.length === 0) {
                    return null;
                }
                const lastEvt = history[history.length - 1];
                if (lastEvt.cards && lastEvt.cards.length > 0) {
                    return lastEvt.cards[lastEvt.cards.length - 1];
                }
                if (lastEvt.card) {
                    return lastEvt.card;
                }
                return null;
            },
            enable: ["chooseToUse"],
            filter(event, player) {
                const last = lib.skill.fyrhlongdan.getLastLost(player);
                if (!last) return false;
                /* if (get.is.damageCard(last)) {
                    if (event.filterCard({ name: 'shan' }, player, event) &&
                        player.countCards('hs', { type: 'basic' }) > 0) {
                        return true;
                    }
                }
                if (get.color(last) == 'red') {
                    if (event.filterCard({ name: 'sha' }, player, event) &&
                        player.countCards('hs', (card) => {
                            return get.type(card) != 'basic';
                        }) > 0) {
                        return true;
                    }
                } */
                if (player.countCards('hs', { type: 'basic' }) == 0) return false;
                if (get.is.damageCard(last)) {
                    if (event.filterCard({ name: 'shan' }, player, event)) return true;
                }
                if (get.color(last) == 'red') {
                    if (event.filterCard({ name: 'sha' }, player, event)) return true;
                }
                return false;
            },
            chooseButton: {
                dialog(event, player) {
                    const list = [];
                    const last = lib.skill.fyrhlongdan.getLastLost(player);
                    const hasBasic = player.countCards('hs', { type: 'basic' }) > 0;
                    if (last && hasBasic) {
                        if (get.is.damageCard(last)) {
                            //if (get.color(last) == 'black') {
                            if (event.filterCard({ name: 'shan' }, player, event)) {
                                list.push(['基本', '伤', 'shan']);
                            }
                        }
                        if (get.color(last) == 'red') {
                            if (event.filterCard({ name: 'sha' }, player, event)) {
                                list.push(['基本', '摸', 'sha']);
                            }
                        }
                    }
                    return ui.create.dialog("龙胆", [list, "vcard"], "hidden");
                },
                check(button) {
                    const player = get.event().player,
                        value = player.getUseValue({ name: button.link[2], nature: button.link[3] });
                    return value;
                },
                backup(links, player) {
                    var targetName = links[0][2];
                    return {
                        viewAs: {
                            name: targetName,
                        },
                        filterCard: (card) => {
                            return get.type(card) == 'basic';
                        },
                        audio: "jsrglonglin",
                        position: "hs",
                        popname: true,
                        selectCard: 1,
                        async precontent(event, trigger, player) {
                            const last = lib.skill.fyrhlongdan.getLastLost(player);
                            const usedName = event.result.card.name;
                            if (last) {
                                if (usedName == 'shan' && get.is.damageCard(last)) {
                                    player.storage.fyrhlongdan_trigger = last.name;
                                    player.addTempSkill('fyrhlongdan_effect');
                                }
                                else if (usedName == 'sha' && get.color(last) == 'red') {
                                    player.draw(2);
                                }
                            }
                        },
                    };
                },
                prompt(links, player) {
                    const name = links[0][2];
                    if (name == 'shan') return "将一张基本牌当【闪】使用，并视为使用上一张伤害牌";
                    if (name == 'sha') return "将一张基本牌当【杀】使用，并摸两张牌";
                    return "龙胆";
                },
            },
            ai: {
                order: 10,
                respondSha: true,
                respondShan: true,
                result: {
                    player(player) {
                        if (_status.event.dying) {
                            return get.attitude(player, _status.event.dying);
                        }
                        return 1;
                    },
                },
            },
            mod: {
                aiUseful(player, card, num) {
                    if (card.type2 === "basic") {
                        return 16;
                    }
                },
            },
            group: ["fyrhlongdan_tip"],
            subSkill: {
                tip: {
                    trigger: {
                        player: "loseAfter",
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    charlotte: true,
                    silent: true,
                    firstDo: true,
                    filter(event, player) {
                        const evt = event.getl(player);
                        return evt?.cards2?.length;
                    },
                    async content(event, trigger, player) {
                        player.removeTip("fyrhlongdan_tip");
                        const last = lib.skill.fyrhlongdan.getLastLost(player);
                        if (last) {
                            let info = "龙胆: ";
                            const tags = [];
                            if (get.is.damageCard(last)) tags.push("伤");
                            if (get.color(last) == 'red') tags.push("红");
                            if (tags.length) {
                                info += " (" + tags.join("/") + ")";
                            }
                            player.addTip("fyrhlongdan_tip", info);
                        }
                    },
                    onremove(player, skill) {
                        delete player.storage[skill];
                        player.removeTip(skill);
                    },
                },
                effect: {
                    charlotte: true,
                    trigger: { player: ["useCardAfter"] },
                    forced: true,
                    popup: false,
                    onremove: true,
                    filter(event, player) {
                        return player.storage.fyrhlongdan_trigger;
                    },
                    async content(event, trigger, player) {
                        const cardName = player.storage.fyrhlongdan_trigger;
                        delete player.storage.fyrhlongdan_trigger;
                        player.removeSkill('fyrhlongdan_effect');
                        if (cardName && player.hasUseTarget({ name: cardName, isCard: true })) {
                            await player.chooseUseTarget({ name: cardName, isCard: true }, false);
                        }
                    }
                },

            }
        },
        fyrhyajiao: {
            audio: "jsrgzhendan",
            trigger: {
                global: ["phaseBegin"],
            },
            filter(event, player) {
                return event.player.hasAllHistory("sourceDamage", evt => evt.player == player) && event.player.canUse("sha", player, false);
            },
            forced: true,
            async content(event, trigger, player) {
                await trigger.player.useCard({ name: "sha", isCard: true }, player, false, "noai");
            },
            ai: {
                combo: 'fyrhlongdan',
            }
        },
        fyrhchenglue: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhchenglue${index}.mp3` : 2),
            trigger: {
                player: ["phaseUseBegin"],
            },
            filter(event, player) {
                return player.countCards('h');
            },
            prompt2(event, player) {
                return `弃置所有手牌，摸四张牌？`;
            },
            check(event, player) {
                return player.countCards('h') < 4;
            },
            popup: false,
            async content(event, trigger, player) {
                player.logSkill("fyrhchenglue", null, null, null, [get.rand(1, 2)]);
                const hs = player.getCards('h');
                await player.discard(hs);
                await player.draw(4);
            },
            group: ["fyrhchenglue_add"],
            subSkill: {
                add: {
                    mark: true,
                    onremove(player, skill) {
                        delete player.storage[skill];
                        player.removeTip(skill);
                    },
                    marktext: "略",
                    intro: {
                        markcount(storage, player) {
                            let num = player.getStorage("fyrhchenglue_add").length;
                            if (num == 0) return null;
                            return num;
                        },
                        content: storage =>
                            `已记录<span class=thundertext>${storage.reduce((str, suit) => str + get.translation(suit), "")}</span>`,
                    },
                    trigger: {
                        global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    filter(event, player, name, target) {
                        if (!player.isPhaseUsing()) return false;
                        return game.hasPlayer(current => {
                            if (current == player) {
                                return false;
                            }
                            const evt = event.getl(current);
                            return evt && evt.cards2.length;
                        });
                    },
                    popup: false,
                    forced: true,
                    async content(event, trigger, player) {
                        const cards = trigger.cards;
                        const newSuits = [];
                        for (const card of cards) {
                            const suit = get.suit(card);
                            if (suit !== 'none') {
                                newSuits.push(suit);
                            }
                        }

                        if (newSuits.length > 0) {
                            if (player.countCards('h') > 0 && newSuits.some((s) => player.getStorage("fyrhchenglue_add").includes(s))) {
                                const result = await player.chooseBool(`是否弃置所有手牌，摸四张牌？`)
                                    .set("ai", () => {
                                        return get.player().countCards('h') < 4;
                                    })
                                    .forResult();
                                if (result?.bool) {
                                    player.logSkill("fyrhchenglue", null, null, null, [get.rand(1, 2)]);
                                    const hs = player.getCards('h');
                                    await player.discard(hs);
                                    await player.draw(4);
                                }
                            } else {
                                game.playAudio("../extension/永夜之境/audio/", 'fyrhchenglue' + [get.rand(3, 4)] + '.mp3');
                                await player.markAuto("fyrhchenglue_add", newSuits);
                                player.addTip(
                                    "fyrhchenglue_add",
                                    get.translation("fyrhchenglue") + player.getStorage("fyrhchenglue_add").reduce((str, suit) => str + get.translation(suit), "")
                                );
                            }
                        }
                    },

                }
            }
        },
        fyrhshicai: {
            audio: "ext:永夜之境/audio:4",
            enable: "phaseUse",
            filter(event, player) {
                if (!player.countCards('h')) return false;
                if (!game.hasPlayer(current => current.countCards("h") && current !== player)) return false;
                const history = player.getHistory('gain');
                if (!history || history.length == 0) return false;
                const suits = {};
                let max = 0;
                for (const evt of history) {
                    if (!evt.cards) continue;
                    for (const c of evt.cards) {
                        const suit = get.suit(c);
                        if (suit === 'none') continue;
                        suits[suit] = (suits[suit] || 0) + 1;
                        if (suits[suit] > max) max = suits[suit];
                    }
                }
                if (max === 0) return false;
                for (const s in suits) {
                    if (suits[s] === max && player.countCards('h', { suit: s }) > 0) {
                        return true;
                    }
                }
                return false;
            },
            chooseButton: {
                dialog(event, player) {
                    const history = player.getHistory('gain');
                    const suits = {};
                    let max = 0;
                    for (const evt of history) {
                        if (!evt.cards) continue;
                        for (const c of evt.cards) {
                            const suit = get.suit(c);
                            if (suit === 'none') continue;
                            suits[suit] = (suits[suit] || 0) + 1;
                            if (suits[suit] > max) max = suits[suit];
                        }
                    }
                    const candidateSuits = [];
                    for (const s in suits) {
                        if (suits[s] === max) candidateSuits.push(s);
                    }
                    const rawList = get.addNewRowList(player.getCards("h"), "suit", player);
                    const filteredButtons = rawList
                        .flat()
                        .filter(item => candidateSuits.includes(item.suit) && item.count > 0)
                        .map(item => [Array.isArray(item) ? item : [item], "addNewRow"]);


                    const dialog = ui.create.dialog("恃才：将一种花色的所有手牌当【趁火打劫】使用", "hidden");
                    dialog.classList.add("fullheight");
                    dialog.forcebutton = false;
                    dialog._scrollset = false;
                    for (const btn of filteredButtons) {
                        dialog.add(btn);
                    }
                    return dialog;
                },
                check(button) {
                    const player = get.player();
                    const suit = button.link;
                    if (!suit) return 0;
                    const count = player.countCards('h', { suit: suit });
                    return Math.max(0.1, 10 - count * 2);
                },
                backup(links, player) {
                    return {
                        audio: "ext:永夜之境/audio:4",
                        choice: links[0],
                        filterTarget(card, player, target) {
                            return player.canUse({ name: 'chenghuodajie' }, target);
                        },
                        selectTarget: 1,
                        ai1: () => 1,
                        ai2(target) {
                            const player = get.player();
                            return get.effect(target, { name: 'chenghuodajie' }, player, player);
                        },
                        async content(event, trigger, player) {
                            const { targets: [target] } = event;
                            const { choice } = get.info(event.name);
                            const cardsToUse = player.getCards('h', { suit: choice });

                            if (cardsToUse.length) {
                                await player.useCard({ name: 'chenghuodajie', isCard: true }, cardsToUse, target);
                            }
                        },
                    };
                },
                prompt(links, player) {
                    const suitName = get.translation(links[0]);
                    return `恃才：选择目标，将${suitName}花色的所有手牌当【趁火打劫】使用`;
                },
            },
            subSkill: {
                backup: {

                },
            },
            ai: {
                order: 8,
                result: {
                    player: 1,
                }
            }
        },
        fyrhyinzhi: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhyinzhi${index}.mp3` : 2),
            trigger: {
                global: ["drawAfter", "discardAfter"],
            },
            filter(event, player) {
                if (player.getStorage("fyrhyinzhi_used").includes(event.name)) {
                    return false;
                }
                return event.player.countCards('h') > event.player.getHandcardLimit();
            },
            popup: false,
            async cost(event, trigger, player) {
                const target = trigger.player,
                    prompt = get.prompt(event.skill, target);
                let str = `是否令${get.translation(target)}`;
                if (trigger.name == "draw") {
                    str += `弃置两张牌`;
                } else {
                    str += `摸两张牌`;
                }
                event.result = await player
                    .chooseBool(prompt, str)
                    .set("ai", () => {
                        if (trigger.name == "draw" && get.attitude(get.player(), target) > 0) {
                            return false;
                        }
                        if (trigger.name == "discard" && get.attitude(get.player(), target) <= 0) {
                            return false;
                        }
                        return true;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = trigger.player;
                player.addTempSkill("fyrhyinzhi_used");
                if (trigger.name == "draw") {
                    player.logSkill("fyrhyinzhi", [target], null, null, [get.rand(3, 4)]);
                    await player.markAuto("fyrhyinzhi_used", trigger.name);
                    await target.chooseToDiscard("he", 2, true);
                } else {
                    player.logSkill("fyrhyinzhi", [target], null, null, [get.rand(1, 2)]);
                    await player.markAuto("fyrhyinzhi_used", trigger.name);
                    await target.draw(2);
                }
            },
            subSkill: {
                used: {
                    charlotte: true,
                    onremove: true,
                    marktext: "治",
                    intro: {
                        content(storage) {
                            const map = {
                                draw: "摸牌",
                                discard: "弃牌",
                            };
                            const str = storage.map(name => map[name]).join("、");
                            return "本回合已使用时机：" + str;
                        }
                    }
                },
            }

        },
        fyrhquanxin: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: ["roundEnd"],
            },
            filter(event, player) {
                return game.filterPlayer().every(target => {
                    const history = target.getRoundHistory('lose', (evt) => {
                        return evt.type == 'discard';
                    });
                    return history.length > 0;
                });
            },
            prompt2(event, player) {
                return `是否进行一个额外回合？`;
            },
            async content(event, trigger, player) {
                player.insertPhase();
            }
        },
        fyrhzhanghua: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhzhanghua${index}.mp3` : 2),
            onremove(player, skill) {
                delete player.storage[skill + '_reasons'];
                player.removeTip(skill + "_tip");
            },
            trigger: {
                player: ["loseAfter"],
                global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter", "cardsGotoSpecialAfter"],
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                // const evt = event.getl(player);
                // return evt && evt.hs && evt.hs.length > 0;
                if (typeof event.getl === 'function') {
                    const evt = event.getl(player);
                    return evt && evt.hs && evt.hs.length > 0;
                }
                if (event.name === "addToExpansion" || event.name === "addToExpansionMultiple") {
                    return event.source === player && event.cards && event.cards.length > 0;
                }
                return false;
            },
            async content(event, trigger, player) {
                const triggerMap = {
                    useCard: '使用',
                    respond: '打出',
                    recast: '重铸',
                    gain: '被获得',
                    equip: '使用',
                    addToExpansion: '移出',
                    discard: '弃置',
                };
                let reason = 'other';
                let e = trigger;
                while (e) {
                    if (e.name === 'useCard') { reason = '使用'; break; }
                    if (e.name === 'respond') { reason = '打出'; break; }
                    if (e.name === 'recast') { reason = '重铸'; break; }
                    if (e.name === 'gain') { reason = '被获得'; break; }
                    if (e.name === 'equip') { reason = '使用'; break; }
                    if (e.name === 'addToExpansion' || e.name === 'addToExpansionMultiple') { reason = '移出'; break; }
                    if (e.name === 'discard' || e.type === 'discard') { reason = '弃置'; break; }
                    e = e.parent || (typeof e.getParent === 'function' ? e.getParent() : null);
                    //e = e.getParent();
                }
                // 读取并更新 Storage 记录本
                let reasons = player.getStorage('fyrhzhanghua_reasons');
                if (!Array.isArray(reasons)) reasons = [];
                reasons.push(reason); // 把本次的方式加进去
                player.addTip("fyrhzhanghua_tip", "(" + reasons.join("/") + ")");
                if (reasons.length < 3) {
                    // 还没满 3 次，只存入记录，直接结束
                    player.storage.fyrhzhanghua_reasons = reasons;
                    return;
                }
                //  满 3 次了，立刻清空记录本
                player.storage.fyrhzhanghua_reasons = [];
                player.removeTip("fyrhzhanghua_tip");
                // 判断这 3 次的方式是否“均不相同”
                //去重，如果去重后长度还是 3，说明完全没重复
                const isAllDifferent = new Set(reasons).size === 3;

                if (isAllDifferent) {
                    const result = await player.chooseBool('彰华：你连续三次失去手牌的方式均不同，是否摸三张牌？')
                        .set('ai', () => true)
                        .forResult();
                    if (result?.bool) {
                        player.logSkill("fyrhzhanghua", null, null, null, [get.rand(1, 2)]);
                        await player.draw(3);
                    }
                } else {
                    if (player.countCards('h') > 0) {
                        const result = await player.chooseBool('彰华：你已累计三次失去手牌，是否重铸所有手牌？')
                            .set('ai', () => true)
                            .forResult();
                        if (result?.bool) {
                            player.logSkill("fyrhzhanghua", null, null, null, [get.rand(3, 4)]);
                            const hs = player.getCards('h');
                            await player.recast(hs);
                        }
                    }
                }
            }
        },
        fyrhyanfeng: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                player: ["useCard2"],
            },
            filter(event, player) {
                if (get.type(event.card) == 'trick') {
                    return player.getCards("hs").some(card => {
                        return get.name(card) == "sha";
                    });
                };
                if (get.name(event.card) == 'sha') {
                    return player.getCards("hs").some(card => {
                        return !get.is.damageCard(card);
                    });
                }
                return false;
            },
            async cost(event, trigger, player) {
                let result;
                if (get.type(trigger.card) == 'trick') {
                    result = await player.chooseToRespond((card, player) => { return get.name(card) == "sha" })
                        .set('ai', () => true)
                        .set('prompt', get.prompt(event.skill))
                        .set('prompt2', `打出一张【杀】令${get.translation(trigger.card)}不可响应？`)
                        .forResult();
                } else {
                    result = await player
                        .chooseCardTarget({
                            prompt: get.prompt(event.skill),
                            prompt2: `<div class="text center">打出一张非伤害牌为${get.translation(trigger.card)}增加一个目标？</div>`,
                            filterCard(card, player) {
                                return !get.is.damageCard(card);
                            },
                            filterTarget(card, player, target) {
                                let trigger = _status.event.getTrigger();
                                return !trigger.targets.includes(target)
                                //&& lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                            },
                            position: 'hs',
                            ai1(card) {
                                return 8 - get.value(card);
                            },
                            ai2(target) {
                                const evt = get.event().getTrigger(), eff = get.effect(target, evt.card, evt.player, evt.player);
                                return eff;
                            },
                        })
                        .forResult();
                }
                event.result = {
                    bool: result?.bool,
                    cards: result?.cards,
                    targets: result?.targets,
                };
            },
            async content(event, trigger, player) {
                const targets = event.targets;
                const cards = event.cards;
                if (get.type(trigger.card) == 'trick') {
                    trigger.directHit.addArray(game.filterPlayer());
                    game.log(player, '令', get.translation(trigger.card), '不可响应');
                }
                else {
                    await player.respond(cards);
                    player.line(targets[0]);
                    trigger.targets.add(targets[0]);
                    game.log(player, '为', get.translation(trigger.card), '增加了', get.translation(targets[0]), '为目标');
                }
            }
        },
        fyrhjiji: {
            audio: "ext:永夜之境/audio:3",
            trigger: {
                global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter"],
            },
            filter(event, player) {
                const cards = event.getd()?.filterInD("od") || [];
                return cards.some(card => ['basic', 'trick'].includes(get.type(card)));
            },
            popup: false,
            async cost(event, trigger, player) {
                const triggerCards = trigger.getd().filterInD("od").filter(card => ['basic', 'trick'].includes(get.type(card)));
                const names = triggerCards.map(card => card.name);
                const hecards = player.getCards('he').filter(card => names.includes(card.name));
                const xcards = player.getCards("xs", card => !card._cardid).filter(card => names.includes(card.name));
                if (!hecards.length && !xcards.length) return false;
                let actions = [];
                if (hecards.length) actions.push("移出");
                if (xcards.length) actions.push("移去");
                let promptStr = `【击楫】是否${actions.join("或")}一张同名牌？`;
                const dialog = ui.create.dialog(promptStr);
                if (hecards.length) {
                    dialog.addText('<b>可移出牌</b>（置于武将牌上）');
                    dialog.add(hecards);
                }
                if (xcards.length) {
                    dialog.addText('<b>可移去牌</b>（置入弃牌堆）');
                    dialog.add(xcards);
                }
                const result = await player.chooseButton(dialog).set('ai', button => {
                    const player = _status.event.player;
                    const xsCount = player.getCards("xs", card => !card._cardid).length;
                    const isHeCard = player.getCards('he').includes(button.link);
                    if (xsCount >= 4) {
                        return isHeCard ? 0 : 1;
                    } else {
                        return isHeCard ? 1 : 0;
                    }
                }).forResult();
                if (result.bool) {
                    event.result = {
                        bool: true,
                        cost_data: result.links[0],
                    };
                }
            },
            async content(event, trigger, player) {
                const cards = event.cost_data;
                if (cards) {
                    game.log(player, '发动了', '#g【击楫】');
                    if (player.getCards('he').includes(cards)) {
                        await player.addToExpansion(cards, player, "gain2").set("gaintag", ["fyrhjiji"]);
                    } else {
                        await player.loseToDiscardpile(cards);
                        //player.draw();
                    }
                    await player.addMark("fyrhjiji", 1, false);
                }
            },
            marktext: "⚔️",
            intro: {
                markcount: "expansion",
                mark(dialog, storage, player) {
                    dialog.css({ width: "50%" });
                    if (get.is.phoneLayout()) {
                        dialog.classList.add("fullheight");
                    }
                    const count1 = player.countMark("fyrhjiji");
                    const count2 = player.countMark("fyrhjiji_draw");
                    const count3 = player.countMark("fyrhjiji_use");
                    const expCards = player.getExpansions("fyrhjiji");
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; border-bottom:1px solid rgba(128,128,128,0.3)">📔技能次数</div>');
                    const infoHtml =
                        // font-size 改为 20px 
                        // font-weight: bold 全局加粗
                        '<div class="text center" style="margin: 15px 0; font-size: 20px; line-height: 2.2; font-weight: bold;">' +
                        // 给数字加了颜色（span style）
                        '<div>移出/移去次数：<span style="color:#FFFF00">' + count1 + '</span></div>' +
                        '<div>摸牌次数：<span style="color:#00FF00">' + count2 + '</span></div>' +
                        '<div>视为使用次数：<span style="color:#00BFFF">' + count3 + '</span></div>' +
                        '</div>';
                    dialog.addText(infoHtml);
                    dialog.addText('<div class="text center" style="font-size:18px; font-weight:bold; padding:5px; margin-top:15px; border-bottom:1px solid rgba(128,128,128,0.3)">⛵移出游戏区</div>');
                    if (expCards.length) {
                        if (player.isUnderControl(true)) {
                            dialog.addAuto(expCards);
                        }
                        else {
                            dialog.addText('<div class="text center" style="padding:10px;">共有' + get.cnNumber(expCards.length) + '张牌</div>');
                        }
                    } else {
                        dialog.addText('<div class="text center" style="opacity:0.6; padding:10px;">暂无卡牌</div>');
                    }
                },
            },
            group: ["fyrhjiji_draw", "fyrhjiji_use"],
            subSkill: {
                draw: {
                    trigger: {
                        player: "useCardAfter",
                    },
                    filter(event, player) {
                        const x = player.getCards("xs", card => !card._cardid).length;
                        if (x === 0) return false;
                        const historyCount = player.getHistory("useCard").length;
                        return historyCount === x;
                    },
                    prompt2(event, player) {
                        const x = player.getCards("xs", card => !card._cardid).length;
                        return `你本回合已使用${x}张牌，是否摸${x}张牌？`;
                    },
                    async content(event, trigger, player) {
                        const x = player.getCards("xs", card => !card._cardid).length;
                        //await player.drawTo(x);
                        game.playAudio("../extension/永夜之境/audio/", 'fyrhjiji' + [get.rand(1, 3)] + '.mp3');
                        await player.draw(x);
                        await player.addMark("fyrhjiji_draw", 1, false);

                    }
                },
                use: {
                    enable: ["chooseToUse", "phaseUse"],
                    filter(event, player) {
                        const xcards = player.getCards("xs", card => !card._cardid);
                        if (!xcards.length) return false;
                        const count1 = player.countMark("fyrhjiji");
                        const count2 = player.countMark("fyrhjiji_draw");
                        const count3 = player.countMark("fyrhjiji_use");
                        const minCount = Math.min(count1, count2, count3);
                        if (count3 > minCount) return false;
                        return xcards.some(card => {
                            if (event.filterCard) return event.filterCard(card, player, event);
                            return player.hasUseTarget(card, false, false);
                        });
                    },
                    chooseButton: {
                        dialog(event, player) {
                            return ui.create.dialog('【击楫】视为使用一张移出牌', player.getCards("xs", card => !card._cardid));
                        },
                        filter(button, player) {
                            const evt = _status.event.getParent();
                            if (evt && evt.filterCard) {
                                return evt.filterCard(button.link, player, evt);
                            }
                            return player.hasUseTarget(button.link);
                        },
                        check(button) {
                            return 1;
                        },
                        backup(links, player) {
                            return {
                                filterCard() { return false; },
                                selectCard: -1,
                                viewAs: links[0],
                                cards: links,
                                popname: true,
                                async precontent(event, trigger, player) {
                                    game.playAudio("../extension/永夜之境/audio/", 'fyrhjiji' + [get.rand(1, 3)] + '.mp3');
                                    player.addMark("fyrhjiji_use", 1, false);
                                    event.getParent().addCount = false;
                                    player.draw(2);
                                },
                            };
                        },
                        prompt(links, player) {
                            return '视为使用 ' + get.translation(links[0]);
                        }
                    },
                    hiddenCard(player, name) {
                        return player.getCards("xs", card => !card._cardid).some(card => card.name === name);
                    },
                    ai: {
                        order: function (item, player) {
                            return 10;
                        },
                        respondShan: true,
                        respondSha: true,
                        skillTagFilter: function (player, tag, arg) {
                            if (arg == 'respond') return false;
                            return true;
                        },
                        result: {
                            player: function (player) {
                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                return 1;
                            },
                        },
                    }
                }
            }
        },
        fyrhjunce: {
            audio: "ext:永夜之境/audio:2",
            init(player) {
                if (!player.storage.fyrhjunce) {
                    player.storage.fyrhjunce = {
                        left: ['sha', 'jiu', 'tiesuo'],
                        right: ['shan', 'tao', 'guohe']
                    };
                    player.markSkill('fyrhjunce');
                }
            },
            marktext: "君",
            intro: {
                content(storage, player) {
                    const getStr = arr => arr.length === 1 ? `【无中生有(原${get.translation(arr[0])})】` : arr.map(name => `【${get.translation(name)}】`).join('');
                    return `左侧：</b>${getStr(storage.left)}<br><b>右侧：</b>${getStr(storage.right)}`;

                }
            },
            popup: false,
            enable: ["chooseToUse", "chooseToRespond"],
            filter(event, player) {
                const storage = player.storage.fyrhjunce;
                if (!storage || !storage.left || !storage.right) return false;
                // 双向检测：手里有没有左边或右边的牌
                const hasLeft = player.hasCard(card => storage.left.includes(card.name), 'he');
                const hasRight = player.hasCard(card => storage.right.includes(card.name), 'he');

                if (!hasLeft && !hasRight) return false;
                // 收集可变虚拟牌
                const possibleTargets = new Set();
                if (hasLeft) {
                    if (storage.right.length === 1) possibleTargets.add('wuzhong');
                    else storage.right.forEach(name => possibleTargets.add(name));
                }
                if (hasRight) {
                    if (storage.left.length === 1) possibleTargets.add('wuzhong');
                    else storage.left.forEach(name => possibleTargets.add(name));
                }

                for (const name of possibleTargets) {
                    const vcard = { name: name, isCard: true };
                    if (event.filterCard) {
                        if (event.filterCard(vcard, player, event)) return true;
                    } else {
                        if (player.hasUseTarget(vcard)) return true;
                    }
                }
                return false;
            },
            chooseButton: {
                dialog(event, player) {
                    const storage = player.storage.fyrhjunce;
                    const distinctList = [];

                    const hasLeft = player.hasCard(card => storage.left.includes(card.name), 'he');
                    const hasRight = player.hasCard(card => storage.right.includes(card.name), 'he');

                    const possibleTargets = new Set();
                    if (hasLeft) {
                        // 如果另一边只剩1张，目标只能是'wuzhong'，隐藏它的真名
                        if (storage.right.length === 1) possibleTargets.add('wuzhong');
                        else storage.right.forEach(name => possibleTargets.add(name));
                    }
                    if (hasRight) {
                        if (storage.left.length === 1) possibleTargets.add('wuzhong');
                        else storage.left.forEach(name => possibleTargets.add(name));
                    }

                    for (const name of possibleTargets) {
                        const vcard = { name: name, isCard: true };
                        let canUse = false;
                        if (event.filterCard) {
                            canUse = event.filterCard(vcard, player, event);
                        } else {
                            canUse = player.hasUseTarget(vcard);
                        }
                        //[花色, 点数, 牌名, 属性]
                        if (canUse) distinctList.push(['', 0, name, '']);
                    }
                    return ui.create.dialog("【君侧】选择要转化的牌", [distinctList, "vcard"], "hidden");
                },
                filter(button, player) { return true; },
                check(button) {
                    const player = get.event().player;
                    const targetName = button.link[2]; //虚拟牌牌名
                    const vcard = { name: targetName, isCard: true };
                    let val = player.getUseValue(vcard);
                    if (targetName === 'wuzhong') {
                        val += 5;
                    }
                    return val;
                },
                backup(links, player) {
                    const targetName = links[0][2];
                    return {
                        filterCard(card, player) {
                            const storage = player.storage.fyrhjunce;
                            if (!storage) return false;
                            // 如果是无中生有，确认其来源
                            if (targetName === 'wuzhong') {
                                if (storage.left.length === 1 && storage.right.includes(card.name)) return true;
                                if (storage.right.length === 1 && storage.left.includes(card.name)) return true;
                                return false;
                            }
                            // 双向限制：变左必须付右，变右必须付左
                            if (storage.right.includes(targetName) && storage.left.includes(card.name)) return true;
                            if (storage.left.includes(targetName) && storage.right.includes(card.name)) return true;
                            return false;
                        },
                        selectCard: 1,
                        position: 'he',
                        viewAs: {
                            name: targetName,
                            isCard: true,
                            storage: { fyrhjuncex: true }
                        },
                        popname: true,
                        async precontent(event, trigger, player) {
                            player.logSkill("fyrhjunce");
                            const realName = event.result.cards[0].name;
                            const virtualName = targetName;       // 虚拟牌
                            const storage = player.storage.fyrhjunce;
                            if (!storage || !storage.left || !storage.right) return;
                            let left = storage.left.slice(0);
                            let right = storage.right.slice(0);
                            //找出真正被移动的牌
                            let actualVirtualName = virtualName;
                            if (virtualName === 'wuzhong') {
                                if (left.includes(realName)) actualVirtualName = right[0];
                                else if (right.includes(realName)) actualVirtualName = left[0];
                            }
                            const getStr = arr => arr.length === 1
                                ? `【无中生有(原${get.translation(arr[0])})】` : arr.map(name => `【${get.translation(name)}】`).join('');
                            const leftStr = getStr(left);
                            const rightStr = getStr(right);

                            const result = await player.chooseControl(["移至左侧", "移至右侧"])
                                .set('prompt', `【君侧】将【${get.translation(realName)}】与【${get.translation(actualVirtualName)}】移至同一侧`)
                                .set('choiceList', [
                                    `移至左侧（${leftStr}）`,
                                    `移至右侧（${rightStr}）`
                                ])
                                .set('ai', () => {
                                    // 左右两侧原本的牌名数量
                                    const l = left.length;
                                    const r = right.length;
                                    // 如果某一侧只剩 1 张（已经是无中生有），必须把牌移给它补充，让它回到 2
                                    if (l === 1) return "移至左侧";
                                    if (r === 1) return "移至右侧";
                                    // 制造无中：如果两边都大于 1，那就把牌移给【数量多】的那边，把少的那边抽干变成 1
                                    if (l > r) return "移至左侧";
                                    if (r > l) return "移至右侧";
                                    //（3对3）：随便挑一边
                                    return Math.random() > 0.5 ? "移至左侧" : "移至右侧";
                                })
                                .forResult();
                            if (result && result?.control) {
                                left = left.filter(name => name !== realName && name !== actualVirtualName);
                                right = right.filter(name => name !== realName && name !== actualVirtualName);

                                if (result.control === "移至左侧") {
                                    left.push(realName, actualVirtualName);
                                } else {
                                    right.push(realName, actualVirtualName);
                                }

                                left = Array.from(new Set(left));
                                right = Array.from(new Set(right));

                                player.storage.fyrhjunce = { left, right };
                                player.syncStorage('fyrhjunce');
                                player.markSkill('fyrhjunce');
                            }
                        }
                    };
                },
                prompt(links, player) {
                    return `选择一张牌，当做【${get.translation(links[0][2])}】使用，并移至同一侧`;
                }
            },
            hiddenCard(player, name) {
                const storage = player.storage.fyrhjunce;
                if (!storage || !storage.left || !storage.right) return false;

                const hasLeft = player.hasCard(card => storage.left.includes(card.name), 'he');
                const hasRight = player.hasCard(card => storage.right.includes(card.name), 'he');
                let targetLeft = storage.left.includes(name);
                let targetRight = storage.right.includes(name);
                if (name === 'wuzhong') {
                    if (storage.left.length === 1) { targetLeft = true; }
                    if (storage.right.length === 1) { targetRight = true; }
                } else {
                    // 如果只有1个，原名被隐藏，无法直接响应原名
                    if (storage.left.length === 1 && storage.left.includes(name)) { targetLeft = false; }
                    if (storage.right.length === 1 && storage.right.includes(name)) { targetRight = false; }
                }
                if (hasLeft && storage.right.includes(name)) return true;
                if (hasRight && storage.left.includes(name)) return true;
                return false;
            },
            ai: {
                order: 10,
                skillTagFilter(player) {
                    if (!player.countCards("hes")) {
                        return false;
                    }
                },
                result: {
                    player(player) {
                        return 1;
                    },
                },
            },
            group: ["fyrhjunce_effect"],
            subSkill: {
                effect: {
                    trigger: {
                        player: "useCard",
                    },
                    silent: true,
                    filter(event, player) {
                        if (player.getHistory("useCard", evt => evt.card?.name == "wuzhong").indexOf(event) !== 0) {
                            return false;
                        }
                        return event.card?.storage.fyrhjuncex === true && event.card.name == "wuzhong";
                    },
                    async content(event, trigger, player) {
                        trigger.effectCount++;
                        game.log(trigger.card, '额外结算一次');
                    }
                }
            }
        },
        fyrhruiqi: {
            trigger: {
                player: ["phaseDrawBegin1", "phaseUseBegin", "phaseDiscardBegin",]
            },
            filter(event, player) {
                return true;
            },
            check(event, player) {
                return true;
            },
            async cost(event, trigger, player) {
                let result;
                if (trigger.name == "phaseDraw") {
                    result = await player
                        .chooseBool(get.prompt(event.skill), `<div class="text center">将摸牌数改为3，然后令一名角色本回合的装备牌失效</div>`)
                        .set('ai', () => true)
                        .forResult();
                }
                if (trigger.name == "phaseUse") {
                    result =
                        await player
                            .chooseBool(get.prompt(event.skill), `<div class="text center">将出牌数改为2，然后本回合你下次造成伤害时摸两张牌</div>`)
                            .set('ai', () => true)
                            .forResult();
                }
                if (trigger.name == "phaseDiscard") {
                    result =
                        await player
                            .chooseBool(get.prompt(event.skill), `<div class="text center">将弃牌数改为1，然后你可以将一张牌当【出其不意】使用</div>`)
                            .set('ai', () => true)
                            .forResult();
                }
                event.result = {
                    bool: result?.bool,
                };
            },
            async content(event, trigger, player) {
                if (trigger.name == "phaseDraw") {
                    trigger.num = 3;
                    if (game.hasPlayer(p => { return p.countCards("e") && p != player; })) {
                        const result = await player
                            .chooseTarget(true, '令一名角色本回合装备牌失效',
                                (card, player, target) => {
                                    return target != player && target.countCards("e") > 0;
                                })
                            .set('ai', (target) => {
                                const player = get.player(),
                                    att = get.attitude(player, target);
                                if (att > 0) return 0;
                                const ep = target.countCards("e");
                                return -att * ep;
                            })
                            .forResult();
                        if (result?.bool) {
                            const target = result.targets[0];
                            player.line(target);
                            target.addTempSkill("fyrhruiqi_equip");
                        }
                    }
                }
                if (trigger.name == "phaseUse") {
                    player.addTempSkill("fyrhruiqi_debuff");
                    player.addTempSkill("fyrhruiqi_effect");
                    player.addMark("fyrhruiqi_debuff", 2, false);
                }
                if (trigger.name == "phaseDiscard") {
                    trigger.cancel();
                    if (player.countCards("h")) {
                        await player.chooseToDiscard('h', true);

                        const next = player.chooseToUse();
                        next.set("openskilldialog", `锐器：将一张牌当作【出其不意】使用`);
                        next.set("norestore", true);
                        next.set("_backupevent", "fyrhruiqi_backup");
                        next.set("custom", {
                            add: {},
                            replace: { window() { } },
                        });
                        next.backup("fyrhruiqi_backup");
                        next.set("targetRequired", true);
                        next.set("complexSelect", true);
                        next.set("filterTarget", (card, player, target) => target != player && target.countCards("hs"));
                        next.set("logSkill", event.name);
                        await next;
                    }
                }
            },
            getSkills(player) {
                return player.getCards("e").reduce((list, card) => {
                    const info = get.info(card);
                    if (info && info.skills) {
                        return list.addArray(info.skills);
                    }
                    return list;
                }, []);
            },
            subSkill: {
                backup: {
                    filterCard: (card, player) => get.itemtype(card) == "card",
                    viewAsFilter(player) {
                        return player.countCards("hs") > 0;
                    },
                    viewAs: {
                        name: "chuqibuyi",
                    },
                    position: "he",
                    ai1(card) {
                        return 6 - get.value(card);
                    },
                    log: false,
                    sub: true,
                },
                effect: {
                    trigger: {
                        source: "damageSource",
                    },
                    forced: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        player.draw(2);
                        await player.removeSkill("fyrhruiqi_effect");
                    }
                },
                equip: {
                    trigger: {
                        player: ["equipAfter"],
                    },
                    filter(event, player) {
                        return true;
                    },
                    silent: true,
                    forced: true,
                    charlotte: true,
                    init(player, skill) {
                        player.disableSkill(skill, lib.skill.fyrhruiqi.getSkills(player));
                    },
                    async content(event, trigger, player) {
                        player.disableSkill("fyrhruiqi_equip", lib.skill.fyrhruiqi.getSkills(player));
                    },
                    onremove(player, skill) {
                        player.enableSkill(skill);
                    },
                    mark: true,
                    marktext: "※",
                    intro: {
                        content: "装备牌失效",
                    },
                    mod: {
                        attackRangeBase(player, num) {
                            return 1;
                        },
                        globalFrom(from, to, distance) {
                            let num = 0;
                            for (let i of from.getVCards("e")) {
                                const info = get.info(i).distance;
                                if (!info) {
                                    continue;
                                }
                                if (info.globalFrom) {
                                    num += info.globalFrom;
                                }
                            }
                            return distance - num;
                        },
                        globalTo(from, to, distance) {
                            let num = 0;
                            for (let i of to.getVCards("e")) {
                                const info = get.info(i).distance;
                                if (!info) {
                                    continue;
                                }
                                if (info.globalTo) {
                                    num += info.globalTo;
                                }
                                if (info.attackTo) {
                                    num += info.attackTo;
                                }
                            }
                            return distance - num;
                        },
                    },
                },
                debuff: {
                    mark: true,
                    marktext: "🚬",
                    intro: {
                        markcount(storage) {
                            return (storage || 0).toString();
                        },
                        content(storage) {
                            return "还可使用" + (storage || 0).toString() + "张牌";
                        },
                    },
                    charlotte: true,
                    onremove: true,
                    trigger: {
                        player: "useCard0",
                    },
                    filter(event, player) {
                        return player.hasMark("fyrhruiqi_debuff");
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    async content(event, trigger, player) {
                        player.removeMark("fyrhruiqi_debuff", 1, false);
                    },
                    mod: {
                        cardEnabled(card, player) {
                            if (player.hasMark("fyrhruiqi_debuff") || !player.isPhaseUsing()) {
                                return;
                            }
                            if (get.itemtype(card) == "card" && get.position(card) == "h") {
                                return false;
                            }
                            if (card.cards && (card.cards || []).some(i => get.position(i) == "h")) {
                                return false;
                            }
                        },
                        cardSavable() {
                            return lib.skill.fyrhruiqi.subSkill.debuff.mod.cardEnabled.apply(this, arguments);
                        },
                    },
                }
            }

        },
        fyrhquxing: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhquxing${index}.mp3` : 2),
            enable: "phaseUse",
            lose: false,
            discard: false,
            delay: false,
            popup: false,
            filter(event, player) {
                return player.hasCard(card => get.info('fyrhquxing').filterCard(card, player), 'he');
            },
            filterCard(card, player) {
                // if (!['basic', 'trick'].includes(get.type(card))) return false;
                if (ui.selected.cards.length && ui.selected.cards[0].name != card.name) return false;
                const cards = player.getCards('he');
                return cards.includes(card) && cards.filter(i => i.name == card.name).length > 1;
            },
            filterTarget(card, player, target) {
                return target !== player;
            },
            selectCard: [2, Infinity],
            position: "he",
            complexCard: true,
            check(card) {
                // const player = get.event().player;
                // return 6 - player.getUseValue(card);
                let val = 5 + ['basic'].includes(get.type(card)) * 1.5;
                return val - get.value(card);
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const cards = event.cards;
                player.logSkill("fyrhquxing", [target], null, null, [get.rand(1, 2)]);
                await target.addToExpansion(cards, "gain2").set("gaintag", ["fyrhquxing"]);
                player.addMark("fyrhquxing_remove", 1, false);
                await player.addSkill('fyrhquxing_effect');
                await target.addSkill('fyrhquxing_effect');
                await game.asyncDraw([target, player].sortBySeat(), event.cards.length);
                await player.addAdditionalSkills(event.name, ['fyrhquxing_remove']);
                await target.addAdditionalSkills(event.name, ['fyrhquxing_remove']);
                player.when("dieBegin").step(async (event, trigger, player) => {
                    player.removeSkill('fyrhquxing_remove');
                    target.removeSkill('fyrhquxing_remove');
                });
                //player.setStorage("fyrhquxing_effect", target);
            },
            marktext: "曲",
            intro: {
                mark(dialog, storage, player) {
                    const cards = player.getExpansions("fyrhquxing");
                    dialog.addAuto(cards);
                },
                markcount: "expansion",
            },
            ai: {
                order(item, player) {
                    let cards = player.getCards('he', card => get.info('fyrhquxing').filterCard(card, player));
                    cards = cards.filter(card => cards.filter(i => i.name == card.name).length > 1);
                    if (!cards.length) { return 1; }
                    cards.sort((a, b) => get.order(b) - get.order(a));
                    return get.order(cards[0]) + 10;
                },
                result: {
                    target: 1,
                },
            },
            subSkill: {
                effect: {
                    trigger: {
                        player: ["gainAfter", 'useCard'],
                    },
                    getCards(player) {
                        let cards = [];
                        game.countPlayer(current => {
                            const exCards = current.getExpansions("fyrhquxing");
                            if (exCards && exCards.length > 0) {
                                cards.push(...exCards);
                            }
                        });
                        return cards;
                    },
                    filter(event, player) {
                        const isInitiator = player.hasMark('fyrhquxing_remove');
                        const expansions = get.info("fyrhquxing_effect").getCards(player);
                        if (expansions.length <= 0) return false;
                        // 提取所有同名的牌名
                        const names = expansions.map(i => i.name);
                        if (event.name === 'gain' && isInitiator) {
                            return event.cards.some(card => names.includes(card.name));
                        }
                        if (event.name === 'useCard') {
                            if (isInitiator) { return false; }
                            return names.includes(event.card.name);
                        }
                        return false;
                    },
                    forced: true,
                    onremove: true,
                    charlotte: true,
                    popup: false,
                    async content(event, trigger, player) {
                        const isInitiator = player.hasMark('fyrhquxing_remove');
                        const expansions = get.info("fyrhquxing_effect").getCards(player);
                        const names = expansions.map(i => i.name);
                        game.playAudio("../extension/永夜之境/audio/", 'fyrhquxing' + [get.rand(3, 4)] + '.mp3');
                        if (trigger.name === 'gain' && isInitiator) {
                            const mCards = trigger.cards.filter(card => names.includes(card.name));
                            if (mCards.length > 0) {
                                await player.recast(mCards);
                            }
                        }
                        else if (trigger.name === 'useCard') {
                            if (isInitiator) { return; }
                            await player.recast(trigger.cards);
                        }
                    },
                    marktext: "🎵",
                    mark: true,
                    intro: {
                        markcount(storage, player) {
                            return null;
                        },
                        mark(dialog, storage, player) {
                            dialog.addText(player.hasMark('fyrhquxing_remove') ? "获得「曲兴」同名牌后重铸之" : "使用「曲兴」同名牌后重铸之");
                        }
                    },
                },
                remove: {
                    trigger: {
                        player: ["useSkill", "logSkillBegin", "useCard", "respond"],
                    },
                    filter(event, player) {
                        if (["global", "equip"].includes(event.type)) {
                            return false;
                        }
                        if ((get.info(event.skill) || {}).charlotte) {
                            return false;
                        }
                        if (event.skill == 'fyrhquxing_effect') {
                            return false;
                        }
                        const skill = get.sourceSkillFor(event);
                        const info = get.info(skill);
                        return info && !info.charlotte && !info.equipSkill;
                    },
                    forced: true,
                    onremove: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        player.removeSkill(event.name);
                        player.removeSkill('fyrhquxing_effect');
                        player.clearMark(event.name);
                    },
                },

            }
        },
        fyrhwulan: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhwulan${index}.mp3` : 2),
            trigger: {
                player: ["phaseDrawEnd", "phaseUseEnd"]
            },
            popup: false,
            filter(event, player) {
                const currentRound = game.roundNumber;
                let debt = [];
                if (event.name === "phaseDraw") {
                    debt = player.storage.fyrhwulan_draw_debt || [];
                } else if (event.name === "phaseUse") {
                    debt = player.storage.fyrhwulan_use_debt || [];
                }
                const nextRounds = [3, 4, 5]; //只看未来3,4,5轮
                /* for (const offset of nextRounds) {
                    if (!debt.includes(currentRound + offset)) {
                        return true; // 只要这三个坑位里有一个是空的，就允许发动
                    }
                } */
                for (let i = 3; i <= 5; i++) {
                    if (!debt.includes(currentRound + i)) {
                        return true;
                    }
                }
                return false;
            },
            async cost(event, trigger, player) {
                const currentRound = game.roundNumber;
                let debt = [];
                let targetRound = 0;
                if (trigger.name === "phaseDraw") {
                    debt = player.storage.fyrhwulan_draw_debt || [];
                } else if (trigger.name === "phaseUse") {
                    debt = player.storage.fyrhwulan_use_debt || [];
                }
                // 寻找第一个空位（天然顺延：如果 +3 被占了，就会自动找到 +4）
                const nextRounds = [3, 4, 5];
                /* for (const offset of nextRounds) {
                    if (!debt.includes(currentRound + offset)) {
                        targetRound = currentRound + offset;
                        break; // 找到立刻停止
                    }
                } */
                for (let i = 3; i <= 5; i++) {
                    if (!debt.includes(currentRound + i)) {
                        targetRound = currentRound + i;
                        break;
                    }
                }
                let result;
                if (trigger.name == "phaseDraw") {
                    result = await player
                        .chooseBool(get.prompt(event.skill), `<div class="text center">额外执行一个摸牌阶段，将跳过你的第${targetRound}轮摸牌阶段</div>`)
                        /* .set('ai', () => {
                             let player = get.player();
                            if (get.is.versus() && player.getSeatNum() === 1) {
                                return false;
                            }
                            return true;
                        }) */
                        .set("ai", () => get.event().choice)
                        .set(
                            "choice",
                            (() => {
                                let player = get.player();
                                if (get.is.versus() && player.getSeatNum() == 1) {
                                    return false;
                                }
                                return true;
                            })()
                        )
                        .forResult();
                }
                if (trigger.name == "phaseUse") {
                    result =
                        await player
                            .chooseBool(get.prompt(event.skill), `<div class="text center">额外执行一个出牌阶段，将跳过你的第${targetRound}轮出牌阶段</div>`)
                            .set('ai', () => false)
                            /* .set("ai", () => get.event().choice)
                            .set(
                                "choice",
                                (() => {
                                    let player = get.player();
                                    const hasAlly = player.hasFriend();
                                    return !hasAlly;
                                })()
                            ) */
                            .forResult();
                }
                event.result = {
                    bool: result?.bool,
                };
            },
            async content(event, trigger, player) {
                const currentRound = game.roundNumber;
                let targetRound = 0;
                const nextRounds = [3, 4, 5];
                player.logSkill("fyrhwulan", null, null, null, [get.rand(1, 2)]);
                if (trigger.name == "phaseDraw") {
                    if (!player.storage.fyrhwulan_draw_debt) { player.storage.fyrhwulan_draw_debt = []; }
                    const debt = player.storage.fyrhwulan_draw_debt;
                    for (const offset of nextRounds) {
                        if (!debt.includes(currentRound + offset)) {
                            targetRound = currentRound + offset;
                            break;
                        }
                    }
                    player.storage.fyrhwulan_draw_debt.push(targetRound);
                    player.addSkill("fyrhwulan_cancel");
                    player.addMark("fyrhwulan_draw_mark", 1, false);
                    const next = player.phaseDraw();
                    event.next.remove(next);
                    trigger.next.push(next);
                }
                if (trigger.name == "phaseUse") {
                    if (!player.storage.fyrhwulan_use_debt) player.storage.fyrhwulan_use_debt = [];
                    const debt = player.storage.fyrhwulan_use_debt;
                    for (const offset of nextRounds) {
                        if (!debt.includes(currentRound + offset)) {
                            targetRound = currentRound + offset;
                            break;
                        }
                    }
                    player.storage.fyrhwulan_use_debt.push(targetRound);
                    player.addSkill("fyrhwulan_cancel");
                    player.addMark("fyrhwulan_use_mark", 1, false);
                    const next = player.phaseUse();
                    event.next.remove(next);
                    trigger.next.push(next);
                }
                player.addTempSkill('fyrhwulan_end');
                player.markSkill('fyrhwulan');
            },
            marktext: "舞",
            intro: {
                markcount: () => 0,
                content: (storage, player) => {
                    let str = "";
                    const drawDebt = player.storage.fyrhwulan_draw_debt || [];
                    const useDebt = player.storage.fyrhwulan_use_debt || [];
                    if (drawDebt.length) str += `欠下以下轮数的摸牌阶段：第 ${drawDebt.join('、')} 轮<br>`;
                    if (useDebt.length) str += `欠下以下轮数的出牌阶段：第 ${useDebt.join('、')} 轮`;
                    return str || "无透支记录";
                }
            },
            mod: {
                aiOrder(player, card, num) {
                    if (get.subtype(card) == 'equip2') {
                        return num - 20;
                    }
                },
            },
            subSkill: {
                cancel: {
                    trigger: {
                        player: ["phaseDrawBegin", 'phaseUseBegin']
                    },
                    silent: true,
                    charlotte: true,
                    "_priority": 99,
                    filter(event, player) {
                        const currentRound = game.roundNumber;
                        if (event.name === "phaseDraw") {
                            const debt = player.storage.fyrhwulan_draw_debt || [];
                            return debt.includes(currentRound);
                        }
                        if (event.name === "phaseUse") {
                            const debt = player.storage.fyrhwulan_use_debt || [];
                            return debt.includes(currentRound);
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const currentRound = game.roundNumber;
                        if (trigger.name === "phaseDraw") {
                            trigger.cancel();
                            game.log(player, '已预先执行，跳过了摸牌阶段');
                            let debt = player.storage.fyrhwulan_draw_debt;
                            debt.splice(debt.indexOf(currentRound), 1);
                            player.removeMark("fyrhwulan_draw_mark", 1, false);
                        }
                        else if (trigger.name === "phaseUse") {
                            trigger.cancel();
                            game.log(player, '已预先执行，跳过了出牌阶段');
                            let debt = player.storage.fyrhwulan_use_debt;
                            debt.splice(debt.indexOf(currentRound), 1);
                            player.removeMark("fyrhwulan_use_mark", 1, false);
                        }
                    },
                },
                change: {
                    trigger: {
                        global: "useCard1",
                    },
                    silent: true,
                    charlotte: true,
                    filter(event, player) {
                        if (!event.player.hasMark('fyrhwulan_end')) return false;
                        if (!event.targets || event.targets.length === 0) return false;
                        if (event.targets.length === 1 && event.targets[0] === player) return false;

                        const chooseEvt = event.getParent("chooseUseTarget");
                        if (!chooseEvt || !chooseEvt.fyrhwulan) {
                            return false;
                        }
                        return event.card?.storage.fyrhwulanx === true || chooseEvt.fyrhwulan;
                    },
                    async content(event, trigger, player) {
                        trigger.targets = [player];
                        player.line(trigger.player, 'green');
                        game.log(player, "将", trigger.card, "的目标转移至自己");
                    }
                },
                end: {
                    trigger: {
                        player: "phaseEnd",
                    },
                    filter(event, player) {
                        const targets = game.filterPlayer(target => { return target.getExpansions("fyrhquxing").length > 0; });
                        return targets.length == 1;
                    },
                    silent: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        const targets = game.filterPlayer(target => {
                            return target.getExpansions("fyrhquxing").length > 0;
                        });
                        const target = targets[0];
                        target.addMark("fyrhwulan_end", 1, false);
                        player.addTempSkill('fyrhwulan_change');
                        const cards = get.info("fyrhquxing_effect").getCards(player).filter(card => ["basic", 'trick'].includes(get.type(card)));
                        const usecards = cards.filter(card => target.hasUseTarget(card));
                        if (!usecards.length) return;
                        const list = ['视为使用', '使用']
                        const choiceInfo = [
                            `视为使用所有即时「曲兴」牌`,
                            `使用所有即时「曲兴」牌`,
                        ];
                        const result = await target.chooseControl(list)
                            .set('prompt', get.skillTranslation(event.name) + ':请选择一项')
                            .set("choiceList", choiceInfo)
                            .set("ai", () => {
                                const player = get.player();
                                return '视为使用';
                            }).forResult();
                        if (result?.control) {
                            game.playAudio("../extension/永夜之境/audio/", 'fyrhwulan' + [get.rand(3, 4)] + '.mp3');
                            const cards = get.info("fyrhquxing_effect").getCards(player).filter(card => ["basic", 'trick'].includes(get.type(card)));
                            if (cards.length > 0) {
                                switch (result.control) {
                                    case '视为使用':
                                        const hcards = cards.reverse();
                                        while (hcards.some(card => target.hasUseTarget(card))) {
                                            const result2 = await target.chooseCardButton(`舞阑：选择要视为使用的牌`, hcards, true)
                                                .set('filterButton', button => {
                                                    return get.player().hasUseTarget(button.link);
                                                })
                                                .set("ai", button => {
                                                    return get.player().getUseValue(button.link);
                                                }).forResult();
                                            if (result2?.bool && result2.links?.length > 0) {
                                                const card = result2.links[0];
                                                hcards.remove(card);
                                                if (lib.card[card.name]?.notarget || !lib.card[card.name]?.enable) {
                                                    continue;
                                                }
                                                const [suit, number, name, nature] = get.cardInfo(card);
                                                const cardx = get.autoViewAs({ name, number, suit, nature, storage: { fyrhwulanx: true } }, []);
                                                target.$gain2(card, false);
                                                await game.delayx();
                                                //await target.chooseUseTarget(cardx, true, false);
                                                const next = target.chooseUseTarget(cardx, true, false);
                                                next.set("fyrhwulan", true);
                                                const result = await next.forResult();
                                                if (!result?.bool) {
                                                    break;
                                                }
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        break;
                                    case '使用':
                                        while (cards.some(card => target.hasUseTarget(card))) {
                                            const result1 = await target.chooseCardButton(`舞阑：选择要使用的牌`, cards, true)
                                                .set('filterButton', button => {
                                                    return get.player().hasUseTarget(button.link);
                                                })
                                                .set("ai", button => {
                                                    return get.player().getUseValue(button.link);
                                                }).forResult();
                                            if (result1?.bool && result1.links?.length > 0) {
                                                const card = result1.links[0];
                                                cards.remove(card);
                                                target.$gain2(card, false);
                                                await game.delayx();
                                                /* let xcard = get.autoViewAs(
                                                    {
                                                        name: card.name,
                                                        nature: card.nature,
                                                        cards: [card],
                                                        storage: { fyrhwulanx: true },
                                                        isCard: true,
                                                    },
                                                );
                                                await target.chooseUseTarget(xcard, true, false); */
                                                const next = target.chooseUseTarget(card, true, false);
                                                next.set("fyrhwulan", true);
                                                const result = await next.forResult();
                                                if (!result?.bool) {
                                                    break;
                                                }
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        break;
                                }
                            }
                            player.removeSkill('fyrhwulan_change');
                            target.clearMark("fyrhwulan_end");
                        }
                    }
                }
            }

        },
        fyrhjuemo: {
            audio: "ext:永夜之境/audio:3",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhjuemo${index}.mp3` : 2),
            marktext: "绝",
            intro: {
                content(storage, player) {
                    const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" };
                    const pool = storage.pool.map(i => map[i]).join("、");
                    const remaining = storage.remaining.length ? storage.remaining.map(i => map[i]).join("、") : "无";
                    return `当前总要求：${pool}<br>剩余须满足：<span style="color:red">${remaining}</span>`;
                }
            },
            /* init(player, skill) {
                if (!player.storage[skill]) {
                    player.storage[skill] = {
                        pool: ["basic", "black", "damage"],
                        remaining: ["basic", "black", "damage"]
                    };
                }
            }, */
            onremove(player, skill) {
                delete player.storage[skill];
            },
            /* forced: true,
            locked: false, */
            popup: false,
            group: ["fyrhjuemo_record", "fyrhjuemo_lock", 'fyrhjuemo_effect'],
            trigger: { player: "useCardAfter" },
            filter(event, player) {
                /* const storage = player.storage.fyrhjuemo;
                if (storage) {
                    return lib.skill.fyrhjuemo.getMatches(event.card, storage.remaining, event.fyrhjuemo_was_revealed).length > 0;
                }
                return get.is.damageCard(event.card) || get.type(event.card) === "basic" || get.color(event.card) === "black"; */
                //if (!storage || !storage.remaining || storage.remaining.length === 0) return false;
                //将之前提前记录的 was_revealed 传进去
                //return lib.skill.fyrhjuemo.getMatches(event.card, storage.remaining, event.fyrhjuemo_was_revealed).length > 0;
                const storage = player.storage.fyrhjuemo;
                // 如果在锁定中，必须打出符合剩余项的牌才能触发
                let targetList = (storage && storage.locked) ? storage.remaining : (storage ? storage.pool : ["basic", "black", "damage"]);
                return lib.skill.fyrhjuemo.getMatches(event.card, targetList, event.fyrhjuemo_was_revealed).length > 0;
            },
            getMatches(card, list, isEventRevealed) {
                const matches = [];
                if (!card) return matches;
                if (list.includes("basic") && get.type(card) === "basic") matches.push("basic");
                if (list.includes("black") && get.color(card) === "black") matches.push("black");
                if (list.includes("damage") && get.is.damageCard(card)) matches.push("damage");
                // 明置牌判定
                let isRevealed = !!isEventRevealed; // 如果事件里被记录，直接算数
                if (!isRevealed) {
                    const checkShown = c => {
                        try {
                            if (typeof get.is.shownCard === 'function') return get.is.shownCard(c);
                            if (c.hasGaintag && c.gaintag) return c.gaintag.some(tag => tag.startsWith("visible_"));
                        } catch (e) { }
                        return false;
                    };

                    if (card.cards && card.cards.length > 0) {
                        isRevealed = card.cards.some(c => checkShown(c));
                    } else {
                        isRevealed = checkShown(card);
                    }
                }
                if (list.includes("revealed") && isRevealed) matches.push("revealed");

                return matches;
            },
            prompt2(event, player) {
                const storage = player.storage.fyrhjuemo;
                const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" };
                /* if (storage?.locked) {
                    const remainingStr = storage.remaining.map(i => map[i]).join("、");
                    return `摸一张牌并明置之，令接下来使用的牌需满足${remainingStr}`;
                } 
                else {
                    const pool = storage ? storage.pool : ["basic", "black", "damage"];
                    const poolStr = pool.map(i => map[i]).join("、");
                    return `摸一张牌并明置之，令接下来使用的牌需满足${poolStr}`;
                } */
                let previewList = (storage && storage.locked) ? storage.remaining.slice() : (storage ? storage.pool.slice() : ["basic", "black", "damage"]);
                const matches = lib.skill.fyrhjuemo.getMatches(event.card, previewList, event.fyrhjuemo_was_revealed);
                let extraInfo = "";
                if (matches.length === 1) {
                    previewList.remove(matches[0]);
                } else if (matches.length > 1) {
                    // 告诉玩家将会发生多选一
                    const matchNames = matches.map(i => map[i]).join(" 或 ");
                    extraInfo = ` <span style="font-size:12px; color:gray">（确认后将消耗 ${matchNames}）</span>`;
                }
                let displayStr = "";
                if (previewList.length === 0) {
                    const pool = storage ? storage.pool : ["basic", "black", "damage"];
                    const poolStr = pool.map(i => map[i]).join("、");
                    displayStr = `${poolStr} <span style='color:green'>（即将重新征讨）</span>`;
                } else {
                    displayStr = previewList.map(i => map[i]).join("、");
                }
                return `摸一张牌并明置之，令接下来使用的牌需满足：${displayStr}${extraInfo}`;
            },
            async content(event, trigger, player) {
                /* let result;
                if (!player.storage?.fyrhjuemo_used) {
                    result = await player.chooseBool()
                        .set("choice", true)
                        .set("prompt", get.prompt2('fyrhjuemo'))
                        .forResult();
                } else {
                    result = { bool: true };
                }
                if (result?.bool) {
                    player.storage.fyrhjuemo_used = true; */
                /* if (!player.storage.fyrhjuemo) {
                    player.storage.fyrhjuemo = {
                        pool: ["basic", "black", "damage"],
                        remaining: ["basic", "black", "damage"]
                    };
                }
                const storage = player.storage.fyrhjuemo;
                const matches = lib.skill.fyrhjuemo.getMatches(trigger.card, storage.remaining, trigger.fyrhjuemo_was_revealed);
                const res1 = await player.draw().forResult();
                if (res1?.bool && res1.cards?.length) {
                    await player.addShownCards(res1.cards, "visible_fyrhjuemo");
                }
                player.logSkill("fyrhjuemo", null, null, null, [get.rand(1, 2)]);
                // 消耗满足的剩余项
                let fulfilled = matches[0];
                if (matches.length > 1) {
                    const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" };
                    const controls = matches.map(i => map[i]);
                    const res2 = await player.chooseControl(controls).set("prompt", "请选择该牌消耗的剩余项").forResult();
                    if (res2.control) {
                        fulfilled = matches[controls.indexOf(res2.control)];
                    }
                }
                storage.remaining.remove(fulfilled);
                game.log(player, "完成了", "#y" + { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" }[fulfilled], "要求");
                // 循环结算：如果剩余项空了，替换条件并重置
                if (storage.remaining.length === 0) {
                    const replaceable = storage.pool.filter(i => i !== "revealed");

                    if (replaceable.length > 0) {
                        const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌" };
                        const controls = replaceable.map(i => map[i]);
                        const res3 = await player.chooseControl(controls).set("prompt", "本次要求已全部满足，请选择将一项改为“明置牌”").forResult();
                        if (res3.control) {
                            game.playAudio("../extension/永夜之境/audio/", 'fyrhjuemo' + [3] + '.mp3');
                            const targetItem = replaceable[controls.indexOf(res3.control)];
                            storage.pool[storage.pool.indexOf(targetItem)] = "revealed";
                            game.log(player, "将选项中的", "#y" + res3.control, "替换为了", "#g明置牌");
                        }
                    } else {
                        game.log(player, "的选项已全部替换为明置牌");
                    }
                    storage.remaining = storage.pool.slice();
                }
                player.markSkill("fyrhjuemo"); */

                if (!player.storage.fyrhjuemo) {
                    player.storage.fyrhjuemo = {
                        pool: ["basic", "black", "damage"],
                        remaining: ["basic", "black", "damage"],
                        locked: true
                    };
                } else if (!player.storage.fyrhjuemo.locked) {
                    player.storage.fyrhjuemo.remaining = player.storage.fyrhjuemo.pool.slice();
                    player.storage.fyrhjuemo.locked = true;
                }
                const storage = player.storage.fyrhjuemo;
                const matches = lib.skill.fyrhjuemo.getMatches(trigger.card, storage.remaining, trigger.fyrhjuemo_was_revealed);
                const res1 = await player.draw().forResult();
                if (res1?.bool && res1.cards?.length) {
                    await player.addShownCards(res1.cards, "visible_fyrhjuemo");
                }
                player.logSkill("fyrhjuemo", null, null, null, [get.rand(1, 2)]);
                //消耗当前满足的剩余项
                let fulfilled = matches[0];
                if (matches.length > 1) {
                    const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" };
                    const controls = matches.map(i => map[i]);
                    const res2 = await player.chooseControl(controls).set("prompt", "请选择该牌消耗的剩余项").forResult();
                    if (res2.control) fulfilled = matches[controls.indexOf(res2.control)];
                }
                storage.remaining.remove(fulfilled);
                game.log(player, "完成了", "#y" + { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" }[fulfilled], "要求");

                let canPlay = false;
                if (storage.remaining.length > 0) {
                    const cardsToCheck = player.getCards('he');
                    for (let c of cardsToCheck) {
                        // 如果手里的某张牌符合剩下的要求，并且当前局势下它能打出去
                        if (lib.skill.fyrhjuemo.getMatches(c, storage.remaining).length > 0) {
                            if (player.hasUseTarget(c)) {
                                canPlay = true;
                                break;
                            }
                        }
                    }
                }
                if (storage.remaining.length === 0 || !canPlay) {
                    if (storage.remaining.length === 0) {
                        game.log(player, "已完成本轮全部要求！");
                    } else {
                        game.log(player, "当前无可用的牌能满足剩余要求");
                    }
                    // 替换明置牌的逻辑
                    const replaceable = storage.pool.filter(i => i !== "revealed");
                    if (replaceable.length > 0) {
                        const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌" };
                        const controls = replaceable.map(i => map[i]);
                        const res3 = await player.chooseControl(controls).set("prompt", "本次要求已全部满足，请选择将一项改为“明置牌”").forResult();
                        if (res3.control) {
                            game.playAudio("../extension/永夜之境/audio/", 'fyrhjuemo3.mp3');
                            const targetItem = replaceable[controls.indexOf(res3.control)];
                            storage.pool[storage.pool.indexOf(targetItem)] = "revealed";
                            game.log(player, "将选项中的", "#y" + res3.control, "替换为了", "#g明置牌");
                        }
                    } else {
                        game.log(player, "的选项已全部替换为明置牌");
                    }
                    // 解除出牌锁定
                    storage.remaining = storage.pool.slice();
                    const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" };
                    const newPoolStr = storage.remaining.map(i => map[i]).join("、");
                    game.log(player, "进入新一轮限制，下次出牌须满足：", "#y" + newPoolStr);
                } else {
                    game.log(player, "下次出牌须继续满足剩余要求");
                }
                player.markSkill("fyrhjuemo");

            },
            subSkill: {
                //在牌打出但还没剥夺标记前，留下记录
                record: {
                    trigger: { player: "useCardBefore" },
                    forced: true,
                    silent: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        if (trigger.cards && trigger.cards.length > 0) {
                            const checkShown = c => {
                                try {
                                    if (typeof get.is.shownCard === 'function') return get.is.shownCard(c);
                                    if (c.hasGaintag && c.gaintag) return c.gaintag.some(tag => tag.startsWith("visible_"));
                                } catch (e) { }
                                return false;
                            };
                            if (trigger.cards.some(c => checkShown(c))) {
                                trigger.fyrhjuemo_was_revealed = true;
                            }
                        }
                    }
                },
                lock: {
                    mod: {
                        ignoredHandcard(card, player) {
                            if (get.is.shownCard(card)) {
                                return true;
                            }
                        },
                        cardDiscardable(card, player, name) {
                            if (name == 'phaseDiscard' && get.is.shownCard(card)) {
                                return false;
                            }
                        },
                        targetInRange: function (card, _player, _target) {
                            if (!card.cards) return;
                            for (let i of card.cards) {
                                if (i.hasGaintag("visible_fyrhjuemo")) return true;
                            };
                        },
                        cardUsable(card) {
                            if (get.number(card) === "unsure" || card.cards?.some(card => get.is.shownCard(card))) {
                                return Infinity;
                            }
                        },
                        cardEnabled(card, player) {
                            const storage = player.storage.fyrhjuemo;
                            if (!storage || !storage.remaining || storage.remaining.length === 0 || !storage.locked) return;
                            if (!card.cardid && (!card.cards || card.cards.length === 0)) {
                                if (storage.remaining.includes("revealed") && player.hasCard(c => get.is.shownCard(c), 'h')) {
                                    return;
                                }
                            }
                            if (lib.skill.fyrhjuemo.getMatches(card, storage.remaining).length === 0) {
                                return false;
                            }
                        },
                        cardSavable(card, player) {
                            const storage = player.storage.fyrhjuemo;
                            if (!storage || !storage.remaining || storage.remaining.length === 0 || !storage.locked) return;
                            if (!card.cardid && (!card.cards || card.cards.length === 0)) {
                                if (storage.remaining.includes("revealed") && player.hasCard(c => get.is.shownCard(c), 'h')) {
                                    return;
                                }
                            }
                            if (lib.skill.fyrhjuemo.getMatches(card, storage.remaining).length === 0) {
                                return false;
                            }
                        },
                    }
                },
                effect: {
                    charlotte: true,
                    trigger: {
                        player: "useCard1",
                    },
                    filter(event, player) {
                        return (
                            event.addCount !== false &&
                            player.hasHistory("lose", evt => {
                                return (
                                    (evt.relatedEvent || evt.getParent()) == event &&
                                    evt.hs.length &&
                                    Object.values(evt.gaintag_map).flat().includes("visible_fyrhjuemo")
                                );
                            })
                        );
                    },
                    forced: true,
                    popup: false,
                    content() {
                        trigger.addCount = false;
                        const stat = player.getStat().card,
                            name = trigger.card.name;
                        if (typeof stat[name] == "number") {
                            stat[name]--;
                        }
                        game.log(trigger.card, "不计入次数");
                    },
                }
            }
        },

        oldfyrhjuemo: {
            audio: "fyrhjuemo",
            logAudio: index => (typeof index === "number" ? `ext:永夜之境/audio/fyrhjuemo${index}.mp3` : 2),
            marktext: "绝",
            intro: {
                content(storage, player) {
                    const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" };
                    const pool = storage.pool.map(i => map[i]).join("、");
                    const remaining = storage.remaining.length ? storage.remaining.map(i => map[i]).join("、") : "无";
                    return `当前总要求：${pool}<br>剩余须满足：<span style="color:red">${remaining}</span>`;
                }
            },
            /* init(player, skill) {
                if (!player.storage[skill]) {
                    player.storage[skill] = {
                        pool: ["basic", "black", "damage"],
                        remaining: ["basic", "black", "damage"]
                    };
                }
            }, */
            onremove(player, skill) {
                delete player.storage[skill];
            },
            forced: true,
            locked: false,
            popup: false,
            group: ["oldfyrhjuemo_record", "oldfyrhjuemo_lock", 'oldfyrhjuemo_effect'],
            trigger: { player: "useCardAfter" },
            filter(event, player) {
                const storage = player.storage.oldfyrhjuemo;
                if (storage) {
                    return lib.skill.oldfyrhjuemo.getMatches(event.card, storage.remaining, event.oldfyrhjuemo_was_revealed).length > 0;
                }
                return get.is.damageCard(event.card) || get.type(event.card) === "basic" || get.color(event.card) === "black";
                //if (!storage || !storage.remaining || storage.remaining.length === 0) return false;
                //将之前提前记录的 was_revealed 传进去
                //return lib.skill.oldfyrhjuemo.getMatches(event.card, storage.remaining, event.oldfyrhjuemo_was_revealed).length > 0;
            },
            getMatches(card, list, isEventRevealed) {
                const matches = [];
                if (!card) return matches;
                if (list.includes("basic") && get.type(card) === "basic") matches.push("basic");
                if (list.includes("black") && get.color(card) === "black") matches.push("black");
                if (list.includes("damage") && get.is.damageCard(card)) matches.push("damage");
                // 明置牌判定
                let isRevealed = !!isEventRevealed; // 如果事件里被记录，直接算数
                if (!isRevealed) {
                    const checkShown = c => {
                        try {
                            if (typeof get.is.shownCard === 'function') return get.is.shownCard(c);
                            if (c.hasGaintag && c.gaintag) return c.gaintag.some(tag => tag.startsWith("visible_"));
                        } catch (e) { }
                        return false;
                    };

                    if (card.cards && card.cards.length > 0) {
                        isRevealed = card.cards.some(c => checkShown(c));
                    } else {
                        isRevealed = checkShown(card);
                    }
                }
                if (list.includes("revealed") && isRevealed) matches.push("revealed");

                return matches;
            },
            async content(event, trigger, player) {
                /* let result;
                if (!player.storage?.oldfyrhjuemo_used) {
                    result = await player.chooseBool()
                        .set("choice", true)
                        .set("prompt", get.prompt2('oldfyrhjuemo'))
                        .forResult();
                } else {
                    result = { bool: true };
                }
                if (result?.bool) {
                    player.storage.oldfyrhjuemo_used = true; */
                if (!player.storage.oldfyrhjuemo) {
                    player.storage.oldfyrhjuemo = {
                        pool: ["basic", "black", "damage"],
                        remaining: ["basic", "black", "damage"]
                    };
                }
                const storage = player.storage.oldfyrhjuemo;
                const matches = lib.skill.oldfyrhjuemo.getMatches(trigger.card, storage.remaining, trigger.oldfyrhjuemo_was_revealed);
                const res1 = await player.draw().forResult();
                if (res1?.bool && res1.cards?.length) {
                    await player.addShownCards(res1.cards, "visible_fyrhjuemo");
                }
                player.logSkill("fyrhjuemo", null, null, null, [get.rand(1, 2)]);
                // 消耗满足的剩余项
                let fulfilled = matches[0];
                if (matches.length > 1) {
                    const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" };
                    const controls = matches.map(i => map[i]);
                    const res2 = await player.chooseControl(controls).set("prompt", "请选择该牌消耗的剩余项").forResult();
                    if (res2.control) {
                        fulfilled = matches[controls.indexOf(res2.control)];
                    }
                }
                storage.remaining.remove(fulfilled);
                game.log(player, "完成了", "#y" + { basic: "基本牌", black: "黑色牌", damage: "伤害牌", revealed: "明置牌" }[fulfilled], "要求");
                // 循环结算：如果剩余项空了，替换条件并重置
                if (storage.remaining.length === 0) {
                    const replaceable = storage.pool.filter(i => i !== "revealed");

                    if (replaceable.length > 0) {
                        const map = { basic: "基本牌", black: "黑色牌", damage: "伤害牌" };
                        const controls = replaceable.map(i => map[i]);
                        const res3 = await player.chooseControl(controls).set("prompt", "本次要求已全部满足，请选择将一项改为“明置牌”").forResult();
                        if (res3.control) {
                            game.playAudio("../extension/永夜之境/audio/", 'fyrhjuemo' + [3] + '.mp3');
                            const targetItem = replaceable[controls.indexOf(res3.control)];
                            storage.pool[storage.pool.indexOf(targetItem)] = "revealed";
                            game.log(player, "将选项中的", "#y" + res3.control, "替换为了", "#g明置牌");
                        }
                    } else {
                        game.log(player, "的选项已全部替换为明置牌");
                    }
                    storage.remaining = storage.pool.slice();
                }
                player.markSkill("oldfyrhjuemo");
            },
            subSkill: {
                //在牌打出但还没剥夺标记前，留下记录
                record: {
                    trigger: { player: "useCardBefore" },
                    forced: true,
                    silent: true,
                    charlotte: true,
                    async content(event, trigger, player) {
                        if (trigger.cards && trigger.cards.length > 0) {
                            const checkShown = c => {
                                try {
                                    if (typeof get.is.shownCard === 'function') return get.is.shownCard(c);
                                    if (c.hasGaintag && c.gaintag) return c.gaintag.some(tag => tag.startsWith("visible_"));
                                } catch (e) { }
                                return false;
                            };
                            if (trigger.cards.some(c => checkShown(c))) {
                                trigger.oldfyrhjuemo_was_revealed = true;
                            }
                        }
                    }
                },
                lock: {
                    mod: {
                        ignoredHandcard(card, player) {
                            if (get.is.shownCard(card)) {
                                return true;
                            }
                        },
                        cardDiscardable(card, player, name) {
                            if (name == 'phaseDiscard' && get.is.shownCard(card)) {
                                return false;
                            }
                        },
                        targetInRange: function (card, _player, _target) {
                            if (!card.cards) return;
                            for (let i of card.cards) {
                                if (i.hasGaintag("visible_fyrhjuemo")) return true;
                            };
                        },
                        cardUsable(card) {
                            if (get.number(card) === "unsure" || card.cards?.some(card => get.is.shownCard(card))) {
                                return Infinity;
                            }
                        },
                        cardEnabled(card, player) {
                            const storage = player.storage.oldfyrhjuemo;
                            if (!storage || !storage.remaining || storage.remaining.length === 0) return;
                            if (!card.cardid && (!card.cards || card.cards.length === 0)) {
                                if (storage.remaining.includes("revealed") && player.hasCard(c => get.is.shownCard(c), 'h')) {
                                    return;
                                }
                            }
                            if (lib.skill.oldfyrhjuemo.getMatches(card, storage.remaining).length === 0) {
                                return false;
                            }
                        },
                        cardSavable(card, player) {
                            const storage = player.storage.oldfyrhjuemo;
                            if (!storage || !storage.remaining || storage.remaining.length === 0) return;
                            if (!card.cardid && (!card.cards || card.cards.length === 0)) {
                                if (storage.remaining.includes("revealed") && player.hasCard(c => get.is.shownCard(c), 'h')) {
                                    return;
                                }
                            }
                            if (lib.skill.oldfyrhjuemo.getMatches(card, storage.remaining).length === 0) {
                                return false;
                            }
                        },
                    }
                },
                effect: {
                    charlotte: true,
                    trigger: {
                        player: "useCard1",
                    },
                    filter(event, player) {
                        return (
                            event.addCount !== false &&
                            player.hasHistory("lose", evt => {
                                return (
                                    (evt.relatedEvent || evt.getParent()) == event &&
                                    evt.hs.length &&
                                    Object.values(evt.gaintag_map).flat().includes("visible_fyrhjuemo")
                                );
                            })
                        );
                    },
                    forced: true,
                    popup: false,
                    content() {
                        trigger.addCount = false;
                        const stat = player.getStat().card,
                            name = trigger.card.name;
                        if (typeof stat[name] == "number") {
                            stat[name]--;
                        }
                        game.log(trigger.card, "不计入次数");
                    },
                }
            }
        },














    },
    //武将介绍
    characterIntro: {
    },
    //武将替换
    characterReplace: {
    },
    characterFilter: {//本体禁将
    },

    //武将姓名
    pinyins: {

    },

    //珠联璧合
    perfectPair: {

    },
    //衍生卡牌
    card: {

    },


};
