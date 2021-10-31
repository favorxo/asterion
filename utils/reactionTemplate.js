const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const get = require('./get');
const { animeUrl } = require('../constants/endpoints');
const { embedColor } = require('../config.json');

const reactionTemplate = (
  commandName,
  commandDescription,
  embededDescription
) => {
  const command = new SlashCommandBuilder()
    .setName(commandName)
    .setDescription(commandDescription);

  command.addUserOption((option) =>
    option.setName('user').setDescription('Select a user').setRequired(true)
  );

  const embeded = (user1, user2, img) =>
    new MessageEmbed()
      .setColor(embedColor)
      .setDescription(embededDescription(user1, user2))
      .setImage(img);

  const run = async (interaction) => {
    const data = await get(`${animeUrl}/${commandName}`);

    interaction.reply({
      embeds: [
        embeded(
          interaction.user,
          interaction.options.getUser('user'),
          data.url
        ),
      ],
    });
  };
  return { command, run };
};

module.exports = reactionTemplate;
