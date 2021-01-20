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

exports.Help = function() {
    link.cyan( '                    ╔════════════════════════╗\r\n' ) ;
    link.cyan( '                    ║      ╦ ╦╔═╗╦  ╔═╗      ║\r\n' ) ;
    link.cyan( '                    ║      ╠═╣║╣ ║  ╠═╝      ║\r\n' ) ;
    link.cyan( '                    ║      ╩ ╩╚═╝╩═╝╩        ║\r\n' ) ;
    link.cyan( '                    ╚════════════════════════╝\r\n' ) ;

    var items = [
        'a. Methods',
    	'b. GeoIP' ,
	    'c. Port Scan' ,
    	'd. Stress',
        'e. Stats',
        'f. Admin Help'

    ] ;

    link.singleColumnMenu( items , function( error , response ) {
        if(response.selectedIndex == 1) {
            func.Input("IP: ");
        } else {
            console.log("dick2big");
        }
    });
}
