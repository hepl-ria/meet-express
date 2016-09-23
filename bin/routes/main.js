/* quentin/meet-express
 *
 * /bin/routes/main.js - main routes
 * coded by quentin
 * started at 23/09/2016
 */

"use strict";

var oRouter = require( "express" ).Router(),
    fHomepageController = require( "../controllers/home" ),
    fAddBuddyController = require( "../controllers/add" );

oRouter.get( "/", fHomepageController );
oRouter.post( "/", fAddBuddyController );

module.exports = oRouter;
