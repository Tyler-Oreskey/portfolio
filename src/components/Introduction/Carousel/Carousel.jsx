// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { animated, useTransition } from "react-spring";

import classes from "./Carousel.module.css";

const Carousel = () => {
  const [carouselItems] = useState([
    { content: "yeetus 0", id: 0 },
    { content: "fetus 1", id: 1 },
    { content: "destroyer", id: 2 },
    { content: "ddd", id: 3 },
    { content: "sdsfddsf 2", id: 4 },
  ]);
  const [slideTimer, setSlideTimer] = useState(5000);
  let [slideIndex, setSlideIndex] = useState(0);

  const fadingText = useTransition(
    carouselItems[slideIndex],
    (carouselItem) => carouselItem.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { tension: 220, friction: 120 },
    }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((slideIndex) => (slideIndex + 1) % carouselItems.length);
    }, slideTimer);
    return () => clearInterval(interval);
  }, [slideIndex, carouselItems, slideTimer]);

  const animatedItems = fadingText.map(({ item, props, key }) => (
    <animated.div key={key} style={{ ...props, position: "absolute" }}>
      <p>{item.content}</p>
    </animated.div>
  ));

  return animatedItems;
};
export default Carousel;
