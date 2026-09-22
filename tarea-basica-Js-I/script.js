//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp Femcoders de Factoría F5" y mira en tu navegador si sale el resultado.

console.log("Bienvenida/o al bootcamp Femcoders de Factoría F5");

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

// 1. String (Cadena de texto)
const texto = "Buenos, dias";

// 2. Number (Número)
const numero = 3012;

// 3. Boolean (Booleano)
const esVerdadero = true;

// 4. Null (Nulo - ausencia intencional de valor)
const valorNulo = null;

// 5. Undefined (Indefinido - variable declarada pero sin valor asignado)
let valorIndefinido;

// 6. Object (Objeto - estructura de clave:valor)
const usuario = {
  nombre: "Sebastián",
  edad: 21
};

// 7. Array (Arreglo o lista)
const colores = ["rojo", "amarillo", "azul"];

// Impresión en consola
console.log("String:", texto);
console.log("Number:", numero);
console.log("Boolean:", esVerdadero);
console.log("Null:", valorNulo);
console.log("Undefined:", valorIndefinido);
console.log("Object:", usuario);
console.log("Array:", colores);

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

const postres = ['helado', 'flan', 'pastel'];
console.log(postres);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

const coder = {
  nombre: "Sebastián",
  edad: 21
};

console.log(coder);

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

let numero = 91;
let texto = "Hola";

console.log(typeof numero); // Imprime: "number"
console.log(typeof texto);  // Imprime: "string"

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una variable que sume 2 números e imprime el resultado en consola.

// Definimos los dos números
let numero1 = 5;
let numero2 = 3;

// Creamos la variable que suma los números
let suma = numero1 + numero2;

// Imprimimos el resultado en la consola
console.log(suma);

//Ejercicio 7: Crea una variable que reste 2 números e imprime el resultado en consola.

// Creamos la variable que resta 2 números
let resultado = 10 - 4;

// Imprimimos el resultado en la consola
console.log(resultado);

//Ejercicio 8: Crea una variable que multiplique 2 números e imprime el resultado en consola.

// Definimos los dos números a multiplicar
const numero1 = 5;
const numero2 = 10;

// Creamos la variable que almacena el resultado de la multiplicación
const resultado = numero1 * numero2;

// Imprimimos el resultado en la consola
console.log(resultado);

//Ejercicio 9: Crea una variable que divida 2 números e imprime el resultado en consola.

// Declaramos los dos números
let numero1 = 20;
let numero2 = 4;

// Creamos la variable que divide los 2 números
let resultado = numero1 / numero2;

// Imprimimos el resultado en la consola
console.log(resultado);

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

// 1. Creamos las dos variables con sus respectivos valores
let variable1 = 1;
let variable2 = 2;

// 2. Comparamos ambas variables dentro de otra variable
// Usamos el operador de igualdad (===) para verificar si son iguales
let resultadoComparacion = (variable1 === variable2);

// 3. Imprimimos el resultado en la consola
console.log(resultadoComparacion); // Esto mostrará: false

// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

// Imaginemos que las variables del ejercicio anterior eran estas:
const variable1 = 10;
const variable2 = 10;

// Creamos la nueva variable que las compara
const comparacion = (variable1 === variable2);

// Imprimimos el resultado en la consola
console.log(comparacion); // Esto mostrará true

//Ejercicio 11: completa el ejercicio
/*
let num1 = 15
let num2 = 20

let comparacion = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)
*/

let num1 = 15
let num2 = 20

let comparacion = num1 < num2 // 15 es menor que 20, por lo tanto es true
console.log(comparacion)

//Ejercicio 12: completa el ejercicio
/*
let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 
*/

let num3 = 1
let num3AsString = "1"

let result = num3 === num3AsString // Compara valor y tipo (number vs string)
console.log(result) // Muestra false en la consola

//Ejercicio 13: completa el ejercicio
/*
let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)
*/

// Ejercicio 13: completa el ejercicio

let numero1 = 10; // Variable del ejercicio anterior (ejemplo)
let numero2 = 10; // Variable del ejercicio anterior (ejemplo)

let result2 = numero1 === numero2; // Compara si ambos son estrictamente iguales
console.log(result2); // Imprime: true

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

// Creamos las variables con el nombre y apellido
const nombre = "Sebastián";
const apellido = "Pro";

// Concatenamos las variables incluyendo un espacio en blanco
const nombreCompleto = nombre + " " + apellido;

// Imprimimos el resultado en la consola
console.log(nombreCompleto);

//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

// 1. ¿Es 'a' igual a 6 Y 'b' igual a 3? (Ambas deben ser verdaderas)
let res1 = (a === 6) && (b === 3); // true

// 2. ¿Es 'a' igual a 6 Y 'b' igual a 5? ('b' es 3, por lo que esta dará falso)
let res2 = (a === 6) && (b === 5); // false

// 3. ¿Es 'a' igual a 6 O 'b' igual a 5? (Al menos una debe ser verdadera)
let res3 = (a === 6) || (b === 5); // true

// 4. ¿Es 'a' igual a 8 O 'b' igual a 5? (Ambas son falsas)
let res4 = (a === 8) || (b === 5); // false

// 5. Negación de una igualdad (¿Es 'a' NO igual a b?)
let res5 = (a !== b); // true

// 6. Negación del resultado anterior (Invierte el valor de res5)
let res6 = !res5; // false

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);

//let res = a < 10 __ b > 1;
console.log(res); // Será true solo si ambas son verdaderas (ej. a = 5, b = 3)

let res2 = a < 10 __ b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let a = 5;  // Asumiendo un valor para que a < 10 sea true
let b = 5;  // Asumiendo un valor para que b < 1 sea false

//let res2 = a < 10 __ b < 1 // El operador __ requiere que ambas partes sean true
console.log(res2) // Imprime: false

let a = 5;
let b = 5;

let res2 = a < 10 __ b < 1 // El operador __ requiere que ambas partes sean true
console.log(res2) // Imprime: false (porque b < 1 es false)

//let res3 = a == 5 __ b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

javascriptlet a = 5;
let b = 10; // Un valor diferente a 5

let res3 = a == 5 __ b == 5; 
console.log(res3); // Imprime: false

//let res4 = a == 6 __ b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let a = 6;
let b = 0;

let res4 = a == 6 __ b == 0; 
console.log(res4); // Imprime: true

//let res5 = a == 0 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res5 = a == 0 __ b == 3;
console.log(res5); // Devuelve true solo si ambas condiciones son verdaderas

//let res6 = a == 6 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) */

let a = 5; // Supongamos que estas son las variables
let b = 3;

let res6 = a == 6 || b == 3; // Reemplazamos "__" por "||"
console.log(res6); // Imprime: true