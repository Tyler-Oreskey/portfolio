import React, { useState, useEffect } from "react";
import { animated, useTransition } from "react-spring";

import classes from "./Carousel.module.css";

const Carousel = () => {
  const [carouselItems] = useState([
    "yeetus 0 jhgasdjfgakjhsdfhgujyasdfkjhyguasgdkhjfggasdkhjfgaksjhdfgakjhsdgfkhjassadfasdfasdfasdfasdfasfjkhfasdkjlfhajskldfhajklsdhfljkasdhlfjkashdfjk",
    "fetus 1",
    "destroyer",
    "ddd",
    "sdsfddsf 2",
  ]);
  const [slideTimer, setSlideTimer] = useState(15000);
  let [slideIndex, setSlideIndex] = useState(0);

  const fadingText = useTransition(
    carouselItems[slideIndex],
    (item) => carouselItems.indexOf(item),
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
    <animated.div
      className={classes.Carousel}
      key={key}
      style={{ ...props, position: "absolute" }}
    >
      {item}
    </animated.div>
  ));

  return animatedItems;
};
export default Carousel;
