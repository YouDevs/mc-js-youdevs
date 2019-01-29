// 1.- Define un arreglo vacío para lista de alumnos: lista
// pista: para definir un array vacío solo asigna los corchetes []
let lista = 

// ===  Crear las funciones para las tareas a realizar: agregarNuevo(), eliminar(), mostrar() ===

// 2.- Crear una función llamada agregarNuevo que solicita un nombre 
// y utiliza el método push para agregar un nuevo estudiante al array

// 3.- Crea una función llamada mostrar que imprima la lista de nombres en la consola.
function mostrar(){
  console.log(lista);
}

// === Una vez definidas todas las funciones ====

// 4.- Comienza preguntando si quieren usar la aplicación web, por medio de la función prompt
// el mensaje debería de ser algo como: ¿Desea iniciar la aplicación web de la lista? s/n
// y almacena el resultado en una variable: empezar
var empezar = prompt("¿Desea iniciar la aplicación web de la lista? s/n");
// 5.- Define una binding con un string vació '': comando
// la cual servirá para almacenar el comando que escriba el usuario.
var comando = "empty";

// 6.- verifica si la respuesta del usuario es s o n, si es s, comienza un bucle while:
// completa la sentencia if:
if (empezar === ){
  // 7.- El bucle seguirá pidiendo una acción (agregar, mostrar o quitar) 
  // hasta que el usuario escriba el comando: quitar
  // Es decir mientras el comando sea DIFERENTE DE quitar el bucle sigue pidiendo acciones.
  // completa la sentencia while:
  while (comando  "quitar") {
    comando = prompt("Seleccione una acción: agregar, quitar, mostrar o quitar.")
    // 8.- Dentro del bucle utiliza if y else if para ejecutar la función correcta para los comandos: agregar y mostrar
    if (comando === ) {
      agregarNuevo();
    } else if (comando === ) {
      mostrar();
    }
  }
}

alert("¡Gracias por utilizar la aplicación Web! Actualiza la página para empezar de nuevo.")