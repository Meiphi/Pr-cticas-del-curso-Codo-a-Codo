for (let i = 11; i >= 9; i--) {
	document.write("<strong>La tabla del " + i + ":</strong>")
	for (let j = 1; j < 10; j++) {
		producto = i * j
		document.write("<p>" + i + " x " + j + ": " + producto + "</p>")
	}
}