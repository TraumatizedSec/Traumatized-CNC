const fs = require("fs");
const { config } = require("process");
const crud = require("./crud.js");

exports.login = function(usr, pw, ip) {
    let get_user = crud.user(usr, "all");
    if(get_user === "No user found!") {
        return "User not found!";
    } else {
        if(crud.isSignedIn(usr) === false || crud.isSignedIn(ip) === false) {
            let info = get_user.split(",");
            let db_username = info[0];
            let db_ip = info[1];
            let db_pw = info[2];
            if(db_username === usr) {
                if(db_pw === pw) {
                    if(db_ip === "none") {
                        crud.update(ip, info[3], info[4], info[5]);
                        crud.log_session(usr, ip);
                        return "Successfully logged in! Welcome: " + usr;
                    } else {
                        crud.log_session(usr, ip);
                        return "Successfully logged in! Welcome: " + usr;
                    }
                } else {
                    return "2 Username or password seems to be incorrect!";
                }
            } else {
                return "1 Username or password seems to be incorrect!";
            }
        } else {
            return "User already signed in. One connect per user signed in!";
        }
    }
}