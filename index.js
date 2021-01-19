const Net = require('net');
var fs = require('fs');
///const async = require('')
const Discord = require('discord.js')
const p = require("phin");
const f = require("node-fetch");
const { exec } = require('child_process');
const port = 455;
const server = new Net.Server();

const config = require("./config/strings.js");
const crud = require("./auth/crud.js");
const auth = require("./auth/login.js");
const banners = require("./extra/banners");

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


server.listen(port, function() {
    console.log("Server started! => "  + port);
});

server.on('connection', function(socket) {
    //set_title("Welcome To Scrapy's CNC!", socket);
    socket.write(config.Colors.movingtext2 + "Traumatized\r\n" + config.hostname);
    
    console.log("A new connection has been established");
    var socket_port = socket.remotePort;
    var socket_ip = socket.remoteAddress.replace("::ffff:", "");
    console.log('Client IP: ' + socket_ip + ":" + socket_port + "\r\n");

    // READING DATA
    socket.on('data', function(chunk) {
        //Cleaning data
        let cleanSTR = chunk.toString().replace(/(\r\n|\n|\r)/gm,"");

        //set_title("Scrapy's CNC! | APIs: 4", socket);

        /*
        Command handler
        */
        if(cleanSTR.includes(" ") == true) {
            let split = cleanSTR.split(" ");
            let count = 0;
            split.forEach(e => {
                config.CurrentCMD.arg[count] = e;
                count++;
            })
            config.CurrentCMD.Cmd = split[0];
            config.CurrentCMD.fullcmd = cleanSTR;
        } else {
            config.CurrentCMD.Cmd = cleanSTR;
            config.CurrentCMD.fullcmd = cleanSTR;
        }

        /*
        Main Functions
        */
        
        if(crud.isSignedIn(socket_ip) == true) {
            if(cleanSTR.startsWith("testing")) {
                socket.write("Testing\r\n" + config.hostname);
            } else if(cleanSTR.startsWith("methods")) {
                f('https://scrapy.tech/methods.txt').then(res => socket.write(res.text()));
            } else if(cleanSTR.startsWith("geo")) {
                let ip = config.CurrentCMD.arg[1];
                f('https://scrapy.tech/tools/?action=geoip&q='+ip).then(res => res.text()).then(body => {
                    if(body) {
                        socket.write(banners.geoBanner() + body + config.hostname);
                    } else {
                        socket.write("[x] Error, Couldn't fetch geo results")
                        console.log("[x] Error, Couldn't fetch geo results")
                    }
                })
            } else if(cleanSTR.startsWith("pscan")) {
                let ip = config.CurrentCMD.arg[1]
                f('https://scrapy.tech/tools/?action=portscan&q='+ip).then(res => res.text()).then(body => {
                    if(body) {
                        socket.write(body + "\r\n" + config.hostname);
                        console.log(body);
                    } else {
                        socket.write("[x] Error. Couldn't fetch PortScanner results!\r\n" + config.hostname)
                        console.log("[x] Error. Couldn't fetch PortScanner results!");
                    }
                })
            } else if(cleanSTR.startsWith("stress")) {
                let ip = config.CurrentCMD.arg[1]
                let port = config.CurrentCMD.arg[2]
                let time = config.CurrentCMD.arg[3]
                let method = config.CurrentCMD.arg[4]
                // f('https://api.com/api.php?key=key&host='+ip+"&port="+port+"&time="+time+"&method="+method)
            } else if(cleanSTR.startsWith("exit")) {
                socket.write("Closing Traumatized.")
                socket.write(config.Colors.Clear)
                socket.write("Closing Traumatized..")
                socket.write(config.Colors.Clear)
                socket.write("Closing Traumatized...")
                socket.close()
            } else {
                socket.write("[x] Command not found!\r\n" + config.hostname);
            }
        } else if(cleanSTR.startsWith("-")) {
            let username = config.CurrentCMD.arg[0].replace("-", "");
            let pw = config.CurrentCMD.arg[1];
            let login_response = auth.login(username, pw, socket_ip);
            if(login_response.includes("Successfully")) {
                socket.write(login_response + "\r\n" + config.hostname);
            } else {
                socket.write(login_response + "\r\n");
            }
        } else {
            socket.write("Must login\r\nUsage: <username> <password>\r\n")
        }
    });

    // WHEN A CLIENT DISCONNECTS
    socket.on('end', function() {
        console.log('Closing connection with the client\r\n');
    });

    // ANY ERRORS
    socket.on('error', function(err) {
        console.log("[NODEJS SERVER ERROR(IGNORE)]: " + err + "\r\n");
    });
});

function reset_sessions() {
    exec("rm -rf db/current.db; touch db/current.db; chmod 777 db/current.db", function(error, stdin, stderr) {
        console.log(stdin)
    })
}