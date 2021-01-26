const fs = require("fs");
const func = require("./extra/functions.js");
const crud = require("./auth/crud.js");
const grid = require("./banners/animation.js");;
const admin = require("./auth/admin.js");
const banners = require("./banners/banners.js");

// console.log(gay.show_stats(process.argv[2])); //SHOW STATS
// console.log(crud.update(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6])); // UPDATE USER
// console.log(banners.main());
// console.log(banners.admin())
// console.log(banners.helpR())

var ip = process.argv[2];
var skid = func.pScan(ip).replace("22" ," 34444");


// console.log(admin.show_users());
// console.log(admin.show_current_users()) //SHOW ALL USERS (ADMIN)


//  table = grid.CreateHeader();
//  let gay = fs.readFileSync("./db/users.db", "utf8");
//  let fix = gay.split("('").join("");
//  let fix2 = fix.split("')").join("");
//  let split = fix2.split("\n");
//  split.forEach(u => {
//      if(u.length > 5) {
//          let skidbag = u.split("','");
//         table += grid.CreateRow(skidbag[0], skidbag[1]);
//     }
// })
// table += grid.CreateFooter();
// console.log(table);