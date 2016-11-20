"use strict";

const config = require('config');

module.exports = {
  consumer_key: config.get('Twitter.oauth.consumerKey'),
  consumer_secret: config.get('Twitter.oauth.consumerSecret'),
  token: config.get('Twitter.oauth.token'),
  token_secret: config.get('Twitter.oauth.tokenSecret')
};
