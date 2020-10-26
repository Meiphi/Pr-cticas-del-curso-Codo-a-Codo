/*EJERCICIO 4: Armando una lista de super.
1. Crea un array vacío que se llame listaDeSuper.
2. Piensa cómo le puedes pedir al usuario que ingrese al menos 5
productos para llenar la lista de super.
3. Muestra por consola los productos introducidos por el usuario.
*/

let listaDeSuper = []
let producto = ""
let flag = 0
let i = 1
while (producto !== "no") {
	while (listaDeSuper.length < 5) {
		producto = prompt("Debe ingresar al menos cinco productos\n" + "Numero de Producto: " + i)
		i++
		listaDeSuper.push(producto)
	}
	i++
	producto = prompt("Puede agregar mas productos. De lo contrario escriba 'no'.\nNumero de Producto: " + i)
	listaDeSuper.push(producto)
}

listaDeSuper.pop()

console.log('listaDeSuper: ' + listaDeSuper)
