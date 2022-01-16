const express = require('express');
const path = require('path');
const mysql = require('promise-mysql');

const app = express();
const mainRouter = express.Router();

let connection;

async function init() {
  try {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'njp',
    });
  } catch (e) {
    console.log(e);
    console.log('Error connecting to database');
  }
}

init();

mainRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index2.html'));
});

mainRouter.get('/data', async (req, res) => {
  try {
    let rows = await connection.query('SELECT * FROM countfries');
    res.send(rows);
  } catch (e) {
    if (connection) console.log('Error in query');
    res.send({ error: 'Error in query' });
  }
});

app.use('/', mainRouter);

app.listen(8081);
