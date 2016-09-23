/*
* bin/server.js - main app entry point
*
* coded by Pauline Viroux
*
*/

"use strict";

var express = require( "express" ),
    logMiddleware = require( "./middlewares/log" ),
    bodyParser = require( "body-parser" ),
    mainRoutes = require( "./routes/main" ),
    responseTime = require( "response-time" ),
    oApp;

//setup express ( Créer une instance de express )
oApp = express();


//Config middlewares
oApp.use( responseTime() );
oApp.use( bodyParser.urlencoded( {
    "extended" : true
} ) );
oApp.use( bodyParser.json() );
oApp.use( logMiddleware );
oApp.use( express.static( __dirname + "/../static" ) );

//configure template engine
oApp.set( "views", __dirname + "/views" );
oApp.set( "view engine", "hbs" );
//configure routes
//Express: serveur web qui réagit à des routes. oApp c'est l'instance de express. Si on appelle "/" en get, la fonction qu'on écrit la, va etre executée.
oApp.use( mainRoutes );

//listen
oApp.listen( 8080, function(){
    console.log("Express is listenning on port 8080" ); 
} );


//Middleware; finction appelée au milieu d'une requete