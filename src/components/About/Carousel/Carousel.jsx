import React, { useState, useEffect } from "react";
import { animated, useTransition } from "react-spring";

const Carousel = () => {
  const [carouselItems] = useState([
    "Work in the software development field on challenging and interesting projects. Ideally, utilizing my skills and passion for analyzing data and rapidly creating robust valuable web solutions driving customer adoption and increased profit.",
    "Collaborate with fellow developers to construct and scale complex Real-Time applications that make use of large datasets while maintaining excellent user experience.",
    "Acquire and apply new technologies to improve cost, productivity and application performance. Technology is advancing everyday, we must do the same.",
  ]);

  const [slideTimer] = useState(8000);
  let [slideIndex, setSlideIndex] = useState(0);

  const fadingText = useTransition(
    carouselItems[slideIndex],
    (item) => carouselItems.indexOf(item),
    {
      from: {
        transform: `translate3d(-100%,0,0)`,
        opacity: 0
      },
      enter: {
        transform: "translate3d(0%,0,0)",
        opacity: 1
      },
      leave: {
        transform: `translate3d(100%,0,0)`,
        opacity: 0,
        position: "absolute"
      },
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
      key={key}
      style={props}
    >
      <p>{item}</p>
    </animated.div>
  ));

  return animatedItems;
};
export default Carousel;
