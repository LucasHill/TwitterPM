"use strict";
const should = require('chai').should();

const parser = require('../lib/commandParser');

describe('Command Parser', function() {
    it('can parse a follow command', function() {
      const followEvent = require('./resources/sampleFollow.json');
      let command = parser.parseRaw(JSON.stringify(followEvent));

      command.should.have.property('type').equal('FOLLOW');
      command.should.have.property('source').equal('TwitPGPDev');
      command.should.have.property('target').equal('wizang');
      command.should.have.property('info').equal('');
    });

    it('should throw error if unable to parse', function() {
      const followEvent = require('./resources/sampleFollow.json');
      
      (function(){
        parser.parseRaw('{}');
      }).should.throw(Error);
     
    });
});
