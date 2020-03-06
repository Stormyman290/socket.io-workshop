// CLIENT SIDE
// Connection to the server socket
const PORT = 4000;
var socket = io.connect('http://localhost:' + PORT);

// References to the DOM
var message = document.getElementById('message'),
      name = document.getElementById('name'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

// --- WORKSHOP STARTS HERE ---

// CLIENT event emits

// CLIENT event responses