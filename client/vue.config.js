const path = require('path');
const dotenv = require('dotenv').config();

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '/products': {
                target: '67.78.105.64:' + JSON.stringify(process.env.PORT),
                //target: 'https://gentle-stream-93479.herokuapp.com', // +
                // JSON.stringify(process.env.PORT),
                changeOrigin: true,
                logLevel: 'debug',
                secure: false,
                pathRewrite: {
                    '^/products': '',
                },
            },
            '^/users/': {
                //target: 'http://localhost:' + JSON.stringify(5000),
                target: 'http://localhost:' + JSON.stringify(process.env.PORT),
                changeOrigin: true,
                logLevel: 'debug',
            },
            '^/reviews/': {
                //target: 'http://localhost:' + JSON.stringify(5000),
                target: 'http://localhost:' + JSON.stringify(process.env.PORT),
                changeOrigin: true,
                logLevel: 'debug',
            },
        },
    },
};