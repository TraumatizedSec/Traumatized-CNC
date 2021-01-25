const fs = require("fs");
const gay = require("./data_grid.js");
const config = require("../config/strings.js");

exports.name_box = "  Name       ";
exports.name_length = gay.name_box.length;

exports.ip_box = "  IP             ";
exports.ip_length = gay.ip_box.length;

exports.level_box = "  Level   ";
exports.level_length = gay.level_box.length;

exports.maxtime_box = "  Maxtime    ";
exports.maxtime_length = gay.level_box.length;

exports.admin_box = "  Admin    ";
exports.admin_length = gay.level_box.length;

exports.CreateHeader = function() {
    let final_table = "";
    final_table += config.Colors.Purple + "      ╔═════════════╦═════════════════╦══════════╦═══════════╦═══════════╗\r\n";
    final_table += "      ║  Name       ║  IP             ║  Level   ║  Maxtime  ║  Admin    ║\r\n";
    final_table += "      ╠═════════════╬═════════════════╬══════════╬═══════════╬═══════════╣\r\n";
    return final_table;
}

exports.CreateRow = function(name, ip, level, maxtime, admin) {
    return "      ║" + gay.fix_name(name) + "║" + gay.fix_ip(ip) + "║" + gay.fix_level(level) + "║" + gay.fix_maxtime(maxtime) + "║" + gay.fix_admin(admin) + "║\r\n";
}

exports.CreateFooter = function() {
    return "      ╚═════════════╩═════════════════╩══════════╩═══════════╩═══════════╝\r\n";
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

exports.fix_level = function(neww) {
    let new_t = "  " + neww;
    let new_length = gay.level_length - neww.length - 2;
    let count = 0;
    for(count = 0; count < new_length; count++) {
        new_t += " ";
    }

    return new_t;
}

exports.fix_maxtime = function(neww) {
    let new_t = "  " + neww;
    let new_length = gay.maxtime_length - neww.length - 1;
    let count = 0;
    for(count = 0; count < new_length; count++) {
        new_t += " ";
    }

    return new_t;
}

exports.fix_admin = function(neww) {
    let new_t = "  " + neww;
    let new_length = gay.admin_length - neww.length - 1;
    let count = 0;
    for(count = 0; count < new_length; count++) {
        new_t += " ";
    }

    return new_t;
}