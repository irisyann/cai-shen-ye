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
    text: "🏮 Happy Chinese New Year! My name is Cai Shen Ye.",
    options: [
      {
        text: "👋 Hello Cai Shen Ye!",
        nextPage: 1
      },
    ]
  },
  {
    page: 1,
    text: "I am here to help you train your CNY greeting skills to impress all your aunty uncle. 🪭",
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
    text: "Haiya you dunno chinese ah, then learn lo 🙄 Ok la I put translation for you on each chinese phrase. You ready now?",
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
        text: "容（龙）光焕发!",
        textTranslation: "Glow with radiance!",
        result: "Aunty: \"🥰 Wah you very sweet hor, come I give you extra angbao 🧧\"",
        points: 2,
        nextPage: 4,
      },
      {
        text: "Nothing",
        result: "Aunty: \"Haiyo so rude, never wish me one. No angbao for you 😡\"",
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
        result: "Uncle: \"Cheh you only see me for my money is it 😤\"",
        points: 0,
        nextPage: 6,
      },
      {
        text: "身体健康!",
        textTranslation: "Good health!",
        result: "Uncle: \"🥹 Wah... you are the only one who cares about my health. Lai uncle you a big angbao 🧧\"",
        points: 2,
        nextPage: 6,
      },
      {
        text: "Nothing",
        result: "Uncle: \"Haiyo so rude, never wish me one. No angbao for you 😡\"",
        points: 0,
        nextPage: 6,
      },
    ]
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/