import { getUser,getUsuarioActivo } from "../../base/05-funciones"
import '@testing-library/jest-dom';
describe('Pruebas de funciones',()=>{
    test('should return an object getUser', () => {
        const userTest = {
            uid:'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(userTest); // ==
    });
    test('should return an object getUsuarioActivo', () => {
        const name = 'Pepe'
        const activeUserTest = {
            uid: 'ABC567',
            username: name
        }
        const activeUser = getUsuarioActivo(name);
        expect(activeUserTest).toEqual(activeUser);
    })
    
    
})