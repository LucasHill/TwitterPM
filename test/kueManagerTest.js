"use strict";
const should = require('chai').should();

const kue = require('../lib/kueManager');
const queue = kue.queue;

const command = require('../lib/command');

// const testConsole = require('test-console').stdout;

before(function() {
  queue.testMode.enter();
});

afterEach(function() {
  queue.testMode.clear();
});

after(function() {
  queue.testMode.exit();
});

describe('Kue Manager', function() {
    it('can queue a follow command', function() {
      kue.queueCommand(new command('follow', 'me', 'you'));
      const jobs = queue.testMode.jobs;
      jobs.length.should.equal(1);
      jobs[0].type.should.equal('FOLLOW');
      jobs[0].data.type.should.equal('FOLLOW');
      jobs[0].data.source.should.equal('me');
      jobs[0].data.target.should.equal('you');
    });

    it('can queue multiple commands', function() {
      kue.queueCommand(new command('follow', 'me', 'you'));
      kue.queueCommand(new command('follow', 'me', 'that guy'));
      queue.testMode.jobs.length.should.equal(2);
    });
});
