const { createServer } = require('http');
const url = require('url');
const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

createServer(async (req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  try {
    switch (pathname) {
      case '/': {
        const data = await readFileAsync('./index.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data.toString());
        res.end();
        break;
      }
      case '/z': {
        const { x, y } = query;
        const result = Number(x) + Number(y);
        res.write(result.toString());
        res.end();
        break;
      }
      case '/o': {
        const { x, y } = query;
        const result = Number(x) - Number(y);
        res.write(result.toString());
        res.end();
        break;
      }
      default: {
        throw new Error();
      }
    }
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('An error occurred');
    res.end();
    console.error(err);
  }
}).listen(8888);
