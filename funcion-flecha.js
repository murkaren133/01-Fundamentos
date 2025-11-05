// Función habitual
function sumarHabitual(a, b){
    return a + b;
}

// Declarar la función a una constante
const sumarConstante = function(a, b){
    return a + b;
}

// Función flecha 
const sumarFlecha = (a, b) => {
    return a + b;
}

// Cuando dentro del cuerpo solo existe una instrucción
const sumar = (a, b) => a + b;

// Ejercicio de saludar
const saludar1 = (nombre) => {
    return `Hola ${nombre}`;
    // que salude al nombre que reciba
}

// Otra versión simplificada
const saludar = (nombre) => `Hola ${nombre}`;

// Pruebas
console.log(sumarHabitual(2, 3)); // 5
console.log(sumarConstante(4, 6)); // 10
console.log(sumarFlecha(1, 9));    // 10
console.log(sumar(7, 8));          // 15

console.log(saludar1("Cristhian")); // Hola Cristhian
console.log(saludar("risthian"));    // Hola Valeria
