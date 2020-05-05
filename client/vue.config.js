const path = require('path');
const dotenv = require('dotenv').config();

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:' + process.env.PORT,
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        },
    },
};