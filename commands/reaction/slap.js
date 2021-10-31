const reactionTemplate = require('../../utils/reactionTemplate');

const options = {
  commandName: 'slap',
  commandDescription: 'Slap whoever you want',
  requiredUserMention: true,
  embededDescription: (user1, user2) => (`${user1} slaps ${user2}! Ouch!`),
}

module.exports = reactionTemplate(options);
