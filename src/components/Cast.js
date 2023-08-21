import React from "react";
import { img_Base_URL } from "../utils/constant";
import no_picture from "../assets/avatar.png";

const Cast = ({ cast }) => {
  return (
    <>
      <h1 className="text-3xl max-sm:text-xl text-white px-5 py-5 ">
        Top Cast
      </h1>
      <div className=" text-white px-5 min-h-[250px]  overflow-x-scroll  scrollbar-hide">
        <div className="flex  gap-5">
          {cast?.map((item) => {
            const picture = item?.profile_path
              ? img_Base_URL + item?.profile_path
              : no_picture;
            return (
              <div
                key={item.id}
                className="w-[160px] h-[160px] flex-shrink-0 p-1"
              >
                <img
                  src={picture}
                  alt=""
                  className="w-full h-full rounded-full object-cover  bg-center"
                />
                <div className="flex justify-center py-2 flex-col gap-2">
                  <span className="max-sm:text-sm text-center">
                    {item?.name}
                  </span>
                  <span className="max-sm:text-sm text-center text-gray-400">
                    {item?.character}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cast;
