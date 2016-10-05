/* jimmylet/meet-express
* bin/routes/main.js
* started at 23/09/2016
*/

"use strict";

var oRouter = require( "express" ).Router(),
    fHomePageController = require( "../controllers/home" ),
    fAddBuddyController = require( "../controllers/add" );

oRouter.get( "/", fHomePageController ); // On dit qu'on veux du get
oRouter.post( "/", fAddBuddyController );
module.exports = oRouter;
