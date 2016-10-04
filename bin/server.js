/* hepl-ria/meet-express
 *
 * /bin/server.js - Discover express for node.js
 *
 * coded by leny@flatLand!
 * started at 19/06/2016
 */

"use strict";

var express = require( "express" ),
    responseTime = require( "response-time" ),
    bodyParser = require( "body-parser" ),
    logMiddleware = require( __dirname + "/middlewares/log" ),
    mainRoutes = require( __dirname + "/routes/main" ),
    oApp;

// setup express

oApp = express();

// configure middlewares
oApp.use( responseTime() );
oApp.use( logMiddleware );
oApp.use( bodyParser.urlencoded( {
    "extended": false
} ) );
oApp.use( bodyParser.json() );
oApp.use( express.static( __dirname + "/../static" ) );

// configure template engine
oApp.set( "views", __dirname + "/views" );
oApp.set( "view engine", "pug" );

// configure routes
oApp.use( mainRoutes );

// listen
oApp.listen( 8080, function() {
    console.log( "Express listening localhost on port 8080" );
} );
