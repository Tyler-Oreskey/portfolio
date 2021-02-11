import React from "react";

import ButtonHoverEffect from "../../../../../UI/Buttons/ButtonHoverEffect/ButtonHoverEffect";

import classes from "./Back.module.css";

const Back = (props) => {
  const formattedTechs = props.techs
    .map((tech, index) => {
      if (index === props.techs.length - 1) {
        return `and ${tech}.`;
      }
      return tech;
    })
    .join(", ")
    .replace(/,([^,]*)$/, "$1");

  const projectLinks = Object.entries(props.projectLinks).map(
    ([key, value], index) => (
      <a target="_blank" rel="noopener noreferrer" key={index} href={value}>
        {key.toUpperCase()}
      </a>
    )
  );

  return (
    <div className={classes.Back}>
      <h1>{props.projectName}</h1>
      <div className={classes.ToggleModalButton}>
        <ButtonHoverEffect
          clicked={() =>
            props.clickShowModal({ ...props, formattedTechs, projectLinks })
          }
          buttonText="LEARN MORE"
        />
      </div>
    </div>
  );
};

export default Back;
