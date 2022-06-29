// .includes 
//Trabaja sobre arreglos o strings, nos permite validar si existe cierto elemento dentro de él 
let numbers = [
    1,2,5,4,8,9,3,0
];

if (numbers.includes(8)){
    console.log('Sí, aquí está el 8')
}else{
    console.log('No, aquí no está el 7') 
}
let letritas = 'Alina Bonilla Paredes Magaly';

//En el caso de los string distingue entre mayúsculas y minúsculas
if (letritas.includes('Alina')){
    console.log('Si, ese nombre está aquí') 
}else{
    console.log('No, ese nombre no está aquí') 
}

//ELEVAR A LA POTENCIA 

let base = 4; //Número que vas a elevar
let exponente = 3; // La potencia a la que se va a elevar 
let resultado = base ** exponente; //Usar el doble asterisco para indicarle que va a elevar a esa potencia 

console.log (resultado); 