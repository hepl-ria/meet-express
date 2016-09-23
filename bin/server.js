/* hepl-ria/meet-express
 *
 * /bin/server.js - Discover express for node.js
 *
 * coded by Mucht
 * started at 23/09/2016
 */

 "use strict";

// Dans les require on peut ne pas mettre les ".js" si on veut.
 var
    express = require( "express" ),
    responseTime = require( "response-time" ),
    bodyParser = require( "body-parser" ),
    logMiddleware = require( "./middlewares/log.js" ),
    mainRoutes = require( "./routes/main" ),
    oApp;

// setup express
oApp = express();

oApp.use( responseTime() );

oApp.use( bodyParser.urlencoded( {
    "extended": true
} ) );
oApp.use( bodyParser.json() );

    // middleware
    //fNext est une fonction de express
oApp.use( logMiddleware );

    // Configure template engine
    // Pas besoin d'un require pour HBS c'est express qui le fait pour nous.
oApp.set( "views", __dirname + "/views" );
oApp.set( "view engine", "hbs" );

    // setup une route
    // 1er argument donne la route. Le 2e donne une fonction qui sera exécuté si on accede à ce chemin en GET.
oApp.use( mainRoutes );

    // setup un port
oApp.listen( 8080, function(){
    console.log( "Express is listening on port 8080." );
} );
