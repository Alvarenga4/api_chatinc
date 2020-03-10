if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nomedoprojeto:server');

const port = normalizePort(process.env.PORT || '3333');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('api on-line');

function normalizePort (val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

function onListening () {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug(`Listening on ${bind}`);
}

/*
  finalizar processo
  No Windows
  taskkill /F /PID 3592
  taskkill /F /IM node.exe

  No Linux
  kill port
  sudo kill -9 $(sudo lsof -t -i:9001)
*/
