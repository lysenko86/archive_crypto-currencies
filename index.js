const express = require('express');
const app = express();

const PORT = 3002;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
}).listen(PORT);

console.log(`Server was started at http://127.0.0.1:${PORT}/`);
