"use strict";

const command = require('./command');
function CommandParser() {

}

CommandParser.prototype.parseRaw = function(str) {
  const obj = JSON.parse(str);
  let command;

  if(obj.event) {
    switch (obj.event) {
      case 'follow':
        command = this._parseFollow(obj);
    }
  }

  if(!command) throw new Error(`Unable to parse command from: ${str}`);
  return command;
};

CommandParser.prototype._parseFollow = function(event) {
  const target = event.source.screen_name;
  const source = event.target.screen_name;

  return new command('follow', source, target, '');
};

module.exports = new CommandParser();