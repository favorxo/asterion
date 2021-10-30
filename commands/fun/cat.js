const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

const command = new SlashCommandBuilder()
  .setName('cat')
  .setDescription('Sends cat media');

command.addSubcommand((subcommand) =>
  subcommand.setName('img').setDescription('Cat image')
);

command.addSubcommand((subcommand) =>
  subcommand.setName('gif').setDescription('Cat gif')
);

const embed = (url, text, avatar) =>
  new MessageEmbed()
    .setColor('#0099ff')
    .setAuthor(text, avatar, url)
    .setImage(url);

const getCatMedia = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    return e;
  }
};
const run = async (interaction) => {
  const subcommand = interaction.options.getSubcommand();
  let media;
  if (subcommand === 'img') {
    media = await getCatMedia('http://aws.random.cat/meow');
  }
  // a lie, at least now
  if (subcommand === 'gif') {
    media = await getCatMedia('http://aws.random.cat/meow');
  }
  return interaction.reply({
    embeds: [embed(media.file, 'cute', interaction.user.avatarURL())],
  });
};

module.exports = {
  command,
  run,
};
