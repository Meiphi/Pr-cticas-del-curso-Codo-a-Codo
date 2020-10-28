/*
Pasos para agregar nodos:
1.- Crear un elemento
2.- Crear un nodo de texto
3.- Añadir el nodo de texto al elemento
4.- Agregar atributos al elemento
5.- Agregar elemento al documento
*/

//1.- Crear un elemento
let elemento = document.createElement("h2")

//2.- Crear un nodo de texto
let contenido = document.createTextNode("Este es un Nodo recien creado")

//3.- Añadir el nodo de texto al elemento
elemento.appendChild(contenido)

//4.- Agregar atributos al elemento
elemento.setAttribute("align", "center")

//5.- Agregar elemento al documento
document.getElementById("subtitulo").appendChild(elemento)