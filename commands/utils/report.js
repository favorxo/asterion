const { SlashCommandBuilder } = require('@discordjs/builders');
const { embedColor } = require('../../config.json');
const { MessageEmbed } = require('discord.js');

const command = new SlashCommandBuilder()
  .setName('report')
  .setDescription(
    "If you notice something not working (and in the command description it's not stated) contact me"
  );

const run = async (interaction) => {
  await interaction.reply({
    embeds: [
      new MessageEmbed()
        .setColor(embedColor)
        .setAuthor(
          'My contacts',
          'https://pfps.gg/assets/pfps/1467-giga-chad.png'
        )
        .setFields({ name: 'email', value: 'shen.lianq@gmail.com' })
        .setImage(
          'https://www.meme-arsenal.com/memes/db656298f79582531dcf50a43f3529c1.jpg'
        ),
    ],
  });
};



module.exports = {
  command,
  run,
};
