#!/usr/bin/env node

'use strict';

let program = require( 'commander' ),
	cwd = process.cwd();

global.INSTALLED_PATH = process.env.DEVTOOLS_GTM_PATH;
global.GULPFILE_PATH = `${ __dirname }/lib`;
global.gulp = require( 'gulp' );

const gutil = require( 'gulp-util' ),
	fs = require( 'fs' ),
	validate_theme = require( `${ INSTALLED_PATH }/lib/validate_theme` ),
	default_error = require( `${ INSTALLED_PATH }/lib/default_error` ),
	run = require( `${ INSTALLED_PATH }/lib/run_task` ),
	pkg = JSON.parse( fs.readFileSync( `${ INSTALLED_PATH }/package.json`, 'utf-8' ) );

program
	.version( pkg.version )
	.description( pkg.description )
	.usage( '<command>' )
	.command( 'init' )
	.action( () => {
		console.log( '' );
		gutil.log( 'You\'re in', gutil.colors.green( cwd ) );
		console.log( '' );
		gutil.log( gutil.colors.yellow( 'Checking the directory....' ) );

		validate_theme( cwd, ( error ) => {
			if ( null !== error ) default_error( 'Invalid theme directory!' );

			run( 'build', cwd, ( error, result ) => {
				if ( null !== error ) default_error( error.message );
				if ( result ) gutil.log( result );
			} )
		} );
	} );

program.parse( process.argv );

if ( 0 === process.argv.slice( 2 ).length ) {
	program.help();
}
