'use strict';

const gutil = require( 'gulp-util' );

/**
 * Default error handler
 *
 * @param {Error} error Error object.
 */
module.exports = ( error ) => {
	if ( null !== error ) {
		gutil.log( gutil.colors.red( '[ERROR] ', error ) );
		process.exit( -2 );
	}
};
