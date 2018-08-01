const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const image = require('gulp-image');
 
const scripts = require('./scripts');
const styles = require('./styles');
var gutil = require('gulp-util'); 

gulp.task('css', function() {
    gulp.src(styles)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
 
gulp.task('js', function() {
    gulp.src(scripts)
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); }) // get more details on possible errors during uglify process
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/assets/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
 
gulp.task('image', function () {
    gulp.src('./src/assets/img/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/assets/img'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
 
gulp.task('fonts', function() {
    return gulp.src(['./node_modules/font-awesome/fonts/fontawesome-webfont.*'])
        .pipe(gulp.dest('./dist/assets/fonts/'));
});
 
gulp.task('html', function() {
    return gulp.src('./src/app/**/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
 
gulp.task('build', function() {
    gulp.start(['css', 'js', 'image', 'fonts', 'html'])
});
 
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'dist',
        }
    });
});
 
gulp.task('start', function() {
    devMode = true;
    gulp.start(['build', 'browser-sync']);
    gulp.watch(['./src/assets/css/**/*.css'], ['css']);
    gulp.watch(['./src/assets/js/**/*.js'], ['js']);
    gulp.watch(['./src/app/**/*.js'], ['js']);
    gulp.watch(['./src/app/**/*.html'], ['html']);
});