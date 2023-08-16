import React, { useState } from "react";
import useFetch from "../utils/useFetch";
import Carousel from "./Carousel";
import SwitchTabs from "./SwitchTabs";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  
  const { fetchedData } = useFetch(`${endpoint}/top_rated?language=en-US&page=1`);
  const onTabChange = (tab) => {
    setEndpoint(endpoint === "movie" ? "tv" : "movie");
  };

  return (
    <div className="text-white py-2 px-5 bg-primary-blue-3 z-50">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-3xl max-sm:text-xl">Top Rated </h1>
        <SwitchTabs data={["movie", "Tv Shows"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={fetchedData?.results} />
    </div>
  );
};

export default TopRated;
