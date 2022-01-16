const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mysql = require('promise-mysql');
const path = require('path');

const config = require('./config');

const pool = mysql.createPool(config.pool);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public/app'));

app.use(function(req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
     next();
     });

app.use(morgan('dev'));


const apiRouter = require('./app/routes/api')(express,pool);
app.use('/api', apiRouter);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/index.html'));
});


app.listen(config.port);

console.log('Running on port ' + config.port);


/// ORGANIZIRAN PROJEKT U DATOTECNI SUSTAV
// exportan api
//static

//nodemon
