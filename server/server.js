const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config();

const port = 3000;

console.log('port' + port);
const server = http.createServer(app);

server.listen(port);