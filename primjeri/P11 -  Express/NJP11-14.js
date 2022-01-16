const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 8081;
const mysql = require('promise-mysql');
const api = require('./api.js');

const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: 'Mateekija#020821',
  database: 'njp',
  debug: false,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type,  Authorization'
  );
  next();
});

app.use(morgan('dev'));

apiRouter = api(express, pool);

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index2.html'));
});

app.listen(port);
console.log('Running on port ' + port);
