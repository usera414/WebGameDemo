var storyContent = ﻿{"inkVersion":20,"root":[["ev","str","^创建角色","/str","/ev",{"*":"0.c-0","flg":4},{"c-0":["\n",{"->":"CreateRole"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"CreateRole":[["ev",30,100,"rnd","/ev",{"VAR=":"str","re":true},"\n","ev",30,100,"rnd","/ev",{"VAR=":"CON","re":true},"\n","ev",30,100,"rnd","/ev",{"VAR=":"SIZ","re":true},"\n","ev",30,100,"rnd","/ev",{"VAR=":"DEX","re":true},"\n","ev",30,100,"rnd","/ev",{"VAR=":"APP","re":true},"\n","ev",30,100,"rnd","/ev",{"VAR=":"Int","re":true},"\n","ev",30,100,"rnd","/ev",{"VAR=":"Pow","re":true},"\n","ev",30,100,"rnd","/ev",{"VAR=":"EDU","re":true},"\n","ev",30,100,"rnd","/ev",{"VAR=":"Luck","re":true},"\n","^力量：","ev",{"VAR?":"str"},"out","/ev","^     体质：","ev",{"VAR?":"CON"},"out","/ev","^     体型：","ev",{"VAR?":"SIZ"},"out","/ev","\n","^敏捷：","ev",{"VAR?":"DEX"},"out","/ev","^     外貌：","ev",{"VAR?":"APP"},"out","/ev","^     智力：","ev",{"VAR?":"Int"},"out","/ev","\n","^意志：","ev",{"VAR?":"Pow"},"out","/ev","^     教育：","ev",{"VAR?":"EDU"},"out","/ev","^     幸运：","ev",{"VAR?":"Luck"},"out","/ev","\n","ev","str","^开始游戏","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ","\n","^二十世纪初春季的一天，作为密斯卡托尼克大学民俗学学生的你和导师梅利萨·索恩教授、好友兼同学艾伦·达尔伯格、混入队伍里来旅游的妹妹娜娜前往阿多尼斯小镇调查该镇独有的今日——乌纳妲节。","\n","ev",0,"/ev",{"VAR=":"DEX","re":true},{"->":"day_1"},{"#f":5}]}],{"#f":1}],"day_1":[["^第一天","\n","^你们到达镇上时已经是下午了，幸运的是，你们很轻易就找到了旅馆。作为司机的艾伦把卡车停在了旅馆附近。","\n","^尽责的旅馆老板给你们画了小镇的地图并提醒作为外乡人的你们，小镇自黄昏开始就会大雾弥漫，直到第二天早上雾散前都不建议出门。","\n","ev","str","^谢谢提醒并询问问大雾怎么了","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^我们就是来看大雾的","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^老板告诉你们具体情况他也不清楚，但是小镇上的人都知道这雾对人身体不好。据说有不信邪的在雾里呆了一晚上之后一病不起，被送进小镇的疗养院。","\n","ev",{"VAR?":"Int"},1,"+",{"VAR=":"Int","re":true},"/ev",{"->":"day_1_1"},{"#f":5}],"c-1":["\n","^老板看了你们一眼，没有再劝说什么。","\n","ev",{"VAR?":"str"},1,"+",{"VAR=":"str","re":true},"/ev",{"->":"day_1_1"},{"#f":5}]}],{"#f":1}],"day_1_1":[["^夜间，大雾果然覆盖了小镇。你们回到了各自的房间里。","\n","ev","str","^听从劝告，就这样在房间里度过一晚上","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^独自翻窗去雾里看看","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^一夜无话。","\n","^？？？+1","\n","ev",{"VAR?":"Inf"},1,"+",{"VAR=":"Inf","re":true},"/ev",{"->":"day_2"},{"#f":5}],"c-1":["\n",{"->":"day_1_2"},{"#f":5}]}],{"#f":1}],"day_1_2":[["^吸入雾气后你咳嗽了好几声。你判断出这雾气里夹杂着花粉和柳絮，还好你并没有对这些有什么过敏。","\n","ev","str","^调查得差不多了，回房间","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^再在雾里深入探索一下","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^你回到了房间里并关闭了窗户。","\n","^？？？+2","\n","ev",{"VAR?":"Inf"},2,"+",{"VAR=":"Inf","re":true},"/ev",{"->":"day_2"},{"#f":5}],"c-1":["\n","^你拿出早就准备好的口罩继续在雾里行走，一路上看到的房屋都是门窗紧闭。","\n","^你担心自己在雾里迷路，并没有走很远就开始折返。","\n","^你回到了房间里，除了容易咳嗽外没有感到什么额外的不适。","\n","^？？？+4","\n","ev",{"VAR?":"Inf"},4,"+",{"VAR=":"Inf","re":true},"/ev","ev",{"VAR?":"str"},4,"+",{"VAR=":"str","re":true},"/ev","ev",{"VAR?":"SIZ"},5,"+",{"VAR=":"SIZ","re":true},"/ev","ev",{"VAR?":"DEX"},5,"+",{"VAR=":"DEX","re":true},"/ev","ev",{"VAR?":"APP"},5,"+",{"VAR=":"APP","re":true},"/ev","ev",{"VAR?":"Int"},5,"+",{"VAR=":"Int","re":true},"/ev","ev",{"VAR?":"Pow"},5,"+",{"VAR=":"Pow","re":true},"/ev","ev",{"VAR?":"EDU"},5,"+",{"VAR=":"EDU","re":true},"/ev",{"->":"day_2"},{"#f":5}]}],{"#f":1}],"day_2_3":["^娜娜和老板家的小女孩很快就熟络起来，艾伦和老板在讨价还价，你在修理怀表，","\n","^时间就这样过去了。","\n","^艾伦和老板终于达成了双方都满意的价格，你也递给了老板修好的怀表。","\n","^为了表示感谢，老板送了你一个古老的风铃并表示这是当地传说里的东西。","\n","^你将信将疑地收下了。","\n","^？？？+ 1","\n","ev",{"VAR?":"Inf"},1,"+",{"VAR=":"Inf","re":true},"/ev","ev",true,"/ev",{"VAR=":"fl","re":true},{"->":"day_3"},{"#f":1}],"day_2_4":["^娜娜和老板家的小女孩很快就熟络起来，艾伦和老板在讨价还价，你在修理怀表，","\n","^时间就这样过去了","\n","^艾伦和老板终于达成了双方都满意的价格，而你很抱歉的告诉老板自己没能力修好。老板宽慰了你并表示这大概是天意。","\n","^？？？+1","\n","ev",{"VAR?":"Inf"},1,"+",{"VAR=":"Inf","re":true},"/ev",{"->":"day_3"},{"#f":1}],"day_2":[["^第二天","\n","^作为民俗调查，教堂肯定是不能错过的地点。","\n","^你们一-行人前往了教堂。","\n","^与信徒交流后，你们了解到这是萨满教，每天都会进行集会，他们相信参与集会之后会获得好运。","\n","^索恩教授声明自己将会去参加集会。艾伦直言自己讨厌教堂这氛围，不会参与集会。娜娜表示对集会不感兴趣。","\n","ev","str","^参与集会","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^不参与集会","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"day_2_1"},{"#f":5}],"c-1":["\n",{"->":"day_2_2"},{"#f":5}]}],{"#f":1}],"day_2_1":["^你与索恩教授参与了集会。","\n","^集会结束后，教授判断该教派是一-种融合 了当地原住民中的原始萨满教以及基督教的融合宗教。","\n","^???+2，幸运+1","\n","ev",{"VAR?":"Inf"},2,"+",{"VAR=":"Inf","re":true},"/ev","ev",{"VAR?":"Luck"},1,"+",{"VAR=":"Luck","re":true},"/ev","ev",{"VAR?":"Luck"},"out","/ev","\n",{"->":"day_3"},{"#f":1}],"day_2_2":[["^你与娜娜、艾伦一起离开教堂。","\n","^艾伦说他要去当地的商店把自己带来的药品、糖果、可可豆等商品卖了并询问你和娜娜准备去哪。","\n","^对于他这种打着民俗调查名义的商业行为，你和教授都见怪不怪了。只有娜娜惊愕地说她之前一直以为卡车里的都是武器和实验器具。","\n","^考虑到本来就没什么预定计划，你和娜娜跟着艾伦一起去了当地的商店。","\n","^老板对于你们的到来表示欢迎，本来没有特定信仰的他都做好了大集会日没人光临的准备了。","\n","^在你们寒暄时，小女孩从后门进来对老板说她的怀表坏了。","\n","ev","str","^我来试试砍能不能修把（","ev",{"VAR?":"str"},"out","/ev","^%）","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^还是算了","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^  ","\n","ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"str"},{"VAR?":"x"},">","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"day_2_3"},{"->":".^.^.^.16"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"day_2_4"},{"->":".^.^.^.16"},null]}],"nop","\n",{"#f":5}],"c-1":["^ ","\n","^娜娜和老板家的小女孩很快就熟络起来，艾伦和老板在讨价还价，无所事事的你只能在商店里四处看看。","\n","ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"Luck"},{"VAR?":"x"},">","/ev",[{"->":".^.b","c":true},{"b":["\n","^你在杂物堆里发现一个编织着精美图案的捕梦网。","\n","^和艾伦谈妥货物价格的老板大手一挥表示这东西不值钱，送你们当纪念品了。","\n",{"->":".^.^.^.18"},null]}],[{"->":".^.b"},{"b":["\n","^直到艾伦和老板谈完价格后你也没看到什么感兴趣的东西。","\n",{"->":".^.^.^.18"},null]}],"nop","\n","^？？？+ 1","\n","ev",{"VAR?":"Inf"},1,"+",{"VAR=":"Inf","re":true},"/ev",{"->":"day_3"},{"#f":5}]}],{"#f":1}],"day_3":[["^第三天","\n","^一大早，导师就和你们宣布她有私事要去处理，这几天你们自由行动。","\n","^你们一行三人前往猎人酒店进行调查，在这里你听到了一些奇怪的死向的动物，以及会动的植物的传闻。","\n","^你对此非常感兴趣。打算向那位猎人获取更多消息。","\n","ev","str","^通过自己的口才来获取消息（","ev",{"VAR?":"APP"},"out","/ev","^%）","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^拥抱神秘力量，通过自己的口才来获取消息（100%，？？？+1）","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^请猎人喝酒来获取消息","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"APP"},{"VAR?":"x"},">","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"day_3_1"},{"->":".^.^.^.15"},null]}],[{"->":".^.b"},{"b":["\n","^猎人们似乎不买账，只告诉了你山顶被村民们列为禁区不要去","\n",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":"day_4"},{"#f":5}],"c-1":["\n","ev",true,"/ev",{"VAR=":"useM","re":true},{"->":"day_3_1"},{"#f":5}],"c-2":["\n","^猎人们告诉你山顶被村民们列为禁区，山上有很多野兽经常会出现一些奇怪的尸体，山上有很多蛇不过不主动去招惹不会被攻击","\n",{"->":"day_4"},{"#f":5}]}],{"#f":1}],"day_3_1":["^猎人们告诉你山顶被村民们列为禁区，山上有很多野兽经常会出现一些奇怪的尸体，山上有很多蛇不过不主动去招惹不会被攻击","\n","^同时他们觉得你很有意思，送了一把斧子给你防身","\n","ev",{"VAR?":"Inf"},1,"+",{"VAR=":"Inf","re":true},"/ev",{"->":"day_4"},{"#f":1}],"day_4":[["^在回去的时候娜娜被几个流氓搭讪了，你非常的生气决定去给他们一点教训。","\n","ev","str","^亲自动手（","ev",{"VAR?":"str"},"out","/ev","^%）","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^基友动手（90%）","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^拿出包里的猎枪打算进行物理说服（100%）","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["^ ","\n","ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"str"},{"VAR?":"x"},">","/ev",[{"->":".^.b","c":true},{"b":["\n","^你成功的将那些小混混打跑了","\n",{"->":".^.^.^.16"},null]}],[{"->":".^.b"},{"b":["\n","^虽然在好友的帮助下赶走了那些人，但自己也受了点伤","\n",{"->":".^.^.^.16"},null]}],"nop","\n",{"->":"day_5"},{"#f":5}],"c-1":["^ ","\n","ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",90,{"VAR?":"x"},">","/ev",[{"->":".^.b","c":true},{"b":["\n","^好友轻松的将那些小混混打跑了","\n",{"->":".^.^.^.16"},null]}],[{"->":".^.b"},{"b":["\n","^虽然好友在你的帮助下赶走了那些人，但自己也受了点伤","\n",{"->":".^.^.^.16"},null]}],"nop","\n","^教训完流氓之后获得了一些关于晚上镇子周边有奇怪动静的情报","\n",{"->":"day_5"},{"#f":5}],"c-2":["^ ","\n","^教训完流氓之后获得了一些关于晚上镇子周边有奇怪动静的情报","\n",{"->":"day_5"},{"#f":5}]}],{"#f":1}],"day_5":["^？？？+1","\n",{"->":"day_6"},{"#f":1}],"day_6":["^第???天","\n","^导师和艾伦一大早都出门不知去向。","\n","^早上，娜娜偶遇了来找人的商店小女孩，得知她的朋友萝拉失踪了。","\n","^小镇里找到没有萝拉，你们决定和猎人们一起上山碰碰运气。","\n","ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"Luck"},2,"/",{"VAR?":"x"},">","/ev",[{"->":".^.b","c":true},{"b":["\n","^你们运气很好，没遇到什么危险就找到了失踪的小孩","\n",{"->":"day_6_3"},{"->":"day_6.24"},null]}],[{"->":".^.b"},{"b":["\n","^你们运气不好，在搜索的路上遇到了一群惊慌的狼群，猎人们解决了大部分只有一只狼向你冲了过来","\n",{"->":"day_6_1"},{"->":"day_6.24"},null]}],"nop","\n",{"#f":1}],"day_6_1":[["ev","str","^猎枪射击（","ev",{"VAR?":"DEX"},"out","/ev","^%）","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^使用神秘力量进行射击（100%）","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^使用斧头攻击（","ev",{"VAR?":"str"},"out","/ev","^%）","/str",{"CNT?":"day_3_1"},"/ev",{"*":".^.c-2","flg":5},"ev","str","^使用神秘力量后用斧头攻击（100%）","/str",{"CNT?":"day_3_1"},"/ev",{"*":".^.c-3","flg":5},{"c-0":["^ ","\n","ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"DEX"},{"VAR?":"x"},">","/ev",[{"->":".^.b","c":true},{"b":["\n","^你在野狼快要击伤你的时候，一枪把狼杀死","\n",{"->":"day_6_3"},{"->":".^.^.^.16"},null]}],[{"->":".^.b"},{"b":["\n","^你的枪打偏了，野狼与你只有咫尺之遥","\n",{"->":"day_6_2"},{"->":".^.^.^.16"},null]}],"nop","\n",{"#f":5}],"c-1":["^ ","\n","^你在野狼快要击伤你的时候，一枪把狼杀死","\n","ev",true,"/ev",{"VAR=":"useM","re":true},"ev",{"VAR?":"Inf"},1,"+",{"VAR=":"Inf","re":true},"/ev",{"->":"day_6_3"},{"#f":5}],"c-2":["^ ","\n","ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"DEX"},{"VAR?":"x"},">","/ev",[{"->":".^.b","c":true},{"b":["\n","^你在野狼快要击伤你的时候，一斧头把狼杀死","\n",{"->":"day_6_3"},{"->":".^.^.^.16"},null]}],[{"->":".^.b"},{"b":["\n","^你的斧头没砍中野狼，野狼与你只有咫尺之遥","\n",{"->":"day_6_2"},{"->":".^.^.^.16"},null]}],"nop","\n",{"#f":5}],"c-3":["^ ","\n","^你在野狼快要击伤你的时候，一斧头把狼杀死","\n","ev",true,"/ev",{"VAR=":"useM","re":true},"ev",{"VAR?":"Inf"},1,"+",{"VAR=":"Inf","re":true},"/ev",{"->":"day_6_3"},{"#f":5}]}],{"#f":1}],"day_6_2":["ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"DEX"},{"VAR?":"x"},">","/ev",[{"->":".^.b","c":true},{"b":["\n","^虽然没有击伤野狼，但你反应的很快轻松的躲过了野狼的攻击，猎人开枪打死杀死了野狼，在处理完野兽之后，你们找到了失踪的小孩","\n",{"->":"day_6_3"},{"->":".^.^.^.14"},null]}],[{"->":".^.b"},{"b":["\n","^野狼的利爪抓伤了你，猎人开枪打死杀死了野狼，在处理完野兽之后，你们找到了失踪的小孩","\n",{"->":"day_6_3"},{"->":".^.^.^.14"},null]}],"nop","\n",{"#f":1}],"day_6_3":[{"#":"IMAGE:vegetable.png"},"^它突兀的出现在了你们眼前。","\n","^比起仍在震惊中的你和娜娜，猎人们反应很快，一边开枪一边让你和娜娜带着萝拉先走。","\n","^在一片枪声里，你带着娜娜和萝拉向山下跑去。","\n","ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"Int"},{"VAR?":"x"},">","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",3,"/ev",{"VAR=":"Sum","re":true},"^你按照记忆里回镇的路线跑着。当看到熟悉的大树时，你确信自己并没有走错路。","\n","^正当你准备松一口气时，怪物再次突兀的出现在了你们眼前。","\n","^你意识到现在只能靠你自己了。","\n","ev",{"VAR?":"fl"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"day_6_4"},{"->":".^.^.^.18"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"day_6_4_2"},{"->":".^.^.^.18"},null]}],"nop","\n",{"->":".^.^.^.21"},null]}],[{"->":".^.b"},{"b":["\n","ev",5,"/ev",{"VAR=":"Sum","re":true},"^你按照记忆里回镇的路线跑着。不过周围的植物为什么看着有点陌生？","\n","^怪物再次突兀的出现在了你们眼前。","\n","^你意识到现在只能靠你自己了。","\n","ev",{"VAR?":"fl"},false,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"day_6_4"},{"->":".^.^.^.18"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"day_6_4_2"},{"->":".^.^.^.18"},null]}],"nop","\n",{"->":".^.^.^.21"},null]}],"nop","\n",{"#f":1}],"day_6_4":[["ev",{"VAR?":"num"},{"VAR?":"Sum"},"<",{"VAR?":"HurtNum"},3,"<=","&&","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"day_6_4_1"},{"->":".^.^.^.2"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"ending"},{"->":".^.^.^.2"},null]}],"nop","\n",{"#f":1}],"day_6_4_2":[["^身上的风铃不知不觉的响了起来，那个怪物听到了风铃声后静止不动了","\n","ev","str","^猎枪射击(100%)","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^用斧头攻击（100%）","/str",{"CNT?":"day_3_1"},"/ev",{"*":".^.c-1","flg":5},{"c-0":["\n","^攻击命中了怪影，它怪叫着后退了一些距离","\n","ev",{"VAR?":"num"},1,"+",{"VAR=":"num","re":true},"/ev",{"->":"day_6_4"},{"#f":5}],"c-1":["^ ","\n","^攻击命中了怪影，它怪叫着后退了一些距离","\n","ev",{"VAR?":"num"},1,"+",{"VAR=":"num","re":true},"/ev",{"->":"day_6_4"},{"#f":5}]}],{"#f":1}],"day_6_4_1":[["ev","str","^猎枪射击(","ev",{"VAR?":"DEX"},"out","/ev","^%)","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^使用神秘力量进行射击（100%）","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^斧头攻击（","ev",{"VAR?":"str"},"out","/ev","^%）","/str",{"CNT?":"day_3_1"},"/ev",{"*":".^.c-2","flg":5},"ev","str","^使用神秘力量后用斧头攻击（100%）","/str",{"CNT?":"day_3_1"},"/ev",{"*":".^.c-3","flg":5},{"c-0":["\n","ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"DEX"},{"VAR?":"x"},">","/ev",{"VAR=":"isCan","re":true},"ev",true,"/ev",{"VAR=":"isShoot","re":true},{"->":"day_6_5"},{"#f":5}],"c-1":["^ ","\n","^攻击命中了怪影，它怪叫着后退了一些距离","\n","ev",true,"/ev",{"VAR=":"useM","re":true},"ev",{"VAR?":"num"},1,"+",{"VAR=":"num","re":true},"/ev","ev",{"VAR?":"Inf"},1,"+",{"VAR=":"Inf","re":true},"/ev",{"->":"day_6_4"},{"#f":5}],"c-2":["^ ","\n","ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"str"},{"VAR?":"x"},">","/ev",{"VAR=":"isCan","re":true},"ev",false,"/ev",{"VAR=":"isShoot","re":true},"ev",{"VAR?":"num"},1,"+",{"VAR=":"num","re":true},"/ev",{"->":"day_6_5"},{"#f":5}],"c-3":["^ ","\n","^攻击命中了怪影，它怪叫着后退了一些距离、","\n","ev",true,"/ev",{"VAR=":"useM","re":true},"ev",{"VAR?":"num"},1,"+",{"VAR=":"num","re":true},"/ev","ev",{"VAR?":"Inf"},1,"+",{"VAR=":"Inf","re":true},"/ev",{"->":"day_6_4"},{"#f":5}]}],{"#f":1}],"day_6_5":[["ev",{"VAR?":"HurtNum"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"ending"},{"->":".^.^.^.3"},null]}],["ev",{"VAR?":"isShoot"},true,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"isCan"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"num"},1,"+",{"VAR=":"num","re":true},"/ev","^攻击命中了怪影，它怪叫着后退了一些距离","\n",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n","^攻击没有命中怪影，它怪叫着冲向你","\n",{"->":"day_6_6"},{"->":".^.^.^.8"},null]}],"nop","\n",{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"isCan"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"num"},1,"+",{"VAR=":"num","re":true},"/ev","^攻击命中了怪影，它怪叫着后退了一些距离","\n",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n","^攻击没有命中怪影，它怪叫着冲向你","\n",{"->":"day_6_6"},{"->":".^.^.^.8"},null]}],"nop","\n",{"->":".^.^.^.3"},null]}],"nop","\n",{"->":"day_6_4"},{"#f":1}],"day_6_6":["ev",1,100,"rnd","/ev",{"VAR=":"x","re":true},"\n","ev",{"VAR?":"DEX"},{"VAR?":"x"},">","/ev",[{"->":".^.b","c":true},{"b":["\n","^你灵敏的躲开了它的撞击","\n",{"->":"day_6_4"},{"->":".^.^.^.14"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"HurtNum"},1,"+",{"VAR=":"HurtNum","re":true},"/ev",["ev",{"VAR?":"HurtNum"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^多次被蹭伤带来的隐患爆发了，你没能躲过这次的撞击，被撞飞了出去。","\n","^怪物的力气很大，虽然你勉强爬了起来，但你意识到了自己肯定躲不过怪物下一次的撞击。","\n",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["\n","^你勉强躲开了它的撞击，身体虽然被蹭到了点但还是不影响你之后的攻击。","\n",{"->":".^.^.^.9"},null]}],"nop","\n",{"->":"day_6_4"},{"->":".^.^.^.14"},null]}],"nop","\n",{"#f":1}],"ending":[["ev",{"VAR?":"num"},{"VAR?":"Sum"},"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"Sum"},5,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^也许是积累的伤势终于爆发了。怪影晃了晃，突兀的燃烧了起来。好在这奇怪的自燃并没有持续太久，只是在地上留下了一些灰烬。","\n","^你有心收集了些灰烬准备带回去给教授看看。","\n","^过了一段时间，猎人们也赶到了。不出所料你们走错了路，猎人们是听到打斗声追踪过来的","\n",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n","^在你攻击命中的同时，猎人们也赶到了。他们也加入了对怪影的射击。","\n","^也许是积累的伤势终于爆发了。怪影晃了晃，突兀的燃烧了起来。好在这奇怪的自燃并没有持续太久，只是在地上留下了一些灰烬。","\n","^你有心收集了些灰烬准备带回去给教授看看。","\n",{"->":".^.^.^.8"},null]}],"nop","\n","^之后的下山路并没有再出现什么意外情况，只是猎人们对怪影三缄其口，劝你们别声张，参加好庆典后就回去吧。","\n","ev",{"VAR?":"useM"},"/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE:Talk_001.png"},{"->":".^.^.^.17"},null]}],[{"->":".^.b"},{"b":["\n",{"#":"IMAGE:Talk_002.png"},{"->":".^.^.^.17"},null]}],"nop","\n",{"#":"CLASS: end"},"end",{"->":"ending.2"},null]}],["ev",{"VAR?":"HurtNum"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^当你攻击打偏的瞬间，你就意识到了自己的结局。","\n","^希望娜娜带着萝拉逃走了，你带着最后的祈祷，迎接自己的死亡。","\n","ev","str","^重新开始游戏","/str","/ev",{"*":".^.c-0","flg":4},{"->":"ending.2"},{"c-0":["\n",{"#":"RESTART"},"end",{"#f":5}]}]}],"nop","\n",{"#f":1}],"global decl":["ev",90,{"VAR=":"str"},60,{"VAR=":"APP"},0,{"VAR=":"x"},0,{"VAR=":"y"},0,{"VAR=":"Inf"},50,{"VAR=":"Luck"},80,{"VAR=":"DEX"},0,{"VAR=":"CON"},0,{"VAR=":"SIZ"},0,{"VAR=":"Int"},0,{"VAR=":"Pow"},0,{"VAR=":"EDU"},0,{"VAR=":"num"},0,{"VAR=":"HurtNum"},false,{"VAR=":"isShoot"},false,{"VAR=":"isCan"},"str","^劳伦斯","/str",{"VAR=":"name"},0,{"VAR=":"Sum"},false,{"VAR=":"fl"},false,{"VAR=":"useM"},"/ev","end",null],"#f":1}],"listDefs":{}};