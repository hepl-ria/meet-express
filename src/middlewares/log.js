// @flow
/* leny/meet-express
 *
 * /middlewares/log - Simple log middleware
 *
 * coded by leny@flatLand!
 * started at 15/09/2016
 */

export default function( oRequest:Object, oResponse:Object, fNext:Function ) {
    console.log( `(${ oRequest.method }) ${ oRequest.url }` ); // eslint-disable-line no-console
    fNext();
}
