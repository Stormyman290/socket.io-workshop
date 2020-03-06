// CLIENT SIDE

//Must install node.js and then use "npm install socket.io express" on command line in this repository
// If vulnerabilities are detected use "npm init -y" to fix it

// Connection to the server socket
const PORT = 4000;
var socket = io.connect('http://localhost:' + PORT);

// References to the DOM
var message = document.getElementById('message'),
      handle = document.getElementById('name'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

// --- WORKSHOP STARTS HERE ---

// CLIENT event emits
btn.addEventListener('click', function() {
	socket.emit('message'), {
		name: handle.value,
		message: message.value
	});
	message.value = '';
})

message.addEventListener('keypress', function() {
	socket.emit('typing', handle.value);
})

// CLIENT event responses
socket.on('message', function(data) {
	feedback.innerHTML = '';
	output.innerHTML += '<p><strong>' + data.name + '</strong>: ' + data.message + '</p>';
})

socket.on('typing', function(name) {
	feedback.innerHTML = '<p><em>' + name + 'is typing...</em></p>';
})