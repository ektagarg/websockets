var express = require('express');
var socket = require('socket.io');


//App setup
var app = express();
var server = app.listen(4000, function(){
    console.log("listening to app running on 4000");
})

app.use(express.static('public'));

//socket connection
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

});