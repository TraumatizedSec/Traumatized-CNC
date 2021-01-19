const config = require("./config/strings.js");

exports.geoBanner = function() {
    let gbnnr = "";
    gbnnr += "╔═══════════════════════════════╗\r\n";
    gbnnr += "║      Geo Locator Results      ║\r\n";
    gbnnr += "╚═══════════════════════════════╝\r\n";
    return gbnnr;
}