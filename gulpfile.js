var gulp = require('gulp');
var webpack = require('webpack-stream');
var zip = require('gulp-zip');

gulp.task('default', function() {
  return gulp.src('app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/'));
});

gulp.task('html', function() {
  return gulp.src('*.html').pipe(gulp.dest('build'))
});

gulp.task('package', ['default', 'html'], function() {
  var branch = process.env.BRANCH;
  var buildnr = process.env.BUILDNUMBER;
  var build_name = 'archive';
  var archive_name = build_name+'.zip';
  if (branch && buildnr) {
    archive_name = build_name+branch+'.'+buildnr+'.zip';
  }
  gulp.src(['build/**/*', '!build/'+build_name+'*.zip'])
    .pipe(zip(archive_name))
    .pipe(gulp.dest('build'));
});