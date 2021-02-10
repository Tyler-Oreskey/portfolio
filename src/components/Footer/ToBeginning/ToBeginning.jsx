import React from "react";

import doubleArrows from "../../../assets/images/icons/double-arrows.png";

import classes from "./ToBeginning.module.css";

const ToBeginning = () => (
  <div className={classes.ToBeginning}>
    <a
      className={classes.ArrowIcons}
      href="/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={doubleArrows} alt="^" />
    </a>
  </div>
);

export default ToBeginning;
