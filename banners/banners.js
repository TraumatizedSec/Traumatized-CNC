const fs = require("fs");
const config = require("../config/strings.js");
const func = require("../extra/functions.js");
var link = require( 'terminal-kit' ).terminal ;

exports.main = function() {
    let main = "";
    main += config.Colors.Red + "                                        !\r\n";
    main += "                                        ^ \r\n";
    main += "                                       / \\ \r\n";
    main += "               __                     /___\\               __\r\n";
    main += "               \\ \\_____              |=   =|              \\ \\_____\r\n";
    main += "            ###[==_____>             |     |           ###[==_____>\r\n";
    main += "               /_/                   |     |              /_/     \r\n";
    main += "                                " + config.Colors.Yellow + "╔═╗═╗ ╦╔═╗╔╦╗╦╔═╗" + config.Colors.Red + "\r\n";
    main += "        ╔═════════════════════╗ " + config.Colors.Yellow + "║╣ ╔╩╦╝║ ║ ║ ║║" + config.Colors.Red + "   ╔═════════════════════╗\r\n";
    main += "        ║        " + config.Colors.Yellow + "n4n0" + config.Colors.Red + "         ║ " + config.Colors.Yellow + "╚═╝╩ ╚═╚═╝ ╩ ╩╚═╝" + config.Colors.Red + " ║       " + config.Colors.Yellow + "Justin" + config.Colors.Red + "        ║\r\n";
    main += "        ╠═════════════════════╣      |     |      ╠═════════════════════╣\r\n";
    main += "        ║ " + config.Colors.Yellow + "Owner" + config.Colors.Red + "               ║      |     |      ║ " + config.Colors.Yellow + "Owner" + config.Colors.Red + "               ║\r\n";
    main += "        ║ " + config.Colors.Yellow + "Head-Developer" + config.Colors.Red + "      ║      |     |      ║ " + config.Colors.Yellow + "API Provider" + config.Colors.Red + "        ║\r\n";
    main += "        ║                     ║      |     |      ║                     ║\r\n";
    main += "        ║ " + config.Colors.Yellow + "n4n0#2100" + config.Colors.Red + "           ║     /|##!##|\\     ║ " + config.Colors.Yellow + "Justin Guvasto#0184" + config.Colors.Red + " ║\r\n";
    main += "        ║ " + config.Colors.Yellow + "@Preauthorize" + config.Colors.Red + "       ║    / |##!##| \\    ║ " + config.Colors.Yellow + "@02_dbb" + config.Colors.Red + "             ║\r\n";
    main += "        ╚═════════════════════╝   /  |##!##|  \\   ╚═════════════════════╝\r\n";
    main += "                                 |  / ^ | ^ \\  |\r\n";
    main += "        ╔═════════════════════╗  |  / ^ | ^ \  |  ╔═════════════════════╗\r\n";
    main += "        ║       " + config.Colors.Yellow + "CRYSIIII" + config.Colors.Red + "      ║  | /  ( | )  \ |  ║        " + config.Colors.Yellow + "Flowz" + config.Colors.Red + "        ║\r\n";
    main += "        ╠═════════════════════╣  |/   ( | )   \|  ╠═════════════════════╣\r\n";
    main += "        ║ " + config.Colors.Yellow + "3rd Owner/APIs" + config.Colors.Red + "      ║      ((   ))      ║ " + config.Colors.Yellow + "Reseller" + config.Colors.Red + "            ║\r\n";
    main += "        ║                     ║     ((  :  ))     ╚═════════════════════╝\r\n";
    main += "        ║ " + config.Colors.Yellow + "CRYSIIII#1050" + config.Colors.Red + "       ║     ((  :  ))\r\n";
    main += "        ║ " + config.Colors.Yellow + "@nxthing.is.here" + config.Colors.Red + "    ║      ((   ))\r\n";
    main += "        ╚═════════════════════╝       (( ))\r\n";
    main += "                                        .\r\n";
    return main;
}

