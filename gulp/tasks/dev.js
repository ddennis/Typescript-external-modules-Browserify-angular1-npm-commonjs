/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 01-04-2016.
 */

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var config      = require('../config');


gulp.task('dev', function(callback) {


	  config.productionBuild = false;

	  // Log to the console
	  console.log (" dev.js > ------------------------------------------");
	  gutil.log( gutil.colors.red("dev.js > IS PRODUCTION BUILD = " ), gutil.colors.blue( config.productionBuild  ));
	  console.log (" dev.js > ------------------------------------------");

	  callback = callback || function() {};

	  runSequence(['markup', 'browserifyTypescript', 'styles', 'assets'], 'browserSync', 'watch')
	  //runSequence(['markup', 'browserifyTypescript'], 'browserSync','watch' )

});