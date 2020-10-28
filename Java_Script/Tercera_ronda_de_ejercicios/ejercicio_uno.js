/*EJERCICIO 1
Se le pedirá al usuario 2 números para generar la suma, la resta, la
división y la multiplicación entre ellos.
1. Preguntar al usuario que operación quiere realizar antes de que
ingrese los dos números a operar.
2. Si el usuario no ingresa ninguna respuesta, automáticamente
informarle que deberá ingresar un dato.*/

respuesta = ""
while(respuesta === ""){
	respuesta = prompt("Elija una operacion a realizar:\n1. Suma\n2. Resta\n3. Division\n4. Multiplicacion")
	switch(respuesta){
		case "1":
			numero1 = parseInt(prompt("Primer numero"))
			numero2 = parseInt(prompt("Segundo numero"))
			resultado = numero1 + numero2
			alert("La suma es: " + resultado)
			break
		case "2":
			numero1 = parseInt(prompt("Primer numero"))
			numero2 = parseInt(prompt("Segundo numero"))
			resultado = numero1 - numero2
			alert("La resta es: " + resultado)
			break
		case "3":
			numero1 = parseInt(prompt("Primer numero"))
			numero2 = parseInt(prompt("Segundo numero"))
			while (numero2 === 0){
				numero2 = parseInt(prompt("Segundo numero"))
			} 
			resultado = numero1 / numero2
			alert("La division es: " + resultado)
			break
		case "4":
			numero1 = parseInt(prompt("Primer numero"))
			numero2 = parseInt(prompt("Segundo numero"))
			resultado = numero1 * numero2
			alert("La multiplicacion es: " + resultado)
			break
		default:
			break
	}
}