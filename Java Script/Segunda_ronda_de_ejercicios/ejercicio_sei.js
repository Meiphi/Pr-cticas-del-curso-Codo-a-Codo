/*EJERCICIO 6: Adivinando un número.
1. Crea la variable numeroSecreto y hazlo igual a un entero (Tu eliges el
número).
2. Preguntale al usuario que adivine el número en un prompt.
3. Si el usuario adivina el número deberá aparecer un alert diciendo que adivinó
el número. (Tienes que hacer la comparación con ( === ) y no te olvides de
parsearlo).
4. El algoritmo también debe decir, si numeroSecreto es más alto o más bajo
del que dijo el usuario.
5. Por último, si el usuario no adivina el número, deberá aparecer un mensaje
diciendo que se equivocó.*/

let numeroSecreto = 3
let numeroAdivinado = prompt("Adivine el numero")

if (numeroSecreto === parseInt(numeroAdivinado)){
	alert("Adivino!")
}else if (numeroSecreto > numeroAdivinado){
	alert("No. El numero es alto")
	alert("No adivino nada")
}else{
	alert("No. El numero es mas bajo")
	alert("No adivino nada")

}