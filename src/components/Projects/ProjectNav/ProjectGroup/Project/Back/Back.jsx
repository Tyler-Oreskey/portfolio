import React from "react";

import ButtonHoverEffect from "../../../../../../UI/Buttons/ButtonHoverEffect/ButtonHoverEffect";

import classes from "./Back.module.css";

const Back = (props) => {
  let { projectName, techs } = props;

  const formattedTechs = techs
    .map((tech, index) => {
      if (index === techs.length - 1) {
        return `and ${tech}.`;
      }
      return tech;
    })
    .join(", ")
    .replace(/,([^,]*)$/, "$1");

  return (
    <div className={classes.Back}>
      <h1>{projectName}</h1>
      <div className={classes.ToggleModalButton}>
        <ButtonHoverEffect
          clicked={() => props.clickShowModal({ ...props, formattedTechs })}
          buttonText="LEARN MORE"
        />
      </div>
    </div>
  );
};

export default Back;
