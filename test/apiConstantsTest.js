"use strict";
const should = require('chai').should();

const apiConstants = require('../lib/apiConstants');

describe('API Constants', function() {
    it('has the correct API values', function() {

      apiConstants.should.have.property('DIRECT_MESSAGE').equal('https://api.twitter.com/1.1/direct_messages/new.json');
    });
});
