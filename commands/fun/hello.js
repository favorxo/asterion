const { SlashCommandBuilder } = require('@discordjs/builders');

const command = new SlashCommandBuilder().setName('hello').setDescription('Says hello to you!')

const run = async (interaction) => {
  await interaction.reply(`Hello, ${interaction.user}!`);
}

module.exports = {
  command,
  run
}