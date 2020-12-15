// Objetos literales

const persona = {
    nombre: 'F',
    apellido: 'En el chat',
    edad: 45,
    direccion:{
        ciudad: 'Medellin',
        zip: 5123144,
        lat: 14.3516,
        lng: 13.25189
    },
}

//copiar objetos

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );