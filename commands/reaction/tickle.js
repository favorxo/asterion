const reactionTemplate = require('../../utils/reactionTemplate');

const options = {
  commandName: 'tickle', // command name and also endpoint
  commandDescription:  'Tickle someone!',
  requiredUserMention: true,
  embededDescription: (user1, user2) => (user2 ? `${user1} tickles ${user2}! Hihihi`: 'baka!!'),
}

module.exports = reactionTemplate(options);
