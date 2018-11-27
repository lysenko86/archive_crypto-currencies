"use strict";

const gulp = require('gulp');
const rename = require('gulp-rename');
const stylus = require('gulp-stylus');

gulp.task('build:css', function(){
    return gulp.src('public/stylus/index.styl')
    .pipe(stylus({
        'include css': true,
        'compress': true
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('public/build'));
});

gulp.task('watch', function(){
    gulp.watch('public/stylus/**/*.styl', ['build:css']);
});

gulp.task('default', ['build:css', 'watch']);
