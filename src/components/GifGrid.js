import React from "react";
import { useFetcGifs } from "../hook/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetcGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid animate__animated animate__fadeIn">
        {loading && <p>Loading...</p>}
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
