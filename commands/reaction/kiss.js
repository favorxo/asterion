const reactionTemplate = require('../../utils/reactionTemplate');

const options = {
  commandName: 'kiss', // command name and also endpoint
  commandDescription:  'This one a bit lewd... Kiss whoever you want!',
  requiredUserMention: true,
  embededDescription: (user1, user2) => (`${user1} kisses ${user2}! C-cute...`),
}

module.exports = reactionTemplate(options);
