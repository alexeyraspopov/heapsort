var gulp = require('gulp'),
	jasmine = require('gulp-jasmine');

gulp.task('tests', function(){
	return gulp.src('tests.js')
		.pipe(jasmine());
});

gulp.task('default', ['tests']);