const fs = require("fs");
const commandLineArgs = require("command-line-args");
const { findPattern } = require("./libs");

const params = [
  {
    name: "directory",
    alias: "d",
    type: String
  },
  {
    name: "pattern",
    alias: "p",
    type: String
  }
];

const options = commandLineArgs(params);
const { directory = ".", pattern = "" } = options;
const files = fs.readdirSync(directory);
const regexp = new RegExp(pattern);

findPattern(directory, files, regexp)
  .on("file-read", function(file) {
    console.log(`File: ${file}`);
  })
  .on("file-match-found", function(file, match) {
    console.log(`Match: ${match}`);
  })
  .on("file-error", function(err) {
    console.log(`Error: ${err.message}`);
  });
