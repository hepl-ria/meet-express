/* hepl-ria/meet-express
 *
 * /bin/controllers/home.js - Server main page
 *
 * coded by leny@flatLand!
 * started at 19/06/2016
 */

"use strict";

var Buddies = require( __dirname + "/../models/buddies" );

module.exports = function( oRequest, oResponse ) {

    Buddies.get( function( oError, aBuddies ) {
        if ( oError ) {
            console.log( "Error:", oError );
        }

        if ( oRequest.query.clean != null ) {
            return Buddies.set( [], function( oSaveError ) {
                if ( oSaveError ) {
                    console.log( "SaveError:", oSaveError );
                }

                return oResponse.render( "index", {
                    "buddies": []
                } );
            } );
        }

        oResponse.render( "index", {
            "buddies": aBuddies || []
        } );
    } );

};
