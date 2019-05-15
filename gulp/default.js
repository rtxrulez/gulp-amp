var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
    runSequence(
        'copy',
        'styles',
        'server',
        'copy:watch',
        'styles:watch'
    );
});
