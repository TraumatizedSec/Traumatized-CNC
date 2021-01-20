const fs = require("fs");
const func = require("./functions.js");
var term = require( 'terminal-kit' ).terminal ;


exports.Input = function(str) {
    term( str ) ;

    term.inputField(
        { history: history , autoComplete: autoComplete , autoCompleteMenu: true } ,
        function( error , input ) {
            if(!input) {
                return null;
            } else {
                return input;
            }
        }
    ) ;
}