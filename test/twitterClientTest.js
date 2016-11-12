"use strict";
const should = require('chai').should();

const twitterClient = require('../lib/twitterClient');

describe('Twitter Client', function() {
  describe('#_assembleRequest()', function() {
    it('uses the parameters correctly', function() {
      const queryObj = {key1: 'a', key2: 'b'};

      const request = twitterClient._assembleRequest('http://www.google.com', queryObj);

      request.should.have.property('url').equal('http://www.google.com');
      request.should.have.property('qs').equal('key1=a&key2=b');
    });

    it('get the oauth values from config', function() {
      const queryObj = {key1: 'a', key2: 'b'};

      const oauth = twitterClient._assembleRequest('http://www.google.com', queryObj).oauth;

      oauth.should.have.property('consumerKey').equal('consumer key!');
      oauth.should.have.property('consumerSecret').equal('consumer secret!');
      oauth.should.have.property('token').equal('the token!');
      oauth.should.have.property('tokenSecret').equal('the token secret!');
    });
  });
});
