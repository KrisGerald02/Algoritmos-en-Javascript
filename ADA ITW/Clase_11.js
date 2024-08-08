/*
Ejercicio 1
Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
*/
const prompt = require("prompt-sync")({ sigint: true });
let pulgadas = parseFloat(promt('Ingrese pulgadas: '));
function convertir(pulgadas) {
    return pulgadas * 2.54
}

/*
Ejercicio 2
Crear una función que recibe un string y lo convierte en una URL.  Ej: “pepito” es devuelto como “http://www.pepito.com”
*/
const promt = require("prompt sync")({ sight: true});
let texto = promt('Ingrese el texto: ');
function convertirURL(string) {
    return 'http://www.' + string + '.com'
}

/*
Ejercicio 3
Crear una función que recibe un string y devuelve la misma frase pero con admiración.
*/
const promt = require("prompt sync")({ sight: true});
let texto = promt('Ingrese el texto: ');
function convertirAdmiracion(string) {
    return string + '!!'
}

/*
Ejercicio 4
Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
*/
const promt = require("prompt sync")({ sight: true});
let edad = parseFloat(promt('Ingrese la edaad de su perro: '));
function edadPerro(edad) {
    return edad * 7
}

/*
Ejercicio 5
Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. PD: considerá que tu mes de trabajo tiene 40 horas.
*/
const promt = require("prompt sync")({ sight: true});
let sueldo = parseFloat(promt('Ingrese su sueldo: '));
function valorHoraTrabajo(sueldoMensual) {
    return sueldoMensual/40
}
const promt = require("prompt sync")({ sight: true});
let altura = parseFloat(promt('Ingrese su altura en metros: '));
let peso = parseFloat(promt('Ingrese su peso en kilogramos: '));
function calculadorIMC(altura, peso) {
    return peso/(altura*altura)
}
