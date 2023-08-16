import React, { useState } from "react";
import useFetch from "../utils/useFetch";
import Carousel from "./Carousel";
import SwitchTabs from "./SwitchTabs";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { fetchedData } = useFetch(`${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(endpoint === "movie" ? "tv" : "movie");
  };
  console.log(fetchedData);

  return (
    <div className="text-white py-2 px-5 bg-primary-blue-3 z-50">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-3xl max-sm:text-xl">What's Popular</h1>
        <SwitchTabs data={["movie", "Tv Shows"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={fetchedData?.results} />
    </div>
  );
};

export default Popular;
