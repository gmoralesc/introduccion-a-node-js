const {
  findPattern
} = require('./libs');

findPattern(['logs/log1.txt', 'logs/log2.txt'], /ERROR \w+/g)
  .on('file-read', function (file) {
    console.log(`File: ${file}`);
  })
  .on('file-match-found', function (file, match) {
    console.log(`Match: ${match}`);
  })
  .on('file-error', function (err) {
    console.log(`Error: ${err.message}`);
  });