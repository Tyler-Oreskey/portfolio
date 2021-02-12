import React from "react";

import classes from "./ButtonHoverEffect.module.css";

const ButtonHoverEffect = (props) => (
  <button
    style={{ color: props.textColor || "black" }}
    onClick={props.clicked}
    className={classes.ButtonHoverEffect}
    type={props.buttonType || "button"}
  >
    <span>{props.buttonText}</span>
  </button>
);

export default ButtonHoverEffect;
