const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config();

var ser = app.listen(process.env.PORT || 5000, function() {
    var port = ser.address().port;
    console.log('Express is working on port ' + port);
});

const server = http.createServer(app);