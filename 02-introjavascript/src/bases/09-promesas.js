//promesas
import {getHeroeById} from '../bases/exportImport';


const getHeroeByIdAsync = ( id ) =>{
    return new Promise( (resolve,reject) =>{
        setTimeout (() =>{
            const heroe = getHeroeById(id);
            if (heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el héroe');
            }
            
        }, 2000)
    });
    
}
getHeroeByIdAsync(2).then( console.log).catch( console.warn);