/* leny/meet-express
 *
 * /middlewares/log - Simple log middleware
 *
 * coded by leny@flatLand!
 * started at 15/09/2016
 */

export default function( oRequest, oResponse, fNext ) {
    console.log( `(${ oRequest.method }) ${ oRequest.url }` ); // eslint-disable-line no-console
    fNext();
}
