const fs = require("fs");
const func = require("./extra/functions.js");
const crud = require("./auth/crud.js");

// console.log(gay.show_stats(process.argv[2])); //SHOW STATS
console.log(crud.update(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6])); // UPDATE USER