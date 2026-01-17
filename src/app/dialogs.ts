export interface Dialog {
  page?: number;
  text: string;
  textTranslation?: string;
  extraText?: string;
  video?: string;
  options: DialogOption[];
}

export interface DialogOption {
  text: string;
  textTranslation?: string;
  result?: string;
  resultTranslation?: string;
  money?: number;
  nextPage: number;
}

export const dialogs = [
  {
    page: 0,
    text: "🏮 新年快乐！我是财神爷。",
    options: [
      {
        text: "你好财神爷！",
        nextPage: 1
      },
      {
        text: "Huh? I don't know Chinese :(",
        nextPage: 2
      },
    ]
  },
  {
    page: 1,
    text: "我来训练你的新年祝福技能，让你的叔叔阿姨刮目相看，红包拿到手软！🧧🧧🧧",
    textTranslation: "I'm here to train your CNY greeting skills to impress your aunty uncle for ANGPAOMAXXING!🧧🧧🧧",
    options: [
      {
        text: "我准备好了！😎",
        textTranslation: "I am ready! 😎",
        nextPage: 3
      },
    ]
  },
  {
    page: 2,
    text: "Aiya don't know Chinese ah? No problem! I hereby appoint... JOHN CENA as your official translator! 🎺",
    extraText: "John Cena: 🍦🍦🍦",
    video: "./assets/johncena.mp4",
    options: [
      {
        text: "Why is the ice cream floating",
        nextPage: 3
      }
    ]
  },
  {
    page: 3,
    text: "🏠 你去阿姨家拜年，已经很久没见到她了。你要用哪个新年祝福？",
    textTranslation: "🏠 You are visiting your aunty's house and you haven't seen her for a long time. Which CNY wish will you use?",
    options: [
      {
        text: "新年快乐!",
        textTranslation: "Happy New Year!",
        result: "阿姨：\"哎呀又是这句话，阿姨听到sien liao 😴\"",
        resultTranslation: "Aunty: \"Haiya this greeting again ah, aunty hear so many times already sien 😴\"",
        money: 50,
        nextPage: 4,
      },
      {
        text: "快高长大!",
        textTranslation: "Grow taller and bigger!",
        result: "阿姨：\"什么？？你说阿姨矮小是吗😡\"",
        resultTranslation: "Aunty: \"Har?? You mean I am short and small la😡\"",
        money: 0,
        nextPage: 4,
      },
      {
        text: "容光焕发!",
        textTranslation: "Glow with radiance!",
        result: "阿姨：\"🥰 哇你很会讲话哦，阿姨一个大红包 🧧\"",
        resultTranslation: "Aunty: \"🥰 Wah you very clever hor, aunty give you extra big angpao 🧧\"",
        money: 200,
        nextPage: 4,
      },
      {
        text: "什么都不说",
        textTranslation: "Nothing",
        result: "阿姨：\"哎哟这么没礼貌。没有红包给你 😡\"",
        resultTranslation: "Aunty: \"Haiyo so rude. No angpao for you 😡\"",
        money: 0,
        nextPage: 4,
      },
    ]
  },
  {
    page: 4,
    text: "👶 阿姨把你迎进屋里，你看到了才十个月大的小侄子。你要用哪个新年祝福？",
    textTranslation: "👶 Your aunty welcomes you into the house and you see your little baby nephew who just turned 10 months old. Which CNY wish will you use?",
    options: [
      {
        text: "快高长大!",
        textTranslation: "Grow taller and bigger!",
        result: "这句话有道理，但他听不懂。他只是个宝宝 😐",
        resultTranslation: "This makes sense but he can't understand you. He's just a baby 😐",
        money: 50,
        nextPage: 5,
      },
      {
        text: "四季平安!",
        textTranslation: "Peace all year round!",
        result: "宝宝完全不知道你在说什么，他只想吃和睡 😴",
        resultTranslation: "The baby has no idea what you're saying, he just wants to eat and sleep 😴",
        money: 0,
        nextPage: 5,
      },
      {
        text: "笑口常开!",
        textTranslation: "Smile always!",
        result: "宝宝完全不知道你在说什么，他只想吃和睡 😴",
        resultTranslation: "The baby has no idea what you're saying, he just wants to eat and sleep 😴",
        money: 0,
        nextPage: 5,
      },
      {
        text: "什么都不说",
        textTranslation: "Nothing",
        result: "很好，反正宝宝太小听不懂 😬",
        resultTranslation: "Good, because the baby is too young to understand anyway 😬",
        money: 200,
        nextPage: 5,
      },
    ]
  },
  {
    page: 5,
    text: "💼 你遇到了你的叔叔，他是一家大公司的CEO，非常有钱。你要用哪个新年祝福？",
    textTranslation: "💼 You meet your uncle who is the CEO of a huge company and is very rich. Which CNY wish will you use?",
    options: [
      {
        text: "生意兴隆!",
        textTranslation: "Prosper in business!",
        result: "叔叔：*冷淡地握握手, 继续打麻将*",
        resultTranslation: "Uncle: *shakes your hand nonchalantly and continues playing mahjong*",
        money: 50,
        nextPage: 6,
      },
      {
        text: "财源滚滚!",
        textTranslation: "Roll in wealth!",
        result: "叔叔：\"不用祝这个啦，叔叔钱已经很多了 🙄😤\"",
        resultTranslation: "Uncle: \"No need wish this, I already have a lot of money 🙄😤\"",
        money: 0,
        nextPage: 6,
      },
      {
        text: "身体健康!",
        textTranslation: "Have good health!",
        result: "叔叔：\"🥹 哇...只有你关心叔叔的健康。来叔叔给你大红包 🧧\"",
        resultTranslation: "Uncle: \"🥹 Wah... you are the only one who cares about my health. Lai uncle give you BIG angpao 🧧\"",
        money: 200,
        nextPage: 6,
      },
      {
        text: "什么都不说",
        textTranslation: "Nothing",
        result: "叔叔：\"哎哟这么没礼貌，都不祝我一下。没有红包给你 😡\"",
        resultTranslation: "Uncle: \"Haiyo so rude, never wish me one. No angpao for you 😡\"",
        money: 0,
        nextPage: 6,
      },
    ]
  },
  {
    "page": 6,
    "text": "🚨 八卦阿姨把你逼到角落。她问：\"有对象没？什么时候结婚？\"你怎样转移她的注意力？",
    "textTranslation": "🚨 CAUTION! The Nosy Aunty™️ corners you. She asks: \"Dating already or not? When getting married?\" How do you distract her?!?!",
    "options": [
      {
        "text": "心想事成!",
        "textTranslation": "May all your wishes come true!",
        "result": "阿姨：\"我的愿望就是你赶快结婚咯。那什么时候？ 😏\"",
        "resultTranslation": "Aunty: \"My wish is for you to get married leh. So when is that happening? 😏\"",
        "money": 50,
        "nextPage": 7
      },
      {
        "text": "早生贵子!",
        "textTranslation": "Have a baby soon!",
        "result": "阿姨：\"呸！你sot ah，阿姨早就更年期了 🤬\"",
        "resultTranslation": "Aunty: \"CHOI! You crazy ah, I menopause long time ago already lor 🤬\"",
        "money": 0,
        "nextPage": 7
      },
      {
        "text": "青春永驻!",
        "textTranslation": "Stay young forever!",
        "result": "阿姨：\"哎哟哪里年轻...不过阿姨今天有用新的面霜。嘻嘻你好甜哦 🥰（她忘记问你的对象了）\"",
        "resultTranslation": "Aunty: \"Aiyo, where got young... but I got use this new facial cream today. Hehe you so sweet one 🥰 (She forgets to ask about your partner)\"",
        "money": 200,
        "nextPage": 7
      },
      {
        "text": "什么都不说",
        "textTranslation": "Nothing",
        "result": "你假装被凤梨酥噎到。阿姨拍拍你的背但还是继续问 😵",
        "resultTranslation": "You pretend to choke on a pineapple tart. Aunty pats your back but continues asking 😵",
        "money": 0,
        "nextPage": 7
      }
    ]
  },
  {
    "page": 7,
    "text": "🤓 你烦人的表哥刚从海外回来，在炫耀他学工程的成绩。你要怎样礼貌地让他闭嘴？",
    "textTranslation": "🤓 Your annoying cousin who just came back from overseas and studies Engineering is flexing his grades. What do you say to shut him up politely?",
    "options": [
      {
        "text": "学业进步!",
        "textTranslation": "Wishing you academic progression!",
        "result": "表哥：\"我每个学期都上院长嘉许名单。你还要我进步多少 🙄\"",
        "resultTranslation": "Cousin: \"I'm already on the Dean's list every semester. How much more progress you want 🙄\"",
        "money": 0,
        "nextPage": 8
      },
      {
        "text": "步步高升!",
        "textTranslation": "Rise step by step!",
        "result": "表哥：\"谢啦兄弟。也许有一天你也能升到我的水平 😏\"",
        "resultTranslation": "Cousin: \"Thanks. Maybe one day you can rise to my level also 😏\"",
        "money": 50,
        "nextPage": 8
      },
      {
        "text": "前程似锦!",
        "textTranslation": "Wishing you a bright future!",
        "result": "表哥：\"哇我原来你的中文水平这么高。终于有人跟我一样厉害 🍷\"",
        "resultTranslation": "Cousin: \"Wah I didn't know your Chinese standard so high one. Finally someone on my intellectual level. 🍷\"",
        "money": 200,
        "nextPage": 8
      },
      {
        "text": "恭喜发财!",
        "textTranslation": "Get rich!",
        "result": "表哥：\"有点太基本了吧 🥱\"",
        "resultTranslation": "Cousin: \"Kinda basic bro 🥱\"",
        "money": 0,
        "nextPage": 8
      }
    ]
  },
  {
    "page": 8,
    "text": "👵 终于轮到你90岁的婆婆了。这是最后一关，要小心选择！",
    "textTranslation": "👵 Finally you approach your 90-year-old Popo. This is the final boss. Choose carefully.",
    "options": [
      {
        text: "步步高升!",
        textTranslation: "Rise higher step by step!",
        result: "婆婆：\"升去哪里？你要我快点上天堂啊？ 💀\"",
        resultTranslation: "Grandma: \"Rise go where? You want me go heaven faster ah? 💀\"",
        money: 0,
        nextPage: 9,
      },
      {
        "text": "寿比南山!",
        "textTranslation": "Longevity as high as the Southern Mountain!",
        "result": "婆婆：\"哇你很聪明哦。来拿这个大红包 🧧\"",
        "resultTranslation": "Grandma: \"So pandai ah you. Lai take this extra thick angpao 🧧\"",
        "money": 200,
        "nextPage": 9
      },
      {
        "text": "笑口常开!",
        "textTranslation": "Smile always!",
        "result": "婆婆：\"Hello 我没有牙齿怎么笑？\"",
        "resultTranslation": "Grandma: \"Hello I no teeth how to smile?\"",
        "money": 50,
        "nextPage": 9
      },
      {
        "text": "什么都不说",
        "textTranslation": "Nothing",
        "result": "婆婆：\"没大没小 😡 没有红包给你\"",
        "resultTranslation": "Grandma: \"没大没小 (so disrespectful) 😡 No angpao for you\"",
        "money": 0,
        "nextPage": 9
      }
    ]
  }
];
