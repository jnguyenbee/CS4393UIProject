const path = require('path');
const dotenv = require('dotenv').config();

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '^/api/': {
                //target: 'http://localhost:' + JSON.stringify(5000),
                target: 'http://localhost:' + JSON.stringify(process.env.PORT),
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api/': '/' },
            },
        },
    },
};