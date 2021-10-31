const logger = require('../utils/logger')

const run = (client) => {
  logger.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`In Development`);
  client.user.setStatus('online');
};

module.exports = {
  name: 'ready',
  once: true,
  run,
};
