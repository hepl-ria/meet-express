/* leny/meet-express
 *
 * /server.js - main entry point
 *
 * coded by leny@flatLand!
 * started at 15/09/2016
 */

import express from "express";
import responseTime from "response-time";
import bodyParser from "body-parser";
import logMiddleware from "./middlewares/log";
import mainRoutes from "./routes/main";

// setup express

let oApp;

oApp = express();

oApp.use( responseTime() );
oApp.use( logMiddleware );
oApp.use( bodyParser.urlencoded( {
    "extended": false,
} ) );
oApp.use( bodyParser.json() );
oApp.use( express.static( `${ __dirname }/../static` ) );

oApp.set( "views", `${ __dirname }/views` );
oApp.set( "view engine", "hbs" );

oApp.use( mainRoutes );

oApp.listen( 8080, () => {
    console.log( "Express listening localhost on port 8080." ); // eslint-disable-line no-console
} );
