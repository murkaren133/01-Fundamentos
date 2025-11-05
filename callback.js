// Ejemplo 1: Usando una función tradicional con setTimeout
setTimeout(function() {
  console.log("Hola!");
}, 2000);

// Ejemplo 2: Misma función, pero con una función flecha
const saludar = () => console.log("Hola!");
setTimeout(saludar, 3000);
