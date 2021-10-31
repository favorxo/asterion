const { Client, Intents } = require('discord.js');
require('dotenv').config();

const initCommands = require('./handlers/commands');
const initEvents = require('./handlers/events');

const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

initCommands(client);
initEvents(client);

client.login(TOKEN);
