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

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


server.listen(port, function() {
    console.log("Server started! => "  + port);
});

server.on('connection', function(socket) {
    set_title("Welcome To Scrapy's CNC!", socket);
    socket.write("Scrapy's CNC\r\n")
    
    console.log("A new connection has been established");
    var socket_port = socket.remotePort;
    var socket_ip = socket.remoteAddress.replace("::ffff:", "");
    console.log('Client IP: ' + socket_ip + ":" + socket_port + "\r\n");

    // READING DATA
    socket.on('data', function(chunk) {
        //Cleaning data
        let cleanSTR = chunk.toString().replace(/(\r\n|\n|\r)/gm,"");

        set_title("Scrapy's CNC! | APIs: 4", socket);
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
        
        if(crud.isSignedIn(socket_ip) == true) {
            if(cleanSTR.startsWith("testing")) {
                socket.write("Testing\r\n" + config.hostname);
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

function set_title(string, socket)
{
    socket.write("\033]0;" + string + "\007")
}

// async function support(subject, reason) {
//     var webhook = "https://discord.com/api/webhooks/800156262519144490/uvVbr1Sv79FeAyKGnx43VCbxijIE_09DuJr3d5iMrkJUOFUbURCQJ0H7LqPpRoUB4GP5";
//     const embed = new Discord.MessageEmbed()
//         .setColor(000000)
//         .setTitle('Scrapys CNC Support Ticket')
//         .setDescription('**Subject:** '+subject+"\n**Question:** "+reason)
//         .setImage('https://64.media.tumblr.com/97985a52a131fb9c6e5d9e69f0761ae9/tumblr_oakqnqGPDy1toufq9o1_500.gif')
//         .setFooter('Scrapy CNC')
//     await webhook.send('[CNC Support Ticket]', {
//         username: 'Scrapy CNC',
//         avatarURL: 'https://64.media.tumblr.com/97985a52a131fb9c6e5d9e69f0761ae9/tumblr_oakqnqGPDy1toufq9o1_500.gif',
//         embeds: [embed]
//     })
// }