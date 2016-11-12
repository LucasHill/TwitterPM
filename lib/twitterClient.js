"use strict";

const config = require('config');
const oauth = {
  consumerKey: config.get('Twitter.oauth.consumerKey'),
  consumerSecret: config.get('Twitter.oauth.consumerSecret'),
  token: config.get('Twitter.oauth.token'),
  tokenSecret: config.get('Twitter.oauth.tokenSecret')
};

const TwitterClient = {};

TwitterClient._assembleRequest = (url, queryObj) => {
  const queryString = require('querystring');
  const qs = queryString.stringify(queryObj);

  return {url, qs, oauth, json: true};
};


module.exports = TwitterClient;


