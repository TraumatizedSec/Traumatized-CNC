const Net = require('net');
var fs = require('fs');
const p = require("phin");
const f = require("node-fetch");
const { exec } = require('child_process');
const port = +process.argv[2];
const server = new Net.Server();

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


server.listen(port, function() {
    console.log("Server started! => "  + port);
});

server.on('connection', function(socket) {
    socket.write("Welcome\r\n")
    
    console.log("A new connection has been established");
    var socket_port = socket.remotePort;
    var socket_ip = socket.remoteAddress.replace("::ffff:", "");
    console.log('Client IP: ' + socket_ip + ":" + socket_port + "\r\n");

    // READING DATA
    socket.on('data', function(chunk) {
        //Cleaning data
        var cleanSTR = chunk.toString().replace(/(\r\n|\n|\r)/gm,"");

        if(cleanSTR.startsWith("test")) {
            socket.write("working");
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