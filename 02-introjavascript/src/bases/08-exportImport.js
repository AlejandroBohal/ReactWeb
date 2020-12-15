//Operaciones con arreglos, import, export
import heroes from '../data/heroes'; //importaciones por defecto


export const getHeroeById = (idSearch) => heroes.find( ({id}) => id === idSearch );
export const getHeroesByOwner = (ownerSearch) => heroes.filter( ({owner}) => owner === ownerSearch );
//console.log(getHeroeById(2));
//console.log(getHeroesByOwner('DC'))
//console.log(owners);