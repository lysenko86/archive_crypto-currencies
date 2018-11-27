"use strict";

const express = require('express');
const app = express();
const config = require('./config');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/templates/index.html');
}).listen(config.port);

console.log('Server was started at http://127.0.0.1:' + config.port + '/');
