const { readFile, writeFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

readFileAsync('input.txt')
  .then((data) => {
    console.log('Reading complete');
    console.log(data.toString());

    return writeFileAsync('prijepis.txt', data.toString());
  })
  .then(() => {
    console.log('Writing complete');
  })
  .catch((err) => console.error(err));

console.log('Program Ended');

/*
readFileAsync('input.txt')
    .then(data => writeFileAsync('prijepis.txt',data.toString()))
    .then(()=>console.log('Complete'))
    .catch(err => console.error(err));
*/
