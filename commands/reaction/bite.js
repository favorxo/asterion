const reactionTemplate = require('../../utils/reactionTemplate');

const options = {
  commandName: 'bite', // command name and also endpoint
  commandDescription: 'Bite someone!',
  requiredUserMention: true,
  embededDescription: (user1, user2) => `${user1} bites ${user2}!`,
  animeUrl: 'https://api.waifu.pics/sfw/bite',
};

module.exports = reactionTemplate(options);
