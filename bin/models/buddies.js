/*
* bin/models/buddies.js - main app entry point
*
* coded by Pauline Viroux
*
*/

"use strict";

//Méthode get pour recuperer les buddies
//Méthode set pour écrire un nouveau buddy

var fs = require( "fs" ),
    sDataFilePath = __dirname + "/../../data/buddies.json";

exports.get = function( fNext ){
    //TODO: read buddies.json
    fs.readFile( sDataFilePath, "utf-8", function( oError, sFileContent ){
        var aBuddies = []; //Si fichier vide, on retourne un tableau vide
        if ( oError ) {
            return fNext( oError );
        }

        try {
            aBuddies = JSON.parse( sFileContent );
        } catch( oJSONError ) {
            return fNext( oJSONError );
        }

        fNext( null, aBuddies );
    } )
};

exports.set = function( aBuddies, fNext ){
    fs.writeFile( sDataFilePath, JSON.stringify( aBuddies ), "utf-8", fNext );
};