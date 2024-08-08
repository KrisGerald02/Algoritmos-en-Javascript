//Ejercicio 1
//El objetivo de este ejercicio es imprimir en consola un texto que irá variando según el día que contenga la variable dia. Para esto, ya presentamos un código hecho con if/else que tendremos que modificar y convertirlo a un switch, manteniendo el mismo resultado.
const prompt = require("prompt-sync")({ sigint: true });
let dia = prompt("Ingrese un día de la semana: ");
switch(dia){
    case "lunes": 
        console.log("Hoy es Lunes");
        break;
    case "martes":
        console.log("Hoy es Martes");
        break;
    case "miercoles":
        console.log("Hoy es Miércoles");
        break;
    case "jueves":
        console.log("Hoy es Jueves");
        break;
    case "viernes":
        console.log("Hoy es Viernes");
        break;
    case "sabado":
        console.log("Hoy es Sábado");
        break;
    case "domingo":
        console.log("Hoy es Domingo");
        break;
    default:
        console.log("El valor ingresado no es válido.");
};

//Ejercicio 2
//El objetivo de este ejercicio es imprimir en pantalla un texto que estará condicionado de la siguiente manera. Utilizando switch deberemos evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso,debe imprimir el texto "tenés clases". Para cualquier otro caso debeimprimir "no tenés clases".
switch(dia){
    case ("lunes"):
        console.log("Tenés clases.");
        break;
    case ("miercoles"):
        console.log("Tenés clases.");
        break;
    case ("viernes"):
        console.log("Tenés clases.");
        break;
    default:
        console.log("No tenés clases.");
        break;
};

// Ejercicio 3
/*
Utilizando la estructura switch, crea un programa que le pida al usuario valorar la película que acaba de ver según la siguiente escala:
Muy mala.Mala.Mediocre.Buena.Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamosmucho."
En caso de que el usuario ingrese un valor distinto, mostrarle el mensaje: "Ingresaste un valor inválido".
Finalmente, agradecer al usuario por su visita.
*/
let calificacion = prompt("Como calificarias la película: Muy mala - Mala - Mediocre - Buena - Muy Buena : ").toLowerCase();
switch(calificacion){
    case "muy mala":
        console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho.");
        break;
    case "mala":
        console.log("Calificaste la película como Mala. Lo lamentamos mucho.");
        break;
    case "mediocre":
        console.log("Calificaste la película como Mediocre. Lamentamos que no haya cumplido tus expectativas.");
        break;
    case "buena":
        console.log("Calificaste la película como Buena. Nos alegra que te haya gustado!");
        break;
    case "muy buena":
        console.log("Calificaste la película como Muy Buena. Nos alegra mucho que te haya gustado!!");
        break;
    default:
        console.log("Ingresaste un valor inválido.");
        break;
};
console.log("Gracias por dejar tu opinion. Es muy valiosa para nosotros.");

//Ejercicio 4
/*
Nuestra tarea es contar la cantidad de números impares que hay desde el número 0 hasta un número X (inclusive). Para esto, debes seguir los
siguientes pasos:
1. Solicitar al usuario que ingrese un número X.
2. Inicializar una variable para contar los números impares.
3. Utilizar un ciclo for para recorrer los números desde 0 hasta X.
4. Dentro del ciclo, verificar si el número es impar.
5. Si el número es impar, incrementar el contador de númerosimpares.
6. Al finalizar el ciclo, imprimir en consola la cantidad de númerosimpares encontrados.
7. Utiliza el operador módulo para verificar si un número esimpar.
8. Ejemplo de Ejecución: Si el usuario ingresa 10, el programa debeimprimir: “La cantidad de números impares desde 0 hasta 10 es: 5”
*/

let numeroIngresado = parseInt(prompt("Ingrese un número entero: "));
let cantidadImpares = 0;
for (let i=0; i <= numeroIngresado; i++){
    if ((i % 2) !== 0){
        cantidadImpares++;
    };
};
console.log("La cantidad de numeros impares es de: " + cantidadImpares);

/*
Ejercicio 5
Crear un programa que permita registrar las notas de varios estudiantes usando arrays y mostrarlas por pantalla:
1. Crear un array para almacenar las notas.
2. Define un array vacío llamado notas donde almacenaremos lasnotas de los estudiantes.
3. Pide al usuario que ingrese las notas de varios estudiantes una poruna utilizando el método prompt.
4. Usa un bucle for para solicitar las notas y asignarlas directamente aposiciones específicas del array notas.
5. Imprime en consola las notas ingresadas usando el array notas.
*/
let notas = [];
let cantidadNotas = parseInt(prompt("Cuántas notas vas a agregar? "));
for (let i=0; i<cantidadNotas; i++){
    let nota = parseInt(prompt("Ingresa una nota: "));
    notas.push(nota);
};
console.log(notas);
