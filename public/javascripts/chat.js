socket = io.connect();

window.addEventListener( 'load', function() {
	rabit = document.getElementById( 'rabit' );

	// connect to server

	// when connected
	socket.on( 'connect', function(msg) {
		document.getElementById( "connectId" ).innerHTML = "your ID::" + socket.id;
	});

	// when receive a message
	socket.on( 'message', function(msg) {
		document.getElementById( "receiveMsg" ).innerHTML = msg;
		var words = msg.split(" ");
		var chara = document.getElementById( words[0] );
		if( words[1] == "move" ) {
			chara.style.left = words[2] + 'px';
			chara.style.top = words[3] + 'px';
		} else if( words[1] == "size" ) {
			chara.style.width = words[2] + 'px';
		}
	});


});

// message sending
function SendMsg() {
	var msg = document.getElementById( "message" ).value;
	console.log( msg );
	socket.emit( 'message', msg );
}

// disconect
function DisConnect() {
	socket.send(socket.socket.sessionid + " has been disconected.");
	socket.disconnect();
}
