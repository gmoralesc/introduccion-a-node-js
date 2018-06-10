const fs = require('fs');
const path = require('path');
const commandLineArgs = require('command-line-args');

const filename = 'data.json';
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
  },
];
const options = commandLineArgs(params);
let items = [];

try {
  //if file exist
  const content = fs.readFileSync(filepath, 'utf-8');
  items = JSON.parse(content);
} catch (e) {
  //if file does not exist
  fs.openSync(filepath, 'w');
}

items.push({
  item: options.item,
  times: options.times,
  frequency: options.frequency
});
fs.writeFileSync(filepath, JSON.stringify(items, null, 2));

items.forEach(function (el) {
  console.log(`You want to ${el.item} ${el.times} time(s) in a ${el.frequency}`);
});