"use strict";
const should = require('chai').should();

const command = require('../lib/command');

describe('Command', function() {
    it('can create a follow command', function() {
      const follow = new command('follow', 'user1', 'user2', 'test');
      follow.should.have.property('type').equal('FOLLOW');
      follow.should.have.property('source').equal('user1');
      follow.should.have.property('target').equal('user2');
      follow.should.have.property('info').equal('test');
    });

    it('throws errors for invalid command types', function() {
      (function() {
        new command('fllow', 'test', 'test', 'test');
      }).should.throw(Error);

      (function() {
        new command('', 'test', 'test', 'test');
      }).should.throw(Error);
    });

    it('throws error for no source specified', function() {
      (function() {
        new command('follow', '', 'test', 'test');
      }).should.throw(Error);
    });

    it('throws error for no target specified', function() {
      (function() {
        new command('follow', 'test', '', 'test');
      }).should.throw(Error);
    });

    it('allows info to not be specified specified', function() {
      (function() {
        new command('follow', 'test', 'test', '');
      }).should.not.throw(Error);
    });
});
