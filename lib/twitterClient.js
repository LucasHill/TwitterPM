"use strict";
const apiConstants = require('./apiConstants');
const request = require('request-promise-native');
const config = require('config');
const oauth = {
  consumer_key: config.get('Twitter.oauth.consumerKey'),
  consumer_secret: config.get('Twitter.oauth.consumerSecret'),
  token: config.get('Twitter.oauth.token'),
  token_secret: config.get('Twitter.oauth.tokenSecret')
};


const TwitterClient = {};
/**
 * Public Methods
 */
TwitterClient.directMessage = function(text, screenName) {
  const params = this._assembleRequest(
    apiConstants.DIRECT_MESSAGE,
    {text, screen_name: screenName}
  );

  return request.post(params);
};

/**
 * Private methods, only exposed for testing
 */
TwitterClient._assembleRequest = function(url, qs) {
  return {url, qs, oauth, json: true};
};


module.exports = TwitterClient;


