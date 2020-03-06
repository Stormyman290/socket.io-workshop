var express = require('express');
var socketio = require('socket.io');

// Setup our web app
var app = express();
app.use(express.static('public'));

// Turn server running on port 4000 into a WebSocket
var io = socketio(app.listen(4000));

// --- WORKSHOP STARTS HERE ---

// on('connection', socket => ...)

// SERVER event responses 
//     SERVER event emits (part of responses);