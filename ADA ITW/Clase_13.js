//Ejercicio 1 Calculadora de Edades
const prompt = require("prompt-sync")();
const anioActual = 2024;
let edad;
let edadActual = (anio) => edad = anioActual - anio;
const anio = parseInt(prompt("Ingrese su año de nacimiento: "));
console.log("Usted tiene " + edadActual(anio) + " años.");

/* Ejercicio 2: Verificar estado de vacunación
Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
función flecha para verificar y mostrar su estado de vacunación. */
const prompt = require("prompt-sync")();
const nombreMascota = prompt("Introduce el nombre de tu mascota: ");
const estaVacunada = prompt("¿Está vacunada tu mascota? (sí/no): ");
const verificarVacunacion = (nombreMascota, estaVacunada) => {
  return estaVacunada.toLowerCase() === "sí"
    ? `${nombreMascota} está vacunada.`
    : `${nombreMascota} no está vacunada.`;
};
console.log(verificarVacunacion());

//Ejercicio 3 Numero Aleatorio
const prompt = require("prompt-sync")();
let numeroAleatorio = Math.floor(Math.random() * 10) + 1 ;
const numeroUsuario = parseInt(prompt("Ingrese un numero del 1 al 10:  "));
if (numeroUsuario == numeroAleatorio){
    console.log("Felicitaciones, ¡ese era!");
} else {
    console.log("Lo siento, ¡intenta nuevamente!");
}

//Ejercicio 4 Nums Pares
const numerosPares = [];
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
console.log("Numeros pares del 0 al 100:");
for (let i = 0; i < numerosPares.length; i++) {
  console.log(numerosPares[i]);
}

//Ejercicio 5
const prompt = require("prompt-sync")();
let numero = parseInt(prompt("Ingrese un numero:  "));
if(numero < 10 && numero >0){
    let faltaP2 = 10 - numero;
    console.log("Le faltann " + faltaP2 + " cifras.");
} else if(numero <100 && numero >=10){
    let faltaP3 = 100 - numero;
    console.log("Le faltan " + faltaP3 + " cifras.");
}else(
    console.log("eror")
)

//Ejercicio 6
// Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado por teclado.
const prompt = require("prompt-sync")();
let N = parseInt(prompt("Ingrese un numero para usar como parametro:  "));
let suma = 0;
for (let i = 1; i <= N; i++){
    suma += i;
}
console.log(suma);
