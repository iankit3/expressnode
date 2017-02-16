var express = require('express');
var connectionManager = require('./database/connectionManager');
//var bodyParser = require('body-parser');

//var path = require('path');
var app = express();
app.listen(9090);
 app.get("/api",function(req,res){
   
 connectionManager.connection.start();  
    //console.log(req.body)
    res.end(req.toString() )
 })

app.get("/", function (req, res) {
    res.end("hi");
})