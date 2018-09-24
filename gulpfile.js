"use strict"

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const minifyCss = require('gulp-minify-css');

gulp.task('css', function(){
    return gulp.src('public/stylus/styles.styl')
    .pipe(stylus())
    .pipe(minifyCss())
    .pipe(gulp.dest('build/'))
});

gulp.task('watch', function(){
    gulp.watch('public/stylus/*.styl', ['css']);
});

gulp.task('default', ['css', 'watch']);
