/* jimmylet/meet-express
* bin/models/buddies.js
* started at 23/09/2016
*/

"use strict";

var fs = require( "fs" ), // Librairie pour manipuler les fichiers
    sDataFilePath = __dirname + "/../../data/buddies.json";

exports.get = function( fNext ) {
  // read buddies.json
  fs.readFile( sDataFilePath, "utf-8", function( oError, sFileContent ){ // Lire le fichier, sFileContent contient le contenu de notre fichier
    var aBuddies = [];

    if (oError) {
      fNext( oError );
    }

    try {
      aBuddies = JSON.parse( sFileContent );
    } catch (oJSONError) {
      return fNext( oJSONError );
    }

    fNext( null, aBuddies );
  } );
};

exports.set = function( aBuddies, fNext ) {
  // TODO: write buddies.json
};
