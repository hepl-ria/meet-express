/* hepl-ria/meet-express
 *
 * /bin/models/buddies.js - Buddies getter/setter
 *
 * coded by Dylan Schirino
 * started at 23/09/2016
 */

 "use strict";

 var fs = require( "fs" ),
    sDataFilePath = __dirname + "/../../data/buddies.json"; //on concatene le path du fichier

 exports.get = function( fNext ){

   //TODO: read buddies.json
   fs.readFile( sDataFilePath, "utf-8", function( oError, sFileContent ){

    var aBuddies = [];

    if ( oError ){
      return fNext( oError ); // gestion des erreurs
    }

    try{
    aBuddies = JSON.parse( sFileContent ); // le JSOn est disponible directement
  } catch( oJSONError){ // on attrape l'exeption de JSON et on la transforme en erreur
    return fNext( oError );
  }

  fNext( null, aBuddies ); // on a pas d'erreur donc nul et les buddies

   });
 };

 exports.set = function( aBuddies, fNext ){

   //TODO: write buddies.json
   fs.writeFile( sDataFilePath, JSON.stringify( aBuddies ), "utf-8", fNext ); //on écrit dans le fichier en json

 };
