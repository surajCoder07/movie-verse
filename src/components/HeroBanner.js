import React from "react";
import Img from "./Img";

const HeroBanner = ({ bg }) => {
  return (
    <div className="max-sm:h-[400px] w-full  relative h-[500px]">
      <span className="absolute top-0 left-0 w-full h-[250px] bg-opacity-top rotate-180"></span>

      <div className="absolute bottom-0 top-0 w-[100%] min-w-full    -z-[0] object-center ">
        <Img src={bg} class=" h-full  w-full blur-0 " />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center h-full w-full  px-2 ">
        <div className="flex flex-col items-center gap-2 max-sm:min-w-full max-w-[500px] ">
          <h1 className="max-sm:text-5xl text-8xl  font-bold text-white drop-shadow-2xl">
            Welcome
          </h1>
          <p className="text-center text-white font-medium leading-6 text-2xl max-sm:text-lg drop-shadow-2xl ">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <div className="flex max-sm:h-[40px] h-[50px]  max-sm:min-w-full min-w-[500px] max-sm:px-4 z-30">
          <input
            type="text"
            placeholder="search "
            className="focus:outline-none px-4 h-full text-xl rounded-l-full w-full"
          />
          <button className=" bg-gradient text-white rounded-r-full px-2  text-xl duration-150 active:outline-none">
            search
          </button>
        </div>
      </div>
      <span className="absolute -bottom-1 left-0 w-full h-[250px] bg-opacity-bottom  "></span>
    </div>
  );
};

export default HeroBanner;
