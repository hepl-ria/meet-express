/* quentin/meet-express
 *
 * /bin/controllers/homer.js - server main page
 * coded by quentin
 * started at 23/09/2016
 */

"use strict";

var Buddies = require( "../models/buddies" );

module.exports = function( oRequest, oResponse ) {
    Buddies.get( function ( oError, aBuddies ) {
        if ( oError ) {
            console.log( "Error:", oError );
        }

        if ( oRequest.query.clean != null ) {
            return Buddies.set( [], function( oSaveError ) {
                if ( oSaveError ) {
                    console.log( "SaveError:", oSaveError );
                }
                oResponse.render( "index", {
                    "buddies": []
                } );
            } );
        }

        oResponse.render( "index", {
            "buddies": aBuddies || []
        } ); // le premier paramètre (index.hbs) est le fichier de template et on n'est pas obliger de spécifier le type de fichier
    } );
};
