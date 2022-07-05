//IMPORTACIÓN DINÁMICA
// La importación dinámica consiste en cargar los módulos cuando el usuario los vaya a utilizar, y no al iniciar la aplicación. Esto permite que la página web sea más rápida, porque descarga menos recursos.

// La expresión import() permite manejar módulos dinámicamente, ya que la sintaxis de ECMAScript import ... from ... no lo permite.

// La expresión import() recibe un argumento de tipo string con la ruta del módulo a importar y devuelve una promesa.

const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
}) //Esto permite que se descargue el archivo file.js hasta que se utiliza, que es cuando e da click en el botón. Así nuestra carga principal, no se vuelve tan pesada. 
//Esto absolutamente podría aumentar el rendimiento del tiempo de carga en caso de que el módulo no sea necesario para la carga, sino solo después de que ocurra algún evento e incluso hasta un condicional.



// Big Int
// El nuevo dato primitivo bigint permite manejar números enteros muy grandes. Existen dos formas de crear un bigint: el número entero seguido de n o mediante la función BigInt

const aBigNumber = 9087654456789079n; //Esto a él le funciona con 16 dígitos y a nosotras solo con 15 dígitos

const anotherBigNumber = BigInt(9087654456789079);
console.log(aBigNumber);
console.log(anotherBigNumber);
//908765445678907n
// 908765445678907n (con 15 dígitos)

// 9087654456789079n
// 9087654456789080n (con 16 dígitos)

const number1 = 45n
const number2 = BigInt(45)
console.log(number1)
console.log(number2)

//JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un mínimo Number.MIN_SAFE_INTEGER.
const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991

//Después de los límites, los cálculos muestran resultados erróneos. Los bigint ayudan a manejar operaciones de enteros fuera de los límites mencionados.

const increment = 2
const number = Number.MAX_SAFE_INTEGER + increment
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment)

console.log(number) // 9007199254740992
console.log(bigInt) // 9007199254740993n
// Se añade la misma cantidad a ambos tipos de datos, sin embargo, el tipo numérico da un resultado diferente al esperado.

// (Promise.allSettled)Manejo de varias promesas (NO PUDIMOS USARLO POR NUESTRA VERSIÓN DE NODE.JS)
// Para manejar varias promesas se utiliza Promise.all(), que recibe como argumento un array de promesas.
//El problema es que Promise.all() se resolverá, si y solo si todas las promesas fueron resueltas; si al menos una promesa es rechazada, Promise.all() será rechazada.

// Promise.allSettled
// Promise.allSettled() permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.

const promesa1 = Promise.reject("Ups promesa 1 falló")
const promesa2 = Promise.resolve("Promesa 2")
const promesa3 = Promise.reject("Ups promesa 3 falló")

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(respuesta => console.log(respuesta))

/* [
  {
    status: 'rejected',
    reason: 'Ups promesa 1 falló'
  },
  { status: 'fulfilled', value: 'Promesa 2' },
  {
    status: 'rejected',
    reason: 'Ups promesa 3 falló'
  }
] */


//Objeto global para cualquier plataforma
//(NO PUDIMOS USARLO POR NUESTRA VERSIÓN DE NODE.JS)
// El motor de JavaScript, aquel que compila tu archivo y lo convierte en código que entiende el computador, al iniciar la compilación crea un objeto global.

// El objeto global proporciona funciones y variables propias e integradas en el lenguaje o el entorno. Dependiendo la plataforma, este objeto global tendrá un nombre diferente.

// En el navegador el objeto global es window, para Node.js es global, y así para cada entorno. Sin embargo, en Node.js no podrás acceder a window, ni en el navegador podrás acceder a global.

// Para estandarizar el objeto global se creó globalThis, un objeto compatible para cualquier plataforma.

console.log(window)
console.log(globalThis)

// En el navegador
window === globalThis // true

// En Node.js
global === globalThis // true

//Operador Nullish Coalescing
//(NO PUDIMOS USARLO POR NUESTRA VERSIÓN DE NODE.JS)
// El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para asignarle un valor.

// El siguiente ejemplo se lee como: ¿usuario.name es undefined o null? Si es así, asígnale un valor por defecto "Andres", caso contrario asigna el valor de usuario.name.

const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'

//Diferencia entre el operador OR y el Nullish coalescing
// El operador OR (||) evalúa un valor falsey. Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "", false, NaN, undefined o null.

// Puede que recibas una variable con un valor falsy que necesites asignarle a otra variable. Si evalúas con el operador OR, este lo cambiará, provocando un resultado erróneo.
const id = 0

const orId = id || "Sin id"
const nullishId = id ?? "Sin id"
orId //  'Sin id'
nullishId // 0


//Encadenamiento opcional
//(NO PUDIMOS USARLO POR NUESTRA VERSIÓN DE NODE.JS)
// El encadenamiento opcional u optional chaining (?.) detiene la evaluación del objeto cuando el valor es undefined o null antes del ?., retornando undefined sin detener el programa por un error.
// ¿Pero por qué usaría propiedades de un objeto vacío? Cuando realizas peticiones, el objeto no contiene la información correspondiente, por ende, necesitas que el programa no colapse hasta que lleguen los datos y puedas utilizarlos.
const usuarioo = {}
console.log(usuario.redes.facebook) 
// TypeError: Cannot read properties of undefined (reading 'facebook')

const usuario = {}
console.log(usuario.redes?.facebook) 
// undefined

// Evita el abuso del encadenamiento opcional
// El encadenamiento opcional se debe utilizar únicamente cuando probablemente un valor no exista.

// Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, entonces se debería escribir usuario.redes?.facebook y no usuario?.redes?.facebook.

// Si abusas del encadenamiento opcional y existe un error en usuario, el programa podría “ocultarlo” por un undefined, provocando que el debugging sea más complicado.