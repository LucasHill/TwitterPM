"use strict";

const client = require('./lib/twitterClient.js');
const config = require('config');
const logger = require('./lib/logger');
const pgpManager = require('./lib/pgpManager');

const botQueue = require('kue').createQueue({
  prefix: 'botQueue',
  redis: {
    host: config.get('Redis.host'),
    port: config.get('Redis.port'),
    auth: config.get('Redis.password')
  }
});

const KueManager = require('./lib/kueManager');
const kue = new KueManager(botQueue);

initUserStream();
processFollowCommands();


function initUserStream() {
  const apiConstants = require('./lib/apiConstants');
  const StreamParser = require('./lib/twitterStreamParser');
  const stream = new StreamParser(apiConstants.USER_STREAM, kue);
  stream.initStream();
}

function processFollowCommands() {
  botQueue.process('FOLLOW', async function(job, done){
    logger.info(`Job ${job.id} started.`);
    const screenName = job.data.target;

    const keypair = await pgpManager.generateKeyPairForUser(screenName);
    await client.directMessage(`Thanks for the follow!\n ${keypair.publicKeyArmored}`, screenName);
    await client.followUser(screenName);
    done();
  });
}