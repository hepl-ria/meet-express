/* ria/meet-express
 *
 * /bin/routes/main.js - Main routes
 *
 * coded by Mucht
 * started at 23/09/2016
 */

 "use strict";

 var
    oRouter = require( "express" ).Router(),
    oHomepageController = require( "../Controllers/home" ),
    fAddBuddyController = require( "../controllers/add" );

 oRouter.get( "/", oHomepageController );
 oRouter.post( "/", fAddBuddyController );

 module.exports = oRouter;
