//Ejercicio 1
// Declarar las variables y asignarles valores
let edad = 30;
let peso = 75;

//Ejercicio 2
//Pedir al usuario que ingrese su nombre y peso
const nombre = prompt("Por favor, ingrese su nombre:");
const peso = parseFloat(prompt("Por favor, ingrese su peso:"));
console.log("Nombre:", nombre);
console.log("Peso:", peso);

//Ejercicio 3
// crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA
// los cuales les asignaras los valores numericos 18 y 19 respectivamente
// pide al usuario que ingrese su edad
// usa "parseInt" para convertir la entrada del usuario a un numero entero
// valida si la edad ingresada esta dentro del rango permitido y muestra un mensaje adecuado
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 19;
const edad = parseInt(prompt("Por favor, ingrese su edad:"));
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
  console.log("¡La edad ingresada es valida!");
} else {
  console.log("Lo siento, la edad ingresada no esta dentro del rango permitido.");
}

//Ejercicio 4
// verifica si la variable "verdadero" es true o false y muestra un mensaje diferente segun el resultado
let verdadero = true; 
if (verdadero) {
  console.log("La variable 'verdadero' es true");
} else {
  console.log("La variable 'verdadero' es false");
}
verdadero = false;
if (verdadero) {
  console.log("La variable 'verdadero' es true");
} else {
  console.log("La variable 'verdadero' es false");
}
let nada = null;
if (nada !== null) {
  console.log("La variable 'nada' no es null");
} else {
  console.log("La variable 'nada' es null");
}

//Ejercicio 5
// declara y asigna un valor numerico a dos variables: primerNumero y segundoNumero
const primerNumero = 10;
const segundoNumero = 5;
// declara las siguientes variables: resultadoSuma, resultadoResta, resultadoMultiplicacion y resultadoDivision
let resultadoSuma;
let resultadoResta;
let resultadoMultiplicacion;
let resultadoDivision;
// asigna a cada una de estas variables el resultado de la suma, resta, multiplicación y división de primerNumero y segundoNumero
resultadoSuma = primerNumero + segundoNumero;
resultadoResta = primerNumero - segundoNumero;
resultadoMultiplicacion = primerNumero * segundoNumero;
resultadoDivision = primerNumero / segundoNumero;
// muestra los resultados en la consola
console.log(`La suma de ${primerNumero} y ${segundoNumero} es: ${resultadoSuma}`);
console.log(`La resta de ${primerNumero} y ${segundoNumero} es: ${resultadoResta}`);
console.log(`La multiplicación de ${primerNumero} y ${segundoNumero} es: ${resultadoMultiplicacion}`);
console.log(`La división de ${primerNumero} y ${segundoNumero} es: ${resultadoDivision}`);

//Ejercicio 6
// Declara dos variables con valores numericos correspondientes a tu elección
let primerNumero = 15;
let segundoNumero = 20;
if (primerNumero > 10 && segundoNumero > 10) {
  console.log("Ambos números son mayores que 10");
} else {
  console.log("Alguno de los números no es mayor que 10");
}
console.log(`El primer número es: ${primerNumero}`);
console.log(`El segundo número es: ${segundoNumero}`);

//Ejercicio 7
// Intercambio de Valores: Declara dos variables con
// valores iniciales y luego intercambia sus valores. Muestra los valores
// antes y después del intercambio en la consola.
// Para intercambiar valores puedes usar varios métodos (usando una
// variable temporal, aritmética o asignación simultánea), eres libre de
// elegir el que desees, eso sí, investiga sobre el que usarás.
let variable1 = 10;
let variable2 = 20;
console.log(`Valores iniciales: variable1 = ${variable1}, variable2 = ${variable2}`);
console.log(`Valores después del intercambio: variable1 = ${variable1}, variable2 = ${variable2}`);

//Ejercicio 8
// Conversión de Temperaturas: Escribe un programa que
// convierta una temperatura dada en grados Celsius a grados Fahrenheit.
// La fórmula de conversión es:
// Pide al usuario que ingrese la temperatura en Celsius y muestra el
// resultado en Fahrenheit.
// Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
// Pista 2: La fórmula puede representarse así:
// let fahrenheit = celsius * 9 / 5 + 32;
let celsiusTemp = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
let fahrenheitTemp = celsiusTemp * 9 / 5 + 32;
console.log(`La temperatura de ${celsiusTemp} grados Celsius es equivalente a ${fahrenheitTemp} grados Fahrenheit.`);

//Ejercicio 9
/*Calculo del IMC: Escribe un programa que calcule el
Índice de Masa Corporal (IMC). El IMC se calcula con la fórmula:
Pide al usuario que ingrese su peso y su altura, y muestra el IMC
calculado.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse así:
let imc = peso / (altura * altura);*/
let userWeight = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
let userHeight = parseFloat(prompt("Ingresa tu altura en metros:"));
let imcValue = userWeight / (userHeight * userHeight);
console.log(`Tu Índice de Masa Corporal (IMC) es: ${imcValue}`);

//Ejercicio 10
/* Cálculo de Descuento: Escribe un programa que
calcule el precio final de un producto después de aplicar un descuento.
Pide al usuario que ingrese el precio original y el porcentaje de
descuento, y muestra el precio final.
Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere
Pista 2: La fórmula puede representarse así:
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);*/
let originalPrice = parseFloat(prompt("Ingresa el precio original del producto:"));
let discountPercentage = parseFloat(prompt("Ingresa el porcentaje de descuento:"));
let discountAmount = originalPrice * (discountPercentage / 100);
let finalPrice = originalPrice - discountAmount;
console.log(`El precio final del producto, después de aplicar el ${discountPercentage}% de descuento, es: $${finalPrice}`);
