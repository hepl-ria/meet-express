/* anne/meet-express
*
* /bin/server/js - main app entry point
*
* coded by Anne
* started at 23/09/2016
*/

"use strict";

var express = require( "express" ),
	logMiddleware = require( "./middlewares/log" ),
	// on n'est pas obligés de mettre le .js dans require
    pug = require( "pug" ),
	responseTime = require( "response-time" ),
	bodyParser = require( "body-parser" ),
	mainRoutes = require( "./routes/main" ),
	oApp // instance d'express
	;

// setup express
oApp = express();

// configure middlewares
oApp.use( responseTime() );
oApp.use( bodyParser.urlencoded( {
	"extended" : true
} ) );
oApp.use( bodyParser.json() );
// ces deux lignes permettent d'interpréter les requêtes en post, que express ne sait pas faire normalement
oApp.use( logMiddleware );
oApp.use( express.static( __dirname + "/../static" ) );

// configure template engine
// on définit le dossier dans lequel on va stocker les fichiers de template, ça doit être un chemin absolu
oApp.set( "views", __dirname + "/views" );
// on lui dit d'utiliser le moteur de template pug
oApp.set( "view engine", "pug" );

// on configure une route
oApp.use( mainRoutes );
// express a besoin de réagir à des routes
// 1er param : route d'entrée, /
// oRequest contient les infos sur la requête, oResponse contient les outils qui permettent de créer la réponse

// on lui dit d'écouter un port
oApp.listen( 8080, function() {
	console.log( "Express is listening on port 8080" );
} );