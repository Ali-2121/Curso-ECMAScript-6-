//DEFAULT PARAMS

//Antes: Tenías que hacer la /las variable/s pasarle el argumento y con el operador separar el argumento del DEFAULT. 
function newFunction(name, age, country){
    var name = name || "Alina";
    var age = age || 33;
    var country = country || "México";
    console.log (name, age,country );
};


//es6: Ahora puedes pasarle el DEFAULT desde el parámetro, ahorrando así lineas de código. 
function newFunction(name = 'oscar', age = 32, country ="MX"){
    console.log (name, age,country );
};

newFunction(); //Esta, que no lleva argumentos, tomará los que están en DEFAULT 
newFunction('DENISS', '23', 'COLOMBIA');

//TEMPLATE LITERALLS

//Antes: Debías declarar e inicializar las variables, concatenar con el signo de suma y separar con comillas simples
var hola = "Hello";
var mundo = "world";
var fraseCompleta = hola + ' ' + mundo;
console.log (fraseCompleta);

//es6: Ahora solo utilizar comillas francesas, el signo $ y las llaves y así concatenas las variables o cadenas de texto que desees, ahorrándote así varias lineas de código. 

let fraseCompleta2 = `${"hello"} ${"world"}`;
console.log (fraseCompleta2);

//MULTILINEA

//Antes: Debías marcar el salto de línea con \n y para agregar otra cadena de texto debías agregar el signo de más, extra a que todos los strings debían ir entre comillas dobles
let lorem = "Quiero un pastel de  \n" 
           + "chocolate con fresas."

//es 6 : Ahora solo debes usar las comillas francesas ` ` , no debes usar comillas dobles, ni el signo de más y tampoco el \n. Solo debes acribir y los enter se verán reflejados en el texto
let lorem2 = `Quiero también una malteada de
cajeta con galleta`

console.log (lorem)
console.log (lorem2)

//DESTRUCTURACIÓN 
let persona = {
    'name': 'Alina',
    'age': 22,
    'country': 'México'
};

//Antes: debías hacer referencia al objeto y despúes con .keyword sacar el elemento que querías que estaba dentro del objeto 
console.log(persona.name, persona.age);

//es6: Ahora puedes crear una variable que tenga como valor el objeto y se declare con llaves que lleven por dentro los elementos que quieres obtener del objeto. Despúes mediante el console.log mandar llamar la variable.
let {name, age} = persona;
console.log (name, age);

//SPREAD OPERATOR (Operador de propagación): Nos permite expandir de ciertas situaciones varios elementos.

let team1 = [
    'Alejandro','Alicia','Andrés'
]
let team2 = [
    'Braulio','Benito','Berenice'
]
let todos = [
    'Alina',...team1, ...team2
]
let grupo1 = [
    'Ali', 'Marlene', 'Lilieth'
]
let grupo2 = [
    'Ali', 'Monserrat', 'Lizeth'
]
//el [...new Set([]) nos permite evitar duplicados en el array]
let pruebaSet = [...new
    Set(['Deni', ...grupo1,...grupo2])];

console.log (todos);
console.log (team1);
console.log (team2);
console.log (pruebaSet);

//PARÁMETROS EN OBJETOS 
let miNombre = 'Alina';
let miEdad = 19;

//Antes
obj = {miNombre:miNombre, miEdad:miEdad};

//es6 
obj2 = {miNombre, miEdad};
console.log (obj);
console.log (obj2);

//ARROW FUNCTIONS

const hermanos = [
    {name: 'Alina', age: 33, country : 'CDMX'},
    {name: 'Deniss', age: 30, country : 'EDO MEX' },
    {name: 'Gerado', age: 20, country : 'EDO MEX'},
];

//Antes: Tenías que pasarle una función anónima y llaves para que te retornara algo, la sintáxis era larga, poco amigable y más complicada de entender
let losHermanos = hermanos.map(function (item){
    console.log (item.age);
})

// es6: Ahora solo ponemos un => del lado izquierdo lo que sería el parámetro de la función y del lado derecho el código que deseamos ejecutar 

let losHermanoss = hermanos.map(item => console.log(item.age));

//PROMESAS
//Significan que algo va a suceder 
const helloPromise = () => {
     return new Promise ( (resolve, reject ) => {
         if (true){
            resolve ('Hey');
         }
         else {
            reject ('Ups !!');
         }
         } );
}

helloPromise ()
  .then (response => console.log(response))
  .then (() => console.log('Esta es otra respuesta'))
  .catch (error => console.log(error));

// CLASES: Es una mejor manera de manejar la sintaxis, haciéndola más clara para el manejo de objetos y la herencia dentro de JS

//Funcionan como una función constructora, usas la palabra reservada "clss" y le ponen el nombre que quieras
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

 //Dentro hay un método, puede usar tantos métodos como necesites 
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator (); //Esta variable manda llamar la clase, por eso termina con paréntesis.
//Usas "el operador: new" que genera una nueva instancia del constructor que tienes dentro de la clase. Instancia: Objeto creado que deriva de otro objeto 
console.log (calc.sum(8,2)); //Mandas llamar la variable que manda llamar la clase, usas el método que tienes dentro de la clase y le pasas los argumentos con los que vas a trabajar 

//MÓDULOS: Es para guarda la lógica de tu proyecto en un archivo separado de tu hilo principal y exportar e importar de un documento a otro las funciones o variables que necesites y así estén disponibles en tu código 

//Manera que nos enseñaron para exportar modules de un archivo a otro, pero esta forma no está soportada en todas las versiones de node
import { holis } from './module';
holis();

//Manera que usamos nosotras, sintaxis antigua 
const hello = require ('./module')
console.log(hello());