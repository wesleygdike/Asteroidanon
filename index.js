'use strict';

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Activate the server to listen
app.set('port', (process.env.PORT || 5000))
// Set static directory to public
.use(express.static(__dirname + '/public'))
.listen(app.get('port'), function() {
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

// Register a callback function run when a new connection connects
io.on('connection', (socket) =>{
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});