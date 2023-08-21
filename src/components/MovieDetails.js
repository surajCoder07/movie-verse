import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { img_Base_URL } from "../utils/constant";
import Genre from "./Genre";
import CircularRating from "./CircularRating";
import dayjs from "dayjs";
import { PlayIcon } from "../utils/PlayIcon";
import Cast from "./Cast";
import SimilarVideos from "./SimilarVideos";
import Carousel from "./Carousel";

const MovieDetails = () => {
  const { media_type, movieId } = useParams();
  const { fetchedData } = useFetch(media_type + "/" + movieId);
  const additionalData = useFetch(media_type + "/" + movieId + "/credits");
  const officialVideos = useFetch(media_type + "/" + movieId + "/videos");
  const similar = useFetch(media_type + "/" + movieId + "/similar");
  const recommendations = useFetch(
    media_type + "/" + movieId + "/recommendations"
  );

  const director = additionalData?.fetchedData?.crew?.find(
    (member) => member.job === "Director"
  );
  const writers = additionalData?.fetchedData?.crew?.filter(
    (member) => member.department === "Writing"
  );

  const year = new Date(
    fetchedData?.release_date || fetchedData?.last_air_date
  ).getFullYear();
  const genreIDs = [];
  fetchedData?.genres?.forEach((genre) => {
    genreIDs.push(genre.id);
  });

  return media_type === "undefined" ? (
    <h1 className="p-20 text-white">loading</h1>
  ) : (
    <div className="bg-primary-blue-3 ">
      <div className="max-sm:main-h-[400px] w-full  relative min-h-[500px]">
        <div className="absolute  z-[1]  inline-block h-full w-full ">
          <img
            src={img_Base_URL + fetchedData?.poster_path}
            alt=""
            className="object-cover h-full bg-center  w-full"
          />
          <span className="absolute -bottom-1 left-0 w-full h-[120%] bg-opacity-details   "></span>
        </div>
        <div className="z-[4] relative flex  max-sm:flex-col gap-10 pt-[100px] px-7 ">
          <div className="  flex-[0.6] max-sm:flex-none  max-sm:w-full w-full h-[460px]  relative  gap-5    ">
            <img
              src={img_Base_URL + fetchedData?.backdrop_path}
              alt=""
              className=" h-full  object-cover rounded-xl  "
            />
          </div>
          <div className=" flex-[1.4] ">
            <div>
              <h1 className="text-white font-medium text-3xl pb-3">
                {fetchedData?.title || fetchedData?.original_name} ({year})
              </h1>
              <i className="text-gray-400 font-medium text-xl py-2">
                {fetchedData?.tagline}
              </i>
              <Genre
                data={genreIDs}
                containerClass={"flex flex-wrap gap-3 py-2"}
              />
              <div className="py-2 flex gap-5 items-center">
                <CircularRating
                  rating={fetchedData?.vote_average}
                  containerClass={"w-[60px] py-2 rounded-full text-white"}
                  textColor={"white"}
                />
                <PlayIcon />
              </div>
            </div>
            <div>
              <h1 className="text-white font-medium text-2xl py-2">Overview</h1>
              <p className="text-white leading-6">{fetchedData?.overview}</p>
            </div>
            <div className="py-3 mt-3 text-white">
              Status :{" "}
              <span className="text-gray-400 mr-3"> {fetchedData?.status}</span>
              Release Date :{" "}
              <span className="text-gray-400 mr-3">
                {" "}
                {dayjs(fetchedData?.release_date).format("MMM D ,YYYY")}
              </span>
              Runtime :{" "}
              <span className="text-gray-400 mr-3">
                {" "}
                {fetchedData?.runtime}m
              </span>
            </div>
            <hr className="h-[1px] bg-gray-400    border-b-[1px] border-none" />
            <div className="py-3 mt-3 text-white">
              Director :{" "}
              <span className="text-gray-400 mr-3">{director?.name}</span>
            </div>
            <hr className="h-[1px] bg-gray-400    border-b-[1px] border-none" />
            <div className="py-3 mt-3 text-white leading-6">
              Writer :{" "}
              <span className="text-gray-400 mr-3">
                {writers?.map((writer) => writer?.name + " , ")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Cast cast={additionalData?.fetchedData?.cast} />
      <SimilarVideos videos={officialVideos?.fetchedData?.results} />
      <div className="p-5">
        <h1 className="text-3xl max-sm:text-xl  text-white">Similar Movies</h1>

        <Carousel data={similar?.fetchedData?.results} endpoint={movieId} />
      </div>
      <div className="p-5 ">
        <h1 className="text-3xl max-sm:text-xl  text-white">Recommendations</h1>

        <Carousel
          data={recommendations?.fetchedData?.results}
          endpoint={movieId}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
