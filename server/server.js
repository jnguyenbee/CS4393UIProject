const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config();
var PORT = ENV['PORT'] || process.env.PORT || 5000;
console.log(PORT);
const server = http.createServer(app);
server.listen(PORT);

module.exports = app;