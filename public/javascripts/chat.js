socket = io.connect();

window.addEventListener( 'load', function() {
	// connect to server

	// when connected
	socket.on( 'connect', function(msg) {
		document.getElementById( "connectId" ).innerHTML = "your ID::" + socket.id;
	});

	// when receive a message
	socket.on( 'message', function(msg) {
		document.getElementById( "receiveMsg" ).appendChild( document.createTextNode( msg  ) );
		document.getElementById( "receiveMsg" ).appendChild( document.createElement( "br" ) );
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
