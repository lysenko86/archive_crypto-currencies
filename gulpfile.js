"use strict"

const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const minify = require('gulp-minify');
const clean = require('gulp-clean');
const stylus = require('gulp-stylus');

gulp.task('build:js1', function(){
    //return gulp.src('public/js/**/*.jsx')
    return gulp.src(['public/js/test_app.jsx', 'public/js/test_comp1.jsx', 'public/js/test_comp2.jsx'])
    .pipe(babel({plugins: ['transform-react-jsx']}))
    .pipe(babel({presets: ['@babel/env']}))   // es6 ---> es5
    .pipe(gulp.dest('public/build/jsx'))
});

gulp.task('build:js2', ['build:js1'], function(){
    return gulp.src('public/build/jsx/index.js')
    .pipe(browserify({insertGlobals: true, transform: ['babelify']}))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public/build/'))
});

gulp.task('build:js3', ['build:js2'], function(){
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'public/build/app.js',
    ])
    .pipe(concat('scripts.js'))
    .pipe(minify())
    .pipe(gulp.dest('public/build/'))
});

gulp.task('clean:js', ['build:js1', 'build:js2', 'build:js3'], function(){
    return gulp.src([
        'public/build/jsx',
        'public/build/app.js',
        'public/build/scripts.js',
    ])
    .pipe(clean())
});

gulp.task('build:js', ['build:js1', 'build:js2', 'build:js3', 'clean:js']);

gulp.task('build:css', function(){
    return gulp.src('public/stylus/index.styl')
    .pipe(stylus({
        'include css': true,
        'compress': true
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('public/build/'))
});

gulp.task('watch', function(){
    gulp.watch('public/js/**/*.jsx', ['build:js']);
    gulp.watch('public/stylus/**/*.styl', ['build:css']);
});

gulp.task('default', ['build:js', 'build:css', 'watch']);
