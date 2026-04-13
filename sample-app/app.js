const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/name/:name', (req, res) => {
  res.render('hello', { name: req.params.name });
});
// Modificacion para el PRs
module.exports = app;