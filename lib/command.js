"use strict";

const commandNames = {
  follow: 'FOLLOW'
};

function Command(name, source, target, info) {
  const parsedCommand = commandNames[name];

  if(!parsedCommand) throw new Error(`Failed to parse command with name: ${name}`);
  if(!source || typeof source !== 'string') throw new Error('Invalid or no source specified!');
  if(!target || typeof target !== 'string') throw new Error('Invalid or no target specified!');

  this.type = parsedCommand;
  this.source = source;
  this.target = target;
  this.info = info;
}

module.exports = Command;