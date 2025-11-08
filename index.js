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
          [{ text: "Boshlash 🏁" }],
          [{ text: "Menu 📄" },],
          [{ text: "Sozlamalar ⚙️" }],
          [{ text: "Mashinlar 🚗" }]
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🏁") {
    bot.sendMessage(chatId, "Salom, bu yerda siz mashinalar sotib  olishingiz mumkin", {
      caption: "salom",
      reply_markup: {
        inline_keyboard: [
          [{ text: "info", callback_data: "info" }, { text: "Rasmlar", callback_data: "photos" },],
          [{ text: "Narxi", callback_data: "price" }]

        ],
      },

    })

  } else if (text === "Mashinlar 🚗") {
    bot.sendMessage(chatId, "brendlardan birini tanlang", {
      reply_markup: {
        keyboard: [
          [{ text: "Lamborghini" }],
          [{ text: "Mercedes-Benz" }],
          [{ text: "Dodge" }],
          [{ text: "Orqaga" }],
        ]
      }
    })
  }
  else if (text === "Lamborghini") {
    bot.sendMessage(chatId, "Lamborghini modelari", {
      reply_markup: {
        keyboard: [
          [{ text: "Veneno" }],
          [{ text: "Aventador" }],
          [{ text: "Urus" }],
       [{ text: "Orqaga" }],
        ]
      }
    })
  }
    else if (text === "Mercedes-Benz") {
    bot.sendMessage(chatId, "Lamborghini modelari", {
      reply_markup: {
        keyboard: [
          [{ text: "Veneno" }],
          [{ text: "Aventador" }],
          [{ text: "Urus" }],
       [{ text: "Orqaga" }],
        ]
      }
    })
  }
  else if (text == "Menu 📄 ") {
    const kutingXabari = await bot.sendMessage(chatId, "Iltimos kuting...");

    setTimeout(function () {
      bot.deleteMessage(chatId, kutingXabari.message_id);
      bot.sendPhoto(chatId, menuPhoto, {
        caption: "Bizning menyuyimiz...",
        reply_markup: {
          keyboard: [
            [{ text: "Qizil" }, { text: "Qora" }],
            [{ text: "Yashil" }, { text: "Sariq" }],
            [{ text: "Orqaga" }],
          ],
        },
      });
    }, 1000);
  }
  else if (text === "Orqaga") {
    bot.sendMessage(chatId, "asosiy menyu:",
      {
        reply_markup: {
          keyboard: [
            [{ text: "Boshlash 🏁" }],
            [{ text: "Menu 📄" }],
            [{ text: "Sozlamalar ⚙️" }],
            [{ text: "Mashinlar 🚗" }]

          ]
        }
      }
    )
  }


});
bot.on("callback_query", function (query) {
  console.log(query);
  const data = query.data;
  const chatId = query.message.chat.id;
  bot.an
  if (data === "info ") {
    bot.sendMessage(chatId, "bu yerda mashina haqida ma'lumot olishingiz mumkin")
  }
  else if (data == "photos") {
    bot.sendPhoto(chatId, "./assets/images/lambo.jpg");
  } else if (data == "price") {
    bot.sendMessage(chatId, "175,000 dollar", {
      reply_markup: {
        inline_keyboard: [[{ text: "Sotib olish", callback_data: "buy" }]],
      },
    });
  } else if (data == "buy") {
    bot.sendMessage(chatId, "Pullarni Soliyajonga bering... Mashina unda");
  }
})

console.log("Bot ishga tushdi...");

