var settings = require('../settings');

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: settings.const.password
})

connection.call = function(){
    console.log('hi')
}
connection.start = function () {
    connection.connect()

    connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0].solution)
    })

   // connection.end()

}

module.exports = {
    connection: connection
}