// Funciones en js


const saludar  = ( nombre ) => `Hola, ${ nombre }`;
const saludar2  = () => `Hola Mundo`;

const getUser = () => {
    return  {
        uid: 'ABC123',
        username: 'Costalito.'
    }
};
// Para retornar objetos en una función flecha se usan paréntesis

const getUser2 = () => ({
    uid: 'ABC123',
    username: 'Costalito.' 
});

console.log(saludar('Viejo'));
console.log(saludar2());
const user = getUser2();
console.log(getUser());
console.log(user);

// Tarea

const getUsuarioActivo  = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});
const usuarioActivo = getUsuarioActivo('ElPepe');
console.log( usuarioActivo);
