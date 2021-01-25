const fs = require("fs");
const func = require("./extra/functions.js");
const crud = require("./auth/crud.js");

// console.log(gay.show_stats(process.argv[2])); //SHOW STATS
// console.log(crud.update(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6])); // UPDATE USER

console.log("╔════════════╦══════════════╦═════════╗");
console.log("║ Name       ║ IP           ║ Level   ║");
console.log("╠════════════╬══════════════╬═════════╣");

var name_box = "  Name      ";
var name_length = name_box.length;

var ip_box = " IP           ";
var ip_length = ip_box.length;

var level_box = " Level   ";
var level_length = level_box.length;



console.log("║" + fix_name("TEST") + "║" + fix_ip("GAY") + "║");
console.log("║" + fix_name("nigger") + "║" + fix_ip("skid") + "║");
console.log("╚═════════════════════════════════════╝");


function fix_name(neww) {
    let new_t = "  " + neww;
    let new_length = name_length - neww.length - 2;
    let count = 0;
    for(count = 0; count < new_length; count++) {
        new_t += " ";
    }

    return new_t;
}

function fix_ip(neww) {
    let new_t = "  " + neww;
    let new_length = ip_length - neww.length - 2;
    let count = 0;
    for(count = 0; count < new_length; count++) {
        new_t += " ";
    }

    return new_t;
}

function fix_level(neww) {
    let new_t = "  " + neww;
    let new_length = level_box - neww.length - 2;
    let count = 0;
    for(count = 0; count < new_length; count++) {
        new_t += " ";
    }

    return new_t;
}