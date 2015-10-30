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
		document.getElementById( "receiveMsg" ).appendChild( document.createTextNode( msg  ) );
		document.getElementById( "receiveMsg" ).appendChild( document.createElement( "br" ) );
		var words = msg.split(" ");
		if( words[0] == "rabit" ) {
			rabit.style.left = words[1] + 'px';
			rabit.style.top = words[2] + 'px';
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
