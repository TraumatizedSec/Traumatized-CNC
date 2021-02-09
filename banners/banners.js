const fs = require("fs");
const config = require("../config/strings.js");
const func = require("../extra/functions.js");
var link = require( 'terminal-kit' ).terminal ;

exports.main = function() {
    let main = "";
    main += config.Colors.Purple + "                                  !\r\n";
    main += "                                  ^ \r\n";
    main += "                                 / \\ \r\n";
    main += "         __                     /___\\               __\r\n";
    main += "         \ \_____              |=   =|              \ \_____\r\n";
    main += "      ###[==_____>             |     |           ###[==_____>\r\n";
    main += "         /_/                   |     |              /_/     \r\n";
    main += "                          ╔═╗═╗ ╦╔═╗╔╦╗╦╔═╗\r\n";
    main += "  ╔═════════════════════╗ ║╣ ╔╩╦╝║ ║ ║ ║║   ╔═════════════════════╗\r\n";
    main += "  ║        n4n0         ║ ╚═╝╩ ╚═╚═╝ ╩ ╩╚═╝ ║       Justin        ║\r\n";
    main += "  ╠═════════════════════╣      |     |      ╠═════════════════════╣\r\n";
    main += "  ║ Owner               ║      |     |      ║ Owner               ║\r\n";
    main += "  ║ Head-Developer      ║      |     |      ║ API Provider        ║\r\n";
    main += "  ║                     ║      |     |      ║                     ║\r\n";
    main += "  ║ n4n0#2100           ║     /|##!##|\     ║ Justin Guvasto#0184 ║\r\n";
    main += "  ║ @Preauthorize       ║    / |##!##| \    ║                     ║\r\n";
    main += "  ╚═════════════════════╝   /  |##!##|  \   ╚═════════════════════╝\r\n";
    main += "                           |  / ^ | ^ \  |\r\n";
    main += "                           | /  ( | )  \ |\r\n";
    main += "                           |/   ( | )   \|\r\n";
    main += "                               ((   ))\r\n";
    main += "                              ((  :  ))\r\n";
    main += "                              ((  :  ))\r\n";
    main += "                               ((   ))\r\n";
    main += "                                (( ))\r\n";
    main += "                                 ( )\r\n";
    main += "                                  .\r\n";
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
    helpbnnr += "  ║ " + config.Colors.Cyan + "Methods" + config.Colors.Purple + "      ║ " + config.Colors.Cyan + "List of methods" + config.Colors.Purple + "     ║  " + config.Colors.Cyan + "methods" + config.Colors.Purple + "                            ║\r\n";
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
    list += "                    ╠═════════╩════════╗    ╔══════╩═════════╣\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "LDAP" + config.Colors.Purple + "           ║    ║ → " + config.Colors.Cyan + "HOME-DROPER" + config.Colors.Purple + "  ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "VSE" + config.Colors.Purple + "            ║    ║ → " + config.Colors.Cyan + "killhomes" + config.Colors.Purple + "    ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "UDP-DROP" + config.Colors.Purple + "       ║    ║ → " + config.Colors.Cyan + "NTP-HOME" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "DNS" + config.Colors.Purple + "            ║    ║ → " + config.Colors.Cyan + "FIVEM" + config.Colors.Purple + "        ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "R6-DROP" + config.Colors.Purple + "        ║    ║ → " + config.Colors.Cyan + "MW-SLAP" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "REDSYN-V2" + config.Colors.Purple + "      ║    ║ → " + config.Colors.Cyan + "COLDWAR" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "R6-LAG" + config.Colors.Purple + "         ║    ║ → " + config.Colors.Cyan + "2k" + config.Colors.Purple + "           ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "OVH-KILLERV3" + config.Colors.Purple + "   ║    ║ → " + config.Colors.Cyan + "R6-RANK" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "NFO-RIOT" + config.Colors.Purple + "       ║    ║ → " + config.Colors.Cyan + "Apex" + config.Colors.Purple + "         ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "NFO-COMPLEXITY" + config.Colors.Purple + " ║    ║ → " + config.Colors.Cyan + "HYDRA-X" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "GAME-OUT" + config.Colors.Purple + "       ║    ║ → " + config.Colors.Cyan + "OVHDOWN" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "HYDRA-RAPE" + config.Colors.Purple + "     ║    ║ → " + config.Colors.Cyan + "NFO-LIFT" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "OVH-BETA" + config.Colors.Purple + "       ║    ║ → " + config.Colors.Cyan + "HYDRA-SLAP" + config.Colors.Purple + "   ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "DEDIPATH-SAS" + config.Colors.Purple + "   ║    ║ → " + config.Colors.Cyan + "killvpn1" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "SERVERV2" + config.Colors.Purple + "       ║    ║ → " + config.Colors.Cyan + "OVHGAME" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "ZOOM-CRASH" + config.Colors.Purple + "     ║    ║ → " + config.Colors.Cyan + "TCP-BYPASS" + config.Colors.Purple + "   ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "FIVEM-LAG" + config.Colors.Purple + "      ║    ║ → " + config.Colors.Cyan + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "SYN-XV" + config.Colors.Purple + "         ║    ║ → " + config.Colors.Cyan + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "UDPBYPASS" + config.Colors.Purple + "      ║    ║ → " + config.Colors.Cyan + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "CLOUDFLARE-XV" + config.Colors.Purple + "  ║    ║ → " + config.Colors.Cyan + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "DDOSGUARD-ONYX" + config.Colors.Purple + " ║    ║ → " + config.Colors.Cyan + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "SUCURI-KILLER" + config.Colors.Purple + "  ║    ║ → " + config.Colors.Cyan + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "AUTODETECT-ONYX" + config.Colors.Purple + "║    ║ → " + config.Colors.Cyan + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "GET-BYPASS" + config.Colors.Purple + "     ║    ║ → " + config.Colors.Cyan + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Cyan + "STORMWALL-ONYX" + config.Colors.Purple + " ║    ║ → " + config.Colors.Cyan + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ╚══════════════════╝    ╚════════════════╝\r\n";
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
    adn_h += "  ║ Add          ║ admin add <user> <IP> <passwd> <level> <maxtime> <admin>  ║\r\n";
    adn_h += "  ║ Update       ║ admin update <userOrip> <ip> <lvl> <time> <admin>         ║\r\n";
    adn_h += "  ║ Remove       ║ admin remove <user/ip>                                    ║\r\n";
    adn_h += "  ╚══════════════╩═══════════════════════════════════════════════════════════╝\r\n";
    return adn_h;
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