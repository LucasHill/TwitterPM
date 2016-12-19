"use strict";
const should = require('chai').should();

const logger = require('../lib/logger');
const testConsole = require('test-console').stdout;

describe('Logger', function() {
    it('has the correct properties', function() {
      logger.should.have.property('info');
      logger.should.have.property('warn');
      logger.should.have.property('error');
      logger.should.have.property('fatal');
      logger.should.have.property('debug');
      logger.should.have.property('trace');
    });

    it('can log a simple message', function() {
      const log = testConsole.inspectSync(function() {
        logger.info('testing');
      });
      
      log.should.have.lengthOf(1);
      const parsed = JSON.parse(log[0]);

      parsed.should.have.property('msg').equal('testing');
      parsed.should.have.property('name').equal('TwitterPM');
      parsed.should.have.property('level').equal(30);
    });
});
