import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en el helper getGifs',()=>{
    test('Debe traer 10 elementos de la API', async() => {
        const resp = await getGifs('One Punch');
        expect(resp.length).toBe(10);
        
    });

    test('Debe traer 10 elementos de la API', async() => {
        const resp = await getGifs('');
        expect(resp.length).toBe(0);
        
    });
    
})