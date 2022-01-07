const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'njp',
});

connection.connect();

connection.query('SELECT * from countries', (err, rows, fields) => {
  if (err) return console.error(err);

  rows.forEach((row) => {
    // console.log(row.name+' '+row.population);
    for (let p in row) {
      console.log(p + ': ' + row[p]);
    }
    console.log('----------------------------');
  });
});

connection.end();
