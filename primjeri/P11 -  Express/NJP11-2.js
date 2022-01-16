const express = require('express');
const path = require('path');
const app = express();

//dopustamo korisniku pristup svim datotekama u __dirname direktoriju (trenutnom direktoriju)
//app.use(express.static(__dirname));

app.get('/', function (req, res) {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'index1.html'));
  //res.sendFile(`${__dirname}/index1.html`);
});

let server = app.listen(8081, function () {
  let port = server.address().port;
  console.log(`Listening at http://localhost:${port}`);
});
