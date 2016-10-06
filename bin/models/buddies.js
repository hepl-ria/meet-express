/* quentin/meet-express
 *
 * /bin/models/buddies.js - buddies getter/setter
 * coded by quentin
 * started at 23/09/2016
 */

"use strict";

var fs = require( "fs" ),
    sDataFilePath = __dirname + "/../../data/buddies.json";

exports.get = function( fNext ) {  // read buddies.json
    fs.readFile( sDataFilePath, "utf-8", function( oError, sFileContent ) {
        var aBuddies = [];

        if ( oError ) {
            fNext( oError );
        }

        try {
            aBuddies = JSON.parse( sFileContent );
        } catch ( oJSONError ) {
            return fNext( oJSONError );
        }

        fNext( null, aBuddies );
    } );
};

exports.set = function( aBuddies, fNext ) {  // write buddies.json
    fs.writeFile( sDataFilePath, JSON.stringify( aBuddies ), "utf-8", fNext );
};
