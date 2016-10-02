/* hepl-ria/meet-express
 *
 * /bin/middleware/log.js - Discover express for node.js
 *
 * coded by DYLAN
 * started at 23/09/2016
 */

 "use strict";

 module.exports = function( oRequest, oResponse, fNext ){

     console.log( "(" + oRequest.method + ")"+ oRequest.url ); // pour afficher la méthode et l'url dans la console
     fNext();// on lui dit de passer a la suite donc le serveur n'attend plus 2min la réponse.
 }; // middleware fNext est une fonction de callback pour passer a la suite.
