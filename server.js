const http = require('http');

const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node server ES6');
})
.listen ( port, () => {
    console.log("server is running.");
});
