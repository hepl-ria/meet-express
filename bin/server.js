/* hepl-ria/meet-express
 *
 * /bin/server.js - Discover express for node.js
 *
 * coded by DYLAN
 * started at 23/09/2016
 */
 "use strict";

var express = require( "express" ),
    logMiddleware = require( "./middlewares/log"),
    oApp;

// setup express

oApp = express(); // le serveur express est stocké dans oApp.

oApp.use( logMiddleware );

oApp.get( "/", function( oRequest, oResponse){

  oResponse.send( "Hello World" );

} ); // pour lui dire la route on lui passe / donc le dossier par défaut et une fonction avec un parametre qui contient toute les infos sur la requete web et oResponse c'est un object qui nous permet de créer la réponse.

oApp.listen( 8080, function(){
  console.log(  "Express is listening on port 8080" );
} );// ici on lui dit quel port écouté donc par ex 8080 et on lui passe une fonction qui va dire simplement un messsage pour dire que tout est OK si le serveur marche bien.
