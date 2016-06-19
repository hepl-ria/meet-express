/* hepl-ria/meet-express
 *
 * /bin/middlewares/log.js - Simple log middleware
 *
 * coded by leny@flatLand!
 * started at 19/06/2016
 */

"use strict";

module.exports = function( oRequest, oResponse, fNext ) {
    console.log( "(" + oRequest.method + ")", oRequest.url );
    fNext();
} ;
