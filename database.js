var dbUrl = "test";
var collections = ["testcol"];

var db = require("mongojs").connect(dbUrl, collections);
module.exports = db;
