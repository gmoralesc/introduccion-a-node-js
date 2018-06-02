const http = require('http');
const url = require('url');
const fs = require('fs');
const pug = require('pug');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true);
  const name = path.pathname.substring(0, path.pathname.lastIndexOf('.'));
  const pathName = `${__dirname}/views${name}.pug`;

  fs.readFile(pathName, 'utf-8', (err, file) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.write('404 Not Found');
      res.end();
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const html = pug.render(file, {
      pageTitle: 'Our great Website',
      menu: [{
        name: 'Home',
        link: 'index.html'
      }, {
        name: 'About',
        link: 'about.html'
      }]
    });
    res.end(html);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});