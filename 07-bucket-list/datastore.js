const fs = require('fs');

module.exports.load = function (filepath) {
  try {
    //if file exist
    const content = fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(content);
  } catch (e) {
    //if file does not exist
    fs.openSync(filepath, 'w');
    return [];
  }
}

module.exports.save = function (filepath, content) {
  fs.writeFileSync(filepath, JSON.stringify(content, null, 2));
}