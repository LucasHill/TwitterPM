"use strict";


const logger = require('./logger');

function KueManager(queue) {
  this.queue = queue;
}

KueManager.prototype.queueCommand = function(command) {
  this.queue.create(command.type, command).save(function(err) {
    if( !err ) logger.info(`Queued job: ${command}`);
    else logger.error(`Job queue failed with command: ${command}`);
  });
};

module.exports = KueManager;