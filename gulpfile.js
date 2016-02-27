   const gulp = require('gulp'),
         sass = require('gulp-sass'),
        babel = require('gulp-babel'),
         path = require('path'),
 autoprefixer = require('gulp-autoprefixer'),
       rename = require('gulp-rename');


// gulp.task('sass', () =>
//   gulp.src('./**/css/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions'],
//       cascade: true
//     }))
//     .pipe(gulp.dest(path.dirname()))
// );


gulp.task('sass', () =>
  gulp.src('./**/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(rename( (currentPath) =>
      currentPath.dirname = path.join(currentPath.dirname, '..', 'css')
    ))
    .pipe(gulp.dest('./'))
);

gulp.task('es6',()=>
  gulp.src('./**/es6/*.js')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(rename( (currentPath) =>
        currentPath.dirname = path.join(currentPath.dirname, '..', 'js')
      ))
      .pipe(gulp.dest('./'))
);

gulp.task('default', ()=> {
    gulp.watch('./**/css/*.scss', ['sass']);
    gulp.watch('./**/es6/*.js', ['es6']);
  }
);
