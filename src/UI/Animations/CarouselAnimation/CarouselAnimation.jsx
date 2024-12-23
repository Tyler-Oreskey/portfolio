import React from "react";
import classes from "./CarouselAnimation.module.css";

const CarouselAnimation = ({ carouselItems, slideIndex, shouldSlideRight }) => {
  return (
    <div
      className={classes.Slider}
      style={{
        transform: `translateX(${-slideIndex * 100}%)`,
        transition: shouldSlideRight ? "transform 0.5s ease" : "transform 0.5s ease-out",
      }}
    >
      {carouselItems.map((item, index) => (
        <div className={classes.Slide} key={index}>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default CarouselAnimation;
