const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { embedColor } = require('../../config.json');
const get = require('../../utils/get');

const catUrl = 'http://aws.random.cat/meow';

const command = new SlashCommandBuilder()
  .setName('cat')
  .setDescription('Sends cat media');

command.addSubcommand((subcommand) =>
  subcommand.setName('img').setDescription('Cat image')
);

command.addSubcommand((subcommand) =>
  subcommand.setName('gif').setDescription('Cat gif (no api for gifs yet)')
);

const embed = (url, text, avatar) =>
  new MessageEmbed()
    .setColor(embedColor)
    .setAuthor(text, avatar, url)
    .setImage(url);

const run = async (interaction) => {
  const subcommand = interaction.options.getSubcommand();
  let media;
  if (subcommand === 'img') {
    media = await get(catUrl);
  }
  // a lie, at least now
  if (subcommand === 'gif') {
    media = await get(catUrl);
  }
  return interaction.reply({
    embeds: [embed(media.file, 'cute', interaction.user.avatarURL())],
  });
};

module.exports = {
  command,
  run,
};
