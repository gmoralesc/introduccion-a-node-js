const EventEmitter = require("events").EventEmitter;
const fs = require("fs");
const path = require("path");

module.exports.findPattern = function(directory, files, pattern) {
  const emitter = new EventEmitter();

  files.forEach(file => {
    const filepath = path.resolve(directory, file);
    const stream = fs.createReadStream(filepath, { encoding: "utf8" });

    stream.on("error", err => {
      return emitter.emit("file-error", err);
    });

    stream.on("close", () => {
      emitter.emit("file-read", file);
    });

    stream.on("data", content => {
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
