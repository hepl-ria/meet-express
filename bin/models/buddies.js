/* ria/meet-express
 *
 * /bin/models/buddies.js - Buddies getter/setter
 *
 * coded by Mucht
 * started at 23/09/2016
 */

"use strict";

var
    fs = require( "fs" ),
    sDataFilePath = __dirname + "/../../data/buddies.json";

exports.get = function( fNext ){
    // Read buddies.json
    fs.readFile( sDataFilePath, "utf-8", function( oError, sFileContent ){
        var aBuddies = [];

        if ( oError ) {
            fNext( oError );
        }

         // l'objet json est dans JS de base donc pas besoin de require.
         try {
             aBuddies = JSON.parse( sFileContent );
         } catch( oJSONError ){
             return fNext( oJSONError );
         }

         fNext( null, aBuddies );
     } );
 };

 exports.set = function( aBuddies, fNext ){
     // TODO: write buddies.json
 }
