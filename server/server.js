const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config();

//app.listen(process.env.PORT || 5000);
//var port = process.env.PORT;
app.set('port', process.env.PORT);
const server = http.createServer(app).listen(app.get('port'));
console.log('port' + server.address.port);
console.log('address' + server.address.address);