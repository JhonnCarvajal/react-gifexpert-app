import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetcGifs } from "../../hook/useFetchGifs";
import '@testing-library/jest-dom';
jest.mock("../../hook/useFetchGifs");
describe("Pruebas en GiFgRID", () => {
  const category = "IT";

  test("Debe crear y comparar snapshot", () => {
      //Para saimular la respuesta de una funcion(mock) se debe instanciar el objeto(wrapper) despues
      useFetcGifs.mockReturnValue({
          data:[],
          images:true
      });
      const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar imagenes cuando se cargan", () => {
      const img = [{
          id:'ABC',
          url:'https://google.com.jpg',
          title:'Cualquier titulo'
      },
      {
        id:'ABC123',
        url:'https://google.com.jpg',
        title:'Cualquier titulo'
    }]
    useFetcGifs.mockReturnValue({
        data:img,
        images:true
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    const p = wrapper.find('p');
    expect(p.exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(img.length)
  });
});
