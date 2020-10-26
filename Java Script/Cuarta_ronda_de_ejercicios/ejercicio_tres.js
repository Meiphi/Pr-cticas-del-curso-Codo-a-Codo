/*EJERCICIO 3: Promedio de edad.
1. Crear un array edades con al menos 8 edades distintas.
2. Recorrer el array y obtener el promedio de las edades del array.
*/

let edades = [10, 14, 16, 18, 21, 25, 29, 30]
let sumatoria = 0
for (var i = 0; i < edades.length; i++) {
	sumatoria += edades[i]
}

promedio = sumatoria / edades.length

console.log("promedio de las edades: " + promedio)
