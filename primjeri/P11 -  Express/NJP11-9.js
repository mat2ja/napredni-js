const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 8081;

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


apiRouter.route('/users')
    .get(function(req,res){

    res.json({ message: 'Users ruta, get request!' });

}).post(function(req,res){

    res.json({ message: 'Users ruta, post request!' });

}).put(function(req,res){

    res.json({ message: 'Users ruta, put request!' });

}).delete(function(req,res){

    res.json({ message: 'Users ruta, delete request!' });

});


app.use('/api', apiRouter);


app.listen(port);
console.log('Running on port ' + port);


/*
var usersRouter = express.Router();

usersRouter.get('/',function(req,res){

    res.json({ message: 'Dobro dosli users rutu!' });

}).post('/',function(req,res){

    res.json({ message: 'Dobro dosli users post rutu!' });

}).put('/',function(req,res){

    res.json({ message: 'Dobro dosli users rutu!' });

}).delete('/',function(req,res){

    res.json({ message: 'Dobro dosli users rutu!' });

});

apiRouter.use('/users',usersRouter);
app.use('/api', apiRouter);

*/


