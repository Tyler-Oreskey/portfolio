import React from "react";

import classes from "./ButtonHoverEffectWithRightArrow.module.css";

import arrow from "../../../assets/images/icons/right-arrow.png";

const ButtonHoverEffectWithRightArrow = (props) => {
  return (
    <div className={classes.ButtonHoverEffectWithRightArrowContainer}>
      <button className={classes.ButtonHoverEffectWithRightArrow}>
        <span>
          {props.buttonText}
          <img src={arrow} alt="-->" />
        </span>
      </button>
    </div>
  );
};

export default ButtonHoverEffectWithRightArrow;
