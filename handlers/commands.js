const { readdirSync } = require('fs');
const { Collection } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('../config.json');
const logger = require('../utils/logger');
const TOKEN = process.env.TOKEN;

const deploy = (client) => {
  client.commands = new Collection();
  const commonFolder = readdirSync('./commands');
  const commands = [];
  for (const folder of commonFolder) {
    const commandsFolder = readdirSync(`./commands/${folder}/`).filter((file) =>
      file.endsWith('.js')
    );
    for (const fileName of commandsFolder) {
      const file = require(`../commands/${folder}/${fileName}`);
      client.commands.set(file.command.name, file);
      commands.push(file.command.toJSON());
    }
  }
  const rest = new REST({ version: '9' }).setToken(TOKEN);

  rest
    .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => logger.log('Successfully registered application commands.'))
    .catch(logger.error);
};

module.exports = deploy;
