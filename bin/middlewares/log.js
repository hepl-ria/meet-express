/* jimmylet/meet-express
* bin/middlewares/log.js
* started at 23/09/2016
*/

"use strict";

module.exports = function( oRequest, oResponse, fNext ) { // Accessible à partir d'autre fichiers, mais ne marche qu'une fois (un seul export, si je fais un 2e c'est le deuxieme en compte)
  console.log( "(" + oRequest.method + ")" + oRequest.url );
  fNext(); // Dire passe à la suite (prochain middleware)
};
