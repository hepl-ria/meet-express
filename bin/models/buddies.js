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

// On lui donne le tableau des buddies qu'on veut écrire, on le converti en JSON puis on l'écrit dans le fichier. une fois fait on exécute fNext.
 exports.set = function( aBuddies, fNext ){
     fs.writeFile( sDataFilePath, JSON.stringify( aBuddies ), "utf-8", fNext );
 }
