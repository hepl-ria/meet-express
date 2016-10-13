/*
*
* bin/controllers/home.js - main app entry point
*
* coded by Pauline Viroux
*
*/

"use strict";

var Buddies = require( "../models/buddies.js" );

module.exports = function( oRequest, oResponse ){
    Buddies.get( function( oError, aBuddies){
        if ( oError ) {
            console.log( "Error:", oError);
        } 

        if ( oRequest.query.clean != null ) {
            return Buddies.set( [], function( oSaveError ){
                if (oSaveError) {
                    console.log( "SaveError:", oSaveError);
                }
                oResponse.render( "index", {
                    "buddies": []
                });
            } );
        }


        oResponse.render( "index", {
            "buddies": aBuddies || []
        } );
    });
} ;