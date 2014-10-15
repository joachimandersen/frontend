var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', function() {
   	gulp.watch('less/**/*.less', function(event) {
        gulp.run('styles');
    })
});

gulp.task('styles', function() {
    gulp.src(['less/base.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/'));
});