//Template String

const nombre = 'Alejandro';
const apellido = 'Bohórquez';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola mundo ' + nombre;
}
console.log(`Este es un texto: ${ getSaludo(nombre) } ` );