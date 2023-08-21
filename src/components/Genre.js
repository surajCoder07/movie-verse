import React, { useEffect, useState } from "react";
import { useContext } from "react";
import GenreContext from "../utils/genreContext";

const Genre = ({ data, containerClass }) => {
  const allGenresData = useContext(GenreContext);
  console.log(data);

  return (
    <div className={containerClass}>
      {data?.slice().map((genre) => {
        if (!allGenresData[genre]) return;
        return (
          <span
            key={genre}
            className="text-xs bg-pink-700 px-1 rounded-sm font-medium text-white"
          >
            {allGenresData[genre].length > 13
              ? allGenresData[genre]?.name.slice(0, 8) + "..."
              : allGenresData[genre]?.name}
          </span>
        );
      })}
    </div>
  );
};

export default Genre;
