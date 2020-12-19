import { retornaArreglo } from "../../base/07-deses-arr"

describe('destructuring array test', () => {
    test('should return a string and number', () => {
        const [letters,numbers] = retornaArreglo();
        
        expect(letters).toBe('ABC');
        expect(typeof letters).toBe('string');

        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    })
    
})
