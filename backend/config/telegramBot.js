const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOTAPI; 
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to Beatbit! Open the Mini App using /openapp.');
});

bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Commands:\n/start - Welcome message\n/openapp - Open the Beatbit Mini App\n/profile - View your profile');
});

bot.onText(/\/openapp/, (msg) => {
    const chatId = msg.chat.id;
    const webAppUrl = 'https://beatbit.netlify.app';
    bot.sendMessage(chatId, 'Opening the Mini App...', {
        reply_markup: {
            inline_keyboard: [[{ text: 'Open App', web_app: { url: webAppUrl } }]],
        },
    });
});
