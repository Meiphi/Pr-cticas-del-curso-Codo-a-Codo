/*EJERCICIO 2: Encontrar el índice de un elemento del Array.
1. Crea un array que se llame toDoList con al menos 5 tareas para
hacer.
2. A través del método indexOf() encontrar el índice de una de las 5
tareas especificadas en el array.
3. Borrar el item del array toDoList, que ha sido devuelto por el
método indexOf().
*/

let toDoList = [
"Tomar cafe", 
"Ejercicios de JavaScript", 
"Instalar base de datos",
"Avanzar con base de datos", 
"Arreglar el GitHub"
]

console.log("indice de 'Avanzar con base de datos':  " + toDoList.indexOf("Avanzar con base de datos"))

toDoList.splice(toDoList.indexOf("Avanzar con base de datos"))

console.log("lista actualizada: " + toDoList)


