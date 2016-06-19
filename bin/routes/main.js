/* hepl-ria/meet-express
 *
 * /bin/routes/main.js - Main routes
 *
 * coded by leny@flatLand!
 * started at 19/06/2016
 */

"use strict";

var oRouter = require( "express" ).Router(),
    oHomepageController = require( __dirname + "/../controllers/home.js" ),
    oAddBuddyController = require( __dirname + "/../controllers/add.js" );

oRouter.get( "/", oHomepageController );
oRouter.post( "/", oAddBuddyController );

module.exports = oRouter;
