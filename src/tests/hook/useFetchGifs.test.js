import { useFetcGifs } from "../../hook/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';
describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de retornar e estado incial', async () => {
        const {result, waitForNextUpdate} = renderHook(()=>useFetcGifs('Goku'));
        const {data, loading} = result.current;
        //const {data, loading} = useFetcGifs('Goku');
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {
        
        const {result, waitForNextUpdate} = renderHook(()=>useFetcGifs('Goku'));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
})
