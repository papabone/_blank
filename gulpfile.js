var gulp = require('gulp');
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    cache       = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'); 


gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('browser-sync', function() {
    browserSync({
        server: { 
            baseDir: 'app' 
        },
        notify: false // Отключаем уведомления
    });
});
gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('clean', function() {
    return del.sync('dist');
});
gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});
gulp.task('css-min', ['sass'], function() {
    return gulp.src('app/css/**/*.css')
        .pipe(cssnano()) 
        /*.pipe(rename({suffix: '.min'}))*/ //можно переписать - чтобы минифицировало из scss 
        																		//- но каждый раз будет делать при watch
        .pipe(gulp.dest('dist/css'));
});
gulp.task('build', ['clean', 'img', 'css-min'], function() {

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});


gulp.task('clear', function () {
    return cache.clearAll();
})


gulp.task('default', ['watch']);