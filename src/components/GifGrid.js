import React from "react";
import { useFetcGifs } from "../hook/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";
export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetcGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid animate__animated animate__fadeIn">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
