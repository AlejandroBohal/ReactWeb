//Desestructuración de arreglos
const personajes = ['Goku','Vegetta','Trunks'];

console.log(personajes[0],personajes[1],personajes[2]);

//personaje1
const [ p1 ] = personajes;
console.log(p1);
//personaje2
const [, p2] = personajes;
console.log(p2);
//personaje3
const [,, p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC',123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);


//Tarea

const state = ( valor ) =>{
    return  [valor, () => {console.log('Hola mundo')}]
}
const [nombre,setNombre] = state('Goku');
setNombre();

