/* jimmylet/meet-express
* bin/server.js
* started at 23/09/2016
*/
"user strict";

var express = require( "express" ),
    responseTime = require( "response-time" ),
    bodyParser = require( "body-parser" ), // Permet d'interpreter les requêtes en post
    logMiddleWare = require( "./middlewares/log" ), // on peut ne pas mettre le .js à log
    mainRoutes = require( "./routes/main" ),
    pug = require ('pug'),
    oApp;

// setup express
oApp = express();

// Configuration middlewares
oApp.use( responseTime() ); // Ça rajoute un header response-time qui mesure le temps de réponse du serveur (voir onglet network)
oApp.use ( bodyParser.urlencoded( {
  "extended": true
} ) );
oApp.use( bodyParser.json() );
oApp.use( logMiddleWare );
oApp.use( express.static( __dirname + "/../static" ) ); // Pour tous les fichiers static, va voir dans le fichier static

// Configure template engine
oApp.set( "views", __dirname + "/views" ); // On crée dans /bin un dossier /views
oApp.set ( "view engine", "hbs" );

// Configuration routes
oApp.use ( mainRoutes );


oApp.listen( 8080, function(){ // La function est exécutée si tout se passe bien.
  console.log( "Express is listening on port 8080" );
} );
