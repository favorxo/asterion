const reactionTemplate = require('../../utils/reactionTemplate');

const options = {
  commandName: 'slap',
  commandDescription: 'Slap whoever you want',
  requiredUserMention: true,
  embededDescription: (user1, user2) => `${user1} slaps ${user2}! Ouch!`,
  animeUrl: 'https://nekos.life/api/v2/img/slap',
};

module.exports = reactionTemplate(options);
