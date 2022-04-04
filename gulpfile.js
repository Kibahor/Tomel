const { series, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const ts = require('gulp-typescript');
require('dotenv').config();

const cssDistFolder = 'dist/css/';
const jsDistFolder = 'dist/js/';
const jsOrderedSrcFolder = ['src/js/models/*.js', 'src/js/services/*.js', 'src/js/*.js'];

const cssImported = ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css.map'];
const jsImported = ['node_modules/vue/dist/vue.global.prod.js'];


function copyCss() {
    return src(cssImported)
        .pipe(dest(cssDistFolder));
}

function copyJs() {
    return src(jsImported)
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

function convertTs() {
    return src('src/ts/**/*.ts')
        .pipe(ts({
            noImplicitAny: false,
            outFile: 'main.js',
            lib: ['es2017', 'dom'],
            target: 'es6',
            module: 'amd'
        }))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest(jsDistFolder));
}

exports.default = series(copyCss, copyJs, concatJs);