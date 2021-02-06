const fs = require("fs");
const config = require("../config/strings.js");
const func = require("../extra/functions.js");
var link = require( 'terminal-kit' ).terminal ;

exports.main = function() {
    let main = "";
    main += config.Colors.Purple + "╔═════════════════════════════════════╗\r\n";
    main += "║        _.-^^---....,,--             ║\r\n";
    main += "║     _--                  --_        ║\r\n".
    main += "║    <      ╔═╗═╗ ╦╔═╗╦ ╦     >)      ║\r\n".
    main += "║    |      ║ ║╔╩╦╝╔═╝╚╦╝      |      ║\r\n".
    main += "║     \\._   ╚═╝╩ ╚═╚═╝ ╩     _./      ║\r\n".
    main += "║        ```--. . , ; .--'''          ║\r\n".
    main += "║               | |   |               ║\r\n".
    main += "║            .-=||  | |=-.            ║\r\n".
    main += "║            `-=#$%&%$#=-'            ║\r\n".
    main += "║               | ;  :|               ║\r\n".
    main += "║      _____.,-#%&$@%#&#~,._____      ║\r\n".
    main += "║                                     ║\r\n".
    main += "╚═════════════════════════════════════╝\r\n";
    return main;
}

exports.geoBanner = function() {
    let gbnnr = "";
    gbnnr += config.Colors.Purple + "                       ╔═══════════════════════════════╗\r\n";
    gbnnr += "                       ║      " + config.Colors.Yellow + "Geo Locator Results" + config.Colors.Purple + "      ║\r\n";
    gbnnr += "                       ╚═══════════════════════════════╝\r\n" + config.Colors.Purple;
    return gbnnr;
}

exports.helpR = function() {
    let helpbnnr = "";
    helpbnnr += config.Colors.Purple + "  ╔══════════════════════════════════════════════════════════════════════════╗\r\n";
    helpbnnr += "  ║                               " + config.Colors.Yellow + "HELP" + config.Colors.Purple + "                                       ║\r\n";
    helpbnnr += "  ╠══════════════╦═════════════════════╦═════════════════════════════════════╣\r\n";
    helpbnnr += "  ║   " + config.Colors.Yellow + "Command" + config.Colors.Purple + "    ║  " + config.Colors.Yellow + "Description" + config.Colors.Purple + "        ║  " + config.Colors.Yellow + "Command Usage" + config.Colors.Purple + "                      ║\r\n";
    helpbnnr += "  ╠══════════════╬═════════════════════╬═════════════════════════════════════╣\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Help" + config.Colors.Purple + "         ║ " + config.Colors.Yellow + "Command List" + config.Colors.Purple + "        ║  " + config.Colors.Yellow + "help" + config.Colors.Purple + "                               ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Info" + config.Colors.Purple + "         ║ " + config.Colors.Yellow + "CNC & Acc Info" + config.Colors.Purple + "      ║  " + config.Colors.Yellow + "info" + config.Colors.Purple + "                               ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Geo Locator" + config.Colors.Purple + "  ║ " + config.Colors.Yellow + "Geo Locate an IP" + config.Colors.Purple + "    ║  " + config.Colors.Yellow + "geo <ip>" + config.Colors.Purple + "                           ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Port Scan" + config.Colors.Purple + "    ║ " + config.Colors.Yellow + "Scan for open ports" + config.Colors.Purple + " ║  " + config.Colors.Yellow + "scan <ip>" + config.Colors.Purple + "                          ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Stresser" + config.Colors.Purple + "     ║ " + config.Colors.Yellow + "Attack Hub" + config.Colors.Purple + "          ║  " + config.Colors.Yellow + "stress <ip> <port> <time> <method>" + config.Colors.Purple + " ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Admin" + config.Colors.Purple + "        ║ " + config.Colors.Yellow + "Admin Commands" + config.Colors.Purple + "      ║  " + config.Colors.Yellow + "admin" + config.Colors.Purple + "                              ║\r\n";
    helpbnnr += "  ╚══════════════════════════════════════════════════════════════════════════╝\r\n";
    return helpbnnr;
}

exports.pScanBanner = function() {
    let psBanner = "";
    psBanner += config.Colors.Purple + "                       ╔═══════════════════════════════╗";
    psBanner += "                       ║     " + config.Colors.Yellow + "Port Scanner Resulsts" + config.Colors.Purple + "     ║";
    psBanner += "                       ╚═══════════════════════════════╝";
    psBanner += "";
    psBanner += "";
    psBanner += "";
}

