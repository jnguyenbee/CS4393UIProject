const path = require('path');
const dotenv = require('dotenv').config();

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '^/product': {
                //target: 'http://localhost:' + JSON.stringify(5000),
                target: 'http://localhost:' + JSON.stringify(process.env.PORT),
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/product': '',
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