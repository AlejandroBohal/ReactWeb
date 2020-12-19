import { getImagen } from "../../base/11-async-await"

describe('Testing async await functions', () => {
    test('should return an url of image', async() => {
        const url = await getImagen();
        expect(url.includes("https://")).toBe(true);
    })
    
})
