const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const path = require('path');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', () =>
  gulp.src('./**/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest(path.dirname()))
);


gulp.task('default', ()=>
 gulp.watch('./**/css/*.scss', ['sass'])
);
