/* hepl-ria/meet-express
 *
 * /bin/controllers/add.js - Add buddy controller
 *
 * coded by leny@flatLand!
 * started at 19/06/2016
 */

"use strict";

var Buddies = require( __dirname + "/../models/buddies" );

module.exports = function( oRequest, oResponse ) {
    Buddies.get( function( oError, aBuddies ) {
        var POST = oRequest.body,
            sName = ( POST.name || "" ).trim(),
            sDescription = ( POST.description || "" ).trim(),
            oNewBuddy;

        if ( oError ) {
            console.log( "Error:", oError );
        }

        if ( !sName || !sDescription ) {
            return oResponse.render( "index", {
                "buddies": aBuddies || [],
                "hasErrors": true,
                "post": {
                    "name": sName,
                    "description": sDescription
                }
            } );
        }

        oNewBuddy = {
            "name": sName,
            "description": sDescription
        };

        aBuddies.push( oNewBuddy );

        Buddies.set( aBuddies, function( oSaveError ) {

            if ( oRequest.get( "x-requested-with" ) === "XMLHttpRequest" ) {
                return oResponse.json( {
                    "name": sName,
                    "description": sDescription,
                    "avatar": "http://api.adorable.io/avatars/90/" + sName + ".png",
                    "alt": "Avatar de " + sName
                } );
            }

            oResponse.render( "index", {
                "buddies": aBuddies || [],
                "hasErrors": !!oSaveError,
                "post": {}
            } );
        } );
    } );

};
