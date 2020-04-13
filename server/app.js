const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const CONNECTION_URI = process.env.MONGODB_CONNECTION_URI;

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

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const productRoutes = require('./api/routes/products');
const userRoutes = require('./api/routes/users');
const orderRoutes = require('./api/routes/orders');
const addressRoutes = require('./api/routes/addresses');
const contactRoutes = require('./api/routes/contacts');
const reviewRoutes = require('./api/routes/reviews');

mongoose.connect( 'mongodb+srv://User:User123@cs4393uiproject-2vcga.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    } 
).then(console.log('MongoDB Connected'));
//mongoose.connect(CONNECTION_URI, options)
    //.then(console.log('MongoDB Connected'));
    //.catch((error) => handleError(error));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/addresses', addressRoutes);
app.use('/contacts', contactRoutes);
app.use('/reviews', reviewRoutes);

module.exports = app;