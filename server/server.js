const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config();
const serveStatic = require('serve-static');
const path = require('path');

app.use('/', serveStatic(path.join(process.cwd(), 'client/dist ')));
var paths = path.join(process.cwd(), 'client/dist ');
console.log(paths);
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);