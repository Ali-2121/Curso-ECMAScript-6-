const obj = {
    pelicula: 'Buscando a Nemo',
    protagonistas: 'Marlin y Dory',
    tipo: 'animación', 
};

let { protagonistas, ...all} = obj;
console.log(protagonistas,all);