import React, { useState } from "react";
import classes from "./Project.module.css";

import ButtonHoverEffect from "../../../UI/Buttons/ButtonHoverEffect/ButtonHoverEffect";

export default function Project({ project, clickShowModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classes.Card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
      <div className={classes.Back}>
        <h1>{project.name}</h1>
        <div className={classes.ToggleModalButton}>
          <ButtonHoverEffect clicked={() => clickShowModal(project)} buttonText="LEARN MORE" />
        </div>
      </div>
      ) : (
        <div
          className={classes.Front}
          style={{ backgroundImage: `url(${project.image})` }}
        >
      </div>
      )}
    </div>
  );
}
