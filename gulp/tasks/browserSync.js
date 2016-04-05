'use strict';

var config      = require('../config');
var gulp        = require('gulp');
var browserSync = require('browser-sync').create('app');

gulp.task('browserSync', function() {

	  browserSync.init({
			server: config.outputFolder,
			port:3000,
			browser: ['google chrome']

	  });
});
