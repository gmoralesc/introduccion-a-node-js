var fs = require('fs');
var commandLineArgs = require('command-line-args')

var params = [
  { name: 'item', alias: 'i', type: String },
  { name: 'frequency', alias: 'f', type: String },
  { name: 'times', alias: 't', type: Number }
];

var options = commandLineArgs(params);

var content = '';
var items = [];
var filePath = 'data.json';

try{
  //if file exist
  content = fs.readFileSync(filePath, 'utf-8');
  items = JSON.parse(content);
}catch(e){
  //if file does not exist
  fs.openSync(filePath, 'w');
}

items.push({
  item: options.item,
  times: options.times,
  frequency: options.frequency
});

fs.writeFileSync(filePath, JSON.stringify(items, null, 2));

items.forEach(function (el){
  console.log(`You want to ${el.item} ${el.times} time(s) in a ${el.frequency}`);
});