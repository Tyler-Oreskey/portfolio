import React, { useState, useEffect } from "react";
import { animated, useTransition } from "react-spring";

import classes from "./Carousel.module.css";

const Carousel = () => {
  const [carouselItems] = useState([
    "yeetus 0 jhg asdjfg akjhsd  fkjhy uasgdkhjfggasd khjfga ksjhdfgakjhs dgfk hjassadf asdfa sdfasdfa sdfasf jkhf asdkjlfh ajskldf hajklsdjka shdf jk",
    "yeetus 1 jhg asdjfg akjhsd fhgujyasd fkjhy uasghs dgfk hjassadf asdfa sdfasdfa sdfasf jkhf asdkjlfh ajskldf hajklsd hfljka sdhlfjka shdf jk",
    "yeetus 2 jhg asdjfg akjhsd fhgujyasd fkjhy uas sdfasf jkhf asdkjlfh ajskldf hajklsd hfljka sdhlfjka shdf jk",
    "yeetus 3 jhg asdjfg akjhsd fhgujyasd fkjhy uasgdkhjfggasd khjfga ksjhdfgakjhs dgfk khf asdkjlfh ajskldf hajklsd hfljka sdhlfjka shdf jk",
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
      <p>{item}</p>
    </animated.div>
  ));

  return animatedItems;
};
export default Carousel;
