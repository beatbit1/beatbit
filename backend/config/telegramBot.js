require('dotenv').config({ path: './config/.env' });

const { Telegraf } = require("telegraf");

// Validate the TELEGRAM_BOTAPI variable
if (!process.env.TELEGRAM_BOTAPI) {
    console.error("Missing TELEGRAM_BOTAPI in .env file");
    process.exit(1);
  };
  

const bot = new Telegraf(process.env.TELEGRAM_BOTAPI);

bot.start((ctx) => {
  ctx.reply(
    `Welcome to BeatBit! Revolutionize music creation with blockchain.\n\nUse the menu below to navigate.`,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Open App", url: process.env.FRONTEND_URL }],
          [{ text: "Profile", callback_data: "profile" }],
          [{ text: "Help", callback_data: "help" }],
        ],
      },
    }
  );
});

bot.action("profile", async (ctx) => {
  const walletUrl = `${process.env.FRONTEND_URL}/profile`;
  await ctx.reply(`Click below to view your profile:`, {
    reply_markup: {
      inline_keyboard: [[{ text: "View Profile", url: walletUrl }]],
    },
  });
});

bot.action("help", (ctx) => {
  ctx.reply(
    "Need help? Here are some commands you can use:\n" +
      "/start - Start the bot\n" +
      "/profile - View your profile\n" +
      "/help - Get help\n" +
      "/openapp - Open the BeatBit app"
  );
});

bot.command("openapp", (ctx) => {
  ctx.reply(`Click the link to open the app: ${process.env.FRONTEND_URL}`);
});

bot.webhookCallback("/bot");

module.exports = bot;