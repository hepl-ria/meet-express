/* hepl-ria/meet-express
 *
 * /bin/controllers/home.js - Server main page
 *
 * coded by Mucht
 * started at 23/09/2016
 */

"use strict";

module.exports = function( oRequest, oResponse ){
    // 1er param = fichier à aller chercher.
    // 2e param = variables qu'on transmet au template.
    // pas besoin de mettre le ".hbs"
    oResponse.render( "index.hbs", {
        "name": "Mucht"
    } );
};
