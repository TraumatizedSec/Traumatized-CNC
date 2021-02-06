const fs = require("fs");
const config = require("../config/strings.js");
const func = require("../extra/functions.js");
var link = require( 'terminal-kit' ).terminal ;

exports.main = function() {
    let main = "";
    main += config.Colors.Purple + "╔═════════════════════════════════════╗\r\n";
    main += "║        " + config.Colors.Cyan + "_.-^^---....,,--             ║\r\n";
    main += "║     " + config.Colors.Cyan + "_" + config.Colors.Purple + "--                  --_        ║\r\n".
    main += "║    " + config.Colors.Cyan + "<      ╔═╗═╗ ╦╔═╗╦ ╦     >)      ║\r\n".
    main += "║    " + config.Colors.Cyan + "|      ║ ║╔╩╦╝╔═╝╚╦╝      |      ║\r\n".
    main += "║     " + config.Colors.Cyan + "\\._   ╚═╝╩ ╚═╚═╝ ╩     _./      ║\r\n";
    main += "║        " + config.Colors.Cyan + "```--. . , ; .--'''          ║\r\n";
    main += "║               " + config.Colors.Cyan + "| |   |               ║\r\n";
    main += "║            " + config.Colors.Cyan + ".-=||  | |=-.            ║\r\n";
    main += "║            " + config.Colors.Cyan + "`-=#$%&%$#=-'            ║\r\n";
    main += "║               " + config.Colors.Cyan + "| ;  :|               ║\r\n";
    main += "║      " + config.Colors.Cyan + "_____.,-#%&$@%#&#~,._____      ║\r\n";
    main += "║                                     ║\r\n";
    main += "╚═════════════════════════════════════╝\r\n";
    return main;
}

exports.geoBanner = function() {
    let gbnnr = "";
    gbnnr += config.Colors.Purple + "                       ╔═══════════════════════════════╗\r\n";
    gbnnr += "                       ║      " + config.Colors.Cyan + "Geo Locator Results" + config.Colors.Purple + "      ║\r\n";
    gbnnr += "                       ╚═══════════════════════════════╝\r\n" + config.Colors.Purple;
    return gbnnr;
}

exports.helpR = function() {
    let helpbnnr = "";
    helpbnnr += config.Colors.Purple + "  ╔══════════════════════════════════════════════════════════════════════════╗\r\n";
    helpbnnr += "  ║                               " + config.Colors.Cyan + "HELP" + config.Colors.Purple + "                                       ║\r\n";
    helpbnnr += "  ╠══════════════╦═════════════════════╦═════════════════════════════════════╣\r\n";
    helpbnnr += "  ║   " + config.Colors.Cyan + "Command" + config.Colors.Purple + "    ║  " + config.Colors.Cyan + "Description" + config.Colors.Purple + "        ║  " + config.Colors.Cyan + "Command Usage" + config.Colors.Purple + "                      ║\r\n";
    helpbnnr += "  ╠══════════════╬═════════════════════╬═════════════════════════════════════╣\r\n";
    helpbnnr += "  ║ " + config.Colors.Cyan + "Help" + config.Colors.Purple + "         ║ " + config.Colors.Cyan + "Command List" + config.Colors.Purple + "        ║  " + config.Colors.Cyan + "help" + config.Colors.Purple + "                               ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Cyan + "Info" + config.Colors.Purple + "         ║ " + config.Colors.Cyan + "CNC & Acc Info" + config.Colors.Purple + "      ║  " + config.Colors.Cyan + "info" + config.Colors.Purple + "                               ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Cyan + "Geo Locator" + config.Colors.Purple + "  ║ " + config.Colors.Cyan + "Geo Locate an IP" + config.Colors.Purple + "    ║  " + config.Colors.Cyan + "geo <ip>" + config.Colors.Purple + "                           ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Cyan + "Port Scan" + config.Colors.Purple + "    ║ " + config.Colors.Cyan + "Scan for open ports" + config.Colors.Purple + " ║  " + config.Colors.Cyan + "scan <ip>" + config.Colors.Purple + "                          ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Cyan + "Stresser" + config.Colors.Purple + "     ║ " + config.Colors.Cyan + "Attack Hub" + config.Colors.Purple + "          ║  " + config.Colors.Cyan + "stress <ip> <port> <time> <method>" + config.Colors.Purple + " ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Cyan + "Admin" + config.Colors.Purple + "        ║ " + config.Colors.Cyan + "Admin Commands" + config.Colors.Purple + "      ║  " + config.Colors.Cyan + "admin" + config.Colors.Purple + "                              ║\r\n";
    helpbnnr += "  ╚══════════════════════════════════════════════════════════════════════════╝\r\n";
    return helpbnnr;
}

