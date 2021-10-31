const { SlashCommandBuilder } = require('@discordjs/builders');
const { embedColor } = require('../../config.json');
const { MessageEmbed } = require('discord.js');

// created for fun, dont think about this seriously
const command = new SlashCommandBuilder()
  .setName('hail')
  .setDescription('Hails the Great leader!');

const run = async (interaction) => {
  await interaction.reply({
    embeds: [
      new MessageEmbed()
        .setColor(embedColor)
        .setAuthor(
          'ALL HAILS FAVORXO THE GREATEST CHAMPION GIGA CHAD WIZARD MEGA WARLOCK AND WINNER OF ALL GAMES',
          'https://pfps.gg/assets/pfps/1467-giga-chad.png'
        )
        .setImage('https://i.imgur.com/ADBE71W.jpg')
        .setFooter(
          'peaky blinders 10/10',
          'https://pfps.gg/assets/pfps/1467-giga-chad.png'
        ),
    ],
  });
};

module.exports = {
  command,
  run,
};