exports.geoBanner = function() {
    let gbnnr = "";
    gbnnr += config.Colors.Red + "                       ╔═══════════════════════════════╗\r\n";
    gbnnr += "                       ║      " + config.Colors.Yellow + "Geo Locator Results" + config.Colors.Red + "      ║\r\n";
    gbnnr += "                       ╚═══════════════════════════════╝\r\n" + config.Colors.Red;
    return gbnnr;
}

exports.helpR = function() {
    let helpbnnr = "";
    helpbnnr += config.Colors.Red + "  ╔══════════════════════════════════════════════════════════════════════════╗\r\n";
    helpbnnr += "  ║                               " + config.Colors.Yellow + "HELP" + config.Colors.Red + "                                       ║\r\n";
    helpbnnr += "  ╠══════════════╦═════════════════════╦═════════════════════════════════════╣\r\n";
    helpbnnr += "  ║   " + config.Colors.Yellow + "Command" + config.Colors.Red + "    ║  " + config.Colors.Yellow + "Description" + config.Colors.Red + "        ║  " + config.Colors.Yellow + "Command Usage" + config.Colors.Red + "                      ║\r\n";
    helpbnnr += "  ╠══════════════╬═════════════════════╬═════════════════════════════════════╣\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Help" + config.Colors.Red + "         ║ " + config.Colors.Yellow + "Command List" + config.Colors.Red + "        ║  " + config.Colors.Yellow + "help" + config.Colors.Red + "                               ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Info" + config.Colors.Red + "         ║ " + config.Colors.Yellow + "CNC & Acc Info" + config.Colors.Red + "      ║  " + config.Colors.Yellow + "info" + config.Colors.Red + "                               ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Geo Locator" + config.Colors.Red + "  ║ " + config.Colors.Yellow + "Geo Locate an IP" + config.Colors.Red + "    ║  " + config.Colors.Yellow + "geo <ip>" + config.Colors.Red + "                           ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Port Scan" + config.Colors.Red + "    ║ " + config.Colors.Yellow + "Scan for open ports" + config.Colors.Red + " ║  " + config.Colors.Yellow + "scan <ip>" + config.Colors.Red + "                          ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Methods" + config.Colors.Red + "      ║ " + config.Colors.Yellow + "List of methods" + config.Colors.Red + "     ║  " + config.Colors.Yellow + "methods" + config.Colors.Red + "                            ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Stresser" + config.Colors.Red + "     ║ " + config.Colors.Yellow + "Attack Hub" + config.Colors.Red + "          ║  " + config.Colors.Yellow + "stress <ip> <port> <time> <method>" + config.Colors.Red + " ║\r\n";
    helpbnnr += "  ║ " + config.Colors.Yellow + "Admin" + config.Colors.Red + "        ║ " + config.Colors.Yellow + "Admin Commands" + config.Colors.Red + "      ║  " + config.Colors.Yellow + "admin" + config.Colors.Red + "                              ║\r\n";
    helpbnnr += "  ╚══════════════════════════════════════════════════════════════════════════╝\r\n";
    return helpbnnr;
}

exports.pScanBanner = function() {
    let psBanner = "";
    psBanner += config.Colors.Red + "                       ╔═══════════════════════════════╗";
    psBanner += "                       ║     " + config.Colors.Yellow + "Port Scanner Resulsts" + config.Colors.Red + "     ║";
    psBanner += "                       ╚═══════════════════════════════╝";
    psBanner += "";
    psBanner += "";
    psBanner += "";
}

