import { lib, game, ui, get, ai, _status } from '../../../noname.js';
export let characterIntro = {
    xinx_liuying: '星核猎手成员，身着机械装甲「萨姆」战斗。忠于任务，性格坚强。作为战胜虫群的兵器而诞生，其生长速度异于常人，但生命非常短暂。为了找寻「生」的机会而加入星核猎手，找寻违抗命运的方式。',
    xinxnew_liuying: '星核猎手成员，身着机械装甲「萨姆」战斗。忠于任务，性格坚强。作为战胜虫群的兵器而诞生，其生长速度异于常人，但生命非常短暂。为了找寻「生」的机会而加入星核猎手，找寻违抗命运的方式。',
    xinx_jingliu: '曾经的罗浮剑首，云骑军不败盛名的缔造者。而今其名已被抹去，成为行于魔阴边缘的仙舟叛徒。',
    xinx_ren: '「星核猎手」的成员，弃身锋刃的剑客。效忠于「命运的奴隶」，拥有可怖的自愈能力。',
    xinx_qiong: '登上星穹列车的少年。为了消除星核带来的危机，选择与星穹列车同行。',
    xinx_xing: ' 登上星穹列车的少女。为了消除星核带来的危机，选择与星穹列车同行。',
    xinx_yinglang: '「星核猎手」的成员，骇客高手。将宇宙视作大型沉浸式模拟游戏，玩乐其中。掌握了能够修改现实数据的「以太编辑」。',
    xinx_xiadie:
        `遐蝶是承载【死亡】神权的半神，曾经哀地里亚的督战圣女，奥赫玛的入殓师，也是翁法罗斯轮回的铁证。
        <br><br>前世她为了让妹妹完成死亡火种试炼而死，在新的纪元塞纳托斯重新捏塑了她的灵魂，将她送往人间，却意外将赐予死亡的权能分割给了遐蝶，遐蝶因此拥有了碰触夺取生命的能力。
        <br><br>为了挽救开拓者的生命、帮助那刻夏完成实验，领悟死亡意义的遐蝶接过了死亡的火种，停留在冥界看顾逝者的灵魂。`,
    xinx_huangquan: '自称「巡海游侠」的旅人，本名不详。身佩一柄长刀，独行银河。淡漠寡言，剑出如紫电般迅猛，却从来只以刀鞘战斗，收而不发。',
    xinx_luocha: '随身携带着棺椁，自天之外海而来的化外行商。',
    xinx_fuxuan: '仙舟「罗浮」太卜司之首。凭借第三眼与穷观阵为仙舟占算航路，预卜事务吉凶。',
    xinx_yinyuejun: '丹恒身为持明族的本相，其上一世「饮月君」所遗存的力量。接受了额顶的峥嵘角冠，就要接受那罪人所立的一切功过。',
    xinx_mimi: '开拓者的「伙伴」。',
    xinx_Pollux: '死亡泰坦的部分残驱。',
    xinx_baie:
        `白厄，本名卡厄斯兰那，翁法罗斯永劫轮回的原因之一，盗火行者的真身。在绝灭大君铁墓即将成型之时，为保住行将毁灭的翁法罗斯，白厄踏上三千多万次的永劫轮回，夺取火种试图反抗权杖，并因负载数亿颗火种的灼烧而失去理智，成为我们如今见到的盗火行者。
		<br><br>在等到了来自天外的变量——开拓者接过救世的重任后，卡厄斯兰那带着自己三千多万次轮回积累的力量与怒火，孤身挑战铁墓。不仅打乱了铁墓诞生的进程，也以人之身令星神纳努克流下金血。在这场抗争的终局，白厄燃烬了自己的所有，最终被铁墓所封印。
		<br><br>得到神谕：“汝将肩负骄阳，直至灰白的黎明显著。”
			`,
    xinx_fengjin:
        `风堇，又名雅辛忒丝，是翁法罗斯的黄金裔之一，天空之泰坦艾格勒的辅祭，神悟树庭智种学派那刻夏的讲师助理，医疗机构昏光庭院的首席护理师。
        <br><br>作为天空之子的后裔，她与那些善于征战的先祖不同，而是更希望作为医生，看护英雄背后的平民。在夺回天空火种后，她牺牲自己为翁法罗斯撑起苍穹，降下虹光看护那些遭受灾难之人。
        <br><br>天空一族曾流传预言：“在彩虹桥的尽头，天空之子将缝补晨昏。”`,
    xinx_feixiao:
        `仙舟「曜青」的天击将军，帝弓七天将之一，为人不拘一格，率直潇洒。
        <br>精通百般武艺，炼化躯体至极致，享有「大捷将军」美名，深受仙舟军民爱戴。
        <br>但身负「月狂」之症，如要在时限内猎尽孽物——飞霄唯一的敌手，便是自己。`,
    xinx_daheita:
        `天才俱乐部#83黑塔本尊，深居银河边境的时钟塔内，探寻宇宙终极奥秘的「魔法使」。
        <br>因返老还童，外貌永葆全盛时期的少女青春。厌恶闲人琐事，杂事通常交由人偶完成。`,
    xinx_guinaifen:
        `因机缘巧合留在仙舟的化外民，如今是热情烂漫的街头艺人。
        <br>本名「格妮薇儿」，「桂乃芬」是好友素裳为她起的仙舟名。
        <br>面对「罗浮」的全新人生，凭着对仙舟文化的热爱，桂乃芬很快学到了安身立命的一技之长——倒立吃面条、胸口碎大石、徒手接子弹等等。`,
    xinx_sanyueqi:
        `精灵古怪的少女，自认热衷于这个年纪的女孩子「应当热衷」的所有事，比如照相。
        <br>从一块漂流的恒冰中苏醒，却发现自己对身世与过往都一无所知。短暂的消沉之后，她决定以重获新生的日期为自己命名。
        <br>这一天，三月七「诞生」了。`,
    xinx_changyeyue:
        `原为藏于三月七心中的执念，疑似与神秘有关，渴望摧毁记忆命途和浮黎狂热的党羽，来保护三月七。
        <br><br>被卷入翁法罗斯后，三月七为了保护丹恒与开拓者，以交出身体的控制权为代价，换取长夜月的力量保护了开拓者与丹恒进入翁法罗斯。
        <br><br>长夜月一心想完成三月七「与列车组一直开拓下去」的愿望，甚至不惜以极端手段将其实现——她计划烧毁翁法罗斯的三千万世记忆，并过滤开拓者的记忆，
        剔除所有失败的历史与英雄、并以此为蓝本重新编纂世界的因果，来创造一个无瑕的「翁法罗斯」，阻止铁墓诞生，但被三月七和昔涟阻止。
        在见证了三月七的决心与列车组的友谊后，她将身体和力量交还给三月七，再次退回三月七记忆的深处，只是仍然抹去了与【无漏净子】有关的记忆，避免三月七被流光忆庭盯上。`,
    xinx_xilian:
        `昔涟，既是最初的智种德谬歌，也是权杖因子Philia093，以及开拓者身边的迷迷。
        <br><br>在与铁墓的战斗失败后，昔涟护住银河众生的记忆，帮助开拓者完成了一次银河的“再创世”，战胜了铁墓。
        最后，她为了锚定铁墓失败的结局，踏上了逆岁月而行的旅程，重返过去填补过去混沌的因果，失去记忆化作在哀丽秘榭诞生的Philia093，重新开始了轮回。 
        <br><br>曾得到预言：“汝将收梢于花开时，一如终结诞下起始。”`,
    xinx_xier:
        `飒爽俊逸的「地火」成员，成长于地底危险混乱的环境，习惯独来独往。
        <br><br>保护与被保护，压迫与被压迫，世界向希儿展示的始终是非黑即白的那一面——直至「那名少女」的出现。`,
    xinx_buluoniya:
        `贝洛伯格「大守护者」继承人，年轻干练的银鬃铁卫统领。
        <br><br>布洛妮娅从小接受着严格的教育，具备一名「继承人」所需的优雅举止与亲和力。但在看到下层区的恶劣环境后，未来的最高决策者逐渐生出了疑惑…「我所受的训练，真的能带领人民过上他们想要的生活么？」`,
    xinx_sikeke:
        `上，是夜幕的群星。
        <br>下，是地底的深渊。
        <br>无人知晓星空之外是什么样子，正如无人知晓深渊中到底有什么存在。
        <br>就像古老的坎瑞亚留下的那句谶言：
        <br>「我们走向宇宙，或者下到深渊。」
        <br>「并没有差别，因为都是未知的漆黑。」
        <br>在那地下的文明崩塌之后，在某个已经无人记得的焦土——
        <br>藐视命运的人曾从命运的手中带走一名少女。
        <br>长大后的少女也救过另一个被命运纠缠的小孩。
        <br>倘若一切都能以温情来衡量，倘若故事都能以圆满做收场…
        <br>只可惜前路渺茫，同样是未知的景象。`,
    xinx_xingqiri:
        `「秩序」的美梦已然消散，但仍有人不会放下初愿。
        <br><br>——折翼坠地的旅人，他的脚步将迈向何方？`,
        xinx_yeshunguang:
        `「虚狩」代表着新艾利都最高的荣誉与最强的守护之力。市长会在每一位虚狩的名前，冠以一个独一无二的称号。这些称号不仅是为了表彰他们无可替代的功绩，更是为了让世人永远铭记每一位虚狩独一无二的意志。
        <br>而于叶瞬光而言，她的称号是——「青溟司命」。这寓意着叶瞬光早已不再是被剑所束缚的受害者，而是真正能够驾驭这股力量的剑主。
        <br><br>它不仅指代叶瞬光拥有执掌青溟剑的能力，更是要让所有人时刻铭记：
        <br>这份荣耀的背后，是永恒的，正在进行着的牺牲。
        <br>它见证着每一次剑光闪耀背后，都有着记忆的流沙在无声滑落。
        <br>它铭记着每一次成功守护背后，都有着感官的世界在悄然褪色。
        <br><br>这就是新艾利都的「青溟司命」。她不是神，却执掌着超乎寻常的力量，也背负着连神明都为之动容的代价。
        <br>所以，当你看见那道耀眼的剑光划破长夜时，请不要忘记——
        <br>那是一位少女通过燃烧自己而点燃的，守护的光芒。`,
        xinx_kafuka:
        `在星际和平公司的通缉档案里，卡芙卡只留下了名字和「爱好收集大衣」的记录。人们对这位星核猎手所知甚少，只知道她是「命运的奴隶」艾利欧最信任的成员之一。
        <br><br>为了到达艾利欧预见的「未来」，卡芙卡开始行动。`,
        xinx_tenghuang:
        `来到翁法罗斯后，丹恒同开拓者见证了翁法罗斯的第33550336次轮回，共同走上了逐火之旅；归还天空火种后，面对翁法罗斯的末日，由于识刻锚仅能稳定一人的数据，所以丹恒先行返回列车，却在返回后得知开拓者和三月七被长夜月挟持一事。
        <br><br>为了寻回开拓者与三月七，丹恒重返翁法罗斯，并遇到了大地半神荒笛。丹恒同大地半神荒笛约定，他将背负万千生灵脱离翁法罗斯前往星海。
        <br><br>于是荒笛将火种交予丹恒，丹恒成为了新任大地半神。借助大地的力量，丹恒寻回了开拓者，又共同解放了被长夜月过度保护的三月七。`,
        xinx_xiao:
        `虚构人物。护卫家主，寡言的剑客少女。
        <br><br>原画作者：织森凉。`,
        xinx_aimisi:
        `爱弥斯慢慢踏着楼梯向上，回到了桌边。
        <br><br>因为刚才那个梦醒来后，她也睡不着了。事实上，她本就无需睡眠，梦也更像是记忆以另一种形式进行重播。明天她和【TA】就会抵达隧者脚下，她不太确定会发生什么，因此想要做好准备。
        <br><br>话语是意义的准备，因此她想把一些想和【TA】说，却在此刻还无法宣之于口的话记录来下。
        <br><br>该说些什么好呢？也许应该把这么多年发生的事情，都告诉对方。大事小事，欢乐和忧伤，无关紧要的一切，关系世界命运的一切……或者，也可以小小的责备对方一下，因为时间已经过去了很久，对方缺席了太久，她要分享的东西也堆积得太多。如果这些都不太对，那么就把这次公路片之旅画下来，就像以前那样。她说了又删，删了又说，最后只留下了一小段内容。
        <br><br>“我知道，只要抬头，那颗星总能找到我。”
        <br><br>爱弥斯在房间中的电子设备里留下了这段话，等待它在更久一些之后的时间被发现，或者永远不被发现。
        <br><br>此刻，她也的确没有更多想要的东西了。
        <br><br>【TA】现在看起来还挺快乐的，这比任何事都要好。如果可以，那就永远隐瞒下去吧，只要那个人能得到幸福，其他事情她都可以付之一笑。她可以做个自私的人，也可以做个无私的人，可面对家人，人难免都会护短，爱弥斯也不能免俗。真相又有什么重要的呢？
        <br><br>只要【TA】能自由而快乐地活着就好。
        <br><br>爱弥斯想着想着，忽然意识到这和过去束缚过她的那句嘱托并无区别。她忍不住笑了一下。此刻万籁俱寂，雪无声地落在天地间，于消融前等待着春日的降临。`,










    //来自流萤的终末任务，整理并润色了遍文本
    xinxmeng_liuying:
        `你们并肩而坐，在晖长石号船头的某处台阶，烟花将在一小时后盛放。你很紧张，四处张望，不知将手放在何处，少女则以静谧的微笑代替。
        <br><br>这是她期待已久的梦境，也可能是你们最后一次会面。你反复斟酌，打算将积蓄的不解与疑惑全盘脱出。
        <br><br>“我想知道，你和我过去的故事。为什么你如此在意我？”终于，问题挑明，你心底的石块就此下坠，而少女眼神闪过一丝恐惧，谨慎地开口。
        <br><br>“…抱歉，我不能说。艾利欧告诉我，那会导致很可怕的未来，我仅仅是多说几句，就会让你在下一站死去。
        <br><br>“我能够告诉你的，只有我们重逢的原因。<span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"
         onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/很久以前，你答应过我.mp3');
        ">很久以前，你答应过我：如果我能做梦，你会让它成为一个美好的白日梦。</span>现在这个<b>约定</b>马上就要实现了，对吧？”
        <br><br>“<b>约定</b>…可是我已经不记得了，即便如此，我还算你认识的那个人吗？”你像是要把她说服般，让她抛下过去残留的好感，不再执着于你。
        <br><br>“重要的不是你变成什么样子，而是我……仍然对你抱有和以前一样真实的感情。”她的微笑并未褪去，一字一顿道。
        <br><br>……
        <br><br>短暂无言后，她的脸庞出现了晶绿的裂纹。
        <br><br>“是失熵症发作了吗？”你问。
        <br><br>“是啊，这就是「剧本」里说的第三次死亡吧，在梦境中彻底死去……不过你别担心，我问过银狼了，现实里不会这么严重，就先不聊这些了。
        <span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"
         onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/我就怕你露出悲伤.mp3');
        ">我就怕你露出悲伤的表情——这是我们最美好的白日梦，也是你给我的<b>约定</b>，我们要笑着把它做完。”</span>
        她把手搭在脸颊，轻抚那道裂纹，<span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"
         onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/毕竟，我们永远不会知道.mp3');
        ">“毕竟，我们永远不会知道，从哪一瞬间起，我们就用完了…与某个人在这片银河间所有地方共有的…所有时间。”</span>
        
        
        
        <br><br>你咬紧嘴唇沉默，“所有时间”对你太过沉重，哪怕此刻便身处其中。
        <br><br>“对了…你可不可以闭上眼睛？如果是唯一一次做梦，我希望…你能看到最好的我。
        在快要结束的时候，就让我稍微完美主义一下下吧。我以前常常做的那样，闭上眼睛，去想象我们待在一起的景象…
        就算看不见我，但你还是可以知道，我们的距离从未遥远过。”
        <br><br>“你不许偷偷离开。”仿佛意识到离别将至，你脱口道。
        <br><br>
        <span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"
         onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/不会的，只要我能做到.mp3');
        ">“不会的，只要我能做到，就永远不会。”</span>
        <br><br>你闭上眼睛，期待不一样的她。
        <br><br>“嗯…我想想…该从哪里开始呢……对啦，当然要从「开始的地方」开始。
        就在黄金的时刻，你来救我的时候——不过，也可以假设我们素不相识，只是偶然在那里相遇。我嘛…是一个来黄金时刻旅行的学生，最好零花钱能稍稍多一点…
        然后我出现在那里时，打扮得也要精致一点。你…你也是学生！但却是从好远好远的一颗星球上来到这里，完全不熟悉环境。
        然后，就跳出来几个好凶好凶的流氓，想要欺负你。而那时候，我会挺身而出——对，这一次，让我来拯救你。”
        <br><br>“别管我，我不想让你因我受伤。”你说。
        <br><br>“没关系，我就是要那样做。结果并不重要，甚至过程也不重要。重要的是：我们怎样参与这趟旅程，又如何去看待它。所以，再答应我一个愿望……
        <br><br>“还记得吗？在对抗「太一之梦」的时候，我抱着你飞上天空。那时，我不知道自己还能否醒来，但我却很开心。
        因为，我们又能肩并肩，去对抗某些我们认为「不对」的东西，并且，能为对方不顾一切。不过，我还是有一点小小的私心——我相信你不会忘记这一幕，但如果回想起来，我想让它轻松一点。
        也许没有什么敌人，一切只是场恶作剧。而我抱着你飞上天空时，天空中不是可怕的虫群，而是……我没能看到的烟花。”
        她的语气渐渐涣散，像因受伤而在天空坠落的鸟儿，掠过一层层云朵消弭不见。
        <br><br>“你可以的，你能看到烟花的。”你无比确定，却也知晓她的失熵愈发严重，可能已经……不，不会的。
        <br><br>她没有回答，你再次开口：“流萤？我要睁眼了哦？”
        <br><br>“…流萤？！”你呆住，她的眼睛已然失真，脸颊的裂纹如树状绽开，几乎抵到眼角。
        <br><br>
    <span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"

         onclick="
            /* 1. 如果有正在放的录音，先暂停 */
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            /* 2. 播放新的，并把它存进全局变量 */
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/…艾利欧说.mp3');
        ">
        “艾利欧说，我们注定走向不同的终末，不可能拥有未来。
    </span>
    <br><br>

<span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"

         onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/所以你说，你会给.mp3');
        ">
        “所以你说，你会给我一个，比任何结局都美好的白日梦……
    </span>
    <br><br>

    
<span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"
        onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/我很期待…结局吗.mp3');
        ">
        “我很期待…但是，我们难道真的就不能，一起跨过那个结局吗？
        </span>

        <br><br>
        <span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"
        onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/我不害怕死.mp3');
        ">
        “我不害怕死…但不要让我独自一人死去……
    </span>

        
        <br><br>
        <span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"
        onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/他们都说…你是注定.mp3');
        ">
        “他们都说…你是注定带来「终末」的人。
       </span>
       <br><br>
       <span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"
        onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/但相信你会在的.mp3');
        ">
        “但相信你会在的…一定会……”
       </span>
        <br><br>你不舍得打断她，只能静静目睹，每说一句，身体便凋零一叶，思维便破碎一片的她。
        <br><br>
        <span style="text-decoration: underline; text-decoration-style: dashed; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='dashed';"
        onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/只有你能知道，只有你能决定.mp3');
        ">
         “只有你能知道，只有你能决定。这片银河，的确不是只为你而存在，也不是只在你的注视下流淌…但它永远等待着你的拯救。”
       </span>
        <br><br>萤火般细碎的绿色光芒从她的身旁四散，你发现，可能来不及了。
        <br><br>“「你」……烟花…… ”
        <br><br>她最后发出的声音，只剩下「一个名字」，和「一个心愿」。
        <br><br>不，还没有结束，趁着她也许还能看见……你握紧她的手，无比确信地说：
        “结果并不重要，甚至过程也不重要。重要的是：我们怎样参与这趟旅程，又如何去看待它。
        <span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"
        onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/答应你的，我都会做到.mp3');
        ">答应你的，我都会做到。”</span>
        <br><br>然而她的目光再也没有移动过——她眼中的神采，已然完全消失了。
        <br><br>“我…还是慢了一步吗……明明她都没看到烟花。为什么……”
        <br><br>人群喧闹起来，烟花盛放，可她却看不见了。你伸手抓住她因消失带来的点点萤光，将其护于掌心，却无济于事。
        <br><br>
        <span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"
        onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/不，不是无法弥补.mp3');
        ">
        不，不是无法弥补……
       </span>
        <br><br>
        <span style="text-decoration: underline; text-decoration-style: solid; text-underline-offset: 4px; cursor: pointer; color: #00d2ff;"
        onmouseover="this.style.color='#ff4757'; this.style.textDecorationStyle='solid';" 
        onmouseout="this.style.color='#00d2ff'; this.style.textDecorationStyle='solid';"
        onclick="
            if(window.lastIntroAudio) { window.lastIntroAudio.pause(); }
            window.lastIntroAudio = game.playAudio('../extension/永夜之境/audio/liuyingintro/我能够拨转命运.mp3');
        ">
        我能够拨转命运，成全缺憾。世界给我们的命运立下一个终点，那它至少，要补偿给流萤…她想要的花束。
       </span>
        <br><br>你感到耳边的声音开始渐渐模糊，消去——
        <br><br>你回忆起记忆中的烟花，流萤接住正从空中坠落的你，带你飞上天际。在那时，她曾说过的话，给故事留下了完美的注脚——属于她，也属于夜空下的所有人。
        <br><br>而你知道，如今这已是不复存在的注脚。
        <br><br>「终末」的力量正在拨转时间，而少女最后的遗憾近在眼前。「一个美好的白日梦」——诺言兑现的时刻到了。你能，你会，你必将…使其实现。
        <br><br>“所以，人们为何选择沉睡？我想，就像你说的一样。为了明天，能笑着从梦中醒来。”
        <br><br><br><br>你睁开眼，是记忆中的天台。少女挥舞着闪烁烟花的仙女棒，笑容灿然。`,


    //杏雅三国
    xxyuexi: '本扩虚构人物，张辽之妻。青楼女子出身，自幼与张辽相识。',
    xinx_jiangzhuo: '本扩虚构人物，张辽密友。于官渡之战前夕与张辽相识，赠予其金焕刃。',
    xinx_zhenfu: '文昭甄皇后，上蔡令甄逸之女。魏文帝曹丕的妻子，魏明帝曹叡的生母。',
    xinx_zengao: '本扩虚构人物，张辽好友。熟读文略，精通兵法，亦善枪术。',
    xinx_qinlian: '本扩虚构人物。',
    xinx_qinxi: '本扩虚构人物。',
    //风雨如晦
    xinx_hanzhuo: `寒浞（约前2013年-约前1933年），妘姓，名浞（zhuó）。夏朝时期的篡位君主，以孔子的儒家思想为主体的中国历史把他排斥在帝王之外。`,
    xinx_zhuowenjun: `卓文君（前175年～前121年），原名文后，西汉临邛（今四川省邛崃县）人，祖籍为赵国邯郸（今河北省邯郸市），四川临邛巨富卓王孙之女。中国古代四大才女之一、蜀中四大才女之一。`,
    xinx_limu: `李牧（？－前229年），又名李繓，嬴姓，柏仁（今河北省邢台市隆尧县）人。中国战国末期赵国著名将领。
    <br><br>李牧先是长驻代、雁门，保卫赵国北部边境，被称为良将。他于边境采取坚壁清野、养精蓄锐、伺机反击的方针，使匈奴掳掠无所得，而赵军战斗力得以增强。
    待时机成熟时，选拔近二十万人加紧战前训练，以部分人畜为饵，诱匈奴深入赵地，以两翼包抄战法出其不意歼灭匈奴十余万骑，乘胜灭襜褴，破东胡，降林胡。
    赵悼襄王二年（前243年），率军进攻燕国，攻克武遂、方城。赵王迁三年（前233年），在肥之战中大破秦将桓齮部，次年又在番吾之战中击败秦军，因功获封武安君。
    <br><br>赵王迁七年（前229年），秦国在灭韩后北上攻赵，奉命与司马尚抵御秦军攻势。后来，赵王迁中了秦国的离间计，派人夺取李牧的兵权。不久后李牧被杀害（一说被赐自尽）。
    次年，赵都邯郸为秦军所破。`,
    xinx_xunguan: `荀灌，颍川临颍（今河南临颍县）人，西晋人物，晋朝平南将军荀崧的女儿，荀彧的五世孙女。
    <br><br>建兴三年（315年），奉长安所遣征南大将军、监荆、梁、益、宁四州第五猗之命，杜曾率领一万兵马围攻宛城（今河南省南阳市）。
    到了城中几乎粮尽的时候，荀崧打算派人到襄阳求援。
    <br><br>当时13岁的荀灌主动请缨出城求援。荀崧开始不同意，后来经过荀灌多次恳求，他终于答应了。
    荀灌带领十几个勇士，穿越杜曾的重重包围，到达襄阳。南中郎将周访派遣其子周抚，会同襄城郡太守石览，援救宛城，击退了杜曾的军队。`,
    xinx_wuqi: `吴起（前440年－前381年），中国战国初期军事家、政治家、改革家，兵家代表人物。卫国左氏（今山东省定陶县，一说山东省曹县东北）人。
    <br><br>吴起一生历仕鲁、魏、楚三国，通晓兵家、法家、儒家三家思想，在内政、军事上都有极高的成就。仕鲁时曾击退齐国的入侵；仕魏时屡次破秦，尽得秦国河西之地，成就魏文侯的霸业；仕楚时主持改革，史称“吴起变法”，前381年，楚悼王去世，楚国贵族趁机发动兵变攻杀吴起。
    <br><br>后世把他和孙武并称为“孙吴”，《吴子》与《孙子》又合称《孙吴兵法》，在中国古代军事典籍中占有重要地位。唐肃宗时将吴起等历史上十位武功卓著的名将供奉于武成王庙内，被称为武庙十哲。
    宋徽宗时追尊吴起为广宗伯，位列宋武庙七十二将之一。`,
    xinx_wangmang: `王莽(前45年12月12日—公元23年10月6日)，字巨君，魏郡元城委粟里(今河北省邯郸市大名县)人，西汉权臣，新显王王曼第二子、西汉孝元皇后王政君侄，篡夺汉朝皇位，是“新朝”开国皇帝。
    <br><br>西汉末年，在汉哀帝早亡、皇权旁落的情况下，王莽乘机窃取汉朝大权。初始元年十二月癸酉朔（公元9年1月15日），王莽代汉建新，建元“始建国”，建丑正（改汉历十二月为正月），宣布推行新政，史称“王莽改制”。`,
    xinx_wuyuan: `伍子胥(公元前559年—公元前484年)，名员，字子胥，本楚国人今湖北省监利县黄歇口镇，春秋末期吴国大夫、军事家。以封于申，也称申胥。
    <br><br>伍子胥之父伍奢为楚平王子建太傅，因受费无极谗害，和其长子伍尚一同被楚平王杀害。伍子胥从楚国逃到吴国，成为吴王阖闾重臣，是姑苏城(苏州城)的营造者，至今苏州有胥门。公元前506年，伍子胥协同孙武带兵攻入楚都，伍子胥掘楚平王墓，鞭尸三百，以报父兄之仇。吴国倚重伍子胥等人之谋，西破强楚、北败徐、鲁、齐，成为诸侯一霸。
    <br><br>伍子胥曾多次劝谏吴王夫差杀勾践，夫差不听。夫差急于进图中原，率大军攻齐，伍子胥再度劝谏夫差暂不攻齐而先灭越，遭拒。夫差听信太宰伯嚭谗言，称伍子胥阴谋倚托齐国反吴，派人送一把宝剑给伍子胥，令其自杀。伍子胥自杀前对门客说：“请将我的眼睛挖出置于东门之上，我要看着吴国灭亡。”在伍子胥死后九年，吴国为越国偷袭所灭。`,
    xinx_lingfeng: `凌封，三国时期东吴名将凌统次子，兄长凌烈，被孙权夸为他的虎子，后来兄长因犯事而被免职由凌封继承凌统的军队和爵位。`,
    xinx_zhugejing: `诸葛靓，字仲思 ，琅琊阳都（今山东沂南县）人，西汉司隶校尉诸葛丰之后 ，曹魏征东大将军诸葛诞少子。 诸葛诞叛乱后入仕东吴。吴亡后投降晋朝，但因父仇而终身不仕，时人称许他至孝。`,
    xinx_lizhaoyi:`李昭仪为三国时期蜀汉后主刘禅的妃嫔，位列九嫔之一的昭仪。景耀六年（263年）魏将邓艾攻破成都后，刘禅投降，李昭仪随蜀汉后宫成员被曹魏分配给无妻将领。
    <br><br>面对赐婚安排，李昭仪以"我不能二三屈辱"表明心志，最终选择自杀以全名节。`,
    fyrh_yuanchen:`袁綝，豫州颍川郡（治今河南省禹州市）人，三国时期蜀汉将领。历任前将军、征西大将军，封都亭侯。`,
    fyrh_bianrang: `边让（生卒年不详），字文礼（一作元礼），陈留郡浚仪县（今河南省开封市）人。东汉末年名士、辞赋家、大儒。年少辩博，善于属文，和陶丘洪、孔融齐名，得到大将军何进的征辟，担任令史。善于占射，与孔融、王朗同为名流，受到议郎蔡邕的推崇，出任九江太守，适逢天下大乱，去官还家，恃才傲物，不屈于兖州牧曹操，为曹操所杀。
    <br><br>边让的文章多有遗失，仅存代表作《章华台赋》。此赋借古讽今，归于正道。辞藻华丽，铺陈夸饰，写宴饮曼舞一节，极尽铺采摘文之能事。`,
    fyrh_zuti: `祖逖（266年－321年），字士稚，范阳遒县（今河北涞水）人，东晋军事家。祖逖出身于范阳祖氏。早年曾任司州主簿、大司马掾、骠骑祭酒、太子中舍人等职，并于西晋末年率亲党避乱于江淮。后被授为奋威将军、豫州刺史，率部北伐。
    <br><br>祖逖所部军纪严明，得到各地人民的响应，数年间收复黄河以南大片土地，使得石勒不敢南侵，进封镇西将军。但朝廷却因他势力强盛，对他非常忌惮，还派戴渊相牵制。
    <br><br>大兴四年（321年），祖逖因朝廷内明争暗斗，国事日非，忧愤而死，追赠车骑将军，部众被弟弟祖约接掌。北伐大业也因祖逖之死而功败垂成。`,
    fyrh_lvzhi:`吕雉（公元前241年－公元前180年8月18日），字娥姁，通称吕后，或称汉高后、吕太后等等。砀郡单父县（今山东菏泽市单县）人。
    <br><br>汉高祖刘邦（前202年-前195年在位）的皇后，高祖死后，被尊为皇太后（前195年—前180年），是中国历史上有记载的第一位皇后和皇太后。`,



};


