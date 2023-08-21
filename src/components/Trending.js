import React, { useState } from "react";
import SwitchTabs from "./SwitchTabs";
import useFetch from "../utils/useFetch";
import Carousel from "./Carousel";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { fetchedData } = useFetch(`/trending/all/${endpoint}?media_type`);

  const onTabChange = (tab) => {
    setEndpoint(endpoint === "day" ? "week" : "day");
  };

  return (
    <div className="text-white py-2 px-5 bg-primary-blue-3 z-50">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-3xl max-sm:text-xl">Trending</h1>
        <SwitchTabs data={["day", "week"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={fetchedData?.results} endpoint={"movie"} />
    </div>
  );
};

export default Trending;
