const http = require('http');
const port = 1337;

let server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Bok\n');

  setTimeout(() => {
    res.write('Evo me opet!<br/>');
    res.write(new Date() + '\n');
    res.end();
  }, 2000);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
