/* anne/meet-express
*
* /bin/models/buddies.js - Buddies getter/setter
*
* coded by Anne
* started at 23/09/2016
*/

"use strict";

var fs = require( "fs" ),
	sDataFilePath = __dirname + "/../../data/buddies.json";

exports.get = function( fNext ) {
	// d'abord lire le fichier et puis le parser en json
	fs.readFile( sDataFilePath, "utf-8", function( oError, sFileContent ) {
		var aBuddies = [];

		if ( oError ) {
			return fNext( oError );
		}

		try {
			aBuddies = JSON.parse( sFileContent );
		} catch ( oJSONError ) {
			return fNext( oJSONError );
		}

		fNext( null, aBuddies );		
	} );
};

exports.set = function( aBuddies, fNext ) {
	fs.writeFile( sDataFilePath, JSON.stringify( aBuddies ), "utf-8", fNext );
	// chemin, contenu, encodage, fonction qui retourne une erreur éventuelle
};