/* hepl-ria/meet-express
 *
 * /bin/controllers/home.js - Server main page
 *
 * coded by DYLAN
 * started at 23/09/2016
 */

"use strict";

module.exports = function( oRequest, oResponse){

  oResponse.render( "index", {

    "name": "Dylan Schirino"

  } );
};
 // pour lui dire quel template on utilise ! donc index dans views et le deuxieme parametre c'est un objet avec des variables
