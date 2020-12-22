import { getGifs } from "../../services/gifAPIClient";

describe('Testing gifApiClientFetch', () => {
   test('should return 10 elements', async() => {
       const gifs = await getGifs('testing');
       expect(gifs.length).toBe( 10 );
   });
   test('should return 0 elements', async() => {
       const gifs = await getGifs('');
       expect(gifs.length).toBe( 0 );
   });

    
});
