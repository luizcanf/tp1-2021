const http = require('http');

const hostname = '127.0.0.1'; //'localhost'
const port = 3030;

const server = http.createServer((req, res) => {
  // req: request (Requisição)
  // res: response (Resposta)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Olá, Turma 2020 de TP1!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});