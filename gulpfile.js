var gulp = require('gulp'),
    rename = require('gulp-rename'),
    del = require('del'),
    mocha = require('gulp-mocha'),
    concat = require("gulp-concat"),
    babel = require("gulp-babel"),
    order = require("gulp-order"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require("gulp-sourcemaps");

gulp.task("default", function () {
    gulp.start([
        'copy-content',
        'copy-public',
        'gen-client-html',
        'gen-client-js',
        'gen-client-css',
        'gen-client-lib-js',
        'gen-client-lib-css',
        'server-es6'
    ]);
});

gulp.task('dev', ['default'], function () {
    gulp.watch([
        'src/**/*'
    ], ['default']);
});

gulp.task('server-es6', function () {
    return gulp.src(['src/server/**/*.es6'])
        .pipe(babel())
        .pipe(rename({extname: ".js"}))
        .pipe(gulp.dest("release/server"));
});

gulp.task('copy-public', function () {
    return gulp.src(['src/client/public/**/*'])
        .pipe(gulp.dest("release/client/public"));
});

gulp.task('copy-content', function () {
    return gulp.src(['src/server/content/**/*'])
        .pipe(gulp.dest("release/server/content"));
});

gulp.task("gen-client-html", function () {
    return gulp.src([
        "src/client/components/head/head.html",
        "src/client/components/**/!(footer)*.html",
        "src/client/components/footer/footer.html"
    ])
        .pipe(concat("index.ejs"))
        .pipe(gulp.dest('release/server/views'));
});

gulp.task('gen-client-js', function () {
    return gulp.src(['src/client/app.es6', 'src/client/components/**/*.es6'])
        .pipe(concat('app.js'))
        .pipe(babel())
        .pipe(gulp.dest("release/client/public"));
});

gulp.task('gen-client-css', function () {
    return gulp.src([
        'src/client/components/global/global.scss',
        "src/client/components/**/*.scss"
    ])
        .pipe(concat('app.scss'))
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest("release/client/public"));
});

gulp.task('gen-client-lib-js', function () {
    return gulp.src([
        'src/client/bower-components/jquery/dist/jquery.min.js',
        'src/client/bower-components/angular/angular.min.js',
        'src/client/bower-components/angular-ui-router/release/angular-ui-router.min.js',
        'src/client/bower-components/lodash/lodash.min.js',
        'src/client/bower-components/fastclick/lib/fastclick.js'
        //'src/client/bower-components/inobounce/inobounce.js'
    ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest("release/client/public"));
});

gulp.task('gen-client-lib-css', function () {
    return gulp.src([
        'src/client/bower-components/bootstrap/dist/css/bootstrap.min.css'
    ])
        .pipe(concat('lib.css'))
        .pipe(gulp.dest("release/client/public"));
});