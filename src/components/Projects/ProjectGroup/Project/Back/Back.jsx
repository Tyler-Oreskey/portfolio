import React from "react";

import ButtonHoverEffect from "../../../../../UI/Buttons/ButtonHoverEffect/ButtonHoverEffect";

import classes from "./Back.module.css";

export default function(props) {
  const { name } = props;

  return (
    <div className={classes.Back}>
      <h1>{name}</h1>
      <div className={classes.ToggleModalButton}>
        <ButtonHoverEffect clicked={props.clickShowModal} buttonText="LEARN MORE" />
      </div>
    </div>
  );
};
