const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

const distFolder = 'dist/';
const cssDistFolder = 'css/';
const jsDistFolder = 'js/';
const imgDistFolder = 'img/';

module.exports = {
    mode: 'development',
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
        path: path.resolve(__dirname, distFolder),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: cssDistFolder },
                { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css.map', to: cssDistFolder },
                { from: 'src/css/style.css', to: cssDistFolder },
                { from: 'src/img/tomel-favicon.png', to: imgDistFolder },
                { from: 'src/img/tomel-logo.png', to: imgDistFolder },
                { from: 'node_modules/vue/dist/vue.global.prod.js', to: jsDistFolder }
            ],
        }),
    ],
};