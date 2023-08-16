import React, { useEffect, useState } from "react";
import HeroBanner from "./HeroBanner";
import useFetch from "../utils/useFetch";
import Trending from "./Trending";
import Popular from "./Popular";
const Home = () => {
  const [background, setBackground] = useState("");

  const { fetchedData, error } = useFetch("movie/popular?language=en-US");
  useEffect(() => {
    const bg =
      fetchedData?.results[
        Math.floor(Math.random() * fetchedData.results.length)
      ].backdrop_path;
    setBackground(bg);
  }, [fetchedData]);
  return (
    <div className="  -z-10">
      <HeroBanner bg={background} />
      <Trending />
      <Popular />
    </div>
  );
};

export default Home;
