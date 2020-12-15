
//Desestructuración de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

//Renombrar variables
/*
const { nombre:nombreAsignado } = persona;
console.log(nombreAsignado);
*/

const retornaPersona = ( usuario ) =>{
    const {edad,clave,nombre} = usuario;
    console.log(edad,nombre,clave);
}

//Desestructuracion en el argumento

//Valores por defecto
const retornaPersona2 = ({nombre,edad,rango = 'Capitán'}) =>{
    console.log(nombre,edad,rango);
}
const context = ({clave,nombre,edad,rango = 'Capitán'}) => ({
    nombreClave:clave,
    edad,
    nombre,
    rango,
    latlng: {
        lat:14.3223,
        lng:-12.2323 
    }
});

//Extraer objetos anidados
//const {nombreClave,edad,latlng:{lat,lng}} = context(persona);
const {nombreClave,edad,latlng} = context(persona);
const {lat,lng} = latlng;
retornaPersona(persona);
retornaPersona2(persona);
console.log(nombreClave,edad);
console.log(lat,lng);