exports.methods_list = function() {
    let list = "";
    list += config.Colors.Red + "  ╔════════════════════════════════════════════════════════════════════════════╗\r\n";
    list += "  ║                                   " + config.Colors.Yellow + "Methods" + config.Colors.Red + "                                  ║\r\n";
    list += "  ╚╦═════════╦═════════════════╦════════╦═╦═════════╦═══════════════╦═════════╦╝\r\n";
    list += "   ║  " + config.Colors.Yellow + "API 1" + config.Colors.Red + "  ║                 ║  " + config.Colors.Yellow + "API 2" + config.Colors.Red + " ║ ║  " + config.Colors.Yellow + "API 3" + config.Colors.Red + "  ║               ║  " + config.Colors.Yellow + "API 4" + config.Colors.Red + "  ║\r\n";
    list += "   ╠═════════╩═════════╗ ╔═════╩════════╣ ╠═════════╩══════╗ ╔══════╩═════════╣\r\n";
    list += "   ║ → " + config.Colors.Yellow + "LDAP" + config.Colors.Red + "            ║ ║ → " + config.Colors.Yellow + "HOME-DROPER" + config.Colors.Red + "║ ║ → " + config.Colors.Yellow + "BYPASS-2" + config.Colors.Red + "     ║ ║ → " + config.Colors.Yellow + "UDP" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "VSE" + config.Colors.Red + "             ║ ║ → " + config.Colors.Yellow + "killhomes" + config.Colors.Red + "  ║ ║ → " + config.Colors.Yellow + "REDSYN" + config.Colors.Red + "       ║ ║ → " + config.Colors.Yellow + "TCP" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "UDP-DROP" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "NTP-HOME" + config.Colors.Red + "   ║ ║ → " + config.Colors.Yellow + "NTP" + config.Colors.Red + "          ║ ║ → " + config.Colors.Yellow + "DOMINATE" + config.Colors.Red + "     ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "DNS" + config.Colors.Red + "             ║ ║ → " + config.Colors.Yellow + "FIVEM" + config.Colors.Red + "      ║ ║ → " + config.Colors.Yellow + "DVR" + config.Colors.Red + "          ║ ║ → " + config.Colors.Yellow + "XMAS" + config.Colors.Red + "         ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "R6-DROP" + config.Colors.Red + "         ║ ║ → " + config.Colors.Yellow + "MW-SLAP" + config.Colors.Red + "    ║ ║ → " + config.Colors.Yellow + "FIVEM-TCP" + config.Colors.Red + "    ║ ║ → " + config.Colors.Yellow + "STD" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "REDSYN-V2" + config.Colors.Red + "       ║ ║ → " + config.Colors.Yellow + "COLDWAR" + config.Colors.Red + "    ║ ║ → " + config.Colors.Yellow + "NETBIOS" + config.Colors.Red + "      ║ ║ → " + config.Colors.Yellow + "JUNK" + config.Colors.Red + "         ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "R6-LAG" + config.Colors.Red + "          ║ ║ → " + config.Colors.Yellow + "2k" + config.Colors.Red + "         ║ ║ → " + config.Colors.Yellow + "REAPER" + config.Colors.Red + "       ║ ║ → " + config.Colors.Yellow + "HOLD" + config.Colors.Red + "         ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "OVH-KILLERV3" + config.Colors.Red + "    ║ ║ → " + config.Colors.Yellow + "R6-RANK" + config.Colors.Red + "    ║ ║ → " + config.Colors.Yellow + "MDNS" + config.Colors.Red + "         ║ ║ → " + config.Colors.Yellow + "CNC" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "NFO-RIOT" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "Apex" + config.Colors.Red + "       ║ ║ → " + config.Colors.Yellow + "TFTP" + config.Colors.Red + "         ║ ║ → " + config.Colors.Yellow + "STOMP" + config.Colors.Red + "        ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "NFO-COMPLEXITY" + config.Colors.Red + "  ║ ║ → " + config.Colors.Yellow + "HYDRA-X" + config.Colors.Red + "    ║ ║ → " + config.Colors.Yellow + "UDPBYPASS" + config.Colors.Red + "    ║ ║ → " + config.Colors.Yellow + "HTTP" + config.Colors.Red + "         ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "GAME-OUT" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "OVHDOWN" + config.Colors.Red + "    ║ ║ → " + config.Colors.Yellow + "LDAP" + config.Colors.Red + "         ║ ║ → " + config.Colors.Yellow + "CLOUDFLARE" + config.Colors.Red + "   ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "HYDRA-RAPE" + config.Colors.Red + "      ║ ║ → " + config.Colors.Yellow + "NFO-LIFT" + config.Colors.Red + "   ║ ║ → " + config.Colors.Yellow + "FIVEM-UDP" + config.Colors.Red + "    ║ ║ → " + config.Colors.Yellow + "STOP" + config.Colors.Red + "         ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "OVH-BETA" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "HYDRA-SLAP" + config.Colors.Red + " ║ ║ → " + config.Colors.Yellow + "BLUESYN" + config.Colors.Red + "      ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "DEDIPATH-SAS" + config.Colors.Red + "    ║ ║ → " + config.Colors.Yellow + "killvpn1" + config.Colors.Red + "   ║ ║ → " + config.Colors.Yellow + "DRDOSDNS" + config.Colors.Red + "     ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "SERVERV2" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "OVHGAME" + config.Colors.Red + "    ║ ║ → " + config.Colors.Yellow + "OVH-RAW" + config.Colors.Red + "      ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "ZOOM-CRASH" + config.Colors.Red + "      ║ ║ → " + config.Colors.Yellow + "TCP-BYPASS" + config.Colors.Red + " ║ ║ → " + config.Colors.Yellow + "GAME-DESTROY" + config.Colors.Red + " ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "FIVEM-LAG" + config.Colors.Red + "       ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "STOP" + config.Colors.Red + "         ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "SYN-XV" + config.Colors.Red + "          ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "NA" + config.Colors.Red + "           ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "UDPBYPASS" + config.Colors.Red + "       ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "NA" + config.Colors.Red + "           ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "CLOUDFLARE-XV" + config.Colors.Red + "   ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "NA" + config.Colors.Red + "           ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "DDOSGUARD-ONYX" + config.Colors.Red + "  ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "NA" + config.Colors.Red + "           ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "SUCURI-KILLER" + config.Colors.Red + "   ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "NA" + config.Colors.Red + "           ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "AUTODETECT-ONYX" + config.Colors.Red + " ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "NA" + config.Colors.Red + "           ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "GET-BYPASS" + config.Colors.Red + "      ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "NA" + config.Colors.Red + "           ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ║ → " + config.Colors.Yellow + "STORMWALL-ONYX" + config.Colors.Red + "  ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "        ║ ║ → " + config.Colors.Yellow + "NA" + config.Colors.Red + "           ║ ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Red + "          ║\r\n";
    list += "   ╚═══════════════════╝ ╚══════════════╝ ╚════════════════╝ ╚════════════════╝\r\n";
    return list;
}

