const fs = require("fs");
const config = require("../config/strings.js");
const func = require("../extra/functions.js");
var link = require( 'terminal-kit' ).terminal ;

exports.main = function() {
    let main = "";
    main += config.Colors.Purple + "       _________                                               _________ \r\n";
    main += "      :______.-':                                             :______.-':\r\n";
    main += "      | ______  |       " + config.Colors.Yellow + "╔╦╗╦═╗╔═╗╦ ╦╔╦╗╔═╗╔╦╗╦╔═╗╔═╗╔╦╗" + config.Colors.Purple + "       | ______  |\r\n";
    main += "      |:______B:|        " + config.Colors.Yellow + "║ ╠╦╝╠═╣║ ║║║║╠═╣ ║ ║╔═╝║╣  ║║" + config.Colors.Purple + "       |:______B:|\r\n";
    main += "      |:______B:|        " + config.Colors.Yellow + "╩ ╩╚═╩ ╩╚═╝╩ ╩╩ ╩ ╩ ╩╚═╝╚═╝═╩╝" + config.Colors.Purple + "       |:______B:|\r\n";
    main += "      |:______B:|         ╔═══════════════════════════╗       |:______B:|\r\n";
    main += "      |         |         ║  " + config.Colors.Yellow + "Welcome To Traumatized" + config.Colors.Purple + "   ║       |         |\r\n";
    main += "      |:_____:  |         ║ " + config.Colors.Yellow + "DDOS Protection Is A Joke" + config.Colors.Purple + " ║       |:_____:  |\r\n";
    main += "      |    ==   |         ╚═══════════╦══╦════════════╝       |    ==   |\r\n";
    main += "      |       O |          ╔══════════╝  ╚═══════════╗        |       O |\r\n";
    main += "      |       o |          ║ " + config.Colors.Yellow + "Traumatized.xyz/Discord" + config.Colors.Purple + " ║        |       o |\r\n";
    main += "      |       o |          ╠═════════════════════════╣        |       o |\r\n";
    main += "      |'-.____o_|          ║  " + config.Colors.Yellow + "Traumatized.xyz/Insta" + config.Colors.Purple + "  ║        |'-.____o_|\r\n";
    main += "      :_________:          ╚═════════════════════════╝        :_________:\r\n" + config.Colors.Reset;
    return main;
}

exports.geoBanner = function() {
    let gbnnr = "";
    gbnnr += config.Colors.Purple + "                       ╔═══════════════════════════════╗\r\n";
    gbnnr += "                       ║      " + config.Colors.Yellow + "Geo Locator Results" + config.Colors.Purple + "      ║\r\n";
    gbnnr += "                       ╚═══════════════════════════════╝\r\n" + config.Colors.Purple;
    return gbnnr;
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

exports.help = function() {

}