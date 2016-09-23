/* jimmylet/meet-express
* bin/server.js
* started at 23/09/2016
*/
"user strict";

var express = require( "express" ),
    responseTime = require( "response-time" ),
    bodyParser = require( "body-parser" ), // Permet d'interpreter les requêtes en post
    logMiddleWare = require( "./middlewares/log" ), // on peut ne pas mettre le .js à log
    oApp;

// setup express
oApp = express();


oApp.use( responseTime() ); // Ça rajoute un header response-time qui mesure le temps de réponse du serveur (voir onglet network)
oApp.use ( bodyParser.urlencoded( {
  "extended": true
} ) );
oApp.use( bodyParser.json() );
oApp.use( logMiddleWare );



oApp.get( "/", function( oRequest, oResponse ){ // oApp c'est express. On lui dit que la route d'entrée (en GET), la function que l'on a définit sera exécutée
  oResponse.send( "Hello, world!" );
} );

oApp.listen( 8080, function(){ // La function est exécutée si tout se passe bien.
  console.log( "Express is listening on port 8080" );
} );
