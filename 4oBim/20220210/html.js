const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
  fs.readFile('calc.html', (err, html) => {
    if (err) {
      console.log(err);
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Erro ao ler o arquivo .html');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      //res.write(html);
      res.end(html);
    }
  })
});

server.listen(port, hostname, () => {
  console.log(`Servidor que mostra um html em http://${hostname}:${port}/`);
});