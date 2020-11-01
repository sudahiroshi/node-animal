window.addEventListener( 'load', function() {
	// connect to server
	socket = io.connect();

	// when connected
	socket.on( 'connect', function(msg) {
		console.log(socket.id);
		document.querySelector( "#connectId" ).innerHTML = "ID::" + socket.id;
	});

	// when receive a message
	socket.on( 'message', function(msg) {
		document.querySelector( "#receiveMsg" ).innerHTML = msg;
		let words = msg.split(" ");
		let chara = document.querySelector( '#' + words[0] );
		if( words[1] == "move" ) {
			chara.style.left = words[2] + 'px';
			chara.style.top = words[3] + 'px';
		} else if( words[1] == "size" ) {
			chara.style.width = words[2] + 'px';
		}
	});

	let animals = ["bare", "dog", "elephant", "giraffe", "koala", "panda", "pig", "rabbit"];
	animals.forEach( (animal) => {
		let chara = document.querySelector( '#' + animal );
		chara.style.left = '0px';
		chara.style.top = '200px';
		chara.style.width = '100px';
	})
});

// message sending
function SendMsg() {
	let msg = document.querySelector( "#message" ).value;
	let words = msg.split(" ");
	let chara = document.querySelector( '#' + words[0] );
	if( chara != null ) {
		console.log( msg );
		socket.emit( 'message', msg );
	}
}

// disconect
function DisConnect() {
	socket.send(socket.socket.sessionid + " has been disconected.");
	socket.disconnect();
}
