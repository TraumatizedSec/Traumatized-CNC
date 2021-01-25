const fs = require("fs");
const grid = require("../extra/data_grid.js");

exports.show_users = function() {
    table = grid.CreateHeader();
    let gay = fs.readFileSync("./db/users.db", "utf8");
    let fix = gay.split("('").join("");
    let fix2 = fix.split("')").join("");
    let split = fix2.split("\n");
    split.forEach(u => {
        if(u.length > 5) {
            let skidbag = u.split("','");
            let isAdmin = false;
            switch(parseInt(skidbag[5])) {
                case 0:
                    isAdmin = false;
                    break;
                case 1:
                    isAdmin = true;
                    break;
            }
            table += grid.CreateRow(skidbag[0], skidbag[1], skidbag[3], skidbag[4], isAdmin.toString());
        }
    })
    table += grid.CreateFooter();
    return table;
}