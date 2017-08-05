const gulp = require('gulp');
const replace = require('gulp-replace');
const fs = require('fs');

gulp.task('inject', function() {
    return gulp.src(['build/index.html'])
    .pipe(replace('<link rel="stylesheet" href="css/app.css">', function() {
        var css = fs.readFileSync('build/css/app.css', 'utf8');

        return '<style amp-custom>\n'
            + css
            + '\n<style>';
    }))
    .pipe(gulp.dest('build/'));
});
