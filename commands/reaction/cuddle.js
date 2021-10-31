const reactionTemplate = require('../../utils/reactionTemplate');

const options = {
  commandName: 'cuddle',
  commandDescription:
    'Are you also wondering why is there cuddle and hug at the same time?',
  requiredUserMention: true,
  embededDescription: (user1, user2) => `${user1} cuddles ${user2}!`,
  animeUrl: 'https://nekos.life/api/v2/img/cuddle',
};

module.exports = reactionTemplate(options);
