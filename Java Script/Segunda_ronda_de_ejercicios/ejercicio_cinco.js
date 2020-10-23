/*EJERCICIO 5: 
Una entrada para tu película favorita.

1. Declara una variable que se llame peliculaElegida y asígnale el método prompt() para que le puedas solicitar al usuario que ingrese su película
favorita de una lista, que tu vas a proporcionar en dicho método. 
Importante: para que puedas enlistar las opciones de películas una debajo de otra, necesitaras el carácter especial( \n ) para hacer un salto de línea. Si no te queda muy claro cómo usarlo, deberás usar google para ver un ejemplo.

2. Evalúa cada uno de los casos con el condicional switch (Utilizaremos este método para practicarlo). En el bloque de código de cada case le diremos
que “su ticket ha sido emitido”, pero, lo haremos a través del método document.write() y en su argumento(dentro de los paréntesis) haremos un template literals con el formato HTML del texto y la imagen de la película elegida.

//EJEMPLO
document.write(`<p>Su ticket ha sido emitido</p><img src = "enlaceImg">`);
*/

let peliculaElegida = prompt("Elije pelicula:\n1. Toy Story.\n2. Mulan.\n3. Coco.")
switch (peliculaElegida){
	case "1":
		document.write(`<p>Su ticket ha sido emitido</p><img src = "https://pics.filmaffinity.com/Toy_Story-626273371-large.jpg" alt = "Pelicula Toy Story">`)
		break
	case "2":
		document.write(`<p>Su ticket ha sido emitido</p><img src = "https://pics.filmaffinity.com/Mul_n-307796523-large.jpg" alt = "Pelicula Mulan">`)
		break
	case "3":
		document.write(`<p>Su ticket ha sido emitido</p><img src = "https://pics.filmaffinity.com/Coco-155051069-large.jpg" alt = "Pelicula Coco">`)
		break
}