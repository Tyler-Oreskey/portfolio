import React from "react";

import doubleArrows from "../../../assets/images/icons/double-arrows.png";

import classes from "./ScrollToTop.module.css";

const ScrollToTop = (props) => (
  <div className={classes.ScrollToTop} onClick={props.clicked}>
    <div className={classes.ArrowIcons}>
      <img src={doubleArrows} alt="^" />
    </div>
  </div>
);

export default ScrollToTop;
