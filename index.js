import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8135005366:AAGci7qoD4qV3HgiTWKjHJCETbR6nxzsiTE"
const bot = new TelegramBot(TOKEN, {polling: true})
bot.on ("message", function(msg) {
    const chatid = msg.chat.id;
   const firstname = msg.chat.first_name
   bot.sendMessage(chatid, `salom -> ${firstname}` ,  { 
    reply_markup: {
        keyboard: [
            [{text: "boshlash 🏁"}],
            [{text: "Menyu 📄"} , {text: "sozlamlar 🛠"}]
        ],
resize_keyboard: true ,
   }

}) })

