import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    //console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 1) {
      setCategories((cats) => [inputValue, ...cats]); //se paso como props una funcion(setCategories) aqui se puede ver la utilidad
      // de usar el callback del use State para acceder al estado anterior, pues no contamos con ese estado directamente, al ser otro componente
      setInputValue("");
    }
  };
  return (
    <form onSubmit={hanldeSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
