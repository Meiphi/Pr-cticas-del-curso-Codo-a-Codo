/*EJERCICIO 1: Mi primera condicional.
1. Realizar un algoritmo que pida el nombre de una persona. Si el dato entra vacío, debe pedir nuevamente al usuario que introduzca su nombre (“No ha introducido ningún nombre”).
2. Una vez hecho esto, se desplegará una alerta de bienvenida con el nombre
del usuario.*/

if (nombre = prompt("nombre")) {
	alert("Bienvenido " + nombre)
} else {
	alert("No ha introducido ningun nombre.")
	if(nombre = prompt("nombre")){
		alert("Bienvenido " + nombre)
	}
}

