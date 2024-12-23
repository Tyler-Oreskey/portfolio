import React, { useState, useEffect, useRef } from "react";
import CarouselIndicators from "./CarouselIndicators/CarouselIndicators";
import CarouselArrows from "./CarouselArrows/CarouselArrows";
import carouselData from "../../../displayData/carousel";
import classes from "./Carousel.module.css";

const SLIDE_TIMER = 8000;

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideTimerRef = useRef(null);

  const startTimer = () => {
    slideTimerRef.current = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, SLIDE_TIMER);
  };

  const resetTimer = () => {
    clearInterval(slideTimerRef.current);
    startTimer();
  };

  // Initialize the slide timer
  useEffect(() => {
    startTimer();
    return () => clearInterval(slideTimerRef.current); // Cleanup on unmount
  }, []);

  // Navigate backward
  const goBack = () => {
    resetTimer(); // Reset the timer
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  // Navigate forward
  const goForward = () => {
    resetTimer(); // Reset the timer
    setSlideIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  // Select a specific slide
  const selectSlide = (index) => {
    resetTimer(); // Reset the timer
    setSlideIndex(index);
  };

  return (
    <div className={`${classes.Carousel} carousel carousel-dark slide`}>
      <div className={`${classes.CarouselInner}`}>
        <div className={classes.Slide}>
          <p>{carouselData[slideIndex]}</p>
        </div>
      </div>
      <CarouselIndicators
        carouselLength={carouselData.length}
        currentSlide={slideIndex}
        selected={selectSlide}
      />
      <CarouselArrows goForward={goForward} goBack={goBack} />
    </div>
  );
};

export default Carousel;
