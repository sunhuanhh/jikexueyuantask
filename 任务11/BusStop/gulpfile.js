var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var less = require('gulp-less');
var path = require('path');
gulp.task('default',function(){
	var processors=[
		autoprefixer({
			browsers:['last 4 version']
		}),
		mqpacker,
		csswring
	];
	return gulp.src('./css/*.less')
		.pipe(less())
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'));
});