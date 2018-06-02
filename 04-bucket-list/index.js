const fs = require('fs');
const os = require('os');
const commandLineArgs = require('command-line-args')

const params = [{
    name: 'item',
    alias: 'i',
    type: String
  },
  {
    name: 'frequency',
    alias: 'f',
    type: String
  },
  {
    name: 'times',
    alias: 't',
    type: Number
  }
];

const options = commandLineArgs(params);
const line = `You want to ${options.item} ${options.times} time(s) every ${options.frequency}`;

fs.appendFileSync('data.txt', line + os.EOL);

const content = fs.readFileSync('data.txt', 'utf-8');
console.log(content);