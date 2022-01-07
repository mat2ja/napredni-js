const { readFile, writeFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

async function f() {
  try {
    let data = await readFileAsync('input.txt');
    console.log(data.toString());
    console.log('Reading complete');
    await writeFileAsync('prijepis.txt', data.toString());
    console.log('Writing complete');
  } catch (e) {
    console.error(e);
  }
}

f();

console.log('Program Ended');
