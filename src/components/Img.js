import React from "react";
import { img_Base_URL } from "../utils/constant";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = (props) => {
  return (
    <LazyLoadImage
      width={"100%"}
      height={"100%"}
      alt=""
      effect="opacity"
      className={props.class}
      src={img_Base_URL + props.src} // use normal <img> attributes as props
    />
  );
};

export default Img;
