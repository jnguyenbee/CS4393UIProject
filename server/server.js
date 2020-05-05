const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config();
var PORT = process.env.PORT || 5000;

var http = require('http');
var server = http.Server(app);
//const server = http.createServer(app);
//var io = require('socket.io').listen(server);

server.listen(PORT, function() {
    console.log('Sock server running');
});

//console.log('Express server started on port %s', server.address().port);
//console.log('Express server started on addree %s', server.address().address);
var io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('message', function(msg) {
        io.emit('message', msg);
    });
});