var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('compress', function () {
  gulp.src('scripts/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: '-min' }))
    .pipe(gulp.dest('scripts/minified/'))
});

gulp.task('browserSync', function() {
    browserSync.init({
        proxy: "experiments"
    });
});

gulp.task('watch',['browserSync', 'sass', 'compress'], function(){
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('scripts/js/*.js', ['compress']);
    gulp.watch('*.php', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('scripts/minified/*.js', browserSync.reload);
})