exports.pScanBanner = function() {
    let psBanner = "";
    psBanner += config.Colors.Purple + "                       ╔═══════════════════════════════╗";
    psBanner += "                       ║     " + config.Colors.Cyan + "Port Scanner Resulsts" + config.Colors.Purple + "     ║";
    psBanner += "                       ╚═══════════════════════════════╝";
    psBanner += "";
    psBanner += "";
    psBanner += "";
}

exports.methods_list = function() {
    let list = "";
    list += config.Colors.Purple + "                    ╔════════════════════════════════════════╗\r\n";
    list += "                    ║                 " + config.Colors.Cyan + "Methods" + config.Colors.Purple + "                ║\r\n";
    list += "                    ╠═════════╦════════════════════╦═════════╣\r\n";
    list += "                    ║  " + config.Colors.Cyan + "API 1" + config.Colors.Purple + "  ║                    ║  " + config.Colors.Cyan + "API 2" + config.Colors.Purple + "  ║\r\n";
    list += "                    ╠═════════╩══════╗      ╔══════╩═════════╣\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "UDP" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Cyan + "NTP" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "TCP" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Cyan + "OVH-RAW" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "UDPBLEND" + config.Colors.Purple + "     ║      ║ → " + config.Colors.Cyan + "REDSYN" + config.Colors.Purple + "       ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "LDAP" + config.Colors.Purple + "         ║      ║ → " + config.Colors.Cyan + "HYDRA.KO" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "NTP" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Cyan + "PLUTO-L7" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "Chargen" + config.Colors.Purple + "      ║      ║ → " + config.Colors.Cyan + "FN-RAPE" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "ACK" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Cyan + "R6-FUCK" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "SSYN" + config.Colors.Purple + "         ║      ║ → " + config.Colors.Cyan + "ARK-V2" + config.Colors.Purple + "       ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "ESSYN" + config.Colors.Purple + "        ║      ║ → " + config.Colors.Cyan + "OVH-RAWV2" + config.Colors.Purple + "    ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "XSYN" + config.Colors.Purple + "         ║      ║ → " + config.Colors.Cyan + "LDAP" + config.Colors.Purple + "         ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "VSE" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Cyan + "OVH-DEATH" + config.Colors.Purple + "    ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "FRAG" + config.Colors.Purple + "         ║      ║ → " + config.Colors.Cyan + "DVR" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "XMAS" + config.Colors.Purple + "         ║      ║ → " + config.Colors.Cyan + "NFO-RIOT" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "ZAP" + config.Colors.Purple + "          ║      ║ → " + config.Colors.Cyan + "CODEINE-HOME" + config.Colors.Purple + " ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "Wizard" + config.Colors.Purple + "       ║      ║ → " + config.Colors.Cyan + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ╚════════════════╝      ╚════════════════╝\r\n";
    return list;
}

exports.admin = function() {
    let admin = "";
    admin += config.Colors.Purple + "      ╔═════════════════════════════════════════════════════════════════╗\r\n";
    admin += "      ║                             " + config.Colors.Cyan + "Admin CP" + config.Colors.Purple + "                            ║\r\n";
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