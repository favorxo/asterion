const reactionTemplate = require('../../utils/reactionTemplate');

const options = {
  commandName: 'baka', // command name and also endpoint
  commandDescription:  'Call someone baka ...or just say baka!',
  requiredUserMention: false,
  embededDescription: (user1, user2) => (user2 ? `${user1} calls ${user2} baka!`: 'baka!!'),
}

module.exports = reactionTemplate(options);
