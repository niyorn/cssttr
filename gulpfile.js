'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var beautify = require('gulp-cssbeautify');
 
gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('styles.css'))
    .pipe(beautify())
    .pipe(gulp.dest(''));
});

gulp.task('default', ['sass'], function(){
    gulp.watch('./sass/**/*', ['sass']);
})