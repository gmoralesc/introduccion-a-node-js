const {
  findPattern
} = require('./libs');

const pattern = new RegExp(process.argv[2] || '');

findPattern(['logs/log1.txt', 'logs/log2.txt'], pattern)
  .on('file-read', function (file) {
    console.log(`File: ${file}`);
  })
  .on('file-match-found', function (file, match) {
    console.log(`Match: ${match}`);
  })
  .on('file-error', function (err) {
    console.log(`Error: ${err.message}`);
  });