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
const distancia = 250; // en kilómetros
const velocidadPromedio = parseFloat(prompt("Ingresa la velocidad promedio del coche (km/h):"));
const numeroParadas = parseInt(prompt("Ingresa el número de paradas que harás:"));
let duracionParadas = 0;
for (let i = 1; i <= numeroParadas; i++) {
    duracionParadas += parseFloat(prompt(`Ingresa la duración de la parada ${i} en minutos:`));
}
duracionParadas = duracionParadas / 60;
const tiempoSinParadas = distancia / velocidadPromedio;
const tiempoTotal = tiempoSinParadas + duracionParadas;
console.log("El tiempo total de viaje es: " + tiempoTotal.toFixed(2) + " horas");

//Ejercicio 2
// Escribe un programa que pida al usuario tres números y determine cuál es el mayor de los tres. Muestra el número mayor en la consola.
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

//Ejercicio 3
//Pide al usuario dos números y una operación (suma, resta, multiplicación o división), y luego muestra el resultado en la consola
const num1 = parseFloat(prompt("Ingresa el primer numero:"));
const num2 = parseFloat(prompt("Ingresa el segundo numero:"));
const operation = prompt("Ingresa la operacion (+, -, *, /):");
let result;
switch (operation) {
  case "+":
    result = num1 + num2;
    console.log(`El resultado de la suma de ${num1} y ${num2} es ${result}`);
    break;
  case "-":
    result = num1 - num2;
    console.log(`El resultado de la resta de ${num1} y ${num2} es ${result}`);
    break;
  case "*":
    result = num1 * num2;
    console.log(`El resultado de la multiplicacion de ${num1} y ${num2} es ${result}`);
    break;
  case "/":
    if (num2 === 0) {
      console.log("Error: No se puede dividir entre 0");
    } else {
      result = num1 / num2;
      console.log(`El resultado de la division de ${num1} y ${num2} es ${result}`);
    }
    break;
  default:
    console.log("Error: Operacion invalida");
}