exports.admin = function() {
    let admin = "";
    admin += config.Colors.Red + "      ╔═════════════════════════════════════════════════════════════════╗\r\n";
    admin += "      ║                             " + config.Colors.Yellow + "Admin CP" + config.Colors.Red + "                            ║\r\n";
    admin += "      ╚═════════════════════════════════════════════════════════════════╝\r\n";
    return admin;
}

exports.admin_help = function() {
    let adn_h = "";
    adn_h += config.Colors.Red + "  ╔══════════════════════════════════════════════════════════════════════════╗\r\n";
    adn_h += "  ║                               " + config.Colors.Yellow + "HELP" + config.Colors.Red + "                                       ║\r\n";
    adn_h += "  ╠══════════════╦═══════════════════════════════════════════════════════════╣\r\n";
    adn_h += "  ║   " + config.Colors.Yellow + "Command" + config.Colors.Red + "    ║    " + config.Colors.Yellow + "Command Usage" + config.Colors.Red + "                                          ║\r\n";
    adn_h += "  ╠══════════════╬═══════════════════════════════════════════════════════════╣\r\n";
    adn_h += "  ║ " + config.Colors.Yellow + "Help" + config.Colors.Red + "         ║ " + config.Colors.Yellow + "help" + config.Colors.Red + "                                                      ║\r\n";
    adn_h += "  ║ " + config.Colors.Yellow + "Add" + config.Colors.Red + "          ║ " + config.Colors.Yellow + "admin add <user> <IP> <passwd> <level> <maxtime> <admin>" + config.Colors.Red + "  ║\r\n";
    adn_h += "  ║ " + config.Colors.Yellow + "Update" + config.Colors.Red + "       ║ " + config.Colors.Yellow + "admin update <userOrip> <ip> <lvl> <time> <admin>" + config.Colors.Red + "         ║\r\n";
    adn_h += "  ║ " + config.Colors.Yellow + "Remove" + config.Colors.Red + "       ║ " + config.Colors.Yellow + "admin remove <user/ip>" + config.Colors.Red + "                                    ║\r\n";
    adn_h += "  ╚══════════════╩═══════════════════════════════════════════════════════════╝\r\n";
    return adn_h;
}