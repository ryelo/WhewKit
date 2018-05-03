var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('base.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('pug', function buildHTML() {
  return gulp.src('index.pug')
    .pipe(pug()) // Converts pug to HTML with gulp-pug
    .pipe(gulp.dest('dist/html'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist',
      index : "html/index.html"
    },
  })
})

gulp.task('watch', ['browserSync', 'sass', 'pug'], function(){
  gulp.watch('whewkit.scss', ['sass']);
  gulp.watch('base.scss', ['sass']);
  gulp.watch('index.pug', ['pug']);
})