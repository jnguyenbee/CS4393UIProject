const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
//const serveStatic = require('serve-static');
//const path = require('path');
//var paths = path.join(process.cwd(), '/client/dist');
//app.use(express.static(paths));
//here we are configuring dist to serve app files

/*const dotenv = require('dotenv').config();

const CONNECTION_URI = process.env.MONGODB_CONNECTION_URI;s

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};*/

const productRoutes = require('./api/routes/products');
const userRoutes = require('./api/routes/users');
const orderRoutes = require('./api/routes/orders');
const addressRoutes = require('./api/routes/addresses');
const contactRoutes = require('./api/routes/contacts');
const reviewRoutes = require('./api/routes/reviews');

//mongoose.connect(CONNECTION_URI, options)
//.then(console.log('MongoDB Connected'));
//.catch((error) => handleError(error));
var options = {
    server: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000,
        },
    },
    replset: {
        socketOptions: {
            keepAlive: 300000,
            connectTimeoutMS: 30000,
        },
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose
    .connect(
        process.env.MONGODB_URI ||
        'mongodb+srv://User:User123@cs4393uiproject-2vcga.mongodb.net/test?retryWrites=true&w=majority',
        options
    )
    .then(console.log('MongoDB Connected'))
    .catch((e) => console.log('could not connect to mongodb', e));

//app.use('/', serveStatic(paths));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Handle Production
if (process.env.NODE_ENV === 'production') {
    //static folder
    app.use(express.static(__dirname + '/public/'));
    // handle single page application
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.use('/uploads', express.static('uploads'));
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/addresses', addressRoutes);
app.use('/contacts', contactRoutes);
app.use('/reviews', reviewRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

// this * route is to serve project on different page routes except root `/`
//app.get(/.*/, function(req, res) {
//    res.sendFile(path.join(paths, '/index.html'));
//});

module.exports = app;