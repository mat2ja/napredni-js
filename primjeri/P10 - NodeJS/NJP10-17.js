const mysql = require('promise-mysql');
const http = require('http');

const init = async function () {
  let connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'njp',
  });

  console.log('Database is connected ... ');
  http
    .createServer(async function (request, response) {
      let rows = await connection.query('SELECT * FROM countries');
      rows.forEach(function (country) {
        console.log(country.name);
      });

      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(rows));
      response.end();
    })
    .listen(8081);
  console.log('Server running at http://127.0.0.1:8081/');
};

init();

// chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
