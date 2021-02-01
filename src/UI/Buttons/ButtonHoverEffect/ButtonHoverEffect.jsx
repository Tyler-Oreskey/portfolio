import React from "react";

import classes from "./ButtonHoverEffect.module.css";

const ButtonHoverEffect = (props) => (
  <button onClick={props.clicked} className={classes.ButtonHoverEffect}>
    <span>{props.buttonText}</span>
  </button>
);

export default ButtonHoverEffect;
