/* hepl-ria/meet-express
 *
 * /bin/server.js - Discover express for node.js
 *
 * coded by DYLAN
 * started at 23/09/2016
 */

"use strict";

var express = require( "express" ),
    responseTime = require ( "response-time" ),
    bodyParser = require ( "body-parser" ),
    logMiddleware = require( "./middlewares/log"),
    mainRoutes = require( "./routes/main" ),
    oApp;

// setup express

oApp = express(); // le serveur express est stocké dans oApp.

// configure middlewares

oApp.use(responseTime());

oApp.use( bodyParser.urlencoded({
  "extended": true
}) );
// cela permet de comprendre les requete en post, put, patch, delete etc

oApp.use( bodyParser.json() );

oApp.use( logMiddleware );

//configure temlate engine

oApp.set( "views", __dirname + "/views" ); // on lui dit ou se trouve le chemin du dossier du fichier courant, ici on est dans srv et dirname c'est bin et dans bin on crée un dossier views
oApp.set ( "view engine", "hbs" ); // et ici on lui dit le moteur a utiliser donc handlebars


//configure routes ( le controlleurs de route c'est la fonction ci-dessous)

oApp.use( mainRoutes ); //pour lui dire qu'on va utiliser les routes dans routes/main.js

// pour lui dire la route on lui passe / donc le dossier par défaut et une fonction avec un parametre qui contient toute les infos sur la requete web et oResponse c'est un object qui nous permet de créer la réponse.

oApp.listen( 8080, function(){
  console.log(  "Express is listening on port 8080" );
} );// ici on lui dit quel port écouté donc par ex 8080 et on lui passe une fonction qui va dire simplement un messsage pour dire que tout est OK si le serveur marche bien.
