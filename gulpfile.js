

var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
 browserSync.init(null, {
    files: ["*.css", "*.js", "index.html"],
  server: {
     directory: true // or index: "index.html"
  }
 });
});