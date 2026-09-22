//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//CONDICIONALES

//Ejercicio 1: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'

const age = 18;

if (age >= 18) {
  console.log('Eres mayor de edad');
} else {
  console.log('No eres aún mayor de edad');
}

//Ejercicio 2: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.

let age = 12; // Modifica el número anterior por 12

//Ejercicio 3: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"

const pet = "perro";

if (pet === "perro") {
  console.log("Tengo un perro");
} else if (pet === "gato") {
  console.log("Tengo un gato");
} else if (pet === "pájaro") {
  console.log("Tengo un pájaro");
} else {
  console.log("No tengo una mascota convencional");
}

//Ejercicio 4: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.

const pet = "serpiente";

if (pet === "perro") {
  console.log("Tengo un perro");
} else if (pet === "gato") {
  console.log("Tengo un gato");
} else if (pet === "pájaro") {
  console.log("Tengo un pájaro");
} else {
  console.log("No tengo una mascota convencional");
}

//Ejercicio 5: Haz el mismo ejercicio 3, pero con el condicional switch.

const pet = "perro"; // Puedes cambiar este valor para probar

switch (pet) {
  case "perro":
    console.log("Tengo un perro");
    break;
  case "gato":
    console.log("Tengo un gato");
    break;
  case "pájaro":
    console.log("Tengo un pájaro");
    break;
  default:
    console.log("No tengo una mascota convencional");
    break;
}

//Ejercicio 6: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"

const weather = 'soleado';

const result = weather === 'soleado' ? 'Me vestiré con un vestido' : 'Me vestiré con pantalón';

console.log(result);

//Ejercicio 7: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.

const weather = 'frío';

const result = weather === 'frío' ? 'Me vestiré con un vestido' : 'Me vestiré con pantalón';

console.log(result);

//Ejercicio 8: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.

const value = '1';

if (typeof value === 'number') {
  console.log("Es un número");
} else if (typeof value === 'string') {
  console.log("Es un string");
} else {
  console.log("No es ni número ni string");
}

//BUCLES

//Ejercicio 9: Imprime en consola una lista del 0 al 10 con el bucle for

// Bucle for para imprimir una lista del 0 al 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//Ejercicio 10: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 

const programmers = [
    {
        name: 'Ada',
        lastname: 'Lovelace',
        knowledge: 'la máquina analítica'
    },
    {
        name: 'Margaret',
        lastname: 'Hamilton',
        knowledge: 'el programa espacial Apolo'
    },
    {
        name: 'Grace',
        lastname: 'Hopper',
        knowledge: 'el lenguaje Cobol'
    },
    {
        name: 'Hedy',
        lastname: 'Lamarr',
        knowledge: 'el wifi'
    }     
]

for (const index in programmers) {
    const programmer = programmers[index];
    console.log(`${index}: ${programmer.name} ${programmer.lastname}, su aporte fue ${programmer.knowledge}`);
}

//Ejercicio 11: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.

const names = ['Carla', 'Alex', 'Judith', 'Maria', 'Noelia']

const names = ['Carla', 'Alex', 'Judith', 'Maria', 'Noelia'];

for (const name of names) {
  console.log(`Hola, mi nombre es ${name}`);
}

//Ejercicio 12: Con un bucle while imprime en consola una lista del 1 al 5.

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

//Ejercicio 13: Realiza el mismo ejercicio anterior pero con un bucle do while.

import java.util.Scanner;

public class Ejercicio13 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numero;

        // El bloque 'do' se ejecuta al menos una vez
        do {
            System.-out.print("Introduce un número mayor o igual a 0: ");
            numero = scanner.nextInt();
            
            if (numero < 0) {
                System.out.println("El número no es válido. Inténtalo de nuevo.");
            }
        } while (numero < 0); // Se repite mientras la condición sea verdadera

        System.out.println("¡Correcto! Has introducido el número: " + numero);
        scanner.close();
    }
}

//Ejercicio 14: Saludo Personalizado
//Crea una función llamada saludar que tome un parámetro llamado nombre y devuelva un saludo personalizado. Luego, llama a la función con diferentes nombres y muestra el resultado en la consola.

// 1. Definición de la función con el parámetro 'nombre'
function saludar(nombre) {
    return `¡Hola, ${nombre}! ¿Cómo estás hoy?`;
}

// 2. Llamadas a la función con diferentes nombres y muestra en consola
const saludo1 = saludar("Sebastián");
console.log(saludo1);

const saludo2 = saludar("Delia");
console.log(saludo2);

const saludo3 = saludar("Marcos");
console.log(saludo3);

//Ejercicio 15: Calcular el Área de un Rectángulo
//Crea una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y alto) y devuelva el área del rectángulo. Luego, llama a la función con diferentes valores de ancho y alto y muestra el resultado en la consola.

// 1. Definición de la función
function calcularAreaRectangulo(ancho, alto) {
    return ancho * alto;
}

// 2. Llamadas a la función con diferentes valores
const area1 = calcularAreaRectangulo(5, 10);
const area2 = calcularAreaRectangulo(7.5, 4);
const area3 = calcularAreaRectangulo(12, 8);

// 3. Mostrar los resultados en la consola
console.log("El área del primer rectángulo (5x10) es: " + area1);
console.log("El área del segundo rectángulo (7.5x4) es: " + area2);
console.log("El área del tercer rectángulo (12x8) es: " + area3);