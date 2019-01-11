const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
}).listen(80);

console.log('Server was started at http://127.0.0.1:80/');
