const reactionTemplate = require('../../utils/reactionTemplate');

const options = {
  commandName: 'pat',
  commandDescription: 'Pats desired user',
  requiredUserMention: true,
  embededDescription: (user1, user2) => `${user1} pats ${user2}! Nya~nya cute`,
  animeUrl: 'https://nekos.life/api/v2/img/pat',
};

module.exports = reactionTemplate(options);
