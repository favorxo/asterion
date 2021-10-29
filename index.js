const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();

const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

bot.on('ready', () => {
  // Meta data of bot setup
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity(`In Development`);
  bot.user.setStatus('online');
});

bot.on('messageCreate', (message) => {
  if (message.author.bot) return;
  message.reply('ye');
});

bot.login(process.env.TOKEN);
