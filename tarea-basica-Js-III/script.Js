//Bienvenidos a tareas basicas de Javascript III

//NÚMEROS

//1.Escribe una función que tome dos números como argumentos y devuelva su suma.

function sumar(a, b) {
  return a + b;
}

// Ejemplo de uso:
let resultado = sumar(5, 3);
console.log(resultado); // Muestra 8

//2.Escribe una función que tome dos números como argumentos y devuelva su resta.

function restar(a, b) {
    return a - b;
}

//3.Escribe una función que tome dos números como argumentos y devuelva su producto.

function multiplicar(num1, num2) {
    return num1 * num2;
}

//4.Escribe una función que tome dos números como argumentos y devuelva su división.

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir entre cero.";
    }
    return a / b;
}

//5.Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.

const potenciar = (base, exponente) => base ** exponente;

// Ejemplo de uso:
console.log(potenciar(2, 3)); // Resultado: 8
console.log(potenciar(5, 2)); // Resultado: 25

//6.Escribe una función que tome dos números como argumentos y devuelva el resto de la división del primer número entre el segundo.

function obtenerResto(dividendo, divisor) {
    return dividendo % divisor;
}

//7.Escribe una función que tome un número como argumento y devuelva su raíz cuadrada.

function calcularRaizCuadrada(numero) {
  return Math.sqrt(numero);
}

// Ejemplo de uso:
console.log(calcularRaizCuadrada(9));  // 3
console.log(calcularRaizCuadrada(16)); // 4

//8.Escribe una función que tome un número como argumento y devuelva su valor absoluto.

function obtenerValorAbsoluto(numero) {
    return Math.abs(numero);
}

//9.Escribe una función que tome un número decimal como argumento y devuelva el número redondeado al entero más cercano.

function redondearEntero(numero) {
    return Math.round(numero);
}

// Ejemplos de uso:
console.log(redondearEntero(4.3)); // Devuelve 4
console.log(redondearEntero(4.7)); // Devuelve 5
console.log(redondearEntero(4.5)); // Devuelve 5

//10.Escribe una función que genere y devuelva un número aleatorio entre 0 y 1.

function generarAleatorio() {
  return Math.random();
}

// Ejemplo de uso:
console.log(generarAleatorio());

//LETRAS

//1.Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

function concatenarCadenas(cadena1, cadena2) {
  return cadena1 + cadena2;
}

//2.Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

function obtenerLongitud(cadena) {
  return cadena.length;
}

//3.Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}

//4.Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

function convertirAMinusculas(cadena) {
    return cadena.toLowerCase();
}

//5.Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.

function obtenerCaracter(cadena, indice) {
    return cadena.at(indice);
}

// Ejemplos de uso:
console.log(obtenerCaracter("JavaScript", 4));  // Devuelve: "S"
console.log(obtenerCaracter("JavaScript", -1)); // Devuelve: "t" (el último carácter)

//6.Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena invertida.

function invertirCadena(texto) {
    return texto.split('').reverse().join('');
}

// Ejemplo de uso:
console.log(invertirCadena("javascript")); // Imprime: "tpircsavaj"

//7.Escribe una función que tome una cadena de texto y un carácter como argumentos, y devuelva la cantidad de veces que el carácter aparece en la cadena.

function contarCaracter(cadena, caracter) {
    let contador = 0;
    
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    
    return contador;
}

// Ejemplo de uso:
console.log(contarCaracter("javascript", "a")); // Devuelve 2
console.log(contarCaracter("hola mundo", "o")); // Devuelve 2

//8.Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena sin espacios en blanco.

function eliminarEspacios(texto) {
    return texto.replace(/\s+/g, '');
}

// Ejemplo de uso:
const resultado = eliminarEspacios("Hola mundo, ¿cómo estás?");
console.log(resultado); // Imprime: "Holamundo,¿cómoestás?"

//9.Escribe una función que tome una cadena de texto como argumento y devuelva true si es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false si no lo es.

function esPalindromo(texto) {
  // Convertimos a minúsculas y eliminamos tildes, espacios y caracteres especiales
  const limpio = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // elimina tildes
    .replace(/[^a-z0-9]/g, "");    // elimina espacios y puntuación

  const alReves = limpio.split("").reverse().join("");
  return limpio === alReves;
}

// Ejemplos de uso:
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo"));         // false

//10.Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.

function capitalizarPalabras(cadena) {
  return cadena.replace(/\b\w/g, letra => letra.toUpperCase());
}

// Ejemplo de uso:
console.log(capitalizarPalabras("hola mundo desde javascript")); 
// Resultado: "Hola Mundo Desde Javascript"

//ARRAYS

//1.Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.

