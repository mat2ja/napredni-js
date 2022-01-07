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


let apiRouter = express.Router();

 apiRouter.get('/', function(req, res) {
     res.json({ message: 'Dobro dosli na nas API!' });
 });


app.use('/api', apiRouter);


app.listen(port);
console.log('Running on port ' + port);

//POSTMAN - Chrome aplikacija za simuliranje requestova na server