//Manera que nos enseñaron para exportar modules de un archivo a otro, pero esta forma no está soportada en todas las versiones de node
const holis = () => {
    return 'Holiiis :)';
}
export default holis;


//Manera que usamos nosotras, sintaxis antigua 
function hello(){
    return 'Holiiis :)';
}
module.exports = hello;
