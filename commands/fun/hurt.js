const { SlashCommandBuilder } = require('@discordjs/builders');

const command = new SlashCommandBuilder().setName('hurt').setDescription('Hurts whoever you want!')
command.addStringOption((option) => option.setName('user').setDescription('The user you want to hurt').setRequired(true));

const run = async (interaction) => {
  await interaction.reply(`I PUNCH YOU IN THE FACE, ${interaction.options.getString('user')}!`);
}

module.exports = {
  command,
  run
}