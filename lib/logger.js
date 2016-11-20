"use strict";
const bunyan = require('bunyan');

const logger = bunyan.createLogger({name: "TwitterPM"});
logger.info('Logger initialized');

module.exports = logger;