import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Pruebas en GifExpertApp',()=>{
    
    test('Debe mostrar el componente correctamente', () => {
        const wrapper= shallow(<GifExpertApp  />)
        expect(wrapper).toMatchSnapshot();
    })
    test('Debe de mostrar una liosta de categorias', () => {
        const categories = ['One Punch','Goku']
        const wrapper= shallow(<GifExpertApp defaultCategories={categories} />)
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    

})