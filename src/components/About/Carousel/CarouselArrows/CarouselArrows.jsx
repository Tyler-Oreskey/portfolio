import React from "react";

import classes from "./CarouselArrows.module.css";
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";

const CarouselArrows = (props) => {
  /* eslint-disable jsx-a11y/anchor-is-valid */
  return (
    <Auxiliary>
      <a
        className={`${classes.PrevButton} carousel-control-prev`}
        role="button"
        onClick={props.goBack}
      >
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a
        className={`${classes.NextButton} carousel-control-next`}
        role="button"
        onClick={props.goForward}
      >
        <span className="carousel-control-next-icon"></span>
      </a>
    </Auxiliary>
  );
};

export default CarouselArrows;
