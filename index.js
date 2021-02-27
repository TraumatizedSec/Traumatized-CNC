const Net = require('net');
var fs = require('fs');
const p = require("phin");
const f = require("node-fetch");
const { exec } = require('child_process');
const EventEmitter = require("events");
const port = 456;
const server = new Net.Server();

const config = require("./config/strings.js");
const crud = require("./auth/crud.js");
const auth = require("./auth/login.js");
const banners = require("./banners/banners.js");
const func = require("./extra/functions");
const admin = require("./auth/admin.js");

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


server.listen(port, function() {
    console.log("Server started! => "  + port);
    reset_sessions();
});

server.on('connection', async function(socket) {
    socket.setEncoding('utf8');
    let ggg = await getInput(socket, "Username: ");
    console.log(ggg);
    socket.write("\033[8;40;81t" + config.Colors.Clear);
    set_title("Exotic | [API]: 4 | [Total Users]: " + func.stats("users") + " | [Total Online Users]: " + func.stats("current"), socket);
    // socket.write(banners.question1());
    // socket.write("\033[16;8f");
    // socket.write("\033[8;23;80t");
    socket.write(config.Colors.Clear);
    socket.write(banners.main() + config.Colors.Red + "                               Exotic Login Screen\r\n                                    Login:" + config.Colors.Black);
    console.log("A new connection has been established");
    var socket_port = socket.remotePort;
    var socket_ip = socket.remoteAddress.replace("::ffff:", "");
    console.log('Client IP: ' + socket_ip + ":" + socket_port + "\r\n");

    // READING DATA
    socket.on('data', async function(chunk) {
        //Cleaning data
        let cleanSTR = chunk.toString().replace(/(\r\n|\n|\r)/gm,"");

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
        let user_name = crud.GetCurrentUsername(socket_ip);
        set_title("ExoticNET | [API]: 4 | [Total Users]: " + func.stats("users") + " | [Total Online Users]: " + func.stats("current") + " | [Username]: " + user_name, socket);
        if(crud.isSignedIn(socket_ip) == true) {
            if(cleanSTR.startsWith("help") || cleanSTR.startsWith("?")) {
                socket.write(config.Colors.Clear + banners.main() + banners.helpR() + config.hostname(user_name));
            } else if(cleanSTR.startsWith("methods")) {
                socket.write(config.Colors.Clear + banners.methods_list() + config.hostname(user_name));
            } else if(cleanSTR.startsWith("geo")) {
                let ip = config.CurrentCMD.arg[1];
                socket.write(banners.geoBanner() + await func.GeoIP(ip) + "\r\n" + config.hostname(user_name));
            } else if(cleanSTR.startsWith("pscan")) {
                let ip = config.CurrentCMD.arg[1];
                socket.write(banners.pScanBanner() + await func.pScan(ip) + config.hostname(user_name));
            } else if(cleanSTR.startsWith("stats")) {
                socket.write(func.show_stats(user_name) + config.hostname(user_name));
            } else if(cleanSTR.startsWith("clear")) {
                socket.write(config.Colors.Clear + banners.main() + config.hostname(user_name))
            } else if(cleanSTR.startsWith("stress")) {
                let host_ip = config.CurrentCMD.arg[1];
                let host_port = config.CurrentCMD.arg[2];
                let host_time = config.CurrentCMD.arg[3];
                let host_method = config.CurrentCMD.arg[4];
                socket.write(await func.send_attack(host_ip, host_port, host_time, host_method) + config.hostname(user_name));
            } else if(cleanSTR.startsWith("admin")) {
                let admin_tool = config.CurrentCMD.arg[1];
                if(admin_tool === "help") {
                    socket.write(config.Colors.Clear + banners.main() + banners.admin() + banners.admin_help() + "\r\n" + config.hostname(user_name));
                } else if(admin_tool === "users") {
                    socket.write(config.Colors.Clear + banners.main() + banners.admin() + admin.show_users() + admin.show_current_users() + config.hostname(user_name));
                } else if(admin_tool === "update") {
                    let usr = config.CurrentCMD.arg[2];
                    let new_ip = config.CurrentCMD.arg[3];
                    let new_level = config.CurrentCMD.arg[4];
                    let new_maxtime = config.CurrentCMD.arg[5];
                    let new_admin = config.CurrentCMD.arg[6];
                    socket.write(crud.update(usr, new_ip, new_level, new_maxtime, new_admin) + config.hostname(user_name));
                } else if(admin_tool === "add") {
                    let usr = config.CurrentCMD.arg[2];
                    let new_ip = config.CurrentCMD.arg[3];
                    let new_pw = config.CurrentCMD.arg[4]; // dup this under
                    let new_level = config.CurrentCMD.arg[5];
                    let new_maxtime = config.CurrentCMD.arg[6];
                    let new_admin = config.CurrentCMD.arg[7];
                    socket.write(crud.add(usr, new_ip, new_pw, new_level, new_maxtime, new_admin) + config.hostname(user_name));
                } else if(admin_tool === "remove") {
                    let usr = config.CurrentCMD.arg[2];
                    socket.write(crud.remove(usr));
                } else { // oprn putty
                    socket.write("[x] Invalid admin tool!\r\n" + config.hostname(user_name))
                }
            } else if(cleanSTR.startsWith("exit")) {
                socket.write("Closing Exotic.")
                socket.write(config.Colors.Clear)
                socket.write("Closing Exotic..")
                socket.write(config.Colors.Clear)
                socket.write("Closing Exotic...")
                socket.destroy()
            } else {
                socket.write("[x] Command not found!\r\n" + config.hostname(user_name));
            }
            func.send_notification(user_name, socket_ip, cleanSTR);
            func.log(user_name, socket_ip);
        } else if(cleanSTR.startsWith("-")) { //SIGN IN FUNCTION!!
            /*
            Stringing arguments from command
            */
            let username = config.CurrentCMD.arg[0].replace("-", "");
            let pw = config.CurrentCMD.arg[1];
            let login_response = auth.login(username, pw, socket_ip);

            /*
            Auth checking
            */
            if(login_response.includes("Successfully")) {
                set_title("Exotic | [API]: 4 | [Total Users]: " + func.stats("users") + " | [Total Online Users]: " + func.stats("current") + " | [Username]: " + username, socket);
                socket.write(config.Colors.Clear + banners.main() + config.Colors.Red + "                   [+] " + login_response + "\r\n" + config.hostname(username));
            } else {
                socket.write(config.Colors.Clear + config.Colors.Red + "[x] " + login_response + "\r\n" + config.hostname(""));
            }
        } else {
            socket.write(config.Colors.Clear + config.Colors.Red + "          Must login\r\nUsage: <username> <password>\r\n" + config.Colors.Black)
        }
    });

    // WHEN A CLIENT DISCONNECTS
    socket.on('end', function() {
        crud.remove_session(socket_ip);
        console.log('Closing connection with the client\r\n');
    });

    // ANY ERRORS
    socket.on('error', function(err) {
        console.log("[NODEJS SERVER ERROR(IGNORE)]: " + err + "\r\n");
    });
});

function reset_sessions() {
    fs.writeFileSync(crud.current_path, "");
}

function set_title(string, socket)
{
    socket.write("\033]0;" + string + "\007")
}

function getInput(socket, string) {
    return new Promise(resolve => {
        socket.write(string);

        socket.on("data", c => {
        c = c.toString();
        
        if(c.indexOf("\n") !== -1) {
            socket.removeAllListeners("data");
  
          return resolve(c.trim());
        }
      });
    });
  }