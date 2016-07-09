'use strict';

/**
 * Get theme directory
 *
 * @param  {Function} next Callback.
 */
module.exports = ( next ) => {

	process.argv.slice( 3 ).forEach( ( arg ) => {
		if ( -1 < arg.indexOf( '--theme-dir' ) ) {
			global.THEME_DIR = arg.replace( '--theme-dir=', '' );
		}
	} );

	next();
};
