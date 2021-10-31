const reactionTemplate = require('../../utils/reactionTemplate')

module.exports = reactionTemplate('pat','Pats desired user', (user1, user2) => `${user1} pats ${user2}! Nya~nya cute`)
