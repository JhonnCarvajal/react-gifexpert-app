import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);
  /*
  const handleAdd = () => {
    //setCategories([...categories,'HunterXHunter']);// Una soluci[n BIEN!!!!
    setCategories((cats) => [...cats, "HunterXHunter"]); //El segundo parametro que se envia al useStae
    //La funcion modificadora, tiene un callback que recibe como primer argumento el estado anterior!!!!!
  };
  */
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={()=>handleAdd()}>Agregar</button> */}
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
