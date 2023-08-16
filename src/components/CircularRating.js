import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularRating = ({ rating }) => {
  return (
    <div className="absolute bottom-[-10px]   left-1 max-sm:w-[30px] w-[50px] bg-white rounded-full">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating.toFixed(1)}
        styles={{
          path: {
            stroke: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          },
          text: {
            // Text color
            fill: "black",
            // Text size
            fontSize: "25px",
            fontWeight: "bold",
          },
        }}
      ></CircularProgressbar>
    </div>
  );
};

export default CircularRating;
