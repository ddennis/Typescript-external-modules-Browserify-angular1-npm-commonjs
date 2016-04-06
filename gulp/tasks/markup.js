/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 27-03-2016.
 */

'use strict';

var gulp         = require('gulp');
var browserSync  = require('browser-sync').get('app');
var gulpif       = require('gulp-if');
var ejs          = require("gulp-ejs");
var rename       = require('gulp-rename');
var handleErrors = require('./handleErrors');
var fs           = require('fs');
var changed      = require('gulp-changed');
var config 		 = require('../config');

// get the version number from packagejson
var versionNumber = require('../../package.json').version;

// Views task
gulp.task('markup', function () {

	  console.log(" markup.js > browserSync.active = ", browserSync.active);

	  //['app/index.ejs', 'app/src/modules/**/*.ejs', 'app/src/modules/**/*.html']

	return gulp.src('./app/index.ejs')
			//.pipe(changed('./app/index.ejs'))
			.pipe(ejs({
				  version: versionNumber
			}).on('error', handleErrors))
			.pipe(rename('index.html'))
			.pipe(gulp.dest('./dist'))
			//.pipe(gulpif(browserSync.active , browserSync.reload ));
			//.pipe(gulpif(browserSync.active ,  browserSync.reload({ stream: true, once: true }) ));
			.pipe( browserSync.reload({ stream: true, once: true }) );


	  /**
	   * Put the views into the templates module,
	   */
	  /*return gulp.src('./app/src/modules/!**!/!*.html')
			.pipe(gulp.dest('dist/modules/'))
			.pipe(gulpif(browserSync.active, browserSync.reload({stream: true, once: true})));*/

});


/*
gulp.task('markup', function() {

	  console.log (" markup.js > browserSync.active = " , browserSync.active);
	  
	  gulp.src('./app/index.ejs')
			.pipe(ejs({
				  version: versionNumber
			}).on('error', handleErrors))
			.pipe(rename('index.html'))
			.pipe(gulp.dest('./dist' ))
			.pipe(gulpif(browserSync.active , browserSync.reload({ stream: true, once: true })));


	  /!**
	   * Put the views into the templates module,
	   *!/
	  return gulp.src('./app/src/modules/!**!/!*.html')
			.pipe(gulp.dest('dist/modules/' ))
			.pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));

});*/
