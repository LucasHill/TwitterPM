"use strict";

const oauth = require('./oauthConfig');
const map = require('through2-map');
const filter = require('through2-filter');
const spy = require('through2-spy');
const split = require('split2');
const logger = require('./logger');  

function TwitterStreamParser(url) {
  this.streamUrl = url;
}

TwitterStreamParser.prototype._parseBotCommands = map({wantStrings:true}, function(str) {
  const commandParser = require('./commandParser');
  let command;
  try {
    command = commandParser.parseRaw(str);
  } catch (error) {
    logger.error(error);
  }
  return JSON.stringify(command);
});

TwitterStreamParser.prototype._kueSpy = spy({wantStrings:true}, function(str) {
  const kueManager = require('./kueManager');

  try {
    const command = JSON.parse(str);
    kueManager.queueCommand(command);
  } catch (error) {
    logger.error(error);
  }
});

TwitterStreamParser.prototype._heartbeatFilter = filter({wantStrings: true}, function (str) {
  return str.length > 2;
});

TwitterStreamParser.prototype.initStream = function() {
  const request = require('request');
  
  return request.get({url: this.streamUrl, oauth})
    .pipe(split())
    .pipe(this._heartbeatFilter)
    .pipe(this._parseBotCommands)
    .pipe(this._kueSpy);
};


module.exports = TwitterStreamParser;
