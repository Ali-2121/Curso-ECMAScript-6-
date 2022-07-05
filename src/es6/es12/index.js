//No pudimos usar ninguna de estas neuvas características por nuestra versión de Node.js

//REPLACEALL
// El método replaceAll retorna un nuevo string, reemplazando todos los elementos por otro.

// Este método recibe dos argumentos:

// El patrón a reemplazar, puede ser un string o una expresión regular.
// El nuevo elemento que sustituye al reemplazado.
// Este método fue creado para solucionar el problema que tenía el método replace, que realizaba la misma función de reemplazar elementos, pero solamente una sola vez.
const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

const otroMensaje = mensaje.replace("JavaScript", "Python"); //así era antes
console.log(otroMensaje);
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

mensaje.replaceAll("JavaScript", "Python") //Así es ahora
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

mensaje.replaceAll(/a/g, "*")
// 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'

// Métodos privados de clases
// Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.

// Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral (#).

class Clase {
    show(valor){
      console.log(valor)
    }
    
  }
  
  const clase = new Clase()
  clase.show('Holis :)');
  //Holis :)

  class Claase {
    //el símbolo de gato indica que este recurso será privado y solo va a ser accedido dentro de la clase
    #show(valor){
      console.log(valor)
    };
    // get #add(val){
    //     ...
    // }
    
  }
  
  const claase = new Clase()
  claase.show('Holis :)');
  //claase.show('Holis :)); 
  //TypeError: claase.show is not a function
  //Mostrará esto por que el recurso se volvió privado

  //Promise.any
// Promise.any() es otra forma de manejar varias promesas, que retornará la primera promesa que sea resuelta y se rechazará si todas las promesas son rechazadas.
 //Es un obejto blobal de promise cuyo argumento será la forma de una rray de promesas que se le pasará capturando la respuesta d ela primera que resulte satisfactoria

 const laPromesa = new Promise ((resolve, reject) => reject("1"));
 const laPromesa1 = new Promise ((resolve, reject) => resolve("2"));
 const laPromesa2 = new Promise ((resolve, reject) => resolve("3"));

 Promise.any([laPromesa, laPromesa1, laPromesa2])
     .then(response => console.log(response))
 //2
 //Muestra "2" porque es el primer valor que se resuelve, así que ignora a los demás porque estamos buscando el primero


 //Referencias débiles
// Un objeto WeakRef consiste en mantener una referencia débil a otro objeto, para evitar que ese objeto sea eliminado por el Garbage Collection{target="_blank"}.

class anyClass{
    constructor(element){
        this.ref = new WeakRef(element)
    }
}
//ESto evita que este objeto sea recogido por el manejador de la basura que libera elementos de la memoria y así poder usarlo 

//Nuevos operadores de asignación
// En ES2021 se agregaron tres operadores de asignación:

// Asignación AND (&&=), en caso de cumplirse una verdad, asigna un valor a una variable.
// Asignación OR (||=), en caso de cumplirse una falsedad, asigna un valor a una variable.
// Asignación Nullish (??=), en caso de cumplirse undefined o null, asigna un valor a una variable.

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTruee = true;
let isFalsee = false;
console.log(isTruee ||= isFalsee);

let isTrueee = undefined;
let isFalseee = false;
console.log(isTrueee ??= isFalseee);

//Nos permite tener más opciones para hacer comparaciones o asignaciones para los elementos que vamos a estar trabajando
