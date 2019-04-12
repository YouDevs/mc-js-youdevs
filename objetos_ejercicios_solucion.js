// Part 6 - Ejercicios con objetos

////////////////////
// PROBLEMA 1 //////
//////////////////

// Dado un objeto:
var employee = {
    name: "Carlos Hernández",
    job: "Programmer",
    age: 31
}

// Agregue un método denominado nameLength que
// imprime la longitud del nombre de los empleados a la consola.
var employee = {
    name: "Carlos Hernández",
    job: "Programmer",
    age: 31,
    nameLength: function(){
        console.log(this.name.length);
    }
}

///////////////////
// PROBLEMA 2 /////
/////////////////

// Given the object:
var employee = {
    name: "Carlos Hernández",
    job: "Programmer",
    age: 31
}

// Escribir un programa que creará una alerta en el navegador
// de cada uno de los valores del objeto para los pares de valores clave. Por ejemplo, debería alertar:

// El nombre es Carlos Hernández, Trabajo es Programmer, la edad es 31.
var employee = {
    name: "Carlos Hernández",
    job: "Programmer",
    age: 31,
    report: function(){
        alert("Name is: "+this.name+", Job is: "+this.job+", Age is: "+this.age)
    }
}

///////////////////
// PROBLEMA 3 /////
/////////////////

// Dado el objeto:
var employee = {
    name: "Carlos Hernández",
    job: "Programmer",
    age: 31
}

// Añada un método llamado apellido
// que imprimA el apellido del empleado a la consola.

// Tendrás que averiguar cómo dividir una cadena en una arreglo.
// Consejo: http://www.w3schools.com/jsref/jsref_split.asp

// Solución
var employee = {
    name: "Carlos Hernández",
    job: "Programmer",
    age: 31,
    lastName: function(){
        console.log(this.name.split(" ")[1]);
    }
}
