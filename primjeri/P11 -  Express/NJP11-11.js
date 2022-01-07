const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 8081;
const mysql = require('promise-mysql');

//connection pool
const pool=mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'njp',
    debug    :  false
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
    next();
});

app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.send('Welcome to the home page!');
});

const apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
    res.json({ message: 'Dobro dosli na nas API!' });
});


apiRouter.route('/users').get(async function(req,res){

    try {

        let conn = await pool.getConnection();
        let rows = await conn.query('SELECT * FROM users');
        conn.release();
        res.json({ status: 'OK', users:rows });

    } catch (e){
        console.log(e);
        return res.json({"code" : 100, "status" : "Error with query"});

    }


}).post(async function(req,res){

    const user = {
        username : req.body.username,
        password : req.body.password,
        email : req.body.email

    };


    try {

        let conn = await pool.getConnection();
        let q = await conn.query('INSERT INTO users SET ?', user);
        conn.release();
        res.json({ status: 'OK', insertId:q.insertId });

    } catch (e){
        console.log(e);
        res.json({ status: 'NOT OK' });
    }



}).put(async function(req,res){

    //  req.body.id

    const user = {
        username : req.body.username,
        password : req.body.password,
        email : req.body.email

    };

    console.log(req.body);

    try {

        let conn = await pool.getConnection();
        let q = await conn.query('UPDATE users SET ? WHERE id = ?', [user,req.body.id]);
        conn.release();
        res.json({ status: 'OK', changedRows:q.changedRows });
        console.log(q);

    } catch (e){
        res.json({ status: 'NOT OK' });
    }

}).delete(async function(req,res){

    try {

        let conn = await pool.getConnection();//Body u DELETE requestu nije po REST specifikaciji
        let q = await conn.query('DELETE FROM users WHERE id = ?', req.body.id);
        conn.release();
        res.json({ status: 'OK', affectedRows :q.affectedRows });

    } catch (e){
        res.json({ status: 'NOT OK' });
    }


});


app.use('/api', apiRouter);
app.listen(port);
console.log('Running on port ' + port);


