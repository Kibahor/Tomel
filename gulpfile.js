const { series, src, dest } = require('gulp');

const cssDistFolder = 'dist/css/';
const jsDistFolder = 'dist/js/';

function copyCss() {
    return src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(dest(cssDistFolder));
}

function copyJs() {
    return src('node_modules/vue/dist/vue.global.prod.js')
        .pipe(dest(jsDistFolder));
}

exports.default = series(copyCss, copyJs);