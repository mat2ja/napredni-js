const { createServer } = require('http');
const url = require('url');

createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  console.log(pathname);
  res.writeHead(200, { 'Content-Type': 'text/json' });
  res.write(`Url: ${pathname}`);
  res.end();
}).listen(8001);
