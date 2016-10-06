/* quentin/meet-express
 *
 * /bin/middlewares/log.js - simple loggin middlewares
 * coded by quentin
 * started at 23/09/2016
 */

"use strict";

module.exports = function( oRequest, oResponse, fNext ) {
    console.log( "(" + oRequest.method + ")" + oRequest.url );
    fNext();
};
