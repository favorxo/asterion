const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const get = require('./get');
const { animeUrl } = require('../constants/endpoints');
const { embedColor } = require('../config.json');

const reactionTemplate = (props) => {
  const command = new SlashCommandBuilder()
    .setName(props.commandName)
    .setDescription(props.commandDescription);

  command.addUserOption((option) =>
    option.setName('user').setDescription('Select a user').setRequired(props.requiredUserMention)
  );

  const embeded = (user1, user2, img) =>
    new MessageEmbed()
      .setColor(embedColor)
      .setDescription(props.embededDescription(user1, user2))
      .setImage(img);

  const run = async (interaction) => {
    const data = await get(`${animeUrl}/${props.commandName}`);

    interaction.reply({
      embeds: [
        embeded(
          interaction.user,
          interaction.options.getUser('user') || null,
          data.url
        ),
      ],
    });
  };
  return { command, run };
};

module.exports = reactionTemplate;
