/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 01-04-2016.
 */
'use strict';

var browserSync  = require('browser-sync').get('app');
var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var handleErrors = require('./handleErrors');

var autoprefixer = require('gulp-autoprefixer');

var less = require('gulp-less');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');




gulp.task('styles', function () {

	  console.log (" styles.js > config.productionBuild = " , config.productionBuild);
	  return gulp.src(config.styles.input)

			.pipe(plumber(function(error) {
				  gutil.log(gutil.colors.red(error.message));
				  gutil.beep();
				  this.emit('end');
			}))

			.pipe(less())

			.pipe(autoprefixer("last 2 versions", "> 1%", "ie 9"))
			//.pipe(gulpif(config.productionBuild  , cleanCSS({compatibility: 'ie9'})) )
			.on('error', handleErrors)
			.pipe(rename('styles.css'))
			.pipe(gulp.dest(config.styles.output))
			.pipe(browserSync.reload({ stream: true }))
			//.pipe(gulpif(config.productionBuild == false , browserSync.reload({ stream: true })))

});




