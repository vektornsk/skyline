var gulp = require('gulp'),
	less = require('gulp-less'),
	jade = require('gulp-jade'),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require('watch'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync').create(),
	uglify = require('gulp-uglifyjs'),
	clean = require('gulp-clean'),
	imgMin = require('gulp-image-optimization'),
	notify = require( 'gulp-notify' );


// Less
gulp.task('less', function(){
	return gulp.src('app/less/style.less')
		.pipe(less())
		.on('error', notify.onError({
			title: 'LESS ERROR compilation',
			message: '<%= error.message%>'
		}))
		.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});
// Jade
gulp.task('jade', function(){
	return gulp.src('app/jade/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.on('error', notify.onError({
		title: 'JADE ERROR compilation',
		message: '<%= error.message%>'
	}))
	.pipe(gulp.dest('app/html'));
});
// Libs
gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/jquery-ui/jquery-ui.min.js',
		'app/libs/slick-carousel/slick/slick.min.js',
		'app/libs/sumoselect/jquery.sumoselect.js',
		'app/libs/fancyBox/source/jquery.fancybox.pack.js',
		'app/libs/fancyBox/source/helpers/jquery.fancybox-thumbs.js',
		'app/libs/fancyBox/source/helpers/jquery.fancybox-buttons.js',
		'app/libs/fancyBox/source/helpers/jquery.fancybox-media.js',
	])
		/*.pipe(concat('libs.js'))
		.pipe(uglify())*/
		.pipe(gulp.dest('app/js/libs'));
});
// CSS
gulp.task('libcss', function(){
	return gulp.src([
		'app/libs/jquery-ui/themes/base/jquery-ui.css',		
		'app/libs/slick-carousel/slick/slick.css',
		'app/libs/sumoselect/sumoselect.css',
		'app/libs/fancyBox/source/jquery.fancybox.css',
		'app/libs/fancyBox/source/helpers/jquery.fancybox-thumbs.css',
		'app/libs/fancyBox/source/helpers/jquery.fancybox-buttons.css'

	])
	/*.pipe(concat('libs-style.css'))*/
	.pipe(gulp.dest('app/css/libs'));
});
// BrowserSync
gulp.task('browser-sync', ['less', 'jade', 'scripts'], function() {
	browserSync.init({
		server: {
			baseDir: "./app"
		},
		notify: false
	});
});
// Watch
gulp.task('watch', function(){
	gulp.watch('app/less/*.less', ['less']);
	gulp.watch('app/jade/**/*.jade',['jade']);
	gulp.watch('app/html/*.html').on('change', browserSync.reload);
	gulp.watch('app/js/*.js').on('change', browserSync.reload);
});

gulp.task('clean', function () {
	return gulp.src('dist', {read: false})
		.pipe(clean());
});

gulp.task('default', ['watch','browser-sync']);

// Build

gulp.task('build',['less','jade','scripts', 'clean'], function(){
	var buildCss = gulp.src('app/css/**/')
		.pipe(gulp.dest('dist/css'));
	var buildFonts = gulp.src('app/fonts/**/')
		.pipe(gulp.dest('dist/fonts'));
	var buildJs = gulp.src('app/js/**/')
		.pipe(gulp.dest('dist/js'));
	var buildHtml = gulp.src('app/html/*')
		.pipe(gulp.dest('dist/html'));
	var buildIndex = gulp.src('app/index.html')
		.pipe(gulp.dest('dist'));
	var buildImg = gulp.src('app/images/**/*')
		.pipe(imgMin())
		.pipe(gulp.dest('dist/images'));
});
