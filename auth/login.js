const fs = require("fs");
const crud = require("./crud.js");

exports.login = function(usr, pw, ip) {
    let get_user = crud.user(usr, "all");
    if(get_user === "No user found!") {
        return "User not found!";
    } else {
        if(crud.isSignedIn(usr) == false) {
            if(get_user.startsWith(usr + ",")) {
                if(get_user.includes("," + pw)) {
                    crud.log_session(usr, ip);
                    return "Successfully logged in! Welcome: " + usr;
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