"use strict";

const logger = require('./logger');  

function KueManager() {
  const config = require('config');

  this.queue = require('kue').createQueue({
    prefix: 'q',
    redis: {
      host: config.get('Redis.host'),
      port: config.get('Redis.port'),
      auth: config.get('Redis.password')
    }
  });
}

KueManager.prototype.queueCommand = function(command) {
  this.queue.create(command.type, command).save(function(err) {
    if( !err ) logger.info(`Queued job: ${command}`);
    else logger.error(`Job queue failed with command: ${command}`);
  });
};

module.exports = new KueManager();