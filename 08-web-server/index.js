const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true);
  const pathName = `${__dirname}/public${path.pathname}`;

  fs.exists(pathName, function (exists) {
    if (!exists) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.write('404 Not Found');
      res.end();
      return;
    }

    fs.readFile(pathName, 'utf-8', (err, file) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(file);
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});