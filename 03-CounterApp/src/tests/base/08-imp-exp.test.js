import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import heroes from "../../data/heroes";

describe('Tests import export', () => {
    test('should return a hero by id', () => {
        
        const heroId = 2;
        const hero = getHeroeById(heroId);
        const heroData = heroes.find(({id}) => heroId === id );
        expect(hero).toEqual(heroData);

    });
    test('should return undefined if hero does not exists', () => {
        
        const heroId = 15;
        const hero = getHeroeById(heroId);
        expect(hero).toBe(undefined);
        
    });
    test('should return an array with DC heroes', () => {
        const heroOwner = 'DC';
        const arr = getHeroesByOwner(heroOwner);
        const arrData = heroes.filter(({owner}) => heroOwner === owner);
        expect(arr).toEqual(arrData);
        expect(arr.length).toBe(3);
    });
    test('should get an array with length 2', () => {
        const heroOwner = 'Marvel';
        const arr = getHeroesByOwner(heroOwner);
        expect(arr.length).toBe(2);

    })
    
    
    
})
