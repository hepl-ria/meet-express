/* leny/meet-express
 *
 * /controllers/home.js - Controller for homepage
 *
 * coded by leny@flatLand!
 * started at 15/09/2016
 */

import * as Buddies from "../models/buddies";

export default function( oRequest, oResponse ) {

    Buddies.get( ( oError, aBuddies ) => {
        if ( oError ) {
            console.log( "Error:", oError ); // eslint-disable-line no-console
        }

        if ( oRequest.query.clean != null ) {
            return Buddies.set( [], ( oSaveError ) => {
                if ( oSaveError ) {
                    console.log( `SaveError: ${ oSaveError }` ); // eslint-disable-line no-console
                }

                return oResponse.render( "index", {
                    "buddies": [],
                } );
            } );
        }

        return oResponse.render( "index", {
            "buddies": aBuddies || [],
        } );
    } );

}
