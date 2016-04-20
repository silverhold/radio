var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var fs = require('fs-extra');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var report_error = function(error) {
    $.notify({
        title: 'An error occured with a Gulp task',
        message: 'Check you terminal for more informations'
    }).write(error);

    console.log(error.toString());
    this.emit('end');
};

gulp.task('styles', function () {
    return gulp.src('test/src/style.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
        precision: 6,
        outputStyle: 'expanded',
        sourceComments: true,
        indentWidth: 4,
    }))
    .on('error', report_error)
    .pipe($.autoprefixer({
        browsers: [
            'ie >= 10',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4.4',
            'bb >= 10'
        ]
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('test/dest'))
    .pipe($.size({title: 'styles'}));
});

gulp.task('templates', function() {
    return gulp.src('test/src/index.html.twig')
        .pipe($.twig())
        .pipe($.extReplace('.html', '.html.html'))
        .pipe($.prettify({ indent_size: 2 }))
        .pipe(gulp.dest('test/dest'))
        .pipe($.size({title: 'twig'}));
});

gulp.task('watch', ['default'], function() {
    browserSync({
        notify: false,
        logPrefix: 'custom-radio',
        server: ['test/dest']
    });

    gulp.watch('**/*.{scss, css}', ['styles', reload]);
    gulp.watch('**/*.{html.twig, twig}', ['templates', reload]);
});


gulp.task('default', ['styles', 'templates'], function() {});
