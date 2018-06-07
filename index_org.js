'use strict';

const express = require('express');
const http = require('http');
const app = express();


// Activate the server to listen
app.set('port', (process.env.PORT || 5000));
// Set static directory to public
app.use(express.static(__dirname + '/public'))
const server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Landing Page
app.get('/', function(request, response) {
    console.log("Received Request");
  response.render('pages/index');
});

// WEB SOCKETS
const io = require('socket.io').listen(server);
// Register a callback function run when a new connection connects
io.on('connection', (socket) =>{
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);