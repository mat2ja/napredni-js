const mysql = require('promise-mysql');
const http = require('http');

mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'njp'
}).then(connection => {

    console.log("Database is connected ... ");
    http.createServer(function (request, response) {

        let query = connection.query('SELECT * FROM countries');
       // connection.end();
        query.then(rows =>{

            rows.forEach(function(country){

                console.log(country.name);

            });

            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(rows));
            response.end();

        }).catch(err => console.log('Error while performing Query.'));



    }).listen(8081);

    console.log('Server running at http://127.0.0.1:8081/');

}).catch(err => console.log('Error connecting database'));

