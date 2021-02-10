import React from "react";

import arrow from "../../../assets/images/icons/right-arrow.png";

import classes from "./ButtonHoverEffectWithRightArrow.module.css";

const ButtonHoverEffectWithRightArrow = (props) => (
  <div className={classes.ButtonHoverEffectWithRightArrowContainer}>
    <button
      type={props.buttonType || "button"}
      className={classes.ButtonHoverEffectWithRightArrow}
    >
      <span>
        {props.buttonText}
        <img src={arrow} alt="->" />
      </span>
    </button>
  </div>
);

export default ButtonHoverEffectWithRightArrow;
