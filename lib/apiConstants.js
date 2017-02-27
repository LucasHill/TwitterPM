"use strict";
const restBaseURL = 'https://api.twitter.com/1.1';
const streamBaseURL = 'https://userstream.twitter.com/1.1';

module.exports = {
  DIRECT_MESSAGE: `${restBaseURL}/direct_messages/new.json`,
  POST_TWEET: `${restBaseURL}/statuses/update.json`,
  FOLLOW_USER: `${restBaseURL}/friendships/create.json`,
  USER_STREAM: `${streamBaseURL}/user.json`,
};