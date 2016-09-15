/* leny/meet-express
 *
 * /controllers/add.js - Add buddy controller
 *
 * coded by leny@flatLand!
 * started at 15/09/2016
 */

import * as Buddies from "../models/buddies";

export default function( oRequest, oResponse ) {
    Buddies.get( ( oError, aBuddies ) => { // eslint-disable-line consistent-return
        const POST = oRequest.body;

        let sName = ( POST.name || "" ).trim(),
            sDescription = ( POST.description || "" ).trim(),
            oNewBuddy;

        if ( oError ) {
            console.log( `Error: ${ oError }` ); // eslint-disable-line no-console
        }

        if ( !sName || !sDescription ) {
            return oResponse.render( "index", {
                "buddies": aBuddies || [],
                "hasErrors": true,
                "post": {
                    "name": sName,
                    "description": sDescription,
                },
            } );
        }

        oNewBuddy = {
            "name": sName,
            "description": sDescription,
        };

        aBuddies.push( oNewBuddy );

        Buddies.set( aBuddies, ( oSaveError ) => {
            if ( oRequest.get( "x-requested-with" ) === "XMLHttpRequest" ) {
                return oResponse.json( {
                    "name": sName,
                    "description": sDescription,
                    "avatar": `http://api.adorable.io/avatars/90/${ sName }.png`,
                    "alt": `Avatar de ${ sName }`,
                } );
            }

            return oResponse.render( "index", {
                "buddies": aBuddies || [],
                "hasErrors": !!oSaveError,
                "post": {},
            } );
        } );

    } );
}
