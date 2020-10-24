/*EJERCICIO 4
Crear un programa para el ingreso a un sistema. El usuario deberá
ingresar una contraseña que deberá coincidir con la que esté guardada
en la memoria.
Tiene 3 intentos para acertar: si acierta, se le deberá informar que
acertó y que puede ingresar, y dejar de pedírsela, si se equivoca, se le
solicitará que la ingrese de nuevo.*/

let contrasenia = "abc123"
let intentos = 0
while (intentos < 3){
	let contraseniaIngresada = prompt("contrasenia")
	if (contrasenia === contraseniaIngresada){
		alert("Muy bien!")
		break
	}
	intentos++
	alert("error")
}