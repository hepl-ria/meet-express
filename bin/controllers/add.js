/* quentin/meet-express
 *
 * /bin/controllers/add.js - add budy controller
 * coded by quentin
 * started at 23/09/2016
 */

"use strict";

var Buddies = require( "../models/buddies" );

module.exports = function( oRequest, oResponse ) {
    Buddies.get( function( oError, aBuddies ) {
        var POST = oRequest.body,
            sName = ( POST.name || "" ).trim(),  // si on a POST.name tu fait trim dessu mais si on a rien tu fait trim sur une chaine vide
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

            if ( oRequest.get( "X-Requested-With" ) === "XMLHttpRequest" ) {
                return oResponse.json( {
                    "name": sName,
                    "description": sDescription,
                    "avatar": "http://api.adorable.io/avatar/90/" + sName + ".png",
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
