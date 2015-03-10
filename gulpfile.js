// gulpfile.js
var gulp = require('gulp');
var purescript = require('gulp-purescript');
var DEV = true;

gulp.task('purescript', function(){
    gulp.src(['src/**/*.purs', 'bower_components/*/src/**/*.purs']).pipe(purescript.psc({
        noOpts: DEV,
        runtimeTypeChecks: false,
        noMagicDo: false,
        verboseErrors: true,
        main: true,
        modules: ['Main']
    })).pipe(gulp.dest('output/'));
});

gulp.task('default', ['purescript'], function(){});
