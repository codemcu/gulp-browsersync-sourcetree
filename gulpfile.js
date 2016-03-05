/**
 * Created on 05/03/2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('styles', function() {
    return gulp.src('src/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('consologuear', function() {
    console.log('Hello world');

});

gulp.task('watch', function(){
    gulp.watch('src/css/*.scss', ['styles']);
});

