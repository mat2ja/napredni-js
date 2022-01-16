const express = require('express');
const app = express();

app
  .get('/', function (req, res) {
    res.send('Hello World');
  })
  .post('/', function (req, res) {
    res.send('Odgovor na post zahtjev');
  });

app.get('/ruta', function (req, res) {
  res.send('Pozdrav iz rute');
});

app.get('*', function (req, res) {
  res.send('Ruta ne postoji!!!');
});

app.listen(8081);
