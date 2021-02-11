import React, { useState, useEffect, useRef, useCallback } from "react";

import CarouselIndicators from "./CarouselIndicators/CarouselIndicators";
import CarouselArrows from "./CarouselArrows/CarouselArrows";
import CarouselAnimation from "../../../UI/Animations/CarouselAnimation/CarouselAnimation";
import carouselData from "../../../displayData/carousel";

import classes from "./Carousel.module.css";

const startingSlideTimer = 8000;
const longerSlideTimer = 12000;

const Carousel = () => {
  const [carouselItems] = useState(carouselData);
  const [slideTimer, setSlideTimer] = useState(startingSlideTimer);
  const [slideIndex, setSlideIndex] = useState(0);
  const [shouldSlideRight, setShouldSlideRight] = useState(true);
  const [divWidth, setDivWidth] = useState(0);
  const [moreTime, setMoreTime] = useState(false);
  const divRef = useRef(null);

  // set width of carousel div to ref.
  useEffect(() => {
    updateDivWidth();
    window.addEventListener("resize", updateDivWidth);
    return () => window.removeEventListener("resize", updateDivWidth);
  }, []);

  const updateDivWidth = () => setDivWidth(divRef.current?.offsetWidth);

  const updateSlideTimer = useCallback(() => {
    if (moreTime) {
      setSlideTimer(longerSlideTimer);
    } else {
      setSlideTimer(startingSlideTimer);
    }
  }, [moreTime]);

  const updateSlideDirection = useCallback(() => {
    if (!shouldSlideRight) {
      setShouldSlideRight(true);
    }
  }, [shouldSlideRight]);

  const updateSlideIndex = useCallback(() => {
    setSlideIndex((slideIndex) => (slideIndex + 1) % carouselItems.length);
  }, [carouselItems.length]);

  // keep track of slide timer and proper slide direction.
  useEffect(() => {
    updateSlideTimer();
    updateSlideDirection();
    const interval = setInterval(() => {
      updateSlideIndex();
      setMoreTime(false);
    }, slideTimer);
    return () => clearInterval(interval);
  }, [
    slideIndex,
    carouselItems.length,
    slideTimer,
    moreTime,
    updateSlideTimer,
    updateSlideDirection,
    updateSlideIndex,
  ]);

  // go back one slide.
  const goBack = () => {
    setMoreTime(true);
    setShouldSlideRight(false);
    if (slideIndex === 0) {
      setSlideIndex(carouselItems.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  // go forward one slide.
  const goForward = () => {
    setShouldSlideRight(true);
    if (slideIndex === carouselItems.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  // select a specific slide.
  const selectIndex = (index) => {
    setMoreTime(true);
    if (index > slideIndex) {
      setShouldSlideRight(true);
    } else {
      setShouldSlideRight(false);
    }
    setSlideIndex(index);
  };

  return (
    <div
      ref={divRef}
      className={`${classes.Carousel} carousel carousel-dark slide`}
      data-bs-ride="carousel"
    >
      <div className={`${classes.CarouselInner} carousel-inner`}>
        <CarouselAnimation
          carouselItems={carouselItems}
          slideIndex={slideIndex}
          shouldSlideRight={shouldSlideRight}
          divWidth={divWidth}
        />
      </div>
      <CarouselIndicators
        carouselLength={carouselItems.length}
        currentSlide={slideIndex}
        selected={selectIndex}
      />
      <CarouselArrows goForward={goForward} goBack={goBack} />
    </div>
  );
};

export default Carousel;
