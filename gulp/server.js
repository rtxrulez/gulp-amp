const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
    browserSync.init({
        "open": false,
        server: {
            baseDir: "./build"
        },
        files: ["build/*.html", "build/css/*.css", "build/img/*.*"]
    });
});
