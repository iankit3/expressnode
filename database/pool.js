var settings = require('../settings');
var mysql = require('mysql');
var sqlquery = "SELECT emp_ID as E from user";

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database:'sample',
    password: settings.const.password
})

module.exports = pool;