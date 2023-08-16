import React, { useEffect, useRef, useState } from "react";
import { img_Base_URL } from "../utils/constant";
import PosterFallback from "../assets/no-poster.png";
import {
  PiArrowCircleLeftLight,
  PiArrowCircleRightLight,
} from "react-icons/pi";
import dayjs from "dayjs";
import CircularRating from "./CircularRating";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import fetchDataFromApi from "../utils/fetchDataFromApi";
import Gener from "./Gener";

const ShimmerCard = () => {
  return (
    <Skeleton
      containerClassName="flex gap-7   "
      className="flex-shrink-0"
      baseColor="#041226"
      duration={5}
      direction="ltr"
      highlightColor=""
      count={4}
      width={"250px"}
      height={"300px"}
    />
  );
};

const Carousel = ({ data }) => {
  const carouselContainer = useRef();

  const navigate = (direction) => {
    const container = carouselContainer.current;
    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth - 1)
        : container.scrollLeft + (container.offsetWidth - 1);
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  console.log(data);
  return (
    <div className=" mt-2 relative py-2">
      <PiArrowCircleLeftLight
        size={"3em"}
        className="absolute top-[40%]  left-0 z-50 hover:scale-105 duration-500 max-sm:hidden"
        onClick={() => navigate("left")}
      />
      <PiArrowCircleRightLight
        size={"3em"}
        className="absolute top-[40%] right-0 z-50 hover:scale-105 duration-500 max-sm:hidden"
        onClick={() => navigate("right")}
      />

      <div
        ref={carouselContainer}
        className="flex overflow-hidden scrollbar-hide max-sm:overflow-x-scroll  gap-5 max-sm:gap-4 scroll-smooth"
      >
        {data !== undefined ? (
          data?.map((card) => {
            const poster_URL = card?.poster_path
              ? img_Base_URL + card.poster_path
              : PosterFallback;
            return (
              <div
                key={card.id}
                className=" max-sm:w-[124px] w-[210px] relative  gap-5 flex-shrink-0  flex flex-col duration-700 hover:scale-105 "
              >
                <div className="relative">
                  <img
                    src={poster_URL}
                    alt=""
                    className={
                      " object-center   relative object-cover rounded-xl"
                    }
                  />
                  <CircularRating rating={card?.vote_average} />
                  <Gener data={card.genre_ids.slice(0, 2)} />
                </div>
                <div className="py-2 flex flex-col gap-3">
                  <span className="text-white font-medium text-lg max-sm:text-sm">
                    {card?.title?.length > 20
                      ? card?.title?.slice(0, 20) + "..."
                      : card?.title || card.name}
                  </span>
                  <span className="text-gray-400 max-sm:text-xs">
                    {dayjs(card?.release_date).format("MMM D ,YYYY")}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <ShimmerCard />
        )}
      </div>
    </div>
  );
};

export default Carousel;
