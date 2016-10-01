/* hepl-ria/meet-express
 *
 * /bin/middlewares/log.js - Simple logging middleware.
 *
 * coded by Mucht
 * started at 23/09/2016
 */

 "use strict";

// façon d'expoter quelque chose en node.js. Ne marche qu'une fois.
 module.exports = function( oRequest, oResponse, fNext ){
     console.log( "(" + oRequest.method + ")" + oRequest.url );
     fNext();
 };
