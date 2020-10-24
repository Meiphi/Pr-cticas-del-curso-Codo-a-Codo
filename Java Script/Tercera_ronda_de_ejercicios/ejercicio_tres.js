/*EJERCICIO 3
Dada la edad de una persona (entre 1 y 110 años) y su género ('F' para
mujeres, 'M' para hombres), indicar si está en edad para jubilarse.
Observación: Las mujeres se jubilan con 60 años o más. Los hombres
se jubilan con 65 años o más. Ejemplo: Si ingresa 60 y 'M', debe mostrar
como resultado en pantalla “No se jubila”.*/

let personaEdad = parseInt(prompt("Edad"))
let personaGenero = prompt("Elija genero:\n'F' para mujeres\n'M' para hombres")

if (personaEdad >= 60 && personaGenero === "F"){
	alert("Puede jubilarse dama")
}else if (personaEdad >= 65 && personaGenero === "M"){
	alert("Puede jubilarse hombre")
}else{
	alert("No puede jubilarse")
}
