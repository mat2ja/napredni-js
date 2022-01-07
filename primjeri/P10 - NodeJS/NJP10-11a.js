const mojModul = require('./NJP10-10a.js');

mojModul
  .citajDir(process.argv[2], process.argv[3] || '.js')
  .then((data) => {
    data.forEach((file) => console.log(file));
    console.log('Zavrsene sve radnje');
  })
  .catch((err) => console.error(err));
