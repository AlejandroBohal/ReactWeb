//Este test viene por defecto con jest el framework de pruebas por defecto.
describe('pruebas en el archivo demo.test.js',()=>{
    test( 'strings should be equal', () =>{
        // 1. Inicialización
        const mensaje = 'Hola mundo';
        // 2. Estimulo.
        const mensaje2 = `Hola mundo`;
        // 3. Aserciones
        expect(mensaje).toBe(mensaje2); // ===
    })
})

