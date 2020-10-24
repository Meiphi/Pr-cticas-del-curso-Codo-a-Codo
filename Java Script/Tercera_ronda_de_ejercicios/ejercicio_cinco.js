/*EJERCICIO 5
Se le pedirá al usuario un número y una vez que lo tengamos se deberá
mostrar en pantalla las tablas de dicho número hasta el 10:
Por ejemplo, si el usuario escribe 5 se deberá generar lo siguiente:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...........
...........
5 x 10 = 50*/

let numero = parseInt(prompt("Numero:"))
let multiplicador = 1
while(multiplicador <= 10){
	producto = numero * multiplicador
	console.log(numero + " x " + multiplicador + " = " + producto)
	multiplicador++
}