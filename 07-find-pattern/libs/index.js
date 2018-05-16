const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

module.exports.findPattern = function (files, pattern) {
  const emitter = new EventEmitter();

  files.forEach((file) => {
    fs.readFile(file, 'utf8', (err, content) => {
      if (err) {
        return emitter.emit('file-error', err);
      } else {
        emitter.emit('file-read', file);
      }

      let matches = content.match(pattern);
      if (matches) {
        matches.forEach((element) => {
          emitter.emit('file-match-found', file, element);
        });
      }
    });
  });
  return emitter;
}