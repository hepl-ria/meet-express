/* anne/meet-express
*
* /bin/controllers/home.js - server main page
*
* coded by Anne
* started at 23/09/2016
*/

"use strict";
// Buddies est un modèle, un objet
var Buddies = require( "../models/buddies" );

module.exports =  function( oRequest, oResponse ) {
	Buddies.get( function( oError, aBuddies ) {
		if ( oError ) {
			console.log( "Error: ", oError );
			// TODO: manage error
		}

		if ( oRequest.query.clean != null ) {
			return Buddies.set( [], function( oSaveError ) {
				if( oSaveError ) {
					console.log(  "SaveError: " + oSaveError );
				}
				oResponse.render( "index", {
					"buddies": []
				} );
			} );
		}

		// 1er param, le fichier de template qu'il doit trouver, le 2e param est un objet avec des variables dedans
		oResponse.render( "index", {
			"buddies": aBuddies || []
		} );
	} );
	
};
