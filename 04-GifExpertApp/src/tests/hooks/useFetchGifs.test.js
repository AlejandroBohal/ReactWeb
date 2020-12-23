import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Testing custom hook useFetchGifs', () => {
    test('should return initial state', async() => {
        const {result, waitForNextUpdate} = renderHook( () =>  useFetchGifs('testing') );
        const {data,loading} = result.current;
        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy(); 
    });
    test('should return gif array and loading should be false', async() => {
        const {result, waitForNextUpdate} = renderHook( () =>  useFetchGifs('testing') );
        await waitForNextUpdate(); //error component unmounted
        const {data,loading} = result.current;
        expect( data.length ).toBe(10);
        expect( loading ).toBeFalsy(); 
    })
    
    
})
 