"use strict";
const should = require('chai').should();

const apiConstants = require('../lib/apiConstants');

describe('API Constants', function() {
    it('has the correct direct message API value', function() {
      apiConstants.should.have.property('DIRECT_MESSAGE').equal('https://api.twitter.com/1.1/direct_messages/new.json');
    });

    it('has the correct tweet API value', function() {
      apiConstants.should.have.property('POST_TWEET').equal('https://api.twitter.com/1.1/statuses/update.json');
    });

    it('has the correct tweet API value', function() {
      apiConstants.should.have.property('FOLLOW_USER').equal('https://api.twitter.com/1.1/friendships/create.json');
    });

    it('has the correct user stream API value', function() {
      apiConstants.should.have.property('USER_STREAM').equal('https://userstream.twitter.com/1.1/user.json');
    });
});
