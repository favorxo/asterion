const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

const command = new SlashCommandBuilder()
  .setName('nuke')
  .setDescription('Deletes all messages from current channel');

const run = async (interaction) => {
  // checks if user has permission for that
  if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS))
    return;

  await interaction.channel.clone();
  try {
    await interaction.channel.delete();
  } catch {
    return interaction.reply({
      ephemeral: true,
      content: 'Something went wrong!',
    });
  }
};

module.exports = {
  command,
  run,
};
