'use strict';

const gulp = require('gulp'),
    concat = require('gulp-concat'),
    terser = require('gulp-terser'),
    rename = require('gulp-rename');
    

gulp.task("concatScripts", function(done) {
    gulp.src([
        'js/jquery-3.3.1.js',
        'js/global-functions.js',
        'js/players.js',
        'js/strategy-cards.js',
        'js/app.js'])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("js"));
    done();
});

gulp.task("minifyScripts", function(done) {
    gulp.src("./js/app.js")
        .pipe(terser())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest("./js"));
});

// gulp.task("default", gulp.series('hello', function(done) {
//     console.log("This is the default task");
//     done();
// }));