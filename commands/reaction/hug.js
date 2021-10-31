const reactionTemplate = require('../../utils/reactionTemplate');

const options = {
  commandName: 'hug', // command name and also endpoint
  commandDescription: 'Hug whoever you want!',
  requiredUserMention: true,
  embededDescription: (user1, user2) => `${user1} hugs ${user2}!`,
};

module.exports = reactionTemplate(options);
