const EventEmitter = require("events").EventEmitter;
const fs = require("fs");
const path = require("path");

module.exports.findPattern = function(directory, files, pattern) {
  const emitter = new EventEmitter();

  files.forEach(file => {
    const filepath = path.resolve(directory, file);
    fs.readFile(filepath, "utf8", (err, content) => {
      if (err) {
        return emitter.emit("file-error", err);
      } else {
        emitter.emit("file-read", file);
      }

      let matches = content.match(pattern);
      if (matches) {
        matches.forEach(element => {
          emitter.emit("file-match-found", file, element);
        });
      }
    });
  });
  return emitter;
};
