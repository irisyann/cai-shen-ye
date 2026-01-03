export interface Dialog {
  page?: number;
  text: string;
  options: DialogOption[];
}

export interface DialogOption {
  text: string;
  textTranslation?: string;
  result?: string;
  points?: number;
  nextPage: number;
}

export const dialogs = [
  {
    page: 0,
    text: "🏮 Happy Chinese New Year! I am Cai Shen Ye.",
    options: [
      {
        text: "👋 Hello Cai Shen Ye!",
        nextPage: 1
      },
    ]
  },
  {
    page: 1,
    text: "I'm here to train your CNY greeting skills to impress your aunty uncle for ANGPAOMAXXING🧧🧧🧧",
    options: [
      {
        text: "I am ready! 😎",
        nextPage: 3
      },
      {
        text: "But I don't know chinese leh 🥺",
        nextPage: 2
      }
    ]
  },
  {
    page: 2,
    text: "Sounds like skill issue but I'm nice so I'll put english translations. You ready now?",
    options: [
      {
        text: "Ok let's go!",
        nextPage: 3
      }
    ]
  },
  {
    page: 3,
    text: "🏠 You are visiting your aunty's house and you haven't seen her for a long time. Which CNY wish will you use?",
    options: [
      {
        text: "新年快乐!",
        textTranslation: "Happy New Year!",
        result: "Aunty: \"Haiya this greeting too generic, aunty hear so many times already sien 😴\"",
        points: 1,
        nextPage: 4,
      },
      {
        text: "快高长大!",
        textTranslation: "Grow taller and bigger!",
        result: "Aunty: \"Har?? You mean I am short and small la😡\"",
        points: 0,
        nextPage: 4,
      },
      {
        text: "容光焕发!",
        textTranslation: "Glow with radiance!",
        result: "Aunty: \"🥰 Wah you very sweet hor, come I give you extra angpao 🧧\"",
        points: 2,
        nextPage: 4,
      },
      {
        text: "Nothing",
        result: "Aunty: \"Haiyo so rude, never wish me one. No angpao for you 😡\"",
        points: 0,
        nextPage: 4,
      },
    ]
  },
  {
    page: 4,
    text: "Your aunty welcomes you into the house and you see your little baby nephew 👶 who just turned 10 months old. Which CNY wish will you use?",
    options: [
      {
        text: "快高长大!",
        textTranslation: "Grow taller and bigger!",
        result: "This makes sense but he can't understand you. He's just a baby 😐",
        points: 1,
        nextPage: 5,
      },
      {
        text: "四季平安!",
        textTranslation: "Peace all year round!",
        result: "The baby has no idea what you're saying, he just wants to eat and sleep 😴",
        points: 0,
        nextPage: 5,
      },
      {
        text: "笑口常开!",
        textTranslation: "Smile always!",
        result: "The baby has no idea what you're saying, he just wants to eat and sleep 😴",
        points: 0,
        nextPage: 5,
      },
      {
        text: "Nothing",
        result: "Good, because the baby is too young to understand anyway 😬",
        points: 2,
        nextPage: 5,
      },
    ]
  },
  {
    page: 5,
    text: "You meet your uncle who is the CEO of a huge company and is very rich. Which CNY wish will you use?",
    options: [
      {
        text: "生意兴隆!",
        textTranslation: "Prosper in business!",
        result: "Uncle: \"Haiya hear this so many times already, why you so boring one 🥱\"",
        points: 1,
        nextPage: 6,
      },
      {
        text: "财源滚滚!",
        textTranslation: "Rolling in wealth!",
        result: "Uncle: \"Cheh you only see me for my money is it 🙄😤\"",
        points: 0,
        nextPage: 6,
      },
      {
        text: "身体健康!",
        textTranslation: "Good health!",
        result: "Uncle: \"🥹 Wah... you are the only one who cares about my health. Lai uncle give you BIG angpao 🧧\"",
        points: 2,
        nextPage: 6,
      },
      {
        text: "Nothing",
        result: "Uncle: \"Haiyo so rude, never wish me one. No angpao for you 😡\"",
        points: 0,
        nextPage: 6,
      },
    ]
  },
  {
    "page": 6,
    "text": "🚨 EMERGENCY! The Nosy Aunty™️ corners you. She asks: 'Dating already or not? When getting married?' How do you distract her?!?!",
    "options": [
      {
        "text": "心想事成!",
        "textTranslation": "May all your wishes come true!",
        "result": "Aunty: \"My wish is for you to get married leh. So you agreeing is it? 😏\"",
        "points": 1,
        "nextPage": 7
      },
      {
        "text": "早生贵子!",
        "textTranslation": "Have a baby soon!",
        "result": "Aunty: \"CHOI! You crazy ah, I menopause long time ago already lor 🤬\"",
        "points": 0,
        "nextPage": 7
      },
      {
        "text": "青春永驻!",
        "textTranslation": "Stay young forever!",
        "result": "Aunty: \"Aiyo, where got young... but I did use new facial cream today. Hehe you so sweet one! 🥰 (She forgets to ask about your partner)\"",
        "points": 2,
        "nextPage": 7
      },
      {
        "text": "Nothing",
        "result": "You pretend to choke on a pineapple tart. Aunty pats your back but continues asking 😵",
        "points": 0,
        "nextPage": 7
      }
    ]
  },
  {
    "page": 7,
    "text": "Your annoying cousin who just came back from overseas and studies Engineering is flexing his grades. What do you say to shut him up politely?",
    "options": [
      {
        "text": "学业进步!",
        "textTranslation": "Academic progress!",
        "result": "Cousin: \"Bro I already Dean's list every semester. How much more progress you want 🙄\"",
        "points": 0,
        "nextPage": 8
      },
      {
        "text": "步步高升!",
        "textTranslation": "Rise step by step!",
        "result": "Cousin: \"Thanks bro. Maybe one day you can be on my level also 😏\"",
        "points": 1,
        "nextPage": 8
      },
      {
        "text": "前程似锦!",
        "textTranslation": "Wishing you a bright future!",
        "result": "Cousin: \"Wah I didn't know your Chinese standard so high one. Finally, someone on my intellectual level. 🍷\"",
        "points": 2,
        "nextPage": 8
      },
      {
        "text": "恭喜发财!",
        "textTranslation": "Get Rich!",
        "result": "Cousin: \"So basic bro. That's for ordinary people 🥱\"",
        "points": 0,
        "nextPage": 8
      }
    ]
  },
  {
    "page": 8,
    "text": "Finally you approach your 90-year-old Popo. This is the final boss. Choose carefully.",
    "options": [
      {
        text: "步步高升!",
        textTranslation: "Rise higher step by step!",
        result: "Grandma: \"Rise go where? Heaven is it? 💀\"",
        points: 0,
        nextPage: 9,
      },
      {
        "text": "寿比南山!",
        "textTranslation": "Longevity as high as the Southern Mountain!",
        "result": "Grandma: \"So pandai ah you. Lai take this extra thick angpao 🧧\"",
        "points": 2,
        "nextPage": 9
      },
      {
        "text": "笑口常开!",
        "textTranslation": "Smile always!",
        "result": "Grandma: \"I no teeth how to smile? You make fun of me ah? 😬\"",
        "points": 1,
        "nextPage": 9
      },
      {
        "text": "Nothing",
        "result": "Grandma: \"You forgot who I am is it? Why so quiet? 😢\"",
        "points": 0,
        "nextPage": 9
      }
    ]
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/