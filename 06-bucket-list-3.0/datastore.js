var fs = require('fs');

module.exports.load = function (filePath) {
  var content = '';
  try{
    //if file exist
    content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  }catch(e){
    //if file does not exist
    fs.openSync(filePath, 'w');
    return [];
  }
}

module.exports.save = function (filePath, content) {
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
}