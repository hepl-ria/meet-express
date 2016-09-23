/* quentin/meet-express
 *
 * /bin/server.js - main app entry point
 * coded by quentin
 * started at 23/09/2016
 */

"use strict";

var express = require( "express" ),
    responseTime = require( "response-time" ),
    bodyParser = require( "body-parser" ),
    logMiddleware = require( "./middlewares/log" ), // on n'est pas obliger de donner le type de fichier (.js ou autre) dans un require
    mainRoutes = require( "./routes/main" ),
    oApp;

// setup express
oApp = express();

// configure middlewares
oApp.use( responseTime() );
oApp.use( bodyParser.urlencoded( {
    "extended": true
} ) );
oApp.use( bodyParser.json() );
oApp.use( logMiddleware );
oApp.use( express.static( __dirname + "/../static" ) );

// configure template engine
oApp.set( "views", __dirname + "/views" );
oApp.set( "view engine", "hbs" );

// configure routes
oApp.use( mainRoutes );

// listen
oApp.listen( 8080, function() {
    console.log( "Express is listening on port 8080" );
} );
