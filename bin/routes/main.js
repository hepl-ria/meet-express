/* jimmylet/meet-express
* bin/routes/main.js
* started at 23/09/2016
*/

"use strict";

var oRouter = require( "express" ).Router(),
    fHomePageController = require( "../controllers/home" );

oRouter.get( "/", fHomePageController ); // On dit qu'on veux du get
module.exports = oRouter;
