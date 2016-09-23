/* jimmylet/meet-express
* bin/controllers/home.js
* started at 23/09/2016
*/


module.exports =
function( oRequest, oResponse ) { // la function que l'on a définit sera exécutée
  oResponse.render( "index.hbs", {
    "name": "Jimmy"
  } );
};
