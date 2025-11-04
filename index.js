import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8135005366:AAHH_MJ8GX5DtPaMcRmQftnsYvSpsnnwATY";
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  const menuPhoto = "download.jpg";

  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstname}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 😜" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🔥") {
    // bot.sendMessage(chatId, "Salom, sizga qanday yordam bera olaman?");
    bot.sendPhoto(chatId, menuPhoto, {
        caption: `Двигатель: 4,0-литровый V8 с двойным турбонаддувом.
Мощность: До 666 л.с. у модели Performante.
Максимальная скорость: 305–306 км/ч.
Разгон 0–100 км/ч: 3,3–3,6 секунды (в зависимости от модели).
Привод: Полный.`,
reply_markup: {
    inline_keyboard: [
        [{text: "info" , callback_data: "info"}  ],
          
    ],
},
reply_markup: {
    keyboard: [
     [{text: "orqaga"}]
    ], 
    resize_keyboard:true,
}
    })

  } else if (text == "Menu 😜") {
    const kutingXabari = await bot.sendMessage(chatId, "Iltimos kuting...");

    setTimeout(function () {
      bot.deleteMessage(chatId, kutingXabari.message_id);
      bot.sendPhoto(chatId, menuPhoto, {
        caption: "Bizning menyuyimiz...",
        reply_markup: {
          keyboard: [
            [{ text: "Manti" }, { text: "Karam" }],
            [{ text: "Shashlik" }, { text: "Hotdog" }],
            [{text: "orqaga"}],
          ],
        },
      });
    }, 1000);
  }
  else if (text === "orqaga") {
    bot.sendMessage(chatId, "asosiy menyu:",
        {
            reply_markup: {
                keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 😜" }, { text: "Sozlamalar ⚙️" }],

                ]
            }
        }
    )
  }


});

console.log("Bot ishga tushdi...");

