/**
 * Created by mauau on 05/03/2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('default', function() {
    gulp.start(
        'styles'
    );
    console.log('Hello world');
});