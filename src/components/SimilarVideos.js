import React from "react";

const SimilarVideos = ({ videos }) => {
  console.log(videos);
  return (
    <div className="px-5 py-5">
      <h1 className="text-3xl max-sm:text-xl text-white py-5">
        Official Videos
      </h1>
      <div className="flex gap-5 overflow-x-scroll scrollbar-hide">
        {videos?.map((video) => {
          return (
            <div className="flex-shrink-0">
              <div className="flex flex-col gap-4 max-w-[250px]">
                <img
                  src={`https://img.youtube.com/vi/${video?.key}/mqdefault.jpg`}
                  alt=""
                  className="w-[250px] h-[150px] object-cover rounded-md"
                />
                <span className="text-xl  max-sm:text-sm text-white ">
                  {video?.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarVideos;
