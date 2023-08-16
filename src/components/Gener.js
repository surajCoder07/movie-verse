import React, { useEffect, useState } from "react";
import fetchDataFromApi from "../utils/fetchDataFromApi";

const Gener = ({ data }) => {
  const [allGenresData, setAllGenresData] = useState({});

  useEffect(() => {
    getGenresData();
  }, []);

  const getGenresData = async () => {
    const endpoint = ["movie", "tv"];
    const promise = [];
    const allGenres = {};
    endpoint.forEach((point) => {
      return promise.push(fetchDataFromApi(`genre/${point}/list?language=en`));
    });
    const data = await Promise.all(promise);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item.name));
    });

    setAllGenresData(allGenres);
  };

  return (
    <div className="absolute  right-0 bottom-0 flex flex-wrap  gap-2   justify-end max-sm:hidden ">
      {data?.slice().map((genre) => {
        if (!allGenresData[genre]) return;
        return (
          <span
            key={genre}
            className="text-xs bg-pink-800 px-1 rounded-sm font-medium"
          >
            {allGenresData[genre]}
          </span>
        );
      })}
    </div>
  );
};

export default Gener;
