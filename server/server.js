const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config();

app.listen(process.env.PORT || 5000);
var port = process.env.PORT;
console.log('Express is working on port ' + port);

const server = http.createServer(app);