exports.methods_list = function() {
    let list = "";
    list += config.Colors.Purple + "                    ╔════════════════════════════════════════╗\r\n";
    list += "                    ║                 " + config.Colors.Yellow + "Methods" + config.Colors.Purple + "                ║\r\n";
    list += "                    ╠═════════╦════════════════════╦═════════╣\r\n";
    list += "                    ║  " + config.Colors.Yellow + "API 1" + config.Colors.Purple + "  ║                    ║  " + config.Colors.Yellow + "API 2" + config.Colors.Purple + "  ║\r\n";
    list += "                    ╠═════════╩══════╗      ╔══════╩═════════╣\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "UDP" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Yellow + "NTP" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "TCP" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Yellow + "OVH-RAW" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "UDPBLEND" + config.Colors.Purple + "     ║      ║ → " + config.Colors.Yellow + "REDSYN" + config.Colors.Purple + "       ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "LDAP" + config.Colors.Purple + "         ║      ║ → " + config.Colors.Yellow + "HYDRA.KO" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "NTP" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Yellow + "PLUTO-L7" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "Chargen" + config.Colors.Purple + "      ║      ║ → " + config.Colors.Yellow + "FN-RAPE" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "ACK" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Yellow + "R6-FUCK" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "SSYN" + config.Colors.Purple + "         ║      ║ → " + config.Colors.Yellow + "ARK-V2" + config.Colors.Purple + "       ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "ESSYN" + config.Colors.Purple + "        ║      ║ → " + config.Colors.Yellow + "OVH-RAWV2" + config.Colors.Purple + "    ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "XSYN" + config.Colors.Purple + "         ║      ║ → " + config.Colors.Yellow + "LDAP" + config.Colors.Purple + "         ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "VSE" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Yellow + "OVH-DEATH" + config.Colors.Purple + "    ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "FRAG" + config.Colors.Purple + "         ║      ║ → " + config.Colors.Yellow + "DVR" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "XMAS" + config.Colors.Purple + "         ║      ║ → " + config.Colors.Yellow + "NFO-RIOT" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "ZAP" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Yellow + "CODEINE-HOME" + config.Colors.Purple + " ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "Wizard" + config.Colors.Purple + "       ║      ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ╚════════════════╝      ╚════════════════╝\r\n";
    return list;
}

exports.admin = function() {
    let admin = "";
    admin += config.Colors.Purple + "      ╔═════════════════════════════════════════════════════════════════╗\r\n";
    admin += "      ║                             " + config.Colors.Yellow + "Admin CP" + config.Colors.Purple + "                            ║\r\n";
    admin += "      ╚═════════════════════════════════════════════════════════════════╝\r\n";
    return admin;
}

exports.admin_help = function() {
    let adn_h = "";
    adn_h += "  ╔══════════════════════════════════════════════════════════════════════════╗\r\n";
    adn_h += "  ║                               HELP                                       ║\r\n";
    adn_h += "  ╠══════════════╦═══════════════════════════════════════════════════════════╣\r\n";
    adn_h += "  ║   Command    ║    Command Usage                                          ║\r\n";
    adn_h += "  ╠══════════════╬═══════════════════════════════════════════════════════════╣\r\n";
    adn_h += "  ║ Help         ║ help                                                      ║\r\n";
    adn_h += "  ║ Add          ║ add <username> <IP> <passwd> <level> <maxtime> <admin>    ║\r\n";
    adn_h += "  ║ Geo Locator  ║ admin update <ip> <maxtime> <admin>                       ║\r\n";
    adn_h += "  ║ Port Scan    ║ admin remove <user/ip>                                    ║\r\n";
    adn_h += "  ╚══════════════╩═══════════════════════════════════════════════════════════╝\r\n";
    adn_h += "";
}

exports.question1 = function() {
    let fag = "";
    console.clear();
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "       ###########                            ###############                   \r\n";
    fag += "######## Login  ################################ Password: #####################\r\n";
    fag += "################################################################################\r\n";
    fag += "################################################################################\r\n";
    fag += "######               #########################             #####################\r\n";
    fag += "################################################################################\r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    fag += "                                                                                \r\n";
    return fag;
}