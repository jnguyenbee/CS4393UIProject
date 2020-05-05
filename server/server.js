const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config();
var PORT = process.env.PORT || 5000;

const server = http.createServer(app);
server.listen(PORT, 'gentle-stream-93479.herokuapp.com');

module.exports = app;