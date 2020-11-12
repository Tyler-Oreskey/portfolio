/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSpring, animated, useTrail, useTransition } from "react-spring";

import classes from "./Carousel.module.css";

const Carousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [slideTimer, setSlideTimer] = useState(5000);
  let [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const allCarouselItems = getCarouselItems();
    setCarouselItems(allCarouselItems);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((slideIndex) => (slideIndex + 1) % carouselItems.length);
    }, slideTimer);
    return () => clearInterval(interval);
  }, [slideIndex, carouselItems]);

  return <div className={classes.Carousel}>{carouselItems[slideIndex]}</div>;
};

const getCarouselItems = () => [
  "yeetus 0",
  "fetus 1",
  "deleteus 2",
  "ddd",
  "sdsfddsf 2",
];

export default Carousel;
