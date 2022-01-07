const path = require('path');
const { readdir } = require('fs');
const { promisify } = require('util');
const readdirAsync = promisify(readdir);

//console.log(path);

module.exports = {
  citajDir: function (dirname, ext) {
    return readdirAsync(dirname).then((list) => {
      return list.filter((file) => path.extname(file) === ext);
    });
  },
};
