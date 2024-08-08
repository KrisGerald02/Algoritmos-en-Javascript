/* Ejercicio 2: Calcular promedio de calificaciones Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio. */
const prompt = require("prompt-sync")();
let calificacion = [];
console.log(
  "Ingrese 5 notas del alumno porfavor"
);
for (i = 0; i < 5; i++) {
  calificacion[i] = parseInt(prompt("Ingrese la calificacion: "));
}
const promedio = (calificacion) => {
  let promedio = 0;
  for (i = 0; i < 5; i++) {
    promedio += calificacion[i];
  }
  return promedio / 5;
};
console.log(`El promedio es ${promedio(calificacion)}`);

/* Ejercicio 3: Clasificación de edades Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor. */
const prompt = require("prompt-sync")();
let edad = parseInt(prompt("Ingrese su edad: "));
const clasificacionEdad = (edad) => {
  if (edad <= 10) {
    return "Usted es un niño";
  } else if (edad <= 18) {
    return "Usted es un adolecente";
  } else if (edad <= 60) {
    return "Usted es un adulto";
  } else return "Usted es un adulto mayor";
};
console.log(clasificacionEdad(edad));

/* Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el total con descuento según la cantidad. */
const prompt = require("prompt-sync")();
let cantidadProductos = parseInt(
  prompt("Ingrese la cantidad de productos que compro: ")
);
let precioUnitario = [];
let total = 0;
for (i = 0; i < cantidadProductos; i++) {
  precioUnitario[i] = parseInt(prompt(`Ingrese el producto numero ${i + 1}: `));
  total += precioUnitario[i];
}
const descuento = (cantidadProductos) => {
  let promedio = (100 * cantidadProductos) / total;
  return total - promedio;
};
console.log(descuento(cantidadProductos));
