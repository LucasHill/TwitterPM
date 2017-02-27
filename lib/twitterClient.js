"use strict";
const apiConstants = require('./apiConstants');
const request = require('request-promise-native');

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

TwitterClient.postTweet = function(status) {
  const params = this._assembleRequest(
    apiConstants.POST_TWEET,
    {status}
  );

  return request.post(params);
};

TwitterClient.followUser = function(screenName) {
  const params = this._assembleRequest(
    apiConstants.FOLLOW_USER,
    {screen_name: screenName, follow: true}
  );
  
  return request.post(params);
};
/**
 * Private methods, only exposed for testing
 */
TwitterClient._assembleRequest = function(url, qs) {
  const oauth = require('./oauthConfig');
  return {url, qs, oauth, json: true};
};


module.exports = TwitterClient;


