var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();

var jsFiles = [
  "scripts/js/*.js"
]

// personally written CSS
var sassFiles = [
  "sass/*.scss"
]

// content files
var contentFiles = [
  "perch/templates/**/*.*",
  "*.php",
  "*.html"
]

gulp.task("sass", function() {
  return gulp
    .src("sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({ outputStyle: "compressed" }).on("error", function(err) {
        console.error(err.message);
        browserSync.notify(err.message, 3000); // Display error in the browser
        this.emit("end"); // Prevent gulp from catching the error and exiting the watch process
      })
    )
    .pipe(autoprefixer("last 2 versions"))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
});

gulp.task("compress", function() {
  gulp
    .src("scripts/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      uglify().on("error", function(err) {
        console.error(err.message);
        browserSync.notify(err.message, 3000); // Display error in the browser
        this.emit("end"); // Prevent gulp from catching the error and exiting the watch process
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(rename({ suffix: "-min" }))
    .pipe(gulp.dest("scripts/minified/"));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
          baseDir: "./",
        }
    });
});

gulp.watch(jsFiles, gulp.parallel('compress'))
.on('change', browserSync.reload);

gulp.watch(sassFiles, gulp.parallel('sass'))
.on('change', browserSync.reload);

gulp.watch(contentFiles)
.on('change', browserSync.reload);

gulp.task('serve', gulp.parallel(
  'sass',
  'compress',
  'browserSync'));

  gulp.task('default', gulp.series('serve'));
