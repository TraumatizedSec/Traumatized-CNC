const fs = require("fs");
const config = require("../config/strings.js");
const func = require("../extra/functions.js");
var link = require( 'terminal-kit' ).terminal ;

exports.main = function() {
    let main = "";
    main += config.Colors.Purple + "                   ╔════════════════════════════════════════╗\r\n";
    main += "                   ║    " + config.Colors.Yellow + "╔╦╗╦═╗╔═╗╦ ╦╔╦╗╔═╗╔╦╗╦╔═╗╔═╗╔╦╗" + config.Colors.Purple + "     ║\r\n";
    main += "                   ║     " + config.Colors.Yellow + "║ ╠╦╝╠═╣║ ║║║║╠═╣ ║ ║╔═╝║╣  ║║" + config.Colors.Purple + "     ║\r\n";
    main += "                   ║     " + config.Colors.Yellow + "╩ ╩╚═╩ ╩╚═╝╩ ╩╩ ╩ ╩ ╩╚═╝╚═╝═╩╝" + config.Colors.Purple + "     ║\r\n";
    main += "                   ╠══╦══════════════════════════════════╦══╣\r\n";
    main += "       ╔═══════════╝  ╚══════════╗            ╔══════════╝  ╚═══════════╗\r\n";
    main += "       ║ " + config.Colors.Yellow + "Traumatized.xyz/discord" + config.Colors.Purple + " ║            ║  " + config.Colors.Yellow + "Traumatized.xyz/Insta" + config.Colors.Purple + "  ║\r\n";
    main += "       ╚═════════════════════════╝            ╚═════════════════════════╝ \r\n" + config.Colors.Reset;
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
    list += "                    ║                 " + config.Colors.Yellow + "Methods                ║\r\n";
    list += "                    ╠═════════╦════════════════════╦═════════╣\r\n";
    list += "                    ║  " + config.Colors.Yellow + "API 1" + config.Colors.Purple + "  ║                    ║  " + config.Colors.Yellow + "API 2  ║\r\n";
    list += "                    ╠═════════╩══════╗      ╔══════╩═════════╣\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "UDP          ║      ║ → " + config.Colors.Yellow + "NTP" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "TCP          ║      ║ → " + config.Colors.Yellow + "OVH-RAW" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "UDPBLEND     ║      ║ → " + config.Colors.Yellow + "REDSYN" + config.Colors.Purple + "       ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "LDAP         ║      ║ → " + config.Colors.Yellow + "HYDRA.KO" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "NTP          ║      ║ → " + config.Colors.Yellow + "PLUTO-L7" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "Chargen      ║      ║ → " + config.Colors.Yellow + "FN-RAPE" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "ACK          ║      ║ → " + config.Colors.Yellow + "R6-FUCK" + config.Colors.Purple + "      ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "SSYN         ║      ║ → " + config.Colors.Yellow + "ARK-V2" + config.Colors.Purple + "       ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "ESSYN        ║      ║ → " + config.Colors.Yellow + "OVH-RAWV2" + config.Colors.Purple + "    ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "XSYN         ║      ║ → " + config.Colors.Yellow + "LDAP" + config.Colors.Purple + "         ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "VSE          ║      ║ → " + config.Colors.Yellow + "OVH-DEATH" + config.Colors.Purple + "    ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "FRAG         ║      ║ → " + config.Colors.Yellow + "DVR" + config.Colors.Purple + "          ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "XMAS         ║      ║ → " + config.Colors.Yellow + "NFO-RIOT" + config.Colors.Purple + "     ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "ZAP          ║      ║ → " + config.Colors.Yellow + "CODEINE-HOME" + config.Colors.Purple + " ║\r\n";
    list += "                    ║ → " + config.Colors.Yellow + "Wizard       ║      ║ → " + config.Colors.Yellow + "N/A" + config.Colors.Purple + "          ║\r\n";
    list += "                    ╚════════════════╝      ╚════════════════╝\r\n";
    return list;
}
