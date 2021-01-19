const fs = require("fs");
const config = require("../config/strings.js");

exports.main = function() {
    let main = "";
    main += config.Colors.Purple + "                  ╔════════════════════════════════════════╗\r\n";
    main += "                  ║    " + config.Colors.Yellow + "╔╦╗╦═╗╔═╗╦ ╦╔╦╗╔═╗╔╦╗╦╔═╗╔═╗╔╦╗" + config.Colors.Purple + "     ║\r\n";
    main += "                  ║     " + config.Colors.Yellow + "║ ╠╦╝╠═╣║ ║║║║╠═╣ ║ ║╔═╝║╣  ║║" + config.Colors.Purple + "     ║\r\n";
    main += "                  ║     " + config.Colors.Yellow + "╩ ╩╚═╩ ╩╚═╝╩ ╩╩ ╩ ╩ ╩╚═╝╚═╝═╩╝" + config.Colors.Purple + "     ║\r\n";
    main += "                  ╚════════════════════════════════════════╝\r\n" + config.Colors.Reset;
    return main;
}

exports.geoBanner = function() {
    let gbnnr = "";
    gbnnr += config.Colors.Purple + "                       ╔═══════════════════════════════╗\r\n";
    gbnnr += "                       ║      " + config.Colors.Yellow + "Geo Locator Results" + config.Colors.Purple + "      ║\r\n";
    gbnnr += "                       ╚═══════════════════════════════╝\r\n" + config.Colors.Purple;
    return gbnnr;
}

exports.GeoBox = function() {
    
}