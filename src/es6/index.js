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
let pruebaSet = [...new
    Set(['Deni', ...grupo1,...grupo2])];
console.log (todos);
console.log (team1);
console.log (team2);
console.log (pruebaSet);
