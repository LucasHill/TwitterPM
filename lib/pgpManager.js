"use strict";

function PGPManager() {
  const openpgp = require('openpgp');
  openpgp.initWorker({path:'openpgp.worker.js'});
  openpgp.config.aead_protect = true;

  this.openpgp = openpgp;
}

PGPManager.prototype.generateKeyPairForUser = function(user, passphrase = '', numBits = 2048) {

  var options = {
    userIds: [{name:user}],
    numBits: numBits,                                           
    passphrase: passphrase        
  };

  return this.openpgp.generateKey(options);
};

module.exports = new PGPManager();