import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { animated, useTransition } from "react-spring";

import CarouselIndicators from "./CarouselIndicators/CarouselIndicators";
import CarouselArrows from "./CarouselArrows/CarouselArrows";

import classes from "./Carousel.module.css";

const Carousel = () => {
  const [carouselItems] = useState([
    "Work in the software development field on challenging and interesting projects. Ideally, utilizing my skills and passion for analyzing data and rapidly creating robust valuable web solutions driving customer adoption and increased profit.",
    "Collaborate with fellow developers to construct and scale complex Real-Time applications that make use of large datasets while maintaining excellent user experience. Expeditiously create optimal solutions for demanding tasks.",
    "Continually acquire and apply brand-new or leading technologies to improve cost, productivity and application performance. Technology is advancing everyday along with my passion and curiosity for web developmnent.",
  ]);

  const startingSlideTimer = 8000;
  const longerSlideTimer = 12000;
  const [slideTimer, setSlideTimer] = useState(startingSlideTimer);
  let [slideIndex, setSlideIndex] = useState(0);
  let [slideDirection, setSlideDirection] = useState("right");
  const [divWidth, setDivWidth] = useState(0);
  const [moreTime, setMoreTime] = useState(false);
  const divRef = useRef(null);

  // set width of carousel div to ref.
  useEffect(() => {
    setDivWidth(divRef.current?.offsetWidth);
  }, []);

  // update carousel div width on page resize.
  useLayoutEffect(() => {
    const updateDivWidth = () => setDivWidth(divRef.current?.offsetWidth);
    window.addEventListener("resize", updateDivWidth);
    // unmount event listener to prevent memory leaks.
    return () => window.removeEventListener("resize", updateDivWidth);
  }, []);

  // keep track of slide timer and proper slide direction.
  useEffect(() => {
    moreTime
      ? setSlideTimer(longerSlideTimer)
      : setSlideTimer(startingSlideTimer);

    setSlideDirection("right");

    const interval = setInterval(() => {
      setSlideIndex((slideIndex) => (slideIndex + 1) % carouselItems.length);
      setMoreTime(false);
    }, slideTimer);
    return () => clearInterval(interval);
  }, [slideIndex, carouselItems.length, slideTimer, moreTime]);

  // go back one slide.
  const goBack = () => {
    setMoreTime(true);
    setSlideDirection("left");
    if (slideIndex === 0) {
      setSlideIndex(carouselItems.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  // go forward one slide.
  const goForward = () => {
    setMoreTime(true);
    setSlideDirection("right");
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
      setSlideDirection("right");
    } else {
      setSlideDirection("left");
    }
    setSlideIndex(index);
  };

  // transition animation.
  const swipeText = useTransition(
    carouselItems[slideIndex],
    (item) => carouselItems.indexOf(item),
    {
      from: {
        transform: `translate3d(${
          slideDirection === "right" ? "-100%" : "100%"
        },0,0)`,
        opacity: 0,
      },
      enter: {
        transform: "translate3d(0%,0,0)",
        opacity: 1,
      },
      leave: {
        transform: `translate3d(${
          slideDirection === "right" ? "100%" : "-100%"
        },0,0)`,
        opacity: 0,
        width: divWidth,
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

  return (
    <div
      ref={divRef}
      className={`${classes.Carousel} carousel carousel-dark slide`}
      data-bs-ride="carousel"
    >
      <div className={`${classes.CarouselInner} carousel-inner`}>
        {animatedItems}
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
