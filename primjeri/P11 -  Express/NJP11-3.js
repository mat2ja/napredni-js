const express = require('express');
const path = require('path');
const app = express();

const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
});

mainRouter.get('/data', (req, res) => {
  console.log(req.query.a);

  res.send([
    {
      name: 'Croatia',
      population: 4000000,
      flagURL: 'n/a',
      capital: 'Zagreb',
      gdp: 10000,
    },
  ]);
});

app.use('/', mainRouter);

app.listen(8081);
