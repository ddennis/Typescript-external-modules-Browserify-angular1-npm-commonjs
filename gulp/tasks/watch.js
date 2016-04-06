/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 26-03-2016.
 */


var gulp  = require("gulp");
var browserSync  = require('browser-sync')//.get('app');
var config = require('../config');

//******************************************************************************
	  //gulp.task("watch", [ 'markup', 'browserifyTypescript'], function () {
gulp.task("watch", function () {

	 // gulp.watch([ "source/**/**.ts" ], ["default"]);
	  //gulp.watch(config.styles.files,  ['styles']);
	  gulp.watch("dist/styles.css").on('change', browserSync.reload);
	  gulp.watch("dist/app.js").on( 'change', function () {
			browserSync.stream({once: true})
	  });


	  gulp.watch( ['app/css/*.less', 'app/src/modules/**/*.less'], ['styles']);
	  gulp.watch( ['app/index.ejs', 'app/src/modules/**/*.ejs', 'app/src/modules/**/*.html'], ['markup']);

});
