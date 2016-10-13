/*
*
* bin/controllers/add.js - main app entry point
*
* coded by Pauline Viroux
*
*/

"use strict"

var Buddies = require( "../models/buddies" );

module.exports = function( oRequest, oResponse ){
    Buddies.get( function( oError, aBuddies) {
        var POST = oRequest.body,
            sName = ( POST.name || "" ).trim(),
            sDecription = (POST.description || "").trim(),
            oNewBuddy;

        if ( oError ) {
            console.log("Error:", oError);
        }

        if ( !sName || !sDecription ) {

            return oResponse.render( "index", {
                "buddies": aBuddies || [],
                "hasErrors": true,
                "post": {
                    "name": sName,
                    "description": sDecription
                }
            } );
        }

        oNewBuddy = {
            "name": sName,
            "description": sDecription
        };

        aBuddies.push( oNewBuddy );

        Buddies.set( aBuddies, function( oSaveError ){
            if ( oRequest.get( "X-Requested-With" ) === "XMLHttpRequest") {
                return oResponse.json( {
                    "name": sName,
                    "description": sDecription,
                    "avatar": "http://api.adorable/io/avatars/90/" + sName + ".png",
                    "alt": "Avatar de" + sName
                });
            }

            oResponse.render( "index", {
                "buddies": aBuddies || [],
                "hasErrors": !!oSaveError,
                "post": {}
            })
        } );
    } );
};