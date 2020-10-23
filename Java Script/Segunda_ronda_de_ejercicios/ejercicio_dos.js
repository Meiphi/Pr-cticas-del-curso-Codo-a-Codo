/*EJERCICIO 2: Números pares o impares.
1. Pedirle al usuario que introduzca 1 número.
2. Comparar si es par o no, a través de un if/else. Si es par que muestre una
alerta indicando que el número es par o en caso contrario que muestre una
alerta que es impar.*/

numero = prompt("numero") 

alert(!(numero % 2) ? "Numero par" : "Numero impar")

/*if (!(numero % 2)) {
	alert("Numero par")
} else {11
	alert("Numero impar")
}*/