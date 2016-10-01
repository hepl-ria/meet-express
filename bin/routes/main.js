/* anne/meet-express
*
* /bin/routes/main.js - main routes
*
* coded by Anne
* started at 23/09/2016
*/

"use strict";

var oRouter = require( "express" ).Router(),
	fHomePageController = require( "../controllers/home" ),
	fAddBuddyController = require( "../controllers/add" );

oRouter.get( "/", fHomePageController );
oRouter.post( "/", fAddBuddyController );

module.exports = oRouter;