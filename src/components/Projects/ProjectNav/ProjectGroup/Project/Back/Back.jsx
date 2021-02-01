import React from "react";

import ButtonHoverEffect from "../../../../../../UI/Buttons/ButtonHoverEffect/ButtonHoverEffect";

import classes from "./Back.module.css";

const Back = (props) => {
  const { projectName } = props;
  const toggleModal = () => {
    console.log("hello");
  };
  return (
    <div className={classes.Back}>
      <h1>{projectName}</h1>
      <div className={classes.ToggleModalButton}>
        <ButtonHoverEffect clicked={toggleModal} buttonText="LEARN MORE" />
      </div>
    </div>
  );
};

export default Back;
