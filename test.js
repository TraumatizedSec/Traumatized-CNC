const fs = require("fs");
const gay = require("./auth/login.js");

console.log(gay.login(process.argv[2], process.argv[3]));