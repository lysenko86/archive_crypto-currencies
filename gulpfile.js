"use strict"

const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const stylus = require('gulp-stylus');
const rename = require('gulp-rename');

gulp.task('build:js', function(){
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'public/js/*.*'
    ])
    .pipe(concat('scripts.js'))
    .pipe(minify({ext:{min:'.js'}}))
    .pipe(gulp.dest('public/build/'))
});

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
    gulp.watch('public/js/**/*.js', ['build:js']);
    gulp.watch('public/stylus/**/*.styl', ['build:css']);
});

gulp.task('default', ['build:js', 'build:css', 'watch']);