function sumarElementos(array) {
  return array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

//2.Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

function calcularPromedio(numeros) {
  // Si el array está vacío, devolvemos 0 para evitar divisiones por cero
  if (numeros.length === 0) return 0; 
  
  // Sumamos todos los elementos del array
  const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  
  // Dividimos la suma entre la cantidad de elementos
  return suma / numeros.length;
}

// Ejemplo de uso:
const misNumeros =;
console.log(calcularPromedio(misNumeros)); // Imprime: 25

//3.Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

function ordenarAscendente(array) {
  return array.slice().sort((a, b) => a - b);
}

//4.Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

function filtrarMayores(arr, numero) {
  return arr.filter(elemento => elemento > numero);
}

// Ejemplo de uso:
const numeros = [2, 5, 8, 12, 15, 20];
const resultado = filtrarMayores(numeros, 10);

console.log(resultado); // [12, 15, 20]

//5.Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

function combinarArrays(array1, array2) {
    return [...array1, ...array2];
}

//6.Escribe una función que tome un array de números como argumento y devuelva el número máximo dentro del array.

function encontrarMaximo(array) {
  return Math.max(...array);
}

//7.Escribe una función que tome un array de números como argumento y devuelva el número mínimo dentro del array.

function encontrarMinimo(array) {
    return Math.min(...array);
}

//8.Escribe una función que tome un array y un elemento como argumentos, y devuelva la cantidad de veces que el elemento aparece en el array.

function contarApariciones(array, elemento) {
    return array.reduce((contador, valorActual) => {
        return valorActual === elemento ? contador + 1 : contador;
    }, 0);
}

//9.Escribe una función que tome un array como argumento y devuelva un nuevo array sin elementos duplicados.

function eliminarDuplicados(array) {
  return [...new Set(array)];
}

//10.Escribe una función que tome un array como argumento y devuelva un nuevo array con los elementos en orden inverso.

function invertirArray(arr) {
  return [...arr].reverse();
}

// Ejemplo de uso:
const original = [1, 2, 3, 4];
const invertido = invertirArray(original);

console.log(invertido); // [4, 3, 2, 1]
console.log(original);  // [1, 2, 3, 4] (sigue intacto)

//OBJETOS LITERALES

//1.Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

const obtenerNombre = (objeto) => objeto.nombre;

//2.Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

function actualizarEdad(objeto, nuevaEdad) {
  objeto.edad = nuevaEdad;
  return objeto;
}

//3.Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.

function agregarPropiedad(objeto, nombrePropiedad) {
    objeto[nombrePropiedad] = null;
    return objeto;
}

//4.Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

function eliminarPropiedad(objeto, propiedad) {
  delete objeto[propiedad];
  return objeto;
}

// Ejemplo de uso:
const usuario = { nombre: "Sebastián", edad: 21, ciudad: "Cuenca" };

eliminarPropiedad(usuario, "edad");
console.log(usuario); // Resultado: { nombre: "Sebastián", ciudad: "Cuenca" }

//5.Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

function contarPropiedades(objeto) {
    return Object.keys(objeto).length;
}

//6.Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y devuelva true si el objeto tiene una propiedad con ese nombre, o false si no la tiene.

function tienePropiedad(objeto, propiedad) {
    return propiedad in objeto;
}

//7.Escribe una función que tome un objeto literal como argumento y devuelva un array con todos los valores de sus propiedades.

function obtenerValores(objeto) {
    return Object.values(objeto);
}

// Ejemplo de uso:
const usuario = { nombre: "Sebatián", edad: 21, ciudad: "Cuenca" };
const valores = obtenerValores(usuario);

console.log(valores); // Resultado: ["Sebastián", 21, "Cuenca"]

//8.Escribe una función que tome dos objetos literales como argumentos y devuelva true si tienen las mismas propiedades y los mismos valores en esas propiedades, o false si son diferentes.

function sonObjetosIguales(objeto1, objeto2) {
    // 1. Obtener las llaves (propiedades) de ambos objetos
    const llaves1 = Object.keys(objeto1);
    const llaves2 = Object.keys(objeto2);

    // 2. Si no tienen la misma cantidad de propiedades, no son iguales
    if (llaves1.length !== llaves2.length) {
        return false;
    }

    // 3. Verificar que cada propiedad exista en el segundo objeto y tenga el mismo valor
    for (let llave of llaves1) {
        if (objeto1[llave] !== objeto2[llave]) {
            return false;
        }
    }

    // Si pasa todas las pruebas, los objetos son iguales
    return true;
}

//9.Escribe una función que tome un objeto literal como argumento y devuelva una copia exacta de ese objeto.

function copiarObjeto(objeto) {
    return structuredClone(objeto);
}

//10.Escribe una función que tome dos objetos literales como argumentos y devuelva un nuevo objeto con todas las propiedades de ambos objetos. Si hay propiedades con el mismo nombre, el valor del segundo objeto deberá prevalecer.

const combinarObjetos = (objeto1, objeto2) => {
  return { ...objeto1, ...objeto2 };
};