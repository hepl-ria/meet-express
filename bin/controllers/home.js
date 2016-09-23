/* hepl-ria/meet-express
*
* /bin/controllers/home.js - Server main page
*
* coded by DYLAN
* started at 23/09/2016
*/

"use strict";

var Buddies = require( "../models/buddies.js" );

module.exports = function( oRequest, oResponse ){

  Buddies.get( function( oError, aBuddies ){
    if( oError ){
      console.log("Error:",oError);
    }

    oResponse.render( "index", {

      "buddies": aBuddies || []

    } );
  } );

};
// pour lui dire quel template on utilise ! donc index dans views et le deuxieme parametre c'est un objet avec des variables
