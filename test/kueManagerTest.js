"use strict";
const sinon = require('sinon');
const Command = require('../lib/command');

const kueManager = require('../lib/kueManager');

describe('Kue Manager', function() {
    it('will queue a follow command', function() {
      const stubCreate = sinon.stub();
      const stubSave = sinon.stub();
      stubCreate.returns({save: stubSave});

      const kue = new kueManager({
        create: stubCreate  
      });

      const followCmd = new Command('follow', 'me', 'you')
      kue.queueCommand(followCmd);
      
      sinon.assert.calledOnce(stubCreate);
      sinon.assert.calledWithExactly(stubCreate, 'FOLLOW', followCmd);

      sinon.assert.calledOnce(stubSave);
    });
});
