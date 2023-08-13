import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = (props) => {
  // const {src  class} =props

  return (
    <LazyLoadImage
      alt=""
      effect="opacity"
      className={props.class}
      src={"https://image.tmdb.org/t/p/original" + props.src} // use normal <img> attributes as props
      height={"100%"}
      width={"100%"}
    />
  );
};

export default Img;
