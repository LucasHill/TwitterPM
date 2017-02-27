const should = require('chai').should();
const sinon = require('sinon');

const pgpManager = require('../lib/pgpManager');

describe('PGP Manager', function() { 
  describe('#generateKeyPairForUser', function() {
    
    //Use once https://github.com/sinonjs/sinon/pull/1205 released
    // it('should call generateKey with appropriate defaults', function() {
    //   const spy = sinon.stub(pgpManager.openpgp, 'generateKey'); 
    //   pgpManager.generateKeyPairForUser('Bob');

    //   spy.calledOnce.should.be.true;
    //   spy.calledWithExactly(...);
    //   pgpManager.openpgp.generateKey.restore();
    // });

    it('should generate key pair for a user', function(done) {
      pgpManager.generateKeyPairForUser('Jim', '', 512).then((result) => {
        result.privateKeyArmored.should.contain('BEGIN PGP PRIVATE KEY BLOCK');
        result.privateKeyArmored.should.contain('END PGP PRIVATE KEY BLOCK');

        result.publicKeyArmored.should.contain('BEGIN PGP PUBLIC KEY BLOCK');
        result.publicKeyArmored.should.contain('END PGP PUBLIC KEY BLOCK');
        done();
      });
    });
  });

});