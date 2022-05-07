const path = require('path');

module.exports = {
    mode: 'production',
    entry: './view/App.js',
    module: {
        rules: [{
            use: 'ts-loader'
        }, ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'App.min.js',
        path: path.resolve(__dirname, 'dist/js'),
    },
};