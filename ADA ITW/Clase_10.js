/*
Ejercicio 1: Switch
Declará las variables vehiculo y litrosConsumidos. A continuación,
realizá los cálculos para obtener el total a pagar, teniendo en cuenta las
siguientes consideraciones:
✓ Si el vehículo es “coche”, el precio por litro es de $86.
✓ Si el vehículo es “moto”, el precio por litro es de $70.
✓ Si el vehículo es “autobús”, el precio por litro es de $55.
✓ Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al
total a pagar.
✓ Si los litros consumidos son mayores a 25, se ha de añadir $25 al
total a pagar.
Finalmente, imprimí en consola el total a pagar.
*/

let vehiculo = "moto";
let litrosConsumidos = 13;

let totalPago = 0;

if (litrosConsumidos > 0){
    switch(vehiculo){
        case "coche":
            totalPago = litrosConsumidos*86;
            break;
        case "moto":
            totalPago = litrosConsumidos*70;
            break;
        case "autobus":
            totalPago = litrosConsumidos*55;
            break;
        default:
            console.log("El tipo de vehículo ingresado no es válido.")
    };

    if ((litrosConsumidos > 0) && (litrosConsumidos <= 25)){
        totalPago = totalPago + 50;
    } else if (litrosConsumidos > 25){
        totalPago = totalPago + 25;
    };
};
console.log("El total a pagar es: " + totalPago);

/*
Ejercicio 2: Switch
Usando la estructura switch, crea un programa en el que si un usuario
ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la
misma palabra traducida al idioma inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un
mensaje que le informe que la palabra ingresada es incorrecta.
*/

const prompt = require("prompt-sync")({ sigint: true }); 

let palabra = prompt("Ingrese alguna de las siguientes palabras: casa - perro - pelota - arbol - genio : ").toLowerCase();
console.log(palabra);

switch(palabra){
    case "casa":
        console.log("House");
        break;
    case "perro":
        console.log("Dog");
        break;
    case "pelota":
        console.log("Ball");
        break;
    case "arbol":
        console.log("Tree");
        break;
    case "genio":
        console.log("Genius");
        break;
    default:
        console.log("La palabra ingresada es incorrecta.")
        break;
};


/*
Ejercicio 3: While
Crea un programa que solicite al usuario ingresar números
continuamente hasta que el usuario ingrese un número negativo.
Luego, imprime la suma de todos los números ingresados.
*/
 
let numeroIngresado = parseInt(prompt("Ingrese un número: "));
let suma = 0;

while (numeroIngresado > 0){
    suma = suma + numeroIngresado;
    numeroIngresado = parseInt(prompt("Ingrese un número: "));
};

console.log("La suma de los números da: " + suma);


/*
Ejercicio 4: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si
la contraseña es incorrecta, debe volver a pedirla hasta que el usuario
ingrese la correcta. La contraseña correcta es "1234".
*/

let password;

do {
    password = prompt("Ingrese una contraseña: ")
} while (password !== "1234");


/*
Ejercicio 5: If Ternario
Escribe un programa que lea una nota (entero entre 0 y 100) e imprima
el equivalente en letras siguiendo esta escala:
✓ A si la nota está entre 90 y 100
✓ B si la nota está entre 80 y 89
✓ C si la nota está entre 70 y 79
✓ D si la nota está entre 60 y 69
✓ F si la nota está entre 0 y 59
Utiliza operadores ternarios para determinar la calificación en letras.
*/

let nota = parseInt(prompt("Ingresa tu nota (valor de 0 a 100): "));

console.log((nota >= 90 && nota <= 100) ? 'A' :
            (nota >= 80 && nota <= 89) ? 'B' :
            (nota >= 70 && nota <= 79) ? 'C' :
            (nota >= 60 && nota <= 69) ? 'D' :
            (nota >= 0 && nota <= 59) ? 'F' :
            ("Nota inválida"));


/*
Ejercicio 6: Bucle For – Array
Escribe un programa en JavaScript que clasifique diferentes animales
en tres categorías: "mamífero", "ave" o "reptil". Se te proporciona un
array llamado animales que contiene nombres de diferentes animales.
Utiliza un bucle for y operadores ternarios para crear un nuevo array
llamado clasificacion que contenga la clasificación de cada animal
según su tipo.
*/

let animales = ["perro", "gato", "loro", "serpiente", "elefante", "aguila"];

let clasificacion = {mamiferos: [], aves: [], reptiles: []};

for (let i=0; i<animales.length; i++){
    (animales[i] === "perro" || animales[i] === "gato" || animales[i] === "elefante") ? clasificacion.mamiferos.push(animales[i]) :
    (animales[i] === "loro" || animales[i] === "aguila") ? clasificacion.aves.push(animales[i]) :
    (animales[i] === "serpiente") ? clasificacion.reptiles.push(animales[i]) :
    "El ánimal no está en el array."
};

console.log(clasificacion);


/*
Ejercicio 7: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los
almacene en un array. Luego, solicita al usuario ingresar un nombre y
verifica si ese nombre se encuentra en el array. (Pueden desglosar en
pasos el código si eso les facilita su desarrollo)
*/

let nombres = [];

for (let i=1; i<=5; i++){
    let nombre = prompt("Ingresar un nombre: ").toUpperCase();
    nombres.push(nombre);
};

let nuevoNombre = prompt("Ingrese un nombre para buscar en el array: ").toUpperCase();
let nombreEsta = false;

for (let i=0; i<nombres.length; i++){
    if (nombres[i] === nuevoNombre){
        nombreEsta = true;
        break;
    }
};

if (nombreEsta) {
    console.log("El nombre que buscas se encuentra en el array.")
} else {
    console.log("El nombre que buscas no se encuentra en el array.")
};


/*
Ejercicio 8: Uso de Bucles y Arrays
Escribe un programa que solicite al usuario ingresar 5 paises y los
almacene en un array. Luego, imprime en consola todos los paises de
manera alfabetica.
Importante: Este ejercicio puede ser resulto con el método sort(). Si
desean investigar y utilizarlo es aceptable.
*/
let paises = [];

for (let i=1; i<=5; i++){
    let pais = prompt("Ingresar un pais: ").toUpperCase();
    paises.push(pais);
};

paises.sort();

console.log(paises);

/*
Ejercicio 9:
En este ejercicio tienes un array ‘colores’ que contiene nombres de
diferentes colores. Tu tarea es realizar las siguientes operaciones:
✓ Imprimir todos los colores del array.
✓ Modificar el primer color del array a "blanco".
✓ Agregar dos nuevos colores al final del array: "negro" y "gris".
*/

let colores = ["rojo", "verde", "azul", "amarillo"];

for (let i=0; i<colores.length; i++){
    console.log(paises[i]);
};

colores[0] = "blanco";
colores.push("negro");
colores.push("gris");

console.log(colores);


/*
Ejercicio 10: While y Do While
Implementa un programa que permita al usuario registrar la edad de
mascotas en una veterinaria hasta que decida dejar de agregar.
Cuando el usuario no agregue mas edades, imprimir en consola las
mascotas agregadas anteriormente y sus respectivas edades.
*/

let mascotas =[];
let edades = [];

let agregar = true;

do {
    let mascota = prompt("Ingrese el nombre de la mascota: ");
    let edad = parseInt(prompt("Ingrese la edad de la mascota: "));
    mascotas.push(mascota);
    edades.push(edad);
    let sigue = prompt("Desea seguir agregando mascotas? si / no : ").toLowerCase();
    if (sigue !== "si"){
        agregar = false;
    }
} while(agregar === true);

console.log(mascotas);
console.log(edades);
