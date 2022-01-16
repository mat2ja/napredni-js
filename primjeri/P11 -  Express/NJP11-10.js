const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 8081;
const mysql = require('promise-mysql');

//connection pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
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

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
  res.json({ message: 'Dobro dosli na nas API!' });
});

apiRouter
  .route('/users')
  .get(async (req, res) => {
    try {
      let conn = await pool.getConnection();
      let rows = await conn.query('SELECT * FROM users');
      conn.release();
      res.json({ status: 'OK', users: rows });
    } catch (e) {
      console.log(e);
      return res.json({ code: 100, status: 'Error with query' });
    }
  })
  .post((req, res) => {
    res.json({ message: 'Users ruta, post request!' });
  })
  .put((req, res) => {
    res.json({ message: 'Users ruta, put request!' });
  })
  .delete((req, res) => {
    res.json({ message: 'Users ruta, delete request!' });
  });

app.use('/api', apiRouter);
app.listen(port);
console.log('Running on port ' + port);
