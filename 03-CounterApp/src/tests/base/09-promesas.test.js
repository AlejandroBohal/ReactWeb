import {getHeroeByIdAsync} from "../../base/09-promesas"
import '@testing-library/jest-dom'
import heroes from "../../data/heroes";

describe('Promise tests', () => {
    // El done espera que las tareas asincronas terminen.
    test('should return an async hero', ( done ) => { 
       const id = 1;
       getHeroeByIdAsync(id).then( heroe=>{
           expect(heroe).toBe(heroes[0]);
           done();
       });
    });
    test('should throws an error if hero does not exists', ( done ) => { 
        const id = 15;
        getHeroeByIdAsync(id).catch( error=>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
     })
    
})
