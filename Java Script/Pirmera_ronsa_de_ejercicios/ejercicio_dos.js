/*EJERCICIO 2: Trabajando Javascript por primera vez en mi página web.
Bien, ahora agreguemos Javascript a nuestro proyecto web.
1. En nuestro archivo HTML vamos a vincular un fichero/archivo que se llame
script.js(Este archivo debemos crearlo previamente). Recuerda que para
vincular el fichero debemos hacerlo con la etiqueta <script> la cual debemos
agregarla antes de que cierre la etiqueta <body>.
2. Dentro del archivo script.js, vamos a declarar las variables nombre y apellido
que habíamos declarado en la consola. Pero, esta vez deberemos asignarle
el método propmt() para que sea el usuario quien introduzca los datos,
nombre y apellido.
3. Mostrar una alerta de bienvenida a nuestra página con el nombre y el apellido
del usuario “Bienvenido a nuestra página (nombre+apellido)”*/


let nombre = prompt("Nombre: ")
let apellido = prompt("Apellido: ")
alert("Bienvenido a nuestra página " + nombre + " " + apellido)