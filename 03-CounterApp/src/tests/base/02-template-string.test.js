import {getSaludo} from '../../base/02-template-string'
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js', () => {
    test('should getSaludo with parameter', () => {
        
        const nombre = 'Alejandro';
        const saludo = getSaludo( nombre );
        expect(saludo).toBe('Hola '+ nombre + '!'); 
    })
    //getSaludo debe retornar Hola Carlos!
    test('should getSaludo without parameter', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');
    })
    
    
})
