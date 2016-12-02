var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task('server', function(){
	browserSync.init({
		server: {
			baseDir: 'app/'
		},
	});
});

gulp.task('watch',function(){
	gulp.watch([
		'app/*.html',
		'app/js/**/*.js',
		'app/styles/**/*.css',
		'app/styles/**/*.scss'
		]).on('change', browserSync.reload);
});
//запуск командой gulp
gulp.task('default',['server', 'watch']);