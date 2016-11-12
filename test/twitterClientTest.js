"use strict";
/*jshint expr: true*/

const should = require('chai').should();
const nock = require('nock');

const twitterClient = require('../lib/twitterClient');

describe('Twitter Client', function() {
  describe('#_assembleRequest()', function() {
    it('uses the parameters correctly', function() {
      const queryObj = {key1: 'a', key2: 'b'};

      const request = twitterClient._assembleRequest('http://www.google.com', queryObj);

      request.should.have.property('url').equal('http://www.google.com');
      request.should.have.property('qs').equal(queryObj);
    });

    it('get the oauth values from config', function() {
      const queryObj = {key1: 'a', key2: 'b'};

      const oauth = twitterClient._assembleRequest('http://www.google.com', queryObj).oauth;

      oauth.should.have.property('consumer_key').equal('consumer key!');
      oauth.should.have.property('consumer_secret').equal('consumer secret!');
      oauth.should.have.property('token').equal('the token!');
      oauth.should.have.property('token_secret').equal('the token secret!');
    });
  });

  describe('#directMessage', function() {
    it('sends the correct request', function(done) {
      nock('https://api.twitter.com')
        .post('/1.1/direct_messages/new.json')
        .query(true)
        .reply(201, function(url, requestBody) {
          url.should.include('?text=test%20message&screen_name=foobar');
          requestBody.should.be.empty;
          done();
        });
      
      twitterClient.directMessage('test message', 'foobar');
    });
  });
});
