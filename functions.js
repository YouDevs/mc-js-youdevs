alert("HOLA NUEVO SCRIPT!");


// expresión:
const cuadrado = function(n) {
    // Efecto secundario
    // console.log("el cuadrado de " + n + " = " + n * n);
    return n * n;
}

// let valor_retornado = cuadrado(3);
// console.log("qué valor tiene la variable: " + valor_retornado);

// Declaración: palabra clave function
function cubo(x) {
    return x * x * x;
}
// console.log(cubo(3));

// Arrow function (funciones flecha), incorporado desde ECMAScript 5.
const cuadrado = (x) => { return x * x; }

