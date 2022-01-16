const express = require('express');
const path = require('path');
const mysql = require('promise-mysql');

const app = express();
const mainRouter = express.Router();

let connection;

async function init() {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'njp',
  });
}

init();

mainRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
});

mainRouter.get('/data', async (req, res) => {
  let rows = await connection.query('SELECT * FROM countries');
  res.send(rows);
});

app.use('/', mainRouter);

app.listen(8081);
