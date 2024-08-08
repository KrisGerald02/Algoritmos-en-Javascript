let deportista = {
    nombre : "Victoria",
    energia : 200,
    experiencia : 30,
    entrenarHoras : function(cantHoras){
        let energia = this.energia - cantHoras*5
        let experiencia = this.experiencia - cantHoras*2
        return "luego del entrenamiento, perdió "+ (energia) + " de energía y ganó " +
         (experiencia) + " de experiencia."  
    }

    
}
 
console.log(deportista.entrenarHoras(4));

//Ejercicio 2
//Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
// título: una cadena con el título del libro.
// autor: una cadena con el nombre del autor del libro.
// anioPublicacion: un número con el año de publicación del libro.
//Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado
let libro1 = {
    titulo : "Carrie",
    autor: "Stephen King",
    anioPublicacion : 2007,
}
let libro2 = {
    titulo : "El proyecto Joshua",
    autor: "Sebastian Fitzek",
    anioPublicacion : 2017,
}
let libros = [];
function mostrarLibros(libros){
    libros.push(libro1,libro2);
    return libros
}

//Creá la función backEnd() que recibirá 2 números como parámetros. La función deberá imprimir por pantalla los números del 1 al 100, pero teniendo
//en cuenta los siguientes criterios:Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string “Back” en lugar del número.
//Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string “End” en su lugar del número.
//Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string “Back End” en lugar del número.
function backEnd(N1,N2){
    for (let i = 1; i <=100; i++){
        if (i % N1 === 0 && i % N2 ===0){
            console.log("Back End");
        } else if (i % N1 === 0){
            console.log("Back");
        } else if (i % N2 === 0){
            console.log("End");
        } else {
            console.log(i)
        }
    }

}
backEnd(2,7);
console.log(mostrarLibros(libros));

// En este ejercicio, trabajaremos con una lista de modelos de autos.
// Implementa una función ultimaAparicionModeloAuto(modelo) que encuentre
// y muestre la última posición en la lista donde aparece el modelo específico
// de auto dado por modelo.
// Datos Iniciales:
// ✓ Utiliza un array llamado modelosAutos que contenga varios modelos
// de autos, algunos repetidos para demostrar la funcionalidad de
// lastIndexOf.
// Funcionalidad:
// ✓ Implementa ultimaAparicionModeloAuto(modelo), que toma modelo
// como parámetro (un string) y utiliza el método lastIndexOf para
// encontrar la última posición en modelosAutos donde modelo aparece.
// ✓ Si modelo se encuentra en el array, imprime por consola la posición
// encontrada (índice + 1 para mostrar el número de posición).
// ✓ Si modelo no está en el array, imprime un mensaje indicando que el
// modelo no está presente.

let modelosAutos = ["Vento" , "Corolla" , "Ka" , "Fitito", "Corolla", "Falcon", "Fox"];

const ultimaAparicionModeloAuto = (modelo) => {
    let posición = modelosAutos.lastIndexOf(modelo);
    if (modelosAutos.includes(modelo)){
        console.log("El modelo " + modelo + " aparece por ultima vez en la posición " + (posición + 1) + "." );
    } else {
        console.log("El modelo que ingresó no se encuentra en nuestra lista :(")
    }
}

ultimaAparicionModeloAuto("Corolla");
ultimaAparicionModeloAuto("Bora");
ultimaAparicionModeloAuto("Ka");

// Escribe un programa en JavaScript para contar cuántas veces el usuario
// menciona sus flores favoritas. Utiliza un array para almacenar las flores
// favoritas y realiza las siguientes acciones:
// 1. Inicializa un array vacío para almacenar las flores favoritas.
// 2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
// agrega cada una al array (aquí usa un método de los vistos en Arrays)
// 3. Pregunta al usuario por una flor específica y verifica si está entre sus
// favoritas (aquí usa un método de los vistos en Arrays)
// 4. Muestra por consola cuántas de las flores favoritas se mencionaron.
// Pista: Se utiliza el método includes.

 let floresfavoritas = ["amapolas", "peonias", "violetas", "jazmines", "rosas"];
 let floresFavUsuario = [];

for (let i = 0; i < 3; i++) {
    let flor = prompt("Ingresa tu flor favorita ${i + 1}:");
    floresFavoritas.push(flor);
}


let florEspecifica = prompt("Ingresa una flor para verificar si esde nuestras favoritas también:");
if (floresFavoritas.includes(florEspecifica)) {
    console.log( florEspecifica + " es de nuestras favoritas!!");
} else {
    console.log(florEspecifica + " no está en nuestra lista :(");
}

console.log("Has mencionado " + floresFavoritas.length + " flores favoritas en total.");
