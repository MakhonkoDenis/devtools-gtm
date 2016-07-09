'use strict';

const exec = require( 'child_process' ).exec;

module.exports = ( task, cwd, next ) => {

	let command = `gulp ${ task }\
		--color \
		--gulpfile="${ GULPFILE_PATH }/tasks.js"\
		--theme-dir="${ cwd }"`;

	exec( command, ( error, stdout, stderr ) => {
		if ( '' !== stdout ) console.log( stdout );
		if ( '' !== stderr ) console.log( stderr );

		next( error );
	} );
};
