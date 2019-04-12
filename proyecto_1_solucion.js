// Realiza los pasos para completar el proyecto.
// Si quires que revise tus resultados, puedes publicarlos en el post correspondiente de Patreon, Twitter: @CarlosYouDevs o en Fb/ig: youdevs

// 1.- realiza las preguntas al usuario y almacena cada respuesta en una binding.
let nombre = prompt("Hola y bienvenido. Por favor ingresa tu primer nombre:");
let apellido = prompt("Por favor ingresa tu apellido:");
let edad = prompt("Cuántos años tienes?");
let altura = prompt("Ingresa tu estatura en cms?");
let nombreMascota = prompt("Cuál es el nombre de tu mascota?");
alert("Muchas gracias por la informacion.");


// ¡Las 4 condiciones deben ser verdaderas para la alerta del espía!
// HINT: debajo tienes un ejemplo de cómo deberías empezar, puedes dejarlo así y completar el resto de variables.
let condNombre = false;
let condEdad = false;
let condAltura = false;
let condMascota = false;

// 3.- Realiza los bloques if para verificar que cada una de las condiciones se cumpla
// CONDICIÓN 1: El espía tiene la misma primera letra para el primer nombre y el apellido.
// HINT: los string también funcionan como los arreglos por lo que puedes ingresar a cada caracter por medio de su índece: nombre[0]
if (nombre[0] === apellido[0]){
  condNombre = true;
} else {
  condNombre = false;
}

// CONDICIÓN 2: El espía es entre la edad de 20 y 30 (exclusivo)
if (edad > 20 && edad <30){
  condEdad = true;
}else{
  condEdad = false;
}

// CONDICIÓN 3: El espía mide al menos 170 cm de alto
if (altura >= 170){
  condAltura = true;
}else{
  condAltura = false;
}

// CONDICIÓN 4: Nombre de mascota
// HINT: dentro de los corchetes realiza una operación que:
// obtena la longitud(length) del string y le reste 1 y así obtendrás el último caracter del string. 
if (nombreMascota[nombreMascota.length-1] === "a"){
  condMascota = true;
}else{
  condMascota = false;
}

// 3.- Comprueba las cuatro condiciones y si todas son true, muestra el mensaje oculto en la consola
// HINT: usa el operador 'and'(&&) las veces que sea necesario para corroborar que todas las condiciones son: true
if (condNombre === true && condEdad === true && condAltura === true && condMascota === true){
  // Mi mensaje secreto
  console.log("¡Bienvenido camarada! Has superado la prueba de espionaje")
}else{
  console.log("Lo siento, no hay nada que ver aquí.")
}
