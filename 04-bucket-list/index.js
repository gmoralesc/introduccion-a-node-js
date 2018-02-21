var fs = require('fs');
var commandLineArgs = require('command-line-args')

var params = [
  { name: 'item', alias: 'i', type: String },
  { name: 'frequency', alias: 'f', type: String },
  { name: 'times', alias: 't', type: Number }
];

var options = commandLineArgs(params);
var line = `You want to ${options.item} ${options.times} time(s) in a ${options.frequency}`;

fs.appendFileSync('data.txt', line + "\r\n");

var content = fs.readFileSync('data.txt', 'utf-8');
console.log(content);
