/*
* bin/routes/main.js - main app entry point
*
* coded by Pauline Viroux
*
*/

"use strict"

var oRouter = require( "express" ).Router(),
    fHomepageController = require( "../controllers/home" ),
    fAddBuddyController = require( "../controllers/add" );

oRouter.get( "/", fHomepageController );
oRouter.post( "/", fAddBuddyController );

module.exports = oRouter;