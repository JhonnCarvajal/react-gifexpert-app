import React from "react";

export const GifGridItem = (props) => {
  //console.log(props);
  return <div className={'card animate__animated animate__fadeIn'}>
      {props.title}
      <img src={props.url} alt = 'Cargando...'/>
      </div>;
};
