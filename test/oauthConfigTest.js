"use strict";
const should = require('chai').should();

const config = require('../lib/oauthConfig');

describe('Oauth config', function() {
    it('uses the test values', function() {
      config.should.have.property('consumer_key').equal('consumer key!');
      config.should.have.property('consumer_secret').equal('consumer secret!');
      config.should.have.property('token').equal('the token!');
      config.should.have.property('token_secret').equal('the token secret!');
    });
});
