"use strict";

var gulp = require('gulp'),
	opn = require('opn'),
	connect = require('gulp-connect'),
	gulpJade = require('gulp-jade'),
	jade = require('jade'),
	prettify = require('gulp-prettify'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer');

// запуск сервера
gulp.task('connect', function() {
	connect.server({
		root: 'app',
		livereload: true
	});
	opn('http://localhost:8080/');
});

// компилируем  jade  в html
gulp.task('jade', function() {
	gulp.src('app/jade/*.jade')
		.pipe(gulpJade({
			jade: jade,
			pretty: true
		}))
		.pipe(gulp.dest('app/'))
});

// слежка html изменился презагружаем файл
gulp.task('html', function () {
	gulp.src('app/*.html')
		.pipe(connect.reload());
});

// слежка css изменился презагружаем файл
gulp.task('css', function () {
	gulp.src('app/styles/css/*.css')
		.pipe(connect.reload());
});

// JS
gulp.task('js', function () {
	gulp.src('./app/scripts/*.js')
		.pipe(connect.reload());
});
//
gulp.task('watch', function () {
	gulp.watch(['app/*.html'], ['html']);
	gulp.watch(['app/styles/css/*.css'], ['css']);
	gulp.watch(['app/jade/*.jade'], ['jade']);
	gulp.watch(['app/scripts/*.js'], ['js']);
});



// TODO: Сборка не донастроена
// gulp.task('build', function () {
// 	var assets = useref.assets();
// 	return gulp.src('app/*.html')
// 		.pipe(assets)
// 		.pipe(gulpif('app/scripts/*.js', uglify()))
// 		.pipe(gulpif('app/styles/css/*.css', minifyCss()))
// 		.pipe(assets.restore())
// 		.pipe(useref())
// 		.pipe(gulp.dest('dist'));
// });

// TODO: Очистка не донастроена
// gulp.task('clean', function () {
// 	return gulp.src('dist', {read: false}).pipe(clean());
// });

// запуск
gulp.task('default', ['connect', 'watch']);