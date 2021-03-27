const { CronJob } = require('cron');
const { logger } = require('../middleware/logger');
const cores = require('./cores');

// Every 10 minutes
const coresJob = new CronJob('*/10 * * * *', cores);

try {
  coresJob.start();
} catch (error) {
  const formatted = {
    name: 'worker',
    error: error.message,
    stack: error.stack,
  };
  logger.error(formatted);
}
