const fs = require("fs");
const gay = require("./animation.js");
const config = require("../config/strings.js");

exports.name_box = "    Name    ";
exports.name_length = gay.name_box.length;

exports.ip_box = "       IP       ";
exports.ip_length = gay.ip_box.length;

exports.CreateHeader = function() {
    let final_table = "";
    final_table += config.Colors.Purple + "                       ╔═══════════════════════════════╗\r\n";
    final_table += "                       ║          Online User          ║\r\n";
    final_table += "                       ╚════╦══╦═══════════════╦══╦════╝\r\n";
    final_table += "                       ╔════╝  ╚════╗   ╔══════╝  ╚══════╗\r\n";
    final_table += "                       ║    Name    ║   ║       IP       ║\r\n";
    final_table += "                       ╠════════════╣   ╠════════════════╣\r\n";
    return final_table;
}

exports.CreateRow = function(name, ip) {
    return "                       ║" + gay.fix_name(name) + "║   ║" + gay.fix_ip(ip) + "║\r\n";
}

exports.CreateFooter = function() {
    return "                       ╚════════════╝   ╚════════════════╝\r\n";
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