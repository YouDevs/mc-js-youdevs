// Mini-Proyecto 2 - Lista de alumnos

// 1.- Crea de un arreglo vacío llamado: lista
let lista = [];

// 2.- Crear las funciones para las tareas a realizar: agregarNuevo(), mostrarLista()

// AÑADIR UN NUEVO ESTUDIANTE
// Crear una función llamada agregarNuevo que solicita un nombre y
// utiliza push para agregar el nombre a la lista
function agregarNuevo(){
  var nombre = prompt("Que nombre te gustaría añadir a la lista? ");
  lista.push(nombre);
}

// DISPLAY LISTA
// Crear una función llamada mostrarLista que muestra la lista en la consola
function mostrarLista(){
  console.log(lista);
}

// (OPCIONAL) REMOVER ESTUDIANTE
// Crear una función llamada remove que lleva un nombre
// HINT: Encuentra el nombre del estudiante y su ubicación el arreglo, luego elimina ese nombre de la lista.
// RECURSO: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
function remover(){
  var remover_nombre = prompt("Qué nombre te gustaría remover de la lista?");
  console.log(remover_nombre);
  var index = lista.indexOf(remover_nombre);
  console.log(index);        // [1] -> 3
  var eliminado = lista.splice(index,3);
  console.log(eliminado);
}

// 3.- Comienza preguntando si quieren usar la aplicación web (s/n)
// y almacena la respuesta en una variable: iniciar
var iniciar = prompt("¿Desea iniciar la aplicación web de la lista? s/n");
// 4.- Crea una variable como un string vacío llamada: opcion
// permitirá almacenar la opcion escrita por el usuario más adelante
var opcion = "";

// 5.- Escribe una estructura if para evaluar si el usuario quiere o no usar la aplicación web:
if (iniciar === "s"){
	// 4.- Dentro del if que creaste en el paso anterior crea un bucle while que requerirá una acción (agregar, mostrar o salir)
	// Utiliza if y else if para ejecutar la función correcta para cada opcion.
	// El bucle sigue ejecutándose MIENTRAS la opcion sea diferente de: salir
  while (opcion !== "salir") {
    opcion = prompt("Seleccione una acción: agregar, quitar, mostrar o salir.")
    if (opcion === "agregar") {
        addNew();
    } else if (opcion === "mostrar") {
        display();
    } else if (opcion == "quitar") {
        remove();
    }
  }
}
