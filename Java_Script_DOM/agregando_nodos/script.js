let elemento = document.createElement("li")
let contenido = document.createTextNode("Nuevo Texto")

elemento.appendChild(contenido)

//document.body.appendChild(elemento)


// otra manera de sacar al padre:
//let padre = document.getElementById("lista")

let padre = document.getElementsByTagName("li")[0].parentNode

padre.appendChild(elemento)


