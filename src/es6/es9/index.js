//OPERADOR DE REPOSO
//Extrae las propiedades de un objeto que aún no se han construido. Sirve para no destructurar todo el objeto. Así no creas un nuevo objeto ni tienes que volverlos a insertar los valores de nuevo
const obj = {
    pelicula: 'Buscando a Nemo',
    protagonistas: 'Marlin y Dory',
    tipo: 'animación', 
};

let { protagonistas, ...all} = obj; //escribes la palabra clave que necesitas del objeto y "...all" para traerte todo lo demás que no necesitas
console.log(protagonistas,all);
console.log(obj);
//Marlin y Dory { pelicula: 'Buscando a Nemo', tipo: 'animación' }
// { pelicula: 'Buscando a Nemo',
// protagonistas: 'Marlin y Dory',
// tipo: 'animación' }


// PARA UNIR UNO O MAS OBJETOS A UN  NUEVO OBJETO  
//OBJETO 
const obje = {
   name : 'Deniss',
   age : '18'
}
//NUEVO OBJETO 
const obje1 = {
    ...obje, //OBJETO QUE VAMOS A UNIR 
    
    country : 'MX' // LOS QUE SE ANADIRA AL OBJETO 
}
console.log(obje1); // MANDAMOS LLAMAR AL NUEVO OBJETO A CON EL CAMBIO  YA HECHO 

//FINALLY
//Te permite saber cuándo ha terminado la promesa para en ese momento ejecutar otra lógica o función. 
const holaMundo = () => {
    return new Promise((resolve,reject ) =>{
        (false)
        ? setTimeout(() => resolve ('Hola hola :) ', 4000))
        : reject (new Error ('Aquí hubo un error'))
    });
}
holaMundo()
  .then(response => console.log(response))
  .catch (error => console.log(error))
  .finally (() => console.log ('Finalizó la promesa '))
  //El método .finally() puede ser de utilidad si quieres hacer algún proceso o limpieza una vez que la promesa termina, sin importar su resultado

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year,month,day)

const otroregexData = /(?<primera>[0-9]{4})-(?<segunda>[0-9]{2})-(?<tercera>[0-9]{2})/
const fecha = otroregexData.exec('2018-04-20');
const { primera, segunda, tercera } = fecha.groups;

console.log(primera, segunda, tercera);