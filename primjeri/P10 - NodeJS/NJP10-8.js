const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

readFileAsync(process.argv[2], 'utf-8')
  .then((data) => {
    console.log(data.split('\n').length);
    console.log(data);
  })
  .catch((err) => console.error(err));
