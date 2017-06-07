'use strict';

var gulp     = require('gulp'),
    concat   = require('gulp-concat'),
    jshint   = require('gulp-jshint'),
    minify   = require('gulp-minify-css'),
    rename   = require('gulp-rename'),
    sass     = require('gulp-sass'),
    uglify   = require('gulp-uglify'),
    neat     = require('node-neat').includePaths,
    watch = require('gulp-watch');

var CSSDest = './html/assets/css/', 
    JSDest = './html/assets/js/';

gulp.task('styles', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
        // This will output the non-minified version
    .pipe(gulp.dest(CSSDest))
    // This will minify and rename to foo.min.js
    .pipe(minify())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(CSSDest));
});

gulp.task("lint", function() {
    gulp.src("./javascript/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task('scripts', function() {
  return gulp.src( ['./bower_components/fitvids/jquery.fitvids.js','./javascript/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(JSDest))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(JSDest));
});

gulp.task('scripts-concat', function() {
  return gulp.src(
      [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/jquery-cycle2/build/jquery.cycle2.min.js',
        './bower_components/jquery-cycle2/build/plugin/jquery.cycle2.swipe.min.js',
         './bower_components/isotope/dist/isotope.pkgd.min.js',
         './html/assets/js/scripts.min.js'
      ])
    .pipe(concat('scripts-concatenated-201705281607.min.js')) //change this to change the script found in 'templates/global/_scripts.html'
    .pipe(gulp.dest(JSDest))
});

gulp.task('move-scripts', function(){
    return gulp.src([
        './node_modules/html5shiv/dist/html5shiv.min.js', 
        './node_modules/respond.js/dest/respond.min.js'
        ])
    .pipe(gulp.dest(JSDest));
});


gulp.task('watch', function() {
  gulp.watch([
    'sass/**/*',
    'javascript/*'
  ], ['default']);
});


gulp.task('default',function(){
    gulp.start('styles', 'lint', 'scripts', 'scripts-concat', 'move-scripts');
});






// var gulp = require('gulp'),
//     sass = require('gulp-sass'),
//     neat = require('node-neat').includePaths;

// var paths = {
//     scss: './sass/*.scss'
// };

// gulp.task('styles', function () {
//     return gulp.src(paths.scss)
//         .pipe(sass({
//             includePaths: ['styles'].concat(neat)
//         }))
//         .pipe(gulp.dest('./html/assets/css'));
// });

// gulp.task('default',function(){
//     gulp.start('styles');
// });

