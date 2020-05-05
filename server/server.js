const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config();

var server = app.listen(process.env.PORT || 5000, function() {
    var port = server.address().port;
    console.log('Express is working on port ' + port);
});

const server = http.createServer(app);