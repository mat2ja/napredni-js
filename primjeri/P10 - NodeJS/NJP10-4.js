const { readFile, writeFile } = require('fs');

readFile('input.txt', (err, data) => {
  if (err) return console.error(err);

  console.log(data.toString());

  writeFile('prijepis.txt', data.toString(), () => {
    console.log('Writing finished');
  });
});

console.log('Program Ended');
