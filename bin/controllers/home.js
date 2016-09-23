/* jimmylet/meet-express
* bin/controllers/home.js
* started at 23/09/2016
*/


var Buddies = require( "../models/buddies" ); // On inclu le modèle buddies

module.exports = function( oRequest, oResponse ) { // la function que l'on a définit sera exécutée

  Buddies.get( function( oError, aBuddies ) {
    if (oError) {
      console.log("Error:", oError );
      // TODO: message errors!
    }

  if ( oRequest.query.clean != null ) {
    return Buddies.set( [], function( oSaveError) {
      if (oSaveError) {
        console.log("SaveError:", oSaveError);
      }
      oResponse.render( "index", {
        "buddies": []
      } );
    } );
  }

  oResponse.render( "index.hbs", {
    "buddies": aBuddies || []
    } );
  } );
};
