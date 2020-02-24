const http = require('http');

const port = 3000;
const host = '127.0.0.1';

const requestHandler = async (req, res) => {

  await new Promise (resolve => {
    setTimeout(() => {
      resolve();
    }, 100);
  });

  res.statusCode = 200;
  res.end('Server start');

}

const server = http.createServer(requestHandler);

server.listen(port, host);

