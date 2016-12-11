var express = require('express');
//var bodyParser = require('body-parser');

//var path = require('path');
var app = express();
app.listen(9090);

app.get('/', function (req,res) {
     res.send("hi");
})


