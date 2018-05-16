const express = require('express')
const pug = require('pug');

const hostname = '127.0.0.1';
const port = 3000;
const menu = [{
  name: 'Home',
  link: 'index.html'
}, {
  name: 'About',
  link: 'about.html'
}];

const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'))

app.get('/index.html', function (req, res) {
  res.render('index', {
    pageTitle: 'Our great website - Index',
    menu: menu
  })
});

app.get('/about.html', function (req, res) {
  res.render('about', {
    pageTitle: 'Our great website - About',
    menu: menu
  })
});

app.use((req, res) => {
  res.status(404);
  res.set('Content-Type', 'text/html');
  res.end('Error. Route not found');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});