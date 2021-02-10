const fs = require("fs");
const gay = require("./animation.js");
const config = require("../config/strings.js");

exports.name_box = "    Name    ";
exports.name_length = gay.name_box.length;

exports.ip_box = "       IP        ";
exports.ip_length = gay.ip_box.length;
//what is it
exports.CreateHeader = function() {
    let final_table = "";
    final_table += config.Colors.Red + "                       ╔═══════════════════════════════╗\r\n";
    final_table += "                       ║          " + config.Colors.Yellow + "Online User"  + config.Colors.Red + "          ║\r\n";
    final_table += "                       ╚════╦══╦══════════════╦══╦═════╝\r\n";
    final_table += "                       ╔════╝  ╚════╗  ╔══════╝  ╚═══════╗\r\n";
    final_table += "                       ║    " + config.Colors.Yellow + "Name" + config.Colors.Red + "    ║  ║       " + config.Colors.Yellow + "IP" + config.Colors.Red + "        ║\r\n";
    final_table += "                       ╠════════════╣  ╠═════════════════╣\r\n";
    return final_table;
}

exports.CreateRow = function(name, ip) {
    return "                       ║" + config.Colors.Yellow + gay.fix_name(name) + config.Colors.Red + "║  ║" + config.Colors.Yellow + gay.fix_ip(ip) + config.Colors.Red + "║\r\n";
}

exports.CreateFooter = function() {
    return "                       ╚════════════╝  ╚═════════════════╝\r\n";
}


exports.fix_name = function(neww) {
    let new_t = "  " + neww;
    let new_length = gay.name_length - neww.length - 2;
    let count = 0;
    for(count = 0; count < new_length; count++) {
        new_t += " ";
    }

    return new_t;
}

exports.fix_ip = function(neww) {
    let new_t = "  " + neww;
    let new_length = gay.ip_length - neww.length - 2;
    let count = 0;
    for(count = 0; count < new_length; count++) {
        new_t += " ";
    }

    return new_t;
}