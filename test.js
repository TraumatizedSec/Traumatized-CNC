const fs = require("fs");
const func = require("./extra/functions.js");
const crud = require("./auth/crud.js");
const grid = require("./extra/data_grid");
const admin = require("./auth/admin.js");
const banners = require("./extra/banners.js");

// console.log(gay.show_stats(process.argv[2])); //SHOW STATS
// console.log(crud.update(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6])); // UPDATE USER
console.log(banners.main());
console.log(banners.admin())
console.log(admin.show_users());




// table = grid.CreateHeader();
// let gay = fs.readFileSync("./db/users.db", "utf8");
// let fix = gay.split("('").join("");
// let fix2 = fix.split("')").join("");
// let split = fix2.split("\n");
// split.forEach(u => {
//     if(u.length > 5) {
//         let skidbag = u.split("','");
//         let isAdmin = false;
//         switch(parseInt(skidbag[5])) {
//             case 0:
//                 isAdmin = false;
//                 break;
//             case 1:
//                 isAdmin = true;
//                 break;
//         }
//         table += grid.CreateRow(skidbag[0], skidbag[1], skidbag[3], skidbag[4], isAdmin.toString());
//     }
// })
// table += grid.CreateFooter();
// console.log(table);