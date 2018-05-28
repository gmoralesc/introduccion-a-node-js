const fs = require('fs');
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
const line = `You want to ${options.item} ${options.times} time(s) in a ${options.frequency}`;

fs.appendFileSync('data.txt', line + "\r\n");

const content = fs.readFileSync('data.txt', 'utf-8');
console.log(content);