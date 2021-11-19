import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Probar el GifGridItem", () => {
  const title = "Mi titulo";
  const url =
    "https://elcomercio.pe/resizer/3rNqVB9iUBkT2Y1LIS2i6qSyuro=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/UQO2N3UJQFCVTASI64CXYMKS6U.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("Debe rendereizar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe de tener un parrafo con el title", () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });
  test("La imagen debe tener src y alt", () => {
    const img = wrapper.find('img');
    //console.log(img.props());
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });
  test('Debe tener css, animated fadeIn', () => {
    const div = wrapper.find('div');
    //console.log(div.props());
    expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
      
  })
  
});
