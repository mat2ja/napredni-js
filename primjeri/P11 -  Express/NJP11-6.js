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
    console.log('Error connecting to database');
  }
}

init();

mainRouter.use((req, res, next) => {
  console.log(`Zahtjev na main routeru ${req.url}`);
  next();
});

mainRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index2.html'));
});

mainRouter.get('/data', async (req, res) => {
  try {
    let rows = await connection.query('SELECT * FROM countries');
    res.send(rows);
  } catch (e) {
    if (connection) console.log('Error in query');
  }
});

// ako zelimo presrest custom parametar :else i modificirati ga nekako
mainRouter.param('else', (req, res, next, name) => {
  if (name.length > 3) req.params.else = name.substr(0, 3);

  next();
});

mainRouter.param('id', (req, res, next, name) => {
  console.log('presrecem id');
  next();
});

mainRouter.get('/:else', (req, res) => {
  res.send(req.params.else);
});

mainRouter.get('/country/:id', async (req, res) => {
  const { id } = req.params;
  let country = await connection.query('SELECT * FROM countries WHERE id = ?', [
    id,
  ]);
  res.send({
    query: id,
    country,
  });
});

app.use('/', mainRouter);

app.listen(8081);
