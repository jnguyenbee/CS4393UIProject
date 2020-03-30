const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

const uri =
    'mongodb+srv://User:User123@cs4393uiproject-2vcga.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, options).catch(error => handleError(error));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;