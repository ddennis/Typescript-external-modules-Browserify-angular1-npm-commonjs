'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash').assign;

var tsify = require('tsify');

// add custom browserify options here
var customOpts = {
	entries: ['./app/src/app.ts'],
	debug: true
};

var opts = assign({}, watchify.args, customOpts);


var b = watchify(browserify(opts));

	// Add the typings file so typescript knows the npm modules we are using
	b.add('typings/main.d.ts');

	// build the typescript files, providing the config for doing so
	b.plugin(tsify, {
			"target": "es5",
			"module": "commonjs",
			"isolatedModules": false,
			"experimentalDecorators": true,
			"emitDecoratorMetadata": true,
			"declaration": true,
			"noImplicitAny": true,
			"removeComments": true,
			"noLib": false,
			"preserveConstEnums": true,
			"suppressImplicitAnyIndexErrors": true,
			"moduleResolution": "node"
		}
	);


/**
 * Run Gulp task
 */

gulp.task('browserifyTypescript', bundle); // so you can run `gulp js` to build the file

b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {

	return b.bundle()
		// log errors if they happen
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('app.js'))
		// optional, remove if you don't need to buffer file contents
		.pipe(buffer())
		// optional, remove if you dont want sourcemaps
		.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
		// Add transformation tasks to the pipeline here.
		.pipe(sourcemaps.write('./')) // writes .map file
		.pipe(gulp.dest('./dist'));
}