import React from "react";

import classes from "./ButtonHoverExpand.module.css";

const ButtonHoverExpand = (props) => (
  <button className={classes.ButtonHoverExpand} onClick={props.clicked}>
    <img src={props.image} alt={props.alt} />
  </button>
);

export default ButtonHoverExpand;
