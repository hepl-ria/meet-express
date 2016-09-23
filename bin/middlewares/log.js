/*
*
* bin/server.js - main app entry point
*
* coded by Pauline Viroux
*
*/

"use strict";

module.exports =  function( oRequest, oResponse, fNext){
    console.log( "(" + oRequest.method + ")" + oRequest.url );
    fNext();
}; //rendre disponible depuis l'extérieur ce qu'on met comme valeur! Ca ne fonctionne qu'une fois, ca ne prend que le dernier! Un seul export!