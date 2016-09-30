/* anne/meet-express
*
* /bin/middlewares/log - simple logging middleware
*
* coded by Anne
* started at 23/09/2016
*/

"use strict";

module.exports = function( oRequest, oResponse, fNext ) {
	console.log( "(" + oRequest.method + ")" + oRequest.url );
	fNext();
} ;
// module.exports rend disponible depuis l'extérieur ce qu'on met comme valeur
// !!! module.exports ne fonctionne qu'une fois, il ne prend que le dernier si on en écrit plusieurs

// fNext: fonction de callback pour passer à la suite
// les middlewares sont lus dans l'ordre