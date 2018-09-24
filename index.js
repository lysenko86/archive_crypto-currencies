"use strict";

const app = require('express')();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/build/index.html');
}).listen(8124);

console.log('Server was started at http://127.0.0.1:8124/');
