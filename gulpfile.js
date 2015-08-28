var gulp = require('gulp'),
    compass = require('gulp-compass'),
	path = require('path');

gulp.task('compass',function(){
	gulp.src('./src/sass/home.scss')
	.pipe(compass({
		project: path.join(__dirname,'./src'),
		css: 'css',
		sass: 'sass',
		image: 'image'
	}));
	gulp.src('./src/sass/index.scss')
	.pipe(compass({
		project: path.join(__dirname,'./src'),
		css: 'css',
		sass: 'sass',
		image: 'image'
	}));
});

gulp.task('sass:watch',function(){
	gulp.watch('./src/sass/**/*.scss',['compass']);
});

gulp.task('default', function() {
  // place code for your default task here
});

