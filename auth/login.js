const fs = require("fs");
const crud = require("./crud.js");

exports.login = function(usr, pw, ip) {
    let get_user = crud.user(usr, "all");
    if(get_user === "No user found!") {
        return "User not found!";
    } else {
        if(crud.isSignedIn(usr) === false) {
            let db_username = get_user.split(",")[0];
            let db_pw = get_user.split(",")[1];
            if(db_username === usr) {
                if(db_pw === pw) {
                    if(crud.isSignedIn(ip) == true || crud.isSignedIn(usr) == true) {
                        return "Error, One connection per user!";
                    } else {
                        crud.log_session(usr, ip);
                        return "Successfully logged in! Welcome: " + usr;
                    }
                } else {
                    return "Username or password seems to be incorrect!";
                }
            } else {
                return "Username or password seems to be incorrect!";
            }
        } else {
            return "User already signed in. One connect per user signed in!";
        }
    }
}