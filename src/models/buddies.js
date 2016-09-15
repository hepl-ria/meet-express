// @flow
/* leny/meet-express
 *
 * /models/buddies.js - Buddies getter/setter
 *
 * coded by leny@flatLand!
 * started at 15/09/2016
 */

 type Buddy = {
     name:string,
     description:string,
 };

import { readFile, writeFile } from "fs";

const DATAFILE_PATH = `${ __dirname }/../../data/buddies.json`;

let fGet:Function, fSet:Function;

fGet = function( fNext:Function ) {
    readFile( DATAFILE_PATH, "utf-8", ( oError, sFileContent:string ) => {
        let aBuddies:Array<Buddy> = [];

        if ( oError ) {
            return fNext( oError );
        }

        try {
            aBuddies = JSON.parse( sFileContent );
        } catch ( oJSONError ) {
            return fNext( oJSONError );
        }

        return fNext( null, aBuddies );
    } );
};

fSet = function( aBuddies:Array<Buddy>, fNext:Function ) {

    writeFile( DATAFILE_PATH, JSON.stringify( aBuddies ), "utf-8", fNext );

};

export {
    fGet as get,
    fSet as set,
};
