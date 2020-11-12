/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import CarouselItem from "./CarouselItem/CarouselItem";

const Carousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [slideTimer, setSlideTimer] = useState(5000);
  let [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const allCarouselItems = getCarouselItems().map((item, index) => {
      return (
        <div key={index}>
          <CarouselItem content={item.content} />
        </div>
      );
    });
    setCarouselItems(allCarouselItems);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex >= carouselItems.length - 1) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }, slideTimer);
    return () => clearInterval(interval);
  }, [slideIndex, carouselItems]);

  return <div>{carouselItems[slideIndex]}</div>;
};

const getCarouselItems = () => [
  {
    id: 1,
    content: "yeetus 0",
  },
  {
    id: 2,
    content: "fetus 1",
  },
  {
    id: 3,
    content: "deleteus 2",
  },
  {
    id: 4,
    content: "ddd",
  },
  {
    id: 5,
    content: "sdsfddsf 2",
  },
];

export default Carousel;
