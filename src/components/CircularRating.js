import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularRating = ({ rating, containerClass, textColor }) => {
  return (
    <div className={containerClass}>
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating?.toFixed(1)}
        styles={{
          path: {
            stroke: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
          },
          text: {
            // Text color
            fill: textColor,
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
