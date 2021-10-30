const { Client, Intents } = require('discord.js');
require('dotenv').config();
const fs = require('fs');
const logger = require('./utils/logger');
const initCommands = require('./handlers/commands');

const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

initCommands(client);

client.on('ready', () => {
  logger.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`In Development`);
  client.user.setStatus('online');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;
  
  const command = client.commands.get(interaction.commandName);
  
  if (!command) return;
  try {
    await command.run(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
});

client.login(TOKEN);
