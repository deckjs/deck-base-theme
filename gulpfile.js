var gulp = require('gulp'),
  clean = require('gulp-clean'),
  header = require('gulp-header'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  stylus = require('gulp-stylus'),
  autoprefixer = require('gulp-autoprefixer'),
  csso = require('gulp-csso'),
  pkg = require('./package.json'),
  browserify = require('gulp-browserify'),
  path = require('path'),
  template = require('lodash').template;

gulp.task('default', ['clean', 'compile']);
gulp.task('compile', ['stylus', 'browserify:lib']);

gulp.task('clean', ['clean:browserify', 'clean:stylus']);
gulp.task('clean:browserify', ['clean:browserify:lib']);

gulp.task('clean:browserify:lib', function() {
  return gulp.src(['dist'], { read: false })
    .pipe(clean());
});


gulp.task('clean:stylus', function() {
  return gulp.src(['css'], { read: false })
    .pipe(clean());
});


gulp.task('stylus', ['clean:stylus'], function() {
  return gulp.src('styl/main.styl')
    .pipe(stylus({
      'include css': true,
      'paths': ['./node_modules']
    }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(csso())
    .pipe(gulp.dest('css'));
});

gulp.task('browserify', ['browserify:lib']);

gulp.task('browserify:lib', ['clean:browserify:lib', 'stylus'], function() {
  return gulp.src('src/theme.js')
    .pipe(browserify({transform: ['brfs'], standalone: 'theme'}))
    .pipe(header(template([
      '/*!',
      ' * <%= name %> v<%= version %>',
      ' *',
      ' * Copyright <%= new Date().getFullYear() %>, <%= author.name %>',
      ' */\n\n'
    ].join('\n'), pkg)))
    .pipe(gulp.dest('.'))
    .pipe(rename('theme.min.js'))
    .pipe(uglify())
    .pipe(header(template([
      '/*! <%= name %> v<%= version %> ',
      '© <%= new Date().getFullYear() %> <%= author.name %> */',
    ].join(''), pkg)))
    .pipe(gulp.dest('.'));
});