import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en AddCategory.js", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe cambiar el valor de la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value: value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });
  test("No debe de hacer submit si no hay nada en el textbox", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe llamar al setCategory y limpiar la caja de texto", () => {
    //Tarea
    const input = wrapper.find("input");
    const value = "Goku";
    input.simulate("change", { target: { value } });
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));//Esperar que se haya llamado con un tipo de funcion
    expect(input.prop('value')).toBe("");
  });
});
