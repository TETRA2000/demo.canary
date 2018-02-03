var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('default', ['views']);

gulp.task('views', function buildHTML() {
  return gulp.src('views/*.pug')
  .pipe(pug({
    // Your options in here. 
  }))
  .pipe(gulp.dest("./dist/"));
});
