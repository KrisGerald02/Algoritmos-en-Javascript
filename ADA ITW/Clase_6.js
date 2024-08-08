//Ejercicio 1
// Situación 1: Calcular el total de la compra en una tienda
const precioProducto1 = 10.99;
const precioProducto2 = 5.49;
const precioProducto3 = 20.00;
const impuesto = 0.15; 
const cantidadProducto1 = parseInt(prompt("Ingresa la cantidad del Producto 1:"));
const cantidadProducto2 = parseInt(prompt("Ingresa la cantidad del Producto 2:"));
const cantidadProducto3 = parseInt(prompt("Ingresa la cantidad del Producto 3:"));
const totalAntesImpuestos = (precioProducto1 * cantidadProducto1) + (precioProducto2 * cantidadProducto2) + (precioProducto3 * cantidadProducto3);
const totalConImpuestos = totalAntesImpuestos * (1 + impuesto);

console.log("El total de la compra con impuestos es: $" + totalConImpuestos.toFixed(2));

// Situación 2: Calcular el tiempo de viaje en coche

// Distancia del viaje (valor que puede estar en el archivo)
const distancia = 250; // en kilómetros

// Velocidad promedio del coche (valor ingresado por el usuario)
const velocidadPromedio = parseFloat(prompt("Ingresa la velocidad promedio del coche (km/h):"));

// Número de paradas y duración de cada una (valores ingresados por el usuario)
const numeroParadas = parseInt(prompt("Ingresa el número de paradas que harás:"));
let duracionParadas = 0;

for (let i = 1; i <= numeroParadas; i++) {
    duracionParadas += parseFloat(prompt(`Ingresa la duración de la parada ${i} en minutos:`));
}

// Convertir la duración de las paradas a horas
duracionParadas = duracionParadas / 60;

// Calcular el tiempo de viaje sin paradas
const tiempoSinParadas = distancia / velocidadPromedio;

// Calcular el tiempo total de viaje incluyendo paradas
const tiempoTotal = tiempoSinParadas + duracionParadas;

console.log("El tiempo total de viaje es: " + tiempoTotal.toFixed(2) + " horas");

//Ejercicio 2
// Escribe un programa que pida al usuario tres números y
// determine cuál es el mayor de los tres. Muestra el número mayor en la consola.

let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let numero3 = parseFloat(prompt("Ingresa el tercer número:"));

let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}
console.log("El número mayor es: " + mayor);


