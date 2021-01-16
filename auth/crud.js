const fs = require("fs");
const crud = require("./crud.js");

const db_path = "./db/users.db";
const current_path = "./db/current.db";

exports.user = function(usrOrip, stat) {
    /*
    Stat type validation
    */
    let stat_types = ["username", "ip", "password", "level", "maxtime", "admin", "all"];
    if(!stat_types.includes(stat)) {
        return "Error, Invalid stat type!";
    }   

   /*
   Read db and pull user string
   */
    
    let found_check = false;
    let db_user = "";
    let db_ip = "";
    let db_pw = "";
    let db_level = "";
    let db_maxtime = "";
    let db_admin = "";
  
    let db = fs.readFileSync(db_path, "utf8");
    let fix1 = db.split("('").join("");
    let fix2 = fix1.split("')").join("");
    let users = fix2.split("\n");
    users.forEach(e => { 
        if(e.includes(usrOrip)) {
            let info = e.split("','");
            found_check = true;
            db_user = info[0];
            db_ip = info[1];
            db_pw = info[2];
            db_level = info[3];
            db_maxtime = info[4];
            db_admin = info[5];
        }
    })

    if(found_check === false) {
        return "No user found!";
    } else {
        switch(type) {
            case stat_types[0]:
                return db_user;
            case stat_types[1]:
                return db_ip;
            case stat_types[2]:
                return db_pw;
            case stat_types[3]:
                return db_level;
            case stat_types[4]:
                return db_maxtime;
            case stat_types[5]:
                return db_admin;
            case stat_types[6]:
                return db_user + "," + db_ip + "," + db_pw + "," + db_level + "," + db_maxtime + "," + db_admin;
        }
    }
}

exports.update = function() {
    
}

exports.log_session = function(ip) {
    let username = crud.user(ip, "username");
    fs.appendFileSync(current_path, "('" + username + "','" + ip + "')\n");
}

exports.isSignedIn = function(usrOrip) {
    /*
    Read current db
    */

    let found_check = false;

    let db = fs.readFileSync("./db/current.db", "utf8");
    let users = db.split("\n");
    users.forEach(u => {
        if(u.includes(usrOrip)) {
            found_check = true;
        }
    })

    if(found_check === false) {
        return false;
    } else {
        return true;
    }
}