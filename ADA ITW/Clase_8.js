//Ejercicio 1
//Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese dos números y muestra cuál es mayor o si son iguales.
const prompt = require("prompt-sync")({ sigint: true });
let numero1 = parseInt(prompt("Ingrese un numero: "));
let numero2 = parseInt(prompt("Ingrese otro numero: "));
if (numero1<numero2){
    console.log("El número más grande es: " + numero2);
} else if (numero2<numero1){
    console.log("El numero más grande es: " + numero1);
} else {
    console.log("Los numeros son iguales");
};

//Ejercicio 2
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las constantes.
const RANGO_MINIMO = 18;
const RANGO_MAXIMO = 65;
let numeroIngresado = parseInt(prompt("Ingrese un valor numérico: "));
if ((numeroIngresado > RANGO_MINIMO) && (numeroIngresado < RANGO_MAXIMO)){
    console.log("El valor ingresado se encuentra dentro del rango.");
} else {
    console.log("El valor ingresado NO se encuentra dentro del rango.");
};

//Ejercicio 3
//Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que ingrese dos valores booleanos (true o false) y muestra el resultado de diversas combinaciones lógicas.
condicion1 = true;
condicion2 = false;
console.log("Conjuncion: " + (condicion1 && condicion2));
console.log("Disyuncion: " + (condicion1 || condicion2));
console.log("Conjuncion: " + (condicion2 && condicion1));
console.log("Disyuncion: " + (condicion2 || condicion1));

//Ejercicio 4
//Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si el nombre ingresado es igual a tu nombre.
let nombre = prompt("Ingrese su nombre: ");
let iguales = (nombre === "Ariadna");
console.log("¿Los nombres son iguales?: " + iguales);

//Ejercicio 5
//Escribe un programa que pida al usuario que ingrese tres números y determine cual es el mayor de los tres.
let num1 = parseInt(prompt("Ingrese un número: "));
let num2 = parseInt(prompt("Ingrese otro número: "));
let num3 = parseInt(prompt("Ingrese otro número: "));
let mayor;
if (num1 < num2){
    if (num3 < num2){
        mayor = num2;
    } else {
        mayor = num3;
    };
} else {
    if (num1 < num3){
        mayor = num3;
    } else {
        mayor = num1;
    };
};
console.log(mayor);

//Ejercicio 6
//Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. Muestra un mensaje personalizado según el caso.
const EDAD_MINIMA = 18;
let edad = parseInt(prompt("Ingrese su edad: "));
if (edad > EDAD_MINIMA){
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
};

//Ejercicio 7
//Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462)
const LIBRA_KG = 2.20462
let pesoKg = parseFloat(prompt("Ingrese su peso en kg: "));
let pesoLibras = pesoKg * LIBRA_KG;
console.log("Su peso en libras es de: " + pesoLibras);

//Ejercicio 8
//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)
let lado1 = parseFloat(prompt("Ingrese la medida de un lado del triángulo: "));
let lado2 = parseFloat(prompt("Ingrese la medida de otro lado del triángulo: "));
let lado3 = parseFloat(prompt("Ingrese la medida de otro lado del triángulo: "));
if ((lado1 === lado2) && (lado2 === lado3)){
    console.log("Se trata de un triángulo equilátero!");
} else if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)){
    console.log("Se trata de un triángulo isóceles!");
} else {
    console.log("Se trata de un triángulo escaleno!");
};

//Ejercicio 9
//Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI.
const PI = 3.14159;
let radio = parseFloat(prompt("Ingrese el radio del circulo: "));
let areaCirculo = PI*radio*radio;
let perimetroCirculo = 2*PI*radio;
console.log("El area del círculo es de " + areaCirculo + " y su perimetro es de " + perimetroCirculo);

//Ejercicio 10
//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. Si el número no está dentro de ese rango, muestra un mensaje de error.
let numero = parseInt(prompt("Ingrese un numero del 1 al 7: "));
switch(numero){
    case 1: 
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("El valor ingresado no es valido.");
};
