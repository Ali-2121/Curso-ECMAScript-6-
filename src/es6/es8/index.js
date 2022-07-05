//Object.entries
//Nos permite devolver la clave y los valores de una matriz
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
};

const prueba = Object.entries(data);
console.log(prueba); //Nos retorna una matriz, que en este caso es un arreglo donde dentro se pueden ver las claves y valores en arrays
console.log(prueba.length); //Nos permite ver cuántos elementos hay dentro del objeto

// [ [ 'frontend', 'Oscar' ],
//   [ 'backend', 'Isabel' ],
//   [ 'design', 'Ana' ] ]
// 3



//Object.values 

const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
};

const values = Object.values(data2);
console.log(values); //Nos devuelve los valores del objeto dentro de un arreglo (array) de strings
console.log(values.length); //Nos permite ver el número de elementos dentro del objeto

//[ 'Oscar', 'Isabel', 'Ana' ]
//3

//Object.keys
//Te trae las claves del objeto 
const llaves = Object.keys(data2);
console.log(llaves); 
//[ 'frontend', 'backend', 'design' ]



//.padStart 
//Nos permite agregar al inicio de un string ya establecido más strings
const string = 'Manzana';
console.log(string.padStart(18,'Compra una ')); //Necesita saber cuantos caracteres tendrá en total, (con el string ya existente, más los que se le van a agregar) y el segundo elemento será el/los string que quieras agregar 

//.padEnd 
//Nos permite agregar al final de un string ya establecido más strings

console.log(string.padEnd(26,' ,mi fruta favorita')); //Necesita saber cuantos caracteres tendrá en total, (con el string ya existente, más los que se le van a agregar) y el segundo elemento será el/los string que quieras agregar 

//Compra una Manzana
//Manzana ,mi fruta favorita

//Trailing commas 
//Pones una coma al final del último elemento de tu objeto y no va a pasar nada, dejando paso a que se agreguen más elementos y así se eviten errore en caso de agregar elementos
const unObjeto = {
    name: 'Esta personita',
}


//async y await
// async nos sirve para "marcar" una función como asíncrona y su valor de retorno es una promesa. Puede contener un "await" dentro, que pone en pausa la ejecución de la función asíncrona y espera la resolución de la "promise", luego reanuda la ejecución y devuelve el valor "resolve" o "reject" de la "promise"

//await Solo es aplicable a las funciones marcadas con "async", pone en espera la ejecución de la función mientras la promesa se resuelve, abriendo paso a otras funciones. Espera hasta que la promesa entre a "resolve" o "reject"
const nuevaFuncion = () => {
    return new Promise((resolve, reject) =>{
        (false)
        ? setTimeout (()=> resolve('Hola amigos'), 3000)
        :reject (new Error ('Test Error'))
    }) 
};

const nuevoAsync = async () => {
     const espera = await nuevaFuncion();
     console.log(espera);
}

nuevoAsync();

const anotherFuction =async () =>{
    try {
        const hello = await nuevaFuncion();
        console.log(hello);
    } catch (error){
        console.log(error);
    
    }
}
anotherFuction();