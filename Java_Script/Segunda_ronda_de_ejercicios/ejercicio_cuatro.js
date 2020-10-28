/*EJERCICIO 4: Simulador de chat.
Para este ejercicio vamos a crear una algoritmo que escriba un mensaje de aliento si un visitante, cuando se le pregunte “¿Cómo está?” responde que está triste. La idea es simular un chat con la máquina de 4 interacciones.

Nota: Para que las comparaciones sean más exactas al dato ingresado. Investiga
sobre el método toLowerCase().*/

respuesta = prompt("¿como esta?")
if (respuesta.toLowerCase() === "triste") {
	alert("Noo bro, no estes triste :(")
} else if (respuesta.toLowerCase() === "feliz") {
	alert("Eaaa vamo de rumba'")
} else if (respuesta.toLowerCase() === "enojado") {
	alert("Te dicen Gruñoncito de los ositos cariñosos?")
} else if (respuesta.toLowerCase() === "emocionado"){
	alert("Qué pasó? :o")
} 