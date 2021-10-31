const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions } = require('discord.js');

const command = new SlashCommandBuilder()
  .setName('poll')
  .setDescription('Create poll !!!DOESNT WORK NOW!!!');

command.addStringOption((option) =>
  option
    .setName('question')
    .setDescription('The question you ask')
    .setRequired(true)
);

command.addIntegerOption((option) =>
  option
    .setName('minutes')
    .setDescription('Sets minutes for poll (default is 1 minute)')
);

const run = async (interaction) => {
  // checks if user has permission for that
  if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES))
    return;
  const message = await interaction.reply({
    content: interaction.options.getString('question'),
    fetchReply: true,
  });
  await message.react('🟢');
  await message.react('🔴');

  const filter = (reaction, user) => {
    return (
      ['🟢', '🔴'].includes(reaction.emoji.name) &&
      user.id === interaction.user.id
    );
  };
  try {
    const collected = await message.awaitReactions({
      filter,
      time: 3000,
      errors: ['time'],
    });
    const reaction = collected.first();
    console.log(reaction)
    if (reaction.emoji.name === '🟢') {
      reaction.reply({ content: 'You reacted with a YES.', ephemeral: true });
    } else {
      reaction.reply({ content: 'You reacted with a NO.', ephemeral: true });
    }
  } catch (e) {
    console.log(e)
    message.reply({
      content: 'You reacted with neither YES, nor NO.',
      ephemeral: true,
    });
  }
};

module.exports = {
  command,
  run,
};
