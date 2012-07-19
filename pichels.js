var canvas = null, ctx;
function draw () {
	if (canvas == null) {
		canvas = document.getElementById ('tutorial');
		ctx = canvas.getContext ('2d');
	}

	w = Math.floor (Math.random()*10);
	h = Math.floor (Math.random()*10);

	x = Math.floor (Math.random()*500);
	y = Math.floor (Math.random()*500);

	r = Math.floor (Math.random()*255);
	g = Math.floor (Math.random()*255);
	b = Math.floor (Math.random()*255);

	ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
	ctx.fillRect (x, y, w, h);

	setTimeout ('draw()', 0);
}

function cripto() {
	var texto = document.getElementById ('texto').value;
	var cripto = "";
	for (i = 0; i < texto.length; i++) {
		c = texto[i];
		switch (c) {
			case 'z': c = 'p'; break;
			case 'e': c = 'o'; break;
			case 'n': c = 'l'; break;
			case 'i': c = 'a'; break;
			case 't': c = 'r'; break;

			case 'p': c = 'z'; break;
			case 'o': c = 'e'; break;
			case 'l': c = 'n'; break;
			case 'a': c = 'i'; break;
			case 'r': c = 't'; break;
		}
		cripto = cripto + c;
	}
	alert ("Sua mensagem criptografada é: " + cripto);
}
