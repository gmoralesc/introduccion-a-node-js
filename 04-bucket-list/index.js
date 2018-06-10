const fs = require('fs');
const os = require('os');
const path = require('path');
const commandLineArgs = require('command-line-args');

const filename = 'data.txt';
const filepath = `${path.resolve('.')}/${filename}`;
const params = [{
    name: 'item',
    alias: 'i',
    type: String
  },
  {
    name: 'times',
    alias: 't',
    type: Number
  },
  {
    name: 'frequency',
    alias: 'f',
    type: String
  }
];
const options = commandLineArgs(params);

const line = `You want to ${options.item} ${options.times} time(s) every ${options.frequency}`;
fs.appendFileSync(filepath, line + os.EOL);

const content = fs.readFileSync(filepath, 'utf-8');
console.log(content);