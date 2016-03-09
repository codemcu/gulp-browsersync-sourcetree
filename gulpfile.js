/**
 * Created on 05/03/2016.
 */
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var watch       = require('gulp-watch');
var browserSync = require('browser-Sync');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');

gulp.task('styles', function() {
    return gulp.src('src/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('saludar', function(){
   return gulp.src(['src/js/saludo.js'])
       .pipe(concat('main.js'))
       .pipe(gulp.dest('dist/js/'))
       .pipe(rename('main.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dist/js/'));
});

gulp.task('browserSync', function(){
    return browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('src/css/*.scss', ['styles' , browserSync.reload]);
    gulp.watch('src/js/saludo.js', ['saludar' , browserSync.reload]);
})

gulp.task('default', ['styles', 'saludar', 'browserSync', 'watch']);

