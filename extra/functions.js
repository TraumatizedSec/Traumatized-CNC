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

exports.removeSTR = function(str, array_of_str_to_remove) {
    let new_str = "";
    array_of_str_to_remove.forEach(rmSTR => {
        if(str.includes(rmSTR)) {
            new_str = str.split(rmSTR).join('');
        }
    })
}

exports.autism = async function() {
  let r = await(await fetch("https://google.com")).text();

  return r;
}

