const path = require('path');
const { readdir } = require('fs');
const { promisify } = require('util');
const readdirAsync = promisify(readdir);

//console.log(path);

readdirAsync('./')
  .then((list) => {
    list.forEach((file) => {
      console.log(path.basename(file));
      console.log(path.extname(file));

      console.log('---------------');
    });
  })
  .catch((err) => console.error(err));
