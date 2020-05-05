const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config();

const server = http.createServer(app);
var host = server.address().address;
host = host == '::' ? 'localhost' : host;
server.listen(process.env.PORT || 5000, host);
console.log('Express server started on port %s', server.address().port);
console.log('Express server started on addree %s', server.address().address);
//var port = process.env.PORT;