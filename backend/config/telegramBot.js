require('dotenv').config({ path: './config/.env' });

const TelegramBot = require("node-telegram-bot-api");

// Validate TELEGRAM_BOTAPI
if (!process.env.TELEGRAM_BOTAPI) {
  console.error("Error: TELEGRAM_BOTAPI is not set in the environment variables.");
  process.exit(1);
}

const botToken = process.env.TELEGRAM_BOTAPI;
const webAppUrl = process.env.FRONTEND_URL || "https://beatbit.netlify.app";

let bot;

// Check environment and set up accordingly
if (process.env.NODE_ENV === "production") {

  // Initialize bot with webhook in production
  bot = new TelegramBot(botToken, { webHook: true });
  const webhookUrl = `${process.env.BACKEND_URL}/telegram/webhook`;
  bot.setWebHook(webhookUrl);
  console.log(`Telegram bot webhook set to: ${webhookUrl}`);
} else {
  // Use polling in development
  bot = new TelegramBot(botToken, { polling: true });
  console.log("Telegram bot is running in development mode with polling...");
}

// Welcome message handler with expanded inline keyboard
// Welcome message handler
const sendWelcomeMessage = (chatId) => {
  bot.sendMessage(
    chatId,
    "Welcome to BeatBit! Revolutionize music creation with blockchain.\n\nUse the menu below to navigate.",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Start BeatBit 🎵", url: webAppUrl }],
          [{ text: "Official Channel", url: "https://t.me/BeatbitMusicBot" }],
          [{ text: "About BeatBit", callback_data: "about" }],
          [{ text: "Connect Wallet", callback_data: "connect_wallet" }],
          [{ text: "Rewards", callback_data: "rewards" }],
        ],
      },
    }
  );
};

// Bot commands and interactions
const setupBotHandlers = () => {
  // Handle /start command
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    sendWelcomeMessage(chatId);
  });

  // Handle /help command
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      "Here are some commands you can use:\n" +
        "/start - Start the bot\n" +
        "/help - Get help\n" +
        "/profile - View your profile\n" +
        "/openapp - Open the BeatBit app"
    );
  });

  // Handle /profile command
  bot.onText(/\/profile/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      `Please use this unique token to authenticate your profile: \n\n*${chatId}*`,
      { parse_mode: "Markdown" }
    );
  });

  // Handle /openapp command
  bot.onText(/\/openapp/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Click below to open the BeatBit app:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Open BeatBit App", url: webAppUrl }],
        ],
      },
    });
  });

  // Handle button callback queries
  bot.on("callback_query", (query) => {
    const chatId = query.message.chat.id;
    const responses = {
      about:
        "BeatBit is a revolutionary platform that combines music creation with blockchain technology. Explore new possibilities and join the future of music!",
      connect_wallet:
        "To connect your wallet, visit: https://beatbit.netlify.app/connect",
      rewards:
        "Rewards System: Earn points for creating music and contributing to the BeatBit ecosystem. Track your rewards and redeem them on the platform.",
    };
    bot.sendMessage(chatId, responses[query.data] || "Invalid option selected.");
  });
};

setupBotHandlers();

module.exports = bot;