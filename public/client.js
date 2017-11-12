var socket;
function setup() {
    createCanvas(500,500);
    background(0);
    // Create a socket connetion to server
    socket = io.connect(process.env.PORT || 'http://localhost:5000');
}


function draw() {
 //nothing
}

