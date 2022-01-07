const mysql = require('promise-mysql');

mysql
  .createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'njp',
  })
  .then((connection) => {
    let query = connection.query('SELECT * FROM countries');
    connection.end();
    return query;
  })
  .then((rows, fields) => {
    rows.forEach(function (country) {
      console.log(country.name);
    });
  })
  .catch((err) => console.error(err));
