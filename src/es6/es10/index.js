//FLAT (No nos funcionó porque necesitamos una vesión de Node.js mayor a 11 y la nuestras es 10)
//El aplanamiento consiste en transformar un array de arrays a uno de una sola dimensión. Los métodos flat y flatMap permitirán realizar el aplanamiento.
//El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.

// Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

// Este método recibe un argumento:
//La profundidad del aplanamiento, por defecto, tiene un valor de 1. Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.

const array = [1,2,[3,4],5,6]
const result = array.flat() 
console.log(result);
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Así sacas todos los arrays que había dentro, sin importar cuántos sean

// Método flatMap (No nos funcionó porque necesitamos una vesión de Node.js mayor a 11 y la nuestras es 10)
// El método flatMap es una combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).

// Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

// Este método recibe los mismos argumentos que el método map{target="_blank"}.

let miArray = [1,2,3,4,5];
console.log(miArray.map(value => [value, value *2]));
//[ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ], [ 5, 10 ] ]
console.log(miArray.flatMap(value => [value, value *2]));
// [ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]
//Por defecto, "map", encapsula cada iteración en un array distinto y "flat" se encarga de sacarlos y mostarlos todos en un solo array

// ¡¡Cuidado!!, primero hace el map y luego el flat
const numbers2 = [1,[2,3], 4, 5]
numbers2.flatMap(number => [number *2]) 
// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number

//TRIM, TRIMSTART Y TRIMEND (ESte si lo pudimos utilizar)
// Existen tres métodos para eliminar espacios en blanco de un string:

    // 1. El método trim elimina los espacios en blanco al inicio y al final.
    // 2. El método trimStart o trimLeft elimina los espacios al inicio.
    // 3. El método trimEnd o trimRight elimina los espacios al final.

let holis = '    Holis Amigos   '
console.log (holis.trim());
//Holis Amigos


let hello = '      hello world';
console.log (hello);
//      hello world
console.log (hello.trimStart());
//hello world


let helloo = 'hello world        ';
console.log (helloo);
//hello world         (Aunque no se ve, termina muchos espacioes después de la d de world)
console.log (helloo.trimEnd());
//hello world    (Aquí termina justo en la d de world)

//TRY CATCH (No nos funcionó porque necesitamos una vesión de Node.js mayor a 11 y la nuestras es 10)
//Antes, para trabajar con el error de catch, debías pasarlo por parámetro para poder trabajarlo dentro de catch, pero ahora puedes simplemente llamar a error dentro de catch con la certeza de que estará disponible para trabajar con él dentro de catch
try{

}catch{
    console.error();
}


//.fromEntries  (No nos funcionó porque necesitamos una vesión de Node.js mayor a 11 y la nuestras es 10)
// Cómo transformar un array de arrays en un objeto
// Object.fromEntries() devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].

// Se considera la operación inversa de Object.entries(). (Object.entries si pudimos utilizarlo)

let entries = [["name", "osacar"], ["age", 32]];
console.log(Object.fromEntries(entries));
//{name: 'osacar', age: 32}

const arrayEntries = [
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
  ] 
  const usuario = Object.fromEntries(arrayEntries) 
  console.log(usuario)
  /* {
    name: 'Andres',
    email: 'andres@correo.com',
    age: 23
  }
  */

//   Propiedad "description" de los tipos symbol
// Ahora los tipos primitivos symbol tienen una propiedad description que sirve para mostrar su valor.
let mySymbl = `"my simbolo"`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);

const nombre = Symbol("Andres")
nombre // Symbol(Andres)
nombre.description // 'Andres'