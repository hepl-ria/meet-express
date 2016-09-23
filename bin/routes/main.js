/* hepl-ria/meet-express
 *
 * /bin/server.js - Discover express for node.js
 *
 * coded by DYLAN
 * started at 23/09/2016
 */

 "use strict";

var oRouter = require( "express" ).Router(),
    fHomePageController = require( "../controllers/home" ),
    fAddBuddyController = require ( "../controllers/add" );

oRouter.get( "/", fHomePageController); // quand on arrive sur la route / donc home page on execute la fonction fHomePageController
oRouter.post( "/", fAddBuddyController); // on ajoute la route en post

module.exports = oRouter;
