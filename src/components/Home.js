import React, { useEffect, useState } from "react";
import HeroBanner from "./HeroBanner";
import useFetch from "../utils/useFetch";
const Home = () => {
  const [background, setBackground] = useState("");

  const { data, error } = useFetch("movie/popular?language=en-US");
  useEffect(() => {
    const bg =
      data?.results[Math.floor(Math.random() * data.results.length)]
        .backdrop_path;
    setBackground(bg);
    console.log(
      data?.results[Math.floor(Math.random() * data.results.length)]
        .backdrop_path
    );
  }, [data]);
  return (
    <div className="">
      <HeroBanner bg={background} />
    </div>
  );
};

export default Home;
