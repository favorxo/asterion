const reactionTemplate = require('../../utils/reactionTemplate');

const options = {
  commandName: 'kiss',
  commandDescription: 'This one a bit lewd... Kiss whoever you want!',
  requiredUserMention: true,
  embededDescription: (user1, user2) => `${user1} kisses ${user2}! C-cute...`,
  animeUrl: 'https://nekos.life/api/v2/img/kiss',
};

module.exports = reactionTemplate(options);
