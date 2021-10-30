const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

const command = new SlashCommandBuilder()
  .setName('nuke')
  .setDescription('Deletes all messages from current channel');

const run = async (interaction) => {
  // checks if user has permission for that
  if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES))
    return;
  let fetched;

  // deletes at max 100 at once cuz discord bad
  do {
    fetched = await interaction.channel.messages.fetch({ limit: 100 });
    try {
      interaction.channel.bulkDelete(fetched);
    } catch {
      return interaction.reply({
        ephemeral: true,
        content: 'Something went wrong!',
      });
    }
  } while (fetched.size >= 2);
  interaction.reply({
    ephemeral: true,
    content: 'Successfuly nuked the channel!',
  });
};

module.exports = {
  command,
  run,
};
