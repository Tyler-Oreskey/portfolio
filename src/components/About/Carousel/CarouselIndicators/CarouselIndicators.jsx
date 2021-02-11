import React from "react";

import classes from "./CarouselIndicators.module.css";

const CarouselIndicators = (props) => {
  const carouselIndicators = Array(props.carouselLength)
    .fill()
    .map((_, index) => {
      const indicatorBackground =
        props.currentSlide === index
          ? { backgroundColor: "black" }
          : { backgroundColor: "#696969" };

      return (
        <li
          key={index}
          style={indicatorBackground}
          onClick={() => props.selected(index)}
        ></li>
      );
    });

  return (
    <div className={classes.CarouselIndicators}>
      <ol className={`carousel-indicators`}>{carouselIndicators}</ol>
    </div>
  );
};

export default CarouselIndicators;
