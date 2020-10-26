/*EJERCICIO 5: Obteniendo el nombre más largo de un array.
1. Declara un array nombres con al menos 6 nombres.
2. Obtén el nombre más largo del array nombres. Tener en cuenta
que los "Strings" son listas de caracteres y que las listas tienen un
largo (length) que indica su tamaño.
*/

let nombres = ["Angel", "Barbara", "Celeste", "Daniella", "Esmeralda", "Fedterico"]

nombreLargo = nombres[0]
for (var i = 0; i < nombres.length; i++) {
	if(nombres[i].length > nombreLargo.length){
		nombreLargo = nombres[i]
	}
}

console.log("Nombre largo: " + nombreLargo)