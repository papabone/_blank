var gulp = require('gulp');
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		cssnano     = require('gulp-cssnano'),
        rename      = require('gulp-rename'),
        del         = require('del'),
        imagemin    = require('gulp-imagemin'),
        pngquant    = require('imagemin-pngquant'),
        cache       = require('gulp-cache'),
        autoprefixer = require('gulp-autoprefixer'), 
        plumber     = require('gulp-plumber'),
        sassGlob    = require('gulp-sass-glob'),
        uglify      = require('gulp-uglify'),
        pump        = require('pump'),
        favicons    = require("gulp-favicons"),
        gutil       = require("gulp-util"),
        fileinclude = require('gulp-file-include');


gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sassGlob())
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
gulp.task('js-min', function (cb) {
  pump([
        gulp.src('app/js/**/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});
gulp.task("fav", function () {
    return gulp.src("app/img/fi/fav.png").pipe(favicons({
        appName: "Land",
        appDescription: "plain landing page",
        developerName: "Konstantin Filon",
        developerURL: "http://zen-b.com",
        background: "transporent",
        path: "img/fi/",
        url: "",
        display: "standalone",
        orientation: "portrait",
        start_url: "/?homescreen=1",
        version: 1.0,
        logging: false,
        online: false,
        html: "fav.html",
        pipeHTML: true,
        replace: true,
    }))
    .on("error", gutil.log)
    .pipe(gulp.dest("dist/img/fi"));
});
gulp.task('fileinclude', ['fav'], function() {
  gulp.src(['app/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['clean', 'img', 'css-min', 'js-min', 'fileinclude'], function() {

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    var buildVideo = gulp.src('app/video/**/*')
    .pipe(gulp.dest('dist/video'))

    var buildAudiojs = gulp.src('app/audiojs/**/*')
    .pipe(gulp.dest('dist/audiojs'))

});


gulp.task('clear', function () {
    return cache.clearAll();
})


gulp.task('default', ['watch']);