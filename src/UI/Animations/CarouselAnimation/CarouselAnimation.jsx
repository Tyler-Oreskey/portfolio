import React from "react";
import { animated, useTransition } from "react-spring";

const CarouselAnimation = (props) => {
  // transition animation.
  const swipeText = useTransition(
    props.carouselItems[props.slideIndex],
    (item) => props.carouselItems.indexOf(item),
    {
      from: {
        transform: `translate3d(${
          props.shouldSlideRight ? "-100%" : "100%"
        },0,0)`,
        opacity: 0,
      },
      enter: {
        transform: "translate3d(0%,0,0)",
        opacity: 1,
      },
      leave: {
        transform: `translate3d(${
          props.shouldSlideRight ? "100%" : "-100%"
        },0,0)`,
        opacity: 0,
        width: props.divWidth,
        position: "absolute",
      },
    }
  );

  // apply transition animation to all carousel items.
  const animatedItems = swipeText.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <p>{item}</p>
    </animated.div>
  ));
  return animatedItems;
};

export default CarouselAnimation;
