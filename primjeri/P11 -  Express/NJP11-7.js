const express = require('express');
const path = require('path');
const mysql = require('promise-mysql');
const bodyParser = require('body-parser');

const app = express();
const mainRouter = express.Router();
const loginRouter = express.Router();

// za dobiti podatke iz tijela POST i PUT requesta
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// CORS probati otvoriti rucno login.html i zakomentirati ovaj dio koda
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
    next();
});

let connection;


async function init() {

    try {

        connection = await mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'njp'
        });

    } catch (e){

        console.log('Error connecting to database');

    }


}

init();

mainRouter.use(function(req,res,next){

    console.log(`Zahtjev na main routeru ${req.url}`);
    next();

});

mainRouter.get('/', function (req, res) {

    res.sendFile(path.join(__dirname+'/index2.html'));

});



mainRouter.get('/data', async function (req,res){

    try {

        let rows = await connection.query('SELECT * FROM countries');
        res.send(rows);

    } catch (e){

        if (connection) console.log('Error in query');

    }

});

loginRouter.get('/', function(req,res){

    res.sendFile(path.join(__dirname+'/login.html'));

}).post('/', function(req, res){

    console.log('tu smo');
    console.log(req.body.credentials);
    res.send('Hvala');

});


app.use('/login', loginRouter);
app.use('/', mainRouter);

app.listen(8081);


