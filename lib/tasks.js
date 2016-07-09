'use strict';

const gulp = require( 'gulp' ),
	gutil = require( 'gulp-util' );

gulp.task( 'setup', require( './theme_dir' ) );

gulp.task( 'build', [ 'setup' ], () => {
	gutil.log( gutil.colors.green( THEME_DIR ) );
} );
