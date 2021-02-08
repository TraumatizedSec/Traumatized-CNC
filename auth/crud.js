const fs = require("fs");
const crud = require("./crud.js");

const db_path = "./db/users.db";
const current_path = "./db/current.db";

exports.current_path = current_path;

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
        switch(stat) {
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

exports.remove = function(usrOrip) {
    let db = fs.readFileSync(db_path, "utf8");
    let users = db.split("\n");
    let new_db = "";
    users.forEach(u => {
        if(!u.includes(usrOrip) && u.length > 5) {
            found_check = true
            new_db += u + "\n";
        }
    })
    fs.writeFileSync(db_path, new_db);
    return "[x] User: " + usrOrip + " successfully Removed!\r\n";
}

exports.add = function(user, ip, pw, level, maxtime, admin) {
    let get_user = crud.user(user, "all");
    if(get_user === "Error, Invalid stat type!" || get_user === "No user found!") {
        fs.appendFileSync(db_path, "('" + user + "','" + ip + "','" + pw + "','" + level + "','" + maxtime + "','" + admin + "')\n")
        return "[+] User: " + user + " added\r\n";
    } else {
        return "[x] Username is taken, Choose another username\r\n";
    }
} //open again

exports.update = function(usrOrip, new_ip, new_level, new_maxtime, new_admin) {
    /*
    Read database and grab user data
    */

    let get_user = crud.user(usrOrip, "all");
    if(get_user === "No user found!")
    {
        return "[x] Error, No user found to update!\r\n";
    }

    let info = get_user.split(',');

    let db_user = info[0];
    let db_ip = info[1];
    let db_pw = info[2];
    let db_level = info[3];
    let db_maxtime = info[4];
    let db_admin = info[5];

    crud.remove(usrOrip);
    crud.add(db_user, new_ip, db_pw, new_level, new_maxtime, new_admin);
    return "[x] User: " + db_user + " successfully updated new data!\r\n";
}

exports.change_password = function(usrOrip, new_pw) {
    let get_user = crud.user(usrOrip, "all");
    if(get_user === "No user found!") { return "[x] Error, No user found to update!\r\n"; }
    if(new_pw === "undefined" || new_pw === "") { return "[x] Error, No password was set to update!\r\n"; }

    let info = get_user.split(',');

    let db_user = info[0];
    let db_ip = info[1];
    let db_pw = info[2];
    let db_level = info[3];
    let db_maxtime = info[4];
    let db_admin = info[5];

    crud.remove(usrOrip, "all");
    crud.add(db_user, db_ip, db_pw, db_level, db_maxtime, db_admin);
    return "[x] User: " + db_user + " suucessfully updated password!\r\n";
}

exports.log_session = function(username, ip) {
    fs.appendFileSync(current_path, "('" + username + "','" + ip + "')\n");
}

exports.remove_session = function(ip) {
    /*
    Read current db
    */

    let db = fs.readFileSync(current_path, "utf8");
    let current_users = db.split("\n");
    let new_db = "";
    current_users.forEach(u => {
        if(!u.includes(ip) && u.length > 5) {
            new_db = u + "\n";
        }
    })

    fs.writeFileSync(current_path, new_db);
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

exports.GetCurrentUsername = function(usrOrip) {
    /*
    Read current db
    */

   let found_check = "";
   let nigger = "";


   let db = fs.readFileSync("./db/current.db", "utf8");
   let users = db.split("\n");
   users.forEach(u => {
       if(u.includes(usrOrip)) {
           nigger = u.split(",")[0].replace("('", "");
           found_check = true;
       }
   })

   if(found_check === false) {
       return "User is currently not signed in\r\n";
   } else {
       return nigger.replace("'", "");
   }
}

exports.isAdmin = function(usrOip) {
    let get_usr = crud.user(usrOip, "admin")
    if(get_usr == true) {
        return true
    } else {
        return false
    }
}