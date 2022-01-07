const { createServer } = require('http');
const { readFile } = require('fs');
const url = require('url');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

createServer((request, response) => {
  let pathname = url.parse(request.url).pathname;
  console.log('Request for ' + pathname + ' received.');

  readFileAsync(pathname.substr(1))
    .then((data) => {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(data.toString());
      response.end();
    })
    .catch((err) => {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.write('No such page');
      response.end();
      console.error(err);
    });
}).listen(8081);

console.log('running');
