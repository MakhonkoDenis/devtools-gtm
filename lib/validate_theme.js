'use strict';

const fs = require( 'fs' );

/**
 * Validate a theme directory
 * @param  {string}   cwd      Theme directory.
 * @param  {function} callback Callback.
 */
module.exports = ( cwd, callback ) => {
	fs.access( `${ cwd }/style.css`, fs.F_OK | fs.R_OK, ( error ) => {
		if ( null !== error ) return callback( error );
		return callback( null, cwd );
	} );
}
