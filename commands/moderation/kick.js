const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

const command = new SlashCommandBuilder()
  .setName('kick')
  .setDescription('Kicks user');

command.addUserOption((option) =>
  option.setName('user').setDescription('user you wanna kick').setRequired(true)
);

const run = async (interaction) => {
  // checks if user has permission for that
  if (!interaction.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS))
    return interaction.reply('YOU DONT HAVE PERMISSION FOR THAT L');

  const user = interaction.options.getUser('user');

  await interaction.guild.members.kick(user.id);
  interaction.reply({ content: 'kicked successfuly', ephemeral: true });
};

module.exports = {
  command,
  run,
};
