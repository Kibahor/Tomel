const { series, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
require('dotenv').config();

const cssDistFolder = 'dist/css/';
const jsDistFolder = 'dist/js/';
const jsOrderedSrcFolder = ['src/js/models/*.js', 'src/js/services/*.js', 'src/js/*.js'];

function copyCss() {
    return src(['node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css.map'])
        .pipe(dest(cssDistFolder));
}

function copyJs() {
    return src('node_modules/vue/dist/vue.global.prod.js')
        .pipe(dest(jsDistFolder));
}

function concatJs() {
    let glob = src(jsOrderedSrcFolder)
        .pipe(concat('main.js'));

    if (process.env.ENVIRONMENT === 'PROD') {
        glob = glob.pipe(uglify());
    }

    return glob.pipe(rename({ extname: '.min.js' }))
        .pipe(dest(jsDistFolder));
}

exports.default = series(copyCss, copyJs, concatJs);